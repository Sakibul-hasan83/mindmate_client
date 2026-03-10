import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { AuthContext } from '../Authentications/AuthProvider';
import Navbar from '../ShareElements/Navbar'; 
import Sidebar from '../ShareElements/Sidebar';
import Footer from '../ShareElements/Footer';

const Layout = () => {
  const [isCollapsed, setIsCollapsed] = React.useState(false);
  const { user, logout } = useContext(AuthContext);

  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc]">
      {user ? (
        // DASHBOARD VIEW: (Only when User is logged in)
        <div className="h-screen flex flex-col overflow-hidden">
          {/* Dashboard Navbar */}
          <div className="h-20 flex-shrink-0 z-50">
            <Navbar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
          </div>
          
          <div className="flex flex-1 overflow-hidden">
            {/* Sidebar */}
            <div className={`flex-shrink-0 transition-all duration-300 ${isCollapsed ? 'w-20' : 'w-64'}`}>
              <Sidebar isCollapsed={isCollapsed} logout={logout} />
            </div>
            
            {/* Page Content */}
            <main className="flex-1 overflow-y-auto p-6 custom-scrollbar">
              <Outlet />
              <Footer />
            </main>
          </div>
        </div>
      ) : (
        // PUBLIC VIEW: (When User is NOT logged in)
        <>
          <Navbar /> 
          <main className="flex-1">
            <Outlet />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
};

export default Layout;