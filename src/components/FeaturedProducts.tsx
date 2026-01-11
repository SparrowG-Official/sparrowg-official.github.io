import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, ShoppingCart, Truck, RefreshCw, Star } from "lucide-react";
import { useState } from "react";

const products = [
  {
    id: 1,
    name: "Mechaverse Crane",
    image: "/products/crane.jpeg",
    price: "₹2,499",
    originalPrice: "₹3,199",
    discount: "-22%",
    ageGroup: "8-14 years",
    skills: ["Coding", "Engineering", "Analytical Thinking"],
    includes: "200+ components. Arduino board, sensors",
  },
  {
    id: 2,
    name: "Mechaverse Dump Truck",
    image: "/products/truck.jpeg",
    price: "₹1,799",
    originalPrice: "₹2,299",
    discount: "-22%",
    ageGroup: "10-16 years",
    skills: ["Mechanics", "Design Thinking", "Innovation"],
    includes: "200+ components. Arduino board, sensors",
  },
  {
    id: 3,
    name: "Mechaverse Excavator",
    image: "/products/excavator.jpeg",
    price: "₹1,299",
    originalPrice: "₹1,699",
    discount: "-24%",
    ageGroup: "6-12 years",
    skills: ["Construction", "Creativity", "Collaboration"],
    includes: "200+ components. Arduino board, sensors",
  },
];

export const FeaturedProducts = () => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 3;

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
    <section id="products" className="section-padding bg-background relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 stem-pattern opacity-20 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="section-title mb-6">
            Featured <span className="text-gradient-primary">Learning Kits</span>
          </h2>
          <p className="section-subtitle">
            Explore our best-selling educational kits designed to inspire creativity
          </p>
        </div>

        {/* Assurance Strip */}
        <div className="flex flex-wrap justify-center gap-6 lg:gap-10 mb-12 max-w-4xl mx-auto">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Truck className="w-5 h-5 text-primary" />
            <span>Free Shipping (India)</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <RefreshCw className="w-5 h-5 text-primary" />
            <span>7-Day Easy Returns</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <ShoppingCart className="w-5 h-5 text-primary" />
            <span>Secure Checkout</span>
          </div>
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {visibleProducts.map((product) => (
              <Card
                key={product.id}
                className="group overflow-hidden hover-lift bg-card"
              >
                <div className="relative aspect-square overflow-hidden bg-muted">
                  {/* Age Badge */}
                  <div className="absolute top-4 right-4 z-10 bg-card/90 backdrop-blur-sm text-foreground text-xs font-medium px-3 py-1.5 rounded-full shadow-sm">
                    {product.ageGroup}
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
                  <h3 className="text-base lg:text-lg font-bold text-foreground mb-2 line-clamp-2">
                    {product.name}
                  </h3>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-1 mb-3">
                    {product.skills.map((skill, i) => (
                      <span key={i} className="text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* What's included */}
                  <p className="text-xs text-muted-foreground mb-4 line-clamp-2">
                    {product.includes}
                  </p>

                  <Button variant="outline" className="w-full hover-lift">
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Add to Cart
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-12 lg:mt-16">
          <Button
            variant="default"
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
