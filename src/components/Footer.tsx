
import { Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react';
import { MapPin, Phone, Mail, Globe } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#12141C] pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-8">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-white mb-4">
              Cox<span className="text-crypto-purple">Future</span>
            </h2>
            <p className="text-gray-400 mb-6 max-w-xs">
            Coxfuture provides end-to-end IT services including custom software development, web applications, and mobile solutions. We combine technical expertise with innovative thinking to build robust, scalable, and efficient digital products tailored to business needs.            </p>
            <div className="flex space-x-4">
              <a href="#!" className="text-gray-400 hover:text-crypto-purple transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#!" className="text-gray-400 hover:text-crypto-purple transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#!" className="text-gray-400 hover:text-crypto-purple transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#!" className="text-gray-400 hover:text-crypto-purple transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#!" className="text-gray-400 hover:text-crypto-purple transition-colors">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
            </div>
          </div>
          
          {/* <div>
            <h3 className="text-white font-medium mb-4">Products</h3>
            <ul className="space-y-2">
              <li><a href="#!" className="text-gray-400 hover:text-crypto-purple transition-colors">Exchange</a></li>
              <li><a href="#!" className="text-gray-400 hover:text-crypto-purple transition-colors">Wallet</a></li>
              <li><a href="#!" className="text-gray-400 hover:text-crypto-purple transition-colors">API</a></li>
              <li><a href="#!" className="text-gray-400 hover:text-crypto-purple transition-colors">Institutional</a></li>
              <li><a href="#!" className="text-gray-400 hover:text-crypto-purple transition-colors">DeFi Platform</a></li>
            </ul>
          </div> */}
           <div>
            <h3 className="text-white font-medium mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#!" className="text-gray-400 hover:text-crypto-purple transition-colors">About Us</a></li>
              <li><a href="#!" className="text-gray-400 hover:text-crypto-purple transition-colors">Blog</a></li>
              <li><a href="#!" className="text-gray-400 hover:text-crypto-purple transition-colors">Case Studies</a></li>
              <li><a href="#!" className="text-gray-400 hover:text-crypto-purple transition-colors">Contact Us</a></li>
              <li><a href="#!" className="text-gray-400 hover:text-crypto-purple transition-colors">Sitemap</a></li>
            </ul>
          </div>
          
        <div>
          <h3 className="text-white font-medium mb-4">Services</h3>
          <ul className="space-y-2">
            <li>
              <a href="#!" className="text-gray-400 hover:text-crypto-purple transition-colors">
                Web Development
              </a>
            </li>
            <li>
              <a href="#!" className="text-gray-400 hover:text-crypto-purple transition-colors">
                Mobile App Development
              </a>
            </li>
            <li>
              <a href="#!" className="text-gray-400 hover:text-crypto-purple transition-colors">
                iOS App Development
              </a>
            </li>
            <li>
              <a href="#!" className="text-gray-400 hover:text-crypto-purple transition-colors">
                Android App Development
              </a>
            </li>
            <li>
              <a href="#!" className="text-gray-400 hover:text-crypto-purple transition-colors">
                Full Stack Development
              </a>
            </li>
            <li>
              <a href="#!" className="text-gray-400 hover:text-crypto-purple transition-colors">
                Technical SEO
              </a>
            </li>
            <li>
              <a href="#!" className="text-gray-400 hover:text-crypto-purple transition-colors">
                Digital Marketing
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-medium mb-4">Contact Information</h3>
          <ul className="space-y-3 text-gray-400">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-crypto-purple mt-1" />
              <span>
                CoxFuture Technologies, <br />
                LG-26,D-233,Triangles <br />
                 Business Park,Sector-63,<br />
                 Noida, Uttar Pradesh,<br />
                India
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-crypto-purple" />
              <span>+91 81277 67263</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-crypto-purple" />
              <span>info@coxfuture.com</span>
            </li>
            {/* <li className="flex items-center gap-3">
              <Globe className="w-5 h-5 text-crypto-purple" />
              <span>www.coxfuture.com</span>
            </li> */}
          </ul>
        </div>
        </div>
        
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {currentYear} CoxFuture. All rights reserved.
              {/* ~ Distributed By <a href="https://themewagon.com/" target="_blank" className="text-crypto-purple hover:underline">ThemeWagon</a> */}
            </p>
            <div className="flex space-x-6">
              <a href="#!" className="text-gray-400 hover:text-crypto-purple text-sm transition-colors">Terms of Service</a>
              <a href="#!" className="text-gray-400 hover:text-crypto-purple text-sm transition-colors">Privacy Policy</a>
              <a href="#!" className="text-gray-400 hover:text-crypto-purple text-sm transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
