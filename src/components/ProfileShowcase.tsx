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
import gccPlaybookScreenshot from "@/assets/screenshots/gcc-playbook.png";
import quantumHubScreenshot from "@/assets/screenshots/quantum-hub.png";
import agenticAIPromptsScreenshot from "@/assets/screenshots/agentic-ai-prompts.png";
import financePromptsScreenshot from "@/assets/screenshots/finance-prompts.png";
import acuitasScreenshot from "@/assets/screenshots/acuitas-framework.png";
import socialAuthorityScreenshot from "@/assets/screenshots/social-authority-hub.png";
import biztechQuizzerScreenshot from "@/assets/screenshots/biztech-quizzer.png";
import newsAppScreenshot from "@/assets/screenshots/news-app.png";
import farzi10thScreenshot from "@/assets/screenshots/farzi-10th.png";
import arcadeGamesScreenshot from "@/assets/screenshots/arcade-games.png";
import promptTerminalBuilderScreenshot from "@/assets/screenshots/prompt-terminal-builder.png";
import veritasQEScreenshot from "@/assets/screenshots/veritas-qe-framework.png";
import gccCompassScreenshot from "@/assets/screenshots/gcc-compass.png";
import corpUpskillScreenshot from "@/assets/screenshots/corp-upskill.png";
import qeCompassScreenshot from "@/assets/screenshots/qe-compass.png";
import execScribeScreenshot from "@/assets/screenshots/exec-scribe.png";
import kaggleSkillHubScreenshot from "@/assets/screenshots/kaggle-skill-hub.png";
import aiLiteracyHubScreenshot from "@/assets/screenshots/ai-literacy-hub.png";
import interviewPrepScreenshot from "@/assets/screenshots/interview-prep-vault.png";
import cyberLexiconScreenshot from "@/assets/screenshots/cyber-lexicon-hub.png";
import quizBlitzScreenshot from "@/assets/screenshots/quiz-blitz-hub.png";

interface Profile {
  name: string;
  desc: string;
  url: string;
  screenshot: string;
  tag: string;
  stats?: string[];
}

// ─── Grouped profiles ───

const gccSection: Profile[] = [
  {
    name: "GCC Playbook",
    desc: "Comprehensive guide to building, scaling, and optimizing Global Capability Centers — covering lifecycle phases, maturity levels, geographies, and proven strategies.",
    url: "https://kr-gcc-playbook.lovable.app",
    screenshot: gccPlaybookScreenshot,
    tag: "Lovable App",
    stats: ["6,000+ GCCs", "1,700+ in India", "$64.6B Export Value"],
  },
  {
    name: "GCC Compass",
    desc: "The operating dashboard for GCC leaders — maturity assessments, 19-phase lifecycle map, AI strategic advisor, cost model calculator, and 500+ curated resources.",
    url: "https://kr-gcc-compass.lovable.app",
    screenshot: gccCompassScreenshot,
    tag: "Lovable App",
    stats: ["19-Phase Lifecycle", "AI Advisor", "Cost Model"],
  },
];

