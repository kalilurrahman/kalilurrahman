// Portfolio.tsx — Kalilur Rahman personal portfolio (Apple-minimal)
// Drop-in single-file React + Tailwind component for Lovable / Vite.
// Usage: place in src/ and render <Portfolio /> from App.tsx.
// Dark mode toggles the `dark` class on <html> (Tailwind darkMode: 'class').
// Replace HEADSHOT with your image path to swap the KR monogram.

import { useEffect, useState } from "react";

const HEADSHOT = "/kalilur.jpg"; // upload your headshot to Lovable's public/ as kalilur.jpg. Falls back to the KR monogram if missing.

const impact = [
  { big: "16×", h: "GCC built & scaled", p: "Novartis GCC from concept to a 400+ person operation — 500% volume growth, 40% cost arbitrage, 30% productivity gain." },
  { big: "48%", h: "Budget reduction", p: "Re-architected Project-Management-as-a-Service: $25M → $13M, with $1.3M recurring annual savings." },
  { big: "70%", h: "Faster testing", p: "DevSecOps + Tricentis Tosca rollout cut SAP cycle time across a GxP-regulated pharma environment." },
  { big: "35%+", h: "Margin uplift", p: "Turned a 220-person Testing CoE from −5% to 30%+ margin in a single year — full turnaround." },
  { big: "220M+", h: "Subscribers served", p: "Test Delivery CoE + national-scale 4G launch validation for India's largest telco." },
  { big: "355", h: "Stores, 2 mo. early", p: "Oracle Retail rollout across 7 vendor ecosystems for a global mobile giant — ahead of schedule." },
];

const featured = [
  { i: "🪙", c: "AI · FinOps", h: "TokenOps Atlas", p: "Run LLM spend like a professional operating discipline — visibility, allocation and governance.", u: "https://kr-token-ops-hub.lovable.app" },
  { i: "🛠️", c: "AI & Prompts", h: "Claudiator Skills Hub", p: "A browsable directory of 129+ Claude SKILL.md prompts with copy-ready frontmatter.", u: "https://kr-claudiator-skills.lovable.app" },
  { i: "🧭", c: "Enterprise · GCC", h: "GCC Compass", p: "An operating dashboard for GCC leaders — maturity assessments, lifecycle map and an AI advisor.", u: "https://kr-gcc-compass.lovable.app" },
  { i: "💹", c: "AI · Finance", h: "Financial Prompt Hub", p: "1,120+ curated prompts across 3 AI platforms with a Bloomberg-style FINPROMPT terminal.", u: "https://kr-finance-prompt-hub.lovable.app/" },
  { i: "📘", c: "Enterprise · GCC", h: "GCC Playbook Hub", p: "Frameworks, maturity models and operational guides for standing up and scaling GCCs.", u: "https://kr-gcc-playbook-hub.lovable.app" },
  { i: "🧪", c: "QA & Testing", h: "KR Test Automator", p: "An intelligent test-automation framework with AI-assisted generation, execution and reporting.", u: "https://kr-test-automator.lovable.app" },
  { i: "⚡", c: "AI & Agents", h: "Agentic AI Prompts", p: "Battle-tested prompts for agentic AI — task decomposition, tool use and autonomous reasoning.", u: "https://kr-agentic-ai-prompts.lovable.app" },
  { i: "⚕️", c: "Healthcare", h: "Cancer Knowledge Explorer", p: "A comprehensive, structured clinical reference making oncology knowledge searchable.", u: "https://cancer-knowledge-explorer.lovable.app" },
  { i: "🏥", c: "Healthcare · GCC", h: "Healthcare Industry Playbook", p: "The go-to guide for healthcare GCC players, professionals and leaders.", u: "https://kr-healthcare-guidebook-hub.lovable.app" },
  { i: "🏛️", c: "Enterprise", h: "Enterprise Architecture Hub", p: "Patterns, frameworks and reference architectures for modern, resilient enterprises.", u: "https://kr-enterprise-architecture-hub.lovable.app" },
  { i: "🛡️", c: "Quality Engineering", h: "ACUITAS — AI QE Framework", p: "A 7-pillar AI Quality Engineering framework aligned with ISO 42001, NIST AI RMF and the EU AI Act.", u: "https://kr-acuiitas-clarity-frameworks.lovable.app/" },
  { i: "🔬", c: "Research", h: "PhD Research Assistant", p: "A one-stop workspace of resources and prompting strategies for scholars and researchers.", u: "https://kalilurrahman.github.io/PhDResearchAssistant.html" },
];

