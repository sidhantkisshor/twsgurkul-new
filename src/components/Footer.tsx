import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Youtube, Send } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-black border-t border-white/10">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
      
      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Brand Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <img 
                  src="/favicon.png" 
                  alt="TWS Logo" 
                  className="h-12 w-12 object-contain"
                />
                <div>
                  <h3 className="font-bold text-white text-lg">TWS GURUKUL</h3>
                  <p className="text-xs text-gray-400">Transform Your Trading</p>
                </div>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">
                India's premier trading education platform. Learn from the best, 
                trade with confidence.
              </p>
              {/* Social Links */}
              <div className="flex gap-4 pt-2">
                <a 
                  href="https://instagram.com/twsgurukul" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="glass-effect p-2.5 rounded-full hover:bg-white/10 transition-all duration-300"
                >
                  <Instagram className="w-5 h-5 text-gray-400 hover:text-white" />
                </a>
                <a 
                  href="https://youtube.com/@tradingwithsidhant" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="glass-effect p-2.5 rounded-full hover:bg-white/10 transition-all duration-300"
                >
                  <Youtube className="w-5 h-5 text-gray-400 hover:text-white" />
                </a>
                <a 
                  href="https://t.me/tradingwsidhant" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="glass-effect p-2.5 rounded-full hover:bg-white/10 transition-all duration-300"
                >
                  <Send className="w-5 h-5 text-gray-400 hover:text-white" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <Link to="/" className="text-sm text-gray-400 hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/footprint" className="text-sm text-gray-400 hover:text-white transition-colors">
                    Footprint Mastery
                  </Link>
                </li>
                <li>
                  <Link to="/crypto" className="text-sm text-gray-400 hover:text-white transition-colors">
                    Crypto Trading
                  </Link>
                </li>
                <li>
                  <Link to="/etm" className="text-sm text-gray-400 hover:text-white transition-colors">
                    ETM
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="text-sm text-gray-400 hover:text-white transition-colors">
                    Blog & Resources
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-semibold text-white mb-4">Resources</h4>
              <ul className="space-y-3">
                <li>
                  <a 
                    href="https://tradingwithsidhant.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    Trading With Sidhant
                  </a>
                </li>
                <li>
                  <a 
                    href="https://youtube.com/@tradingwithsidhant" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    YouTube Channel
                  </a>
                </li>
                <li>
                  <a 
                    href="https://t.me/tradingwsidhant" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    Telegram Community
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="container mx-auto px-6 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-gray-400">
                © {currentYear} TWS Gurukul. All rights reserved.
              </p>
              <div className="flex flex-wrap gap-4 md:gap-6">
                <a href="https://tradingwithsidhant.com/legal/disclaimers" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Disclaimers
                </a>
                <a href="https://tradingwithsidhant.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </a>
                <a href="https://tradingwithsidhant.com/legal/terms" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Terms
                </a>
                <a href="https://tradingwithsidhant.com/legal/refund-policy" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Refund Policy
                </a>
                <a href="https://tradingwithsidhant.com/legal/cookie-policy" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;