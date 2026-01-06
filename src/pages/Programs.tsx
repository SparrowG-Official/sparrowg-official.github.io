import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Box, Glasses, Users, Gift } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProgramCard } from "@/components/ProgramCard";
import { EnrollmentModal } from "@/components/EnrollmentModal";

const programs = [
  {
    id: "stem-kits",
    title: "STEM Kits",
    description:
      "Hands-on learning kits that bring science, technology, engineering, and math to life. Build robots, circuits, and complete science projects at home or school with expert-designed materials.",
    icon: Box,
    color: "bg-science/10 text-science",
    gradient: "from-science/10 to-science/5",
    audience: ["Parents", "Schools"],
    ageGroup: "Ages 5-16",
    duration: "Self-paced learning",
    curriculum: [
      "Basic Electronics & Circuit Building",
      "Robotics Fundamentals",
      "Coding with Arduino & Scratch",
      "Physics & Engineering Concepts",
      "Chemistry Experiments (Safe)",
      "Mathematics through Puzzles",
      "Environmental Science Projects",
      "3D Thinking & Spatial Skills",
    ],
    pricingTiers: [
      {
        name: "Starter Kit",
        price: "₹1,499",
        duration: "One-time purchase",
        features: [
          "5 Project modules",
          "50+ Components",
          "Video tutorials",
          "Project workbook",
          "Certificate of completion",
        ],
      },
      {
        name: "Explorer Bundle",
        price: "₹3,999",
        duration: "One-time purchase",
        popular: true,
        features: [
          "12 Project modules",
          "150+ Components",
          "Live Q&A sessions",
          "Parent guide included",
          "1 Year support access",
          "Bonus: Coding basics",
        ],
      },
      {
        name: "Annual Subscription",
        price: "₹8,999",
        duration: "Per year",
        features: [
          "Monthly new kits (12/year)",
          "300+ Components",
          "Priority live support",
          "Community access",
          "Progress tracking dashboard",
          "Exclusive member events",
        ],
      },
    ],
  },
  {
    id: "ar-vr-learning",
    title: "AR/VR Learning",
    description:
      "Immersive virtual and augmented reality experiences that transform abstract concepts into tangible learning. Explore virtual labs, dissect molecules, and travel through history.",
    icon: Glasses,
    color: "bg-technology/10 text-technology",
    gradient: "from-technology/10 to-technology/5",
    audience: ["Schools", "Corporates"],
    duration: "Flexible scheduling",
    curriculum: [
      "Virtual Science Laboratory",
      "3D Anatomy & Biology",
      "Historical Site Explorations",
      "Space & Astronomy Journeys",
      "Chemistry Molecular Visualization",
      "Physics Simulations",
      "Geography & Earth Sciences",
      "Engineering Design Thinking",
    ],
    pricingTiers: [
      {
        name: "Classroom Pack",
        price: "₹24,999",
        duration: "Per semester",
        features: [
          "10 VR Headset licenses",
          "20+ Learning modules",
          "Teacher training session",
          "Curriculum alignment support",
          "Usage analytics dashboard",
        ],
      },
      {
        name: "School License",
        price: "₹89,999",
        duration: "Per year",
        popular: true,
        features: [
          "Unlimited student access",
          "50+ Learning modules",
          "Dedicated account manager",
          "Custom content creation",
          "Integration with LMS",
          "Quarterly reviews",
        ],
      },
      {
        name: "Enterprise",
        price: "Custom",
        duration: "Contact us",
        features: [
          "Multi-campus deployment",
          "Custom module development",
          "White-label option",
          "API integration",
          "24/7 Premium support",
          "On-site training",
        ],
      },
    ],
  },
  {
    id: "workshops",
    title: "Expert-Led Workshops",
    description:
      "Interactive sessions conducted by industry experts and educators. Perfect for schools, communities, and corporate teams seeking hands-on STEM learning experiences.",
    icon: Users,
    color: "bg-engineering/10 text-engineering",
    gradient: "from-engineering/10 to-engineering/5",
    audience: ["Schools", "Corporates"],
    duration: "Half-day to Multi-day",
    curriculum: [
      "Robotics & Automation Workshop",
      "AI & Machine Learning Basics",
      "IoT & Smart Devices",
      "Renewable Energy Projects",
      "Design Thinking Sessions",
      "Coding Bootcamps",
      "Science Fair Preparation",
      "STEM Career Exploration",
    ],
    pricingTiers: [
      {
        name: "Single Workshop",
        price: "₹4,999",
        duration: "Per session (2-3 hrs)",
        features: [
          "Up to 30 participants",
          "All materials provided",
          "Take-home project kit",
          "Digital certificate",
          "Follow-up resources",
        ],
      },
      {
        name: "Workshop Series",
        price: "₹18,999",
        duration: "5 sessions",
        popular: true,
        features: [
          "Up to 30 participants",
          "Progressive curriculum",
          "Materials for all sessions",
          "Portfolio of projects",
          "Competition preparation",
          "Parent showcase event",
        ],
      },
      {
        name: "Annual Partnership",
        price: "₹99,999",
        duration: "Per year",
        features: [
          "12 Workshops/year",
          "Custom curriculum design",
          "Teacher training included",
          "STEM club support",
          "Science fair mentorship",
          "Priority scheduling",
        ],
      },
    ],
  },
  {
    id: "corporate-gifting",
    title: "Corporate Gifting",
    description:
      "Unique STEM-themed gifts that educate and inspire. Custom-branded learning kits perfect for employee engagement, client appreciation, and CSR initiatives.",
    icon: Gift,
    color: "bg-mathematics/10 text-mathematics",
    gradient: "from-mathematics/10 to-mathematics/5",
    audience: ["Corporates"],
    duration: "2-4 weeks delivery",
    curriculum: [
      "Family STEM Bonding Kits",
      "Executive Desk Gadgets",
      "Team Building Challenges",
      "Innovation Starter Packs",
      "Kids of Employees Kits",
      "Client Appreciation Sets",
      "CSR Education Bundles",
      "Branded Learning Products",
    ],
    pricingTiers: [
      {
        name: "Starter Order",
        price: "₹999",
        duration: "Per unit (Min. 25)",
        features: [
          "Standard STEM kit",
          "Basic customization",
          "Gift packaging",
          "Delivery across India",
          "Digital thank you cards",
        ],
      },
      {
        name: "Premium Bundle",
        price: "₹2,499",
        duration: "Per unit (Min. 50)",
        popular: true,
        features: [
          "Premium kit selection",
          "Full brand customization",
          "Luxury packaging",
          "Personalized message",
          "Express delivery",
          "Impact certificate",
        ],
      },
      {
        name: "Enterprise Program",
        price: "Custom",
        duration: "Annual contract",
        features: [
          "Quarterly gifting calendar",
          "Exclusive product design",
          "CSR impact reporting",
          "Employee portal access",
          "Dedicated coordinator",
          "Volume discounts",
        ],
      },
    ],
  },
];

