import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const linkClasses = (isActive) =>
    (isActive ? "font-bold" : "") + " py-5 px-3";
  const [isMenuOpen, toggleMenu] = useState(false);
  return (
    <nav className="">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-4">
            <div>
              <a href="/" className="flex items-center py-5">
                <span className="font-bold">SZABLONY&nbsp;</span>
                <span className="font-black">LOKAL</span>
                <span className="font-italic">ne</span>
              </a>
            </div>

            <div className="hidden md:flex items-center space-x-1">
              <NavLink to="/" className={linkClasses}>
                O projekcie
              </NavLink>
              <NavLink className={linkClasses} to="/Map">
                Mapa szablonów
              </NavLink>
              <NavLink className={linkClasses} to="/biogramList">
                Biogramy
              </NavLink>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-1"></div>

          <div className="md:hidden flex items-center">
            <button
              className="mobile-menu-button"
              onClick={() => toggleMenu(!isMenuOpen)}
            >
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div
        className={`bg-white grid text-black ${
          isMenuOpen ? "" : "hidden"
        } md:hidden`}
      >
        <NavLink to="/" className={linkClasses}>
          O projekcie
        </NavLink>
        <NavLink className={linkClasses} to="/Map">
          Mapa szablonów
        </NavLink>
        <NavLink className={linkClasses} to="/biogramList">
          Biogramy
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
