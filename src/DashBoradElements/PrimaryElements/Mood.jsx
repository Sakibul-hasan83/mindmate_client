import React, { useState } from 'react';
import { 
  FiPlus, 
  FiBarChart2, 
  FiZap, 
  FiTrendingUp, 
  FiActivity, 
  FiCalendar 
} from 'react-icons/fi';

const Mood = () => {
  const [entries, setEntries] = useState([]);

  return (
    <div className="min-h-screen bg-white dark:bg-[#0f172a] transition-colors duration-300">
      {/* Container with responsive padding */}
      <div className="max-w-7xl mx-auto px-4 py-6 md:px-8 md:py-10 space-y-6 md:space-y-8">
        
        {/* Header Section: Stacked on mobile, side-by-side on desktop */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="text-left">
            <h1 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-white tracking-tight">
              Mood Tracker
            </h1>
            <p className="text-sm md:text-base text-slate-500 dark:text-gray-400 mt-1 font-medium">
              Track and understand your emotional patterns
            </p>
          </div>
          
          <div className="flex items-center gap-2 md:gap-3">
            <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-3 py-2 md:px-5 md:py-2.5 rounded-xl border border-slate-200 dark:border-teal-500/30 text-teal-600 dark:text-teal-400 font-bold hover:bg-teal-500/5 transition-all text-xs md:text-sm">
              <FiBarChart2 className="text-lg" /> 
              <span className="whitespace-nowrap">View Analytics</span>
            </button>
            <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-3 py-2 md:px-5 md:py-2.5 rounded-xl bg-teal-500 hover:bg-teal-600 text-white font-bold transition-all shadow-lg shadow-teal-500/20 text-xs md:text-sm">
              <FiPlus className="text-lg" /> 
              <span className="whitespace-nowrap">Log Mood</span>
            </button>
          </div>
        </div>

        {/* Stats Grid: 2 columns on mobile, 4 on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          <StatBox icon={<FiZap className="text-orange-500" />} label="Day Streak" value="—" />
          <StatBox icon={<FiTrendingUp className="text-blue-500" />} label="Avg Mood" value="—" />
          <StatBox icon={<FiActivity className="text-green-500" />} label="Total Logs" value="0" />
          <StatBox icon={<FiActivity className="text-purple-500" />} label="Trend" value="Stable" />
        </div>

        {/* Main Content Area (Empty State) */}
        <div className="bg-slate-50 dark:bg-[#1e293b]/40 border border-slate-200 dark:border-gray-800 rounded-3xl p-8 md:p-16 lg:p-24 flex flex-col items-center justify-center text-center transition-all">
          <div className="w-16 h-16 md:w-20 md:h-20 bg-white dark:bg-gray-800 rounded-2xl flex items-center justify-center mb-6 border border-slate-200 dark:border-gray-700 shadow-sm">
            <FiCalendar className="text-3xl md:text-4xl text-slate-400 dark:text-gray-500" />
          </div>
          
          <h2 className="text-lg md:text-xl font-bold text-slate-800 dark:text-white mb-2">
            No mood entries yet
          </h2>
          <p className="text-sm text-slate-500 dark:text-gray-400 max-w-xs mb-8">
            Start tracking your mood to see patterns and personalized insights
          </p>

          <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-teal-500 hover:bg-teal-600 text-white font-bold transition-all shadow-xl shadow-teal-500/25 group">
            <FiPlus className="text-xl group-hover:rotate-90 transition-transform duration-300" /> 
            Log Your First Mood
          </button>
        </div>

        {/* Footer Info */}
        <p className="text-center text-[10px] md:text-[11px] text-slate-400 dark:text-gray-600 uppercase tracking-[0.2em] font-bold py-4">
          Consistent tracking helps AI provide better wellness insights
        </p>
      </div>
    </div>
  );
};

/**
 * Reusable StatBox Component with Responsive Font Sizes
 */
const StatBox = ({ icon, label, value }) => (
  <div className="bg-white dark:bg-[#1e293b] border border-slate-100 dark:border-gray-800 p-4 md:p-6 rounded-2xl shadow-sm flex flex-col items-center justify-center text-center transition-all hover:border-teal-500/30 group">
    <div className="mb-2 md:mb-3 p-2 bg-slate-50 dark:bg-gray-800/50 rounded-lg group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <span className="text-xl md:text-3xl font-bold text-slate-800 dark:text-white mb-1">
      {value}
    </span>
    <span className="text-[10px] md:text-xs font-bold text-slate-400 dark:text-gray-500 uppercase tracking-wider">
      {label}
    </span>
  </div>
);

export default Mood;