import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-blue-50 via-purple-50 to-blue-100 relative overflow-hidden">

      {/* Soft Glowing Circles Background */}
      <div className="absolute inset-0 opacity-30 blur-3xl pointer-events-none">
        <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-40 h-40 sm:w-48 sm:h-48 md:w-48 md:h-48 bg-purple-300 rounded-full mix-blend-multiply"></div>
        <div className="absolute bottom-10 right-1/2 transform translate-x-1/2 w-44 h-44 sm:w-52 sm:h-52 md:w-52 md:h-52 bg-blue-300 rounded-full mix-blend-multiply"></div>
      </div>

      {/* Content Container */}
      <div className="relative max-w-7xl mx-auto px-6 py-16 sm:py-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 sm:gap-16 text-gray-800">

        {/* Brand */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <h2 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent drop-shadow-sm">
            MindMate
          </h2>
          <p className="mt-4 text-sm sm:text-base leading-7 opacity-90 max-w-xs">
            A peaceful space to understand your emotions, improve your mental wellness,
            and grow through daily mindful practices.
          </p>
        </div>

        {/* Explore */}
        <div className="text-center sm:text-left">
          <h3 className="text-lg sm:text-xl font-semibold mb-4 text-gray-900">Explore</h3>
          <ul className="space-y-2 text-sm sm:text-base opacity-90">
            <li><a className="hover:text-purple-600 transition-all duration-200">Dashboard</a></li>
            <li><a className="hover:text-purple-600 transition-all duration-200">Mood Tracking</a></li>
            <li><a className="hover:text-purple-600 transition-all duration-200">AI Chat</a></li>
            <li><a className="hover:text-purple-600 transition-all duration-200">Community</a></li>
          </ul>
        </div>

        {/* Wellness */}
        <div className="text-center sm:text-left">
          <h3 className="text-lg sm:text-xl font-semibold mb-4 text-gray-900">Wellness Tools</h3>
          <ul className="space-y-2 text-sm sm:text-base opacity-90">
            <li><a className="hover:text-purple-600 transition-all duration-200">Wellness Hub</a></li>
            <li><a className="hover:text-purple-600 transition-all duration-200">Goal Planning</a></li>
            <li><a className="hover:text-purple-600 transition-all duration-200">Daily Journals</a></li>
            <li><a className="hover:text-purple-600 transition-all duration-200">Relaxation</a></li>
          </ul>
        </div>

        {/* Support */}
        <div className="text-center sm:text-left">
          <h3 className="text-lg sm:text-xl font-semibold mb-4 text-gray-900">Support</h3>
          <ul className="space-y-2 text-sm sm:text-base opacity-90">
            <li><a className="hover:text-purple-600 transition-all duration-200">Privacy Policy</a></li>
            <li><a className="hover:text-purple-600 transition-all duration-200">Terms of Use</a></li>
            <li><a className="hover:text-purple-600 transition-all duration-200">Help Center</a></li>
            <li><a className="hover:text-purple-600 transition-all duration-200">Contact Us</a></li>
          </ul>
        </div>

      </div>

      {/* Glass Bottom Bar */}
      <div className="backdrop-blur-xl bg-white/50 border-t py-4 px-6 sm:px-16">
        <p className="text-center text-sm sm:text-base text-gray-700 tracking-wide">
          © {new Date().getFullYear()} MindMate — All Rights Reserved.
        </p>
      </div>

    </footer>
  );
};

export default Footer;
