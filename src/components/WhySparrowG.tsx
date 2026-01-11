import { Card, CardContent } from "@/components/ui/card";
import { Hand, BookOpen, Rocket, Building2 } from "lucide-react";

const features = [
  {
    icon: Hand,
    title: "Hands-on Learning",
    description: "Learning by doing with tactile, interactive experiences that make concepts stick.",
    color: "bg-science/10 text-science",
  },
  {
    icon: BookOpen,
    title: "Curriculum-Aligned",
    description: "All our programs are designed to complement and enhance school curricula.",
    color: "bg-technology/10 text-technology",
  },
  {
    icon: Rocket,
    title: "Future Skills Ready",
    description: "Building critical thinking, problem-solving, and creativity for tomorrow's challenges.",
    color: "bg-engineering/10 text-engineering",
  },
  {
    icon: Building2,
    title: "Schools & Corporates",
    description: "Tailored solutions for educational institutions and corporate learning programs.",
    color: "bg-mathematics/10 text-mathematics",
  },
];

export const WhySparrowG = () => {
  return (
    <section id="why" className="section-padding bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 dot-pattern opacity-50 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          {/* <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">
            Our Approach
          </p> */}
          <h2 className="section-title mb-6">
            Why <span className="text-gradient-primary">SparrowG</span>?
          </h2>
          <p className="section-subtitle">
            We're committed to making STEM education Accessible. Engaging. Impactful.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card
                key={index}
                variant="elevated"
                className="group cursor-pointer hover-lift"
              >
                <CardContent className="p-8 lg:p-10 text-center">
                  <div className={`w-16 h-16 lg:w-20 lg:h-20 rounded-2xl ${feature.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    <IconComponent className="w-8 h-8 lg:w-10 lg:h-10" />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-base">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
