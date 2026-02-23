import React, { useState, useEffect } from 'react';
import { Bitcoin, Activity, Rocket, Users, Star, TrendingUp } from 'lucide-react';

const HeaderMinimal: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [currentStat, setCurrentStat] = useState(0);

  const stats = [
    { label: "Win Rate", value: "73%", icon: TrendingUp, color: "text-[#0A8D7A]" },
    { label: "Active Now", value: "247", icon: Activity, color: "text-[#0A8D7A]" },
    { label: "Avg Return", value: "312%", icon: Star, color: "text-[#C87533]" }
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
        ? 'bg-[#FAF8F5] shadow-[0_2px_12px_rgba(44,53,57,0.08)] py-3'
        : 'bg-[#FAF8F5] py-4'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo with Program Name */}
          <div className="flex items-center gap-3">
            <a href="/" className="flex items-center gap-3 group">
              <div className="relative">
                <Bitcoin className="w-8 h-8 text-[#C87533] relative" />
              </div>
              <div>
                <div className="text-base font-black tracking-tight">
                  <span className="text-[#2C3539]">TWS</span>
                  <span className="text-[#C87533] ml-1">GURUKUL</span>
                </div>
                <div className="text-[10px] text-[#C87533]/80 font-medium uppercase tracking-wider -mt-0.5">
                  Crypto Market Mastery
                </div>
              </div>
            </a>

            {/* Trust Badge */}
            <div className="hidden lg:flex items-center gap-1.5 px-2.5 py-1 bg-[#0A8D7A]/10 rounded-full border border-[#0A8D7A]/30">
              <div className="w-1.5 h-1.5 bg-[#0A8D7A] rounded-full" />
              <span className="text-xs text-[#0A8D7A] font-medium">VERIFIED</span>
            </div>
          </div>

          {/* Center - Rotating Stats */}
          <div className="hidden md:flex items-center gap-3">
            <div className="flex items-center gap-2 px-4 py-2 bg-[#EDE6D8]/40 rounded-lg border border-[#EDE6D8]/60">
              <CurrentIcon className={`w-4 h-4 ${stats[currentStat].color} transition-all duration-500`} />
              <div className="flex flex-col">
                <span className="text-[10px] text-[#2C3539]/50 uppercase tracking-wider">{stats[currentStat].label}</span>
                <span className={`font-bold text-sm ${stats[currentStat].color} transition-all duration-500`}>
                  {stats[currentStat].value}
                </span>
              </div>
            </div>

            {/* Separator */}
            <div className="h-8 w-px bg-linear-to-b from-transparent via-[#2C3539]/20 to-transparent" />

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
                    className="w-7 h-7 rounded-full border-2 border-[#FAF8F5] hover:z-10 hover:scale-110 transition-all"
                  />
                ))}
                <div className="w-7 h-7 rounded-full bg-[#C87533] border-2 border-[#FAF8F5] flex items-center justify-center">
                  <span className="text-[10px] font-bold text-white">+89</span>
                </div>
              </div>
              <span className="text-xs text-[#2C3539]/50">
                watching now
              </span>
            </div>
          </div>

          {/* CTA Section */}
          <div className="flex items-center gap-3">
            {/* Spots Left Counter */}
            <div className="hidden sm:flex flex-col items-center px-3 py-1">
              <span className="text-[10px] text-[#2C3539]/50 uppercase tracking-wider">Spots Left</span>
              <div className="flex items-center gap-1">
                <Users className="w-3.5 h-3.5 text-[#C87533]" />
                <span className="text-lg font-bold text-[#C87533]">07</span>
              </div>
            </div>

            {/* Main CTA */}
            <a
              href="#pricing"
              className="group relative px-5 py-2.5 rounded-lg font-bold transition-all overflow-hidden bg-[#C87533] text-white hover:bg-[#b5682d]"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Rocket className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                <span className="hidden sm:inline">Join Crypto Mastery</span>
                <span className="sm:hidden">Join Now</span>
              </span>
            </a>
          </div>
        </div>

        {/* Mobile Stats Bar */}
        <div className="md:hidden mt-3 flex items-center justify-between text-xs px-2">
          <div className="flex items-center gap-2">
            <CurrentIcon className={`w-3.5 h-3.5 ${stats[currentStat].color}`} />
            <span className="text-[#2C3539]/50">{stats[currentStat].label}:</span>
            <span className={`font-bold ${stats[currentStat].color}`}>{stats[currentStat].value}</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-1.5 h-1.5 bg-[#0A8D7A] rounded-full" />
            <span className="text-[#0A8D7A]">89 enrolled today</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderMinimal;
