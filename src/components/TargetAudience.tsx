import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, GraduationCap, School, Briefcase, ArrowRight } from "lucide-react";

const audiences = [
  {
    icon: Heart,
    title: "Parents",
    description: "Give your children the gift of curiosity. Our kits and programs spark a lifelong love for learning.",
    cta: "Shop for Kids",
    color: "bg-destructive/10 text-destructive",
  },
  {
    icon: GraduationCap,
    title: "Teachers",
    description: "Enhance your classroom with ready-to-use STEM activities that align with learning objectives.",
    cta: "View Resources",
    color: "bg-science/10 text-science",
  },
  {
    icon: School,
    title: "Schools",
    description: "Partner with us for comprehensive STEM programs, workshops, and curriculum integration.",
    cta: "School Programs",
    color: "bg-technology/10 text-technology",
  },
  {
    icon: Briefcase,
    title: "Corporates",
    description: "Inspire your team with innovative gifting solutions and team-building STEM activities.",
    cta: "Corporate Solutions",
    color: "bg-engineering/10 text-engineering",
  },
];

export const TargetAudience = () => {
  return (
    <section className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Who We <span className="text-gradient-warm">Serve</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tailored solutions for every stakeholder in education
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {audiences.map((audience, index) => {
            const IconComponent = audience.icon;
            return (
              <Card
                key={index}
                variant="elevated"
                className="group"
              >
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className={`w-14 h-14 rounded-2xl ${audience.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-7 h-7" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">{audience.title}</h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {audience.description}
                      </p>
                      <Button variant="link" className="p-0 h-auto text-primary font-semibold group/btn">
                        {audience.cta}
                        <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
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
