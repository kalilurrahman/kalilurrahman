import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ExternalLink, Layers, Wrench, BookOpen, Award, CheckCircle, Cog, FlaskConical, GraduationCap } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.5 },
};

const heroStats = [
  { n: "220+", l: "TCoE Team Led", icon: Layers },
  { n: "35%+", l: "Margin Turnaround", icon: CheckCircle },
  { n: "482", l: "Certifications", icon: Award },
  { n: "3", l: "Books Published", icon: BookOpen },
];

const coeCapabilities = [
  { icon: Layers, title: "TCoE / QE CoE Design & Build", desc: "End-to-end design of Testing and Quality Engineering Centres of Excellence — operating models, team structures, tooling strategies, KPI frameworks, and governance. Proven at 220+ person scale." },
  { icon: Cog, title: "Automation & Tooling Strategy", desc: "Selecting, implementing and scaling test automation frameworks across enterprises. Deep expertise in Selenium, Tricentis Tosca, API testing, CI/CD integration and shift-left practices." },
  { icon: FlaskConical, title: "Quality Engineering Frameworks", desc: "Created reusable QE artefacts — test strategies, risk-based testing models, defect analytics templates, and QE maturity assessments. Open-sourced on GitHub for community benefit." },
  { icon: Wrench, title: "Process Standardisation", desc: "Standardising QE methods, processes and deliverables across portfolios and geographies. Building consistency without sacrificing agility — Agile, DevOps, and hybrid models." },
  { icon: GraduationCap, title: "Capability Building & Upskilling", desc: "Designing learning pathways for QE teams — from manual testers to automation engineers to QE architects. 482 certifications earned personally, mentoring others to follow structured learning journeys." },
  { icon: BookOpen, title: "Knowledge Leadership", desc: "Three published books (Science of Selenium, Python Data Viz, Innovations in Testing), white papers, and conference talks. Active knowledge contributor across LinkedIn, GitHub and academia." },
];

const frameworks = [
  { name: "Quality Engineering Artefacts", desc: "Curated collection of test strategies, frameworks, templates and best practices built over 29+ years in QE leadership.", url: "https://github.com/kalilurrahman/QualityEngineeringArtefacts" },
  { name: "QE Book by LLMs", desc: "Experimental book on Quality Engineering practices co-authored with large language models — covering automation, shift-left and AI-driven QA.", url: "https://github.com/kalilurrahman/QualityEngineeringBookByLLMs" },
  { name: "Aptest Quality Engineer", desc: "AI-assisted quality engineering automation platform generating test plans, test cases and defect reports using LLM prompts.", url: "https://github.com/kalilurrahman/AptestQualityEngineer" },
  { name: "Science of Selenium", desc: "Published book covering Selenium automation from fundamentals to frameworks — multi-language usage and CI integration.", url: "https://www.amazon.in/Science-Selenium-Automation-Framework-English-ebook/dp/B082KFY17B" },
];

const certHighlights = [
  "Tricentis Tosca Certified", "Certified Delivery Lead (Accenture)", "Certified Program & Service Management Lead",
  "Communications Industry Generalist", "WebMethods B2B Developer (Software AG)", "Python (Codecademy)",
  "AngularJS (Code School)", "jQuery Programming (Codecademy)", "ServiceNow Certified",
  "Atlassian Certified", "Competent Communicator (CC)", "Competent Leader (CL)",
];

const impactMetrics = [
  { metric: "-5% → 30%+", label: "Operating Margin Turnaround", desc: "Transformed a 220-member TCoE from negative margins to sustained 30%+ profitability within 18 months." },
  { metric: "40%", label: "Cost Arbitrage Achieved", desc: "Through GCC scale-up, automation, and process standardisation across the quality engineering portfolio." },
  { metric: "46+", label: "GitHub Repositories", desc: "Open-source QE artefacts, automation frameworks, test strategy templates, and LLM-generated QE content." },
  { metric: "16", label: "White Papers & Publications", desc: "Research on DevOps impact on testing, test data masking, intelligent testing skills, and model-based testing." },
];

