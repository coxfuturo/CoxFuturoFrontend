"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import EnquiryModal from "./EnquiryModal";

import {
  Bike,
  Zap,
  Truck,
  Plane,
  IndianRupee,
  Building2,
  ShieldCheck,
  Landmark,
  HeartPulse,
  Utensils,
  GraduationCap,
  Home,
  Gamepad2,
  ShoppingBag,
  Wheat,
  Map,
  Users
} from "lucide-react";

const industriesData = [
  {
    title: "Mobility & Transport",
    items: [
      { name: "E-Scooter", icon: Bike, path: "/CoxFuture/industries/e-scooter" },
      { name: "EV", icon: Zap, path: "/CoxFuture/industries/ev" },
      { name: "Logistics", icon: Truck, path: "/CoxFuture/industries/logistics" },
      { name: "Aviation", icon: Plane, path: "/CoxFuture/industries/aviation" }
    ]
  },
  {
    title: "Business & Finance",
    items: [
      { name: "Finance", icon: IndianRupee, path: "/CoxFuture/industries/finance" },
      { name: "Banking", icon: Building2, path: "/CoxFuture/industries/banking" },
      { name: "Insurance", icon: ShieldCheck, path: "/CoxFuture/industries/insurance" },
      { name: "Politics", icon: Landmark, path: "/CoxFuture/industries/politics" }
    ]
  },
  {
    title: "Lifestyle & Others",
    items: [
      { name: "Healthcare", icon: HeartPulse, path: "/CoxFuture/industries/healthcare" },
      { name: "Food Delivery", icon: Utensils, path: "/CoxFuture/industries/food-delivery" },
      { name: "Education", icon: GraduationCap, path: "/CoxFuture/industries/education" },
      { name: "Real Estate", icon: Home, path: "/CoxFuture/industries/real-estate" }
    ]
  },
  {
    title: "More Industries",
    items: [
      { name: "Games", icon: Gamepad2, path: "/CoxFuture/industries/games" },
      { name: "E-Commerce", icon: ShoppingBag, path: "/CoxFuture/industries/ecommerce" },
      { name: "Agriculture", icon: Wheat, path: "/CoxFuture/industries/agriculture" },
      { name: "Tour & Travels", icon: Map, path: "/CoxFuture/industries/travel" },
      { name: "Social Networking", icon: Users, path: "/CoxFuture/industries/social-networking" }
    ]
  }
];

const IndustriesDropdown = ({ onItemClick }) => {
  const [openEnquiry, setOpenEnquiry] = useState(false);
  const [selectedIndustry, setSelectedIndustry] = useState("");

  const openModal = (industry = "") => {
    setSelectedIndustry(industry);
    setOpenEnquiry(true);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: -15 }}
        exit={{ opacity: 0, x: -80 }}
        className="absolute right-0 mt-6 w-[1250px]
                   bg-crypto-blue rounded-3xl
                   shadow-2xl p-10
                   grid grid-cols-5 gap-14 z-40"
      >
        {/* IMAGE + CTA */}
        <div className="col-span-1 w-[220px] rounded-2xl overflow-hidden relative">
          <img
            src="https://images.unsplash.com/photo-1492724441997-5dc865305da7"
            alt="Industries"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />

          <div className="absolute bottom-6 left-0 right-0 px-4 text-center space-y-2">
            <p className="text-sm text-white/80">
              Industry-specific solutions
            </p>
            <p className="text-sm font-semibold text-white">
              Built for your business
            </p>

            {/* ONLY THIS OPENS MODAL */}
            <button
              onClick={() => openModal("Industry Enquiry")}
              className="mt-2 px-6 py-2 rounded-lg
                         text-sm font-medium
                         text-white bg-crypto-purple
                         hover:bg-crypto-purple/90"
            >
              Get Enquiry
            </button>
          </div>
        </div>

        {/* INDUSTRIES LIST */}
        <div className="col-span-4 grid grid-cols-4 gap-8">
          {industriesData.map((industry, index) => (
            <div key={index} className="space-y-6">
              <h4 className="text-white font-semibold text-xl">
                {industry.title}
              </h4>

              <ul className="space-y-4">
                {industry.items.map((item, idx) => (
                  <li key={idx}>
                    <Link
                      onClick={onItemClick}
                      to={item.path}
                      className="flex items-center gap-3
                                 text-sm text-gray-300
                                 hover:text-white transition"
                    >
                      <div className="w-9 h-9 rounded-lg bg-white/5
                                      flex items-center justify-center">
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

      {/* ENQUIRY MODAL */}
      <AnimatePresence>
        {openEnquiry && (
          <EnquiryModal
            open={selectedIndustry}
            onOpenChange={() => setOpenEnquiry(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default IndustriesDropdown;
