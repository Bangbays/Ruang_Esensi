"use client";

import React, { useState } from "react";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    // Simulate a network request
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitMessage(
      "Thank you! Your consultation has been scheduled. We'll contact you within 24 hours."
    );

    // Reset the form after a delay
    setTimeout(() => {
      (event.target as HTMLFormElement).reset();
      setSubmitMessage("");
    }, 5000);
  };

  return (
    <section id="consultation-form" className="py-20 bg-surface">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-inter font-semibold text-3xl sm:text-4xl text-text-primary mb-6">
            Schedule Your Free Consultation
          </h2>
          <p className="text-xl text-text-secondary mb-8">
            Take the first step toward transforming your home into a stress-free
            sanctuary.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-card p-8">
          <form onSubmit={handleFormSubmit}>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-text-primary mb-2"
                >
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  className="border border-border-light rounded-lg px-4 py-3 transition-all duration-250 ease-in-out w-full focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                  placeholder="Enter your first name"
                />
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-text-primary mb-2"
                >
                  Last Name *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                  className="border border-border-light rounded-lg px-4 py-3 transition-all duration-250 ease-in-out w-full focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                  placeholder="Enter your last name"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-text-primary mb-2"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="border border-border-light rounded-lg px-4 py-3 transition-all duration-250 ease-in-out w-full focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-text-primary mb-2"
                >
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="border border-border-light rounded-lg px-4 py-3 transition-all duration-250 ease-in-out w-full focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                  placeholder="(555) 123-4567"
                />
              </div>
            </div>

            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-text-primary mb-2"
              >
                Tell us about your project
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="border border-border-light rounded-lg px-4 py-3 transition-all duration-250 ease-in-out w-full focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                placeholder="Describe your current space challenges and design goals..."
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary hover:bg-primary-600 text-white font-medium px-8 py-4 rounded-lg transition-all duration-300 transform hover:-translate-y-1 shadow-cta text-lg disabled:bg-primary-300 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Scheduling..." : "Schedule My Free Consultation"}
            </button>

            {submitMessage && (
              <div className="mt-4 text-center text-sm text-success">
                {submitMessage}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
