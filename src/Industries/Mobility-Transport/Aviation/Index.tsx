'use client';

import { useState } from "react";
import {
  ArrowRight,
  Plane,
  Radar,
  BarChart3,
  ShieldCheck,
  Clock,
  Globe,
  Layers,
  CheckCircle,
  Sparkles
} from "lucide-react";

import { Button } from "@/components/ui/button";
import EnquiryModal from "@/components/EnquiryModal";
import { AnimatePresence, motion } from "framer-motion";

const AviationIndustry = () => {
  const [openEnquiry, setOpenEnquiry] = useState(false);

  return (
    <>
    <div className="relative w-full min-h-screen">
      {/* ================= HERO ================= */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden
        bg-gradient-to-br from-[#0A0F2C] via-[#121A45] to-[#1B2A6D]"
      >
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-24 w-96 h-96 bg-indigo-500/20 blur-3xl rounded-full animate-pulse" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 blur-3xl rounded-full animate-pulse delay-1000" />
        </div>

        <div className="container mx-auto px-4 py-28 mt-16 grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span
              className="inline-flex items-center gap-2 mb-5 px-5 py-1 text-xs rounded-full
              bg-white/10 border border-white/20 text-indigo-300"
            >
              <Sparkles size={14} /> Aviation & Aerospace
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
              Intelligent Software for
              <span className="block text-indigo-300"> Modern Aviation</span>
            </h1>

            <p className="text-lg text-gray-200 max-w-xl mb-6">
              CoxFuture delivers advanced aviation software solutions
              designed for safety, performance and operational excellence.
            </p>

            <p className="text-gray-300 max-w-xl mb-8">
              From airline operations to airport management systems,
              we help aviation businesses scale with confidence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => setOpenEnquiry(true)}
                size="lg"
                className="bg-indigo-600 hover:bg-indigo-700 px-9 py-6 group"
              >
                Build Aviation Software
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white py-6"
              >
                Explore Aviation Solutions
              </Button>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <img
              src="/image/M-A.png"
              alt="Aviation Industry"
              // className="rounded-3xl shadow-2xl border border-white/10"
            />
          </motion.div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="py-24 bg-[#080B1F]">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-14 items-center">

          <div>
            <img
              src="/image/D-I.png"
              alt="Aviation Technology"
              // className="rounded-2xl shadow-2xl w-full"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-indigo-300">
              Digital Innovation in Aviation
            </h2>

            <p className="text-gray-300 mb-6">
              Aviation is a highly regulated and data-driven industry
              where precision, reliability and safety are critical.
            </p>

            <p className="text-gray-400 mb-6">
              Our aviation software solutions streamline operations,
              enhance situational awareness and support real-time decision-making.
            </p>

            <div className="space-y-3">
              {[
                "Improved operational efficiency",
                "Real-time monitoring & analytics",
                "Compliance with aviation standards",
                "Enhanced passenger experience"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="text-indigo-400 mt-1" />
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
            Aviation Software Solutions We Offer
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Plane, title: "Airline Operations Systems", desc: "Crew, flight scheduling & operations management." },
              { icon: Radar, title: "Flight Monitoring", desc: "Real-time aircraft tracking & performance insights." },
              { icon: Clock, title: "Maintenance Systems", desc: "Predictive maintenance & asset management." },
              { icon: ShieldCheck, title: "Safety & Compliance", desc: "Regulatory compliance & safety management systems." },
              { icon: Globe, title: "Airport Management", desc: "Smart airport operations & passenger flow systems." },
              { icon: BarChart3, title: "Aviation Analytics", desc: "Operational dashboards & advanced reporting." }
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                className="bg-white/5 border border-white/10 rounded-xl p-8 text-center"
              >
                <item.icon className="mx-auto mb-4 text-indigo-400" size={36} />
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
      <section className="py-24 bg-gradient-to-r from-indigo-600 to-purple-600 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
          Ready to Elevate Your Aviation Systems?
        </h2>
        <p className="text-gray-100 mb-8 max-w-2xl mx-auto">
          Partner with CoxFuture to build secure, scalable
          and future-ready aviation software solutions.
        </p>

        <Button
          onClick={() => setOpenEnquiry(true)}
          size="lg"
          className="bg-black text-white px-10 py-6"
        >
          Get Aviation Consultation
        </Button>
      </section>

      {/* ================= MODAL ================= */}
      <AnimatePresence>
        {openEnquiry && (
          <EnquiryModal
            open="Aviation Industry"
            onOpenChange={() => setOpenEnquiry(false)}
          />
        )}
      </AnimatePresence>

    </div>
      
    </>
  );
};

export default AviationIndustry;
