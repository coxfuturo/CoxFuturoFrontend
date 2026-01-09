'use client';

import { useState } from "react";
import {
  ArrowRight,
  Globe,
  BarChart3,
  Layers,
  CheckCircle,
  Heart,
  FileText,
  Sparkles,
  ShieldCheck
} from "lucide-react";

import { Button } from "@/components/ui/button";
import EnquiryModal from "@/components/EnquiryModal";
import { AnimatePresence, motion } from "framer-motion";

const HealthcareIndustry = () => {
  const [openEnquiry, setOpenEnquiry] = useState(false);

  return (
    <>
    <div className="relative w-full min-h-screen">
      {/* ================= HERO ================= */}
      <section className="relative min-h-screen flex items-center overflow-hidden
        bg-gradient-to-br from-[#0f4c75] via-[#1d3647] to-[#356866]"
      >
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-24 left-20 w-96 h-96 bg-teal-400/20 blur-3xl rounded-full animate-pulse" />
          <div className="absolute bottom-20 right-16 w-96 h-96 bg-blue-500/20 blur-3xl rounded-full animate-pulse delay-1000" />
        </div>

        <div className="container mx-auto px-4 py-28 mt-16 grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 mb-5 px-5 py-1 text-xs rounded-full
              bg-white/10 border border-white/20 text-teal-200"
            >
              <Sparkles size={14} /> Healthcare Software Solutions
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
              Innovative Software for
              <span className="block text-teal-300"> Healthcare Providers & Patients</span>
            </h1>

            <p className="text-lg text-gray-100 max-w-xl mb-6">
              CoxFuture builds healthcare solutions that improve patient care,
              streamline hospital operations, and optimize health data management.
            </p>

            <p className="text-gray-200 max-w-xl mb-8">
              From telemedicine apps to hospital management platforms, our software
              empowers healthcare organizations to deliver efficient and safe services.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => setOpenEnquiry(true)}
                size="lg"
                className="bg-teal-600 hover:bg-teal-700 px-9 py-6 group"
              >
                Build Healthcare Software
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white py-6"
              >
                Explore Healthcare Solutions
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
              src="/image/Healthcare-1.png"
              alt="Healthcare Industry"
              // className="rounded-3xl shadow-2xl border border-white/10"
            />
          </motion.div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="py-24 bg-[#0f4c75]">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <img
            src="/image/Healthcare-2.png"
            alt="Healthcare Software"
            // className="rounded-2xl shadow-2xl w-full"
          />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-teal-300">
              Digital Healthcare Solutions
            </h2>

            <p className="text-gray-100 mb-6">
              Modern healthcare requires digital tools for patient care, operational efficiency,
              and data-driven decision making.
            </p>

            <p className="text-gray-200 mb-6">
              Our solutions include hospital management software, telemedicine platforms,
              patient portals, and medical analytics tools to improve outcomes and reduce costs.
            </p>

            <div className="space-y-3">
              {[
                "Telemedicine & remote patient care",
                "Hospital & clinic management systems",
                "Electronic health records (EHR)",
                "Health analytics & reporting dashboards"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="text-teal-300 mt-1" />
                  <p className="text-gray-200 text-sm">{item}</p>
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
            Healthcare Software Solutions
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Heart, title: "Patient Management", desc: "Manage patient records, appointments, and care plans efficiently." },
              { icon: Layers, title: "Hospital Management", desc: "Streamline hospital workflows, staff coordination, and operations." },
              { icon: Globe, title: "Telemedicine", desc: "Enable remote consultations and patient engagement." },
              { icon: BarChart3, title: "Analytics & Reporting", desc: "Data-driven insights for better healthcare decision-making." },
              { icon: ShieldCheck, title: "Secure & Compliant", desc: "HIPAA-compliant and secure health data handling." }
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                className="bg-white/5 border border-white/10 rounded-xl p-8 text-center"
              >
                <item.icon className="mx-auto mb-4 text-teal-300" size={36} />
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 bg-gradient-to-r from-teal-600 to-blue-600 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
          Ready to Digitize Healthcare Services?
        </h2>
        <p className="text-gray-100 mb-8 max-w-2xl mx-auto">
          Partner with CoxFuture to create healthcare software that improves patient care
          and operational efficiency.
        </p>

        <Button
          onClick={() => setOpenEnquiry(true)}
          size="lg"
          className="bg-black text-white px-10 py-6"
        >
          Get Healthcare Software Consultation
        </Button>
      </section>

      {/* ================= MODAL ================= */}
      <AnimatePresence>
        {openEnquiry && (
          <EnquiryModal
            open="Healthcare Industry"
            onOpenChange={() => setOpenEnquiry(false)}
          />
        )}
      </AnimatePresence>

    </div>
      
    </>
  );
};

export default HealthcareIndustry;
