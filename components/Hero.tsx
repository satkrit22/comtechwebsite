"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen relative overflow-hidden flex items-center pt-20"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-red-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-red-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-red-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div
            className={`${isVisible ? "animate-fade-in-left" : "opacity-0"}`}
          >
            <div className="inline-block mb-6 px-4 py-2 bg-red-500/10 border border-red-500/30 rounded-full">
              <p className="text-sm text-red-400">✨ Welcome to Comtech Group</p>
            </div>

            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
              <span className="text-white">Premium IT</span>
              <br />
              <span className="gradient-text">Solutions</span>
              <br />
              <span className="text-white">For Your Business</span>
            </h1>

            <p className="text-lg text-gray-400 mb-8 leading-relaxed max-w-xl">
              Leading IT solutions provider in Nepal offering comprehensive
              hardware, software, training and maintenance services to
              businesses of all sizes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group hover-lift">
                Get Started
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 border border-gray-600 hover:border-red-500 text-white font-semibold rounded-lg transition-all duration-300 hover:bg-white/5">
                Learn More
              </button>
            </div>

            {/* Stats */}
            <div className="mt-16 grid grid-cols-3 gap-8">
              {[
                { number: "500+", label: "Happy Clients" },
                { number: "1000+", label: "Products" },
                { number: "15+", label: "Years Experience" },
              ].map((stat, index) => (
                <div key={index}>
                  <p className="text-3xl font-bold text-red-500">{stat.number}</p>
                  <p className="text-sm text-gray-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual */}
          <div
            className={`relative h-96 lg:h-full ${
              isVisible ? "animate-fade-in-right" : "opacity-0"
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-red-500/5 rounded-2xl"></div>
            <div className="absolute inset-0 border border-red-500/20 rounded-2xl"></div>

            {/* Animated Grid */}
            <div className="absolute inset-0 grid grid-cols-2 gap-4 p-8 rounded-2xl overflow-hidden">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="bg-gradient-to-br from-red-500/10 to-red-500/5 rounded-lg border border-red-500/20 animate-float"
                  style={{
                    animationDelay: `${i * 0.2}s`,
                  }}
                ></div>
              ))}
            </div>

            {/* Center Icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 bg-gradient-to-br from-red-600 to-red-900 rounded-2xl flex items-center justify-center animate-glow">
                <span className="text-6xl">💻</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-red-500 rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
