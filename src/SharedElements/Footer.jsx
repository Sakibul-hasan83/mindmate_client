import React from "react";

const Footer = () => {
  return (
    <footer className="bg-base-100 dark:bg-gray-900 text-base-content dark:text-gray-200 mt-10 transition-colors duration-500 shadow-inner">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Brand Section */}
        <div>
          <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500">
            MindMate
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
            Empowering your mental well-being with positivity and knowledge.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-indigo-600 dark:text-indigo-400">
            Quick Links
          </h3>
          <ul className="space-y-3">
            {["Home", "About", "Services", "Contact"].map((item) => (
              <li key={item}>
                <a className="hover:text-pink-500 dark:hover:text-pink-400 transition-colors duration-300 cursor-pointer">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-indigo-600 dark:text-indigo-400">
            Contact Us
          </h3>
          <p className="mb-1">Email: <span className="font-medium">info@mindmate.com</span></p>
          <p className="mb-1">Phone: <span className="font-medium">+880 1234-567890</span></p>
          <p>Location: <span className="font-medium">Dhaka, Bangladesh</span></p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-300 dark:border-gray-700 text-center py-5 text-sm text-gray-500 dark:text-gray-400 transition-colors duration-300">
        © {new Date().getFullYear()} <span className="font-semibold text-gray-700 dark:text-gray-200">MindMate</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
