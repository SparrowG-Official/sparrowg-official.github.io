import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | SparrowG - STEM Education</title>
        <meta name="description" content="SparrowG Privacy Policy - Learn how we collect, use, and protect your personal information." />
      </Helmet>

      <Navbar />

      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-subtle relative overflow-hidden">
          <div className="absolute inset-0 stem-pattern pointer-events-none" />
          <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Shield className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                  Privacy <span className="text-gradient-primary">Policy</span>
                </h1>
                <p className="text-muted-foreground mt-1">Last updated: January 2025</p>
              </div>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Your privacy matters to us. Learn how SparrowG collects, uses, and protects your information.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="section-padding-sm">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <Card variant="glass" className="shadow-elevated">
              <CardContent className="p-8 lg:p-12 space-y-10">
                <section>
                  <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-sm font-bold">1</span>
                    Introduction
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    SparrowG ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-sm font-bold">2</span>
                    Information We Collect
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">We may collect the following types of information:</p>
                  <ul className="space-y-3">
                    {[
                      { title: "Personal Information", desc: "Name, email address, phone number, and shipping address when you make a purchase or contact us." },
                      { title: "Payment Information", desc: "Payment details processed securely through our payment partners." },
                      { title: "Usage Data", desc: "Information about how you interact with our website, including pages visited and time spent." },
                      { title: "Device Information", desc: "Browser type, IP address, and device identifiers." },
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 bg-muted/30 rounded-lg p-3">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <div>
                          <span className="font-medium text-foreground">{item.title}:</span>{" "}
                          <span className="text-muted-foreground">{item.desc}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-sm font-bold">3</span>
                    How We Use Your Information
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {[
                      "Process and fulfill your orders",
                      "Send order confirmations and shipping updates",
                      "Respond to inquiries and provide support",
                      "Send promotional communications (with consent)",
                      "Improve our website and services",
                      "Comply with legal obligations",
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-2 bg-muted/30 rounded-lg p-3">
                        <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                        <span className="text-muted-foreground text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-sm font-bold">4</span>
                    Information Sharing
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We do not sell, trade, or rent your personal information to third parties. We may share your information with service providers who assist us in operating our website, conducting our business, or serving you, provided they agree to keep this information confidential.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-sm font-bold">5</span>
                    Data Security
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-sm font-bold">6</span>
                    Your Rights
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {[
                      "Access and receive a copy of your personal data",
                      "Rectify any inaccurate personal data",
                      "Request deletion of your personal data",
                      "Object to the processing of your data",
                      "Withdraw consent at any time",
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-2 bg-muted/30 rounded-lg p-3">
                        <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                        <span className="text-muted-foreground text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-sm font-bold">7</span>
                    Cookies
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We use cookies and similar tracking technologies to enhance your experience on our website. You can control cookie preferences through your browser settings.
                  </p>
                </section>

                <section className="pt-6 border-t border-border">
                  <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-sm font-bold">8</span>
                    Contact Us
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    If you have any questions about this Privacy Policy, please contact us:
                  </p>
                  <div className="bg-muted/30 rounded-xl p-4 space-y-2">
                    <p className="text-foreground"><strong>Email:</strong> support@sparrowg.com</p>
                    <p className="text-foreground"><strong>Phone:</strong> +91 9493017356</p>
                    <p className="text-foreground"><strong>Address:</strong> T-WORKS FOUNDATION, Raidurgam, Hyderabad 500081, India</p>
                  </div>
                </section>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default PrivacyPolicy;
