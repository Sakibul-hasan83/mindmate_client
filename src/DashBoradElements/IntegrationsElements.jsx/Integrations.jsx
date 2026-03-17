import React from 'react';
import { FiLink, FiCheck, FiPlus, FiActivity, FiSearch, FiLayers, FiLock } from 'react-icons/fi';

const Integrations = () => {
  const integrationList = [
    { name: 'Google Fit', category: 'Health & Fitness', desc: 'Sync your physical activity and health data for personalized insights.', connected: true, color: 'text-blue-500', bg: 'bg-blue-500/10' },
    { name: 'Apple Health', category: 'Health & Fitness', desc: 'Import comprehensive health and wellness information from your iPhone.', connected: false, color: 'text-pink-500', bg: 'bg-pink-500/10' },
    { name: 'Spotify', category: 'Wellness', desc: 'Sync your focus and relaxation playlists to your mood tracking.', connected: false, color: 'text-green-500', bg: 'bg-green-500/10' },
    { name: 'Google Calendar', category: 'Productivity', desc: 'Automatically sync wellness activities and therapy with your schedule.', connected: false, color: 'text-blue-400', bg: 'bg-blue-400/10' },
    { name: 'Fitbit', category: 'Health & Fitness', desc: 'Connect your wearable for deeper sleep and activity analytics.', connected: false, color: 'text-teal-400', bg: 'bg-teal-400/10' },
  ];

  return (
    // Main Container: Slate-50 for light mode, Deep Blue for dark mode
    <div className="min-h-screen bg-slate-50 dark:bg-[#0b1120] text-slate-900 dark:text-slate-100 p-6 md:p-10 transition-colors duration-300">
      <div className="max-w-6xl mx-auto space-y-10">
        
        {/* Header Section */}
        <header className="space-y-2">
          <h1 className="text-4xl font-black tracking-tight flex items-center gap-4">
            <div className="p-3 bg-teal-600 dark:bg-teal-500 text-white dark:text-[#0b1120] rounded-2xl shadow-lg shadow-teal-500/20">
              <FiLayers size={24} />
            </div>
            App Integrations
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Connect your favorite apps and devices to personalize your MindMate experience.</p>
        </header>

        {/* Search and Filters Bar */}
        <div className="flex flex-col lg:flex-row gap-4 items-center justify-between bg-white dark:bg-[#1e293b]/30 p-5 rounded-[2rem] border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-none">
          <div className="relative w-full lg:w-96">
            <FiSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search integrations..." 
              className="w-full bg-slate-50 dark:bg-[#0b1120] border border-slate-200 dark:border-slate-800 rounded-2xl py-3 pl-14 pr-4 text-sm font-bold focus:ring-2 ring-teal-500/20 outline-none transition-all"
            />
          </div>
          <div className="flex gap-3 w-full lg:w-auto">
            <button className="flex-1 lg:flex-none px-6 py-2.5 bg-slate-900 dark:bg-teal-500 text-white dark:text-[#0b1120] rounded-xl text-xs font-black uppercase tracking-widest shadow-xl shadow-slate-900/10">All</button>
            <button className="flex-1 lg:flex-none px-6 py-2.5 bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-slate-50 transition-all">Connected</button>
          </div>
        </div>

        {/* Integrations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {integrationList.map((app, i) => (
            <div 
              key={i} 
              className="bg-white dark:bg-[#1e293b]/20 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] p-8 flex flex-col justify-between hover:border-teal-500 transition-all group shadow-sm hover:shadow-2xl dark:shadow-none hover:-translate-y-1"
            >
              <div className="space-y-5">
                <div className="flex justify-between items-start">
                  <div className={`w-16 h-16 ${app.bg} dark:bg-slate-800/80 rounded-[1.5rem] flex items-center justify-center text-3xl ${app.color} shadow-inner`}>
                    {app.name === 'Spotify' ? <FiActivity /> : <FiLink />}
                  </div>
                  {app.connected ? (
                    <span className="flex items-center gap-1.5 text-[9px] font-black text-green-600 dark:text-green-500 bg-green-50 dark:bg-green-500/10 px-4 py-1.5 rounded-full uppercase tracking-wider">
                      <FiCheck size={12} /> Connected
                    </span>
                  ) : (
                    <span className="text-[9px] font-black text-slate-400 bg-slate-100 dark:bg-slate-800 px-4 py-1.5 rounded-full uppercase tracking-wider">
                      Disconnected
                    </span>
                  )}
                </div>
                
                <div className="space-y-1">
                  <h3 className="text-2xl font-black tracking-tight">{app.name}</h3>
                  <p className="text-[10px] text-teal-600 dark:text-teal-400 font-black uppercase tracking-[0.2em]">{app.category}</p>
                </div>
                
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                  {app.desc}
                </p>
              </div>

              <div className="pt-10">
                {app.connected ? (
                  <button className="w-full py-4 border-2 border-red-100 dark:border-red-500/20 text-red-500 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-red-500 hover:text-white transition-all active:scale-95">
                    Disconnect App
                  </button>
                ) : (
                  <button className="w-full py-4 bg-teal-600 dark:bg-teal-500 hover:bg-teal-700 dark:hover:bg-teal-400 text-white dark:text-[#0b1120] rounded-2xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all shadow-lg shadow-teal-500/20 active:scale-95">
                    <FiPlus size={16} /> Connect App
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Privacy & Security Footer */}
        <div className="bg-teal-50 dark:bg-blue-500/5 border border-teal-100 dark:border-blue-500/20 rounded-[2rem] p-8 flex flex-col md:flex-row items-center justify-center gap-4 transition-all">
           <div className="w-10 h-10 bg-white dark:bg-blue-500/10 rounded-xl flex items-center justify-center text-teal-600 dark:text-blue-400 shadow-sm">
              <FiLock size={20} />
           </div>
           <p className="text-sm text-slate-600 dark:text-slate-500 font-bold text-center md:text-left max-w-2xl">
             MindMate encrypts all third-party data connections. We use the highest industry standards to ensure your wellness data stays private and secure.
           </p>
        </div>
      </div>
    </div>
  );
};

export default Integrations;