import React, { useState, useEffect } from 'react';
import { Brain, Target, Zap, Gift, Clock, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import SidhantBadge from './SidhantBadge';

const QuizBenefitsSection = () => {
  const [recentActivity, setRecentActivity] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRecentActivity(prev => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const activities = [
    { name: "Priya S.", location: "Delhi", program: "Crypto Evening Profits", time: "2 minutes ago" },
    { name: "Amit K.", location: "Mumbai", program: "Elite Mentorship", time: "5 minutes ago" },
    { name: "Rahul V.", location: "Bangalore", program: "Footprint Mastery", time: "8 minutes ago" }
  ];

  const steps = [
    {
      icon: Brain,
      number: "01",
      title: "Smart Assessment",
      description: "Answer 6 strategic questions about your experience, goals & schedule",
      color: "text-yellow-400",
      bgColor: "bg-yellow-500/10"
    },
    {
      icon: Target,
      number: "02", 
      title: "AI-Powered Matching",
      description: "Sidhant's algorithm analyzes your profile against 10,000+ success stories",
      color: "text-green-400",
      bgColor: "bg-green-500/10"
    },
    {
      icon: Gift,
      number: "03",
      title: "Personalized Bonuses",
      description: "Get ₹15,000+ in resources tailored to YOUR specific needs",
      color: "text-blue-400",
      bgColor: "bg-blue-500/10"
    }
  ];

  const benefits = [
    "Save ₹73,000 by avoiding the wrong program",
    "Get matched in 2 minutes (not weeks of research)",
    "89% of quiz takers become profitable traders",
    "Personalized roadmap from Day 1"
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 relative overflow-hidden bg-slate-800/30">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <SidhantBadge variant="compact" className="mb-6" />
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            <span className="block text-white">
              How Sidhant's Quiz Finds
            </span>
            <span className="block mt-2 bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
              Your Perfect Trading Path
            </span>
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            Based on analyzing 10,000+ trader journeys, this assessment matches you 
            with the program that fits your <span className="text-yellow-400">exact situation</span>
          </p>
        </div>

        {/* How It Works */}
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="glass-effect rounded-2xl p-6 sm:p-8 h-full border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-[1.02]">
                {/* Step Number */}
                <div className="absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-br from-slate-700 to-slate-800 rounded-full flex items-center justify-center border-2 border-slate-900">
                  <span className="text-white font-bold text-sm">{step.number}</span>
                </div>
                
                <div className={`inline-flex p-4 rounded-2xl ${step.bgColor} mb-6`}>
                  <step.icon className={`w-8 h-8 ${step.color}`} />
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3">
                  {step.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Benefits Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8">
              Why <span className="text-yellow-400">2,347 traders</span> took the quiz this week:
            </h3>
            
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-3 glass-effect rounded-lg p-4 border border-white/5"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 bg-gradient-to-r from-green-500/10 to-green-600/10 rounded-xl border border-green-500/30">
              <p className="text-sm text-gray-300">
                <span className="text-green-400 font-semibold">Fun Fact:</span> Quiz takers are 
                {' '}<span className="text-white font-bold">12x more likely</span> to become profitable 
                compared to those who pick programs randomly.
              </p>
            </div>
          </div>

          {/* Live Activity Feed */}
          <div className="glass-effect rounded-2xl p-6 sm:p-8 border border-white/10">
            <div className="flex items-center justify-between mb-6">
              <h4 className="text-lg font-semibold text-white">Live Quiz Results</h4>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-sm text-green-400">LIVE</span>
              </div>
            </div>

            <div className="space-y-4">
              {activities.map((activity, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg transition-all duration-500 ${
                    index === recentActivity 
                      ? 'bg-green-500/10 border border-green-500/30' 
                      : 'bg-slate-800/50 border border-slate-700/50'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-gray-600 to-gray-700 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {activity.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-semibold text-white">{activity.name} from {activity.location}</p>
                        <p className="text-sm text-gray-400">Matched with: {activity.program}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-green-400">Perfect Match!</span>
                    <span className="text-gray-500">{activity.time}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-400 mb-2">Join them in finding your path</p>
              <div className="flex items-center justify-center gap-2 text-yellow-400">
                <Clock className="w-4 h-4" />
                <span className="text-sm font-medium">Average completion: 2 min 14 sec</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="inline-flex flex-col items-center glass-effect rounded-2xl px-8 py-6 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-3">
              Ready to Find Your Perfect Trading Program?
            </h3>
            <p className="text-gray-400 mb-6 max-w-2xl">
              Stop wasting time and money on the wrong courses. 
              Let Sidhant's proven system match you with your ideal path.
            </p>
            <Link
              to="/quiz"
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-full px-8 py-4 font-bold transition-all duration-300 shadow-lg hover:shadow-green-500/25"
            >
              <Zap className="w-5 h-5" />
              Take the 2-Minute Quiz Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <p className="text-xs text-gray-500 mt-4">
              🎁 Get ₹15,000 in personalized bonuses • 🔒 No payment required
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuizBenefitsSection;