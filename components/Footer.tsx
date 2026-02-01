"use client";

import { ArrowUp } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-black/50 border-t border-white/10">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 w-96 h-96 bg-red-500/5 rounded-full blur-3xl -translate-x-1/2"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="animate-fade-in-up">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-900 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">C</span>
              </div>
              <span className="text-xl font-bold text-white">Comtech</span>
            </div>
            <p className="text-gray-400 mb-4">
              Leading IT solutions provider in Nepal offering comprehensive
              hardware, software, training and maintenance services.
            </p>
            <div className="flex gap-3">
              {["facebook", "twitter", "linkedin", "instagram"].map(
                (social, i) => (
                  <button
                    key={i}
                    className="w-10 h-10 bg-white/10 hover:bg-red-500/30 text-gray-400 hover:text-red-500 rounded-lg transition-all duration-300 flex items-center justify-center"
                  >
                    {social.charAt(0).toUpperCase()}
                  </button>
                )
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in-up stagger-1">
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["About Us", "Services", "Products", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-red-500 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="animate-fade-in-up stagger-2">
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {[
                "Hardware Sales",
                "Maintenance",
                "Training",
                "Consulting",
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-red-500 transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="animate-fade-in-up stagger-3">
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {[
                "Privacy Policy",
                "Terms of Service",
                "Cookies",
                "Disclaimer",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-red-500 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} Comtech Group Co Pvt.Ltd. All rights reserved.
            </p>

            <button
              onClick={scrollToTop}
              className="p-3 bg-white/10 hover:bg-red-500/30 text-gray-400 hover:text-red-500 rounded-lg transition-all duration-300 border border-white/10 hover:border-red-500/50 hover-lift"
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
