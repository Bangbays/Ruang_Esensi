"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

const UrgencyCTA = () => {
  const [slots, setSlots] = useState(7);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlots((prevSlots) => (prevSlots > 3 ? prevSlots - 1 : prevSlots));
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-primary text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-inter font-semibold text-3xl sm:text-4xl mb-6">
          Limited Monthly Consultation Slots
        </h2>
        <p className="text-xl mb-8 text-primary-100">
          We only accept 12 new projects per month to ensure personalized
          attention and exceptional results.
        </p>

        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8 inline-block">
          <div className="text-4xl font-bold mb-2">
            <span>{slots}</span>
          </div>
          <div className="text-primary-200">
            Consultation Slots Remaining This Month
          </div>
        </div>

        <div className="space-y-4">
          <Link
            href="#consultation-form"
            className="bg-white text-primary font-medium px-8 py-4 rounded-lg hover:bg-primary-50 transition-colors duration-300 text-lg"
          >
            Reserve Your Consultation Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default UrgencyCTA;
