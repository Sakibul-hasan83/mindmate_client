import React, { useState, useEffect, useRef, useContext } from "react";
import { Link } from "react-router-dom";
import navbarLogoBrain from "../assets/navbarLogo.png";
import { AuthContext } from "../Authentications/AuthProvider"; 
import { 
  FiSearch, FiBell, FiMail, FiMoon, FiSun, FiLogOut, 
  FiMenu, FiChevronDown, FiUser, FiSettings, FiHelpCircle 
} from "react-icons/fi";

const Navbar = ({ isCollapsed, setIsCollapsed }) => {

  const { user, logout, theme, toggleTheme } = useContext(AuthContext); 
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const profileRef = useRef(null);

  // Close profile dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="w-full bg-white dark:bg-[#0f172a] border-b border-gray-100 dark:border-gray-800 shadow-sm z-50 font-sans transition-colors duration-300">
      <div className="w-full px-6 h-20 flex justify-between items-center">
        
        {/* LEFT: Logo & Sidebar Toggle */}
        <div className="flex items-center gap-4">
          {user && (
            <button 
              onClick={() => setIsCollapsed(!isCollapsed)} 
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
            >
              <FiMenu className="text-xl text-gray-600 dark:text-gray-300" />
            </button>
          )}
          <Link to="/" className="flex items-center gap-2">
            <img src={navbarLogoBrain} alt="MindMate Logo" className="w-9 h-9 object-contain" />
            <span className="text-xl font-bold text-[#1e293b] dark:text-white">MindMate</span>
          </Link>
        </div>

        {/* CENTER: Search Bar (Auth) or Nav Links (Guest) */}
        {user ? (
          <div className="hidden lg:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search pages, features, tools..." 
                className="w-full bg-[#f8fafc] dark:bg-[#1e293b] border border-gray-200 dark:border-gray-700 rounded-lg py-2 pl-10 pr-4 text-sm outline-none text-gray-700 dark:text-gray-200 focus:border-teal-500 transition-colors" 
              />
            </div>
          </div>
        ) : (
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600 dark:text-gray-300">
            <a href="#features" className="hover:text-teal-500 transition">Features</a>
            <a href="#how" className="hover:text-teal-500 transition">How it works</a>
            <a href="#safety" className="hover:text-teal-500 transition">Safety & Privacy</a>
          </div>
        )}

        {/* RIGHT: User Controls & Theme Toggle */}
        <div className="flex items-center gap-4">
          
          {/* Theme Toggle Button: Always visible */}
          <button 
            onClick={toggleTheme} 
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-yellow-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all"
            title={theme === 'light' ? "Switch to Dark Mode" : "Switch to Light Mode"}
          >
            {theme === "light" ? <FiMoon size={20} /> : <FiSun size={20} />}
          </button>

          {/* User Profile / Auth Links */}
          {user ? (
            <div className="flex items-center gap-4 text-gray-500 dark:text-gray-400">
              <button className="hover:text-teal-500 transition-colors"><FiBell size={20} /></button>
              <button className="hover:text-teal-500 transition-colors"><FiMail size={20} /></button>
              
              <div className="relative" ref={profileRef}>
                <button onClick={() => setIsProfileOpen(!isProfileOpen)} className="flex items-center gap-2 pl-2 group">
                  <div className="w-9 h-9 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-sm group-hover:ring-2 ring-teal-500/20 transition-all">
                    {user.displayName?.charAt(0).toUpperCase() || "S"}
                  </div>
                  <FiChevronDown className="text-gray-400 group-hover:text-teal-500 transition-colors" />
                </button>
                
                {/* Profile Dropdown Menu */}
                {isProfileOpen && (
                  <div className="absolute right-0 mt-3 w-64 bg-white dark:bg-[#1e293b] border border-gray-100 dark:border-gray-700 rounded-xl shadow-xl p-2 z-50">
                    <div className="px-4 py-3 border-b dark:border-gray-700 mb-1">
                      <p className="text-sm font-bold text-gray-800 dark:text-white">{user.displayName || "User"}</p>
                      <p className="text-xs text-gray-400 truncate">{user.email}</p>
                    </div>
                    <Link to="/profile" className="flex items-center gap-3 px-3 py-2.5 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg"><FiUser /> View Profile</Link>
                    <Link to="/settings" className="flex items-center gap-3 px-3 py-2.5 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg"><FiSettings /> Settings</Link>
                    <button 
                      onClick={logout} 
                      className="w-full flex items-center gap-3 px-3 py-2.5 text-sm text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 rounded-lg transition-colors font-medium"
                    >
                      <FiLogOut /> Logout
                    </button>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <Link to="/login" className="px-5 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all">Log In</Link>
              <Link to="/signup" className="px-5 py-2 text-sm font-medium bg-teal-500 text-white rounded-lg hover:bg-teal-600 shadow-md shadow-teal-500/20 transition-all">Register</Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;