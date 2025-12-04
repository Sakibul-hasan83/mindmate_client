import React from 'react';
import clamber1 from '../assets/clamber1.png';
import clamber2 from '../assets/clamber2.png';

const CalmerMind = () => {
  return (
    <div className="relative bg-white py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">

      {/* Left Decorative Image */}
      <img
        src={clamber1}
        alt="decoration"
        className="absolute left-0 top-1/2 -translate-y-1/2 w-40 sm:w-60 lg:w-72 opacity-90 pointer-events-none select-none"
      />

      {/* Right Decorative Image */}
      <img
        src={clamber2}
        alt="decoration"
        className="absolute right-0 top-0 w-40 sm:w-60 lg:w-72 opacity-90 pointer-events-none select-none"
      />

      {/* Center Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          Take the First Step to a Calmer Mind
        </h2>

        <p className="text-gray-600 text-sm sm:text-base lg:text-lg mb-8 max-w-2xl mx-auto">
          It's 100% free for students. Get instant, confidential access to your complete wellness toolkit right now.
        </p>

        <button className="bg-blue-900 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-800 transition shadow-md">
          Start Your Journey Now
        </button>
      </div>
    </div>
  );
};

export default CalmerMind;
