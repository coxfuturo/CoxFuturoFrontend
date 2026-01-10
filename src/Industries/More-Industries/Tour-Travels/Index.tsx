'use client';

import { useState } from "react";
import {
  Globe,
  Layers,
  BarChart3,
  CheckCircle,
  // Airplane,
  Zap,
  ArrowRight,
  Sparkles
} from "lucide-react";

import { Button } from "@/components/ui/button";
import EnquiryModal from "@/components/EnquiryModal";
import { AnimatePresence, motion } from "framer-motion";

const TourTravelIndustry = () => {
  const [openEnquiry, setOpenEnquiry] = useState(false);

  return (
    <>
    <div className="relative w-full min-h-screen">

    
      {/* ================= HERO ================= */}
      <section className="relative min-h-screen flex items-center overflow-hidden
        bg-gradient-to-br from-[#3b82f6] via-[#60a5fa] to-[#bfdbfe]"
      >
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-24 left-16 w-96 h-96 bg-blue-400/20 blur-3xl rounded-full animate-pulse" />
          <div className="absolute bottom-20 right-16 w-96 h-96 bg-blue-300/20 blur-3xl rounded-full animate-pulse delay-1000" />
        </div>

        <div className="container mx-auto px-4 py-28 mt-16 grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 mb-5 px-5 py-1 text-xs rounded-full
              bg-white/10 border border-white/20 text-blue-900"
            >
              <Sparkles size={14} /> Tour & Travel Solutions
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-blue-900">
              Travel Tech That
              <span className="block text-blue-700"> Connects Journeys & Experiences</span>
            </h1>

            <p className="text-lg text-gray-900 max-w-xl mb-6">
              CoxFuture delivers innovative software solutions for the travel and tourism industry,
              helping agencies, operators, and travelers have seamless experiences.
            </p>

            <p className="text-gray-800 max-w-xl mb-8">
              From booking systems to travel management platforms, our solutions streamline operations
              and enhance customer engagement.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => setOpenEnquiry(true)}
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 px-9 py-6 group"
              >
                Start Travel Project
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-gray-900 py-6"
              >
                Explore Travel Solutions
              </Button>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
            
            
          >
            <div >
              <img
              src="/image/tour.png"
              alt="Tour & Travel Industry"
              className="w-[600px] h-[400px] flex- justify-center  "
            />
              
            </div>
            
          </motion.div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="py-24 bg-[#6f96b1]">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <img
            src="/image/tour-2.png"
            alt="Tour & Travel Solutions"
            // className="rounded-2xl shadow-2xl w-full"
          />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-900">
              Travel Software for Seamless Journeys
            </h2>

            <p className="text-gray-900 mb-6">
              We build technology solutions that simplify travel planning,
              enhance booking experiences, and optimize operations for travel businesses.
            </p>

            <p className="text-gray-800 mb-6">
              Our platforms integrate flights, hotels, tours, and activities in a centralized system,
              making it easier for operators to manage and customers to enjoy.
            </p>

            <div className="space-y-3">
              {[
                "End-to-end booking & itinerary management",
                "Real-time travel data & updates",
                "Customer engagement & loyalty tools",
                "Analytics & performance dashboards"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="text-blue-600 mt-1" />
                  <p className="text-gray-800 text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>

          
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="py-24 bg-[#dbeafe]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-blue-900">
            Key Features
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Layers, title: "Flight & Hotel Booking", desc: "Integrated booking platforms for smooth travel." },
              { icon: Zap, title: "Real-time Updates", desc: "Stay updated on schedules, availability & alerts." },
              { icon: Globe, title: "Global Reach", desc: "Manage international and domestic travel seamlessly." },
              { icon: Layers, title: "Itinerary Management", desc: "Centralized dashboard for trips & plans." },
              { icon: BarChart3, title: "Analytics & Insights", desc: "Monitor performance and traveler trends." },
              { icon: Zap, title: "Customer Engagement", desc: "Tools for loyalty, notifications & feedback." }
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                className="bg-white/10 border border-white/20 rounded-xl p-8 text-center"
              >
                <item.icon className="mx-auto mb-4 text-blue-600" size={36} />
                <h3 className="text-xl font-semibold text-blue-900 mb-2">{item.title}</h3>
                <p className="text-gray-800 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 bg-gradient-to-r from-blue-500 to-blue-400 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
          Start Your Travel Technology Project
        </h2>
        <p className="text-gray-100 mb-8 max-w-2xl mx-auto">
          Partner with CoxFuture to create travel software that connects journeys and experiences.
        </p>

        <Button
          onClick={() => setOpenEnquiry(true)}
          size="lg"
          className="bg-black text-white px-10 py-6"
        >
          Get Travel Consultation
        </Button>
      </section>

      {/* ================= MODAL ================= */}
      <AnimatePresence>
        {openEnquiry && (
          <EnquiryModal
            open="Tour & Travel Industry"
            onOpenChange={() => setOpenEnquiry(false)}
          />
        )}
      </AnimatePresence>
      </div>
    </>
  );
};

export default TourTravelIndustry;
