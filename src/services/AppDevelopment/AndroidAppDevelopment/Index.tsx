'use client';

import { useState } from "react";
import {
  ArrowRight,
  Smartphone,
  // Android,
  Zap,
  ShieldCheck,
  Globe,
  BarChart3,
  Layers,
  CheckCircle,
  Sparkles,
  Cpu,
  Cloud,
  Settings
} from "lucide-react";

import { Button } from "@/components/ui/button";
import EnquiryModal from "@/components/EnquiryModal";
import { AnimatePresence, motion } from "framer-motion";

const AndroidAppDevelopment = () => {
  const [openEnquiry, setOpenEnquiry] = useState(false);

  return (

    <>

    <div className="relative w-full min-h-screen">
      <div className="fixed inset-0 -z-10 bg-current bg-cover" 
      style={{ 
        backgroundImage: 'url("/image/And-bg.jpg")'
      }}>
        <div className="fixed inset-0 -z-10 bg-black/70">
      </div>
      
      </div>

      {/* ================= HERO ================= */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-transparent">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-32 left-1/4 w-[520px] h-[520px] bg-green-500/10 blur-[120px] rounded-full" />
          <div className="absolute bottom-20 right-1/4 w-[420px] h-[420px] bg-crypto-purple/15 blur-[100px] rounded-full" />
        </div>

        <div className="container mx-auto px-4 py-32 grid lg:grid-cols-2 gap-20 items-center">
          {/* LEFT */}
          <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-flex items-center gap-2 mb-6 px-6 py-2 text-xs rounded-full bg-green-500/10 border border-green-500/20 text-green-400">
              <Sparkles size={14} /> Android App Development Services
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Build Powerful
              <span className="text-gradient"> Android Apps</span><br />for the World’s Largest Platform
            </h1>

            <p className="text-lg text-gray-300 max-w-xl mb-6">
              Android powers billions of devices globally. At CoxFuture, we create
              feature-rich, scalable and secure Android applications that help
              businesses reach massive audiences and achieve real growth.
            </p>

            <p className="text-gray-400 max-w-xl mb-10">
              Whether you are launching a startup MVP or modernizing an enterprise
              product, our Android solutions are designed for performance,
              stability and long-term success.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button onClick={() => setOpenEnquiry(true)} size="lg" className="bg-green-500 hover:bg-green-600 text-black px-9 py-6">
                Start Android Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-gray-700 text-white px-9 py-6">
                Explore Use Cases
              </Button>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }}>
            <img src="/image/And-1.png" alt="Android App Development" />
          </motion.div>
        </div>
      </section>

      {/* ================= USE CASES ================= */}
      <section className="py-24 bg-transparent">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
            Android Apps We Build
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[{icon:Smartphone,title:'Consumer Apps',desc:'B2C apps with high engagement & retention.'},{icon:BarChart3,title:'Business Apps',desc:'Internal tools, dashboards & analytics apps.'},{icon:Cloud,title:'On-Demand Apps',desc:'Delivery, booking & service platforms.'},{icon:Settings,title:'Enterprise Apps',desc:'Secure enterprise-grade Android solutions.'}].map((u,i)=>(
              <div key={i} className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-green-500/40 transition">
                <u.icon className="text-green-400 mb-4" size={34} />
                <h3 className="text-white font-semibold mb-2">{u.title}</h3>
                <p className="text-gray-400 text-sm">{u.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="py-24 bg-transparent">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gradient">
            What Makes Our Android Apps Stand Out
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[{icon:Zap,title:'Optimized Performance',desc:'Fast load times and smooth UI even on low-end devices.'},{icon:ShieldCheck,title:'Robust Security',desc:'Secure authentication, encryption and data protection.'},{icon:Cpu,title:'Modern Architecture',desc:'MVVM, Jetpack & clean scalable codebase.'},{icon:Globe,title:'Multi-Device Support',desc:'Phones, tablets, foldables & Android TV.'},{icon:Cloud,title:'Backend Ready',desc:'Seamless cloud & API integrations.'},{icon:Smartphone,title:'Latest Android Tech',desc:'Built using Kotlin & modern Android SDKs.'}].map((f,i)=>(
              <div key={i} className="rounded-2xl p-8 bg-white/5 border border-white/10 hover:-translate-y-1 transition">
                <f.icon className="text-crypto-purple mb-4" size={36} />
                <h3 className="text-white font-semibold mb-2">{f.title}</h3>
                <p className="text-gray-400 text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="py-24 bg-transparent">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center ">
          <div className="h-[400px] overflow-hidden rounded-3xl">
            <img src="/image/Android-2.png" className="rounded-3xl shadow-xl" />

          </div>
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Our Android Development Approach
            </h2>
            <p className="text-gray-300 mb-6">
              We follow an agile, transparent and milestone-driven process to
              deliver high-quality Android applications on time.
            </p>
            {["Discovery & technical planning","UI/UX with Material Design","Agile Android development","QA, testing & optimization","Play Store launch & maintenance"].map((s,i)=>(
              <div key={i} className="flex gap-3 mb-3">
                <Layers className="text-green-400 mt-1" />
                <span className="text-gray-400 text-sm">{s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-28 bg-gradient-to-r from-green-500/10 via-black to-crypto-purple/10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
          Let’s Build Your Android App
        </h2>
        <p className="text-gray-300 mb-10 max-w-2xl mx-auto">
          From idea to Play Store success, CoxFuture helps you create
          Android apps that users love and businesses trust.
        </p>
        <Button onClick={() => setOpenEnquiry(true)} size="lg" className="bg-green-500 hover:bg-green-600 text-black px-12 py-6">
          Get Android Consultation
        </Button>
      </section>

      {/* ================= MODAL ================= */}
      <AnimatePresence>
        {openEnquiry && (
          <EnquiryModal open="Android App Development" onOpenChange={() => setOpenEnquiry(false)} />
        )}
      </AnimatePresence>


    </div>
      
    </>
  );
};

export default AndroidAppDevelopment;