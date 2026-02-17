import { motion } from "framer-motion";
import Section from "./Section";

const highlights = [
  "Led enterprise transformation mandates in Pharma and Tech, with clear focus on business value and risk management.",
  "Built and scaled Quality Engineering Centers of Excellence to standardise methods, tools, and KPIs across portfolios.",
  "Partnered with C‑suite and functional leaders to align digital & data strategy with P&L and growth imperatives.",
  "Managed globally distributed teams, shaping culture, talent strategy, and succession planning.",
  "Introduced reusable frameworks and artefacts to accelerate time‑to‑value for testing and automation initiatives.",
];

const Leadership = () => {
  return (
    <Section id="leadership" title="Leadership & GCC" subtitle="Building capability at scale across global organisations.">
      <div className="grid md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="font-serif text-xl text-foreground mb-6">Enterprise & GCC Leadership</h3>
          <ul className="space-y-4">
            {highlights.map((h, i) => (
              <li key={i} className="flex gap-3 text-sm text-secondary-foreground/75 leading-relaxed">
                <span className="text-primary mt-1 shrink-0 text-xs">●</span>
                {h}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="font-serif text-xl text-foreground mb-6">How Stakeholders Describe My Leadership</h3>
          <div className="space-y-4 text-sm text-secondary-foreground/75 leading-relaxed">
            <p>Colleagues frequently highlight my ability to:</p>
            <ul className="space-y-3 ml-1">
              <li className="flex gap-3">
                <span className="text-primary mt-0.5 shrink-0">→</span>
                Set a clear vision and translate it into actionable plans.
              </li>
              <li className="flex gap-3">
                <span className="text-primary mt-0.5 shrink-0">→</span>
                Balance strategic thinking with hands‑on execution.
              </li>
              <li className="flex gap-3">
                <span className="text-primary mt-0.5 shrink-0">→</span>
                Remove roadblocks proactively and foster a culture of trust, accountability, and learning.
              </li>
              <li className="flex gap-3">
                <span className="text-primary mt-0.5 shrink-0">→</span>
                Mentor and grow talent, especially in emerging areas like data, AI, and advanced test automation.
              </li>
            </ul>
            <p className="mt-6">
              Read detailed recommendations on my{" "}
              <a href="https://www.linkedin.com/in/kalilurrahman/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                LinkedIn profile ↗
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default Leadership;
