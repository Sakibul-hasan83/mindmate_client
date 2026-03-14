import React from 'react';
import { FiAward, FiTarget, FiZap, FiStar, FiChevronRight } from 'react-icons/fi';

const Rewards = () => {
  return (
    /* Adaptive background: Light mode white, Dark mode #0b1120 */
    <div className="min-h-screen bg-white dark:bg-[#0b1120] text-slate-900 dark:text-white p-6 md:p-10 font-sans transition-colors duration-300">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Header Section */}
        <div className="space-y-1">
          <h1 className="text-3xl font-bold tracking-tight">Gamification Hub</h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Level up, unlock badges, and complete challenges!</p>
        </div>

        {/* Level Progress Section - Responsive Grid */}
        <div className="bg-slate-100 dark:bg-[#1e293b]/30 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 transition-colors">
          <div className="flex justify-between items-end mb-2">
            <div>
              <h2 className="text-xl font-bold">Level 1</h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">0 / 100 XP</p>
            </div>
            <span className="text-sm font-bold text-slate-400">Total XP Earned: 0</span>
          </div>
          <div className="w-full bg-slate-200 dark:bg-slate-800 rounded-full h-2.5 mb-6">
            <div className="bg-[#14b8a6] h-2.5 rounded-full" style={{ width: '0%' }}></div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <StatItem icon={<FiAward />} label="Badges" value="0" />
            <StatItem icon={<FiTarget />} label="Challenges" value="0" />
            <StatItem icon={<FiZap />} label="Day Streak" value="0" />
            <StatItem icon={<FiStar />} label="Best Streak" value="0" />
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 border-b border-slate-200 dark:border-slate-800 pb-2">
          <button className="px-4 py-2 text-sm font-bold text-[#14b8a6] border-b-2 border-[#14b8a6]">Challenges</button>
          <button className="px-4 py-2 text-sm font-bold text-slate-400">Badges</button>
          <button className="px-4 py-2 text-sm font-bold text-slate-400">Leaderboard</button>
        </div>

        {/* Challenges Grid - Responsive: 1 column on mobile, 3 on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ChallengeCard title="Weekly Warrior" desc="Log mood every day this week" progress="0/7" xp="+150 XP" freq="WEEKLY" />
          <ChallengeCard title="Wellness Week" desc="Complete 10 wellness activities" progress="0/10" xp="+200 XP" freq="WEEKLY" />
          <ChallengeCard title="Goal Getter" desc="Complete 5 goals this week" progress="0/5" xp="+250 XP" freq="WEEKLY" />
        </div>
      </div>
    </div>
  );
};

/* --- Helper Components --- */
const StatItem = ({ icon, label, value }) => (
  <div className="flex flex-col items-center gap-1">
    <div className="text-[#14b8a6] text-xl">{icon}</div>
    <div className="text-xl font-black">{value}</div>
    <div className="text-[10px] uppercase font-bold text-slate-500 dark:text-slate-400">{label}</div>
  </div>
);

const ChallengeCard = ({ title, desc, progress, xp, freq }) => (
  <div className="bg-white dark:bg-[#1e293b]/30 border border-slate-200 dark:border-slate-800 p-5 rounded-2xl space-y-4 transition-colors">
    <div className="flex justify-between items-start">
      <div>
        <h4 className="font-bold">{title}</h4>
        <p className="text-xs text-slate-500 dark:text-slate-400">{desc}</p>
      </div>
      <span className="bg-[#14b8a6]/10 text-[#14b8a6] text-[10px] font-black px-2 py-1 rounded">{freq}</span>
    </div>
    <div className="w-full bg-slate-200 dark:bg-slate-800 rounded-full h-2">
      <div className="bg-[#14b8a6] h-2 rounded-full" style={{ width: '20%' }}></div>
    </div>
    <div className="flex justify-between items-center">
      <span className="text-xs font-bold text-slate-400">{progress}</span>
      <span className="text-xs font-bold text-[#14b8a6]">{xp}</span>
    </div>
    <button className="w-full bg-[#14b8a6]/10 text-[#14b8a6] py-2 rounded-xl text-xs font-bold hover:bg-[#14b8a6] hover:text-white transition-all">
      Start Activity <FiChevronRight className="inline" />
    </button>
  </div>
);

export default Rewards;