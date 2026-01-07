import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { RotateCcw, ArrowLeft, CheckCircle, XCircle, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const RefundPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Refund & Return Policy | SparrowG - STEM Education</title>
        <meta name="description" content="SparrowG Refund Policy - Learn about our return process, refund timelines, and replacement policies." />
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
                <RotateCcw className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                  Refund & <span className="text-gradient-primary">Return Policy</span>
                </h1>
                <p className="text-muted-foreground mt-1">Last updated: January 2025</p>
              </div>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Your satisfaction is our priority. Easy returns and hassle-free refunds.
            </p>
          </div>
        </section>

        {/* Quick Info Cards */}
        <section className="py-8 -mt-8 relative z-20">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <div className="grid sm:grid-cols-3 gap-4">
              <Card variant="elevated" className="text-center p-6">
                <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
                <p className="font-bold text-lg">7 Days</p>
                <p className="text-sm text-muted-foreground">Return Window</p>
              </Card>
              <Card variant="elevated" className="text-center p-6">
                <CheckCircle className="w-8 h-8 text-primary mx-auto mb-3" />
                <p className="font-bold text-lg">5-7 Days</p>
                <p className="text-sm text-muted-foreground">Refund Processing</p>
              </Card>
              <Card variant="elevated" className="text-center p-6">
                <RotateCcw className="w-8 h-8 text-primary mx-auto mb-3" />
                <p className="font-bold text-lg">Free</p>
                <p className="text-sm text-muted-foreground">Replacement for Defects</p>
              </Card>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="section-padding-sm pt-8">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <Card variant="glass" className="shadow-elevated">
              <CardContent className="p-8 lg:p-12 space-y-10">
                <section>
                  <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-sm font-bold">1</span>
                    Return Window
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We offer a 7-day return window from the date of delivery. To be eligible for a return, the product must be unused, in its original packaging, and in the same condition as received.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-sm font-bold">2</span>
                    Non-Returnable Items
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">The following items cannot be returned:</p>
                  <div className="space-y-3">
                    {[
                      "Products that have been opened or used",
                      "Customized or personalized products (corporate gifts with branding)",
                      "Digital products or downloadable content",
                      "Workshop registrations (unless cancelled 48 hours before the event)",
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3 bg-destructive/5 border border-destructive/10 rounded-lg p-3">
                        <XCircle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-sm font-bold">3</span>
                    How to Initiate a Return
                  </h2>
                  <div className="space-y-3">
                    {[
                      "Email us at support@sparrowg.com with your order number and reason for return",
                      "Our team will review your request within 24 hours",
                      "Once approved, we will arrange for pickup or provide shipping instructions",
                      "Pack the item securely in its original packaging",
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3 bg-muted/30 rounded-lg p-4">
                        <span className="w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold flex-shrink-0">
                          {i + 1}
                        </span>
                        <span className="text-muted-foreground mt-0.5">{item}</span>
                      </div>
                    ))}
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-sm font-bold">4</span>
                    Refund Process
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Once we receive and inspect the returned item, we will process your refund:
                  </p>
                  <div className="space-y-3">
                    {[
                      { label: "Refund Method", value: "Original payment method" },
                      { label: "Processing Time", value: "5-7 business days after item inspection" },
                      { label: "Refund Amount", value: "Full product price (shipping non-refundable unless our error)" },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center justify-between bg-muted/30 rounded-lg p-4">
                        <span className="font-medium text-foreground">{item.label}</span>
                        <span className="text-muted-foreground text-sm text-right">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-sm font-bold">5</span>
                    Damaged or Defective Products
                  </h2>
                  <div className="bg-primary/5 border border-primary/20 rounded-xl p-4">
                    <p className="text-muted-foreground leading-relaxed">
                      If you receive a damaged or defective product, please contact us within 48 hours of delivery with photos of the damage. We will arrange for a <strong className="text-primary">free replacement or full refund</strong>, including shipping charges.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-sm font-bold">6</span>
                    Workshop & Program Cancellations
                  </h2>
                  <div className="space-y-3">
                    {[
                      { time: "48+ hours before event", refund: "Full refund", color: "bg-green-500/10 border-green-500/20 text-green-700" },
                      { time: "24-48 hours before event", refund: "50% refund or credit", color: "bg-yellow-500/10 border-yellow-500/20 text-yellow-700" },
                      { time: "Less than 24 hours", refund: "No refund (credit case-by-case)", color: "bg-red-500/10 border-red-500/20 text-red-700" },
                    ].map((item, i) => (
                      <div key={i} className={`flex items-center justify-between rounded-lg p-4 border ${item.color}`}>
                        <span className="font-medium">{item.time}</span>
                        <span className="text-sm">{item.refund}</span>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="pt-6 border-t border-border">
                  <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-sm font-bold">7</span>
                    Contact Us
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    For any questions about our refund policy, please contact:
                  </p>
                  <div className="bg-muted/30 rounded-xl p-4 space-y-2">
                    <p className="text-foreground"><strong>Email:</strong> support@sparrowg.com</p>
                    <p className="text-foreground"><strong>Phone:</strong> +91 9493017356</p>
                    <p className="text-foreground"><strong>Hours:</strong> Mon-Sat, 10 AM - 6 PM IST</p>
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

export default RefundPolicy;
