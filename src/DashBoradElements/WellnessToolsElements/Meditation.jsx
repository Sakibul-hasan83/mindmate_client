import React, { useState, useEffect } from 'react';
import { FiArrowLeft, FiWind, FiClock, FiCheckCircle, FiPlay, FiRotateCcw, FiSquare } from 'react-icons/fi';

const Meditation = () => {
  const [selectedId, setSelectedId] = useState('Body Scan');
  const [isActive, setIsActive] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const meditations = {
    'Body Scan': {
      title: 'Body Scan Meditation',
      desc: 'Progressive relaxation through body awareness',
      time: '10 min',
      steps: [
        "Find a comfortable position, sitting or lying down",
        "Close your eyes and take three deep breaths",
        "Starting with your toes, notice any sensations",
        "Slowly move your attention up through your feet, legs, torso",
        "Continue to your arms, shoulders, neck, and head",
        "Notice areas of tension without judgment",
        "Breathe into any tight areas, imagining them softening",
        "Take a moment to feel your whole body",
        "Slowly open your eyes when ready"
      ]
    },
    'Mindful': {
      title: 'Mindful Breathing',
      desc: 'Simple awareness of breath',
      time: '5 min',
      steps: ["Focus on your breath", "Inhale deeply", "Exhale slowly", "Clear your mind"]
    },
    'Loving': {
      title: 'Loving-Kindness Meditation',
      desc: 'Cultivate compassion for yourself and others',
      time: '15 min',
      steps: ["Think of a loved one", "Send them peace", "Think of yourself", "Send yourself peace"]
    }
  };

  const activeData = meditations[selectedId];
  const totalSteps = activeData.steps.length;
  const progressPercent = Math.round(((currentStep + 1) / totalSteps) * 100);

  useEffect(() => {
    let timer;
    if (isActive && currentStep < totalSteps - 1) {
      timer = setTimeout(() => setCurrentStep(prev => prev + 1), 6000);
    }
    return () => clearTimeout(timer);
  }, [isActive, currentStep, totalSteps]);

  const handleStop = () => {
    setIsActive(false);
    setCurrentStep(0);
  };

  return (
    /* Theme logic: bg-slate-50 (Light) vs bg-slate-950 (Dark) */
    <div className="min-h-screen bg-slate-50 dark:bg-[#0b1120] text-slate-900 dark:text-slate-100 p-4 sm:p-6 md:p-10 font-sans transition-colors duration-300">
      <div className="max-w-5xl mx-auto space-y-6 md:space-y-10">
        
        {/* Responsive Header */}
        <header className="space-y-4 md:space-y-6">
          <button className="flex items-center gap-2 text-teal-600 dark:text-[#14b8a6] text-xs md:text-sm font-bold hover:translate-x-[-4px] transition-transform">
            <FiArrowLeft /> Back to Resources
          </button>
          <div className="flex items-center gap-3 md:gap-5">
            <div className="p-2.5 md:p-4 bg-teal-100 dark:bg-[#14b8a6]/10 rounded-xl md:rounded-2xl shrink-0">
              <FiWind className="text-teal-600 dark:text-[#14b8a6] w-6 h-6 md:w-8 md:h-8" />
            </div>
            <div>
              <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight">Guided Meditation</h1>
              <p className="text-slate-500 dark:text-slate-400 text-xs md:text-base">Find peace and clarity through mindful practice</p>
            </div>
          </div>
        </header>

        {/* Horizontal Scrollable Tabs */}
        <div className="flex md:grid md:grid-cols-3 gap-3 md:gap-4 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
          {Object.keys(meditations).map((key) => (
            <button
              key={key}
              disabled={isActive}
              onClick={() => setSelectedId(key)}
              /* Card colors: white (Light) vs slate-900/40 (Dark) */
              className={`min-w-[240px] md:min-w-full p-4 md:p-5 rounded-2xl border text-left transition-all relative shrink-0 ${
                selectedId === key 
                ? 'bg-white dark:bg-[#1e293b]/80 border-teal-500 dark:border-[#14b8a6] ring-1 ring-teal-500 dark:ring-[#14b8a6] shadow-md' 
                : 'bg-white dark:bg-[#1e293b]/40 border-slate-200 dark:border-slate-800 hover:border-teal-300 dark:hover:border-slate-700'
              } ${isActive ? 'cursor-not-allowed opacity-40' : ''}`}
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-xs md:text-sm leading-tight pr-4">{meditations[key].title}</h3>
                {selectedId === key && <FiCheckCircle className="text-teal-600 dark:text-[#14b8a6] shrink-0" size={16} />}
              </div>
              <p className="text-slate-500 dark:text-slate-400 text-[10px] md:text-[11px] mb-3 line-clamp-2">{meditations[key].desc}</p>
              <div className="flex items-center gap-1.5 text-teal-600 dark:text-[#14b8a6] text-[10px] md:text-[11px] font-bold uppercase tracking-wider">
                <FiClock size={12} /> {meditations[key].time}
              </div>
            </button>
          ))}
        </div>

        {/* Interactive Content Card */}
        <main className="bg-white dark:bg-[#1e293b]/40 border border-slate-200 dark:border-slate-800 rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-xl dark:shadow-2xl backdrop-blur-sm">
          {/* Status Header */}
          <div className="bg-teal-600 dark:bg-[#14b8a6] p-5 md:p-8 transition-colors">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-1">{activeData.title}</h2>
            <p className="text-white/80 text-xs md:text-sm font-medium">{activeData.desc}</p>
          </div>

          <div className="p-5 md:p-10">
            {!isActive ? (
              /* Pre-Session List View */
              <div className="space-y-6 md:space-y-10 animate-in fade-in duration-500">
                <button 
                  onClick={() => setIsActive(true)}
                  className="w-full bg-teal-600 dark:bg-[#14b8a6] hover:bg-teal-700 dark:hover:bg-[#0d9488] text-white py-4 md:py-5 rounded-xl md:rounded-2xl font-black text-sm uppercase tracking-widest flex items-center justify-center gap-3 transition-all active:scale-[0.98] shadow-lg shadow-teal-500/20"
                >
                  <FiPlay size={20} className="fill-current" /> Start Meditation ({activeData.time})
                </button>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-1 h-5 bg-teal-500 dark:bg-[#14b8a6] rounded-full" />
                    <h3 className="font-bold text-xs md:text-sm uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">Preparation Steps</h3>
                  </div>
                  <div className="grid gap-2.5 md:gap-3">
                    {activeData.steps.map((step, idx) => (
                      <div key={idx} className="flex items-center gap-4 p-3.5 md:p-4 bg-slate-50 dark:bg-[#0b1120]/40 border border-slate-200 dark:border-slate-800/50 rounded-xl md:rounded-2xl group hover:border-teal-200 dark:hover:border-[#14b8a6]/20 transition-colors">
                        <span className="w-7 h-7 md:w-8 md:h-8 flex items-center justify-center bg-teal-100 dark:bg-[#14b8a6]/10 rounded-lg text-teal-700 dark:text-[#14b8a6] text-[10px] md:text-xs font-black shrink-0">
                          {idx + 1}
                        </span>
                        <p className="text-slate-700 dark:text-slate-300 text-xs md:text-sm font-medium leading-relaxed">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              /* Active Session UI */
              <div className="space-y-8 md:space-y-12 py-4 md:py-10 text-center animate-in zoom-in-95 duration-500">
                <div className="space-y-5">
                  <span className="inline-block bg-teal-100 dark:bg-[#14b8a6]/10 text-teal-700 dark:text-[#14b8a6] px-5 py-1.5 rounded-full text-[10px] md:text-xs font-black uppercase tracking-widest ring-1 ring-teal-200 dark:ring-[#14b8a6]/20">
                    Step {currentStep + 1} of {totalSteps}
                  </span>
                  
                  <div className="max-w-xs md:max-w-md mx-auto space-y-3">
                    <div className="w-full bg-slate-200 dark:bg-slate-800 h-1.5 md:h-2 rounded-full overflow-hidden shadow-inner">
                      <div 
                        className="bg-teal-600 dark:bg-[#14b8a6] h-full transition-all duration-1000 ease-linear" 
                        style={{ width: `${progressPercent}%` }}
                      />
                    </div>
                    <p className="text-[9px] md:text-[10px] text-slate-400 dark:text-slate-500 font-bold uppercase tracking-[0.25em]">
                      {progressPercent}% Complete
                    </p>
                  </div>
                </div>

                <div className="min-h-[140px] md:min-h-[220px] flex items-center justify-center px-6 md:px-12 border-2 border-dashed border-slate-200 dark:border-slate-800/60 rounded-[2rem] bg-slate-50/50 dark:bg-[#0b1120]/30 mx-auto max-w-3xl">
                  <h3 className="text-xl md:text-4xl font-semibold leading-snug text-slate-800 dark:text-slate-100 italic">
                    "{activeData.steps[currentStep]}"
                  </h3>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 max-w-2xl mx-auto w-full">
                  <button 
                    onClick={() => { setCurrentStep(0); }}
                    className="flex-1 bg-slate-200 dark:bg-slate-800/80 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 py-3.5 md:py-4 rounded-xl md:rounded-2xl font-bold text-xs md:text-sm flex items-center justify-center gap-2 transition-all active:scale-95"
                  >
                    <FiRotateCcw size={16} /> Reset Session
                  </button>
                  <button 
                    onClick={handleStop}
                    className="flex-1 bg-red-500 dark:bg-[#ef4444] hover:bg-red-600 dark:hover:bg-[#dc2626] text-white py-3.5 md:py-4 rounded-xl md:rounded-2xl font-bold text-xs md:text-sm flex items-center justify-center gap-2 transition-all active:scale-95 shadow-lg shadow-red-500/20"
                  >
                    <FiSquare size={16} /> Finish Early
                  </button>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Meditation;