import { motion } from "framer-motion";
import Section from "./Section";

const testimonials = [
  {
    quote: "Kalilur brings executive clarity and delivery depth in equal measure — he turns ambitious transformation goals into practical outcomes.",
    name: "Asha Menon",
    title: "VP, Digital Strategy",
    organisation: "Global Pharma Group",
  },
  {
    quote: "He combines technical credibility, people leadership, and board-level communication in a way that builds confidence across teams.",
    name: "Ravi Narayanan",
    title: "Transformation Leader",
    organisation: "Enterprise Technology Services",
  },
  {
    quote: "From GCC scale-up to AI-led change, Kalilur consistently creates structure, momentum, and measurable business value.",
    name: "Meera Subramanian",
    title: "Director, Operations Excellence",
    organisation: "International Delivery Organisation",
  },
];

const Testimonials = () => {
  return (
    <Section id="testimonials" title="What colleagues say" subtitle="A few peer perspectives on leadership, transformation, and delivery.">
      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <motion.article
            key={testimonial.name}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            className="border-l-4 border-teal bg-card p-6 shadow-sm transition-transform duration-200 hover:-translate-y-[2px]"
          >
            <p className="mb-5 text-sm italic leading-relaxed text-muted-foreground">“{testimonial.quote}”</p>
            <div>
              <p className="font-semibold text-foreground">{testimonial.name}</p>
              <p className="text-sm text-muted-foreground">{testimonial.title}</p>
              <p className="text-sm text-muted-foreground">{testimonial.organisation}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
};

export default Testimonials;
