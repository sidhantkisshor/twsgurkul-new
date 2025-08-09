import React, { useState, useEffect } from 'react';
import { ArrowRight, Brain, Clock, Gift } from 'lucide-react';
import { Link } from 'react-router-dom';
import SidhantBadge from './SidhantBadge';

const FinalQuizCTA = () => {
  const [timeLeft, setTimeLeft] = useState({ hours: 3, minutes: 47, seconds: 22 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds === 0) {
          if (prev.minutes === 0) {
            if (prev.hours === 0) {
              return { hours: 3, minutes: 59, seconds: 59 };
            }
            return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
          }
          return { hours: prev.hours, minutes: prev.minutes - 1, seconds: 59 };
        }
        return { ...prev, seconds: prev.seconds - 1 };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 sm:py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 via-transparent to-purple-500/20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-green-500/20 to-purple-500/20 rounded-full filter blur-[150px]" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          
          {/* Main CTA Card */}
          <div className="glass-effect rounded-3xl border border-white/20 p-8 sm:p-12 text-center bg-gradient-to-br from-green-500/5 via-transparent to-purple-500/5">
            
            {/* Sidhant Badge */}
            <div className="flex justify-center mb-8">
              <SidhantBadge variant="full" />
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="block text-white">
                Your Trading Success
              </span>
              <span className="block mt-2 bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
                Starts Right Here
              </span>
            </h2>

            {/* Value Prop */}
            <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join 10,000+ traders who found their perfect program in just 2 minutes.
              <br />
              <span className="text-yellow-400 font-semibold">Get your personalized roadmap + ₹15,000 in bonuses.</span>
            </p>

            {/* What You Get */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 max-w-3xl mx-auto">
              <div className="glass-effect rounded-lg p-4 border border-white/5">
                <Brain className="w-6 h-6 text-green-400 mb-2 mx-auto" />
                <p className="text-sm font-semibold text-white">Smart Matching</p>
                <p className="text-xs text-gray-400 mt-1">Based on YOUR profile</p>
              </div>
              <div className="glass-effect rounded-lg p-4 border border-white/5">
                <Gift className="w-6 h-6 text-yellow-400 mb-2 mx-auto" />
                <p className="text-sm font-semibold text-white">₹15,000 Bonuses</p>
                <p className="text-xs text-gray-400 mt-1">Exclusive resources</p>
              </div>
              <div className="glass-effect rounded-lg p-4 border border-white/5">
                <Clock className="w-6 h-6 text-blue-400 mb-2 mx-auto" />
                <p className="text-sm font-semibold text-white">2 Minutes</p>
                <p className="text-xs text-gray-400 mt-1">Quick & easy</p>
              </div>
            </div>

            {/* Urgency Timer */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/20 border border-yellow-500/30 mb-8">
              <Clock className="w-4 h-4 text-yellow-400 animate-pulse" />
              <span className="text-sm text-yellow-400 font-medium">
                Bonus expires in: {String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
              </span>
            </div>

            {/* Primary CTA */}
            <Link
              to="/quiz"
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-full px-10 py-5 text-lg md:text-xl font-bold transition-all duration-300 shadow-2xl hover:shadow-green-500/25 hover:scale-105 animate-pulse hover:animate-none"
            >
              <Brain className="w-6 h-6" />
              Take My 2-Minute Quiz Now
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Link>

            {/* Trust Text */}
            <div className="mt-6 space-y-2">
              <p className="text-sm text-gray-400">
                ✅ 100% Free • ✅ No Credit Card • ✅ Instant Results
              </p>
              <p className="text-xs text-gray-500">
                "Best decision I made for my trading career" - Average quiz taker
              </p>
            </div>

            {/* Live Update */}
            <div className="mt-8 pt-8 border-t border-white/10">
              <div className="flex items-center justify-center gap-2 text-sm">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-green-400 font-medium">LIVE:</span>
                <span className="text-gray-300">17 traders taking the quiz right now</span>
              </div>
            </div>
          </div>

          {/* Bottom Message */}
          <div className="text-center mt-8">
            <p className="text-gray-500 text-sm">
              P.S. - Every day you wait is another day of potential profits lost. 
              <span className="text-yellow-400"> Start now!</span>
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FinalQuizCTA;