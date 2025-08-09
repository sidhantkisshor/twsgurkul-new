import React from 'react';
import { Target, Clock, TrendingUp, Brain } from 'lucide-react';

const WhyPersonalizationWorks = () => {
  return (
    <section className="py-16 sm:py-20 relative overflow-hidden bg-slate-900/50">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Why </span>
              <span className="text-green-400">Personalization</span>
              <span className="text-white"> = </span>
              <span className="text-yellow-400">Profits</span>
            </h2>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              One-size-fits-all courses have a 3% success rate.
              <br />
              <span className="text-green-400 font-semibold">Personalized programs? 89%.</span>
            </p>
          </div>

          {/* The Science */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="glass-effect rounded-xl p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-6 h-6 text-blue-400" />
                <h3 className="text-xl font-semibold text-white">Schedule Match</h3>
              </div>
              <p className="text-gray-300 mb-4">
                A 9-5 employee can't attend 9:30 AM live sessions. 
                That's why we have evening-only programs for working professionals.
              </p>
              <p className="text-sm text-green-400">
                Result: 94% attendance rate vs 23% industry average
              </p>
            </div>

            <div className="glass-effect rounded-xl p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-6 h-6 text-purple-400" />
                <h3 className="text-xl font-semibold text-white">Capital Optimization</h3>
              </div>
              <p className="text-gray-300 mb-4">
                ₹50K needs different strategies than ₹5L. 
                Wrong position sizing = blown account.
              </p>
              <p className="text-sm text-green-400">
                Result: 87% preserve capital vs 18% industry average
              </p>
            </div>

            <div className="glass-effect rounded-xl p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <Brain className="w-6 h-6 text-yellow-400" />
                <h3 className="text-xl font-semibold text-white">Experience Level</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Beginners need basics. Advanced need edge. 
                Mix them up = confusion for both.
              </p>
              <p className="text-sm text-green-400">
                Result: 91% complete the program vs 34% industry average
              </p>
            </div>

            <div className="glass-effect rounded-xl p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="w-6 h-6 text-green-400" />
                <h3 className="text-xl font-semibold text-white">Goal Alignment</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Side income seekers need different tactics than future full-timers. 
                We match strategy to ambition.
              </p>
              <p className="text-sm text-green-400">
                Result: 89% achieve their specific goal within 6 months
              </p>
            </div>
          </div>

          {/* Bottom Line */}
          <div className="glass-effect rounded-2xl p-8 border border-green-500/20 text-center">
            <p className="text-2xl text-white font-bold mb-3">
              The Bottom Line:
            </p>
            <p className="text-xl text-gray-300">
              When your program matches your life, 
              <span className="text-green-400 font-semibold"> success becomes inevitable.</span>
            </p>
            <p className="text-sm text-gray-500 mt-4">
              That's why our quiz asks about YOUR schedule, capital, experience, and goals.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyPersonalizationWorks;