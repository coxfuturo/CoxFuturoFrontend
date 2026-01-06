'use client';

import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle,
  Globe,
  Code2,
  Layers,
  Smartphone,
  ShieldCheck,
  Rocket
} from "lucide-react";
import { Button } from "@/components/ui/button";
import EnquiryModal from "@/components/EnquiryModal";
import { AnimatePresence } from "framer-motion";

const WebsiteDevelopment = () => {
  const [openEnquiry, setOpenEnquiry] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  const openModal = (service = "") => {
    setSelectedService(service);
    setOpenEnquiry(true);
  };

  return (
    <>

    <div className="relative w-full min-h-screen">

      <div className="fixed inset-0 -z-10 bg-cover bg-center" 
      style={{ 
        backgroundImage: 'url("/image/pexels-nemuel-6424589.jpg")'
      }}>
      </div>
      <div className="fixed inset-0 -z-10 bg-black/70" />


      {/* ================= HERO ================= */}
      <section className="relative min-h-screen flex items-center bg-gradient-hero hero-glow overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-80 h-80 bg-crypto-purple/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="container mx-auto px-4 py-24 mt-16">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* LEFT */}
            <div>
              <span className="inline-block mb-4 px-4 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-crypto-purple">
                Website Development Services
              </span>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                High-Performance <span className="text-gradient">Websites</span><br />
                Built to Convert & Scale
              </h1>

              <p className="text-lg text-gray-300 max-w-xl mb-6">
                At <strong>CoxFuture</strong>, we build fast, secure and scalable
                websites that represent your brand and drive real business growth.
              </p>

              <p className="text-gray-400 max-w-xl mb-8">
                From corporate websites to high-converting landing pages and
                complex web platforms, our websites are optimized for
                performance, SEO and user experience.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  onClick={() => openModal("Website Development Enquiry")}
                  className="bg-crypto-purple px-8 py-6 group"
                >
                  Get Website Consultation
                  <ArrowRight className="ml-2 h-5 w-5 transition group-hover:translate-x-1" />
                </Button>

                {/* <Button
                  size="lg"
                  variant="outline"
                  className="border-gray-700 text-white py-6 group"
                >
                  View Our Websites
                  <ArrowUpRight className="ml-2 h-5 w-5 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Button> */}
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative">
              <div>
                <img
                  src="/image/web.png"
                  alt="Website Development"
                  className="rounded-xl"
                />

                {/* <div className="absolute -top-6 -left-6 bg-black/60 rounded-xl p-4">
                  <p className="text-xs text-gray-400">Web Projects</p>
                  <p className="text-2xl font-bold text-white">150+</p>
                </div>

                <div className="absolute -bottom-6 -right-6 bg-black/60 rounded-xl p-4">
                  <p className="text-xs text-gray-400">Client Retention</p>
                  <p className="text-2xl font-bold text-green-500">97%</p>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="py-24 bg-transparent">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-14 text-gradient">
            Our Website Development Services
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Globe,
                title: "Corporate Websites",
                desc: "Professional, brand-focused websites for companies & enterprises."
              },
              {
                icon: Code2,
                title: "Custom Web Development",
                desc: "Tailor-made web solutions built with modern technologies."
              },
              {
                icon: Smartphone,
                title: "Responsive Web Design",
                desc: "Mobile-first websites that look perfect on every screen."
              },
              {
                icon: Layers,
                title: "CMS Development",
                desc: "Easy-to-manage websites using WordPress, Headless CMS & more."
              },
              {
                icon: ShieldCheck,
                title: "Secure & Optimized",
                desc: "Fast loading, SEO-friendly and highly secure websites."
              },
              {
                icon: Rocket,
                title: "Landing Pages & Funnels",
                desc: "Conversion-focused landing pages for marketing & ads."
              }
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-xl p-8"
              >
                <item.icon className="text-crypto-purple mb-4" />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="py-24 bg-transparent">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-14 items-center">
          <img
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900"
            alt="Web Development Process"
            className="rounded-2xl shadow-2xl"
          />

          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Website Development Process
            </h2>
            <p className="text-gray-300 mb-4">
              We follow a structured development approach to ensure
              quality, speed and scalability in every project.
            </p>

            <ul className="space-y-3">
              {[
                "Requirement analysis & planning",
                "UI/UX design & content structure",
                "Development with modern frameworks",
                "Performance optimization & SEO setup",
                "Testing, deployment & support"
              ].map((step, i) => (
                <li key={i} className="flex gap-3">
                  <CheckCircle className="text-crypto-purple mt-1" />
                  <span className="text-gray-300 text-sm">{step}</span>
                </li>
              ))}
            </ul>

            <Button
              onClick={() => openModal("Website Development Enquiry")}
              className="mt-8 bg-crypto-purple px-8 py-6"
            >
              Build My Website
            </Button>
          </div>
        </div>
      </section>

      {/* ================= WHY COXFUTURE ================= */}
      <section className="py-24 bg-transparent">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
            Why Choose CoxFuture for Website Development?
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "High-performance & SEO-optimized websites",
              "Modern tech stack (React, Next.js, Node)",
              "Conversion-focused UI/UX design",
              "Secure and scalable architecture",
              "Affordable packages for all business sizes",
              "Dedicated support & maintenance"
            ].map((item, i) => (
              <div
                key={i}
                className="flex gap-3 bg-white/5 border border-white/10 rounded-xl p-6"
              >
                <CheckCircle className="text-crypto-purple mt-1" />
                <p className="text-gray-300 text-sm">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="py-24 bg-gradient-hero text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Build a Powerful Website?
        </h2>
        <p className="text-gray-300 mb-8 max-w-xl mx-auto">
          Let CoxFuture design and develop a website that attracts,
          engages and converts your audience.
        </p>
        <Button
          size="lg"
          onClick={() => openModal("Website Development Enquiry")}
          className="bg-crypto-purple px-10 py-6"
        >
          Start Website Project
        </Button>
      </section>

      {/* ================= MODAL ================= */}
      <AnimatePresence>
        {openEnquiry && (
          <EnquiryModal
            open={selectedService}
            onOpenChange={() => setOpenEnquiry(false)}
          />
        )}
      </AnimatePresence>
    </div>    
    </>
  );
};

export default WebsiteDevelopment;
