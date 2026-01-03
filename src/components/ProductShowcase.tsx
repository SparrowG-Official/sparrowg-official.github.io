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
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 stem-pattern opacity-30 pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Our <span className="text-gradient-primary">Kits</span> in Action
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how students engage with hands-on STEM learning through our innovative kits and workshops
          </p>
        </div>

        {/* Main Carousel */}
        <div className="relative max-w-6xl mx-auto">
          {/* Large Image Display */}
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-elevated group">
            <img
              src={showcaseImages[currentIndex].src}
              alt={showcaseImages[currentIndex].alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Overlay with caption */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <p className="text-white text-xl md:text-2xl font-semibold">
                {showcaseImages[currentIndex].caption}
              </p>
            </div>

            {/* Navigation Buttons */}
            <Button
              variant="ghost"
              size="icon"
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-foreground rounded-full w-12 h-12 opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-foreground rounded-full w-12 h-12 opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {showcaseImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? "bg-primary w-8"
                    : "bg-muted-foreground/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
