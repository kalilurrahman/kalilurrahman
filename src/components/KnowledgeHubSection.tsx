// KnowledgeHubSection.tsx
// src/components/KnowledgeHubSection.tsx
//
// USAGE:
//   import KnowledgeHubSection from "@/components/KnowledgeHubSection";
//   <KnowledgeHubSection />
//
// TO UPDATE WITHOUT LOVABLE CREDITS:
//   Edit the data arrays below directly in GitHub → auto-deploys.

import { useState } from "react";

// ─────────────────────────────────────────────────────────
//  EDITABLE DATA — change these, not the component logic
// ─────────────────────────────────────────────────────────

const IMPACT_NUMBERS = [
  {
    figure: "16×",
    label: "GCC Scale",
    context: "Concept → 400+ person operation",
    detail: "Built Novartis GCC from scratch; grew service volume 500% with 40% cost arbitrage and 30% productivity gain.",
  },
  {
    figure: "48%",
    label: "Budget Cut",
    context: "$25M → $13M · $1.3M recurring savings",
    detail: "Overhauled Project Management as a Service model, slashing annual spend without compromising delivery quality.",
  },
  {
    figure: "70%",
    label: "Faster Testing",
    context: "SAP cycle time reduction",
    detail: "Championed DevSecOps + Tricentis Tosca rollout across GxP-regulated pharma environment.",
  },
  {
    figure: "35%+",
    label: "Margin Uplift",
    context: "−5% → 30%+ in 12 months",
    detail: "Turned around a 220-person TCoE from loss-making to sustained profitability — one year, full turnaround.",
  },
  {
    figure: "355",
    label: "Retail Stores",
    context: "2 months ahead of schedule",
    detail: "Led Oracle Retail rollout across 7 vendor ecosystems for a global mobile giant.",
  },
  {
    figure: "220M+",
    label: "Subscribers",
    context: "India's largest telco",
    detail: "Established Test Delivery CoE and directed end-to-end 4G network launch validation at national scale.",
  },
];

const VOICE_OF_PEERS = [
  {
    quote: "One of the best professionals in the industry I have ever come across. He strikes a fine balance between managerial and technical approach — exemplary knowledge, simple yet powerful narratives.",
    name: "Mahesh Venkataraman",
    role: "Managing Director, Advisory",
    org: "Accenture",
  },
  {
    quote: "If you need a heavy hitter in E2E Testing for complex larger scale programmes, look no further. The sharpest mind and attention to detail I have ever experienced — brilliant combination of executive presence and hands-on execution.",
    name: "Ajit Dhaliwal",
    role: "CIO, Group Enterprise Technology",
    org: "Aviva",
  },
  {
    quote: "He sets a clear vision, empowers his team, and consistently delivers results — without compromising on integrity or people. A fantastic mentor who invests in people.",
    name: "Ratan Susarla",
    role: "Associate Director",
    org: "Novartis · 6 years",
  },
  {
    quote: "Kalil is an inquisitive leader, a learner, a motivator, and a bundle of positive energy. It takes strong values to stay motivated in this world — watching Kalil demonstrate them every day was a pleasure.",
    name: "Pranay Ranjan",
    role: "Senior Director, Enterprise Applications",
    org: "Arm",
  },
];

const CREDENTIAL_SHOWCASE = [
  { category: "Leadership & Strategy", count: 206, orgs: "LinkedIn · Microsoft · Kellogg · BCG · Darden", pct: 100 },
  { category: "Data & Analytics",      count: 51,  orgs: "DataCamp · Databricks · Johns Hopkins · Duke", pct: 25 },
  { category: "AI & Machine Learning", count: 47,  orgs: "DeepLearning.AI · Google · Vanderbilt · Coursera", pct: 23 },
  { category: "Quality Engineering",   count: 45,  orgs: "Tricentis · Atlassian · ServiceNow · TMMi", pct: 22 },
  { category: "Cloud (AWS · GCP · IBM)", count: 42, orgs: "27 AWS certifications · Google Cloud · IBM", pct: 20 },
  { category: "Academic & University", count: 32,  orgs: "Stanford · IIT · IIM · INSEAD · ISB · HEC Paris", pct: 16 },
];

