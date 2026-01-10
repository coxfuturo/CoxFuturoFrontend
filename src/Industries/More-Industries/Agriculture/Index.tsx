'use client';

import { useState } from "react";
import {
  Leaf,
  Layers,
  BarChart3,
  CheckCircle,
  Globe,
  Zap,
  ArrowRight,
  Sparkles
} from "lucide-react";

import { Button } from "@/components/ui/button";
import EnquiryModal from "@/components/EnquiryModal";
import { AnimatePresence, motion } from "framer-motion";

const AgricultureIndustry = () => {
  const [openEnquiry, setOpenEnquiry] = useState(false);

  return (
    <>
    <div className="relative w-full min-h-screen">

    
      {/* ================= HERO ================= */}
      <section className="relative min-h-screen flex items-center overflow-hidden
        bg-gradient-to-br from-[#0b4a2e] via-[#22c55e] to-[#a7f3d0]"
      >
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-24 left-16 w-96 h-96 bg-green-400/20 blur-3xl rounded-full animate-pulse" />
          <div className="absolute bottom-20 right-16 w-96 h-96 bg-green-300/20 blur-3xl rounded-full animate-pulse delay-1000" />
        </div>

        <div className="container mx-auto px-4 py-28 mt-16 grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 mb-5 px-5 py-1 text-xs rounded-full
              bg-white/10 border border-white/20 text-green-900"
            >
              <Sparkles size={14} /> Agriculture Technology Solutions
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-green-900">
              Agriculture Solutions That
              <span className="block text-green-700"> Grow Business & Productivity</span>
            </h1>

            <p className="text-lg text-gray-900 max-w-xl mb-6">
              CoxFuture develops smart agriculture solutions to optimize farm management,
              increase yield, and leverage modern technology for sustainable growth.
            </p>

            <p className="text-gray-800 max-w-xl mb-8">
              From farm-to-market tracking to IoT-enabled crop monitoring, we provide
              innovative tools to empower farmers and agribusinesses.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => setOpenEnquiry(true)}
                size="lg"
                className="bg-green-600 hover:bg-green-700 px-9 py-6 group"
              >
                Start Agri Project
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-gray-900 py-6"
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
              src="/image/A-2.png"
              alt="Agriculture Industry"
              // className="rounded-3xl shadow-2xl "
            />
          </motion.div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="py-24 bg-[#dcfce7]">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <img
            src="/image/Agriculture.png"
            alt="Agriculture Solutions"
            // className="rounded-2xl shadow-2xl w-full"
          />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-green-900">
              Smart Agriculture for Modern Farming
            </h2>

            <p className="text-gray-900 mb-6">
              We integrate technology into agriculture to improve efficiency,
              reduce waste, and increase productivity.
            </p>

            <p className="text-gray-800 mb-6">
              Our solutions include crop monitoring, farm management dashboards,
              predictive analytics, and IoT-enabled smart devices for agriculture.
            </p>

            <div className="space-y-3">
              {[
                "IoT & sensor-based crop monitoring",
                "Farm management & analytics dashboard",
                "Automated irrigation & resource management",
                "Supply chain & market insights"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="text-green-600 mt-1" />
                  <p className="text-gray-800 text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>

          
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="py-24 bg-[#ecfdf5]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-green-900">
            Features We Provide
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Leaf, title: "Crop Monitoring", desc: "Real-time monitoring of crops for better yield." },
              { icon: Zap, title: "Automated Farming", desc: "Optimize irrigation, fertilization & resource management." },
              { icon: Globe, title: "Market Insights", desc: "Access data-driven insights for supply chain & pricing." },
              { icon: Layers, title: "Farm Management", desc: "Centralized dashboards to manage all farm operations." },
              { icon: BarChart3, title: "Analytics & Reporting", desc: "Track performance and productivity trends." },
              { icon: Zap, title: "IoT Integration", desc: "Smart sensors & devices for automated monitoring." }
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                className="bg-white/10 border border-white/20 rounded-xl p-8 text-center"
              >
                <item.icon className="mx-auto mb-4 text-green-600" size={36} />
                <h3 className="text-xl font-semibold text-green-900 mb-2">{item.title}</h3>
                <p className="text-gray-800 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 bg-gradient-to-r from-green-500 to-green-400 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
          Start Your Smart Agriculture Project
        </h2>
        <p className="text-gray-100 mb-8 max-w-2xl mx-auto">
          Partner with CoxFuture to implement advanced technology solutions
          for modern farming and agribusiness.
        </p>

        <Button
          onClick={() => setOpenEnquiry(true)}
          size="lg"
          className="bg-black text-white px-10 py-6"
        >
          Get Agriculture Consultation
        </Button>
      </section>

      {/* ================= MODAL ================= */}
      <AnimatePresence>
        {openEnquiry && (
          <EnquiryModal
            open="Agriculture Industry"
            onOpenChange={() => setOpenEnquiry(false)}
          />
        )}
      </AnimatePresence>
      </div>
    </>
  );
};

export default AgricultureIndustry;
