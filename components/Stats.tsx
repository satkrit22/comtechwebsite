"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { number: "500+", label: "Happy Clients", icon: "🤝" },
  { number: "1000+", label: "Products Available", icon: "📦" },
  { number: "15+", label: "Years in Business", icon: "🏆" },
  { number: "98%", label: "Customer Satisfaction", icon: "⭐" },
];

export default function Stats() {
  const [counts, setCounts] = useState<number[]>([0, 0, 0, 0]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate numbers
            const targets = [500, 1000, 15, 98];
            const duration = 2000;
            const start = Date.now();

            const interval = setInterval(() => {
              const elapsed = Date.now() - start;
              const progress = Math.min(elapsed / duration, 1);

              setCounts(
                targets.map((target) =>
                  Math.floor(target * progress)
                )
              );

              if (progress === 1) clearInterval(interval);
            }, 30);

            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-32 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Grid of Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-8 bg-gradient-to-br from-white/5 to-white/2 border border-white/10 rounded-xl hover:border-red-500/50 transition-all duration-500 group animate-fade-in-up hover-lift"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <div className="text-4xl mb-4">{stat.icon}</div>
              <p className="text-4xl md:text-5xl font-bold text-red-500 mb-2">
                {counts[index]}
                {["500", "1000", "15", "98"].includes(stat.number) &&
                  (index === 0 || index === 1 ? "+" : "%")}
              </p>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
