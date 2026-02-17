import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Section from "./Section";

import framerScreenshot from "@/assets/screenshots/framer-portfolio.png";
import githubScreenshot from "@/assets/screenshots/github-profile.png";
import kaggleScreenshot from "@/assets/screenshots/kaggle-profile.png";
import amazonScreenshot from "@/assets/screenshots/amazon-author.png";
import masterProfileScreenshot from "@/assets/screenshots/master-profile.png";
import mainPortfolioScreenshot from "@/assets/screenshots/main-portfolio.png";
import linktreeScreenshot from "@/assets/screenshots/linktree.png";

import krPromptsCollage from "@/assets/screenshots/kr-prompts-app_collage.png";
import techCuratorCollage from "@/assets/screenshots/tech-curator-guide_collage.png";
import pocketNewsCollage from "@/assets/screenshots/pocket-news_collage.png";
import islamicDuasCollage from "@/assets/screenshots/islamic-duas_collage.png";

const profiles = [
  {
    name: "Main Portfolio",
    desc: "Executive summary, leadership, books, awards & full career story.",
    url: "https://kalilurrahman.github.io",
    screenshot: mainPortfolioScreenshot,
    tag: "Portfolio",
  },
  {
    name: "Master Profile Hub",
    desc: "Omni-channel directory linking all professional profiles and projects.",
    url: "https://kalilurrahman.github.io/KR_Master_Profile.html",
    screenshot: masterProfileScreenshot,
    tag: "Hub",
  },
  {
    name: "PhD Research Assistant",
    desc: "AI-assisted research companion for PhD-level academic work.",
    url: "https://kalilurrahman.github.io/PhDResearchAssistant.html",
    screenshot: masterProfileScreenshot, // Still using master profile as placeholder if no specific screenshot requested
    tag: "Tool",
  },
  {
    name: "KR Prompts App",
    desc: "Curated prompt library for working smarter with AI.",
    url: "https://krpromptsapp.lovable.app/",
    screenshot: krPromptsCollage,
    tag: "Lovable App",
  },
  {
    name: "Tech Curator Guide",
    desc: "Interactive guide for technology curation and discovery.",
    url: "https://kr-tech-curator-guide.lovable.app/",
    screenshot: techCuratorCollage,
    tag: "Lovable App",
  },
  {
    name: "Pocket News",
    desc: "Personalised news curation — stay informed on what matters.",
    url: "https://kr-pocket-news.lovable.app/",
    screenshot: pocketNewsCollage,
    tag: "Lovable App",
  },
  {
    name: "Islamic Duas",
    desc: "A personal collection of duas and supplications.",
    url: "https://kr-islamic-duas.lovable.app/",
    screenshot: islamicDuasCollage,
    tag: "Lovable App",
  },
  {
    name: "Framer Visual Portfolio",
    desc: "A modern visual portfolio with smooth animations, role-based profiles, and testimonials.",
    url: "https://kalilurrahman.framer.website/",
    screenshot: framerScreenshot,
    tag: "Visual",
  },
  {
    name: "GitHub Profile",
    desc: "46+ repositories — quality engineering artefacts, LLM experiments, Kaggle notebooks & more.",
    url: "https://github.com/kalilurrahman",
    screenshot: githubScreenshot,
    tag: "Open Source",
  },
  {
    name: "Kaggle — Legacy Grandmaster",
    desc: "Competitions Expert, Datasets Expert, Notebooks Master. 1,265+ discussion contributions.",
    url: "https://www.kaggle.com/kalilurrahman",
    screenshot: kaggleScreenshot,
    tag: "Data & AI",
  },
  {
    name: "Amazon Author Page",
    desc: "Published books on Python Data Visualization, Selenium Automation, and Testing.",
    url: "https://www.amazon.com/stores/Kalilur-Rahman/author/B0863JL6R7",
    screenshot: amazonScreenshot,
    tag: "Books",
  },
  {
    name: "Linktree Directory",
    desc: "All channels in one place — books, socials, apps & professional links.",
    url: "https://linktr.ee/kalilur.rahman",
    screenshot: linktreeScreenshot,
    tag: "Directory",
  },
];

const ProfileShowcase = () => {
  return (
    <Section
      id="profiles"
      title="Profile Showcase"
      subtitle="Live previews of my presence across platforms."
    >
      <div className="space-y-8">
        {profiles.map((profile, i) => (
          <motion.a
            key={profile.name}
            href={profile.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="group grid md:grid-cols-5 gap-6 p-5 border border-border bg-card hover:border-primary/40 transition-all"
          >
            {/* Screenshot */}
            <div className="md:col-span-3 overflow-hidden rounded-sm border border-border/50">
              <img
                src={profile.screenshot}
                alt={`${profile.name} screenshot`}
                className="w-full h-auto object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                loading="lazy"
              />
            </div>

            {/* Info */}
            <div className="md:col-span-2 flex flex-col justify-center">
              <span className="inline-block self-start px-3 py-1 text-xs tracking-[0.12em] uppercase bg-primary/10 text-primary border border-primary/20 mb-3">
                {profile.tag}
              </span>
              <h3 className="font-serif text-xl text-foreground group-hover:text-primary transition-colors mb-2">
                {profile.name}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {profile.desc}
              </p>
              <span className="inline-flex items-center gap-1.5 text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                Visit Profile <ExternalLink className="w-3.5 h-3.5" />
              </span>
            </div>
          </motion.a>
        ))}
      </div>
    </Section>
  );
};

export default ProfileShowcase;
