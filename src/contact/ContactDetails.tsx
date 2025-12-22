"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner"; // Sonner toaster

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

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contact: "",
    service: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullName || !formData.email || !formData.contact || !formData.service) {
      toast.error("Please fill all required fields!");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("https://coxfuture.com/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message || "Something went wrong");
        return;
      }

      toast.success("Enquiry submitted successfully ✅");

      // Reset form
      setFormData({ fullName: "", email: "", contact: "", service: "", message: "" });

    } catch (err) {
      toast.error("Server error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-[#12141C] pt-32 pb-24">
      <div className="container mx-auto px-4">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Let’s Build Something Great Together
          </h1>
          <p className="text-gray-400 text-lg">
            Have an idea or a project in mind? Talk to our experts and
            transform your business with scalable web & mobile solutions.
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-2 gap-16 mb-24">
          {/* RIGHT – FORM */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-white mb-6">
              Get Free Consultation
            </h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* NAME */}
              <div>
                <label className="text-sm text-gray-400">Full Name *</label>
                <input
                  required
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="mt-2 w-full rounded-lg bg-black/40 border border-white/10 px-4 py-3 text-white focus:ring-2 focus:ring-crypto-purple outline-none"
                />
              </div>

              {/* EMAIL */}
              <div>
                <label className="text-sm text-gray-400">E-Mail ID *</label>
                <input
                  required
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="mt-2 w-full rounded-lg bg-black/40 border border-white/10 px-4 py-3 text-white focus:ring-2 focus:ring-crypto-purple outline-none"
                />
              </div>

              {/* CONTACT */}
              <div>
                <label className="text-sm text-gray-400">Contact Number *</label>
                <input
                  required
                  type="tel"
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  placeholder="Enter your contact number"
                  className="mt-2 w-full rounded-lg bg-black/40 border border-white/10 px-4 py-3 text-white focus:ring-2 focus:ring-crypto-purple outline-none"
                />
              </div>

              {/* SERVICE DROPDOWN */}
              <div>
                <label className="text-sm text-gray-400">Select Service *</label>
                <select
                  required
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-lg bg-black/40 border border-white/10 px-4 py-3 text-white focus:ring-2 focus:ring-crypto-purple outline-none"
                >
                  <option value="">Choose a service</option>
                  {services.map((service) => (
                    <option key={service} value={service}>{service}</option>
                  ))}
                </select>
              </div>

              {/* MESSAGE */}
              <div>
                <label className="text-sm text-gray-400">Project Details</label>
                <textarea
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe your idea or requirement"
                  className="mt-2 w-full rounded-lg bg-black/40 border border-white/10 px-4 py-3 text-white focus:ring-2 focus:ring-crypto-purple outline-none"
                />
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-crypto-purple hover:bg-crypto-dark-purple py-6 text-lg"
              >
                {loading ? "Submitting..." : "Submit Request"}
              </Button>

              <p className="text-xs text-gray-500 text-center">
                We respect your privacy. Your information is safe with us.
              </p>
            </form>
          </div>

          {/* LEFT – INFO */}
          <div className="space-y-10">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">
                Transform Your Business
              </h2>
              <p className="text-gray-400 max-w-xl">
                Build powerful web and mobile applications with CoxFuture’s
                expert development team. We help startups and enterprises
                turn ideas into high-impact digital products.
              </p>
            </div>

            {/* CONTACT INFO BOX */}
            <div className="space-y-6 bg-white/5 border border-white/10 rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <MapPin className="text-crypto-purple mt-1" />
                <p className="text-gray-300">
                  <strong>CoxFuture Technologies</strong><br />
                  LG-26, D-233, Triangles Business Park,<br />
                  Sector-63, Noida, Uttar Pradesh, India
                </p>
              </div>

              <div className="flex items-center gap-4">
                <Phone className="text-crypto-purple" />
                <p className="text-gray-300">+91 92177 90770</p>
              </div>

              <div className="flex items-center gap-4">
                <Mail className="text-crypto-purple" />
                <p className="text-gray-300">info@coxfuture.com</p>
              </div>

              <div className="flex items-center gap-4">
                <Clock className="text-crypto-purple" />
                <p className="text-gray-300">Response within 24 hours</p>
              </div>
            </div>
          </div>
        </div>

        {/* MAP */}
        <div className="rounded-2xl overflow-hidden border border-white/10">
          <iframe
            title="CoxFuture Office Location"
            src="https://www.google.com/maps?q=Triangles%20Business%20Park%20Sector%2063%20Noida&output=embed"
            className="w-full h-[420px]"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
