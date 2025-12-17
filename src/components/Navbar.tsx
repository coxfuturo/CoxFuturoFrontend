"use client";

import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import ServicesDropdown from "./ServicesDropdown";
import IndustriesDropdown from "./IndustriesDropdown";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); 

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300
      ${isScrolled ? "bg-crypto-blue/80 backdrop-blur-md py-3 shadow-lg" : "py-6"}`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center relative">
        {/* LOGO */}
        <Link  to="/CoxFuture/">
        <h1 className="text-2xl font-bold text-white">
          Cox<span className="text-crypto-purple">Future</span>
        </h1>
        </Link>

        {/* DESKTOP MENU */}
        <ul className="hidden lg:flex items-center space-x-8">
         <li>
            <Link
              to="/CoxFuture/About"
              className="text-gray-300 hover:text-white transition-colors"
            >
              About Us
            </Link>
          </li>

          {/* SERVICES */}
          <li
            className="flex items-center gap-1 text-gray-300 hover:text-white cursor-pointer"
            onMouseEnter={() => setOpenDropdown("services")}
          >
            Services
            <ChevronDown
              size={16}
              className={`transition-transform duration-200
              ${openDropdown === "services" ? "rotate-180" : ""}`}
            />
          </li>

          {/* INDUSTRIES */}
          <li
            className="flex items-center gap-1 text-gray-300 hover:text-white cursor-pointer"
            onMouseEnter={() => setOpenDropdown("industries")}
          >
            Industries
            <ChevronDown
              size={16}
              className={`transition-transform duration-200
      ${openDropdown === "industries" ? "rotate-180" : ""}`}
            />
          </li>


          <li className="text-gray-300 hover:text-white cursor-pointer">
            Testimonials
          </li>
          <li className="text-gray-300 hover:text-white cursor-pointer">
              <Link
              to="/CoxFuture/ContactUs"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Contact Us
            </Link>
          </li>
        </ul>

        {/* MOBILE BUTTON */}
        <button
          className="lg:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>

        {/* MEGA DROPDOWNS */}
        <div
          className="absolute left-0 top-full w-full"
          onMouseLeave={() => setOpenDropdown(null)}
        >
          {openDropdown === "services" && <ServicesDropdown />}
          {openDropdown === "industries" && <IndustriesDropdown />}
        </div>
      </div>

      {/* MOBILE MENU */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-crypto-blue/95 backdrop-blur-lg py-4">
          <ul className="flex flex-col space-y-4 px-4">
            <li className="text-gray-300">About Us</li>
            <li className="text-gray-300">Services</li>
            <li className="text-gray-300">Industries</li>
            <li className="text-gray-300">Contact</li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
