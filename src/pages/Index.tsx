import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/hero/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import SecuritySection from "@/components/sections/SecuritySection";
import DevelopmentSection from "@/components/sections/DevelopmentSection";
import HybridSection from "@/components/sections/HybridSection";
import ImpactSection from "@/components/sections/ImpactSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ContactSection from "@/components/sections/ContactSection";
import CursorFollow from "@/components/effects/CursorFollow";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <CursorFollow />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <SecuritySection />
        <DevelopmentSection />
        <HybridSection />
        <ImpactSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
