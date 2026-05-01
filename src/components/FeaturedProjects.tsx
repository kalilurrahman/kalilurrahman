import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ExternalLink, ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";

const FeaturedProjects = () => {
  const featured = projects.filter(p => p.featured).slice(0, 6);

  return (
    <section id="featured-projects" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-primary font-bold tracking-[0.2em] uppercase text-xs block mb-3"
            >
              The Digital Ecosystem
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-serif text-foreground"
            >
              Latest GitHub & <span className="text-primary italic">Lovable</span> Projects
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link 
              to="/apps-portfolio" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-secondary hover:bg-primary hover:text-primary-foreground transition-all rounded-full font-bold text-sm"
            >
              View Full Portfolio <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative h-[320px] flex flex-col p-8 rounded-3xl border border-border bg-card/50 hover:bg-card hover:border-primary/40 transition-all duration-500 overflow-hidden"
            >
              {/* Background Glow */}
              <div className="absolute -right-20 -bottom-20 w-40 h-40 bg-primary/5 blur-[80px] group-hover:bg-primary/10 transition-colors" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-background border border-border group-hover:border-primary/20 text-3xl group-hover:scale-110 transition-all duration-500 shadow-sm">
                    {project.emoji}
                  </div>
                  <span className="text-[10px] font-mono px-3 py-1 bg-primary/5 text-primary border border-primary/10 rounded-full uppercase tracking-widest font-bold">
                    {project.type}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-1">
                  {project.name}
                </h3>
                
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 mb-6">
                  {project.description}
                </p>

                <div className="mt-auto pt-6 flex items-center justify-between">
                  <span className="text-[10px] font-bold text-muted-foreground/60 uppercase tracking-widest">
                    {project.category}
                  </span>
                  <a
                    href={project.link}
                    target={project.external ? "_blank" : undefined}
                    rel={project.external ? "noopener noreferrer" : undefined}
                    className="flex items-center justify-center w-10 h-10 rounded-full border border-border group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                  >
                    {project.external ? <ExternalLink className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-8 rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/5 to-transparent flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="text-center md:text-left">
            <h4 className="text-xl font-bold text-foreground mb-2">Want to build something together?</h4>
            <p className="text-sm text-muted-foreground">I'm always open to discussing new projects, framework development, or speaking engagements.</p>
          </div>
          <div className="flex gap-4">
            <Link to="/digital-hub" className="px-6 py-3 border border-border hover:border-primary transition-all rounded-full font-bold text-sm">
              Digital Hub
            </Link>
            <a href="mailto:rahman.kalilur@outlook.com" className="px-6 py-3 bg-primary text-primary-foreground rounded-full font-bold text-sm hover:scale-105 transition-all shadow-lg shadow-primary/20">
              Get in Touch
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
