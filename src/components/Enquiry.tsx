"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

/* ===== SERVICES (ONLY ITEMS) ===== */
const services = [
  "UI & UX Design Service",
  "Product Design Services",
  "Website Development",
  "E-commerce Website",
  "Corporate Website",
  "CMS Development",
  "Progressive Web App",
  "Mobile App Development",
  "Android App Development",
  "iOS App Development",
  "React Native App",
  "SaaS Development",
  "Custom CRM",
  "ERP Development",
  "AR / VR Solutions",
  "Digital Marketing",
  "SEO Optimization",
  "Content Writing",
  "Social Media Marketing"
];

const Wrapper = ({ isModal, children }) =>
  isModal ? (
    <>{children}</>
  ) : (
    <section className="py-10 bg-gradient-to-b from-[#12141C] to-crypto-blue">
      <div className="container mx-auto px-4 max-w-2xl">
        {children}
      </div>
    </section>
  );

const AppInquiryForm = ({ isModal = false, onSuccess }) => {
  /* ===== STATE ===== */
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contact: "",
    service: "",
    message: ""
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const BASE_URL = import.meta.env.BASE_URL;
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (
      !formData.fullName ||
      !formData.email ||
      !formData.contact ||
      !formData.service ||
      !formData.message
    ) {
      setError("All fields are required");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch(`https://coxfuture.com/api/enquiry`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Something went wrong");
        return;
      }

      setSuccess("Enquiry submitted successfully ");
      setFormData({
        fullName: "",
        email: "",
        contact: "",
        service: "",
        message: ""
      });
      if (onSuccess) onSuccess();

    } catch (err) {
      setError("Server error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Wrapper isModal={isModal}>
      {/* ===== HEADING ===== */}
      <div className="text-center mb-4">
        <h2 className="text-xl md:text-2xl font-bold text-gradient mb-1">
          Transform Your Business
        </h2>
        <p className="text-gray-400 text-sm">
          Build a powerful Web and App with our expert development team.
        </p>
      </div>

      {/* ===== FORM ===== */}
      <form className="space-y-3" onSubmit={handleSubmit}>
        {/* NAME */}
        <div>
          <label className="text-xs text-gray-300 mb-1 block">
            Full Name
          </label>
          <Input
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Enter your full name"
            className="h-9 bg-white/10 border-white/20 text-sm text-white"
          />
        </div>

        {/* EMAIL */}
        <div>
          <label className="text-xs text-gray-300 mb-1 block">
            E-Mail ID
          </label>
          <Input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="h-9 bg-white/10 border-white/20 text-sm text-white"
          />
        </div>

        {/* CONTACT */}
        <div>
          <label className="text-xs text-gray-300 mb-1 block">
            Contact Number
          </label>
          <Input
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            placeholder="Enter your contact number"
            className="h-9 bg-white/10 border-white/20 text-sm text-white"
          />
        </div>

        {/* SERVICE DROPDOWN */}
        <div>
          <label className="text-xs text-gray-300 mb-1 block">
            Select Service
          </label>

          <div className="relative">
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="
                w-full h-9 rounded-lg
                bg-white/10 backdrop-blur
                border border-white/20
                text-sm text-white px-3 pr-10
                appearance-none
                focus:outline-none
                focus:ring-2 focus:ring-crypto-purple
                hover:border-white/40
                transition
              "
            >
              <option value="" className="bg-[#12141C] text-gray-400">
                Choose a service
              </option>

              {services.map((service) => (
                <option
                  key={service}
                  value={service}
                  className="bg-[#12141C] text-white"
                >
                  {service}
                </option>
              ))}
            </select>

            {/* Custom Arrow */}
            <svg
              className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>

        {/* MESSAGE */}
        <div>
          <label className="text-xs text-gray-300 mb-1 block">
            Message
          </label>
          <Textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Describe your idea"
            rows={2}
            className="bg-white/10 border-white/20 text-sm text-white"
          />
        </div>

        {/* MESSAGES */}
        {error && <p className="text-red-400 text-xs">{error}</p>}
        {success && <p className="text-green-400 text-xs">{success}</p>}

        {/* BUTTON */}
        <Button
          type="submit"
          disabled={loading}
          className="w-full h-9 bg-crypto-purple hover:bg-crypto-dark-purple text-white"
        >
          {loading ? "Submitting..." : "Submit"}
        </Button>
      </form>
    </Wrapper>
  );
};

export default AppInquiryForm;
