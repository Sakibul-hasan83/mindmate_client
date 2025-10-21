import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 text-gray-700 mt-10">
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500">
            MindMate
          </h2>
          <p className="mt-3 text-sm">
            Empowering your mental well-being with positivity and knowledge.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-indigo-600">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li><a className="hover:text-pink-500 transition-all duration-300">Home</a></li>
            <li><a className="hover:text-pink-500 transition-all duration-300">About</a></li>
            <li><a className="hover:text-pink-500 transition-all duration-300">Services</a></li>
            <li><a className="hover:text-pink-500 transition-all duration-300">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-indigo-600">
            Contact Us
          </h3>
          <p>Email: <span className="font-medium">info@mindmate.com</span></p>
          <p>Phone: <span className="font-medium">+880 1234-567890</span></p>
          <p>Location: <span className="font-medium">Dhaka, Bangladesh</span></p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-300 text-center py-4 text-sm">
        © {new Date().getFullYear()} <span className="font-semibold">MindMate</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
