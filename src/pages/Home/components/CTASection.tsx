import React from 'react';
import { Phone, MessageSquare, Shield, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
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
              <span className="text-white">Your Trading Success </span>
              <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">Starts Here</span>
            </h2>

            {/* Subheadline */}
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Ready to transform your financial future? Choose your path.
            </p>

            {/* Countdown Bar */}
            <div className="mb-8">
              <CountdownBar />
            </div>

            {/* Program Quick Links */}
            <div className="grid md:grid-cols-3 gap-4 mb-10">
              <Link
                to="/crypto"
                className="glass-effect rounded-xl p-4 border border-white/10 hover:border-green-500/30 transition-all group"
              >
                <h3 className="font-semibold text-white mb-1">Crypto Mastery</h3>
                <p className="text-sm text-gray-400 mb-2">For beginners • Evening only</p>
                <p className="text-green-400 font-bold">₹19,499</p>
                <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-green-400 mx-auto mt-2 group-hover:translate-x-1 transition-all" />
              </Link>

              <Link
                to="/footprint"
                className="glass-effect rounded-xl p-4 border border-white/10 hover:border-blue-500/30 transition-all group relative"
              >
                <div className="absolute -top-2 right-2 bg-yellow-500 text-black text-xs px-2 py-1 rounded-full font-bold">Popular</div>
                <h3 className="font-semibold text-white mb-1">Footprint System</h3>
                <p className="text-sm text-gray-400 mb-2">Institutional edge • 94.7% win</p>
                <p className="text-blue-400 font-bold">₹34,997</p>
                <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-blue-400 mx-auto mt-2 group-hover:translate-x-1 transition-all" />
              </Link>

              <Link
                to="/mentorship"
                className="glass-effect rounded-xl p-4 border border-white/10 hover:border-purple-500/30 transition-all group"
              >
                <h3 className="font-semibold text-white mb-1">Elite Room</h3>
                <p className="text-sm text-gray-400 mb-2">Live trading • Limited seats</p>
                <p className="text-purple-400 font-bold">₹19,999</p>
                <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-purple-400 mx-auto mt-2 group-hover:translate-x-1 transition-all" />
              </Link>
            </div>

            {/* Contact CTAs */}
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