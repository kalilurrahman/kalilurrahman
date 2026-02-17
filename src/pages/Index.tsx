import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ExecutiveSummary from "@/components/ExecutiveSummary";
import Leadership from "@/components/Leadership";
import DataAI from "@/components/DataAI";
import Books from "@/components/Books";
import Awards from "@/components/Awards";
import ProfileShowcase from "@/components/ProfileShowcase";
import OmniChannel from "@/components/OmniChannel";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <ExecutiveSummary />
      <div className="section-divider" />
      <Leadership />
      <div className="section-divider" />
      <DataAI />
      <div className="section-divider" />
      <Books />
      <div className="section-divider" />
      <Awards />
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
