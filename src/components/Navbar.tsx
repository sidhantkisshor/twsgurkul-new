import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-900 p-4 sticky top-0 z-10">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <a 
            href="https://tradingwithsidhant.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block"
          >
            <img 
              src="https://framerusercontent.com/images/X6TcsL4DaLzmjtcjrJQvu5d8GzY.png?scale-down-to=512" 
              alt="Trading With Sidhant" 
              className="h-10 w-auto"
            />
          </a>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link to="/" className="text-white hover:text-yellow-400 transition duration-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/footprint" className="text-white hover:text-yellow-400 transition duration-300">
              Footprint Program
            </Link>
          </li>
          <li>
            <Link to="/crypto" className="text-white hover:text-yellow-400 transition duration-300">
              Crypto Market Mastery
            </Link>
          </li>
        </ul>

        {/* Mobile Hamburger Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white hover:text-yellow-400 focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 pb-4">
          <ul className="flex flex-col space-y-3">
            <li>
              <Link 
                to="/" 
                className="block text-white hover:text-yellow-400 transition duration-300 py-2"
                onClick={toggleMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/footprint" 
                className="block text-white hover:text-yellow-400 transition duration-300 py-2"
                onClick={toggleMenu}
              >
                Footprint Program
              </Link>
            </li>
            <li>
              <Link 
                to="/crypto" 
                className="block text-white hover:text-yellow-400 transition duration-300 py-2"
                onClick={toggleMenu}
              >
                Crypto Market Mastery
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 