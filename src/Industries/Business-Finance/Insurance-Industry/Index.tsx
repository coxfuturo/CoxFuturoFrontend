'use client';

import { useState } from "react";
import {
  ArrowRight,
  ShieldCheck,
  FileText,
  Layers,
  CheckCircle,
  BarChart3,
  Globe,
  Sparkles
} from "lucide-react";

import { Button } from "@/components/ui/button";
import EnquiryModal from "@/components/EnquiryModal";
import { AnimatePresence, motion } from "framer-motion";

const InsuranceIndustry = () => {
  const [openEnquiry, setOpenEnquiry] = useState(false);

  return (
    <>
    <div className="relative w-full min-h-screen">

      {/* ================= HERO ================= */}
      <section className="relative min-h-screen flex items-center overflow-hidden
        bg-gradient-to-br from-[#332200] via-[#664400] to-[#996600]"
      >
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-24 left-20 w-96 h-96 bg-yellow-500/20 blur-3xl rounded-full animate-pulse" />
          <div className="absolute bottom-20 right-16 w-96 h-96 bg-orange-500/20 blur-3xl rounded-full animate-pulse delay-1000" />
        </div>

        <div className="container mx-auto px-4 py-28 mt-16 grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 mb-5 px-5 py-1 text-xs rounded-full
              bg-white/10 border border-white/20 text-yellow-300"
            >
              <Sparkles size={14} /> Insurance Industry
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
              Digital Insurance Solutions for
              <span className="block text-yellow-400"> Smarter Risk Management</span>
            </h1>

            <p className="text-lg text-gray-200 max-w-xl mb-6">
              CoxFuture builds scalable and secure software for insurance providers
              to enhance policy management, claims processing, and customer engagement.
            </p>

            <p className="text-gray-300 max-w-xl mb-8">
              From underwriting automation to digital claims and analytics dashboards,
              we provide end-to-end insurance technology solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => setOpenEnquiry(true)}
                size="lg"
                className="bg-yellow-600 hover:bg-yellow-700 px-9 py-6 group"
              >
                Build Insurance Solution
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white py-6"
              >
                Explore Insurance Services
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
              src="/image/Insurance.png"
              alt="Insurance Industry"
              // className="rounded-3xl shadow-2xl border border-white/10"
            />
          </motion.div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="py-24 bg-[#331F00]">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <img
            src="/image/Insurance-2.png"
            alt="Insurance Technology"
            // className="rounded-2xl shadow-2xl w-full"
          />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-yellow-400">
              Modern Insurance Software
            </h2>

            <p className="text-gray-300 mb-6">
              Insurance companies need reliable, fast, and secure systems to manage policies and claims.
            </p>

            <p className="text-gray-400 mb-6">
              Our solutions automate workflows, improve customer engagement, and provide real-time insights
              to make insurance operations more efficient.
            </p>

            <div className="space-y-3">
              {[
                "Policy management & automation",
                "Claims processing & tracking",
                "Fraud detection & security",
                "Analytics dashboards & reporting"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="text-yellow-400 mt-1" />
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
            Insurance Software Solutions
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: FileText, title: "Policy Management", desc: "Automated and organized policy lifecycle management." },
              { icon: ShieldCheck, title: "Claims Management", desc: "Streamlined claims processing with compliance." },
              { icon: BarChart3, title: "Analytics & Insights", desc: "Data-driven decisions for better risk management." },
              { icon: Globe, title: "Customer Engagement", desc: "Multi-channel communication & self-service portals." },
              { icon: Layers, title: "Workflow Automation", desc: "Reduce manual work and increase operational efficiency." }
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                className="bg-white/5 border border-white/10 rounded-xl p-8 text-center"
              >
                <item.icon className="mx-auto mb-4 text-yellow-400" size={36} />
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 bg-gradient-to-r from-yellow-600 to-orange-600 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
          Ready to Transform Your Insurance Business?
        </h2>
        <p className="text-gray-100 mb-8 max-w-2xl mx-auto">
          Partner with CoxFuture to automate processes, improve customer experience
          and leverage data-driven insights.
        </p>

        <Button
          onClick={() => setOpenEnquiry(true)}
          size="lg"
          className="bg-black text-white px-10 py-6"
        >
          Get Insurance Consultation
        </Button>
      </section>

      {/* ================= MODAL ================= */}
      <AnimatePresence>
        {openEnquiry && (
          <EnquiryModal
            open="Insurance Industry"
            onOpenChange={() => setOpenEnquiry(false)}
          />
        )}
      </AnimatePresence>

    </div>
      
    </>
  );
};

export default InsuranceIndustry;
