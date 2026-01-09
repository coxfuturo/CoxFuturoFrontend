'use client';

import { useState } from "react";
import {
  Users,
  Globe,
  Layers,
  BarChart3,
  CheckCircle,
  Zap,
  MessageCircle,
  ArrowRight,
  Sparkles
} from "lucide-react";

import { Button } from "@/components/ui/button";
import EnquiryModal from "@/components/EnquiryModal";
import { AnimatePresence, motion } from "framer-motion";

const SocialNetworkingIndustry = () => {
  const [openEnquiry, setOpenEnquiry] = useState(false);

  return (
    <>
    <div className="relative w-full min-h-screen">

   
      {/* ================= HERO ================= */}
      <section className="relative min-h-screen flex items-center overflow-hidden
        bg-gradient-to-br from-[#7c3aed] via-[#8b5cf6] to-[#c4b5fd]"
      >
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-24 left-16 w-96 h-96 bg-purple-400/20 blur-3xl rounded-full animate-pulse" />
          <div className="absolute bottom-20 right-16 w-96 h-96 bg-purple-300/20 blur-3xl rounded-full animate-pulse delay-1000" />
        </div>

        <div className="container mx-auto px-4 py-28 mt-16 grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 mb-5 px-5 py-1 text-xs rounded-full
              bg-white/10 border border-white/20 text-purple-900"
            >
              <Sparkles size={14} /> Social Networking Solutions
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-purple-900">
              Platforms That
              <span className="block text-purple-700"> Connect People & Ideas</span>
            </h1>

            <p className="text-lg text-gray-900 max-w-xl mb-6">
              CoxFuture creates social networking platforms designed to bring communities together,
              increase engagement, and drive meaningful interactions.
            </p>

            <p className="text-gray-800 max-w-xl mb-8">
              From idea conception to feature-rich applications, our solutions support messaging, media sharing,
              notifications, analytics, and secure user management.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => setOpenEnquiry(true)}
                size="lg"
                className="bg-purple-600 hover:bg-purple-700 px-9 py-6 group"
              >
                Start Social Project
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-gray-900 py-6"
              >
                Explore Social Solutions
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
              src="/image/s-n.png"
              alt="Social Networking Industry"
              // className="rounded-3xl shadow-2xl border border-white/10"
            />
          </motion.div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="py-24 bg-[#f3e8ff]">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <img
            src="/image/s-n-2.png"
            alt="Social Networking Solutions"
            // className="rounded-2xl shadow-2xl w-full"
          />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-purple-900">
              Building Communities Through Technology
            </h2>

            <p className="text-gray-900 mb-6">
              Social networking apps connect people, businesses, and communities worldwide.
              We develop scalable and secure platforms to support millions of users.
            </p>

            <p className="text-gray-800 mb-6">
              Our solutions focus on usability, speed, engagement, and real-time communication,
              enabling rich interactive experiences.
            </p>

            <div className="space-y-3">
              {[
                "Secure user authentication & privacy controls",
                "Real-time messaging & notifications",
                "Media sharing & interactive feeds",
                "Analytics & performance tracking"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="text-purple-600 mt-1" />
                  <p className="text-gray-800 text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>

          
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="py-24 bg-[#ede9fe]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-purple-900">
            Core Features
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Users, title: "Community Building", desc: "Create vibrant social spaces and groups." },
              { icon: MessageCircle, title: "Messaging & Chat", desc: "Real-time communication between users." },
              { icon: Globe, title: "Global Connectivity", desc: "Connect users across the world seamlessly." },
              { icon: Zap, title: "Notifications & Alerts", desc: "Keep users engaged with instant updates." },
              { icon: BarChart3, title: "Analytics & Insights", desc: "Track engagement and app performance." },
              { icon: Layers, title: "Scalable Architecture", desc: "Handle growing user base and data." }
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                className="bg-white/10 border border-white/20 rounded-xl p-8 text-center"
              >
                <item.icon className="mx-auto mb-4 text-purple-600" size={36} />
                <h3 className="text-xl font-semibold text-purple-900 mb-2">{item.title}</h3>
                <p className="text-gray-800 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 bg-gradient-to-r from-purple-600 to-purple-500 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
          Launch Your Social Networking Platform
        </h2>
        <p className="text-gray-100 mb-8 max-w-2xl mx-auto">
          Partner with CoxFuture to create innovative social apps that connect people, communities, and businesses.
        </p>

        <Button
          onClick={() => setOpenEnquiry(true)}
          size="lg"
          className="bg-black text-white px-10 py-6"
        >
          Get Social App Consultation
        </Button>
      </section>

      {/* ================= MODAL ================= */}
      <AnimatePresence>
        {openEnquiry && (
          <EnquiryModal
            open="Social Networking Industry"
            onOpenChange={() => setOpenEnquiry(false)}
          />
        )}
      </AnimatePresence>
       </div>
    </>
  );
};

export default SocialNetworkingIndustry;
