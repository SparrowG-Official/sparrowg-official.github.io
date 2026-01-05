import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const ShippingPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <h1 className="text-4xl font-bold mb-8">Shipping Policy</h1>
          <p className="text-muted-foreground mb-8">Last updated: January 2025</p>
          
          <Card className="shadow-soft">
            <CardContent className="p-8 lg:p-12 prose prose-gray max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">1. Shipping Coverage</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We currently ship to all major cities and towns across India. For international shipping inquiries, please contact our support team.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">2. Shipping Charges</h2>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li><strong>Free Shipping:</strong> On all orders above ₹999 within India</li>
                  <li><strong>Standard Shipping:</strong> ₹99 for orders below ₹999</li>
                  <li><strong>Express Shipping:</strong> Additional ₹199 for priority delivery</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">3. Delivery Timeline</h2>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li><strong>Metro Cities:</strong> 3-5 business days</li>
                  <li><strong>Tier 2 Cities:</strong> 5-7 business days</li>
                  <li><strong>Other Areas:</strong> 7-10 business days</li>
                  <li><strong>Express Delivery:</strong> 1-3 business days (metro cities only)</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  Delivery times are estimates and may vary due to factors beyond our control, including weather, holidays, and logistics challenges.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">4. Order Processing</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Orders are processed within 1-2 business days after payment confirmation. You will receive a confirmation email with tracking details once your order is shipped.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">5. Tracking Your Order</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Once your order is dispatched, you will receive an email and SMS with a tracking number. You can use this number to track your shipment on our logistics partner's website.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">6. Bulk Orders (Schools & Corporates)</h2>
                <p className="text-muted-foreground leading-relaxed">
                  For bulk orders exceeding 50 units, please contact us directly for customized shipping arrangements and timelines. We offer special rates for institutional orders.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">7. Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  For shipping-related queries, please contact:
                </p>
                <p className="text-muted-foreground mt-4">
                  <strong>Email:</strong> support@sparrowg.com<br />
                  <strong>Phone:</strong> +91 9493017356<br />
                  <strong>WhatsApp:</strong> +91 9493017356
                </p>
              </section>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ShippingPolicy;
