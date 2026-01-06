'use client';

import { useState } from "react";
import {
  ArrowRight,
  Search,
  TrendingUp,
  BarChart3,
  Globe,
  Target,
  Layers,
  CheckCircle,
  Sparkles
} from "lucide-react";

import { Button } from "@/components/ui/button";
import EnquiryModal from "@/components/EnquiryModal";
import { AnimatePresence, motion } from "framer-motion";

const SeoOptimization = () => {
  const [openEnquiry, setOpenEnquiry] = useState(false);

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative min-h-screen bg-gradient-hero flex items-center overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-24 left-20 w-96 h-96 bg-emerald-500/15 blur-3xl rounded-full animate-pulse" />
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
              <Sparkles size={14} /> SEO Optimization
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              SEO That Brings
              <span className="text-gradient"> Long-Term Organic Growth</span>
            </h1>

            <p className="text-lg text-gray-300 max-w-xl mb-6">
              CoxFuture delivers result-driven SEO strategies that help your
              website rank higher, attract qualified traffic and convert
              visitors into customers.
            </p>

            <p className="text-gray-400 max-w-xl mb-8">
              We focus on sustainable SEO practices that improve visibility,
              authority and ROI — not short-term tricks.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => setOpenEnquiry(true)}
                size="lg"
                className="bg-crypto-purple px-9 py-6 group"
              >
                Start SEO Project
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-gray-700 text-white py-6"
              >
                View SEO Plans
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
                src="/images/marketing/seo/hero.jpg"
                alt="SEO Optimization"
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
              Why SEO Is Critical for Business Growth
            </h2>

            <p className="text-gray-300 mb-6">
              Most online experiences start with a search engine.
              If your business doesn’t appear on the first page,
              you are losing potential customers.
            </p>

            <p className="text-gray-400 mb-6">
              SEO helps your brand gain visibility, credibility and
              consistent traffic without depending only on paid ads.
            </p>

            <div className="space-y-3">
              {[
                "Increase organic website traffic",
                "Improve search engine rankings",
                "Build trust & brand authority",
                "Generate long-term leads & sales"
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
              src="/images/marketing/seo/about.jpg"
              alt="Why SEO Matters"
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
            SEO Services We Provide
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Search,
                title: "Keyword Research",
                desc: "Target high-intent keywords that bring relevant traffic."
              },
              {
                icon: Globe,
                title: "On-Page SEO",
                desc: "Optimize content, structure and meta elements."
              },
              {
                icon: Layers,
                title: "Technical SEO",
                desc: "Improve website speed, indexing & crawlability."
              },
              {
                icon: TrendingUp,
                title: "Off-Page SEO",
                desc: "Build authority with quality backlinks."
              },
              {
                icon: Target,
                title: "Local SEO",
                desc: "Rank higher in local searches & Google Maps."
              },
              {
                icon: BarChart3,
                title: "SEO Analytics",
                desc: "Track rankings, traffic & conversion performance."
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
              src="/images/marketing/seo/process.jpg"
              alt="SEO Process"
              className="rounded-2xl shadow-2xl w-full"
            />
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">
              Our SEO Optimization Process
            </h2>

            <p className="text-gray-300 mb-6">
              Our SEO process is transparent, data-driven and aligned
              with Google’s best practices.
            </p>

            {[
              "Website & SEO audit",
              "Keyword & competitor analysis",
              "On-page & technical optimization",
              "Content & link building strategy",
              "Performance tracking & continuous improvement"
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
          Want to Rank Higher on Google?
        </h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          Let CoxFuture help you improve rankings, traffic and
          conversions with powerful SEO strategies.
        </p>

        <Button
          onClick={() => setOpenEnquiry(true)}
          size="lg"
          className="bg-crypto-purple px-10 py-6"
        >
          Get Free SEO Audit
        </Button>
      </section>

      {/* ================= MODAL ================= */}
      <AnimatePresence>
        {openEnquiry && (
          <EnquiryModal
            open="SEO Optimization"
            onOpenChange={() => setOpenEnquiry(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default SeoOptimization;
