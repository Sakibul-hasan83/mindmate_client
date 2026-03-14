import React from 'react';
import { FiAward, FiArrowRight, FiActivity, FiCheckCircle } from 'react-icons/fi';

const Progress = () => {

  const hasData = false;

  return (
    <div className="min-h-screen bg-white dark:bg-[#0f172a] text-slate-900 dark:text-white p-4 md:p-8 transition-colors duration-300">
      <div className="max-w-5xl mx-auto space-y-8">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Wellness Progress</h1>
            <p className="text-slate-500 dark:text-gray-400 mt-1 font-medium">Track your journey to a healthier mind</p>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-emerald-500/10 text-emerald-500 rounded-xl border border-emerald-500/20">
            <FiActivity />
            <span className="text-xs font-bold uppercase tracking-wider">Live Tracking</span>
          </div>
        </div>

        {/* Main Content Area */}
        {!hasData ? (
          /* Empty State - Exactly matching progress.png */
          <div className="flex flex-col items-center justify-center min-h-[400px] bg-slate-50/50 dark:bg-[#1e293b]/30 border border-slate-200 dark:border-gray-800 rounded-3xl p-8 text-center transition-all">
            <div className="mb-6 text-slate-400 dark:text-gray-600">
              <FiAward size={80} strokeWidth={1} className="opacity-50" />
            </div>
            
            <h2 className="text-2xl font-bold mb-2">Start Your Wellness Journey</h2>
            <p className="text-slate-500 dark:text-gray-400 max-w-sm mb-10 font-medium">
              Complete activities to track your progress and earn achievements along the way.
            </p>

            <button className="flex items-center gap-3 px-10 py-4 rounded-2xl bg-teal-500 hover:bg-teal-600 text-white font-bold transition-all shadow-xl shadow-teal-500/25 active:scale-95 group">
              Browse Activities
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        ) : (
          /* Progress Dashboard (When data exists) */
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ProgressCard title="Daily Streak" value="5 Days" progress={70} />
            <ProgressCard title="Tasks Done" value="12/20" progress={60} />
            <ProgressCard title="Wellness Score" value="85" progress={85} />
          </div>
        )}

        {/* Weekly Stats Section (Extra value for dashboard) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <SmallStat label="Milestones" value="0" icon={<FiAward className="text-yellow-500" />} />
          <SmallStat label="Completed" value="0%" icon={<FiCheckCircle className="text-emerald-500" />} />
          <SmallStat label="Activities" value="None" icon={<FiActivity className="text-blue-500" />} />
          <SmallStat label="Last Update" value="Just now" icon={<FiCheckCircle className="text-purple-500" />} />
        </div>

      </div>
    </div>
  );
};

/* --- Helper Components --- */
const ProgressCard = ({ title, value, progress }) => (
  <div className="bg-slate-50 dark:bg-[#1e293b]/50 p-6 rounded-3xl border border-slate-200 dark:border-gray-800">
    <h3 className="text-sm font-bold text-slate-500 dark:text-gray-400 uppercase tracking-widest">{title}</h3>
    <div className="text-3xl font-black mt-2 mb-4">{value}</div>
    <div className="w-full bg-slate-200 dark:bg-gray-700 h-2 rounded-full overflow-hidden">
      <div className="bg-teal-500 h-full rounded-full transition-all duration-1000" style={{ width: `${progress}%` }}></div>
    </div>
  </div>
);

const SmallStat = ({ label, value, icon }) => (
  <div className="flex items-center gap-4 bg-white dark:bg-[#1e293b] p-4 rounded-2xl border border-slate-200 dark:border-gray-800 shadow-sm hover:border-teal-500/30 transition-all cursor-default">
    <div className="text-xl p-3 bg-slate-50 dark:bg-gray-800 rounded-xl">{icon}</div>
    <div>
      <div className="text-xs font-bold text-slate-400 uppercase tracking-tighter">{label}</div>
      <div className="text-sm font-bold dark:text-white">{value}</div>
    </div>
  </div>
);

export default Progress;