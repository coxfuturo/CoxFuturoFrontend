'use client';

import { useState } from "react";
import {
  ArrowRight,
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
  Eye,
  Code,
  Heart
} from "lucide-react";
import { Button } from "@/components/ui/button";
import EnquiryModal from "@/components/EnquiryModal";
import { AnimatePresence } from "framer-motion";

/* ================= ENHANCED DIVIDER ================= */
const Divider = () => {
  return (
    <div className="relative  flex justify-center">
      <div className="h-px w-full max-w-4xl bg-gradient-to-r from-transparent via-crypto-purple/30 to-transparent"></div>
      <div className="absolute -top-3  px-4">
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

const UiUx = () => {
  const [openEnquiry, setOpenEnquiry] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  const openModal = (service = "") => {
    setSelectedService(service);
    setOpenEnquiry(true);
  };

  const services = [
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
      title: "Cross-Platform",
      description: "Designs that work flawlessly on web, mobile, tablet, and desktop."
    },
    {
      icon: Palette,
      title: "Visual Excellence",
      description: "Aesthetically pleasing interfaces that create memorable experiences."
    }
  ];

  return (
    <>
      {/* ================= FIXED BACKGROUND WITH PARALLAX ================= */}
      <div className="relative min-h-screen overflow-hidden">
        {/* MAIN BACKGROUND */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: "url('/image/ui.jpg')",
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
                    UI / UX Design & Development Services
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
                    From initial concept to final pixel, we craft interfaces that users love
                    and businesses trust—driving engagement and growth.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    onClick={() => openModal("UI/UX Consultation")}
                    className="bg-gradient-to-r from-crypto-purple to-blue-600 hover:from-crypto-purple/90 hover:to-blue-600/90 px-8 py-6 rounded-xl shadow-lg shadow-crypto-purple/25"
                  >
                    Get Free UI/UX Audit
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white/30 bg-transparent hover:bg-white/5 px-8 py-6 rounded-xl"
                    onClick={() => {
                      const element = document.getElementById('services');
                      element?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    View Our Services
                  </Button>
                </div>
              </div>

              {/* RIGHT IMAGE - ENHANCED */}
              <div className="order-1 lg:order-2 relative">
                {/* MAIN CONTAINER WITH REDUCED HEIGHT */}
                <div className="relative" style={{ height: "380px" }}>
                  {/* GLOW EFFECT - REDUCED */}

                  {/* IMAGE CONTAINER - FITS PERFECTLY */}
                  <div className="relative h-full w-full flex items-center justify-center">
                    <img
                      src="/image/uix.png"
                      alt="UI UX Design"
                      className="max-h-full max-w-full object-contain"
                    />

                  </div>
                </div>
              </div>
            </div>
          </section>

          <Divider />

          {/* ================= ENHANCED SERVICES SECTION ================= */}
          <section id="services" className="py-16 md:py-24">
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
                {services.map((service, index) => (
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
                    that drive business results.
                  </p>

                  <div className="space-y-6 mb-8">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-crypto-purple/20 to-blue-500/10 flex items-center justify-center">
                            <benefit.icon className="h-6 w-6 text-crypto-purple" />
                          </div>
                        </div>
                        <div>
                          <h4 className="text-white font-semibold mb-1">{benefit.title}</h4>
                          <p className="text-gray-400 text-sm">{benefit.description}</p>
                        </div>
                      </div>
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

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  "User-centric & research-backed approach",
                  "Agile & transparent workflow",
                  "High-performance & accessible UI",
                  "Startup & enterprise friendly",
                  "Affordable pricing with premium quality",
                  "Dedicated UI/UX experts"
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex gap-4 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-crypto-purple/30 transition-colors"
                  >
                    <CheckCircle className="text-crypto-purple flex-shrink-0 mt-1" />
                    <p className="text-gray-300">{item}</p>
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

                  {/* <Button
                    size="lg"
                    variant="outline"
                    className="border-white/30 bg-transparent hover:bg-white/5 px-10 py-7 rounded-xl text-lg"
                    onClick={() => window.location.href = '/portfolio'}
                  >
                    View Portfolio
                  </Button> */}
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