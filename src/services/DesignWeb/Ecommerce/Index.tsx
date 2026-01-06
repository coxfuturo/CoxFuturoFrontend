'use client';

import { useState } from "react";
import {
  ShoppingCart,
  CreditCard,
  ShieldCheck,
  Truck,
  BarChart3,
  Globe,
  CheckCircle,
  ArrowRight,
  Store,
  Smartphone
} from "lucide-react";
import { Button } from "@/components/ui/button";
import EnquiryModal from "@/components/EnquiryModal";
import { AnimatePresence } from "framer-motion";

const EcommerceWebsite = () => {
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
        backgroundImage: 'url("/image/e- combg.jpg")'
      }}>
      </div>
      <div className="fixed inset-0 -z-10 bg-black/70" />

      {/* ================= HERO ================= */}
      <section className="relative min-h-screen flex items-center  bg-transparent overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-16 left-10 w-72 h-72 bg-crypto-purple/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="container mx-auto px-4 py-24 mt-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* LEFT */}
            <div>
              <span className="inline-block mb-4 px-4 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-crypto-purple">
                E-commerce Website Development
              </span>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Sell Online with a<br />
                <span className="text-gradient">High-Converting</span> E-commerce Store
              </h1>

              <p className="text-lg text-gray-300 max-w-xl mb-6">
                CoxFuture builds powerful, scalable and conversion-optimized
                e-commerce websites that help businesses sell more online.
              </p>

              <p className="text-gray-400 max-w-xl mb-8">
                From startups to large brands, we create online stores with
                smooth user experience, secure payments and advanced
                product management.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  onClick={() => openModal("E-commerce Website Enquiry")}
                  className="bg-crypto-purple px-8 py-6 group"
                >
                  Launch My Online Store
                  <ArrowRight className="ml-2 h-5 w-5 transition group-hover:translate-x-1" />
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="border-gray-700 text-white py-6"
                >
                  View Store Samples
                </Button>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative">
              <div>
                <img
                  src="/image/e-commerce.png"
                  alt="Ecommerce Website"
                  className="w-full h-full object-cover"
                />
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ================= TRUST STRIP ================= */}
      <section className="py-10 bg-transparent border-y border-white/10">
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-5 gap-6 text-center text-sm text-gray-400">
          <div>Shopify</div>
          <div>WooCommerce</div>
          <div>Custom React</div>
          <div>Razorpay</div>
          <div>Stripe</div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="py-24 bg-transparent">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-14 text-gradient">
            Everything Your Online Store Needs to Grow
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Store,
                title: "Smart Product Management",
                desc: "Easily manage products, pricing, inventory and variants from a simple dashboard."
              },
              {
                icon: CreditCard,
                title: "Secure Payment Gateway",
                desc: "Multiple payment options including UPI, cards, wallets and net banking."
              },
              {
                icon: ShoppingCart,
                title: "Optimized Checkout",
                desc: "Fast and simple checkout flow to reduce cart abandonment."
              },
              {
                icon: Truck,
                title: "Shipping & Order Tracking",
                desc: "Integrated shipping, order status and delivery tracking."
              },
              {
                icon: ShieldCheck,
                title: "Security & Performance",
                desc: "SSL security, fast loading speed and scalable infrastructure."
              },
              {
                icon: BarChart3,
                title: "Analytics & Sales Reports",
                desc: "Track sales, customers, products and performance insights."
              }
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-crypto-purple/40 transition"
              >
                <item.icon className="text-crypto-purple mb-4" />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= MOBILE FIRST ================= */}
      <section className="py-24 bg-transparent">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-14 items-center">
          <img
            src="https://images.unsplash.com/photo-1601597111158-2fceff292cdc?auto=format&fit=crop&w=900"
            alt="Mobile Ecommerce"
            className="rounded-2xl shadow-2xl"
          />
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Mobile-First E-commerce Experience
            </h2>
            <p className="text-gray-300 mb-6">
              More than 70% of online shoppers buy using mobile devices.
              We design mobile-optimized e-commerce websites that load fast
              and convert better.
            </p>

            <ul className="space-y-3">
              {[
                "Mobile-friendly product pages",
                "Fast loading speed on slow networks",
                "One-tap checkout & UPI payments",
                "Responsive design for all devices"
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <CheckCircle className="text-crypto-purple mt-1" />
                  <span className="text-gray-300 text-sm">{item}</span>
                </li>
              ))}
            </ul>

            <Button
              onClick={() => openModal("E-commerce Website Enquiry")}
              className="mt-8 bg-crypto-purple px-8 py-6"
            >
              Build Mobile Store
            </Button>
          </div>

          
        </div>
      </section>

      {/* ================= WHY COXFUTURE ================= */}
      <section className="py-24 bg-transparent">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
            Why Choose CoxFuture for E-commerce?
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Conversion-focused e-commerce UI/UX",
              "Secure payment & checkout integration",
              "SEO-optimized product pages",
              "Scalable for future growth",
              "Affordable pricing for startups & brands",
              "Ongoing support & maintenance"
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
          Ready to Start Selling Online?
        </h2>
        <p className="text-gray-300 mb-8 max-w-xl mx-auto">
          Launch a high-performance e-commerce website with CoxFuture
          and turn visitors into loyal customers.
        </p>
        <Button
          size="lg"
          onClick={() => openModal("E-commerce Website Enquiry")}
          className="bg-crypto-purple px-10 py-6"
        >
          Start E-commerce Project
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

export default EcommerceWebsite;
