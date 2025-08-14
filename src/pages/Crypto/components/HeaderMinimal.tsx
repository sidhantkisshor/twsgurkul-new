import React, { useState, useEffect } from 'react';

const HeaderMinimal: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      setScrolled(scrollPercentage > 25);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial scroll position
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo only - no navigation */}
          <div className="flex items-center">
            <h2 className="sr-only">TWS Gurukul</h2>
            <a href="/" aria-label="TWS Gurukul" className="text-2xl font-bold text-white">
              TWS <span className="text-amber-500">Gurukul</span>
            </a>
          </div>
          
          {/* Single CTA in header - ghost until 25% scroll */}
          <div className="hidden sm:block">
            <a 
              href="#pricing" 
              className={`px-6 py-2 rounded-lg font-semibold transition-all transform hover:scale-105 ${
                scrolled 
                  ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-white hover:shadow-lg hover:shadow-amber-500/50' 
                  : 'border-2 border-amber-500/50 text-amber-400 hover:border-amber-500 hover:bg-amber-500/10'
              }`}
            >
              Start Learning
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderMinimal;