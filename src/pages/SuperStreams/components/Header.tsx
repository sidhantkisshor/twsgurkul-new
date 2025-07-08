import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Radio } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing-section');
    pricingSection?.scrollIntoView({ behavior: 'smooth' });
  };

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
            className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-full px-4 py-2 text-sm font-semibold hidden md:flex transition-all duration-200 whitespace-nowrap shadow-lg hover:shadow-green-500/25"
          >
            Join Now
          </button>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white p-2 hover:bg-white/10 rounded-full transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Header;