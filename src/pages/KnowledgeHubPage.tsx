import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const heroStats = [
  { n: "482", l: "Certifications" },
  { n: "293", l: "Learning Completions" },
  { n: "16", l: "Publications & Books" },
  { n: "16", l: "Notable Projects" },
  { n: "13", l: "Awards & Honours" },
  { n: "33", l: "Recommendations" },
  { n: "29+", l: "Years Experience" },
];

const publications = [
  { title: "Python Data Visualisation Essentials Guide", desc: "A practical guide to building rich, meaningful visualisations with Python – Matplotlib, Seaborn, Pandas, Plotly, and more.", links: [{ label: "View book ↗", url: "https://in.bpbonline.com/products/python-data-visualization-essential-guide" }] },
  { title: "Science Of Selenium", desc: "Step-by-step coverage of Selenium automation — from fundamentals to frameworks, multi-language usage, and CI integration.", links: [{ label: "View on Amazon ↗", url: "https://www.amazon.in/Science-Selenium-Automation-Framework-English-ebook/dp/B082KFY17B" }] },
  { title: "Innovations in Testing", desc: "A curated collection of testing-focused blogs and reflections, originally published on Kindle Direct.", links: [{ label: "View on Amazon ↗", url: "https://www.amazon.in/dp/B078LRPLK8" }] },
  { title: "White Papers & Research Articles", desc: "Selected papers: Impacts of DevOps on Testing · Digital Revolution Impact on Testing · Test Data Masking · Intelligent Testing Skills · Model Based Testing.", links: [{ label: "Full list ↗", url: "https://publicationslist.org/kalilur.rahman" }, { label: "Google Scholar ↗", url: "https://scholar.google.com/citations?user=hCYBFKYAAAAJ&hl=en" }] },
  { title: "LinkedIn Articles & Newsletter", desc: "Read articles, insights and thought leadership published on LinkedIn.", links: [{ label: "Newsletter ↗", url: "https://www.linkedin.com/newsletters/6881947603345387520/" }, { label: "Articles ↗", url: "https://www.linkedin.com/in/kalilurrahman/recent-activity/articles/" }] },
];

const certCategories = ["All", "Leadership", "Data", "AI", "Quality", "AWS", "GCP", "Academic", "Programming", "Security"];
const certs = [
  { cat: "AWS", name: "AWS Machine Learning Specialty", org: "Amazon Web Services" },
  { cat: "Leadership", name: "Competent Communicator (CC)", org: "Toastmasters International" },
  { cat: "Leadership", name: "Competent Leader (CL)", org: "Toastmasters International" },
  { cat: "Leadership", name: "Certified Delivery Lead", org: "Accenture" },
  { cat: "Leadership", name: "Certified Program, Project & Service Management Lead", org: "Accenture" },
  { cat: "AI", name: "DeepLearning.AI Specialisations", org: "Coursera / DeepLearning.AI" },
  { cat: "Data", name: "Data Science Professional", org: "IBM / Coursera" },
  { cat: "GCP", name: "Google Cloud Professional", org: "Google Cloud" },
  { cat: "Quality", name: "Tricentis Tosca", org: "Tricentis" },
  { cat: "AWS", name: "27+ AWS Certifications", org: "Amazon Web Services" },
  { cat: "AI", name: "Deep Learning Specialisation", org: "DeepLearning.AI" },
  { cat: "Programming", name: "Python for Data Science", org: "DataCamp" },
  { cat: "Security", name: "ServiceNow Certified", org: "ServiceNow" },
  { cat: "Academic", name: "Academic Research Methods", org: "University Programme" },
  { cat: "Leadership", name: "Atlassian Certified", org: "Atlassian" },
  { cat: "Data", name: "Microsoft Data Analyst", org: "Microsoft" },
];