const PUBLICATIONS_FEATURED = [
  {
    emoji: "📗",
    title: "Python Data Visualisation Essentials Guide",
    publisher: "BPB Publications · 2021",
    desc: "50+ worked examples across Matplotlib, Seaborn, Pandas, Plotly, Bokeh and geospatial datasets.",
    url: "https://in.bpbonline.com/products/python-data-visualization-essential-guide",
  },
  {
    emoji: "📘",
    title: "Science Of Selenium",
    publisher: "BPB Publications · 2019",
    desc: "Page Object Models, multi-language automation (Java/Python/Ruby/JS), CI integration and interview tips.",
    url: "https://www.amazon.in/Science-Selenium-Automation-Framework-English-ebook/dp/B082KFY17B",
  },
  {
    emoji: "📙",
    title: "Innovations in Testing",
    publisher: "Amazon Kindle Direct · 2017",
    desc: "Curated collection of testing thought leadership, originally published as blogs across the industry.",
    url: "https://www.amazon.in/dp/B078LRPLK8",
  },
  {
    emoji: "📰",
    title: "Impacts of DevOps on Testing",
    publisher: "DevOps.com · 2015",
    desc: "A widely-read point-of-view on how DevOps reshapes testing responsibilities, culture and career paths.",
    url: "http://devops.com/2015/08/21/impacts-devops-testing/",
  },
];

const AWARDS_TIMELINE = [
  { year: "2025", icon: "🏆", title: "#3 Global Top Thought Leader",      org: "Thinkers 360" },
  { year: "2023", icon: "💡", title: "Innovative CIO Awards",             org: "CIOAXIS & CISOCONNECT" },
  { year: "2022", icon: "⭐", title: "IT NEXT100 Future CIO Award",       org: "CIO&Leader · 9.9 Group" },
  { year: "2021", icon: "🏅", title: "Pharma Leadership Award",           org: "eLets Health Media" },
  { year: "2021", icon: "☁️", title: "Google Cloud Tech Premier League",  org: "Google — Winner" },
  { year: "2019", icon: "🥈", title: "IPE Rannbhoomi Corporate Quiz",     org: "Runner-up" },
  { year: "2014", icon: "🎖️", title: "Addo Agnitio — Knowledge Excellence", org: "Accenture" },
  { year: "2014", icon: "🏆", title: "ACE — Accenture Celebrates Excellence", org: "Accenture" },
  { year: "2012", icon: "🥇", title: "One Step Ahead Recognition",        org: "Vodafone" },
];

const HUB_URL = "https://kalilurrahman.github.io/KR_Knowledge_Hub.html";
const GOLD = "#c9a84c";
const COLORS = [GOLD, "#4f8ef7", "#4caf7d", "#e07454", "#9b79e0", "#55a8c9"];

// ─────────────────────────────────────────────────────────
//  SUB-COMPONENTS
// ─────────────────────────────────────────────────────────

function GoldLink({ href, children, external = true }: { href: string; children: React.ReactNode; external?: boolean }) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      style={{
        color: GOLD,
        fontWeight: 600,
        fontSize: 14,
        textDecoration: "none",
        transition: "opacity 0.2s",
        display: "inline-flex",
        alignItems: "center",
        gap: 4,
      }}
      onMouseEnter={e => (e.currentTarget.style.opacity = "0.85")}
      onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
    >
      {children}
    </a>
  );
}

function GhostLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        border: "1px solid hsl(var(--border))",
        color: "hsl(var(--muted-foreground))",
        padding: "0.45rem 1rem",
        fontSize: 13,
        borderRadius: 4,
        textDecoration: "none",
        transition: "border-color 0.2s, color 0.2s",
        display: "inline-block",
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = GOLD;
        e.currentTarget.style.color = GOLD;
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = "hsl(var(--border))";
        e.currentTarget.style.color = "hsl(var(--muted-foreground))";
      }}
    >
      {children}
    </a>
  );
}

