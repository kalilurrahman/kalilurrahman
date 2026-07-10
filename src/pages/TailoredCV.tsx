import { useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useIsAdmin } from "@/hooks/use-is-admin";
import { toast } from "sonner";
import Seo from "@/components/Seo";
import { Sparkles, Loader2, Download, FileText, Copy, LogIn, Settings } from "lucide-react";
import jsPDF from "jspdf";
import { Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType } from "docx";
import { saveAs } from "file-saver";

type Persona = "ai-advisor" | "gcc-advisor" | "coe-champion" | "digital-transformation";
type Tone = "formal" | "narrative" | "punchy";

interface Achievement { text: string; evidence?: string }
interface Experience { role: string; org: string; period: string; highlights: string[] }
interface CV {
  headline?: string;
  summary?: string;
  achievements?: Achievement[];
  experience?: Experience[];
  skills_matched?: string[];
  cover_letter?: string;
  talking_points?: string[];
  why_fit?: string;
  _preview?: boolean;
}

const PERSONAS: { id: Persona; label: string; desc: string }[] = [
  { id: "ai-advisor", label: "AI Advisor", desc: "AI governance, GenAI, thought leadership" },
  { id: "gcc-advisor", label: "GCC Advisor", desc: "Global Capability Center scale-up" },
  { id: "coe-champion", label: "CoE Champion", desc: "Quality Engineering, TCoE turnaround" },
  { id: "digital-transformation", label: "DX Executive", desc: "Enterprise digital transformation" },
];

