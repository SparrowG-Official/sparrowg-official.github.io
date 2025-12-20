import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSlider } from "@/components/ServicesSlider";
import { WhySparrowG } from "@/components/WhySparrowG";
import { TargetAudience } from "@/components/TargetAudience";
import { FutureVision } from "@/components/FutureVision";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSlider />
        <WhySparrowG />
        <TargetAudience />
        <FutureVision />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
