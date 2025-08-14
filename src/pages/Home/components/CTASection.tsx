import React from 'react';
import { Phone, MessageSquare, Shield, Clock, ArrowRight, Target, Star, TrendingUp } from 'lucide-react';
import CountdownBar from './CountdownBar';

const CTASection = () => {
  return (
    <section className="py-20 sm:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          
          {/* Main CTA Card */}
          <div className="glass-effect rounded-3xl border border-white/20 p-8 sm:p-12 text-center bg-gradient-to-br from-green-500/5 via-transparent to-purple-500/5">
            
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/20 border border-green-500/30 mb-6">
              <Shield className="w-4 h-4 text-green-400" />
              <span className="text-sm text-green-400 font-medium">30-Day Money Back Guarantee</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Ready to Start Your </span>
              <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">Trading Journey?</span>
            </h2>

            {/* Subheadline */}
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Take the quiz to get your personalized program recommendation or speak with our experts.
            </p>

            {/* Countdown Bar */}
            <div className="mb-8">
              <CountdownBar />
            </div>

            {/* Quiz Stats */}
            <div className="grid grid-cols-3 gap-4 mb-10 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Target className="w-5 h-5 text-green-400" />
                  <span className="text-2xl font-bold text-white">89%</span>
                </div>
                <p className="text-xs text-gray-400">Success Rate</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Star className="w-5 h-5 text-yellow-400" />
                  <span className="text-2xl font-bold text-white">10,847+</span>
                </div>
                <p className="text-xs text-gray-400">Students</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <TrendingUp className="w-5 h-5 text-blue-400" />
                  <span className="text-2xl font-bold text-white">₹10.2Cr</span>
                </div>
                <p className="text-xs text-gray-400">Student Profits</p>
              </div>
            </div>

            {/* Primary Quiz CTA */}
            <button
              onClick={() => {
                document.getElementById('quiz')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-full px-10 py-5 text-xl font-bold transition-all duration-300 shadow-xl hover:shadow-green-500/25 hover:scale-105 mb-6 inline-flex items-center gap-3"
            >
              <Target className="w-6 h-6" />
              Take the Free Quiz Now
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <p className="text-sm text-gray-400 mb-10">
              Get personalized recommendation • ₹15K bonus package • No email required
            </p>

            {/* Alternative Contact Options */}
            <div className="pt-8 border-t border-white/10">
              <p className="text-sm text-gray-400 mb-4">Prefer to speak with someone?</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {/* Call */}
                <a
                  href="tel:+919999999999"
                  className="glass-effect hover:bg-white/10 text-white rounded-full px-6 py-3 text-base font-semibold transition-all duration-300 border border-white/20 hover:border-white/30 flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  Call: +91 99999 99999
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/919999999999?text=Hi,%20I%20want%20to%20join%20TWS%20Gurukul"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-effect hover:bg-white/10 text-white rounded-full px-6 py-3 text-base font-semibold transition-all duration-300 border border-white/20 hover:border-white/30 flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  WhatsApp Us
                </a>
              </div>
            </div>

            {/* Office Hours */}
            <div className="inline-flex items-center gap-2 text-sm text-gray-400 mb-8">
              <Clock className="w-4 h-4" />
              <span>Mon-Sat: 10 AM - 7 PM | Expert counselors available</span>
            </div>


          </div>

          {/* Final Message from Sidhant */}
          <div className="text-center mt-12">
            <p className="text-gray-400 italic">
              "The best time to start trading was yesterday. The second best time is today."
            </p>
            <p className="text-green-400 font-semibold mt-2">- Sidhant Kisshor, Founder TWS Gurukul</p>
          </div>

          {/* Security Note */}
          <div className="text-center mt-8">
            <p className="text-sm text-gray-500">
              🔒 Your investment is protected by our 30-day money-back guarantee
              <br />
              📞 Our counselors are trained traders, not salespeople
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CTASection;