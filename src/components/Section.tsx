import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

const Section = ({ id, title, subtitle, children, className = "" }: SectionProps) => {
  return (
    <section id={id} className={`py-20 md:py-28 ${className}`}>
      <div className="container max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16"
        >
          <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-3">
            {title}
          </p>
          {subtitle && (
            <h2 className="text-3xl md:text-4xl font-serif text-foreground leading-tight">
              {subtitle}
            </h2>
          )}
          <div className="section-divider mt-6 !mx-0" />
        </motion.div>
        {children}
      </div>
    </section>
  );
};

export default Section;
