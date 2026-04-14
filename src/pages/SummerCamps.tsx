import { Helmet } from "react-helmet-async";
import { ArrowLeft, Check, Phone, Mail, Calendar, Clock, GraduationCap, IndianRupee } from "lucide-react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";

const camps = [
  {
    id: "code-explorers",
    title: "SparrowG Code Explorers",
    tagline: "Where young minds learn to think, create, and innovate through code.",
    description:
      "At SparrowG, Coding is more than just learning syntax—it's about building thinkers, creators, and problem-solvers. The Code Explorers program introduces young learners to the exciting world of logic, creativity, and digital innovation through fun coding activities, game creation, and interactive projects.",
    highlights:
      "Students work on Electronics while actually Coding them. Students learn by doing—experimenting with ideas, solving challenges, and bringing their imagination to life through code. Every session is designed to build confidence, curiosity, and a strong foundation in future-ready technology skills.",
    features: [
      "Block Coding",
      "Team Building Activities",
      "Electronics Take Home Kit",
    ],
    grades: "5 – 9",
    ages: "9 – 15 Yrs",
    fee: "₹5,500",
    duration: "6 Days · Monday to Saturday",
    image: "/images/C0886T01.JPG",
    accentColor: "from-teal-500 to-cyan-600",
    badgeColor: "bg-teal-50 text-teal-700 border-teal-200",
  },
  {
    id: "young-innovators",
    title: "SparrowG Young Innovators Workshop",
    tagline: "Curiosity meets creativity in this high-energy STEM experience.",
    description:
      "A high-energy hands-on workshop where curiosity meets creativity. Designed specially for young minds, this SparrowG experience helps children explore STEM concepts through exciting build activities, mini experiments, and real-world engineering challenges.",
    highlights:
      "From problem-solving to teamwork and design thinking, every workshop encourages children to ask questions, test ideas, and learn through making. It's the perfect space for future inventors to begin their journey.",
    features: [
      "Ideation to Concept Development",
      "Design Thinking",
      "Product Engineering Introduction",
    ],
    grades: "5 – 9",
    ages: "9 – 15 Yrs",
    fee: "₹6,000",
    duration: "6 Days · Monday to Saturday",
    image: "/images/C0872T01.JPG",
    accentColor: "from-violet-500 to-purple-600",
    badgeColor: "bg-violet-50 text-violet-700 border-violet-200",
  },
  {
    id: "builders-lab",
    title: "SparrowG Builders Lab",
    tagline: "Build real machines. Learn real engineering.",
    description:
      "One of SparrowG's signature hands-on STEM experiences, this program allows students to build and control their own RC Model of Real World Machines Like Tower Crane, Excavator, Coal Miner, Agriculture Plougher etc, while learning the engineering principles behind how real machines work.",
    highlights:
      "From structural design, gears, and motors to remote control logic and basic coding concepts, students experience the complete process of building an intelligent mechanical system. This program blends mechanical engineering, electronics, and coding into one immersive learning journey.",
    features: [
      "Take Home Model (RC Tower Crane Model)",
      "Team Activities",
      "3D Printing and Part take home",
      "Electronics Coding",
    ],
    grades: "4 – 9",
    ages: "9 – 15 Yrs",
    fee: "₹8,000",
    duration: "6 Days · Monday to Saturday",
    image: "/images/C0813T01.JPG",
    accentColor: "from-orange-500 to-amber-600",
    badgeColor: "bg-orange-50 text-orange-700 border-orange-200",
  },
  {
    id: "ai-innovation-studio",
    title: "SparrowG AI & Innovation Studio",
    tagline: "For advanced learners ready to build the future.",
    description:
      "Built for advanced learners and future tech creators, this next-level SparrowG program dives into advanced sensors, smart automation, rapid prototyping, and modern coding workflows.",
    highlights:
      "Students work on real-world innovation projects using AI tools, advanced sensors, coding logic, and creative problem-solving frameworks. This is where learners move beyond building models and begin creating intelligent systems, digital solutions, and future-focused technology products.",
    features: [
      "Automation Basics via Coding",
      "Model Building",
      "Block Coding",
      "3D Printing and Part take home",
      "Basic Vibe Coding",
    ],
    grades: "4 – 9",
    ages: "9 – 15 Yrs",
    fee: "₹15,000",
    duration: "6 Days · Monday to Saturday",
    image: "/images/DSC00817.JPG",
    accentColor: "from-primary to-teal-600",
    badgeColor: "bg-accent text-accent-foreground border-primary/20",
  },
];

const ENQUIRY_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLScVFP45idHNYQuHdowOg4Raa4tIDUT7TvGrdpHtVG64e44ncA/viewform";

