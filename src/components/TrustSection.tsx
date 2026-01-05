import { Card, CardContent } from "@/components/ui/card";
import { Building2, GraduationCap, Award, TrendingUp } from "lucide-react";

const stats = [
  {
    icon: Building2,
    value: "50M+",
    label: "Learning Components",
    description: "Delivered across kits worldwide",
  },
  {
    icon: GraduationCap,
    value: "500+",
    label: "Partner Schools",
    description: "Across India and growing",
  },
  {
    icon: Award,
    value: "100K+",
    label: "Students Trained",
    description: "Through workshops & programs",
  },
  {
    icon: TrendingUp,
    value: "95%",
    label: "Satisfaction Rate",
    description: "From parents & educators",
  },
];

const partners = [
  { name: "CBSE", logo: "🏫" },
  { name: "ICSE", logo: "📚" },
  { name: "State Boards", logo: "🎓" },
  { name: "IIT Alumni", logo: "🔬" },
  { name: "T-Works", logo: "🏭" },
  { name: "EdTech Partners", logo: "💡" },
];

const caseStudies = [
  {
    title: "Delhi Public School Network",
    metric: "40% increase",
    description: "in STEM engagement after implementing SparrowG labs",
    type: "School",
  },
  {
    title: "Corporate Team Building",
    metric: "500+ kits",
    description: "delivered for Fortune 500 company's innovation day",
    type: "Corporate",
  },
  {
    title: "Community Outreach",
    metric: "10,000 students",
    description: "reached through free workshop programs",
    type: "Impact",
  },
];

export const TrustSection = () => {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 stem-pattern opacity-20 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Stats */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">
            Our Impact
          </p>
          <h2 className="section-title mb-6">
            Trusted by <span className="text-gradient-primary">Educators</span> Nationwide
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-20 max-w-5xl mx-auto">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card key={index} variant="elevated" className="text-center hover-lift">
                <CardContent className="p-6 lg:p-8">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-7 h-7" />
                  </div>
                  <p className="text-3xl lg:text-4xl font-bold text-foreground mb-1">{stat.value}</p>
                  <p className="text-sm font-semibold text-foreground mb-1">{stat.label}</p>
                  <p className="text-xs text-muted-foreground">{stat.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Partner Logos */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-8">
            Trusted by Schools & Partners
          </p>
          <div className="flex flex-wrap justify-center gap-6 lg:gap-10">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity duration-300"
              >
                <span className="text-4xl">{partner.logo}</span>
                <span className="text-xs font-medium text-muted-foreground">{partner.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Case Studies */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-xl font-bold text-center mb-8">Success Stories</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {caseStudies.map((study, index) => (
              <Card key={index} variant="glass" className="hover-lift">
                <CardContent className="p-6 lg:p-8">
                  <span className="inline-block px-3 py-1 text-xs font-semibold bg-primary/10 text-primary rounded-full mb-4">
                    {study.type}
                  </span>
                  <p className="text-2xl font-bold text-primary mb-2">{study.metric}</p>
                  <h4 className="font-semibold mb-2">{study.title}</h4>
                  <p className="text-sm text-muted-foreground">{study.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
