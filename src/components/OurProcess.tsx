import React from "react";

const OurProcess = () => {
  return (
    <section id="process" className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-inter font-semibold text-3xl sm:text-4xl text-text-primary mb-6">
            Our Three-Step Process
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            From initial consultation to final transformation, we guide you
            through every step of creating your perfect space.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center group">
            <div className="relative mb-8">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </div>
              <span className="absolute -top-2 -right-2 bg-primary text-white text-sm font-medium w-8 h-8 rounded-full flex items-center justify-center">
                1
              </span>
            </div>
            <h3 className="font-inter font-medium text-xl text-text-primary mb-4">
              Consultation
            </h3>
            <p className="text-text-secondary mb-4">
              We visit your home to understand your lifestyle, preferences, and
              space challenges through detailed assessment.
            </p>
          </div>

          <div className="text-center group">
            <div className="relative mb-8">
              <div className="w-20 h-20 bg-secondary-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"
                  />
                </svg>
              </div>
              <span className="absolute -top-2 -right-2 bg-secondary-600 text-white text-sm font-medium w-8 h-8 rounded-full flex items-center justify-center">
                2
              </span>
            </div>
            <h3 className="font-inter font-medium text-xl text-text-primary mb-4">
              Design
            </h3>
            <p className="text-text-secondary mb-4">
              Custom design plans incorporating Japandi principles, 3D
              visualizations, and detailed material specifications.
            </p>
          </div>

          <div className="text-center group">
            <div className="relative mb-8">
              <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <span className="absolute -top-2 -right-2 bg-accent text-white text-sm font-medium w-8 h-8 rounded-full flex items-center justify-center">
                3
              </span>
            </div>
            <h3 className="font-inter font-medium text-xl text-text-primary mb-4">
              Execution
            </h3>
            <p className="text-text-secondary mb-4">
              Professional implementation with quality materials, skilled
              craftsmen, and project management throughout.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
