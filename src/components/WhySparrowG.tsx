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
    <section id="why" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Why <span className="text-gradient-primary">SparrowG</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're committed to making STEM education accessible, engaging, and impactful
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card
                key={index}
                variant="elevated"
                className="group cursor-pointer"
              >
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 rounded-2xl ${feature.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
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
