/* eslint-disable @next/next/no-img-element */
'use client';

import { useState } from 'react';
import { FaCloudSun, FaCloudMoon, FaBars } from 'react-icons/fa6';
import { FaTimes } from 'react-icons/fa';
// import { useTheme } from "../Theme/ThemeProvider";
import Link from 'next/link';

export default function Navbar() {
  // const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen((prev) => !prev);
  return (
    <nav className="w-full h-20 bg-white dark:bg-gray-800 flex items-center justify-between text-black dark:text-white shadow-sm px-4">
      <div className="flex items-center justify-between w-full max-w-[60%] mx-auto">
        <div>
          <img
            src="/mbashia.jpeg"
            alt="Mbashia img"
            className="w-10 h-auto rounded-full"
          />
        </div>

        <button
          onClick={toggleMenu}
          className="lg:hidden text-xl p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition"
        >
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        <div className="hidden lg:flex flex-row items-center space-x-6">
          <ul className="flex flex-row space-x-6">
            {[
              { name: 'Home', path: '/' },
              { name: 'About', path: '/about' },
              { name: 'Projects', path: '/projects' },
              { name: 'Blog', path: '/blog' },
              {
                name: 'Contact',
                path: { pathname: '/', query: { section: 'contact' } },
              },
            ].map((item) => (
              <li
                key={item.name}
                className="relative text-gray-500 cursor-pointer text-sm hover:text-black dark:hover:text-white transition-all duration-300 after:content-[''] after:absolute after:w-0 after:h-[2px] after:left-0 after:bottom-0 after:bg-black dark:after:bg-white after:transition-all after:duration-300 after:ease-in-out hover:after:w-full"
              >
                <Link href={item.path}>{item.name}</Link>
              </li>
            ))}
          </ul>

          {/* <button
            onClick={toggleTheme}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 transition-all ml-4"
          >
            {theme === "light" ? (
              <FaCloudMoon className="text-slate-900" size={20} />
            ) : (
              <FaCloudSun className="text-yellow-400" size={20} />
            )}
          </button> */}
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden w-full bg-white dark:bg-gray-800 absolute top-20 left-0 z-50 shadow-md">
          <ul className="flex flex-col items-start space-y-4 px-8 py-6">
            {[
              { name: 'Home', path: '/' },
              { name: 'About', path: '/about' },
              { name: 'Projects', path: '/projects' },
              { name: 'Blog', path: '/blog' },
              {
                name: 'Contact',
                path: { pathname: '/', query: { section: 'contact' } },
              },
            ].map((item) => (
              <li
                key={item.name}
                className="cursor-pointer text-gray-500 text-sm hover:text-black dark:hover:text-white w-full transition-all duration-300"
                onClick={toggleMenu}
              >
                <Link href={item.path}>{item.name}</Link>
              </li>
            ))}
          </ul>

          {/* <div className="flex justify-center py-4">
            <button
              onClick={toggleTheme}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 transition-all"
            >
              {theme === "light" ? (
                <FaCloudMoon className="text-slate-900" size={20} />
              ) : (
                <FaCloudSun className="text-yellow-400" size={20} />
              )}
            </button>
          </div> */}
        </div>
      )}
    </nav>
  );
}
