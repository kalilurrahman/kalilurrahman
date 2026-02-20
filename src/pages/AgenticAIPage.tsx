import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { AGENTS, SECTIONS, SIDEBAR_CATEGORIES } from "@/data/agents";

export default function AgenticAIPage() {
  const [search, setSearch] = useState("");
  const [activeCat, setActiveCat] = useState("all");

  const bycat = useMemo(() => {
    const m: Record<string, typeof AGENTS> = {};
    AGENTS.forEach(a => { if (!m[a.cat]) m[a.cat] = []; m[a.cat].push(a); });
    return m;
  }, []);

  const filteredSections = useMemo(() => {
    const q = search.toLowerCase().trim();
    return SECTIONS.filter(s => !s.featured).map(sec => {
      const agents = (bycat[sec.cat] || []).filter(a => {
        if (activeCat !== "all" && a.cat !== activeCat) return false;
        if (!q) return true;
        return `${a.name} ${a.role} ${a.mission} ${a.caps.join(" ")} ${a.triggers.join(" ")}`.toLowerCase().includes(q);
      });
      return { ...sec, agents };
    }).filter(s => activeCat === "all" ? s.agents.length > 0 : s.cat === activeCat);
  }, [search, activeCat, bycat]);

  const totalVisible = filteredSections.reduce((n, s) => n + s.agents.length, 0);

  const handleCopy = (a: typeof AGENTS[0]) => {
    const md = `### ${a.name}\n**Role:** ${a.role}\n**Mission:** ${a.mission}\n**Capabilities:**\n${a.caps.map(c => "- " + c).join("\n")}\n**Triggers:** ${a.triggers.map(t => '"' + t + '"').join(", ")}`;
    navigator.clipboard.writeText(md);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-card/90 backdrop-blur-md border-b border-border">
        <div className="max-w-[1600px] mx-auto px-6 h-14 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5 no-underline">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-xs font-mono font-semibold text-primary-foreground">KR</div>
            <div className="hidden sm:block">
              <div className="font-semibold text-sm text-foreground">Kalilur Rahman</div>
              <div className="text-[10px] text-muted-foreground font-mono">Agentic AI Library</div>
            </div>
          </Link>
          <div className="hidden md:flex items-center gap-1">
            <Link to="/" className="px-2.5 py-1 rounded-md text-xs text-muted-foreground hover:bg-secondary transition-colors no-underline">Home</Link>
            <Link to="/digital-hub" className="px-2.5 py-1 rounded-md text-xs text-muted-foreground hover:bg-secondary transition-colors no-underline">Digital Hub</Link>
            <Link to="/knowledge-hub" className="px-2.5 py-1 rounded-md text-xs text-muted-foreground hover:bg-secondary transition-colors no-underline">📚 Knowledge Hub</Link>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="hidden lg:block w-[260px] fixed top-14 bottom-0 left-0 overflow-y-auto bg-card border-r border-border py-4">
          <div className="px-3 pb-3 border-b border-border mb-2">
            <input
              type="text"
              placeholder="Search agents..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full bg-secondary border border-border rounded-lg px-3 py-1.5 text-xs text-foreground placeholder:text-muted-foreground outline-none focus:border-primary transition-colors"
            />
          </div>
          <button
            onClick={() => { setActiveCat("all"); setSearch(""); }}
            className={`w-full text-left px-3.5 py-1.5 text-xs border-l-2 transition-colors ${activeCat === "all" ? "border-l-primary text-primary bg-primary/5 font-medium" : "border-l-transparent text-muted-foreground hover:bg-secondary hover:text-foreground"}`}
          >
            All Categories
          </button>
          {SIDEBAR_CATEGORIES.map(g => (
            <div key={g.group}>
              <div className="px-3.5 pt-3 pb-1 text-[10px] font-semibold tracking-[0.12em] uppercase text-muted-foreground">{g.group}</div>
              {g.items.map(item => (
                <button
                  key={item.cat}
                  onClick={() => { setActiveCat(item.cat); setSearch(""); }}
                  className={`w-full flex items-center justify-between px-3.5 py-1.5 text-xs border-l-2 transition-colors ${activeCat === item.cat ? "border-l-primary text-primary bg-primary/5 font-medium" : "border-l-transparent text-muted-foreground hover:bg-secondary hover:text-foreground"}`}
                >
                  <span>{item.emoji} {item.label}</span>
                  <span className="bg-secondary rounded px-1.5 py-0.5 text-[10px] font-mono text-muted-foreground">{item.count}</span>
                </button>
              ))}
            </div>
          ))}
        </aside>

        {/* Main */}
        <main className="flex-1 lg:ml-[260px] px-6 py-7 max-w-[1200px]">
          {/* Hero */}
          <motion.section
            className="text-center py-9 mb-8 border-b border-border relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          >
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[radial-gradient(ellipse,hsl(var(--primary)/0.06),transparent_70%)] pointer-events-none" />
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-3 py-1 text-[11px] text-primary mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" /> 350+ Agents · 28 Categories · v3.0
            </div>
            <h1 className="font-serif text-3xl md:text-4xl text-foreground mb-3">Build Anything with the Right <em className="text-primary italic">AI Agent</em></h1>
            <p className="max-w-[580px] mx-auto text-muted-foreground text-[14px] leading-relaxed mb-7">A production-ready library of agentic AI definitions — every agent has role, mission, capabilities, and exact trigger phrases.</p>
            <div className="flex justify-center gap-4 flex-wrap">
              {[{ n: "350+", l: "Total Agents" }, { n: "28", l: "Categories" }, { n: "3", l: "Expanded v3.0" }].map(s => (
                <div key={s.l} className="text-center px-5 py-3 bg-card border border-border rounded-xl min-w-[88px]">
                  <span className="block font-serif text-[28px] text-primary leading-none mb-1">{s.n}</span>
                  <span className="text-[10px] text-muted-foreground uppercase tracking-[0.08em]">{s.l}</span>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Mobile search */}
          <div className="lg:hidden mb-5">
            <input
              type="text"
              placeholder="Search agents..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full bg-card border border-border rounded-lg px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-primary"
            />
            <div className="flex gap-1.5 flex-wrap mt-3">
              <button onClick={() => setActiveCat("all")} className={`px-2.5 py-1 rounded text-[11px] border transition-colors ${activeCat === "all" ? "border-primary text-primary bg-primary/10" : "border-border text-muted-foreground"}`}>All</button>
              {SIDEBAR_CATEGORIES.flatMap(g => g.items).slice(0, 8).map(item => (
                <button key={item.cat} onClick={() => setActiveCat(item.cat)} className={`px-2.5 py-1 rounded text-[11px] border transition-colors ${activeCat === item.cat ? "border-primary text-primary bg-primary/10" : "border-border text-muted-foreground"}`}>{item.emoji} {item.label}</button>
              ))}
            </div>
          </div>

          {/* Results */}
          <div className="text-xs text-muted-foreground font-mono mb-5">Showing <strong className="text-primary">{totalVisible}</strong> agents</div>

          {totalVisible === 0 && (
            <div className="text-center py-20">
              <div className="text-4xl mb-3">🔍</div>
              <h3 className="font-serif text-xl text-muted-foreground mb-1">No agents found</h3>
              <p className="text-sm text-muted-foreground">Try a different search term or category</p>
            </div>
          )}

          {filteredSections.map(sec => (
            <div key={sec.id} className="mb-10">
              <div className="flex items-center gap-2.5 pb-3 mb-4 border-b border-border">
                <span className="text-xl">{sec.emoji}</span>
                <span className="font-serif text-xl text-foreground">{sec.title}</span>
                <span className={`ml-auto rounded-lg px-2 py-0.5 text-[10px] font-mono ${sec.newBadge ? "bg-green-500/10 text-green-500 border border-green-500/20" : "bg-secondary text-muted-foreground"}`}>{sec.badge}</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {sec.agents.map(a => (
                  <div key={a.name} className="bg-card border border-border rounded-xl p-4 hover:border-muted-foreground/40 hover:-translate-y-0.5 transition-all relative overflow-hidden group">
                    <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="flex items-start justify-between mb-2.5">
                      <div>
                        <div className="font-mono text-[12.5px] text-primary font-medium mb-0.5">{a.name}</div>
                        <div className="text-[11.5px] text-muted-foreground leading-snug">{a.role}</div>
                      </div>
                      <button onClick={() => handleCopy(a)} className="text-[10px] text-muted-foreground border border-border rounded px-2 py-0.5 font-mono hover:border-primary hover:text-primary transition-colors shrink-0 ml-2">⎘ Copy</button>
                    </div>
                    <div className="text-xs text-foreground leading-relaxed mb-3 border-l-2 border-border pl-2.5">{a.mission}</div>
                    <div className="text-[9px] uppercase tracking-[0.12em] text-muted-foreground font-semibold mb-1">Capabilities</div>
                    <ul className="mb-3">
                      {a.caps.map(c => (
                        <li key={c} className="text-[11px] text-muted-foreground pl-3 relative before:content-['▸'] before:absolute before:left-0 before:text-green-500 before:text-[9px]">{c}</li>
                      ))}
                    </ul>
                    <div className="text-[9px] uppercase tracking-[0.12em] text-muted-foreground font-semibold mb-1">Triggers</div>
                    <div className="flex flex-wrap gap-1">
                      {a.triggers.map(t => (
                        <span key={t} className="bg-secondary rounded px-1.5 py-0.5 font-mono text-[9.5px] text-muted-foreground">"{t}"</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </main>
      </div>

      <footer className="lg:ml-[260px] bg-card border-t border-border py-6 px-6 text-center">
        <p className="text-[11px] text-muted-foreground">Agentic AI Agent Library v3.0 · 350+ Agents · Curated by <strong>Kalilur Rahman</strong></p>
        <div className="flex justify-center gap-2 flex-wrap mt-2">
          <Link to="/" className="text-xs text-muted-foreground hover:text-primary transition-colors no-underline">Home</Link>
          <Link to="/knowledge-hub" className="text-xs text-muted-foreground hover:text-primary transition-colors no-underline">Knowledge Hub</Link>
          <a href="https://www.linkedin.com/in/kalilurrahman/" target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground hover:text-primary transition-colors no-underline">LinkedIn ↗</a>
        </div>
      </footer>
    </div>
  );
}
