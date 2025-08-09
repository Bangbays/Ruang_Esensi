import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-text-primary text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-6">
              <svg
                className="w-8 h-8 text-primary mr-3"
                viewBox="0 0 32 32"
                fill="currentColor"
              >
                <path d="M16 2L4 8v16l12 6 12-6V8L16 2zm0 4l8 4v12l-8 4-8-4V10l8-4z" />
                <circle cx="16" cy="16" r="4" />
              </svg>
              <span className="font-inter font-semibold text-xl">
                Ruang Esensi Studio
              </span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Transforming homes into serene sanctuaries through authentic
              Japandi design principles.
            </p>
            <div className="space-y-2 text-gray-300">
              <p>📍 New York City, NY</p>
              <p>✉️ hello@ruangesensi.com</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-inter font-medium text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link
                  href="#portfolio"
                  className="hover:text-primary transition-colors"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="#process"
                  className="hover:text-primary transition-colors"
                >
                  Our Process
                </Link>
              </li>
              <li>
                <Link
                  href="#testimonials"
                  className="hover:text-primary transition-colors"
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  href="#faq"
                  className="hover:text-primary transition-colors"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Follow Us Section -- UPDATED */}
          <div>
            <h4 className="font-inter font-medium text-lg mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              {/* Instagram Icon */}
              <a
                href="#"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.013-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.08 2.525c.636-.247 1.363-.416 2.427-.465C9.53 2.013 9.884 2 12.315 2zm0 1.622c-2.403 0-2.728.01-3.688.06-1.003.046-1.605.208-2.126.422a3.284 3.284 0 00-1.18 1.18c-.214.52-.376 1.123-.422 2.126-.05 1.004-.06 1.285-.06 3.688s.01 2.684.06 3.688c.046 1.003.208 1.605.422 2.126a3.284 3.284 0 001.18 1.18c.52.214 1.123.376 2.126.422 1.004.05 1.285.06 3.688.06s2.684-.01 3.688-.06c1.003-.046 1.605-.208 2.126-.422a3.284 3.284 0 001.18-1.18c.214-.52.376-1.123.422-2.126.05-1.004.06-1.285.06-3.688s-.01-2.684-.06-3.688c-.046-1.003-.208-1.605-.422-2.126a3.284 3.284 0 00-1.18-1.18c-.52-.214-1.123-.376-2.126-.422-.96-.05-1.285-.06-3.688-.06zM12 8.118a3.882 3.882 0 100 7.764 3.882 3.882 0 000-7.764zm0 6.138a2.256 2.256 0 110-4.512 2.256 2.256 0 010 4.512zm4.965-6.402a.96.96 0 100-1.92.96.96 0 000 1.92z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              {/* X (Twitter) Icon */}
              <a
                href="#"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              {/* LinkedIn Icon */}
              <a
                href="#"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Ruang Esensi Studio. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
