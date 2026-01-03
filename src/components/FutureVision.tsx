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
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 stem-pattern pointer-events-none" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            The <span className="text-gradient-primary">Future</span> with SparrowG
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our vision extends beyond kits. We're building a complete ecosystem for STEM learning.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {visions.map((vision, index) => {
            const IconComponent = vision.icon;
            return (
              <Card key={index} variant="glass" className="group">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-7 h-7 text-accent-foreground" />
                  </div>
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mb-3">
                    {vision.status}
                  </span>
                  <h3 className="text-lg font-bold mb-2">{vision.title}</h3>
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