const frameworks = [
  { tag: "AI Quality Engineering", h: "ACUITAS", p: "A 7-pillar AI Quality Engineering framework — Assessment, Calibration, Understanding, Integrity, Testing, Assurance, Surveillance — aligned with ISO 42001, the NIST AI RMF and the EU AI Act.", u: "https://kr-acuiitas-clarity-frameworks.lovable.app/" },
  { tag: "AI Product Management", h: "CLARITY", p: "The companion framework to ACUITAS — a structured approach to AI product management, from problem framing through responsible launch and lifecycle governance.", u: "https://kr-acuiitas-clarity-frameworks.lovable.app/" },
];

const ecosystem = [
  { t: "AI, Prompts & Frameworks", items: [
    ["ACUITAS AI QE", "https://kr-acuiitas-clarity-frameworks.lovable.app/"], ["Claude Prompt Hub", "https://krpromptsapp.lovable.app/"],
    ["Prompt Builder Hub", "https://kr-prompt-terminal-builder.lovable.app"], ["Agent Flow Studio", "https://kr-ai-agent-flow.lovable.app"],
    ["AI Workflow Gen", "https://kr-ai-workflow-gen.lovable.app"], ["AI Literacy Hub", "https://kr-ai-literacy-hub.lovable.app"],
    ["Exec Scribe", "https://kr-exec-scribe.lovable.app"], ["Agent Weaver", "https://kr-ai-agent-weaver.lovable.app"],
    ["Authority Engine", "https://kr-social-authority-hub.lovable.app"], ["CITAACC AI Hub", "https://citaacc-ai-hub.lovable.app"] ] },
  { t: "Enterprise & Training", items: [
    ["Enterprise Arch Hub", "https://kr-enterprise-architecture-hub.lovable.app"], ["Pharma Guidebook Hub", "https://kr-pharma-guidebook-hub.lovable.app"],
    ["QE Compass", "https://kr-qe-compass.lovable.app"], ["Executive Training Hub", "https://kr-corp-upskill.lovable.app"],
    ["Training Portfolio", "https://kr-training-portfolio.lovable.app/"], ["Tech Curator Guide", "https://kr-tech-curator-guide.lovable.app/"],
    ["Cyber Lexicon Hub", "https://kr-cyber-lexicon-hub.lovable.app"], ["Evolution Guide Nexus", "https://evo-guide-nexus.lovable.app"],
    ["AI Learning Hub", "https://kr-ai-learning-hub.lovable.app"] ] },
  { t: "Tools & Learning", items: [
    ["Omni Tool Hub", "https://kr-omni-tool-hub.lovable.app"], ["Tech Simplifier", "https://kr-tech-simplifier.lovable.app"],
    ["JD Smart Profile", "https://kr-jd-smart-profile.lovable.app"], ["Interview Prep Vault", "https://kr-interview-prep-vault.lovable.app"],
    ["Kaggle Navigator", "https://kr-kaggle-skill-hub.lovable.app"], ["BizTech Quiz Master", "https://kr-biztech-quizzer.lovable.app"],
    ["App Idea Vault", "https://kr-app-ideas-vault.lovable.app"], ["Nexus Unified Hub", "https://kr-app-nexus.lovable.app"],
    ["Profile Studio", "https://kr-profile-search.lovable.app"], ["Terminal Muse Maker", "https://kr-terminal-muse-maker.lovable.app"] ] },
  { t: "Research & Knowledge", items: [
    ["PhD Research Assistant", "https://kalilurrahman.github.io/PhDResearchAssistant.html"], ["Cancer Knowledge Explorer", "https://cancer-knowledge-explorer.lovable.app"],
    ["Academic Research Studio", "https://academic-research-paper-studio.lovable.app"], ["Quantum Insights Hub", "https://kr-quantum-hub.lovable.app/"],
    ["Knowledge Hub", "https://kalilurrahman.github.io/KR_Knowledge_Hub.html"], ["Tamil Nadu Predictor", "https://tn-election-predictor.lovable.app"],
    ["Learning Path Hub", "https://kr-learning-path-hub.lovable.app"], ["Quiz Blitz Hub", "https://kr-quiz-blitz-hub.lovable.app"] ] },
  { t: "Personal & Side", items: [
    ["KR News App", "https://kr-news-app.lovable.app/"], ["KR Pocket News", "https://kr-pocket-news.lovable.app/"],
    ["Arcade Vault", "https://kr-arcade-games.lovable.app"], ["Tetris Stack", "https://kr-tetris-stack.lovable.app"],
    ["Expense Tracker", "https://kr-expense-tracker.lovable.app"], ["Divine Duas & Hadith", "https://kr-islamic-duas.lovable.app/"],
    ["Farzi 10th", "https://farzi-10th.lovable.app"], ["Jeopardy Quiz", "https://kr-jeopardy-quiz.lovable.app"],
    ["Mindful Flow", "https://mindful-flow-82.lovable.app"], ["→ Browse all 60+ apps", "https://kalilur-portfolio.lovable.app"] ] },
];

