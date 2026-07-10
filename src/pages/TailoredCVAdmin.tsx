import { useEffect, useState } from "react";
import { Navigate, Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useIsAdmin } from "@/hooks/use-is-admin";
import { toast } from "sonner";
import Seo from "@/components/Seo";
import { Upload, Link2, Trash2, Loader2, ArrowLeft, LogOut } from "lucide-react";
import mammoth from "mammoth";

// pdfjs setup for browser
import * as pdfjsLib from "pdfjs-dist";
// @ts-expect-error worker URL import
import pdfjsWorker from "pdfjs-dist/build/pdf.worker.min.mjs?url";
pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorker;

type Persona = "ai-advisor" | "gcc-advisor" | "coe-champion" | "digital-transformation";
type SourceType = "cv" | "cover_letter" | "testimonial" | "book" | "publication" | "other";

const PERSONAS: { id: Persona; label: string }[] = [
  { id: "ai-advisor", label: "AI Advisor" },
  { id: "gcc-advisor", label: "GCC Advisor" },
  { id: "coe-champion", label: "CoE Champion" },
  { id: "digital-transformation", label: "DX Executive" },
];

interface DocRow { id: string; title: string; source_type: string; persona_tags: string[]; char_count: number; created_at: string }
interface UrlRow { id: string; url: string; title: string | null; persona_tags: string[]; char_count: number; created_at: string }

