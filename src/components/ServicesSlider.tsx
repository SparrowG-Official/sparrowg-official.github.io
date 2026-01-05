import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Box, Glasses, Users, Gift } from "lucide-react";

const services = [
  {
    id: 1,
    title: "STEM Kits",
    description: "Hands-on learning kits for curious minds. Build robots, circuits, and science projects.",
    benefit: "Learn by doing with curriculum-aligned activities",
    icon: Box,
    color: "bg-science/10 text-science",
    gradient: "from-science/20 to-science/5",
  },
  {
    id: 2,
    title: "AR/VR Learning",
    description: "Immersive educational experiences that bring abstract concepts to life.",
    benefit: "Experience science in virtual laboratories",
    icon: Glasses,
    color: "bg-technology/10 text-technology",
    gradient: "from-technology/20 to-technology/5",
  },
  {
    id: 3,
    title: "Workshops",
    description: "Expert-led sessions for schools, communities, and corporate teams.",
    benefit: "Interactive learning with industry experts",
    icon: Users,
    color: "bg-engineering/10 text-engineering",
    gradient: "from-engineering/20 to-engineering/5",
  },
  {
    id: 4,
    title: "Corporate Gifting",
    description: "Unique STEM-themed gifts that inspire creativity and innovation.",
    benefit: "Memorable gifts that educate and engage",
    icon: Gift,
    color: "bg-mathematics/10 text-mathematics",
    gradient: "from-mathematics/20 to-mathematics/5",
  },
];

export const ServicesSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  const getPosition = (index: number) => {
    const diff = index - activeIndex;
    if (diff === 0) return "center";
    if (diff === 1 || diff === -(services.length - 1)) return "right";
    if (diff === -1 || diff === services.length - 1) return "left";
    return "hidden";
  };

  return (
    <section id="services" className="section-padding bg-gradient-subtle overflow-hidden relative">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">
            What We Offer
          </p>
          <h2 className="section-title mb-6">
            Our <span className="text-gradient-primary">Services</span>
          </h2>
          <p className="section-subtitle">
            Comprehensive STEM solutions for every learner and organization
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative h-[520px] md:h-[480px] flex items-center justify-center">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-2 md:left-4 z-20 w-12 h-12 md:w-14 md:h-14 rounded-full bg-card shadow-card flex items-center justify-center text-foreground hover:bg-accent hover:scale-110 transition-all duration-300"
            aria-label="Previous service"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 md:right-4 z-20 w-12 h-12 md:w-14 md:h-14 rounded-full bg-card shadow-card flex items-center justify-center text-foreground hover:bg-accent hover:scale-110 transition-all duration-300"
            aria-label="Next service"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Cards */}
          <div className="relative w-full max-w-4xl h-full">
            {services.map((service, index) => {
              const position = getPosition(index);
              const IconComponent = service.icon;

              return (
                <div
                  key={service.id}
                  className={`absolute top-1/2 left-1/2 w-80 md:w-[400px] transition-all duration-500 ease-out ${
                    position === "center"
                      ? "-translate-x-1/2 -translate-y-1/2 z-10 scale-100 opacity-100"
                      : position === "left"
                      ? "-translate-x-[150%] -translate-y-1/2 z-0 scale-75 opacity-40"
                      : position === "right"
                      ? "translate-x-[50%] -translate-y-1/2 z-0 scale-75 opacity-40"
                      : "translate-x-0 -translate-y-1/2 scale-50 opacity-0"
                  }`}
                >
                  <div className={`bg-card rounded-3xl p-8 md:p-10 shadow-elevated border border-border/50 bg-gradient-to-br ${service.gradient}`}>
                    <div className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl ${service.color} flex items-center justify-center mb-6`}>
                      <IconComponent className="w-8 h-8 md:w-10 md:h-10" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">{service.title}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed text-base md:text-lg">
                      {service.description}
                    </p>
                    <p className="text-sm font-semibold text-primary mb-8 flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-xs">✓</span>
                      {service.benefit}
                    </p>
                    <Button variant="outline" size="default" className="w-full hover-lift">
                      Learn More
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center gap-3 mt-8">
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "w-10 bg-primary"
                  : "w-2 bg-border hover:bg-muted-foreground"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
