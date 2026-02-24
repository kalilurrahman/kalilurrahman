import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ExternalLink, Zap, Rocket, Globe, Award, Lightbulb, BarChart3, Smartphone, Cloud } from "lucide-react";
import profileDxHero from "@/assets/profile-dx-hero.jpg";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.5 },
};

const heroStats = [
  { n: "#3", l: "Global Thought Leader", icon: Award },
  { n: "CIO", l: "Innovative CIO 2023", icon: Zap },
  { n: "NEXT100", l: "Future CIO Award", icon: Rocket },
  { n: "29+", l: "Years Transforming", icon: Globe },
];

const dxCapabilities = [
  { icon: Rocket, title: "Enterprise Digital Transformation", desc: "Led end-to-end digital transformation mandates across Pharma and Technology. From digital strategy formulation to execution — aligning technology investments with business outcomes and P&L imperatives." },
  { icon: Lightbulb, title: "Innovation Hub Creation", desc: "Co-founded India's first pharma digital innovation hub (Novartis Biome). Led hackathons with outcomes presented to CEO and executive leadership. Creating cultures of experimentation and rapid prototyping." },
  { icon: Cloud, title: "Cloud & DevOps Transformation", desc: "Driving cloud adoption strategies (AWS, Azure, GCP), DevOps culture transformation, and CI/CD pipeline standardisation. 27+ AWS certifications backing deep technical understanding." },
  { icon: Smartphone, title: "Digital Product Strategy", desc: "Conceptualising and delivering digital products — from internal tools to customer-facing applications. Built KR Prompts App, Tech Curator Guide, Pocket News and multiple GitHub Pages projects." },
  { icon: BarChart3, title: "Data-Driven Decision Making", desc: "Embedding analytics and data culture into organisations. From executive dashboards to predictive models — making data the foundation of every strategic and operational decision." },
  { icon: Zap, title: "Change Management & Adoption", desc: "Leading organisational change during large-scale transformations. Stakeholder alignment, communication strategies, training programmes, and measuring adoption through outcome-based KPIs." },
];

const awards = [
  { icon: "🏆", title: "#3 Global Top Thought Leader", org: "Thinkers360", desc: "Recognised for contributions in technology, digital transformation, and Quality Engineering — ranked among the top 3 globally." },
  { icon: "🏅", title: "Innovative CIO Awards 2023", org: "CIOAXIS & CISOCONNECT", desc: "Honoured for innovative practices and leadership in digital transformation across regulated industries." },
  { icon: "⭐", title: "IT NEXT100 Future CIO Award", org: "CIO&Leader / ITNext", desc: "Recognised as a Future CIO through a rigorous, multi-stage evaluation of leadership, vision and execution capability." },
  { icon: "💊", title: "Pharma Leadership Award of Excellence", org: "eLets Health Media", desc: "Awarded for contributions to digital initiatives in the pharmaceutical industry." },
  { icon: "🎖️", title: "Organisational Excellence Awards", org: "Accenture & Vodafone", desc: "Outstanding delivery, knowledge sharing, proactive leadership — 'One Step Ahead' award recipient." },
  { icon: "🧠", title: "Corporate Quiz & Knowledge Awards", org: "TATA Crucible & AMUL", desc: "Regional finalist (TATA Crucible) and runner-up (AMUL Business Quiz) — reflecting a continuous learner mindset." },
];

const dxProjects = [
  { period: "2017 → 2021", name: "Novartis Biome — Digital Innovation Hub", desc: "Co-founded India's first pharma digital innovation hub. Led hackathons, incubated digital solutions, and presented outcomes to CEO and global executive leadership.", impact: "First-of-its-kind in Indian pharma" },
  { period: "2016 → Present", name: "GCC Digital Transformation", desc: "Drove end-to-end digital transformation of a 400+ person GCC — cloud migration, automation-first culture, data analytics integration, and AI adoption.", impact: "40% cost arbitrage with quality uplift" },
  { period: "2025", name: "Agentic AI & Vibe Coding", desc: "Pioneering agentic AI-driven product development — autonomous agents collaborating to design, iterate and ship features using modern LLM toolchains.", impact: "350+ production-ready agent definitions" },
  { period: "2024", name: "Multi-Platform Digital Presence", desc: "Built comprehensive digital portfolio across 10+ platforms — LinkedIn, Kaggle, GitHub, Framer, Amazon Author, Credly — establishing thought leadership at scale.", impact: "Omni-channel professional brand" },
];

const publications = [
  { title: "Impact of DevOps on Testing", type: "White Paper" },
  { title: "Impact of Digital Revolution on Testing Mobile & Web Apps over Cloud", type: "Research Paper" },
  { title: "Test Data Masking and Tool Pilot Experiences", type: "White Paper" },
  { title: "Intelligent Testing Skills for Next Generation", type: "Conference Paper" },
  { title: "Model Based Testing for Communications Industry", type: "Research Paper" },
  { title: "Python Data Visualisation Essentials Guide", type: "Book" },
  { title: "Science of Selenium", type: "Book" },
  { title: "Innovations in Testing", type: "Book" },
];

