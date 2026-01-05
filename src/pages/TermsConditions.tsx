import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <h1 className="text-4xl font-bold mb-8">Terms & Conditions</h1>
          <p className="text-muted-foreground mb-8">Last updated: January 2025</p>
          
          <Card className="shadow-soft">
            <CardContent className="p-8 lg:p-12 prose prose-gray max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing and using the SparrowG website and services, you accept and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">2. Products and Services</h2>
                <p className="text-muted-foreground leading-relaxed">
                  SparrowG provides STEM educational kits, workshops, AR/VR learning experiences, and corporate gifting solutions. All products are designed for educational purposes and are intended to be used under adult supervision where appropriate.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">3. Orders and Payments</h2>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>All orders are subject to availability and confirmation of the order price.</li>
                  <li>We reserve the right to refuse any order for any reason.</li>
                  <li>Prices are subject to change without notice.</li>
                  <li>Payment must be received in full before products are dispatched.</li>
                  <li>All transactions are processed in Indian Rupees (INR).</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">4. Intellectual Property</h2>
                <p className="text-muted-foreground leading-relaxed">
                  All content on this website, including text, graphics, logos, images, and software, is the property of SparrowG and is protected by intellectual property laws. You may not reproduce, distribute, or create derivative works without our written permission.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">5. User Conduct</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">You agree not to:</p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Use our services for any unlawful purpose</li>
                  <li>Interfere with or disrupt the website or servers</li>
                  <li>Attempt to gain unauthorized access to any part of our systems</li>
                  <li>Transmit any harmful code or content</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">6. Limitation of Liability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  SparrowG shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our products or services. Our liability is limited to the purchase price of the product in question.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">7. Governing Law</h2>
                <p className="text-muted-foreground leading-relaxed">
                  These Terms and Conditions are governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Hyderabad, Telangana.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">8. Contact Information</h2>
                <p className="text-muted-foreground leading-relaxed">
                  For any questions regarding these Terms and Conditions, please contact us at:
                </p>
                <p className="text-muted-foreground mt-4">
                  <strong>Email:</strong> support@sparrowg.com<br />
                  <strong>Phone:</strong> +91 9493017356
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

export default TermsConditions;
