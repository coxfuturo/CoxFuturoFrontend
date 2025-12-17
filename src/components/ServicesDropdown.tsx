"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import EnquiryModal from "./EnquiryModal";
import { Link } from "lucide-react";
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
import { i } from "node_modules/framer-motion/dist/types.d-DagZKalS";

const servicesData = [
    {
        title: "Design & Web",
        items: [
            { name: "UI & UX Design Service", icon: Palette },
            { name: "Product Design Services", icon: PenTool },
            { name: "Website Development", icon: Layout },
            { name: "E-commerce Website", icon: ShoppingCart },
            { name: "Corporate Website", icon: Globe },
            { name: "CMS Development", icon: Code2 },
            { name: "Progressive Web App", icon: Smartphone }
        ]
    },
    {
        title: "App Development",
        items: [
            { name: "Mobile App Development", icon: Smartphone },
            { name: "Android App Development", icon: Smartphone },
            { name: "iOS App Development", icon: Smartphone },
            { name: "React Native App", icon: Code2 }
        ]
    },
    {
        title: "Software Solutions",
        items: [
            { name: "SaaS Development", icon: Layers },
            { name: "Custom CRM", icon: Database },
            { name: "ERP Development", icon: Box },
            { name: "AR / VR Solutions", icon: Code2 }
        ]
    },
    {
        title: "Marketing",
        items: [
            { name: "Digital Marketing", icon: Megaphone },
            { name: "SEO Optimization", icon: Search },
            { name: "Content Writing", icon: FileText },
            { name: "Social Media Marketing", icon: Share2 }
        ]
    }
];

const ServicesDropdown = () => {
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
                className="absolute right-0 mt-6 w-[1250px] 
                   bg-crypto-blue rounded-3xl 
                   shadow-2xl p-10 
                   grid grid-cols-5 gap-14 z-40"
            >
                {/* IMAGE + BUTTON */}
                <div className="col-span-1 w-[220px] rounded-2xl overflow-hidden relative">
                    <img
                        src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
                        alt="Services"
                        className="w-full h-full object-cover"
                    />

                    {/* DARK OVERLAY */}
                    <div className="absolute inset-0 bg-black/40" />

                    {/* CTA CONTENT */}
                    <div className="absolute bottom-6 left-0 right-0 px-4 text-center space-y-2">
                        <p className="text-l text-white/80 tracking-wide">
                            Have a project in mind?
                        </p>
                        <p className="text-sm font-semibold text-white">
                            Let’s discuss your idea
                        </p>

                        <button
                            onClick={() => openModal("General Enquiry")}
                            className="mt-2 px-6 py-2
                 rounded-lg
                 text-sm font-medium
                 text-white
                 bg-crypto-purple
                 shadow-md
                 transition
                 hover:bg-crypto-purple/90"
                        >
                            Get Enquiry
                        </button>
                    </div>
                </div>


                {/* SERVICES */}
                <div className="col-span-4 grid grid-cols-4 gap-8">
                    {servicesData.map((service, index) => (
                        <div key={index} className="space-y-6">
                            <h4 className="text-white font-semibold text-xl">
                                {service.title}
                            </h4>

                            <ul className="space-y-4">
                                {service.items.map((item, idx) => (
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
                    <EnquiryModal open={selectedService} onOpenChange={() => setOpenEnquiry(false)} />

                )}
            </AnimatePresence>
        </>
    );
};

export default ServicesDropdown;
