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
    <section id="contact" className="py-16 px-4 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column - Form */}
          <Card className="shadow-lg border-0">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-primary mb-2">Send us a Message</h2>
              <p className="text-muted-foreground mb-6">
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
                        className={`p-4 border-2 rounded-lg text-left transition-all hover:border-primary/50 ${
                          selectedUserType === option.value
                            ? "border-primary bg-primary/5"
                            : "border-slate-200"
                        }`}
                      >
                        <div className="text-2xl mb-2">{option.icon}</div>
                        <div className="font-semibold text-sm mb-1">{option.title}</div>
                        <div className="text-xs text-muted-foreground">{option.description}</div>
                      </button>
                    ))}
                  </div>
                  {errors.userType && (
                    <p className="text-sm text-destructive mt-1">{errors.userType.message}</p>
                  )}
                </div>

                {/* Name and Email */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="fullName">Full Name *</Label>
                    <Input
                      id="fullName"
                      placeholder="John Doe"
                      {...register("fullName")}
                      className="mt-1"
                    />
                    {errors.fullName && (
                      <p className="text-sm text-destructive mt-1">{errors.fullName.message}</p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      {...register("email")}
                      className="mt-1"
                    />
                    {errors.email && (
                      <p className="text-sm text-destructive mt-1">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <Label htmlFor="phone">Phone Number (Optional)</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+1 (234) 567-890"
                    {...register("phone")}
                    className="mt-1"
                  />
                </div>

                {/* Subject */}
                <div>
                  <Label htmlFor="subject">Subject *</Label>
                  <Input
                    id="subject"
                    placeholder="How can we help you?"
                    {...register("subject")}
                    className="mt-1"
                  />
                  {errors.subject && (
                    <p className="text-sm text-destructive mt-1">{errors.subject.message}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us more about your inquiry..."
                    rows={5}
                    {...register("message")}
                    className="mt-1"
                  />
                  {errors.message && (
                    <p className="text-sm text-destructive mt-1">{errors.message.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-white py-6 text-base"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Right Column - Map and Info */}
          <div className="space-y-6">
            {/* Map Placeholder */}
            <Card className="shadow-lg border-0 overflow-hidden">
              <div className="relative h-64 bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white mb-2">
                    <MapPin className="h-8 w-8" />
                  </div>
                  <p className="text-sm text-muted-foreground">Interactive map coming soon</p>
                </div>
              </div>
              <CardContent className="p-6 bg-white">
                <h3 className="font-bold text-lg mb-1">SparrowG Headquarters</h3>
                <p className="text-muted-foreground text-sm mb-1"> T-WORKS FOUNDATION, Plot 1/D, 1/E, 1/F, Survey No. 83/1, Raidurgam</p>
                <p className="text-muted-foreground text-sm">Hyderabad 500081, India</p>
              </CardContent>
            </Card>

            {/* Office Hours */}
            <Card className="shadow-lg border-0">
              <CardContent className="p-6">
                <h3 className="font-bold text-xl mb-4">Office Hours</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Monday - Friday</span>
                    <span className="font-medium">10:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Saturday</span>
                    <span className="font-medium">10:00 AM - 4:00 PM</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Need Immediate Help */}
            <Card className="shadow-lg border-0 bg-gradient-to-br from-primary/5 to-primary/10">
              <CardContent className="p-6">
                <h3 className="font-bold text-xl mb-2">Need Immediate Help?</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Check out our FAQ section below or browse our help center for instant answers.
                </p>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="font-medium">Email: </span>
                    <a href="mailto:support@sparrowg.com" className="text-primary hover:underline">
                      support@sparrowg.com
                    </a>
                  </div>
                  <div>
                    <span className="font-medium">Phone: </span>
                    <a href="tel:9493017356" className="text-primary hover:underline">
                      +91 9493017356
                    </a>
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
