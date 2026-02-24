import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ExternalLink, Building2, Users, TrendingUp, Globe, Target, BarChart3, Shield, Briefcase } from "lucide-react";
import profileGccHero from "@/assets/profile-gcc-hero.jpg";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.5 },
};

const heroStats = [
  { n: "400+", l: "GCC Team Scaled", icon: Users },
  { n: "16x", l: "Growth Factor", icon: TrendingUp },
  { n: "40%", l: "Cost Arbitrage", icon: BarChart3 },
  { n: "29+", l: "Years Experience", icon: Briefcase },
];

const gccCapabilities = [
  { icon: Building2, title: "GCC Setup & Scale-Up", desc: "Architected multi-function Pharmaceutical Services GCC, scaling 16-fold from 25 to 400+ people. End-to-end GCC lifecycle — from business case to steady-state operations with measurable ROI." },
  { icon: Target, title: "P&L Ownership & Governance", desc: "Full P&L responsibility for GCC operations with demonstrated 40% cost arbitrage. Establishing governance models, KPI frameworks, and reporting cadences that satisfy global stakeholders." },
  { icon: Globe, title: "Global Delivery Leadership", desc: "Managing globally distributed teams across India, US, Europe and APAC. Building delivery models that balance cost efficiency with quality, compliance and innovation." },
  { icon: Users, title: "Talent Strategy & Succession", desc: "Designing talent acquisition strategies for GCC scale-up — from campus hiring to lateral and leadership positions. Building succession pipelines and capability matrices for critical roles." },
  { icon: Shield, title: "Regulatory & Compliance", desc: "Deep experience in regulated industries (Pharma/Life Sciences). Ensuring GCC operations meet GxP, data privacy, SOX, and industry-specific compliance requirements." },
  { icon: BarChart3, title: "Operational Excellence", desc: "Implementing lean operations, continuous improvement, and operational dashboards. Turnaround expertise — converted a 220-member TCoE from -5% to 30%+ operating margins." },
];

const gccTrack = [
  { period: "2016 → Present", role: "Associate Director — Global Pharmaceutical Services GCC", org: "Leading Pharma Organisation", highlights: ["Scaled GCC 16-fold to 400+ professionals", "Multi-function delivery: IT, QE, Data, Digital", "40% cost arbitrage with quality improvements", "Co-founded India's first pharma digital innovation hub"] },
  { period: "2013 → 2014", role: "Delivery Lead — Global Telco TCoE Turnaround", org: "Accenture / Major Telco", highlights: ["Led 220+ member global organisation", "Turnaround from -5% to 30%+ operating margins", "Standardised QE methods and tooling", "Built reusable frameworks and artefacts"] },
  { period: "2008 → 2013", role: "Senior Manager — Enterprise Quality & Delivery", org: "Accenture", highlights: ["Managed multi-geography delivery programs", "P&L ownership for testing CoEs", "Client stakeholder management at VP/SVP level", "Certified Delivery Lead & Program Manager"] },
];

const mentorshipRoles = [
  { name: "GLEAC Mentor", role: "Independent Consultant · Lead SME · GCC Advisor · Startup Management Consultant", url: "https://www.gleac.com/mentors/kalilur-rahman" },
  { name: "Della Leaders Club", role: "Global Chapter Member · Entrepreneur & Leader Network", url: "https://www.dellaleaders.com/member/kalilur-rahman/" },
  { name: "Toastmasters International", role: "Competent Communicator (CC) · Competent Leader (CL)", url: "https://www.toastmasters.org/" },
];

const engagementTypes = [
  { title: "GCC Setup Advisory", desc: "End-to-end guidance on setting up a new GCC — from location selection and legal entity creation to org design, hiring strategy, and operational launch." },
  { title: "GCC Scale-Up & Optimisation", desc: "Helping existing GCCs scale efficiently — expanding service lines, improving margins, building centres of excellence, and transitioning from cost-centre to value-centre." },
  { title: "GCC Leadership Coaching", desc: "1:1 coaching for GCC leaders navigating complexity — stakeholder management, P&L ownership, talent strategy, and global operating model design." },
  { title: "Operational Turnaround", desc: "Diagnosing and fixing underperforming delivery organisations — process re-engineering, team restructuring, and margin improvement within defined timelines." },
];

