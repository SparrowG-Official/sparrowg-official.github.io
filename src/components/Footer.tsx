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
    <footer id="footer" className="bg-foreground text-background pt-16 pb-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground text-xl">🐦</span>
                </div>
                <span className="text-xl font-bold">
                  Sparrow<span className="text-primary">G</span>
                </span>
              </div>
            </div>
            <p className="text-background/70 mb-6 leading-relaxed">
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
                    className="w-10 h-10 rounded-xl bg-background/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
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
            <h4 className="text-lg font-bold mb-4">Products</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-4">Stay Updated</h4>
            <p className="text-background/70 mb-4 text-sm">
              Subscribe for STEM tips, new products, and exclusive offers.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl bg-background/10 border border-background/20 text-background placeholder:text-background/50 focus:outline-none focus:border-primary"
              />
              <Button variant="hero" size="icon" className="rounded-xl">
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="flex flex-wrap gap-6 py-8 border-t border-background/10 mb-8">
          <div className="flex items-center gap-2 text-background/70">
            <Mail className="w-4 h-4 text-primary" />
            <span>hello@sparrowg.com</span>
          </div>
          <div className="flex items-center gap-2 text-background/70">
            <Phone className="w-4 h-4 text-primary" />
            <span>+1 (555) 123-4567</span>
          </div>
          <div className="flex items-center gap-2 text-background/70">
            <MapPin className="w-4 h-4 text-primary" />
            <span>123 Innovation Way, Tech City</span>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-background/50 text-sm">
          <p>© {new Date().getFullYear()} SparrowG. All rights reserved. Building future-ready minds.</p>
        </div>
      </div>
    </footer>
  );
};
