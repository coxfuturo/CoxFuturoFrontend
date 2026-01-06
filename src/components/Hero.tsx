"use client";

import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  Smartphone,
  Cloud
} from "lucide-react";
import { Button } from "@/components/ui/button";
import EnquiryModal from "./EnquiryModal";
import { AnimatePresence, motion } from "framer-motion";
import FestiveSnow from "@/components/FestiveSnow";
import FestiveOffer from "@/components/FestiveOffer";

export default function Hero() {
  const [openEnquiry, setOpenEnquiry] = useState(false);
  const [selectedIndustry, setSelectedIndustry] = useState("");

  const openModal = (industry = "") => {
    setSelectedIndustry(industry);
    setOpenEnquiry(true);
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-hero hero-glow">
      {/* <FestiveSnow /> */}
      {/* 🎄 FESTIVE OFFER – TOP CENTER LINE */}

      {/* BACKGROUND VIDEO */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover -z-20 opacity-35"
      >
        <source src="/bgvideo.mp4" type="video/mp4" />
      </video>

      <div className="container mx-auto px-4 py-28">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.15,
                  repeat: Infinity,
                  repeatDelay: 3
                }
              }
            }}
          >
            {/* BADGE */}
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 px-4 py-1 mb-6 rounded-full
                         border border-white/10 bg-white/5 backdrop-blur text-sm text-gray-300"
            >
               Trusted Software Development Company
            </motion.div>

            {/* HEADING */}

            <AnimatedHeading text="We Build Digital Products That Scale Your Business" />
            <div className="absolute top-8 left-1/3 -translate-x-1/4 z-50">
              {/* <FestiveOffer /> */}
            </div>
            <p className="text-lg text-gray-300 max-w-xl mb-8">
              We help startups, SMEs and enterprises design, develop and scale
              secure web apps, mobile apps and SaaS platforms using modern
              technologies.
            </p>

            {/* SERVICES */}
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap gap-4 mb-10"
            >
              <ServiceBadge icon={Code2} text="Web Development" />
              <ServiceBadge icon={Smartphone} text="Mobile Apps" />
              <ServiceBadge icon={Cloud} text="SaaS & Cloud" />
            </motion.div>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={() => openModal("General Enquiry")}
                className="group bg-crypto-purple px-8 py-6"
              >
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition" />
              </Button>
              {/* 
  <Button size="lg" variant="outline">
    View Portfolio
    <ArrowUpRight className="ml-2 h-5 w-5" />
  </Button> */}
            </div>

          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            // animate={{ scale: [0.95, 1, 0.95], opacity: [0.85, 1, 0.85] }}
            // transition={{
            //   duration: 6,
            //   repeat: Infinity,
            //   // ease: "easeInOut"
            // }}
            className="relative"
          >

            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl">

              <img
                src="https://plus.unsplash.com/premium_photo-1720287601920-ee8c503af775?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Dashboard"
                className="rounded-2xl"
              />

              <StatCard
                className="-top-6 -left-6"
                label="Projects Delivered"
                value="10+"
              />
              <StatCard
                className="-bottom-6 -right-6"
                label="Client Satisfaction"
                value="98%"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {openEnquiry && (
          <EnquiryModal
            open={selectedIndustry}
            onOpenChange={() => setOpenEnquiry(false)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

/* ---------------- ANIMATIONS ---------------- */

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      repeat: Infinity,
      repeatDelay: 3
    }
  }
};

/* ---------------- COMPONENTS ---------------- */

const AnimatedHeading = ({ text }) => (
  <motion.h1
    initial="hidden"
    animate="visible"
    variants={{
      visible: {
        transition: {
          staggerChildren: 0.12,
          repeat: Infinity,
          repeatDelay: 3
        }
      }
    }}
    className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 flex flex-wrap gap-x-2"
  >
    {text.split(" ").map((word, i) => (
      <motion.span
        key={i}
        variants={{
          hidden: { opacity: 0, y: 25 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
          }
        }}
        className={`${word === "Digital" || word === "Business" ? "text-gradient" : ""}`}
      >
        {word}
      </motion.span>
    ))}
  </motion.h1>
);

const ServiceBadge = ({ icon: Icon, text }) => (
  <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm">
    <Icon className="w-4 h-4 text-crypto-purple" />
    {text}
  </div>
);

const StatCard = ({ label, value, className }) => (
  <motion.div
    animate={{ scale: [0.9, 1, 0.9] }}
    transition={{ duration: 4, repeat: Infinity }}
    className={`absolute ${className} bg-black/70 backdrop-blur border border-white/10 rounded-xl p-4`}
  >
    <p className="text-xs text-gray-400">{label}</p>
    <p className="text-2xl font-bold">{value}</p>
  </motion.div>
);
