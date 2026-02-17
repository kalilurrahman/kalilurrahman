import { motion } from "framer-motion";
import Section from "./Section";
import { ExternalLink } from "lucide-react";

const books = [
  {
    title: "Python Data Visualisation Essentials Guide",
    desc: "A practical guide covering Matplotlib, Seaborn, Pandas, Plotly, and more.",
    url: "https://in.bpbonline.com/products/python-data-visualization-essential-guide",
  },
  {
    title: "Science Of Selenium",
    desc: "From fundamentals to frameworks — multi‑language usage and CI integration.",
    url: "https://www.amazon.in/Science-Selenium-Automation-Framework-English-ebook/dp/B082KFY17B",
  },
  {
    title: "Innovations in Testing",
    desc: "A curated collection of testing‑focused blogs and reflections.",
    url: "https://www.amazon.in/dp/B078LRPLK8",
  },
];

const articles = [
  "Impacts of DevOps on Testing",
  "Impact of Digital Revolution on Testing Mobile & Web Apps over Cloud",
  "Test Data Masking and Tool Pilot Experiences",
  "Intelligent Testing Skills for Next Generation",
  "Model Based Testing for Communications Industry",
];

const Books = () => {
  return (
    <Section id="books" title="Books & Publications" subtitle="Translating experience into frameworks and reference material.">
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {books.map((book, i) => (
          <motion.a
            key={book.title}
            href={book.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group p-6 border border-border bg-card hover:border-primary/40 hover:glow-gold transition-all"
          >
            <div className="flex items-start justify-between mb-4">
              <span className="text-2xl">📕</span>
              <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </div>
            <h3 className="font-serif text-lg text-foreground group-hover:text-primary transition-colors mb-2">
              {book.title}
            </h3>
            <p className="text-sm text-muted-foreground">{book.desc}</p>
          </motion.a>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="p-6 border border-border bg-card"
      >
        <h3 className="font-serif text-lg text-foreground mb-4">Selected Articles & White Papers</h3>
        <ul className="grid md:grid-cols-2 gap-2">
          {articles.map((a) => (
            <li key={a} className="flex gap-2 text-sm text-secondary-foreground/70">
              <span className="text-primary shrink-0">—</span>
              {a}
            </li>
          ))}
        </ul>
        <div className="flex gap-4 mt-6">
          <a href="https://publicationslist.org/kalilur.rahman" target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline inline-flex items-center gap-1">
            Publications List <ExternalLink className="w-3 h-3" />
          </a>
          <a href="https://scholar.google.com/citations?user=hCYBFKYAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline inline-flex items-center gap-1">
            Google Scholar <ExternalLink className="w-3 h-3" />
          </a>
          <a href="https://www.amazon.com/stores/Kalilur-Rahman/author/B0863JL6R7" target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline inline-flex items-center gap-1">
            Amazon Author <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </motion.div>
    </Section>
  );
};

export default Books;
