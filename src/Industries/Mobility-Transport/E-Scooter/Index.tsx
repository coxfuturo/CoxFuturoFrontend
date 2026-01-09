'use client';

import { useState } from "react";
import {
  ArrowRight,
  Bike,
  BatteryCharging,
  MapPin,
  BarChart3,
  ShieldCheck,
  Smartphone,
  Layers,
  CheckCircle,
  Sparkles
} from "lucide-react";

import { Button } from "@/components/ui/button";
import EnquiryModal from "@/components/EnquiryModal";
import { AnimatePresence, motion } from "framer-motion";

const EScooterIndustry = () => {
  const [openEnquiry, setOpenEnquiry] = useState(false);

  return (
    <>
    <div className="relative w-full min-h-screen">

      {/* ================= HERO ================= */}
      <section className="relative min-h-screen flex items-center overflow-hidden
        bg-gradient-to-br from-[#0F2027] via-[#203A43] to-[#2C5364]">
        
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-24 left-20 w-96 h-96 bg-cyan-400/20 blur-3xl rounded-full animate-pulse" />
          <div className="absolute bottom-24 right-16 w-96 h-96 bg-teal-400/20 blur-3xl rounded-full animate-pulse delay-1000" />
        </div>

        <div className="container mx-auto px-4 py-28 mt-16 grid lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 mb-5 px-5 py-1 text-xs rounded-full
              bg-white/10 border border-white/20 text-cyan-300">
              <Sparkles size={14} /> E-Scooter Industry Solutions
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
              Smart Digital Solutions for
              <span className="block text-cyan-300"> E-Scooter Businesses</span>
            </h1>

            <p className="text-lg text-gray-200 max-w-xl mb-6">
              CoxFuture empowers E-Scooter startups and enterprises
              with scalable software solutions to manage fleets,
              users, payments and real-time operations.
            </p>

            <p className="text-gray-300 max-w-xl mb-8">
              From rider apps to admin dashboards, we help mobility
              brands accelerate growth with technology.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => setOpenEnquiry(true)}
                size="lg"
                className="bg-cyan-500 hover:bg-cyan-600 px-9 py-6 group"
              >
                Build Mobility Solution
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white py-6"
              >
                View Use Cases
              </Button>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div >
              <img
              src="/image/E-s.png"
              alt="E Scooter Industry"
              // className="shadow-2xl"
            />

            </div>
            
          </motion.div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="py-24 bg-[#0B1C22]">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <img
              src="/image/e-scooter.png"
              alt="E Scooter Technology"
              className="rounded-2xl shadow-2xl w-full"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-cyan-300">
              Why Technology Matters in E-Scooter Industry
            </h2>

            <p className="text-gray-300 mb-6">
              The E-Scooter industry relies heavily on real-time data,
              seamless user experience and efficient fleet management.
            </p>

            <p className="text-gray-400 mb-6">
              A robust digital ecosystem helps reduce operational cost,
              improve rider safety and maximize vehicle utilization.
            </p>

            <div className="space-y-3">
              {[
                "Real-time scooter tracking & monitoring",
                "User apps with GPS & payment integration",
                "Battery & charging management systems",
                "Admin dashboards for analytics & control"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="text-cyan-400 mt-1" />
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
            E-Scooter Software Solutions We Provide
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Smartphone, title: "Rider Mobile App", desc: "Unlock, ride, pay & track scooters easily." },
              { icon: MapPin, title: "Live GPS Tracking", desc: "Real-time vehicle location & geofencing." },
              { icon: BatteryCharging, title: "Battery Management", desc: "Charging status & battery health monitoring." },
              { icon: BarChart3, title: "Admin Dashboard", desc: "Fleet analytics & performance insights." },
              { icon: ShieldCheck, title: "Security Systems", desc: "User verification & ride safety features." },
              { icon: Layers, title: "Scalable Backend", desc: "Cloud-based architecture for growth." }
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                className="bg-white/5 border border-white/10 rounded-xl p-8 text-center"
              >
                <item.icon className="mx-auto mb-4 text-cyan-400" size={36} />
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
      <section className="py-24 bg-gradient-to-r from-cyan-600 to-teal-600 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
          Ready to Build Your E-Scooter Platform?
        </h2>
        <p className="text-gray-100 mb-8 max-w-2xl mx-auto">
          Partner with CoxFuture to launch secure, scalable
          and future-ready mobility solutions.
        </p>

        <Button
          onClick={() => setOpenEnquiry(true)}
          size="lg"
          className="bg-black text-white px-10 py-6"
        >
          Get Mobility Consultation
        </Button>
      </section>

      {/* ================= MODAL ================= */}
      <AnimatePresence>
        {openEnquiry && (
          <EnquiryModal
            open="E-Scooter Industry"
            onOpenChange={() => setOpenEnquiry(false)}
          />
        )}
      </AnimatePresence>


    </div>
      
    </>
  );
};

export default EScooterIndustry;
