import React from 'react';
import Home from './Home';
import { Outlet } from 'react-router-dom';
import Navbar from './SharedElements/Navbar';
import Footer from './SharedElements/Footer';

const Layout = () => {
  return (
    <div>
     <Navbar></Navbar>
     <Outlet></Outlet>
     <Footer></Footer>
    </div>
  );
}

export default Layout;
