import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/90 backdrop-blur-lg shadow-lg' : 'bg-black/50 backdrop-blur-sm'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
              TWS Gurukul
            </span>
          </Link>

          <div className="flex items-center gap-4">
            <span className="hidden md:block text-sm text-gray-300">
              For Crypto Traders Only
            </span>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="px-6 py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-green-500/25 transition-all transform hover:scale-105 animate-pulse"
            >
              Join ETM MAX
            </button>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;