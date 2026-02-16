import React, { useState } from "react";
import { Link } from "react-router-dom";
import navbarLogoBrain from "../assets/navbarLogo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex justify-between items-center h-16 sm:h-20">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 sm:gap-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br rounded-full flex items-center justify-center">
              <img
                src={navbarLogoBrain}
                alt="MindMate Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
              MindMate
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-700 hover:text-teal-500 text-sm font-medium">
              Features
            </a>
            <a href="#how-it-works" className="text-gray-700 hover:text-teal-500 text-sm font-medium">
              How it works
            </a>
            <a href="#safety" className="text-gray-700 hover:text-teal-500 text-sm font-medium">
              Safety & Privacy
            </a>
            <a href="#crisis" className="text-gray-700 hover:text-teal-500 text-sm font-medium">
              Crisis Support
            </a>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/login"
              className="px-4 py-2 text-gray-700 hover:text-gray-900 text-sm font-medium border border-gray-300 rounded-md hover:border-gray-400"
            >
              Log In
            </Link>

            <Link
              to="/signup"
              className="px-5 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-600 text-sm font-medium shadow-sm"
            >
              Register
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-teal-500 hover:bg-gray-100"
            >
              {isMenuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">

            <div className="flex flex-col space-y-3">

              <a href="#features" onClick={() => setIsMenuOpen(false)}
                className="text-gray-700 hover:text-teal-500 py-2 px-2 hover:bg-gray-50 rounded-md">
                Features
              </a>

              <a href="#how-it-works" onClick={() => setIsMenuOpen(false)}
                className="text-gray-700 hover:text-teal-500 py-2 px-2 hover:bg-gray-50 rounded-md">
                How it works
              </a>

              <a href="#safety" onClick={() => setIsMenuOpen(false)}
                className="text-gray-700 hover:text-teal-500 py-2 px-2 hover:bg-gray-50 rounded-md">
                Safety & Privacy
              </a>

              <a href="#crisis" onClick={() => setIsMenuOpen(false)}
                className="text-gray-700 hover:text-teal-500 py-2 px-2 hover:bg-gray-50 rounded-md">
                Crisis Support
              </a>

              {/* Mobile Auth Buttons */}
              <div className="flex flex-col gap-2 pt-3 border-t border-gray-200">

                <Link
                  to="/login"
                  onClick={() => setIsMenuOpen(false)}
                  className="w-full px-4 py-2 text-gray-700 border border-gray-300 rounded-md"
                >
                  Log In
                </Link>

                <Link
                  to="/signup"
                  onClick={() => setIsMenuOpen(false)}
                  className="w-full px-4 py-2 bg-teal-500 text-white rounded-md"
                >
                  Register
                </Link>

              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
