import React from 'react';
import saftyPhoto1 from '../assets/safty1.png';
import saftyPhoto2 from '../assets/safty2.png';
import saftyPhoto3 from '../assets/safty3.png';
import saftyPhoto4 from '../assets/safty4.png';
import saftyPhoto5 from '../assets/safty5.png';
import saftyPhoto6 from '../assets/safty6.png';

const SafetyAndPrivacy = () => {
  return (
    <div className="relative bg-gradient-to-br from-blue-200 via-white to-yellow-200 py-24 px-4 sm:px-8 overflow-hidden">

      <div className="max-w-5xl mx-auto relative">

        {/* ===== Floating Icons ===== */}

        {/* Top Left */}
        <img
          src={saftyPhoto1}
          alt="icon"
          className="absolute -top-6 left-4 w-12 h-12 sm:w-14 sm:h-14 rounded-xl shadow-md bg-white p-2 animate-float"
        />

        {/* Top Right */}
        <img
          src={saftyPhoto2}
          alt="icon"
          className="absolute -top-4 right-6 w-12 h-12 sm:w-14 sm:h-14 rounded-xl shadow-md bg-white p-2 animate-float-delayed"
        />

        {/* Middle Left */}
        <img
          src={saftyPhoto3}
          alt="icon"
          className="absolute top-28 -left-2 sm:left-8 w-12 h-12 sm:w-14 sm:h-14 rounded-xl shadow-md bg-white p-2 animate-float"
        />

        {/* Middle Right */}
        <img
          src={saftyPhoto4}
          alt="icon"
          className="absolute top-32 right-2 sm:right-10 w-12 h-12 sm:w-14 sm:h-14 rounded-xl shadow-md bg-white p-2 animate-float-delayed"
        />

        {/* Bottom Left */}
        <img
          src={saftyPhoto5}
          alt="icon"
          className="absolute bottom-16 left-4 sm:left-16 w-12 h-12 sm:w-14 sm:h-14 rounded-xl shadow-md bg-white p-2 animate-float"
        />

        {/* Bottom Right */}
        <img
          src={saftyPhoto6}
          alt="icon"
          className="absolute bottom-20 right-8 sm:right-20 w-12 h-12 sm:w-14 sm:h-14 rounded-xl shadow-md bg-white p-2 animate-float-delayed"
        />


        {/* ===== Center Card ===== */}
        <div className="relative z-20 bg-white rounded-3xl shadow-2xl p-8 sm:p-12 text-center max-w-xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-4">
            Your Safety & Privacy is <br /> Our Foundation
          </h2>

          <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-7">
            We built MindMate with 100% confidentiality at its core.  
            How you use your account, what you write, and who you talk to is private. Always.
          </p>

          <button className="bg-black text-white px-7 py-3 rounded-lg text-sm sm:text-base hover:bg-gray-800 transition">
            Read More
          </button>
        </div>


        {/* ===== Connecting Lines ===== */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
          <line x1="15%" y1="10%" x2="48%" y2="48%" stroke="#d1d5db" strokeWidth="2" strokeDasharray="4 4" />
          <line x1="85%" y1="10%" x2="52%" y2="48%" stroke="#d1d5db" strokeWidth="2" strokeDasharray="4 4" />
          <line x1="18%" y1="52%" x2="45%" y2="52%" stroke="#d1d5db" strokeWidth="2" strokeDasharray="4 4" />
          <line x1="82%" y1="55%" x2="55%" y2="52%" stroke="#d1d5db" strokeWidth="2" strokeDasharray="4 4" />
          <line x1="22%" y1="82%" x2="46%" y2="60%" stroke="#d1d5db" strokeWidth="2" strokeDasharray="4 4" />
          <line x1="78%" y1="82%" x2="54%" y2="60%" stroke="#d1d5db" strokeWidth="2" strokeDasharray="4 4" />
        </svg>

      </div>


      {/* ===== Animation CSS ===== */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float 3s ease-in-out infinite;
          animation-delay: 1.5s;
        }
      `}</style>

    </div>
  );
};

export default SafetyAndPrivacy;
