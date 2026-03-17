import React from 'react';
import { FiBriefcase, FiAlertCircle, FiFrown, FiHeart, FiZap, FiInfo } from 'react-icons/fi';

const Assessments = () => {
  const tools = [
    { title: 'PHQ-9', sub: 'Depression Screening', desc: 'Patient Health Questionnaire - 9 item depression scale', qs: '9 questions', time: '5 min', icon: <FiFrown /> },
    { title: 'GAD-7', sub: 'Anxiety Screening', desc: 'Generalized Anxiety Disorder - 7 item anxiety scale', qs: '7 questions', time: '3 min', icon: <FiHeart /> },
    { title: 'Stress Assessment', sub: 'Stress Level Screening', desc: 'Evaluate your current stress levels and coping', qs: '10 questions', time: '5 min', icon: <FiZap />, border: 'dark:border-blue-500/50 border-blue-200' },
    { title: 'Burnout Assessment', sub: 'Burnout Screening', desc: 'Assess signs of emotional and physical exhaustion', qs: '10 questions', time: '5 min', icon: <FiInfo /> },
  ];

  return (
    // Main Container: Slate-50 for light mode, Original Deep Blue for dark mode
    <div className="min-h-screen bg-slate-50 dark:bg-[#0b1120] text-slate-900 dark:text-slate-100 p-6 md:p-10 transition-colors duration-300">
      <div className="max-w-5xl mx-auto space-y-8">
        
        {/* Header Section */}
        <header className="space-y-2">
          <h1 className="text-3xl font-black flex items-center gap-3">
            <FiBriefcase className="text-orange-500 dark:text-orange-400" /> Self-Assessment Tools
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Track your mental health with validated screening tools</p>
        </header>

        {/* Warning Alert: Theme-aware warning banner */}
        <div className="bg-teal-50 dark:bg-teal-900/10 border border-teal-200 dark:border-teal-500/30 rounded-2xl p-6 flex gap-4">
          <FiAlertCircle className="text-teal-600 dark:text-teal-400 shrink-0 mt-1" size={20} />
          <div className="space-y-1">
            <h4 className="font-black text-teal-700 dark:text-teal-400 text-xs tracking-widest uppercase">Important Information</h4>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
              These assessments are screening tools and not diagnostic instruments. Only a qualified healthcare professional can provide a diagnosis. If you're experiencing severe symptoms, please seek professional help immediately.
            </p>
          </div>
        </div>

        {/* Assessment Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tools.map((tool, i) => (
            <div 
              key={i} 
              className={`bg-white dark:bg-[#1e293b]/30 border ${tool.border || 'border-slate-200 dark:border-slate-800'} rounded-[2.5rem] p-8 space-y-6 hover:bg-slate-50 dark:hover:bg-[#1e293b]/50 transition-all shadow-sm dark:shadow-none group`}
            >
              <div className="flex items-center gap-4">
                {/* Icon Box */}
                <div className="p-4 bg-slate-100 dark:bg-slate-800 rounded-2xl text-2xl text-slate-500 dark:text-slate-400 group-hover:text-teal-500 transition-colors">
                  {tool.icon}
                </div>
                <div>
                  <h3 className="font-black text-2xl tracking-tight">{tool.title}</h3>
                  <p className="text-[10px] uppercase font-black text-slate-400 dark:text-slate-500 tracking-[0.2em]">{tool.sub}</p>
                </div>
              </div>

              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                {tool.desc}
              </p>

              {/* Tool Stats */}
              <div className="flex gap-4 text-[11px] text-slate-400 dark:text-slate-500 font-black uppercase tracking-wider">
                <span className="flex items-center gap-1.5">
                  <span className="text-lg">📝</span> {tool.qs}
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="text-lg">⏱️</span> {tool.time}
                </span>
              </div>

              {/* Action Button */}
              <button className="w-full py-4 bg-teal-600 dark:bg-teal-500/80 hover:bg-teal-700 dark:hover:bg-teal-500 text-white rounded-2xl font-black text-xs uppercase tracking-widest transition-all shadow-lg shadow-teal-500/20 active:scale-[0.98]">
                Take Assessment
              </button>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Assessments;