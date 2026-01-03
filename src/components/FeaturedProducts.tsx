import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const products = [
  {
    id: 1,
    name: "DIY Mosaic Art Kit - Bird",
    image: "/products/bird-kit.jpg",
    price: "Rs. 900",
    originalPrice: "Rs. 1,100",
    discount: "-18%",
  },
  {
    id: 2,
    name: "DIY Mosaic Art Kit - Tiger",
    image: "/products/tiger-kit.jpg",
    price: "Rs. 900",
    originalPrice: "Rs. 1,100",
    discount: "-18%",
  },
  {
    id: 3,
    name: "DIY Mosaic Art Kit - Penguin",
    image: "/products/penguin-kit.jpg",
    price: "Rs. 900",
    originalPrice: "Rs. 1,100",
    discount: "-18%",
  },
  {
    id: 4,
    name: "DIY Mosaic Art Kit - Unicorn",
    image: "/products/unicorn-kit.jpg",
    price: "Rs. 900",
    originalPrice: "Rs. 1,100",
    discount: "-18%",
  },
];

export const FeaturedProducts = () => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 4;

  const nextSlide = () => {
    setStartIndex((prev) =>
      prev + visibleCount >= products.length ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setStartIndex((prev) =>
      prev === 0 ? Math.max(0, products.length - visibleCount) : prev - 1
    );
  };

  const visibleProducts = products.slice(startIndex, startIndex + visibleCount);

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 stem-pattern opacity-20 pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-4">
          <p className="text-sm text-muted-foreground uppercase tracking-wide mb-2">
            Featured
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12">
            Creative <span className="text-gradient-primary">Learning Kits</span>
          </h2>
        </div>

        {/* Products Grid */}
        <div className="relative max-w-7xl mx-auto">
          {/* Navigation Buttons */}
          {products.length > visibleCount && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 w-10 h-10 rounded-full bg-card shadow-lg flex items-center justify-center text-foreground hover:bg-accent transition-colors"
                aria-label="Previous products"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 w-10 h-10 rounded-full bg-card shadow-lg flex items-center justify-center text-foreground hover:bg-accent transition-colors"
                aria-label="Next products"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {visibleProducts.map((product) => (
              <Card
                key={product.id}
                className="group overflow-hidden hover:shadow-elevated transition-all duration-300"
              >
                <div className="relative aspect-square overflow-hidden bg-muted">
                  {/* Discount Badge */}
                  <div className="absolute top-3 left-3 z-10 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                    {product.discount}
                  </div>

                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <CardContent className="p-4">
                  <h3 className="text-sm font-semibold text-foreground mb-2 uppercase tracking-wide">
                    {product.name}
                  </h3>

                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-lg font-bold text-foreground">
                      {product.price}
                    </span>
                    <span className="text-sm text-muted-foreground line-through">
                      {product.originalPrice}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="rounded-full px-8"
          >
            View All
          </Button>
        </div>
      </div>
    </section>
  );
};
