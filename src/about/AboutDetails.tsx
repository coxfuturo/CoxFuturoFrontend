"use client";

import { CheckCircle, Users, Target, Rocket } from "lucide-react";

const AboutDetails = () => {
  return (
    <section className="min-h-screen bg-[#12141C] pt-32 pb-24">
      <div className="container mx-auto px-4">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            About CoxFuture
          </h1>
          <p className="text-gray-400 text-lg">
            We are a technology-driven software development company focused on building
            scalable, secure, and high-performance digital products for startups and enterprises.
          </p>
        </div>

        {/* MISSION / VISION */}
        <div className="grid md:grid-cols-2 gap-12 mb-24">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <Target className="text-crypto-purple" />
              <h3 className="text-xl font-semibold text-white">Our Mission</h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Our mission is to empower businesses through innovative technology solutions,
              delivering products that are reliable, scalable, and future-ready.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <Rocket className="text-crypto-purple" />
              <h3 className="text-xl font-semibold text-white">Our Vision</h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              To become a trusted global technology partner, helping businesses transform ideas
              into impactful digital experiences.
            </p>
          </div>
        </div>

        {/* WHY CHOOSE US */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            Why Choose <span className="text-crypto-purple">CoxFuture</span>
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Experienced Development Team",
              "Modern & Scalable Tech Stack",
              "Agile & Transparent Process",
              "On-Time Project Delivery",
              "Dedicated Support & Maintenance",
              "Cost-Effective Solutions"
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl p-6"
              >
                <CheckCircle className="text-crypto-purple mt-1" />
                <p className="text-gray-300 text-sm">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* TEAM / CULTURE */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="flex justify-center mb-4">
            <Users className="h-8 w-8 text-crypto-purple" />
          </div>
          <h2 className="text-3xl font-bold mb-4 text-white">
            Our Team & Culture
          </h2>
          <p className="text-gray-400 text-lg">
            At CoxFuture, we believe in collaboration, innovation, and continuous learning.
            Our team works closely with clients to understand their goals and deliver
            solutions that truly make an impact.
          </p>
        </div>

      </div>
    </section>
  );
};

export default AboutDetails;
