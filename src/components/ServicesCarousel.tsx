import { useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Box, Glasses, Users, Gift, 
  ChevronLeft, ChevronRight, 
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
    description: "Our comprehensive STEM kits bring science, technology, engineering, and math to life through hands-on projects. Each kit is carefully designed by educators and engineers to deliver age-appropriate challenges that build real-world skills.",
    image: serviceStemKits,
    icon: Box,
    color: "bg-science/10 text-science",
    gradient: "from-science/20 to-science/5",
    audience: ["Parents", "Schools"],
    ageRange: "Ages 5-16",
    highlights: [
      { icon: Target, text: "100+ Project-based learning modules" },
      { icon: Zap, text: "150+ High-quality components" },
      { icon: Clock, text: "Self-paced video tutorials" },
      { icon: Award, text: "Certificates on completion" },
    ],
    features: [
      "Robotics & Electronics basics",
      "Coding with Arduino & Scratch",
      "Physics & engineering concepts",
      "Safe chemistry experiments",
      "3D spatial thinking puzzles",
      "CBSE curriculum aligned",
    ],
    outcomes: [
      "Problem-solving skills",
      "Scientific thinking",
      "Creativity & innovation",
      "Confidence building",
    ],
    pricing: "Starting from ₹1,499",
  },
  {
    id: 2,
    title: "AR/VR Learning Experiences",
    tagline: "Immersive education beyond textbooks",
    description: "Transform abstract concepts into tangible experiences with our cutting-edge AR/VR learning solutions. Students can explore virtual labs, dissect molecules, travel through space, and witness historical events firsthand.",
    image: serviceArvr,
    icon: Glasses,
    color: "bg-technology/10 text-technology",
    gradient: "from-technology/20 to-technology/5",
    audience: ["Schools", "Corporates"],
    highlights: [
      { icon: Target, text: "50+ Immersive learning modules" },
      { icon: Zap, text: "Virtual science laboratories" },
      { icon: Clock, text: "Flexible scheduling" },
      { icon: Award, text: "Progress tracking dashboard" },
    ],
    features: [
      "3D anatomy & biology exploration",
      "Virtual chemistry experiments",
      "Space & astronomy journeys",
      "Historical site explorations",
      "Physics simulations",
      "Multi-user collaboration",
    ],
    outcomes: [
      "Concept visualization",
      "Memory retention boost",
      "Engagement increase",
      "Safe experimentation",
    ],
    pricing: "From ₹24,999/semester",
  },
  {
    id: 3,
    title: "Expert-Led Workshops",
    tagline: "Learn from industry professionals",
    description: "Interactive workshops conducted by certified trainers and industry experts. Perfect for schools, community centers, and corporate teams seeking hands-on STEM learning with real-world applications and mentorship.",
    image: serviceWorkshops,
    icon: Users,
    color: "bg-engineering/10 text-engineering",
    gradient: "from-engineering/20 to-engineering/5",
    audience: ["Schools", "Corporates"],
    highlights: [
      { icon: Target, text: "Customizable curriculum" },
      { icon: Zap, text: "Hands-on project building" },
      { icon: Clock, text: "Half-day to multi-day formats" },
      { icon: Award, text: "Industry certifications" },
    ],
    features: [
      "Robotics & automation",
      "AI & machine learning basics",
      "IoT & smart devices",
      "Design thinking sessions",
      "Science fair preparation",
      "STEM career exploration",
    ],
    outcomes: [
      "Practical skill building",
      "Team collaboration",
      "Industry exposure",
      "Competition readiness",
    ],
    pricing: "From ₹4,999/session",
  },
  {
    id: 4,
    title: "Corporate Gifting Solutions",
    tagline: "Gifts that educate and inspire",
    description: "Unique STEM-themed gifts that make a lasting impression. Our custom-branded learning kits are perfect for employee engagement, client appreciation, festive gifting, and CSR initiatives with measurable educational impact.",
    image: serviceGifting,
    icon: Gift,
    color: "bg-mathematics/10 text-mathematics",
    gradient: "from-mathematics/20 to-mathematics/5",
    audience: ["Corporates"],
    highlights: [
      { icon: Target, text: "Full brand customization" },
      { icon: Zap, text: "Pan-India delivery" },
      { icon: Clock, text: "2-4 weeks turnaround" },
      { icon: Award, text: "CSR impact reporting" },
    ],
    features: [
      "Family STEM bonding kits",
      "Executive desk gadgets",
      "Team building challenges",
      "Kids of employees kits",
      "Client appreciation sets",
      "Premium gift packaging",
    ],
    outcomes: [
      "Brand visibility",
      "Memorable gifting",
      "Educational impact",
      "Employee satisfaction",
    ],
    pricing: "From ₹999/unit (min. 25)",
  },
];

