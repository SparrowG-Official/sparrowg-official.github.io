import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Pencil, Shirt, Users } from "lucide-react";

const visions = [
  {
    icon: BookOpen,
    title: "Curriculum Programs",
    description: "Integrated STEM curricula for schools and educational institutions",
    status: "Coming Soon",
  },
  {
    icon: Pencil,
    title: "AR/VR Learning",
    description: "Immersive augmented and virtual reality experiences for interactive STEM education",
    status: "In Development",
  },
  {
    icon: Shirt,
    title: "Tech Ecosystem",
    description: "A platform connecting students, educators, and parents for collaborative learning",
    status: "Coming Soon",
  },
  {
    icon: Users,
    title: "Learning Communities",
    description: "Connect with fellow STEM enthusiasts and educators worldwide",
    status: "Coming Soon",
  },
];

export const FutureVision = () => {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 stem-pattern pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      {/* Decorative elements */}
      <div className="absolute top-1/3 left-10 w-24 h-24 bg-primary/5 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-secondary/5 rounded-full blur-2xl pointer-events-none" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">
            Coming Soon
          </p>
          <h2 className="section-title mb-6">
            The <span className="text-gradient-primary">Future</span> with SparrowG
          </h2>
          <p className="section-subtitle">
            Our vision extends beyond kits. We're building a complete ecosystem for STEM learning.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {visions.map((vision, index) => {
            const IconComponent = vision.icon;
            return (
              <Card key={index} variant="glass" className="group hover-lift">
                <CardContent className="p-8 lg:p-10 text-center">
                  <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-2xl bg-accent flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <IconComponent className="w-8 h-8 lg:w-10 lg:h-10 text-accent-foreground" />
                  </div>
                  <span className="inline-block px-4 py-1.5 text-xs font-semibold bg-primary/10 text-primary rounded-full mb-4">
                    {vision.status}
                  </span>
                  <h3 className="text-lg lg:text-xl font-bold mb-3">{vision.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {vision.description}
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
