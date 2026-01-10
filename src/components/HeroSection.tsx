import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, CheckCircle } from "lucide-react";
export const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth"
    });
  };
  const scrollToPrograms = () => {
    document.getElementById("services")?.scrollIntoView({
      behavior: "smooth"
    });
  };
  return <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background image with subtle overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <img src="/images/DSC00817.JPG" alt="Kids learning with curiosity and engagement" className="w-full h-full object-cover brightness-105" />
        {/* Subtle dark gradient at top for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="flex items-center justify-center min-h-[85vh]">
          {/* Centered Content - positioned lower */}
          <div className="space-y-8 text-center max-w-6xl mt-64 md:mt-80 lg:mt-96">
            {/* Modern Hero Title - Single line with LEARN in primary color */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-tight animate-fade-up tracking-tighter">
              <span className="text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]" style={{
                textShadow: '2px 2px 0 rgba(0,0,0,0.3), 4px 4px 8px rgba(0,0,0,0.5)'
              }}>
                BUILD. PLAY.{" "}
              </span>
              <span className="text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]" style={{
                textShadow: '2px 2px 0 rgba(0,0,0,0.3), 4px 4px 8px rgba(0,0,0,0.5)'
              }}>
                LEARN.
              </span>
            </h1>

            {/* Description with background box */}
            <div className="inline-block bg-black/40 backdrop-blur-md px-8 py-4 rounded-2xl border border-white/10 animate-fade-up" style={{
              animationDelay: "0.1s"
            }}>
              <p className="text-base md:text-lg lg:text-xl text-white font-medium leading-relaxed">
                Hands-on STEM kits, immersive AR/VR learning, and expert-led workshops
                for children, schools, and organizations.
              </p>
            </div>

            {/* Trust indicators - commented out */}
            {/*
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 pt-8 animate-fade-up" style={{
            animationDelay: "0.3s"
          }}>
              <div className="flex items-center gap-2 text-foreground/80 text-sm md:text-base">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span>CBSE-Aligned Learning</span>
              </div>
              <div className="hidden md:block w-px h-6 bg-border" />
              <div className="flex items-center gap-2 text-foreground/80 text-sm md:text-base">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span>Trusted by 500+ Schools</span>
              </div>
              <div className="hidden md:block w-px h-6 bg-border" />
              <div className="flex items-center gap-2 text-foreground/80 text-sm md:text-base">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span>Designed by Educators</span>
              </div>
            </div>
            */}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white/60 rounded-full animate-pulse" />
        </div>
      </div>
    </section>;
};