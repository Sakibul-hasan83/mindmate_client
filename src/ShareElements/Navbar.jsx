import React, { useState } from "react";
import { Link } from "react-router-dom";
import navbarLogoBrain from "../assets/navbarLogo.png"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const links = (
    <>
      <li><a href="#features" className="text-gray-700 hover:text-teal-500 text-sm font-medium" onClick={() => setIsMenuOpen(false)}>Features</a></li>
      <li><a href="#how-it-works" className="text-gray-700 hover:text-teal-500 text-sm font-medium" onClick={() => setIsMenuOpen(false)}>How it works</a></li>
      <li><a href="#safety" className="text-gray-700 hover:text-teal-500 text-sm font-medium" onClick={() => setIsMenuOpen(false)}>Safety & Privacy</a></li>
      <li><a href="#crisis" className="text-gray-700 hover:text-teal-500 text-sm font-medium" onClick={() => setIsMenuOpen(false)}>Crisis Support</a></li>
    </>
  );

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          
          {/* Left - Logo */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-br rounded-full flex items-center justify-center flex-shrink-0">
              <img src={navbarLogoBrain} alt="MindMate Logo" className="w-full h-full object-contain" />
            </div>
            <span className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">MindMate</span>
          </div>
          
          {/* Center - Navigation Links (Desktop) */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-700 hover:text-teal-500 transition-colors text-sm font-medium">
              Features
            </a>
            <a href="#how-it-works" className="text-gray-700 hover:text-teal-500 transition-colors text-sm font-medium">
              How it works
            </a>
            <a href="#safety" className="text-gray-700 hover:text-teal-500 transition-colors text-sm font-medium">
              Safety & Privacy
            </a>
            <a href="#crisis" className="text-gray-700 hover:text-teal-500 transition-colors text-sm font-medium">
              Crisis Support
            </a>
          </div>
          
          {/* Right - Auth Buttons (Desktop) */}
          <div className="hidden md:flex items-center gap-3">
            <button className="px-4 py-2 text-gray-700 hover:text-gray-900 transition-colors text-sm font-medium border border-gray-300 rounded-md hover:border-gray-400">
              Log In
            </button>
            <button className="px-5 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-600 transition-colors text-sm font-medium shadow-sm">
              Register
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-teal-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500"
              aria-label="Toggle menu"
            >
              <svg 
                className="w-6 h-6" 
                fill="none" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-3">
              <a 
                href="#features" 
                className="text-gray-700 hover:text-teal-500 transition-colors text-sm font-medium py-2 px-2 hover:bg-gray-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </a>
              <a 
                href="#how-it-works" 
                className="text-gray-700 hover:text-teal-500 transition-colors text-sm font-medium py-2 px-2 hover:bg-gray-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                How it works
              </a>
              <a 
                href="#safety" 
                className="text-gray-700 hover:text-teal-500 transition-colors text-sm font-medium py-2 px-2 hover:bg-gray-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Safety & Privacy
              </a>
              <a 
                href="#crisis" 
                className="text-gray-700 hover:text-teal-500 transition-colors text-sm font-medium py-2 px-2 hover:bg-gray-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Crisis Support
              </a>
              
              {/* Mobile Auth Buttons */}
              <div className="flex flex-col gap-2 pt-3 border-t border-gray-200">
                <button className="w-full px-4 py-2 text-gray-700 hover:text-gray-900 transition-colors text-sm font-medium border border-gray-300 rounded-md hover:border-gray-400">
                  Log In
                </button>
                <button className="w-full px-4 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-600 transition-colors text-sm font-medium shadow-sm">
                  Register
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;