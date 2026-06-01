import { motion } from "framer-motion";
import Section from "./Section";
import { ExternalLink } from "lucide-react";

const repos = [
  { name: "GitHub Profile", url: "https://github.com/kalilurrahman", desc: "73+ repositories covering QE artifacts & LLMs" },
  { name: "Kaggle Profile", url: "https://www.kaggle.com/kalilurrahman", desc: "Legacy Grandmaster · 1,265+ discussions" },
  { name: "ACUITAS AI QE Framework", url: "https://kr-acuiitas-clarity-frameworks.lovable.app/", desc: "ISO 42001 & NIST AI RMF Aligned" },
];

const DataAI = () => {
  return (
    <Section id="data-ai" title="Data, AI & Kaggle" subtitle="From global competitions to enterprise-grade AI frameworks.">
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
              I hold the distinction of being a Kaggle Legacy Grandmaster, encompassing roles as a 
              <span className="text-foreground font-semibold"> Competitions Expert</span>, 
              <span className="text-foreground font-semibold"> Datasets Expert</span>, and 
              <span className="text-foreground font-semibold"> Notebooks Master</span>. 
              With over 1,265 discussion contributions, I am active in the global data science community.
            </p>
          </div>

          <p>
            Beyond competitions, I've developed the <span className="text-foreground font-semibold">ACUITAS AI Quality Engineering Framework</span>, 
            bridging the gap between traditional testing and the requirements of the EU AI Act and NIST AI RMF. 
            My technical portfolio spans 46+ GitHub repositories focused on scaling automation and data-driven delivery.
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
