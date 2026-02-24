import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, ChevronDown, Github } from "lucide-react";
import Section from "./Section";

import framerScreenshot from "@/assets/screenshots/framer-portfolio.png";
import githubScreenshot from "@/assets/screenshots/github-profile.png";
import kaggleScreenshot from "@/assets/screenshots/kaggle-profile.png";
import amazonScreenshot from "@/assets/screenshots/amazon-author.png";
import masterProfileScreenshot from "@/assets/screenshots/master-profile.png";
import mainPortfolioScreenshot from "@/assets/screenshots/main-portfolio.png";
import linktreeScreenshot from "@/assets/screenshots/linktree.png";
import phdScreenshot from "@/assets/screenshots/phd-research-assistant.png";

import krPromptsCollage from "@/assets/screenshots/kr-prompts-app_collage.png";
import techCuratorCollage from "@/assets/screenshots/tech-curator-guide_collage.png";
import pocketNewsCollage from "@/assets/screenshots/pocket-news_collage.png";
import islamicDuasCollage from "@/assets/screenshots/islamic-duas_collage.png";
import trainingPortfolioScreenshot from "@/assets/screenshots/training-portfolio.png";

const profiles = [
  {
    name: "Main Portfolio",
    desc: "Executive summary, leadership, books, awards & full career story.",
    url: "https://kalilurrahman.github.io",
    screenshot: mainPortfolioScreenshot,
    tag: "Portfolio",
  },
  {
    name: "Master Profile Hub",
    desc: "Omni-channel directory linking all professional profiles and projects.",
    url: "https://kalilurrahman.github.io/KR_Master_Profile.html",
    screenshot: masterProfileScreenshot,
    tag: "Hub",
  },
  {
    name: "PhD Research Assistant",
    desc: "v7.0 · 236 expert-grade prompts across 39 domains — covering PhD-exclusive tracks, qualitative & quantitative research methods, dissertation architecture, grant writing, academic publishing and more. A scholar's complete AI prompting companion.",
    url: "https://kalilurrahman.github.io/PhDResearchAssistant.html",
    screenshot: phdScreenshot,
    tag: "Research Tool",
    stats: ["236 Prompts", "39 Domains", "42 PhD-Exclusive", "67 Research"],
  },
  {
    name: "KR Prompts App",
    desc: "Curated prompt library for working smarter with AI.",
    url: "https://krpromptsapp.lovable.app/",
    screenshot: krPromptsCollage,
    tag: "Lovable App",
  },
  {
    name: "Tech Curator Guide",
    desc: "Interactive guide for technology curation and discovery.",
    url: "https://kr-tech-curator-guide.lovable.app/",
    screenshot: techCuratorCollage,
    tag: "Lovable App",
  },
  {
    name: "Pocket News",
    desc: "Personalised news curation — stay informed on what matters.",
    url: "https://kr-pocket-news.lovable.app/",
    screenshot: pocketNewsCollage,
    tag: "Lovable App",
  },
  {
    name: "Islamic Duas",
    desc: "A personal collection of duas and supplications.",
    url: "https://kr-islamic-duas.lovable.app/",
    screenshot: islamicDuasCollage,
    tag: "Lovable App",
  },
  {
    name: "Training Portfolio",
    desc: "60 strategic corporate training programs across Quality Engineering, AI & GenAI, Healthcare, GCC Strategy, and Leadership — delivered in-person and virtually.",
    url: "https://kr-training-portfolio.lovable.app/",
    screenshot: trainingPortfolioScreenshot,
    tag: "Lovable App",
    stats: ["60 Programs", "15+ Industry Tracks", "4 Delivery Formats"],
  },
  {
    name: "Framer Visual Portfolio",
    desc: "A modern visual portfolio with smooth animations, role-based profiles, and testimonials.",
    url: "https://kalilurrahman.framer.website/",
    screenshot: framerScreenshot,
    tag: "Visual",
  },
  {
    name: "Kaggle — Legacy Grandmaster",
    desc: "Competitions Expert, Datasets Expert, Notebooks Master. 1,265+ discussion contributions.",
    url: "https://www.kaggle.com/kalilurrahman",
    screenshot: kaggleScreenshot,
    tag: "Data & AI",
  },
  {
    name: "Amazon Author Page",
    desc: "Published books on Python Data Visualization, Selenium Automation, and Testing.",
    url: "https://www.amazon.com/stores/Kalilur-Rahman/author/B0863JL6R7",
    screenshot: amazonScreenshot,
    tag: "Books",
  },
  {
    name: "Linktree Directory",
    desc: "All channels in one place — books, socials, apps & professional links.",
    url: "https://linktr.ee/kalilur.rahman",
    screenshot: linktreeScreenshot,
    tag: "Directory",
  },
];

