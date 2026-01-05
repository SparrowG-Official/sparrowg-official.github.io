import { Button } from "@/components/ui/button";
import { SparrowLogo } from "@/components/SparrowLogo";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube, Send } from "lucide-react";

const quickLinks = [
  { name: "STEM Kits", href: "#" },
  { name: "VR Learning", href: "#" },
  { name: "Workshops", href: "#" },
  { name: "Corporate Gifting", href: "#" },
];

const companyLinks = [
  { name: "About Us", href: "#" },
  { name: "Careers", href: "#" },
  { name: "Blog", href: "#" },
  { name: "Contact", href: "#" },
];

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export const Footer = () => {
  return (
    <footer id="footer" className="bg-foreground text-background pt-20 pb-10 relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute top-0 left-1/4 w-48 h-48 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-1">
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
            <p className="text-background/60 mb-8 leading-relaxed text-base">
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

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Products</h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-background/60 hover:text-primary transition-colors duration-200 text-base"
                  >
                    {link.name}
                  </a>
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
                  <a
                    href={link.href}
                    className="text-background/60 hover:text-primary transition-colors duration-200 text-base"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-6">Stay Updated</h4>
            <p className="text-background/60 mb-6 text-base leading-relaxed">
              Subscribe for STEM tips, new products, and exclusive offers.
            </p>
            <div className="flex gap-2">
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
        <div className="flex flex-wrap gap-8 py-10 border-t border-background/10 mb-8">
          <div className="flex items-center gap-3 text-background/60 hover:text-primary transition-colors group">
            <div className="w-10 h-10 rounded-xl bg-background/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <Mail className="w-5 h-5 text-primary" />
            </div>
            <span>hello@sparrowg.com</span>
          </div>
          <div className="flex items-center gap-3 text-background/60 hover:text-primary transition-colors group">
            <div className="w-10 h-10 rounded-xl bg-background/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <Phone className="w-5 h-5 text-primary" />
            </div>
            <span>+1 (555) 123-4567</span>
          </div>
          <div className="flex items-center gap-3 text-background/60 hover:text-primary transition-colors group">
            <div className="w-10 h-10 rounded-xl bg-background/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <MapPin className="w-5 h-5 text-primary" />
            </div>
            <span>123 Innovation Way, Tech City</span>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-background/40 text-sm pt-4 border-t border-background/10">
          <p>© {new Date().getFullYear()} SparrowG. All rights reserved. Building future-ready minds.</p>
        </div>
      </div>
    </footer>
  );
};
