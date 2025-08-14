import React, { useState, useEffect } from 'react';
import { Clock, AlertTriangle, Gift, ArrowRight, Users, TrendingDown, CheckCircle, X, Zap, IndianRupee } from 'lucide-react';

const FinalPushSection = () => {
  // Countdown timer state
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 47,
    seconds: 59
  });

  // Spots left counter
  const [spotsLeft, setSpotsLeft] = useState(17);
  const [isUrgent, setIsUrgent] = useState(false);

  // Countdown timer logic
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
          // Reset to 24 hours when timer hits 0
          return { hours: 23, minutes: 59, seconds: 59 };
        }
        
        // Trigger urgency when less than 6 hours
        if (hours < 6) {
          setIsUrgent(true);
        }
        
        return { hours, minutes, seconds };
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
    }, 45000); // Reduce spot every 45 seconds

    return () => clearInterval(spotTimer);
  }, []);

  const lossPoints = [
    {
      icon: TrendingDown,
      title: "Every day you delay = ₹3,000 lost",
      description: "That's ₹90,000/month in missed opportunities"
    },
    {
      icon: Users,
      title: "247 students started earning today",
      description: "While you're still thinking about it"
    },
    {
      icon: IndianRupee,
      title: "Current bonus worth ₹15,000",
      description: "Expires when timer hits zero"
    }
  ];

  const bonuses = [
    { name: "Lifetime Telegram Access", value: "₹5,000", icon: "💬" },
    { name: "Risk Management Toolkit", value: "₹4,000", icon: "🛡️" },
    { name: "1-on-1 Strategy Session", value: "₹6,000", icon: "📞" }
  ];

  return (
    <section className="relative py-20 sm:py-32 overflow-hidden">
      {/* Urgent background effect */}
      <div className={`absolute inset-0 transition-all duration-1000 ${
        isUrgent 
          ? 'bg-gradient-to-b from-red-950/20 via-black to-black' 
          : 'bg-gradient-to-b from-black via-orange-950/10 to-black'
      }`} />
      
      {/* Animated urgency lines */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent animate-pulse" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent animate-pulse" />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          
          {/* Sidhant's Direct Address */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 mb-6">
              <AlertTriangle className="w-4 h-4 text-orange-400 animate-pulse" />
              <span className="text-sm font-medium text-orange-400">Direct Message from Sidhant</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                "I Can Only Help Those Who
              </span>
              <br />
              <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                Take Action Today"
              </span>
            </h2>
            
            {/* Personal Message Box */}
            <div className="glass-effect rounded-2xl p-6 sm:p-8 border border-orange-500/20 bg-gradient-to-br from-orange-950/20 to-red-950/10 mb-8">
              <div className="flex items-start gap-4 sm:gap-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center flex-shrink-0">
                  <span className="text-3xl sm:text-4xl">👨‍🏫</span>
                </div>
                <div className="text-left flex-1">
                  <p className="text-lg sm:text-xl text-gray-200 mb-4 leading-relaxed">
                    <span className="text-white font-semibold">"Listen carefully.</span> I've trained 10,847 students. 
                    The ONLY difference between those earning ₹2L/month and those still struggling?
                  </p>
                  <p className="text-xl sm:text-2xl font-bold text-orange-400 mb-4">
                    They started. Today. Not tomorrow.
                  </p>
                  <p className="text-gray-300 mb-4">
                    Every batch, I see the same pattern. People who "think about it" for weeks end up paying 
                    <span className="text-red-400 font-semibold"> ₹10,000 more</span> for the next batch. 
                    Or worse – they never start at all.
                  </p>
                  <p className="text-gray-300">
                    <span className="text-white font-semibold">This isn't sales pressure.</span> It's math. 
                    Every day you delay = ₹3,000 in missed profits. That's ₹90,000/month. 
                    <span className="text-orange-400 font-semibold"> Can you afford to lose that?"</span>
                  </p>
                  <div className="mt-4 text-right">
                    <p className="text-sm text-gray-400">— Sidhant</p>
                    <p className="text-xs text-gray-500">Founder, TWS Gurukul</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Countdown Timer & Scarcity */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {/* Timer Box */}
            <div className={`glass-effect rounded-2xl p-6 border ${
              isUrgent ? 'border-red-500/40 animate-pulse' : 'border-orange-500/20'
            } bg-gradient-to-br from-orange-950/30 to-red-950/20`}>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Clock className="w-5 h-5 text-orange-400" />
                  Current Batch Closes In
                </h3>
                {isUrgent && (
                  <span className="px-2 py-1 rounded-full bg-red-500/20 text-red-400 text-xs font-bold animate-pulse">
                    URGENT
                  </span>
                )}
              </div>
              
              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="text-center">
                  <div className={`text-3xl sm:text-4xl font-bold ${
                    isUrgent ? 'text-red-400' : 'text-orange-400'
                  }`}>
                    {String(timeLeft.hours).padStart(2, '0')}
                  </div>
                  <p className="text-xs text-gray-500 uppercase">Hours</p>
                </div>
                <div className="text-center">
                  <div className={`text-3xl sm:text-4xl font-bold ${
                    isUrgent ? 'text-red-400' : 'text-orange-400'
                  }`}>
                    {String(timeLeft.minutes).padStart(2, '0')}
                  </div>
                  <p className="text-xs text-gray-500 uppercase">Minutes</p>
                </div>
                <div className="text-center">
                  <div className={`text-3xl sm:text-4xl font-bold ${
                    isUrgent ? 'text-red-400' : 'text-orange-400'
                  }`}>
                    {String(timeLeft.seconds).padStart(2, '0')}
                  </div>
                  <p className="text-xs text-gray-500 uppercase">Seconds</p>
                </div>
              </div>
              
              <div className="p-3 rounded-lg bg-black/30">
                <p className="text-sm text-gray-300">
                  Next batch: <span className="text-white font-semibold">₹5,000 higher</span>
                </p>
              </div>
            </div>

            {/* Spots Left Box */}
            <div className="glass-effect rounded-2xl p-6 border border-red-500/20 bg-gradient-to-br from-red-950/30 to-orange-950/20">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Users className="w-5 h-5 text-red-400" />
                Limited Spots Remaining
              </h3>
              
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-400">Spots taken today</span>
                  <span className="text-sm font-semibold text-white">83/100</span>
                </div>
                <div className="w-full bg-black/50 rounded-full h-3 overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-red-500 to-orange-500 rounded-full transition-all duration-500"
                    style={{ width: '83%' }}
                  />
                </div>
              </div>
              
              <div className={`text-center p-4 rounded-lg ${
                spotsLeft <= 10 ? 'bg-red-500/10 border border-red-500/30' : 'bg-orange-500/10 border border-orange-500/20'
              }`}>
                <p className="text-3xl font-bold text-red-400">{spotsLeft}</p>
                <p className="text-sm text-gray-400">Spots Left</p>
              </div>
            </div>
          </div>

          {/* Loss Aversion Points */}
          <div className="grid md:grid-cols-3 gap-4 mb-12">
            {lossPoints.map((point, index) => (
              <div key={index} className="glass-effect rounded-xl p-4 border border-white/10 hover:border-red-500/30 transition-all">
                <point.icon className="w-8 h-8 text-red-400 mb-3" />
                <h4 className="font-semibold text-white mb-1">{point.title}</h4>
                <p className="text-xs text-gray-400">{point.description}</p>
              </div>
            ))}
          </div>

          {/* Bonus Expiry Box */}
          <div className="glass-effect rounded-2xl p-6 border border-green-500/20 bg-gradient-to-br from-green-950/20 to-emerald-950/10 mb-12">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Gift className="w-5 h-5 text-green-400" />
                ₹15,000 Bonus Package Expires With Timer
              </h3>
              <Zap className="w-5 h-5 text-yellow-400 animate-pulse" />
            </div>
            
            <div className="grid md:grid-cols-3 gap-3">
              {bonuses.map((bonus, index) => (
                <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-black/30">
                  <span className="text-2xl">{bonus.icon}</span>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-white">{bonus.name}</p>
                    <p className="text-xs text-gray-400">Worth {bonus.value}</p>
                  </div>
                  <CheckCircle className="w-4 h-4 text-green-400" />
                </div>
              ))}
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center">
            <div className="mb-6">
              <p className="text-xl text-gray-300 mb-2">
                <span className="text-white font-semibold">10,847 students</span> started with this quiz
              </p>
              <p className="text-lg text-orange-400 font-semibold">
                Your turn to join them?
              </p>
            </div>
            
            <button
              onClick={() => {
                if (typeof window !== 'undefined' && (window as any).gtag) {
                  (window as any).gtag('event', 'final_push_cta_click');
                }
                document.getElementById('quiz')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 via-red-500 to-orange-500 bg-size-200 bg-pos-0 hover:bg-pos-100 text-white rounded-full px-10 py-5 text-xl font-bold transition-all duration-500 shadow-2xl hover:shadow-orange-500/50 hover:scale-105 animate-pulse hover:animate-none"
            >
              <Zap className="w-6 h-6" />
              Start Your Path Now — Free 2-Min Quiz
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </button>
            
            <div className="mt-6 flex items-center justify-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>Results in 2 minutes</span>
              </div>
            </div>
            
            {/* Risk Reversal */}
            <div className="mt-8 inline-flex items-center gap-3 px-6 py-3 rounded-full bg-green-500/10 border border-green-500/20">
              <span className="text-green-400 font-bold">100% GUARANTEE:</span>
              <span className="text-gray-300">If the quiz doesn't show your perfect path, I'll personally call you</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FinalPushSection;