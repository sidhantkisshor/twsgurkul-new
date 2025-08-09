import React from 'react';
import { MessageCircle, TrendingDown, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const RealProblemSection = () => {
  return (
    <section className="py-16 sm:py-20 relative overflow-hidden bg-slate-900/50">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          
          {/* The Real Talk */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Let's be </span>
              <span className="text-yellow-400">honest</span>
            </h2>
            
            <p className="text-xl text-gray-300">
              You've probably tried before.
            </p>
          </div>

          {/* Common Stories */}
          <div className="space-y-6 mb-12">
            {/* Story 1 */}
            <div className="glass-effect rounded-xl p-6 border border-white/5 hover:border-white/10 transition-all">
              <div className="flex items-start gap-4">
                <MessageCircle className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-300 mb-2">
                    <span className="text-white font-medium">"My friend told me about options trading.</span> Said he made 2 lakhs last month. 
                    I jumped in with 50K. Lost it all in 3 weeks. 
                    <span className="text-gray-400 italic"> Turns out, he had 5 years experience and 20 lakhs capital."</span>
                  </p>
                  <p className="text-sm text-gray-500">- Every beginner's story</p>
                </div>
              </div>
            </div>

            {/* Story 2 */}
            <div className="glass-effect rounded-xl p-6 border border-white/5 hover:border-white/10 transition-all">
              <div className="flex items-start gap-4">
                <TrendingDown className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-300 mb-2">
                    <span className="text-white font-medium">"Bought a ₹25,000 course on day trading.</span> Live sessions at 9:30 AM. 
                    But I have a job! Missed most classes. 
                    <span className="text-gray-400 italic"> Money wasted. Dreams crushed."</span>
                  </p>
                  <p className="text-sm text-gray-500">- Working professional's regret</p>
                </div>
              </div>
            </div>

            {/* Story 3 */}
            <div className="glass-effect rounded-xl p-6 border border-white/5 hover:border-white/10 transition-all">
              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-300 mb-2">
                    <span className="text-white font-medium">"YouTube pe 100 videos dekhe.</span> Every guru has different advice. 
                    Scalping, swing, options, futures... tried everything. 
                    <span className="text-gray-400 italic"> Jack of all trades, master of none."</span>
                  </p>
                  <p className="text-sm text-gray-500">- The confused trader</p>
                </div>
              </div>
            </div>
          </div>

          {/* The Truth */}
          <div className="text-center mb-10">
            <p className="text-2xl text-white font-bold mb-4">
              Here's what nobody tells you:
            </p>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              It's not about finding the "best" strategy.
              <br />
              <span className="text-green-400 font-semibold">It's about finding the RIGHT strategy for YOU.</span>
            </p>
          </div>

          {/* Simple Solution */}
          <div className="glass-effect rounded-2xl p-8 border border-green-500/20 text-center max-w-2xl mx-auto">
            <p className="text-lg text-gray-300 mb-6">
              That's why <span className="text-white font-semibold">Sidhant</span> created this assessment.
              <br />
              <span className="text-gray-400">After seeing thousands fail with wrong programs.</span>
            </p>
            
            <div className="grid grid-cols-3 gap-4 mb-6 text-center">
              <div>
                <div className="text-2xl font-bold text-green-400">2 min</div>
                <p className="text-xs text-gray-500">to complete</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-yellow-400">6</div>
                <p className="text-xs text-gray-500">simple questions</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-400">1</div>
                <p className="text-xs text-gray-500">perfect match</p>
              </div>
            </div>
            
            <Link
              to="/quiz"
              className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 font-semibold transition-colors"
            >
              Let me find my path →
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default RealProblemSection;