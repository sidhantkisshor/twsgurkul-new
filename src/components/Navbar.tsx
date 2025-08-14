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
    { name: "CMM", href: "/crypto" },
    { name: "Footprint", href: "/footprint" },
    { name: "Elite", href: "/mentorship" },
    { name: "Blog", href: "/blog" },
  ];

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav 
        className={`fixed top-2 sm:top-4 left-1/2 transform -translate-x-1/2 z-50 transition-colors duration-300 ${
          isScrolled 
            ? 'bg-black/80 backdrop-blur-lg border border-white/20' 
            : 'bg-white/10 backdrop-blur-sm border border-white/10'
        } rounded-full px-3 sm:px-4 xl:px-6 py-2 sm:py-3 w-[calc(100%-1rem)] sm:w-auto max-w-[calc(100vw-1rem)] sm:max-w-none`}
      >
        <div className="flex items-center justify-between sm:justify-start sm:space-x-3 xl:space-x-8 w-full sm:w-auto">
          {/* Logo */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <Link 
              to="/"
              className="flex items-center"
            >
              <img 
                src="/favicon.png" 
                alt="Trading With Sidhant" 
                className="h-8 w-8 sm:h-10 sm:w-10 object-contain"
              />
            </Link>
            <Link 
              to="/"
              className="font-extrabold text-white block sm:hidden md:block tracking-tight text-sm sm:text-lg bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent hover:from-blue-200 hover:via-purple-200 hover:to-green-200 transition-all duration-300"
            >
              TWS<span className="text-green-400">.</span>GURUKUL
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4 xl:space-x-6">
            {navItems.map((item) => (
              item.isAnchor ? (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm font-medium whitespace-nowrap px-3 py-1.5 rounded-md hover:bg-white/10"
                >
                  {item.name}
                </a>
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

          {/* CTA Button - Points to Quiz or Programs */}
          <button
            onClick={() => {
              // If on homepage, scroll to quiz. Otherwise navigate to homepage quiz
              if (window.location.pathname === '/') {
                const quizElement = document.getElementById('quiz');
                if (quizElement) {
                  quizElement.scrollIntoView({ behavior: 'smooth' });
                }
              } else {
                window.location.href = '/#quiz';
              }
            }}
            className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-full px-4 py-2 text-sm font-semibold hidden md:flex transition-colors duration-200 whitespace-nowrap shadow-lg"
          >
            Find Your Program
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-1.5 sm:p-2 hover:bg-white/10 rounded-full transition-colors"
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
          <div className="absolute top-16 sm:top-20 left-4 right-4 glass-effect rounded-3xl p-4 sm:p-6 shadow-2xl animate-slide-down">
            <div className="space-y-1">
              {/* Navigation Items */}
              {navItems.map((item, index) => (
                item.isAnchor ? (
                  <a
                    key={item.name}
                    href={item.href}
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
                  </a>
                ) : (
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
                )
              ))}
              
              {/* CTA Section - Points to Quiz */}
              <div className="pt-4">
                <button
                  onClick={() => {
                    closeMobileMenu();
                    const quizElement = document.getElementById('quiz');
                    if (quizElement) {
                      quizElement.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="group bg-gradient-to-r from-green-500 to-[#01d449] hover:from-green-600 hover:to-[#00c43e] text-white rounded-xl w-full py-3 px-4 text-center block transition-all duration-300 font-medium text-base"
                >
                  <span className="flex items-center justify-center space-x-2">
                    <span>Take Quiz</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar; 