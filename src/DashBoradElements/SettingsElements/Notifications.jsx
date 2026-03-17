import React from 'react';
import { FiBell, FiSettings, FiFilter, FiClock, FiVolumeX, FiSend } from 'react-icons/fi';

const Notifications = () => {
  return (
    // Main Container: Slate-50 for light mode, Deep Blue for dark mode
    <div className="min-h-screen bg-slate-50 dark:bg-[#0b1120] text-slate-900 dark:text-slate-100 p-6 md:p-10 transition-colors duration-300">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Header Section */}
        <header className="flex items-center gap-4">
          <div className="w-14 h-14 bg-teal-100 dark:bg-teal-500/10 rounded-[1.2rem] flex items-center justify-center text-teal-600 dark:text-teal-400 shadow-sm">
            <FiBell size={28} />
          </div>
          <div>
            <h1 className="text-3xl font-black tracking-tight">Notifications</h1>
            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Manage your alerts and schedules</p>
          </div>
        </header>

        {/* Navigation Tabs */}
        <div className="flex gap-3">
          <button className="px-5 py-2.5 bg-teal-600 dark:bg-teal-500 text-white dark:text-[#0b1120] rounded-xl text-xs font-black uppercase tracking-widest flex items-center gap-2 shadow-lg shadow-teal-500/20">
            <FiBell size={14}/> Notifications
          </button>
          <button className="px-5 py-2.5 bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700 rounded-xl text-xs font-black uppercase tracking-widest flex items-center gap-2 hover:bg-slate-100 dark:hover:bg-slate-700 transition-all">
            <FiSettings size={14}/> Settings
          </button>
        </div>

        {/* Filters Bar */}
        <div className="bg-white dark:bg-[#1e293b]/40 border border-slate-200 dark:border-slate-800 rounded-2xl p-3 flex gap-2 shadow-sm dark:shadow-none">
          <button className="p-2 text-slate-400 hover:text-teal-500 transition-colors"><FiFilter size={18}/></button>
          <button className="px-5 py-2 bg-slate-900 dark:bg-slate-800 text-white rounded-xl text-[10px] font-black uppercase tracking-widest">All</button>
          <button className="px-5 py-2 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all">Unread</button>
        </div>

        {/* Main Settings Card */}
        <div className="bg-white dark:bg-[#1e293b]/20 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] p-8 md:p-10 space-y-10 shadow-sm dark:shadow-none">
          
          {/* Notification Schedule Section */}
          <div className="space-y-6">
            <h3 className="flex items-center gap-2 text-teal-600 dark:text-teal-400 font-black uppercase text-xs tracking-[0.2em]"><FiClock /> Notification Schedule</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1">Reminder Type</label>
                  <select className="w-full bg-slate-50 dark:bg-[#0b1120] border border-slate-200 dark:border-slate-800 p-4 rounded-2xl text-sm font-bold focus:ring-2 ring-teal-500/20 outline-none appearance-none cursor-pointer">
                     <option>Daily Mood Check</option>
                     <option>Medication Reminder</option>
                     <option>Journal Prompt</option>
                  </select>
               </div>
               <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1">Preferred Time</label>
                  <input type="time" defaultValue="09:00" className="w-full bg-slate-50 dark:bg-[#0b1120] border border-slate-200 dark:border-slate-800 p-4 rounded-2xl text-sm font-bold outline-none focus:ring-2 ring-teal-500/20" />
               </div>
            </div>

            <div className="space-y-2">
               <label className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1">Custom Message</label>
               <input placeholder="Leave blank for default greeting" className="w-full bg-slate-50 dark:bg-[#0b1120] border border-slate-200 dark:border-slate-800 p-4 rounded-2xl text-sm font-bold outline-none focus:ring-2 ring-teal-500/20" />
            </div>

            <div className="space-y-4">
               <p className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1">Repeat on these days</p>
               <div className="flex flex-wrap gap-2">
                  {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, i) => (
                    <button key={day} className={`w-12 h-10 rounded-xl text-[10px] font-black uppercase transition-all ${[1,2,3,4,5].includes(i) ? 'bg-teal-600 text-white shadow-md shadow-teal-500/20' : 'bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-500 hover:bg-slate-200'}`}>{day}</button>
                  ))}
               </div>
            </div>
            <button className="px-8 py-3.5 bg-teal-600 dark:bg-teal-500 text-white dark:text-[#0b1120] rounded-2xl font-black text-xs uppercase tracking-widest hover:scale-105 transition-all">+ Add New Schedule</button>
          </div>

          <hr className="border-slate-100 dark:border-slate-800" />

          {/* Quiet Hours Section */}
          <div className="space-y-6">
            <h3 className="flex items-center gap-2 text-teal-600 dark:text-teal-400 font-black uppercase text-xs tracking-[0.2em]"><FiVolumeX /> Quiet Hours</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest ml-1">Start (Sleep Mode)</p>
                  <input type="time" defaultValue="22:00" className="w-full bg-slate-50 dark:bg-[#0b1120] border border-slate-200 dark:border-slate-800 p-4 rounded-2xl text-sm font-bold outline-none" />
                </div>
                <div className="space-y-2">
                  <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest ml-1">End (Wake Mode)</p>
                  <input type="time" defaultValue="08:00" className="w-full bg-slate-50 dark:bg-[#0b1120] border border-slate-200 dark:border-slate-800 p-4 rounded-2xl text-sm font-bold outline-none" />
                </div>
            </div>
            <button className="px-8 py-3.5 bg-slate-900 dark:bg-slate-800 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-teal-600 transition-all">Save Quiet Hours</button>
          </div>

          <hr className="border-slate-100 dark:border-slate-800" />

          {/* Test System */}
          <div className="bg-green-50 dark:bg-green-500/5 border border-green-100 dark:border-green-500/20 rounded-[2rem] p-6 flex flex-col md:flex-row justify-between items-center gap-4">
             <div className="text-center md:text-left">
                <h3 className="font-black text-green-700 dark:text-green-400 text-sm uppercase tracking-tight">Test Notification System</h3>
                <p className="text-[11px] text-green-600/70 dark:text-slate-500 font-medium">Instantly send a test alert to verify your device permissions.</p>
             </div>
             <button className="px-6 py-3 bg-green-600 text-white rounded-xl font-black text-xs uppercase tracking-widest flex items-center gap-2 hover:bg-green-700 transition-all shadow-lg shadow-green-600/20">
               <FiSend /> Trigger Test
             </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;