import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, Bitcoin, X } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeaderProps {
    isMenuOpen: boolean;
    setIsMenuOpen: (isOpen: boolean) => void;
    handleSmoothScroll: (event: React.MouseEvent<HTMLElement, MouseEvent>, targetId: string) => void;
}

const Header: React.FC<HeaderProps> = ({ isMenuOpen, setIsMenuOpen, handleSmoothScroll }) => {
    const navLinks = [
        { href: '#why-crypto', text: 'Why Crypto' },
        { href: '#about', text: 'About' },
        { href: '#curriculum', text: 'Curriculum' },
        { href: '#success-stories', text: 'Success Stories' },
    ];

    // Effect to lock body scroll when the mobile menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

    // Handles navigation link clicks inside the mobile menu
    const handleNavClick = (e: React.MouseEvent<HTMLElement, MouseEvent>, targetId: string) => {
        handleSmoothScroll(e, targetId);
        setIsMenuOpen(false);
    };
    
    return (
        // Use a React Fragment to return the header and the menu as sibling elements
        <>
            <header className="sticky top-0 w-full bg-slate-900/95 backdrop-blur-md border-b border-slate-800/50 z-40">
                <div className="px-3 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-14 sm:h-16">
                        {/* Logo and Title */}
                        <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center shrink-0">
                                <Bitcoin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                            </div>
                            <div>
                                <span className="text-base sm:text-xl font-bold text-white">Crypto Market Mastery</span>
                                <p className="text-xs text-slate-400 hidden sm:block">by Trading With Sidhant</p>
                            </div>
                        </div>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
                            <Link to="/" className="text-slate-300 hover:text-white transition-colors font-medium text-sm lg:text-base">Home</Link>
                            {navLinks.map(link => (
                                 <a key={link.href} href={link.href} onClick={(e) => handleSmoothScroll(e, link.href.substring(1))} className="text-slate-300 hover:text-white transition-colors font-medium text-sm lg:text-base">{link.text}</a>
                            ))}
                            <button
                                onClick={(e) => handleSmoothScroll(e, 'get-started')}
                                className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white px-4 lg:px-6 py-2 rounded-lg font-semibold transition-all shadow-lg shadow-green-500/20 text-sm lg:text-base"
                            >
                                See How It Works
                            </button>
                        </nav>

                        {/* Mobile Menu Toggle Button */}
                        {/* FIX: Button z-index raised to keep it clickable. Icon now toggles. */}
                        <button
                            aria-label="Toggle menu"
                            className="md:hidden p-2 text-white relative z-50"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-expanded={isMenuOpen}
                            aria-controls="mobile-menu-container"
                        >
                            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay and Container */}
            <AnimatePresence>
                {isMenuOpen && (
                    <div 
                        id="mobile-menu-container"
                        className="md:hidden fixed inset-0 z-40" // z-40 to be below the toggle button
                        aria-hidden="true"
                    >
                        {/* Backdrop */}
                        <motion.div
                            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsMenuOpen(false)}
                        />
                        
                        {/* Menu Panel */}
                        <motion.div
                            className="absolute top-20 right-4 w-[calc(100%-2rem)] max-w-sm bg-slate-900/90 backdrop-blur-lg rounded-xl border border-slate-700 shadow-2xl p-4"
                            initial={{ opacity: 0, y: -20, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -20, scale: 0.95 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                        >
                            <nav className="flex flex-col space-y-1">
                                <Link 
                                    to="/" 
                                    className="block text-base font-medium text-slate-200 hover:text-white hover:bg-slate-800 rounded-md p-3 transition-colors"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Home
                                </Link>
                                {navLinks.map(link => (
                                    <a 
                                        key={link.href} 
                                        href={link.href} 
                                        onClick={(e) => handleNavClick(e, link.href.substring(1))} 
                                        className="block text-base font-medium text-slate-200 hover:text-white hover:bg-slate-800 rounded-md p-3 transition-colors"
                                    >
                                        {link.text}
                                    </a>
                                ))}
                                <div className="!mt-3 pt-3 border-t border-slate-800">
                                  <button
                                      onClick={(e) => handleNavClick(e, 'get-started')}
                                      className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-2.5 px-3 rounded-lg font-semibold hover:from-green-600 hover:to-green-700 transition-all text-center"
                                  >
                                      See How It Works
                                  </button>
                                </div>
                            </nav>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Header;
