import React from "react";
import { 
  ClipboardList, 
  Code2, 
  Rocket,
  Users,
  Palette,
  Search,
  TestTube,
  Shield,
  Sparkles,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    number: "01",
    icon: <Users className="h-5 w-5" />,
    title: "Discovery & Planning",
    description: "We start by understanding your business goals, target audience, and project requirements.",
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-gradient-to-br from-purple-500/20 to-pink-500/10"
  },
  {
    number: "02",
    icon: <Search className="h-5 w-5" />,
    title: "Research & Analysis",
    description: "Market research, competitor analysis, and technical feasibility assessment.",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-gradient-to-br from-blue-500/20 to-cyan-500/10"
  },
  {
    number: "03",
    icon: <Palette className="h-5 w-5" />,
    title: "UI/UX Design",
    description: "Wireframing, prototyping, and creating beautiful, user-friendly interfaces.",
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-gradient-to-br from-green-500/20 to-emerald-500/10"
  },
  {
    number: "04",
    icon: <Code2 className="h-5 w-5" />,
    title: "Development",
    description: "Agile development with clean code, modern frameworks, and best practices.",
    color: "from-orange-500 to-red-500",
    bgColor: "bg-gradient-to-br from-orange-500/20 to-red-500/10"
  },
  {
    number: "05",
    icon: <TestTube className="h-5 w-5" />,
    title: "Testing & QA",
    description: "Comprehensive testing to ensure quality and performance.",
    color: "from-yellow-500 to-amber-500",
    bgColor: "bg-gradient-to-br from-yellow-500/20 to-amber-500/10"
  },
  {
    number: "06",
    icon: <Rocket className="h-5 w-5" />,
    title: "Deployment & Launch",
    description: "Smooth deployment to production with performance optimization.",
    color: "from-indigo-500 to-violet-500",
    bgColor: "bg-gradient-to-br from-indigo-500/20 to-violet-500/10"
  },
  {
    number: "07",
    icon: <Shield className="h-5 w-5" />,
    title: "Support & Maintenance",
    description: "Ongoing support, updates, and maintenance for smooth operations.",
    color: "from-gray-500 to-slate-500",
    bgColor: "bg-gradient-to-br from-gray-500/20 to-slate-500/10"
  }
];

const HowItWorks = () => {
  return (
    <section
      id="how-it-works"
      className="relative py-20 md:py-24 overflow-hidden
      bg-gradient-to-b from-[#0A0B14] via-[#12141C] to-[#181A25]"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Animated Gradient Orbs */}
        <div className="absolute -top-40 -left-40 w-80 h-80">
          <div className="absolute w-full h-full bg-gradient-to-r from-crypto-purple/15 to-transparent rounded-full blur-3xl animate-pulse" />
        </div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80">
          <div className="absolute w-full h-full bg-gradient-to-l from-blue-500/10 to-transparent rounded-full blur-3xl animate-pulse delay-1000" />
        </div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      </div>

      {/* Floating Elements */}
    

      <div className="absolute bottom-10 right-5 md:bottom-20 md:right-10">
        <div className="relative">
          <div className="absolute -inset-3 bg-blue-500/10 rounded-full blur-lg"></div>
          <div className="relative h-6 w-6 md:h-8 md:w-8 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
            <Sparkles className="h-3 w-3 md:h-4 md:w-4 text-white" />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-gradient-to-r from-crypto-purple/15 to-blue-500/10 border border-crypto-purple/20">
            <Sparkles className="h-3 w-3 md:h-4 md:w-4 text-crypto-purple" />
            <span className="text-xs md:text-sm font-medium text-crypto-purple">
              Our Development Process
            </span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-white">
            From{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-crypto-purple via-purple-400 to-blue-400">
              Idea to Impact
            </span>
          </h2>
          
          <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg px-4">
            A transparent, step-by-step process ensuring quality, efficiency, and 
            successful delivery of your digital product.
          </p>
        </div>

        {/* Steps Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Vertical Center Line for Desktop */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-crypto-purple/30 to-transparent"></div>
          </div>

          {/* Steps Grid */}
          <div className="relative space-y-8 md:space-y-12 lg:space-y-16">
            {steps.map((step, index) => {
              const isLeft = index % 2 === 0;
              const isEven = index % 2 === 0;
              
              return (
                <div
                  key={index}
                  className={`relative flex flex-col lg:flex-row items-center lg:items-start gap-6 md:gap-8 ${
                    isLeft ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Step Content */}
                  <div className={`w-full lg:w-1/2 ${isLeft ? "lg:pr-12" : "lg:pl-12"}`}>
                    <div className={`bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 hover:border-white/20 transition-all duration-300 hover:scale-[1.02] ${
                      isLeft ? "lg:text-right" : "lg:text-left"
                    }`}>
                      {/* Step Header */}
                      <div className={`flex items-center gap-4 mb-4 ${isLeft ? "lg:justify-end" : ""}`}>
                        {/* Icon */}
                        <div className={`p-3 rounded-xl ${step.bgColor} flex-shrink-0`}>
                          <div className={`text-transparent bg-gradient-to-r ${step.color} bg-clip-text`}>
                            {step.icon}
                          </div>
                        </div>
                        
                        {/* Step Number */}
                        <div className="relative">
                          <div className={`absolute -inset-3 bg-gradient-to-r ${step.color} rounded-full blur-lg opacity-20`}></div>
                          <div className={`relative h-12 w-12 rounded-full ${step.bgColor} border border-white/10 flex items-center justify-center`}>
                            <span className="text-lg font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                              {step.number}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Title & Description */}
                      <h3 className="text-xl md:text-2xl font-bold mb-3 text-white">
                        {step.title}
                      </h3>
                      <p className="text-gray-400 mb-4 leading-relaxed">
                        {step.description}
                      </p>

                      {/* Progress Indicator */}
                      <div className={`flex items-center ${isLeft ? "lg:justify-end" : ""}`}>
                        <div className="flex items-center gap-1">
                          <div className="h-1 w-6 bg-gradient-to-r from-gray-700 to-gray-600 rounded-full"></div>
                          <div className={`h-1 w-12 bg-gradient-to-r ${step.color} rounded-full`}></div>
                          <div className="h-1 w-6 bg-gradient-to-r from-gray-600 to-gray-700 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Center Node for Desktop */}
                  <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                    <div className="relative">
                      {/* Glow Effect */}
                      <div className="absolute -inset-3 bg-gradient-to-r from-crypto-purple/20 to-blue-500/10 rounded-full blur-md"></div>
                      
                      {/* Node */}
                      <div className={`relative h-5 w-5 rounded-full bg-gradient-to-r ${step.color} border-4 border-[#12141C] shadow-lg`}></div>
                      
                      {/* Connecting Lines */}
                      <div className={`absolute top-1/2 -translate-y-1/2 w-24 h-px ${
                        isLeft 
                          ? "right-full bg-gradient-to-r from-transparent via-crypto-purple/30 to-crypto-purple/50" 
                          : "left-full bg-gradient-to-r from-crypto-purple/50 via-crypto-purple/30 to-transparent"
                      }`}></div>
                    </div>
                  </div>

                  {/* Spacer for the other side on desktop */}
                  <div className="hidden lg:block w-1/2"></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
      </div>
    </section>
  );
};

export default HowItWorks;