import React, { useState, useEffect } from 'react';
import { ArrowRight, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const StoryHeroSection = () => {
  const [currentTime, setCurrentTime] = useState('7:00 PM');
  
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const ampm = hours >= 12 ? 'PM' : 'AM';
      const displayHours = hours % 12 || 12;
      setCurrentTime(`${displayHours}:${minutes.toString().padStart(2, '0')} ${ampm}`);
    };
    
    updateTime();
    const timer = setInterval(updateTime, 60000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-16">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-black to-slate-900" />
      <div className="absolute top-1/2 -left-20 w-96 h-96 bg-green-500/5 rounded-full filter blur-[120px]" />
      <div className="absolute bottom-1/2 -right-20 w-96 h-96 bg-purple-500/5 rounded-full filter blur-[120px]" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          
          {/* Opening Story */}
          <div className="text-center mb-12">
            <p className="text-xl sm:text-2xl text-gray-400 mb-8 leading-relaxed">
              <span className="text-gray-300">Every evening at {currentTime}, thousands of Indians open their trading apps...</span>
              <br /><br />
              <span className="text-2xl sm:text-3xl text-white font-medium">Most lose money.</span>
              <br />
              <span className="text-2xl sm:text-3xl text-green-400 font-medium">A few make life-changing profits.</span>
            </p>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              <span className="block text-white">
                What's the
              </span>
              <span className="block mt-2 bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
                Difference?
              </span>
            </h1>

            <p className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
              They found the right strategy for <span className="text-yellow-400 font-semibold">THEIR</span> life.
              <br />
              <span className="text-lg text-gray-400">Not YouTube gyan. Not their friend's tip. Their own perfect match.</span>
            </p>

            {/* Simple Value Prop */}
            <div className="glass-effect rounded-2xl p-6 sm:p-8 border border-white/10 mb-10 max-w-2xl mx-auto">
              <p className="text-lg text-gray-300 mb-4">
                <span className="text-white font-semibold">Here's what we know after training 10,000+ traders:</span>
              </p>
              <div className="space-y-3 text-left max-w-xl mx-auto">
                <p className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">•</span>
                  <span className="text-gray-300">If you work 9-5, you need evening strategies</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">•</span>
                  <span className="text-gray-300">If you have ₹50K, you need different tactics than ₹5L</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">•</span>
                  <span className="text-gray-300">If you're new, advanced strategies will confuse you</span>
                </p>
              </div>
              <p className="text-yellow-400 font-semibold mt-4 text-center">
                One size DOESN'T fit all.
              </p>
            </div>

            {/* The Invitation */}
            <div className="mb-8">
              <p className="text-xl text-white mb-4">
                That's why we built something different.
              </p>
              <p className="text-lg text-gray-400">
                A simple 2-minute assessment that finds YOUR perfect trading path.
                <br />
                <span className="text-gray-500 text-base">(Used by 2,347 traders this week alone)</span>
              </p>
            </div>

            {/* CTA */}
            <Link 
              to="/quiz"
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-full px-8 py-5 text-lg md:text-xl font-bold transition-all duration-300 shadow-xl hover:shadow-green-500/25 hover:scale-105"
            >
              Find My Perfect Strategy
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <p className="mt-4 text-sm text-gray-500">
              Free • No spam • Takes 2 minutes
            </p>

            {/* Subtle social proof */}
            <div className="mt-12 flex items-center justify-center gap-2 text-sm text-gray-500">
              <Clock className="w-4 h-4" />
              <span>Average result: Profitable within 67 days</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default StoryHeroSection;