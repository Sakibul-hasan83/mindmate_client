import React from 'react';
import saftyPhoto1 from '../assets/safty1.png';
import saftyPhoto2 from '../assets/safty2.png';
import saftyPhoto3 from '../assets/safty3.png';
import saftyPhoto4 from '../assets/safty4.png';
import saftyPhoto5 from '../assets/safty5.png';
import saftyPhoto6 from '../assets/safty6.png';

const SafetyAndPrivacy = () => {
  return (
    <div className="relative bg-gradient-to-br from-[#E3F2FF] via-white to-[#FFFBEB] py-20 px-4 overflow-hidden min-h-[650px] flex items-center justify-center">
      
      {/* Main Container */}
      <div className="relative w-full max-w-[320px] sm:max-w-md md:max-w-6xl flex items-center justify-center">

        {/* ===== Floating Icons ===== */}
        
        {/* Top Left */}
        <img
          src={saftyPhoto1}
          className="absolute z-30 -top-16 left-0 md:top-[5%] md:left-[8%] w-10 h-10 md:w-16 md:h-16 rounded-xl shadow-lg bg-white p-1.5 animate-float"
          alt="security-icon-1"
        />

        {/* Top Right */}
        <img
          src={saftyPhoto2}
          className="absolute z-30 -top-14 right-0 md:top-[10%] md:right-[8%] w-10 h-10 md:w-16 md:h-16 rounded-xl shadow-lg bg-white p-1.5 animate-float-delayed"
          alt="security-icon-2"
        />

        {/* Middle Left */}
        <img
          src={saftyPhoto3}
          className="absolute z-30 top-1/2 -translate-y-1/2 -left-12 md:left-[2%] w-10 h-10 md:w-16 md:h-16 rounded-xl shadow-lg bg-white p-1.5 animate-float"
          alt="security-icon-3"
        />

        {/* Middle Right */}
        <img
          src={saftyPhoto4}
          className="absolute z-30 top-1/2 -translate-y-1/2 -right-12 md:right-[2%] w-10 h-10 md:w-16 md:h-16 rounded-xl shadow-lg bg-white p-1.5 animate-float-delayed"
          alt="security-icon-4"
        />

        {/* Bottom Left */}
        <img
          src={saftyPhoto5}
          className="absolute z-30 -bottom-14 left-0 md:bottom-[5%] md:left-[10%] w-10 h-10 md:w-16 md:h-16 rounded-xl shadow-lg bg-white p-1.5 animate-float-delayed"
          alt="security-icon-5"
        />

        {/* Bottom Right */}
        <img
          src={saftyPhoto6}
          className="absolute z-30 -bottom-16 right-0 md:bottom-[10%] md:right-[10%] w-10 h-10 md:w-16 md:h-16 rounded-xl shadow-lg bg-white p-1.5 animate-float"
          alt="security-icon-6"
        />

        {/* ===== Center Card (Balanced Width) ===== */}
        {/* max-w-[250px] for mobile, scaling up to md:max-w-2xl for desktop */}
        <div className="relative z-20 bg-white rounded-[2.5rem] md:rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.08)] p-7 md:p-20 text-center w-full max-w-[250px] sm:max-w-md md:max-w-2xl border border-white/60">
          <h2 className="text-lg sm:text-3xl md:text-5xl font-bold text-[#0F172A] leading-tight mb-4">
            Your Safety & Privacy is <br /> 
            Our Foundation
          </h2>

          <p className="text-slate-500 text-[11px] sm:text-base md:text-lg leading-relaxed mb-6">
            We built MindMate with 100% confidentiality at its core. Your privacy is our priority.
          </p>

          <button className="bg-black text-white px-7 md:px-12 py-2.5 md:py-4 rounded-xl font-bold text-xs md:text-lg hover:bg-slate-800 transition-all active:scale-95 shadow-md">
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