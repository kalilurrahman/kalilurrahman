import { motion } from "framer-motion";
import Section from "./Section";

const awards = [
  { title: "#3 Global Top Thought Leader", org: "Thinkers360", desc: "Recognized for global contributions in Technology, Digital Transformation, and Quality Engineering." },
  { title: "Innovative CIO Award 2023", org: "CIOAXIS & CISOCONNECT", desc: "Honored for leadership in digital transformation and innovative operating models." },
  { title: "IT NEXT100 Future CIO Award", org: "CIO&Leader / ITNext", desc: "Recognized through a rigorous, multi-stage evaluation of technical and leadership expertise." },
  { title: "Pharma Leadership Award", org: "eLets Health Media", desc: "Awarded for pioneering digital initiatives and leadership in the pharmaceutical sector." },
  { title: "Corporate Quiz & Knowledge", org: "TATA Crucible & AMUL", desc: "Regional finalist and runner-up, demonstrating a commitment to continuous learning." },
  { title: "Organizational Excellence", org: "Accenture & Vodafone", desc: "Recipient of multiple awards for outstanding delivery, knowledge sharing, and operational excellence." },
];

const Awards = () => {
  return (
    <Section id="awards" title="Awards & Recognition" subtitle="Independent validation of impact and leadership.">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {awards.map((award, i) => (
          <motion.div
            key={award.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="p-5 border border-border bg-card hover:border-primary/30 transition-colors"
          >
            <span className="text-primary text-lg mb-2 block">🏆</span>
            <h3 className="font-serif text-base text-foreground mb-1">{award.title}</h3>
            <p className="text-xs text-primary/80 mb-2">{award.org}</p>
            <p className="text-sm text-muted-foreground">{award.desc}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Awards;
