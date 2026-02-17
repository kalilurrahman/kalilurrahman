import { motion } from "framer-motion";
import Section from "./Section";

const strengths = [
  "Designing and scaling Quality Engineering CoEs in complex, regulated environments.",
  "Leading GCCs and global delivery organisations with clear KPIs and P&L ownership.",
  "Bringing data & AI practices into mainstream delivery and decision‑making.",
  "Evangelising best practices via books, talks, and community engagement.",
];

const ExecutiveSummary = () => {
  return (
    <Section id="summary" title="Executive Summary" subtitle="Strategy meets execution — from whiteboard to production.">
      <div className="grid md:grid-cols-5 gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="md:col-span-3 space-y-5 text-secondary-foreground/80 leading-relaxed"
        >
          <p>
            For over two and a half decades, I've been driven by a single mission:{" "}
            <span className="text-foreground font-medium">transforming technology into tangible business value</span>.
            My work spans consulting, advisory, and GCC leadership, with a focus on enterprise transformation,
            Quality Engineering, and digital & data strategy.
          </p>
          <p>
            I bridge the worlds of strategy and execution — partnering with C‑level stakeholders,
            shaping roadmaps, and then guiding globally distributed teams to deliver.
            My approach is{" "}
            <span className="text-foreground font-medium">data‑driven, pragmatic, and outcome‑oriented</span>.
          </p>
          <p>
            Along the way, I've been recognised as a Top‑10 global thought leader,
            awarded for innovative CIO leadership, and built a multi‑channel footprint as a
            speaker, author, and Kaggle Legacy Grandmaster.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="md:col-span-2"
        >
          <h3 className="font-serif text-lg text-foreground mb-4">Signature Strengths</h3>
          <ul className="space-y-3">
            {strengths.map((s, i) => (
              <li key={i} className="flex gap-3 text-sm text-secondary-foreground/70">
                <span className="text-primary mt-1 shrink-0">◆</span>
                {s}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-2">
            {["Enterprise Transformation", "Quality Engineering", "GCC Leadership", "Data & AI", "Cloud & DevOps"].map((tag) => (
              <span key={tag} className="px-3 py-1 text-xs bg-secondary text-muted-foreground border border-border rounded-sm">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default ExecutiveSummary;
