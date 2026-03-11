import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";

const stats = [
  { n: "29+", l: "Years Experience", sub: "IT, GCCs, Consulting" },
  { n: "482", l: "Certifications", sub: "Across all domains" },
  { n: "350+", l: "AI Agents", sub: "28 categories" },
  { n: "16", l: "Publications", sub: "Books & papers" },
  { n: "33", l: "Recommendations", sub: "From peers & leaders" },
];

const badges = [
  "🏆 #3 Global Thought Leader",
  "⭐ Kaggle Grandmaster",
  "📚 3 Books Published",
  "🎓 PhD Research Guide",
  "🤖 350+ AI Agents",
  "🏅 482 Certifications",
];

const skillTags = [
  "Enterprise Transformation", "Quality Engineering", "GCC Leadership",
  "Data & AI", "Test Automation", "Cloud & DevOps", "Strategic Advisory", "P&L Ownership",
];

const profileLinks = [
  { icon: "💼", label: "LinkedIn", url: "https://www.linkedin.com/in/kalilurrahman/" },
  { icon: "📊", label: "Kaggle — Grandmaster", url: "https://www.kaggle.com/kalilurrahman" },
  { icon: "⚙️", label: "GitHub", url: "https://github.com/kalilurrahman" },
  { icon: "🎨", label: "Framer Portfolio", url: "https://kalilurrahman.framer.website" },
  { icon: "✉️", label: "kalilur.rahman@gmail.com", url: "mailto:kalilur.rahman@gmail.com", external: false },
];

