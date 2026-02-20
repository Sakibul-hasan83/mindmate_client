import React from "react";
import homeBannerLogo from "../assets/homeBannerPhoto.png";
import homeBannerBackground from "../assets/HomeBannerBg.png";
import SectionTitle from "../ShareElements/SectionTitle";

const HomeBanner = () => {
  return (
    // Changed min-h-screen to h-auto and reduced bottom padding to remove extra space
    <div className="bg-white relative overflow-hidden pb-4 sm:pb-8">
      
      {/* Background Pattern - Lowered opacity for a cleaner look */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25 pointer-events-none"
        style={{ backgroundImage: `url(${homeBannerBackground})` }}
      ></div>

      {/* Hero Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-20">
        <div className="text-center">

          {/* Main Heading - Sharper and bolder */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-3 tracking-tight">
            <span className="text-teal-500">Your Mind</span>
            <span className="text-teal-400 mx-3 inline-block animate-pulse">✦</span>
            <span className="text-gray-900">Your Mate.</span>
          </h1>

          {/* Section Title - Adjusted margins to be tighter */}
          <div className="mb-8">
            <SectionTitle
              heading="Find Balance in University Life."
              subHeading="An AI-powered companion providing 24/7 emotional support, personalized coping strategies, and a safe community for students."
            />
          </div>

          {/* CTA Button - Modernized styling */}
          <button className="px-8 py-4 bg-teal-500 text-white rounded-xl hover:bg-teal-600 transition-all transform hover:-translate-y-1 font-bold shadow-xl text-base sm:text-lg active:scale-95">
            Get Started - It's Free
          </button>

          {/* Banner Image - Reduced top margin and added depth with drop shadow */}
          <div className="mt-8 sm:mt-12 flex justify-center">
            <div className="w-full max-w-4xl px-2">
              <img
                src={homeBannerLogo}
                alt="MindMate Banner"
                className="w-full h-auto object-contain drop-shadow-2xl scale-105 sm:scale-100"
              />
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default HomeBanner;