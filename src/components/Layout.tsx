import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout; 