const promptsAndAI: Profile[] = [
  {
    name: "ACUITAS — AI Quality Engineering Framework",
    desc: "A 7-pillar AI Quality Engineering framework — Assessment, Calibration, Understanding, Integrity, Testing, Assurance & Surveillance. Aligned with ISO/IEC 42001, NIST AI RMF, and EU AI Act with 6 industry use cases, 4 case studies, and 6 audit-ready templates.",
    url: "https://kr-acuiitas-clarity-frameworks.lovable.app/",
    screenshot: acuitasScreenshot,
    tag: "Framework",
    stats: ["7 Pillars", "6 Use Cases", "4 Case Studies", "6 Templates"],
  },
  {
    name: "Social Authority Hub",
    desc: "AI-powered content generation for thought leaders — authority command centre with AI Content Engine, Content Calendar, 90-Day Sprint planning, and multi-format export for LinkedIn, newsletters & whitepapers.",
    url: "https://kr-social-authority-hub.lovable.app",
    screenshot: socialAuthorityScreenshot,
    tag: "Lovable App",
    stats: ["5 Authority Pillars", "AI Content Engine", "90-Day Sprint"],
  },
  {
    name: "Agentic AI Prompts Hub",
    desc: "Browse 200+ agentic AI prompts grouped by category — export as PDF or JSON. Upload your own prompt library for a fully customisable experience.",
    url: "https://kr-agentic-ai-prompts.lovable.app",
    screenshot: agenticAIPromptsScreenshot,
    tag: "Lovable App",
    stats: ["200+ Prompts", "100 Agents", "PDF & JSON Export"],
  },
  {
    name: "Financial Engineering & Advisory Prompts",
    desc: "Executive prompt compendium — 1,120+ curated prompts across 3 AI platforms. Bloomberg-style FINPROMPT Terminal with 500+ searchable prompts covering Strategy, M&A, Equity Research, Private Equity & Economics.",
    url: "https://kr-finance-prompt-hub.lovable.app/",
    screenshot: financePromptsScreenshot,
    tag: "Lovable App",
    stats: ["1,120+ Prompts", "3 AI Platforms", "FINPROMPT Terminal"],
  },
  {
    name: "KR Prompts App",
    desc: "Comprehensive LLM Prompts Library — 510 expert AI prompts across 46 categories for reasoning, research, creative work & professional problem-solving. Download in CSV, Markdown, JSON or Text.",
    url: "https://krpromptsapp.lovable.app/",
    screenshot: krPromptsCollage,
    tag: "Lovable App",
    stats: ["510 Prompts", "46 Categories", "5 Export Formats"],
  },
  {
    name: "Prompt Terminal Builder",
    desc: "Interactive prompt engineering workbench — build, test, and refine AI prompts with a terminal-style interface. Template library, version history, and multi-model export.",
    url: "https://kr-prompt-terminal-builder.lovable.app",
    screenshot: promptTerminalBuilderScreenshot,
    tag: "Lovable App",
    stats: ["Terminal UI", "Prompt Templates", "Multi-Model Export"],
  },
  {
    name: "ACUITAS - AI Quality Engineering Framework & CLARITY — AI Product Management Framework",
    desc: "ACUITAS - AI Quality Engineering Framework - Assessment, Calibration, Understanding, Integrity, Testing, Assurance, and Surveillance for AI Systems & CLARITY — AI Product Management Framework - Conception, Landscape, Accountability, Responsible Design, Integration, Tracking, and Yield",
    url: "https://kr-veritas-qe-framework.lovable.app",
    screenshot: veritasQEScreenshot,
    tag: "Framework",
    stats: ["7 Pillars", "Compliance Mapping", "Testing Standards"],
  },
  {
    name: "ExecComms Forge",
    desc: "AI-powered executive communication builder — board memos, slide outlines, budget justifications, OKR write-ups, and town hall scripts. 40+ templates across BFSI, Pharma & Technology.",
    url: "https://kr-exec-scribe.lovable.app",
    screenshot: execScribeScreenshot,
    tag: "Lovable App",
    stats: ["40+ Templates", "9 Personas", "4 Tone Profiles"],
  },
  {
    name: "AI Literacy Hub",
    desc: "Comprehensive AI education platform — courses, modules, and structured learning paths covering AI fundamentals, machine learning, neural networks, and practical applications.",
    url: "https://kr-ai-literacy-hub.lovable.app",
    screenshot: aiLiteracyHubScreenshot,
    tag: "Lovable App",
    stats: ["AI Fundamentals", "ML Basics", "Learning Paths"],
  },
  {
    name: "PhD Research Assistant",
    desc: "v7.0 · 236 expert-grade prompts across 39 domains — covering PhD-exclusive tracks, qualitative & quantitative research methods, dissertation architecture, grant writing, academic publishing and more.",
    url: "https://kalilurrahman.github.io/PhDResearchAssistant.html",
    screenshot: phdScreenshot,
    tag: "Research Tool",
    stats: ["236 Prompts", "39 Domains", "42 PhD-Exclusive", "67 Research"],
  },
];

