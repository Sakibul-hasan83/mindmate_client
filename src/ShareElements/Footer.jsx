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
    /* Background updated to dark mode */
    <footer className="bg-white dark:bg-[#0f172a] pt-20 pb-10 px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">

        {/* ------------------ Newsletter Section ------------------ */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-3 transition-colors">
            Join Our Newsletter
          </h2>

          <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base mb-10 max-w-2xl mx-auto transition-colors">
            No spam. Just actionable wellness advice and resources curated specifically for students.
          </p>

          {/* Email Box updated for dark mode */}
          <div className="max-w-xl mx-auto bg-white dark:bg-[#1e293b] rounded-xl shadow-md flex items-center px-2 py-2 border border-gray-100 dark:border-gray-700">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-3 bg-transparent text-gray-700 dark:text-gray-200 text-sm sm:text-base outline-none"
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

          {/* Column Item Helper */}
          {[
            { title: "Features", links: ["AI Chatbot", "Smart Mood Tracker", "Peer Support Matching", "Anonymous Community", "Wellness Library"] },
            { title: "Resources", links: ["How It Works", "FAQ", "About Us", "Blog", "Contact Us"] },
            { title: "Safety & Legal", links: ["Privacy Policy", "Terms of Service", "Safety Center", "Crisis Support"] }
          ].map((col, idx) => (
            <div key={idx}>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4 text-lg transition-colors">{col.title}</h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-400 text-sm">
                {col.links.map((link, i) => (
                  <li key={i} className="hover:text-blue-500 cursor-pointer transition-colors">{link}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ------------------ Bottom Section ------------------ */}
        <div className="border-t border-gray-200 dark:border-gray-800 pt-6 flex flex-col sm:flex-row justify-between items-center">

          {/* Icons */}
          <div className="flex items-center gap-6 mb-4 sm:mb-0">
            <span className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white cursor-pointer text-xl">
              <i className="fa-brands fa-x-twitter"></i>
            </span>
            <span className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white cursor-pointer text-xl">
              <i className="fa-brands fa-linkedin"></i>
            </span>
            <span className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white cursor-pointer text-xl">
              <i className="fa-brands fa-facebook"></i>
            </span>
          </div>

          {/* Copyright */}
          <p className="text-gray-500 dark:text-gray-500 text-sm">
            © 2025 MindMate. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;