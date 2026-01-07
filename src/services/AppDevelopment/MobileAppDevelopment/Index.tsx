'use client';

import { useState } from "react";
import {
  ArrowRight,
  Smartphone,
  Apple,
  Zap,
  ShieldCheck,
  Globe,
  BarChart3,
  Layers,
  CheckCircle,
  Sparkles,
  ShoppingCart,
  Stethoscope,
  GraduationCap,
  Building2
} from "lucide-react";

import { Button } from "@/components/ui/button";
import EnquiryModal from "@/components/EnquiryModal";
import { AnimatePresence, motion } from "framer-motion";

const MobileAppDevelopment = () => {
  const [openEnquiry, setOpenEnquiry] = useState(false);

  return (
    <>

      <div className="relative w-full min-h-screen">
      <div className="fixed inset-0 -z-10 bg-cover bg-center"
      style={{
      backgroundImage: 'url("/image/App-bg.jpg")'
    }}>
      <div className="fixed inset-0 -z-10 bg-black/70"></div>
      </div>
      

      {/* ================= HERO ================= */}
      <section className="relative min-h-screen bg-transparent flex items-center overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-24 left-10 w-96 h-96 bg-crypto-purple/30 blur-3xl rounded-full animate-pulse" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-500/20 blur-3xl rounded-full animate-pulse delay-1000" />
        </div>

        <div className="container mx-auto px-4 py-28 mt-16 grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT */}
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-flex items-center gap-2 mb-5 px-5 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-crypto-purple">
              <Sparkles size={14} /> Mobile App Development
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Mobile Apps That
              <span className="text-gradient"> Users Love & Businesses Scale</span>
            </h1>

            <p className="text-lg text-gray-300 max-w-xl mb-6">
              We design and develop high-performance mobile applications
              that drive engagement, retention and revenue.
            </p>

            <p className="text-gray-400 max-w-xl mb-8">
              From startups launching MVPs to enterprises scaling millions of users,
              CoxFuture delivers secure, scalable and future-ready mobile apps.
            </p>

            {/* PLATFORM TAGS */}
            <div className="flex gap-3 mb-8 flex-wrap">
              <span className="px-4 py-2 text-xs rounded-full bg-white/5 border border-white/10 flex items-center gap-2">
                <Apple size={14} /> iOS Apps
              </span>
              <span className="px-4 py-2 text-xs rounded-full bg-white/5 border border-white/10 flex items-center gap-2">
                <Smartphone size={14} /> Android Apps
              </span>
              <span className="px-4 py-2 text-xs rounded-full bg-white/5 border border-white/10">
                Cross-Platform Apps
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button onClick={() => setOpenEnquiry(true)} size="lg" className="bg-crypto-purple px-9 py-6 group">
                Start App Project
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>

              <Button size="lg" variant="outline" className="border-gray-700 text-white py-6">
                View Portfolio
              </Button>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.2 }}>
            <img
              src="/image/mob-1.png"
              alt="Mobile App Development"
              // className="rounded-3xl shadow-2xl border border-white/10 w-full h-[460px] object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* ================= WHY US ================= */}
      <section className="py-24 bg-transparent">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-14 items-center">
          <div className="h-[400px] overflow-hidden rounded-2xl">
            <img src="/image/Mobapp-2.png" className="rounded-2xl shadow-2xl w-full" />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">
              Why Invest in Mobile App Development?
            </h2>

            <p className="text-gray-300 mb-6">
              Mobile apps create direct, always-on connections with users,
              helping brands increase loyalty and conversions.
            </p>

            <p className="text-gray-400 mb-6">
              Our apps are engineered for speed, usability and scalability,
              ensuring long-term business growth.
            </p>

            <div className="space-y-3">
              {[
                "App-first UI/UX focused on retention",
                "Secure APIs & backend integrations",
                "Scalable architecture for millions of users",
                "Analytics-driven performance optimization"
              ].map((item, i) => (
                <div key={i} className="flex gap-3">
                  <CheckCircle className="text-crypto-purple mt-1" />
                  <p className="text-gray-400 text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>

          
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="py-24 bg-transparent">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Mobile App Solutions We Offer
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Apple, title: "iOS App Development", desc: "Swift-based apps built for performance & App Store success." },
              { icon: Smartphone, title: "Android App Development", desc: "Kotlin-powered apps optimized for all Android devices." },
              { icon: Globe, title: "Cross-Platform Apps", desc: "Flutter & React Native apps with faster time-to-market." }
            ].map((item, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-8 text-center hover:scale-105 transition">
                <item.icon className="mx-auto mb-4 text-crypto-purple" size={36} />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= INDUSTRIES ================= */}
      <section className="py-24 bg-transparent">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gradient">
            Industries We Serve
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[ShoppingCart, Stethoscope, GraduationCap, Building2].map((Icon, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
                <Icon className="mx-auto mb-4 text-crypto-purple" size={32} />
                <p className="text-gray-300 text-sm">
                  {["E-Commerce", "Healthcare", "Education", "Enterprise"][i]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 bg-gradient-hero text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Let’s Build Your Mobile App
        </h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          Get a free consultation and transform your app idea
          into a scalable mobile product.
        </p>

        <Button onClick={() => setOpenEnquiry(true)} size="lg" className="bg-crypto-purple px-10 py-6">
          Get Free Consultation
        </Button>
      </section>

      {/* ================= MODAL ================= */}
      <AnimatePresence>
        {openEnquiry && (
          <EnquiryModal open="Mobile App Development" onOpenChange={() => setOpenEnquiry(false)} />
        )}
      </AnimatePresence>


    </div>
   
    </>
  );
};

export default MobileAppDevelopment;
