'use client';

import { useState } from "react";
import {
  ArrowRight,
  // Bank,
  ShieldCheck,
  CreditCard,
  Globe,
  Layers,
  CheckCircle,
  BarChart3,
  Sparkles
} from "lucide-react";

import { Button } from "@/components/ui/button";
import EnquiryModal from "@/components/EnquiryModal";
import { AnimatePresence, motion } from "framer-motion";

const BankingIndustry = () => {
  const [openEnquiry, setOpenEnquiry] = useState(false);

  return (
    <>
    <div>

      {/* ================= HERO ================= */}
      <section className="relative min-h-screen flex items-center overflow-hidden
        bg-gradient-to-br from-[#001F3F] via-[#003366] to-[#004C99]"
      >
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-24 left-20 w-96 h-96 bg-blue-500/20 blur-3xl rounded-full animate-pulse" />
          <div className="absolute bottom-20 right-16 w-96 h-96 bg-indigo-500/20 blur-3xl rounded-full animate-pulse delay-1000" />
        </div>

        <div className="container mx-auto px-4 py-28 mt-16 grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 mb-5 px-5 py-1 text-xs rounded-full
              bg-white/10 border border-white/20 text-blue-300"
            >
              <Sparkles size={14} /> Banking Industry
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
              Modern Banking Solutions for
              <span className="block text-blue-400"> Digital Transformation</span>
            </h1>

            <p className="text-lg text-gray-200 max-w-xl mb-6">
              CoxFuture develops secure, compliant, and scalable banking software
              to streamline operations and enhance customer experience.
            </p>

            <p className="text-gray-300 max-w-xl mb-8">
              From online banking portals to payment solutions and risk management,
              we provide end-to-end digital solutions for banks and financial institutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => setOpenEnquiry(true)}
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 px-9 py-6 group"
              >
                Build Banking Solution
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white py-6"
              >
                Explore Banking Services
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
              src="/image/Digital-trans.png"
              alt="Banking Industry"
              // className="rounded-3xl shadow-2xl border border-white/10"
            />
          </motion.div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="py-24 bg-[#001B33]">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-14 items-center">
          <img
            src="/image/Digitalbanking.png"
            alt="Banking Technology"
            // className="rounded-2xl shadow-2xl w-full"
          />
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-400">
              Digital Banking Solutions
            </h2>

            <p className="text-gray-300 mb-6">
              The banking sector requires high security, efficiency, and customer trust.
            </p>

            <p className="text-gray-400 mb-6">
              We help banks modernize their infrastructure with innovative
              banking applications, secure payment systems, and regulatory compliance solutions.
            </p>

            <div className="space-y-3">
              {[
                "Online banking & mobile apps",
                "Fraud prevention & security systems",
                "Regulatory compliance & reporting",
                "Automated workflows for banking operations"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="text-blue-400 mt-1" />
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
            Banking Software Solutions
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: CreditCard, title: "Payment Systems", desc: "Secure and fast digital payments." },
              { icon: ShieldCheck, title: "Security & Fraud Management", desc: "Protect transactions & sensitive data." },
              { icon: BarChart3, title: "Analytics & Reporting", desc: "Insightful dashboards and reports." },
              { icon: Globe, title: "Global Banking Solutions", desc: "Multi-currency & cross-border solutions." },
              { icon: Globe, title: "Core Banking Software", desc: "End-to-end banking operations platform." },
              { icon: Layers, title: "Workflow Automation", desc: "Streamline bank operations efficiently." }
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                className="bg-white/5 border border-white/10 rounded-xl p-8 text-center"
              >
                <item.icon className="mx-auto mb-4 text-blue-400" size={36} />
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-indigo-600 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
          Ready to Transform Your Banking Solutions?
        </h2>
        <p className="text-gray-100 mb-8 max-w-2xl mx-auto">
          Partner with CoxFuture to modernize banking operations
          and enhance customer experience with secure digital solutions.
        </p>

        <Button
          onClick={() => setOpenEnquiry(true)}
          size="lg"
          className="bg-black text-white px-10 py-6"
        >
          Get Banking Consultation
        </Button>
      </section>

      {/* ================= MODAL ================= */}
      <AnimatePresence>
        {openEnquiry && (
          <EnquiryModal
            open="Banking Industry"
            onOpenChange={() => setOpenEnquiry(false)}
          />
        )}
      </AnimatePresence>
      

    </div>
      
    </>
  );
};

export default BankingIndustry;
