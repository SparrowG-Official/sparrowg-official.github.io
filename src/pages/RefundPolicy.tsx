import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <h1 className="text-4xl font-bold mb-8">Refund & Return Policy</h1>
          <p className="text-muted-foreground mb-8">Last updated: January 2025</p>
          
          <Card className="shadow-soft">
            <CardContent className="p-8 lg:p-12 prose prose-gray max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">1. Return Window</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We offer a 7-day return window from the date of delivery. To be eligible for a return, the product must be unused, in its original packaging, and in the same condition as received.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">2. Non-Returnable Items</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">The following items cannot be returned:</p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Products that have been opened or used</li>
                  <li>Customized or personalized products (corporate gifts with branding)</li>
                  <li>Digital products or downloadable content</li>
                  <li>Workshop registrations (unless cancelled 48 hours before the event)</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">3. How to Initiate a Return</h2>
                <ol className="list-decimal pl-6 text-muted-foreground space-y-2">
                  <li>Email us at support@sparrowg.com with your order number and reason for return</li>
                  <li>Our team will review your request within 24 hours</li>
                  <li>Once approved, we will arrange for pickup or provide shipping instructions</li>
                  <li>Pack the item securely in its original packaging</li>
                </ol>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">4. Refund Process</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Once we receive and inspect the returned item, we will process your refund:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li><strong>Refund Method:</strong> Original payment method</li>
                  <li><strong>Processing Time:</strong> 5-7 business days after item inspection</li>
                  <li><strong>Refund Amount:</strong> Full product price (shipping charges are non-refundable unless the return is due to our error)</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">5. Damaged or Defective Products</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you receive a damaged or defective product, please contact us within 48 hours of delivery with photos of the damage. We will arrange for a free replacement or full refund, including shipping charges.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">6. Replacements</h2>
                <p className="text-muted-foreground leading-relaxed">
                  For defective items, we offer free replacements. The replacement will be shipped within 3-5 business days after we receive the returned item.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">7. Workshop & Program Cancellations</h2>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li><strong>48+ hours before event:</strong> Full refund</li>
                  <li><strong>24-48 hours before event:</strong> 50% refund or credit for future workshop</li>
                  <li><strong>Less than 24 hours:</strong> No refund (credit for future workshop may be provided on case-by-case basis)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">8. Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  For any questions about our refund policy, please contact:
                </p>
                <p className="text-muted-foreground mt-4">
                  <strong>Email:</strong> support@sparrowg.com<br />
                  <strong>Phone:</strong> +91 9493017356<br />
                  <strong>Hours:</strong> Mon-Sat, 10 AM - 6 PM IST
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

export default RefundPolicy;
