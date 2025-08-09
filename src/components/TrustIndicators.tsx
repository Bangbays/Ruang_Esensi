import React from "react";

const TrustIndicators = () => {
  return (
    <section className="py-16 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-inter font-medium text-2xl text-text-primary mb-4">
            Trusted by Design Professionals
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">5+</div>
            <div className="text-sm text-text-secondary">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">200+</div>
            <div className="text-sm text-text-secondary">Homes Transformed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">98%</div>
            <div className="text-sm text-text-secondary">
              Client Satisfaction
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">15</div>
            <div className="text-sm text-text-secondary">Design Awards</div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-4 text-text-secondary">
            <span className="text-sm">Certified by:</span>
            <div className="flex items-center space-x-6">
              <span className="text-sm font-medium">ASID</span>
              <span className="text-sm font-medium">NCIDQ</span>
              <span className="text-sm font-medium">LEED AP</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;
