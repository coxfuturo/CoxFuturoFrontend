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
  BarChart3
} from "lucide-react";
import { Button } from "@/components/ui/button";
import EnquiryModal from "@/components/EnquiryModal";
import { AnimatePresence } from "framer-motion";

const UiUx = () => {
  const [openEnquiry, setOpenEnquiry] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  const openModal = (service = "") => {
    setSelectedService(service);
    setOpenEnquiry(true);
  };

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative min-h-screen flex items-center bg-gradient-hero hero-glow overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-80 h-80 bg-crypto-purple/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="container mx-auto px-4 py-24 mt-16">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* LEFT */}
            <div>
              <span className="inline-block mb-4 px-4 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-crypto-purple">
                UI / UX Design & Development Services
              </span>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                UI/UX That <span className="text-gradient">Users Love</span><br />
                & Businesses Trust
              </h1>

              <p className="text-lg text-gray-300 max-w-xl mb-6">
                At <strong>CoxFuture</strong>, we design intelligent, intuitive and
                conversion-focused user experiences that help brands stand out
                in today’s competitive digital world.
              </p>

              <p className="text-gray-400 max-w-xl mb-8">
                Whether you are launching a startup, scaling a SaaS platform or
                redesigning an enterprise product — our UI/UX solutions ensure
                usability, performance and emotional engagement.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  onClick={() => openModal("UI/UX Enquiry")}
                  className="bg-crypto-purple px-8 py-6 group"
                >
                  Get Free UI/UX Consultation
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition" />
                </Button>

                {/* <Button
                  size="lg"
                  variant="outline"
                  className="border-gray-700 text-white py-6 group"
                >
                  Explore Our Portfolio
                  <ArrowUpRight className="ml-2 h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition" />
                </Button> */}
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=900"
                  alt="UI UX Design Dashboard"
                  className="rounded-xl"
                />

                {/* <div className="absolute -top-6 -left-6 bg-black/60 rounded-xl p-4">
                  <p className="text-xs text-gray-400">Client Satisfaction</p>
                  <p className="text-2xl font-bold text-green-500">98%</p>
                </div>

                <div className="absolute -bottom-6 -right-6 bg-black/60 rounded-xl p-4">
                  <p className="text-xs text-gray-400">UI Projects Delivered</p>
                  <p className="text-2xl font-bold text-white">120+</p>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SERVICES DETAILS ================= */}
      <section className="py-24 bg-[#12141C]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-14 text-gradient">
            Complete UI/UX Design Services by CoxFuture
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: PenTool,
                title: "UI Design & Branding",
                desc: "Pixel-perfect interfaces aligned with your brand identity, ensuring consistency and visual excellence."
              },
              {
                icon: Users,
                title: "User Experience Strategy",
                desc: "Data-driven UX flows designed after deep user research and behavioral analysis."
              },
              {
                icon: Smartphone,
                title: "Mobile & Web UI/UX",
                desc: "Fully responsive and mobile-first designs for apps, SaaS platforms and websites."
              },
              {
                icon: Layers,
                title: "Wireframes & Prototypes",
                desc: "Interactive wireframes and clickable prototypes for better clarity and validation."
              },
              {
                icon: Figma,
                title: "Design Systems",
                desc: "Scalable design systems using Figma for faster development and consistency."
              },
              {
                icon: BarChart3,
                title: "UX Optimization",
                desc: "Performance, accessibility and conversion optimization for higher engagement."
              }
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-xl p-8"
              >
                <item.icon className="text-crypto-purple mb-4" />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= IMAGE + CONTENT ================= */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-14 items-center">
          <img
            src="https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=900"
            alt="UX Research"
            className="rounded-2xl shadow-2xl"
          />

          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Research-Driven & Conversion-Focused Design
            </h2>
            <p className="text-gray-300 mb-4">
              Our UI/UX design process starts with understanding your users,
              business goals and market competition. We believe great design
              is not just about looks — it’s about results.
            </p>
            <p className="text-gray-400 mb-6">
              By combining usability testing, accessibility standards and
              performance optimization, CoxFuture ensures your product delivers
              a smooth, engaging and inclusive experience across all platforms.
            </p>

            <Button
              onClick={() => openModal("UI/UX Enquiry")}
              className="bg-crypto-purple px-8 py-6"
            >
              Discuss Your Project
            </Button>
          </div>
        </div>
      </section>

      {/* ================= WHY COXFUTURE ================= */}
      <section className="py-24 bg-[#12141C]">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
            Why Choose CoxFuture for UI/UX?
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "User-centric & research-backed design methodology",
              "Agile and transparent collaboration",
              "High-performance & accessibility-compliant UI",
              "Startup-friendly & enterprise-grade solutions",
              "Affordable pricing with premium quality",
              "Dedicated UI/UX experts & ongoing support"
            ].map((item, i) => (
              <div
                key={i}
                className="flex gap-3 bg-white/5 border border-white/10 rounded-xl p-6"
              >
                <CheckCircle className="text-crypto-purple mt-1" />
                <p className="text-gray-300 text-sm">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="py-24 bg-gradient-hero text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Elevate Your Product Experience?
        </h2>
        <p className="text-gray-300 mb-8 max-w-xl mx-auto">
          Websites, Mobile Apps or SaaS Platforms —
          CoxFuture designs experiences that convert, engage and scale.
        </p>
        <Button
          size="lg"
          onClick={() => openModal("UI/UX Enquiry")}
          className="bg-crypto-purple px-10 py-6"
        >
          Start Your UI/UX Project
        </Button>
      </section>

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
