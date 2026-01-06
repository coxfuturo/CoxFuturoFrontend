'use client';

import { useState } from "react";
import {
  ArrowRight,
  Database,
  Users,
  BarChart3,
  ShieldCheck,
  Workflow,
  Layers,
  CheckCircle,
  Sparkles
} from "lucide-react";

import { Button } from "@/components/ui/button";
import EnquiryModal from "@/components/EnquiryModal";
import { AnimatePresence, motion } from "framer-motion";

const CustomCRMDevelopment = () => {
  const [openEnquiry, setOpenEnquiry] = useState(false);

  return (
    <>
    <div className="relative w-full min-h-screen">
      <div className="fixed inset-0 -z-10 bg-cover bg-center"
      style={{
      backgroundImage: 'url("/image/crm-bg.jpg")'
    }}>
      <div className="fixed inset-0 -z-10 bg-black/70"></div>
      </div>

      {/* ================= HERO ================= */}
      <section className="relative min-h-screen bg-transparent flex items-center overflow-hidden">
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
              <Sparkles size={14} /> Custom CRM Development
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Custom CRM Systems
              <span className="text-gradient"> Built for Your Business</span>
            </h1>

            <p className="text-lg text-gray-300 max-w-xl mb-6">
              CoxFuture develops tailor-made CRM solutions that help businesses
              manage customers, automate sales processes and improve team productivity.
            </p>

            <p className="text-gray-400 max-w-xl mb-8">
              Unlike off-the-shelf CRMs, our custom CRM systems are designed
              specifically around your workflows, goals and data structure.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => setOpenEnquiry(true)}
                size="lg"
                className="bg-crypto-purple px-9 py-6 group"
              >
                Build Custom CRM
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-gray-700 text-white py-6"
              >
                View CRM Features
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
                src="/images/crm/hero.jpg"
                alt="Custom CRM Development"
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
              src="/image/crm-2.png"
              alt="Why Custom CRM"
              className="h-[400px] overflow-hidden rounded-2xl shadow-2xl w-full"
              loading="lazy"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">
              Why Your Business Needs a Custom CRM
            </h2>

            <p className="text-gray-300 mb-6">
              A custom CRM helps you centralize customer data, streamline sales
              pipelines and gain complete visibility into your business operations.
            </p>

            <p className="text-gray-400 mb-6">
              We design CRM systems that are easy to use, highly secure and
              scalable as your business grows.
            </p>

            <div className="space-y-3">
              {[
                "Centralized customer & lead management",
                "Automated sales & follow-ups",
                "Role-based access & data security",
                "Scalable architecture for future expansion"
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
            Our Custom CRM Development Services
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Customer & Lead Management",
                desc: "Manage leads, customers and interactions in one unified system."
              },
              {
                icon: Workflow,
                title: "Sales Automation",
                desc: "Automate pipelines, tasks, reminders and follow-ups."
              },
              {
                icon: BarChart3,
                title: "Reports & Analytics",
                desc: "Real-time dashboards and actionable business insights."
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
              Our CRM Development Process
            </h2>

            <p className="text-gray-300 mb-6">
              We follow a structured and agile process to build CRM systems
              that perfectly match your business workflows.
            </p>

            {[
              "Business analysis & requirement gathering",
              "CRM architecture & UI/UX design",
              "Custom CRM development & integrations",
              "Testing, security & performance optimization",
              "Deployment, training & ongoing support"
            ].map((step, i) => (
              <div key={i} className="flex gap-3 mb-3">
                <Layers className="text-crypto-purple mt-1" />
                <p className="text-gray-400 text-sm">{step}</p>
              </div>
            ))}
          </div>
          <div>
            <img
              src="/image/crm-3.jpg"
              alt="CRM Development Process"
              className="rounded-2xl shadow-2xl w-full h-[400px] overflow-hidden"
            />
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 bg-gradient-hero text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
          Need a CRM That Fits Your Business?
        </h2>

        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          Get a fully customized CRM solution from CoxFuture
          to improve customer relationships and boost sales.
        </p>

        <Button
          onClick={() => setOpenEnquiry(true)}
          size="lg"
          className="bg-crypto-purple px-10 py-6"
        >
          Get Free CRM Consultation
        </Button>
      </section>

      {/* ================= MODAL ================= */}
      <AnimatePresence>
        {openEnquiry && (
          <EnquiryModal
            open="Custom CRM Development"
            onOpenChange={() => setOpenEnquiry(false)}
          />
        )}
      </AnimatePresence>

    </div>
      
    </>
  );
};

export default CustomCRMDevelopment;
