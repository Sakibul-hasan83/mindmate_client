import React, { useState } from 'react';
import { FiSearch, FiHeart, FiPlay, FiClock, FiCheck, FiChevronDown, FiZap } from 'react-icons/fi';

const Library = () => {
  const [activeTab, setActiveTab] = useState('All Activities');

  // Filter dropdown options based on UI images
  const filterOptions = {
    types: ["All Types", "Meditation", "Breathing", "Sleep", "Yoga", "Mindfulness", "Relaxation"],
    levels: ["All Levels", "Beginner", "Intermediate", "Advanced"],
    categories: ["All Categories", "Stress Relief", "Sleep", "Anxiety", "Focus", "Energy", "Calm"]
  };

  // Activity data
  const activities = [
    {
      title: "Box Breathing",
      desc: "A powerful stress-relief technique used by Navy SEALs. Breathe in for 4, hold for 4, out...",
      duration: "5 min",
      level: "beginner",
      tags: ["anxiety", "quick", "stress"],
      benefits: ["Reduces stress", "Calms nervous system"]
    },
    {
      title: "4-7-8 Breathing",
      desc: "Dr. Weil's relaxation breath. Perfect for falling asleep and reducing anxiety.",
      duration: "5 min",
      level: "beginner",
      tags: ["sleep", "anxiety", "relaxation"],
      benefits: ["Promotes sleep", "Reduces anxiety"]
    },
    {
      title: "5-4-3-2-1 Grounding",
      desc: "Grounding technique using your five senses to calm anxiety.",
      duration: "5 min",
      level: "beginner",
      tags: ["anxiety", "grounding", "quick"],
      benefits: ["Stops panic attacks", "Grounds you in present"]
    }
  ];

  return (
    /* Theme Support: bg-white for light, bg-[#0b1120] for dark */
    <div className="min-h-screen bg-white dark:bg-[#0b1120] text-slate-900 dark:text-white p-4 md:p-10 font-sans transition-colors duration-300">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header Section */}
        <div className="space-y-1 pt-4">
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight">Wellness Library</h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Guided activities for your mental wellness journey</p>
        </div>

        {/* Search & Filters Section - Responsive Flex/Grid */}
        <div className="flex flex-col lg:flex-row gap-4 bg-slate-100 dark:bg-[#1e293b]/30 p-4 rounded-2xl border border-slate-200 dark:border-slate-800">
          <div className="relative flex-1">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search activities..." 
              className="w-full bg-white dark:bg-[#0b1120] border border-slate-200 dark:border-slate-800 rounded-xl py-3 pl-12 pr-4 text-sm focus:border-teal-500 outline-none transition-all dark:text-white text-slate-900 shadow-sm"
            />
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <FilterSelect options={filterOptions.types} />
            <FilterSelect options={filterOptions.levels} />
            <FilterSelect options={filterOptions.categories} />
          </div>
        </div>

        {/* Tab Navigation - Horizontal Scroll on Mobile */}
        <div className="flex items-center gap-6 md:gap-8 border-b border-slate-200 dark:border-slate-800 overflow-x-auto no-scrollbar scroll-smooth">
          <TabItem label="All Activities" active={activeTab === 'All Activities'} onClick={() => setActiveTab('All Activities')} />
          <TabItem label="My Favorites" active={activeTab === 'My Favorites'} onClick={() => setActiveTab('My Favorites')} icon={<FiHeart className="mr-2" />} />
          <TabItem label="For You" active={activeTab === 'For You'} onClick={() => setActiveTab('For You')} icon={<FiZap className="mr-2" />} />
        </div>

        {/* Dynamic Content Grid - 1 col on mobile, 2 on tablet, 3 on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-10">
          {activities.map((activity, index) => (
            <ActivityCard key={index} activity={activity} />
          ))}
          {/* Repeating items for demonstration to show grid layout */}
          {activities.map((activity, index) => (
            <ActivityCard key={`extra-${index}`} activity={activity} />
          ))}
        </div>
      </div>
    </div>
  );
};

/* --- Dropdown Component --- */
const FilterSelect = ({ options }) => (
  <div className="relative min-w-full sm:min-w-[140px]">
    <select className="w-full bg-white dark:bg-[#0b1120] border border-slate-200 dark:border-slate-800 rounded-xl py-3 px-4 text-sm appearance-none cursor-pointer focus:border-teal-500 outline-none text-slate-600 dark:text-slate-300 shadow-sm">
      {options.map((opt, i) => (
        <option key={i} value={opt} className="bg-white dark:bg-[#1e293b] text-slate-900 dark:text-white">
          {opt}
        </option>
      ))}
    </select>
    <FiChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
  </div>
);

/* --- Tab Navigation Item --- */
const TabItem = ({ label, active, onClick, icon }) => (
  <button 
    onClick={onClick} 
    className={`flex items-center pb-4 text-sm font-bold transition-all relative whitespace-nowrap ${
      active ? 'text-teal-600 dark:text-teal-400' : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-300'
    }`}
  >
    {icon}{label}
    {active && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-teal-500 rounded-full" />}
  </button>
);

/* --- Individual Activity Card --- */
const ActivityCard = ({ activity }) => (
  <div className="bg-white dark:bg-[#1e293b]/40 border border-slate-200 dark:border-slate-800 rounded-[2rem] overflow-hidden group hover:border-teal-500/50 transition-all shadow-md hover:shadow-xl">
    {/* Card Header Area */}
    <div className="h-44 md:h-48 bg-teal-50 dark:bg-teal-500/10 relative flex items-center justify-center">
      <div className="w-12 h-16 border-2 border-teal-200 dark:border-teal-500/30 rounded" />
      <button className="absolute top-4 right-4 p-2.5 bg-white/80 dark:bg-white/5 backdrop-blur-md rounded-full text-slate-400 dark:text-white hover:text-red-500 dark:hover:text-teal-400 transition-colors shadow-sm">
        <FiHeart size={18} />
      </button>
      <div className="absolute top-4 left-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-widest">
        {activity.level}
      </div>
    </div>

    {/* Card Content Area */}
    <div className="p-6 space-y-4">
      <h3 className="text-xl font-bold text-slate-800 dark:text-white tracking-tight">{activity.title}</h3>
      <div className="flex items-center text-xs font-bold text-slate-500 dark:text-slate-400">
        <FiClock className="mr-1.5" /> {activity.duration}
      </div>
      
      {/* Benefits Section */}
      <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-2">
        {activity.benefits.map(benefit => (
          <div key={benefit} className="flex items-center text-xs font-bold text-teal-600 dark:text-teal-400">
            <FiCheck className="mr-2" /> {benefit}
          </div>
        ))}
      </div>

      <button className="w-full bg-teal-600 dark:bg-teal-500 hover:bg-teal-700 dark:hover:bg-teal-400 text-white dark:text-slate-900 font-bold py-3.5 rounded-2xl flex items-center justify-center gap-2 transition-all mt-4 active:scale-95 shadow-lg shadow-teal-500/20">
        <FiPlay className="fill-current" /> Start Activity
      </button>
    </div>
  </div>
);

export default Library;