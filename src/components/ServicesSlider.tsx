import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Box, Glasses, Users, Gift, ArrowRight, CheckCircle } from "lucide-react";

const services = [
  {
    id: 1,
    title: "STEM Kits",
    subtitle: "Hands-on learning that sparks curiosity",
    description: "Transform abstract concepts into tangible experiences with cutting-edge STEM kits designed for ages 7-15.",
    icon: Box,
    color: "bg-science/10 text-science",
    gradient: "from-science/20 to-science/5",
    audience: ["Parents", "Schools"],
    features: ["Age 7-15 years", "200+ components", "Video guides", "Safe materials"],
    highlights: ["Build robots", "Create circuits", "Science experiments"],
  },
  {
    id: 2,
    title: "AR/VR Learning",
    subtitle: "Immersive education beyond textbooks",
    description: "Transform abstract concepts into multi-dimensional experiences with cutting-edge AR/VR solutions. Explore one-of-its-kind metaverse of learning.",
    icon: Glasses,
    color: "bg-technology/10 text-technology",
    gradient: "from-technology/20 to-technology/5",
    audience: ["Schools", "Corporates"],
    features: ["Virtual labs", "3D simulations", "Multi-user mode", "Progress tracking"],
    highlights: ["3D anatomy exploration", "Space journeys", "Virtual chemistry"],
  },
  {
    id: 3,
    title: "Workshops",
    subtitle: "Learn from industry professionals",
    description: "Expert-led interactive sessions for schools, communities, and corporate teams with real-world applications.",
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
    subtitle: "Educational branded gifting solutions",
    description: "Unique STEM-themed gifts for employee engagement, client appreciation, and CSR initiatives",
    icon: Gift,
    color: "bg-mathematics/10 text-mathematics",
    gradient: "from-mathematics/20 to-mathematics/5",
    audience: ["Corporates"],
    features: ["Custom branding", "Bulk orders", "Pan-India delivery", "Gift packaging"],
    highlights: ["Brand visibility", "Educational impact", "Memorable gifting"],
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
            Our <span className="text-gradient-primary">Products</span>
          </h2>
          <p className="section-subtitle">
            Comprehensive STEM solutions designed for maximum learning impact
          </p>
        </div>

        {/* Services Grid - Vertical Layout */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <Card
                key={service.id}
                variant="elevated"
                className="group hover-lift overflow-hidden"
              >
                {/* Image/Icon Section */}
                <div className={`relative h-64 bg-gradient-to-br ${service.gradient} flex items-center justify-center`}>
                  <div className={`w-20 h-20 rounded-2xl ${service.color} flex items-center justify-center group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300`}>
                    <IconComponent className="w-12 h-12" />
                  </div>
                </div>

                <CardContent className="p-6 lg:p-8">
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
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

                  <Button variant="outline" className="group/btn hover-lift w-full">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
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
