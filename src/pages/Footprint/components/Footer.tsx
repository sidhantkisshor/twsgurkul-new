import React from 'react';
import { TrendingUp } from 'lucide-react';
import { handlePaymentPopup } from '../utils/payment';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 py-12 border-t border-slate-800">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="flex items-center space-x-2 mb-6 md:mb-0">
              <TrendingUp className="h-6 w-6 text-amber-500" />
              <span className="text-lg font-bold">Footprint Mastery</span>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6">
              <a href="#benefits" className="text-slate-400 hover:text-amber-500 transition-colors">
                Why Us
              </a>
              <a href="#transformation" className="text-slate-400 hover:text-amber-500 transition-colors">
                Results
              </a>
              <a href="#testimonials" className="text-slate-400 hover:text-amber-500 transition-colors">
                Testimonials
              </a>
              <a href="#course" className="text-slate-400 hover:text-amber-500 transition-colors">
                Course Details
              </a>
              <a href="#pricing" className="text-slate-400 hover:text-amber-500 transition-colors">
                Pricing
              </a>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8 text-center">
            <p className="text-slate-400 mb-4">
              <span className="font-bold text-amber-500">P.S.</span> - Ye wahi system hai jo mujhe TEDx aur IIT platforms tak le gaya. Ab it's available for serious traders who are ready to stop being smart money's target and start being their ally.
            </p>
            
            <p className="text-slate-400 mb-8">
              <span className="font-bold text-amber-500">P.P.S.</span> - Remember Rohit? He was losing ₹2-3k weekly. Now he makes ₹1.5L+ monthly. Your transformation starts with one decision.
            </p>
            
            <div className="mb-8">
              <button onClick={handlePaymentPopup} className="cta-button-primary inline-block">
                ENROLL IN FOOTPRINT MASTERY - ₹34,997
              </button>
            </div>
            
            <p className="text-sm text-slate-500">
              &copy; {new Date().getFullYear()} Footprint Mastery System. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;