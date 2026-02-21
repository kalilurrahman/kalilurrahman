import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ExternalLink, Brain, Sparkles, BookOpen, Award, Cpu, Database, Bot, GraduationCap } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.5 },
};

const heroStats = [
  { n: "350+", l: "AI Agents Built", icon: Bot },
  { n: "28", l: "Agent Categories", icon: Cpu },
  { n: "482", l: "Certifications", icon: Award },
  { n: "Grandmaster", l: "Kaggle Legacy", icon: Database },
];

const aiCapabilities = [
  { icon: Brain, title: "Enterprise AI Strategy", desc: "Designing AI adoption roadmaps for regulated industries — Pharma, Financial Services, and Technology. From use-case identification to executive buy-in, governance frameworks and ROI measurement." },
  { icon: Bot, title: "Agentic AI Architecture", desc: "350+ production-ready AI agent definitions across 28 categories. Deep expertise in autonomous agents, multi-agent orchestration, LangChain, CrewAI, and custom agentic workflows." },
  { icon: Sparkles, title: "LLM & GenAI Implementation", desc: "Hands-on experience with GPT-4, Claude, Gemini, and open-source models. Prompt engineering, RAG pipelines, fine-tuning strategies, and responsible AI deployment." },
  { icon: Database, title: "Data Science & Analytics", desc: "Kaggle Legacy Grandmaster — top-tier global data practitioner. Feature engineering, ensemble methods, deep learning, and translating competition-grade techniques into enterprise solutions." },
  { icon: GraduationCap, title: "AI Research & Mentorship", desc: "PhD Research Guide with 236-prompt Research Assistant tool. Academic mentoring across 39 research domains including AI/ML, NLP, computer vision, and reinforcement learning." },
  { icon: BookOpen, title: "AI Knowledge Curation", desc: "Author of Python Data Visualisation Essentials Guide. Curated 1,000+ Kaggle notebooks, awesome-llm-apps collection, and comprehensive generative AI learning guide." },
];

const aiCertifications = [
  "AWS Machine Learning Specialty", "DeepLearning.AI Deep Learning Specialisation",
  "DeepLearning.AI NLP Specialisation", "DeepLearning.AI TensorFlow Developer",
  "Google Cloud Professional ML Engineer", "IBM Data Science Professional",
  "DataCamp Python for Data Science", "Microsoft Data Analyst Associate",
  "27+ AWS Certifications (incl. ML/AI)", "Coursera AI for Everyone",
  "Stanford Machine Learning (Andrew Ng)", "Fast.ai Practical Deep Learning",
];

const aiProjects = [
  { name: "Agentic AI Library v3.0", desc: "350+ AI agent definitions across Technology, Research, Advisory, Engineering — the most comprehensive open library of its kind.", link: "/ai-agents", external: false },
  { name: "PhD Research Assistant v7.0", desc: "236 expert-grade prompts across 39 domains — qualitative & quantitative research, dissertation architecture, grant writing.", link: "https://kalilurrahman.github.io/PhDResearchAssistant.html", external: true },
  { name: "Quality Engineering Book by LLMs", desc: "An experimental book on QE generated entirely by large language models — exploring AI-driven knowledge creation.", link: "https://github.com/kalilurrahman/QualityEngineeringBookByLLMs", external: true },
  { name: "1,000 Kaggle Notebooks", desc: "Landmark collection spanning EDA, feature engineering, ML modeling and deep learning across diverse competition datasets.", link: "https://github.com/kalilurrahman/1000_KaggleNoteBooks", external: true },
  { name: "Awesome LLM Apps", desc: "Curated collection of LLM applications with AI Agents and RAG using OpenAI, Anthropic, Gemini and open-source models.", link: "https://github.com/kalilurrahman/awesome-llm-apps", external: true },
  { name: "Aptest Quality Engineer", desc: "AI-assisted quality engineering automation platform generating test plans, test cases and defect reports using LLM prompts.", link: "https://github.com/kalilurrahman/AptestQualityEngineer", external: true },
];

const engagementTypes = [
  { title: "AI Strategy Advisory", desc: "Designing enterprise AI roadmaps, identifying high-impact use cases, building governance frameworks, and presenting to boards and C-suite." },
  { title: "Agentic AI Workshops", desc: "Hands-on sessions on building AI agent systems — from single agents to multi-agent orchestration with production-grade guardrails." },
  { title: "Data & AI Team Building", desc: "Structuring and scaling data science and AI teams within GCCs and enterprises. Hiring, upskilling, and performance frameworks." },
  { title: "AI Mentorship & Coaching", desc: "1:1 mentoring for professionals transitioning into AI roles — from prompt engineering to ML engineering to AI leadership." },
];

