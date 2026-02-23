import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

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
    <>
      <motion.header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? 'bg-deep-slate/95 backdrop-blur-lg shadow-xs' : 'bg-deep-slate'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <Link to="/" className="text-xl sm:text-2xl font-semibold text-white">
              ETM
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <button 
                onClick={() => scrollToSection('problem')}
                className="text-white/80 hover:text-white transition-colors font-light"
              >
                Problem
              </button>
              <button 
                onClick={() => scrollToSection('unique-mechanism')}
                className="text-white/80 hover:text-white transition-colors font-light"
              >
                Method
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="text-white/80 hover:text-white transition-colors font-light"
              >
                Success Stories
              </button>
              <button 
                onClick={() => scrollToSection('pricing')}
                className="text-white/80 hover:text-white transition-colors font-light"
              >
                Pricing
              </button>
            </nav>

            {/* Desktop CTA */}
            <motion.button
              onClick={() => scrollToSection('pricing')}
              className="hidden md:block px-6 py-3 bg-burnt-amber text-white rounded-full hover:bg-burnt-amber/90 transition-all font-semibold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-white"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/20"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Menu Panel */}
            <motion.div
              className="absolute right-0 top-0 h-full w-3/4 max-w-sm bg-deep-slate shadow-xl"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
            >
              <div className="flex flex-col h-full pt-20 px-6">
                <nav className="flex flex-col gap-6">
                  <button 
                    onClick={() => scrollToSection('problem')}
                    className="text-left text-lg text-white/80 hover:text-white font-light"
                  >
                    Problem
                  </button>
                  <button 
                    onClick={() => scrollToSection('unique-mechanism')}
                    className="text-left text-lg text-white/80 hover:text-white font-light"
                  >
                    Method
                  </button>
                  <button 
                    onClick={() => scrollToSection('testimonials')}
                    className="text-left text-lg text-white/80 hover:text-white font-light"
                  >
                    Success Stories
                  </button>
                  <button 
                    onClick={() => scrollToSection('pricing')}
                    className="text-left text-lg text-white/80 hover:text-white font-light"
                  >
                    Pricing
                  </button>
                </nav>
                
                <motion.button
                  onClick={() => scrollToSection('pricing')}
                  className="mt-8 w-full px-6 py-3 bg-burnt-amber text-white rounded-full font-semibold"
                  whileTap={{ scale: 0.95 }}
                >
                  Get Started
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;