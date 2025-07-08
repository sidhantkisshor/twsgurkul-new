import React from 'react';
import { ArrowRight, CheckCircle, Clock, Users } from 'lucide-react';

const ModernCTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 via-transparent to-purple-500/20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-500/30 rounded-full filter blur-[128px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="glass-effect rounded-3xl border border-white/20 p-12 md:p-16 text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/20 border border-red-500/30 mb-8">
            <Clock className="w-4 h-4 text-red-400" />
            <span className="text-sm text-red-400 font-medium">Limited Seats Available</span>
          </div>

          {/* Headline */}
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
              Ready to Join the Elite 1%?
            </span>
          </h2>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Stop losing money to the markets. Start your transformation today 
            and become the trader you were meant to be.
          </p>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span className="text-gray-300">Lifetime Access</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span className="text-gray-300">Live Mentorship</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span className="text-gray-300">Money-Back Guarantee</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="#programs"
              className="group bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-full px-8 py-4 text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-green-500/25 flex items-center justify-center gap-2"
            >
              Explore Our Programs
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="https://instagram.com/twsgurukul"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-effect hover:bg-white/10 text-white rounded-full px-8 py-4 text-lg font-semibold transition-all duration-300 border border-white/20 hover:border-white/30"
            >
              Follow @twsgurukul
            </a>
          </div>

          {/* Social Proof */}
          <div className="flex items-center justify-center gap-8">
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
            <div className="text-left">
              <div className="flex items-center gap-2 text-white font-semibold">
                <Users className="w-4 h-4" />
                <span>5,000+ Active Traders</span>
              </div>
              <div className="text-sm text-gray-400">Join our growing community</div>
            </div>
          </div>
        </div>

        {/* Bottom text */}
        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm">
            🔒 Your information is secure and will never be shared
          </p>
        </div>
      </div>
    </section>
  );
};

export default ModernCTASection;