const trainingAndGuides: Profile[] = [
  {
    name: "Training Portfolio",
    desc: "60 strategic corporate training programs across Quality Engineering, AI & GenAI, Healthcare, GCC Strategy, and Leadership — delivered in-person and virtually.",
    url: "https://kr-training-portfolio.lovable.app/",
    screenshot: trainingPortfolioScreenshot,
    tag: "Lovable App",
    stats: ["60 Programs", "15+ Industry Tracks", "4 Delivery Formats"],
  },
  {
    name: "Corporate Upskilling Planner",
    desc: "L&D roadmap builder for enterprise teams — generate structured 6/12-month learning roadmaps with printable skills matrices, individual paths, and certification alignment.",
    url: "https://kr-corp-upskill.lovable.app",
    screenshot: corpUpskillScreenshot,
    tag: "Lovable App",
    stats: ["Team Roadmaps", "Skills Matrix", "Cert Pathways"],
  },
  {
    name: "QE Compass",
    desc: "The definitive Quality Engineering reference & practice platform — ISTQB certification prep, AI-powered test case generation, 180+ quiz questions, 400+ glossary terms across 6 QE domains.",
    url: "https://kr-qe-compass.lovable.app",
    screenshot: qeCompassScreenshot,
    tag: "Lovable App",
    stats: ["6 QE Domains", "180+ Quizzes", "AI Test Gen"],
  },
  {
    name: "Kaggle Bootcamp",
    desc: "90-day structured learning path from Python basics to competitive machine learning — daily challenges, 15 notebook templates, competition strategies from a Kaggle Grandmaster.",
    url: "https://kr-kaggle-skill-hub.lovable.app",
    screenshot: kaggleSkillHubScreenshot,
    tag: "Lovable App",
    stats: ["90-Day Path", "90+ Challenges", "15 Templates"],
  },
  {
    name: "Quantum Computing Guide",
    desc: "Pocket glossary of 201 essential quantum computing terms — searchable, filterable across Physics, Hardware, Gates, Algorithms, Error Correction & Security.",
    url: "https://kr-quantum-hub.lovable.app/",
    screenshot: quantumHubScreenshot,
    tag: "Lovable App",
    stats: ["201 Terms", "6 Categories", "Offline Ready"],
  },
  {
    name: "Tech Curator Guide",
    desc: "Interactive guide for technology curation and discovery.",
    url: "https://kr-tech-curator-guide.lovable.app/",
    screenshot: techCuratorCollage,
    tag: "Lovable App",
  },
  {
    name: "BizTech Quiz Arena",
    desc: "Gamified quiz platform — 9,000+ questions across 9 categories with 5 game modes and 8 difficulty levels. Test your business & technology knowledge.",
    url: "https://kr-biztech-quizzer.lovable.app",
    screenshot: biztechQuizzerScreenshot,
    tag: "Lovable App",
    stats: ["9,000+ Questions", "9 Categories", "5 Game Modes"],
  },
  {
    name: "Interview Prep Vault",
    desc: "Technical interview preparation platform — coding challenges, behavioral questions, system design practice areas, and structured preparation guides.",
    url: "https://kr-interview-prep-vault.lovable.app",
    screenshot: interviewPrepScreenshot,
    tag: "Lovable App",
    stats: ["Coding Challenges", "System Design", "Behavioral Prep"],
  },
  {
    name: "Acronym Buster — Cyber Lexicon Hub",
    desc: "Comprehensive tech reference guide — 1,837 acronyms across Cyber Security (487), Infrastructure (387), Cloud (494) & Operations (469) with searchable cards.",
    url: "https://kr-cyber-lexicon-hub.lovable.app",
    screenshot: cyberLexiconScreenshot,
    tag: "Lovable App",
    stats: ["1,837 Acronyms", "4 Categories", "Searchable"],
  },
  {
    name: "Quiz Master — Quiz Blitz Hub",
    desc: "Trending topic quiz platform — 9 active topics across Technology, AI, Business, World Economy, Finance, Sports & Current Affairs with leaderboard tracking.",
    url: "https://kr-quiz-blitz-hub.lovable.app",
    screenshot: quizBlitzScreenshot,
    tag: "Lovable App",
    stats: ["9 Topics", "Leaderboard", "Multi-Category"],
  },
];

