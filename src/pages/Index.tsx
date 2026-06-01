import Seo from "@/components/Seo";
import Hero from "@/components/Hero";
import ExecutiveSummary from "@/components/ExecutiveSummary";
import Leadership from "@/components/Leadership";
import Mentorship from "@/components/Mentorship";
import DataAI from "@/components/DataAI";
import Books from "@/components/Books";
import Awards from "@/components/Awards";
import Certifications from "@/components/Certifications";
import ProfileShowcase from "@/components/ProfileShowcase";
import OmniChannel from "@/components/OmniChannel";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import KnowledgeHubSection from "@/components/KnowledgeHubSection";
import Testimonials from "@/components/Testimonials";
import ScrollProgress from "@/components/ScrollProgress";
import FeaturedProjects from "@/components/FeaturedProjects";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="Kalilur Rahman | Global IT Executive, AI Thought Leader & Kaggle Grandmaster"
        description="Kalilur Rahman — Global IT Executive with 29+ years in enterprise transformation, GCC leadership, AI/Data strategy and Quality Engineering. Kaggle Legacy Grandmaster, author of 3 books, 482 certifications, 350+ AI agents, Top-10 global thought leader."
        path="/"
        keywords="Kalilur Rahman, Global IT Executive, CIO, GCC Leadership, AI Strategy, Agentic AI, Kaggle Grandmaster, Quality Engineering, Digital Transformation, Enterprise Architecture, AI Thought Leader, Chennai India"
        type="profile"
      />
      <ScrollProgress />
      <ScrollToTop />
      <Hero />
      <ExecutiveSummary />
      <div className="section-divider" />
      <Testimonials />
      <div className="section-divider" />
      <FeaturedProjects />
      <div className="section-divider" />
      <Leadership />
      <div className="section-divider" />
      <Mentorship />
      <div className="section-divider" />
      <DataAI />
      <div className="section-divider" />
      <Books />
      <div className="section-divider" />
      <Awards />
      <div className="section-divider" />
      <Certifications />
      <div className="section-divider" />
      <KnowledgeHubSection />
      <div className="section-divider" />
      <ProfileShowcase />
      <div className="section-divider" />
      <OmniChannel />
      <div className="section-divider" />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
