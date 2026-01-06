"use client";

import { useEffect, useState, ChangeEvent, FormEvent } from "react";
import {
  Briefcase,
  CheckCircle,
  ShieldCheck,
  ArrowRight,
  Users,
  Clock,
  Globe,
  Award,
  Sparkles,
  Upload,
  FileText,
  Linkedin,
  Github,
  ExternalLink
} from "lucide-react";
import {
  // ... existing imports
  DollarSign,
  Home,
  TrendingUp,
  Heart,
  Cpu,
  Zap,
  Shield,

  BookOpen,
  Coffee,
  Trophy,
  // ... other imports
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { motion } from "framer-motion";

/* ===== JOB ROLES ===== */
const jobRoles = [
  "Frontend Developer (React / Next.js)",
  "Backend Developer (Node.js)",
  "Full Stack Developer (MEAN / MERN)",
  "UI / UX Designer",
  "Mobile App Developer",
  "Digital Marketing Executive",
  "SEO Specialist",
  "Content Writer",
  "Internship"
];

interface CareerFormData {
  fullName: string;
  email: string;
  contact: string;
  role: string;
  experience: string;
  message: string;
  linkedin?: string;
  github?: string;
  portfolio?: string;
}

const API_URL = "https://coxfuture.com/api/uploads";


export default function CareerPage() {
  const [formData, setFormData] = useState<CareerFormData>({
    fullName: "",
    email: "",
    contact: "",
    role: "",
    experience: "",
    message: "",
  });

  const [resume, setResume] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [applicationsCount, setApplicationsCount] = useState(0);

  /* ===== GET COUNT ===== */
  const fetchApplications = async () => {
    const res = await fetch(`https://coxfuture.com/api/career`);
    const data = await res.json();
    setApplicationsCount(data?.data?.length || 0);
  };

  useEffect(() => {
    fetchApplications();
  }, []);

  /* ===== HANDLERS ===== */
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!formData.fullName || !formData.email || !formData.contact || !formData.role) {
      toast.error("Please fill all required fields");
      return;
    }

    if (!resume) {
      toast.error("Resume is required");
      return;
    }

    try {
      setLoading(true);

      const payload = new FormData();
      Object.entries(formData).forEach(([k, v]) =>
        payload.append(k, v)
      );
      payload.append("resume", resume);

      const res = await fetch(API_URL, {
        method: "POST",
        body: payload
      });

      if (!res.ok) throw new Error();

      toast.success("Thanks for applying! Our team will contact you soon 🚀");

      setFormData({
        fullName: "",
        email: "",
        contact: "",
        role: "",
        experience: "",
        message: "",
        linkedin: "",
        github: "",
        portfolio: ""
      });
      setResume(null);
      fetchApplications();

    } catch {
      toast.error("Something went wrong. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (

    
    <section className="min-h-screen bg-gradient-to-b from-[#0E1018] to-[#1a1d2e] pt-28 pb-24 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-900/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">

        {/* HERO */}
        <div className="text-center max-w-5xl mx-auto mb-20">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-5 py-2 mb-8 rounded-full 
                      bg-gradient-to-r from-purple-500/20 to-blue-500/20 
                      border border-white/10 text-sm text-gray-300 backdrop-blur-sm"
          >
            <Sparkles size={16} />
            We're actively hiring passionate builders
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight"
          >
            Build Your Future at{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 
                           bg-clip-text text-transparent">
              CoxFuture
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Join a team that's reshaping digital experiences with cutting-edge 
            technology and innovative solutions.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-6 md:gap-12 mb-12"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">5+</div>
              <div className="text-sm text-gray-400">Team Members</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">10+</div>
              <div className="text-sm text-gray-400">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">24/7</div>
              <div className="text-sm text-gray-400">Support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">{applicationsCount}+</div>
              <div className="text-sm text-gray-400">Active Applicants</div>
            </div>
          </motion.div>
        </div>

        {/* GRID */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* FORM */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-white/5 to-white/[0.02] 
                     border border-white/10 rounded-3xl p-8 backdrop-blur-xl 
                     shadow-2xl shadow-purple-900/10"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20">
                <FileText className="text-purple-400" size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">
                  Apply for a Role
                </h3>
                <p className="text-sm text-gray-400">
                  Fill the form below and our HR team will review your profile
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-1">
                  <label className="text-sm text-gray-300">Full Name *</label>
                  <input 
                    name="fullName" 
                    value={formData.fullName} 
                    onChange={handleChange}
                    className="input-field"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-sm text-gray-300">Email *</label>
                  <input 
                    type="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange}
                    className="input-field"
                    placeholder="john@example.com"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-sm text-gray-300">Contact Number *</label>
                  <input 
                    name="contact" 
                    value={formData.contact} 
                    onChange={handleChange}
                    className="input-field"
                    placeholder="+91 9876543210"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-sm text-gray-300">Experience *</label>
                  <input 
                    name="experience" 
                    value={formData.experience} 
                    onChange={handleChange}
                    className="input-field"
                    placeholder="2 Years"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-sm text-gray-300">Job Role *</label>
                <div className="relative">
                  <select 
                    name="role" 
                    value={formData.role} 
                    onChange={handleChange}
                    className="input-field appearance-none pr-10"
                  >
                    <option value="">Select a role</option>
                    {jobRoles.map((role) => (
                      <option key={role} value={role}>{role}</option>
                    ))}
                  </select>
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                    <ArrowRight size={20} />
                  </div>
                </div>
              </div>

              {/* Social Links */}
              

              {/* Resume Upload */}
              <div className="space-y-1">
                <label className="text-sm text-gray-300">Resume *</label>
                <label className="block group cursor-pointer">
                  <div className="border-2 border-dashed border-white/20 rounded-2xl p-8 
                                text-center transition-all duration-300
                                hover:border-purple-500 hover:bg-white/5
                                group-hover:scale-[1.02]">
                    <Upload className="mx-auto mb-4 text-gray-400 group-hover:text-purple-400" size={32} />
                    {resume ? (
                      <div className="space-y-2">
                        <p className="text-white font-medium">{resume.name}</p>
                        <p className="text-sm text-gray-400">Click to change file</p>
                      </div>
                    ) : (
                      <div>
                        <p className="text-white font-medium mb-1">Upload your resume</p>
                        <p className="text-sm text-gray-400">PDF, DOC, DOCX up to 5MB</p>
                      </div>
                    )}
                  </div>
                  <input 
                    type="file" 
                    hidden 
                    accept=".pdf,.doc,.docx"
                    onChange={(e) => setResume(e.target.files?.[0] ?? null)} 
                  />
                </label>
              </div>

              {/* Message */}
              <div className="space-y-1">
                <label className="text-sm text-gray-300">Cover Letter</label>
                <textarea 
                  rows={4} 
                  name="message" 
                  value={formData.message} 
                  onChange={handleChange}
                  className="input-field resize-none"
                  placeholder="Tell us why you're interested in joining CoxFuture..."
                />
              </div>

              <Button 
                disabled={loading}
                className="w-full py-7 text-lg font-semibold rounded-2xl
                         bg-gradient-to-r from-purple-600 to-blue-600
                         hover:from-purple-700 hover:to-blue-700
                         transition-all duration-300 hover:scale-[1.02]"
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Submitting...
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-3">
                    Submit Application
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </span>
                )}
              </Button>

              <p className="flex items-center justify-center gap-2 text-sm text-gray-400">
                <ShieldCheck size={16} />
                Your information is secure and confidential
              </p>
            </form>
          </motion.div>

          {/* INFO SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Perks */}
            {/* <div className="glass-card">
  <div className="flex items-center gap-3 mb-6">
    <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20">
      <Award className="text-yellow-400" size={24} />
    </div>
    <div>
      <h4 className="text-xl font-bold text-white">Why Join CoxFuture?</h4>
      <p className="text-sm text-gray-400">Benefits that make us unique</p>
    </div>
  </div>
  <div className="grid sm:grid-cols-2 gap-4">
    {[
      { 
        icon: <DollarSign className="text-green-400" size={20} />, 
        title: "Competitive Salary", 
        desc: "Above market packages with bonuses" 
      },
      { 
        icon: <Home className="text-blue-400" size={20} />, 
        title: "Remote First", 
        desc: "Work from anywhere with async culture" 
      },
      { 
        icon: <TrendingUp className="text-purple-400" size={20} />, 
        title: "Career Growth", 
        desc: "Clear promotion paths & mentorship" 
      },
      { 
        icon: <Heart className="text-red-400" size={20} />, 
        title: "Health & Wellness", 
        desc: "Medical, dental, and mental health support" 
      },
      { 
        icon: <Cpu className="text-cyan-400" size={20} />, 
        title: "Modern Tech Stack", 
        desc: "Latest tools and technologies" 
      },
      { 
        icon: <Users className="text-yellow-400" size={20} />, 
        title: "Great Culture", 
        desc: "Diverse, inclusive, and supportive" 
      },
      { 
        icon: <BookOpen className="text-indigo-400" size={20} />, 
        title: "Learning Budget", 
        desc: "$1000/year for courses & books" 
      },
      { 
        icon: <Coffee className="text-orange-400" size={20} />, 
        title: "Team Retreats", 
        desc: "Annual offsites and team building" 
      }
    ].map((perk, i) => (
      <motion.div
        key={perk.title}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay: i * 0.05 }}
        className="group p-4 rounded-xl bg-white/3 hover:bg-white/5 
                 border border-white/10 transition-all duration-300
                 hover:border-purple-500/30 hover:translate-y-[-2px]"
      >
        <div className="flex items-start gap-3">
          <div className="p-2 rounded-lg bg-white/5 group-hover:bg-white/10 
                       transition-colors duration-300">
            {perk.icon}
          </div>
          <div>
            <h5 className="font-semibold text-white mb-1 text-sm">
              {perk.title}
            </h5>
            <p className="text-xs text-gray-400 leading-relaxed">
              {perk.desc}
            </p>
          </div>
        </div>
      </motion.div>
    ))}
  </div>
</div> */}
            {/* Hiring Process */}
            <div className="glass-card">
              <div className="flex items-center gap-3 mb-6">
                <Briefcase className="text-green-400" size={24} />
                <h4 className="text-xl font-bold text-white">Our Hiring Process</h4>
              </div>
              <div className="relative">
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500/30 to-blue-500/30"></div>
                {[
                  "Resume Review",
                  "Screening Call",
                  "Technical Assessment",
                  "Offer & Onboarding"
                ].map((step, i) => (
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="flex items-center gap-6 mb-8 last:mb-0"
                  >
                    <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full 
                                  bg-gradient-to-br from-purple-600 to-blue-600 
                                  flex items-center justify-center font-bold text-white">
                      {i + 1}
                    </div>
                    <div>
                      <h5 className="font-semibold text-white mb-1">{step}</h5>
                      <p className="text-sm text-gray-400">
                        {i === 0 && "Within 48 hours"}
                        {i === 1 && "30-minute introductory call"}
                        {i === 2 && "Technical skills evaluation"}
                        {i === 3 && "Meet the team"}
                        {i === 4 && "Welcome to the team!"}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div className="glass-card">
              <h4 className="text-xl font-bold text-white mb-4">Tech Stack We Use</h4>
              <div className="flex flex-wrap gap-3">
                {[
                  "React", "Next.js", "TypeScript", "Node.js", 
                  "MongoDB", "AWS", "Docker", "Kubernetes",
                  "GraphQL", "Tailwind", "Figma", "PostgreSQL"
                ].map((tech) => (
                  <span 
                    key={tech}
                    className="px-4 py-2 rounded-full bg-white/5 border border-white/10 
                             text-gray-300 text-sm hover:bg-white/10 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .input-field {
          width: 100%;
          padding: 0.875rem 1.25rem;
          border-radius: 1rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: white;
          font-size: 0.95rem;
          transition: all 0.3s ease;
        }
        
        .input-field:focus {
          outline: none;
          border-color: rgba(147, 51, 234, 0.5);
          box-shadow: 0 0 0 3px rgba(147, 51, 234, 0.1);
          background: rgba(255, 255, 255, 0.05);
        }
        
        .input-field::placeholder {
          color: rgba(255, 255, 255, 0.3);
        }
        
        .glass-card {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02));
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 1.5rem;
          padding: 1.75rem;
          backdrop-filter: blur(10px);
        }
      `}</style>
    </section>
  );
}