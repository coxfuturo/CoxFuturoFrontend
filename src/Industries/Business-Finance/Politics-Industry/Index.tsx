'use client';

import { useState } from "react";
import {
  ArrowRight,
  Globe,
  BarChart3,
  Layers,
  CheckCircle,
  FileText,
  Sparkles,
  ShieldCheck
} from "lucide-react";

import { Button } from "@/components/ui/button";
import EnquiryModal from "@/components/EnquiryModal";
import { AnimatePresence, motion } from "framer-motion";

const PoliticsIndustry = () => {
  const [openEnquiry, setOpenEnquiry] = useState(false);

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative min-h-screen flex items-center overflow-hidden
        bg-gradient-to-br from-[#330033] via-[#660066] to-[#990099]"
      >
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-24 left-20 w-96 h-96 bg-purple-500/20 blur-3xl rounded-full animate-pulse" />
          <div className="absolute bottom-20 right-16 w-96 h-96 bg-red-500/20 blur-3xl rounded-full animate-pulse delay-1000" />
        </div>

        <div className="container mx-auto px-4 py-28 mt-16 grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 mb-5 px-5 py-1 text-xs rounded-full
              bg-white/10 border border-white/20 text-purple-300"
            >
              <Sparkles size={14} /> Political Software Solutions
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
              Digital Solutions for
              <span className="block text-red-400"> Political Campaigns & Governance</span>
            </h1>

            <p className="text-lg text-gray-200 max-w-xl mb-6">
              CoxFuture develops software solutions tailored for political campaigns,
              governance management, and voter engagement.
            </p>

            <p className="text-gray-300 max-w-xl mb-8">
              From voter analytics dashboards to campaign management platforms,
              we help political organizations streamline processes and improve outreach.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => setOpenEnquiry(true)}
                size="lg"
                className="bg-red-600 hover:bg-red-700 px-9 py-6 group"
              >
                Build Political Software
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white py-6"
              >
                Explore Political Solutions
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
              src="/images/industries/politics/hero.jpg"
              alt="Politics Industry"
              className="rounded-3xl shadow-2xl border border-white/10"
            />
          </motion.div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="py-24 bg-[#330033]">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-red-400">
              Political Campaign & Governance Software
            </h2>

            <p className="text-gray-300 mb-6">
              Political organizations need technology to manage campaigns,
              voters, volunteers, and data securely and efficiently.
            </p>

            <p className="text-gray-400 mb-6">
              Our solutions help streamline voter data, automate campaign workflows,
              track performance metrics, and provide actionable insights for better decision-making.
            </p>

            <div className="space-y-3">
              {[
                "Voter data management & analytics",
                "Campaign planning & automation",
                "Volunteer & event coordination",
                "Digital engagement & outreach"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="text-red-400 mt-1" />
                  <p className="text-gray-400 text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <img
            src="/images/industries/politics/about.jpg"
            alt="Political Software"
            className="rounded-2xl shadow-2xl w-full"
          />
        </div>
      </section>

      {/* ================= SOLUTIONS ================= */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
            Political Software Solutions
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: BarChart3, title: "Analytics Dashboard", desc: "Real-time voter & campaign insights for strategic decisions." },
              { icon: FileText, title: "Campaign Management", desc: "Plan, execute, and track campaigns effectively." },
              { icon: Layers, title: "Volunteer Coordination", desc: "Organize teams, events, and outreach efficiently." },
              { icon: Globe, title: "Digital Engagement", desc: "Connect with voters through multiple digital channels." },
              { icon: ShieldCheck, title: "Secure Data Handling", desc: "Ensure confidentiality and compliance of sensitive data." }
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                className="bg-white/5 border border-white/10 rounded-xl p-8 text-center"
              >
                <item.icon className="mx-auto mb-4 text-red-400" size={36} />
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 bg-gradient-to-r from-red-600 to-purple-600 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
          Ready to Modernize Political Campaigns?
        </h2>
        <p className="text-gray-100 mb-8 max-w-2xl mx-auto">
          Partner with CoxFuture to leverage technology for campaign success
          and efficient governance management.
        </p>

        <Button
          onClick={() => setOpenEnquiry(true)}
          size="lg"
          className="bg-black text-white px-10 py-6"
        >
          Get Political Software Consultation
        </Button>
      </section>

      {/* ================= MODAL ================= */}
      <AnimatePresence>
        {openEnquiry && (
          <EnquiryModal
            open="Politics Industry"
            onOpenChange={() => setOpenEnquiry(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default PoliticsIndustry;
