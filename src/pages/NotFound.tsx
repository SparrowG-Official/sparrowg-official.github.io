import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft, Search } from "lucide-react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <title>Page Not Found | SparrowG</title>
        <meta name="description" content="The page you're looking for doesn't exist. Return to SparrowG homepage." />
      </Helmet>

      <Navbar />

      <main className="min-h-screen bg-background flex items-center justify-center relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 stem-pattern pointer-events-none" />
        <div className="absolute top-1/4 left-10 w-48 h-48 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-10 w-64 h-64 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-lg mx-auto text-center">
            {/* 404 Number */}
            <div className="mb-8">
              <span className="text-[150px] md:text-[200px] font-bold leading-none text-gradient-primary opacity-20">
                404
              </span>
            </div>

            {/* Content */}
            <div className="-mt-20 relative z-10">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Search className="w-10 h-10 text-primary" />
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Page Not Found
              </h1>
              
              <p className="text-muted-foreground text-lg mb-8 max-w-md mx-auto">
                Oops! The page you're looking for seems to have taken flight. Let's get you back on track.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/">
                  <Button size="lg" className="gap-2 shadow-soft w-full sm:w-auto">
                    <Home className="w-5 h-5" />
                    Back to Home
                  </Button>
                </Link>
                <Button 
                  variant="outline" 
                  size="lg" 
                  onClick={() => window.history.back()}
                  className="gap-2 w-full sm:w-auto"
                >
                  <ArrowLeft className="w-5 h-5" />
                  Go Back
                </Button>
              </div>

              {/* Helpful Links */}
              <div className="mt-12 pt-8 border-t border-border">
                <p className="text-sm text-muted-foreground mb-4">You might be looking for:</p>
                <div className="flex flex-wrap justify-center gap-4">
                  {[
                    { label: "Programs", href: "/programs" },
                    { label: "About Us", href: "/#about" },
                    { label: "Contact", href: "/#contact" },
                  ].map((link) => (
                    <Link
                      key={link.label}
                      to={link.href}
                      className="text-primary hover:text-primary/80 font-medium transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default NotFound;
