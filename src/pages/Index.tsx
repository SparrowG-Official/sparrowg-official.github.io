import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AudienceSegmentation } from "@/components/AudienceSegmentation";
import { ProductShowcase } from "@/components/ProductShowcase";
import { ServicesSlider } from "@/components/ServicesSlider";
import { WhySparrowG } from "@/components/WhySparrowG";
import { TrustSection } from "@/components/TrustSection";
import { ReviewsSection } from "@/components/ReviewsSection";
import { FeaturedProducts } from "@/components/FeaturedProducts";
import { AboutSection } from "@/components/AboutSection";
import { FutureVision } from "@/components/FutureVision";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <AudienceSegmentation />
        <ProductShowcase />
        <ServicesSlider />
        <WhySparrowG />
        <TrustSection />
        <ReviewsSection />
        <FeaturedProducts />
        <AboutSection />
        <FutureVision />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
