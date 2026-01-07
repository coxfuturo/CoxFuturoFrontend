'use client';

import { useState } from "react";
import {
  ArrowRight,
  Layers,
  ShieldCheck,
  BarChart3,
  Globe,
  Zap,
  CheckCircle,
  Sparkles,
  Database,
  Cloud
} from "lucide-react";

import { Button } from "@/components/ui/button";
import EnquiryModal from "@/components/EnquiryModal";
import { AnimatePresence, motion } from "framer-motion";

const SaaSDevelopment = () => {
  const [openEnquiry, setOpenEnquiry] = useState(false);

  return (
    <>
    <div className="relative w-full min-h-screen">
      <div className="fixed inset-0 -z-10 bg-cover bg-center bg-[#1E293B]"
      style={{
        backgroundImage: 'url("/image/saas-bg.jpg")',
      }}
      >
        <div className="fixed inset-0 -z-10 bg-black/90"></div>
      </div>

      {/* ================= HERO ================= */}
      <section className="relative min-h-screen bg-transparent flex items-center overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-16 w-96 h-96 bg-rose-500/20 blur-3xl rounded-full animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 blur-3xl rounded-full animate-pulse delay-1000" />
        </div>

        <div className="container mx-auto px-4 py-28 mt-16 grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT */}
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-flex items-center gap-2 mb-5 px-5 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-rose-400">
              <Sparkles size={14} /> SaaS Development Services
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
              Scalable SaaS Solutions That
              <span className="block text-gradient"> Drive Business Growth</span>
            </h1>

            <p className="text-gray-300 max-w-xl mb-6">
              We design and develop high-performance SaaS applications that help businesses
              automate operations, manage customers, and scale effortlessly.
            </p>

            <p className="text-gray-400 max-w-xl mb-8">
              From MVP to full-scale SaaS products, our team ensures robust architecture,
              seamless integrations, and secure cloud deployment.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button onClick={() => setOpenEnquiry(true)} size="lg" className="bg-rose-400 px-9 py-6 group">
                Build My SaaS
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className="border-gray-600 text-white py-6">
                View SaaS Solutions
              </Button>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.2 }}>
            <img
              src="/image/saas1.png"
              alt="SaaS Development"
              // className="rounded-3xl shadow-2xl border border-white/10 w-full h-[440px] object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* ================= WHY US ================= */}
      <section className="py-24 bg-transparent">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <img src="/image/saas-2.jpeg" alt="SaaS Benefits" className="rounded-2xl shadow-2xl w-full" />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">
              Why Choose Our SaaS Development Services?
            </h2>

            <p className="text-gray-300 mb-6">
              SaaS platforms are transforming businesses by reducing costs, increasing efficiency,
              and providing scalable cloud solutions. We help companies deliver reliable
              and secure SaaS products to their users.
            </p>

            <div className="space-y-3">
              {[
                "Custom SaaS architecture & scalable backend",
                "User-friendly dashboards & analytics",
                "Cloud integrations & secure APIs",
                "Automated workflows & business process optimization",
                "Continuous support & product maintenance"
              ].map((item, i) => (
                <div key={i} className="flex gap-3">
                  <CheckCircle className="text-rose-400 mt-1" />
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
            Key SaaS Features We Deliver
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Layers, title: "Multi-Tenant Architecture" },
              { icon: ShieldCheck, title: "Secure & Compliant" },
              { icon: Globe, title: "Global Accessibility" },
              { icon: Zap, title: "High Performance" },
              { icon: Database, title: "Database Management" },
              { icon: BarChart3, title: "Analytics & Reporting" },
              { icon: Cloud, title: "Cloud Deployment" }
            ].map((f, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-8 text-center hover:border-rose-400/40 transition">
                <f.icon className="mx-auto mb-4 text-rose-400" size={36} />
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
              Our SaaS Development Process
            </h2>

            {[
              "Requirement analysis & strategy",
              "UI/UX design & prototyping",
              "Backend & frontend development",
              "Cloud integration & testing",
              "Deployment & ongoing support"
            ].map((step, i) => (
              <div key={i} className="flex gap-3 mb-3">
                <Layers className="text-rose-400 mt-1" />
                <p className="text-gray-400 text-sm">{step}</p>
              </div>
            ))}
          </div>
          <div>
            <img src="/image/saas-3.jpg" alt="SaaS Process" className="rounded-2xl shadow-2xl w-full" />
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 bg-transparent text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
          Ready to Build Your SaaS Product?
        </h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          Partner with CoxFuture to create a secure, scalable, and feature-rich SaaS platform
          tailored to your business needs.
        </p>

        <Button onClick={() => setOpenEnquiry(true)} size="lg" className="bg-rose-400 px-10 py-6">
          Get Free Consultation
        </Button>
      </section>

      {/* ================= MODAL ================= */}
      <AnimatePresence>
        {openEnquiry && (
          <EnquiryModal open="SaaS Development" onOpenChange={() => setOpenEnquiry(false)} />
        )}
      </AnimatePresence>

    </div>
      
    </>
  );
};

export default SaaSDevelopment;
