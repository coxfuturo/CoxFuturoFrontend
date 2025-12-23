"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import EnquiryModal from "./EnquiryModal";

import {
  Palette,
  PenTool,
  Layout,
  ShoppingCart,
  Globe,
  Code2,
  Smartphone,
  Layers,
  Database,
  Box,
  Megaphone,
  Search,
  FileText,
  Share2
} from "lucide-react";

const servicesData = [
  {
    title: "Design & Web",
    items: [
      { name: "UI & UX Design Service", icon: Palette, path: "/services/ui-ux-design" },
      { name: "Product Design Services", icon: PenTool, path: "/services/product-design" },
      { name: "Website Development", icon: Layout, path: "/services/website-development" },
      { name: "E-commerce Website", icon: ShoppingCart, path: "/services/ecommerce" },
      { name: "Corporate Website", icon: Globe, path: "/services/corporate-website" },
      { name: "CMS Development", icon: Code2, path: "/services/cms-development" },
      { name: "Progressive Web App", icon: Smartphone, path: "/services/pwa" }
    ]
  },
  {
    title: "App Development",
    items: [
      { name: "Mobile App Development", icon: Smartphone, path: "/services/mobile-app" },
      { name: "Android App Development", icon: Smartphone, path: "/services/android-app" },
      { name: "iOS App Development", icon: Smartphone, path: "/services/ios-app" },
      { name: "React Native App", icon: Code2, path: "/services/react-native" }
    ]
  },
  {
    title: "Software Solutions",
    items: [
      { name: "SaaS Development", icon: Layers, path: "/services/saas" },
      { name: "Custom CRM", icon: Database, path: "/services/crm" },
      { name: "ERP Development", icon: Box, path: "/services/erp" },
      { name: "AR / VR Solutions", icon: Code2, path: "/services/ar-vr" }
    ]
  },
  {
    title: "Marketing",
    items: [
      { name: "Digital Marketing", icon: Megaphone, path: "/services/digital-marketing" },
      { name: "SEO Optimization", icon: Search, path: "/services/seo" },
      { name: "Content Writing", icon: FileText, path: "/services/content-writing" },
      { name: "Social Media Marketing", icon: Share2, path: "/services/social-media" }
    ]
  }
];

const ServicesDropdown = ({ onItemClick }) => {
  const [openEnquiry, setOpenEnquiry] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  const openModal = (service = "") => {
    setSelectedService(service);
    setOpenEnquiry(true);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: -15 }}
        exit={{ opacity: 0, x: -80 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="
        hidden lg:grid
        absolute right-0 mt-6 w-[1250px]
        rounded-3xl p-10 z-40
        grid-cols-5 gap-14
        bg-gradient-to-br from-[#0F172A] via-[#111827] to-[#020617]
        backdrop-blur-xl
        shadow-[0_0_80px_rgba(56,189,248,0.15)]
        overflow-hidden
      "
      >

        {/* IMAGE + CTA */}
        <div className="col-span-1 w-[220px] rounded-2xl overflow-hidden relative">
          <img
            src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
            alt="Services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />

          <div className="absolute bottom-6 left-0 right-0 px-4 text-center space-y-2">
            <p className="text-white/80">Have a project in mind?</p>
            <p className="text-sm font-semibold text-white">
              Let’s discuss your idea
            </p>

            <button
              onClick={() => openModal("General Enquiry")}
              className="mt-2 px-6 py-2 rounded-lg text-sm
              text-white bg-crypto-purple hover:bg-crypto-purple/90"
            >
              Get Enquiry
            </button>
          </div>
        </div>

        {/* SERVICES LIST */}
        <div className="col-span-4 grid grid-cols-4 gap-8">
          {servicesData.map((service, index) => (
            <div key={index} className="space-y-6">
              <h4 className="text-white font-semibold text-xl">
                {service.title}
              </h4>

              <ul className="space-y-4">
                {service.items.map((item, idx) => (
                  <li key={idx}>
                    <Link
                      to={item.path}
                      onClick={onItemClick}
                      className="flex items-center gap-3 text-sm
                      text-gray-300 hover:text-white transition"
                    >
                      <div
                        className="w-9 h-9 rounded-lg bg-white/5
                        flex items-center justify-center"
                      >
                        <item.icon size={18} className="text-crypto-purple" />
                      </div>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>
      {/* ================= MOBILE SERVICES DROPDOWN ================= */}
      <div className="
  lg:hidden
  bg-[#020617]
  rounded-xl
  p-4
  max-h-[70vh]
  overflow-y-auto
  custom-scrollbar
">
        {servicesData.map((service, index) => (
          <div key={index} className="mb-6">
            <h4 className="text-white font-semibold text-base mb-3">
              {service.title}
            </h4>

            <ul className="space-y-3">
              {service.items.map((item, idx) => (
                <li key={idx}>
                  <Link
                    to={item.path}
                    onClick={onItemClick}
                    className="flex items-center gap-3 text-sm text-gray-300"
                  >
                    <div className="w-8 h-8 rounded-md bg-white/5 flex items-center justify-center">
                      <item.icon size={16} className="text-crypto-purple" />
                    </div>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* ENQUIRY MODAL */}
      <AnimatePresence>
        {openEnquiry && (
          <EnquiryModal
            open={selectedService}
            onOpenChange={() => setOpenEnquiry(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default ServicesDropdown;
