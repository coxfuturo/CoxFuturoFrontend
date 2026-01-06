'use client';

import { useState } from "react";
import {
  ArrowRight,
  Smartphone,
  Wifi,
  Zap,
  ShieldCheck,
  Globe,
  BarChart3,
  Layers,
  CheckCircle,
  Sparkles
} from "lucide-react";

import { Button } from "@/components/ui/button";
import EnquiryModal from "@/components/EnquiryModal";
import { AnimatePresence, motion } from "framer-motion";

const ProgressiveWebApp = () => {
  const [openEnquiry, setOpenEnquiry] = useState(false);

  return (
    <>

    <div className="relative w-full min-h-screen">
      <div className="fixed inset-0 -z-10 bg-cover bg-center"
        style={{
        backgroundImage: 'url("/image/PWA-bg.jpg")'
      }}>
      </div>
      <div className="fixed inset-0 -z-10 bg-black/70" />

      {/* ================= HERO ================= */}
      <section className="relative min-h-screen bg-transparent flex items-center overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-24 left-16 w-96 h-96 bg-crypto-purple/25 blur-3xl rounded-full animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/10 blur-3xl rounded-full animate-pulse delay-1000" />
        </div>

        <div className="container mx-auto px-4 py-28 mt-16 grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 mb-5 px-5 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-crypto-purple">
              <Sparkles size={14} /> Progressive Web App Development
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Progressive Web Apps That
              <span className="text-gradient"> Feel Like Native Apps</span>
            </h1>

            <p className="text-lg text-gray-300 max-w-xl mb-6">
              CoxFuture builds high‑performance Progressive Web Apps (PWAs)
              that combine the reach of the web with the experience of a native mobile app.
            </p>

            <p className="text-gray-400 max-w-xl mb-8">
              Our PWAs are fast, reliable and installable—helping businesses
              deliver seamless user experiences, even in low‑network conditions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => setOpenEnquiry(true)}
                size="lg"
                className="bg-crypto-purple px-9 py-6 group"
              >
                Build My PWA
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-gray-700 text-white py-6"
              >
                View PWA Solutions
              </Button>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <img
                src="/image/pwa4.webp"
                alt="Progressive Web App"
                className="w-full h-[440px] object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="py-24 bg-transparent">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <img
              src="/image/PWA2.png"
              alt="Why PWA"
              className="rounded-2xl shadow-2xl w-full"
              loading="lazy"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">
              Why Choose a Progressive Web App?
            </h2>

            <p className="text-gray-300 mb-6">
              Progressive Web Apps bridge the gap between websites and mobile apps.
              They load instantly, work offline and can be installed directly on users’ devices.
            </p>

            <p className="text-gray-400 mb-6">
              PWAs help businesses increase engagement, improve retention
              and reduce development costs compared to separate native apps.
            </p>

            <div className="space-y-3">
              {[
                "App‑like experience without app store dependency",
                "Offline access & background sync",
                "Fast load times with superior performance",
                "Lower development & maintenance cost"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="text-crypto-purple mt-1" />
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
            PWA Features We Deliver
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Zap, title: "Lightning Fast", desc: "Optimized for speed and instant loading." },
              { icon: Wifi, title: "Offline Ready", desc: "Works smoothly even without internet." },
              { icon: Smartphone, title: "Installable", desc: "Add to home screen like a native app." },
              { icon: ShieldCheck, title: "Secure", desc: "HTTPS‑based secure architecture." },
              { icon: Globe, title: "Cross Platform", desc: "One app works across all devices." },
              { icon: BarChart3, title: "Engagement Focused", desc: "Push notifications & re‑engagement tools." }
            ].map((item, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-8 text-center hover:border-crypto-purple/40 transition">
                <item.icon className="mx-auto mb-4 text-crypto-purple" size={36} />
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">
              Our PWA Development Process
            </h2>

            <p className="text-gray-300 mb-6">
              We follow a proven approach to build scalable, secure
              and high‑performance Progressive Web Apps.
            </p>

            {[
              "Requirement analysis & use‑case planning",
              "UI/UX design for app‑like experience",
              "PWA development with service workers",
              "Performance, security & offline testing",
              "Deployment, monitoring & support"
            ].map((step, i) => (
              <div key={i} className="flex gap-3 mb-3">
                <Layers className="text-crypto-purple mt-1" />
                <p className="text-gray-400 text-sm">{step}</p>
              </div>
            ))}
          </div>
          <div>
            <img
              src="/image/abc-removebg-preview.png"
              alt="PWA Development Process"
              className="rounded-2xl shadow-2xl w-full"
            />
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 bg-gradient-hero text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
          Ready to Build a High‑Performance PWA?
        </h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          Partner with CoxFuture to create a Progressive Web App
          that delivers speed, reliability and native‑like experience.
        </p>

        <Button
          onClick={() => setOpenEnquiry(true)}
          size="lg"
          className="bg-crypto-purple px-10 py-6"
        >
          Start Your PWA Project
        </Button>
      </section>

      {/* ================= MODAL ================= */}
      <AnimatePresence>
        {openEnquiry && (
          <EnquiryModal
            open="Progressive Web App"
            onOpenChange={() => setOpenEnquiry(false)}
          />
        )}
      </AnimatePresence>


    </div>
      
    </>
  );
};

export default ProgressiveWebApp;
