import React from 'react';
import { FiUsers, FiCalendar, FiGlobe, FiCpu, FiArrowRight } from 'react-icons/fi';

const SocialHub = () => {
  const hubs = [
    { title: 'Study Buddy Finder', desc: 'Find study partners who share your academic goals and interests', icon: <FiUsers />, color: 'bg-blue-600', points: ['Match by subjects and goals', 'Schedule study sessions', 'Share resources', 'Track progress together'] },
    { title: 'Local Events', desc: 'Discover and organize local meetups, workshops, and social gatherings', icon: <FiCalendar />, color: 'bg-purple-600', points: ['Create and join events', 'Online and in-person options', 'RSVP and reminders', 'Connect with attendees'] },
    { title: 'Interest Groups', desc: 'Join communities based on your hobbies, interests, and passions', icon: <FiGlobe />, color: 'bg-green-600', points: ['Topic-based communities', 'Group discussions', 'Share resources', 'Organize group activities'] },
    { title: 'Virtual Game Nights', desc: 'Join fun online game sessions and connect through play', icon: <FiCpu />, color: 'bg-pink-600', points: ['Scheduled game sessions', 'Various game types', 'Voice chat included', 'Make new friends'] },
  ];

  return (

    <div className="min-h-screen bg-slate-50 dark:bg-[#0b1120] text-slate-900 dark:text-slate-100 p-6 md:p-10 transition-colors duration-300">
      <div className="max-w-6xl mx-auto space-y-10">
        <header>
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <FiGlobe className="text-teal-600 dark:text-teal-400"/> Social Hub
          </h1>
          <p className="text-slate-500 dark:text-slate-400 mt-2 font-medium">Connect, collaborate, and build meaningful relationships</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {hubs.map((hub, i) => (
          
            <div key={i} className="bg-white dark:bg-[#1e293b]/40 border border-slate-200 dark:border-slate-800 p-8 rounded-[2rem] space-y-6 shadow-sm dark:shadow-none hover:shadow-md transition-all">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-slate-100 dark:bg-slate-800 rounded-xl text-2xl text-teal-600 dark:text-teal-400">
                  {hub.icon}
                </div>
                <div>
                  <h3 className="font-bold text-xl">{hub.title}</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{hub.desc}</p>
                </div>
              </div>
              <ul className="space-y-2">
                {hub.points.map((p, j) => (
                  <li key={j} className="text-xs text-slate-600 dark:text-slate-300 flex items-center gap-2">
                    <span className="text-green-500 font-bold">✓</span> {p}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-3 ${hub.color} text-white rounded-xl font-bold text-sm hover:opacity-90 transition-all shadow-lg shadow-${hub.color.split('-')[1]}-500/20`}>
                Explore {hub.title}
              </button>
            </div>
          ))}
        </div>


        <div className="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 p-6 rounded-2xl grid grid-cols-1 md:grid-cols-3 gap-6 shadow-sm dark:shadow-none">
           <div className="space-y-1">
              <h4 className="font-bold text-teal-600 dark:text-teal-400 text-sm">Build Support Networks</h4>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">Connect with people who understand your journey</p>
           </div>
           <div className="space-y-1 border-y md:border-y-0 md:border-x border-slate-100 dark:border-white/10 py-4 md:py-0 md:px-6">
              <h4 className="font-bold text-orange-600 dark:text-orange-400 text-sm">Learn Together</h4>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">Share knowledge and grow through collaboration</p>
           </div>
           <div className="space-y-1 md:pl-6">
              <h4 className="font-bold text-blue-600 dark:text-blue-400 text-sm">Have Fun</h4>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">Enjoy activities and make lasting friendships</p>
           </div>
        </div>
      </div>
    </div>
  );
};

export default SocialHub;