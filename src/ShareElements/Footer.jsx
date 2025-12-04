import React, { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    if (email) {
      alert("Thank you for subscribing!");
      setEmail('');
    }
  };

  return (
    <footer className="bg-white pt-20 pb-10 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
      <div className="max-w-7xl mx-auto">

        {/* ------------------ Newsletter Section ------------------ */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-3">
            Join Our Newsletter
          </h2>

          <p className="text-gray-600 text-sm sm:text-base mb-10 max-w-2xl mx-auto">
            No spam. Just actionable wellness advice and resources curated specifically for students.
          </p>

          {/* Email Box with Shadow (like design) */}
          <div className="max-w-xl mx-auto bg-white rounded-xl shadow-md flex items-center px-2 py-2">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-3 text-gray-700 text-sm sm:text-base outline-none"
            />
            <button
              onClick={handleSubscribe}
              className="bg-[#1e57c9] text-white px-6 py-2 rounded-lg text-sm sm:text-base font-medium hover:bg-blue-700 transition"
            >
              Subscribe
            </button>
          </div>
        </div>

        {/* ------------------ Footer Navigation Links ------------------ */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-20 text-center sm:text-left mb-20">

          {/* Features */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4 text-lg">Features</h3>
            <ul className="space-y-3 text-gray-600 text-sm">
              <li>AI Chatbot</li>
              <li>Smart Mood Tracker</li>
              <li>Peer Support Matching</li>
              <li>Anonymous Community</li>
              <li>Wellness Library</li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4 text-lg">Resources</h3>
            <ul className="space-y-3 text-gray-600 text-sm">
              <li>How It Works</li>
              <li>FAQ</li>
              <li>About Us</li>
              <li>Blog</li>
              <li>Contact Us</li>
            </ul>
          </div>

          {/* Safety & Legal */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4 text-lg">Safety & Legal</h3>
            <ul className="space-y-3 text-gray-600 text-sm">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Safety Center</li>
              <li>Crisis Support</li>
            </ul>
          </div>
        </div>

        {/* ------------------ Bottom Section ------------------ */}
        <div className="border-t border-gray-200 pt-6 flex flex-col sm:flex-row justify-between items-center">

          {/* Icons */}
          <div className="flex items-center gap-6 mb-4 sm:mb-0">
            <span className="text-gray-700 hover:text-black cursor-pointer">
              <i className="fa-brands fa-x-twitter text-xl"></i>
            </span>
            <span className="text-gray-700 hover:text-black cursor-pointer">
              <i className="fa-brands fa-linkedin text-xl"></i>
            </span>
            <span className="text-gray-700 hover:text-black cursor-pointer">
              <i className="fa-brands fa-facebook text-xl"></i>
            </span>
          </div>

          {/* Copyright */}
          <p className="text-gray-500 text-sm">
            © 2025 MindMate. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
