'use client';

import { useState } from "react";
import {
  ArrowRight,
  PenTool,
  FileText,
  Edit3,
  TrendingUp,
  Globe,
  Target,
  Layers,
  CheckCircle,
  Sparkles
} from "lucide-react";

import { Button } from "@/components/ui/button";
import EnquiryModal from "@/components/EnquiryModal";
import { AnimatePresence, motion } from "framer-motion";

const ContentWriting = () => {
  const [openEnquiry, setOpenEnquiry] = useState(false);

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative min-h-screen bg-gradient-hero flex items-center overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-24 left-20 w-96 h-96 bg-indigo-500/15 blur-3xl rounded-full animate-pulse" />
          <div className="absolute bottom-24 right-16 w-96 h-96 bg-crypto-purple/15 blur-3xl rounded-full animate-pulse delay-1000" />
        </div>

        <div className="container mx-auto px-4 py-28 mt-16 grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 mb-5 px-5 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-crypto-purple">
              <Sparkles size={14} /> Content Writing Services
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Content That
              <span className="text-gradient"> Educates, Engages & Converts</span>
            </h1>

            <p className="text-lg text-gray-300 max-w-xl mb-6">
              CoxFuture delivers high-quality, SEO-friendly content
              that builds trust, improves visibility and drives
              meaningful customer action.
            </p>

            <p className="text-gray-400 max-w-xl mb-8">
              From website copy to blogs and marketing content,
              we craft words that align with your brand voice
              and business goals.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => setOpenEnquiry(true)}
                size="lg"
                className="bg-crypto-purple px-9 py-6 group"
              >
                Start Content Project
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-gray-700 text-white py-6"
              >
                View Content Services
              </Button>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/10">
              <img
                src="/images/marketing/content/hero.jpg"
                alt="Content Writing"
                className="w-full h-[440px] object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="py-24 bg-[#12141C]">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">
              Why Quality Content Matters
            </h2>

            <p className="text-gray-300 mb-6">
              Content is the foundation of digital marketing.
              It helps you attract the right audience,
              explain your offerings and build credibility.
            </p>

            <p className="text-gray-400 mb-6">
              Well-written content improves SEO, increases
              engagement and turns visitors into customers.
            </p>

            <div className="space-y-3">
              {[
                "Build brand authority & trust",
                "Improve search engine rankings",
                "Educate and engage your audience",
                "Increase leads & conversions"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="text-crypto-purple mt-1" />
                  <p className="text-gray-400 text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <img
              src="/images/marketing/content/about.jpg"
              alt="Why Content Writing"
              className="rounded-2xl shadow-2xl w-full"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
            Content Writing Services We Offer
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: FileText,
                title: "Website Content",
                desc: "Clear, persuasive content that represents your brand."
              },
              {
                icon: PenTool,
                title: "Blog Writing",
                desc: "SEO-optimized blogs that drive organic traffic."
              },
              {
                icon: Edit3,
                title: "Marketing Copy",
                desc: "Compelling copy for ads, landing pages & campaigns."
              },
              {
                icon: Globe,
                title: "SEO Content",
                desc: "Keyword-focused content to rank higher on search engines."
              },
              {
                icon: Target,
                title: "Product Descriptions",
                desc: "Convert visitors with benefit-driven descriptions."
              },
              {
                icon: TrendingUp,
                title: "Content Optimization",
                desc: "Improve existing content for better performance."
              }
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-xl p-8 text-center hover:border-crypto-purple/40 transition"
              >
                <item.icon className="mx-auto mb-4 text-crypto-purple" size={36} />
                <h3 className="text-xl font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="py-24 bg-[#12141C]">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <img
              src="/images/marketing/content/process.jpg"
              alt="Content Writing Process"
              className="rounded-2xl shadow-2xl w-full"
            />
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">
              Our Content Writing Process
            </h2>

            <p className="text-gray-300 mb-6">
              We follow a structured process to ensure
              consistency, quality and measurable results.
            </p>

            {[
              "Understanding brand & target audience",
              "Keyword & topic research",
              "Content drafting & optimization",
              "Editing & quality assurance",
              "Publishing & performance tracking"
            ].map((step, i) => (
              <div key={i} className="flex gap-3 mb-3">
                <Layers className="text-crypto-purple mt-1" />
                <p className="text-gray-400 text-sm">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 bg-gradient-hero text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
          Need Content That Delivers Results?
        </h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          Let CoxFuture create powerful content that strengthens
          your brand and drives measurable growth.
        </p>

        <Button
          onClick={() => setOpenEnquiry(true)}
          size="lg"
          className="bg-crypto-purple px-10 py-6"
        >
          Get Content Strategy
        </Button>
      </section>

      {/* ================= MODAL ================= */}
      <AnimatePresence>
        {openEnquiry && (
          <EnquiryModal
            open="Content Writing"
            onOpenChange={() => setOpenEnquiry(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default ContentWriting;