const projects = [
  { year: "2016 → 2025", tag: "Enterprise Transformation", name: "Leading IT Service Delivery & GCC Scalability – Global Pharma", desc: "Architected multi-function Pharmaceutical Services GCC, scaling 16-fold to 400+ person operation with 40% cost arbitrage." },
  { year: "2017 → 2021", tag: "Innovation Hub", name: "Novartis Biome – Digital Innovation Hub", desc: "Co-founded India's first pharma digital innovation hub. Led hackathons with outcomes presented to CEO and executive leadership." },
  { year: "2013 → 2014", tag: "Turnaround", name: "Global Telco – TCoE Operational Turnaround", desc: "Led 220+ member organisation, achieving 35%+ operating margin improvement from -5% to sustained 30%+ profitability." },
  { year: "2025", tag: "Open Resource", name: "Agentic AI Agent Library", desc: "350+ production-ready AI agent definitions across 28 categories — Technology, Research, Advisory, Engineering and more." },
  { year: "2024", tag: "Open Source", name: "Quality Engineering Book by LLMs", desc: "An experimental book on Quality Engineering generated entirely by large language models." },
];

const awards = [
  { icon: "🏆", title: "#3 Global Top Thought Leader", desc: "Recognised by Thinkers360 for contributions in technology, digital transformation, and Quality Engineering." },
  { icon: "🏅", title: "Innovative CIO Awards 2023", desc: "Honoured by CIOAXIS & CISOCONNECT for innovative practices and leadership in digital transformation." },
  { icon: "⭐", title: "IT NEXT100 Future CIO Award", desc: "Recognised as a Future CIO by CIO&Leader / ITNext through a rigorous, multi-stage evaluation process." },
  { icon: "💊", title: "Pharma Leadership Award of Excellence", desc: "Awarded by eLets Health Media for contributions to digital initiatives in pharma." },
  { icon: "🧠", title: "Corporate Quiz & Knowledge Awards", desc: "TATA Crucible regional finalist and AMUL business quiz regional runner-up." },
  { icon: "🎖️", title: "Organisational Excellence Awards", desc: "Recognised by Accenture and Vodafone for outstanding delivery, knowledge sharing, and proactive leadership." },
  { icon: "🎓", title: "Kaggle Legacy Grandmaster", desc: "Top-tier data science practitioner status on Kaggle — placing among the top global data scientists." },
];

const recommendations = [
  { quote: "Kalilur has an exceptional ability to set a clear vision and balance strategic thinking with hands-on execution. His mentoring in data, AI, and advanced test automation has been invaluable to our team.", from: "Senior Colleague", org: "Global Pharmaceutical Organisation" },
  { quote: "A leader who removes roadblocks proactively and genuinely invests in the growth of the people around him. Kalilur brings both technical depth and business acumen that is rare to find.", from: "Direct Report", org: "Quality Engineering CoE" },
  { quote: "Working with Kalilur on the GCC scale-up was transformative. He brought structure, pace, and a relentless focus on outcomes while keeping the human element front and centre.", from: "Stakeholder", org: "Global Technology Programme" },
];

const skills = [
  "Enterprise Transformation", "Quality Engineering", "GCC Leadership", "Digital Strategy",
  "Data Science", "Machine Learning", "Test Automation", "DevOps",
  "Agile & Scrum", "Cloud Architecture", "AWS", "Python",
  "Selenium", "Stakeholder Management", "P&L Management", "Team Building",
  "Innovation Management", "LLM / GenAI", "Data Visualisation", "Business Analytics",
  "Leadership Coaching", "Public Speaking", "Kaggle Competitions", "Research & Publications",
  "Program Management", "Vendor Management", "Change Management", "Risk Management",
  "ServiceNow", "Atlassian Suite",
];

const tabs = [
  { id: "publications", label: "Publications 16" },
  { id: "certifications", label: "Certifications 482" },
  { id: "projects", label: "Projects 16" },
  { id: "awards", label: "Awards 13" },
  { id: "recommendations", label: "Recommendations 33" },
  { id: "skills", label: "Skills 100" },
] as const;

type TabId = typeof tabs[number]["id"];

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.4 },
};

