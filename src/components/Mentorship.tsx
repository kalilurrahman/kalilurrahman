import { motion } from "framer-motion";
import { ExternalLink, Users, Award, Heart, BookOpen, Star, Lightbulb } from "lucide-react";
import Section from "./Section";

const mentorshipAreas = [
  {
    icon: Lightbulb,
    title: "AI & Digital Transformation Coaching",
    desc: "Guiding mid-career professionals and emerging leaders through the adoption of AI, automation and digital-first thinking. Practical coaching on prompt engineering, LLM workflows and data-driven decision-making.",
  },
  {
    icon: BookOpen,
    title: "Quality Engineering Leadership",
    desc: "Mentoring QE practitioners into leadership roles — from test architects to quality directors. Covering strategy, team building, automation frameworks, and executive stakeholder communication.",
  },
  {
    icon: Users,
    title: "Career Acceleration",
    desc: "One-on-one guidance for professionals targeting senior IC or management tracks. Resume strategy, interview preparation, personal branding (LinkedIn, GitHub, Kaggle), and navigating global job markets.",
  },
  {
    icon: Star,
    title: "Academic & Research Mentorship",
    desc: "Supporting PhD scholars and researchers with structured prompting strategies, academic writing, publication planning and dissertation architecture — reflected in the PhD Research Assistant tool (v7.0, 236 prompts).",
  },
];

const platforms = [
  {
    name: "GLEAC Mentor",
    role: "Independent Consultant · Lead SME · GCC Advisor · Startup Management Consultant",
    desc: "Helping professionals and organisations navigate digital transformation and AI adoption. Rated among top-performing mentors on the GLEAC platform.",
    url: "https://www.gleac.com/mentors/kalilur-rahman",
    icon: Users,
    cta: "View Mentor Profile",
  },
  {
    name: "Della Leaders Club",
    role: "Global Chapter Member · Entrepreneur & Leader Network",
    desc: "Member of a global community of entrepreneurs, professionals and young leaders united by a mission to positively impact the world through business, knowledge and collaboration.",
    url: "https://www.dellaleaders.com/member/kalilur-rahman/",
    icon: Award,
    cta: "View Member Profile",
  },
  {
    name: "Toastmasters International",
    role: "Competent Communicator (CC) · Competent Leader (CL)",
    desc: "Developed and honed public speaking, facilitation and leadership coaching skills through the Toastmasters programme — skills directly applied in executive coaching and mentoring engagements.",
    url: "https://www.toastmasters.org/",
    icon: Heart,
    cta: "About Toastmasters",
  },
];

const Mentorship = () => {
  return (
    <Section
      id="mentorship"
      title="Mentorship & Leadership Development"
      subtitle="Shaping the next generation of leaders through coaching, community and purposeful knowledge transfer."
    >
      {/* Mentorship Philosophy */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="p-8 border border-primary/20 bg-primary/5 mb-10"
      >
        <p className="text-muted-foreground leading-relaxed text-base md:text-lg max-w-3xl">
          With 29+ years in global IT leadership, I believe the most enduring form of impact is{" "}
          <span className="text-foreground font-medium">multiplying talent</span>. I actively mentor
          junior professionals, emerging leaders and PhD researchers — helping them navigate
          complexity, build confidence and accelerate their careers with clarity and purpose.
        </p>
      </motion.div>

      {/* Coaching Focus Areas */}
      <div className="grid sm:grid-cols-2 gap-5 mb-12">
        {mentorshipAreas.map((area, i) => {
          const Icon = area.icon;
          return (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 border border-border bg-card"
            >
              <div className="inline-flex items-center justify-center w-10 h-10 bg-primary/10 text-primary rounded-sm mb-4">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg text-foreground mb-2">{area.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{area.desc}</p>
            </motion.div>
          );
        })}
      </div>

      {/* Platform Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {platforms.map((platform, i) => {
          const Icon = platform.icon;
          return (
            <motion.a
              key={platform.name}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group block p-7 border border-border bg-card hover:border-primary/40 transition-all relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-3 opacity-5 group-hover:opacity-10 transition-opacity">
                <Icon className="w-20 h-20 text-primary" />
              </div>

              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-10 h-10 bg-primary/10 text-primary rounded-sm mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-serif text-foreground mb-1 group-hover:text-primary transition-colors">
                  {platform.name}
                </h3>
                <p className="text-xs text-primary/70 tracking-wide mb-3">{platform.role}</p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">{platform.desc}</p>
                <span className="inline-flex items-center gap-2 text-xs font-medium text-primary">
                  {platform.cta} <ExternalLink className="w-3.5 h-3.5" />
                </span>
              </div>
            </motion.a>
          );
        })}
      </div>
    </Section>
  );
};

export default Mentorship;