export default function ProfileDigitalTransformation() {
  return (
    <div className="min-h-screen bg-background">

      {/* Hero */}
      <motion.section className="relative py-20 px-6 overflow-hidden" {...fadeUp}>
        <div className="absolute inset-0">
          <img src={profileDxHero} alt="" className="w-full h-full object-cover opacity-15 dark:opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
        </div>
        <div className="max-w-5xl mx-auto relative">
          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-xs text-primary font-medium">🚀 Digital Transformation</span>
            <span className="px-3 py-1 bg-accent/10 border border-accent/20 rounded-full text-xs text-accent font-medium">#3 Global Thought Leader</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif text-foreground mb-4">
            Digital Transformation <em className="text-primary italic">Champion</em>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed mb-10">
            Recognised as a global Top-3 thought leader in digital transformation. From innovation hubs to enterprise-wide cloud adoption — driving measurable business impact through technology.
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

      {/* Awards */}
      <section className="py-16 px-6 bg-card/50">
        <div className="max-w-5xl mx-auto">
          <motion.div className="mb-10" {...fadeUp}>
            <span className="text-xs font-bold tracking-[0.14em] uppercase text-muted-foreground">Recognition</span>
            <h2 className="font-serif text-3xl text-foreground mt-2">Awards & Accolades</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {awards.map((a, i) => (
              <motion.div key={a.title} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.08 }}
                className="p-5 bg-background border border-border rounded-xl hover:border-primary/30 transition-all">
                <span className="text-2xl block mb-3">{a.icon}</span>
                <h3 className="font-serif text-base text-foreground mb-1">{a.title}</h3>
                <p className="text-xs text-primary/70 mb-2">{a.org}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{a.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* Capabilities */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div className="mb-10" {...fadeUp}>
            <span className="text-xs font-bold tracking-[0.14em] uppercase text-muted-foreground">Core Capabilities</span>
            <h2 className="font-serif text-3xl text-foreground mt-2">Transformation Expertise</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {dxCapabilities.map((cap, i) => {
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

      {/* DX Projects */}
      <section className="py-16 px-6 bg-card/50">
        <div className="max-w-5xl mx-auto">
          <motion.div className="mb-10" {...fadeUp}>
            <span className="text-xs font-bold tracking-[0.14em] uppercase text-muted-foreground">Track Record</span>
            <h2 className="font-serif text-3xl text-foreground mt-2">Transformation Milestones</h2>
          </motion.div>
          <div className="space-y-5">
            {dxProjects.map((p, i) => (
              <motion.div key={p.name} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.1 }}
                className="p-6 bg-background border border-border rounded-xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-accent" />
                <div className="ml-4">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="text-xs font-mono text-primary bg-primary/10 border border-primary/20 rounded px-2 py-0.5">{p.period}</span>
                    <span className="text-xs text-accent bg-accent/10 border border-accent/20 rounded px-2 py-0.5">{p.impact}</span>
                  </div>
                  <h3 className="font-serif text-lg text-foreground mb-1">{p.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* Publications */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div className="mb-10" {...fadeUp}>
            <span className="text-xs font-bold tracking-[0.14em] uppercase text-muted-foreground">Knowledge Leadership</span>
            <h2 className="font-serif text-3xl text-foreground mt-2">Publications & Thought Leadership</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {publications.map((p, i) => (
              <motion.div key={p.title} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.05 }}
                className="p-4 bg-card border border-border rounded-lg hover:border-primary/30 transition-colors">
                <span className="text-[9px] font-bold uppercase tracking-[0.12em] text-primary mb-1 block">{p.type}</span>
                <p className="text-sm text-foreground leading-snug">{p.title}</p>
              </motion.div>
            ))}
          </div>
          <motion.div className="mt-6 flex flex-wrap gap-4" {...fadeUp}>
            <a href="https://publicationslist.org/kalilur.rahman" target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline inline-flex items-center gap-1">Publications List <ExternalLink className="w-3 h-3" /></a>
            <a href="https://scholar.google.com/citations?user=hCYBFKYAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline inline-flex items-center gap-1">Google Scholar <ExternalLink className="w-3 h-3" /></a>
            <a href="https://www.amazon.com/stores/Kalilur-Rahman/author/B0863JL6R7" target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline inline-flex items-center gap-1">Amazon Author <ExternalLink className="w-3 h-3" /></a>
          </motion.div>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      {/* CTA */}
      <section className="py-16 px-6 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div {...fadeUp}>
            <h2 className="font-serif text-3xl text-foreground mb-4">Lead Your Digital Transformation</h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">Partner with a recognised global thought leader to design and execute your digital transformation strategy.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="mailto:rahman.kalilur@outlook.com" className="px-6 py-3 bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity rounded-lg">
                Discuss Transformation
              </a>
              <a href="https://www.linkedin.com/in/kalilurrahman/" target="_blank" rel="noopener noreferrer"
                className="px-6 py-3 border border-border text-foreground font-medium text-sm hover:border-primary/50 transition-colors rounded-lg inline-flex items-center gap-2">
                Connect on LinkedIn <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-6 px-6 text-center">
        <div className="flex justify-center gap-3 flex-wrap mb-3">
          <Link to="/" className="text-xs text-muted-foreground hover:text-primary transition-colors">Home</Link>
          <Link to="/profile/ai-advisor" className="text-xs text-muted-foreground hover:text-primary transition-colors">AI Advisor</Link>
          <Link to="/profile/gcc-advisor" className="text-xs text-muted-foreground hover:text-primary transition-colors">GCC Advisor</Link>
          <Link to="/profile/coe-champion" className="text-xs text-muted-foreground hover:text-primary transition-colors">CoE Champion</Link>
        </div>
        <p className="text-[11px] text-muted-foreground">© Kalilur Rahman · Digital Transformation Champion Profile</p>
      </footer>
    </div>
  );
}
