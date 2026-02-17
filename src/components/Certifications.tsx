import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Section from "./Section";

const certifications = [
  { name: "Competent Communicator (CC)", org: "Toastmasters International", icon: "🎤" },
  { name: "Competent Leader (CL)", org: "Toastmasters International", icon: "🎤" },
  { name: "Certified Delivery Lead", org: "Accenture", icon: "🏢" },
  { name: "Certified Program, Project & Service Management Lead", org: "Accenture", icon: "🏢" },
  { name: "Communications Industry Generalist", org: "Accenture", icon: "🏢" },
  { name: "WebMethods B2B Developer", org: "Software AG", icon: "⚙️" },
  { name: "Python", org: "Codecademy", icon: "🐍" },
  { name: "jQuery Programming", org: "Codecademy", icon: "💻" },
  { name: "Make a Website", org: "Codecademy", icon: "🌐" },
  { name: "AngularJS", org: "Code School", icon: "📐" },
];

const Certifications = () => {
  return (
    <Section id="certifications" title="Certifications" subtitle="Verified credentials and professional badges.">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {certifications.map((cert, i) => (
          <motion.div
            key={cert.name}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="flex items-start gap-3 p-4 border border-border bg-card hover:border-primary/30 transition-colors"
          >
            <span className="text-lg shrink-0 mt-0.5">{cert.icon}</span>
            <div>
              <p className="text-sm text-foreground font-medium">{cert.name}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{cert.org}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-4"
      >
        <a
          href="https://www.credly.com/users/kalilur-rahman/badges"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 border border-primary/30 bg-primary/5 text-primary text-sm font-medium hover:bg-primary/10 transition-colors"
        >
          🏅 View All Credly Badges <ExternalLink className="w-3.5 h-3.5" />
        </a>
        <a
          href="https://www.linkedin.com/in/kalilurrahman/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1"
        >
          Full list on LinkedIn <ExternalLink className="w-3 h-3" />
        </a>
      </motion.div>
    </Section>
  );
};

export default Certifications;
