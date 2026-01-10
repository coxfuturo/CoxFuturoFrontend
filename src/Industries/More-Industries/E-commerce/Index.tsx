'use client';

import { useState } from "react";
import {
  ArrowRight,
  ShoppingCart,
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

const ECommerceIndustry = () => {
  const [openEnquiry, setOpenEnquiry] = useState(false);

  return (
    <>
    <div className="relative w-full min-h-screen">

    
      {/* ================= HERO ================= */}
      <section className="relative min-h-screen flex items-center overflow-hidden
        bg-gradient-to-br from-[#02402b] via-[#197151] to-[#1a4433]"
      >
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-24 left-16 w-96 h-96 bg-green-400/20 blur-3xl rounded-full animate-pulse" />
          <div className="absolute bottom-20 right-16 w-96 h-96 bg-emerald-400/20 blur-3xl rounded-full animate-pulse delay-1000" />
        </div>

        <div className="container mx-auto px-4 py-28 mt-16 grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 mb-5 px-5 py-1 text-xs rounded-full
              bg-white/10 border border-white/20 text-green-100"
            >
              <Sparkles size={14} /> E-Commerce Solutions
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
              E-Commerce Platforms That
              <span className="block text-emerald-100"> Sell & Convert</span>
            </h1>

            <p className="text-lg text-gray-100 max-w-xl mb-6">
              CoxFuture creates high-performance e-commerce platforms optimized
              for user experience, conversions, and scalability.
            </p>

            <p className="text-gray-200 max-w-xl mb-8">
              From online stores to marketplaces, we provide fully-featured solutions
              to manage products, orders, payments, and customers efficiently.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => setOpenEnquiry(true)}
                size="lg"
                className="bg-emerald-500 hover:bg-emerald-600 px-9 py-6 group"
              >
                Start E-Commerce Project
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white py-6"
              >
                Explore Solutions
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
              src="/image/E-COM.png"
              alt="E-Commerce Industry"
              // className="rounded-3xl shadow-2xl border border-white/10"
            />
          </motion.div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="py-24 bg-[#2c6454]">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <img
            src="/image/E-2.png"
            alt="E-Commerce Solutions"
            // className="rounded-2xl shadow-2xl w-full"
          />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-green-300">
              Scalable E-Commerce Solutions
            </h2>

            <p className="text-gray-100 mb-6">
              We build e-commerce platforms that drive sales, enhance customer
              engagement, and provide seamless shopping experiences.
            </p>

            <p className="text-gray-200 mb-6">
              Our team ensures that every platform is fast, secure, and fully integrated
              with payment gateways, analytics, and inventory management tools.
            </p>

            <div className="space-y-3">
              {[
                "Custom online store development",
                "Payment & shipping integrations",
                "User-friendly admin dashboards",
                "Analytics & conversion tracking"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="text-green-400 mt-1" />
                  <p className="text-gray-200 text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>

          
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
            Key Features We Provide
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: ShoppingCart, title: "Seamless Shopping", desc: "Smooth and engaging shopping experience for users." },
              { icon: Zap, title: "Fast Performance", desc: "Optimized for speed and quick checkout." },
              { icon: Globe, title: "Global Reach", desc: "Support multi-currency and multi-language." },
              { icon: Layers, title: "Inventory Management", desc: "Efficient stock control and catalog management." },
              { icon: BarChart3, title: "Analytics & Reporting", desc: "Track sales, traffic, and conversion data." },
              { icon: Zap, title: "Cross-Platform", desc: "Works on web, mobile, and tablet devices." }
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                className="bg-white/5 border border-white/10 rounded-xl p-8 text-center"
              >
                <item.icon className="mx-auto mb-4 text-green-400" size={36} />
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 bg-gradient-to-r from-green-500 to-emerald-400 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
          Launch Your E-Commerce Platform Today
        </h2>
        <p className="text-gray-100 mb-8 max-w-2xl mx-auto">
          Partner with CoxFuture to build a robust e-commerce platform that
          engages customers and drives revenue.
        </p>

        <Button
          onClick={() => setOpenEnquiry(true)}
          size="lg"
          className="bg-black text-white px-10 py-6"
        >
          Get E-Commerce Consultation
        </Button>
      </section>

      {/* ================= MODAL ================= */}
      <AnimatePresence>
        {openEnquiry && (
          <EnquiryModal
            open="E-Commerce Industry"
            onOpenChange={() => setOpenEnquiry(false)}
          />
        )}
      </AnimatePresence>
      </div>
    </>
  );
};

export default ECommerceIndustry;
