import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
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
            <nav 
                className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 glass-effect border border-white/10 hover:border-white/20 rounded-full px-3 sm:px-4 xl:px-6 py-2 sm:py-3 shadow-2xl w-[calc(100vw-2rem)] sm:w-auto sm:max-w-[90vw] lg:max-w-[80vw] xl:max-w-[70vw]"
            >
                <div className="flex items-center justify-between gap-2 sm:gap-3 xl:gap-8">
                    {/* Logo and Title */}
                    <div className="flex items-center gap-2 sm:gap-3">
                        <img 
                            src="/favicon.png" 
                            alt="Crypto Market Mastery" 
                            className="h-8 w-8 sm:h-10 sm:w-10 object-contain flex-shrink-0"
                        />
                        <Link 
                            to="/"
                            className="font-extrabold text-white hidden xs:block tracking-tight text-sm sm:text-lg bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500 bg-clip-text text-transparent hover:from-yellow-300 hover:via-orange-300 hover:to-yellow-400 transition-all duration-300 whitespace-nowrap"
                        >
                            <span className="hidden sm:inline">CRYPTO<span className="text-green-400">.</span>MASTERY</span>
                            <span className="sm:hidden">C<span className="text-green-400">.</span>M</span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-2 lg:gap-4 xl:gap-6">
                        <Link to="/" className="text-gray-400 hover:text-white transition-colors duration-200 text-xs lg:text-sm font-medium whitespace-nowrap px-2 lg:px-3 py-1.5 rounded-md hover:bg-white/10">Home</Link>
                        {navLinks.map(link => (
                            <a 
                                key={link.href} 
                                href={link.href} 
                                onClick={(e) => handleSmoothScroll(e, link.href.substring(1))} 
                                className="text-gray-400 hover:text-white transition-colors duration-200 text-xs lg:text-sm font-medium whitespace-nowrap px-2 lg:px-3 py-1.5 rounded-md hover:bg-white/10"
                            >
                                {link.text}
                            </a>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <button
                        onClick={(e) => handleSmoothScroll(e, 'get-started')}
                        className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-[10px] xs:text-xs sm:text-sm font-semibold transition-all duration-200 whitespace-nowrap shadow-lg hover:shadow-yellow-500/25 hidden xs:block"
                    >
                        <span className="hidden sm:inline">See How It Works</span>
                        <span className="sm:hidden">Start Now</span>
                    </button>

                    {/* Mobile Menu Button */}
                    <button 
                        className="md:hidden text-white p-1.5 sm:p-2 hover:bg-white/10 rounded-full transition-colors flex-shrink-0"
                        aria-label="Toggle mobile menu"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            className="md:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsMenuOpen(false)}
                        />
                        
                        {/* Mobile Menu */}
                        <motion.div
                            className="md:hidden fixed top-16 sm:top-20 left-4 right-4 bg-black/95 backdrop-blur-lg border border-white/20 rounded-2xl z-50 overflow-hidden max-h-[calc(100vh-5rem)] sm:max-h-[calc(100vh-6rem)] overflow-y-auto"
                            initial={{ opacity: 0, y: -20, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -20, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                        >
                            <div className="p-5 space-y-3">
                                <Link 
                                    to="/" 
                                    onClick={() => setIsMenuOpen(false)}
                                    className="block text-gray-300 hover:text-white transition-colors duration-200 text-lg font-medium py-3 px-4 rounded-lg hover:bg-white/10"
                                >
                                    Home
                                </Link>
                                {navLinks.map(link => (
                                    <a 
                                        key={link.href} 
                                        href={link.href} 
                                        onClick={(e) => handleNavClick(e, link.href.substring(1))} 
                                        className="block text-gray-300 hover:text-white transition-colors duration-200 text-lg font-medium py-3 px-4 rounded-lg hover:bg-white/10"
                                    >
                                        {link.text}
                                    </a>
                                ))}
                                
                                {/* Mobile CTA Button */}
                                <button
                                    onClick={(e) => handleNavClick(e, 'get-started')}
                                    className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white rounded-full px-6 py-3 text-base font-semibold transition-all duration-200 shadow-lg hover:shadow-yellow-500/25 mt-6"
                                >
                                    See How It Works - Get Started
                                </button>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default Header;
