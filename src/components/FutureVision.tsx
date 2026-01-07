import { useState, useEffect, useCallback } from "react";
import { Card, CardContent } from "@/components/ui/card";
import futureCurriculum from "@/assets/future-curriculum.png";
import futureArvr from "@/assets/future-arvr.png";
import futureEcosystem from "@/assets/future-ecosystem.png";
import futureCommunity from "@/assets/future-community.png";

const visions = [
  {
    image: futureCurriculum,
    title: "Curriculum Programs",
    description: "Integrated STEM curricula for schools and educational institutions",
    status: "Coming Soon",
  },
  {
    image: futureArvr,
    title: "AR/VR Experiences",
    description: "Immersive augmented and virtual reality for interactive STEM education",
    status: "In Development",
  },
  {
    image: futureEcosystem,
    title: "Tech Ecosystem",
    description: "Platform connecting students, educators, and parents for collaborative learning",
    status: "Coming Soon",
  },
  {
    image: futureCommunity,
    title: "Learning Communities",
    description: "Connect with fellow STEM enthusiasts and educators worldwide",
    status: "Coming Soon",
  },
];

export const FutureVision = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback((index: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex(index);
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating]);

  const nextSlide = useCallback(() => {
    goToSlide((activeIndex + 1) % visions.length);
  }, [activeIndex, goToSlide]);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  const getSlidePosition = (index: number) => {
    const diff = index - activeIndex;
    const total = visions.length;
    
    let position = diff;
    if (diff > total / 2) position = diff - total;
    if (diff < -total / 2) position = diff + total;
    
    return position;
  };

  return (
    <section className="section-padding bg-background relative overflow-hidden py-16">
      {/* Background pattern */}
      <div className="absolute inset-0 stem-pattern pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      {/* Decorative elements */}
      <div className="absolute top-1/3 left-10 w-24 h-24 bg-primary/5 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-secondary/5 rounded-full blur-2xl pointer-events-none" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-10">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
            Coming Soon
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            The <span className="text-gradient-primary">Future</span> with SparrowG
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our vision extends beyond kits. We're building a complete ecosystem for STEM learning.
          </p>
        </div>

        {/* 3D Carousel */}
        <div className="relative h-[320px] lg:h-[280px] flex items-center justify-center">
          {visions.map((vision, index) => {
            const position = getSlidePosition(index);
            const isActive = position === 0;
            const isPrev = position === -1;
            const isNext = position === 1;
            const isVisible = Math.abs(position) <= 1;
            
            return (
              <div
                key={index}
                onClick={() => !isActive && goToSlide(index)}
                className={`absolute transition-all duration-500 ease-out cursor-pointer ${
                  !isVisible ? 'opacity-0 pointer-events-none' : ''
                }`}
                style={{
                  transform: isActive 
                    ? 'translateX(0) scale(1)' 
                    : isPrev 
                      ? 'translateX(-70%) scale(0.7)' 
                      : isNext 
                        ? 'translateX(70%) scale(0.7)'
                        : position < -1
                          ? 'translateX(-120%) scale(0.5)'
                          : 'translateX(120%) scale(0.5)',
                  zIndex: isActive ? 30 : isPrev || isNext ? 20 : 10,
                  opacity: isActive ? 1 : isPrev || isNext ? 0.6 : 0,
                }}
              >
                <Card 
                  variant="glass" 
                  className={`w-[280px] lg:w-[400px] overflow-hidden transition-shadow duration-500 ${
                    isActive ? 'shadow-2xl' : 'shadow-lg'
                  }`}
                >
                  <CardContent className="p-0">
                    {/* Image */}
                    <div className="relative h-36 lg:h-44 overflow-hidden bg-gradient-to-br from-muted/30 to-muted/10">
                      <img 
                        src={vision.image} 
                        alt={vision.title}
                        className="w-full h-full object-contain p-4 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                      <span className="absolute bottom-2 left-2 inline-block px-2.5 py-1 text-xs font-semibold bg-primary/90 text-primary-foreground rounded-full">
                        {vision.status}
                      </span>
                    </div>
                    
                    {/* Content */}
                    <div className="p-4 text-center">
                      <h3 className="text-base lg:text-lg font-bold mb-1.5">{vision.title}</h3>
                      {isActive && (
                        <p className="text-xs lg:text-sm text-muted-foreground leading-relaxed">
                          {vision.description}
                        </p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {visions.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                activeIndex === index
                  ? "bg-primary w-6"
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
