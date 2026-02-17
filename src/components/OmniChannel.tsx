import { motion } from "framer-motion";
import Section from "./Section";
import { ExternalLink } from "lucide-react";

const channels = [
  { name: "LinkedIn", desc: "Primary professional profile", url: "https://www.linkedin.com/in/kalilurrahman/", icon: "🔗" },
  { name: "Framer Portfolio", desc: "Visual storytelling & highlights", url: "https://kalilurrahman.framer.website/", icon: "🎨" },
  { name: "Kaggle", desc: "Legacy Grandmaster profile", url: "https://www.kaggle.com/kalilurrahman", icon: "🏆" },
  { name: "GitHub", desc: "Code & open‑source work", url: "https://github.com/kalilurrahman", icon: "🐙" },
  { name: "Amazon Author", desc: "Books & publications", url: "https://www.amazon.com/stores/Kalilur-Rahman/author/B0863JL6R7", icon: "📚" },
  { name: "Google Scholar", desc: "Academic citations", url: "https://scholar.google.com/citations?user=hCYBFKYAAAAJ&hl=en", icon: "🎓" },
  { name: "Credly", desc: "Verified certifications", url: "https://www.credly.com/users/kalilur-rahman/badges", icon: "🏅" },
  { name: "Publications List", desc: "Research & white‑papers", url: "https://publicationslist.org/kalilur.rahman", icon: "📄" },
  { name: "Linktree", desc: "All links in one place", url: "https://linktr.ee/kalilur.rahman", icon: "🌿" },
  { name: "X (Twitter)", desc: "Short‑form engagement", url: "https://x.com/krahman", icon: "💬" },
];

const OmniChannel = () => {
  return (
    <Section id="omni" title="Omni-Channel Presence" subtitle="Find me across platforms.">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
        {channels.map((ch, i) => (
          <motion.a
            key={ch.name}
            href={ch.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="group p-4 border border-border bg-card hover:border-primary/40 transition-colors text-center"
          >
            <span className="text-xl block mb-2">{ch.icon}</span>
            <p className="text-sm text-foreground group-hover:text-primary transition-colors font-medium">{ch.name}</p>
            <p className="text-xs text-muted-foreground mt-1">{ch.desc}</p>
          </motion.a>
        ))}
      </div>
    </Section>
  );
};

export default OmniChannel;
