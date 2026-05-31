export interface Project {
  id: string;
  name: string;
  description: string;
  emoji: string;
  type: 'Lovable App' | 'GitHub' | 'Static Site' | 'Portfolio' | 'Game' | 'Finance App' | 'Productivity' | 'Portfolio Site';
  link: string;
  external: boolean;
  category: 'AI & Agents' | 'Enterprise & GCC' | 'Quality Engineering' | 'Data & Knowledge' | 'Personal & Tools';
  featured?: boolean;
  screenshot?: string;
}

/** Live screenshot helper using thum.io (no key required, cached). */
const shot = (url: string): string =>
  `https://image.thum.io/get/width/800/crop/600/noanimate/${url}`;

export const projects: Project[] = [
  // FEATURED / PRIMARY PROJECTS
  {
    id: "kr-knowledge-hub",
    name: "Knowledge Hub",
    description: "Comprehensive searchable record — 482 certifications, 293 learning items, 16 publications, 13 awards, 33 recommendations.",
    emoji: "📚",
    type: "Static Site",
    link: "/knowledge-hub",
    external: false,
    category: "Data & Knowledge",
    featured: true
  },
  {
    id: "ai-agents",
    name: "Agentic AI Library",
    description: "350+ AI agent definitions across 28 categories — Technology, Research, Advisory, Engineering and more.",
    emoji: "🤖",
    type: "Static Site",
    link: "/ai-agents",
    external: false,
    category: "AI & Agents",
    featured: true
  },
  {
    id: "kr-finance-prompt-hub",
    name: "Financial Engineering & Advisory Prompts",
    description: "1,120+ curated prompts across 3 AI platforms with Bloomberg-style FINPROMPT Terminal.",
    emoji: "💹",
    type: "Lovable App",
    link: "https://kr-finance-prompt-hub.lovable.app/",
    external: true,
    category: "AI & Agents",
    featured: true,
    screenshot: shot("https://kr-finance-prompt-hub.lovable.app/")
  },
  {
    id: "kr-gcc-compass",
    name: "GCC Compass",
    description: "Operating dashboard for GCC leaders — maturity assessments, 19-phase lifecycle map, AI advisor, cost model calculator.",
    emoji: "🏢",
    type: "Lovable App",
    link: "https://kr-gcc-compass.lovable.app",
    external: true,
    category: "Enterprise & GCC",
    featured: true,
    screenshot: shot("https://kr-gcc-compass.lovable.app")
  },
  {
    id: "kr-acuitas",
    name: "ACUITAS — AI QE Framework",
    description: "7-pillar AI Quality Engineering framework aligned with ISO 42001, NIST AI RMF & EU AI Act.",
    emoji: "🛡️",
    type: "Lovable App",
    link: "https://kr-acuiitas-clarity-frameworks.lovable.app/",
    external: true,
    category: "Quality Engineering",
    featured: true,
    screenshot: shot("https://kr-acuiitas-clarity-frameworks.lovable.app/")
  },

  // AI & AGENTS
  {
    id: "kr-agentic-ai-prompts",
    name: "Agentic AI Prompts Hub",
    description: "200+ agentic AI prompts with PDF/JSON export and custom library upload.",
    emoji: "🧠",
    type: "Lovable App",
    link: "https://kr-agentic-ai-prompts.lovable.app",
    external: true,
    category: "AI & Agents",
    screenshot: shot("https://kr-agentic-ai-prompts.lovable.app")
  },
  {
    id: "kr-ai-agent-flow",
    name: "Agent Flow Studio",
    description: "Visual AI agent workflow builder — design, chain, and orchestrate multi-step AI agent flows.",
    emoji: "🤖",
    type: "Lovable App",
    link: "https://kr-ai-agent-flow.lovable.app",
    external: true,
    category: "AI & Agents",
    screenshot: shot("https://kr-ai-agent-flow.lovable.app")
  },
  {
    id: "kr-prompt-terminal-builder",
    name: "Prompt Terminal Builder",
    description: "Interactive prompt engineering workbench — terminal-style interface with template library.",
    emoji: "🖥️",
    type: "Lovable App",
    link: "https://kr-prompt-terminal-builder.lovable.app",
    external: true,
    category: "AI & Agents",
    screenshot: shot("https://kr-prompt-terminal-builder.lovable.app")
  },
  {
    id: "kr-ai-literacy-hub",
    name: "AI Literacy Hub",
    description: "Structured AI education platform — courses, modules, and guided learning paths covering AI fundamentals to applied use cases.",
    emoji: "🧠",
    type: "Lovable App",
    link: "https://kr-ai-literacy-hub.lovable.app",
    external: true,
    category: "AI & Agents",
    screenshot: shot("https://kr-ai-literacy-hub.lovable.app")
  },
  {
    id: "kr-ai-agent-weaver",
    name: "Agent Weaver",
    description: "Compose multi-agent systems with configurable roles, handoffs, and orchestration patterns for complex workflows.",
    emoji: "🕸️",
    type: "Lovable App",
    link: "https://kr-ai-agent-weaver.lovable.app",
    external: true,
    category: "AI & Agents",
    screenshot: shot("https://kr-ai-agent-weaver.lovable.app")
  },
  {
    id: "kr-ai-workflow-gen",
    name: "Agent Canvas",
    description: "Interactive canvas for designing AI agent workflows — connect nodes and visualise pipelines.",
    emoji: "🎨",
    type: "Lovable App",
    link: "https://kr-ai-workflow-gen.lovable.app",
    external: true,
    category: "AI & Agents",
    screenshot: shot("https://kr-ai-workflow-gen.lovable.app")
  },

  // ENTERPRISE & GCC
  {
    id: "kr-training-portfolio",
    name: "Training Portfolio",
    description: "60 strategic corporate training programs across QE, AI, Healthcare, GCC Strategy & Leadership.",
    emoji: "🎓",
    type: "Lovable App",
    link: "https://kr-training-portfolio.lovable.app/",
    external: true,
    category: "Enterprise & GCC",
    screenshot: shot("https://kr-training-portfolio.lovable.app/")
  },
  {
    id: "kr-gcc-playbook",
    name: "GCC Playbook",
    description: "Comprehensive guide to building and scaling Global Capability Centers — phases, maturity, geography.",
    emoji: "🏢",
    type: "Lovable App",
    link: "https://kr-gcc-playbook.lovable.app",
    external: true,
    category: "Enterprise & GCC",
    screenshot: shot("https://kr-gcc-playbook.lovable.app")
  },
  {
    id: "kr-exec-scribe",
    name: "ExecComms Forge",
    description: "AI-powered executive communication builder — board memos, presentations, OKR write-ups.",
    emoji: "📝",
    type: "Lovable App",
    link: "https://kr-exec-scribe.lovable.app",
    external: true,
    category: "Enterprise & GCC",
    screenshot: shot("https://kr-exec-scribe.lovable.app")
  },
  {
    id: "kr-corp-upskill",
    name: "Corporate Upskilling Planner",
    description: "L&D roadmap builder — structured 6/12-month learning roadmaps with skills matrices.",
    emoji: "🎯",
    type: "Lovable App",
    link: "https://kr-corp-upskill.lovable.app",
    external: true,
    category: "Enterprise & GCC",
    screenshot: shot("https://kr-corp-upskill.lovable.app")
  },

  // QUALITY ENGINEERING
  {
    id: "kr-qe-compass",
    name: "QE Compass",
    description: "Quality Engineering reference platform — ISTQB cert prep, AI test case generator, 180+ quizzes.",
    emoji: "🔍",
    type: "Lovable App",
    link: "https://kr-qe-compass.lovable.app",
    external: true,
    category: "Quality Engineering",
    screenshot: shot("https://kr-qe-compass.lovable.app")
  },
  {
    id: "kr-veritas-qe-framework",
    name: "VERITAS — QE Framework",
    description: "Comprehensive Quality Engineering framework — Verification, Evaluation, Risk, Integrity, Testing.",
    emoji: "✅",
    type: "Lovable App",
    link: "https://kr-veritas-qe-framework.lovable.app",
    external: true,
    category: "Quality Engineering",
    screenshot: shot("https://kr-veritas-qe-framework.lovable.app")
  },
  {
    id: "kr-test-automator",
    name: "TestForge AI",
    description: "AI-powered test automation generator — test scripts, plans, and quality artefacts.",
    emoji: "🧪",
    type: "Lovable App",
    link: "https://kr-test-automator.lovable.app",
    external: true,
    category: "Quality Engineering",
    screenshot: shot("https://kr-test-automator.lovable.app")
  },

  // DATA & KNOWLEDGE
  {
    id: "kr-quantum-hub",
    name: "Quantum Computing Guide",
    description: "201 essential quantum computing terms — searchable glossary across 6 categories.",
    emoji: "⚛️",
    type: "Lovable App",
    link: "https://kr-quantum-hub.lovable.app/",
    external: true,
    category: "Data & Knowledge",
    screenshot: shot("https://kr-quantum-hub.lovable.app/")
  },
  {
    id: "kr-cyber-lexicon-hub",
    name: "Acronym Buster — Cyber Lexicon Hub",
    description: "1,837 tech acronyms across Cyber Security, Infrastructure, Cloud & Operations.",
    emoji: "🔐",
    type: "Lovable App",
    link: "https://kr-cyber-lexicon-hub.lovable.app",
    external: true,
    category: "Data & Knowledge",
    screenshot: shot("https://kr-cyber-lexicon-hub.lovable.app")
  },
  {
    id: "kr-quiz-blitz-hub",
    name: "Quiz Master — Quiz Blitz Hub",
    description: "Trending topic quiz platform — 9 categories including Technology, AI, Business, Finance.",
    emoji: "🧩",
    type: "Lovable App",
    link: "https://kr-quiz-blitz-hub.lovable.app",
    external: true,
    category: "Data & Knowledge",
    screenshot: shot("https://kr-quiz-blitz-hub.lovable.app")
  },
  {
    id: "kr-tech-simplifier",
    name: "Doc Transformer",
    description: "AI-powered document simplifier — transform dense technical or legal docs into clear, accessible plain-English content.",
    emoji: "📄",
    type: "Lovable App",
    link: "https://kr-tech-simplifier.lovable.app",
    external: true,
    category: "Data & Knowledge",
    screenshot: shot("https://kr-tech-simplifier.lovable.app")
  },

  // TOOLS & PERSONAL
  {
    id: "kr-expense-tracker",
    name: "Expense Tracker",
    description: "Personal finance tracker — log expenses, set monthly budgets, and visualise spending across categories.",
    emoji: "💰",
    type: "Finance App",
    link: "https://kr-expense-tracker.lovable.app",
    external: true,
    category: "Personal & Tools",
    screenshot: shot("https://kr-expense-tracker.lovable.app")
  },
  {
    id: "kr-tetris-stack",
    name: "Tetris Stack",
    description: "Classic Tetris reimagined for the browser — increasing difficulty, smooth controls, responsive on desktop and mobile.",
    emoji: "🟦",
    type: "Game",
    link: "https://kr-tetris-stack.lovable.app",
    external: true,
    category: "Personal & Tools",
    screenshot: shot("https://kr-tetris-stack.lovable.app")
  },
  {
    id: "kr-omni-tool-hub",
    name: "Nexus Unified Hub",
    description: "All-in-one productivity hub — unified access to converters, calculators, and everyday utilities in a single workspace.",
    emoji: "🔗",
    type: "Lovable App",
    link: "https://kr-omni-tool-hub.lovable.app",
    external: true,
    category: "Personal & Tools",
    screenshot: shot("https://kr-omni-tool-hub.lovable.app")
  },
  {
    id: "kr-app-ideas-vault",
    name: "Idea Vault Pro",
    description: "Capture, organise, and prioritise product and project ideas with scoring, tags, and structured backlogs.",
    emoji: "💡",
    type: "Lovable App",
    link: "https://kr-app-ideas-vault.lovable.app",
    external: true,
    category: "Personal & Tools",
    screenshot: shot("https://kr-app-ideas-vault.lovable.app")
  },
  {
    id: "social-dashboard-hub",
    name: "Social Dashboard Hub",
    description: "Unified social content dashboard — plan and showcase posts, quizzes, blogs, and thought-leadership pieces in one view.",
    emoji: "📱",
    type: "Lovable App",
    link: "https://social-dashboard-hub.lovable.app",
    external: true,
    category: "Personal & Tools",
    screenshot: shot("https://social-dashboard-hub.lovable.app")
  },
  {
    id: "mindful-flow",
    name: "Mindful Flow",
    description: "All-in-one personal dashboard — daily goals, to-do lists, finances, and habit tracking in a calm, focused UI.",
    emoji: "🧘",
    type: "Productivity",
    link: "https://mindful-flow-82.lovable.app",
    external: true,
    category: "Personal & Tools",
    screenshot: shot("https://mindful-flow-82.lovable.app")
  },

  // ─── NEWLY ADDED LOVABLE APPS ───
  {
    id: "kr-claudiator-skills",
    name: "Claudiator — Claude Skills Hub",
    description: "Browsable directory of 129+ Claude SKILL.md prompts with copy-ready frontmatter, tool pills, and category filters.",
    emoji: "⚔️",
    type: "Lovable App",
    link: "https://kr-claudiator-skills.lovable.app",
    external: true,
    category: "AI & Agents",
    featured: true,
    screenshot: shot("https://kr-claudiator-skills.lovable.app")
  },
  {
    id: "kr-token-ops-hub",
    name: "TokenOps",
    description: "FinOps for LLMs — optimise AI token usage, model cost, and prompt efficiency across enterprise AI workloads.",
    emoji: "🪙",
    type: "Lovable App",
    link: "https://kr-token-ops-hub.lovable.app",
    external: true,
    category: "AI & Agents",
    screenshot: shot("https://kr-token-ops-hub.lovable.app")
  },
  {
    id: "kr-social-authority-hub",
    name: "Authority Engine",
    description: "AI-powered social publishing platform — plan, draft, and amplify thought-leadership content across channels.",
    emoji: "📣",
    type: "Lovable App",
    link: "https://kr-social-authority-hub.lovable.app",
    external: true,
    category: "AI & Agents",
    screenshot: shot("https://kr-social-authority-hub.lovable.app")
  },
  {
    id: "krpromptsapp",
    name: "Claude 100 Prompts",
    description: "Curated library of 100+ Claude prompts spanning research, productivity, writing, coding, and AI workflows.",
    emoji: "📝",
    type: "Lovable App",
    link: "https://krpromptsapp.lovable.app",
    external: true,
    category: "AI & Agents",
    screenshot: shot("https://krpromptsapp.lovable.app")
  },
  {
    id: "kr-terminal-muse-maker",
    name: "Prompt Muse",
    description: "Terminal-style prompt composer for crafting, versioning, and exporting reusable AI prompt templates.",
    emoji: "💻",
    type: "Lovable App",
    link: "https://kr-terminal-muse-maker.lovable.app",
    external: true,
    category: "AI & Agents",
    screenshot: shot("https://kr-terminal-muse-maker.lovable.app")
  },
  {
    id: "kr-industry-capability-vibe-prompts",
    name: "IndustryBCM Prompt Library",
    description: "Mobile-first vibe-coding prompt library — enterprise business capabilities across industries and domains.",
    emoji: "🏭",
    type: "Lovable App",
    link: "https://kr-industry-capability-vibe-prompts.lovable.app",
    external: true,
    category: "AI & Agents",
    screenshot: shot("https://kr-industry-capability-vibe-prompts.lovable.app")
  },
  {
    id: "cit96-ai-digest",
    name: "CITAACC AI Hub",
    description: "CIT Alumni Association Chennai — curated AI articles, digests, and community knowledge hub.",
    emoji: "🎓",
    type: "Lovable App",
    link: "https://cit96-ai-digest.lovable.app",
    external: true,
    category: "AI & Agents",
    screenshot: shot("https://cit96-ai-digest.lovable.app")
  },
  {
    id: "aiotiai",
    name: "AIOTI AI",
    description: "AIOTI AI digest — curated insights at the intersection of IoT, AI, and connected industry.",
    emoji: "🌐",
    type: "Lovable App",
    link: "https://aiotiai.lovable.app",
    external: true,
    category: "AI & Agents",
    screenshot: shot("https://aiotiai.lovable.app")
  },

  {
    id: "kr-enterprise-architecture-hub",
    name: "Enterprise Architecture Compass",
    description: "Reference hub for enterprise architecture — frameworks, patterns, governance, and operating models.",
    emoji: "🧭",
    type: "Lovable App",
    link: "https://kr-enterprise-architecture-hub.lovable.app",
    external: true,
    category: "Enterprise & GCC",
    featured: true,
    screenshot: shot("https://kr-enterprise-architecture-hub.lovable.app")
  },
  {
    id: "kr-pharma-guidebook-hub",
    name: "Pharma Navigator",
    description: "Industry guidebook for Pharma GCC leaders — regulatory landscape, capability maps, and operating playbooks.",
    emoji: "💊",
    type: "Lovable App",
    link: "https://kr-pharma-guidebook-hub.lovable.app",
    external: true,
    category: "Enterprise & GCC",
    screenshot: shot("https://kr-pharma-guidebook-hub.lovable.app")
  },
  {
    id: "kr-healthcare-guidebook-hub",
    name: "Healthcare Industry Playbook",
    description: "Go-to playbook for Healthcare GCC professionals — frameworks, maturity, and industry-specific guidance.",
    emoji: "🏥",
    type: "Lovable App",
    link: "https://kr-healthcare-guidebook-hub.lovable.app",
    external: true,
    category: "Enterprise & GCC",
    screenshot: shot("https://kr-healthcare-guidebook-hub.lovable.app")
  },
  {
    id: "kr-app-builder-grid-playbook",
    name: "App Builder Grid Playbook",
    description: "Structured playbook for building a portfolio of AI-assisted apps — phases, patterns, and reusable recipes.",
    emoji: "🧱",
    type: "Lovable App",
    link: "https://kr-app-builder-grid-playbook.lovable.app",
    external: true,
    category: "Enterprise & GCC",
    screenshot: shot("https://kr-app-builder-grid-playbook.lovable.app")
  },
  {
    id: "kr-jd-smart-profile",
    name: "ProfileCraft AI",
    description: "JD-tailored executive profile generator — ATS-optimised 1- and 2-pagers built from your career data.",
    emoji: "📑",
    type: "Lovable App",
    link: "https://kr-jd-smart-profile.lovable.app",
    external: true,
    category: "Enterprise & GCC",
    screenshot: shot("https://kr-jd-smart-profile.lovable.app")
  },
  {
    id: "kr-profile-search",
    name: "Profile Studio",
    description: "Search and explore curated executive profiles, capabilities, and credentials in a unified workspace.",
    emoji: "🔎",
    type: "Lovable App",
    link: "https://kr-profile-search.lovable.app",
    external: true,
    category: "Enterprise & GCC",
    screenshot: shot("https://kr-profile-search.lovable.app")
  },

  {
    id: "kr-phd-research-assistant",
    name: "PhD Research Companion",
    description: "AI-augmented research workspace — literature review, citations, and thesis structuring for doctoral work.",
    emoji: "🎓",
    type: "Lovable App",
    link: "https://kr-phd-research-assistant.lovable.app",
    external: true,
    category: "Data & Knowledge",
    featured: true,
    screenshot: shot("https://kr-phd-research-assistant.lovable.app")
  },
  {
    id: "kr-kaggle-skill-hub",
    name: "Kaggle Bootcamp",
    description: "From zero to Kaggle competitions in 90 days — structured curriculum from a Kaggle Grandmaster.",
    emoji: "📊",
    type: "Lovable App",
    link: "https://kr-kaggle-skill-hub.lovable.app",
    external: true,
    category: "Data & Knowledge",
    screenshot: shot("https://kr-kaggle-skill-hub.lovable.app")
  },
  {
    id: "kr-biztech-quizzer",
    name: "BizTech Quiz Arena",
    description: "Enterprise-grade multi-format quiz platform spanning business, technology, leadership, and AI domains.",
    emoji: "🎯",
    type: "Lovable App",
    link: "https://kr-biztech-quizzer.lovable.app",
    external: true,
    category: "Data & Knowledge",
    screenshot: shot("https://kr-biztech-quizzer.lovable.app")
  },
  {
    id: "kr-interview-prep-vault",
    name: "Interview Ready Pro",
    description: "Curated interview-prep vault — patterns, scenarios, and answer frameworks for senior technology roles.",
    emoji: "💼",
    type: "Lovable App",
    link: "https://kr-interview-prep-vault.lovable.app",
    external: true,
    category: "Data & Knowledge",
    screenshot: shot("https://kr-interview-prep-vault.lovable.app")
  },
  {
    id: "kr-learning-path-hub",
    name: "Resource Navigator",
    description: "Structured learning paths — discover curated resources across AI, QE, GCC, and enterprise tech tracks.",
    emoji: "🧭",
    type: "Lovable App",
    link: "https://kr-learning-path-hub.lovable.app",
    external: true,
    category: "Data & Knowledge",
    screenshot: shot("https://kr-learning-path-hub.lovable.app")
  },
  {
    id: "kr-tech-curator-guide",
    name: "Tech Curator",
    description: "Hand-curated guide to trending technology — tools, frameworks, and emerging tech worth your attention.",
    emoji: "📰",
    type: "Lovable App",
    link: "https://kr-tech-curator-guide.lovable.app",
    external: true,
    category: "Data & Knowledge",
    screenshot: shot("https://kr-tech-curator-guide.lovable.app")
  },
  {
    id: "kr-pocket-news",
    name: "Pocket News",
    description: "Personal tech-news pocket — fast, distraction-free reading of curated industry headlines.",
    emoji: "📱",
    type: "Lovable App",
    link: "https://kr-pocket-news.lovable.app",
    external: true,
    category: "Data & Knowledge",
    screenshot: shot("https://kr-pocket-news.lovable.app")
  },

  {
    id: "kr-arcade-games",
    name: "Arcade Vault",
    description: "Classic arcade gaming PWA — Tetris, Arkanoid, and Arrows reimagined with smooth modern controls.",
    emoji: "🕹️",
    type: "Game",
    link: "https://kr-arcade-games.lovable.app",
    external: true,
    category: "Personal & Tools",
    screenshot: shot("https://kr-arcade-games.lovable.app")
  },
  {
    id: "kr-jeopardy-quiz",
    name: "Jeopardy Quiz",
    description: "Responsive Jeopardy-style quiz app with scoring, smooth interface, and local-only state.",
    emoji: "❓",
    type: "Game",
    link: "https://kr-jeopardy-quiz.lovable.app",
    external: true,
    category: "Personal & Tools",
    screenshot: shot("https://kr-jeopardy-quiz.lovable.app")
  },
  {
    id: "kr-islamic-duas",
    name: "Divine Duas & Hadith",
    description: "Searchable collection of duas and hadith — clean reading experience with bookmarks and categories.",
    emoji: "🕌",
    type: "Lovable App",
    link: "https://kr-islamic-duas.lovable.app",
    external: true,
    category: "Personal & Tools",
    screenshot: shot("https://kr-islamic-duas.lovable.app")
  },
  {
    id: "tn2026predictions",
    name: "TN 2026 Election Predictor",
    description: "Tamil Nadu 2026 election dashboard — constituency-level predictions, sentiment, and simulation panels.",
    emoji: "🗳️",
    type: "Lovable App",
    link: "https://tn2026predictions.lovable.app",
    external: true,
    category: "Personal & Tools",
    screenshot: shot("https://tn2026predictions.lovable.app")
  }
];

export const categories = [
  { id: 'AI & Agents', emoji: '🤖' },
  { id: 'Enterprise & GCC', emoji: '🏢' },
  { id: 'Quality Engineering', emoji: '🛡️' },
  { id: 'Data & Knowledge', emoji: '📚' },
  { id: 'Personal & Tools', emoji: '🛠️' }
];
