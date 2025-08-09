import React, { useState, useEffect } from 'react';
import { TrendingUp, Clock, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const TransformationProofSection = () => {
  const [activeStory, setActiveStory] = useState(0);

  const transformations = [
    {
      name: "Rajesh Kumar",
      location: "Mumbai",
      before: "Lost ₹2 lakhs in options",
      after: "Now makes ₹45K/month consistently",
      timeframe: "In just 67 days",
      program: "Crypto Mastery",
      quote: "Quiz showed me I was trading options when I should've been in crypto"
    },
    {
      name: "Priya Sharma", 
      location: "Delhi",
      before: "Confused by YouTube strategies",
      after: "₹30K profit in first month",
      timeframe: "After 3 weeks",
      program: "Footprint Mastery",
      quote: "Finally understood why banks were beating me every time"
    },
    {
      name: "Amit Patel",
      location: "Bangalore", 
      before: "6 failed courses, almost quit",
      after: "Replaced IT salary with trading",
      timeframe: "Within 4 months",
      program: "Elite Mentorship",
      quote: "Quiz saved me from wasting another ₹50K on wrong course"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStory((prev) => (prev + 1) % transformations.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [transformations.length]);

  return (
    <section className="py-16 sm:py-20 relative overflow-hidden bg-slate-800/30">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/20 border border-green-500/30 mb-6">
              <Users className="w-4 h-4 text-green-400" />
              <span className="text-sm text-green-400 font-medium">10,000+ Success Stories</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              <span className="text-white">From </span>
              <span className="text-red-400">Losing Money</span>
              <span className="text-white"> to </span>
              <span className="text-green-400">Consistent Profits</span>
            </h2>
            
            <p className="text-xl text-gray-400">
              All because they took 2 minutes to find their perfect match
            </p>
          </div>

          {/* Transformation Carousel */}
          <div className="relative mb-12">
            <div className="glass-effect rounded-2xl p-8 md:p-10 border border-white/10 min-h-[300px]">
              {transformations.map((story, index) => (
                <div
                  key={index}
                  className={`transition-all duration-500 ${
                    index === activeStory ? 'opacity-100' : 'opacity-0 absolute inset-8 md:inset-10'
                  }`}
                >
                  {/* Person Info */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-2xl">
                      {story.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{story.name}</h3>
                      <p className="text-gray-400">{story.location} • Matched with {story.program}</p>
                    </div>
                  </div>

                  {/* Transformation */}
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="glass-effect rounded-xl p-5 border border-red-500/20">
                      <p className="text-sm text-red-400 mb-2">BEFORE</p>
                      <p className="text-lg text-white font-semibold">{story.before}</p>
                    </div>
                    <div className="glass-effect rounded-xl p-5 border border-green-500/20">
                      <p className="text-sm text-green-400 mb-2">AFTER</p>
                      <p className="text-lg text-white font-semibold">{story.after}</p>
                    </div>
                  </div>

                  {/* Quote */}
                  <blockquote className="text-lg text-gray-300 italic mb-4">
                    "{story.quote}"
                  </blockquote>

                  {/* Timeframe */}
                  <div className="flex items-center gap-2 text-yellow-400">
                    <Clock className="w-5 h-5" />
                    <span className="font-semibold">{story.timeframe}</span>
                  </div>
                </div>
              ))}
              
              {/* Progress Indicators */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                {transformations.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveStory(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === activeStory 
                        ? 'w-8 bg-green-400' 
                        : 'bg-gray-600 hover:bg-gray-500'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="glass-effect rounded-xl p-5 text-center border border-white/10">
              <div className="text-3xl font-bold text-green-400 mb-1">89%</div>
              <p className="text-sm text-gray-400">Become Profitable</p>
            </div>
            <div className="glass-effect rounded-xl p-5 text-center border border-white/10">
              <div className="text-3xl font-bold text-yellow-400 mb-1">67 Days</div>
              <p className="text-sm text-gray-400">Avg to Profit</p>
            </div>
            <div className="glass-effect rounded-xl p-5 text-center border border-white/10">
              <div className="text-3xl font-bold text-blue-400 mb-1">₹47K</div>
              <p className="text-sm text-gray-400">Avg Monthly</p>
            </div>
            <div className="glass-effect rounded-xl p-5 text-center border border-white/10">
              <div className="text-3xl font-bold text-purple-400 mb-1">2,347</div>
              <p className="text-sm text-gray-400">This Week</p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <p className="text-xl text-white mb-6">
              Your transformation is <span className="text-yellow-400 font-bold">2 minutes away</span>
            </p>
            <Link
              to="/quiz"
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-full px-8 py-4 text-lg font-bold transition-all duration-300 shadow-lg hover:shadow-green-500/25"
            >
              <TrendingUp className="w-5 h-5" />
              Start My Transformation Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TransformationProofSection;