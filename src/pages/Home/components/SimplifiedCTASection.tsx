import React, { useState, useEffect } from 'react';
import { Shield, Clock, ArrowRight, Target, Star, TrendingUp, CheckCircle, CreditCard, Smartphone, FileText, AlertTriangle } from 'lucide-react';

interface SimplifiedCTASectionProps {
  onQuizOpen?: () => void;
}

const SimplifiedCTASection: React.FC<SimplifiedCTASectionProps> = ({ onQuizOpen }) => {
  // Single countdown timer
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 47,
    seconds: 59
  });

  const [spotsLeft] = useState(7);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else {
          return { hours: 23, minutes: 59, seconds: 59 };
        }
        
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleQuizClick = () => {
    if (onQuizOpen) {
      onQuizOpen();
    } else {
      document.getElementById('quiz')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 sm:py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-green-950/5 to-black" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          
          {/* Urgency Banner */}
          <div className="mb-8 p-4 bg-red-500/10 border border-red-500/30 rounded-2xl">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <AlertTriangle className="w-5 h-5 text-red-400" />
                <div>
                  <p className="text-white font-semibold">Limited Batch Size</p>
                  <p className="text-red-400 text-sm">Only {spotsLeft} spots remaining for this month</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-yellow-400" />
                  <div className="flex gap-1 font-mono">
                    <span className="bg-black/50 px-2 py-1 rounded-sm text-white">
                      {String(timeLeft.hours).padStart(2, '0')}
                    </span>
                    <span className="text-gray-500">:</span>
                    <span className="bg-black/50 px-2 py-1 rounded-sm text-white">
                      {String(timeLeft.minutes).padStart(2, '0')}
                    </span>
                    <span className="text-gray-500">:</span>
                    <span className="bg-black/50 px-2 py-1 rounded-sm text-white">
                      {String(timeLeft.seconds).padStart(2, '0')}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Main CTA Card */}
          <div className="glass-effect rounded-3xl border border-white/20 p-8 sm:p-12 text-center bg-linear-to-br from-green-500/5 via-transparent to-purple-500/5">
            
            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Your Trading Journey </span>
              <span className="bg-linear-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
                Starts Here
              </span>
            </h2>

            {/* Trust Points */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span className="text-sm text-gray-300">89% Success Rate</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-yellow-400" />
                <span className="text-sm text-gray-300">10,847+ Students</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-blue-400" />
                <span className="text-sm text-gray-300">₹10.2 Cr Profits</span>
              </div>
            </div>

            {/* Single Clear CTA */}
            <button
              onClick={handleQuizClick}
              className="inline-flex items-center gap-3 bg-linear-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-full px-8 py-4 text-lg font-bold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/25 group"
            >
              <Target className="w-6 h-6" />
              Get Your Personalized Program
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <p className="text-sm text-gray-400 mt-4">
              Takes 30 seconds • No email required • Instant results
            </p>

            {/* Payment Trust Row */}
            <div className="mt-10 pt-8 border-t border-white/10">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                {/* Payment Methods */}
                <div className="flex items-center gap-3">
                  <CreditCard className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-400">UPI • Cards • EMI Available</span>
                </div>
                
                {/* Money Back */}
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-green-400" />
                  <span className="text-sm text-green-400 font-medium">30-Day Money Back</span>
                </div>
              </div>
            </div>

            {/* Tiny Testimonial */}
            <div className="mt-8 p-4 bg-green-500/10 rounded-2xl border border-green-500/20 max-w-md mx-auto">
              <p className="text-sm text-gray-300 italic">
                "Made back my course fees in just week 3. Now consistently making ₹2L/month"
              </p>
              <p className="text-xs text-gray-500 mt-2">
                - Rahul M., Elite Mentorship Student
              </p>
            </div>
          </div>

          {/* WhatsApp Support */}
          <div className="text-center mt-8">
            <p className="text-gray-400 text-sm mb-3">Have questions?</p>
            <a 
              href="https://wa.me/919876543210" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors"
            >
              <Smartphone className="w-4 h-4" />
              <span className="text-sm font-medium">Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimplifiedCTASection;