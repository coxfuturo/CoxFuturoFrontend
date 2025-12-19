'use client';

import { useState } from "react";
import {
  ArrowRight,
  Car,
  BatteryCharging,
  PlugZap,
  BarChart3,
  ShieldCheck,
  MapPin,
  Cpu,
  Layers,
  CheckCircle,
  Sparkles
} from "lucide-react";

import { Button } from "@/components/ui/button";
import EnquiryModal from "@/components/EnquiryModal";
import { AnimatePresence, motion } from "framer-motion";

const EVIndustry = () => {
  const [openEnquiry, setOpenEnquiry] = useState(false);

  return (
    <>
      {/* ================= HERO ================= */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden
        bg-gradient-to-br from-[#041B15] via-[#063B2C] to-[#0A5C44]"
      >
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-emerald-400/20 blur-3xl rounded-full animate-pulse" />
          <div className="absolute bottom-24 right-20 w-96 h-96 bg-green-400/20 blur-3xl rounded-full animate-pulse delay-1000" />
        </div>

        <div className="container mx-auto px-4 py-28 mt-16 grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span
              className="inline-flex items-center gap-2 mb-5 px-5 py-1 text-xs rounded-full
              bg-white/10 border border-white/20 text-emerald-300"
            >
              <Sparkles size={14} /> EV Industry Solutions
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
              Powering the Future of
              <span className="block text-emerald-300"> Electric Mobility</span>
            </h1>

            <p className="text-lg text-gray-200 max-w-xl mb-6">
              CoxFuture delivers intelligent software solutions
              for Electric Vehicle manufacturers, fleet operators
              and charging infrastructure providers.
            </p>

            <p className="text-gray-300 max-w-xl mb-8">
              From vehicle monitoring to smart charging systems,
              we build digital platforms that scale with the EV ecosystem.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => setOpenEnquiry(true)}
                size="lg"
                className="bg-emerald-500 hover:bg-emerald-600 px-9 py-6 group"
              >
                Build EV Platform
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white py-6"
              >
                Explore EV Use Cases
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
              src="/images/industries/ev/hero.jpg"
              alt="Electric Vehicle Industry"
              className="rounded-3xl shadow-2xl border border-white/10"
            />
          </motion.div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="py-24 bg-[#061E17]">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-emerald-300">
              Why Technology Is Critical for EV Industry
            </h2>

            <p className="text-gray-300 mb-6">
              The EV industry depends on software for performance,
              safety, energy optimization and real-time insights.
            </p>

            <p className="text-gray-400 mb-6">
              Digital platforms help EV businesses improve efficiency,
              reduce operational cost and enhance user experience.
            </p>

            <div className="space-y-3">
              {[
                "Vehicle telematics & diagnostics",
                "Battery health & range monitoring",
                "Smart charging & energy optimization",
                "Data-driven fleet & user management"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="text-emerald-400 mt-1" />
                  <p className="text-gray-400 text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <img
              src="/images/industries/ev/about.jpg"
              alt="EV Technology"
              className="rounded-2xl shadow-2xl w-full"
            />
          </div>
        </div>
      </section>

      {/* ================= SOLUTIONS ================= */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
            EV Software Solutions We Provide
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Car, title: "EV Fleet Management", desc: "Monitor vehicles, usage & performance in real time." },
              { icon: BatteryCharging, title: "Battery Management Systems", desc: "Track battery health, charging & efficiency." },
              { icon: PlugZap, title: "Charging Station Software", desc: "Smart charging & station management platforms." },
              { icon: MapPin, title: "GPS & Telematics", desc: "Live vehicle tracking & route analytics." },
              { icon: BarChart3, title: "Analytics Dashboard", desc: "Operational insights & business intelligence." },
              { icon: ShieldCheck, title: "Security & Compliance", desc: "Data security & regulatory compliance systems." }
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                className="bg-white/5 border border-white/10 rounded-xl p-8 text-center"
              >
                <item.icon className="mx-auto mb-4 text-emerald-400" size={36} />
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
      <section className="py-24 bg-gradient-to-r from-emerald-600 to-green-600 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
          Ready to Build Your EV Software Platform?
        </h2>
        <p className="text-gray-100 mb-8 max-w-2xl mx-auto">
          Partner with CoxFuture to accelerate innovation
          in the electric vehicle ecosystem.
        </p>

        <Button
          onClick={() => setOpenEnquiry(true)}
          size="lg"
          className="bg-black text-white px-10 py-6"
        >
          Get EV Consultation
        </Button>
      </section>

      {/* ================= MODAL ================= */}
      <AnimatePresence>
        {openEnquiry && (
          <EnquiryModal
            open="EV Industry"
            onOpenChange={() => setOpenEnquiry(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default EVIndustry;
