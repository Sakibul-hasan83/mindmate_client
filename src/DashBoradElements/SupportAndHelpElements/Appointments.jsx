import React from 'react';
import { FiCalendar, FiShare2 } from 'react-icons/fi';

const Appointments = () => {
  return (
    // Main Container: Slate-50 for light mode, Original Deep Blue for dark mode
    <div className="min-h-screen bg-slate-50 dark:bg-[#0b1120] text-slate-900 dark:text-slate-100 p-6 md:p-10 transition-colors duration-300">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Header Section */}
        <header className="space-y-2">
          <h1 className="text-3xl font-black flex items-center gap-3">
            <FiCalendar className="text-teal-600 dark:text-teal-400" /> My Appointments
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Manage your therapy sessions</p>
        </header>

        {/* Tab Navigation */}
        <div className="border-b border-slate-200 dark:border-slate-800">
          <div className="flex gap-8">
            <button className="pb-4 text-teal-600 dark:text-teal-400 border-b-2 border-teal-600 dark:border-teal-400 font-bold text-sm">
              Upcoming
            </button>
            <button className="pb-4 text-slate-400 dark:text-slate-500 font-bold text-sm hover:text-teal-600 dark:hover:text-slate-300 transition-colors">
              All Appointments
            </button>
          </div>
        </div>

        {/* Empty State Card: White with shadow in light mode, Navy Blue in dark mode */}
        <div className="bg-white dark:bg-[#1e293b]/20 border border-slate-200 dark:border-slate-800 rounded-[3rem] p-16 text-center space-y-6 shadow-sm dark:shadow-none">
          <div className="w-16 h-16 bg-slate-100 dark:bg-slate-800/50 rounded-2xl flex items-center justify-center mx-auto border border-slate-200 dark:border-slate-700">
            <FiCalendar size={32} className="text-slate-400 dark:text-slate-600" />
          </div>
          <div className="space-y-1">
            <h2 className="text-2xl font-black uppercase tracking-tighter">No appointments</h2>
            <p className="text-slate-500 dark:text-slate-500 text-sm font-medium">You don't have any appointments scheduled yet</p>
          </div>
          <button className="px-8 py-3 bg-teal-600 dark:bg-teal-500 text-white dark:text-[#0b1120] rounded-xl font-black text-xs uppercase tracking-widest shadow-lg shadow-teal-500/20 hover:scale-105 transition-all">
            Find a Therapist
          </button>
        </div>

        {/* Share Section: Responsive layout with theme-aware buttons */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-10 border-t border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-teal-100 dark:bg-teal-500/10 rounded-lg">
              <FiShare2 className="text-teal-600 dark:text-teal-400" />
            </div>
            <span className="font-bold text-lg tracking-tight">Share Progress with Therapist</span>
          </div>
          <div className="flex gap-3 w-full md:w-auto">
            <button className="flex-1 md:flex-none px-6 py-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 rounded-xl font-bold text-xs hover:bg-slate-50 dark:hover:bg-slate-700 transition-all">
              My Shared Links
            </button>
            <button className="flex-1 md:flex-none px-6 py-2.5 bg-teal-600/10 dark:bg-teal-600/20 text-teal-600 dark:text-teal-400 border border-teal-200 dark:border-teal-500/30 hover:bg-teal-600 hover:text-white rounded-xl font-bold text-xs transition-all flex items-center justify-center gap-2">
              <FiShare2 size={14} /> Share Progress
            </button>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Appointments;