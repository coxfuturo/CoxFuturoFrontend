"use client";

import { useState } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import EnquiryModal from "./EnquiryModal";
import { AnimatePresence } from "framer-motion";

export default function Hero() {
  const [openEnquiry, setOpenEnquiry] = useState(false);
  const [selectedIndustry, setSelectedIndustry] = useState("");

  const openModal = (industry = "") => {
    setSelectedIndustry(industry);
    setOpenEnquiry(true);
  };

  return (
    <section className="relative  min-h-screen flex items-center overflow-hidden bg-gradient-hero hero-glow">
      {/* Background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-80 h-80 bg-crypto-purple/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mt-12 mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT CONTENT */}
          <div className="animate-fade-in-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              We Build <span className="text-gradient">Scalable Software</span>
              <br />That Grows Your Business
            </h1>

            <p className="text-lg text-gray-300 max-w-xl mb-8">
              From startups to enterprises, we design and develop high-performance
              web apps, mobile apps, SaaS platforms, and custom software tailored
              to your business goals.
            </p>

            {/* CTA BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Button
                size="lg"
                onClick={() => openModal("General Enquiry")}
                className="group bg-crypto-purple hover:bg-crypto-dark-purple 
                           px-8 py-6 flex items-center gap-2"
              >
                Get Free Consultation
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-gray-700 text-white py-6 group"
              >
                View Our Work
                <ArrowUpRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Button>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="relative animate-fade-in-right">
            <div className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=900"
                alt="Software development dashboard"
                className="rounded-xl"
              />

              <div className="absolute -top-6 -left-6 bg-black/60 backdrop-blur-md border border-white/10 rounded-xl p-4 shadow-lg">
                <p className="text-xs text-gray-400">Projects Delivered</p>
                <p className="text-2xl font-bold text-white">20+</p>
              </div>

              <div className="absolute -bottom-6 -right-6 bg-black/60 backdrop-blur-md border border-white/10 rounded-xl p-4 shadow-lg">
                <p className="text-xs text-gray-400">Client Satisfaction</p>
                <p className="text-2xl font-bold text-green-500">98%</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MODAL – ALWAYS OUTSIDE CONTENT */}
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
