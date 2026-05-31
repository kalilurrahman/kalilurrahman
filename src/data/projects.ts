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
    featured: true
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
    featured: true
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
    featured: true
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
    category: "AI & Agents"
  },
  {
    id: "kr-ai-agent-flow",
    name: "Agent Flow Studio",
    description: "Visual AI agent workflow builder — design, chain, and orchestrate multi-step AI agent flows.",
    emoji: "🤖",
    type: "Lovable App",
    link: "https://kr-ai-agent-flow.lovable.app",
    external: true,
    category: "AI & Agents"
  },
  {
    id: "kr-prompt-terminal-builder",
    name: "Prompt Terminal Builder",
    description: "Interactive prompt engineering workbench — terminal-style interface with template library.",
    emoji: "🖥️",
    type: "Lovable App",
    link: "https://kr-prompt-terminal-builder.lovable.app",
    external: true,
    category: "AI & Agents"
  },
  {
    id: "kr-ai-literacy-hub",
    name: "AI Literacy Hub",
    description: "Structured AI education platform — courses, modules, and guided learning paths covering AI fundamentals to applied use cases.",
    emoji: "🧠",
    type: "Lovable App",
    link: "https://kr-ai-literacy-hub.lovable.app",
    external: true,
    category: "AI & Agents"
  },
  {
    id: "kr-ai-agent-weaver",
    name: "Agent Weaver",
    description: "Compose multi-agent systems with configurable roles, handoffs, and orchestration patterns for complex workflows.",
    emoji: "🕸️",
    type: "Lovable App",
    link: "https://kr-ai-agent-weaver.lovable.app",
    external: true,
    category: "AI & Agents"
  },
  {
    id: "kr-ai-workflow-gen",
    name: "Agent Canvas",
    description: "Interactive canvas for designing AI agent workflows — connect nodes and visualise pipelines.",
    emoji: "🎨",
    type: "Lovable App",
    link: "https://kr-ai-workflow-gen.lovable.app",
    external: true,
    category: "AI & Agents"
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
    category: "Enterprise & GCC"
  },
  {
    id: "kr-gcc-playbook",
    name: "GCC Playbook",
    description: "Comprehensive guide to building and scaling Global Capability Centers — phases, maturity, geography.",
    emoji: "🏢",
    type: "Lovable App",
    link: "https://kr-gcc-playbook.lovable.app",
    external: true,
    category: "Enterprise & GCC"
  },
  {
    id: "kr-exec-scribe",
    name: "ExecComms Forge",
    description: "AI-powered executive communication builder — board memos, presentations, OKR write-ups.",
    emoji: "📝",
    type: "Lovable App",
    link: "https://kr-exec-scribe.lovable.app",
    external: true,
    category: "Enterprise & GCC"
  },
  {
    id: "kr-corp-upskill",
    name: "Corporate Upskilling Planner",
    description: "L&D roadmap builder — structured 6/12-month learning roadmaps with skills matrices.",
    emoji: "🎯",
    type: "Lovable App",
    link: "https://kr-corp-upskill.lovable.app",
    external: true,
    category: "Enterprise & GCC"
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
    category: "Quality Engineering"
  },
  {
    id: "kr-veritas-qe-framework",
    name: "VERITAS — QE Framework",
    description: "Comprehensive Quality Engineering framework — Verification, Evaluation, Risk, Integrity, Testing.",
    emoji: "✅",
    type: "Lovable App",
    link: "https://kr-veritas-qe-framework.lovable.app",
    external: true,
    category: "Quality Engineering"
  },
  {
    id: "kr-test-automator",
    name: "TestForge AI",
    description: "AI-powered test automation generator — test scripts, plans, and quality artefacts.",
    emoji: "🧪",
    type: "Lovable App",
    link: "https://kr-test-automator.lovable.app",
    external: true,
    category: "Quality Engineering"
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
    category: "Data & Knowledge"
  },
  {
    id: "kr-cyber-lexicon-hub",
    name: "Acronym Buster — Cyber Lexicon Hub",
    description: "1,837 tech acronyms across Cyber Security, Infrastructure, Cloud & Operations.",
    emoji: "🔐",
    type: "Lovable App",
    link: "https://kr-cyber-lexicon-hub.lovable.app",
    external: true,
    category: "Data & Knowledge"
  },
  {
    id: "kr-quiz-blitz-hub",
    name: "Quiz Master — Quiz Blitz Hub",
    description: "Trending topic quiz platform — 9 categories including Technology, AI, Business, Finance.",
    emoji: "🧩",
    type: "Lovable App",
    link: "https://kr-quiz-blitz-hub.lovable.app",
    external: true,
    category: "Data & Knowledge"
  },
  {
    id: "kr-tech-simplifier",
    name: "Doc Transformer",
    description: "AI-powered document simplifier — transform dense technical or legal docs into clear, accessible plain-English content.",
    emoji: "📄",
    type: "Lovable App",
    link: "https://kr-tech-simplifier.lovable.app",
    external: true,
    category: "Data & Knowledge"
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
    category: "Personal & Tools"
  },
  {
    id: "kr-tetris-stack",
    name: "Tetris Stack",
    description: "Classic Tetris reimagined for the browser — increasing difficulty, smooth controls, responsive on desktop and mobile.",
    emoji: "🟦",
    type: "Game",
    link: "https://kr-tetris-stack.lovable.app",
    external: true,
    category: "Personal & Tools"
  },
  {
    id: "kr-omni-tool-hub",
    name: "Nexus Unified Hub",
    description: "All-in-one productivity hub — unified access to converters, calculators, and everyday utilities in a single workspace.",
    emoji: "🔗",
    type: "Lovable App",
    link: "https://kr-omni-tool-hub.lovable.app",
    external: true,
    category: "Personal & Tools"
  },
  {
    id: "kr-app-ideas-vault",
    name: "Idea Vault Pro",
    description: "Capture, organise, and prioritise product and project ideas with scoring, tags, and structured backlogs.",
    emoji: "💡",
    type: "Lovable App",
    link: "https://kr-app-ideas-vault.lovable.app",
    external: true,
    category: "Personal & Tools"
  },
  {
    id: "social-dashboard-hub",
    name: "Social Dashboard Hub",
    description: "Unified social content dashboard — plan and showcase posts, quizzes, blogs, and thought-leadership pieces in one view.",
    emoji: "📱",
    type: "Lovable App",
    link: "https://social-dashboard-hub.lovable.app",
    external: true,
    category: "Personal & Tools"
  },
  {
    id: "mindful-flow",
    name: "Mindful Flow",
    description: "All-in-one personal dashboard — daily goals, to-do lists, finances, and habit tracking in a calm, focused UI.",
    emoji: "🧘",
    type: "Productivity",
    link: "https://mindful-flow-82.lovable.app",
    external: true,
    category: "Personal & Tools"
  }
];

export const categories = [
  { id: 'AI & Agents', emoji: '🤖' },
  { id: 'Enterprise & GCC', emoji: '🏢' },
  { id: 'Quality Engineering', emoji: '🛡️' },
  { id: 'Data & Knowledge', emoji: '📚' },
  { id: 'Personal & Tools', emoji: '🛠️' }
];
