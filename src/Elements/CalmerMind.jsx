import React from 'react';
import clamber1 from '../assets/clamber1.png';
import clamber2 from '../assets/clamber2.png';

const CalmerMind = () => {
  return (
    /* Updated background: Added dark:bg-[#0f172a] to match the theme */
    <section className="relative bg-white dark:bg-[#0f172a] py-20 lg:py-32 px-4 overflow-hidden transition-colors duration-300">
      
      {/* Decorative Assets - Lowered opacity for dark mode */}
      <img
        src={clamber1}
        alt=""
        className="absolute -left-10 top-1/2 -translate-y-1/2 w-32 sm:w-52 lg:w-80 opacity-80 dark:opacity-20 pointer-events-none select-none transition-opacity"
      />

      <img
        src={clamber2}
        alt=""
        className="absolute -right-5 top-0 w-32 sm:w-52 lg:w-80 opacity-80 dark:opacity-20 pointer-events-none select-none transition-opacity"
      />

      {/* Main Content Card */}
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        {/* Updated heading colors: Added dark:text-white */}
        <h2 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-gray-900 dark:text-white tracking-tight leading-tight mb-6 transition-colors">
          Take the First Step to a <span className="text-blue-900 dark:text-blue-400">Calmer Mind</span>
        </h2>

        {/* Updated paragraph colors: Added dark:text-gray-400 */}
        <p className="text-gray-500 dark:text-gray-400 text-base sm:text-lg lg:text-xl mb-10 max-w-xl mx-auto leading-relaxed transition-colors">
          It's <span className="font-bold text-gray-900 dark:text-white">100% free</span> for students. 
          Get instant, confidential access to your complete wellness toolkit right now.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Updated button: Dark mode specific shadow and hover effect */}
          <button className="w-full sm:w-auto bg-blue-900 dark:bg-blue-600 text-white px-10 py-4 rounded-2xl font-bold text-lg hover:bg-blue-800 dark:hover:bg-blue-500 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 active:scale-95 shadow-lg shadow-blue-900/20">
            Start Your Journey Now
          </button>
        </div>
      </div>

    </section>
  );
};

export default CalmerMind;