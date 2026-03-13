import React, { useState } from "react";
import { FiPlus, FiMessageSquare, FiHeart, FiShare2, FiBookmark, FiFlag, FiX, FiSearch } from "react-icons/fi";

const Community = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("All Posts");

  const tags = ["All Posts", "#anxiety", "#stress", "#mindfulness", "#support", "#happy", "#recovery"];

  return (
    <div className="min-h-screen bg-white dark:bg-[#0f172a] transition-colors duration-300">
      {/* Container - Responsive Padding */}
      <div className="max-w-5xl mx-auto px-4 py-6 md:py-10">
        
        {/* Header Section - Stacked on Mobile */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-slate-800 dark:text-white tracking-tight">
              Community Forum
            </h1>
            <p className="text-sm md:text-base text-slate-500 dark:text-gray-400 mt-1 font-medium">
              Share and connect with peers in a safe space
            </p>
          </div>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-teal-500 hover:bg-teal-600 text-white font-bold transition-all shadow-lg shadow-teal-500/20 active:scale-95"
          >
            <FiPlus className="text-xl" /> New Post
          </button>
        </div>

        {/* Filter Section - Wrap on Mobile */}
        <div className="flex flex-wrap gap-2 mb-8">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTab(tag)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all border ${
                activeTab === tag
                  ? "bg-teal-500 border-teal-500 text-white"
                  : "bg-slate-100 dark:bg-gray-800 border-transparent text-slate-500 dark:text-gray-400 hover:border-teal-500/50"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Posts Feed */}
        <div className="space-y-6">
          <PostCard 
            author="Anonymous" 
            date="Dec 04, 2025" 
            title="Finding Peace in Daily Routine" 
            content="Today I started practicing 10 minutes of mindfulness, and it's already making a difference in my stress levels. Has anyone else tried this?"
            tags={["#mindfulness", "#health"]}
            isReposted
          />
          <PostCard 
            author="Anonymous" 
            date="Dec 03, 2025" 
            title="How to deal with social anxiety?" 
            content="I've been struggling with meeting new people lately. Any tips or small steps I can take?"
            tags={["#anxiety", "#help"]}
          />
        </div>
      </div>

      {/* Modal - Centered with Overlay */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white dark:bg-[#1e293b] w-full max-w-lg rounded-3xl shadow-2xl border border-slate-200 dark:border-gray-700 overflow-hidden">
            <div className="flex items-center justify-between p-5 border-b border-slate-100 dark:border-gray-800">
              <h2 className="text-lg font-bold text-slate-800 dark:text-white">Create New Post</h2>
              <button onClick={() => setIsModalOpen(false)} className="p-2 hover:bg-slate-100 dark:hover:bg-gray-800 rounded-full">
                <FiX className="text-xl text-slate-500" />
              </button>
            </div>
            <div className="p-5 space-y-4">
              <input type="text" placeholder="Title..." className="w-full bg-slate-50 dark:bg-gray-900 border border-slate-200 dark:border-gray-700 rounded-xl p-3 text-sm outline-none focus:border-teal-500 text-slate-800 dark:text-white" />
              <textarea rows="4" placeholder="Share your thoughts..." className="w-full bg-slate-50 dark:bg-gray-900 border border-slate-200 dark:border-gray-700 rounded-xl p-3 text-sm outline-none focus:border-teal-500 resize-none text-slate-800 dark:text-white"></textarea>
            </div>
            <div className="p-5 bg-slate-50 dark:bg-gray-900/50 flex gap-3">
              <button className="flex-1 py-3 rounded-xl bg-teal-500 hover:bg-teal-600 text-white font-bold text-sm" onClick={() => setIsModalOpen(false)}>Create Post</button>
              <button className="px-5 py-3 rounded-xl border border-slate-200 dark:border-gray-700 text-slate-600 dark:text-gray-400 font-bold text-sm" onClick={() => setIsModalOpen(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

/* --- Responsive Post Card Component --- */
const PostCard = ({ author, date, title, content, tags, isReposted }) => (
  <div className="bg-white dark:bg-[#1e293b] border border-slate-100 dark:border-gray-800 rounded-2xl p-5 md:p-6 shadow-sm hover:border-teal-500/30 transition-all">
    {isReposted && <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3"><FiShare2 /> Anonymous reposted</div>}
    
    <div className="flex items-center gap-3 mb-4">
      <div className="w-10 h-10 rounded-full bg-teal-500/10 flex items-center justify-center text-teal-500"><FiMessageSquare /></div>
      <div>
        <h4 className="text-xs font-bold text-slate-800 dark:text-white">{author}</h4>
        <span className="text-[10px] text-slate-400">{date}</span>
      </div>
    </div>

    <h3 className="text-base md:text-lg font-bold text-slate-800 dark:text-white mb-2">{title}</h3>
    <p className="text-xs md:text-sm text-slate-500 dark:text-gray-400 mb-4 leading-relaxed">{content}</p>
    
    <div className="flex gap-2 mb-4 flex-wrap">
      {tags.map(t => <span key={t} className="text-[10px] font-bold text-teal-500 bg-teal-500/5 px-2 py-1 rounded">{t}</span>)}
    </div>

    <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-gray-800">
      <div className="flex gap-4 text-slate-400 text-xs">
        <button className="hover:text-rose-500 flex items-center gap-1"><FiHeart /> 0</button>
        <button className="hover:text-teal-500 flex items-center gap-1"><FiMessageSquare /> 0</button>
      </div>
      <FiBookmark className="hover:text-teal-500 cursor-pointer text-slate-400" />
    </div>
  </div>
);

export default Community;