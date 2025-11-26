import React from "react";

const HomeBanner = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-purple-50 to-blue-100 overflow-hidden">
      
      {/* Soft Glowing Circles */}
      <div className="absolute inset-0 opacity-30 blur-3xl">
        <div className="absolute top-10 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply animate-pulse-slow"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply animate-pulse-slow"></div>
      </div>

      {/* Content Container */}
      <div className="relative max-w-7xl mx-auto px-6 py-32 text-center sm:text-left">
        <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent drop-shadow-lg">
          Welcome to MindMate
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-700 max-w-xl mx-auto sm:mx-0 opacity-90 leading-relaxed">
          Discover a peaceful space to understand your emotions, improve mental wellness,
          and grow through daily mindful practices.
        </p>
        <div className="mt-10 flex justify-center sm:justify-start gap-4">
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-xl shadow-lg transition-all duration-300">
            Get Started
          </button>
          <button className="bg-white/70 hover:bg-white/90 text-purple-600 font-semibold px-6 py-3 rounded-xl shadow-md transition-all duration-300 backdrop-blur-sm">
            Learn More
          </button>
        </div>
      </div>

      {/* Floating decorative shapes */}
      <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply opacity-20 animate-bounce-slow"></div>
    </section>
  );
};

export default HomeBanner;