export default function TailoredCV() {
  const { isAdmin, user, loading: authLoading } = useIsAdmin();

  const [industry, setIndustry] = useState("");
  const [role, setRole] = useState("");
  const [jd, setJd] = useState("");
  const [persona, setPersona] = useState<Persona>("ai-advisor");
  const [tone, setTone] = useState<Tone>("formal");
  const [busy, setBusy] = useState(false);
  const [cv, setCv] = useState<CV | null>(null);

  const generate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!role.trim() || !jd.trim()) { toast.error("Role and JD are required."); return; }
    setBusy(true);
    setCv(null);
    try {
      const { data, error } = await supabase.functions.invoke("generate-cv", {
        body: { industry, role, jd, persona, tone },
      });
      if (error) {
        const details = (error as { context?: Response }).context
          ? await (error as { context: Response }).context.text().catch(() => error.message)
          : error.message;
        toast.error(details || "Generation failed");
        return;
      }
      if (data?.error) { toast.error(data.error); return; }
      setCv(data.cv);
      toast.success("CV generated.");
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Failed");
    } finally { setBusy(false); }
  };

  const buildMarkdown = (c: CV): string => {
    const lines = [
      `# Kalilur Rahman`,
      c.headline ? `**${c.headline}**` : "",
      "",
      c.summary ? `## Summary\n${c.summary}` : "",
      "",
      c.achievements?.length ? `## Key Achievements\n${c.achievements.map(a => `- ${a.text}${a.evidence ? ` _(${a.evidence})_` : ""}`).join("\n")}` : "",
      "",
      c.experience?.length ? `## Experience\n${c.experience.map(e => `### ${e.role} — ${e.org}\n_${e.period}_\n${e.highlights.map(h => `- ${h}`).join("\n")}`).join("\n\n")}` : "",
      "",
      c.skills_matched?.length ? `## Matched Skills\n${c.skills_matched.join(" · ")}` : "",
      "",
      c.cover_letter ? `## Cover Letter\n${c.cover_letter}` : "",
      "",
      c.talking_points?.length ? `## Talking Points\n${c.talking_points.map(t => `- ${t}`).join("\n")}` : "",
      "",
      c.why_fit ? `## Why Fit\n${c.why_fit}` : "",
    ];
    return lines.filter(Boolean).join("\n").trim() + "\n";
  };

  const buildPlain = (c: CV): string =>
    buildMarkdown(c).replace(/\*\*/g, "").replace(/^#+ /gm, "").replace(/_/g, "").replace(/\[|\]/g, "");

  const exportMd = () => cv && saveAs(new Blob([buildMarkdown(cv)], { type: "text/markdown" }), "kalilur-cv.md");
  const exportTxt = () => cv && saveAs(new Blob([buildPlain(cv)], { type: "text/plain" }), "kalilur-cv-ats.txt");

  const exportPdf = () => {
    if (!cv) return;
    const doc = new jsPDF({ unit: "pt", format: "a4" });
    const margin = 48;
    const width = doc.internal.pageSize.getWidth() - margin * 2;
    let y = margin;
    const writeLine = (text: string, size: number, bold = false) => {
      doc.setFont("helvetica", bold ? "bold" : "normal");
      doc.setFontSize(size);
      const wrapped = doc.splitTextToSize(text, width);
      for (const line of wrapped) {
        if (y > doc.internal.pageSize.getHeight() - margin) { doc.addPage(); y = margin; }
        doc.text(line, margin, y);
        y += size * 1.3;
      }
    };
    writeLine("Kalilur Rahman", 20, true);
    if (cv.headline) writeLine(cv.headline, 11); y += 6;
    if (cv.summary) { writeLine("Summary", 13, true); writeLine(cv.summary, 10); y += 4; }
    if (cv.achievements?.length) {
      writeLine("Key Achievements", 13, true);
      cv.achievements.forEach(a => writeLine("• " + a.text + (a.evidence ? ` (${a.evidence})` : ""), 10));
      y += 4;
    }
    if (cv.experience?.length) {
      writeLine("Experience", 13, true);
      cv.experience.forEach(e => {
        writeLine(`${e.role} — ${e.org} · ${e.period}`, 11, true);
        e.highlights.forEach(h => writeLine("• " + h, 10));
        y += 2;
      });
    }
    if (cv.skills_matched?.length) { writeLine("Matched Skills", 13, true); writeLine(cv.skills_matched.join(" · "), 10); y += 4; }
    if (cv.cover_letter) { doc.addPage(); y = margin; writeLine("Cover Letter", 14, true); writeLine(cv.cover_letter, 10); }
    if (cv.talking_points?.length) { writeLine("Talking Points", 13, true); cv.talking_points.forEach(t => writeLine("• " + t, 10)); }
    if (cv.why_fit) { writeLine("Why Fit", 13, true); writeLine(cv.why_fit, 10); }
    doc.save("kalilur-cv.pdf");
  };

  const exportDocx = async () => {
    if (!cv) return;
    const para = (t: string, opts: { bold?: boolean; size?: number; heading?: (typeof HeadingLevel)[keyof typeof HeadingLevel] } = {}) =>
      new Paragraph({
        heading: opts.heading,
        children: [new TextRun({ text: t, bold: opts.bold, size: opts.size })],
      });
    const children: Paragraph[] = [];
    children.push(new Paragraph({ alignment: AlignmentType.LEFT, children: [new TextRun({ text: "Kalilur Rahman", bold: true, size: 40 })] }));
    if (cv.headline) children.push(para(cv.headline, { size: 22 }));
    if (cv.summary) { children.push(para("Summary", { heading: HeadingLevel.HEADING_2 })); children.push(para(cv.summary)); }
    if (cv.achievements?.length) {
      children.push(para("Key Achievements", { heading: HeadingLevel.HEADING_2 }));
      cv.achievements.forEach(a => children.push(para("• " + a.text + (a.evidence ? ` (${a.evidence})` : ""))));
    }
    if (cv.experience?.length) {
      children.push(para("Experience", { heading: HeadingLevel.HEADING_2 }));
      cv.experience.forEach(e => {
        children.push(para(`${e.role} — ${e.org} · ${e.period}`, { bold: true }));
        e.highlights.forEach(h => children.push(para("• " + h)));
      });
    }
    if (cv.skills_matched?.length) { children.push(para("Matched Skills", { heading: HeadingLevel.HEADING_2 })); children.push(para(cv.skills_matched.join(" · "))); }
    if (cv.cover_letter) { children.push(para("Cover Letter", { heading: HeadingLevel.HEADING_2 })); children.push(para(cv.cover_letter)); }
    if (cv.talking_points?.length) { children.push(para("Talking Points", { heading: HeadingLevel.HEADING_2 })); cv.talking_points.forEach(t => children.push(para("• " + t))); }
    if (cv.why_fit) { children.push(para("Why Fit", { heading: HeadingLevel.HEADING_2 })); children.push(para(cv.why_fit)); }
    const doc = new Document({ sections: [{ children }] });
    const blob = await Packer.toBlob(doc);
    saveAs(blob, "kalilur-cv.docx");
  };

  const copyLinkedIn = () => {
    if (!cv) return;
    const linkedin = [
      cv.headline ?? "",
      "",
      cv.summary ?? "",
      "",
      cv.achievements?.slice(0, 5).map(a => "• " + a.text).join("\n") ?? "",
    ].join("\n");
    navigator.clipboard.writeText(linkedin);
    toast.success("LinkedIn About copied.");
  };

  const saveVariant = async () => {
    if (!cv || !isAdmin) return;
    const { error } = await supabase.from("generated_cvs").insert({
      owner_id: user?.id,
      industry, role, jd_text: jd, persona, tone,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      output_json: cv as any,
    });
    if (error) toast.error(error.message);
    else toast.success("Variant saved.");
  };

  return (
    <>
      <Seo
        title="Tailored CV Generator — Kalilur Rahman"
        description="AI-powered role-specific CV generator. Paste any job description; get a tailored CV, cover letter and talking points grounded in Kalilur's authentic profile."
        path="/tailored-cv"
      />
      <div className="min-h-screen bg-background">
        <section className="pt-16 pb-10 px-6 border-b border-border">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 bg-primary/10 border border-primary/20 rounded-full">
                  <Sparkles className="w-3.5 h-3.5 text-primary" />
                  <span className="text-xs text-primary font-medium">AI-powered · Grounded in Kalilur's real profile</span>
                </div>
                <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-3">Tailored CV Generator</h1>
                <p className="text-muted-foreground max-w-2xl">
                  Paste an industry, role, and job description. Get a CV, cover letter and interview talking points
                  written specifically for that opportunity — anchored in Kalilur's authentic experience.
                </p>
              </div>
              <div className="flex gap-2">
                {!authLoading && !user && (
                  <Link to="/auth" className="inline-flex items-center gap-2 px-4 py-2 border border-border rounded-lg text-sm hover:border-primary/50 transition-colors">
                    <LogIn className="w-4 h-4" /> Owner sign-in
                  </Link>
                )}
                {isAdmin && (
                  <Link to="/tailored-cv/admin" className="inline-flex items-center gap-2 px-4 py-2 border border-border rounded-lg text-sm hover:border-primary/50 transition-colors">
                    <Settings className="w-4 h-4" /> Manage corpus
                  </Link>
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="py-10 px-6">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-[380px,1fr] gap-8">
            <form onSubmit={generate} className="space-y-4 lg:sticky lg:top-24 self-start">
              <div>
                <label className="block text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">Industry</label>
                <input value={industry} onChange={e => setIndustry(e.target.value)} placeholder="e.g. Pharma, Financial services"
                  className="w-full px-3 py-2 bg-card border border-border rounded-lg text-sm focus:outline-none focus:border-primary/50" />
              </div>
              <div>
                <label className="block text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">Role *</label>
                <input required value={role} onChange={e => setRole(e.target.value)} placeholder="e.g. VP, AI & Data Strategy"
                  className="w-full px-3 py-2 bg-card border border-border rounded-lg text-sm focus:outline-none focus:border-primary/50" />
              </div>
              <div>
                <label className="block text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">Job description *</label>
                <textarea required value={jd} onChange={e => setJd(e.target.value)} rows={10} placeholder="Paste the full JD here…"
                  className="w-full px-3 py-2 bg-card border border-border rounded-lg text-sm focus:outline-none focus:border-primary/50 resize-y" />
                <p className="text-[10px] text-muted-foreground mt-1">{jd.length}/20000</p>
              </div>
              <div>
                <label className="block text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">Persona</label>
                <div className="grid grid-cols-2 gap-2">
                  {PERSONAS.map(p => (
                    <button key={p.id} type="button" onClick={() => setPersona(p.id)}
                      className={`text-left p-2 rounded-lg border text-xs transition-colors ${persona === p.id ? "border-primary bg-primary/5 text-foreground" : "border-border text-muted-foreground hover:border-primary/40"}`}>
                      <div className="font-medium text-foreground">{p.label}</div>
                      <div className="text-[10px] text-muted-foreground mt-0.5">{p.desc}</div>
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">Tone</label>
                <div className="flex gap-2">
                  {(["formal", "narrative", "punchy"] as Tone[]).map(t => (
                    <button key={t} type="button" onClick={() => setTone(t)}
                      className={`flex-1 py-2 rounded-lg border text-xs capitalize transition-colors ${tone === t ? "border-primary bg-primary/5 text-foreground" : "border-border text-muted-foreground hover:border-primary/40"}`}>
                      {t}
                    </button>
                  ))}
                </div>
              </div>
              <button type="submit" disabled={busy}
                className="w-full py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center justify-center gap-2">
                {busy ? <><Loader2 className="w-4 h-4 animate-spin" /> Composing…</> : <><Sparkles className="w-4 h-4" /> Generate tailored CV</>}
              </button>
              {!user && <p className="text-[10px] text-muted-foreground text-center">Public preview: 3 generations per day. Sign in as owner for full exports & unlimited use.</p>}
            </form>

            <div>
              {!cv && !busy && (
                <div className="border border-dashed border-border rounded-xl p-12 text-center">
                  <FileText className="w-8 h-8 mx-auto mb-3 text-muted-foreground" />
                  <p className="text-sm text-muted-foreground">Your tailored CV will appear here.</p>
                </div>
              )}
              {busy && (
                <div className="border border-border rounded-xl p-12 text-center animate-pulse">
                  <Loader2 className="w-8 h-8 mx-auto mb-3 text-primary animate-spin" />
                  <p className="text-sm text-muted-foreground">Composing a CV tailored to this role…</p>
                </div>
              )}
              {cv && (
                <div className="space-y-6">
                  {isAdmin && (
                    <div className="flex flex-wrap gap-2 p-3 bg-card border border-border rounded-lg">
                      <button onClick={exportPdf} className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs bg-primary text-primary-foreground rounded-md hover:opacity-90"><Download className="w-3.5 h-3.5" /> PDF</button>
                      <button onClick={exportDocx} className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs bg-primary text-primary-foreground rounded-md hover:opacity-90"><Download className="w-3.5 h-3.5" /> DOCX</button>
                      <button onClick={exportMd} className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs border border-border rounded-md hover:border-primary/50"><Download className="w-3.5 h-3.5" /> Markdown</button>
                      <button onClick={exportTxt} className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs border border-border rounded-md hover:border-primary/50"><Download className="w-3.5 h-3.5" /> ATS .txt</button>
                      <button onClick={copyLinkedIn} className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs border border-border rounded-md hover:border-primary/50"><Copy className="w-3.5 h-3.5" /> LinkedIn About</button>
                      <button onClick={saveVariant} className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs border border-border rounded-md hover:border-primary/50 ml-auto">Save variant</button>
                    </div>
                  )}
                  {cv._preview && (
                    <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg text-sm">
                      <strong className="text-foreground">Preview mode.</strong> <span className="text-muted-foreground">This is the recruiter preview. </span>
                      <a href="mailto:rahman.kalilur@outlook.com" className="text-primary hover:underline">Contact Kalilur</a>
                      <span className="text-muted-foreground"> for the full tailored CV, cover letter and exports.</span>
                    </div>
                  )}

                  <article className="prose prose-sm max-w-none">
                    {cv.headline && <p className="font-serif text-xl text-foreground italic">{cv.headline}</p>}
                    {cv.summary && (
                      <section>
                        <h2 className="font-serif text-lg text-foreground mt-4">Summary</h2>
                        <p className="text-muted-foreground leading-relaxed">{cv.summary}</p>
                      </section>
                    )}
                    {cv.achievements?.length ? (
                      <section>
                        <h2 className="font-serif text-lg text-foreground mt-6">Key achievements</h2>
                        <ul className="space-y-2 mt-2">
                          {cv.achievements.map((a, i) => (
                            <li key={i} className="text-sm text-muted-foreground">
                              <span className="text-primary mr-2">◆</span>{a.text}
                              {a.evidence && <span className="text-xs text-muted-foreground/70 italic ml-2">({a.evidence})</span>}
                            </li>
                          ))}
                        </ul>
                      </section>
                    ) : null}
                    {cv.experience?.length ? (
                      <section>
                        <h2 className="font-serif text-lg text-foreground mt-6">Experience</h2>
                        {cv.experience.map((e, i) => (
                          <div key={i} className="mt-3">
                            <p className="font-medium text-foreground text-sm">{e.role} — {e.org} <span className="text-muted-foreground font-normal">· {e.period}</span></p>
                            <ul className="mt-1 space-y-1">
                              {e.highlights.map((h, j) => <li key={j} className="text-sm text-muted-foreground"><span className="text-primary mr-2">·</span>{h}</li>)}
                            </ul>
                          </div>
                        ))}
                      </section>
                    ) : null}
                    {cv.skills_matched?.length ? (
                      <section>
                        <h2 className="font-serif text-lg text-foreground mt-6">Skills matched to this role</h2>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {cv.skills_matched.map(s => <span key={s} className="px-2.5 py-1 text-xs bg-secondary border border-border rounded">{s}</span>)}
                        </div>
                      </section>
                    ) : null}
                    {cv.cover_letter && (
                      <section>
                        <h2 className="font-serif text-lg text-foreground mt-6">Cover letter</h2>
                        <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-wrap">{cv.cover_letter}</p>
                      </section>
                    )}
                    {cv.talking_points?.length ? (
                      <section>
                        <h2 className="font-serif text-lg text-foreground mt-6">Interview talking points</h2>
                        <ul className="space-y-1 mt-2">
                          {cv.talking_points.map((t, i) => <li key={i} className="text-sm text-muted-foreground"><span className="text-primary mr-2">→</span>{t}</li>)}
                        </ul>
                      </section>
                    ) : null}
                    {cv.why_fit && (
                      <section>
                        <h2 className="font-serif text-lg text-foreground mt-6">Why this is a fit</h2>
                        <p className="text-sm text-muted-foreground leading-relaxed">{cv.why_fit}</p>
                      </section>
                    )}
                  </article>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
