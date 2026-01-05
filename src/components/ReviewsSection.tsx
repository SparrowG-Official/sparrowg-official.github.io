import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

type GridItem = {
  type: "review" | "image";
  rowSpan?: 1 | 2;
  colSpan?: 1 | 2;
} & (
  | {
      type: "review";
      name: string;
      rating: number;
      text: string;
    }
  | {
      type: "image";
      image: string;
      alt: string;
    }
);

const gridItems: GridItem[] = [
  {
    type: "review",
    name: "Sarah Johnson",
    rating: 5,
    text: "My kids absolutely loved their STEM kit! The experiments were fun and educational.",
    rowSpan: 1,
    colSpan: 1,
  },
  {
    type: "image",
    image: "/reviews/img002.jpg",
    alt: "Kids learning with curiosity",
    rowSpan: 1,
    colSpan: 1,
  },
  {
    type: "image",
    image: "/reviews/img001.jpg",
    alt: "Building construction models",
    rowSpan: 2,
    colSpan: 1,
  },
  {
    type: "review",
    name: "Michael Chen",
    rating: 5,
    text: "KitsCrate has been amazing for our classroom. Students are so engaged!",
    rowSpan: 1,
    colSpan: 1,
  },
  {
    type: "image",
    image: "/reviews/img003.jpg",
    alt: "Interactive STEM learning session",
    rowSpan: 1,
    colSpan: 1,
  },
  {
    type: "review",
    name: "Emily Rodriguez",
    rating: 5,
    text: "Best STEM learning experience! My daughter is now obsessed with science experiments.",
    rowSpan: 1,
    colSpan: 1,
  },
  {
    type: "image",
    image: "/reviews/img002.jpg",
    alt: "Team working on engineering kit",
    rowSpan: 1,
    colSpan: 1,
  },
  {
    type: "review",
    name: "David Thompson",
    rating: 5,
    text: "Fantastic kits! My son learned so much about physics and engineering.",
    rowSpan: 1,
    colSpan: 1,
  },
  {
    type: "image",
    image: "/reviews/img004.jpg",
    alt: "STEM workshop activity",
    rowSpan: 1,
    colSpan: 2,
  }
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < rating
              ? "fill-yellow-400 text-yellow-400"
              : "fill-gray-200 text-gray-200"
          }`}
        />
      ))}
    </div>
  );
};

export const ReviewsSection = () => {
  return (
    <section className="section-padding bg-gradient-subtle relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 stem-pattern pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">
            Our Impact
          </p>
          <h2 className="section-title mb-4">
            Over <span className="text-gradient-primary">50 million</span> kits
          </h2>
          <p className="text-2xl md:text-3xl font-bold text-muted-foreground mb-4">
            delivered worldwide!
          </p>
          <p className="section-subtitle">
            Check out what parents are saying and see the excitement we bring to learning!
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 auto-rows-[200px] gap-4 lg:gap-5 max-w-7xl mx-auto">
          {gridItems.map((item, index) => {
            const rowSpanClass = item.rowSpan === 2 ? "row-span-2" : "row-span-1";
            const colSpanClass = item.colSpan === 2 ? "md:col-span-2" : "col-span-1";

            if (item.type === "image") {
              return (
                <div
                  key={index}
                  className={`${rowSpanClass} ${colSpanClass} relative overflow-hidden rounded-2xl group shadow-card`}
                >
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              );
            }

            // Review card
            return (
              <Card
                key={index}
                variant="glass"
                className={`${rowSpanClass} ${colSpanClass} overflow-hidden group hover:shadow-elevated hover:-translate-y-1 transition-all duration-300`}
              >
                <CardContent className="p-6 lg:p-7 flex flex-col h-full justify-between">
                  <div>
                    <StarRating rating={item.rating} />
                    <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
                      "{item.text}"
                    </p>
                  </div>
                  <p className="text-sm font-bold mt-4 text-foreground">
                    — {item.name}
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
