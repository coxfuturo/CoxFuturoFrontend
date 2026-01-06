'use client';

import { useState } from "react";
import {
  ArrowRight,
  Laptop,
  Layers,
  BarChart3,
  CheckCircle,
  BookOpen,
  Sparkles,
  Globe,
  Zap
} from "lucide-react";

import { Button } from "@/components/ui/button";
import EnquiryModal from "@/components/EnquiryModal";
import { AnimatePresence, motion } from "framer-motion";

const EducationIndustry = () => {
  const [openEnquiry, setOpenEnquiry] = useState(false);

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative min-h-screen flex items-center overflow-hidden
        bg-gradient-to-br from-[#3b82f6] via-[#60a5fa] to-[#93c5fd]"
      >
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-24 left-20 w-96 h-96 bg-blue-400/20 blur-3xl rounded-full animate-pulse" />
          <div className="absolute bottom-20 right-16 w-96 h-96 bg-teal-400/20 blur-3xl rounded-full animate-pulse delay-1000" />
        </div>

        <div className="container mx-auto px-4 py-28 mt-16 grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 mb-5 px-5 py-1 text-xs rounded-full
              bg-white/10 border border-white/20 text-blue-200"
            >
              <Sparkles size={14} /> Education Software Solutions
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
              Digital Tools for
              <span className="block text-teal-200"> Modern Education & Learning</span>
            </h1>

            <p className="text-lg text-gray-100 max-w-xl mb-6">
              CoxFuture develops innovative software solutions for educational institutions,
              e-learning platforms, and corporate training.
            </p>

            <p className="text-gray-200 max-w-xl mb-8">
              Enhance student engagement, simplify management, and deliver interactive learning
              experiences with our custom-built education software.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => setOpenEnquiry(true)}
                size="lg"
                className="bg-teal-500 hover:bg-teal-600 px-9 py-6 group"
              >
                Build Education Platform
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white py-6"
              >
                Explore Education Solutions
              </Button>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <img
              src="/images/industries/education/hero.jpg"
              alt="Education Industry"
              className="rounded-3xl shadow-2xl border border-white/10"
            />
          </motion.div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="py-24 bg-[#2563eb]/10">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-teal-400">
              Modern Software Solutions for Education
            </h2>

            <p className="text-gray-100 mb-6">
              From learning management systems (LMS) to student portals, we provide
              comprehensive software solutions to enhance education delivery.
            </p>

            <p className="text-gray-200 mb-6">
              Manage courses, monitor student progress, deliver interactive content, and
              enable collaboration between students and educators.
            </p>

            <div className="space-y-3">
              {[
                "Learning Management Systems (LMS)",
                "Interactive e-learning modules",
                "Student & teacher portals",
                "Analytics & reporting dashboards"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="text-teal-400 mt-1" />
                  <p className="text-gray-200 text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <img
            src="/images/industries/education/about.jpg"
            alt="Education Software"
            className="rounded-2xl shadow-2xl w-full"
          />
        </div>
      </section>

      {/* ================= SOLUTIONS ================= */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
            Education Solutions We Provide
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Laptop, title: "E-Learning Platform", desc: "Interactive learning modules for students & professionals." },
              { icon: Layers, title: "Student Management System", desc: "Manage student records, attendance, and performance." },
              { icon: BookOpen, title: "Content Authoring Tools", desc: "Create, edit, and deliver engaging course content." },
              { icon: BarChart3, title: "Analytics & Insights", desc: "Track student progress and course effectiveness." },
              { icon: Globe, title: "Cross-Platform Access", desc: "Accessible via mobile, web, and desktop devices." },
              { icon: Zap, title: "Fast & Reliable", desc: "High-performance, scalable, and secure software." }
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                className="bg-white/5 border border-white/10 rounded-xl p-8 text-center"
              >
                <item.icon className="mx-auto mb-4 text-teal-400" size={36} />
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 bg-gradient-to-r from-teal-400 to-blue-500 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
          Ready to Digitize Your Education Platform?
        </h2>
        <p className="text-gray-100 mb-8 max-w-2xl mx-auto">
          Partner with CoxFuture to create interactive and scalable education software
          for schools, universities, and online learning platforms.
        </p>

        <Button
          onClick={() => setOpenEnquiry(true)}
          size="lg"
          className="bg-black text-white px-10 py-6"
        >
          Get Education Software Consultation
        </Button>
      </section>

      {/* ================= MODAL ================= */}
      <AnimatePresence>
        {openEnquiry && (
          <EnquiryModal
            open="Education Industry"
            onOpenChange={() => setOpenEnquiry(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default EducationIndustry;
