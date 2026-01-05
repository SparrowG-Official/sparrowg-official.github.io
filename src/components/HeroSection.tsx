import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, CheckCircle } from "lucide-react";

export const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToPrograms = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="/images/DSC00817.JPG"
          alt="Kids learning with curiosity and engagement"
          className="w-full h-full object-cover scale-105"
        />
        {/* Premium gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/4 w-48 h-48 bg-secondary/20 rounded-full blur-[80px] pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="flex items-center justify-center min-h-[85vh]">
          {/* Centered Content */}
          <div className="space-y-8 text-center max-w-4xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium animate-fade-up">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Trusted by 500+ Schools & Institutions
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] animate-fade-up text-white drop-shadow-lg">
              Learning That{" "}
              <span className="text-gradient-primary">Takes Flight</span>
            </h1>

            <p 
              className="text-lg md:text-xl lg:text-2xl text-white/85 leading-relaxed animate-fade-up max-w-3xl mx-auto" 
              style={{ animationDelay: "0.1s" }}
            >
              Hands-on STEM kits, immersive AR/VR learning, and expert-led workshops 
              for children, schools, and organizations.
            </p>

            {/* CTA Buttons */}
            <div 
              className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-fade-up"
              style={{ animationDelay: "0.2s" }}
            >
              <Button variant="hero" size="xl" className="group" onClick={scrollToPrograms}>
                Explore Programs
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="heroOutline" size="xl" className="group" onClick={scrollToContact}>
                <Phone className="w-5 h-5 mr-2" />
                Talk to an Expert
              </Button>
            </div>

            {/* Trust indicators */}
            <div 
              className="flex flex-wrap items-center justify-center gap-4 md:gap-6 pt-8 animate-fade-up"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="flex items-center gap-2 text-white/80 text-sm md:text-base">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span>CBSE-Aligned Learning</span>
              </div>
              <div className="hidden md:block w-px h-6 bg-white/20" />
              <div className="flex items-center gap-2 text-white/80 text-sm md:text-base">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span>Trusted by 500+ Schools</span>
              </div>
              <div className="hidden md:block w-px h-6 bg-white/20" />
              <div className="flex items-center gap-2 text-white/80 text-sm md:text-base">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span>Designed by Educators</span>
              </div>
            </div>

            {/* Stats */}
            <div 
              className="flex flex-wrap items-center justify-center gap-8 pt-8 animate-fade-up"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-white">50M+</p>
                <p className="text-sm text-white/60">Learning Components</p>
              </div>
              <div className="w-px h-12 bg-white/20" />
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-white">500+</p>
                <p className="text-sm text-white/60">Partner Schools</p>
              </div>
              <div className="w-px h-12 bg-white/20" />
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-white">4.9★</p>
                <p className="text-sm text-white/60">Parent Rating</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white/60 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};