export default function ProfileGCCAdvisor() {
  return (
    <div className="min-h-screen bg-background">

      {/* Hero */}
      <motion.section className="relative py-20 px-6 overflow-hidden" {...fadeUp}>
        <div className="absolute inset-0">
          <img src={profileGccHero} alt="" className="w-full h-full object-cover opacity-15 dark:opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
        </div>
        <div className="max-w-5xl mx-auto relative">
          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-xs text-primary font-medium">🏢 GCC Advisor</span>
            <span className="px-3 py-1 bg-accent/10 border border-accent/20 rounded-full text-xs text-accent font-medium">P&L Leader</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif text-foreground mb-4">
            GCC Leadership & <em className="text-primary italic">Advisory</em>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed mb-10">
            Built, scaled and transformed Global Capability Centres from the ground up. 400+ person GCC, 16x growth, 40% cost arbitrage — with deep expertise in Pharma and Technology verticals.
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
            <h2 className="font-serif text-3xl text-foreground mt-2">GCC Expertise</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {gccCapabilities.map((cap, i) => {
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

      {/* Career Track */}
      <section className="py-16 px-6 bg-card/50">
        <div className="max-w-5xl mx-auto">
          <motion.div className="mb-10" {...fadeUp}>
            <span className="text-xs font-bold tracking-[0.14em] uppercase text-muted-foreground">Track Record</span>
            <h2 className="font-serif text-3xl text-foreground mt-2">GCC Leadership Journey</h2>
          </motion.div>
          <div className="space-y-6">
            {gccTrack.map((t, i) => (
              <motion.div key={t.period} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.1 }}
                className="p-6 bg-background border border-border rounded-xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-accent" />
                <div className="ml-4">
                  <span className="text-xs font-mono text-primary bg-primary/10 border border-primary/20 rounded px-2 py-0.5">{t.period}</span>
                  <h3 className="font-serif text-lg text-foreground mt-2 mb-1">{t.role}</h3>
                  <p className="text-xs text-muted-foreground mb-3">{t.org}</p>
                  <ul className="space-y-1.5">
                    {t.highlights.map(h => (
                      <li key={h} className="flex gap-2 text-sm text-muted-foreground">
                        <span className="text-primary shrink-0">→</span>{h}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* Mentorship Platforms */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div className="mb-10" {...fadeUp}>
            <span className="text-xs font-bold tracking-[0.14em] uppercase text-muted-foreground">Advisory Platforms</span>
            <h2 className="font-serif text-3xl text-foreground mt-2">Where I Advise</h2>
          </motion.div>
          <div className="grid sm:grid-cols-3 gap-4">
            {mentorshipRoles.map((m, i) => (
              <motion.a key={m.name} href={m.url} target="_blank" rel="noopener noreferrer" {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.1 }}
                className="p-5 bg-card border border-border rounded-xl hover:border-primary/30 transition-all group no-underline">
                <h3 className="font-serif text-lg text-foreground mb-1 group-hover:text-primary transition-colors">{m.name}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed mb-3">{m.role}</p>
                <span className="inline-flex items-center gap-1 text-xs text-primary">View Profile <ExternalLink className="w-3 h-3" /></span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      {/* Engagement */}
      <section className="py-16 px-6 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-5xl mx-auto">
          <motion.div className="mb-10" {...fadeUp}>
            <span className="text-xs font-bold tracking-[0.14em] uppercase text-muted-foreground">Engagements</span>
            <h2 className="font-serif text-3xl text-foreground mt-2">GCC Advisory Services</h2>
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
              Discuss GCC Advisory
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
          <Link to="/profile/ai-advisor" className="text-xs text-muted-foreground hover:text-primary transition-colors">AI Advisor</Link>
          <Link to="/profile/coe-champion" className="text-xs text-muted-foreground hover:text-primary transition-colors">CoE Champion</Link>
          <Link to="/profile/digital-transformation" className="text-xs text-muted-foreground hover:text-primary transition-colors">DX Champion</Link>
        </div>
        <p className="text-[11px] text-muted-foreground">© Kalilur Rahman · GCC Advisor Profile</p>
      </footer>
    </div>
  );
}
