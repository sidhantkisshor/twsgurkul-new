import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:bg-white focus:text-black focus:px-3 focus:py-2 focus:rounded focus:z-50"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main" className="relative">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout; 