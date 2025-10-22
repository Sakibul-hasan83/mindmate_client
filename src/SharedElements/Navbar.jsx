import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../AuthenticationsElements/AuthContext";

const Navbar = () => {

const {user,logOut}=useContext(AuthContext)

const handleLogout =()=>{

logOut()
.then(res => console.log(res.user))
.catch(err => console.log(err.messsage))
alert("Logout Successfull")

}


  const links = (
    <>
      <li>
        <a className="hover:text-primary font-semibold transition-all duration-300">
          Home
        </a>
      </li>
      <li>
        <a className="hover:text-primary font-semibold transition-all duration-300">
          Services
        </a>
      </li>
      <li>
        <a className="hover:text-primary font-semibold transition-all duration-300">
          About
        </a>
      </li>
      <li>
        <a className="hover:text-primary font-semibold transition-all duration-300">
          Contact
        </a>
      </li>
    </>
  );

  return (
    <div className="navbar bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="navbar-start">
        {/* Mobile Menu */}
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden hover:bg-transparent"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-700"
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

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-white rounded-box z-[1] mt-3 w-52 p-2 shadow-lg"
          >
            {links}
          </ul>
        </div>

        {/* Logo */}
        <a className="btn btn-ghost normal-case text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500">
          MindMate
        </a>
      </div>

      {/* Desktop Menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-3 text-gray-700">
          {links}
        </ul>
      </div>

      {/* Login Button */}
      <div className="navbar-end">
       {
        user?   <button
  onClick={handleLogout}
  className="px-5 py-2 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold rounded-lg shadow-md hover:from-purple-600 hover:to-indigo-700 transition duration-300 ease-in-out"
>
  Logout
</button>
    :    <Link to={"/login"} className="btn bg-gradient-to-r from-indigo-500 to-pink-500 text-white border-none hover:scale-105 transition-transform duration-300">
          Login
        </Link>
       }
      </div>
    </div>
  );
};

export default Navbar;
