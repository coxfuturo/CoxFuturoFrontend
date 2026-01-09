'use client';

import { useState } from "react";
import {
  ArrowRight,
  Smartphone,
  Layers,
  BarChart3,
  CheckCircle,
  Truck,
  Sparkles,
  Globe,
  Zap
} from "lucide-react";

import { Button } from "@/components/ui/button";
import EnquiryModal from "@/components/EnquiryModal";
import { AnimatePresence, motion } from "framer-motion";

const FoodDeliveryIndustry = () => {
  const [openEnquiry, setOpenEnquiry] = useState(false);

  return (
    <>
    <div className="relative w-full min-h-screen">
      {/* ================= HERO ================= */}
      <section className="relative min-h-screen flex items-center overflow-hidden
        bg-gradient-to-br from-[#ff6f3c] via-[#ff914d] to-[#ffd6a5]"
      >
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-24 left-20 w-96 h-96 bg-orange-400/20 blur-3xl rounded-full animate-pulse" />
          <div className="absolute bottom-20 right-16 w-96 h-96 bg-red-400/20 blur-3xl rounded-full animate-pulse delay-1000" />
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
              <Sparkles size={14} /> Food Delivery Solutions
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
              Food Delivery Software That
              <span className="block text-orange-300"> Connects Restaurants & Customers</span>
            </h1>

            <p className="text-lg text-gray-100 max-w-xl mb-6">
              CoxFuture develops end-to-end food delivery solutions, from customer apps to
              restaurant dashboards, enabling seamless ordering and delivery experiences.
            </p>

            <p className="text-gray-200 max-w-xl mb-8">
              Improve delivery speed, reduce errors, track orders in real-time, and enhance
              customer satisfaction with our smart solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => setOpenEnquiry(true)}
                size="lg"
                className="bg-orange-600 hover:bg-orange-700 px-9 py-6 group"
              >
                Build Food Delivery App
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white py-6"
              >
                Explore Delivery Solutions
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
              src="/image/Food-1.png"
              alt="Food Delivery Industry"
              // className="rounded-3xl shadow-2xl border border-white/10"
            />
          </motion.div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="py-24 bg-[#ff914d]">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <img
            src="/image/Food-2.png"
            alt="Food Delivery Software"
            // className="rounded-2xl shadow-2xl w-full"
          />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Digital Solutions for Food Delivery
            </h2>

            <p className="text-gray-100 mb-6">
              From restaurant management to customer apps, we create integrated software
              solutions that streamline operations and boost customer engagement.
            </p>

            <p className="text-gray-200 mb-6">
              Real-time order tracking, delivery routing, inventory management, and
              analytics are all part of our complete food delivery ecosystem.
            </p>

            <div className="space-y-3">
              {[
                "Customer-facing mobile & web apps",
                "Restaurant order management systems",
                "Delivery routing & logistics management",
                "Analytics & reporting dashboards"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="text-orange-200 mt-1" />
                  <p className="text-gray-200 text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>

          
        </div>
      </section>

      {/* ================= SOLUTIONS ================= */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
            Food Delivery Solutions We Provide
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Smartphone, title: "Customer App", desc: "Seamless ordering and real-time tracking for users." },
              { icon: Truck, title: "Delivery Management", desc: "Route optimization and delivery assignment for drivers." },
              { icon: Layers, title: "Restaurant Dashboard", desc: "Manage menu, orders, and customer engagement efficiently." },
              { icon: BarChart3, title: "Analytics & Insights", desc: "Track sales, delivery performance, and customer behavior." },
              { icon: Globe, title: "Cross-Platform Access", desc: "Works on mobile, web, and tablet devices." },
              { icon: Zap, title: "Fast & Reliable", desc: "Optimized for speed, low latency, and seamless performance." }
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                className="bg-white/5 border border-white/10 rounded-xl p-8 text-center"
              >
                <item.icon className="mx-auto mb-4 text-orange-300" size={36} />
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 bg-gradient-to-r from-orange-600 to-red-500 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
          Ready to Launch Your Food Delivery App?
        </h2>
        <p className="text-gray-100 mb-8 max-w-2xl mx-auto">
          Partner with CoxFuture to build a full-featured food delivery platform
          for restaurants, drivers, and customers.
        </p>

        <Button
          onClick={() => setOpenEnquiry(true)}
          size="lg"
          className="bg-black text-white px-10 py-6"
        >
          Get Food Delivery Consultation
        </Button>
      </section>

      {/* ================= MODAL ================= */}
      <AnimatePresence>
        {openEnquiry && (
          <EnquiryModal
            open="Food Delivery Industry"
            onOpenChange={() => setOpenEnquiry(false)}
          />
        )}
      </AnimatePresence>

    </div>
      
    </>
  );
};

export default FoodDeliveryIndustry;
