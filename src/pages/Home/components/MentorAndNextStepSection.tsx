import React, { useState, useEffect } from 'react';
import { Clock, AlertTriangle, TrendingUp, Users, Target, CheckCircle, ArrowRight, Zap, Calendar } from 'lucide-react';

const MentorAndNextStepSection = () => {
  // Countdown timer state
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 14,
    minutes: 27,
    seconds: 59
  });

  const [spotsLeft, setSpotsLeft] = useState(23);
  const [isUrgent, setIsUrgent] = useState(false);

  // Countdown timer logic
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else if (days > 0) {
          days--;
          hours = 23;
          minutes = 59;
          seconds = 59;
        } else {
          // Reset when timer hits 0
          return { days: 7, hours: 23, minutes: 59, seconds: 59 };
        }
        
        // Trigger urgency when less than 1 day
        if (days === 0) {
          setIsUrgent(true);
        }
        
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Simulate spots being taken
  useEffect(() => {
    const spotTimer = setInterval(() => {
      setSpotsLeft(prev => {
        if (prev > 5) {
          return prev - 1;
        }
        return prev;
      });
    }, 60000); // Reduce spot every minute

    return () => clearInterval(spotTimer);
  }, []);

  const milestones = [
    { year: "2016", event: "Lost ₹2L in first year", color: "text-red-400" },
    { year: "2018", event: "Discovered institutional trading", color: "text-yellow-400" },
    { year: "2020", event: "First ₹1Cr profit year", color: "text-green-400" },
    { year: "2024", event: "10,847+ students transformed", color: "text-blue-400" }
  ];

  return (
    <section className="relative py-20 sm:py-32 overflow-hidden">
      {/* Urgent background effect */}
      <div className={`absolute inset-0 transition-all duration-1000 ${
        isUrgent 
          ? 'bg-gradient-to-b from-red-950/20 via-black to-black' 
          : 'bg-gradient-to-b from-black via-purple-950/10 to-orange-950/10'
      }`} />
      
      {/* Animated lines */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent animate-pulse" />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-orange-500/20 border border-purple-500/30 mb-6">
              <Zap className="w-4 h-4 text-purple-400" />
              <span className="text-sm font-medium text-purple-400">Your Mentor & Your Next Step</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                From ₹2L Loss to ₹10Cr+ Profits
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent">
                Now It's Your Turn
              </span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Left - Sidhant's Story */}
            <div>
              <div className="glass-effect rounded-2xl p-6 sm:p-8 border border-purple-500/20 bg-gradient-to-br from-purple-950/20 to-indigo-950/10">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-400 to-orange-500 flex items-center justify-center flex-shrink-0">
                    <span className="text-3xl">👨‍🏫</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">Sidhant's Journey</h3>
                    <p className="text-gray-400">From Engineer to Trading Mentor</p>
                  </div>
                </div>
                
                <div className="space-y-4 text-gray-300">
                  <p>
                    <span className="text-white font-semibold">"I lost ₹2 lakhs in my first year."</span> 
                    Sound familiar? That was me in 2016. Fresh engineer, big dreams, zero knowledge.
                  </p>
                  
                  <p>
                    YouTube gurus. Paid signals. Random strategies. 
                    <span className="text-orange-400 font-medium"> Lost money faster than I made it.</span>
                  </p>
                  
                  <p>
                    The breakthrough? I discovered how institutions trade. Not retail tricks – 
                    <span className="text-green-400 font-medium">real institutional order flow.</span> 
                    Everything changed.
                  </p>
                  
                  <p>
                    2020: My first ₹1 Cr profit year. 2024: Teaching 10,847+ students the same system. 
                    <span className="text-white font-semibold"> No shortcuts. No fake promises. Just what works.</span>
                  </p>
                </div>
                
                {/* Timeline */}
                <div className="mt-6 pt-6 border-t border-white/10">
                  <div className="grid grid-cols-2 gap-3">
                    {milestones.map((milestone, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${milestone.color} bg-current`} />
                        <div>
                          <p className="text-xs text-gray-500">{milestone.year}</p>
                          <p className={`text-xs font-semibold ${milestone.color}`}>{milestone.event}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Trust Points */}
                <div className="mt-6 p-4 bg-black/30 rounded-xl">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <p className="text-2xl font-bold text-white">10,847+</p>
                      <p className="text-xs text-gray-400">Students</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-green-400">89%</p>
                      <p className="text-xs text-gray-400">Success Rate</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-yellow-400">5.0</p>
                      <p className="text-xs text-gray-400">Rating</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Next Step & Urgency */}
            <div>
              <div className={`glass-effect rounded-2xl p-6 sm:p-8 border ${
                isUrgent ? 'border-red-500/40 animate-pulse' : 'border-orange-500/20'
              } bg-gradient-to-br from-orange-950/30 to-red-950/20`}>
                
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                  <AlertTriangle className="w-6 h-6 text-orange-400" />
                  Your Next Step (Time Sensitive)
                </h3>
                
                {/* Countdown Timer */}
                <div className="mb-6">
                  <p className="text-sm text-gray-400 mb-3">Next Batch Closes In:</p>
                  <div className="grid grid-cols-4 gap-2">
                    <div className="text-center p-3 bg-black/30 rounded-lg">
                      <div className={`text-2xl font-bold ${isUrgent ? 'text-red-400' : 'text-orange-400'}`}>
                        {String(timeLeft.days).padStart(2, '0')}
                      </div>
                      <p className="text-xs text-gray-500">Days</p>
                    </div>
                    <div className="text-center p-3 bg-black/30 rounded-lg">
                      <div className={`text-2xl font-bold ${isUrgent ? 'text-red-400' : 'text-orange-400'}`}>
                        {String(timeLeft.hours).padStart(2, '0')}
                      </div>
                      <p className="text-xs text-gray-500">Hours</p>
                    </div>
                    <div className="text-center p-3 bg-black/30 rounded-lg">
                      <div className={`text-2xl font-bold ${isUrgent ? 'text-red-400' : 'text-orange-400'}`}>
                        {String(timeLeft.minutes).padStart(2, '0')}
                      </div>
                      <p className="text-xs text-gray-500">Minutes</p>
                    </div>
                    <div className="text-center p-3 bg-black/30 rounded-lg">
                      <div className={`text-2xl font-bold ${isUrgent ? 'text-red-400' : 'text-orange-400'}`}>
                        {String(timeLeft.seconds).padStart(2, '0')}
                      </div>
                      <p className="text-xs text-gray-500">Seconds</p>
                    </div>
                  </div>
                </div>
                
                {/* Spots Left */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-400">Batch capacity</span>
                    <span className="text-sm font-semibold text-white">{100 - spotsLeft}/100 filled</span>
                  </div>
                  <div className="w-full bg-black/50 rounded-full h-3 overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-orange-500 to-red-500 rounded-full transition-all duration-500"
                      style={{ width: `${100 - spotsLeft}%` }}
                    />
                  </div>
                  <p className={`text-center mt-2 font-bold ${spotsLeft <= 10 ? 'text-red-400 text-lg' : 'text-orange-400'}`}>
                    Only {spotsLeft} spots left!
                  </p>
                </div>
                
                {/* What Happens Next */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-white">Step 1: Take the Quiz</p>
                      <p className="text-xs text-gray-400">2 minutes to find your perfect path</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-white">Step 2: Get Your Roadmap</p>
                      <p className="text-xs text-gray-400">Personalized plan + bonuses worth ₹15K</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-white">Step 3: Start Monday</p>
                      <p className="text-xs text-gray-400">Begin your transformation immediately</p>
                    </div>
                  </div>
                </div>
                
                {/* Warning Message */}
                <div className="p-4 bg-red-950/30 border border-red-500/30 rounded-xl mb-6">
                  <p className="text-sm text-gray-300">
                    <span className="text-red-400 font-bold">⚠️ Important:</span> Next batch after this is 
                    <span className="text-white font-semibold"> ₹5,000 more expensive</span> and starts 30 days later.
                  </p>
                </div>
                
                {/* Final CTA */}
                <button
                  onClick={() => {
                    if (typeof window !== 'undefined' && (window as any).gtag) {
                      (window as any).gtag('event', 'mentor_final_cta_click');
                    }
                    document.getElementById('quiz')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full group bg-gradient-to-r from-orange-500 via-red-500 to-orange-500 bg-size-200 bg-pos-0 hover:bg-pos-100 text-white rounded-full py-5 text-lg font-bold transition-all duration-500 shadow-2xl hover:shadow-orange-500/50 hover:scale-105 flex items-center justify-center gap-3"
                >
                  <Calendar className="w-5 h-5" />
                  Secure Your Spot Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
              
              {/* Personal Message */}
              <div className="mt-4 p-4 glass-effect rounded-xl border border-white/10">
                <p className="text-sm text-gray-300 italic">
                  "I can only help those who take action. The quiz is free. Your future isn't."
                </p>
                <p className="text-xs text-gray-500 mt-2 text-right">— Sidhant</p>
              </div>
            </div>
          </div>

          {/* Bottom Trust Bar */}
          <div className="glass-effect rounded-2xl p-4 border border-white/10 bg-gradient-to-r from-green-950/20 via-blue-950/20 to-purple-950/20">
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span className="text-gray-300">30-Day Money Back</span>
              </div>
              <div className="w-px h-4 bg-gray-700" />
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-blue-400" />
                <span className="text-gray-300">Join 10,847+ Students</span>
              </div>
              <div className="w-px h-4 bg-gray-700" />
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-purple-400" />
                <span className="text-gray-300">89% Success Rate</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MentorAndNextStepSection;