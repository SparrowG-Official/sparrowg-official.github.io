import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const TermsConditions = () => {
  return (
    <>
      <Helmet>
        <title>Terms & Conditions | SparrowG - STEM Education</title>
        <meta name="description" content="SparrowG Terms and Conditions - Read our terms of service and usage policies." />
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
                <FileText className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                  Terms & <span className="text-gradient-primary">Conditions</span>
                </h1>
                <p className="text-muted-foreground mt-1">Last updated: January 2025</p>
              </div>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Please read these terms carefully before using SparrowG services.
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
                    Acceptance of Terms
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    By accessing and using the SparrowG website and services, you accept and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-sm font-bold">2</span>
                    Products and Services
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    SparrowG provides STEM educational kits, workshops, AR/VR learning experiences, and corporate gifting solutions. All products are designed for educational purposes and are intended to be used under adult supervision where appropriate.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-sm font-bold">3</span>
                    Orders and Payments
                  </h2>
                  <div className="space-y-3">
                    {[
                      "All orders are subject to availability and confirmation of the order price.",
                      "We reserve the right to refuse any order for any reason.",
                      "Prices are subject to change without notice.",
                      "Payment must be received in full before products are dispatched.",
                      "All transactions are processed in Indian Rupees (INR).",
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3 bg-muted/30 rounded-lg p-3">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-sm font-bold">4</span>
                    Intellectual Property
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    All content on this website, including text, graphics, logos, images, and software, is the property of SparrowG and is protected by intellectual property laws. You may not reproduce, distribute, or create derivative works without our written permission.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-sm font-bold">5</span>
                    User Conduct
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">You agree not to:</p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {[
                      "Use our services for any unlawful purpose",
                      "Interfere with or disrupt the website",
                      "Attempt unauthorized access to our systems",
                      "Transmit any harmful code or content",
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-2 bg-muted/30 rounded-lg p-3">
                        <div className="w-2 h-2 rounded-full bg-destructive flex-shrink-0" />
                        <span className="text-muted-foreground text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-sm font-bold">6</span>
                    Limitation of Liability
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    SparrowG shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our products or services. Our liability is limited to the purchase price of the product in question.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-sm font-bold">7</span>
                    Governing Law
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    These Terms and Conditions are governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Hyderabad, Telangana.
                  </p>
                </section>

                <section className="pt-6 border-t border-border">
                  <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-sm font-bold">8</span>
                    Contact Information
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    For any questions regarding these Terms and Conditions:
                  </p>
                  <div className="bg-muted/30 rounded-xl p-4 space-y-2">
                    <p className="text-foreground"><strong>Email:</strong> support@sparrowg.com</p>
                    <p className="text-foreground"><strong>Phone:</strong> +91 9493017356</p>
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

export default TermsConditions;
