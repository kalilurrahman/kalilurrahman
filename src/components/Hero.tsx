import { motion } from "framer-motion";
import { BarChart3, BookOpen, Globe2, ExternalLink, Rocket } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const credentials = [
  { label: "Kaggle Legacy Grandmaster", icon: BarChart3, color: "text-blue-400" },
  { label: "#3 Global Top Thought Leader", icon: Globe2, color: "text-amber-400" },
  { label: "3× Published Author", icon: BookOpen, color: "text-emerald-400" },
];

const stats = [
  { label: "Global Tenure", value: "29+", sub: "Years Leadership" },
  { label: "Thought Leadership", value: "#3", sub: "Global Thinker" },
  { label: "Knowledge Assets", value: "482", sub: "Certifications" },
  { label: "Digital Ecosystem", value: "80+", sub: "Apps & Repos" },
];

const Hero = () => {
  return (
    <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Background with advanced effects */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="Abstract editorial hero background" className="w-full h-full object-cover opacity-30 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      </div>

      <div className="relative z-10 container max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center"
        >
          {/* Executive Badge */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-[10px] font-bold tracking-[0.2em] text-primary uppercase mb-8"
          >
            <Rocket className="w-3 h-3" /> Digital Transformation & AI Strategy
          </motion.div>

          <h1 className="text-6xl md:text-8xl font-serif mb-6 tracking-tight leading-none">
            Kalilur <span className="text-gradient-gold italic">Rahman</span>
          </h1>

          <p className="max-w-2xl mx-auto text-muted-foreground text-lg md:text-xl leading-relaxed mb-10">
            Global IT Executive & Author shaping the future of <span className="text-foreground font-semibold">Quality Engineering</span>, 
            <span className="text-foreground font-semibold"> Agentic AI</span>, and <span className="text-foreground font-semibold">GCC Leadership</span>.
          </p>

          {/* Credentials Bar */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {credentials.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div 
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="flex items-center gap-3 px-5 py-3 bg-card/40 backdrop-blur-md border border-border/50 rounded-2xl group hover:border-primary/30 transition-all"
                >
                  <div className={`p-2 rounded-xl bg-background border border-border group-hover:border-primary/20 ${item.color}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-bold text-foreground">{item.label}</span>
                </motion.div>
              );
            })}
          </div>

          {/* Primary Actions */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <a
              href="#featured-projects"
              className="px-8 py-4 bg-primary text-primary-foreground font-bold rounded-full shadow-xl shadow-primary/20 hover:scale-105 transition-all flex items-center gap-2"
            >
              Explore Digital Portfolio
              <ExternalLink className="w-4 h-4" />
            </a>
            <a
              href="#summary"
              className="px-8 py-4 bg-secondary text-foreground font-bold rounded-full border border-border hover:border-primary/40 transition-all"
            >
              Executive Summary
            </a>
          </div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="group p-6 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm hover:border-primary/20 transition-all">
                <p className="text-[10px] text-muted-foreground font-bold tracking-widest uppercase mb-2 group-hover:text-primary transition-colors">{stat.label}</p>
                <p className="text-3xl font-serif text-foreground mb-1">{stat.value}</p>
                <p className="text-xs text-muted-foreground font-medium">{stat.sub}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground opacity-30"
      >
        <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent mx-auto" />
      </motion.div>
    </section>
  );
};

export default Hero;
