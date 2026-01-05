import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

type Testimonial = {
  name: string;
  role: string;
  organization?: string;
  category: "parent" | "teacher" | "corporate";
  rating: number;
  text: string;
  image?: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Priya Sharma",
    role: "Mother of Class 4 student",
    category: "parent",
    rating: 5,
    text: "My daughter has become so curious about science since we started using SparrowG kits. She now wants to become an engineer! The quality of materials and the clear instructions make learning fun.",
  },
  {
    name: "Rajesh Kumar",
    role: "Science Teacher",
    organization: "Delhi Public School",
    category: "teacher",
    rating: 5,
    text: "SparrowG has transformed our science lab. Students are now actively engaged and excited about experiments. The curriculum alignment makes my job so much easier.",
  },
  {
    name: "Anita Desai",
    role: "HR Manager",
    organization: "Tech Solutions Pvt Ltd",
    category: "corporate",
    rating: 5,
    text: "We ordered 200 kits for our annual team building event. The custom branding was perfect, and our employees loved the hands-on activities. A refreshing change from usual corporate gifts!",
  },
  {
    name: "Vikram Patel",
    role: "Father of Class 6 & 8 students",
    category: "parent",
    rating: 5,
    text: "Both my kids are hooked! The robotics kit especially has been amazing. They spend hours building and coding together instead of watching TV.",
  },
  {
    name: "Dr. Sunita Rao",
    role: "Principal",
    organization: "St. Mary's International School",
    category: "teacher",
    rating: 5,
    text: "We've partnered with SparrowG for our entire STEM curriculum. The training provided to our teachers was exceptional, and the ongoing support is invaluable.",
  },
  {
    name: "Amit Joshi",
    role: "L&D Head",
    organization: "Global Finance Corp",
    category: "corporate",
    rating: 5,
    text: "The STEM workshop for our CSR initiative reached over 500 underprivileged students. SparrowG's team was professional and the impact was measurable.",
  },
];

const categoryLabels = {
  parent: { label: "Parent", color: "bg-destructive/10 text-destructive" },
  teacher: { label: "Educator", color: "bg-science/10 text-science" },
  corporate: { label: "Corporate", color: "bg-engineering/10 text-engineering" },
};

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < rating
              ? "fill-yellow-400 text-yellow-400"
              : "fill-muted text-muted"
          }`}
        />
      ))}
    </div>
  );
};

export const ReviewsSection = () => {
  const parentReviews = testimonials.filter((t) => t.category === "parent");
  const teacherReviews = testimonials.filter((t) => t.category === "teacher");
  const corporateReviews = testimonials.filter((t) => t.category === "corporate");

  const renderTestimonial = (testimonial: Testimonial, index: number) => {
    const category = categoryLabels[testimonial.category];
    return (
      <Card key={index} variant="elevated" className="hover-lift h-full">
        <CardContent className="p-6 lg:p-8 flex flex-col h-full">
          <div className="flex items-center justify-between mb-4">
            <span className={`text-xs font-semibold px-3 py-1 rounded-full ${category.color}`}>
              {category.label}
            </span>
            <StarRating rating={testimonial.rating} />
          </div>
          
          <Quote className="w-8 h-8 text-primary/20 mb-3" />
          
          <p className="text-muted-foreground leading-relaxed mb-6 flex-1">
            "{testimonial.text}"
          </p>
          
          <div className="border-t border-border pt-4">
            <p className="font-bold text-foreground">{testimonial.name}</p>
            <p className="text-sm text-muted-foreground">{testimonial.role}</p>
            {testimonial.organization && (
              <p className="text-sm text-primary font-medium">{testimonial.organization}</p>
            )}
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <section className="section-padding bg-gradient-subtle relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 stem-pattern pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">
            Testimonials
          </p>
          <h2 className="section-title mb-4">
            What Our <span className="text-gradient-primary">Community</span> Says
          </h2>
          <p className="section-subtitle">
            Hear from parents, educators, and organizations who trust SparrowG
          </p>
        </div>

        {/* Testimonials by Category */}
        <div className="space-y-12 max-w-7xl mx-auto">
          {/* Parents */}
          <div>
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-destructive" />
              From Parents
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {parentReviews.map((t, i) => renderTestimonial(t, i))}
            </div>
          </div>

          {/* Teachers/Schools */}
          <div>
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-science" />
              From Educators
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {teacherReviews.map((t, i) => renderTestimonial(t, i))}
            </div>
          </div>

          {/* Corporate */}
          <div>
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-engineering" />
              From Corporates
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {corporateReviews.map((t, i) => renderTestimonial(t, i))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