export default function ProfileAIAdvisor() {
  return (
    <div className="min-h-screen bg-background">
      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5 no-underline">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-xs font-mono font-semibold text-primary-foreground">KR</div>
            <span className="text-sm font-medium text-foreground hidden sm:block">AI Advisor Profile</span>
          </Link>
          <div className="flex items-center gap-3">
            <Link to="/" className="text-xs text-muted-foreground hover:text-primary transition-colors">Home</Link>
            <Link to="/profile/gcc-advisor" className="text-xs text-muted-foreground hover:text-primary transition-colors hidden sm:block">GCC</Link>
            <Link to="/profile/coe-champion" className="text-xs text-muted-foreground hover:text-primary transition-colors hidden sm:block">CoE</Link>
            <Link to="/profile/digital-transformation" className="text-xs text-muted-foreground hover:text-primary transition-colors hidden sm:block">DX</Link>
            <ThemeToggle />
          </div>
        </div>
      </nav>

      {/* Hero */}
      <motion.section className="relative py-20 px-6 overflow-hidden" {...fadeUp}>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5 pointer-events-none" />
        <div className="absolute top-10 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-5xl mx-auto relative">
          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-xs text-primary font-medium">🤖 AI Advisor</span>
            <span className="px-3 py-1 bg-accent/10 border border-accent/20 rounded-full text-xs text-accent font-medium">Kaggle Grandmaster</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif text-foreground mb-4">
            AI & Data Science <em className="text-primary italic">Advisory</em>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed mb-10">
            From Kaggle competitions to enterprise AI strategy — 29+ years of technology leadership with deep expertise in machine learning, generative AI, agentic systems, and data-driven transformation.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {heroStats.map(s => {
              const Icon = s.icon;
              return (
                <div key={s.l} className="p-5 bg-card border border-border rounded-xl text-center group hover:border-primary/40 transition-colors">
                  <Icon className="w-5 h-5 text-primary mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <span className="block font-serif text-2xl text-primary">{s.n}</span>
                  <span className="text-[11px] text-muted-foreground">{s.l}</span>
                </div>
              );
            })}
          </div>
        </div>
      </motion.section>

      <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      {/* Capabilities */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div className="mb-10" {...fadeUp}>
            <span className="text-xs font-bold tracking-[0.14em] uppercase text-muted-foreground">Core Capabilities</span>
            <h2 className="font-serif text-3xl text-foreground mt-2">What I Bring to AI Engagements</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {aiCapabilities.map((cap, i) => {
              const Icon = cap.icon;
              return (
                <motion.div key={cap.title} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.08 }}
                  className="p-6 bg-card border border-border rounded-xl hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all group">
                  <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-serif text-lg text-foreground mb-2">{cap.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{cap.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* AI Projects */}
      <section className="py-16 px-6 bg-card/50">
        <div className="max-w-5xl mx-auto">
          <motion.div className="mb-10" {...fadeUp}>
            <span className="text-xs font-bold tracking-[0.14em] uppercase text-muted-foreground">AI Portfolio</span>
            <h2 className="font-serif text-3xl text-foreground mt-2">Projects & Artefacts</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-4">
            {aiProjects.map((p, i) => {
              const inner = (
                <motion.div key={p.name} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.06 }}
                  className="p-5 bg-background border border-border rounded-xl hover:border-primary/30 transition-all group cursor-pointer">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors">{p.name}</h3>
                    <span className="text-muted-foreground text-[10px]">{p.external ? "↗" : "→"}</span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
                </motion.div>
              );
              return p.external ? (
                <a key={p.name} href={p.link} target="_blank" rel="noopener noreferrer" className="no-underline">{inner}</a>
              ) : (
                <Link key={p.name} to={p.link} className="no-underline">{inner}</Link>
              );
            })}
          </div>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* Certifications */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div className="mb-10" {...fadeUp}>
            <span className="text-xs font-bold tracking-[0.14em] uppercase text-muted-foreground">Credentials</span>
            <h2 className="font-serif text-3xl text-foreground mt-2">AI & Data Certifications</h2>
            <p className="text-sm text-muted-foreground mt-2">Selected from 482 total certifications</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {aiCertifications.map((cert, i) => (
              <motion.div key={cert} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.04 }}
                className="px-4 py-3 bg-card border border-border rounded-lg text-sm text-foreground hover:border-primary/30 transition-colors">
                {cert}
              </motion.div>
            ))}
          </div>
          <motion.div className="mt-6" {...fadeUp}>
            <a href="https://www.credly.com/users/kalilur-rahman/badges" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-primary hover:underline">
              View all verified badges on Credly <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </motion.div>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      {/* Engagement Types */}
      <section className="py-16 px-6 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-5xl mx-auto">
          <motion.div className="mb-10" {...fadeUp}>
            <span className="text-xs font-bold tracking-[0.14em] uppercase text-muted-foreground">How We Can Work Together</span>
            <h2 className="font-serif text-3xl text-foreground mt-2">AI Advisory Engagements</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-5">
            {engagementTypes.map((e, i) => (
              <motion.div key={e.title} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.1 }}
                className="p-6 bg-card border border-border rounded-xl">
                <h3 className="font-serif text-lg text-foreground mb-2">{e.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{e.desc}</p>
              </motion.div>
            ))}
          </div>
          <motion.div className="mt-10 flex flex-wrap gap-4" {...fadeUp}>
            <a href="mailto:rahman.kalilur@outlook.com" className="px-6 py-3 bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity rounded-lg">
              Discuss AI Advisory
            </a>
            <a href="https://www.linkedin.com/in/kalilurrahman/" target="_blank" rel="noopener noreferrer"
              className="px-6 py-3 border border-border text-foreground font-medium text-sm hover:border-primary/50 transition-colors rounded-lg inline-flex items-center gap-2">
              Connect on LinkedIn <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-6 px-6 text-center">
        <div className="flex justify-center gap-3 flex-wrap mb-3">
          <Link to="/" className="text-xs text-muted-foreground hover:text-primary transition-colors">Home</Link>
          <Link to="/profile/gcc-advisor" className="text-xs text-muted-foreground hover:text-primary transition-colors">GCC Advisor</Link>
          <Link to="/profile/coe-champion" className="text-xs text-muted-foreground hover:text-primary transition-colors">CoE Champion</Link>
          <Link to="/profile/digital-transformation" className="text-xs text-muted-foreground hover:text-primary transition-colors">DX Champion</Link>
        </div>
        <p className="text-[11px] text-muted-foreground">© Kalilur Rahman · AI Advisor Profile</p>
      </footer>
    </div>
  );
}
