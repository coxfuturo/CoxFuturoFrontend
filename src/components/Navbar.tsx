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
  const [mobileDropdown, setMobileDropdown] = useState(null);
    const OFFER_END_TIME = new Date("2026-01-05T00:00:00"); // 🎯 change date here

    const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
useEffect(() => {
  const timer = setInterval(() => {
    const now = new Date().getTime();
    const distance = OFFER_END_TIME.getTime() - now;

    if (distance <= 0) {
      setTimeLeft("Offer Ended");
      clearInterval(timer);
      return;
    }

    const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((distance / (1000 * 60)) % 60);
    const seconds = Math.floor((distance / 1000) % 60);

    setTimeLeft(
      `${hours.toString().padStart(2, "0")}:${minutes
        .toString()
        .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
    );
  }, 1000);

  return () => clearInterval(timer);
}, []);

  const closeDropdown = () => {
    setOpenDropdown(null);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300
      ${
        isScrolled
          ? "bg-crypto-blue/80 backdrop-blur-md py-3 shadow-lg"
          : "py-6"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center relative">
        
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-2">
          {/* <img
            src="/CoxFuture/coxfuture.jpeg"
            alt="CoxFuture Logo"
            className="w-10 h-10"
          /> */}
            {/* Cox<span className="text-crypto-purple">Future</span> */}
            
            <img
                      src="/image/logo.png"
                      alt="logo"
                    className="h-14 w-auto object-contain"
                    />


        </Link>
        

        {/* DESKTOP MENU */}
        <ul className="hidden lg:flex items-center space-x-8">
          
          <li>
            <Link
              to="/About"
              className="text-gray-300 hover:text-white"
              onClick={closeDropdown}
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
              className={`transition-transform duration-200 ${
                openDropdown === "services" ? "rotate-180" : ""
              }`}
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
              className={`transition-transform duration-200 ${
                openDropdown === "industries" ? "rotate-180" : ""
              }`}
            />
          </li>

          <li className="text-gray-300 hover:text-white cursor-pointer">
            Testimonials
          </li>

          <li>
            <Link
              to="/ContactUs"
              className="text-gray-300 hover:text-white"
              onClick={closeDropdown}
            >
              Contact Us
            </Link>
          </li>
        </ul>

        {/* MOBILE MENU BUTTON */}
        <button
          className="lg:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>

        {/* DROPDOWNS */}
        <div
          className="absolute left-0 top-full w-full"
          onMouseLeave={closeDropdown}
        >
          {openDropdown === "services" && (
            <ServicesDropdown onItemClick={closeDropdown} />
          )}
          {openDropdown === "industries" && (
            <IndustriesDropdown onItemClick={closeDropdown} />
          )}
        </div>
      </div>

      {/* MOBILE MENU */}
      {isMobileMenuOpen && (
  <div className="lg:hidden bg-crypto-blue/95 backdrop-blur-lg py-4">
    <ul className="flex flex-col space-y-4 px-4 text-gray-300">

      <Link to="/About" onClick={closeDropdown}>
        About Us
      </Link>

      {/* MOBILE SERVICES */}
      <li>
        <button
          className="flex items-center justify-between w-full"
          onClick={() =>
            setMobileDropdown(
              mobileDropdown === "services" ? null : "services"
            )
          }
        >
          Services
          <ChevronDown
            className={`transition-transform ${
              mobileDropdown === "services" ? "rotate-180" : ""
            }`}
          />
        </button>

        {mobileDropdown === "services" && (
          <div className="mt-3 pl-4">
            <ServicesDropdown onItemClick={closeDropdown} />
          </div>
        )}
      </li>

      {/* MOBILE INDUSTRIES */}
      <li>
        <button
          className="flex items-center justify-between w-full"
          onClick={() =>
            setMobileDropdown(
              mobileDropdown === "industries" ? null : "industries"
            )
          }
        >
          Industries
          <ChevronDown
            className={`transition-transform ${
              mobileDropdown === "industries" ? "rotate-180" : ""
            }`}
          />
        </button>

        {mobileDropdown === "industries" && (
          <div className="mt-3 pl-4">
            <IndustriesDropdown onItemClick={closeDropdown} />
          </div>
        )}
      </li>

      <Link to="/ContactUs" onClick={closeDropdown}>
        Contact Us
      </Link>
    </ul>
  </div>
)}

    </nav>
  );
};

export default Navbar;