const Programs = () => {
  const [enrollmentModal, setEnrollmentModal] = useState({
    isOpen: false,
    program: "",
    tier: "",
  });

  const handleEnroll = (program: string, tier: string) => {
    setEnrollmentModal({ isOpen: true, program, tier });
  };

  const closeModal = () => {
    setEnrollmentModal({ isOpen: false, program: "", tier: "" });
  };

  return (
    <>
      <Helmet>
        <title>Programs & Courses | SparrowG - STEM Education for All Ages</title>
        <meta
          name="description"
          content="Explore SparrowG's comprehensive STEM programs: hands-on kits, AR/VR learning, expert workshops, and corporate gifting solutions. Enroll today!"
        />
      </Helmet>

      <Navbar />

      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-hero">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">
                Our Programs
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Transform Learning with{" "}
                <span className="text-gradient-primary">STEM Excellence</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive programs designed for every learner. From curious kids to
                forward-thinking organizations, find the perfect STEM journey.
              </p>
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section className="section-padding">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="space-y-12">
              {programs.map((program) => (
                <ProgramCard
                  key={program.id}
                  {...program}
                  onEnroll={handleEnroll}
                />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-subtle">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Not Sure Which Program Fits?
              </h2>
              <p className="text-muted-foreground mb-8">
                Our education consultants can help you choose the perfect STEM journey
                based on your goals, age group, and requirements.
              </p>
              <a
                href="/#contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:opacity-90 transition-opacity"
              >
                Book a Free Consultation
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <EnrollmentModal
        isOpen={enrollmentModal.isOpen}
        onClose={closeModal}
        program={enrollmentModal.program}
        tier={enrollmentModal.tier}
      />
    </>
  );
};

export default Programs;
