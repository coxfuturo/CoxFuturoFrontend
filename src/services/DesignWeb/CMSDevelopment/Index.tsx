'use client';

import { useState } from "react";
import {
  ArrowRight,
  Building2,
  ShieldCheck,
  Globe,
  BarChart3,
  CheckCircle,
  Smartphone,
  Layers,
  Monitor,
  Sparkles
} from "lucide-react";

import { Button } from "@/components/ui/button";
import EnquiryModal from "@/components/EnquiryModal";
import { AnimatePresence, motion } from "framer-motion";

const CorporateWebsite = () => {
  const [openEnquiry, setOpenEnquiry] = useState(false);

  return (
    <>

    <div className="relative w-full min-h-screen">
      <div className="fixed inset-0 -z-10 bg-cover bg-center"
      style={{
        backgroundImage: 'url("/image/cms-bg.webp")'
      }}>
      </div>
      <div className="fixed inset-0 -z-10 bg-black/70" />


      {/* ================= HERO ================= */}
      <section className="relative min-h-screen bg-transparent flex items-center overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-96 h-96 bg-crypto-purple/25 blur-3xl rounded-full animate-pulse" />
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
              <Sparkles size={14} /> Corporate Website Development
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Corporate Websites That
              <span className="text-gradient"> Build Authority</span>,
              <br /> Trust & Sustainable Growth
            </h1>

            <p className="text-lg text-gray-300 max-w-xl mb-6">
              At <strong>CoxFuture</strong>, we design and develop premium corporate websites
              that reflect your organization’s credibility, professionalism and long‑term vision.
            </p>

            <p className="text-gray-400 max-w-xl mb-8">
              From startups to enterprises, our corporate websites are crafted to communicate
              trust, showcase expertise and convert visitors into clients, partners and investors.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => setOpenEnquiry(true)}
                size="lg"
                className="bg-crypto-purple px-9 py-6 group"
              >
                Get Corporate Website
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-gray-700 text-white py-6"
              >
                View Our Work
              </Button>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div >
              <img
                src="/image/cms.png"
                alt="Corporate Website Design"
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
              src="/image/Cms2.png"
              alt="Corporate About Section"
              className="rounded-2xl shadow-2xl w-full"
              loading="lazy"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">
              Why a Strong Corporate Website Matters
            </h2>

            <p className="text-gray-300 mb-6">
              Your corporate website is the digital headquarters of your business.
              It is often the first impression for clients, investors and stakeholders.
            </p>

            <p className="text-gray-400 mb-6">
              We focus on clarity, trust and consistency—ensuring your brand story,
              services and achievements are communicated with confidence and impact.
            </p>

            <div className="space-y-3">
              {[
                "Professional brand identity & storytelling",
                "Clear presentation of services and solutions",
                "Trust‑driven UI/UX for better engagement",
                "Secure, scalable and enterprise‑ready architecture"
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
            What You Get With Our Corporate Websites
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Building2, title: "Corporate Branding", desc: "Consistent visual identity aligned with your brand values." },
              { icon: Monitor, title: "Modern UI/UX", desc: "Professional, clean and intuitive interface." },
              { icon: Smartphone, title: "Responsive Design", desc: "Flawless experience across all devices." },
              { icon: ShieldCheck, title: "Enterprise Security", desc: "High‑level security and compliance standards." },
              { icon: Globe, title: "SEO Optimized", desc: "Built for search visibility and fast performance." },
              { icon: BarChart3, title: "Lead Focused", desc: "Designed to generate enquiries and conversions." }
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
              Our Proven Development Process
            </h2>

            <p className="text-gray-300 mb-6">
              A transparent and structured workflow ensures quality, clarity and
              on‑time delivery for every corporate project.
            </p>

            {[
              "Business analysis & requirement gathering",
              "Wireframing, UI/UX design & approvals",
              "Development with content integration",
              "Testing, security audits & optimization",
              "Launch, training & ongoing support"
            ].map((step, i) => (
              <div key={i} className="flex gap-3 mb-3">
                <Layers className="text-crypto-purple mt-1" />
                <p className="text-gray-400 text-sm">{step}</p>
              </div>
            ))}
          </div>
          <div>
            <img
              src="/image/CMS3.png"
              alt="Corporate Website Process"
              className="rounded-2xl shadow-2xl w-full"
            />
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 bg-gradient-hero text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
          Build a Corporate Website That Inspires Trust
        </h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          Let CoxFuture create a corporate website that strengthens your brand,
          enhances credibility and drives measurable business growth.
        </p>

        <Button
          onClick={() => setOpenEnquiry(true)}
          size="lg"
          className="bg-crypto-purple px-10 py-6"
        >
          Start Your Corporate Project
        </Button>
      </section>

      {/* ================= MODAL ================= */}
      <AnimatePresence>
        {openEnquiry && (
          <EnquiryModal
            open="Corporate Website"
            onOpenChange={() => setOpenEnquiry(false)}
          />
        )}
      </AnimatePresence>


    </div>


      
    </>
  );
};

export default CorporateWebsite;
