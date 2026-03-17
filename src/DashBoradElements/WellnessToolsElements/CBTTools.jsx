import React from 'react';
import { FiFileText, FiSearch, FiActivity, FiHeart, FiBookOpen } from 'react-icons/fi';

const CBTTools = () => {

  const tools = [
    {
      title: 'Thought Record',
      desc: 'Challenge negative thoughts with structured CBT exercises',
      icon: <FiFileText size={24} />,
      color: 'text-teal-500',
      bgColor: 'bg-teal-500/10',
      borderColor: 'hover:border-teal-500/50'
    },
    {
      title: 'Distortion Checker',
      desc: 'Identify cognitive distortions in your thinking patterns',
      icon: <FiSearch size={24} />,
      color: 'text-cyan-500',
      bgColor: 'bg-cyan-500/10',
      borderColor: 'hover:border-cyan-500/50'
    },
    {
      title: 'Behavioral Activation',
      desc: 'Plan and track activities to improve your mood',
      icon: <FiActivity size={24} />,
      color: 'text-green-500',
      bgColor: 'bg-green-500/10',
      borderColor: 'hover:border-green-500/50'
    },
    {
      title: 'Gratitude Practice',
      desc: 'Cultivate positivity through daily gratitude journaling',
      icon: <FiHeart size={24} />,
      color: 'text-emerald-500',
      bgColor: 'bg-emerald-500/10',
      borderColor: 'hover:border-emerald-500/50'
    },
    {
      title: 'CBT Course',
      desc: '8-week structured CBT program for lasting change',
      icon: <FiBookOpen size={24} />,
      color: 'text-indigo-500',
      bgColor: 'bg-indigo-500/10',
      borderColor: 'border-indigo-500/50 ring-1 ring-indigo-500/30' // Featured highlight like in img
    }
  ];

  return (
    /* Theme logic: Light (slate-50) vs Dark (slate-950) */
    <div className="min-h-screen bg-slate-50 dark:bg-[#0b1120] text-slate-900 dark:text-slate-100 p-6 md:p-12 transition-colors duration-300">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Header Section */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center justify-center p-3 bg-teal-500/10 rounded-xl text-teal-500 mb-2">
            <FiFileText size={32} />
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">CBT Tools</h1>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Evidence-based cognitive behavioral therapy techniques to support your mental wellness journey
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool, index) => (
            <button
              key={index}
              className={`p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] border text-left transition-all duration-300 group
                bg-white dark:bg-[#1e293b]/40 border-slate-200 dark:border-slate-800 
                hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-none hover:-translate-y-1
                ${tool.borderColor}`}
            >
              <div className="space-y-5">
                {/* Icon Box */}
                <div className={`w-12 h-12 flex items-center justify-center rounded-xl transition-colors ${tool.bgColor} ${tool.color}`}>
                  {tool.icon}
                </div>
                
                {/* Text Content */}
                <div className="space-y-2">
                  <h3 className="text-xl font-bold tracking-tight group-hover:text-teal-500 dark:group-hover:text-teal-400 transition-colors">
                    {tool.title}
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                    {tool.desc}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>

      </div>
    </div>
  );
};

export default CBTTools;