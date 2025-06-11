import React, { useState, useEffect } from 'react';
import { Menu, X, TrendingUp } from 'lucide-react';
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
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-2">
            <TrendingUp className="h-8 w-8 text-amber-500" />
            <span className="text-xl font-bold">Footprint Mastery</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#benefits" className="text-slate-300 hover:text-amber-500 transition-colors">Why Us</a>
            <a href="#transformation" className="text-slate-300 hover:text-amber-500 transition-colors">Results</a>
            <a href="#testimonials" className="text-slate-300 hover:text-amber-500 transition-colors">Testimonials</a>
            <a href="#course" className="text-slate-300 hover:text-amber-500 transition-colors">Course Details</a>
            <a href="#pricing" className="text-slate-300 hover:text-amber-500 transition-colors">Pricing</a>
          </nav>
          
          <div className="hidden md:block">
            <button onClick={handlePaymentPopup} className="cta-button-primary">Enroll Now</button>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-slate-200 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-md">
          <div className="container-custom py-4 flex flex-col space-y-4">
            <a 
              href="#benefits" 
              className="text-slate-300 hover:text-amber-500 transition-colors py-2 border-b border-slate-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Why Us
            </a>
            <a 
              href="#transformation" 
              className="text-slate-300 hover:text-amber-500 transition-colors py-2 border-b border-slate-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Results
            </a>
            <a 
              href="#testimonials" 
              className="text-slate-300 hover:text-amber-500 transition-colors py-2 border-b border-slate-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </a>
            <a 
              href="#course" 
              className="text-slate-300 hover:text-amber-500 transition-colors py-2 border-b border-slate-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Course Details
            </a>
            <a 
              href="#pricing" 
              className="text-slate-300 hover:text-amber-500 transition-colors py-2 border-b border-slate-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </a>
            <button 
              onClick={handlePaymentPopup}
              className="cta-button-primary mt-4"
            >
              Enroll Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;