const hobbyAndPersonal: Profile[] = [
  {
    name: "NewsVault",
    desc: "Full-featured news aggregator with real-time feeds, category filtering, bookmarking, and personalised recommendations across 15+ topics.",
    url: "https://kr-news-app.lovable.app/",
    screenshot: newsAppScreenshot,
    tag: "Lovable App",
    stats: ["15+ Topics", "Real-time Feeds", "Bookmarks"],
  },
  {
    name: "Pocket News",
    desc: "Personalised news curation — stay informed on what matters.",
    url: "https://kr-pocket-news.lovable.app/",
    screenshot: pocketNewsCollage,
    tag: "Lovable App",
  },
  {
    name: "Farzi 10th — CBSE Board Prep",
    desc: "200-day structured study plan for CBSE Class 10 — AI doubt solver, formula bank, streak system, mock tests & 1,000+ practice questions across 6 subjects.",
    url: "https://farzi-10th.lovable.app",
    screenshot: farzi10thScreenshot,
    tag: "Lovable App",
    stats: ["200-Day Plan", "6 Subjects", "1,000+ Questions"],
  },
  {
    name: "Arcade Vault",
    desc: "Retro arcade gaming hub — 8 classic games including Tetris, Arkanoid, Snake, 2048, Minesweeper, Pong & Flappy Bird with score tracking.",
    url: "https://kr-arcade-games.lovable.app",
    screenshot: arcadeGamesScreenshot,
    tag: "Lovable App",
    stats: ["8 Classic Games", "Score Tracking", "Retro UI"],
  },
  {
    name: "Islamic Duas",
    desc: "A personal collection of duas and supplications.",
    url: "https://kr-islamic-duas.lovable.app/",
    screenshot: islamicDuasCollage,
    tag: "Lovable App",
  },
];

// ─── Additional projects (text-link cards, no screenshots) ───

interface TextProfile {
  name: string;
  desc: string;
  url: string;
  tag: string;
  stats?: string[];
}

const aiAndAgents: TextProfile[] = [
  { name: "Agent Flow Studio", desc: "Visual AI agent workflow builder — design, chain, and orchestrate multi-step AI agent flows with drag-and-drop interface.", url: "https://kr-ai-agent-flow.lovable.app", tag: "Lovable App", stats: ["Visual Builder", "Agent Chains"] },
  { name: "Agent Canvas", desc: "Interactive canvas for designing AI agent workflows — connect nodes, define triggers, and visualise autonomous agent pipelines.", url: "https://kr-ai-workflow-gen.lovable.app", tag: "Lovable App", stats: ["Canvas UI", "Pipeline Design"] },
  { name: "Agent Weaver", desc: "Compose multi-agent systems — weave together specialised AI agents for complex tasks with configurable roles and handoffs.", url: "https://kr-ai-agent-weaver.lovable.app", tag: "Lovable App", stats: ["Multi-Agent", "Role Config"] },

];

const toolsAndUtilities: TextProfile[] = [
  { name: "Doc Transformer", desc: "AI-powered document simplification tool — transform complex technical documents into clear, accessible content for any audience.", url: "https://kr-tech-simplifier.lovable.app", tag: "Lovable App", stats: ["Doc Simplifier", "AI-Powered"] },
  { name: "Profile Studio", desc: "Professional profile search and optimization tool — analyse, compare, and enhance professional profiles across platforms.", url: "https://kr-profile-search.lovable.app", tag: "Lovable App", stats: ["Profile Analysis", "Optimisation"] },
  { name: "Profile Perfecter", desc: "Smart JD-to-profile matcher — align your professional profile with job descriptions using AI-powered gap analysis and recommendations.", url: "https://kr-jd-smart-profile.lovable.app", tag: "Lovable App", stats: ["JD Matching", "Gap Analysis"] },
  { name: "TestForge AI", desc: "AI-powered test automation generator — create test scripts, test plans, and quality artefacts from requirements using large language models.", url: "https://kr-test-automator.lovable.app", tag: "Lovable App", stats: ["Test Gen", "AI Automation"] },
  { name: "Nexus Unified Hub", desc: "All-in-one tool aggregator — unified access to multiple productivity and engineering tools in a single dashboard.", url: "https://kr-omni-tool-hub.lovable.app", tag: "Lovable App", stats: ["Unified Dashboard", "Multi-Tool"] },
  { name: "Prompt Builder Hub", desc: "Terminal-inspired prompt composition studio — build, refine, and export structured prompts with template support.", url: "https://kr-terminal-muse-maker.lovable.app", tag: "Lovable App", stats: ["Prompt Composer", "Templates"] },
];

