import React, { useState, useEffect } from 'react';
import { FiArrowLeft, FiWind, FiRotateCcw, FiSquare, FiPlay } from 'react-icons/fi';

const Breathing = () => {
  const [selectedId, setSelectedId] = useState('Coherent Breathing');
  const [isActive, setIsActive] = useState(false);
  const [currentRound, setCurrentRound] = useState(1);
  const [phase, setPhase] = useState('Breathe in');

  const exercises = {
    'Coherent Breathing': {
      title: 'Coherent Breathing',
      desc: 'Balances your autonomic nervous system',
      pattern: { in: 5, out: 5 },
      totalRounds: 4,
      benefits: ["Reduces stress and anxiety quickly", "Improves focus and mental clarity", "Helps regulate emotions and mood"]
    },
    '4-7-8 Breathing': {
      title: '4-7-8 Breathing',
      desc: 'Calms the nervous system and reduces anxiety',
      pattern: { in: 4, hold: 7, out: 8 },
      totalRounds: 4,
      benefits: ["Promotes deep relaxation", "Helps with falling asleep", "Reduces panic symptoms"]
    }
  };

  const activeData = exercises[selectedId];

  // টাইমার লজিক এখানে যুক্ত করা যেতে পারে
  const handleStop = () => {
    setIsActive(false);
    setCurrentRound(1);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0b1120] text-slate-900 dark:text-slate-100 p-4 md:p-10 font-sans transition-colors duration-300">
      <div className="max-w-5xl mx-auto space-y-8">
        
        {/* Header */}
        <header className="space-y-4">
          <button className="flex items-center gap-2 text-teal-600 dark:text-[#14b8a6] text-sm font-bold">
            <FiArrowLeft /> Back to Resources
          </button>
          <div className="flex items-center gap-4">
            <div className="p-4 bg-teal-100 dark:bg-[#14b8a6]/10 rounded-2xl">
              <FiWind className="text-teal-600 dark:text-[#14b8a6]" size={32} />
            </div>
            <div>
              <h1 className="text-4xl font-extrabold">Breathing Exercises</h1>
              <p className="text-slate-500 dark:text-slate-400">Controlled breathing to reduce stress and anxiety</p>
            </div>
          </div>
        </header>

        {/* Exercises Selector */}
        <div className="grid md:grid-cols-3 gap-4">
          {Object.keys(exercises).map((key) => (
            <button
              key={key}
              onClick={() => setSelectedId(key)}
              className={`p-5 rounded-2xl border text-left transition-all ${
                selectedId === key 
                ? 'bg-white dark:bg-[#1e293b]/80 border-teal-500 dark:border-[#14b8a6] shadow-lg' 
                : 'bg-white dark:bg-[#1e293b]/40 border-slate-200 dark:border-slate-800'
              }`}
            >
              <h3 className="font-bold">{exercises[key].title}</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{exercises[key].desc}</p>
            </button>
          ))}
        </div>

        {/* Main Exercise Card */}
        <main className="bg-white dark:bg-[#1e293b]/40 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] p-8 md:p-12 text-center">
          {!isActive ? (
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold">{activeData.title}</h2>
                <p className="text-slate-500 dark:text-slate-400">{activeData.desc}</p>
              </div>
              
              <button 
                onClick={() => setIsActive(true)}
                className="bg-teal-600 dark:bg-[#14b8a6] text-white px-10 py-4 rounded-2xl font-bold hover:opacity-90 flex items-center gap-2 mx-auto"
              >
                <FiPlay /> Start Exercise
              </button>

              <div className="bg-slate-50 dark:bg-[#0b1120]/40 p-6 rounded-2xl text-left border border-slate-200 dark:border-slate-800">
                <h4 className="font-bold mb-3">Benefits:</h4>
                <ul className="space-y-2">
                  {activeData.benefits.map((b, i) => <li key={i} className="text-sm text-slate-600 dark:text-slate-300">✓ {b}</li>)}
                </ul>
              </div>
            </div>
          ) : (
            /* Active Mode UI */
            <div className="space-y-8">
              <span className="bg-teal-100 dark:bg-[#14b8a6]/20 text-teal-700 dark:text-[#14b8a6] px-4 py-1 rounded-full text-xs font-bold uppercase">
                Round {currentRound} of {activeData.totalRounds}
              </span>
              
              <div className="w-48 h-48 mx-auto bg-blue-500 dark:bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-black shadow-xl">
                {phase}
              </div>

              <div className="flex gap-4 justify-center">
                <button onClick={handleStop} className="bg-red-500 text-white px-8 py-3 rounded-xl font-bold flex items-center gap-2">
                  <FiSquare /> Stop
                </button>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Breathing;