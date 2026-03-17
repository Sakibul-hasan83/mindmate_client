import React from 'react';
import { FiAlertTriangle, FiHeart, FiUsers, FiPhone, FiHome, FiSave, FiPlus, FiSearch, FiInfo, FiClock, FiBook } from 'react-icons/fi';

const SafetyPlan = () => {

  const sections = [
    {
      id: 1,
      title: 'Warning Signals',
      subtitle: 'What thoughts, moods, or situations indicate a crisis may be developing?',
      placeholder: 'e.g., Feeling hopeless, isolating myself...',
      icon: <FiAlertTriangle className="text-amber-500" />,
      borderColor: 'border-slate-800',
      actionText: 'Add Warning Signal'
    },
    {
      id: 2,
      title: 'Internal Coping Strategies',
      subtitle: 'Things you can do to take your mind off problems without contacting others.',
      placeholder: 'e.g., Deep breathing, meditation, journaling...',
      icon: <FiHeart className="text-pink-500" />,
      borderColor: 'border-slate-800',
      actionText: 'Add Coping Strategy'
    },
    {
      id: 3,
      title: 'Social Support',
      subtitle: 'People you can reach out to for support',
      icon: <FiUsers className="text-blue-500" />,
      borderColor: 'border-slate-800',
      actionText: 'Add Contact',
      isCustom: true // Contacts list style
    },
    {
      id: 4,
      title: 'Emergency Contacts',
      subtitle: 'People to contact in an emergency',
      icon: <FiPhone className="text-rose-500" />,
      borderColor: 'border-rose-500/50', // Highlighted like in img
      actionText: 'Add Emergency Contact',
      isCustom: true
    },
    {
      id: 5,
      title: 'Reasons for Living',
      subtitle: 'What makes life worth living? What are you living for?',
      placeholder: 'e.g., My family, my pets, my goals...',
      icon: <FiHome className="text-emerald-500" />,
      borderColor: 'border-slate-800',
      actionText: 'Add Reason'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0b1120] text-slate-900 dark:text-slate-100 p-4 md:p-10 transition-colors duration-300">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Header Section */}
        <header className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-teal-500/10 rounded-xl text-teal-600 dark:text-[#14b8a6]">
              <FiSave size={24} />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">Safety Plan</h1>
              <p className="text-slate-500 dark:text-slate-400 text-sm">Your personalized crisis response plan</p>
            </div>
          </div>

          {/* Info Box */}
          <div className="bg-teal-500/5 border border-teal-500/20 p-4 rounded-xl flex gap-3 items-start">
            <FiInfo className="text-teal-600 dark:text-teal-400 mt-1 shrink-0" />
            <div>
              <p className="text-xs font-bold text-teal-700 dark:text-teal-400 uppercase tracking-wider">What is a Safety Plan?</p>
              <p className="text-[13px] text-slate-600 dark:text-slate-400 leading-relaxed">
                A safety plan is a personalized, practical plan that can help you avoid dangerous situations and know how to react when you're in crisis.
              </p>
            </div>
          </div>
        </header>

        {/* Tabs */}
        <div className="flex gap-6 border-b border-slate-200 dark:border-slate-800 text-sm font-bold text-slate-500">
          <button className="pb-3 border-b-2 border-teal-500 text-teal-600 dark:text-teal-400 flex items-center gap-2">
            <FiSave size={14} /> My Plan
          </button>
          <button className="pb-3 flex items-center gap-2 hover:text-slate-800 dark:hover:text-slate-300 transition-colors">
            <FiClock size={14} /> History
          </button>
          <button className="pb-3 flex items-center gap-2 hover:text-slate-800 dark:hover:text-slate-300 transition-colors">
            <FiBook size={14} /> Resources
          </button>
        </div>

        {/* Input Sections Grid */}
        <div className="space-y-6">
          {sections.map((section) => (
            <div key={section.id} className={`bg-white dark:bg-[#1e293b]/40 border ${section.borderColor} p-6 rounded-2xl space-y-4 shadow-sm transition-all`}>
              <div className="flex gap-4">
                <div className="mt-1">{section.icon}</div>
                <div className="space-y-1">
                  <h3 className="font-bold text-base flex items-center gap-2">
                    {section.id}. {section.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{section.subtitle}</p>
                </div>
              </div>

              {!section.isCustom && (
                <input 
                  type="text" 
                  placeholder={section.placeholder}
                  className="w-full bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-slate-800 rounded-xl p-3.5 text-sm outline-none focus:ring-2 focus:ring-teal-500/50 transition-all"
                />
              )}

              <button className="flex items-center gap-2 text-teal-600 dark:text-[#14b8a6] text-xs font-bold hover:opacity-80 transition-opacity">
                <FiPlus /> {section.actionText}
              </button>
            </div>
          ))}
        </div>

        {/* Crisis Hotlines Section */}
        <div className="bg-rose-500/5 border border-rose-500/50 p-6 rounded-[2rem] space-y-6">
          <h3 className="font-bold flex items-center gap-2 text-rose-600 dark:text-rose-400">
            <FiPhone /> Crisis Hotlines
          </h3>
          
          <div className="grid gap-3">
            <div className="bg-white dark:bg-slate-900/40 p-5 rounded-2xl border border-rose-500/20">
              <p className="font-bold text-sm">988 Suicide & Crisis Lifeline</p>
              <p className="text-teal-600 dark:text-teal-400 text-sm font-bold">Call or text: 988</p>
              <p className="text-[10px] text-slate-500 mt-1">24/7 • Free and confidential support</p>
            </div>

            <div className="bg-white dark:bg-slate-900/40 p-5 rounded-2xl border border-rose-500/20">
              <p className="font-bold text-sm">Crisis Text Line</p>
              <p className="text-teal-600 dark:text-teal-400 text-sm font-bold">Text HOME to: 741741</p>
              <p className="text-[10px] text-slate-500 mt-1">24/7 • Free crisis counseling</p>
            </div>

            <div className="bg-white dark:bg-slate-900/40 p-5 rounded-2xl border border-rose-500/20">
              <p className="font-bold text-sm text-rose-600">Emergency</p>
              <p className="text-rose-600 text-sm font-bold">Call: 911</p>
              <p className="text-[10px] text-slate-500 mt-1">For immediate emergency assistance</p>
            </div>
          </div>
        </div>

        {/* Footer Buttons */}
        <div className="flex justify-end gap-4 pb-10">
          <button className="flex items-center gap-2 px-6 py-3 bg-teal-600/10 dark:bg-[#14b8a6]/10 text-teal-700 dark:text-[#14b8a6] rounded-xl font-bold text-sm border border-teal-500/20">
            <FiSearch /> Scan for Crisis
          </button>
          <button className="flex items-center gap-2 px-6 py-3 bg-teal-600 dark:bg-[#14b8a6] text-white rounded-xl font-bold text-sm shadow-lg shadow-teal-500/20 active:scale-95 transition-all">
            <FiSave /> Save Safety Plan
          </button>
        </div>

      </div>
    </div>
  );
};

export default SafetyPlan;