import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { scrollToPricing } from '../utils/common';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing-section" },
  ];

  return (
    <>
      <nav 
        className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-black/80 backdrop-blur-lg border border-white/20' 
            : 'bg-white/10 backdrop-blur-sm border border-white/10'
        } rounded-full px-4 xl:px-6 py-3`}
      >
        <div className="flex items-center space-x-3 xl:space-x-8">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/favicon.png" 
              alt="SuperStreams Logo" 
              className="h-10 w-10 object-contain"
            />
            <Link 
              to="/"
              className="font-extrabold text-white hidden sm:block tracking-tight text-lg bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500 bg-clip-text text-transparent hover:from-yellow-300 hover:via-orange-300 hover:to-yellow-400 transition-all duration-300"
            >
              SUPER<span className="text-green-400">.</span>STREAMS
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4 xl:space-x-6">
            {navItems.map((item) => (
              item.href.startsWith('#') ? (
                <button
                  key={item.name}
                  onClick={() => {
                    if (item.href === '#pricing-section') {
                      scrollToPricing();
                    } else {
                      const element = document.getElementById(item.href.substring(1));
                      element?.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm font-medium whitespace-nowrap px-3 py-1.5 rounded-md hover:bg-white/10"
                >
                  {item.name}
                </button>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm font-medium whitespace-nowrap px-3 py-1.5 rounded-md hover:bg-white/10"
                >
                  {item.name}
                </Link>
              )
            ))}
          </div>


          {/* CTA Button */}
          <button
            onClick={scrollToPricing}
            className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold transition-all duration-200 whitespace-nowrap shadow-lg hover:shadow-green-500/25"
          >
            Join Now
          </button>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-full transition-colors"
            aria-label="Toggle mobile menu"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="md:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Mobile Menu */}
            <motion.div
              className="md:hidden fixed top-20 left-4 right-4 bg-black/95 backdrop-blur-lg border border-white/20 rounded-2xl z-50 overflow-hidden"
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <div className="p-6 space-y-4">
                {navItems.map((item) => (
                  item.href.startsWith('#') ? (
                    <button
                      key={item.name}
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        if (item.href === '#pricing-section') {
                          scrollToPricing();
                        } else {
                          const element = document.getElementById(item.href.substring(1));
                          element?.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className="block w-full text-left text-gray-300 hover:text-white transition-colors duration-200 text-lg font-medium py-3 px-4 rounded-lg hover:bg-white/10"
                    >
                      {item.name}
                    </button>
                  ) : (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block text-gray-300 hover:text-white transition-colors duration-200 text-lg font-medium py-3 px-4 rounded-lg hover:bg-white/10"
                    >
                      {item.name}
                    </Link>
                  )
                ))}
                
                {/* Mobile CTA Button */}
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    scrollToPricing();
                  }}
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-full px-6 py-3 text-base font-semibold transition-all duration-200 shadow-lg hover:shadow-green-500/25 mt-6"
                >
                  Join Now - Start Trading
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;