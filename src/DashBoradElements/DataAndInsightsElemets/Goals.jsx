import React, { useState } from 'react';
import { FiPlus, FiTarget, FiTrendingUp, FiZap, FiAward, FiX, FiSmile, FiUsers, FiStar } from 'react-icons/fi';

const Goals = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    /* Adaptive background: Light mode white, Dark mode specific dark tone */
    <div className="min-h-screen bg-white dark:bg-[#0b1120] text-slate-900 dark:text-white p-6 md:p-10 font-sans transition-colors duration-300 selection:bg-teal-500/30">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Header Section */}
        <div className="flex justify-between items-start">
          <div className="space-y-1">
            <h1 className="text-3xl font-bold tracking-tight">Goals & Habits</h1>
            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Track your progress and build better habits</p>
          </div>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-[#14b8a6] hover:bg-[#0d9488] text-white px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 transition-all active:scale-95 shadow-lg shadow-teal-500/20"
          >
            <FiPlus size={18} strokeWidth={3} /> New Goal
          </button>
        </div>

        {/* Top Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard label="Active Goals" value="0" icon={<FiTarget />} />
          <StatCard label="Completed" value="0" icon={<FiTrendingUp />} />
          <StatCard label="Current Streak" value="0 🔥" icon={<FiZap />} />
          <StatCard label="Milestones" value="0" icon={<FiAward />} />
        </div>

        {/* Suggested Goals Container */}
        <div className="bg-slate-100 dark:bg-[#1e293b]/30 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 transition-colors">
          <div className="flex items-center gap-2 mb-6 text-[#14b8a6]">
            <FiZap strokeWidth={2.5} />
            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-600 dark:text-slate-300">Suggested Goals for You</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <SuggestedGoal 
              title="10 Minutes of Meditation" 
              desc="Practice daily meditation for mental clarity"
              tip="Regular meditation reduces stress and improves focus"
              target="21" freq="Daily"
            />
            <SuggestedGoal 
              title="Weekly Wellness Activities" 
              desc="Complete 3 wellness activities per week"
              tip="Consistent wellness practice builds resilience"
              target="12" freq="Weekly"
            />
          </div>
        </div>

        {/* Tabs & Empty State */}
        <div className="space-y-6">
          <div className="flex gap-2">
            <button className="bg-[#14b8a6] text-white px-4 py-1.5 rounded-lg text-xs font-bold">Active</button>
            <button className="bg-slate-200 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400 px-4 py-1.5 rounded-lg text-xs font-bold hover:bg-slate-300 dark:hover:bg-slate-800 transition-colors">Completed</button>
            <button className="bg-slate-200 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400 px-4 py-1.5 rounded-lg text-xs font-bold hover:bg-slate-300 dark:hover:bg-slate-800 transition-colors">Paused</button>
          </div>

          <div className="bg-slate-100 dark:bg-[#1e293b]/20 border border-slate-200 dark:border-slate-800 border-dashed rounded-3xl py-20 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-slate-200 dark:bg-slate-800/50 rounded-full flex items-center justify-center text-slate-400 mb-4">
              <FiTarget size={32} />
            </div>
            <h2 className="text-xl font-bold mb-2">No Active Goals</h2>
            <p className="text-slate-500 text-sm max-w-xs mb-8">Create your first goal to start building better habits</p>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-[#14b8a6] text-white px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-[#0d9488] transition-colors"
            >
              + Create Goal
            </button>
          </div>
        </div>
      </div>

      {/* --- Create Goal Modal --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsModalOpen(false)} />
          
          <div className="relative bg-white dark:bg-[#1e293b] w-full max-w-xl rounded-[2rem] overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-700 animate-in zoom-in duration-300">
            {/* Modal Header */}
            <div className="bg-[#14b8a6] p-6 flex justify-between items-center text-white">
              <div className="space-y-0.5">
                <h2 className="text-xl font-black">Create New Goal</h2>
                <p className="text-xs font-bold opacity-80 uppercase tracking-tighter">Set a goal and track your progress</p>
              </div>
              <button onClick={() => setIsModalOpen(false)} className="p-2 hover:bg-black/10 rounded-full transition-colors">
                <FiX size={24} strokeWidth={3} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-8 space-y-6 max-h-[70vh] overflow-y-auto custom-scrollbar bg-white dark:bg-[#1e293b]">
              <div>
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.1em] mb-2 block">Goal Title *</label>
                <input type="text" placeholder="e.g., Meditate daily" className="w-full bg-slate-100 dark:bg-[#0b1120] border border-slate-200 dark:border-slate-800 rounded-xl p-3.5 text-sm focus:border-teal-500 outline-none transition-all" />
              </div>

              <div>
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.1em] mb-2 block">Description</label>
                <textarea rows="3" placeholder="What do you want to achieve?" className="w-full bg-slate-100 dark:bg-[#0b1120] border border-slate-200 dark:border-slate-800 rounded-xl p-3.5 text-sm focus:border-teal-500 outline-none transition-all resize-none" />
              </div>

              {/* Goal Type Grid */}
              <div className="space-y-3">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.1em] block">Goal Type *</label>
                <div className="grid grid-cols-3 gap-3">
                  <TypeBox icon={<FiTarget />} label="Meditation" />
                  <TypeBox icon={<FiSmile />} label="Mood Tracking" />
                  <TypeBox icon={<FiUsers />} label="Social Connection" />
                  <TypeBox icon={<FiStar />} label="Wellness" />
                  <TypeBox icon={<FiPlus />} label="Journaling" />
                  <TypeBox icon={<FiTarget />} label="Custom" active />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 pt-4">
                <button onClick={() => setIsModalOpen(false)} className="flex-1 py-4 font-black text-[#14b8a6] border-2 border-[#14b8a6]/20 rounded-2xl hover:bg-[#14b8a6]/5 transition-all">Cancel</button>
                <button className="flex-1 py-4 font-black bg-[#14b8a6] text-white rounded-2xl hover:bg-[#0d9488] shadow-lg shadow-teal-500/20 transition-all">Create Goal</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

