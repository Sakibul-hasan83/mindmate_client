import React from 'react';
import { FiSearch, FiFilter, FiUserCheck, FiCalendar } from 'react-icons/fi';

const FindTherapist = () => {
  return (
    // Main Container: Slate-50 for light mode, Original Deep Blue for dark mode
    <div className="min-h-screen bg-slate-50 dark:bg-[#0b1120] text-slate-900 dark:text-slate-100 p-6 md:p-10 transition-colors duration-300">
      <div className="max-w-5xl mx-auto space-y-8">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="space-y-1">
            <h1 className="text-3xl font-black flex items-center gap-3 tracking-tight">
              <FiUserCheck className="text-teal-600 dark:text-teal-400" /> Find a Therapist
            </h1>
            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">
              Connect with licensed mental health professionals
            </p>
          </div>
          
          {/* Secondary Action Button */}
          <button className="px-6 py-3 bg-teal-600/10 dark:bg-teal-600/20 text-teal-700 dark:text-teal-400 border border-teal-200 dark:border-teal-500/30 hover:bg-teal-600 hover:text-white rounded-2xl font-black text-xs uppercase tracking-widest transition-all flex items-center gap-2 shadow-sm dark:shadow-none">
            <FiCalendar size={18} /> My Appointments
          </button>
        </div>

        {/* Filters Bar: Interactive element for search refinement */}
        <div className="bg-white dark:bg-[#1e293b]/30 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 flex items-center justify-between shadow-sm dark:shadow-none">
          <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400 font-black text-xs uppercase tracking-widest">
            <FiFilter size={18} className="text-teal-500" /> Filters
          </div>
          <button className="text-teal-600 dark:text-teal-400 text-xs font-black uppercase tracking-widest hover:underline decoration-2 underline-offset-4">
            Show All Filters
          </button>
        </div>

        {/* Results Area: Empty state placeholder */}
        <div className="bg-white dark:bg-[#1e293b]/10 border border-slate-200 dark:border-slate-800 rounded-[3rem] p-20 md:p-32 text-center space-y-8 shadow-sm dark:shadow-none transition-all">
          
          {/* Magnifying Glass Icon Container */}
          <div className="w-24 h-24 bg-slate-100 dark:bg-slate-800/30 rounded-full flex items-center justify-center mx-auto border border-slate-200 dark:border-slate-800 shadow-inner">
            <FiSearch size={40} className="text-slate-300 dark:text-slate-700" />
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-black tracking-tighter text-slate-800 dark:text-slate-300 uppercase">
              No therapists found
            </h2>
            <p className="text-slate-500 dark:text-slate-500 text-sm font-medium max-w-xs mx-auto leading-relaxed">
              We couldn't find any professionals matching your current criteria. Try adjusting your filters.
            </p>
          </div>

          {/* Reset Action */}
          <button className="px-10 py-4 bg-slate-900 dark:bg-slate-800 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-teal-600 transition-all active:scale-95 shadow-xl shadow-slate-900/10">
            Clear All Filters
          </button>
        </div>

      </div>
    </div>
  );
};

export default FindTherapist;