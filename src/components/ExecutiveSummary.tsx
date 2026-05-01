import { motion } from "framer-motion";
import Section from "./Section";

const strengths = [
  "Strategic scaling of Global Capability Centers (GCCs) from inception to scale.",
  "Architecting AI-driven Quality Engineering frameworks (ACUITAS, VERITAS).",
  "Leading cross-functional digital transformation for GxP/regulated environments.",
  "Multi-channel knowledge evangelism (3 books, 16 publications, global keynotes).",
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
            For nearly three decades, I've been at the intersection of technology and business strategy, driven by a single mission:{" "}
            <span className="text-foreground font-semibold italic">transforming enterprise complexity into measurable value.</span>
            My experience spans global consulting, GCC advisory, and executive leadership, with a deep focus on 
            <span className="text-foreground font-semibold"> Quality Engineering</span>, 
            <span className="text-foreground font-semibold"> Digital Transformation</span>, and 
            <span className="text-foreground font-semibold"> AI/Data Strategy</span>.
          </p>
          <p>
            Most recently as a <span className="text-foreground font-semibold">Director at Novartis</span>, I spearheaded the 
            Data, Digital & IT strategy for the Global Capability Center, scaling operations from 
            inception to a high-performing ecosystem of 400+ professionals. I bridge the worlds of strategy 
            and execution — partnering with C-level stakeholders to shape roadmaps and guiding 
            globally distributed teams to deliver.
          </p>
          <p>
            Recognized as a <span className="text-foreground font-semibold">#3 Global Top Thought Leader</span> (Thinkers360) 
            and a <span className="text-foreground font-semibold">Kaggle Legacy Grandmaster</span>, I evangelize 
            best practices through published works, international speaking, and the development of 
            open-source frameworks like ACUITAS.
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
