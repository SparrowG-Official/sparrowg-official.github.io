import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ProductShowcase } from "@/components/ProductShowcase";
import { ServicesSlider } from "@/components/ServicesSlider";
import { WhySparrowG } from "@/components/WhySparrowG";
import { TargetAudience } from "@/components/TargetAudience";
import { ReviewsSection } from "@/components/ReviewsSection";
import { FutureVision } from "@/components/FutureVision";
import { FeaturedProducts } from "@/components/FeaturedProducts";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <ProductShowcase />
        <ServicesSlider />
        <WhySparrowG />
        <TargetAudience />
        <ReviewsSection />
        <FutureVision />
        <FeaturedProducts />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
