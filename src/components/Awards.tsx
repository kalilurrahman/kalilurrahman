import { motion } from "framer-motion";
import Section from "./Section";

const awards = [
  { title: "#3 Global Top Thought Leader", org: "Thinkers360", desc: "Recognised for contributions in technology, digital transformation, and Quality Engineering." },
  { title: "Innovative CIO Awards 2023", org: "CIOAXIS & CISOCONNECT", desc: "Honoured for innovative practices and leadership in digital transformation." },
  { title: "IT NEXT100 Future CIO Award", org: "CIO&Leader / ITNext", desc: "Recognised through a rigorous, multi‑stage evaluation process." },
  { title: "Pharma Leadership Award", org: "eLets Health Media", desc: "Awarded for contributions to digital initiatives in pharma." },
  { title: "Corporate Quiz & Knowledge", org: "TATA Crucible & AMUL", desc: "Regional finalist and runner‑up — continuous learner mindset." },
  { title: "Organisational Excellence", org: "Accenture & Vodafone", desc: "Outstanding delivery, knowledge sharing, and 'One Step Ahead'." },
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
