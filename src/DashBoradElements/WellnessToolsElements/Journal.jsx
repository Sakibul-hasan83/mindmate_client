import React, { useState } from 'react';
import { FiArrowLeft, FiBook, FiBarChart2, FiZap, FiTarget, FiSave, FiTrash2, FiInfo, FiClock } from 'react-icons/fi';

const Journal = () => {
  const [activeCategory, setActiveCategory] = useState('Gratitude');

  const stats = [
    { label: 'Total Entries', value: '0', icon: <FiBook className="text-blue-400" /> },
    { label: 'Word Count', value: '0.0k', icon: <FiBarChart2 className="text-purple-400" /> },
    { label: 'Day Streak', value: '0', icon: <FiZap className="text-orange-400" /> },
    { label: 'Categories', value: '—', icon: <FiTarget className="text-green-400" /> },
  ];

  const categories = [
    { id: 'Gratitude', label: 'Gratitude', emoji: '🧘‍♂️' },
    { id: 'Reflection', label: 'Reflection', emoji: '💭' },
    { id: 'Emotional', label: 'Emotional Check-in', emoji: '❤️' },
    { id: 'Growth', label: 'Growth', emoji: '🌱' },
    { id: 'Planning', label: 'Future Planning', emoji: '🎯' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0b1120] text-slate-900 dark:text-slate-100 p-4 md:p-10 transition-colors duration-300">
      <div className="max-w-5xl mx-auto space-y-8">
        
        {/* Header */}
        <header className="space-y-4">
          <button className="flex items-center gap-2 text-teal-600 dark:text-[#14b8a6] text-xs md:text-sm font-bold hover:opacity-80">
            <FiArrowLeft /> Back to Resources
          </button>
          <div className="flex items-center gap-4">
            <div className="p-3 bg-teal-500/10 rounded-xl text-teal-500">
              <FiBook size={28} />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">Journal Prompts</h1>
              <p className="text-slate-500 dark:text-slate-400 text-sm">Guided journaling to process emotions and track your journey</p>
            </div>
          </div>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white dark:bg-[#1e293b]/40 border border-slate-200 dark:border-slate-800 p-4 rounded-2xl text-center space-y-1">
              <div className="flex justify-center text-xl mb-1">{stat.icon}</div>
              <div className="text-xl font-bold">{stat.value}</div>
              <div className="text-[10px] uppercase tracking-wider text-slate-500 font-bold">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Category Tabs */}
        <div className="flex overflow-x-auto gap-3 pb-2 scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex flex-col items-center min-w-[100px] p-4 rounded-2xl border transition-all ${
                activeCategory === cat.id 
                ? 'bg-white dark:bg-[#1e293b] border-teal-500 ring-1 ring-teal-500 shadow-lg' 
                : 'bg-white/50 dark:bg-[#1e293b]/20 border-slate-200 dark:border-slate-800 opacity-60'
              }`}
            >
              <span className="text-2xl mb-2">{cat.emoji}</span>
              <span className="text-[11px] font-bold whitespace-nowrap">{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Journaling Area */}
        <main className="bg-white dark:bg-[#1e293b]/40 border border-slate-200 dark:border-slate-800 rounded-[2rem] overflow-hidden">
          <div className="p-6 md:p-8 space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-xl">🧘‍♂️</span>
                <h2 className="font-bold text-lg">{activeCategory}</h2>
              </div>
              <div className="flex gap-1">
                {[1, 2, 3].map(i => <div key={i} className={`w-2 h-2 rounded-full ${i===1 ? 'bg-teal-500' : 'bg-slate-300 dark:bg-slate-700'}`} />)}
              </div>
            </div>

            <div className="bg-slate-50 dark:bg-black/20 p-5 rounded-2xl border border-slate-200 dark:border-slate-800">
              <p className="font-medium text-sm md:text-base italic">"What are three things you're grateful for today?"</p>
            </div>

            <div className="relative">
              <textarea 
                placeholder="Start writing... your thoughts are private and encrypted 🔒"
                className="w-full h-48 bg-transparent border border-slate-200 dark:border-slate-800 rounded-2xl p-5 text-sm focus:ring-2 focus:ring-teal-500 outline-none resize-none"
              />
              <span className="absolute bottom-4 left-5 text-[10px] text-slate-500 uppercase font-bold">0 characters</span>
            </div>

            <div className="flex flex-col md:flex-row gap-3">
              <button className="flex-1 flex items-center justify-center gap-2 py-3 bg-slate-200 dark:bg-slate-800 rounded-xl font-bold text-sm hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors">
                <FiTrash2 size={16} /> Clear
              </button>
              <button className="flex-[2] flex items-center justify-center gap-2 py-3 bg-teal-600 dark:bg-[#14b8a6] text-white rounded-xl font-bold text-sm hover:opacity-90 transition-all shadow-lg shadow-teal-500/20">
                <FiSave size={16} /> Save & Continue
              </button>
            </div>
          </div>
        </main>

        {/* Tips Section */}
        <div className="bg-teal-500/5 border border-teal-500/20 p-6 rounded-[1.5rem] space-y-3">
          <div className="flex items-center gap-2 text-teal-600 dark:text-teal-400 font-bold text-sm">
            <FiInfo /> Journaling Tips
          </div>
          <ul className="grid gap-2 text-xs md:text-sm text-slate-600 dark:text-slate-400 list-disc list-inside">
            <li>Write freely without judgment - there are no wrong answers</li>
            <li>Be honest with yourself about your feelings</li>
            <li>Try to journal at the same time each day</li>
            <li>Review past entries to track patterns and progress</li>
          </ul>
        </div>

        {/* History Section */}
        <div className="bg-white dark:bg-[#1e293b]/40 border border-slate-200 dark:border-slate-800 rounded-[1.5rem] p-6 text-center space-y-4">
            <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold flex items-center gap-2"><FiClock /> Your Journal History</h3>
                <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-lg text-[10px] font-bold">
                    <button className="px-3 py-1 bg-white dark:bg-teal-500 text-teal-600 dark:text-white rounded-md shadow-sm">Weekly</button>
                    <button className="px-3 py-1 text-slate-500">Monthly</button>
                </div>
            </div>
            <div className="py-10 opacity-50 space-y-2">
                <FiBook size={48} className="mx-auto text-slate-400" />
                <p className="font-bold">No entries found</p>
                <p className="text-xs">Start journaling to see your entries here!</p>
            </div>
        </div>

      </div>
    </div>
  );
};

export default Journal;