const books = [
  { i: "📊", h: "Python Data Visualisation Essentials Guide", p: "Storytelling with data using Python — turning complex datasets into clear, decision-ready visuals." },
  { i: "🧫", h: "Science of Selenium", p: "A hands-on guide to automation strategy, resilient frameworks and the core principles of test automation." },
  { i: "🚀", h: "Innovations in Testing", p: "A thought-leadership exploration of modern testing methodologies, delivery models and future-ready QE." },
];

const awards = [
  ["Thinkers360", "#3 Global Top Thought Leader", "Technology, Digital Transformation & Quality Engineering."],
  ["2023", "Innovative CIO Award", "CIOAXIS & CISOCONNECT — innovative operating models."],
  ["CIO&Leader", "IT NEXT100 Future CIO", "Multi-stage evaluation of technical & leadership expertise."],
  ["eLets", "Pharma Leadership Award", "Pioneering digital initiatives in the pharmaceutical sector."],
  ["Kaggle", "Legacy Grandmaster", "Competitions Expert · Datasets Expert · Notebooks Master."],
  ["29+ yrs", "482 certifications · 5 continents", "A sustained record of credentials and global delivery."],
];

const socials: [string, string][] = [
  ["LinkedIn", "https://www.linkedin.com/in/kalilurrahman/"], ["GitHub", "https://github.com/kalilurrahman"],
  ["Kaggle", "https://www.kaggle.com/kalilurrahman"], ["Amazon Author", "https://www.amazon.com/stores/Kalilur-Rahman/author/B0863JL6R7"],
  ["Google Scholar", "https://scholar.google.com/citations?user=hCYBFKYAAAAJ&hl=en"], ["Credly", "https://www.credly.com/users/kalilur-rahman/badges"],
  ["Linktree", "https://linktr.ee/kalilur.rahman"], ["X", "https://x.com/krahman"],
];

const AMAZON = "https://www.amazon.com/stores/Kalilur-Rahman/author/B0863JL6R7";

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const io = new IntersectionObserver((es) => es.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.remove("opacity-0", "translate-y-6"); io.unobserve(e.target); }
    }), { threshold: 0.12 });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

