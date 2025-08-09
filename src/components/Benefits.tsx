import React from "react";

const Benefits = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-inter font-semibold text-3xl sm:text-4xl text-text-primary mb-6">
            Why Choose Japandi Design?
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Experience the life-changing benefits of thoughtfully designed
            spaces.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center group">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors duration-300">
              <svg
                className="w-8 h-8 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </div>
            <h3 className="font-inter font-medium text-xl text-text-primary mb-4">
              Stress Reduction
            </h3>
            <p className="text-text-secondary">
              Minimalist environments naturally lower cortisol levels and
              promote mental clarity, creating spaces that actively support your
              well-being.
            </p>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-secondary/30 transition-colors duration-300">
              <svg
                className="w-8 h-8 text-accent"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="font-inter font-medium text-xl text-text-primary mb-4">
              Increased Functionality
            </h3>
            <p className="text-text-secondary">
              Every element serves a purpose, maximizing your space's efficiency
              while maintaining beauty and creating seamless daily routines.
            </p>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 transition-colors duration-300">
              <svg
                className="w-8 h-8 text-accent"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="font-inter font-medium text-xl text-text-primary mb-4">
              Timeless Aesthetics
            </h3>
            <p className="text-text-secondary">
              Japandi design transcends trends, ensuring your investment remains
              beautiful and relevant for decades to come.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
