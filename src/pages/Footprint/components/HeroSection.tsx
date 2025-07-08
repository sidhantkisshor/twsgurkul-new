import React from 'react';
import { ArrowRight } from 'lucide-react';
import { handlePaymentPopup } from '../utils/payment';

const HeroSection: React.FC = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-pattern opacity-20"></div>
      
      {/* Chart pattern overlay */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://images.pexels.com/photos/25626448/pexels-photo-25626448/free-photo-of-a-diagram-of-a-model.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center"></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
            From Account Blown to <span className="text-gradient">Financial Freedom</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
            The Complete Footprint Mastery System for Consistent Trading Profits
          </p>
          
          <div className="max-w-xl mx-auto bg-slate-800/60 backdrop-blur-sm rounded-xl p-6 mb-10 border border-slate-700 shadow-xl">
            <h3 className="text-xl font-semibold mb-4 text-amber-500">The 2 AM Breakdown That Changed Everything</h3>
            <p className="text-slate-300 mb-4 text-left">
              <span className="font-medium">December 2019. Main market close ke baad account statement dekh raha tha.</span>
            </p>
            <p className="text-slate-300 mb-4 text-left">
              ₹80,000 loss in one day. Sixth time in 3 months account completely blown kar diya tha.
            </p>
            <p className="text-slate-300 mb-4 text-left">
              Mom aur Dad so rahe the. Main apne room mein baithke ro raha tha, thinking:
            </p>
            <p className="text-slate-300 mb-4 text-left italic">
              "Am I just not cut out for trading?"
            </p>
            <p className="text-slate-300 mb-6 text-left">
              <span className="font-medium">Then I cracked the institutional code.</span>
            </p>
          </div>
          
          <div className="flex justify-center">
            <button 
              onClick={handlePaymentPopup}
              className="cta-button-primary group px-8 py-4 text-lg font-semibold">
              Enroll in Footprint Mastery Now 
              <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </button>
          </div>
        </div>
      </div>
      
      {/* Animated arrow */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-amber-500"
        >
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <polyline points="19 12 12 19 5 12"></polyline>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;