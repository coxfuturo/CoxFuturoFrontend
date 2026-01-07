'use client';

import { useState } from "react";
import {
  ArrowRight,
  Megaphone,
  TrendingUp,
  BarChart3,
  Target,
  Users,
  Globe,
  Layers,
  CheckCircle,
  Sparkles
} from "lucide-react";

import { Button } from "@/components/ui/button";
import EnquiryModal from "@/components/EnquiryModal";
import { AnimatePresence, motion } from "framer-motion";

const DigitalMarketing = () => {
  const [openEnquiry, setOpenEnquiry] = useState(false);

  return (
    <>
    <div className="relative w-full min-h-screen">
      <div className="fixed inset-0 -z-10 bg-cover bg-center"
      style={{
      backgroundImage: 'url("/image/DM-bg.jpg")'
    }}>
      </div>
       <div className="fixed inset-0 -z-10 bg-black/70"></div>

      {/* ================= HERO ================= */}
      <section className="relative min-h-screen bg-gradient-hero flex items-center overflow-hidden">
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
              <Sparkles size={14} /> Digital Marketing Services
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Digital Marketing That
              <span className="text-gradient"> Drives Growth & Visibility</span>
            </h1>

            <p className="text-lg text-gray-300 max-w-xl mb-6">
              CoxFuture helps businesses grow online with result-driven
              digital marketing strategies that increase visibility,
              traffic, engagement and conversions.
            </p>

            <p className="text-gray-400 max-w-xl mb-8">
              From startups to enterprises, we design customized digital
              marketing campaigns that connect your brand with the right
              audience at the right time.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => setOpenEnquiry(true)}
                size="lg"
                className="bg-crypto-purple px-9 py-6 group"
              >
                Start Digital Marketing
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-gray-700 text-white py-6"
              >
                View Marketing Plans
              </Button>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div>
              <img
                src="/image/Dm-1.png"
                alt="Digital Marketing"
                // className="w-full h-[440px] object-cover"
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
              src="/image/DM-2.jpg"
              alt="Why Digital Marketing"
              className="rounded-2xl shadow-2xl w-full"
              loading="lazy"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">
              Why Digital Marketing Is Important for Your Business
            </h2>

            <p className="text-gray-300 mb-6">
              In today’s digital-first world, customers discover brands
              online before making purchase decisions.
            </p>

            <p className="text-gray-400 mb-6">
              A strong digital marketing strategy helps you build brand
              awareness, generate qualified leads and convert visitors
              into loyal customers.
            </p>

            <div className="space-y-3">
              {[
                "Increase brand visibility across digital channels",
                "Reach targeted audiences with measurable results",
                "Generate consistent leads & sales",
                "Build long-term brand authority & trust"
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

      {/* ================= SERVICES ================= */}
      <section className="py-24 bg-transparent">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
            Digital Marketing Services We Offer
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Globe,
                title: "Search Engine Optimization (SEO)",
                desc: "Improve your website rankings and drive organic traffic."
              },
              {
                icon: Megaphone,
                title: "Paid Advertising (PPC)",
                desc: "Run high-converting ads on Google, Meta and other platforms."
              },
              {
                icon: Users,
                title: "Social Media Marketing",
                desc: "Build brand presence and engagement on social platforms."
              },
              {
                icon: TrendingUp,
                title: "Growth Marketing",
                desc: "Data-driven strategies focused on scaling your business."
              },
              {
                icon: Target,
                title: "Lead Generation",
                desc: "Attract, nurture and convert high-quality leads."
              },
              {
                icon: BarChart3,
                title: "Analytics & Reporting",
                desc: "Track performance with detailed insights and reports."
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
      <section className="py-24 bg-transparent">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-14 items-center">

          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">
              Our Digital Marketing Process
            </h2>

            <p className="text-gray-300 mb-6">
              We follow a structured and performance-focused
              digital marketing process to deliver measurable results.
            </p>

            {[
              "Business & competitor analysis",
              "Audience research & strategy planning",
              "Campaign execution across channels",
              "Continuous optimization & A/B testing",
              "Reporting, insights & growth scaling"
            ].map((step, i) => (
              <div key={i} className="flex gap-3 mb-3">
                <Layers className="text-crypto-purple mt-1" />
                <p className="text-gray-400 text-sm">{step}</p>
              </div>
            ))}
          </div>

          <div>
            <img
              src="/image/DM-3.webp"
              alt="Digital Marketing Process"
              className="rounded-2xl shadow-2xl w-full"
            />
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 bg-gradient-hero text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
          Ready to Grow Your Business Online?
        </h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          Partner with CoxFuture to build a powerful digital marketing
          strategy that delivers real business results.
        </p>

        <Button
          onClick={() => setOpenEnquiry(true)}
          size="lg"
          className="bg-crypto-purple px-10 py-6"
        >
          Get Free Marketing Consultation
        </Button>
      </section>

      {/* ================= MODAL ================= */}
      <AnimatePresence>
        {openEnquiry && (
          <EnquiryModal
            open="Digital Marketing"
            onOpenChange={() => setOpenEnquiry(false)}
          />
        )}
      </AnimatePresence>



    </div>
      
    </>
  );
};

export default DigitalMarketing;
