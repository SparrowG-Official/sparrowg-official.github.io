import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Rocket, Heart } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Passion for Education",
    description: "We believe every child deserves access to quality STEM education that sparks curiosity.",
  },
  {
    icon: Target,
    title: "Real-World Skills",
    description: "Our programs focus on practical skills that prepare students for tomorrow's challenges.",
  },
  {
    icon: Rocket,
    title: "Innovation First",
    description: "We constantly evolve our offerings with the latest in educational technology.",
  },
];

const roadmapItems = [
  {
    phase: "Now",
    title: "STEM Kits & Workshops",
    description: "Hands-on learning for homes and schools",
    status: "active",
  },
  {
    phase: "2024",
    title: "AR/VR Learning Platform",
    description: "Immersive virtual labs and experiences",
    status: "upcoming",
  },
  {
    phase: "2025",
    title: "Curriculum Integration",
    description: "Complete K-12 STEM curriculum programs",
    status: "planned",
  },
  {
    phase: "Future",
    title: "Learning Ecosystem",
    description: "Community, competitions, and career pathways",
    status: "planned",
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-gradient-subtle relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 dot-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">
            About Us
          </p>
          <h2 className="section-title mb-6">
            The <span className="text-gradient-primary">SparrowG</span> Story
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Founder Story */}
          <Card variant="elevated" className="mb-12">
            <CardContent className="p-8 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div>
                  <h3 className="text-2xl lg:text-3xl font-bold mb-6">
                    Why We Started SparrowG
                  </h3>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      SparrowG was born from a simple observation: traditional education often fails to ignite 
                      the natural curiosity that every child possesses. We saw students memorizing formulas 
                      instead of understanding concepts, learning theories without ever applying them.
                    </p>
                    <p>
                      Founded by a team of educators and engineers, we set out to bridge this gap. 
                      Our mission is not just to teach STEM—it's to redefine how learning happens. 
                      Through hands-on kits, immersive experiences, and expert-led workshops, we bring 
                      science, technology, engineering, and math to life.
                    </p>
                    <p className="font-semibold text-foreground">
                      Today, we're proud to partner with 500+ schools and have delivered over 50 million 
                      learning components to curious minds across India and beyond.
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <div className="aspect-square rounded-3xl overflow-hidden shadow-elevated">
                    <img 
                      src="/images/DSC00838.JPG" 
                      alt="SparrowG team working with students"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-2xl blur-2xl" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card variant="glass" className="hover-lift">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                  <Target className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-bold mb-4">Our Mission</h4>
                <p className="text-muted-foreground leading-relaxed">
                  To make quality STEM education accessible, engaging, and impactful for every 
                  learner—from curious kindergarteners to innovative corporate teams.
                </p>
              </CardContent>
            </Card>
            <Card variant="glass" className="hover-lift">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-2xl bg-secondary/10 text-secondary flex items-center justify-center mb-6">
                  <Eye className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-bold mb-4">Our Vision</h4>
                <p className="text-muted-foreground leading-relaxed">
                  To become India's most trusted STEM education partner, building a complete 
                  ecosystem that nurtures the innovators and problem-solvers of tomorrow.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Values */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} variant="elevated" className="text-center hover-lift">
                  <CardContent className="p-6 lg:p-8">
                    <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-7 h-7 text-accent-foreground" />
                    </div>
                    <h4 className="text-lg font-bold mb-2">{value.title}</h4>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Roadmap */}
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold">Our Roadmap</h3>
            <p className="text-muted-foreground mt-2">Building the future of STEM education</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-4">
            {roadmapItems.map((item, index) => (
              <Card 
                key={index} 
                variant={item.status === "active" ? "elevated" : "default"}
                className={`relative overflow-hidden ${item.status === "active" ? "border-primary" : ""}`}
              >
                <CardContent className="p-6">
                  <span className={`inline-block px-3 py-1 text-xs font-bold rounded-full mb-3 ${
                    item.status === "active" 
                      ? "bg-primary text-primary-foreground" 
                      : "bg-muted text-muted-foreground"
                  }`}>
                    {item.phase}
                  </span>
                  <h4 className="font-bold mb-2">{item.title}</h4>
                  <p className="text-xs text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
