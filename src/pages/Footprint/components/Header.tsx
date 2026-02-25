import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#1A2226]/95 backdrop-blur-xl shadow-lg border-b border-[#3A4449]/30' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <Link to="/" className="flex items-center space-x-3 group shrink-0">
            <img
              src="/tws-gurukulx-icon.png"
              alt="TWS GurukulX"
              className="w-8 h-8 object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <div>
              <span className="text-lg sm:text-xl font-sans font-bold text-white">Footprint</span>
              <span className="text-lg sm:text-xl font-serif italic font-normal text-[#C87533] ml-1.5">Mastery</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#framework" className="text-[#D0C5B4]/60 hover:text-white transition-colors text-sm font-medium">F.A.S.T. Method</a>
            <a href="#testimonials" className="text-[#D0C5B4]/60 hover:text-white transition-colors text-sm font-medium">Results</a>
            <a href="#pricing" className="text-[#D0C5B4]/60 hover:text-white transition-colors text-sm font-medium">Pricing</a>
          </nav>

          <div className="hidden md:block">
            <motion.button
              onClick={handlePaymentPopup}
              className="bg-[#C87533] hover:bg-[#A85E28] text-white font-semibold px-6 py-2.5 rounded-full transition-colors text-sm font-sans"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start reading order flow →
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-[#EDE6D8] w-11 h-11 flex items-center justify-center -mr-2 relative z-[60] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C87533] rounded-sm"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#1A2226]/95 backdrop-blur-xl relative z-[55]">
          <div className="px-4 sm:px-6 py-4 flex flex-col">
            <a
              href="#framework"
              className="text-white hover:text-[#D4943F] transition-colors py-3.5 border-b border-[#3A4449]/40 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              F.A.S.T. Method
            </a>
            <a
              href="#testimonials"
              className="text-white hover:text-[#D4943F] transition-colors py-3.5 border-b border-[#3A4449]/40 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </a>
            <a
              href="#pricing"
              className="text-white hover:text-[#D4943F] transition-colors py-3.5 border-b border-[#3A4449]/40 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </a>
            <a
              href="#faq"
              className="text-white hover:text-[#D4943F] transition-colors py-3.5 border-b border-[#3A4449]/40 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </a>
            <button
              onClick={handlePaymentPopup}
              className="bg-[#C87533] hover:bg-[#A85E28] text-white font-semibold px-6 py-3 rounded-full transition-colors mt-5 min-h-[48px]"
            >
              Start reading order flow →
            </button>
          </div>
        </div>
      )}
    </motion.header>
  );
};

export default Header;
