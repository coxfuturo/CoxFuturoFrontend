'use client';

import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle,
  Layers,
  Figma,
  Smartphone,
  PenTool,
  Users,
  BarChart3,
  Sparkles,
  Target,
  Zap,
  Globe,
  Palette,
  Package,
  Rocket,
  Eye,
  Code,
  Heart,
  Briefcase,
  Cpu,
  TrendingUp,
  Shield
} from "lucide-react";
import { Button } from "@/components/ui/button";
import EnquiryModal from "@/components/EnquiryModal";
import { AnimatePresence } from "framer-motion";

/* ================= ENHANCED DIVIDER ================= */
const Divider = () => {
  return (
    <div className="relative flex justify-center">
      <div className="h-px w-full max-w-4xl bg-gradient-to-r from-transparent via-crypto-purple/30 to-transparent"></div>
      <div className="absolute -top-3 px-4">
        <Sparkles className="h-6 w-6 text-crypto-purple" />
      </div>
    </div>
  );
};

/* ================= SERVICE CARD ================= */
const ServiceCard = ({ icon: Icon, title, description, delay }) => {
  return (
    <div
      className="group bg-gradient-to-b from-white/5 to-transparent backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-crypto-purple/50 hover:shadow-2xl hover:shadow-crypto-purple/20 transition-all duration-300 hover:-translate-y-2 cursor-pointer"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="inline-flex p-4 rounded-xl bg-gradient-to-br from-crypto-purple/20 to-crypto-purple/5 mb-6 group-hover:from-crypto-purple/30 group-hover:to-crypto-purple/10">
        <Icon className="h-8 w-8 text-crypto-purple" />
      </div>
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    </div>
  );
};

/* ================= ENHANCED ICON BOX ================= */
const IconBox = ({ icon: Icon, title, description }) => {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0">
        <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-crypto-purple/20 to-blue-500/10 flex items-center justify-center">
          <Icon className="h-6 w-6 text-crypto-purple" />
        </div>
      </div>
      <div>
        <h4 className="text-white font-semibold mb-1">{title}</h4>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>
    </div>
  );
};

