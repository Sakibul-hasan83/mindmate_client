import React from "react";
import { NavLink } from "react-router-dom";
import { 
  FiHome, FiMessageSquare, FiSmile, FiUsers, FiMail, FiLink, 
  FiLogOut, FiActivity, FiTarget, FiAward, FiBookOpen, 
  FiHeadphones, FiWind, FiFileText, FiEdit3 
} from "react-icons/fi";
import navbarLogoBrain from "../assets/navbarLogo.png";

const Sidebar = ({ isCollapsed, logout }) => {
  return (
    <aside className={`bg-white border-r border-slate-200 transition-all duration-500 ease-in-out flex flex-col h-full shadow-[4px_0_24px_rgba(0,0,0,0.03)] z-40 ${isCollapsed ? 'w-20' : 'w-64'}`}>
      
      {/* Brand Logo Section */}
      <div className={`px-6 py-8 flex items-center gap-3 border-b border-slate-100 ${isCollapsed ? 'justify-center' : ''} min-h-[80px]`}>
        <div className="flex items-center justify-center w-10 h-10 rounded-2xl bg-teal-500 shadow-lg shadow-teal-500/20 flex-shrink-0">
           <img src={navbarLogoBrain} alt="Logo" className="w-6 h-6 object-contain brightness-0 invert" />
        </div>
        {!isCollapsed && (
          <span className="text-xl font-black text-slate-800 tracking-tighter">MindMate</span>
        )}
      </div>

      {/* Menu Area */}
      <div className="flex-1 py-6 px-3 flex flex-col gap-1 overflow-y-auto custom-scrollbar">
        <SidebarItem icon={<FiHome />} label="Home" isCollapsed={isCollapsed} to="/dashboard" />
        <SidebarItem icon={<FiMessageSquare />} label="AI Chat" isCollapsed={isCollapsed} to="/chat" badge="AI" />
        <SidebarItem icon={<FiSmile />} label="Mood" isCollapsed={isCollapsed} to="/mood" />
        <SidebarItem icon={<FiUsers />} label="Community" isCollapsed={isCollapsed} to="/community" />
        <SidebarItem icon={<FiMail />} label="Messages" isCollapsed={isCollapsed} to="/messages" />

        <SidebarSection label="Insights" isCollapsed={isCollapsed} />
        <SidebarItem icon={<FiLink />} label="Mood Analytics" isCollapsed={isCollapsed} to="/analytics" />
        <SidebarItem icon={<FiActivity />} label="AI Insights" isCollapsed={isCollapsed} to="/ai-insights" />
        <SidebarItem icon={<FiTarget />} label="Goals" isCollapsed={isCollapsed} to="/goals" />
        <SidebarItem icon={<FiAward />} label="Rewards" isCollapsed={isCollapsed} to="/rewards" />

        <SidebarSection label="Wellness" isCollapsed={isCollapsed} />
        <SidebarItem icon={<FiBookOpen />} label="Library" isCollapsed={isCollapsed} to="/library" />
        <SidebarItem icon={<FiHeadphones />} label="Meditation" isCollapsed={isCollapsed} to="/meditation" />
        <SidebarItem icon={<FiWind />} label="Breathing" isCollapsed={isCollapsed} to="/breathing" />
        <SidebarItem icon={<FiFileText />} label="CBT Tools" isCollapsed={isCollapsed} to="/cbt" />
        <SidebarItem icon={<FiEdit3 />} label="Journal" isCollapsed={isCollapsed} to="/journal" />
      </div>

      {/* Logout Footer */}
      <div className="p-4 border-t border-slate-100 bg-white mt-auto">
        <button 
          onClick={logout} 
          className={`flex items-center w-full p-3 rounded-xl transition-all duration-300 ${isCollapsed ? "justify-center" : "gap-4"} hover:bg-red-500 hover:text-white text-red-500 group`}
        >
          <FiLogOut className="text-xl stroke-[2.5px]" />
          {!isCollapsed && <span className="font-bold tracking-wide">Logout</span>}
        </button>
      </div>
    </aside>
  );
};

const SidebarItem = ({ icon, label, isCollapsed, to, badge }) => (
  <NavLink 
    to={to} 
    className={({ isActive }) => `
      flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 font-semibold text-[14px]
      ${isActive 
        ? "bg-gradient-to-r from-teal-500 to-teal-600 text-white shadow-lg shadow-teal-500/20" 
        : "text-slate-500 hover:bg-slate-50 hover:text-teal-600"}
    `}
  >
    <span className={`text-xl ${isCollapsed ? 'mx-auto' : ''}`}>{icon}</span>
    {!isCollapsed && (
      <div className="flex items-center justify-between w-full">
        <span className="truncate">{label}</span>
        {badge && <span className="bg-white/20 backdrop-blur-sm text-[9px] text-white px-1.5 py-0.5 rounded-md font-bold">AI</span>}
      </div>
    )}
  </NavLink>
);

const SidebarSection = ({ label, isCollapsed }) => (
  !isCollapsed && (
    <div className="px-4 pt-6 pb-2 text-[10px] font-black text-slate-300 uppercase tracking-[0.2em]">
      {label}
    </div>
  )
);

export default Sidebar;