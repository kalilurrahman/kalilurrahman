import { motion } from "framer-motion";
import { ExternalLink, Layers } from "lucide-react";

const apps = [
  "kr-agentic-ai-prompts", "kr-ai-agent-flow", "kr-ai-workflow-gen",
  "kr-finance-prompt-hub", "kr-ai-literacy-hub", "kr-prompt-terminal-builder",
  "krpromptsapp", "kr-ai-ml-tech-repo",
  "kr-terminal-muse-maker", "ai-news-curator",
  "kr-veritas-qe-framework", "kr-qe-compass", "kr-test-automator",
  "gcc-playbook-hub", "kr-gcc-compass", "kr-exec-scribe", "kr-corp-upskill",
  "kr-kaggle-skill-hub", 
  "kr-app-ideas-vault", "kr-omni-tool-hub", "kr-expense-tracker",
  "kr-news-app", "kr-tech-simplifier", "kr-app-nexus", "kr-quantum-hub",
  "kr-interview-prep-vault", "kr-jd-smart-profile", "kr-profile-search",
  "kr-cyber-lexicon-hub", "kr-biztech-quizzer", "kr-quiz-blitz-hub",
  "kr-training-portfolio", "kr-islamic-duas", "farzi-10th",
  "kr-tech-curator-guide", "kr-social-authority-hub",
  "tech-curator", "tech-curator-hub",
  "kr-tetris-stack", "kr-arcade-games",
  "kalilur-portfolio",               // 75
  "kr-acuitas-clarity-frameworks",   // 77
  "kremergentportfolio",             // 78
  "kr-gcc-playbook-hub",             // 79
  "kr-industry-capability-vibe-prompts" // 80
];

const formatName = (slug: string) => {
  return slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
};

const AppsPortfolio = () => {
  return (
    <div className="container max-w-6xl mx-auto px-6 py-24 min-h-screen">
      <div className="mb-12 text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-serif mb-4 text-foreground">
          Apps <span className="text-primary italic">Portfolio</span>
        </h1>
        <p className="text-muted-foreground text-sm leading-relaxed mb-6">
          A comprehensive collection of AI prototypes, tools, thought leadership frameworks, and capability hubs created by Kalilur Rahman.
        </p>
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full border border-border">
          <Layers className="w-4 h-4 text-primary" />
          <span className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">{apps.length} Applications Live</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {apps.map((app, index) => (
          <motion.article 
            key={app}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.5) }}
            className="group relative flex flex-col p-6 border border-border bg-card rounded-[8px] hover:border-primary/40 hover:shadow-lg transition-all"
          >
            <div className="mb-4 inline-flex w-10 h-10 items-center justify-center rounded-sm bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              <span className="font-serif text-lg font-medium">{formatName(app).charAt(0)}</span>
            </div>
            
            <h3 className="text-base font-semibold text-foreground mb-2 line-clamp-2">
              {formatName(app)}
            </h3>
            
            <p className="text-xs text-muted-foreground font-mono mb-6 truncate opacity-70">
              {app}.lovable.app
            </p>

            <a
              href={`https://${app}.lovable.app`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-teal group-hover:text-primary transition-colors hover:gap-3"
            >
              Open Application 
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </motion.article>
        ))}
      </div>
    </div>
  );
};

export default AppsPortfolio;
