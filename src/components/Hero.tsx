"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  const [homesCount, setHomesCount] = useState(0);

  useEffect(() => {
    const target = 200;
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setHomesCount(target);
        clearInterval(timer);
      } else {
        setHomesCount(Math.ceil(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2940&auto=format&fit=crop"
          alt="Serene Japandi bedroom interior"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </div>
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h1 className="font-inter font-semibold text-4xl sm:text-5xl lg:text-6xl mb-6 leading-tight">
          Minimalist Design,
          <br />
          <span className="text-secondary-200">Maximum Comfort</span>
        </h1>
        <p className="text-xl sm:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
          Transform Your Home Into a Stress-Free Sanctuary That Enhances Daily
          Well-Being
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Link
            href="#consultation-form"
            className="bg-primary hover:bg-primary-600 text-white font-medium px-8 py-4 rounded-lg transition-all duration-300 transform hover:-translate-y-1 shadow-cta text-lg"
          >
            Schedule Free Consultation
          </Link>
          <Link
            href="#portfolio"
            className="border-2 border-white text-white hover:bg-white hover:text-text-primary font-medium px-8 py-4 rounded-lg transition-all duration-300 text-lg"
          >
            View Portfolio
          </Link>
        </div>

        <div className="flex items-center justify-center space-x-2 text-secondary-200">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="text-lg font-medium">
            <span id="homes-counter">{homesCount}</span>+ Homes Transformed
          </span>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
