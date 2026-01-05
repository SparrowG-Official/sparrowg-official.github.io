import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const showcaseImages = [
  {
    src: "/images/C0813T01.JPG",
    alt: "Building construction models",
    caption: "Build. Learn. Innovate.",
  },
  {
    src: "/images/C0872T01.JPG",
    alt: "Interactive STEM learning session",
    caption: "Interactive Learning Experiences",
  },
  {
    src: "/images/C0886T01.JPG",
    alt: "Team working on engineering kit",
    caption: "Collaborative Problem Solving",
  },
  {
    src: "/images/DSC00840.JPG",
    alt: "Creative STEM projects",
    caption: "Bringing Ideas to Life",
  },
];

export const ProductShowcase = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % showcaseImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % showcaseImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? showcaseImages.length - 1 : prev - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 stem-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">
            Real Learning in Action
          </p>
          <h2 className="section-title mb-6">
            Our <span className="text-gradient-primary">Kits</span> in Action
          </h2>
          <p className="section-subtitle">
            See how students engage with hands-on STEM learning through our innovative kits and workshops
          </p>
        </div>

        {/* Main Carousel */}
        <div className="relative max-w-6xl mx-auto">
          {/* Large Image Display */}
          <div className="relative aspect-video rounded-3xl overflow-hidden shadow-elevated group">
            <img
              src={showcaseImages[currentIndex].src}
              alt={showcaseImages[currentIndex].alt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Overlay with caption */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
              <p className="text-white text-xl md:text-2xl lg:text-3xl font-bold leading-tight">
                {showcaseImages[currentIndex].caption}
              </p>
            </div>

            {/* Navigation Buttons */}
            <Button
              variant="ghost"
              size="icon"
              onClick={prevSlide}
              className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-foreground rounded-full w-12 h-12 opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-card hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={nextSlide}
              className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-foreground rounded-full w-12 h-12 opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-card hover:scale-110"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-3 mt-8">
            {showcaseImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? "bg-primary w-10"
                    : "bg-border hover:bg-muted-foreground/50 w-2"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
