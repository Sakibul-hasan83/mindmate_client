import React, { useContext } from "react";
import { AuthContext } from "../Authentications/AuthProvider";
import { Link } from "react-router-dom";

// Icons for Dashboard from React Icons
import { 
  FiTrendingUp, FiActivity, FiTarget, FiAward, 
  FiMessageSquare, FiUsers, FiSearch, FiBookOpen, 
  FiHeart, FiCheckSquare, FiLink, FiZap, FiRefreshCw,
  FiUserPlus, FiClipboard, FiGlobe, FiCpu, FiPlus
} from "react-icons/fi";

// Landing Page Components
import HomeBanner from "./HomeBanner";
import MindMateCommunity from "./MindMindCommunity";
import Pressure from "../Elements/Pressure";
import MindMateFeatures from "../MindMateFeatures/MindMateFeatures";
import SafetyAndPrivacy from "../Elements/SafetyAndPrivacy";
import CalmerMind from "../Elements/CalmerMind";
import Questions from "../Elements/Questions";

/**
 * Home Component
 * Professional dashboard layout matching the provided screenshot
 */
const Home = () => {
  const { user } = useContext(AuthContext);

  // --- Dashboard View (Logged In) ---
  const Dashboard = () => (
    <div className="min-h-screen bg-[#f8fafc] dark:bg-[#0f172a] p-4 lg:p-10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Welcome Header */}
        <header className="pt-2">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white tracking-tight">
            Welcome back, {user?.displayName || "sakibvai80"}!
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1 font-medium">
            Here's your mental wellness overview
          </p>
        </header>

        {/* Daily Affirmation Card */}
        <div className="bg-[#111827] dark:bg-[#1e293b] border border-teal-500/30 rounded-2xl p-6 shadow-xl relative overflow-hidden">
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center gap-2 text-teal-400 text-sm font-bold uppercase">
              <div className="p-1 bg-teal-500/20 rounded-md"><FiZap /></div>
              Daily Affirmation
            </div>
            <FiRefreshCw className="text-teal-500/50 cursor-pointer hover:rotate-180 transition-transform duration-700" />
          </div>
          <p className="text-xl lg:text-2xl font-semibold text-white leading-relaxed">
             "You let go of worry and embrace tranquility, {user?.displayName || "sakibvai80"}."
          </p>
          <div className="mt-8 flex justify-center">
            <span className="text-[10px] text-teal-500/40 font-bold tracking-[0.4em] uppercase">
              ✦ Take a moment to let this affirmation sink in ✦
            </span>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard label="Mood Entries" value="0" color="bg-[#4fd1c5]" />
          <StatCard label="Forum Posts" value="0" color="bg-[#4bc9f0]" />
          <StatCard label="Connections" value="0" color="bg-[#2ecc71]" />
          <StatCard label="Avg Mood (7d)" value="N/A" color="bg-[#f06292]" />
        </div>

        {/* Level & XP Progress Card */}
        <div className="bg-white dark:bg-[#1e293b] border border-gray-100 dark:border-gray-800 p-6 rounded-2xl shadow-sm">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🎮</span>
              <h3 className="text-lg font-bold dark:text-white">Level 1 • 0/100 XP</h3>
            </div>
            <button className="bg-[#26c6da] hover:bg-[#00acc1] text-white px-6 py-2 rounded-xl text-sm font-bold transition-all">
              View Progress
            </button>
          </div>
          <div className="w-full bg-gray-100 dark:bg-gray-800 h-3 rounded-full overflow-hidden">
            <div className="bg-[#26c6da] h-full w-[10%] rounded-full shadow-[0_0_8px_rgba(38,198,218,0.5)]"></div>
          </div>
          <div className="flex flex-wrap gap-6 mt-5 text-xs font-bold text-gray-400 uppercase tracking-widest">
            <span className="flex items-center gap-1">🏆 0 badges</span>
            <span className="flex items-center gap-1">🎯 0 challenges</span>
            <span className="flex items-center gap-1">🔥 0 day streak</span>
          </div>
        </div>

        {/* Quick Actions Grid */}
        <section>
          <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-6">Quick Actions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pb-10">
            <ActionCard icon={<FiTrendingUp />} title="Log Your Mood" desc="Track how you're feeling today" color="text-[#4fd1c5]" />
            <ActionCard icon={<FiActivity />} title="Wellness Activities" desc="Guided meditation & exercises" color="text-[#4fd1c5]" />
            <ActionCard icon={<FiTarget />} title="Your Goals" desc="Track habits & milestones" color="text-[#4fd1c5]" />
            <ActionCard icon={<FiAward />} title="Gamification" desc="Level up & earn badges" color="text-orange-400" />
            
            <ActionCard icon={<FiMessageSquare />} title="Chat with AI" desc="Talk to your AI companion" color="text-[#4fd1c5]" />
            <ActionCard icon={<FiUsers />} title="Community" desc="Connect with peers" color="text-[#2ecc71]" />
            <ActionCard icon={<FiHeart />} title="Find Matches" desc="Meet supportive peers" color="text-[#f06292]" />
            <ActionCard icon={<FiBookOpen />} title="CBT Tools" desc="Cognitive behavioral therapy" color="text-indigo-400" />
            
            <ActionCard icon={<FiUserPlus />} title="Find a Therapist" desc="Connect with professionals" color="text-[#2ecc71]" />
            <ActionCard icon={<FiClipboard />} title="Self-Assessments" desc="Track mental health metrics" color="text-[#4bc9f0]" />
            <ActionCard icon={<FiGlobe />} title="Social Hub" desc="Connect and collaborate" color="text-[#f06292]" />
            <ActionCard icon={<FiAward />} title="Wellness Challenges" desc="Join 30-day challenges" color="text-orange-400" />
            
            <ActionCard icon={<FiLink />} title="Integrations" desc="Connect your apps" color="text-[#4fd1c5]" />
            <ActionCard icon={<FiCpu />} title="AI Insights" desc="Personalized AI analysis" color="text-purple-500" />
            <ActionCard icon={<FiPlus />} title="Add New" desc="Customize your dashboard" color="text-gray-400" />
          </div>
        </section>
      </div>
    </div>
  );

  // --- Guest View (Landing Page) ---
  const GuestHome = () => (
    <div className="animate-in fade-in duration-700">
      <HomeBanner />
      <MindMateCommunity />
      <Pressure />
      <MindMateFeatures />
      <SafetyAndPrivacy />
      <CalmerMind />
      <Questions />
    </div>
  );

  return (
    <main className="min-h-screen transition-colors duration-300">
      {user ? <Dashboard /> : <GuestHome />}
    </main>
  );
};

// --- Stat Card Helper ---
const StatCard = ({ label, value, color }) => (
  <div className={`${color} p-5 rounded-xl text-white shadow-sm flex flex-col justify-between min-h-[115px] transition-transform hover:translate-y-[-2px]`}>
    <div className="flex justify-between items-start">
      <span className="text-xs font-bold uppercase tracking-tight opacity-90">{label}</span>
      <div className="bg-white/20 p-1.5 rounded-lg text-lg"><FiActivity /></div>
    </div>
    <span className="text-4xl font-bold">{value}</span>
  </div>
);

// --- Action Card Helper ---
const ActionCard = ({ icon, title, desc, color }) => (
  <div className="bg-white dark:bg-[#1e293b] border border-gray-100 dark:border-gray-800 p-6 rounded-2xl hover:border-teal-500/50 transition-all cursor-pointer group shadow-sm">
    <div className={`${color} text-2xl mb-4 p-3 bg-gray-50 dark:bg-gray-800/50 w-fit rounded-xl group-hover:bg-teal-500 group-hover:text-white transition-all`}>
      {icon}
    </div>
    <h3 className="font-bold text-gray-900 dark:text-white text-sm mb-1">{title}</h3>
    <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{desc}</p>
  </div>
);

export default Home;