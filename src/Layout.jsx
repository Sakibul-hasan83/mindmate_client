import React from 'react';
import Home from './Home';
import { Outlet } from 'react-router-dom';
import Navbar from './SharedElements/Navbar';
import Footer from './SharedElements/Footer';

const Layout = () => {
  return (
    <div className="min-h-screen bg-base-100 text-base-content transition-colors duration-300">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