export default function ProfileCoEChampion() {
  return (
    <div className="min-h-screen bg-background">

      {/* Hero */}
      <motion.section className="relative py-20 px-6 overflow-hidden" {...fadeUp}>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5 pointer-events-none" />
        <div className="max-w-5xl mx-auto relative">
          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-xs text-primary font-medium">⚙️ CoE Champion</span>
            <span className="px-3 py-1 bg-accent/10 border border-accent/20 rounded-full text-xs text-accent font-medium">Quality Engineering</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif text-foreground mb-4">
            CoE & Capability <em className="text-primary italic">Champion</em>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed mb-10">
            Designing, building and scaling Centres of Excellence for Quality Engineering. From turnaround to transformation — with reusable frameworks, open-source artefacts and a relentless focus on capability building.
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

      {/* Impact Metrics */}
      <section className="py-16 px-6 bg-card/50">
        <div className="max-w-5xl mx-auto">
          <motion.div className="mb-10" {...fadeUp}>
            <span className="text-xs font-bold tracking-[0.14em] uppercase text-muted-foreground">Measurable Impact</span>
            <h2 className="font-serif text-3xl text-foreground mt-2">Results That Speak</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-5">
            {impactMetrics.map((m, i) => (
              <motion.div key={m.label} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.08 }}
                className="p-6 bg-background border border-border rounded-xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent" />
                <span className="block font-serif text-3xl text-primary mb-1">{m.metric}</span>
                <h3 className="font-medium text-foreground text-sm mb-1">{m.label}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{m.desc}</p>
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
            <h2 className="font-serif text-3xl text-foreground mt-2">CoE & Capability Expertise</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {coeCapabilities.map((cap, i) => {
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

      {/* Frameworks & Open Source */}
      <section className="py-16 px-6 bg-card/50">
        <div className="max-w-5xl mx-auto">
          <motion.div className="mb-10" {...fadeUp}>
            <span className="text-xs font-bold tracking-[0.14em] uppercase text-muted-foreground">Open Source</span>
            <h2 className="font-serif text-3xl text-foreground mt-2">QE Frameworks & Tools</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-4">
            {frameworks.map((f, i) => (
              <motion.a key={f.name} href={f.url} target="_blank" rel="noopener noreferrer" {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.08 }}
                className="p-5 bg-background border border-border rounded-xl hover:border-primary/30 transition-all group no-underline">
                <h3 className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors mb-1">{f.name}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed mb-2">{f.desc}</p>
                <span className="inline-flex items-center gap-1 text-xs text-primary">Open ↗ <ExternalLink className="w-3 h-3" /></span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* Certifications */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div className="mb-10" {...fadeUp}>
            <span className="text-xs font-bold tracking-[0.14em] uppercase text-muted-foreground">Credentials</span>
            <h2 className="font-serif text-3xl text-foreground mt-2">QE & Leadership Certifications</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {certHighlights.map((cert, i) => (
              <motion.div key={cert} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.04 }}
                className="px-4 py-3 bg-card border border-border rounded-lg text-sm text-foreground hover:border-primary/30 transition-colors">
                {cert}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      {/* CTA */}
      <section className="py-16 px-6 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div {...fadeUp}>
            <h2 className="font-serif text-3xl text-foreground mb-4">Build Your CoE with Confidence</h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">From inception to operational excellence — leverage 29+ years of hands-on experience building and scaling Centres of Excellence.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="mailto:rahman.kalilur@outlook.com" className="px-6 py-3 bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity rounded-lg">
                Discuss CoE Advisory
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
          <Link to="/profile/digital-transformation" className="text-xs text-muted-foreground hover:text-primary transition-colors">DX Champion</Link>
        </div>
        <p className="text-[11px] text-muted-foreground">© Kalilur Rahman · CoE / Capability Champion Profile</p>
      </footer>
    </div>
  );
}
