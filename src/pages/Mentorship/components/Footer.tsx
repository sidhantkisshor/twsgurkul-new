import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="py-16 bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Brand */}
            <div>
              <Link to="/" className="text-2xl font-light text-gray-900">
                ETM
              </Link>
              <p className="text-sm text-gray-600 mt-4 font-light">
                Elite Trading Mentorship
              </p>
              <p className="text-sm text-gray-500 mt-2">
                Transform your trading in 3 months
              </p>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="text-sm font-normal text-gray-900 mb-4">Resources</h4>
              <div className="space-y-3 text-sm">
                <div>
                  <Link to="/privacy" className="text-gray-600 hover:text-gray-900 transition-colors">
                    Privacy Policy
                  </Link>
                </div>
                <div>
                  <Link to="/terms" className="text-gray-600 hover:text-gray-900 transition-colors">
                    Terms of Service
                  </Link>
                </div>
                <div>
                  <Link to="/contact" className="text-gray-600 hover:text-gray-900 transition-colors">
                    Contact Support
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Contact */}
            <div>
              <h4 className="text-sm font-normal text-gray-900 mb-4">Get in touch</h4>
              <p className="text-sm text-gray-600 font-light">
                support@etm.com
              </p>
              <p className="text-sm text-gray-600 font-light mt-2">
                Monday - Friday, 9 AM - 6 PM IST
              </p>
            </div>
          </div>
          
          {/* Bottom bar */}
          <div className="pt-8 border-t border-gray-200">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-gray-500">
                © 2024 ETM. All rights reserved.
              </p>
              <p className="text-xs text-gray-400 text-center md:text-right max-w-md">
                Trading involves risk. Past performance is not indicative of future results. 
                Educational purposes only.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;