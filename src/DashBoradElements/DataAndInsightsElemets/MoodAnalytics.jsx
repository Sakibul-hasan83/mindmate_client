import React from 'react';
import { FiActivity, FiBarChart2, FiCalendar, FiTrendingUp } from 'react-icons/fi';

const MoodAnalytics = () => {
  // ডাটা নেই এমন অবস্থা (moodanalysis.png অনুযায়ী)
  const hasData = false;

  return (
    <div className="min-h-screen bg-white dark:bg-[#0f172a] transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 py-8 md:py-12 space-y-8">
        
        {/* Header Section */}
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-slate-800 dark:text-white tracking-tight">
            Mood Analytics
          </h1>
          <p className="text-slate-500 dark:text-gray-400 font-medium">
            Analyze your emotional trends over time
          </p>
        </div>

        {/* Analytics Main Container - Matches moodanalysis.png */}
        <div className="bg-slate-50/50 dark:bg-[#1e293b]/30 border border-slate-200 dark:border-gray-800 rounded-3xl p-6 md:p-12 transition-all">
          
          {!hasData ? (
            /* Empty State Layout */
            <div className="flex flex-col items-center justify-center text-center min-h-[350px]">
              <div className="mb-6 text-slate-400/50 dark:text-gray-600">
                <FiActivity size={64} strokeWidth={1.5} className="animate-pulse" />
              </div>
              
              <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-2">
                No Data Yet
              </h2>
              <p className="text-slate-500 dark:text-gray-400 max-w-sm mb-10 font-medium leading-relaxed">
                Start logging your mood to see analytics and insights
              </p>

              <button className="flex items-center gap-3 px-8 py-3.5 rounded-2xl bg-teal-500 hover:bg-teal-600 text-white font-bold transition-all shadow-lg shadow-teal-500/25 active:scale-95 group">
                <FiPlus className="text-xl group-hover:rotate-90 transition-transform" />
                Log Your Mood
              </button>
            </div>
          ) : (
            /* Charts & Stats would go here */
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               {/* Chart Placeholder */}
               <div className="h-64 bg-white dark:bg-gray-800 rounded-2xl border border-slate-100 dark:border-gray-700"></div>
               <div className="h-64 bg-white dark:bg-gray-800 rounded-2xl border border-slate-100 dark:border-gray-700"></div>
            </div>
          )}
        </div>

        {/* Quick Summary Cards (Responsive Grid) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          <SummaryCard 
            label="Weekly Average" 
            value="N/A" 
            icon={<FiBarChart2 />} 
            color="text-blue-500" 
          />
          <SummaryCard 
            label="Longest Streak" 
            value="0 Days" 
            icon={<FiTrendingUp />} 
            color="text-orange-500" 
          />
          <SummaryCard 
            label="Total Entries" 
            value="0" 
            icon={<FiActivity />} 
            color="text-teal-500" 
          />
          <SummaryCard 
            label="Last Logged" 
            value="Never" 
            icon={<FiCalendar />} 
            color="text-purple-500" 
          />
        </div>

      </div>
    </div>
  );
};

/* --- Summary Card Helper Component --- */
const SummaryCard = ({ label, value, icon, color }) => (
  <div className="bg-white dark:bg-[#1e293b] p-6 rounded-3xl border border-slate-200 dark:border-gray-800 hover:shadow-xl hover:shadow-slate-200/20 dark:hover:shadow-none transition-all">
    <div className={`${color} text-2xl mb-4 bg-slate-50 dark:bg-gray-800 w-12 h-12 rounded-2xl flex items-center justify-center`}>
      {icon}
    </div>
    <div className="text-2xl font-bold text-slate-800 dark:text-white">{value}</div>
    <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">{label}</div>
  </div>
);

const FiPlus = ({ className }) => (
  <svg className={className} stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
);

export default MoodAnalytics;