const UiUx = () => {
  const [openEnquiry, setOpenEnquiry] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  const openModal = (service = "") => {
    setSelectedService(service);
    setOpenEnquiry(true);
  };

  const uiuxServices = [
    {
      icon: PenTool,
      title: "UI Design & Branding",
      description: "Pixel-perfect interfaces that align with your brand identity and business goals."
    },
    {
      icon: Users,
      title: "User Experience Strategy",
      description: "Research-driven UX planning to create intuitive user journeys and flows."
    },
    {
      icon: Smartphone,
      title: "Mobile & Web UI/UX",
      description: "Responsive designs that work seamlessly across all devices and platforms."
    },
    {
      icon: Layers,
      title: "Wireframes & Prototypes",
      description: "Interactive prototypes to test and validate design concepts before development."
    },
    {
      icon: Figma,
      title: "Design Systems",
      description: "Scalable design systems that ensure consistency and speed up development."
    },
    {
      icon: BarChart3,
      title: "UX Optimization",
      description: "Data-driven improvements to enhance conversion rates and user satisfaction."
    }
  ];

  const productDesignServices = [
    {
      icon: Package,
      title: "Product Discovery",
      description: "Market research, competitor analysis and idea validation to build the right product."
    },
    {
      icon: Users,
      title: "User Research & Testing",
      description: "Understanding real user problems through interviews, surveys, and usability testing."
    },
    {
      icon: Layers,
      title: "Wireframing & Prototyping",
      description: "Low & high-fidelity prototypes to validate ideas quickly and reduce development risks."
    },
    {
      icon: PenTool,
      title: "Visual Product Design",
      description: "Modern, brand-driven UI aligned with business goals and user expectations."
    },
    {
      icon: BarChart3,
      title: "Product Strategy",
      description: "Defining MVP scope, roadmap, and growth-focused design decisions."
    },
    {
      icon: Rocket,
      title: "Launch & Scale Support",
      description: "Design systems and iterations for long-term scalability and user adoption."
    }
  ];

  const benefits = [
    {
      icon: Target,
      title: "User-Centric Approach",
      description: "Every design decision is backed by user research and behavior analysis."
    },
    {
      icon: Zap,
      title: "Fast Delivery",
      description: "Agile workflow ensures rapid iteration and timely project delivery."
    },
    {
      icon: Globe,
      title: "Cross-Platform Excellence",
      description: "Designs that work flawlessly on web, mobile, tablet, and desktop."
    },
    {
      icon: Palette,
      title: "Visual Excellence",
      description: "Aesthetically pleasing interfaces that create memorable experiences."
    }
  ];

  const productBenefits = [
    {
      icon: Cpu,
      title: "Product-First Mindset",
      description: "We think beyond visuals to solve real business problems with design."
    },
    {
      icon: TrendingUp,
      title: "Market-Driven Design",
      description: "Designs validated through market research and competitor analysis."
    },
    {
      icon: Briefcase,
      title: "Business Alignment",
      description: "Every design decision supports your business goals and ROI."
    },
    {
      icon: Shield,
      title: "Future-Proof Solutions",
      description: "Scalable designs that grow with your business and user base."
    }
  ];

  const whyChooseUs = [
    "User-centric & research-backed approach",
    "Agile & transparent workflow",
    "High-performance & accessible UI",
    "Startup & enterprise friendly",
    "Affordable pricing with premium quality",
    "Dedicated UI/UX & Product Design experts",
    "End-to-end product development support",
    "Post-launch optimization & maintenance"
  ];

  return (
    <>
      {/* ================= FIXED BACKGROUND WITH PARALLAX ================= */}
      <div className="relative min-h-screen overflow-hidden">
        {/* MAIN BACKGROUND */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: "url('/image/web-design-concepts-with-blurred-background.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        >
          {/* GRADIENT OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-br from-black via-black/30 to-purple-950/30"></div>

          {/* ANIMATED GRADIENTS */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-crypto-purple/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        </div>

        {/* ================= PAGE CONTENT ================= */}
        <div className="relative z-10">

          {/* ================= ENHANCED HERO SECTION ================= */}
          <section className="min-h-screen flex items-center pt-16">
            <div className="container mx-auto px-4 py-12 md:py-24 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

              {/* LEFT CONTENT */}
              <div className="order-2 lg:order-1">
                <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-gradient-to-r from-crypto-purple/20 to-blue-500/10 border border-crypto-purple/30">
                  <Sparkles className="h-4 w-4 text-crypto-purple" />
                  <span className="text-sm font-medium text-crypto-purple">
                    UI/UX & Product Design Services
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
                  Designs That{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-crypto-purple via-purple-400 to-blue-400">
                    Convert & Connect
                  </span>
                </h1>

                <div className="space-y-4 mb-8 max-w-xl">
                  <p className="text-lg text-gray-300">
                    At <strong className="text-white">CoxFuture</strong>, we transform complex problems into
                    intuitive, beautiful, and functional digital experiences.
                  </p>
                  <p className="text-gray-400">
                    From initial concept to market-ready product, we craft interfaces that users love
                    and businesses trust—driving engagement, growth, and product success.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    onClick={() => openModal("UI/UX & Product Design Consultation")}
                    className="bg-gradient-to-r from-crypto-purple to-blue-600 hover:from-crypto-purple/90 hover:to-blue-600/90 px-8 py-6 rounded-xl shadow-lg shadow-crypto-purple/25"
                  >
                    Get Free Design Audit
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white/30 bg-transparent hover:bg-white/5 px-8 py-6 rounded-xl"
                    onClick={() => {
                      const element = document.getElementById('uiux-services');
                      element?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    View Our Services
                  </Button>
                </div>
              </div>

              {/* RIGHT IMAGE - ENHANCED */}
              <div className="order-1 lg:order-2 relative">
                <div className="relative" style={{ height: "380px" }}>
                  <div className="relative h-full w-full flex items-center justify-center">
                    <img
                      src="/image/design-removebg-preview.png"
                      alt="UI UX Design"
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <Divider />

          {/* ================= ENHANCED UI/UX SERVICES SECTION ================= */}
          <section id="uiux-services" className="py-16 md:py-24">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                  Comprehensive{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-crypto-purple to-blue-400">
                    UI/UX Services
                  </span>
                </h2>
                <p className="text-gray-400 text-lg">
                  From research to implementation, we cover every aspect of the
                  design process to deliver exceptional user experiences.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {uiuxServices.map((service, index) => (
                  <ServiceCard
                    key={index}
                    {...service}
                    delay={index * 100}
                  />
                ))}
              </div>
            </div>
          </section>

          <Divider />

          {/* ================= PRODUCT DESIGN SERVICES SECTION ================= */}
          <section id="product-design" className="py-16 md:py-24 bg-gradient-to-b from-transparent to-black/20">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                  End-to-End{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-crypto-purple to-blue-400">
                    Product Design
                  </span>
                </h2>
                <p className="text-gray-400 text-lg">
                  Transform your idea into a market-ready product with our comprehensive
                  product design services—from discovery to launch.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {productDesignServices.map((service, index) => (
                  <ServiceCard
                    key={index}
                    {...service}
                    delay={index * 100 + 200}
                  />
                ))}
              </div>

              <div className="mt-12 text-center">
                <Button
                  onClick={() => openModal("Product Design Consultation")}
                  className="bg-gradient-to-r from-purple-600 to-crypto-purple hover:from-purple-700 hover:to-crypto-purple/90 px-8 py-6 rounded-xl"
                >
                  Start Your Product Journey
                  <Rocket className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </section>

          <Divider />

          {/* ================= BENEFITS SECTION ================= */}
          <section className="py-16 md:py-24">
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-14 items-center">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-crypto-purple/20 to-transparent rounded-3xl blur-2xl"></div>
                  <img
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80"
                    alt="UX Research & Testing"
                    className="relative rounded-2xl shadow-2xl border border-white/10"
                  />

                  {/* STATS OVERLAY */}
                  <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-black/90 to-purple-950/90 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl w-64">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400 text-sm">Conversion Rate</span>
                        <span className="text-green-400 font-bold">+47%</span>
                      </div>
                      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-green-500 to-emerald-400 w-3/4"></div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400 text-sm">User Satisfaction</span>
                        <span className="text-blue-400 font-bold">94%</span>
                      </div>
                      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 w-[94%]"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                    Research-Driven &{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-crypto-purple to-blue-400">
                      Result-Focused
                    </span>
                  </h2>
                  <p className="text-gray-300 mb-6 text-lg">
                    Great design solves real problems. We combine user research,
                    data analysis, and creative execution to build experiences
                    that drive business results and product success.
                  </p>

                  <div className="space-y-6 mb-8">
                    {benefits.map((benefit, index) => (
                      <IconBox key={index} {...benefit} />
                    ))}
                  </div>

                  <Button
                    onClick={() => openModal("Research-Driven Design")}
                    className="bg-gradient-to-r from-crypto-purple to-blue-600 hover:from-crypto-purple/90 hover:to-blue-600/90 px-8 py-6 rounded-xl"
                  >
                    Get Your UX Audit
                  </Button>
                </div>
              </div>
            </div>
          </section>

          <Divider />

          {/* ================= PRODUCT PROCESS SECTION ================= */}
          <section className="py-16 md:py-24 bg-gradient-to-b from-transparent to-black/30">
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-14 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                    Our{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-crypto-purple to-blue-400">
                      Product Design Process
                    </span>
                  </h2>
                  <p className="text-gray-300 mb-6 text-lg">
                    We follow a structured yet flexible product design approach
                    ensuring faster validation, reduced risks and better outcomes.
                  </p>

                  <div className="space-y-6 mb-8">
                    {[
                      {
                        title: "Idea & Requirement Discovery",
                        description: "Deep dive into your business goals and user needs"
                      },
                      {
                        title: "User Research & Validation",
                        description: "Validate problems through interviews and testing"
                      },
                      {
                        title: "Wireframes & Rapid Prototyping",
                        description: "Quick iterations to test concepts before development"
                      },
                      {
                        title: "Visual Design & Usability Testing",
                        description: "Polished interfaces tested with real users"
                      },
                      {
                        title: "Development Handoff & Launch",
                        description: "Smooth transition to development with ongoing support"
                      }
                    ].map((step, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <div className="flex-shrink-0 mt-1">
                          <div className="h-8 w-8 rounded-full bg-gradient-to-r from-crypto-purple/20 to-blue-500/10 flex items-center justify-center">
                            <span className="text-sm font-bold text-crypto-purple">{index + 1}</span>
                          </div>
                        </div>
                        <div>
                          <h4 className="text-white font-semibold mb-1">{step.title}</h4>
                          <p className="text-gray-400 text-sm">{step.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-l from-blue-500/10 to-transparent rounded-3xl blur-2xl"></div>
                  <img
                    src="/image/process.jpg"
                    alt="Product Strategy"
                    className="relative rounded-2xl shadow-2xl border border-white/10"
                  />
                </div>
              </div>
            </div>
          </section>

          <Divider />

          {/* ================= ENHANCED WHY CHOOSE US ================= */}
          <section className="py-16 md:py-24">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                  Why{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-crypto-purple to-blue-400">
                    CoxFuture
                  </span>{" "}
                  Stands Out
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                  We don't just design interfaces—we create experiences that
                  resonate with users and deliver measurable business value.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {whyChooseUs.map((item, i) => (
                  <div
                    key={i}
                    className="flex gap-4 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-crypto-purple/30 transition-colors group"
                  >
                    <CheckCircle className="text-crypto-purple flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                    <p className="text-gray-300 group-hover:text-white transition-colors">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <Divider />

          {/* ================= ENHANCED FINAL CTA ================= */}
          <section className="py-16 md:py-24 text-center relative">
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-3xl mx-auto bg-gradient-to-br from-white/5 to-transparent backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
                <div className="inline-flex p-3 rounded-full bg-gradient-to-r from-crypto-purple/20 to-blue-500/10 border border-crypto-purple/30 mb-6">
                  <Sparkles className="h-6 w-6 text-crypto-purple" />
                </div>

                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                  Ready to Transform Your{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-crypto-purple via-purple-400 to-blue-400">
                    Digital Experience?
                  </span>
                </h2>

                <p className="text-gray-300 mb-8 max-w-xl mx-auto text-lg">
                  Let's collaborate to create a UI/UX that delights your users
                  and accelerates your business growth.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    onClick={() => openModal("Start UI/UX Project")}
                    className="bg-gradient-to-r from-crypto-purple to-blue-600 hover:from-crypto-purple/90 hover:to-blue-600/90 px-10 py-7 rounded-xl text-lg shadow-lg shadow-crypto-purple/30"
                  >
                    Start Your Project Today
                    <ArrowRight className="ml-3 h-5 w-5" />
                  </Button>

                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white/30 bg-transparent hover:bg-white/5 px-10 py-7 rounded-xl text-lg"
                    onClick={() => openModal("Product Design Consultation")}
                  >
                    <Package className="mr-3 h-5 w-5" />
                    Start Product Design
                  </Button>
                </div>

                <p className="text-gray-500 text-sm mt-8">
                  Get a free design concept within 48 hours
                </p>
              </div>
            </div>
          </section>

        </div>
      </div>

      {/* ================= MODAL ================= */}
      <AnimatePresence>
        {openEnquiry && (
          <EnquiryModal
            open={selectedService}
            onOpenChange={() => setOpenEnquiry(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default UiUx;