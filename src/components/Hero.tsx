import { motion } from "framer-motion";
import { BarChart3, BookOpen, Globe2, Download, ExternalLink } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const badges = [
  "Top-10 Thought Leader",
  "Legacy Grandmaster",
  "GCC Leader",
  "Quality Engineering",
  "AI & Data",
];

const credentials = [
  { label: "Kaggle Legacy Grandmaster", icon: BarChart3 },
  { label: "Top Global Thinker – Thinkers360", icon: Globe2 },
  { label: "3 Published Books", icon: BookOpen },
];

const stats = [
  { label: "Experience", value: "29+", sub: "Years" },
  { label: "Industry Impact", value: "Top-10", sub: "Global Leader" },
  { label: "Data & AI", value: "Grandmaster", sub: "Kaggle Legacy" },
  { label: "Publications", value: "Author", sub: "Books & Papers" },
];

const Hero = () => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <div className="w-full h-full bg-gradient-to-br from-primary/5 to-accent/5 animate-pulse absolute inset-0" />
        <img
          src={heroBg}
          alt="Abstract editorial hero background"
          className="w-full h-full object-cover opacity-40 transition-opacity duration-700"
          loading="eager"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      <div className="relative z-10 container max-w-6xl mx-auto px-6 py-20 md:py-16 lg:py-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 border border-primary/40 rounded-sm mb-4">
            <span className="font-serif text-xl text-primary">KR</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-serif mb-5">
            Kalilur <span className="text-gradient-gold italic">Rahman</span>
          </h1>

          <div className="mx-auto mb-6 grid max-w-5xl gap-3 rounded-2xl border border-border/70 bg-card/70 p-3 backdrop-blur-sm md:grid-cols-3">
            {credentials.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="flex items-center justify-center gap-3 rounded-xl border border-border/60 bg-background/50 px-3 py-2.5 text-left">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal text-teal-foreground">
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span className="text-sm font-medium leading-snug text-foreground">{item.label}</span>
                </div>
              );
            })}
          </div>

          <div className="mb-7 flex justify-center">
            <a
              href="mailto:kalilur@gmail.com"
              className="inline-flex items-center gap-2 rounded-full bg-teal px-8 py-3.5 text-base font-semibold tracking-wide text-teal-foreground shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-teal/20 active:translate-y-0 active:shadow-md"
              aria-label="Send email to invite Kalilur Rahman to speak"
            >
              Invite me to speak →
            </a>
          </div>

          <p className="text-muted-foreground tracking-[0.25em] uppercase text-xs md:text-sm mb-4 mt-2">
            Global IT Executive · Author · Kaggle Grandmaster
          </p>

          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {badges.map((badge, index) => (
              <motion.span
                key={badge}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.6 + index * 0.05 }}
                className="px-3 py-1 border border-border text-[10px] md:text-xs tracking-[0.1em] uppercase text-muted-foreground hover:border-primary/50 hover:text-primary hover:scale-105 transition-all duration-200 cursor-default"
              >
                {badge}
              </motion.span>
            ))}
          </div>

          <div className="mb-8 flex flex-wrap justify-center gap-4">
            <a
              href="https://www.linkedin.com/in/kalilurrahman/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground font-medium text-sm tracking-wide transition-all duration-300 hover:bg-primary/90 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 rounded"
              aria-label="Connect with Kalilur Rahman on LinkedIn (opens in new tab)"
            >
              Connect on LinkedIn
              <ExternalLink className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
            </a>
            <a
              href="https://www.linkedin.com/in/kalilurrahman/overlay/1735344498686/single-media-viewer/?profileId=ACoAAA2T1rcBaEMOH-v4KDMJZZLSHiIpRjE5Jkk"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-5 py-2.5 border border-primary/40 text-primary font-medium text-sm tracking-wide transition-all duration-300 hover:bg-primary/10 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 rounded"
              aria-label="Download Kalilur Rahman's CV or resume (opens in new tab)"
            >
              <Download className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-0.5" aria-hidden="true" />
              Download CV / Resume
            </a>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="p-4 border border-border/50 bg-card/50 backdrop-blur-sm card-hover">
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
