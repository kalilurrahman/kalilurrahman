import { motion } from "framer-motion";
import Section from "./Section";
import { ExternalLink } from "lucide-react";

const repos = [
  { name: "GitHub Profile", url: "https://github.com/kalilurrahman", desc: "41+ repositories" },
  { name: "QE Book by LLMs", url: "https://github.com/kalilurrahman/QualityEngineeringBookByLLMs", desc: "LLM-generated book" },
  { name: "QE Artefacts", url: "https://github.com/kalilurrahman/QualityEngineeringArtefacts", desc: "Templates & frameworks" },
];

const DataAI = () => {
  return (
    <Section id="data-ai" title="Data, AI & Kaggle" subtitle="From competitions to real‑world analytics.">
      <div className="grid md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-5 text-sm text-secondary-foreground/75 leading-relaxed"
        >
          <div className="p-6 border border-primary/20 bg-primary/5 glow-gold">
            <h3 className="font-serif text-xl text-primary mb-3">Kaggle Legacy Grandmaster</h3>
            <p>
              I hold the distinction of being a Kaggle Legacy Grandmaster, placing among the top
              data practitioners globally. This journey sharpened my skills in feature engineering,
              model building, working with noisy real‑world datasets, and collaborative problem‑solving.
            </p>
          </div>

          <p>
            Beyond competitions, I've developed analytics and visualisation approaches showcased in my
            published book, used data‑driven techniques to optimise testing at scale, and experimented
            with LLMs and generative AI for Quality Engineering content.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="font-serif text-lg text-foreground mb-4">Open Source & Projects</h3>
          <div className="space-y-3">
            {repos.map((repo) => (
              <a
                key={repo.name}
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 border border-border bg-card hover:border-primary/40 transition-colors group"
              >
                <div>
                  <p className="text-sm text-foreground group-hover:text-primary transition-colors">{repo.name}</p>
                  <p className="text-xs text-muted-foreground">{repo.desc}</p>
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            ))}
          </div>

          <a
            href="https://www.kaggle.com/kalilurrahman"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-sm text-primary hover:underline"
          >
            View Kaggle Profile <ExternalLink className="w-3 h-3" />
          </a>
        </motion.div>
      </div>
    </Section>
  );
};

export default DataAI;
