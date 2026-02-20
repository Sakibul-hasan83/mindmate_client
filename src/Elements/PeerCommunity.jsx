import React from "react";
import peerCommunityPhoto from "../assets/peercommunity.png";
import arrowCurve from "../assets/Vector 6.png";

const PeerCommunity = () => {
  return (
    <div className="bg-white w-full h-full py-12 px-6 sm:px-16 flex items-center justify-center overflow-hidden">
      <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        
        {/* Text Section */}
        <div className="flex flex-col items-start text-left order-2 lg:order-1">
          <h2 className="text-4xl sm:text-5xl font-black italic text-[#0f172a] mb-5 tracking-tight leading-tight">
            Peer Community
          </h2>
          
          <p className="text-gray-500 text-base sm:text-lg leading-relaxed mb-8 font-medium max-w-[380px]">
            Share your journey and find encouragement in our safe, anonymous group forum. 
            A judgment-free, AI-moderated space to offer and receive support.
          </p>

          <div className="relative inline-flex items-center">
            <button className="bg-[#14b8a6] text-white px-8 py-3 rounded-xl text-lg font-bold hover:bg-[#0d9488] transition-all shadow-md active:scale-95">
              Learn More
            </button>
            
            <img
              src={arrowCurve}
              alt="arrow"
              className="absolute left-[105%] top-0 w-20 h-auto object-contain hidden md:block opacity-70"
            />
          </div>
        </div>

        {/* Image Section - Compact & Responsive */}
        <div className="w-full flex justify-center lg:justify-end order-1 lg:order-2">
          <img
            src={peerCommunityPhoto}
            alt="Peer Community Illustration"
            // Consistent small sizing: mobile 160px, tablet 220px, desktop 280px
            className="w-[160px] sm:w-[220px] lg:w-[280px] h-auto object-contain drop-shadow-sm"
          />
        </div>
      </div>
    </div>
  );
};

export default PeerCommunity;