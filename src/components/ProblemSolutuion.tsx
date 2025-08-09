import React from "react";
import Image from "next/image";

const ProblemSolution = () => {
  return (
    <section id="problem" className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-inter font-semibold text-3xl sm:text-4xl text-text-primary mb-6">
            Is Your Home Causing You Stress?
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Cluttered spaces create mental chaos. See how the right design
            transforms overwhelming environments into peaceful sanctuaries.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Before: Cluttered Space */}
          <div className="relative group">
            <div className="relative overflow-hidden rounded-lg">
              <Image
                src="https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Cluttered overwhelming interior"
                width={1260}
                height={750}
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-red-900/20"></div>
            </div>
            <div className="mt-6">
              <h3 className="font-inter font-medium text-xl text-error mb-3">
                The Problem
              </h3>
              <ul className="space-y-2 text-text-secondary">
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-error mt-0.5 mr-3 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Visual clutter increases cortisol levels
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-error mt-0.5 mr-3 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Poor functionality wastes daily time
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-error mt-0.5 mr-3 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Overwhelming spaces reduce focus
                </li>
              </ul>
            </div>
          </div>

          {/* After: Japandi Space */}
          <div className="relative group">
            <div className="relative overflow-hidden rounded-lg">
              <Image
                src="https://images.pexels.com/photos/2079438/pexels-photo-2079438.jpeg" // <-- GANTI DENGAN URL BARU INI
                alt="Serene Japandi interior transformation"
                width={1260}
                height={840}
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-primary/10"></div>
            </div>
            <div className="mt-6">
              <h3 className="font-inter font-medium text-xl text-success mb-3">
                The Solution
              </h3>
              <ul className="space-y-2 text-text-secondary">
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-success mt-0.5 mr-3 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Minimalist design reduces mental fatigue
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-success mt-0.5 mr-3 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Functional layouts maximize efficiency
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-success mt-0.5 mr-3 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Serene environments enhance well-being
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
