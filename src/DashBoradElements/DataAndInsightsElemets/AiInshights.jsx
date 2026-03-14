import React from 'react';
import { 
  FiAlertTriangle, FiCheckCircle, FiTarget, FiZap, 
  FiMic, FiGlobe, FiVolume2, FiChevronDown 
} from 'react-icons/fi';

const AiInshights = () => {
  return (
    /* Main Container: Dark mode এ bg-[#0f172a] এবং Light mode এ white থাকবে */
    <div className="min-h-screen bg-white dark:bg-[#0f172a] text-slate-900 dark:text-white p-4 md:p-8 transition-colors duration-300">
      <div className="max-w-4xl mx-auto space-y-6">
        
        {/* --- Top Control Bar --- */}
        <div className="flex flex-wrap items-center justify-between gap-4 bg-slate-50 dark:bg-[#1e293b]/50 p-4 rounded-2xl border border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-2 bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-1.5 cursor-pointer">
            <FiGlobe className="text-teal-500" />
            <span className="text-xs font-bold uppercase tracking-wide">us English</span>
            <FiChevronDown className="text-slate-400" />
          </div>
          <div className="flex gap-2 w-full sm:w-auto">
            <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-slate-700 rounded-xl text-xs font-bold hover:bg-slate-100 dark:hover:bg-slate-800 transition-all">
              <FiVolume2 /> Voice Off
            </button>
            <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 bg-purple-600 rounded-xl text-white text-xs font-bold hover:bg-purple-700 shadow-lg shadow-purple-600/20 transition-all">
              <FiMic /> Transcribe
            </button>
          </div>
        </div>

        {/* --- Crisis Risk Assessment Box --- */}
        <div className="bg-orange-50 dark:bg-[#b45309]/10 border-2 border-orange-500/50 dark:border-[#b45309] rounded-2xl p-5 md:p-6">
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <div className="p-3 bg-orange-500 rounded-xl shadow-lg">
              <FiAlertTriangle size={24} className="text-white" />
            </div>
            <div className="space-y-3">
              <h2 className="text-lg md:text-xl font-black text-orange-600 dark:text-[#f59e0b] uppercase tracking-tight">
                Crisis Risk Assessment: MODERATE
              </h2>
              <p className="text-sm font-bold text-orange-800 dark:text-[#fbbf24]">
                Based on your recent activity, our AI has detected some concerning patterns.
              </p>
              <div className="space-y-1">
                <p className="text-[10px] font-black text-orange-700 dark:text-[#d97706] uppercase tracking-widest">Recommendations:</p>
                <ul className="text-xs space-y-1.5 text-orange-900 dark:text-[#fbbf24]/90 list-disc list-inside font-semibold">
                  <li>Try to connect with at least one person today</li>
                  <li>Join a support group or community activity</li>
                  <li>Continue tracking your mood and feelings</li>
                  <li>Use the wellness activities for immediate relief</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* --- Tab Navigation --- */}
        <div className="flex gap-6 md:gap-10 border-b border-slate-200 dark:border-slate-800 px-2 overflow-x-auto scrollbar-hide">
          {['Insights', 'Mood', 'Behavior', 'Mental Health'].map((tab, i) => (
            <button key={tab} className={`pb-3 text-sm font-bold whitespace-nowrap transition-all ${i === 0 ? 'text-teal-500 border-b-2 border-teal-500' : 'text-slate-400 hover:text-slate-600'}`}>
              {tab}
            </button>
          ))}
        </div>

        {/* --- Areas for Growth (Responsive List) --- */}
        <div className="bg-slate-50 dark:bg-[#1e293b]/30 border border-slate-200 dark:border-slate-800 rounded-3xl p-6">
          <h3 className="flex items-center gap-2 text-sm font-black uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-5">
            <FiTarget className="text-blue-500" /> Areas for Growth
          </h3>
          <div className="grid gap-3">
            {[
              'Journaling practice - regular journaling helps track patterns',
              'Mental health assessments - regular check-ins are important',
              'Data tracking - more consistent tracking provides better insights'
            ].map((text, i) => (
              <div key={i} className="bg-blue-600 p-4 rounded-xl text-xs md:text-sm font-bold text-white transition-transform hover:scale-[1.01] cursor-default border border-blue-400/20">
                {text}
              </div>
            ))}
          </div>
        </div>

        {/* --- Personalized Recommendations (Grid Layout) --- */}
        <div className="bg-slate-50 dark:bg-[#1e293b]/30 border border-slate-200 dark:border-slate-800 rounded-3xl p-6">
          <h3 className="flex items-center gap-2 text-sm font-black uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-5">
            <FiZap className="text-yellow-500" /> Personalized Recommendations
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <RecommendationCard 
              priority="medium" 
              title="Start a daily journaling practice" 
              desc="Journaling helps process emotions and track patterns"
            />
            <RecommendationCard 
              priority="low" 
              title="Join a wellness challenge to stay motivated" 
              desc="Challenges provide structure and community support"
            />
          </div>
        </div>

      </div>
    </div>
  );
};

/* --- Recommendation Card Component (Responsive & Theme-ready) --- */
const RecommendationCard = ({ priority, title, desc }) => {
  const isMedium = priority === 'medium';
  return (
    <div className="bg-rose-900/90 dark:bg-[#4c1d35] border border-rose-500/20 p-5 rounded-2xl hover:border-rose-500/40 transition-all group cursor-pointer">
      <span className={`text-[9px] font-black uppercase px-2 py-0.5 rounded shadow-sm ${isMedium ? 'bg-orange-500/20 text-orange-400' : 'bg-blue-500/20 text-blue-400'}`}>
        {priority} priority
      </span>
      <h4 className="text-sm font-bold text-white mt-3 leading-snug">{title}</h4>
      <p className="text-[11px] text-rose-100/60 mt-2 leading-relaxed font-medium">{desc}</p>
    </div>
  );
};

export default AiInshights;