import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-white border-t border-gray-200">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Disclaimer */}
          <div className="text-center mb-8">
            <p className="text-sm text-gray-600 max-w-3xl mx-auto">
              Trading virtual digital assets involves risk. Past performance does not indicate future results. Educational purposes only.
            </p>
          </div>
          
          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <Link to="/terms" className="text-gray-500 hover:text-gray-900 transition-colors">
              Terms
            </Link>
            <Link to="/privacy" className="text-gray-500 hover:text-gray-900 transition-colors">
              Privacy
            </Link>
            <Link to="/refund" className="text-gray-500 hover:text-gray-900 transition-colors">
              Refund Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;