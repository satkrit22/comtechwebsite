"use client";

import { useEffect, useRef, useState } from "react";
import {
  Monitor,
  Wrench,
  BookOpen,
  Settings,
  Zap,
  BarChart3,
} from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "Hardware Sales",
    description:
      "Premium computer hardware and peripherals for businesses and individuals",
  },
  {
    icon: Wrench,
    title: "Maintenance & Repair",
    description:
      "Professional maintenance and repair services to keep your systems running smoothly",
  },
  {
    icon: BookOpen,
    title: "IT Training",
    description:
      "CompTIA certified training programs and professional development courses",
  },
  {
    icon: Settings,
    title: "System Setup",
    description:
      "Complete system configuration and optimization for maximum performance",
  },
  {
    icon: Zap,
    title: "Network Solutions",
    description:
      "Enterprise-grade networking solutions and infrastructure setup",
  },
  {
    icon: BarChart3,
    title: "IT Consulting",
    description:
      "Strategic IT consulting to optimize your business technology",
  },
];

export default function Services() {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = Array.from(
              { length: services.length },
              (_, i) => i
            );
            setVisibleItems(items);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-20 md:py-32 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Our Services</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Comprehensive IT solutions tailored to meet your business needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className={`group p-8 bg-gradient-to-br from-white/5 to-white/2 border border-white/10 rounded-xl hover:border-red-500/50 transition-all duration-500 hover-lift ${
                  visibleItems.includes(index)
                    ? "animate-fade-in-up"
                    : "opacity-0"
                }`}
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div className="mb-4 w-14 h-14 bg-red-500/20 rounded-lg flex items-center justify-center group-hover:bg-red-500/30 group-hover:scale-110 transition-all duration-300">
                  <Icon className="text-red-500" size={28} />
                </div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-red-500 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                  {service.description}
                </p>

                {/* Hover Effect Border */}
                <div className="mt-6 pt-6 border-t border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <a href="#" className="text-red-500 font-semibold flex items-center gap-2">
                    Learn More →
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
