import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Layers, Search } from "lucide-react";
import { projects, categories } from "@/data/projects";

const AppsPortfolio = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = projects.filter(p => {
    const matchesCategory = activeCategory === "All" || p.category === activeCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         p.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="container max-w-6xl mx-auto px-6 py-24 min-h-screen">
      <div className="mb-16 text-center max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl font-serif mb-6 text-foreground tracking-tight">
            Digital <span className="text-primary italic">Portfolio</span>
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            An integrated ecosystem of AI prototypes, strategic frameworks, and interactive tools curated across 29+ years of technology leadership.
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 rounded-full border border-primary/20">
            <Layers className="w-4 h-4 text-primary" />
            <span className="text-xs font-bold tracking-widest text-primary uppercase">
              {projects.length} Integrated Assets Live
            </span>
          </div>
        </motion.div>
      </div>

      {/* Search & Filter Bar */}
      <div className="flex flex-col md:flex-row gap-4 mb-12 items-center justify-between sticky top-20 z-10 bg-background/80 backdrop-blur-md p-4 rounded-xl border border-border/50 shadow-sm">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search projects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm"
          />
        </div>
        
        <div className="flex flex-wrap gap-2 justify-center">
          <button
            onClick={() => setActiveCategory("All")}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
              activeCategory === "All" 
              ? "bg-primary text-primary-foreground shadow-md" 
              : "bg-card border border-border text-muted-foreground hover:border-primary/40"
            }`}
          >
            All Assets
          </button>
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all flex items-center gap-2 ${
                activeCategory === cat.id 
                ? "bg-primary text-primary-foreground shadow-md" 
                : "bg-card border border-border text-muted-foreground hover:border-primary/40"
              }`}
            >
              <span>{cat.emoji}</span>
              {cat.id}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <motion.article 
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="group relative flex flex-col p-6 border border-border bg-card rounded-2xl hover:border-primary/40 hover:shadow-xl transition-all h-full"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/40 to-accent/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-t-2xl" />
              
              <div className="flex justify-between items-start mb-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-primary/10 text-2xl group-hover:scale-110 transition-transform">
                  {project.emoji}
                </div>
                <span className="text-[10px] font-mono px-2 py-1 bg-secondary rounded border border-border text-muted-foreground uppercase tracking-wider">
                  {project.type}
                </span>
              </div>
              
              <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {project.name}
              </h3>
              
              <p className="text-sm text-muted-foreground leading-relaxed mb-6 line-clamp-3">
                {project.description}
              </p>

              <div className="mt-auto pt-4 border-t border-border/50 flex items-center justify-between">
                <span className="text-[10px] font-semibold text-primary/60 uppercase tracking-tighter">
                  {project.category}
                </span>
                <a
                  href={project.link}
                  target={project.external ? "_blank" : undefined}
                  rel={project.external ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:gap-3 transition-all"
                >
                  Explore {project.external ? <ExternalLink className="w-3.5 h-3.5" /> : "→"}
                </a>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-20">
          <p className="text-muted-foreground">No projects found matching your criteria.</p>
          <button 
            onClick={() => {setActiveCategory("All"); setSearchQuery("");}}
            className="mt-4 text-primary font-semibold hover:underline"
          >
            Clear all filters
          </button>
        </div>
      )}
    </div>
  );
};

export default AppsPortfolio;
