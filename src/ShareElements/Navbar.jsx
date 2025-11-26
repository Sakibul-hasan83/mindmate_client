import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  
  const links = (
    <>
      <li><Link to="/dashboard">Dashboard</Link></li>
      <li><Link to="/mood">Mood</Link></li>
      <li><Link to="/chat">AI Chat</Link></li>
      <li><Link to="/community">Community</Link></li>
      <li><Link to="/wellness">Wellness</Link></li>
      <li><Link to="/goals">Goals</Link></li>
    </>
  );

  return (
    <div className="sticky top-0 z-50 backdrop-blur-md bg-white/70 shadow-md">
      
      <div className="navbar max-w-7xl mx-auto px-6">
        
        {/* Left */}
        <div className="navbar-start">
          <div className="dropdown">
            <div 
              tabIndex={0} 
              role="button" 
              className="btn btn-ghost lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            {/* Mobile dropdown menu */}
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-white/70 backdrop-blur-md rounded-box z-[100] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>

          {/* Brand text */}
          <Link className="btn btn-ghost text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            MindMate
          </Link>
        </div>

        {/* Center menu (desktop) */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-medium text-gray-700">
            {links}
          </ul>
        </div>

        {/* Right side button */}
        <div className="navbar-end">
          <Link to={'/login'} className="btn bg-gradient-to-r from-blue-600 to-purple-600 text-white border-none hover:scale-105 transition-transform duration-300">
            Login
          </Link>
        </div>
        
      </div>
    </div>
  );
};

export default Navbar;
