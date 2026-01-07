'use client';

import { useState } from "react";
import {
  ArrowRight,
  Building2,
  Database,
  BarChart3,
  ShieldCheck,
  Workflow,
  Layers,
  CheckCircle,
  Settings,
  Sparkles
} from "lucide-react";

import { Button } from "@/components/ui/button";
import EnquiryModal from "@/components/EnquiryModal";
import { AnimatePresence, motion } from "framer-motion";

const ERPDevelopment = () => {
  const [openEnquiry, setOpenEnquiry] = useState(false);

  return (
    <>
    <div className="relative w-full min-h-screen">
      <div className="fixed inset-0 -z-10 bg-cover bg-center"
      style={{
      backgroundImage: 'url("/image/erp-bg.jpg")'
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
              <Sparkles size={14} /> ERP Development
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Enterprise ERP Solutions
              <span className="text-gradient"> That Power Your Business</span>
            </h1>

            <p className="text-lg text-gray-300 max-w-xl mb-6">
              CoxFuture builds robust and scalable ERP systems that integrate
              all your business processes into one centralized platform.
            </p>

            <p className="text-gray-400 max-w-xl mb-8">
              From finance and inventory to HR and operations, our ERP solutions
              help organizations improve efficiency, reduce costs and make
              data-driven decisions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => setOpenEnquiry(true)}
                size="lg"
                className="bg-crypto-purple px-9 py-6 group"
              >
                Build ERP System
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-gray-700 text-white py-6"
              >
                View ERP Modules
              </Button>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div >
              <img
                src="/image/erp-1.png"
                alt="ERP Development"
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
              src="/image/erp-2.jpeg"
              alt="Why ERP"
              className="rounded-2xl shadow-2xl w-full"
              loading="lazy"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">
              Why Your Business Needs an ERP System
            </h2>

            <p className="text-gray-300 mb-6">
              An ERP system acts as the backbone of modern enterprises by
              connecting departments, data and workflows into a single system.
            </p>

            <p className="text-gray-400 mb-6">
              Our ERP solutions eliminate data silos, improve collaboration
              and provide real-time visibility across the organization.
            </p>

            <div className="space-y-3">
              {[
                "Centralized data across all departments",
                "Improved operational efficiency",
                "Real-time reporting & analytics",
                "Scalable for growing enterprises"
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

      {/* ================= MODULES ================= */}
      <section className="py-24 bg-transparent">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
            ERP Modules We Develop
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: BarChart3,
                title: "Finance & Accounting",
                desc: "Manage accounting, billing, taxation and financial reports."
              },
              {
                icon: Database,
                title: "Inventory & Supply Chain",
                desc: "Track inventory, vendors, procurement and logistics."
              },
              {
                icon: Building2,
                title: "HR & Payroll",
                desc: "Employee management, attendance and payroll automation."
              },
              {
                icon: Workflow,
                title: "Operations Management",
                desc: "Optimize production, workflows and internal processes."
              },
              {
                icon: Settings,
                title: "Manufacturing & Planning",
                desc: "Production planning, scheduling and resource allocation."
              },
              {
                icon: ShieldCheck,
                title: "Security & Compliance",
                desc: "Role-based access, audit logs and enterprise-grade security."
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
              Our ERP Development Process
            </h2>

            <p className="text-gray-300 mb-6">
              We follow a structured ERP implementation process to ensure
              smooth adoption, minimal disruption and long-term success.
            </p>

            {[
              "Business process analysis & ERP planning",
              "Module design & system architecture",
              "Custom ERP development & integrations",
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
              src="/image/erp-3.png"
              alt="ERP Development Process"
              className="rounded-2xl shadow-2xl w-full"
            />
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 bg-transparent text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
          Need a Scalable ERP for Your Organization?
        </h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          Partner with CoxFuture to build a powerful ERP system
          tailored to your business processes and growth goals.
        </p>

        <Button
          onClick={() => setOpenEnquiry(true)}
          size="lg"
          className="bg-crypto-purple px-10 py-6"
        >
          Get Free ERP Consultation
        </Button>
      </section>

      {/* ================= MODAL ================= */}
      <AnimatePresence>
        {openEnquiry && (
          <EnquiryModal
            open="ERP Development"
            onOpenChange={() => setOpenEnquiry(false)}
          />
        )}
      </AnimatePresence>


    </div>
          </>
  );
};

export default ERPDevelopment;
