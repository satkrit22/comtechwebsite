"use client";

import { useEffect, useRef, useState } from "react";
import { ShoppingCart, Heart } from "lucide-react";

const products = [
  {
    id: 1,
    name: "High Performance Laptop",
    category: "Laptops",
    price: "$1,299",
    original: "$1,599",
    rating: 4.8,
  },
  {
    id: 2,
    name: "4K Monitor",
    category: "Displays",
    price: "$599",
    original: "$799",
    rating: 4.9,
  },
  {
    id: 3,
    name: "Mechanical Keyboard",
    category: "Peripherals",
    price: "$149",
    original: "$199",
    rating: 4.7,
  },
  {
    id: 4,
    name: "Professional Mouse",
    category: "Peripherals",
    price: "$79",
    original: "$99",
    rating: 4.6,
  },
  {
    id: 5,
    name: "Wireless Headphones",
    category: "Audio",
    price: "$249",
    original: "$349",
    rating: 4.8,
  },
  {
    id: 6,
    name: "Network Switch",
    category: "Networking",
    price: "$199",
    original: "$299",
    rating: 4.7,
  },
];

export default function Products() {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = Array.from({ length: products.length }, (_, i) => i);
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
      id="products"
      ref={sectionRef}
      className="py-20 md:py-32 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Products</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Premium selection of IT hardware and solutions
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`group relative bg-gradient-to-br from-white/5 to-white/2 border border-white/10 rounded-xl overflow-hidden hover:border-red-500/50 transition-all duration-500 hover-lift ${
                visibleItems.includes(index)
                  ? "animate-fade-in-up"
                  : "opacity-0"
              }`}
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Product Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-red-500/20 to-red-500/5 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl">📦</div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <p className="text-sm text-red-400 mb-2">{product.category}</p>
                <h3 className="text-xl font-bold mb-2 group-hover:text-red-500 transition-colors">
                  {product.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={i < Math.floor(product.rating) ? "text-yellow-500" : "text-gray-600"}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  <span className="text-sm text-gray-400">{product.rating}</span>
                </div>

                {/* Pricing */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl font-bold text-red-500">
                    {product.price}
                  </span>
                  <span className="text-sm text-gray-500 line-through">
                    {product.original}
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button className="flex-1 px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group/btn">
                    <ShoppingCart size={18} />
                    <span className="hidden sm:inline">Add to Cart</span>
                  </button>
                  <button className="px-4 py-2 border border-white/20 hover:border-red-500/50 text-gray-300 hover:text-red-500 rounded-lg transition-all duration-300">
                    <Heart size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-16">
          <button className="px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold rounded-lg transition-all duration-300 hover-lift">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
}
