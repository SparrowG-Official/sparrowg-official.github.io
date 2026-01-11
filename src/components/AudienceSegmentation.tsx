import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, GraduationCap, Briefcase, ArrowRight } from "lucide-react";

const audiences = [
  {
    icon: Heart,
    title: "Parents",
    subtitle: "STEM Kits & Home Learning",
    description: "Give your children the gift of curiosity with our hands-on STEM kits designed for home use. Watch them explore, build, and discover science through play.",
    benefits: ["Age-appropriate kits", "Safe materials", "Guided activities", "Progress tracking"],
    cta: "Explore Kits for Kids",
    link: "#products",
    color: "bg-destructive/10 text-destructive border-destructive/20",
    gradient: "from-destructive/10 to-destructive/5",
  },
  {
    icon: GraduationCap,
    title: "Schools & Teachers",
    subtitle: "Curriculum, Labs & Workshops",
    description: "Transform your classroom with curriculum-aligned STEM programs. From interactive labs to teacher training, we provide complete solutions for educational institutions.",
    benefits: ["CBSE/ICSE aligned", "Lab setup", "Teacher training", "Assessment tools"],
    cta: "School Programs",
    link: "#services",
    color: "bg-science/10 text-science border-science/20",
    gradient: "from-science/10 to-science/5",
  },
  {
    icon: Briefcase,
    title: "Corporates",
    subtitle: "Gifting & Team-Building",
    description: "Stand out with meaningful corporate gifts that educate and inspire. Our custom-branded STEM kits and team workshops create lasting impressions.",
    benefits: ["Custom branding", "Bulk orders", "Team workshops", "CSR programs"],
    cta: "Corporate Solutions",
    link: "#contact",
    color: "bg-engineering/10 text-engineering border-engineering/20",
    gradient: "from-engineering/10 to-engineering/5",
  },
];

export const AudienceSegmentation = () => {
  const scrollToSection = (link: string) => {
    const element = document.querySelector(link);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 dot-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title mb-6">
            Built for <span className="text-gradient-primary">Every Learner</span>
          </h2>
          <p className="section-subtitle">
            Tailored STEM solutions for every learner and organization
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {audiences.map((audience, index) => {
            const IconComponent = audience.icon;
            return (
              <Card
                key={index}
                variant="elevated"
                className={`group hover-lift border-2 bg-gradient-to-br ${audience.gradient}`}
              >
                <CardContent className="p-8 lg:p-10">
                  <div className={`w-16 h-16 lg:w-20 lg:h-20 rounded-2xl ${audience.color} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300`}>
                    <IconComponent className="w-8 h-8 lg:w-10 lg:h-10" />
                  </div>
                  
                  <h3 className="text-2xl lg:text-3xl font-bold mb-2">{audience.title}</h3>
                  <p className="text-sm font-medium text-primary mb-4">{audience.subtitle}</p>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6 text-base">
                    {audience.description}
                  </p>

                  <ul className="space-y-2 mb-8">
                    {audience.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {benefit}
                      </li>
                    ))}
                  </ul>

                  <Button 
                    variant="outline" 
                    className="w-full group/btn hover-lift"
                    onClick={() => scrollToSection(audience.link)}
                  >
                    {audience.cta}
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
