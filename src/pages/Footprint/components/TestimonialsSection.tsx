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
                  "From ₹35 Lakhs Loss to $127K Profit in 4 Months" - Arjun Malhotra, Ex-JP Morgan Mumbai
                </h3>
                <ul className="space-y-2 text-slate-300 mb-4">
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">•</span>
                    <span>Before: Lost ₹35 lakhs in crypto crash (Luna/FTX se barbaad)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">•</span>
                    <span>March 2024: Found whale tracking system (₹37K investment)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">•</span>
                    <span>April: First ₹8 lakh profit month on BTC rally</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">•</span>
                    <span>July 2024: $127K total profit (Left JP Morgan, trading full-time from Gurgaon)</span>
                  </li>
                </ul>
                <p className="text-slate-400 italic">
                  "JP Morgan mein dekha hai kaise institutional traders retail ko loot-te hain. Ab main unke $100K+ orders 30 seconds pehle dekh leta hun. Last week ETH $2,800 se $3,200 ka move pakda because whale accumulation dikha at $2,750. Ye illegal hona chahiye but it's not."
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
                  <h4 className="font-bold">Priya Sharma</h4>
                  <span className="block text-sm text-slate-400 font-medium mb-1">Crypto Trader, Bangalore</span>
                  <div className="flex mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={12} className="text-amber-500 fill-amber-500" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-lg font-bold text-amber-500 mb-2">June-Oct 2024: ₹70 Lakh Net Profit</p>
              <p className="text-slate-300">
                "Binance whales ne BTC $42K pe dump karne ki koshish ki. But maine unka $15M sell wall 20 min pehle dekh liya. Short kiya at $41,800, covered at $38,500. Ek trade mein ₹19 lakh profit. This system is CRAZY!"
              </p>
            </div>
            
            <div className="testimonial-card animate-on-scroll">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-slate-700 flex items-center justify-center mr-4">
                  <User size={20} className="text-amber-500" />
                </div>
                <div>
                  <h4 className="font-bold">Rahul Mehta</h4>
                  <span className="block text-sm text-slate-400 font-medium mb-1">Full-time Trader, Delhi NCR</span>
                  <div className="flex mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={12} className="text-amber-500 fill-amber-500" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-lg font-bold text-amber-500 mb-2">119 Wins out of 126 Trades (94.4% Win Rate)</p>
              <p className="text-slate-300">
                "EUR/USD pe whale tracking + crypto footprints = Paisa hi paisa. Kal $50M EUR buy order dikha, long gaya at 1.0850, close kiya at 1.0920. Aaram se ₹5.8 lakh kamaye."
              </p>
            </div>
            
            <div className="testimonial-card animate-on-scroll">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-slate-700 flex items-center justify-center mr-4">
                  <User size={20} className="text-amber-500" />
                </div>
                <div>
                  <h4 className="font-bold">Karthik Reddy</h4>
                  <span className="block text-sm text-slate-400 font-medium mb-1">Ex-Infosys, Hyderabad</span>
                  <div className="flex mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={12} className="text-amber-500 fill-amber-500" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-lg font-bold text-amber-500 mb-2">₹4 Lakh → ₹1.3 Crore in 6 Months (3,020% ROI)</p>
              <p className="text-slate-300">
                "Last ₹4 lakh se start kiya after crypto mein sab kuch haar gaya. Ab daily whale orders ko front-run karta hun. Sirf last month ₹35 lakh kamaye ETH pumps pe. Parents ko lagta hai main genius hun. Bas whales ko follow karta hun."
              </p>
            </div>
          </div>
          
          <div className="text-center animate-on-scroll">
            <p className="text-lg text-slate-300 mb-6 italic">
              <span className="text-red-400 font-bold">⚠️ WARNING:</span> Exchanges are trying to shut down our whale tracking system. Join before it's banned.
            </p>
            <p className="text-xl font-bold text-white mb-8">
              Your success story could be next...
            </p>
            
            <button onClick={handlePaymentPopup} className="cta-button-primary inline-block">
              Steal The Whale Secrets (Only 7 Spots Left)
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;