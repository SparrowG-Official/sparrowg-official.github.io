import { Card, CardContent } from "@/components/ui/card";
import futureCurriculum from "@/assets/future-curriculum.png";
import futureArvr from "@/assets/future-arvr.png";
import futureEcosystem from "@/assets/future-ecosystem.png";
import futureCommunity from "@/assets/future-community.png";

const visions = [
  {
    image: futureCurriculum,
    title: "Curriculum Programs",
    description: "Integrated STEM curricula for schools and educational institutions",
    status: "Coming Soon",
  },
  {
    image: futureArvr,
    title: "AR/VR Experiences",
    description: "Immersive augmented and virtual reality experiences for interactive STEM education",
    status: "In Development",
  },
  {
    image: futureEcosystem,
    title: "Tech Ecosystem",
    description: "A platform connecting students, educators, and parents for collaborative learning",
    status: "Coming Soon",
  },
  {
    image: futureCommunity,
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
          {visions.map((vision, index) => (
            <Card key={index} variant="glass" className="group hover-lift overflow-hidden">
              <CardContent className="p-0">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={vision.image} 
                    alt={vision.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  <span className="absolute bottom-3 left-3 inline-block px-3 py-1 text-xs font-semibold bg-primary/90 text-primary-foreground rounded-full">
                    {vision.status}
                  </span>
                </div>
                
                {/* Content */}
                <div className="p-6 text-center">
                  <h3 className="text-lg lg:text-xl font-bold mb-2">{vision.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {vision.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
