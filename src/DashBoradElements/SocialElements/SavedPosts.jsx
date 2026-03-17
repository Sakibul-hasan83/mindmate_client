import React from 'react';
import { FiBookmark, FiArrowRight } from 'react-icons/fi';

const SavedPosts = () => {
  return (
    // Main Container: Slate-50 for light mode, Original Dark Blue for dark mode
    <div className="min-h-screen bg-slate-50 dark:bg-[#0b1120] text-slate-900 dark:text-slate-100 p-6 md:p-10 transition-colors duration-300">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Header Section */}
        <header>
          <h1 className="text-3xl font-black flex items-center gap-2">
            <FiBookmark className="text-amber-500" /> Saved Posts
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">
            Posts you've bookmarked for later
          </p>
        </header>

        {/* Empty State Card: White in light mode, Navy Blue in dark mode */}
        <div className="bg-white dark:bg-[#1e293b]/20 border border-slate-200 dark:border-slate-800 rounded-[3rem] p-16 md:p-24 text-center space-y-6 shadow-sm dark:shadow-none">
          
          {/* Icon Container */}
          <div className="w-24 h-24 bg-slate-100 dark:bg-slate-800/50 rounded-[2rem] flex items-center justify-center mx-auto border border-slate-200 dark:border-slate-700">
            <FiBookmark size={40} className="text-slate-300 dark:text-slate-600" />
          </div>

          {/* Content */}
          <div className="space-y-2">
            <h2 className="text-2xl font-black uppercase tracking-tighter">No saved posts yet</h2>
            <p className="text-slate-500 dark:text-slate-500 text-sm font-medium max-w-xs mx-auto">
              Start saving posts from the community to read them later or keep them as inspiration.
            </p>
          </div>

          {/* Action Button */}
          <button className="px-10 py-4 bg-blue-600 text-white rounded-2xl font-black text-xs uppercase tracking-widest transition-all shadow-xl shadow-blue-500/20 inline-flex items-center gap-2 hover:scale-105 hover:bg-blue-700 active:scale-95">
            Browse Community <FiArrowRight />
          </button>
        </div>

      </div>
    </div>
  );
};

export default SavedPosts;