import React, { useState } from "react";
import Menu from "./Menu/Menu";

const Navbar = () => {
  const [isMenuOpen, toggleMenu] = useState(false);

  return (
    <nav className="">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-4">
            <div>
              <a href="/" className="flex items-center py-3">
                <span className="font-bold">SZABLONY&nbsp;</span>
                <span className="font-black">LOKAL</span>
                <span className="font-italic">ne</span>
              </a>
            </div>

            <div className="hidden sm:flex items-center space-x-1 md:px-4">
              <Menu toggleMenu={toggleMenu} />
            </div>
          </div>

          <div className="hidden sm:flex items-center space-x-1"></div>

          <div className="sm:hidden flex items-center">
            <button
              onClick={() => toggleMenu(!isMenuOpen)}
              className="mobile-menu-button"
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
        } md:hidden px-4`}
      >
        <Menu toggleMenu={toggleMenu} />
      </div>
    </nav>
  );
};

export default Navbar;
