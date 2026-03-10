import React, { useState, useEffect, useRef, useContext } from "react";
import { Link } from "react-router-dom";
import navbarLogoBrain from "../assets/navbarLogo.png";
import { AuthContext } from "../Authentications/AuthProvider"; 
import { 
  FiSearch, FiBell, FiMail, FiMoon, FiLogOut, 
  FiMenu, FiChevronDown, FiUser, FiSettings, FiHelpCircle 
} from "react-icons/fi";

const Navbar = ({ isCollapsed, setIsCollapsed }) => {
  const { user, logout } = useContext(AuthContext); 
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const profileRef = useRef(null);

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
    <nav className="w-full bg-white border-b border-gray-100 shadow-sm z-50 font-sans">
      <div className="w-full px-6 h-20 flex justify-between items-center">
        
        {/* লোগো ও সাইডবার টগল সেকশন */}
        <div className="flex items-center gap-4">
          {user && (
            <button onClick={() => setIsCollapsed(!isCollapsed)} className="p-2 hover:bg-gray-100 rounded-lg">
              <FiMenu className="text-xl text-gray-600" />
            </button>
          )}
          <Link to="/" className="flex items-center gap-2">
            <img src={navbarLogoBrain} alt="MindMate Logo" className="w-9 h-9 object-contain" />
            <span className="text-xl font-bold text-[#1e293b]">MindMate</span>
          </Link>
        </div>

        {/* ড্যাশবোর্ডে সার্চ বার অথবা পাবলিক সাইটে মেনু লিঙ্ক */}
        {user ? (
          <div className="hidden lg:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input type="text" placeholder="Search pages, features, tools..." className="w-full bg-[#f8fafc] border border-gray-200 rounded-lg py-2 pl-10 pr-4 text-sm outline-none" />
            </div>
          </div>
        ) : (
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            <a href="#features" className="hover:text-teal-500">Features</a>
            <a href="#how" className="hover:text-teal-500">How it works</a>
            <a href="#safety" className="hover:text-teal-500">Safety & Privacy</a>
            <a href="#crisis" className="hover:text-teal-500">Crisis Support</a>
          </div>
        )}

        {/* ইউজার কন্ট্রোলস */}
        <div className="flex items-center gap-4">
          {user ? (
            <div className="flex items-center gap-4 text-gray-500">
              <button className="hover:text-teal-500"><FiBell /></button>
              <button className="hover:text-teal-500"><FiMail /></button>
              <button className="hover:text-teal-500"><FiMoon /></button>
              <div className="relative" ref={profileRef}>
                <button onClick={() => setIsProfileOpen(!isProfileOpen)} className="flex items-center gap-2 pl-2">
                  <div className="w-9 h-9 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {user.displayName?.charAt(0).toUpperCase() || "S"}
                  </div>
                  <FiChevronDown className="text-gray-400" />
                </button>
                {isProfileOpen && (
                  <div className="absolute right-0 mt-3 w-56 bg-white border border-gray-100 rounded-xl shadow-xl p-2 z-50">
                    <div className="px-4 py-2 border-b">
                      <p className="text-sm font-bold">{user.displayName}</p>
                      <p className="text-xs text-gray-400">{user.email}</p>
                    </div>
                    <Link to="/profile" className="flex items-center gap-2 px-3 py-2 text-sm text-gray-600 hover:bg-gray-50"><FiUser /> View Profile</Link>
                    <Link to="/settings" className="flex items-center gap-2 px-3 py-2 text-sm text-gray-600 hover:bg-gray-50"><FiSettings /> Settings</Link>
                    <Link to="/help" className="flex items-center gap-2 px-3 py-2 text-sm text-gray-600 hover:bg-gray-50"><FiHelpCircle /> Help & Support</Link>
                    <button onClick={logout} className="w-full text-left px-3 py-2 text-sm text-red-500 hover:bg-red-50"><FiLogOut className="inline mr-2" /> Logout</button>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <Link to="/login" className="px-5 py-2 text-sm font-medium text-gray-700 border border-gray-200 rounded-lg hover:border-gray-300">Log In</Link>
              <Link to="/signup" className="px-5 py-2 text-sm font-medium bg-teal-500 text-white rounded-lg hover:bg-teal-600">Register</Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;