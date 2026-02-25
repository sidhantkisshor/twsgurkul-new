import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect, useCallback } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 50);
        ticking = false;
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false); // eslint-disable-line react-hooks/set-state-in-effect -- canonical reset-on-nav pattern
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  const isHomePage = location.pathname === '/';

  const navItems = [
    ...(isHomePage ? [] : [{ name: 'Home', href: '/' }]),
    { name: 'Crypto', href: '/crypto' },
    { name: 'Footprint', href: '/footprint' },
    { name: 'ETM', href: '/mentorship' },
    { name: 'Blog', href: '/blog' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  const handleCTAClick = useCallback(() => {
    setIsMobileMenuOpen(false);
    if (location.pathname === '/') {
      document.getElementById('quiz')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/#quiz';
    }
  }, [location.pathname]);

  return (
    <>
      <nav
        className={`fixed top-2 sm:top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 rounded-full w-[calc(100%-1rem)] sm:w-auto max-w-[calc(100vw-1rem)] sm:max-w-none ${
          isScrolled
            ? 'bg-deep-slate/95 backdrop-blur-2xl border border-soft-sand/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(184,149,106,0.06)]'
            : 'bg-deep-slate/40 backdrop-blur-md border border-soft-sand/[0.04]'
        }`}
      >
        <div className="flex items-center justify-between sm:justify-start px-3 sm:px-5 xl:px-6 py-2.5 sm:py-3 sm:gap-2 xl:gap-6">
          {/* Logo */}
          <Link to="/" className="flex items-center group shrink-0">
            <img
              src="/logo-wordmark-dark.png"
              alt="TWS GurukulX"
              height={20}
              className="h-5 sm:h-6 w-auto object-contain transition-opacity duration-300 group-hover:opacity-80"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1 xl:gap-1.5">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                aria-current={isActive(item.href) ? 'page' : undefined}
                className={`relative text-sm font-medium font-sans px-3.5 py-2 rounded-full transition-all duration-300 ${
                  isActive(item.href)
                    ? 'text-white bg-soft-sand/[0.08]'
                    : 'text-soft-sand/70 hover:text-soft-sand/90 hover:bg-soft-sand/[0.04]'
                }`}
              >
                {item.name}
                {/* Active indicator — warm amber glow dot */}
                {isActive(item.href) && (
                  <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-burnt-amber shadow-[0_0_6px_rgba(200,117,51,0.6)]" />
                )}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <button
            onClick={handleCTAClick}
            className="group relative hidden md:flex items-center gap-2 bg-burnt-amber text-white rounded-full px-5 py-2 text-sm font-semibold font-sans transition-all duration-300 hover:shadow-[0_0_20px_rgba(200,117,51,0.25)] overflow-hidden shrink-0"
          >
            <span className="absolute inset-0 bg-linear-to-r from-burnt-amber to-[#d4843f] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10">Find Your Program</span>
            <ArrowRight className="relative z-10 w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-300" />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden relative w-11 h-11 flex items-center justify-center rounded-full hover:bg-soft-sand/[0.08] transition-colors"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <div className="relative w-5 h-5">
              <X
                className={`absolute inset-0 w-5 h-5 text-white transition-all duration-300 ${
                  isMobileMenuOpen ? 'rotate-0 opacity-100' : 'rotate-90 opacity-0'
                }`}
              />
              <Menu
                className={`absolute inset-0 w-5 h-5 text-white transition-all duration-300 ${
                  isMobileMenuOpen ? '-rotate-90 opacity-0' : 'rotate-0 opacity-100'
                }`}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-deep-slate/80 backdrop-blur-xl animate-fade-in"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Menu Panel */}
          <div
            className="absolute top-16 sm:top-20 left-3 right-3 bg-deep-slate border border-soft-sand/[0.08] rounded-2xl shadow-[0_24px_64px_rgba(0,0,0,0.4)] animate-slide-down overflow-hidden"
          >
            {/* Nav Items */}
            <div className="p-2">
              {navItems.map((item, index) => (
                <Link
                  key={item.name}
                  to={item.href}
                  aria-current={isActive(item.href) ? 'page' : undefined}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center justify-between p-4 rounded-xl transition-all duration-300 ${
                    isActive(item.href)
                      ? 'bg-burnt-amber/[0.08] text-white'
                      : 'text-soft-sand/60 hover:text-white hover:bg-soft-sand/[0.04]'
                  }`}
                  style={{
                    animationDelay: `${index * 60}ms`,
                    animation: 'slideUp 0.3s ease-out forwards',
                    opacity: 0,
                  }}
                >
                  <span className="text-[15px] font-medium font-sans">{item.name}</span>
                  <div className="flex items-center gap-2">
                    {isActive(item.href) && (
                      <span className="w-1.5 h-1.5 rounded-full bg-burnt-amber shadow-[0_0_6px_rgba(200,117,51,0.5)]" />
                    )}
                    <ArrowRight className="w-4 h-4 opacity-30" />
                  </div>
                </Link>
              ))}
            </div>

            {/* Divider */}
            <div className="mx-4 h-px bg-soft-sand/[0.06]" />

            {/* CTA */}
            <div className="p-3">
              <button
                onClick={handleCTAClick}
                className="group w-full bg-burnt-amber text-white rounded-xl py-3.5 px-5 text-center transition-all duration-300 font-semibold text-[15px] font-sans hover:bg-[#d4843f] flex items-center justify-center gap-2"
                style={{
                  animation: 'slideUp 0.3s ease-out forwards',
                  animationDelay: `${navItems.length * 60}ms`,
                  opacity: 0,
                }}
              >
                Find Your Program
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
