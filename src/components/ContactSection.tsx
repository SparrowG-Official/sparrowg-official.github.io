import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  userType: z.enum(["parent", "school", "corporate"], {
    required_error: "Please select an option",
  }),
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

export const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const selectedUserType = watch("userType");

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you as soon as possible.",
      });

      reset();
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again or contact us directly at support@sparrowg.com",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const userTypeOptions = [
    {
      value: "parent",
      icon: "👤",
      title: "Parent",
      description: "Looking for learning kits for my child",
    },
    {
      value: "school",
      icon: "🏫",
      title: "School / Teacher",
      description: "Interested in curriculum solutions",
    },
    {
      value: "corporate",
      icon: "💼",
      title: "Corporate",
      description: "Corporate gifting or partnerships",
    },
  ];

  return (
    <section id="contact" className="section-padding bg-gradient-subtle relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-48 h-48 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">
            Get in Touch
          </p>
          <h2 className="section-title mb-6">
            Let's <span className="text-gradient-primary">Connect</span>
          </h2>
          <p className="section-subtitle">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Left Column - Form */}
          <Card className="shadow-elevated border-0 hover-lift">
            <CardContent className="p-8 lg:p-10">
              <h3 className="text-2xl font-bold text-foreground mb-2">Send us a Message</h3>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* User Type Selection */}
                <div>
                  <Label className="text-base font-semibold mb-4 block">I am a...</Label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {userTypeOptions.map((option) => (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() => setValue("userType", option.value as "parent" | "school" | "corporate")}
                        className={`p-4 border-2 rounded-xl text-left transition-all duration-300 hover:border-primary/50 hover:-translate-y-0.5 ${
                          selectedUserType === option.value
                            ? "border-primary bg-primary/5 shadow-soft"
                            : "border-border bg-card"
                        }`}
                      >
                        <div className="text-2xl mb-2">{option.icon}</div>
                        <div className="font-semibold text-sm mb-1">{option.title}</div>
                        <div className="text-xs text-muted-foreground">{option.description}</div>
                      </button>
                    ))}
                  </div>
                  {errors.userType && (
                    <p className="text-sm text-destructive mt-2">{errors.userType.message}</p>
                  )}
                </div>

                {/* Name and Email */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="fullName" className="font-medium">Full Name *</Label>
                    <Input
                      id="fullName"
                      placeholder="John Doe"
                      {...register("fullName")}
                      className="mt-2 h-12 rounded-xl"
                    />
                    {errors.fullName && (
                      <p className="text-sm text-destructive mt-1">{errors.fullName.message}</p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="email" className="font-medium">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      {...register("email")}
                      className="mt-2 h-12 rounded-xl"
                    />
                    {errors.email && (
                      <p className="text-sm text-destructive mt-1">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <Label htmlFor="phone" className="font-medium">Phone Number (Optional)</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+1 (234) 567-890"
                    {...register("phone")}
                    className="mt-2 h-12 rounded-xl"
                  />
                </div>

                {/* Subject */}
                <div>
                  <Label htmlFor="subject" className="font-medium">Subject *</Label>
                  <Input
                    id="subject"
                    placeholder="How can we help you?"
                    {...register("subject")}
                    className="mt-2 h-12 rounded-xl"
                  />
                  {errors.subject && (
                    <p className="text-sm text-destructive mt-1">{errors.subject.message}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <Label htmlFor="message" className="font-medium">Message *</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us more about your inquiry..."
                    rows={5}
                    {...register("message")}
                    className="mt-2 rounded-xl resize-none"
                  />
                  {errors.message && (
                    <p className="text-sm text-destructive mt-1">{errors.message.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  variant="hero"
                  size="xl"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Right Column - Map and Info */}
          <div className="space-y-6 lg:space-y-8">
            {/* Map Placeholder */}
            <Card className="shadow-elevated border-0 overflow-hidden hover-lift">
              <div className="relative h-64 bg-gradient-subtle flex items-center justify-center">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary text-primary-foreground mb-3 shadow-card">
                    <MapPin className="h-8 w-8" />
                  </div>
                  <p className="text-sm text-muted-foreground">Interactive map coming soon</p>
                </div>
              </div>
              <CardContent className="p-6 lg:p-8 bg-card">
                <h3 className="font-bold text-xl mb-2">SparrowG Headquarters</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  T-WORKS FOUNDATION, Plot 1/D, 1/E, 1/F, Survey No. 83/1, Raidurgam<br />
                  Hyderabad 500081, India
                </p>
              </CardContent>
            </Card>

            {/* Office Hours */}
            <Card className="shadow-elevated border-0 hover-lift">
              <CardContent className="p-6 lg:p-8">
                <h3 className="font-bold text-xl mb-6">Office Hours</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-border">
                    <span className="text-muted-foreground">Monday - Friday</span>
                    <span className="font-semibold">10:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-muted-foreground">Saturday</span>
                    <span className="font-semibold">10:00 AM - 4:00 PM</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Need Immediate Help */}
            <Card className="shadow-elevated border-0 bg-accent hover-lift">
              <CardContent className="p-6 lg:p-8">
                <h3 className="font-bold text-xl mb-3">Need Immediate Help?</h3>
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                  Check out our FAQ section below or browse our help center for instant answers.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="w-10 h-10 rounded-xl bg-card flex items-center justify-center">
                      📧
                    </span>
                    <div>
                      <span className="text-xs text-muted-foreground">Email</span>
                      <a href="mailto:support@sparrowg.com" className="block text-primary font-semibold hover:underline">
                        support@sparrowg.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-10 h-10 rounded-xl bg-card flex items-center justify-center">
                      📞
                    </span>
                    <div>
                      <span className="text-xs text-muted-foreground">Phone</span>
                      <a href="tel:9493017356" className="block text-primary font-semibold hover:underline">
                        +91 9493017356
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