export const ServicesCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: "start",
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback((index: number) => {
    if (emblaApi) emblaApi.scrollTo(index);
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  // Subscribe to select event
  if (emblaApi) {
    emblaApi.on("select", onSelect);
  }

  return (
    <section id="services" className="section-padding bg-gradient-subtle overflow-hidden relative">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">
            What We Offer
          </p>
          <h2 className="section-title mb-6">
            Our <span className="text-gradient-primary">Services</span>
          </h2>
          <p className="section-subtitle">
            Comprehensive STEM solutions designed for maximum learning impact
          </p>
        </div>

        {/* Service Indicators */}
        <div className="flex justify-center gap-3 mb-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <button
                key={service.id}
                onClick={() => scrollTo(index)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                  selectedIndex === index
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-muted/50 text-muted-foreground hover:bg-muted"
                }`}
              >
                <IconComponent className="w-4 h-4" />
                <span className="hidden sm:inline text-sm font-medium">{service.title.split(" ")[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-8 z-10 w-12 h-12 rounded-full bg-background shadow-elevated border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-200"
            aria-label="Previous service"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-8 z-10 w-12 h-12 rounded-full bg-background shadow-elevated border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-200"
            aria-label="Next service"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Carousel Container */}
          <div className="overflow-hidden mx-4 lg:mx-12" ref={emblaRef}>
            <div className="flex">
              {services.map((service) => {
                const IconComponent = service.icon;
                return (
                  <div key={service.id} className="flex-[0_0_100%] min-w-0 px-2">
                    <Card variant="elevated" className={`overflow-hidden bg-gradient-to-br ${service.gradient}`}>
                      <CardContent className="p-0">
                        <div className="grid lg:grid-cols-2 gap-0">
                          {/* Image Section */}
                          <div className="relative h-64 lg:h-auto lg:min-h-[500px] overflow-hidden">
                            <img
                              src={service.image}
                              alt={service.title}
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/20 lg:bg-gradient-to-l lg:from-background/10 lg:to-transparent" />
                            
                            {/* Floating badge */}
                            <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                              {service.audience.map((aud, i) => (
                                <Badge key={i} className="bg-background/90 text-foreground backdrop-blur-sm">
                                  {aud}
                                </Badge>
                              ))}
                              {service.ageRange && (
                                <Badge variant="secondary" className="bg-primary/90 text-primary-foreground">
                                  {service.ageRange}
                                </Badge>
                              )}
                            </div>
                          </div>

                          {/* Content Section */}
                          <div className="p-8 lg:p-10 flex flex-col">
                            {/* Header */}
                            <div className="flex items-start gap-4 mb-6">
                              <div className={`w-14 h-14 rounded-2xl ${service.color} flex items-center justify-center flex-shrink-0`}>
                                <IconComponent className="w-7 h-7" />
                              </div>
                              <div>
                                <h3 className="text-2xl lg:text-3xl font-bold mb-1">{service.title}</h3>
                                <p className="text-primary font-medium">{service.tagline}</p>
                              </div>
                            </div>

                            {/* Description */}
                            <p className="text-muted-foreground leading-relaxed mb-6">
                              {service.description}
                            </p>

                            {/* Highlights Grid */}
                            <div className="grid grid-cols-2 gap-3 mb-6">
                              {service.highlights.map((highlight, i) => {
                                const HighlightIcon = highlight.icon;
                                return (
                                  <div key={i} className="flex items-center gap-2 text-sm">
                                    <HighlightIcon className="w-4 h-4 text-primary flex-shrink-0" />
                                    <span className="text-muted-foreground">{highlight.text}</span>
                                  </div>
                                );
                              })}
                            </div>

                            {/* Features */}
                            <div className="mb-6">
                              <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide">What's Included</h4>
                              <div className="grid grid-cols-2 gap-2">
                                {service.features.map((feature, i) => (
                                  <div key={i} className="flex items-start gap-2">
                                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                                    <span className="text-sm text-muted-foreground">{feature}</span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Outcomes */}
                            <div className="mb-8">
                              <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide">Learning Outcomes</h4>
                              <div className="flex flex-wrap gap-2">
                                {service.outcomes.map((outcome, i) => (
                                  <Badge key={i} variant="outline" className="bg-background/50">
                                    {outcome}
                                  </Badge>
                                ))}
                              </div>
                            </div>

                            {/* Footer */}
                            <div className="mt-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-border/50">
                              <div>
                                <p className="text-sm text-muted-foreground">Starting from</p>
                                <p className="text-2xl font-bold text-primary">{service.pricing.replace("Starting from ", "").replace("From ", "")}</p>
                              </div>
                              <Link to="/programs">
                                <Button size="lg" className="group shadow-soft">
                                  Explore Program
                                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                </Button>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                selectedIndex === index
                  ? "bg-primary w-8"
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