const githubRepos = [
  {
    name: "agenticAIVibeCodingProductBuilder",
    url: "https://github.com/kalilurrahman/agenticAIVibeCodingProductBuilder",
    lang: "TypeScript",
    summary: "Agentic AI-driven vibe coding product builder — explores autonomous AI agents collaborating to design, iterate and ship product features using modern LLM toolchains.",
  },
  {
    name: "tech-curator",
    url: "https://github.com/kalilurrahman/tech-curator",
    lang: "Python",
    summary: "Tech Curator PWA App — a progressive web app for curating and discovering technology resources, trends and tools, with a Python back-end.",
  },
  {
    name: "AptestQualityEngineer",
    url: "https://github.com/kalilurrahman/AptestQualityEngineer",
    lang: "Python",
    summary: "Aptest Quality Engineering Tool — AI-assisted quality engineering automation platform that generates test plans, test cases and defect reports using LLM prompts.",
  },
  {
    name: "kalilurrahman.github.io",
    url: "https://github.com/kalilurrahman/kalilurrahman.github.io",
    lang: "HTML",
    summary: "GitHub Pages portfolio — source for the executive portfolio site including the Master Profile Hub, PhD Research Assistant, and career summary pages.",
  },
  {
    name: "evo-guide-nexus",
    url: "https://github.com/kalilurrahman/evo-guide-nexus",
    lang: "TypeScript",
    summary: "Evo Guide Nexus — an interactive knowledge nexus built with TypeScript, designed to guide users through evolving technology landscapes with curated pathways.",
  },
  {
    name: "awesome-llm-apps",
    url: "https://github.com/kalilurrahman/awesome-llm-apps",
    lang: "Python",
    summary: "Curated collection of awesome LLM apps with AI Agents and RAG using OpenAI, Anthropic, Gemini and open-source models. Forked and extended from Shubhamsaboo/awesome-llm-apps.",
  },
  {
    name: "Awesome-Prompts",
    url: "https://github.com/kalilurrahman/Awesome-Prompts",
    lang: "HTML",
    summary: "Awesome and Aptest Prompts for General Use — a comprehensive, hand-crafted prompt library covering productivity, research, coding, writing and AI workflows.",
  },
  {
    name: "awesome-generative-ai-guide",
    url: "https://github.com/kalilurrahman/awesome-generative-ai-guide",
    lang: "Various",
    summary: "One-stop repository for generative AI research updates, interview resources, notebooks and learning paths. Forked and extended from the aishwaryanr/awesome-generative-ai-guide.",
  },
  {
    name: "QualityEngineeringBookByLLMs",
    url: "https://github.com/kalilurrahman/QualityEngineeringBookByLLMs",
    lang: "Various",
    summary: "Quality Engineering Book Generated by LLMs — an experimental book on QE practices co-authored with large language models, covering automation, shift-left testing and AI-driven QA.",
  },
  {
    name: "QualityEngineeringArtefacts",
    url: "https://github.com/kalilurrahman/QualityEngineeringArtefacts",
    lang: "Various",
    summary: "Kalilur Rahman's Quality Engineering Artefacts — a curated collection of test strategies, frameworks, templates and best practices built over 29+ years in QE leadership.",
  },
  {
    name: "1000_KaggleNoteBooks",
    url: "https://github.com/kalilurrahman/1000_KaggleNoteBooks",
    lang: "Jupyter Notebook",
    summary: "1000 Kaggle Notebooks — a landmark collection of Kaggle competition and dataset notebooks spanning EDA, feature engineering, ML modeling and deep learning.",
  },
  {
    name: "AI-For-Beginners",
    url: "https://github.com/kalilurrahman/AI-For-Beginners",
    lang: "Jupyter Notebook",
    summary: "12 Weeks, 24 Lessons, AI for All — Microsoft's beginner AI curriculum forked and annotated, covering symbolic AI, neural networks, computer vision and NLP.",
  },
  {
    name: "udemy_agents_course",
    url: "https://github.com/kalilurrahman/udemy_agents_course",
    lang: "Jupyter Notebook",
    summary: "Complete Agentic AI Engineering Course — notebooks and exercises from the Udemy course on building autonomous AI agents with LangChain, CrewAI and OpenAI.",
  },
  {
    name: "SocialMediaArtefactSharing",
    url: "https://github.com/kalilurrahman/SocialMediaArtefactSharing",
    lang: "Various",
    summary: "Social Media Artefact Sharing — a repository of infographics, posts, carousels and thought-leadership content shared across LinkedIn, Twitter and other platforms.",
  },
  {
    name: "NFLXStockData",
    url: "https://github.com/kalilurrahman/NFLXStockData",
    lang: "Data",
    summary: "Netflix Stock Data — historical NFLX stock price dataset for financial analysis, ML experimentation and data visualisation projects.",
  },
  {
    name: "NIFTY_50_STOCK_DATA",
    url: "https://github.com/kalilurrahman/NIFTY_50_STOCK_DATA",
    lang: "Data",
    summary: "NIFTY 50 Stock Data — comprehensive dataset of India's benchmark NIFTY 50 index constituents for financial modelling and market analysis.",
  },
  {
    name: "BoxOfficeData",
    url: "https://github.com/kalilurrahman/BoxOfficeData",
    lang: "Data",
    summary: "Box Office Data — scraped dataset from Box Office Mojo covering global film revenues, useful for entertainment industry analytics and EDA.",
  },
  {
    name: "IPLAuctionData",
    url: "https://github.com/kalilurrahman/IPLAuctionData",
    lang: "Data",
    summary: "IPL Player Auction Data — historical IPL auction datasets covering player bids, team assignments and price trends for sports analytics projects.",
  },
];

