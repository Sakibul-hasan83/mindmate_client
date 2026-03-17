import React from 'react';
import { FiPhone, FiMessageSquare, FiAlertTriangle } from 'react-icons/fi';

const CrisisResources = () => {
  return (
    // Main Container: Slate-50 for light mode, Deep Blue for dark mode
    <div className="min-h-screen bg-slate-50 dark:bg-[#0b1120] text-slate-900 dark:text-slate-100 p-6 md:p-10 transition-colors duration-300">
      <div className="max-w-3xl mx-auto space-y-6">
        
        {/* Urgent SOS Header */}
        <div className="bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/30 rounded-2xl p-5 flex items-center gap-4 shadow-sm dark:shadow-none">
          <div className="bg-red-600 dark:bg-red-500 text-white px-3 py-1 rounded-lg font-black text-xs animate-pulse">
            SOS
          </div>
          <div>
            <h1 className="text-xl font-black tracking-tight">Crisis Support</h1>
            <p className="text-[11px] text-red-600 dark:text-slate-400 font-bold uppercase tracking-wider">Help is available 24/7</p>
          </div>
        </div>

        {/* Warning Signs Section */}
        <div className="bg-amber-50 dark:bg-amber-500/5 border border-amber-200 dark:border-amber-500/30 rounded-[2rem] p-8 space-y-4">
          <h2 className="text-amber-700 dark:text-amber-500 font-black flex items-center gap-2 text-lg">
            <FiAlertTriangle /> When to Seek Immediate Help
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
            {[
              'Thoughts of suicide or self-harm', 
              'Plans or means to harm yourself', 
              'Hearing voices or seeing things', 
              'Severe panic or anxiety attacks', 
              'Extreme mood swings', 
              'Loss of touch with reality'
            ].map((item, i) => (
              <li key={i} className="text-xs text-slate-600 dark:text-slate-300 flex items-center gap-3 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0" /> {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Crisis Hotlines Grid */}
        <div className="grid grid-cols-1 gap-4">
          {[
            { name: 'National Suicide Prevention Lifeline', color: 'border-red-500/30', call: '988', text: 'HELLO to 741741' },
            { name: 'Crisis Text Line', color: 'border-orange-500/30', text: 'HOME to 741741' },
            { name: 'SAMHSA National Helpline', color: 'border-blue-500/30', call: '1-800-662-4357' },
            { name: 'Trevor Project (LGBTQ+ Youth)', color: 'border-purple-500/30', call: '1-866-488-7386', text: 'START to 678678' }
          ].map((line, i) => (
            <div key={i} className={`bg-white dark:bg-white/5 border ${line.color} rounded-[2rem] p-6 space-y-5 shadow-sm dark:shadow-none hover:border-teal-500 transition-all group`}>
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <h3 className="font-black text-lg tracking-tight group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">{line.name}</h3>
                  <p className="text-[10px] text-slate-400 dark:text-slate-500 font-bold uppercase tracking-widest">Free and confidential support</p>
                </div>
                <div className="text-[9px] font-black bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded text-slate-500 uppercase">24/7</div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {line.call && (
                  <button className="w-full py-3 bg-slate-900 dark:bg-slate-800 hover:bg-teal-600 dark:hover:bg-slate-700 text-white rounded-xl text-xs font-black uppercase tracking-widest flex items-center justify-center gap-2 transition-all">
                    <FiPhone size={14} /> Call: {line.call}
                  </button>
                )}
                {line.text && (
                  <button className="w-full py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 rounded-xl text-xs font-black uppercase tracking-widest flex items-center justify-center gap-2 transition-all">
                    <FiMessageSquare size={14} /> Text: {line.text.split(' to ')[0]}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Campus Resources Footer */}
        <div className="bg-blue-50 dark:bg-blue-500/5 border border-blue-200 dark:border-blue-500/20 rounded-[2rem] p-8 space-y-4 shadow-sm dark:shadow-none">
           <h3 className="font-black text-blue-700 dark:text-blue-400 text-lg uppercase tracking-tighter">Campus Resources</h3>
           <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">Your university likely offers free counseling services. Contact your student health center for localized support.</p>
           <button className="px-8 py-3 bg-blue-600 text-white rounded-xl font-black text-xs uppercase tracking-widest hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20">
             Find Campus Counseling
           </button>
        </div>
      </div>
    </div>
  );
};

export default CrisisResources;