'use client';

import { useState } from "react";
import {
  ArrowRight,
  Headset,
  Box,
  Eye,
  Layers,
  BarChart3,
  ShieldCheck,
  Users,
  CheckCircle,
  Sparkles
} from "lucide-react";

import { Button } from "@/components/ui/button";
import EnquiryModal from "@/components/EnquiryModal";
import { AnimatePresence, motion } from "framer-motion";

const ARVRSolutions = () => {
  const [openEnquiry, setOpenEnquiry] = useState(false);

  return (
    <>
    <div className="relative w-full min-h-screen">
      <div className="fixed inset-0 -z-10 bg-cover bg-center"
      style={{
      backgroundImage: 'url("/image/Ar-bg.webp")'
    }}>
      <div className="fixed inset-0 -z-10 bg-black/70"></div>
      </div>

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
              <Sparkles size={14} /> AR / VR Solutions
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Immersive AR & VR Experiences
              <span className="text-gradient"> That Transform Businesses</span>
            </h1>

            <p className="text-lg text-gray-300 max-w-xl mb-6">
              CoxFuture delivers cutting-edge Augmented Reality (AR) and
              Virtual Reality (VR) solutions that redefine user engagement,
              training and digital interaction.
            </p>

            <p className="text-gray-400 max-w-xl mb-8">
              From immersive product visualization to virtual training
              environments, our AR/VR solutions help businesses innovate,
              engage and scale faster.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => setOpenEnquiry(true)}
                size="lg"
                className="bg-crypto-purple px-9 py-6 group"
              >
                Build AR / VR Solution
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-gray-700 text-white py-6"
              >
                View Use Cases
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
                src="/image/ar.png"
                alt="AR VR Solutions"
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
              src="/image/Arvr-2.jpg"
              alt="AR VR Technology"
              className="rounded-2xl shadow-2xl w-full"
              loading="lazy"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">
              Why AR & VR Matter for Modern Businesses
            </h2>

            <p className="text-gray-300 mb-6">
              AR and VR technologies are revolutionizing how businesses
              interact with customers, train employees and visualize data.
            </p>

            <p className="text-gray-400 mb-6">
              Our immersive solutions enable realistic simulations,
              interactive storytelling and next-level digital experiences
              across multiple industries.
            </p>

            <div className="space-y-3">
              {[
                "Higher engagement & user retention",
                "Realistic product visualization",
                "Immersive training & simulations",
                "Reduced operational & training costs"
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

      {/* ================= SOLUTIONS ================= */}
      <section className="py-24 bg-transparent">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
            AR / VR Solutions We Provide
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Eye,
                title: "Augmented Reality Apps",
                desc: "Overlay digital elements on the real world for interactive experiences."
              },
              {
                icon: Headset,
                title: "Virtual Reality Experiences",
                desc: "Fully immersive VR environments for training, demos and simulations."
              },
              {
                icon: Box,
                title: "3D Visualization & Modeling",
                desc: "High-quality 3D models for products, architecture and marketing."
              },
              {
                icon: Users,
                title: "Training & Simulations",
                desc: "VR-based learning solutions for workforce training and safety drills."
              },
              {
                icon: BarChart3,
                title: "Data Visualization",
                desc: "Visualize complex data in interactive 3D environments."
              },
              {
                icon: ShieldCheck,
                title: "Secure & Scalable Systems",
                desc: "Enterprise-grade security with scalable cloud integration."
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
              Our AR / VR Development Process
            </h2>

            <p className="text-gray-300 mb-6">
              We follow a structured and innovative process
              to deliver high-quality AR and VR solutions.
            </p>

            {[
              "Business goals & use-case analysis",
              "3D design, prototyping & user flow planning",
              "AR / VR development & engine integration",
              "Performance testing & device optimization",
              "Deployment, support & future enhancements"
            ].map((step, i) => (
              <div key={i} className="flex gap-3 mb-3">
                <Layers className="text-crypto-purple mt-1" />
                <p className="text-gray-400 text-sm">{step}</p>
              </div>
            ))}
          </div>

          <div>
            <img
              src="/image/AR-VR-Development.jpg"
              alt="AR VR Development Process"
              className="rounded-2xl shadow-2xl w-full"
            />
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 bg-gradient-hero text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
          Ready to Build Immersive AR / VR Experiences?
        </h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          Partner with CoxFuture to create innovative AR and VR solutions
          that elevate user engagement and business growth.
        </p>

        <Button
          onClick={() => setOpenEnquiry(true)}
          size="lg"
          className="bg-crypto-purple px-10 py-6"
        >
          Get Free Consultation
        </Button>
      </section>

      {/* ================= MODAL ================= */}
      <AnimatePresence>
        {openEnquiry && (
          <EnquiryModal
            open="AR / VR Solutions"
            onOpenChange={() => setOpenEnquiry(false)}
          />
        )}
      </AnimatePresence>

    </div>
      
    </>
  );
};

export default ARVRSolutions;
