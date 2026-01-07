'use client';

import { useState } from "react";
import {
  ArrowRight,
  Megaphone,
  ThumbsUp,
  Users,
  BarChart3,
  Target,
  TrendingUp,
  Layers,
  CheckCircle,
  Sparkles
} from "lucide-react";

import { Button } from "@/components/ui/button";
import EnquiryModal from "@/components/EnquiryModal";
import { AnimatePresence, motion } from "framer-motion";

const SocialMediaMarketing = () => {
  const [openEnquiry, setOpenEnquiry] = useState(false);

  return (
    <>
    <div className="relative w-full min-h-screen">
      <div className="fixed inset-0 -z-10 bg-cover bg-center"
      style={{
      backgroundImage: 'url("/image/SM-bg.avif")'
    }}>
      </div>
       <div className="fixed inset-0 -z-10 bg-black/70"></div>

      {/* ================= HERO ================= */}
      <section className="relative min-h-screen bg-gradient-hero flex items-center overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-24 left-20 w-96 h-96 bg-pink-500/15 blur-3xl rounded-full animate-pulse" />
          <div className="absolute bottom-24 right-16 w-96 h-96 bg-indigo-500/15 blur-3xl rounded-full animate-pulse delay-1000" />
        </div>

        <div className="container mx-auto px-4 py-28 mt-16 grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 mb-5 px-5 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-crypto-purple">
              <Sparkles size={14} /> Social Media Marketing
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Turn Followers Into
              <span className="text-gradient"> Loyal Customers</span>
            </h1>

            <p className="text-lg text-gray-300 max-w-xl mb-6">
              CoxFuture helps brands grow their online presence
              through data-driven social media strategies
              that engage, convert and retain audiences.
            </p>

            <p className="text-gray-400 max-w-xl mb-8">
              From content creation to paid campaigns,
              we manage your social platforms to deliver
              measurable business results.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => setOpenEnquiry(true)}
                size="lg"
                className="bg-crypto-purple px-9 py-6 group"
              >
                Start Social Growth
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-gray-700 text-white py-6"
              >
                View SMM Services
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
                src="/image/Sm-1.png"
                alt="Social Media Marketing"
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
              src="/image/Sm-2.jpg"
              alt="Why Social Media Marketing"
              className="rounded-2xl shadow-2xl w-full"
              loading="lazy"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">
              Why Social Media Marketing Matters
            </h2>

            <p className="text-gray-300 mb-6">
              Social media is where your audience spends
              most of their time. A strong presence helps
              you stay relevant, visible and trusted.
            </p>

            <p className="text-gray-400 mb-6">
              With the right strategy, social platforms
              can drive brand awareness, leads and sales.
            </p>

            <div className="space-y-3">
              {[
                "Build strong brand awareness",
                "Engage directly with your audience",
                "Drive website traffic & leads",
                "Increase customer loyalty"
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
            Social Media Services We Offer
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Megaphone,
                title: "Social Media Strategy",
                desc: "Custom strategies aligned with your business goals."
              },
              {
                icon: Users,
                title: "Account Management",
                desc: "Daily handling of posts, comments & engagement."
              },
              {
                icon: ThumbsUp,
                title: "Content Creation",
                desc: "High-quality creatives, reels & captions."
              },
              {
                icon: Target,
                title: "Paid Social Ads",
                desc: "Targeted ad campaigns for faster growth."
              },
              {
                icon: BarChart3,
                title: "Analytics & Reporting",
                desc: "Track performance with detailed insights."
              },
              {
                icon: TrendingUp,
                title: "Growth Optimization",
                desc: "Continuous improvement for better ROI."
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
              Our Social Media Marketing Process
            </h2>

            <p className="text-gray-300 mb-6">
              We follow a structured approach to ensure
              consistency, creativity and measurable growth.
            </p>

            {[
              "Brand & audience analysis",
              "Content planning & calendar creation",
              "Creative design & copywriting",
              "Posting, engagement & ad management",
              "Performance tracking & optimization"
            ].map((step, i) => (
              <div key={i} className="flex gap-3 mb-3">
                <Layers className="text-crypto-purple mt-1" />
                <p className="text-gray-400 text-sm">{step}</p>
              </div>
            ))}
          </div>

          <div>
            <img
              src="/image/Sm-3.png"
              alt="Social Media Process"
              className="rounded-2xl shadow-2xl w-full"
            />
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 bg-gradient-hero text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
          Ready to Grow on Social Media?
        </h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          Let CoxFuture manage your social presence
          and turn engagement into real business growth.
        </p>

        <Button
          onClick={() => setOpenEnquiry(true)}
          size="lg"
          className="bg-crypto-purple px-10 py-6"
        >
          Get Social Media Strategy
        </Button>
      </section>

      {/* ================= MODAL ================= */}
      <AnimatePresence>
        {openEnquiry && (
          <EnquiryModal
            open="Social Media Marketing"
            onOpenChange={() => setOpenEnquiry(false)}
          />
        )}
      </AnimatePresence>

    </div>
      
    </>
  );
};

export default SocialMediaMarketing;
