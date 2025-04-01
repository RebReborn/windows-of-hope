import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors"
          >
            <span className="mr-2">🪟</span>
            <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              Windows of Hope
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-8">
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
                { name: "Programs", path: "/programs" },
                { name: "News", path: "/news" },
                { name: "Gallery", path: "/gallery" },
                { name: "Contact", path: "/contact" },
                { name: "Support Us", path: "/support" },

              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-gray-700 hover:text-blue-600 font-medium transition-colors relative group"
                  >
                    {item.name}
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
            
            {/* Donate Button (Desktop) */}
            <Link
              to="/donate"
              className="ml-4 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-blue-200 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Donate Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Link
              to="/donate"
              className="mr-4 px-3 py-1.5 bg-blue-600 text-white text-sm rounded-lg font-medium"
            >
              Donate
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
          {[
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
            { name: "Programs", path: "/programs" },
            { name: "News", path: "/news" },
            { name: "Gallery", path: "/gallery" },
            { name: "Contact", path: "/contact" },
            { name: "Support Us", path: "/support" },

          ].map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-white hover:bg-blue-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;