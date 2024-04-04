import React, { useState } from "react";
import { Link } from "react-router-dom";
import useCookies from "../hooks/useCookies";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  // Accessing custom cookie functions from useCookies hook
  const { removeCustomCookie } = useCookies();

  // Function to handle logout
  const logout = () => {
    // Removing specific cookies
    removeCustomCookie("token");
    removeCustomCookie("email");
    // Reloading the window to reflect changes
    window.location.reload();
  };

  return (
    <header className="w-full bg-[#FBFBFB] text-black body-fontshadow-lg">
      {/* Desktop Menu */}
      <div className="container mx-auto flex justify-between items-center py-7 px-5">
        {/* Site Logo and Name */}
        <Link to={"/"} className="flex flex-shrink-0 title-font font-medium items-center text-black md:mb-0">
          <span className="ml-3 text-2xl font-poppins font-bold text-[#b85c2d] antialiased ">TastyHub</span>
        </Link>
        {/* Navbar */}
        <nav className="hidden md:flex flex-wrap items-center font-poppins justify-center tracking-wide text-lg font-medium">
          <Link to={"/"} className="mr-8 text-gray-950">
            Home
          </Link>
          <Link to={"/favorites"} className="mr-8 text-gray-950">
            MyRecipes
          </Link>
          <Link to={"/contact"} className="mr-8 text-gray-950">
            Contact
          </Link>
        </nav>
        {/* Avatar (Logout Button) */}
        <div className="hidden sm:inline-flex ml-auto md:ml-0 mr-4 md:mr-0 cursor-pointer">
          <Link to="/login">
            <button
              type="button"
              onClick={logout}
              className="relative inline-flex items-center px-5 py-2.5 shadow-sm rounded border font-semibold font-poppins text-[#b85c2d] hover:text-white border-[#b85c2d] hover:bg-[#b85c2d] focus:outline-none"
            >
              Logout
            </button>
          </Link>
        </div>
        {/* Burger icon for mobile menu */}
        <button
          className="md:hidden rounded-md active:outline-none focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 rounded-md text-gray-500 hover:text-white hover:bg-[#b85c2d]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="w-full flex flex-col py-4 px-3 md:hidden bg-[#FBFBFB] text-base font-poppins uppercase text-center font-semibold">
          <Link to="/" className="block px-3 py-2 rounded-md text-gray-950  hover:bg-indigo-700">
            Home
          </Link>
          <Link to="/favorites" className="block px-3 py-2 rounded-md text-gray-950  hover:bg-indigo-700">
            MyRecipes
          </Link>
          <Link to="/contact" className="block px-3 py-2 rounded-md text-gray-950  hover:bg-indigo-700">
            Contact
          </Link>
          <Link to="/login" className="block px-3 py-2 rounded-md text-gray-950  hover:bg-indigo-700">
            Logout
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
