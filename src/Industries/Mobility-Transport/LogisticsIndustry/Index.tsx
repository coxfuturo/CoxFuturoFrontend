'use client';

import { useState } from "react";
import {
  ArrowRight,
  Truck,
  Package,
  MapPin,
  BarChart3,
  Warehouse,
  Clock,
  ShieldCheck,
  Layers,
  CheckCircle,
  Sparkles
} from "lucide-react";

import { Button } from "@/components/ui/button";
import EnquiryModal from "@/components/EnquiryModal";
import { AnimatePresence, motion } from "framer-motion";

const LogisticsIndustry = () => {
  const [openEnquiry, setOpenEnquiry] = useState(false);

  return (
    <>
      {/* ================= HERO ================= */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden
        bg-gradient-to-br from-[#041428] via-[#062A4D] to-[#0A4C7D]"
      >
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-24 left-24 w-96 h-96 bg-sky-400/20 blur-3xl rounded-full animate-pulse" />
          <div className="absolute bottom-20 right-16 w-96 h-96 bg-blue-500/20 blur-3xl rounded-full animate-pulse delay-1000" />
        </div>

        <div className="container mx-auto px-4 py-28 mt-16 grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span
              className="inline-flex items-center gap-2 mb-5 px-5 py-1 text-xs rounded-full
              bg-white/10 border border-white/20 text-sky-300"
            >
              <Sparkles size={14} /> Logistics & Supply Chain
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
              Smart Software for
              <span className="block text-sky-300"> Modern Logistics</span>
            </h1>

            <p className="text-lg text-gray-200 max-w-xl mb-6">
              CoxFuture builds intelligent logistics software
              that improves visibility, efficiency and delivery performance.
            </p>

            <p className="text-gray-300 max-w-xl mb-8">
              From fleet tracking to warehouse automation,
              we empower logistics businesses with real-time data and control.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => setOpenEnquiry(true)}
                size="lg"
                className="bg-sky-500 hover:bg-sky-600 px-9 py-6 group"
              >
                Build Logistics Platform
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white py-6"
              >
                View Logistics Solutions
              </Button>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div>
              <img
              src="/image/S-L.png"
              alt="Logistics Industry"
              style={{ width: "350px" }}
            />

            </div>
            
          </motion.div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="py-24 bg-[#050F1D]">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <img
              src="/image/log.png"
              alt="Logistics Technology"
              className="rounded-2xl shadow-2xl w-full"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-sky-300">
              Why Digital Transformation Matters in Logistics
            </h2>

            <p className="text-gray-300 mb-6">
              Logistics operations rely on speed, accuracy
              and coordination across multiple touchpoints.
            </p>

            <p className="text-gray-400 mb-6">
              Software-driven logistics helps reduce delays,
              optimize routes and improve customer satisfaction.
            </p>

            <div className="space-y-3">
              {[
                "End-to-end shipment visibility",
                "Real-time tracking & alerts",
                "Optimized route & delivery planning",
                "Automated warehouse operations"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="text-sky-400 mt-1" />
                  <p className="text-gray-400 text-sm">{item}</p>
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
            Logistics Software Solutions We Offer
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Truck, title: "Fleet Management", desc: "Vehicle tracking, fuel usage & driver performance." },
              { icon: Package, title: "Shipment Tracking", desc: "Live order tracking & delivery status updates." },
              { icon: Warehouse, title: "Warehouse Management", desc: "Inventory control & warehouse automation." },
              { icon: MapPin, title: "Route Optimization", desc: "Smart routing for faster deliveries." },
              { icon: Clock, title: "Delivery Scheduling", desc: "Accurate ETA & delivery planning." },
              { icon: BarChart3, title: "Analytics & Reports", desc: "Operational insights & performance metrics." }
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                className="bg-white/5 border border-white/10 rounded-xl p-8 text-center"
              >
                <item.icon className="mx-auto mb-4 text-sky-400" size={36} />
                <h3 className="text-xl font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 bg-gradient-to-r from-sky-600 to-blue-600 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
          Ready to Digitize Your Logistics Operations?
        </h2>
        <p className="text-gray-100 mb-8 max-w-2xl mx-auto">
          Let CoxFuture help you build scalable, efficient
          and future-ready logistics software solutions.
        </p>

        <Button
          onClick={() => setOpenEnquiry(true)}
          size="lg"
          className="bg-black text-white px-10 py-6"
        >
          Get Logistics Consultation
        </Button>
      </section>

      {/* ================= MODAL ================= */}
      <AnimatePresence>
        {openEnquiry && (
          <EnquiryModal
            open="Logistics Industry"
            onOpenChange={() => setOpenEnquiry(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default LogisticsIndustry;
