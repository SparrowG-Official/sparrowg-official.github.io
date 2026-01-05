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
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 stem-pattern opacity-20 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">
            Featured
          </p>
          <h2 className="section-title mb-6">
            Creative <span className="text-gradient-primary">Learning Kits</span>
          </h2>
          <p className="section-subtitle">
            Explore our best-selling educational kits designed to inspire creativity
          </p>
        </div>

        {/* Products Grid */}
        <div className="relative max-w-7xl mx-auto">
          {/* Navigation Buttons */}
          {products.length > visibleCount && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-6 z-20 w-12 h-12 rounded-full bg-card shadow-card flex items-center justify-center text-foreground hover:bg-accent hover:scale-110 transition-all duration-300"
                aria-label="Previous products"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-6 z-20 w-12 h-12 rounded-full bg-card shadow-card flex items-center justify-center text-foreground hover:bg-accent hover:scale-110 transition-all duration-300"
                aria-label="Next products"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {visibleProducts.map((product) => (
              <Card
                key={product.id}
                className="group overflow-hidden hover-lift bg-card"
              >
                <div className="relative aspect-square overflow-hidden bg-muted">
                  {/* Discount Badge */}
                  <div className="absolute top-4 left-4 z-10 bg-destructive text-destructive-foreground text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                    {product.discount}
                  </div>

                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <CardContent className="p-5 lg:p-6">
                  <h3 className="text-sm lg:text-base font-bold text-foreground mb-3 uppercase tracking-wide line-clamp-2">
                    {product.name}
                  </h3>

                  <div className="flex items-center gap-3">
                    <span className="text-lg lg:text-xl font-bold text-foreground">
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
        <div className="text-center mt-12 lg:mt-16">
          <Button
            variant="outline"
            size="lg"
            className="rounded-full px-10 hover-lift"
          >
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};
