import React, { useContext } from 'react';
import Container from './Container';
import { Link } from 'react-router-dom';
import ThemeContext from '../context/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';

const Navbar = () => {
  const { theme, dispatch } = useContext(ThemeContext);

  const toggleTheme = () => {
    dispatch({ type: 'TOGGLE_THEME' });
  };

  return (
    <Container>
      <nav className="py-10 px-2 flex flex-wrap items-center justify-between">
        {/* Logo and name */}
        <div className="flex items-center justify-center gap-4">
          <div className="w-7 h-7 bg-blue-400 rounded-full"></div>
          <div className="flex items-center justify-center gap-1">
            <img
              src="https://raw.githubusercontent.com/adarshagupta/trybookai/main/logo.png"
              alt="BookAI Logo"
              className="w-13 h-12 rounded-full"
            />
            <p className="font-semibold font-mono text-color text-2xl">BookAI</p>
          </div>
        </div>

        {/* Nav links and buttons */}
        <div className="flex flex-wrap items-center gap-6 md:py-0 py-4">
          <div className="flex flex-wrap items-center gap-4 cursor-pointer text-color font-semibold text-lg">
            <a href="#features" className="hover:text-[rgb(131,38,216)]">
              Features
            </a>
            <a href="#works" className="hover:text-[rgb(131,38,216)]">
              How it Works
            </a>
            <a href="#roadmap" className="hover:text-[rgb(131,38,216)]">
              Roadmap
            </a>
            <Link to="/api" className="hover:text-[rgb(131,38,216)]">
              API
            </Link>
            <Link to="/api#price" className="hover:text-[rgb(131,38,216)]">
              Price
            </Link>
            <Link to="/api#price" className="hover:text-[rgb(131,38,216)]">
              Model
            </Link>
          </div>

          {/* Theme toggle button */}
          <button
            onClick={toggleTheme}
            className="text-2xl text-white"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? <FaSun /> : <FaMoon />}
          </button>

          {/* Login/Signup button */}
          <button
            className="px-5 py-3 font-normal text-lg text-color rounded-lg transition hover:bg-purple-500"
            style={{
              background: 'linear-gradient(155deg, rgba(84, 166, 249, 0.77), #6049f6)',
              boxShadow: '0 4px 15px rgba(128, 0, 255, 0.4)',
            }}
          >
            Login/Signup
          </button>
        </div>
      </nav>
    </Container>
  );
};

export default Navbar;
