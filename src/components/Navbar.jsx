import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-slate-900 text-gray-500 body-fontshadow-sm">
      {/* :DESKTOP MENU */}
      <div className="container mx-auto flex justify-between items-center py-7 px-5">
        {/* ::Site logo and Name */}
        <Link to={"/"} className="flex flex-shrink-0 title-font font-medium items-center text-gray-900 md:mb-0">
          <span className="ml-3 text-2xl font-mono text-neutral-50 font-semibold antialiased">TastyHub</span>
        </Link>
        {/* ::Navbar */}
        <nav className="hidden md:flex flex-wrap items-center justify-center tracking-wide text-lg">
          <Link to={"/"} className="mr-8 text-neutral-50 hover:text-indigo-500">
            Home
          </Link>
          <Link to={"/contact"} className="mr-8 text-neutral-50 hover:text-indigo-500">
            Contact
          </Link>
        </nav>
        {/* ::Avatar */}
        <div className="hidden sm:inline-flex ml-auto md:ml-0 mr-4 md:mr-0 cursor-pointer">
          <Link to="/login">
            <button
              type="button"
              className="relative inline-flex items-center px-5 py-2.5 shadow-sm rounded border border-transparent bg-gradient-to-br from-purple-500 to-blue-500 text-base text-neutral-50 font-medium"
            >
              Logout
            </button>
          </Link>
        </div>
        {/* ::Burger icon standard */}
        <button
          className="md:hidden rounded-md active:outline-none focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 rounded-md text-gray-500 bg-gradient-to-br from-transparent to-transparent hover:text-white hover:from-purple-500 hover:to-blue-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* ::MOBILE MENU */}
      {isOpen && (
        <div className="w-full flex flex-col py-4 px-3 md:hidden bg-slate-950 text-base uppercase text-center font-semibold">
          <Link to="/" className="block px-3 py-2 rounded-md text-white hover:bg-indigo-700">
            Home
          </Link>
          <Link to="/contact" className="block px-3 py-2 rounded-md text-white hover:bg-indigo-700">
            Contact
          </Link>
          <Link to="/login" className="block px-3 py-2 rounded-md text-white hover:bg-indigo-700">
            Logout
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