const ghPages = [
  { emoji: "📚", type: "Static Site", name: "KR Knowledge Hub", desc: "Comprehensive searchable record — 482 certifications, 293 learning items, 16 publications, 13 awards, 33 recommendations.", link: "/knowledge-hub", external: false },
  { emoji: "🤖", type: "Static Site · v3.0", name: "Agentic AI Library", desc: "350+ AI agent definitions across 28 categories — Technology, Research, Advisory, Engineering and more.", link: "/ai-agents", external: false },
  { emoji: "📖", type: "GitHub · Open Source", name: "Quality Engineering Book by LLMs", desc: "An experimental book on Quality Engineering generated entirely by large language models.", link: "https://github.com/kalilurrahman/QualityEngineeringBookByLLMs", external: true },
  { emoji: "🌐", type: "Portfolio Site", name: "Main Portfolio", desc: "Global IT Executive portfolio — executive summary, leadership, books, awards, projects, and omni-channel presence.", link: "/", external: false },
  { emoji: "🎓", type: "Lovable App", name: "Training Portfolio", desc: "60 strategic corporate training programs across QE, AI, Healthcare, GCC Strategy & Leadership.", link: "https://kr-training-portfolio.lovable.app/", external: true },
  { emoji: "🏢", type: "Lovable App", name: "GCC Playbook", desc: "Comprehensive guide to building and scaling Global Capability Centers — phases, maturity, geography.", link: "https://kr-gcc-playbook.lovable.app", external: true },
  { emoji: "⚛️", type: "Lovable App", name: "Quantum Computing Guide", desc: "201 essential quantum computing terms — searchable glossary across 6 categories.", link: "https://kr-quantum-hub.lovable.app/", external: true },
  { emoji: "🧠", type: "Lovable App", name: "Agentic AI Prompts Hub", desc: "200+ agentic AI prompts with PDF/JSON export and custom library upload.", link: "https://kr-agentic-ai-prompts.lovable.app", external: true },
  { emoji: "🖥️", type: "Lovable App", name: "Prompt Terminal Builder", desc: "Interactive prompt engineering workbench — terminal-style interface with template library and multi-model export.", link: "https://kr-prompt-terminal-builder.lovable.app", external: true },
  { emoji: "💹", type: "Lovable App", name: "Financial Engineering & Advisory Prompts", desc: "1,120+ curated prompts across 3 AI platforms with Bloomberg-style FINPROMPT Terminal.", link: "https://kr-finance-prompt-hub.lovable.app/", external: true },
  { emoji: "🛡️", type: "Lovable App", name: "ACUITAS — AI QE Framework", desc: "7-pillar AI Quality Engineering framework aligned with ISO 42001, NIST AI RMF & EU AI Act. 6 use cases, 4 case studies, 6 templates.", link: "https://kr-acuiitas-clarity-frameworks.lovable.app/", external: true },
  { emoji: "✅", type: "Lovable App", name: "VERITAS — QE Framework", desc: "Comprehensive Quality Engineering framework — Verification, Evaluation, Risk, Integrity, Testing, Assurance & Standards.", link: "https://kr-veritas-qe-framework.lovable.app", external: true },
  { emoji: "🏢", type: "Lovable App", name: "GCC Compass", desc: "Operating dashboard for GCC leaders — maturity assessments, 19-phase lifecycle map, AI advisor, cost model calculator.", link: "https://kr-gcc-compass.lovable.app", external: true },
  { emoji: "📝", type: "Lovable App", name: "ExecComms Forge", desc: "AI-powered executive communication builder — board memos, presentations, OKR write-ups. 40+ templates across 5 sectors.", link: "https://kr-exec-scribe.lovable.app", external: true },
  { emoji: "🎯", type: "Lovable App", name: "Corporate Upskilling Planner", desc: "L&D roadmap builder — structured 6/12-month learning roadmaps with skills matrices and certification alignment.", link: "https://kr-corp-upskill.lovable.app", external: true },
  { emoji: "🔍", type: "Lovable App", name: "QE Compass", desc: "Quality Engineering reference platform — ISTQB cert prep, AI test case generator, 180+ quizzes, 400+ glossary terms.", link: "https://kr-qe-compass.lovable.app", external: true },
  { emoji: "📊", type: "Lovable App", name: "Kaggle Bootcamp", desc: "90-day learning path from Python basics to Kaggle competitions — daily challenges, notebook templates, Grandmaster strategies.", link: "https://kr-kaggle-skill-hub.lovable.app", external: true },
  { emoji: "🧠", type: "Lovable App", name: "AI Literacy Hub", desc: "AI education platform — courses, modules, and learning paths covering AI fundamentals, machine learning, and neural networks.", link: "https://kr-ai-literacy-hub.lovable.app", external: true },
  { emoji: "💼", type: "Lovable App", name: "Interview Prep Vault", desc: "Technical interview preparation — coding challenges, behavioral questions, system design practice, and structured guides.", link: "https://kr-interview-prep-vault.lovable.app", external: true },
  { emoji: "🔐", type: "Lovable App", name: "Acronym Buster — Cyber Lexicon Hub", desc: "1,837 tech acronyms across Cyber Security, Infrastructure, Cloud & Operations — searchable reference cards.", link: "https://kr-cyber-lexicon-hub.lovable.app", external: true },
  { emoji: "🧩", type: "Lovable App", name: "Quiz Master — Quiz Blitz Hub", desc: "Trending topic quiz platform — 9 categories including Technology, AI, Business, Finance & Current Affairs with leaderboard.", link: "https://kr-quiz-blitz-hub.lovable.app", external: true },
  { emoji: "🤖", type: "Lovable App", name: "Agent Flow Studio", desc: "Visual AI agent workflow builder — design, chain, and orchestrate multi-step AI agent flows.", link: "https://kr-ai-agent-flow.lovable.app", external: true },
  { emoji: "🎨", type: "Lovable App", name: "Agent Canvas", desc: "Interactive canvas for designing AI agent workflows — connect nodes and visualise pipelines.", link: "https://kr-ai-workflow-gen.lovable.app", external: true },
  { emoji: "🕸️", type: "Lovable App", name: "Agent Weaver", desc: "Compose multi-agent systems with configurable roles and handoffs.", link: "https://kr-ai-agent-weaver.lovable.app", external: true },
  { emoji: "📄", type: "Lovable App", name: "Doc Transformer", desc: "AI-powered document simplification — transform complex docs into clear, accessible content.", link: "https://kr-tech-simplifier.lovable.app", external: true },
  { emoji: "👤", type: "Lovable App", name: "Profile Studio", desc: "Professional profile search and optimization tool across platforms.", link: "https://kr-profile-search.lovable.app", external: true },
  { emoji: "🎯", type: "Lovable App", name: "Profile Perfecter", desc: "Smart JD-to-profile matcher with AI-powered gap analysis.", link: "https://kr-jd-smart-profile.lovable.app", external: true },
  { emoji: "🧪", type: "Lovable App", name: "TestForge AI", desc: "AI-powered test automation generator — test scripts, plans, and quality artefacts from requirements.", link: "https://kr-test-automator.lovable.app", external: true },
  { emoji: "🔗", type: "Lovable App", name: "Nexus Unified Hub", desc: "All-in-one tool aggregator — unified access to multiple productivity tools.", link: "https://kr-omni-tool-hub.lovable.app", external: true },
  { emoji: "⌨️", type: "Lovable App", name: "Prompt Builder Hub", desc: "Terminal-inspired prompt composition studio with template support.", link: "https://kr-terminal-muse-maker.lovable.app", external: true },
  { emoji: "💡", type: "Lovable App", name: "Idea Vault Pro", desc: "Capture, organise, and prioritise product and project ideas with scoring.", link: "https://kr-app-ideas-vault.lovable.app", external: true },
  { emoji: "📈", type: "Lovable App", name: "KR Insights", desc: "Curated insights hub — trends and analysis across technology, business, and leadership.", link: "https://kr-app-nexus.lovable.app", external: true },
  { emoji: "🗺️", type: "Lovable App", name: "Resource Navigator", desc: "Structured learning path hub — curated resources and progression tracks.", link: "https://kr-learning-path-hub.lovable.app", external: true },
  { emoji: "📱", type: "Lovable App", name: "Social Dashboard Hub", desc: "Social media content dashboard — posts, quizzes, blogs, and thought leadership.", link: "https://social-dashboard-hub.lovable.app", external: true },
  { emoji: "🟦", type: "Game", name: "Tetris Stack", desc: "Classic Tetris with increasing difficulty — responsive web app for desktop and mobile.", link: "https://kr-tetris-stack.lovable.app", external: true },
  { emoji: "💰", type: "Finance App", name: "Expense Tracker", desc: "Personal finance tracker — log expenses, set budgets, visualise spending.", link: "https://kr-expense-tracker.lovable.app", external: true },
  { emoji: "❓", type: "Game", name: "Jeopardy Quiz", desc: "Jeopardy-style quiz with category-based questions, scoring, and smooth animations.", link: "https://kr-jeopardy-quiz.lovable.app", external: true },
  { emoji: "🧘", type: "Productivity", name: "Mindful Flow", desc: "Personal dashboard — daily goals, to-do lists, finances, and habits.", link: "https://mindful-flow-82.lovable.app", external: true },
  { emoji: "🌐", type: "Lovable App", name: "AIOTI AI App", desc: "AI of Things Intelligence — exploring AI and IoT intersections.", link: "https://aiotiai.lovable.app", external: true },
];

