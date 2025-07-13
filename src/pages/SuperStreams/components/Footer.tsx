import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'YouTube',
      url: 'https://youtube.com/twsgurukul',
      icon: '📺'
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/twsgurukul',
      icon: '📷'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/sidhant',
      icon: '💼'
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/twsgurukul',
      icon: '🐦'
    }
  ];

  const quickLinks = [
    { name: 'About Us', url: '/about' },
    { name: 'Contact', url: '/contact' },
    { name: 'Blog', url: '/blogs' },
    { name: 'Courses', url: '/courses' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', url: '/privacy' },
    { name: 'Terms of Service', url: '/terms' },
    { name: 'Refund Policy', url: '/refund' },
    { name: 'Disclaimer', url: '/disclaimer' }
  ];

  const trustSignals = [
    "RBI Guidelines Compliant",
    "Secure Payment Gateway",
    "30-Day Money Back Guarantee",
    "ISO 27001 Certified"
  ];

  return (
    <footer className="bg-slate-900 border-t border-slate-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400 mb-4">
              TWS Gurukul
            </h3>
            <p className="text-slate-300 text-sm mb-4 leading-relaxed">
              Empowering traders across India with proven strategies, 
              psychology training, and consistent results since 2019.
            </p>
            <div className="text-slate-400 text-sm">
              <p>📍 Mumbai, India</p>
              <p>📧 support@twsgurukul.com</p>
              <p>📱 +91 98765 43210</p>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.url}
                    className="text-slate-400 hover:text-yellow-400 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-3">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.url}
                    className="text-slate-400 hover:text-yellow-400 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Media & Trust */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">Connect With Us</h4>
            <div className="flex space-x-4 mb-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl hover:scale-110 transition-transform"
                  title={social.name}
                  aria-label={`Follow us on ${social.name}`}
                >
                  <span aria-hidden="true">{social.icon}</span>
                </a>
              ))}
            </div>
            
            <h5 className="text-sm font-semibold text-white mb-3">Trust Signals</h5>
            <div className="space-y-2">
              {trustSignals.map((signal, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <span className="text-green-400 text-xs">✓</span>
                  <span className="text-slate-400 text-xs">{signal}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700/50 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-slate-400 text-sm mb-4 md:mb-0"
            >
              © {currentYear} TWS Gurukul. All rights reserved.
            </motion.div>

            {/* Additional Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-wrap items-center gap-4 text-xs text-slate-400"
            >
              <div className="flex items-center space-x-1">
                <span>🔒</span>
                <span>SSL Secured</span>
              </div>
              <div className="flex items-center space-x-1">
                <span>🏛️</span>
                <span>SEBI Registered</span>
              </div>
              <div className="flex items-center space-x-1">
                <span>⭐</span>
                <span>4.9/5 Rating</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-8 p-4 bg-slate-800/30 rounded-lg border border-slate-700/50"
        >
          <p className="text-xs text-slate-400 leading-relaxed">
            <strong>Disclaimer:</strong> Trading and investing in financial markets involves substantial risk of loss and is not suitable for all investors. 
            Past performance is not indicative of future results. Please consider your investment objectives and risk tolerance before trading. 
            We are not SEBI registered investment advisors. All content is for educational purposes only.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 