const SummerCamps = () => {

  return (
    <>
      <Helmet>
        <title>Summer Camps 2026 | SparrowG - Hands-On STEM for Young Learners</title>
        <meta
          name="description"
          content="Join SparrowG's Summer Camps 2026 — Code Explorers, Young Innovators, Builders Lab, and AI & Innovation Studio. 6-day hands-on programs for Grades 4–9."
        />
      </Helmet>

      <Navbar />

      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="pt-32 pb-20 bg-gradient-subtle relative overflow-hidden">
          <div className="absolute inset-0 stem-pattern pointer-events-none" />
          <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-10 right-20 w-80 h-80 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>

            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-6 border border-primary/20">
                <Calendar className="w-4 h-4" />
                Summer Camps 2026
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Learn. Build. <span className="text-gradient-primary">Innovate.</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Immersive 6-day summer programs where students don't just learn about
                technology — they build with it. Choose the experience that matches your
                child's curiosity.
              </p>

              <div className="flex flex-wrap justify-center gap-6 mt-10 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-primary" />
                  Grades 4 – 9
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary" />
                  6 Days · Mon – Sat
                </div>
                <div className="flex items-center gap-2">
                  <IndianRupee className="w-4 h-4 text-primary" />
                  Starting at ₹5,500
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Camp Cards */}
        <section className="section-padding">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="space-y-20">
              {camps.map((camp, index) => (
                <div
                  key={camp.id}
                  id={camp.id}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                    index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  {/* Image */}
                  <div className="relative group">
                    <div
                      className={`absolute -inset-2 bg-gradient-to-br ${camp.accentColor} rounded-3xl opacity-10 blur-xl group-hover:opacity-20 transition-opacity duration-500 pointer-events-none`}
                    />
                    <div className="relative rounded-2xl overflow-hidden shadow-elevated border border-border/40">
                      <img
                        src={camp.image}
                        alt={camp.title}
                        className="w-full h-72 lg:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div
                        className={`absolute inset-0 bg-gradient-to-t ${camp.accentColor} opacity-10`}
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-6">
                    <div>
                      <span
                        className={`inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full border ${camp.badgeColor} mb-4`}
                      >
                        Summer Camp
                      </span>
                      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-3">
                        {camp.title}
                      </h2>
                      <p className="text-primary font-medium italic">{camp.tagline}</p>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                      {camp.description}
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      {camp.highlights}
                    </p>

                    {/* Features */}
                    <div className="space-y-2">
                      {camp.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-3">
                          <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <Check className="w-3 h-3 text-primary" />
                          </div>
                          <span className="text-sm font-medium text-foreground">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Details Grid */}
                    <div className="grid grid-cols-2 gap-4 pt-2">
                      <div className="bg-muted/50 rounded-xl p-4 border border-border/50">
                        <p className="text-xs text-muted-foreground uppercase tracking-wide font-semibold mb-1">
                          Grades
                        </p>
                        <p className="font-bold text-foreground">{camp.grades}</p>
                      </div>
                      <div className="bg-muted/50 rounded-xl p-4 border border-border/50">
                        <p className="text-xs text-muted-foreground uppercase tracking-wide font-semibold mb-1">
                          Ages
                        </p>
                        <p className="font-bold text-foreground">{camp.ages}</p>
                      </div>
                      <div className="bg-muted/50 rounded-xl p-4 border border-border/50">
                        <p className="text-xs text-muted-foreground uppercase tracking-wide font-semibold mb-1">
                          Duration
                        </p>
                        <p className="font-bold text-foreground">{camp.duration}</p>
                      </div>
                      <div className="bg-primary/5 rounded-xl p-4 border border-primary/20">
                        <p className="text-xs text-muted-foreground uppercase tracking-wide font-semibold mb-1">
                          Program Fee
                        </p>
                        <p className="font-bold text-primary text-lg">{camp.fee}</p>
                      </div>
                    </div>

                    <a href={ENQUIRY_FORM_URL} target="_blank" rel="noopener noreferrer">
                      <Button size="lg" className="w-full sm:w-auto shadow-soft">
                        Enquire Now
                      </Button>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact / CTA */}
        <section className="section-padding bg-gradient-subtle relative overflow-hidden">
          <div className="absolute inset-0 stem-pattern pointer-events-none" />
          <div className="absolute top-10 left-20 w-48 h-48 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Secure Your Child's{" "}
                <span className="text-gradient-primary">Spot?</span>
              </h2>
              <p className="text-muted-foreground mb-10 leading-relaxed">
                Seats fill up fast. Reach out to us and we'll help you pick the right
                program for your child and get them registered.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
                <a
                  href="tel:+919000888358"
                  className="flex items-center gap-3 bg-card border border-border rounded-xl px-6 py-4 shadow-soft hover:shadow-card transition-shadow hover-lift"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs text-muted-foreground font-medium">Call Us</p>
                    <p className="font-semibold text-foreground">+91 90008 88358</p>
                  </div>
                </a>

                <a
                  href="mailto:hello@sparrowg.in"
                  className="flex items-center gap-3 bg-card border border-border rounded-xl px-6 py-4 shadow-soft hover:shadow-card transition-shadow hover-lift"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs text-muted-foreground font-medium">Email Us</p>
                    <p className="font-semibold text-foreground">hello@sparrowg.in</p>
                  </div>
                </a>
              </div>

              <Link to="/#contact">
                <Button size="lg" className="shadow-soft px-10">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />

    </>
  );
};

export default SummerCamps;
