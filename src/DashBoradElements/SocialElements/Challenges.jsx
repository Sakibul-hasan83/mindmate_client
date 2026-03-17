import React from 'react';
import { FiAward, FiCalendar, FiActivity, FiStar } from 'react-icons/fi';

const Challenges = () => {
  const challenges = [
    { title: '7 Day Mindfulness Challenge', category: 'Mindfulness', diff: 'advanced', type: 'weekly', duration: '7d', points: '100' },
    { title: 'Sleep Well Series', category: 'Health', diff: 'beginner', type: 'custom', duration: '7d', points: '100' },
    { title: 'Daily Gratitude', category: 'Mindfulness', diff: 'beginner', type: 'weekly', duration: '7d', points: '100' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0b1120] text-slate-900 dark:text-slate-100 p-6 md:p-10 transition-colors">
      <div className="max-w-5xl mx-auto text-center space-y-10">
        <header className="space-y-4">
          <FiAward className="mx-auto text-6xl text-teal-600 dark:text-teal-400" />
          <h1 className="text-4xl font-black">Wellness Challenges</h1>
          <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto">Transform your life one challenge at a time.</p>
          <div className="flex justify-center flex-wrap gap-2 pt-4">
            {['All Challenges', '30 Day', 'Group', 'Weekly'].map((t, i) => (
              <button key={i} className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${i===0 ? 'bg-teal-500 text-white shadow-lg' : 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-500'}`}>{t}</button>
            ))}
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {challenges.map((c, i) => (
            <div key={i} className="bg-white dark:bg-[#1e293b]/40 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] overflow-hidden hover:border-teal-500 transition-all shadow-sm dark:shadow-none group">
              <div className="p-8 space-y-4">
                <FiAward className="mx-auto text-3xl text-slate-400 dark:text-slate-500" />
                <p className="text-[10px] uppercase font-black text-slate-400 dark:text-slate-500 tracking-widest">{c.category}</p>
                <div className="flex justify-center gap-2">
                   <span className="px-2 py-0.5 bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-[10px] rounded-md font-bold uppercase">{c.diff}</span>
                   <span className="px-2 py-0.5 bg-blue-100 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 text-[10px] rounded-md font-bold uppercase">{c.type}</span>
                </div>
                <h3 className="font-bold text-lg">{c.title}</h3>
                <div className="grid grid-cols-3 gap-2 py-4 border-y border-slate-100 dark:border-slate-800">
                   <div><p className="text-[10px] text-slate-400 uppercase font-bold">Duration</p><p className="font-bold text-sm text-teal-600 dark:text-teal-400">{c.duration}</p></div>
                   <div><p className="text-[10px] text-slate-400 uppercase font-bold">Joined</p><p className="font-bold text-sm">24</p></div>
                   <div><p className="text-[10px] text-slate-400 uppercase font-bold">Points</p><p className="font-bold text-sm text-amber-500">{c.points}</p></div>
                </div>
                <button className="w-full py-3 bg-slate-900 dark:bg-teal-500 text-white dark:text-[#0b1120] rounded-xl font-black text-xs uppercase tracking-widest hover:opacity-90 transition-all">Join Challenge</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Challenges;