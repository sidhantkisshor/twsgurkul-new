import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
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

          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('problem')} 
              className="text-gray-300 hover:text-white transition-colors"
            >
              Why ETM?
            </button>
            <button 
              onClick={() => scrollToSection('results')} 
              className="text-gray-300 hover:text-white transition-colors"
            >
              Live Results
            </button>
            <button 
              onClick={() => scrollToSection('pricing')} 
              className="text-gray-300 hover:text-white transition-colors"
            >
              Pricing
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')} 
              className="text-gray-300 hover:text-white transition-colors"
            >
              Success Stories
            </button>
            <button 
              onClick={() => scrollToSection('faq')} 
              className="text-gray-300 hover:text-white transition-colors"
            >
              FAQ
            </button>
          </nav>

          <div className="hidden md:block">
            <button 
              onClick={() => scrollToSection('pricing')}
              className="px-6 py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-green-500/25 transition-all transform hover:scale-105"
            >
              Start Today
            </button>
          </div>

          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <motion.div 
          className="md:hidden bg-black/95 backdrop-blur-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          <nav className="px-4 py-4 space-y-4">
            <button 
              onClick={() => scrollToSection('problem')} 
              className="block w-full text-left text-gray-300 hover:text-white transition-colors py-2"
            >
              Why ETM?
            </button>
            <button 
              onClick={() => scrollToSection('results')} 
              className="block w-full text-left text-gray-300 hover:text-white transition-colors py-2"
            >
              Live Results
            </button>
            <button 
              onClick={() => scrollToSection('pricing')} 
              className="block w-full text-left text-gray-300 hover:text-white transition-colors py-2"
            >
              Pricing
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')} 
              className="block w-full text-left text-gray-300 hover:text-white transition-colors py-2"
            >
              Success Stories
            </button>
            <button 
              onClick={() => scrollToSection('faq')} 
              className="block w-full text-left text-gray-300 hover:text-white transition-colors py-2"
            >
              FAQ
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-full"
            >
              Start Today
            </button>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;