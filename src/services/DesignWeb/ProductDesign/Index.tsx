'use client';

import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle,
  Package,
  PenTool,
  Layers,
  Users,
  BarChart3,
  Rocket
} from "lucide-react";
import { Button } from "@/components/ui/button";
import EnquiryModal from "@/components/EnquiryModal";
import { AnimatePresence } from "framer-motion";

const ProductDesign = () => {
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
                Product Design Services
              </span>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                From Idea to <span className="text-gradient">Market-Ready Product</span>
              </h1>

              <p className="text-lg text-gray-300 max-w-xl mb-6">
                At <strong>CoxFuture</strong>, we transform ideas into scalable,
                user-focused digital products. Our product design services
                help startups and enterprises build solutions users love.
              </p>

              <p className="text-gray-400 max-w-xl mb-8">
                We blend business strategy, UX research, and visual design
                to create products that are not only beautiful but also
                usable, feasible, and market-ready.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  onClick={() => openModal("Product Design Enquiry")}
                  className="bg-crypto-purple px-8 py-6 group"
                >
                  Get Product Design Consultation
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition" />
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="border-gray-700 text-white py-6 group"
                >
                  View Case Studies
                  <ArrowUpRight className="ml-2 h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition" />
                </Button>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=900"
                  alt="Product Design Process"
                  className="rounded-xl"
                />

                <div className="absolute -top-6 -left-6 bg-black/60 rounded-xl p-4">
                  <p className="text-xs text-gray-400">Products Designed</p>
                  <p className="text-2xl font-bold text-white">80+</p>
                </div>

                <div className="absolute -bottom-6 -right-6 bg-black/60 rounded-xl p-4">
                  <p className="text-xs text-gray-400">Market Success Rate</p>
                  <p className="text-2xl font-bold text-green-500">95%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="py-24 bg-[#12141C]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-14 text-gradient">
            Our Product Design Capabilities
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Package,
                title: "Product Discovery",
                desc: "Market research, competitor analysis and idea validation."
              },
              {
                icon: Users,
                title: "User Research",
                desc: "Understanding real user problems through interviews and testing."
              },
              {
                icon: Layers,
                title: "Wireframing & Prototyping",
                desc: "Low & high-fidelity prototypes to validate ideas quickly."
              },
              {
                icon: PenTool,
                title: "Visual Product Design",
                desc: "Modern, brand-driven UI aligned with business goals."
              },
              {
                icon: BarChart3,
                title: "Product Strategy",
                desc: "Defining MVP, roadmap and growth-focused design decisions."
              },
              {
                icon: Rocket,
                title: "Launch & Scale Support",
                desc: "Design systems and iterations for long-term scalability."
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

      {/* ================= PROCESS ================= */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-14 items-center">
          <img
            src="https://images.unsplash.com/photo-1581091870627-3b4c51c4c9d4?auto=format&fit=crop&w=900"
            alt="Product Strategy"
            className="rounded-2xl shadow-2xl"
          />

          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Product-First Design Process
            </h2>
            <p className="text-gray-300 mb-4">
              We follow a structured yet flexible product design approach
              ensuring faster validation, reduced risks and better outcomes.
            </p>

            <ul className="space-y-3">
              {[
                "Idea & requirement discovery",
                "User research & problem validation",
                "Wireframes and rapid prototyping",
                "Visual design & usability testing",
                "Handoff to development & launch support"
              ].map((step, i) => (
                <li key={i} className="flex gap-3">
                  <CheckCircle className="text-crypto-purple mt-1" />
                  <span className="text-gray-300 text-sm">{step}</span>
                </li>
              ))}
            </ul>

            <Button
              onClick={() => openModal("Product Design Enquiry")}
              className="mt-8 bg-crypto-purple px-8 py-6"
            >
              Start Your Product Journey
            </Button>
          </div>
        </div>
      </section>

      {/* ================= WHY COXFUTURE ================= */}
      <section className="py-24 bg-[#12141C]">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
            Why Choose CoxFuture for Product Design?
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Product-thinking mindset, not just visuals",
              "Startup-friendly MVP approach",
              "Strong UX + business alignment",
              "Scalable and future-ready designs",
              "Transparent communication & agile workflow",
              "Dedicated design experts & post-launch support"
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
          Ready to Build a Product Users Love?
        </h2>
        <p className="text-gray-300 mb-8 max-w-xl mx-auto">
          From concept to launch — CoxFuture helps you design
          products that succeed in the real world.
        </p>
        <Button
          size="lg"
          onClick={() => openModal("Product Design Enquiry")}
          className="bg-crypto-purple px-10 py-6"
        >
          Get Started with Product Design
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

export default ProductDesign;
