import { Button } from "@/components/ui/button";
import heroIllustration from "@/assets/hero-illustration.png";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden stem-pattern">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent rounded-full text-accent-foreground text-sm font-medium animate-fade-up">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Future-Ready STEM Education
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Learning That{" "}
              <span className="text-gradient-primary">Takes Flight</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed animate-fade-up" style={{ animationDelay: "0.2s" }}>
              Empower the next generation with hands-on STEM kits, immersive AR/VR experiences, 
              and expert-led workshops. Building future skills, one discovery at a time.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <Button variant="hero" size="lg">
                Explore Kits
              </Button>
              <Button variant="outline" size="lg">
                Book a Workshop
              </Button>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center gap-8 justify-center lg:justify-start pt-4 animate-fade-up" style={{ animationDelay: "0.4s" }}>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">500+</div>
                <div className="text-sm text-muted-foreground">Schools</div>
              </div>
              <div className="w-px h-10 bg-border" />
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">50K+</div>
                <div className="text-sm text-muted-foreground">Students</div>
              </div>
              <div className="w-px h-10 bg-border" />
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">100+</div>
                <div className="text-sm text-muted-foreground">Corporates</div>
              </div>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="relative animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              <img
                src={heroIllustration}
                alt="SparrowG STEM Learning - Kids exploring science, technology, engineering and mathematics with interactive kits"
                className="w-full h-auto rounded-3xl animate-float"
              />
              {/* Floating accent cards */}
              <div className="absolute -left-4 top-1/4 bg-card rounded-2xl p-4 shadow-elevated animate-float" style={{ animationDelay: "1s" }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-science/20 flex items-center justify-center">
                    <span className="text-lg">🔬</span>
                  </div>
                  <div>
                    <div className="text-sm font-semibold">Science</div>
                    <div className="text-xs text-muted-foreground">Explore & Discover</div>
                  </div>
                </div>
              </div>
              <div className="absolute -right-4 bottom-1/4 bg-card rounded-2xl p-4 shadow-elevated animate-float" style={{ animationDelay: "2s" }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-technology/20 flex items-center justify-center">
                    <span className="text-lg">💻</span>
                  </div>
                  <div>
                    <div className="text-sm font-semibold">Technology</div>
                    <div className="text-xs text-muted-foreground">Build & Code</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
