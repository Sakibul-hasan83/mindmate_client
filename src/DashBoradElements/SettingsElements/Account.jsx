import React from 'react';
import { FiUser, FiLock, FiBell, FiMail, FiCalendar, FiSave, FiLogOut, FiTrash2 } from 'react-icons/fi';

const Account = () => {
  return (
    // Main Container: Slate-50 for light mode, Deep Blue for dark mode
    <div className="min-h-screen bg-slate-50 dark:bg-[#0b1120] text-slate-900 dark:text-slate-100 p-6 md:p-10 transition-colors duration-300">
      <div className="max-w-4xl mx-auto space-y-10">
        
        {/* Header Section */}
        <header className="space-y-2">
          <h1 className="text-4xl font-black tracking-tight">Account Settings</h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Manage your account, privacy, and notification preferences</p>
        </header>

        {/* Tab Navigation: Theme-aware tabs with clean borders */}
        <div className="flex gap-8 border-b border-slate-200 dark:border-slate-800 text-xs font-black uppercase tracking-widest">
          <button className="pb-4 text-teal-600 dark:text-teal-400 border-b-2 border-teal-600 dark:border-teal-400 flex items-center gap-2">
            <FiUser size={16}/> Account
          </button>
          <button className="pb-4 text-slate-400 dark:text-slate-500 hover:text-teal-600 dark:hover:text-slate-300 flex items-center gap-2 transition-colors">
            <FiLock size={16}/> Privacy
          </button>
          <button className="pb-4 text-slate-400 dark:text-slate-500 hover:text-teal-600 dark:hover:text-slate-300 flex items-center gap-2 transition-colors">
            <FiBell size={16}/> Notifications
          </button>
        </div>

        {/* Account Info Section */}
        <section className="space-y-5">
          <h2 className="text-xl font-black tracking-tight">Account Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white dark:bg-[#1e293b]/30 border border-slate-200 dark:border-slate-800 p-5 rounded-2xl flex justify-between items-center shadow-sm dark:shadow-none">
              <div>
                <p className="text-[10px] uppercase font-black text-slate-400 dark:text-slate-500 tracking-[0.2em]">Email Address</p>
                <p className="text-sm font-bold mt-1">sakibvai80@gmail.com</p>
              </div>
              <FiMail className="text-slate-300 dark:text-slate-600" size={20} />
            </div>
            <div className="bg-white dark:bg-[#1e293b]/30 border border-slate-200 dark:border-slate-800 p-5 rounded-2xl flex justify-between items-center shadow-sm dark:shadow-none">
              <div>
                <p className="text-[10px] uppercase font-black text-slate-400 dark:text-slate-500 tracking-[0.2em]">Account Created</p>
                <p className="text-sm font-bold mt-1">March 17, 2026</p>
              </div>
              <FiCalendar className="text-slate-300 dark:text-slate-600" size={20} />
            </div>
          </div>
        </section>

        {/* Preferences Section: Clean list with custom checkboxes */}
        <section className="space-y-5">
          <h2 className="text-xl font-black tracking-tight">Preferences</h2>
          <div className="bg-white dark:bg-[#1e293b]/20 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] p-8 space-y-6 shadow-sm dark:shadow-none">
            {[
              { label: 'Enable Notifications', desc: 'Receive real-time activity updates', id: 'notif' },
              { label: 'Public Profile', desc: 'Allow others to see your progress', id: 'pub' },
              { label: 'Share Usage Data', desc: 'Help us improve with anonymous data', id: 'data' },
            ].map((item) => (
              <div key={item.id} className="flex justify-between items-center pb-6 border-b border-slate-100 dark:border-slate-800 last:border-0 last:pb-0">
                <div className="space-y-1">
                  <h4 className="text-sm font-black uppercase tracking-tight">{item.label}</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-500 font-medium">{item.desc}</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" defaultChecked className="sr-only peer" />
                  <div className="w-11 h-6 bg-slate-200 dark:bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-teal-500"></div>
                </label>
              </div>
            ))}
            <button className="w-full py-4 bg-teal-600 dark:bg-teal-500 hover:bg-teal-700 dark:hover:bg-teal-400 text-white dark:text-[#0b1120] font-black rounded-2xl text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-2 transition-all shadow-lg shadow-teal-500/20 active:scale-95">
              <FiSave size={16}/> Save Preferences
            </button>
          </div>
        </section>

        {/* Danger Zone: High contrast section for critical actions */}
        <section className="space-y-5">
          <h2 className="text-xl font-black text-red-600 dark:text-red-500 tracking-tight">Danger Zone</h2>
          <div className="bg-white dark:bg-transparent border border-red-200 dark:border-red-500/20 rounded-[2rem] overflow-hidden shadow-sm dark:shadow-none">
             <div className="p-6 flex flex-col sm:flex-row justify-between items-center gap-4">
                <div className="text-center sm:text-left">
                  <h4 className="text-sm font-black uppercase tracking-tight">Log Out</h4>
                  <p className="text-xs font-medium text-slate-500 mt-1">Sign out of your current session safely</p>
                </div>
                <button className="w-full sm:w-auto px-8 py-3 bg-slate-100 dark:bg-teal-500/10 text-slate-900 dark:text-teal-400 border border-slate-200 dark:border-transparent rounded-xl text-xs font-black uppercase tracking-widest hover:bg-slate-900 hover:text-white dark:hover:bg-teal-500 transition-all">
                  <FiLogOut /> Log Out
                </button>
             </div>
             <div className="bg-red-50 dark:bg-red-500/5 p-6 flex flex-col sm:flex-row justify-between items-center gap-4 border-t border-red-100 dark:border-red-500/10">
                <div className="text-center sm:text-left">
                  <h4 className="text-sm font-black text-red-600 uppercase tracking-tight">Delete Account</h4>
                  <p className="text-xs font-medium text-red-400 mt-1">This action is permanent and cannot be undone</p>
                </div>
                <button className="w-full sm:w-auto px-8 py-3 bg-red-600 text-white rounded-xl text-xs font-black uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-red-700 transition-all shadow-xl shadow-red-600/20">
                  <FiTrash2 /> Delete Forever
                </button>
             </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Account;