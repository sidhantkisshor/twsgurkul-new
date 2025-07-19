import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
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
    { name: "Footprint", href: "/footprint" },
    { name: "Crypto", href: "/crypto" },
    { name: "Mentorship", href: "/mentorship" },
    { name: "Blog", href: "/blog" },
  ];

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

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
            <a 
              href="https://tradingwithsidhant.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <img 
                src="/favicon.png" 
                alt="Trading With Sidhant" 
                className="h-10 w-10 object-contain"
              />
            </a>
            <Link 
              to="/"
              className="font-extrabold text-white hidden sm:block tracking-tight text-lg bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent hover:from-blue-200 hover:via-purple-200 hover:to-green-200 transition-all duration-300"
            >
              TWS<span className="text-green-400">.</span>GURUKUL
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4 xl:space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-gray-400 hover:text-white transition-colors duration-200 text-sm font-medium whitespace-nowrap px-3 py-1.5 rounded-md hover:bg-white/10"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <a
            href="https://tradingwithsidhant.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-full px-4 py-2 text-sm font-semibold hidden md:flex transition-all duration-200 whitespace-nowrap shadow-lg hover:shadow-green-500/25"
          >
            Get Started
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-full transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden animate-fade-in">
          <div 
            className="absolute inset-0 bg-black/70 backdrop-blur-xl transition-opacity duration-300" 
            onClick={() => setIsMobileMenuOpen(false)} 
          />
          <div className="absolute top-20 left-4 right-4 glass-effect rounded-3xl p-6 shadow-2xl animate-slide-down">
            <div className="space-y-1">
              {/* Navigation Items */}
              {navItems.map((item, index) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={closeMobileMenu}
                  className="group flex items-center justify-between text-gray-300 hover:text-white transition-all duration-300 w-full text-left p-4 hover:bg-white/10 rounded-xl"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className="text-base font-medium">{item.name}</span>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              ))}
              
              {/* CTA Section */}
              <div className="pt-4">
                <a
                  href="https://tradingwithsidhant.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-gradient-to-r from-green-500 to-[#01d449] hover:from-green-600 hover:to-[#00c43e] text-white rounded-xl w-full py-3 px-4 text-center block transition-all duration-300 font-medium text-base"
                >
                  <span className="flex items-center justify-center space-x-2">
                    <span>Get Started</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar; 