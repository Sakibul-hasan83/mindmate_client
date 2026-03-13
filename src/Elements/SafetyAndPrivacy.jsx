import React from 'react';
import saftyPhoto1 from '../assets/safty1.png';
import saftyPhoto2 from '../assets/safty2.png';
import saftyPhoto3 from '../assets/safty3.png';
import saftyPhoto4 from '../assets/safty4.png';
import saftyPhoto5 from '../assets/safty5.png';
import saftyPhoto6 from '../assets/safty6.png';

const SafetyAndPrivacy = () => {
  return (
    /* Updated background: Changed gradient to dark:bg-[#0f172a] */
    <div className="relative bg-gradient-to-br from-[#E3F2FF] via-white to-[#FFFBEB] dark:from-[#0f172a] dark:via-[#1e293b] dark:to-[#0f172a] py-20 px-4 overflow-hidden min-h-[650px] flex items-center justify-center transition-colors duration-500">
      
      {/* Main Container */}
      <div className="relative w-full max-w-[320px] sm:max-w-md md:max-w-6xl flex items-center justify-center">

        {/* Floating Icons: Added dark:bg-[#1e293b] and dark:border-gray-700 */}
        {[saftyPhoto1, saftyPhoto2, saftyPhoto3, saftyPhoto4, saftyPhoto5, saftyPhoto6].map((photo, i) => (
          <img
            key={i}
            src={photo}
            className={`absolute z-30 w-10 h-10 md:w-16 md:h-16 rounded-xl shadow-lg bg-white dark:bg-[#1e293b] border dark:border-gray-700 p-1.5 ${i % 2 === 0 ? 'animate-float' : 'animate-float-delayed'}`}
            alt={`security-icon-${i + 1}`}
            style={{ 
              top: ['-16px', '-14px', '50%', '50%', 'auto', 'auto'][i] || 'auto',
              bottom: [null, null, null, null, '-14px', '-16px'][i],
              left: ['0', null, '-48px', null, '0', null][i],
              right: [null, '0', null, '-48px', null, '0'][i]
            }}
          />
        ))}

        {/* Center Card: Updated background and text colors */}
        <div className="relative z-20 bg-white dark:bg-[#1e293b] rounded-[2.5rem] md:rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.08)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-7 md:p-20 text-center w-full max-w-[250px] sm:max-w-md md:max-w-2xl border border-white/60 dark:border-gray-700 transition-colors duration-300">
          <h2 className="text-lg sm:text-3xl md:text-5xl font-bold text-[#0F172A] dark:text-white leading-tight mb-4 transition-colors">
            Your Safety & Privacy is <br /> 
            Our Foundation
          </h2>

          <p className="text-slate-500 dark:text-gray-400 text-[11px] sm:text-base md:text-lg leading-relaxed mb-6 transition-colors">
            We built MindMate with 100% confidentiality at its core. Your privacy is our priority.
          </p>

          <button className="bg-black dark:bg-teal-500 text-white px-7 md:px-12 py-2.5 md:py-4 rounded-xl font-bold text-xs md:text-lg hover:bg-slate-800 dark:hover:bg-teal-600 transition-all active:scale-95 shadow-md">
            Read More
          </button>
        </div>

      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float { animation: float 3.5s ease-in-out infinite; }
        .animate-float-delayed { animation: float 3.5s ease-in-out infinite; animation-delay: 1.7s; }
      `}</style>
    </div>
  );
};

export default SafetyAndPrivacy;