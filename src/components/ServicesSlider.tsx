import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Box, Glasses, Users, Gift, ArrowRight, CheckCircle } from "lucide-react";

const services = [
  {
    id: 1,
    title: "STEM Kits",
    description: "Hands-on learning kits that bring science, technology, engineering, and math to life. Build robots, circuits, and science projects at home or school.",
    icon: Box,
    color: "bg-science/10 text-science",
    gradient: "from-science/20 to-science/5",
    audience: ["Parents", "Schools"],
    outcomes: ["Problem-solving skills", "Scientific thinking", "Creativity boost"],
    features: ["Age 5-16 range", "100+ components", "Video guides", "Safe materials"],
  },
  {
    id: 2,
    title: "AR/VR Learning",
    description: "Immersive virtual and augmented reality experiences that bring abstract concepts to life. Explore virtual labs and visualize complex ideas in 3D.",
    icon: Glasses,
    color: "bg-technology/10 text-technology",
    gradient: "from-technology/20 to-technology/5",
    audience: ["Schools", "Corporates"],
    outcomes: ["Concept visualization", "Engagement increase", "Memory retention"],
    features: ["Virtual labs", "3D simulations", "Multi-user mode", "Progress tracking"],
  },
  {
    id: 3,
    title: "Workshops",
    description: "Expert-led interactive sessions for schools, communities, and corporate teams. Hands-on learning with real-world applications and industry mentors.",
    icon: Users,
    color: "bg-engineering/10 text-engineering",
    gradient: "from-engineering/20 to-engineering/5",
    audience: ["Schools", "Corporates"],
    outcomes: ["Team collaboration", "Practical skills", "Industry exposure"],
    features: ["Certified trainers", "Custom curriculum", "Hands-on projects", "Certificates"],
  },
  {
    id: 4,
    title: "Corporate Gifting",
    description: "Unique STEM-themed gifts that educate and inspire. Custom-branded learning kits perfect for employee engagement, client gifts, and CSR initiatives.",
    icon: Gift,
    color: "bg-mathematics/10 text-mathematics",
    gradient: "from-mathematics/20 to-mathematics/5",
    audience: ["Corporates"],
    outcomes: ["Brand visibility", "Educational impact", "Memorable gifting"],
    features: ["Custom branding", "Bulk orders", "Pan-India delivery", "Gift packaging"],
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-gradient-subtle overflow-hidden relative">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
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

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <Card
                key={service.id}
                variant="elevated"
                className={`group hover-lift bg-gradient-to-br ${service.gradient}`}
              >
                <CardContent className="p-8 lg:p-10">
                  <div className="flex items-start gap-6">
                    <div className={`w-16 h-16 lg:w-20 lg:h-20 rounded-2xl ${service.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300`}>
                      <IconComponent className="w-8 h-8 lg:w-10 lg:h-10" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {service.audience.map((aud, i) => (
                          <span key={i} className="text-xs font-medium px-2 py-1 rounded-full bg-primary/10 text-primary">
                            {aud}
                          </span>
                        ))}
                      </div>
                      
                      <h3 className="text-xl lg:text-2xl font-bold mb-3">{service.title}</h3>
                      <p className="text-muted-foreground leading-relaxed mb-5 text-base">
                        {service.description}
                      </p>

                      {/* Outcomes */}
                      <div className="mb-5">
                        <p className="text-sm font-semibold mb-2">Learning Outcomes:</p>
                        <div className="flex flex-wrap gap-2">
                          {service.outcomes.map((outcome, i) => (
                            <span key={i} className="flex items-center gap-1 text-xs text-muted-foreground">
                              <CheckCircle className="w-3 h-3 text-primary" />
                              {outcome}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Features */}
                      <div className="grid grid-cols-2 gap-2 mb-6">
                        {service.features.map((feature, i) => (
                          <span key={i} className="text-xs text-muted-foreground flex items-center gap-1">
                            <span className="w-1 h-1 rounded-full bg-primary" />
                            {feature}
                          </span>
                        ))}
                      </div>

                      <Button variant="outline" className="group/btn hover-lift">
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export { ServicesSection as ServicesSlider };
