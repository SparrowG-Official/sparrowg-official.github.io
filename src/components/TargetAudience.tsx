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
    <section className="section-padding bg-gradient-subtle relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-20 right-10 w-48 h-48 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-secondary uppercase tracking-widest mb-4">
            Our Community
          </p>
          <h2 className="section-title mb-6">
            Who We <span className="text-gradient-warm">Serve</span>
          </h2>
          <p className="section-subtitle">
            Tailored solutions for every stakeholder in education
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {audiences.map((audience, index) => {
            const IconComponent = audience.icon;
            return (
              <Card
                key={index}
                variant="elevated"
                className="group hover-lift"
              >
                <CardContent className="p-8 lg:p-10">
                  <div className="flex items-start gap-6">
                    <div className={`w-16 h-16 lg:w-20 lg:h-20 rounded-2xl ${audience.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300`}>
                      <IconComponent className="w-8 h-8 lg:w-10 lg:h-10" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl lg:text-2xl font-bold mb-3">{audience.title}</h3>
                      <p className="text-muted-foreground leading-relaxed mb-5 text-base">
                        {audience.description}
                      </p>
                      <Button variant="link" className="p-0 h-auto text-primary font-semibold group/btn">
                        {audience.cta}
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