export default function KnowledgeHubPage() {
  const [activeTab, setActiveTab] = useState<TabId>("publications");
  const [certFilter, setCertFilter] = useState("All");

  const filteredCerts = certFilter === "All" ? certs : certs.filter(c => c.cat === certFilter);

  return (
    <div className="min-h-screen bg-background">

      <main className="max-w-[1100px] mx-auto px-6 py-10">
        {/* Hero */}
        <motion.div className="text-center py-10 px-5 relative overflow-hidden mb-10" {...fadeUp}>
          <div className="absolute -top-14 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-[radial-gradient(ellipse,hsl(var(--primary)/0.06),transparent_70%)] pointer-events-none" />
          <div className="text-[10.5px] font-semibold tracking-[0.08em] uppercase text-muted-foreground mb-3">Professional Knowledge Record</div>
          <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-2">Kalilur <em className="text-primary italic">Rahman</em></h1>
          <p className="text-[13.5px] text-muted-foreground mb-8">Global IT Executive · Author · Kaggle Grandmaster · #3 Global Top Thought Leader</p>
          <div className="flex flex-wrap justify-center gap-3">
            {heroStats.map(s => (
              <div key={s.l} className="text-center bg-card border border-border rounded-xl px-5 py-3.5 min-w-[100px]">
                <span className="block font-serif text-[30px] text-primary leading-none mb-1">{s.n}</span>
                <span className="text-[10px] text-muted-foreground uppercase tracking-[0.08em]">{s.l}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Tab Nav */}
        <div className="flex gap-1 flex-wrap border-b border-border mb-8">
          {tabs.map(t => (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              className={`px-4 py-2 text-[12.5px] font-medium border-b-2 transition-colors ${
                activeTab === t.id ? "text-primary border-primary" : "text-muted-foreground border-transparent hover:text-foreground"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Publications */}
        {activeTab === "publications" && (
          <motion.div {...fadeUp}>
            <h2 className="font-serif text-[22px] text-foreground mb-2">Publications & Articles</h2>
            <p className="text-[13px] text-muted-foreground mb-6 leading-relaxed">Books, white papers, conference papers, and thought leadership articles.</p>
            <div className="space-y-3">
              {publications.map(p => (
                <div key={p.title} className="bg-card border border-border rounded-xl p-4 hover:border-muted-foreground/30 transition-colors">
                  <div className="font-semibold text-sm text-foreground mb-1">{p.title}</div>
                  <div className="text-[12.5px] text-muted-foreground leading-relaxed mb-2.5">{p.desc}</div>
                  <div className="flex gap-2 flex-wrap">
                    {p.links.map(l => (
                      <a key={l.url} href={l.url} target="_blank" rel="noopener noreferrer" className="text-[11.5px] text-primary bg-primary/10 border border-primary/20 rounded px-2.5 py-0.5 hover:bg-primary/20 transition-colors no-underline">{l.label}</a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Certifications */}
        {activeTab === "certifications" && (
          <motion.div {...fadeUp}>
            <h2 className="font-serif text-[22px] text-foreground mb-2">Certifications</h2>
            <p className="text-[13px] text-muted-foreground mb-6">482 professional certifications across AWS, AI/ML, Data, Leadership, Academic, and more.</p>
            <div className="flex flex-wrap gap-1.5 mb-5">
              {certCategories.map(c => (
                <button
                  key={c}
                  onClick={() => setCertFilter(c)}
                  className={`px-3 py-1 rounded-full text-[11.5px] border transition-colors ${
                    certFilter === c ? "bg-primary/10 border-primary text-primary font-semibold" : "bg-card border-border text-muted-foreground hover:border-primary hover:text-primary"
                  }`}
                >
                  {c === "All" ? "All Categories" : c}
                </button>
              ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
              {filteredCerts.map((c, i) => (
                <div key={i} className="bg-card border border-border rounded-lg p-3 hover:border-muted-foreground/30 hover:bg-secondary transition-colors">
                  <span className="text-[9px] font-semibold uppercase tracking-[0.1em] text-muted-foreground block mb-1">{c.cat}</span>
                  <div className="text-[12.5px] font-medium text-foreground leading-snug mb-1">{c.name}</div>
                  <div className="text-[11px] text-muted-foreground">{c.org}</div>
                </div>
              ))}
            </div>
            <p className="text-center mt-5 text-[12.5px] text-muted-foreground">
              Showing representative sample · <a href="https://www.credly.com/users/kalilur-rahman/badges" target="_blank" rel="noopener noreferrer" className="text-primary">View all on Credly ↗</a>
            </p>
          </motion.div>
        )}

        {/* Projects */}
        {activeTab === "projects" && (
          <motion.div {...fadeUp}>
            <h2 className="font-serif text-[22px] text-foreground mb-2">Notable Projects</h2>
            <p className="text-[13px] text-muted-foreground mb-6">Career-defining programmes, transformations and innovation initiatives spanning 29+ years.</p>
            <div className="space-y-3">
              {projects.map(p => (
                <div key={p.name} className="bg-card border border-border rounded-xl p-5">
                  <div className="flex items-start gap-3 mb-2.5">
                    <span className="bg-secondary border border-border rounded px-2 py-0.5 font-mono text-[10.5px] text-muted-foreground whitespace-nowrap">{p.year}</span>
                    <span className="bg-green-500/10 border border-green-500/20 rounded px-2 py-0.5 text-[10px] text-green-500">{p.tag}</span>
                  </div>
                  <div className="font-semibold text-sm text-foreground mb-1.5">{p.name}</div>
                  <div className="text-[12.5px] text-muted-foreground leading-relaxed">{p.desc}</div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Awards */}
        {activeTab === "awards" && (
          <motion.div {...fadeUp}>
            <h2 className="font-serif text-[22px] text-foreground mb-2">Awards & Recognitions</h2>
            <p className="text-[13px] text-muted-foreground mb-6">Independent validations of leadership, innovation and knowledge contributions.</p>
            <div className="space-y-2.5">
              {awards.map(a => (
                <div key={a.title} className="bg-card border border-border rounded-xl p-4 flex gap-3.5 items-start">
                  <span className="text-2xl leading-none mt-0.5">{a.icon}</span>
                  <div>
                    <div className="font-semibold text-[13.5px] text-foreground mb-1">{a.title}</div>
                    <div className="text-xs text-muted-foreground leading-relaxed">{a.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Recommendations */}
        {activeTab === "recommendations" && (
          <motion.div {...fadeUp}>
            <h2 className="font-serif text-[22px] text-foreground mb-2">Recommendations</h2>
            <p className="text-[13px] text-muted-foreground mb-6">What colleagues, direct reports and stakeholders say. <a href="https://www.linkedin.com/in/kalilurrahman/" target="_blank" rel="noopener noreferrer" className="text-primary">View all 33 on LinkedIn ↗</a></p>
            <div className="space-y-3">
              {recommendations.map((r, i) => (
                <div key={i} className="bg-card border border-border border-l-[3px] border-l-primary rounded-xl p-5">
                  <p className="text-[13px] text-foreground leading-relaxed italic mb-2.5">"{r.quote}"</p>
                  <p className="text-[11.5px] text-muted-foreground">— <strong className="text-foreground">{r.from}</strong>, {r.org}</p>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Skills */}
        {activeTab === "skills" && (
          <motion.div {...fadeUp}>
            <h2 className="font-serif text-[22px] text-foreground mb-2">Skills & Expertise</h2>
            <p className="text-[13px] text-muted-foreground mb-6">100 endorsed skills spanning leadership, technology, data, and delivery.</p>
            <div className="flex flex-wrap gap-1.5">
              {skills.map(s => (
                <span key={s} className="bg-card border border-border rounded-full px-3 py-1 text-xs text-muted-foreground hover:border-primary hover:text-primary transition-colors">{s}</span>
              ))}
            </div>
          </motion.div>
        )}
      </main>

      <footer className="bg-card border-t border-border py-6 px-6 text-center">
        <div className="flex justify-center gap-1 flex-wrap mb-3">
          <Link to="/" className="text-xs text-muted-foreground px-2 py-1 rounded hover:text-primary hover:bg-secondary transition-colors no-underline">← Main Portfolio</Link>
          <Link to="/digital-hub" className="text-xs text-muted-foreground px-2 py-1 rounded hover:text-primary hover:bg-secondary transition-colors no-underline">Digital Hub</Link>
          <Link to="/ai-agents" className="text-xs text-muted-foreground px-2 py-1 rounded hover:text-primary hover:bg-secondary transition-colors no-underline">🤖 AI Agents</Link>
          <a href="https://www.linkedin.com/in/kalilurrahman/" target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground px-2 py-1 rounded hover:text-primary hover:bg-secondary transition-colors no-underline">LinkedIn ↗</a>
        </div>
        <p className="text-[11px] text-muted-foreground">© <a href="/" className="text-primary">Kalilur Rahman</a> · Knowledge Hub</p>
      </footer>
    </div>
  );
}
