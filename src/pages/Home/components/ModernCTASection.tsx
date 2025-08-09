import React, { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle, Users, Brain, AlertTriangle, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import SidhantBadge from './SidhantBadge';

const ModernCTASection = () => {
  const [urgencyTime, setUrgencyTime] = useState({ hours: 4, minutes: 23, seconds: 17 });

  useEffect(() => {
    const timer = setInterval(() => {
      setUrgencyTime(prev => {
        if (prev.seconds === 0) {
          if (prev.minutes === 0) {
            if (prev.hours === 0) {
              return { hours: 4, minutes: 59, seconds: 59 };
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
    <section className="py-16 sm:py-20 md:py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 via-transparent to-purple-500/20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-500/30 rounded-full filter blur-[128px]" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="glass-effect rounded-2xl sm:rounded-3xl border border-white/20 p-8 sm:p-12 md:p-16 text-center max-w-4xl mx-auto">
          {/* Sidhant Badge */}
          <div className="flex justify-center mb-8">
            <SidhantBadge variant="full" />
          </div>

          {/* Urgency Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/20 border border-yellow-500/30 mb-8">
            <AlertTriangle className="w-4 h-4 text-yellow-400 animate-pulse" />
            <span className="text-sm text-yellow-400 font-medium">
              Quiz bonus expires in: {String(urgencyTime.hours).padStart(2, '0')}:{String(urgencyTime.minutes).padStart(2, '0')}:{String(urgencyTime.seconds).padStart(2, '0')}
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="block text-white">
              Don't Be Part of the
            </span>
            <span className="block mt-2 bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
              97% Who Fail
            </span>
          </h2>

          {/* Subheadline */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed">
            They pick programs randomly and lose ₹73,000+.
            <br />
            <span className="text-yellow-400 font-semibold">You're 2 minutes away from your perfect match.</span>
          </p>

          {/* What You Get */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12 max-w-3xl mx-auto">
            <div className="glass-effect rounded-lg p-4 border border-white/5">
              <CheckCircle className="w-5 h-5 text-green-400 mb-2 mx-auto" />
              <p className="text-sm text-gray-300">Personalized Program Match</p>
              <p className="text-xs text-gray-500 mt-1">Based on YOUR profile</p>
            </div>
            <div className="glass-effect rounded-lg p-4 border border-white/5">
              <Zap className="w-5 h-5 text-yellow-400 mb-2 mx-auto" />
              <p className="text-sm text-gray-300">₹15,000 in Bonuses</p>
              <p className="text-xs text-gray-500 mt-1">Exclusive for quiz takers</p>
            </div>
            <div className="glass-effect rounded-lg p-4 border border-white/5">
              <Brain className="w-5 h-5 text-purple-400 mb-2 mx-auto" />
              <p className="text-sm text-gray-300">Sidhant's Blueprint</p>
              <p className="text-xs text-gray-500 mt-1">Your success roadmap</p>
            </div>
          </div>

          {/* Single CTA */}
          <Link
            to="/quiz"
            className="group inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-full px-8 sm:px-10 py-4 sm:py-5 text-base sm:text-lg md:text-xl font-bold transition-all duration-300 shadow-2xl hover:shadow-green-500/25 hover:scale-105"
          >
            <Brain className="w-6 h-6" />
            Take Sidhant's 2-Minute Quiz Now
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </Link>

          {/* Trust Elements */}
          <div className="mt-8 space-y-4">
            {/* Social Proof */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 bg-gradient-to-br from-gray-600 to-gray-700 rounded-full border-2 border-black flex items-center justify-center text-xs text-white font-bold"
                  >
                    {String.fromCharCode(65 + i)}
                  </div>
                ))}
              </div>
              <div className="text-center sm:text-left">
                <div className="flex items-center gap-2 text-white font-semibold">
                  <Users className="w-4 h-4" />
                  <span>2,347 traders matched this week</span>
                </div>
                <div className="text-sm text-gray-400">Average result: Profitable in 67 days</div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="text-sm text-gray-400">
              <span className="text-green-400">● LIVE:</span> Amit from Delhi just discovered his path to Crypto Mastery
            </div>
          </div>
        </div>

        {/* Bottom trust text */}
        <div className="text-center mt-8 sm:mt-12 space-y-2">
          <p className="text-gray-500 text-sm">
            🔒 Your quiz results are confidential • No spam calls
          </p>
          <p className="text-gray-600 text-xs">
            "Bhai, sach mein 2 minute mein ho jaata hai" - Every quiz taker
          </p>
        </div>
      </div>
    </section>
  );
};

export default ModernCTASection;