// ─────────────────────────────────────────────────────────
//  MAIN COMPONENT
// ─────────────────────────────────────────────────────────

export default function KnowledgeHubSection() {
  const [activeTab, setActiveTab] = useState<"impact" | "credentials" | "voice" | "awards" | "pubs">("impact");

  const tabs = [
    { id: "impact",      label: "Impact Numbers" },
    { id: "credentials", label: "Credentials" },
    { id: "voice",       label: "Peer Voices" },
    { id: "awards",      label: "Awards" },
    { id: "pubs",        label: "Publications" },
  ] as const;

  return (
    <section
      id="knowledge-hub"
      style={{
        background: "hsl(var(--background))",
        padding: "5rem 0",
        fontFamily: "inherit",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 1.5rem" }}>

        {/* ══ MASTHEAD ══ */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <p
            style={{
              color: GOLD,
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              marginBottom: "0.75rem",
            }}
          >
            Professional Knowledge Record · 29+ Years
          </p>

          <h2
            style={{
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: 700,
              color: "hsl(var(--foreground))",
              lineHeight: 1.15,
              marginBottom: "1rem",
              fontFamily: "Georgia, serif",
            }}
          >
            The Evidence of{" "}
            <span style={{ color: GOLD }}>
              Sustained Excellence
            </span>
          </h2>

          <p
            style={{
              color: "hsl(var(--muted-foreground))",
              maxWidth: 600,
              margin: "0 auto 1.5rem",
              lineHeight: 1.7,
              fontSize: 15,
            }}
          >
            Not a list of titles — a record of outcomes. Numbers that moved P&Ls,
            credentials earned across decades, and words from the people who were there.
          </p>

          {/* Credential pills */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", justifyContent: "center" }}>
            {[
              "🏆 #3 Global Thought Leader · Thinkers360",
              "🎯 Kaggle Legacy Grandmaster",
              "📚 3× Published Author",
              "🎓 482 Certifications",
              "🌍 29+ Years · 5 Continents",
            ].map(pill => (
              <span
                key={pill}
                style={{
                  background: `${GOLD}18`,
                  border: `1px solid ${GOLD}44`,
                  color: GOLD,
                  padding: "0.3rem 0.8rem",
                  borderRadius: 999,
                  fontSize: 12,
                  fontWeight: 500,
                }}
              >
                {pill}
              </span>
            ))}
          </div>
        </div>

        {/* ══ TAB BAR ══ */}
        <div
          style={{
            display: "flex",
            overflowX: "auto",
            borderBottom: "1px solid hsl(var(--border))",
            marginBottom: "2rem",
            gap: 0,
          }}
        >
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                padding: "0.7rem 1.3rem",
                fontSize: "13.5px", fontWeight: 500,
                cursor: "pointer", background: "transparent", border: "none",
                borderBottom: activeTab === tab.id ? `2px solid ${GOLD}` : "2px solid transparent",
                color: activeTab === tab.id ? GOLD : "hsl(var(--muted-foreground))",
                whiteSpace: "nowrap", transition: "color 0.2s",
                fontFamily: "inherit",
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* ══ IMPACT NUMBERS ══ */}
        {activeTab === "impact" && (
          <div>
            <p style={{ color: "hsl(var(--muted-foreground))", marginBottom: "1.5rem", fontSize: 14 }}>
              Real outcomes from real programmes — figures drawn directly from project and delivery records.
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                gap: "1rem",
                marginBottom: "2rem",
              }}
            >
              {IMPACT_NUMBERS.map(item => (
                <div
                  key={item.figure}
                  style={{
                    border: "1px solid hsl(var(--border))",
                    borderRadius: 8,
                    padding: "1.5rem",
                    background: "hsl(var(--card))",
                    transition: "border-color 0.2s, transform 0.2s",
                    cursor: "default",
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = GOLD;
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = "hsl(var(--border))";
                    (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  }}
                >
                  <div style={{ display: "flex", alignItems: "baseline", gap: "0.5rem", marginBottom: "0.5rem" }}>
                    <span style={{ fontSize: "2.2rem", fontWeight: 800, color: GOLD, fontFamily: "Georgia, serif" }}>
                      {item.figure}
                    </span>
                    <span style={{ fontSize: 13, fontWeight: 600, color: "hsl(var(--foreground))", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                      {item.label}
                    </span>
                  </div>
                  <div>
                    <p style={{ fontSize: 12, color: GOLD, marginBottom: "0.4rem", fontWeight: 500 }}>
                      {item.context}
                    </p>
                    <p style={{ fontSize: 13, color: "hsl(var(--muted-foreground))", lineHeight: 1.6 }}>
                      {item.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <GoldLink href={HUB_URL}>See all 16 project records →</GoldLink>
              <GhostLink href={HUB_URL}>Open Knowledge Hub ↗</GhostLink>
            </div>
          </div>
        )}

        {/* ══ CREDENTIALS ══ */}
        {activeTab === "credentials" && (
          <div>
            <div
              style={{
                border: "1px solid hsl(var(--border))",
                borderRadius: 8,
                padding: "1.5rem",
                background: "hsl(var(--card))",
                marginBottom: "1.5rem",
              }}
            >
              <p style={{ color: "hsl(var(--muted-foreground))", fontSize: 14, lineHeight: 1.7, marginBottom: "1.25rem" }}>
                482 certifications earned across a 29-year career — from early Brainbench programming
                mastery in 2002 to AWS, DeepLearning.AI, Stanford, INSEAD, and Google Cloud.
                Not checkbox compliance. Evidence of a career spent permanently at the frontier.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
                {[
                  { n: "482", l: "Total" }, { n: "27",  l: "AWS" },
                  { n: "51",  l: "Data" },  { n: "47",  l: "AI/ML" },
                  { n: "32",  l: "Academic" },{ n: "206", l: "Leadership" },
                ].map(s => (
                  <div key={s.l} style={{ textAlign: "center", minWidth: 60 }}>
                    <div style={{ fontSize: "1.6rem", fontWeight: 800, color: GOLD, fontFamily: "Georgia, serif" }}>{s.n}</div>
                    <div style={{ fontSize: 11, color: "hsl(var(--muted-foreground))", textTransform: "uppercase", letterSpacing: "0.1em" }}>{s.l}</div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "2rem" }}>
              {CREDENTIAL_SHOWCASE.map((c, i) => (
                <div
                  key={c.category}
                  style={{
                    border: "1px solid hsl(var(--border))",
                    borderRadius: 6,
                    padding: "1rem 1.25rem",
                    background: "hsl(var(--card))",
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.5rem" }}>
                    <div>
                      <p style={{ fontWeight: 600, color: "hsl(var(--foreground))", fontSize: 14 }}>{c.category}</p>
                      <p style={{ fontSize: 12, color: "hsl(var(--muted-foreground))", marginTop: 2 }}>
                        {c.orgs}
                      </p>
                    </div>
                    <span style={{ fontSize: "1.3rem", fontWeight: 700, color: COLORS[i % COLORS.length], fontFamily: "Georgia, serif", minWidth: 40, textAlign: "right" }}>
                      {c.count}
                    </span>
                  </div>
                  <div style={{ height: 4, background: "hsl(var(--border))", borderRadius: 2, overflow: "hidden" }}>
                    <div style={{ height: "100%", width: `${c.pct}%`, background: COLORS[i % COLORS.length], borderRadius: 2 }} />
                  </div>
                </div>
              ))}
            </div>

            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <GoldLink href={HUB_URL}>Search all 482 certifications →</GoldLink>
              <GhostLink href="https://www.credly.com/users/kalilur-rahman/badges">Verified badges on Credly ↗</GhostLink>
            </div>
          </div>
        )}

        {/* ══ PEER VOICES ══ */}
        {activeTab === "voice" && (
          <div>
            <p style={{ color: "hsl(var(--muted-foreground))", marginBottom: "1.5rem", fontSize: 14 }}>
              What Managing Directors, CIOs and Senior Directors say — drawn from 33 LinkedIn recommendations.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1rem", marginBottom: "2rem" }}>
              {VOICE_OF_PEERS.map(r => (
                <div
                  key={r.name}
                  style={{
                    border: "1px solid hsl(var(--border))",
                    borderRadius: 8,
                    padding: "1.5rem",
                    background: "hsl(var(--card))",
                    transition: "transform 0.2s",
                    cursor: "default",
                    position: "relative",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.transform = "translateY(-2px)")}
                  onMouseLeave={e => (e.currentTarget.style.transform = "translateY(0)")}
                >
                  <span style={{ fontSize: "3rem", color: GOLD, lineHeight: 1, display: "block", marginBottom: "0.5rem", opacity: 0.4 }}>
                    "
                  </span>
                  <p style={{ color: "hsl(var(--foreground))", fontSize: 14, lineHeight: 1.7, marginBottom: "1rem", fontStyle: "italic" }}>
                    {r.quote}
                  </p>
                  <div>
                    <p style={{ fontWeight: 600, color: GOLD, fontSize: 13 }}>{r.name}</p>
                    <p style={{ fontSize: 12, color: "hsl(var(--muted-foreground))", marginTop: 2 }}>
                      {r.role} · {r.org}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <GoldLink href="https://www.linkedin.com/in/kalilurrahman/details/recommendations/">Read all 33 recommendations →</GoldLink>
          </div>
        )}

        {/* ══ AWARDS ══ */}
        {activeTab === "awards" && (
          <div>
            <p style={{ color: "hsl(var(--muted-foreground))", marginBottom: "1.5rem", fontSize: 14 }}>
              13 industry recognitions spanning delivery excellence, innovation leadership and knowledge contributions.
            </p>
            <div style={{ position: "relative", paddingLeft: "2rem", marginBottom: "2rem" }}>
              {/* Timeline line */}
              <div style={{ position: "absolute", left: "0.65rem", top: 0, bottom: 0, width: 2, background: `${GOLD}33` }} />
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {AWARDS_TIMELINE.map(a => (
                  <div
                    key={a.title}
                    style={{
                      border: "1px solid hsl(var(--border))",
                      borderRadius: 6,
                      padding: "0.9rem 1.25rem",
                      background: "hsl(var(--card))",
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                      transition: "border-color 0.2s, transform 0.2s",
                      cursor: "default",
                    }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLElement).style.borderColor = GOLD;
                      (e.currentTarget as HTMLElement).style.transform = "translateX(4px)";
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLElement).style.borderColor = "hsl(var(--border))";
                      (e.currentTarget as HTMLElement).style.transform = "translateX(0)";
                    }}
                  >
                    <span style={{ fontSize: 11, color: GOLD, fontWeight: 700, minWidth: 32 }}>
                      {a.year}
                    </span>
                    <span style={{ fontSize: "1.2rem" }}>{a.icon}</span>
                    <div>
                      <p style={{ fontWeight: 600, color: "hsl(var(--foreground))", fontSize: 14 }}>{a.title}</p>
                      <p style={{ fontSize: 12, color: "hsl(var(--muted-foreground))", marginTop: 2 }}>
                        {a.org}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <GoldLink href={HUB_URL}>All awards in Knowledge Hub →</GoldLink>
          </div>
        )}

        {/* ══ PUBLICATIONS ══ */}
        {activeTab === "pubs" && (
          <div>
            <p style={{ color: "hsl(var(--muted-foreground))", marginBottom: "1.5rem", fontSize: 14 }}>
              Books, white papers, magazine articles and conference publications spanning 2007–2024.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "2rem" }}>
              {PUBLICATIONS_FEATURED.map(p => (
                <a
                  key={p.title}
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    border: "1px solid hsl(var(--border))",
                    borderLeft: `3px solid ${GOLD}`,
                    borderRadius: 6,
                    padding: "1rem 1.25rem",
                    background: "hsl(var(--card))",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "1rem",
                    textDecoration: "none",
                    transition: "border-color 0.2s, transform 0.2s",
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = GOLD;
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = "hsl(var(--border))";
                    (e.currentTarget as HTMLElement).style.borderLeftColor = GOLD;
                    (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  }}
                >
                  <span style={{ fontSize: "1.5rem", flexShrink: 0 }}>{p.emoji}</span>
                  <div style={{ flex: 1 }}>
                    <p style={{ fontWeight: 600, color: "hsl(var(--foreground))", fontSize: 14, marginBottom: 2 }}>
                      {p.title}
                    </p>
                    <p style={{ fontSize: 11, color: GOLD, marginBottom: "0.4rem", fontWeight: 500 }}>
                      {p.publisher}
                    </p>
                    <p style={{ fontSize: 13, color: "hsl(var(--muted-foreground))", lineHeight: 1.6 }}>
                      {p.desc}
                    </p>
                  </div>
                  <span style={{ color: GOLD, fontSize: 16, flexShrink: 0 }}>↗</span>
                </a>
              ))}
            </div>

            {/* LinkedIn banner */}
            <div
              style={{
                border: `1px solid ${GOLD}44`,
                borderRadius: 8,
                padding: "1.25rem 1.5rem",
                background: `${GOLD}0a`,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "1rem",
                marginBottom: "1.5rem",
              }}
            >
              <div>
                <p style={{ fontWeight: 600, color: "hsl(var(--foreground))", fontSize: 14 }}>
                  LinkedIn Articles & Newsletter
                </p>
                <p style={{ fontSize: 12, color: "hsl(var(--muted-foreground))", marginTop: 2 }}>
                  Ongoing thought leadership on AI, testing, leadership and digital transformation.
                </p>
              </div>
              <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                <GhostLink href="https://www.linkedin.com/newsletters/kalilur-s-knowledge-hub-7003688849782906880/">
                  Newsletter →
                </GhostLink>
                <GhostLink href="https://www.linkedin.com/in/kalilurrahman/recent-activity/articles/">
                  All Articles →
                </GhostLink>
              </div>
            </div>

            <GoldLink href={HUB_URL}>All 16 publications in Knowledge Hub →</GoldLink>
          </div>
        )}

        {/* ══ BOTTOM CTA BANNER ══ */}
        <div
          style={{
            marginTop: "3rem",
            border: `1px solid ${GOLD}55`,
            borderRadius: 12,
            padding: "2rem",
            background: `linear-gradient(135deg, ${GOLD}0d 0%, hsl(var(--card)) 100%)`,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1.5rem",
          }}
        >
          <div>
            <p style={{ fontWeight: 700, color: "hsl(var(--foreground))", fontSize: 16, marginBottom: "0.4rem" }}>
              The full record — searchable, filterable, interactive
            </p>
            <p style={{ fontSize: 13, color: "hsl(var(--muted-foreground))", lineHeight: 1.6 }}>
              482 certifications with category filters · 33 peer recommendations ·
              16 career project records with outcomes · 293 completed learning paths — all in one hub.
            </p>
          </div>
          <a
            href={HUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: GOLD,
              color: "#000",
              fontWeight: 700,
              fontSize: 14,
              padding: "0.75rem 1.75rem",
              borderRadius: 6,
              textDecoration: "none",
              transition: "transform 0.2s",
              display: "inline-block",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.03)")}
            onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
          >
            Open Knowledge Hub →
          </a>
        </div>

      </div>
    </section>
  );
}
