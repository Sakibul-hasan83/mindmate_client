import React from "react";

import homeBannerLogo from "../assets/homeBannerPhoto.png"
import homeBannerBackground from "../assets/HomeBannerBg.png"

const HomeBanner = () => {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Background Pattern - Behind everything */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{ backgroundImage: `url(${homeBannerBackground})` }}
      ></div>
      
      {/* Hero Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="text-center">
          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4">
            <span className="text-teal-500">Your Mind</span>
            <span className="text-teal-400 mx-2">✦</span>
            <span className="text-gray-900">Your Mate.</span>
          </h1>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Find Balance in University Life.
          </h2>

          {/* Description */}
          <p className="text-gray-700 max-w-2xl mx-auto mb-6 sm:mb-8 text-sm sm:text-base px-4 leading-relaxed">
            An AI-powered companion providing 24/7 emotional support, personalized coping strategies, and a safe community for students.
          </p>

          {/* CTA Button */}
          <button className="px-6 sm:px-8 py-3 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-all transform hover:scale-105 font-medium shadow-lg text-sm sm:text-base">
            Get Started - It's Free
          </button>

          {/* Banner Image */}
          <div className="mt-8 sm:mt-12 lg:mt-16 flex justify-center">
            <div className="w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-3xl px-4">
              <img 
                src={homeBannerLogo} 
                alt="MindMate Banner - Students finding balance" 
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeBanner;