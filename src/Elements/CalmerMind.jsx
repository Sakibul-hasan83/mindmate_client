import React from 'react';
import clamber1 from '../assets/clamber1.png';
import clamber2 from '../assets/clamber2.png';

const CalmerMind = () => {
  return (
    <section className="relative bg-white py-20 lg:py-32 px-4 overflow-hidden">
      
      {/* Decorative Assets */}
      {/* Left side: Centered vertically, partially off-screen for a modern look */}
      <img
        src={clamber1}
        alt=""
        className="absolute -left-10 top-1/2 -translate-y-1/2 w-32 sm:w-52 lg:w-80 opacity-80 pointer-events-none select-none"
      />

      {/* Right side: Top corner positioning */}
      <img
        src={clamber2}
        alt=""
        className="absolute -right-5 top-0 w-32 sm:w-52 lg:w-80 opacity-80 pointer-events-none select-none"
      />

      {/* Main Content Card */}
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight mb-6">
          Take the First Step to a <span className="text-blue-900">Calmer Mind</span>
        </h2>

        <p className="text-gray-500 text-base sm:text-lg lg:text-xl mb-10 max-w-xl mx-auto leading-relaxed">
          It's <span className="font-bold text-gray-900">100% free</span> for students. 
          Get instant, confidential access to your complete wellness toolkit right now.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto bg-blue-900 text-white px-10 py-4 rounded-2xl font-bold text-lg hover:bg-blue-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 active:scale-95 shadow-lg shadow-blue-900/20">
            Start Your Journey Now
          </button>
        </div>
      </div>

    </section>
  );
};

export default CalmerMind;