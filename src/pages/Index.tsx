import Navbar from "@/components/Navbar";
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

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <ScrollToTop />
      <Hero />
      <ExecutiveSummary />
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
