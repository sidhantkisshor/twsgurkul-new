import React from 'react';
import { Phone, MessageSquare, Shield, Clock } from 'lucide-react';

const FinalEnrollmentCTA = () => {
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
              <span className="text-white">Ready to </span>
              <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">Start Trading Profitably?</span>
            </h2>

            {/* Subheadline */}
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Join 10,000+ Indians who transformed their financial future.
              <br />
              <span className="text-gray-400">Your journey to consistent profits starts with one decision.</span>
            </p>

            {/* Two CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              {/* Primary - Call */}
              <a
                href="tel:+919999999999"
                className="group bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-full px-8 py-4 text-lg font-bold transition-all duration-300 shadow-xl hover:shadow-green-500/25 flex items-center justify-center gap-3"
              >
                <Phone className="w-5 h-5" />
                Call Now: +91 99999 99999
              </a>

              {/* Secondary - WhatsApp */}
              <a
                href="https://wa.me/919999999999?text=Hi,%20I%20want%20to%20join%20TWS%20Gurukul"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-effect hover:bg-white/10 text-white rounded-full px-8 py-4 text-lg font-semibold transition-all duration-300 border border-white/20 hover:border-white/30 flex items-center justify-center gap-3"
              >
                <MessageSquare className="w-5 h-5" />
                WhatsApp Us
              </a>
            </div>

            {/* Office Hours */}
            <div className="inline-flex items-center gap-2 text-sm text-gray-400 mb-8">
              <Clock className="w-4 h-4" />
              <span>Mon-Sat: 10 AM - 7 PM</span>
            </div>

            {/* Trust Elements */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
              <div className="text-center">
                <p className="text-2xl font-bold text-white">10,847</p>
                <p className="text-sm text-gray-500">Happy Students</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-green-400">₹10 Cr+</p>
                <p className="text-sm text-gray-500">Student Profits</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-yellow-400">89%</p>
                <p className="text-sm text-gray-500">Success Rate</p>
              </div>
            </div>

          </div>

          {/* FAQ Link */}
          <div className="text-center mt-8">
            <p className="text-gray-400">
              Have questions? Check our{' '}
              <a href="#faq" className="text-green-400 hover:text-green-300 underline">
                Frequently Asked Questions
              </a>
              {' '}or call us directly.
            </p>
          </div>

          {/* Final Trust Text */}
          <div className="text-center mt-12">
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

export default FinalEnrollmentCTA;