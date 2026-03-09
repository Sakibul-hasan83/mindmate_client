
import { Outlet } from 'react-router-dom';
import Navbar from '../ShareElements/Navbar';
import Footer from '../ShareElements/Footer';

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
          <Navbar></Navbar>
               <Outlet></Outlet>
        <Footer></Footer>
    </div>
  );
}

export default Layout;
