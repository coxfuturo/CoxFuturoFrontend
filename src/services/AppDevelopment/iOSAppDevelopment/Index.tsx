'use client';

import { useState } from "react";
import {
  ArrowRight,
  Apple,
  ShieldCheck,
  Zap,
  Layers,
  CheckCircle,
  Sparkles,
  Lock,
  AppWindow,
  BarChart3
} from "lucide-react";

import { Button } from "@/components/ui/button";
import EnquiryModal from "@/components/EnquiryModal";
import { AnimatePresence, motion } from "framer-motion";

const IOSAppDevelopment = () => {
  const [openEnquiry, setOpenEnquiry] = useState(false);

  return (
    <>
    <div className="relative w-full min-h-screen">
      <div className="fixed inset-0 -z-10 bg-current bg-cover" 
      style={{ 
        backgroundImage: 'url("/image/ios-bg.jpg")'
      }}>
        <div className="fixed inset-0 -z-10 bg-black/70">
      </div>
      </div>

      {/* ================= HERO ================= */}
      <section className="relative min-h-screen bg-transparent flex items-center overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-24 left-16 w-96 h-96 bg-white/10 blur-3xl rounded-full animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gray-400/10 blur-3xl rounded-full animate-pulse delay-1000" />
        </div>

        <div className="container mx-auto px-4 py-28 mt-16 grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 mb-5 px-5 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-white">
              <Sparkles size={14} /> iOS App Development
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
              Premium iOS Apps Built for
              <span className="block text-gray-300">Performance & Perfection</span>
            </h1>

            <p className="text-lg text-gray-300 max-w-xl mb-6">
              CoxFuture builds high-quality iOS applications that deliver
              exceptional performance, elegant design and enterprise-grade security.
            </p>

            <p className="text-gray-400 max-w-xl mb-8">
              From iPhone and iPad apps to Apple ecosystem integrations,
              we help brands launch App Store-ready products users love.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => setOpenEnquiry(true)}
                size="lg"
                className="bg-white text-black px-9 py-6 group"
              >
                Build iOS App
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-gray-600 text-white py-6"
              >
                View iOS Portfolio
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
              src="/image/ios-app.png"
              alt="iOS App Development"
              // className="rounded-3xl shadow-2xl border border-white/10 w-full h-[460px] object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="py-24 bg-transparent">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-14 items-center">
          <div className="h-[400px] overflow-hidden rounded-2xl">
            <img
            src="/image/ios-2.png"
            alt="Why iOS Apps"
            className="rounded-2xl shadow-2xl w-full"
          />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Why Choose iOS App Development?
            </h2>

            <p className="text-gray-300 mb-6">
              iOS apps are known for premium user experience, strong security
              and higher revenue potential. Apple users spend more and expect
              polished, high-performance applications.
            </p>

            <p className="text-gray-400 mb-6">
              We follow Apple’s Human Interface Guidelines and use modern
              technologies to build apps that stand out on the App Store.
            </p>

            <div className="space-y-3">
              {[
                "Premium UI/UX with Apple design standards",
                "High security & privacy-focused architecture",
                "Smooth performance across iPhone & iPad",
                "Better monetization & user retention"
              ].map((item, i) => (
                <div key={i} className="flex gap-3">
                  <CheckCircle className="text-white mt-1" />
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
            iOS App Capabilities We Deliver
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Apple, title: "Swift & SwiftUI", desc: "Modern, fast and reliable iOS development stack." },
              { icon: ShieldCheck, title: "App Store Security", desc: "Strict compliance with Apple security guidelines." },
              { icon: Zap, title: "High Performance", desc: "Optimized apps with smooth animations." },
              { icon: Lock, title: "Data Privacy", desc: "Secure storage & encrypted communication." },
              { icon: AppWindow, title: "Apple Ecosystem", desc: "iPhone, iPad, Watch & Mac compatibility." },
              { icon: BarChart3, title: "Analytics Ready", desc: "User insights & performance tracking." }
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-xl p-8 text-center hover:border-white/40 transition"
              >
                <item.icon className="mx-auto mb-4 text-white" size={34} />
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="py-24 bg-transparent">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-14 items-center">

          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Our iOS App Development Process
            </h2>

            <p className="text-gray-300 mb-6">
              We follow Apple-approved workflows to ensure smooth App Store
              approval and long-term app success.
            </p>

            {[
              "Product discovery & feasibility analysis",
              "Wireframing & Apple-centric UI/UX design",
              "Swift / SwiftUI development",
              "Testing on real iOS devices",
              "App Store submission & launch support"
            ].map((step, i) => (
              <div key={i} className="flex gap-3 mb-3">
                <Layers className="text-white mt-1" />
                <p className="text-gray-400 text-sm">{step}</p>
              </div>
            ))}
          </div>
          <div className="h-[400px] overflow-hidden w-full">
            <img
            src="/image/ios-3.jpg"
            alt="iOS App Development Process"
            className="rounded-2xl shadow-2xl w-full"
          />
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 bg-transparent text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
          Ready to Launch Your iOS App?
        </h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          Let’s build a premium iOS application that meets Apple standards
          and delivers real business impact.
        </p>

        <Button
          onClick={() => setOpenEnquiry(true)}
          size="lg"
          className="bg-white text-black px-10 py-6"
        >
          Get Free iOS Consultation
        </Button>
      </section>

      {/* ================= MODAL ================= */}
      <AnimatePresence>
        {openEnquiry && (
          <EnquiryModal
            open="iOS App Development"
            onOpenChange={() => setOpenEnquiry(false)}
          />
        )}
      </AnimatePresence>

    </div>
      
    </>
  );
};

export default IOSAppDevelopment;
