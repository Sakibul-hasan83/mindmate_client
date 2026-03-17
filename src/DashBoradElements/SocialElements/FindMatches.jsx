import React from 'react';
import { FiUserPlus, FiEye, FiSearch, FiMail, FiCheckCircle, FiActivity } from 'react-icons/fi';

const FindMatches = () => {
  const users = [
    { name: 'Ammar Bin Anwar Fuad', initial: 'AB', match: '95%', sub: 'CUB', bio: 'Mindfulness enthusiast' },
    { name: 'Sakib Ahmed', initial: 'SA', match: '88%', sub: 'MindMate HQ', bio: 'Here to support!' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0b1120] text-slate-900 dark:text-slate-100 p-6 md:p-10 transition-colors">
      <div className="max-w-6xl mx-auto space-y-8">
        <header className="space-y-1">
          <h1 className="text-3xl font-black tracking-tight">Find Your Match</h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Connect with supportive peers on the same journey.</p>
        </header>

        <div className="flex flex-wrap gap-3">
          <button className="flex items-center gap-2 px-6 py-2.5 bg-teal-600 text-white rounded-xl text-xs font-black uppercase tracking-widest shadow-lg shadow-teal-500/20">
            <FiSearch /> Discover
          </button>
          {['Requests', 'Sent', 'Connections'].map((tab) => (
            <button key={tab} className="px-6 py-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-800 rounded-xl text-xs font-bold text-slate-500 dark:text-slate-400 hover:text-teal-500 transition-all">
              {tab}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {users.map((user, index) => (
            <div key={index} className="bg-white dark:bg-[#1e293b]/30 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] p-8 flex flex-col items-center text-center space-y-4 hover:border-teal-500/50 transition-all shadow-sm dark:shadow-none">
              <div className="w-24 h-24 rounded-[2rem] bg-teal-500/10 border-4 border-white dark:border-[#0b1120] flex items-center justify-center text-teal-600 dark:text-teal-400 text-3xl font-black shadow-xl">
                {user.initial}
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-lg">{user.name}</h3>
                <p className="text-[10px] text-slate-400 dark:text-slate-500 font-black uppercase tracking-[0.2em]">{user.sub}</p>
                <div className="pt-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-teal-500/10 text-teal-600 dark:text-teal-400 rounded-full text-[10px] font-black border border-teal-500/20">
                    <FiActivity size={12} /> {user.match} Match
                  </span>
                </div>
              </div>
              <div className="flex w-full gap-3 pt-4">
                <button className="flex-1 py-3 border border-slate-200 dark:border-slate-700 rounded-xl text-[11px] font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">Profile</button>
                <button className="flex-1 py-3 bg-teal-600 dark:bg-teal-500 text-white dark:text-[#0b1120] rounded-xl text-[11px] font-black uppercase tracking-widest shadow-lg shadow-teal-500/10">Connect</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FindMatches;