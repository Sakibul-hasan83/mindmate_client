import React from "react";
import moodTrackerPhoto from "../assets/moodtracker.png";
import arrowCurve from "../assets/Vector 6.png";

const SmartMoodTracker = () => {
  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">

      {/* TOP TITLES SECTION */}
      <div className="max-w-4xl mx-auto text-center mb-14">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-snug">
          From stress management to emotional support
        </h2>

        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mt-2">
          MindMate gives you the features that truly matter.
        </h3>

        <p className="text-gray-600 text-sm sm:text-base leading-relaxed mt-4">
          MindMate offers simple, accessible, and student-friendly tools to help you manage
          stress, stay organized, and feel more connected—anytime, anywhere.
        </p>
      </div>

      {/* MAIN CONTAINER WITH SHADOW */}
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-lg p-8 sm:p-12 lg:p-16 relative">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* LEFT SECTION */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold italic text-gray-900 mb-4">
              Smart Mood Tracker
            </h2>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-xs mb-8">
              Log your daily feelings in seconds. Our AI analyzes your journal entries to help you understand your emotional patterns, identify stress triggers (like exams or lack of sleep), and gain personalized insights for better self-awareness.
            </p>

            {/* Button + Arrow */}
            <div className="flex items-start gap-3 relative">
              <button className="bg-teal-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-teal-600 transition">
                Learn More
              </button>

              <img
                src={arrowCurve}
                alt="arrow"
                className="w-20 opacity-90 select-none relative top-3"
              />
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center">
            <img
              src={moodTrackerPhoto}
              alt="Mood Tracker"
              className="w-60 sm:w-72 lg:w-80 object-contain"
            />
          </div>
        </div>

        {/* Bottom center round button */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
          <button className="bg-teal-400 w-10 h-10 rounded-full flex items-center justify-center shadow-md hover:bg-teal-500 transition">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M8 4l8 8-8 8" />
            </svg>
          </button>
        </div>

      </div>
    </div>
  );
};

export default SmartMoodTracker;
