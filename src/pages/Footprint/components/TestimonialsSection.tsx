import React from 'react';
import { User, Star } from 'lucide-react';
import { handlePaymentPopup } from '../utils/payment';

const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="section bg-slate-900 relative">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title text-center animate-on-scroll">
            Meet Your <span className="text-gradient">Students</span> Who've Already Transformed
          </h2>
          <p className="section-subtitle text-center animate-on-scroll">
            Real traders, real results, real financial freedom
          </p>
          
          {/* Featured Testimonial */}
          <div className="testimonial-card mb-12 animate-on-scroll">
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-full bg-slate-700 flex items-center justify-center">
                  <User size={32} className="text-amber-500" />
                </div>
                <div className="flex mt-2 justify-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="text-amber-500 fill-amber-500" />
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-3 text-amber-500">
                  "From ₹3.2L Loss to ₹1.5L Monthly Profit" - Rohit Sharma, Ex-TCS
                </h3>
                <ul className="space-y-2 text-slate-300 mb-4">
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">•</span>
                    <span>Before: Lost ₹3.2 Lakhs in 2 years (2021-2023)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">•</span>
                    <span>March 2024: Joined Footprint Mastery (₹34,997 investment)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">•</span>
                    <span>April: First profitable month (₹42,000)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">•</span>
                    <span>October 2024: Consistent ₹1.5L+ monthly (Quit TCS job)</span>
                  </li>
                </ul>
                <p className="text-slate-400 italic">
                  "I was struggling like everyone else, blowing my account every few months. The footprint system completely changed how I see the markets. Now I can spot exactly where institutions are accumulating and where they plan to move the market next."
                </p>
              </div>
            </div>
          </div>
          
          {/* More Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="testimonial-card animate-on-scroll">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-slate-700 flex items-center justify-center mr-4">
                  <User size={20} className="text-amber-500" />
                </div>
                <div>
                  <h4 className="font-bold">Adwaita Nambiar</h4>
                  <span className="block text-sm text-slate-400 font-medium mb-1">Chartered Accountant</span>
                  <div className="flex mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={12} className="text-amber-500 fill-amber-500" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-lg font-bold text-amber-500 mb-2">June-Oct 2024: ₹5.2L Net Profit</p>
              <p className="text-slate-300">
                "Pehle sirf price action dekhta tha. Ab footprint mein EXACTLY dikta hai ki big players kahan accumulate kar rahe hain. Last trade: Nifty 24500 PE, 180% profit in 2 days."
              </p>
            </div>
            
            <div className="testimonial-card animate-on-scroll">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-slate-700 flex items-center justify-center mr-4">
                  <User size={20} className="text-amber-500" />
                </div>
                <div>
                  <h4 className="font-bold">Md. Sheik Shakeel</h4>
                  <span className="block text-sm text-slate-400 font-medium mb-1">Software Engineer</span>
                  <div className="flex mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={12} className="text-amber-500 fill-amber-500" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-lg font-bold text-amber-500 mb-2">73 Wins out of 78 Trades (93.5% Accuracy)</p>
              <p className="text-slate-300">
                "Module 3 ka OI analysis + Module 5 ka institutional flow = GAME OVER for losses. Ab main sirf wahi trades leta hun jahan footprint clear ho."
              </p>
            </div>
            
            <div className="testimonial-card animate-on-scroll">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-slate-700 flex items-center justify-center mr-4">
                  <User size={20} className="text-amber-500" />
                </div>
                <div>
                  <h4 className="font-bold">Manvik</h4>
                  <span className="block text-sm text-slate-400 font-medium mb-1">MBA Student</span>
                  <div className="flex mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={12} className="text-amber-500 fill-amber-500" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-lg font-bold text-amber-500 mb-2">₹50K → ₹1.2L in 6 Months (140% ROI)</p>
              <p className="text-slate-300">
                "College fees ke liye papa se ₹50K liye the. 6 months mein ₹1.2L banake wapas kar diye + laptop bhi le liya. Footprint ne life change kar di!"
              </p>
            </div>
          </div>
          
          <div className="text-center animate-on-scroll">
            <p className="text-lg text-slate-300 mb-6 italic">
              These aren't overnight success stories. These are systematic transformations using institutional-grade footprint reading.
            </p>
            <p className="text-xl font-bold text-white mb-8">
              Your success story could be next...
            </p>
            
            <button onClick={handlePaymentPopup} className="cta-button-primary inline-block">
              Join The Success Stories
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;