import { useState, useEffect, useCallback } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Box, Glasses, Users, Gift, 
  CheckCircle, ArrowRight,
  Clock, Target, Award, Zap
} from "lucide-react";
import { Link } from "react-router-dom";
import serviceStemKits from "@/assets/service-stem-kits.png";
import serviceArvr from "@/assets/service-arvr.png";
import serviceWorkshops from "@/assets/service-workshops.png";
import serviceGifting from "@/assets/service-gifting.png";

const services = [
  {
    id: 1,
    title: "STEM Learning Kits",
    tagline: "Hands-on learning that sparks curiosity",
    description: "Our comprehensive STEM kits bring science, technology, engineering, and math to life through hands-on projects designed by educators and engineers.",
    image: serviceStemKits,
    icon: Box,
    color: "bg-science/10 text-science",
    gradient: "from-science/20 to-science/5",
    audience: ["Parents", "Schools"],
    features: ["Age 7-15 range", "100+ components", "Video guides", "Safe materials"],
    highlights: ["Build robots", "Create circuits", "Science experiments"],
  },
  {
    id: 2,
    title: "AR/VR Learning",
    tagline: "Immersive education beyond textbooks",
    description: "Transform abstract concepts into tangible experiences with cutting-edge AR/VR solutions. Explore virtual labs and witness history firsthand.",
    image: serviceArvr,
    icon: Glasses,
    color: "bg-technology/10 text-technology",
    gradient: "from-technology/20 to-technology/5",
    audience: ["Schools", "Corporates"],
    features: ["Virtual labs", "3D simulations", "Multi-user mode", "Progress tracking"],
    highlights: ["3D anatomy exploration", "Space journeys", "Virtual chemistry"],
  },
  {
    id: 3,
    title: "Expert Workshops",
    tagline: "Learn from industry professionals",
    description: "Interactive workshops by certified trainers. Perfect for schools and corporate teams seeking hands-on STEM learning with mentorship.",
    image: serviceWorkshops,
    icon: Users,
    color: "bg-engineering/10 text-engineering",
    gradient: "from-engineering/20 to-engineering/5",
    audience: ["Schools", "Corporates"],
    features: ["Certified trainers", "Custom curriculum", "Hands-on projects", "Certificates"],
    highlights: ["Team collaboration", "Practical skills", "Industry exposure"],
  },
  {
    id: 4,
    title: "Corporate Gifting",
    tagline: "Gifts that educate and inspire",
    description: "Unique STEM-themed gifts for employee engagement, client appreciation, and CSR initiatives with measurable educational impact.",
    image: serviceGifting,
    icon: Gift,
    color: "bg-mathematics/10 text-mathematics",
    gradient: "from-mathematics/20 to-mathematics/5",
    audience: ["Corporates"],
    features: ["Custom branding", "Bulk orders", "Pan-India delivery", "Gift packaging"],
    highlights: ["Brand visibility", "Educational impact", "Memorable gifting"],
  },
];

export const ServicesCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback((index: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex(index);
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating]);

  const nextSlide = useCallback(() => {
    goToSlide((activeIndex + 1) % services.length);
  }, [activeIndex, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide((activeIndex - 1 + services.length) % services.length);
  }, [activeIndex, goToSlide]);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  const getSlidePosition = (index: number) => {
    const diff = index - activeIndex;
    const total = services.length;
    
    // Handle wrap-around
    let position = diff;
    if (diff > total / 2) position = diff - total;
    if (diff < -total / 2) position = diff + total;
    
    return position;
  };

  return (
    <section id="services" className="section-padding bg-gradient-subtle overflow-hidden relative py-16">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
            What We Offer
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Our <span className="text-gradient-primary">Services</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive STEM solutions designed for maximum learning impact
          </p>
        </div>

        {/* 3D Carousel */}
        <div className="relative h-[520px] lg:h-[480px] flex items-center justify-center perspective-1000">
          {services.map((service, index) => {
            const position = getSlidePosition(index);
            const isActive = position === 0;
            const isPrev = position === -1;
            const isNext = position === 1;
            const isVisible = Math.abs(position) <= 1;
            
            const IconComponent = service.icon;
            
            return (
              <div
                key={service.id}
                onClick={() => !isActive && goToSlide(index)}
                className={`absolute transition-all duration-500 ease-out cursor-pointer ${
                  !isVisible ? 'opacity-0 pointer-events-none' : ''
                }`}
                style={{
                  transform: isActive 
                    ? 'translateX(0) scale(1) rotateY(0deg)' 
                    : isPrev 
                      ? 'translateX(-85%) scale(0.75) rotateY(15deg)' 
                      : isNext 
                        ? 'translateX(85%) scale(0.75) rotateY(-15deg)'
                        : position < -1
                          ? 'translateX(-150%) scale(0.5) rotateY(30deg)'
                          : 'translateX(150%) scale(0.5) rotateY(-30deg)',
                  zIndex: isActive ? 30 : isPrev || isNext ? 20 : 10,
                  opacity: isActive ? 1 : isPrev || isNext ? 0.7 : 0,
                }}
              >
                <Card
                  variant="elevated"
                  className={`w-[340px] lg:w-[580px] overflow-hidden transition-shadow duration-500 ${
                    isActive ? 'shadow-2xl' : 'shadow-lg'
                  }`}
                >
                  <CardContent className="p-0">
                    <div className="flex flex-col">
                      {/* Image/Icon Section - Top */}
                      <div className={`relative h-56 bg-gradient-to-br ${service.gradient} flex items-center justify-center`}>
                        <div className={`w-20 h-20 rounded-2xl ${service.color} flex items-center justify-center group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300`}>
                          <IconComponent className="w-12 h-12" />
                        </div>
                        {/* Floating badges */}
                        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                          {service.audience.map((aud, i) => (
                            <Badge key={i} className="bg-background/90 text-foreground text-xs backdrop-blur-sm">
                              {aud}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Content Section - Bottom */}
                      <div className="p-5 lg:p-6">
                        {/* Header */}
                        <div className="mb-3">
                          <h3 className="text-xl lg:text-2xl font-bold leading-tight mb-2">{service.title}</h3>
                          <p className="text-sm text-primary font-medium">{service.tagline}</p>
                        </div>

                        {/* Description - only show on active */}
                        {isActive && (
                          <>
                            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                              {service.description}
                            </p>

                            {/* Features */}
                            <div className="flex flex-wrap gap-2 mb-4">
                              {service.features.map((feature, i) => (
                                <span key={i} className="text-xs px-3 py-1 rounded-full bg-muted text-muted-foreground">
                                  {feature}
                                </span>
                              ))}
                            </div>

                            {/* Learn More Button */}
                            <Link to="/programs">
                              <Button variant="outline" className="group/btn hover-lift w-full">
                                Learn More
                                <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                              </Button>
                            </Link>
                          </>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-muted/50 text-muted-foreground hover:bg-muted"
                }`}
              >
                <IconComponent className="w-3.5 h-3.5" />
                <span className={`text-xs font-medium transition-all ${activeIndex === index ? 'max-w-20' : 'max-w-0 overflow-hidden'}`}>
                  {activeIndex === index && service.title.split(" ")[0]}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
