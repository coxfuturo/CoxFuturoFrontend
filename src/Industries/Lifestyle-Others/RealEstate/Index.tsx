'use client';

import { useState } from "react";
import {
  ArrowRight,
  Home,
  Layers,
  BarChart3,
  CheckCircle,
  Globe,
  Zap,
  Sparkles
} from "lucide-react";

import { Button } from "@/components/ui/button";
import EnquiryModal from "@/components/EnquiryModal";
import { AnimatePresence, motion } from "framer-motion";

const RealEstateIndustry = () => {
  const [openEnquiry, setOpenEnquiry] = useState(false);

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative min-h-screen flex items-center overflow-hidden
        bg-gradient-to-br from-[#f97316] via-[#fb923c] to-[#fdba74]"
      >
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-24 left-20 w-96 h-96 bg-orange-400/20 blur-3xl rounded-full animate-pulse" />
          <div className="absolute bottom-20 right-16 w-96 h-96 bg-yellow-400/20 blur-3xl rounded-full animate-pulse delay-1000" />
        </div>

        <div className="container mx-auto px-4 py-28 mt-16 grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 mb-5 px-5 py-1 text-xs rounded-full
              bg-white/10 border border-white/20 text-orange-200"
            >
              <Sparkles size={14} /> Real Estate Software Solutions
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
              Innovative Tools for
              <span className="block text-yellow-200"> Real Estate Businesses</span>
            </h1>

            <p className="text-lg text-gray-100 max-w-xl mb-6">
              CoxFuture develops smart software solutions for real estate agencies,
              property developers, and online marketplaces.
            </p>

            <p className="text-gray-200 max-w-xl mb-8">
              Manage properties, streamline sales, engage clients, and deliver virtual
              property tours with our custom-built real estate software.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => setOpenEnquiry(true)}
                size="lg"
                className="bg-yellow-500 hover:bg-yellow-600 px-9 py-6 group"
              >
                Build Real Estate Platform
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white py-6"
              >
                Explore Real Estate Solutions
              </Button>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <img
              src="/images/industries/realestate/hero.jpg"
              alt="Real Estate Industry"
              className="rounded-3xl shadow-2xl border border-white/10"
            />
          </motion.div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="py-24 bg-[#f97316]/10">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-yellow-400">
              Smart Software for Real Estate Management
            </h2>

            <p className="text-gray-100 mb-6">
              Our solutions simplify property management, sales tracking,
              and client engagement for real estate professionals.
            </p>

            <p className="text-gray-200 mb-6">
              From listing portals to CRM integrations and analytics dashboards,
              we create end-to-end solutions for modern real estate businesses.
            </p>

            <div className="space-y-3">
              {[
                "Property Management & Listings",
                "Client Relationship Management",
                "Virtual Tours & 3D Showcases",
                "Analytics & Market Insights"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="text-yellow-400 mt-1" />
                  <p className="text-gray-200 text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <img
            src="/images/industries/realestate/about.jpg"
            alt="Real Estate Software"
            className="rounded-2xl shadow-2xl w-full"
          />
        </div>
      </section>

      {/* ================= SOLUTIONS ================= */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
            Real Estate Solutions We Provide
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Home, title: "Property Management System", desc: "Manage listings, tenants, and sales efficiently." },
              { icon: Layers, title: "Client CRM", desc: "Track leads, follow-ups, and client interactions." },
              { icon: Globe, title: "Virtual Tours & 3D Models", desc: "Showcase properties interactively." },
              { icon: BarChart3, title: "Analytics & Insights", desc: "Get detailed reports on market trends." },
              { icon: Zap, title: "Fast & Secure", desc: "High-performance, scalable software." },
              { icon: Layers, title: "Cross-Platform Access", desc: "Accessible on mobile, web, and desktop." }
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                className="bg-white/5 border border-white/10 rounded-xl p-8 text-center"
              >
                <item.icon className="mx-auto mb-4 text-yellow-400" size={36} />
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 bg-gradient-to-r from-yellow-400 to-orange-500 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
          Ready to Transform Your Real Estate Business?
        </h2>
        <p className="text-gray-100 mb-8 max-w-2xl mx-auto">
          Partner with CoxFuture to build real estate platforms that streamline management,
          engage clients, and showcase properties effectively.
        </p>

        <Button
          onClick={() => setOpenEnquiry(true)}
          size="lg"
          className="bg-black text-white px-10 py-6"
        >
          Get Real Estate Software Consultation
        </Button>
      </section>

      {/* ================= MODAL ================= */}
      <AnimatePresence>
        {openEnquiry && (
          <EnquiryModal
            open="Real Estate Industry"
            onOpenChange={() => setOpenEnquiry(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default RealEstateIndustry;
