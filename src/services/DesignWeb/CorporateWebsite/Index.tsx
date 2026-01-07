'use client';

import { useState } from "react";
import {
  ArrowRight,
  Building2,
  ShieldCheck,
  Globe,
  Users,
  BarChart3,
  CheckCircle,
  Smartphone,
  Layers,
  Briefcase,
  Monitor
} from "lucide-react";

import { Button } from "@/components/ui/button";
import EnquiryModal from "@/components/EnquiryModal";
import { AnimatePresence } from "framer-motion";

const CorporateWebsite = () => {
  const [openEnquiry, setOpenEnquiry] = useState(false);

  return (
    <>

    <div className="relative w-full min-h-screen">
      <div className="fixed inset-0 -z-10 bg-cover bg-center"
        style={{
        backgroundImage: 'url("/image/corporate-bg.jpg")'
      }}>
        <div className="fixed inset-0 -z-10 bg-black/70" />
      </div>
      

      {/* ================= HERO ================= */}
      <section className="relative min-h-screen bg-transparent flex items-center overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-96 h-96 bg-crypto-purple/25 blur-3xl rounded-full animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/10 blur-3xl rounded-full animate-pulse delay-1000" />
        </div>

        <div className="container mx-auto px-4 py-28 mt-16 grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT */}
          <div>
            <span className="inline-block mb-4 px-5 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-crypto-purple">
              Corporate Website Development Services
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Corporate Websites That
              <span className="text-gradient"> Build Authority</span>,
              <br />Trust & Business Growth
            </h1>

            <p className="text-lg text-gray-300 max-w-xl mb-6">
              At <strong>CoxFuture</strong>, we create powerful corporate websites
              designed to represent your brand with credibility, clarity and confidence.
            </p>

            <p className="text-gray-400 max-w-xl mb-8">
              Whether you are an enterprise, startup or growing organization,
              our corporate website solutions help you establish trust,
              communicate professionalism and convert visitors into clients,
              partners and investors.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => setOpenEnquiry(true)}
                size="lg"
                className="bg-crypto-purple px-9 py-6 group"
              >
                Get Corporate Website
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-gray-700 text-white py-6"
              >
                View Our Corporate Work
              </Button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            <div>
              <img
                src="/image/corporate.png"
                alt="Corporate Website Design"
                className="w-full h-[440px] object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="py-24 bg-transparent">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-14 items-center">

          <div>
            <img
              src="/image/cor2.jpg"
              alt="Corporate About Section"
              className="rounded-2xl shadow-2xl w-full"
              loading="lazy"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">
              Why Corporate Websites Matter in Today’s Digital World
            </h2>

            <p className="text-gray-300 mb-6">
              A corporate website is not just an online presence — it is the
              digital face of your organization. It communicates your values,
              expertise and credibility to clients, stakeholders and investors.
            </p>

            <p className="text-gray-400 mb-6">
              At CoxFuture, we focus on designing corporate websites that clearly
              tell your brand story, highlight your strengths and position your
              business as an industry leader.
            </p>

            <div className="space-y-3">
              {[
                "Professional brand identity & corporate storytelling",
                "Clear communication of services and offerings",
                "Trust-building layouts with strong UI/UX",
                "Enterprise-level security and scalability"
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

      {/* ================= FEATURES ================= */}
      <section className="py-24 bg-transparent">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
            Features of Our Corporate Website Solutions
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Building2, title: "Corporate Branding", desc: "Strong brand identity aligned with your vision and values." },
              { icon: Monitor, title: "Modern UI Design", desc: "Clean, elegant and professional layouts." },
              { icon: Smartphone, title: "Responsive Design", desc: "Optimized for desktop, tablet and mobile devices." },
              { icon: ShieldCheck, title: "Security Focused", desc: "Enterprise-grade security & compliance." },
              { icon: Globe, title: "SEO Friendly", desc: "Optimized for search engines and performance." },
              { icon: BarChart3, title: "Lead Generation", desc: "Built to convert visitors into business leads." }
            ].map((item, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-8 text-center">
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
              Our Corporate Website Development Process
            </h2>

            <p className="text-gray-300 mb-6">
              We follow a structured and collaborative approach to ensure
              quality, transparency and timely delivery.
            </p>

            {[
              "Requirement analysis & business understanding",
              "UI/UX wireframing & design approval",
              "Development & content integration",
              "Testing, security checks & optimization",
              "Deployment & post-launch support"
            ].map((step, i) => (
              <div key={i} className="flex gap-3 mb-3">
                <Layers className="text-crypto-purple mt-1" />
                <p className="text-gray-400 text-sm">{step}</p>
              </div>
            ))}
          </div>
          <div>
            <img
              src="/image/CR3.png"
              alt="Corporate Website Process"
              className="rounded-2xl shadow-2xl w-full"
            />
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 bg-gradient-hero text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
          Ready to Build a Professional Corporate Website?
        </h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          Partner with CoxFuture to build a corporate website that strengthens
          your brand, builds trust and accelerates business growth.
        </p>

        <Button
          onClick={() => setOpenEnquiry(true)}
          size="lg"
          className="bg-crypto-purple px-10 py-6"
        >
          Start Your Corporate Project
        </Button>
      </section>

      {/* ================= MODAL ================= */}
      <AnimatePresence>
        {openEnquiry && (
          <EnquiryModal
            open="Corporate Website"
            onOpenChange={() => setOpenEnquiry(false)}
          />
        )}
      </AnimatePresence>


    </div>
      
    </>
  );
};

export default CorporateWebsite;
