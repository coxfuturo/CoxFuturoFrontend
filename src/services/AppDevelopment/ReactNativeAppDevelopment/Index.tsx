'use client';

import { useState } from "react";
import {
  ArrowRight,
  Smartphone,
  Layers,
  Zap,
  ShieldCheck,
  Globe,
  Code2,
  CheckCircle,
  Sparkles,
  AppWindow,
  BarChart3
} from "lucide-react";

import { Button } from "@/components/ui/button";
import EnquiryModal from "@/components/EnquiryModal";
import { AnimatePresence, motion } from "framer-motion";

const ReactNativeDevelopment = () => {
  const [openEnquiry, setOpenEnquiry] = useState(false);

  return (
    <>
    <div className="relative w-full min-h-screen">
      <div className="fixed inset-0 -z-10 bg-cover bg-center bg-[#2c2e1a]"
      style={{
        backgroundImage: 'url("/image/react-bg.png")',
        backgroundBlendMode: "screen",
        filter: " opacity(0.4)"
      }}>
         <div className="fixed inset-0 -z-10 bg-black/90"></div>

      </div>
      {/* ================= HERO ================= */}
      <section className="relative min-h-screen bg-transparent flex items-center overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-16 w-96 h-96 bg-emerald-500/20 blur-3xl rounded-full animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 blur-3xl rounded-full animate-pulse delay-1000" />
        </div>

        <div className="container mx-auto px-4 py-28 mt-16 grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT */}
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-flex items-center gap-2 mb-5 px-5 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-emerald-400">
              <Sparkles size={14} /> React Native App Development
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
              Cross-Platform Apps That
              <span className="block text-gradient"> Run Anywhere, Fast & Smooth</span>
            </h1>

            <p className="text-gray-300 max-w-xl mb-6">
              We create high-performance React Native apps that deliver a native-like experience
              on both iOS and Android using a single codebase.
            </p>

            <p className="text-gray-400 max-w-xl mb-8">
              React Native allows faster development, lower cost, and easier maintenance
              without compromising on quality or user experience.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button onClick={() => setOpenEnquiry(true)} size="lg" className="bg-emerald-400 px-9 py-6 group">
                Start Your RN App
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className="border-gray-600 text-white py-6">
                View React Native Work
              </Button>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.2 }}>
            <img
              src="/image/react.png"
              alt="React Native App Development"
              // className="rounded-3xl shadow-2xl border border-white/10 w-full h-[440px] object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* ================= WHY US ================= */}
      <section className="py-24 bg-transparent">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-14 items-center">
          <div className="h-[400px] overflow-hidden rounded-2xl">
            <img src="/image/react-2.jpg" alt="React Native Benefits" className="rounded-2xl shadow-2xl w-full" />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">
              Why React Native for Your Business?
            </h2>

            <p className="text-gray-300 mb-6">
              React Native allows businesses to reach both iOS and Android audiences with a single app,
              reducing development time and cost while maintaining high performance.
            </p>

            <div className="space-y-3">
              {[
                "Single codebase for iOS & Android",
                "Faster development & cost-effective",
                "Near-native performance & smooth UX",
                "Easy maintenance & future scalability",
                "Third-party library integration"
              ].map((item, i) => (
                <div key={i} className="flex gap-3">
                  <CheckCircle className="text-emerald-400 mt-1" />
                  <p className="text-gray-400 text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>

          
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="py-24 bg-transparent">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
            React Native App Features
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Zap, title: "High Performance" },
              { icon: ShieldCheck, title: "Secure & Reliable" },
              { icon: Globe, title: "Cross-Platform Compatibility" },
              { icon: Code2, title: "Reusable Codebase" },
              { icon: AppWindow, title: "Native-Like UI" },
              { icon: BarChart3, title: "Analytics & Monitoring" }
            ].map((f, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-8 text-center hover:border-emerald-400/40 transition">
                <f.icon className="mx-auto mb-4 text-emerald-400" size={36} />
                <h3 className="text-xl font-semibold text-white">{f.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="py-24 bg-transparent">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-14 items-center">
          

          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">
              Our React Native App Development Process
            </h2>

            {[
              "Requirement analysis & project planning",
              "UI/UX wireframing & prototyping",
              "React Native development & API integration",
              "Testing & optimization for both platforms",
              "Deployment & ongoing support"
            ].map((step, i) => (
              <div key={i} className="flex gap-3 mb-3">
                <Layers className="text-emerald-400 mt-1" />
                <p className="text-gray-400 text-sm">{step}</p>
              </div>
            ))}
          </div>
          <div >
            <img src="/image/react-3.jpg" alt="React Native Process" 
            className="rounded-2xl shadow-2xl w-full object-cover" />
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 bg-transparenttext-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
          Ready to Build Your React Native App?
        </h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          Let CoxFuture help you develop a cross-platform app that looks and feels native
          while saving time and cost.
        </p>

        <Button onClick={() => setOpenEnquiry(true)} size="lg" className="bg-emerald-400 px-10 py-6">
          Get Free Consultation
        </Button>
      </section>

      {/* ================= MODAL ================= */}
      <AnimatePresence>
        {openEnquiry && (
          <EnquiryModal open="React Native App Development" onOpenChange={() => setOpenEnquiry(false)} />
        )}
      </AnimatePresence>


    </div>
      
    </>
  );
};

export default ReactNativeDevelopment;
