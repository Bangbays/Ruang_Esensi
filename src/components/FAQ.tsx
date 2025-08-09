"use client";

import React, { useState } from "react";

const faqData = [
  {
    question: "What is the typical timeline for a Japandi design project?",
    answer:
      "Most projects take 4-8 weeks from consultation to completion. This includes 1-2 weeks for design development, 2-3 weeks for material sourcing, and 2-4 weeks for implementation. We provide detailed timelines during your consultation based on your specific project scope.",
  },
  {
    question: "What is the investment range for Japandi interior design?",
    answer:
      "Our projects typically range from $15,000-$75,000 depending on space size and scope. This includes design consultation, custom furniture selection, materials, and professional installation. We offer flexible payment plans and work within your budget to maximize impact.",
  },
  {
    question: "Do you work with existing furniture and decor?",
    answer:
      "Absolutely! We excel at incorporating your existing pieces that align with Japandi principles. During consultation, we assess which items enhance the design and suggest modifications or replacements only when necessary to achieve the serene, functional aesthetic you desire.",
  },
  {
    question: "What happens during the free consultation?",
    answer:
      "We spend 2-3 hours understanding your lifestyle, measuring spaces, discussing your vision, and identifying stress points in your current environment. You'll receive immediate insights, preliminary recommendations, and a detailed project proposal with timeline and investment options.",
  },
  {
    question: "Is Japandi design suitable for families with children?",
    answer:
      "Yes! Japandi design is perfect for families. We create organized, safe spaces with hidden storage solutions, durable natural materials, and designated areas for children's activities. The calm environment actually helps children focus better and feel more secure.",
  },
];

const FAQ = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-inter font-semibold text-3xl sm:text-4xl text-text-primary mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-text-secondary">
            Everything you need to know about our design process and services.
          </p>
        </div>

        <div className="space-y-6">
          {faqData.map((item, index) => (
            <div key={index} className="border border-border-light rounded-lg">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-surface transition-colors duration-200"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-inter font-medium text-text-primary">
                  {item.question}
                </span>
                <svg
                  className={`w-5 h-5 text-text-secondary transform transition-transform duration-200 ${
                    openFaq === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openFaq === index && (
                <div className="px-6 pb-4">
                  <p className="text-text-secondary">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