export default function TailoredCVAdmin() {
  const { isAdmin, loading, user } = useIsAdmin();
  const [docs, setDocs] = useState<DocRow[]>([]);
  const [urls, setUrls] = useState<UrlRow[]>([]);
  const [busy, setBusy] = useState(false);
  const [uploadTitle, setUploadTitle] = useState("");
  const [uploadType, setUploadType] = useState<SourceType>("cv");
  const [uploadTags, setUploadTags] = useState<Persona[]>([]);
  const [urlInput, setUrlInput] = useState("");
  const [urlTitle, setUrlTitle] = useState("");
  const [urlTags, setUrlTags] = useState<Persona[]>([]);

  useEffect(() => { if (isAdmin) reload(); }, [isAdmin]);

  const reload = async () => {
    const [d, u] = await Promise.all([
      supabase.from("corpus_documents").select("id, title, source_type, persona_tags, char_count, created_at").order("created_at", { ascending: false }),
      supabase.from("corpus_urls").select("id, url, title, persona_tags, char_count, created_at").order("created_at", { ascending: false }),
    ]);
    setDocs(d.data ?? []);
    setUrls(u.data ?? []);
  };

  const parseFile = async (file: File): Promise<string> => {
    const name = file.name.toLowerCase();
    if (name.endsWith(".pdf")) {
      const buf = await file.arrayBuffer();
      const pdf = await pdfjsLib.getDocument({ data: buf }).promise;
      let text = "";
      for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        const content = await page.getTextContent();
        text += content.items.map((it: { str?: string }) => it.str ?? "").join(" ") + "\n\n";
      }
      return text;
    }
    if (name.endsWith(".docx")) {
      const buf = await file.arrayBuffer();
      const res = await mammoth.extractRawText({ arrayBuffer: buf });
      return res.value;
    }
    if (name.endsWith(".txt") || name.endsWith(".md")) return await file.text();
    throw new Error("Unsupported file type. Upload PDF, DOCX, TXT or MD.");
  };

  const togglePersona = (list: Persona[], setList: (v: Persona[]) => void, p: Persona) =>
    setList(list.includes(p) ? list.filter(x => x !== p) : [...list, p]);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !user) return;
    setBusy(true);
    try {
      const text = (await parseFile(file)).trim();
      if (!text) throw new Error("No text extracted from file.");
      const filePath = `${user.id}/${Date.now()}-${file.name}`;
      const up = await supabase.storage.from("corpus").upload(filePath, file);
      if (up.error) throw up.error;
      const ins = await supabase.from("corpus_documents").insert({
        owner_id: user.id,
        source_type: uploadType,
        persona_tags: uploadTags,
        title: uploadTitle.trim() || file.name,
        file_path: filePath,
        parsed_text: text,
        char_count: text.length,
      });
      if (ins.error) throw ins.error;
      toast.success(`Added "${uploadTitle || file.name}" (${text.length.toLocaleString()} chars)`);
      setUploadTitle("");
      setUploadTags([]);
      e.target.value = "";
      reload();
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Upload failed");
    } finally { setBusy(false); }
  };

  const addUrl = async () => {
    if (!urlInput.trim()) return;
    setBusy(true);
    try {
      const { data, error } = await supabase.functions.invoke("ingest-url", {
        body: { url: urlInput.trim(), title: urlTitle.trim() || undefined, persona_tags: urlTags },
      });
      if (error) throw error;
      if (data?.error) throw new Error(data.error);
      toast.success("URL ingested.");
      setUrlInput(""); setUrlTitle(""); setUrlTags([]);
      reload();
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Failed");
    } finally { setBusy(false); }
  };

  const deleteDoc = async (id: string, filePath?: string) => {
    if (!confirm("Delete this document?")) return;
    await supabase.from("corpus_documents").delete().eq("id", id);
    if (filePath) await supabase.storage.from("corpus").remove([filePath]);
    reload();
  };
  const deleteUrl = async (id: string) => {
    if (!confirm("Delete this URL?")) return;
    await supabase.from("corpus_urls").delete().eq("id", id);
    reload();
  };

  const signOut = async () => { await supabase.auth.signOut(); window.location.href = "/"; };

  if (loading) return <div className="min-h-screen flex items-center justify-center"><Loader2 className="w-6 h-6 animate-spin" /></div>;
  if (!user) return <Navigate to="/auth" replace />;
  if (!isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-md text-center">
          <h1 className="font-serif text-2xl text-foreground mb-3">Admin only</h1>
          <p className="text-sm text-muted-foreground mb-6">Your account is signed in but not an admin. Ask Kalilur to grant you the admin role, or return to the public generator.</p>
          <Link to="/tailored-cv" className="inline-flex items-center gap-2 px-4 py-2 border border-border rounded-lg text-sm hover:border-primary/50"><ArrowLeft className="w-4 h-4" /> Back to generator</Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Seo title="Corpus manager — Tailored CV" description="Manage the source material feeding the tailored CV generator." path="/tailored-cv/admin" />
      <div className="min-h-screen bg-background py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-8 gap-4 flex-wrap">
            <div>
              <Link to="/tailored-cv" className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-primary mb-2"><ArrowLeft className="w-3 h-3" /> back to generator</Link>
              <h1 className="font-serif text-3xl text-foreground">Corpus manager</h1>
              <p className="text-sm text-muted-foreground mt-1">Upload files and add URLs. Tag with personas so the generator prioritises the right sources.</p>
            </div>
            <button onClick={signOut} className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary"><LogOut className="w-3 h-3" /> sign out</button>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <div className="p-5 bg-card border border-border rounded-xl">
              <h2 className="font-serif text-lg text-foreground mb-3 flex items-center gap-2"><Upload className="w-4 h-4 text-primary" /> Upload file</h2>
              <input value={uploadTitle} onChange={e => setUploadTitle(e.target.value)} placeholder="Title (optional — defaults to filename)"
                className="w-full px-3 py-2 mb-2 bg-background border border-border rounded-lg text-sm" />
              <select value={uploadType} onChange={e => setUploadType(e.target.value as SourceType)}
                className="w-full px-3 py-2 mb-2 bg-background border border-border rounded-lg text-sm">
                <option value="cv">CV</option>
                <option value="cover_letter">Cover letter</option>
                <option value="testimonial">Testimonial</option>
                <option value="book">Book / chapter</option>
                <option value="publication">Publication / whitepaper</option>
                <option value="other">Other</option>
              </select>
              <div className="flex flex-wrap gap-1.5 mb-3">
                {PERSONAS.map(p => (
                  <button key={p.id} type="button" onClick={() => togglePersona(uploadTags, setUploadTags, p.id)}
                    className={`px-2 py-1 text-[11px] rounded border transition-colors ${uploadTags.includes(p.id) ? "border-primary bg-primary/10 text-primary" : "border-border text-muted-foreground"}`}>
                    {p.label}
                  </button>
                ))}
              </div>
              <label className="block cursor-pointer">
                <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary/50 transition-colors">
                  {busy ? <Loader2 className="w-5 h-5 animate-spin mx-auto" /> : (
                    <>
                      <Upload className="w-5 h-5 mx-auto mb-2 text-muted-foreground" />
                      <p className="text-xs text-muted-foreground">PDF, DOCX, TXT or MD</p>
                    </>
                  )}
                </div>
                <input type="file" accept=".pdf,.docx,.txt,.md" onChange={handleUpload} className="hidden" disabled={busy} />
              </label>
            </div>

            <div className="p-5 bg-card border border-border rounded-xl">
              <h2 className="font-serif text-lg text-foreground mb-3 flex items-center gap-2"><Link2 className="w-4 h-4 text-primary" /> Add URL</h2>
              <input value={urlInput} onChange={e => setUrlInput(e.target.value)} placeholder="https://…"
                className="w-full px-3 py-2 mb-2 bg-background border border-border rounded-lg text-sm" />
              <input value={urlTitle} onChange={e => setUrlTitle(e.target.value)} placeholder="Title (optional)"
                className="w-full px-3 py-2 mb-2 bg-background border border-border rounded-lg text-sm" />
              <div className="flex flex-wrap gap-1.5 mb-3">
                {PERSONAS.map(p => (
                  <button key={p.id} type="button" onClick={() => togglePersona(urlTags, setUrlTags, p.id)}
                    className={`px-2 py-1 text-[11px] rounded border transition-colors ${urlTags.includes(p.id) ? "border-primary bg-primary/10 text-primary" : "border-border text-muted-foreground"}`}>
                    {p.label}
                  </button>
                ))}
              </div>
              <button onClick={addUrl} disabled={busy || !urlInput.trim()}
                className="w-full py-2 bg-primary text-primary-foreground rounded-lg text-sm hover:opacity-90 disabled:opacity-50">
                {busy ? "Fetching…" : "Fetch & add"}
              </button>
              <p className="text-[10px] text-muted-foreground mt-2">Note: LinkedIn requires a signed-in browser; use "Save to PDF" on your profile and upload it as a file instead.</p>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="font-serif text-xl text-foreground mb-3">Files ({docs.length})</h2>
            <div className="space-y-2">
              {docs.map(d => (
                <div key={d.id} className="p-3 bg-card border border-border rounded-lg flex items-center justify-between gap-3">
                  <div className="min-w-0 flex-1">
                    <p className="text-sm text-foreground truncate">{d.title}</p>
                    <p className="text-[11px] text-muted-foreground">
                      {d.source_type} · {d.char_count.toLocaleString()} chars
                      {d.persona_tags.length > 0 && ` · ${d.persona_tags.join(", ")}`}
                    </p>
                  </div>
                  <button onClick={() => deleteDoc(d.id)} className="text-muted-foreground hover:text-destructive"><Trash2 className="w-4 h-4" /></button>
                </div>
              ))}
              {docs.length === 0 && <p className="text-sm text-muted-foreground italic">No files yet.</p>}
            </div>
          </div>

          <div>
            <h2 className="font-serif text-xl text-foreground mb-3">URLs ({urls.length})</h2>
            <div className="space-y-2">
              {urls.map(u => (
                <div key={u.id} className="p-3 bg-card border border-border rounded-lg flex items-center justify-between gap-3">
                  <div className="min-w-0 flex-1">
                    <p className="text-sm text-foreground truncate">{u.title ?? u.url}</p>
                    <p className="text-[11px] text-muted-foreground truncate">
                      {u.url} · {u.char_count.toLocaleString()} chars
                      {u.persona_tags.length > 0 && ` · ${u.persona_tags.join(", ")}`}
                    </p>
                  </div>
                  <button onClick={() => deleteUrl(u.id)} className="text-muted-foreground hover:text-destructive"><Trash2 className="w-4 h-4" /></button>
                </div>
              ))}
              {urls.length === 0 && <p className="text-sm text-muted-foreground italic">No URLs yet.</p>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