/* --- UI Parts --- */
const StatCard = ({ label, value, icon }) => (
  <div className="bg-[#14b8a6] p-5 rounded-2xl text-white flex flex-col justify-between h-32 shadow-lg shadow-teal-500/10">
    <div className="flex justify-between items-start">
      <span className="text-[10px] font-black uppercase tracking-wider opacity-80">{label}</span>
      <span className="text-lg opacity-80">{icon}</span>
    </div>
    <div className="text-4xl font-black">{value}</div>
  </div>
);

const SuggestedGoal = ({ title, desc, tip, target, freq }) => (
  <div className="bg-white dark:bg-[#0b1120] border border-slate-200 dark:border-slate-800 p-5 rounded-2xl hover:border-teal-500/50 transition-all group">
    <h4 className="font-bold text-sm mb-1">{title}</h4>
    <p className="text-slate-500 text-[11px] mb-3 leading-relaxed">{desc}</p>
    <div className="bg-teal-500/5 border border-teal-500/10 p-2 rounded-lg mb-4 flex items-center gap-2">
      <FiStar size={12} className="text-[#14b8a6]" />
      <span className="text-[10px] font-bold text-[#14b8a6]">{tip}</span>
    </div>
    <div className="flex justify-between items-center text-[10px] font-black text-slate-500 mb-4 uppercase">
      <span>{freq}</span>
      <span>Target: {target}</span>
    </div>
    <button className="w-full py-2.5 bg-[#14b8a6] text-white rounded-xl text-xs font-black hover:bg-[#0d9488] transition-all">
      + Use This Goal
    </button>
  </div>
);

const TypeBox = ({ icon, label, active }) => (
  <div className={`flex flex-col items-center justify-center p-4 rounded-2xl border-2 transition-all cursor-pointer ${active ? 'border-[#14b8a6] bg-[#14b8a6]/5 text-[#14b8a6]' : 'border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-600 hover:text-slate-400'}`}>
    <span className="text-xl mb-2">{icon}</span>
    <span className="text-[9px] font-black uppercase tracking-tighter text-center">{label}</span>
  </div>
);

export default Goals;