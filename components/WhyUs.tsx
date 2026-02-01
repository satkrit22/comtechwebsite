"use client";

import { useEffect, useRef, useState } from "react";
import {
  CheckCircle,
  Award,
  Users,
  Clock,
  Shield,
  Zap,
} from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "Expert Team",
    description:
      "Highly trained professionals with years of industry experience",
  },
  {
    icon: Users,
    title: "Customer Focused",
    description:
      "We prioritize your satisfaction and business goals",
  },
  {
    icon: Clock,
    title: "Fast Service",
    description:
      "Quick turnaround times without compromising quality",
  },
  {
    icon: Shield,
    title: "Secure Solutions",
    description:
      "Enterprise-grade security for your peace of mind",
  },
  {
    icon: Zap,
    title: "Latest Technology",
    description:
      "Always up-to-date with cutting-edge IT solutions",
  },
  {
    icon: CheckCircle,
    title: "Reliable Support",
    description:
      "24/7 customer support for all your needs",
  },
];

export default function WhyUs() {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = Array.from({ length: reasons.length }, (_, i) => i);
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
      id="why-us"
      ref={sectionRef}
      className="py-20 md:py-32 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl -translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Choose <span className="gradient-text">Comtech?</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            We deliver exceptional IT solutions that drive business growth and
            success
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className={`group p-8 bg-gradient-to-br from-white/5 to-white/2 border border-white/10 rounded-xl hover:border-red-500/50 transition-all duration-500 hover-lift text-center ${
                  visibleItems.includes(index)
                    ? "animate-fade-in-up"
                    : "opacity-0"
                }`}
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div className="mb-4 w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto group-hover:bg-red-500/30 group-hover:scale-110 transition-all duration-300">
                  <Icon className="text-red-500" size={32} />
                </div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-red-500 transition-colors">
                  {reason.title}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center animate-fade-in-up">
          <p className="text-gray-400 mb-6">Ready to transform your IT operations?</p>
          <button className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-all duration-300 hover-lift">
            Get Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
