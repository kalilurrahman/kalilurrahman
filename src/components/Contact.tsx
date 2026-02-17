import { motion } from "framer-motion";
import Section from "./Section";
import { ExternalLink, Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <Section id="contact" title="Contact" subtitle="Let's explore collaboration opportunities.">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl"
      >
        <p className="text-secondary-foreground/75 leading-relaxed mb-8">
          Open to advisory conversations, board‑level discussions, speaking engagements,
          and thought‑leadership collaborations. Please include a brief context (organisation,
          topic, and timeline) and I'll respond as soon as possible.
        </p>

        <div className="space-y-4 mb-8">
          <div className="flex items-center gap-3 text-sm">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="text-foreground">India (Hyderabad‑based, global remit)</span>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <Mail className="w-4 h-4 text-primary" />
            <a href="mailto:kalilur.rahman@gmail.com" className="text-foreground hover:text-primary transition-colors">
              kalilur.rahman@gmail.com
            </a>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <a
            href="mailto:kalilur.rahman@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium text-sm tracking-wide hover:opacity-90 transition-opacity"
          >
            <Mail className="w-4 h-4" />
            Email Me
          </a>
          <a
            href="https://www.linkedin.com/in/kalilurrahman/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground font-medium text-sm tracking-wide hover:border-primary/50 transition-colors"
          >
            Connect on LinkedIn
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </motion.div>
    </Section>
  );
};

export default Contact;
