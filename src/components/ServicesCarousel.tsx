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
    audience: ["Parents", "Schools"],
    ageRange: "Ages 5-16",
    highlights: [
      { icon: Target, text: "100+ Project modules" },
      { icon: Zap, text: "150+ Components" },
      { icon: Clock, text: "Video tutorials" },
      { icon: Award, text: "Certificates" },
    ],
    features: [
      "Robotics & Electronics",
      "Coding with Arduino",
      "Physics concepts",
      "Chemistry experiments",
    ],
    outcomes: ["Problem-solving", "Scientific thinking", "Creativity"],
    pricing: "₹1,499",
  },
  {
    id: 2,
    title: "AR/VR Learning",
    tagline: "Immersive education beyond textbooks",
    description: "Transform abstract concepts into tangible experiences with cutting-edge AR/VR solutions. Explore virtual labs and witness history firsthand.",
    image: serviceArvr,
    icon: Glasses,
    color: "bg-technology/10 text-technology",
    audience: ["Schools", "Corporates"],
    highlights: [
      { icon: Target, text: "50+ VR modules" },
      { icon: Zap, text: "Virtual labs" },
      { icon: Clock, text: "Flexible scheduling" },
      { icon: Award, text: "Progress tracking" },
    ],
    features: [
      "3D anatomy exploration",
      "Virtual chemistry",
      "Space journeys",
      "Historical tours",
    ],
    outcomes: ["Concept visualization", "Memory retention", "Engagement"],
    pricing: "₹24,999/sem",
  },
  {
    id: 3,
    title: "Expert Workshops",
    tagline: "Learn from industry professionals",
    description: "Interactive workshops by certified trainers. Perfect for schools and corporate teams seeking hands-on STEM learning with mentorship.",
    image: serviceWorkshops,
    icon: Users,
    color: "bg-engineering/10 text-engineering",
    audience: ["Schools", "Corporates"],
    highlights: [
      { icon: Target, text: "Custom curriculum" },
      { icon: Zap, text: "Hands-on projects" },
      { icon: Clock, text: "Flexible formats" },
      { icon: Award, text: "Certifications" },
    ],
    features: [
      "Robotics & automation",
      "AI & ML basics",
      "IoT & smart devices",
      "Design thinking",
    ],
    outcomes: ["Practical skills", "Team collaboration", "Industry exposure"],
    pricing: "₹4,999/session",
  },
  {
    id: 4,
    title: "Corporate Gifting",
    tagline: "Gifts that educate and inspire",
    description: "Unique STEM-themed gifts for employee engagement, client appreciation, and CSR initiatives with measurable educational impact.",
    image: serviceGifting,
    icon: Gift,
    color: "bg-mathematics/10 text-mathematics",
    audience: ["Corporates"],
    highlights: [
      { icon: Target, text: "Brand customization" },
      { icon: Zap, text: "Pan-India delivery" },
      { icon: Clock, text: "2-4 weeks" },
      { icon: Award, text: "CSR reporting" },
    ],
    features: [
      "Family STEM kits",
      "Executive gadgets",
      "Team challenges",
      "Premium packaging",
    ],
    outcomes: ["Brand visibility", "Memorable gifting", "Educational impact"],
    pricing: "₹999/unit",
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
        <div className="text-center mb-10">
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
        <div className="relative h-[420px] lg:h-[380px] flex items-center justify-center perspective-1000">
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
                  className={`w-[320px] lg:w-[520px] overflow-hidden transition-shadow duration-500 ${
                    isActive ? 'shadow-2xl' : 'shadow-lg'
                  }`}
                >
                  <CardContent className="p-0">
                    <div className="flex flex-col lg:flex-row">
                      {/* Image Section */}
                      <div className="relative h-40 lg:h-auto lg:w-48 flex-shrink-0 overflow-hidden bg-gradient-to-br from-muted/50 to-muted">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-contain p-4"
                        />
                        {/* Floating badges */}
                        <div className="absolute top-2 left-2 flex flex-wrap gap-1">
                          {service.audience.map((aud, i) => (
                            <Badge key={i} className="bg-background/90 text-foreground text-xs backdrop-blur-sm">
                              {aud}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Content Section */}
                      <div className="p-4 lg:p-5 flex-1">
                        {/* Header */}
                        <div className="flex items-start gap-3 mb-3">
                          <div className={`w-10 h-10 rounded-xl ${service.color} flex items-center justify-center flex-shrink-0`}>
                            <IconComponent className="w-5 h-5" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="text-lg font-bold leading-tight">{service.title}</h3>
                            <p className="text-xs text-primary font-medium">{service.tagline}</p>
                          </div>
                        </div>

                        {/* Description - only show on active */}
                        {isActive && (
                          <>
                            <p className="text-sm text-muted-foreground leading-relaxed mb-3 line-clamp-2">
                              {service.description}
                            </p>

                            {/* Features Grid */}
                            <div className="grid grid-cols-2 gap-1.5 mb-3">
                              {service.features.map((feature, i) => (
                                <div key={i} className="flex items-start gap-1.5">
                                  <CheckCircle className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0" />
                                  <span className="text-xs text-muted-foreground">{feature}</span>
                                </div>
                              ))}
                            </div>

                            {/* Outcomes */}
                            <div className="flex flex-wrap gap-1.5 mb-3">
                              {service.outcomes.map((outcome, i) => (
                                <Badge key={i} variant="outline" className="text-xs bg-background/50">
                                  {outcome}
                                </Badge>
                              ))}
                            </div>

                            {/* Footer */}
                            <div className="flex items-center justify-between pt-3 border-t border-border/50">
                              <div>
                                <p className="text-xs text-muted-foreground">From</p>
                                <p className="text-lg font-bold text-primary">{service.pricing}</p>
                              </div>
                              <Link to="/programs">
                                <Button size="sm" className="group">
                                  Explore
                                  <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" />
                                </Button>
                              </Link>
                            </div>
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
