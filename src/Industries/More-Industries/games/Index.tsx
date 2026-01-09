'use client';

import { useState } from "react";
import {
  ArrowRight,
  Gamepad,
  Layers,
  BarChart3,
  CheckCircle,
  Zap,
  Globe,
  Sparkles
} from "lucide-react";

import { Button } from "@/components/ui/button";
import EnquiryModal from "@/components/EnquiryModal";
import { AnimatePresence, motion } from "framer-motion";

const GamesIndustry = () => {
  const [openEnquiry, setOpenEnquiry] = useState(false);

  return (
    <>
    <div className="relative w-full min-h-screen">

    
      {/* ================= HERO ================= */}
      <section className="relative min-h-screen flex items-center overflow-hidden
        bg-gradient-to-br from-[#6366f1] via-[#818cf8] to-[#a5b4fc]"
      >
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-24 left-16 w-96 h-96 bg-purple-400/20 blur-3xl rounded-full animate-pulse" />
          <div className="absolute bottom-20 right-16 w-96 h-96 bg-indigo-400/20 blur-3xl rounded-full animate-pulse delay-1000" />
        </div>

        <div className="container mx-auto px-4 py-28 mt-16 grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 mb-5 px-5 py-1 text-xs rounded-full
              bg-white/10 border border-white/20 text-purple-200"
            >
              <Sparkles size={14} /> Gaming Software Solutions
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
              Interactive Games That
              <span className="block text-indigo-200"> Engage & Entertain</span>
            </h1>

            <p className="text-lg text-gray-100 max-w-xl mb-6">
              CoxFuture builds immersive gaming experiences, including mobile, web, and desktop games
              with cutting-edge graphics and performance optimization.
            </p>

            <p className="text-gray-200 max-w-xl mb-8">
              From casual games to complex multiplayer experiences, we deliver scalable
              and interactive solutions for players worldwide.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => setOpenEnquiry(true)}
                size="lg"
                className="bg-indigo-500 hover:bg-indigo-600 px-9 py-6 group"
              >
                Start Game Project
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white py-6"
              >
                Explore Game Solutions
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
              src="/image/Games.png"
              alt="Games Industry"
              // className="rounded-3xl shadow-2xl border border-white/10"
            />
          </motion.div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="py-24 bg-[#1e1b4b]">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <img
            src="/image/Games-2.png"
            alt="Games Development"
            // className="rounded-2xl shadow-2xl w-full"
          />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-indigo-400">
              Cutting-Edge Gaming Solutions
            </h2>

            <p className="text-gray-100 mb-6">
              We develop games that captivate users, combining innovative gameplay mechanics
              with visually stunning graphics and smooth performance.
            </p>

            <p className="text-gray-200 mb-6">
              Our games are designed for mobile, desktop, and web platforms, ensuring
              maximum reach and engagement for players everywhere.
            </p>

            <div className="space-y-3">
              {[
                "Mobile & Web Game Development",
                "Multiplayer & Social Gaming",
                "3D & AR/VR Integration",
                "Analytics & Monetization Solutions"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="text-indigo-400 mt-1" />
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
            Gaming Features We Offer
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Gamepad, title: "Engaging Gameplay", desc: "Interactive and fun experiences for all players." },
              { icon: Zap, title: "High Performance", desc: "Optimized for smooth gameplay on all devices." },
              { icon: Globe, title: "Global Accessibility", desc: "Play online from anywhere in the world." },
              { icon: Layers, title: "3D & AR/VR Integration", desc: "Immersive and interactive gaming experiences." },
              { icon: BarChart3, title: "Analytics Ready", desc: "Track engagement and monetization efficiently." },
              { icon: Zap, title: "Cross-Platform", desc: "Available on mobile, web, and desktop platforms." }
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                className="bg-white/5 border border-white/10 rounded-xl p-8 text-center"
              >
                <item.icon className="mx-auto mb-4 text-indigo-400" size={36} />
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 bg-gradient-to-r from-indigo-500 to-purple-500 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
          Want to Build an Amazing Game?
        </h2>
        <p className="text-gray-100 mb-8 max-w-2xl mx-auto">
          Partner with CoxFuture to develop interactive games that engage users
          and boost business growth.
        </p>

        <Button
          onClick={() => setOpenEnquiry(true)}
          size="lg"
          className="bg-black text-white px-10 py-6"
        >
          Get Game Development Consultation
        </Button>
      </section>

      {/* ================= MODAL ================= */}
      <AnimatePresence>
        {openEnquiry && (
          <EnquiryModal
            open="Games Industry"
            onOpenChange={() => setOpenEnquiry(false)}
          />
        )}
      </AnimatePresence>
      </div>
    </>
  );
};

export default GamesIndustry;
