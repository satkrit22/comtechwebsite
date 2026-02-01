"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Raj Sharma",
    title: "CEO, Tech Startup",
    content:
      "Comtech provided exceptional IT solutions that transformed our operations. Their team is professional and highly knowledgeable.",
    rating: 5,
  },
  {
    name: "Priya Patel",
    title: "Operations Manager, E-commerce",
    content:
      "Outstanding service and support. They helped us scale our infrastructure without any downtime. Highly recommended!",
    rating: 5,
  },
  {
    name: "Amit Kumar",
    title: "Manager, Financial Services",
    content:
      "The training programs from Comtech are comprehensive and effective. Our team gained valuable certifications.",
    rating: 5,
  },
  {
    name: "Neha Singh",
    title: "HR Manager, Corporate",
    content:
      "Professional approach, timely delivery, and excellent after-sales support. Comtech is our trusted IT partner.",
    rating: 5,
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const goToPrevious = () => {
    setIsAutoPlay(false);
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const goToNext = () => {
    setIsAutoPlay(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-32 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-red-500/5 rounded-full blur-3xl -translate-x-1/2"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Real feedback from businesses we've helped succeed
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div
          className="max-w-4xl mx-auto"
          onMouseEnter={() => setIsAutoPlay(false)}
          onMouseLeave={() => setIsAutoPlay(true)}
        >
          <div className="relative">
            {/* Testimonial Card */}
            <div className="animate-fade-in-up">
              <div className="p-8 md:p-12 bg-gradient-to-br from-white/5 to-white/2 border border-white/10 rounded-xl">
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">
                      ★
                    </span>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-xl md:text-2xl text-gray-100 mb-8 leading-relaxed italic">
                  "{testimonials[currentIndex].content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center">
                    <span className="text-lg font-bold text-white">
                      {testimonials[currentIndex].name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-white">
                      {testimonials[currentIndex].name}
                    </p>
                    <p className="text-sm text-gray-400">
                      {testimonials[currentIndex].title}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              <button
                onClick={goToPrevious}
                className="p-3 bg-white/10 hover:bg-red-500/30 text-white rounded-lg transition-all duration-300 border border-white/10 hover:border-red-500/50"
              >
                <ChevronLeft size={24} />
              </button>

              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentIndex(index);
                      setIsAutoPlay(false);
                    }}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "bg-red-500 w-8"
                        : "bg-white/20 hover:bg-white/40"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={goToNext}
                className="p-3 bg-white/10 hover:bg-red-500/30 text-white rounded-lg transition-all duration-300 border border-white/10 hover:border-red-500/50"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
