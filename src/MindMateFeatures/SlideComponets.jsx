import React, { useMemo } from "react";
import Flicking from "@egjs/react-flicking";
import { AutoPlay } from "@egjs/flicking-plugins";

// Essential CSS
import "@egjs/react-flicking/dist/flicking.css";

import WellnessChatbot from "../Elements/WelnessChatbot";
import SmartMoodTracker from "../Elements/SmartMoodTracker";
import PeerSupport from "../Elements/PeerSupport";
import PeerCommunity from "../Elements/PeerCommunity";
import CrisisDetection from "../Elements/CrisisDetection";

const SlideComponents = () => {
  // useMemo ensures the plugin is only created once, preventing "Plugin already initialized" errors
  const plugins = useMemo(() => [
    new AutoPlay({
      duration: 1000, // 1 second interval
      direction: "NEXT",
      stopOnHover: true,
    }),
  ], []);

  const components = [
    WellnessChatbot,
    SmartMoodTracker,
    PeerSupport,
    PeerCommunity,
    CrisisDetection,
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12 lg:py-20">
      {/* Header Section */}
      <div className="max-w-4xl mx-auto text-center mb-12 lg:mb-16">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
          From stress management to emotional support
        </h2>
        <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-teal-600 mt-4">
          MindMate gives you the features that truly matter.
        </h3>
        <p className="text-gray-500 text-base sm:text-lg leading-relaxed mt-6 max-w-2xl mx-auto">
          Simple, accessible, and student-friendly tools to help you manage
          stress and stay connected—anytime, anywhere.
        </p>
      </div>

      {/* Slider Container */}
      <div className="bg-white rounded-[2.5rem] shadow-2xl border border-gray-100 overflow-hidden">
        <Flicking
          circular={true}
          plugins={plugins}
          align="center"
          moveType="snap"
          className="w-full"
        >
          {components.map((Component, idx) => (
            <div 
              key={idx} 
              className="panel w-full flex-shrink-0" 
              style={{ width: "100%" }} 
            >
              {/* Internal padding for the components to breathe */}
              <div className="w-full min-h-[450px] md:min-h-[600px] flex items-center justify-center p-6 md:p-12">
                <Component />
              </div>
            </div>
          ))}
        </Flicking>
      </div>
    </div>
  );
};

export default SlideComponents;