const learningAndKnowledge: TextProfile[] = [
  { name: "Idea Vault Pro", desc: "App ideas vault — capture, organise, and prioritise product and project ideas with structured templates and scoring.", url: "https://kr-app-ideas-vault.lovable.app", tag: "Lovable App", stats: ["Idea Capture", "Prioritisation"] },
  { name: "KR Insights", desc: "Curated insights hub — aggregated knowledge, trends, and analysis across technology, business, and leadership.", url: "https://kr-app-nexus.lovable.app", tag: "Lovable App", stats: ["Insights", "Trends"] },
  { name: "Resource Navigator", desc: "Structured learning path hub — curated resources, courses, and progression tracks for technology skill development.", url: "https://kr-learning-path-hub.lovable.app", tag: "Lovable App", stats: ["Learning Paths", "Resources"] },
  { name: "Social Dashboard Hub", desc: "Social media content dashboard — aggregate and showcase posts, quizzes, blogs, and thought leadership content.", url: "https://social-dashboard-hub.lovable.app", tag: "Lovable App", stats: ["Content Dashboard", "Social Media"] },
];

const morePersonalApps: TextProfile[] = [
  { name: "Tetris Stack", desc: "Classic Tetris game with increasing difficulty — responsive web app playable on desktop and mobile.", url: "https://kr-tetris-stack.lovable.app", tag: "Game", stats: ["Classic Tetris", "Mobile Ready"] },
  { name: "Expense Tracker", desc: "Personal finance tracking app — log expenses, set budgets, and visualise spending patterns with clean minimalist UI.", url: "https://kr-expense-tracker.lovable.app", tag: "Finance", stats: ["Budget Tracking", "Minimalist UI"] },
  { name: "Jeopardy Quiz", desc: "Jeopardy-style quiz application — category-based questions with scoring, smooth animations, and responsive interface.", url: "https://kr-jeopardy-quiz.lovable.app", tag: "Game", stats: ["Jeopardy Style", "Scoring"] },
  { name: "Mindful Flow", desc: "Personal productivity dashboard — track daily goals, to-do lists, finances, and habits in a unified mindful interface.", url: "https://mindful-flow-82.lovable.app", tag: "Productivity", stats: ["Goals", "Habits", "Finance"] },
];

