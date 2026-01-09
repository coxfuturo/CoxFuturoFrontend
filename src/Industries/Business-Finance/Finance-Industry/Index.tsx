'use client';

import { useState } from "react";
import {
  ArrowRight,
  BarChart3,
  ShieldCheck,
  LineChart,
  Wallet,
  Globe,
  Layers,
  CheckCircle,
  Sparkles
} from "lucide-react";

import { Button } from "@/components/ui/button";
import EnquiryModal from "@/components/EnquiryModal";
import { AnimatePresence, motion } from "framer-motion";

const FinanceIndustry = () => {
  const [openEnquiry, setOpenEnquiry] = useState(false);

  return (
    <>
    <div className="relative w-full min-h-screen">

      {/* ================= HERO ================= */}
      <section className="relative min-h-screen flex items-center overflow-hidden
        bg-gradient-to-br from-[#061A16] via-[#0B2E26] to-[#103F34]"
      >
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-24 left-20 w-96 h-96 bg-emerald-500/20 blur-3xl rounded-full animate-pulse" />
          <div className="absolute bottom-20 right-16 w-96 h-96 bg-teal-500/20 blur-3xl rounded-full animate-pulse delay-1000" />
        </div>

        <div className="container mx-auto px-4 py-28 mt-16 grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 mb-5 px-5 py-1 text-xs rounded-full
              bg-white/10 border border-white/20 text-emerald-300"
            >
              <Sparkles size={14} /> Finance Industry
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
              Smart Software for
              <span className="block text-emerald-300"> Modern Finance</span>
            </h1>

            <p className="text-lg text-gray-200 max-w-xl mb-6">
              CoxFuture builds secure, data-driven and scalable
              finance software solutions for fast-growing businesses.
            </p>

            <p className="text-gray-300 max-w-xl mb-8">
              From financial analytics to digital finance platforms,
              we help organizations automate operations and drive growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => setOpenEnquiry(true)}
                size="lg"
                className="bg-emerald-600 hover:bg-emerald-700 px-9 py-6 group"
              >
                Build Finance Solution
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white py-6"
              >
                Explore Finance Services
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
              src="/image/Smart.png"
              alt="Finance Industry"
              // className="rounded-3xl shadow-2xl border border-white/10"
            />
          </motion.div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="py-24 bg-[#071C17]">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <img
            src="/image/D-T.png"
            alt="Finance Technology"
            // className="rounded-2xl shadow-2xl w-full"
          />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-emerald-300">
              Digital Transformation in Finance
            </h2>

            <p className="text-gray-300 mb-6">
              The finance industry demands accuracy, security and
              real-time insights to stay competitive.
            </p>

            <p className="text-gray-400 mb-6">
              Our finance solutions help organizations manage risk,
              ensure compliance and unlock powerful financial intelligence.
            </p>

            <div className="space-y-3">
              {[
                "Real-time financial analytics",
                "Secure data & transaction handling",
                "Regulatory-ready architecture",
                "Scalable systems for future growth"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="text-emerald-400 mt-1" />
                  <p className="text-gray-400 text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>

          
        </div>
      </section>

      {/* ================= SOLUTIONS ================= */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
            Finance Solutions We Deliver
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Wallet, title: "Digital Finance Platforms", desc: "End-to-end finance platforms & dashboards." },
              { icon: LineChart, title: "Financial Analytics", desc: "Advanced reporting & forecasting systems." },
              { icon: ShieldCheck, title: "Risk & Compliance", desc: "Secure and regulation-ready solutions." },
              { icon: BarChart3, title: "Investment Systems", desc: "Portfolio & investment management tools." },
              { icon: Globe, title: "Global Finance Tools", desc: "Multi-currency & global finance solutions." },
              { icon: Layers, title: "Automation Systems", desc: "Automated workflows & finance operations." }
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                className="bg-white/5 border border-white/10 rounded-xl p-8 text-center"
              >
                <item.icon className="mx-auto mb-4 text-emerald-400" size={36} />
                <h3 className="text-xl font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 bg-gradient-to-r from-emerald-600 to-teal-600 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
          Ready to Modernize Your Finance Systems?
        </h2>
        <p className="text-gray-100 mb-8 max-w-2xl mx-auto">
          Let CoxFuture build secure, scalable and future-ready
          finance software tailored to your business.
        </p>

        <Button
          onClick={() => setOpenEnquiry(true)}
          size="lg"
          className="bg-black text-white px-10 py-6"
        >
          Get Finance Consultation
        </Button>
      </section>

      {/* ================= MODAL ================= */}
      <AnimatePresence>
        {openEnquiry && (
          <EnquiryModal
            open="Finance Industry"
            onOpenChange={() => setOpenEnquiry(false)}
          />
        )}
      </AnimatePresence>


    </div>
          </>
  );
};

export default FinanceIndustry;
