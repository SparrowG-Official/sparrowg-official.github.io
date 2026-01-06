import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SparrowLogo } from "@/components/SparrowLogo";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Programs", href: "/programs" },
  { name: "Services", href: "/#services" },
  { name: "About", href: "/#about" },
  { name: "Contact", href: "/#contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    if (href.startsWith("/#") && !isHomePage) {
      // Navigate to home page first, then scroll
      window.location.href = href;
    } else if (href.startsWith("/#")) {
      // On home page, scroll to section
      const sectionId = href.replace("/#", "");
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const NavLink = ({ link }: { link: { name: string; href: string } }) => {
    const isExternal = link.href.startsWith("/#");
    
    if (isExternal) {
      return (
        <button
          onClick={() => handleNavClick(link.href)}
          className={`text-sm font-medium transition-colors duration-200 hover:text-primary ${
            isScrolled || !isHomePage ? "text-muted-foreground" : "text-white/80 hover:text-white"
          }`}
        >
          {link.name}
        </button>
      );
    }

    return (
      <Link
        to={link.href}
        className={`text-sm font-medium transition-colors duration-200 hover:text-primary ${
          isScrolled || !isHomePage ? "text-muted-foreground" : "text-white/80 hover:text-white"
        }`}
      >
        {link.name}
      </Link>
    );
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || !isHomePage
          ? "bg-background/95 backdrop-blur-lg border-b border-border/50 shadow-soft" 
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/">
            <SparrowLogo />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink key={link.name} link={link} />
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <Link to="/programs">
              <Button 
                variant={isScrolled || !isHomePage ? "default" : "hero"} 
                size="default"
                className="shadow-soft"
              >
                Explore Programs
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-2 ${isScrolled || !isHomePage ? "text-foreground" : "text-white"}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border bg-background/95 backdrop-blur-lg animate-fade-in rounded-b-2xl shadow-elevated">
            <div className="flex flex-col gap-4 px-4">
              {navLinks.map((link) => (
                link.href.startsWith("/#") ? (
                  <button
                    key={link.name}
                    onClick={() => handleNavClick(link.href)}
                    className="text-base font-medium text-muted-foreground hover:text-primary transition-colors py-2 text-left"
                  >
                    {link.name}
                  </button>
                ) : (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="text-base font-medium text-muted-foreground hover:text-primary transition-colors py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                )
              ))}
              <Link to="/programs" onClick={() => setIsOpen(false)}>
                <Button variant="default" size="lg" className="mt-4 w-full">
                  Explore Programs
                </Button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
