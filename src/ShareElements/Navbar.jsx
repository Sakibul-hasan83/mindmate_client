import React, { useState, useContext, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import navbarLogoBrain from "../assets/navbarLogo.png";
import { AuthContext } from "../Authentications/AuthProvider"; 
import { FiSearch, FiBell, FiMail, FiMoon, FiUser, FiSettings, FiHelpCircle, FiLogOut, FiWind, FiChevronDown } from "react-icons/fi";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext); 
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const profileRef = useRef(null);

  // NOTE: Closes profile dropdown when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    logout();
    setIsProfileOpen(false);
  };

  return (
    // NOTE: Changed class to w-full to remove side gaps
    <nav className="w-full bg-white border-b border-gray-100 shadow-sm sticky top-0 z-50 font-sans">
      <div className="w-full px-6 h-16 sm:h-20 flex justify-between items-center">
        
        {/* LEFT: Logo & Name */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 flex items-center justify-center">
              <img src={navbarLogoBrain} alt="MindMate Logo" className="w-full h-full object-contain" />
            </div>
            <span className="text-xl font-bold text-[#1e293b]">MindMate</span>
          </Link>
        </div>

        {/* CENTER: Search Bar */}
        {user && (
          <div className="hidden lg:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search pages, features, tools..." 
                className="w-full bg-[#f8fafc] border border-gray-200 rounded-lg py-2 pl-10 pr-4 text-sm outline-none focus:border-[#14b8a6] transition-all"
              />
            </div>
          </div>
        )}

        {/* RIGHT: User Section */}
        <div className="flex items-center gap-3 lg:gap-6">
          {user ? (
            <div className="flex items-center gap-2 sm:gap-4">
              <div className="hidden md:flex items-center gap-4 text-gray-500 mr-2">
                <button className="p-2 bg-[#f0fdfa] text-[#14b8a6] rounded-lg"><FiWind /></button>
                <button className="hover:text-[#14b8a6]"><FiBell /></button>
                <button className="hover:text-[#14b8a6]"><FiMail /></button>
                <button className="hover:text-[#14b8a6]"><FiMoon /></button>
              </div>

              <div className="relative" ref={profileRef}>
                <button 
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="flex items-center gap-2 p-1 rounded-full hover:bg-gray-50 transition"
                >
                  <div className="w-9 h-9 bg-[#14b8a6] rounded-full flex items-center justify-center text-white font-bold text-sm shadow-sm">
                    {user.displayName ? user.displayName.charAt(0).toUpperCase() : "S"}
                  </div>
                  <span className="text-sm font-semibold text-gray-700 hidden sm:block">
                    {user.displayName || "User"}
                  </span>
                  <FiChevronDown className={`text-gray-400 transition-transform ${isProfileOpen ? 'rotate-180' : ''}`} />
                </button>

                {isProfileOpen && (
                  <div className="absolute right-0 mt-3 w-56 bg-white border border-gray-100 rounded-xl shadow-xl py-2 z-50">
                    <div className="px-4 py-3 border-b border-gray-50">
                      <p className="text-sm font-bold text-gray-800">{user.displayName || "User"}</p>
                      <p className="text-[11px] text-gray-400 truncate">{user.email}</p>
                    </div>
                    <div className="p-1">
                      <Link to="/profile" className="flex items-center gap-3 px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg">
                        <FiUser /> View Profile
                      </Link>
                      <Link to="/settings" className="flex items-center gap-3 px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg">
                        <FiSettings /> Settings
                      </Link>
                      <Link to="/help" className="flex items-center gap-3 px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg">
                        <FiHelpCircle /> Help & Support
                      </Link>
                    </div>
                    <div className="p-1 border-t border-gray-100 mt-1">
                      <button onClick={handleLogout} className="w-full flex items-center gap-3 px-3 py-2 text-sm text-red-500 hover:bg-red-50 rounded-lg font-medium">
                        <FiLogOut /> Logout
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <Link to="/login" className="px-5 py-2 text-gray-700 font-semibold text-sm border border-gray-200 rounded-lg hover:bg-gray-50">Log In</Link>
              <Link to="/signup" className="px-5 py-2 bg-[#14b8a6] text-white rounded-lg hover:bg-[#0d9488] text-sm font-bold shadow-sm">Register</Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;