const ProfileShowcase = () => {
  const [selectedRepo, setSelectedRepo] = useState<string>("");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const selectedRepoData = githubRepos.find((r) => r.name === selectedRepo);

  return (
    <Section
      id="profiles"
      title="Profile Showcase"
      subtitle="Live previews of my presence across platforms."
    >
      <div className="space-y-8">
        {profiles.map((profile, i) => (
          <motion.a
            key={profile.name}
            href={profile.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="group grid md:grid-cols-5 gap-6 p-5 border border-border bg-card hover:border-primary/40 transition-all"
          >
            {/* Screenshot */}
            <div className="md:col-span-3 overflow-hidden rounded-sm border border-border/50">
              <img
                src={profile.screenshot}
                alt={`${profile.name} screenshot`}
                className="w-full h-auto object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                loading="lazy"
              />
            </div>

            {/* Info */}
            <div className="md:col-span-2 flex flex-col justify-center">
              <span className="inline-block self-start px-3 py-1 text-xs tracking-[0.12em] uppercase bg-primary/10 text-primary border border-primary/20 mb-3">
                {profile.tag}
              </span>
              <h3 className="font-serif text-xl text-foreground group-hover:text-primary transition-colors mb-2">
                {profile.name}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {profile.desc}
              </p>
              {"stats" in profile && profile.stats && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {profile.stats.map((s) => (
                    <span key={s} className="px-2 py-0.5 text-xs bg-primary/10 text-primary border border-primary/20 rounded-sm">
                      {s}
                    </span>
                  ))}
                </div>
              )}
              <span className="inline-flex items-center gap-1.5 text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                Visit Profile <ExternalLink className="w-3.5 h-3.5" />
              </span>
            </div>
          </motion.a>
        ))}

        {/* GitHub Repositories Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="p-6 border border-border bg-card"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="inline-flex items-center justify-center w-10 h-10 bg-primary/10 text-primary rounded-sm">
              <Github className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif text-xl text-foreground">GitHub Repositories</h3>
              <p className="text-xs text-muted-foreground">46+ public repos — select one to explore</p>
            </div>
            <a
              href="https://github.com/kalilurrahman"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-auto inline-flex items-center gap-1.5 text-xs text-primary hover:underline"
              onClick={(e) => e.stopPropagation()}
            >
              View all on GitHub <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* Dropdown */}
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="w-full flex items-center justify-between px-4 py-3 border border-border bg-background hover:border-primary/50 transition-colors text-left"
            >
              <span className={selectedRepo ? "text-foreground text-sm font-medium" : "text-muted-foreground text-sm"}>
                {selectedRepo || "— Choose a repository —"}
              </span>
              <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
            </button>

            {dropdownOpen && (
              <div className="absolute top-full left-0 right-0 z-50 border border-border bg-card shadow-xl max-h-72 overflow-y-auto">
                {githubRepos.map((repo) => (
                  <button
                    key={repo.name}
                    onClick={() => {
                      setSelectedRepo(repo.name);
                      setDropdownOpen(false);
                    }}
                    className={`w-full flex items-center justify-between px-4 py-3 text-left hover:bg-primary/10 hover:text-primary transition-colors border-b border-border/30 last:border-0 ${
                      selectedRepo === repo.name ? "bg-primary/10 text-primary" : "text-foreground"
                    }`}
                  >
                    <span className="text-sm font-mono">{repo.name}</span>
                    <span className="text-xs text-muted-foreground ml-3 shrink-0">{repo.lang}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Summary Card */}
          {selectedRepoData && (
            <motion.div
              key={selectedRepoData.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-4 p-5 border border-primary/20 bg-primary/5"
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <h4 className="font-mono text-sm font-semibold text-primary">{selectedRepoData.name}</h4>
                <a
                  href={selectedRepoData.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-primary hover:underline shrink-0"
                >
                  Open repo <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <span className="inline-block px-2 py-0.5 text-xs bg-primary/10 text-primary border border-primary/20 rounded-sm mb-3">
                {selectedRepoData.lang}
              </span>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {selectedRepoData.summary}
              </p>
            </motion.div>
          )}
        </motion.div>

        {/* GitHub Profile Card */}
        <motion.a
          href="https://github.com/kalilurrahman"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="group grid md:grid-cols-5 gap-6 p-5 border border-border bg-card hover:border-primary/40 transition-all"
        >
          <div className="md:col-span-3 overflow-hidden rounded-sm border border-border/50">
            <img
              src={githubScreenshot}
              alt="GitHub Profile screenshot"
              className="w-full h-auto object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
              loading="lazy"
            />
          </div>
          <div className="md:col-span-2 flex flex-col justify-center">
            <span className="inline-block self-start px-3 py-1 text-xs tracking-[0.12em] uppercase bg-primary/10 text-primary border border-primary/20 mb-3">
              Open Source
            </span>
            <h3 className="font-serif text-xl text-foreground group-hover:text-primary transition-colors mb-2">
              GitHub Profile
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              46+ repositories — quality engineering artefacts, LLM experiments, Kaggle notebooks & more.
            </p>
            <span className="inline-flex items-center gap-1.5 text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity">
              Visit Profile <ExternalLink className="w-3.5 h-3.5" />
            </span>
          </div>
        </motion.a>
      </div>
    </Section>
  );
};

export default ProfileShowcase;
