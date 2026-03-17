import React from 'react';
import { FiCamera, FiSave, FiUser, FiMail, FiMapPin, FiBookOpen, FiStar } from 'react-icons/fi';

const Profile = () => {
  return (
    // Main Container: Slate-50 for light mode, Deep Blue for dark mode
    <div className="min-h-screen bg-slate-50 dark:bg-[#0b1120] text-slate-900 dark:text-slate-100 pb-20 transition-colors duration-300">
      
      {/* Banner Section: Dynamic gradient that works for both themes */}
      <div className="relative h-64 bg-gradient-to-br from-teal-500 via-blue-600 to-indigo-700">
        <div className="absolute inset-0 bg-black/10 dark:bg-black/30"></div>
        
        {/* Profile Avatar & Identity Overlay */}
        <div className="absolute -bottom-20 left-6 md:left-12 flex flex-col md:flex-row items-end gap-6">
          <div className="relative group">
            <div className="w-36 h-36 md:w-44 md:h-44 rounded-[2.5rem] border-[6px] border-slate-50 dark:border-[#0b1120] bg-white dark:bg-slate-800 overflow-hidden shadow-2xl">
              <img 
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=sakib" 
                alt="Profile Avatar" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            {/* Camera Action Button */}
            <button className="absolute bottom-2 right-2 p-3 bg-teal-600 dark:bg-teal-500 text-white dark:text-[#0b1120] rounded-2xl border-4 border-slate-50 dark:border-[#0b1120] hover:scale-110 transition-all shadow-xl">
              <FiCamera size={18}/>
            </button>
          </div>
          
          <div className="pb-6 space-y-1">
            <h1 className="text-4xl font-black tracking-tighter uppercase drop-shadow-sm">sakibvai80</h1>
            <p className="text-teal-600 dark:text-teal-400 font-black text-xs uppercase tracking-widest flex items-center gap-2">
              <FiStar className="animate-pulse" /> Premium Member • Joined March 2026
            </p>
          </div>
        </div>

        {/* Banner Action */}
        <div className="absolute top-6 right-6 hidden md:block">
          <button className="px-5 py-2.5 bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl text-[10px] font-black uppercase tracking-widest text-white hover:bg-white/40 transition-all shadow-lg">
            Update Cover Photo
          </button>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="mt-32 max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-3 gap-10">
        
        {/* Left Column: Editable Information Sections */}
        <div className="lg:col-span-2 space-y-10">
          
          {/* Personal Info Card */}
          <div className="bg-white dark:bg-[#1e293b]/20 border border-slate-200 dark:border-slate-800 rounded-[3rem] p-10 space-y-8 shadow-sm dark:shadow-none">
            <h2 className="text-xl font-black flex items-center gap-3 border-b border-slate-100 dark:border-slate-800 pb-6 uppercase tracking-tight">
              <FiUser className="text-teal-600 dark:text-teal-400"/> Personal Information
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] ml-2">Full Display Name *</label>
                <input 
                  type="text"
                  defaultValue="sakibvai80"
                  className="w-full bg-slate-50 dark:bg-[#0b1120]/50 border border-slate-200 dark:border-slate-800 p-5 rounded-2xl text-sm font-bold focus:ring-2 ring-teal-500/20 outline-none transition-all" 
                />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] ml-2">Primary Email</label>
                <div className="relative">
                  <FiMail className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input 
                    type="email"
                    defaultValue="sakibvai80@gmail.com"
                    className="w-full bg-slate-50 dark:bg-[#0b1120]/50 border border-slate-200 dark:border-slate-800 p-5 pl-14 rounded-2xl text-sm font-bold focus:ring-2 ring-teal-500/20 outline-none transition-all" 
                  />
                </div>
              </div>
              <div className="md:col-span-2 space-y-3">
                <label className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] ml-2">Professional Headline</label>
                <input 
                  placeholder="e.g. Computer Science Student | Mental Health Advocate"
                  className="w-full bg-slate-50 dark:bg-[#0b1120]/50 border border-slate-200 dark:border-slate-800 p-5 rounded-2xl text-sm font-bold outline-none" 
                />
              </div>
            </div>
          </div>

          {/* Academic Section */}
          <div className="bg-white dark:bg-[#1e293b]/20 border border-slate-200 dark:border-slate-800 rounded-[3rem] p-10 space-y-8 shadow-sm dark:shadow-none">
            <h2 className="text-xl font-black flex items-center gap-3 border-b border-slate-100 dark:border-slate-800 pb-6 uppercase tracking-tight">
              <FiBookOpen className="text-blue-600 dark:text-blue-400"/> Education & Goals
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] ml-2">Current University</label>
                <input className="w-full bg-slate-50 dark:bg-[#0b1120]/50 border border-slate-200 dark:border-slate-800 p-5 rounded-2xl text-sm font-bold outline-none" />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] ml-2">Field of Study</label>
                <input className="w-full bg-slate-50 dark:bg-[#0b1120]/50 border border-slate-200 dark:border-slate-800 p-5 rounded-2xl text-sm font-bold outline-none" />
              </div>
            </div>
            <div className="space-y-3">
              <label className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] ml-2">Professional Bio</label>
              <textarea 
                rows="5"
                placeholder="Share your journey or what you're currently working on..."
                className="w-full bg-slate-50 dark:bg-[#0b1120]/50 border border-slate-200 dark:border-slate-800 p-5 rounded-3xl text-sm font-bold outline-none resize-none"
              ></textarea>
            </div>
          </div>
        </div>

        {/* Right Column: Settings & Actions */}
        <div className="space-y-10">
          {/* Quick Visibility Controls */}
          <div className="bg-white dark:bg-[#1e293b]/20 border border-slate-200 dark:border-slate-800 rounded-[3rem] p-8 space-y-6 shadow-sm dark:shadow-none">
            <h3 className="text-xs font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.25em] text-center">Privacy Control</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 bg-slate-50 dark:bg-[#0b1120]/30 rounded-2xl">
                <span className="text-xs font-black uppercase">Public Profile</span>
                <div className="w-12 h-6 bg-teal-600 rounded-full relative">
                  <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow-md"></div>
                </div>
              </div>
              <div className="flex justify-between items-center p-4 bg-slate-50 dark:bg-[#0b1120]/30 rounded-2xl opacity-60">
                <span className="text-xs font-black uppercase">Show Activity</span>
                <div className="w-12 h-6 bg-slate-200 dark:bg-slate-700 rounded-full relative">
                  <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow-md"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Location & Save Action */}
          <div className="bg-white dark:bg-[#1e293b]/20 border border-slate-200 dark:border-slate-800 rounded-[3rem] p-8 space-y-8 shadow-sm dark:shadow-none text-center">
            <div className="space-y-3 text-left">
              <label className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-2">Current Location</label>
              <div className="relative">
                <FiMapPin className="absolute left-5 top-1/2 -translate-y-1/2 text-teal-600" />
                <input 
                  placeholder="Dhaka, Bangladesh"
                  className="w-full bg-slate-50 dark:bg-[#0b1120]/50 border border-slate-200 dark:border-slate-800 p-5 pl-14 rounded-2xl text-sm font-bold outline-none" 
                />
              </div>
            </div>
            
            <button className="w-full py-5 bg-slate-900 dark:bg-teal-500 text-white dark:text-[#0b1120] font-black rounded-2xl flex items-center justify-center gap-3 shadow-2xl shadow-teal-500/20 transition-all hover:bg-teal-600 active:scale-95 uppercase text-xs tracking-[0.2em]">
              <FiSave size={20}/> Save Settings
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;