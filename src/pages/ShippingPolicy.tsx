import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Truck, ArrowLeft, Clock, MapPin, Package } from "lucide-react";
import { Link } from "react-router-dom";

const ShippingPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Shipping Policy | SparrowG - STEM Education</title>
        <meta name="description" content="SparrowG Shipping Policy - Learn about our delivery options, timelines, and shipping charges across India." />
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
                <Truck className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                  Shipping <span className="text-gradient-primary">Policy</span>
                </h1>
                <p className="text-muted-foreground mt-1">Last updated: January 2025</p>
              </div>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Fast and reliable delivery across India. Learn about our shipping options and timelines.
            </p>
          </div>
        </section>

        {/* Quick Info Cards */}
        <section className="py-8 -mt-8 relative z-20">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <div className="grid sm:grid-cols-3 gap-4">
              <Card variant="elevated" className="text-center p-6">
                <Package className="w-8 h-8 text-primary mx-auto mb-3" />
                <p className="font-bold text-lg">Free Shipping</p>
                <p className="text-sm text-muted-foreground">Orders above ₹999</p>
              </Card>
              <Card variant="elevated" className="text-center p-6">
                <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
                <p className="font-bold text-lg">3-10 Days</p>
                <p className="text-sm text-muted-foreground">Delivery Timeline</p>
              </Card>
              <Card variant="elevated" className="text-center p-6">
                <MapPin className="w-8 h-8 text-primary mx-auto mb-3" />
                <p className="font-bold text-lg">Pan India</p>
                <p className="text-sm text-muted-foreground">Delivery Coverage</p>
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
                    Shipping Coverage
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We currently ship to all major cities and towns across India. For international shipping inquiries, please contact our support team.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-sm font-bold">2</span>
                    Shipping Charges
                  </h2>
                  <div className="space-y-3">
                    {[
                      { label: "Free Shipping", value: "On all orders above ₹999 within India", highlight: true },
                      { label: "Standard Shipping", value: "₹99 for orders below ₹999" },
                      { label: "Express Shipping", value: "Additional ₹199 for priority delivery" },
                    ].map((item, i) => (
                      <div key={i} className={`flex items-center justify-between rounded-lg p-4 ${item.highlight ? 'bg-primary/10 border border-primary/20' : 'bg-muted/30'}`}>
                        <span className={`font-medium ${item.highlight ? 'text-primary' : 'text-foreground'}`}>{item.label}</span>
                        <span className="text-muted-foreground text-sm">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-sm font-bold">3</span>
                    Delivery Timeline
                  </h2>
                  <div className="space-y-3">
                    {[
                      { location: "Metro Cities", time: "3-5 business days" },
                      { location: "Tier 2 Cities", time: "5-7 business days" },
                      { location: "Other Areas", time: "7-10 business days" },
                      { location: "Express Delivery", time: "1-3 business days (metro only)" },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center justify-between bg-muted/30 rounded-lg p-4">
                        <span className="font-medium text-foreground">{item.location}</span>
                        <span className="text-primary font-semibold">{item.time}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-muted-foreground mt-4 text-sm">
                    Delivery times are estimates and may vary due to factors beyond our control, including weather, holidays, and logistics challenges.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-sm font-bold">4</span>
                    Order Processing
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Orders are processed within 1-2 business days after payment confirmation. You will receive a confirmation email with tracking details once your order is shipped.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-sm font-bold">5</span>
                    Tracking Your Order
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Once your order is dispatched, you will receive an email and SMS with a tracking number. You can use this number to track your shipment on our logistics partner's website.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-sm font-bold">6</span>
                    Bulk Orders (Schools & Corporates)
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    For bulk orders exceeding 50 units, please contact us directly for customized shipping arrangements and timelines. We offer special rates for institutional orders.
                  </p>
                </section>

                <section className="pt-6 border-t border-border">
                  <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-sm font-bold">7</span>
                    Contact Us
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    For shipping-related queries, please contact:
                  </p>
                  <div className="bg-muted/30 rounded-xl p-4 space-y-2">
                    <p className="text-foreground"><strong>Email:</strong> support@sparrowg.com</p>
                    <p className="text-foreground"><strong>Phone:</strong> +91 9493017356</p>
                    <p className="text-foreground"><strong>WhatsApp:</strong> +91 9493017356</p>
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

export default ShippingPolicy;
