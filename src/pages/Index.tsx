import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";
import AIWorkflowBackground from "@/components/AIWorkflowBackground";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background">
      {/* Site-wide animated AI workflow background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <AIWorkflowBackground />
      </div>
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <SkillsSection />
        <ProjectsSection />
        <EducationSection />
        <ContactSection />
        <FooterSection />
      </div>
    </div>
  );
};

export default Index;
