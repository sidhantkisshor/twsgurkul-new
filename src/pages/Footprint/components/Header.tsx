import React, { useState, useEffect } from 'react';
import { Menu, X, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { handlePaymentPopup } from '../utils/payment';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-1000 transition-all duration-300 ${
        isScrolled ? 'bg-[#2C3539]/90 backdrop-blur-xl shadow-lg border-b border-[#2C3539]/50' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-[#C87533] blur-lg opacity-30 group-hover:opacity-50 transition-opacity"></div>
              <div className="relative bg-linear-to-br from-[#C87533] to-[#B8956A] p-2 rounded-lg">
                <Activity className="w-6 h-6 text-[#2C3539]" />
              </div>
            </div>
            <div>
              <span className="text-xl font-bold font-mono bg-linear-to-r from-[#C87533] to-[#B8956A] bg-clip-text text-transparent">FOOTPRINT</span>
              <span className="text-xl font-bold text-[#EDE6D8] ml-1 font-mono">MASTERY</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-[#B8A99A] hover:text-[#C87533] transition-colors text-sm font-medium">Home</Link>
            <a href="#mechanism" className="text-[#B8A99A] hover:text-[#C87533] transition-colors text-sm font-medium">F.A.S.T. Method</a>
            <a href="#testimonials" className="text-[#B8A99A] hover:text-[#C87533] transition-colors text-sm font-medium">Success Stories</a>
            <a href="#curriculum" className="text-[#B8A99A] hover:text-[#C87533] transition-colors text-sm font-medium">Course</a>
            <a href="#pricing" className="text-[#B8A99A] hover:text-[#C87533] transition-colors text-sm font-medium">Pricing</a>
          </nav>

          <div className="hidden md:block">
            <motion.button
              onClick={handlePaymentPopup}
              className="bg-[#C87533] hover:bg-[#A85E28] text-white font-semibold px-6 py-2.5 rounded-full transition-colors text-sm font-mono"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Footprint Mastery →
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-[#EDE6D8] focus:outline-hidden"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#2C3539]/95 backdrop-blur-xl">
          <div className="container-custom py-4 flex flex-col space-y-4">
            <Link
              to="/"
              className="text-[#EDE6D8] hover:text-[#C87533] transition-colors py-2 border-b border-[#2C3539]/50"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <a
              href="#benefits"
              className="text-[#EDE6D8] hover:text-[#C87533] transition-colors py-2 border-b border-[#2C3539]/50"
              onClick={() => setIsMenuOpen(false)}
            >
              Why Us
            </a>
            <a
              href="#transformation"
              className="text-[#EDE6D8] hover:text-[#C87533] transition-colors py-2 border-b border-[#2C3539]/50"
              onClick={() => setIsMenuOpen(false)}
            >
              Results
            </a>
            <a
              href="#testimonials"
              className="text-[#EDE6D8] hover:text-[#C87533] transition-colors py-2 border-b border-[#2C3539]/50"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </a>
            <a
              href="#course"
              className="text-[#EDE6D8] hover:text-[#C87533] transition-colors py-2 border-b border-[#2C3539]/50"
              onClick={() => setIsMenuOpen(false)}
            >
              Course Details
            </a>
            <a
              href="#pricing"
              className="text-[#EDE6D8] hover:text-[#C87533] transition-colors py-2 border-b border-[#2C3539]/50"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </a>
            <button
              onClick={handlePaymentPopup}
              className="bg-[#C87533] hover:bg-[#A85E28] text-white font-semibold px-6 py-2.5 rounded-full transition-colors mt-4"
            >
              Start Footprint Mastery
            </button>
          </div>
        </div>
      )}
    </motion.header>
  );
};

export default Header;
