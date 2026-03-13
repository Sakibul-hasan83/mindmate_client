import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { AuthContext } from '../Authentications/AuthProvider';
import Navbar from '../ShareElements/Navbar'; 
import Sidebar from '../ShareElements/Sidebar';
import Footer from '../ShareElements/Footer';

const Layout = () => {
  const [isCollapsed, setIsCollapsed] = React.useState(false);
  // Get theme from AuthContext to apply the 'dark' class dynamically
  const { user, logout, theme } = useContext(AuthContext); 

  return (
    /* Adding the 'dark' class to the root div based on theme state.
      We also add dark:bg-[#0f172a] to match your dark mode screenshot.
    */
    <div className={`min-h-screen transition-colors duration-300 ${theme === 'dark' ? 'dark' : ''}`}>
      <div className="min-h-screen flex flex-col bg-[#f8fafc] dark:bg-[#0f172a] text-[#1e293b] dark:text-gray-100">
        {user ? (
          <div className="h-screen flex flex-col overflow-hidden">
            <div className="h-20 flex-shrink-0 z-50">
              <Navbar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
            </div>
            
            <div className="flex flex-1 overflow-hidden">
              <div className={`flex-shrink-0 transition-all duration-300 ${isCollapsed ? 'w-20' : 'w-64'}`}>
                <Sidebar isCollapsed={isCollapsed} logout={logout} />
              </div>
              
              {/* Ensure the main area also changes background in dark mode */}
              <main className="flex-1 overflow-y-auto p-6 bg-[#f8fafc] dark:bg-[#0f172a] custom-scrollbar transition-colors duration-300">
                <Outlet />
                <Footer />
              </main>
            </div>
          </div>
        ) : (
          <div className="flex flex-col min-h-screen bg-white dark:bg-[#0f172a]">
            <Navbar /> 
            <main className="flex-1">
              <Outlet />
            </main>
            <Footer />
          </div>
        )}
      </div>
    </div>
  );
};

export default Layout;