export default function Portfolio() {
  const [dark, setDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hsErr, setHsErr] = useState(false);
  useReveal();

  useEffect(() => {
    let t = "light";
    try { t = localStorage.getItem("kr-theme") || (matchMedia("(prefers-color-scheme:dark)").matches ? "dark" : "light"); } catch {}
    setDark(t === "dark");
  }, []);
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    try { localStorage.setItem("kr-theme", dark ? "dark" : "light"); } catch {}
  }, [dark]);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", on); return () => window.removeEventListener("scroll", on);
  }, []);

  const R = "opacity-0 translate-y-6 transition-all duration-700 ease-out";
  const card = "bg-white dark:bg-[#141416] border border-[#e8e8ed] dark:border-[#2a2a2e] rounded-[20px]";

  return (
    <div className="min-h-screen bg-[#fbfbfd] dark:bg-black text-[#1d1d1f] dark:text-[#f5f5f7] antialiased [font-family:Inter,system-ui,sans-serif]">
      {/* NAV */}
      <nav className={`fixed inset-x-0 top-0 z-50 h-[52px] flex items-center backdrop-blur-xl bg-[#fbfbfd]/70 dark:bg-black/70 border-b ${scrolled ? "border-[#e8e8ed] dark:border-[#2a2a2e]" : "border-transparent"}`}>
        <div className="max-w-[1120px] mx-auto px-6 w-full flex items-center justify-between">
          <a href="#top" className="font-semibold text-[15px] tracking-tight">Kalilur Rahman</a>
          <div className="hidden md:flex gap-8 text-[12.5px] text-[#6e6e73] dark:text-[#a1a1a6]">
            {["About", "Frameworks", "Work", "Writing", "Recognition"].map((s) => (
              <a key={s} href={`#${s.toLowerCase()}`} className="hover:text-[#1d1d1f] dark:hover:text-white transition-colors">{s}</a>
            ))}
          </div>
          <div className="flex items-center gap-3.5">
            <button onClick={() => setDark((d) => !d)} aria-label="Toggle dark mode"
              className="w-8 h-8 rounded-full grid place-items-center border border-[#e8e8ed] dark:border-[#2a2a2e] bg-white dark:bg-[#141416] hover:scale-105 transition-transform">
              {dark ? "☀️" : "🌙"}
            </button>
            <a href="mailto:rahman.kalilur@outlook.com" className="text-[12.5px] bg-[#1d1d1f] dark:bg-white text-white dark:text-black px-4 py-[7px] rounded-full hover:opacity-85 transition-opacity">Get in touch</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <header id="top" className="relative overflow-hidden pt-40 pb-24 text-center">
        <div className="absolute inset-0 -z-10" style={{ background: "radial-gradient(60% 50% at 50% 0%, rgba(0,113,227,.10), transparent 70%), radial-gradient(40% 40% at 80% 20%, rgba(124,58,237,.07), transparent 70%)" }} />
        <div className="max-w-[1120px] mx-auto px-6">
          <div data-reveal className={`${R} relative w-32 h-32 mx-auto mb-7 rounded-full p-[3px]`} style={{ background: "linear-gradient(135deg,#0071e3,#7c3aed)" }}>
            <div className="w-full h-full rounded-full grid place-items-center bg-[#fbfbfd] dark:bg-[#141416] text-4xl font-bold tracking-tighter">KR</div>
            {HEADSHOT && !hsErr && (
              <img src={HEADSHOT} alt="Kalilur Rahman" onError={() => setHsErr(true)} className="absolute inset-[3px] w-[calc(100%-6px)] h-[calc(100%-6px)] rounded-full object-cover" />
            )}
          </div>
          <span data-reveal className={`${R} inline-block text-xs font-semibold uppercase tracking-wide text-[#0058b9] dark:text-[#6cb6ff] bg-[#0071e3]/10 px-3.5 py-1.5 rounded-full mb-6`}>Digital Transformation & AI Strategy</span>
          <h1 data-reveal className={`${R} font-bold leading-[1.02] tracking-[-0.035em] text-[clamp(44px,7vw,84px)]`}>
            Kalilur Rahman
            <span className="block font-semibold text-[#6e6e73] dark:text-[#a1a1a6] text-[clamp(20px,3.2vw,34px)] mt-3.5 tracking-[-0.02em]">Global IT Executive & AI Leader</span>
          </h1>
          <p data-reveal className={`${R} max-w-[620px] mx-auto mt-7 text-[19px] text-[#6e6e73] dark:text-[#a1a1a6] leading-[1.55]`}>
            Global IT executive and author shaping the future of <b className="text-[#1d1d1f] dark:text-white font-semibold">Quality Engineering</b>, <b className="text-[#1d1d1f] dark:text-white font-semibold">Agentic AI</b>, and <b className="text-[#1d1d1f] dark:text-white font-semibold">GCC leadership</b> — turning enterprise complexity into measurable value.
          </p>
          <div data-reveal className={`${R} flex flex-wrap gap-2.5 justify-center my-8`}>
            {["🏆 #3 Global Top Thought Leader", "🎯 Kaggle Legacy Grandmaster", "📚 3× Published Author"].map((b) => (
              <span key={b} className={`text-[13px] text-[#6e6e73] dark:text-[#a1a1a6] ${card} px-3.5 py-2`}>{b}</span>
            ))}
          </div>
          <div data-reveal className={`${R} flex gap-3.5 justify-center flex-wrap`}>
            <a href="#work" className="text-[15px] font-medium px-6 py-3 rounded-full bg-[#0071e3] text-white hover:bg-[#0058b9] transition-colors">Explore the work</a>
            <a href="#about" className={`text-[15px] font-medium px-6 py-3 rounded-full ${card} hover:border-[#86868b] transition-colors`}>Executive summary</a>
          </div>
          <div data-reveal className={`${R} grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-2 mt-[70px] border-y border-[#e8e8ed] dark:border-[#2a2a2e] py-8`}>
            {[["29+", "Years leadership"], ["5", "Continents"], ["80+", "Apps & repos"], ["482", "Certifications"], ["33", "Peer recommendations"]].map(([n, l]) => (
              <div key={l}><div className="text-[clamp(26px,3.4vw,40px)] font-bold tracking-[-0.03em]">{n}</div><div className="text-[12.5px] text-[#86868b] mt-1">{l}</div></div>
            ))}
          </div>
        </div>
      </header>

      {/* ABOUT / IMPACT */}
      <section id="about" className="py-24 max-w-[1120px] mx-auto px-6">
        <div data-reveal className={`${R} max-w-[760px] mb-12`}>
          <div className="text-xs font-semibold uppercase tracking-wider text-[#0058b9] dark:text-[#6cb6ff] mb-4">Executive Summary</div>
          <h2 className="text-[clamp(30px,4.4vw,48px)] leading-[1.08] font-medium tracking-[-0.03em] [font-family:Newsreader,Georgia,serif]">Strategy meets execution — from whiteboard to production.</h2>
          <p className="mt-4 text-[18px] text-[#6e6e73] dark:text-[#a1a1a6] leading-[1.6]">For nearly three decades I've worked at the intersection of technology and business strategy. Most recently as a Director at Novartis, I led the Data, Digital & IT strategy for the Global Capability Center — building it from the ground up.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {impact.map((m) => (
            <div key={m.h} data-reveal className={`${R} ${card} p-7`}>
              <div className="text-[42px] font-bold tracking-[-0.03em] text-[#0058b9] dark:text-[#6cb6ff]">{m.big}</div>
              <h4 className="text-[15px] font-semibold mt-1.5 mb-2">{m.h}</h4>
              <p className="text-[13.5px] text-[#6e6e73] dark:text-[#a1a1a6] leading-[1.55]">{m.p}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FRAMEWORKS */}
      <section id="frameworks" className="max-w-[1120px] mx-auto px-6 pb-24">
        <div data-reveal className={`${R} mb-12`}>
          <div className="text-xs font-semibold uppercase tracking-wider text-[#0058b9] dark:text-[#6cb6ff] mb-4">Signature Frameworks</div>
          <h2 className="text-[clamp(30px,4.4vw,48px)] font-bold tracking-[-0.03em]">Methodologies built for the AI era.</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {frameworks.map((f) => (
            <a key={f.h} href={f.u} target="_blank" rel="noopener noreferrer" data-reveal className={`${R} ${card} p-9 block hover:-translate-y-1 transition-transform`}>
              <span className="text-xs font-semibold text-[#0058b9] dark:text-[#6cb6ff] tracking-wide">{f.tag}</span>
              <h3 className="text-[26px] font-bold tracking-[-0.02em] mt-2.5 mb-3">{f.h}</h3>
              <p className="text-[14.5px] text-[#6e6e73] dark:text-[#a1a1a6] leading-[1.6]">{f.p}</p>
              <div className="mt-5 text-[12.5px] text-[#86868b]">Open framework →</div>
            </a>
          ))}
        </div>
      </section>

      {/* FEATURED WORK */}
      <section id="work" className="max-w-[1120px] mx-auto px-6 pb-24">
        <div data-reveal className={`${R} max-w-[760px] mb-12`}>
          <div className="text-xs font-semibold uppercase tracking-wider text-[#0058b9] dark:text-[#6cb6ff] mb-4">Featured Work</div>
          <h2 className="text-[clamp(30px,4.4vw,48px)] font-bold tracking-[-0.03em]">An ecosystem of apps, hubs & tools.</h2>
          <p className="mt-4 text-[18px] text-[#6e6e73] dark:text-[#a1a1a6]">A selection from 80+ shipped projects spanning AI, finance, quality engineering, enterprise strategy and research.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {featured.map((a) => (
            <a key={a.h} href={a.u} target="_blank" rel="noopener noreferrer" data-reveal className={`${R} ${card} p-6 block hover:-translate-y-1 hover:shadow-[0_12px_40px_-12px_rgba(0,0,0,0.1)] transition-all`}>
              <div className="w-11 h-11 rounded-xl grid place-items-center text-[22px] mb-5 bg-[#0071e3]/10">{a.i}</div>
              <div className="text-[11.5px] font-semibold uppercase tracking-wide text-[#86868b]">{a.c}</div>
              <h4 className="text-[17px] font-semibold my-2 tracking-[-0.01em]">{a.h}</h4>
              <p className="text-[13.5px] text-[#6e6e73] dark:text-[#a1a1a6] leading-[1.55]">{a.p}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-[13px] text-[#0071e3] dark:text-[#2997ff] font-medium">Visit live →</span>
            </a>
          ))}
        </div>
      </section>

      {/* ECOSYSTEM */}
      <section className="max-w-[1120px] mx-auto px-6 pb-24">
        <div data-reveal className={`${R} bg-[#1d1d1f] dark:bg-[#0c0c0e] dark:border dark:border-[#2a2a2e] text-white rounded-[28px] p-10 md:p-14`}>
          <div className="text-xs font-semibold uppercase tracking-wider text-[#7eb6ff] mb-4">The Digital Ecosystem</div>
          <h2 className="text-[clamp(30px,4.4vw,48px)] font-bold tracking-[-0.03em] text-white">Eighty-plus apps. One builder.</h2>
          <p className="text-[17px] text-[#a1a1a6] mt-3.5 max-w-[560px]">A working library spanning AI & prompts, enterprise strategy, learning, tools and side projects — all built and shipped.</p>
          <div className="grid gap-x-7 gap-y-8 mt-11" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))" }}>
            {ecosystem.map((col) => (
              <div key={col.t}>
                <h5 className="text-xs uppercase tracking-wider text-[#8a8a90] mb-3.5 font-semibold">{col.t}</h5>
                {col.items.map(([name, url]) => (
                  <a key={name} href={url} target="_blank" rel="noopener noreferrer" className="block text-[14px] text-[#e6e6ea] py-1.5 border-b border-[#2a2a2e] last:border-0 hover:text-white transition-colors">{name}</a>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WRITING */}
      <section id="writing" className="max-w-[1120px] mx-auto px-6 pb-24">
        <div data-reveal className={`${R} max-w-[760px] mb-12`}>
          <div className="text-xs font-semibold uppercase tracking-wider text-[#0058b9] dark:text-[#6cb6ff] mb-4">Published Works</div>
          <h2 className="text-[clamp(30px,4.4vw,48px)] font-medium tracking-[-0.03em] [font-family:Newsreader,Georgia,serif]">Selected books.</h2>
          <p className="mt-4 text-[18px] text-[#6e6e73] dark:text-[#a1a1a6]">Practical lessons from engineering, automation and transformation.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {books.map((b) => (
            <div key={b.h} data-reveal className={`${R} ${card} p-7 flex flex-col`}>
              <div className="h-[120px] rounded-[10px] grid place-items-center text-white text-[30px] mb-5" style={{ background: "linear-gradient(135deg,#1d1d1f,#3a3a3f)" }}>{b.i}</div>
              <h4 className="text-[16px] font-semibold mb-2">{b.h}</h4>
              <p className="text-[13px] text-[#6e6e73] dark:text-[#a1a1a6] leading-[1.5] flex-1">{b.p}</p>
              <a href={AMAZON} target="_blank" rel="noopener noreferrer" className="mt-3.5 text-[13px] text-[#0071e3] dark:text-[#2997ff] font-medium">Get the book →</a>
            </div>
          ))}
        </div>
      </section>

      {/* QUOTE */}
      <section className="max-w-[820px] mx-auto px-6 pb-24 text-center">
        <blockquote data-reveal className={`${R} text-[clamp(22px,3.2vw,32px)] leading-[1.4] tracking-[-0.02em] [font-family:Newsreader,Georgia,serif]`}>
          “Exceptional leadership, technology domain knowledge, and the sharpest mind and attention to detail I have ever experienced — a brilliant combination of executive presence and hands-on expertise.”
        </blockquote>
        <div data-reveal className={`${R} mt-6 text-[14px] text-[#6e6e73] dark:text-[#a1a1a6]`}><b className="text-[#1d1d1f] dark:text-white">Ajit Dhaliwal</b> — CIO, Group Enterprise Technology, Aviva · one of 33 peer recommendations</div>
      </section>

      {/* AWARDS */}
      <section id="recognition" className="max-w-[1120px] mx-auto px-6 pb-24">
        <div data-reveal className={`${R} mb-12`}>
          <div className="text-xs font-semibold uppercase tracking-wider text-[#0058b9] dark:text-[#6cb6ff] mb-4">Awards & Recognition</div>
          <h2 className="text-[clamp(30px,4.4vw,48px)] font-bold tracking-[-0.03em]">Independent validation of impact.</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
          {awards.map(([yr, h, p]) => (
            <div key={h} data-reveal className={`${R} flex gap-5 py-6 border-b border-[#e8e8ed] dark:border-[#2a2a2e]`}>
              <div className="text-[13px] text-[#86868b] min-w-[72px]">{yr}</div>
              <div><h4 className="text-[16px] font-semibold">{h}</h4><p className="text-[13.5px] text-[#6e6e73] dark:text-[#a1a1a6] mt-1">{p}</p></div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="max-w-[1120px] mx-auto px-6 pb-24 text-center">
        <div data-reveal className={R}>
          <div className="text-xs font-semibold uppercase tracking-wider text-[#0058b9] dark:text-[#6cb6ff] mb-4">Contact</div>
          <h2 className="text-[clamp(30px,4.4vw,48px)] font-bold tracking-[-0.03em] max-w-[680px] mx-auto">Let's explore building something together.</h2>
          <p className="text-[18px] text-[#6e6e73] dark:text-[#a1a1a6] max-w-[560px] mx-auto mt-4">Open to advisory conversations, board-level discussions, framework development and speaking engagements. India-based, global remit.</p>
          <div className="mt-8 flex gap-3.5 justify-center flex-wrap">
            <a href="mailto:rahman.kalilur@outlook.com" className="text-[15px] font-medium px-6 py-3 rounded-full bg-[#0071e3] text-white hover:bg-[#0058b9] transition-colors">Email me</a>
            <a href="https://www.linkedin.com/in/kalilurrahman/" target="_blank" rel="noopener noreferrer" className={`text-[15px] font-medium px-6 py-3 rounded-full ${card} hover:border-[#86868b] transition-colors`}>Connect on LinkedIn</a>
          </div>
          <div className="mt-12 flex gap-2 justify-center flex-wrap">
            {socials.map(([n, u]) => (
              <a key={n} href={u} target="_blank" rel="noopener noreferrer" className={`text-[13px] text-[#6e6e73] dark:text-[#a1a1a6] ${card} px-4 py-2.5 hover:border-[#86868b] hover:text-[#1d1d1f] dark:hover:text-white transition-colors`}>{n}</a>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-[#e8e8ed] dark:border-[#2a2a2e] py-8 text-[13px] text-[#86868b]">
        <div className="max-w-[1120px] mx-auto px-6 flex justify-between flex-wrap gap-3.5">
          <span>© 2026 Kalilur Rahman. All rights reserved.</span>
          <a href="https://kalilur-portfolio.lovable.app" target="_blank" rel="noopener noreferrer" className="hover:text-[#1d1d1f] dark:hover:text-white transition-colors">kalilur-portfolio.lovable.app</a>
        </div>
      </footer>
    </div>
  );
}
