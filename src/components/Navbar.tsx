"use client";

import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b border-border-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <svg
              className="w-8 h-8 text-primary mr-3"
              viewBox="0 0 32 32"
              fill="currentColor"
            >
              <path d="M16 2L4 8v16l12 6 12-6V8L16 2zm0 4l8 4v12l-8 4-8-4V10l8-4z" />
              <circle cx="16" cy="16" r="4" />
            </svg>
            <span className="font-inter font-semibold text-xl text-text-primary">
              Ruang Esensi
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="#portfolio"
              className="text-text-secondary hover:text-primary transition-colors"
            >
              Portfolio
            </Link>
            <Link
              href="#process"
              className="text-text-secondary hover:text-primary transition-colors"
            >
              Process
            </Link>
            <Link
              href="#testimonials"
              className="text-text-secondary hover:text-primary transition-colors"
            >
              Testimonials
            </Link>
            <Link
              href="#faq"
              className="text-text-secondary hover:text-primary transition-colors"
            >
              FAQ
            </Link>
            <Link
              href="#consultation-form"
              className="bg-primary text-white font-inter font-medium px-6 py-3 rounded-lg transition-all duration-250 ease-in-out hover:bg-primary-600 transform hover:-translate-y-0.5 shadow-cta"
            >
              Schedule Consultation
            </Link>
          </div>
          <button className="md:hidden p-2" onClick={handleMenuToggle}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden bg-background border-t border-border-light"
        >
          <div className="px-4 py-4 space-y-4">
            <Link
              href="#portfolio"
              onClick={closeMenu}
              className="block text-text-secondary hover:text-primary transition-colors"
            >
              Portfolio
            </Link>
            <Link
              href="#process"
              onClick={closeMenu}
              className="block text-text-secondary hover:text-primary transition-colors"
            >
              Process
            </Link>
            <Link
              href="#testimonials"
              onClick={closeMenu}
              className="block text-text-secondary hover:text-primary transition-colors"
            >
              Testimonials
            </Link>
            <Link
              href="#faq"
              onClick={closeMenu}
              className="block text-text-secondary hover:text-primary transition-colors"
            >
              FAQ
            </Link>
            <Link
              href="#consultation-form"
              onClick={closeMenu}
              className="bg-primary text-white font-inter font-medium px-6 py-3 rounded-lg transition-all duration-250 ease-in-out hover:bg-primary-600 transform hover:-translate-y-0.5 shadow-cta w-full text-center"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
