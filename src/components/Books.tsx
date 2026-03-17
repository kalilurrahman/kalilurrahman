import { motion } from "framer-motion";
import Section from "./Section";
import { ExternalLink } from "lucide-react";

const books = [
  {
    title: "Python Data Visualisation Essentials Guide",
    desc: "A practical introduction to turning data into clear, compelling visual stories with Python.",
    url: "https://example.com/book-1",
  },
  {
    title: "Science Of Selenium",
    desc: "A hands-on guide to automation strategy, frameworks, and resilient quality engineering practices.",
    url: "https://example.com/book-2",
  },
  {
    title: "Innovations in Testing",
    desc: "A concise exploration of modern testing ideas, delivery models, and leadership perspectives.",
    url: "https://example.com/book-3",
  },
];

const Books = () => {
  return (
    <Section id="books" title="Published Works" subtitle="Selected books that capture practical lessons from engineering, automation, and transformation.">
      <div className="mb-8 inline-flex border-b-2 border-teal pb-2">
        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-teal">Published Works</span>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {books.map((book, i) => (
          <motion.article
            key={book.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group flex flex-col border border-border bg-card p-6"
          >
            <img
              src="/placeholder.svg"
              alt={`${book.title} placeholder book cover`}
              loading="lazy"
              className="mb-5 aspect-[3/4] w-full rounded-md border border-border bg-secondary object-cover shadow-lg"
            />
            <h3 className="mb-2 font-serif text-xl text-foreground">{book.title}</h3>
            <p className="mb-5 text-sm leading-relaxed text-muted-foreground">{book.desc}</p>
            <a
              href={book.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-teal transition-colors hover:text-primary"
            >
              Get the book →
              <ExternalLink className="h-4 w-4" />
            </a>
          </motion.article>
        ))}
      </div>
    </Section>
  );
};

export default Books;
