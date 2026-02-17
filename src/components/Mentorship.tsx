import { motion } from "framer-motion";
import { ExternalLink, Users, Award } from "lucide-react";
import Section from "./Section";

const Mentorship = () => {
  return (
    <Section
      id="mentorship"
      title="Mentorship & Community"
      subtitle="Giving back to the community and shaping the next generation of leaders."
    >
      <div className="grid md:grid-cols-2 gap-8">
        {/* GLEAC */}
        <motion.a
          href="https://www.gleac.com/mentors/kalilur-rahman"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="group block p-8 border border-border bg-card hover:border-primary/40 transition-all relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <Users className="w-24 h-24 text-primary" />
          </div>

          <div className="relative z-10">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 text-primary rounded-sm mb-6">
              <Users className="w-6 h-6" />
            </div>

            <h3 className="text-2xl font-serif text-foreground mb-3 group-hover:text-primary transition-colors">
              GLEAC Mentor
            </h3>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Independent Consultant/Advisor, Lead SME, GCC Consultant/advisor, Startup Mgmt Consultant.
              Helping professionals and organizations navigate digital transformation and AI adoption.
            </p>

            <span className="inline-flex items-center gap-2 text-sm font-medium text-primary">
              View Mentor Profile <ExternalLink className="w-4 h-4" />
            </span>
          </div>
        </motion.a>

        {/* Della Leaders Club */}
        <motion.a
          href="https://www.dellaleaders.com/member/kalilur-rahman/"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="group block p-8 border border-border bg-card hover:border-primary/40 transition-all relative overflow-hidden"
        >
           <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <Award className="w-24 h-24 text-primary" />
          </div>

          <div className="relative z-10">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 text-primary rounded-sm mb-6">
              <Award className="w-6 h-6" />
            </div>

            <h3 className="text-2xl font-serif text-foreground mb-3 group-hover:text-primary transition-colors">
              Della Leaders Club
            </h3>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Hyderabad Chapter Member. A Global Community of Entrepreneurs, Professionals, and Young Leaders
              created to positively impact the world through business, knowledge, and collaboration.
            </p>

            <span className="inline-flex items-center gap-2 text-sm font-medium text-primary">
              View Member Profile <ExternalLink className="w-4 h-4" />
            </span>
          </div>
        </motion.a>
      </div>
    </Section>
  );
};

export default Mentorship;
