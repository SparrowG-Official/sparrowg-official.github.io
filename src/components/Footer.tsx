import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube, Send } from "lucide-react";
import { Link } from "react-router-dom";

const productLinks = [
  { name: "STEM Kits", href: "#products" },
  { name: "AR/VR Learning", href: "#services" },
  { name: "Workshops", href: "#services" },
  { name: "Corporate Gifting", href: "#contact" },
];

const companyLinks = [
  { name: "About Us", href: "#about" },
  { name: "Careers", href: "#" },
  { name: "Blog", href: "#" },
  { name: "Contact", href: "#contact" },
];

const legalLinks = [
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Terms & Conditions", href: "/terms-conditions" },
  { name: "Shipping Policy", href: "/shipping-policy" },
  { name: "Refund Policy", href: "/refund-policy" },
];

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export const Footer = () => {
  const scrollToSection = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer id="footer" className="bg-foreground text-background pt-20 pb-10 relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute top-0 left-1/4 w-48 h-48 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center shadow-glow">
                  <span className="text-primary-foreground text-2xl">🐦</span>
                </div>
                <span className="text-2xl font-bold">
                  Sparrow<span className="text-primary">G</span>
                </span>
              </div>
            </div>
            <p className="text-background/60 mb-8 leading-relaxed text-base max-w-sm">
              Empowering the next generation with hands-on STEM education. 
              Learning that takes flight.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-11 h-11 rounded-xl bg-background/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Products Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Products</h4>
            <ul className="space-y-4">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-background/60 hover:text-primary transition-colors duration-200 text-base text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Company</h4>
            <ul className="space-y-4">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-background/60 hover:text-primary transition-colors duration-200 text-base text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Legal</h4>
            <ul className="space-y-4">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-background/60 hover:text-primary transition-colors duration-200 text-base"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="py-10 border-t border-background/10 mb-8">
          <div className="max-w-xl mx-auto text-center">
            <h4 className="text-lg font-bold mb-3">Stay Updated</h4>
            <p className="text-background/60 mb-6 text-sm">
              Subscribe for STEM tips, new products, and exclusive offers.
            </p>
            <div className="flex gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl bg-background/10 border border-background/20 text-background placeholder:text-background/40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
              />
              <Button variant="hero" size="icon" className="rounded-xl w-12 h-12 hover:scale-105 transition-transform">
                <Send className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="flex flex-wrap justify-center gap-8 py-8 border-t border-background/10 mb-8">
          <a href="mailto:support@sparrowg.com" className="flex items-center gap-3 text-background/60 hover:text-primary transition-colors group">
            <div className="w-10 h-10 rounded-xl bg-background/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <Mail className="w-5 h-5 text-primary" />
            </div>
            <span>support@sparrowg.com</span>
          </a>
          <a href="tel:+919493017356" className="flex items-center gap-3 text-background/60 hover:text-primary transition-colors group">
            <div className="w-10 h-10 rounded-xl bg-background/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <Phone className="w-5 h-5 text-primary" />
            </div>
            <span>+91 9493017356</span>
          </a>
          <div className="flex items-center gap-3 text-background/60 group">
            <div className="w-10 h-10 rounded-xl bg-background/10 flex items-center justify-center">
              <MapPin className="w-5 h-5 text-primary" />
            </div>
            <span>Hyderabad, India</span>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-background/40 text-sm pt-4 border-t border-background/10">
          <p>© {new Date().getFullYear()} SparrowG. All rights reserved. | Made with ❤️ in India</p>
        </div>
      </div>
    </footer>
  );
};