const platforms = [
  { emoji: "💼", type: "Professional Network", name: "LinkedIn", desc: "Primary professional profile — 29+ years of experience, 33 recommendations, thought leadership.", url: "https://www.linkedin.com/in/kalilurrahman/" },
  { emoji: "📊", type: "Data Science", name: "Kaggle", desc: "Kaggle Legacy Grandmaster — competition notebooks, datasets, and data science work.", url: "https://www.kaggle.com/kalilurrahman" },
  { emoji: "⚙️", type: "Code & Open Source", name: "GitHub", desc: "Open-source QE artefacts, LLM experiments, and GitHub Pages projects.", url: "https://github.com/kalilurrahman" },
  { emoji: "🎨", type: "Visual Portfolio", name: "Framer Portfolio", desc: "Rich, interactive portfolio showcasing career milestones, projects, and achievements.", url: "https://kalilurrahman.framer.website" },
  { emoji: "📖", type: "Author", name: "Amazon Author Page", desc: "Three published books — Python Data Visualisation, Science of Selenium, Innovations in Testing.", url: "https://www.amazon.com/stores/Kalilur-Rahman/author/B0863JL6R7" },
  { emoji: "🔬", type: "Academic", name: "Google Scholar", desc: "Academic citations and research publications on DevOps, testing, digital transformation.", url: "https://scholar.google.com/citations?user=hCYBFKYAAAAJ&hl=en" },
  { emoji: "📋", type: "Research", name: "PublicationsList", desc: "Full list of white-papers — Impacts of DevOps on Testing, Test Data Masking, and more.", url: "https://publicationslist.org/kalilur.rahman" },
  { emoji: "🏅", type: "Credentials", name: "Credly", desc: "Verified badge-based certifications — AWS, Google Cloud, Microsoft, IBM.", url: "https://www.credly.com/users/kalilur-rahman/badges" },
  { emoji: "✦", type: "Social", name: "X (Twitter)", desc: "Short-form thoughts on technology, quality engineering, data, AI, and leadership.", url: "https://x.com/krahman" },
  { emoji: "🔗", type: "Directory", name: "Linktree", desc: "Single page aggregating all platforms, links, and resources.", url: "https://linktr.ee/kalilur.rahman" },
];

