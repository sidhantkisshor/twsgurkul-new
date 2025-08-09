import React from 'react';
import { Target, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const WhyQuizMattersSection = () => {
  return (
    <section className="py-16 sm:py-20 relative overflow-hidden bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 mb-6">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-purple-400 font-medium">The Secret to Trading Success</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Why </span>
              <span className="text-green-400">89% of Quiz Takers</span>
              <span className="text-white"> Become Profitable</span>
            </h2>
          </div>

          {/* The Success Formula */}
          <div className="glass-effect rounded-2xl p-8 md:p-10 border border-green-500/20 mb-10">
            <div className="flex items-center gap-3 mb-6">
              <Target className="w-8 h-8 text-green-400" />
              <h3 className="text-2xl font-bold text-white">The Perfect Match Formula</h3>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-green-400 font-bold">1</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Right Strategy for YOUR Schedule</h4>
                  <p className="text-gray-400">
                    Working 9-5? Get evening strategies. Full-time trader? Get day trading systems.
                    <span className="text-yellow-400"> No more missing live sessions!</span>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-green-400 font-bold">2</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Matches Your Capital Size</h4>
                  <p className="text-gray-400">
                    ₹50K or ₹5 Lakhs? Each needs different strategies.
                    <span className="text-green-400"> Start with what works for YOUR account.</span>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-green-400 font-bold">3</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Your Experience Level</h4>
                  <p className="text-gray-400">
                    Beginner? Advanced? Get strategies you can actually implement.
                    <span className="text-blue-400"> No confusion, just clarity.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Success Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400">2 min</div>
              <p className="text-sm text-gray-400">Quiz time</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400">₹15K</div>
              <p className="text-sm text-gray-400">Bonuses</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400">89%</div>
              <p className="text-sm text-gray-400">Success rate</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400">10K+</div>
              <p className="text-sm text-gray-400">Happy traders</p>
            </div>
          </div>

          {/* CTA Box */}
          <div className="glass-effect rounded-2xl p-8 border border-green-500/20 text-center bg-gradient-to-br from-green-500/5 to-purple-500/5">
            <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">
              Your Success Starts with the Right Match
            </h3>
            <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
              Join 10,000+ traders who stopped guessing and started winning.
              <br />
              <span className="text-yellow-400 font-semibold">Get your personalized roadmap now.</span>
            </p>
            
            <Link
              to="/quiz"
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-full px-8 py-4 text-lg font-bold transition-all duration-300 shadow-lg hover:shadow-green-500/25"
            >
              Discover My Perfect Program
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <p className="mt-4 text-sm text-gray-500">
              100% Free • No Spam • Results in 2 Minutes
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyQuizMattersSection;