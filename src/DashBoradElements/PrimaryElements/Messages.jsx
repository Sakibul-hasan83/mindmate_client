import React from 'react';
import { FiMessageSquare, FiUsers, FiSearch } from 'react-icons/fi';

const Messages = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0f172a] transition-colors duration-300">
      {/* Responsive Container */}
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12 space-y-8">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-slate-800 dark:text-white tracking-tight">Messages</h1>
            <p className="text-slate-500 dark:text-gray-400 mt-1 font-medium">
              Connect and chat with your supportive community
            </p>
          </div>
          
          {/* Search bar */}
          <div className="relative w-full md:w-64">
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search conversations..." 
              className="w-full pl-10 pr-4 py-2 bg-slate-50 dark:bg-gray-800 border border-slate-200 dark:border-gray-700 rounded-xl text-sm outline-none focus:border-teal-500 transition-all text-slate-700 dark:text-white"
            />
          </div>
        </div>

        {/* Main Content Area: Centered Empty State (Matches message.png) */}
        <div className="flex flex-col items-center justify-center min-h-[450px] bg-slate-50/50 dark:bg-[#1e293b]/30 border border-slate-200 dark:border-gray-800 rounded-3xl p-8 text-center transition-all">
          
          {/* Icon Container */}
          <div className="relative mb-8">
            <div className="w-20 h-20 bg-teal-500/10 rounded-full flex items-center justify-center animate-pulse">
              <FiMessageSquare className="text-4xl text-teal-500" />
            </div>
          </div>
          
          {/* Text Content */}
          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-3">
            No Connections Yet
          </h2>
          <p className="text-slate-500 dark:text-gray-400 max-w-sm mb-10 leading-relaxed font-medium">
            You need to connect with someone before you can send messages. Start by finding people with similar interests.
          </p>

          {/* Action Button */}
          <button className="flex items-center gap-3 px-10 py-4 rounded-2xl bg-teal-500 hover:bg-teal-600 text-white font-bold transition-all shadow-xl shadow-teal-500/25 active:scale-95 group">
            <FiUsers className="text-xl group-hover:rotate-12 transition-transform" />
            Find Matches
          </button>
        </div>

        {/* Footer Info Tips */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          <div className="p-4 bg-slate-50 dark:bg-gray-800/40 rounded-2xl border border-slate-100 dark:border-gray-800">
            <h4 className="text-teal-500 font-bold text-xs uppercase tracking-widest mb-2">Privacy First</h4>
            <p className="text-[11px] text-slate-500 dark:text-gray-500 leading-relaxed">Your conversations are end-to-end encrypted and completely private.</p>
          </div>
          <div className="p-4 bg-slate-50 dark:bg-gray-800/40 rounded-2xl border border-slate-100 dark:border-gray-800">
            <h4 className="text-teal-500 font-bold text-xs uppercase tracking-widest mb-2">Safety Policy</h4>
            <p className="text-[11px] text-slate-500 dark:text-gray-500 leading-relaxed">Report any suspicious activity instantly to keep our community safe.</p>
          </div>
          <div className="p-4 bg-slate-50 dark:bg-gray-800/40 rounded-2xl border border-slate-100 dark:border-gray-800">
            <h4 className="text-teal-500 font-bold text-xs uppercase tracking-widest mb-2">Match Logic</h4>
            <p className="text-[11px] text-slate-500 dark:text-gray-500 leading-relaxed">Our AI suggests peers based on shared wellness goals and interests.</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Messages;