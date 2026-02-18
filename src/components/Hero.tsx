import { motion } from "framer-motion";
import { ExternalLink, Download } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const badges = [
  "Top-10 Thought Leader",
  "Legacy Grandmaster",
  "GCC Leader",
  "Quality Engineering",
  "AI & Data",
];

const stats = [
  { label: "Experience", value: "29+", sub: "Years" },
  { label: "Industry Impact", value: "Top-10", sub: "Global Leader" },
  { label: "Data & AI", value: "Grandmaster", sub: "Kaggle Legacy" },
  { label: "Publications", value: "Author", sub: "Books & Papers" },
];

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      <div className="relative z-10 container max-w-6xl mx-auto px-6 py-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center"
        >
          {/* Monogram */}
          <div className="inline-flex items-center justify-center w-20 h-20 border border-primary/40 rounded-sm mb-8">
            <span className="font-serif text-2xl text-primary">KR</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-serif mb-4">
            Kalilur <span className="text-gradient-gold italic">Rahman</span>
          </h1>

          <p className="text-muted-foreground tracking-[0.25em] uppercase text-sm md:text-base mb-8">
            Global IT Executive · Author · Kaggle Grandmaster
          </p>

          {/* Badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {badges.map((badge) => (
              <span
                key={badge}
                className="px-4 py-1.5 border border-border text-xs tracking-[0.15em] uppercase text-muted-foreground hover:border-primary/50 hover:text-primary transition-colors"
              >
                {badge}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <a
              href="https://www.linkedin.com/in/kalilurrahman/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium text-sm tracking-wide hover:opacity-90 transition-opacity"
            >
              Connect on LinkedIn
              <ExternalLink className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/kalilurrahman/overlay/1735344498686/single-media-viewer/?profileId=ACoAAA2T1rcBaEMOH-v4KDMJZZLSHiIpRjE5Jkk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-primary/40 text-primary font-medium text-sm tracking-wide hover:bg-primary/10 transition-colors"
            >
              <Download className="w-4 h-4" />
              Download CV / Resume
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                const el = document.querySelector("#contact");
                if (el) {
                  const top = el.getBoundingClientRect().top + window.scrollY - 60;
                  window.scrollTo({ top, behavior: "smooth" });
                }
              }}
              className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground font-medium text-sm tracking-wide hover:border-primary/50 transition-colors"
            >
              Get in Touch
            </a>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="p-4 border border-border/50 bg-card/50 backdrop-blur-sm">
                <p className="text-xs text-muted-foreground tracking-[0.15em] uppercase mb-1">{stat.label}</p>
                <p className="text-xl font-serif text-primary">{stat.value}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{stat.sub}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
