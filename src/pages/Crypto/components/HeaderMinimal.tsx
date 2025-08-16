import React, { useState, useEffect } from 'react';
import { Bitcoin, Activity, Rocket, Users, Star, TrendingUp } from 'lucide-react';

const HeaderMinimal: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [currentStat, setCurrentStat] = useState(0);
  
  const stats = [
    { label: "Win Rate", value: "73%", icon: TrendingUp, color: "text-green-400" },
    { label: "Active Now", value: "247", icon: Activity, color: "text-blue-400" },
    { label: "Avg Return", value: "312%", icon: Star, color: "text-yellow-400" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const CurrentIcon = stats[currentStat].icon;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-slate-950/95 backdrop-blur-xl shadow-[0_8px_32px_rgba(250,204,21,0.1)] py-3' 
        : 'bg-gradient-to-b from-slate-900/80 via-slate-900/40 to-transparent py-4'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo with Program Name */}
          <div className="flex items-center gap-3">
            <a href="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-yellow-400/30 blur-2xl group-hover:bg-yellow-400/40 transition-all animate-pulse" />
                <Bitcoin className="w-8 h-8 text-yellow-400 relative animate-spin-slow" style={{ animationDuration: '8s' }} />
              </div>
              <div>
                <div className="text-base font-black tracking-tight">
                  <span className="text-white">TWS</span>
                  <span className="text-yellow-400 ml-1">GURUKUL</span>
                </div>
                <div className="text-[10px] text-yellow-400/80 font-medium uppercase tracking-wider -mt-0.5">
                  Crypto Market Mastery
                </div>
              </div>
            </a>
            
            {/* Trust Badge */}
            <div className="hidden lg:flex items-center gap-1.5 px-2.5 py-1 bg-green-500/10 rounded-full border border-green-500/30">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
              <span className="text-xs text-green-400 font-medium">VERIFIED</span>
            </div>
          </div>

          {/* Center - Rotating Stats */}
          <div className="hidden md:flex items-center gap-3">
            <div className="flex items-center gap-2 px-4 py-2 bg-slate-800/40 rounded-lg border border-slate-700/30 backdrop-blur-sm">
              <CurrentIcon className={`w-4 h-4 ${stats[currentStat].color} transition-all duration-500`} />
              <div className="flex flex-col">
                <span className="text-[10px] text-slate-500 uppercase tracking-wider">{stats[currentStat].label}</span>
                <span className={`font-bold text-sm ${stats[currentStat].color} transition-all duration-500`}>
                  {stats[currentStat].value}
                </span>
              </div>
            </div>
            
            {/* Separator */}
            <div className="h-8 w-px bg-gradient-to-b from-transparent via-slate-600 to-transparent" />
            
            {/* Live Users */}
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[
                  "https://randomuser.me/api/portraits/men/32.jpg",
                  "https://randomuser.me/api/portraits/women/44.jpg",
                  "https://randomuser.me/api/portraits/men/36.jpg"
                ].map((src, i) => (
                  <img 
                    key={i}
                    src={src} 
                    alt=""
                    className="w-7 h-7 rounded-full border-2 border-slate-900 hover:z-10 hover:scale-110 transition-all"
                  />
                ))}
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 border-2 border-slate-900 flex items-center justify-center">
                  <span className="text-[10px] font-bold text-slate-900">+89</span>
                </div>
              </div>
              <span className="text-xs text-slate-400">
                watching now
              </span>
            </div>
          </div>

          {/* CTA Section */}
          <div className="flex items-center gap-3">
            {/* Spots Left Counter */}
            <div className="hidden sm:flex flex-col items-center px-3 py-1">
              <span className="text-[10px] text-slate-500 uppercase tracking-wider">Spots Left</span>
              <div className="flex items-center gap-1">
                <Users className="w-3.5 h-3.5 text-orange-400" />
                <span className="text-lg font-bold text-orange-400">07</span>
              </div>
            </div>
            
            {/* Main CTA */}
            <a 
              href="#pricing"
              className={`group relative px-5 py-2.5 rounded-lg font-bold transition-all overflow-hidden ${
                scrolled
                  ? 'bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500 text-slate-900 hover:shadow-[0_0_24px_rgba(250,204,21,0.5)]'
                  : 'bg-slate-800/60 backdrop-blur-sm border border-yellow-400/40 text-yellow-400 hover:border-yellow-400/60 hover:bg-yellow-400/10'
              }`}
            >
              <span className="relative z-10 flex items-center gap-2">
                <Rocket className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                <span className="hidden sm:inline">Join Crypto Mastery</span>
                <span className="sm:hidden">Join Now</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-orange-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </a>
          </div>
        </div>

        {/* Mobile Stats Bar */}
        <div className="md:hidden mt-3 flex items-center justify-between text-xs px-2">
          <div className="flex items-center gap-2">
            <CurrentIcon className={`w-3.5 h-3.5 ${stats[currentStat].color}`} />
            <span className="text-slate-500">{stats[currentStat].label}:</span>
            <span className={`font-bold ${stats[currentStat].color}`}>{stats[currentStat].value}</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
            <span className="text-green-400">89 enrolled today</span>
          </div>
        </div>
      </div>

      {/* Animated Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent animate-shimmer" 
        style={{ 
          backgroundSize: '200% 100%',
          animation: 'shimmer 3s linear infinite'
        }} 
      />
    </header>
  );
};

export default HeaderMinimal;