const platformProfiles: Profile[] = [
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

// ─── GitHub Repos (unchanged) ───

const githubRepos = [
  { name: "agenticAIVibeCodingProductBuilder", url: "https://github.com/kalilurrahman/agenticAIVibeCodingProductBuilder", lang: "TypeScript", summary: "Agentic AI-driven vibe coding product builder — explores autonomous AI agents collaborating to design, iterate and ship product features using modern LLM toolchains." },
  { name: "tech-curator", url: "https://github.com/kalilurrahman/tech-curator", lang: "Python", summary: "Tech Curator PWA App — a progressive web app for curating and discovering technology resources, trends and tools, with a Python back-end." },
  { name: "AptestQualityEngineer", url: "https://github.com/kalilurrahman/AptestQualityEngineer", lang: "Python", summary: "Aptest Quality Engineering Tool — AI-assisted quality engineering automation platform that generates test plans, test cases and defect reports using LLM prompts." },
  { name: "kalilurrahman.github.io", url: "https://github.com/kalilurrahman/kalilurrahman.github.io", lang: "HTML", summary: "GitHub Pages portfolio — source for the executive portfolio site including the Master Profile Hub, PhD Research Assistant, and career summary pages." },
  { name: "evo-guide-nexus", url: "https://github.com/kalilurrahman/evo-guide-nexus", lang: "TypeScript", summary: "Evo Guide Nexus — an interactive knowledge nexus built with TypeScript, designed to guide users through evolving technology landscapes with curated pathways." },
  { name: "awesome-llm-apps", url: "https://github.com/kalilurrahman/awesome-llm-apps", lang: "Python", summary: "Curated collection of awesome LLM apps with AI Agents and RAG using OpenAI, Anthropic, Gemini and open-source models." },
  { name: "Awesome-Prompts", url: "https://github.com/kalilurrahman/Awesome-Prompts", lang: "HTML", summary: "Awesome and Aptest Prompts for General Use — a comprehensive, hand-crafted prompt library covering productivity, research, coding, writing and AI workflows." },
  { name: "awesome-generative-ai-guide", url: "https://github.com/kalilurrahman/awesome-generative-ai-guide", lang: "Various", summary: "One-stop repository for generative AI research updates, interview resources, notebooks and learning paths." },
  { name: "QualityEngineeringBookByLLMs", url: "https://github.com/kalilurrahman/QualityEngineeringBookByLLMs", lang: "Various", summary: "Quality Engineering Book Generated by LLMs — an experimental book on QE practices co-authored with large language models." },
  { name: "QualityEngineeringArtefacts", url: "https://github.com/kalilurrahman/QualityEngineeringArtefacts", lang: "Various", summary: "Kalilur Rahman's Quality Engineering Artefacts — a curated collection of test strategies, frameworks, templates and best practices." },
  { name: "1000_KaggleNoteBooks", url: "https://github.com/kalilurrahman/1000_KaggleNoteBooks", lang: "Jupyter Notebook", summary: "1000 Kaggle Notebooks — a landmark collection of Kaggle competition and dataset notebooks spanning EDA, feature engineering, ML modeling and deep learning." },
  { name: "AI-For-Beginners", url: "https://github.com/kalilurrahman/AI-For-Beginners", lang: "Jupyter Notebook", summary: "12 Weeks, 24 Lessons, AI for All — Microsoft's beginner AI curriculum forked and annotated." },
  { name: "udemy_agents_course", url: "https://github.com/kalilurrahman/udemy_agents_course", lang: "Jupyter Notebook", summary: "Complete Agentic AI Engineering Course — notebooks and exercises from the Udemy course on building autonomous AI agents." },
  { name: "SocialMediaArtefactSharing", url: "https://github.com/kalilurrahman/SocialMediaArtefactSharing", lang: "Various", summary: "Social Media Artefact Sharing — a repository of infographics, posts, carousels and thought-leadership content." },
  { name: "NFLXStockData", url: "https://github.com/kalilurrahman/NFLXStockData", lang: "Data", summary: "Netflix Stock Data — historical NFLX stock price dataset for financial analysis." },
  { name: "NIFTY_50_STOCK_DATA", url: "https://github.com/kalilurrahman/NIFTY_50_STOCK_DATA", lang: "Data", summary: "NIFTY 50 Stock Data — comprehensive dataset of India's benchmark NIFTY 50 index constituents." },
  { name: "BoxOfficeData", url: "https://github.com/kalilurrahman/BoxOfficeData", lang: "Data", summary: "Box Office Data — scraped dataset from Box Office Mojo covering global film revenues." },
  { name: "IPLAuctionData", url: "https://github.com/kalilurrahman/IPLAuctionData", lang: "Data", summary: "IPL Player Auction Data — historical IPL auction datasets covering player bids, team assignments and price trends." },
];

// ─── Subsection header ───

const SubsectionHeader = ({ icon, title, count }: { icon: string; title: string; count: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.4 }}
    className="flex items-center gap-3 mb-6 mt-4"
  >
    <span className="text-2xl">{icon}</span>
    <div>
      <h3 className="font-serif text-lg md:text-xl text-foreground">{title}</h3>
      <span className="text-xs text-muted-foreground font-mono">{count} {count === 1 ? "project" : "projects"}</span>
    </div>
    <div className="flex-1 h-px bg-border ml-3" />
  </motion.div>
);

// ─── Profile Card ───

