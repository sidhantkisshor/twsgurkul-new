import React from 'react';
import { User, CheckCircle, TrendingUp, Target, BookOpen } from 'lucide-react';
import { handlePaymentPopup } from '../utils/payment';

const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="section bg-slate-900 relative">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title text-center animate-on-scroll">
            Student <span className="text-gradient">Results</span>
          </h2>
          <p className="section-subtitle text-center animate-on-scroll mb-4">
            What students report (varies with practice and market conditions)
          </p>
          
          {/* Key Improvements Section */}
          <div className="bg-slate-800/40 rounded-2xl p-8 mb-12 animate-on-scroll">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Clearer Entries</h3>
                <p className="text-sm text-slate-400">
                  By waiting for absorption/delta alignment before entering positions
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-teal-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-teal-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Fewer Chase Trades</h3>
                <p className="text-sm text-slate-400">
                  Cleaner exits by reading exhaustion patterns in footprint data
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-amber-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Better Discipline</h3>
                <p className="text-sm text-slate-400">
                  With pre-defined invalidation levels based on order flow
                </p>
              </div>
            </div>
          </div>
          
          {/* Student Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="testimonial-card animate-on-scroll">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 rounded-full bg-slate-700 flex items-center justify-center mr-4 flex-shrink-0">
                  <User size={20} className="text-cyan-400" />
                </div>
                <div>
                  <h4 className="font-bold">Arjun M.</h4>
                  <span className="text-sm text-slate-400">6 months with program</span>
                </div>
              </div>
              <p className="text-slate-300 italic">
                "The footprint charts helped me understand when big players are absorbing vs. distributing. I stopped chasing breakouts and started waiting for clear delta confirmation. My win rate improved, but more importantly, my losses are much smaller now."
              </p>
            </div>
            
            <div className="testimonial-card animate-on-scroll">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 rounded-full bg-slate-700 flex items-center justify-center mr-4 flex-shrink-0">
                  <User size={20} className="text-cyan-400" />
                </div>
                <div>
                  <h4 className="font-bold">Priya S.</h4>
                  <span className="text-sm text-slate-400">3 months with program</span>
                </div>
              </div>
              <p className="text-slate-300 italic">
                "Learning to spot liquidity zones changed everything. I used to get stopped out constantly. Now I understand where stops cluster and avoid those trap areas. The monthly Q&A sessions really help clarify doubts."
              </p>
            </div>
            
            <div className="testimonial-card animate-on-scroll">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 rounded-full bg-slate-700 flex items-center justify-center mr-4 flex-shrink-0">
                  <User size={20} className="text-cyan-400" />
                </div>
                <div>
                  <h4 className="font-bold">Rahul K.</h4>
                  <span className="text-sm text-slate-400">8 months with program</span>
                </div>
              </div>
              <p className="text-slate-300 italic">
                "The review process using trade journals has been crucial. I can now see patterns in my mistakes. Footprint reading takes practice - don't expect instant results. But once it clicks, you'll never trade the same way."
              </p>
            </div>
            
            <div className="testimonial-card animate-on-scroll">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 rounded-full bg-slate-700 flex items-center justify-center mr-4 flex-shrink-0">
                  <User size={20} className="text-cyan-400" />
                </div>
                <div>
                  <h4 className="font-bold">Karthik R.</h4>
                  <span className="text-sm text-slate-400">4 months with program</span>
                </div>
              </div>
              <p className="text-slate-300 italic">
                "Risk management module was eye-opening. I used to size positions randomly. Now I use footprint data to gauge conviction and size accordingly. Still learning, but my account is finally growing consistently."
              </p>
            </div>
          </div>
          
          {/* Methodology Link and Disclaimer */}
          <div className="bg-slate-800/60 rounded-xl p-6 mb-8 border border-slate-700 animate-on-scroll">
            <div className="flex items-start gap-3 mb-4">
              <BookOpen className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm text-slate-300 mb-2">
                  <strong className="text-white">Methodology & Verification</strong>
                </p>
                <p className="text-sm text-slate-400">
                  Learn how we collect and verify student feedback → <a href="/results-and-claims#methodology" className="text-cyan-400 hover:text-cyan-300 underline">View Methodology</a>
                </p>
              </div>
            </div>
            
            <div className="border-t border-slate-700 pt-4">
              <p className="text-xs text-slate-500">
                <strong>Note:</strong> Results vary based on individual practice, market conditions, and risk management. This is educational content, not investment advice. Past performance does not guarantee future results. Trading involves substantial risk of loss.
              </p>
            </div>
          </div>
          
          <div className="text-center animate-on-scroll">
            <p className="text-xl font-bold text-white mb-6">
              Ready to improve your trading with order flow analysis?
            </p>
            
            <button onClick={handlePaymentPopup} className="cta-button-primary inline-block">
              Start Learning Footprint Trading — ₹34,997
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;