"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import EnquiryModal from "./EnquiryModal";
import {
  Tv,
  Bike,
  CalendarDays,
  Radio,
  Gamepad2,
  HeartPulse,
  Utensils,
  IndianRupee,
  Landmark,
  Plane,
  Building2,
  ShieldCheck,
  GraduationCap,
  Zap,
  ShoppingBag,
  Newspaper,
  Truck,
  Wheat,
  Users,
  Home,
  Map
} from "lucide-react";

const industriesData = [
  //   {
  //     title: "On Demand & Media",
  //     items: [
  //       { name: "On Demand", icon: Zap },
  //       { name: "Entertainment", icon: Tv },
  //       { name: "News", icon: Newspaper },
  //       { name: "Social Networking", icon: Users }
  //     ]
  //   },
  {
    title: "Mobility & Transport",
    items: [
      { name: "E-Scooter", icon: Bike },
      { name: "EV", icon: Zap },
      { name: "Logistics", icon: Truck },
      { name: "Aviation", icon: Plane }
    ]
  },
  {
    title: "Business & Finance",
    items: [
      { name: "Finance", icon: IndianRupee },
      { name: "Banking", icon: Building2 },
      { name: "Insurance", icon: ShieldCheck },
      { name: "Politics", icon: Landmark }
    ]
  },
  {
    title: "Lifestyle & Others",
    items: [
      { name: "Healthcare", icon: HeartPulse },
      { name: "Food Delivery", icon: Utensils },
      { name: "Education", icon: GraduationCap },
      { name: "Real Estate", icon: Home }
    ]
  },
  {
    title: "More Industries",
    items: [
      { name: "Games", icon: Gamepad2 },
      { name: "E-Commerce", icon: ShoppingBag },
      { name: "Agriculture", icon: Wheat },
      { name: "Tour & Travels", icon: Map },
      { name: "Social Networking", icon: Users }

    ]
  }
];

const IndustriesDropdown = () => {
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

            <button
              onClick={() => openModal("Industry Enquiry")}
              className="mt-2 px-6 py-2
                         rounded-lg text-sm font-medium
                         text-white bg-crypto-purple
                         shadow-md transition
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
                  <li
                    key={idx}
                    onClick={() => openModal(item.name)}
                    className="flex items-center gap-3
                               text-sm text-gray-300
                               hover:text-white cursor-pointer transition"
                  >
                    <div className="w-9 h-9 rounded-lg bg-white/5
                                    flex items-center justify-center">
                      <item.icon size={18} className="text-crypto-purple" />
                    </div>
                    {item.name}
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
