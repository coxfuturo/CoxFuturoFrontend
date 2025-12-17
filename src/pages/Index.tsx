import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import useScrollAnimation from "@/utils/useScrollAnimation";
import EnquiryModal from "@/components/EnquiryModal";

const Index = () => {
  const [modalOpen, setModalOpen] = useState(false);

  // Initialize scroll animations
  useScrollAnimation();

  // Set page title
  useEffect(() => {
    document.title = "CoxFuture";

    // Open modal automatically after page loads
    const timer = setTimeout(() => {
      setModalOpen(true);
    }, 500); // half a second delay (adjust as needed)

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* <Navbar /> */}
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTA />
      {/* <Footer />
      <ScrollToTop /> */}

      {/* Popup Modal */}
      <EnquiryModal open={modalOpen} onOpenChange={setModalOpen} />
    </div>
  );
};

export default Index;