const knowledgeDeepDives = [
  { emoji: "🏆", name: "482 Certifications", desc: "AWS (28), Google Cloud, Microsoft, DeepLearning.AI, Coursera, DataCamp, IBM, Tricentis, ServiceNow." },
  { emoji: "📝", name: "16 Publications", desc: "Books, white-papers, Kindle publications, and academic papers spanning testing, DevOps, Python." },
  { emoji: "⭐", name: "13 Awards & Honours", desc: "#3 Global Top Thought Leader, Innovative CIO 2023, IT NEXT100 Future CIO, Pharma Leadership Award." },
  { emoji: "💬", name: "33 Recommendations", desc: "Endorsements from colleagues, direct reports, peers, and C-suite leaders." },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.5 },
};

export default function DigitalHub() {
  return (
    <div className="min-h-screen bg-background">

      {/* Hero */}
      <motion.section className="text-center py-14 px-6 relative overflow-hidden" {...fadeUp}>
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse,hsl(var(--primary)/0.06),transparent_65%)] pointer-events-none" />
        <span className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-3.5 py-1 text-[11px] text-primary mb-5">⬡ KR Digital Hub · Master Profile</span>
        <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-3.5">Everything in <em className="text-primary italic">One Place</em></h1>
        <p className="max-w-[520px] mx-auto text-muted-foreground text-[14.5px] leading-relaxed mb-8">All platforms, knowledge resources, projects, and tools — curated across the full breadth of a 29-year career in technology leadership.</p>
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {badges.map(b => (
            <span key={b} className="bg-card border border-border rounded px-3 py-1 text-[11.5px] text-muted-foreground">{b}</span>
          ))}
        </div>
      </motion.section>

      <div className="h-px bg-border" />

      <div className="max-w-[1100px] mx-auto px-6 py-10">
        {/* Stats */}
        <motion.div className="bg-card border border-border rounded-xl overflow-hidden flex flex-wrap mb-9" {...fadeUp}>
          {stats.map(s => (
            <div key={s.l} className="flex-1 min-w-[110px] py-4 px-3.5 text-center border-r border-border last:border-r-0">
              <span className="block font-serif text-2xl text-primary leading-none mb-1">{s.n}</span>
              <span className="text-[11px] text-muted-foreground">{s.l}</span>
              <span className="block text-[9.5px] text-muted-foreground font-mono mt-0.5">{s.sub}</span>
            </div>
          ))}
        </motion.div>

        {/* Profile */}
        <motion.div className="mb-12" {...fadeUp}>
          <div className="mb-5">
            <span className="inline-flex text-[10px] font-bold tracking-[0.14em] uppercase text-muted-foreground border border-border rounded px-2.5 py-0.5 font-mono mb-2">Profile</span>
            <h2 className="font-serif text-[22px] text-foreground">Who I am</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-6 items-start">
            <div className="bg-card border border-border rounded-xl overflow-hidden">
              <div className="p-5 border-b border-border text-center bg-gradient-to-b from-secondary to-card">
                <div className="w-[72px] h-[72px] rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center font-mono font-bold text-[22px] text-primary-foreground mx-auto mb-3 shadow-[0_0_0_3px_hsl(var(--card)),0_0_0_5px_hsl(var(--border))]">KR</div>
                <div className="font-serif text-xl text-foreground mb-1">Kalilur Rahman</div>
                <div className="text-xs text-muted-foreground mb-3">Global IT Executive · Author · Kaggle Grandmaster</div>
                <div className="flex flex-wrap justify-center gap-1.5">
                  {["Enterprise Transformation", "Quality Engineering", "Data & AI", "GCC Leadership", "Kaggle Grandmaster"].map(t => (
                    <span key={t} className="bg-secondary border border-border rounded px-2 py-0.5 text-[10.5px] text-muted-foreground font-mono">{t}</span>
                  ))}
                </div>
              </div>
              <div className="p-3">
                {profileLinks.map(l => (
                  <a key={l.label} href={l.url} target={l.external !== false ? "_blank" : undefined} rel="noopener noreferrer" className="flex items-center gap-2.5 px-2.5 py-2 rounded-md border border-border bg-secondary text-muted-foreground text-[12.5px] mb-1.5 last:mb-0 hover:border-primary hover:text-primary transition-colors no-underline">
                    <span className="text-[15px]">{l.icon}</span>
                    <span className="flex-1 font-medium text-foreground text-[12.5px]">{l.label}</span>
                    <span className="text-[10px] text-muted-foreground">{l.external !== false ? "↗" : "→"}</span>
                  </a>
                ))}
              </div>
            </div>
            <div className="bg-card border border-border rounded-xl p-5">
              <h3 className="font-serif text-lg text-foreground mb-3">29+ years of technology leadership</h3>
              <p className="text-[13px] text-muted-foreground leading-relaxed mb-3">I'm a <strong className="text-foreground">Global IT Executive</strong> with deep expertise in enterprise transformation, Quality Engineering, and data & AI strategy, built across 29+ years leading GCCs, TCoEs, and digital programs in Pharma and Technology.</p>
              <p className="text-[13px] text-muted-foreground leading-relaxed mb-3">I've built and led a <strong className="text-foreground">400+ person GCC</strong>, co-founded <strong className="text-foreground">India's first pharma digital innovation hub</strong>, turned around a <strong className="text-foreground">220-member TCoE</strong> from negative margins to 30%+ profitability, and been recognised as a <strong className="text-foreground">Top-10 global thought leader</strong> by Thinkers360.</p>
              <p className="text-[13px] text-muted-foreground leading-relaxed">Beyond leadership, I'm a <strong className="text-foreground">Kaggle Legacy Grandmaster</strong>, published author of three technical books, speaker, and active knowledge-sharer across multiple platforms.</p>
              <div className="flex flex-wrap gap-1.5 mt-3.5">
                {skillTags.map(s => (
                  <span key={s} className="bg-secondary border border-border rounded px-2 py-0.5 text-[11px] text-muted-foreground font-mono">{s}</span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* GitHub Pages Projects */}
        <motion.div className="mb-12" {...fadeUp}>
          <div className="mb-5">
            <span className="inline-flex text-[10px] font-bold tracking-[0.14em] uppercase text-muted-foreground border border-border rounded px-2.5 py-0.5 font-mono mb-2">GitHub Pages Projects</span>
            <h2 className="font-serif text-[22px] text-foreground mb-1">Static sites & interactive tools</h2>
            <p className="text-[13px] text-muted-foreground">All projects hosted at kalilurrahman.github.io</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {ghPages.map(p => {
              const inner = (
                <div className="border border-border rounded-xl p-4 bg-card hover:border-primary hover:-translate-y-0.5 transition-all relative overflow-hidden group">
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="absolute top-3 right-3 text-[11px] text-muted-foreground">{p.external ? "↗" : "→"}</span>
                  <span className="text-xl block mb-2.5">{p.emoji}</span>
                  <span className="text-[9.5px] font-mono text-muted-foreground uppercase tracking-[0.1em] block mb-1">{p.type}</span>
                  <span className="font-semibold text-sm text-foreground block mb-1.5">{p.name}</span>
                  <span className="text-xs text-muted-foreground leading-relaxed">{p.desc}</span>
                </div>
              );
              return p.external ? (
                <a key={p.name} href={p.link} target="_blank" rel="noopener noreferrer" className="no-underline">{inner}</a>
              ) : (
                <Link key={p.name} to={p.link} className="no-underline">{inner}</Link>
              );
            })}
          </div>
        </motion.div>

        {/* Professional Platforms */}
        <motion.div className="mb-12" {...fadeUp}>
          <div className="mb-5">
            <span className="inline-flex text-[10px] font-bold tracking-[0.14em] uppercase text-muted-foreground border border-border rounded px-2.5 py-0.5 font-mono mb-2">Professional Platforms</span>
            <h2 className="font-serif text-[22px] text-foreground mb-1">Where to find me</h2>
            <p className="text-[13px] text-muted-foreground">Active across 10+ professional and technical communities</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {platforms.map(p => (
              <a key={p.name} href={p.url} target="_blank" rel="noopener noreferrer" className="border border-border rounded-xl p-4 bg-card hover:border-primary hover:-translate-y-0.5 transition-all relative overflow-hidden group no-underline">
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="absolute top-3 right-3 text-[11px] text-muted-foreground">↗</span>
                <span className="text-xl block mb-2.5">{p.emoji}</span>
                <span className="text-[9.5px] font-mono text-muted-foreground uppercase tracking-[0.1em] block mb-1">{p.type}</span>
                <span className="font-semibold text-sm text-foreground block mb-1.5">{p.name}</span>
                <span className="text-xs text-muted-foreground leading-relaxed">{p.desc}</span>
              </a>
            ))}
          </div>
        </motion.div>

        {/* Knowledge Deep-Dives */}
        <motion.div className="mb-12" {...fadeUp}>
          <div className="mb-5">
            <span className="inline-flex text-[10px] font-bold tracking-[0.14em] uppercase text-muted-foreground border border-border rounded px-2.5 py-0.5 font-mono mb-2">Knowledge & Deep-Dives</span>
            <h2 className="font-serif text-[22px] text-foreground">Curated knowledge resources</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {knowledgeDeepDives.map(d => (
              <Link key={d.name} to="/knowledge-hub" className="border border-border rounded-xl p-4 bg-card hover:border-primary hover:-translate-y-0.5 transition-all group no-underline">
                <span className="text-xl block mb-2.5">{d.emoji}</span>
                <span className="font-semibold text-sm text-foreground block mb-1.5">{d.name}</span>
                <span className="text-xs text-muted-foreground leading-relaxed">{d.desc}</span>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-6 px-6 text-center">
        <div className="flex justify-center gap-1 flex-wrap mb-3">
          <Link to="/" className="px-2 py-1 rounded text-xs text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors no-underline">Home</Link>
          <Link to="/knowledge-hub" className="px-2 py-1 rounded text-xs text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors no-underline">Knowledge Hub</Link>
          <Link to="/ai-agents" className="px-2 py-1 rounded text-xs text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors no-underline">🤖 AI Agents</Link>
          <a href="https://www.linkedin.com/in/kalilurrahman/" target="_blank" rel="noopener noreferrer" className="px-2 py-1 rounded text-xs text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors no-underline">LinkedIn ↗</a>
        </div>
        <p className="text-[11px] text-muted-foreground">© <strong>Kalilur Rahman</strong> · Built with intent & precision</p>
      </footer>
    </div>
  );
}