const ProfileCard = ({ profile, index }: { profile: Profile; index: number }) => (
  <motion.a
    href={profile.url}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, delay: index * 0.05 }}
    className="group grid md:grid-cols-5 gap-6 p-5 border border-border bg-card hover:border-primary/40 transition-all"
  >
    <div className="md:col-span-3 overflow-hidden rounded-sm border border-border/50">
      <img
        src={profile.screenshot}
        alt={`${profile.name} screenshot`}
        className="w-full h-auto object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
        loading="lazy"
      />
    </div>
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
      {profile.stats && (
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
);

// ─── Text Link Card (no screenshot) ───

const TextLinkCard = ({ profile, index }: { profile: TextProfile; index: number }) => (
  <motion.a
    href={profile.url}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.4, delay: index * 0.04 }}
    className="group block p-4 border border-border bg-card hover:border-primary/40 transition-all"
  >
    <div className="flex items-start justify-between gap-3">
      <div className="flex-1">
        <span className="inline-block px-2 py-0.5 text-[10px] tracking-[0.12em] uppercase bg-primary/10 text-primary border border-primary/20 mb-2">
          {profile.tag}
        </span>
        <h4 className="font-serif text-base text-foreground group-hover:text-primary transition-colors mb-1.5">
          {profile.name}
        </h4>
        <p className="text-xs text-muted-foreground leading-relaxed mb-2">{profile.desc}</p>
        {profile.stats && (
          <div className="flex flex-wrap gap-1.5">
            {profile.stats.map((s) => (
              <span key={s} className="px-1.5 py-0.5 text-[10px] bg-primary/10 text-primary border border-primary/20 rounded-sm">{s}</span>
            ))}
          </div>
        )}
      </div>
      <ExternalLink className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-colors shrink-0 mt-1" />
    </div>
  </motion.a>
);

// ─── Main Component ───

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
      <div className="space-y-6">

        {/* ═══ GCC Playbook — Featured ═══ */}
        <SubsectionHeader icon="🏢" title="GCC Advisory" count={gccSection.length} />
        <div className="space-y-8">
          {gccSection.map((p, i) => (
            <ProfileCard key={p.name} profile={p} index={i} />
          ))}
        </div>

        {/* ═══ AI, Prompts & Frameworks ═══ */}
        <SubsectionHeader icon="🤖" title="AI, Prompts & Frameworks" count={promptsAndAI.length + aiAndAgents.length} />
        <div className="space-y-8">
          {promptsAndAI.map((p, i) => (
            <ProfileCard key={p.name} profile={p} index={i} />
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {aiAndAgents.map((p, i) => (
            <TextLinkCard key={p.name} profile={p} index={i} />
          ))}
        </div>

        {/* ═══ Tools & Utilities ═══ */}
        <SubsectionHeader icon="🔧" title="Tools & Utilities" count={toolsAndUtilities.length} />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {toolsAndUtilities.map((p, i) => (
            <TextLinkCard key={p.name} profile={p} index={i} />
          ))}
        </div>

        {/* ═══ Training & Guides ═══ */}
        <SubsectionHeader icon="🎓" title="Training & Technical Guides" count={trainingAndGuides.length + learningAndKnowledge.length} />
        <div className="space-y-8">
          {trainingAndGuides.map((p, i) => (
            <ProfileCard key={p.name} profile={p} index={i} />
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {learningAndKnowledge.map((p, i) => (
            <TextLinkCard key={p.name} profile={p} index={i} />
          ))}
        </div>

        {/* ═══ Hobby & Personal ═══ */}
        <SubsectionHeader icon="🎯" title="Personal & Side Projects" count={hobbyAndPersonal.length + morePersonalApps.length} />
        <div className="space-y-8">
          {hobbyAndPersonal.map((p, i) => (
            <ProfileCard key={p.name} profile={p} index={i} />
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {morePersonalApps.map((p, i) => (
            <TextLinkCard key={p.name} profile={p} index={i} />
          ))}
        </div>

        {/* ═══ Platforms & Portfolios ═══ */}
        <SubsectionHeader icon="🌐" title="Platforms & Portfolios" count={platformProfiles.length} />
        <div className="space-y-8">
          {platformProfiles.map((p, i) => (
            <ProfileCard key={p.name} profile={p} index={i} />
          ))}
        </div>

        {/* ═══ GitHub Repositories ═══ */}
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
                    className={`w-full flex items-center justify-between px-4 py-3 text-left hover:bg-primary/10 hover:text-primary transition-colors border-b border-border/30 last:border-0 ${selectedRepo === repo.name ? "bg-primary/10 text-primary" : "text-foreground"
                      }`}
                  >
                    <span className="text-sm font-mono">{repo.name}</span>
                    <span className="text-xs text-muted-foreground ml-3 shrink-0">{repo.lang}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

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
