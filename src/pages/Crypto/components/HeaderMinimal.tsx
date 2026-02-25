import React, { useState, useEffect } from 'react';
import { TrendingUp, Star, ArrowRight } from 'lucide-react';

const HeaderMinimal: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [currentStat, setCurrentStat] = useState(0);

  const stats = [
    { label: "Win Rate", value: "73%", icon: TrendingUp, color: "text-[#0A8D7A]" },
    { label: "Students", value: "1,263", icon: Star, color: "text-[#C87533]" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => setCurrentStat((prev) => (prev + 1) % stats.length), 4000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const CurrentIcon = stats[currentStat].icon;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled
        ? 'bg-[#2C3539]/95 backdrop-blur-sm shadow-[0_2px_20px_rgba(0,0,0,0.4)] py-3'
        : 'bg-[#2C3539] py-4'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2.5 min-h-[44px]">
            <img
              src="/TWS GurukulX/Icon/tws-gurukulx-icon-256.png"
              alt="TWS GurukulX"
              className="h-8 w-8 object-contain"
            />
            <div>
              <div className="text-sm font-black tracking-tight leading-none">
                <span className="text-white">TWS </span>
                <span className="text-[#C87533]">GURUKULX</span>
              </div>
              <div className="text-xs font-semibold uppercase tracking-widest text-white/50 mt-0.5">
                Crypto Mastery
              </div>
            </div>
          </a>

          {/* Center stat */}
          <div className="hidden md:flex items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-white/5 rounded-lg border border-white/10">
              <CurrentIcon className={`w-3.5 h-3.5 ${stats[currentStat].color}`} />
              <span className="text-[10px] text-white/60 uppercase tracking-wider">{stats[currentStat].label}</span>
              <span className={`font-bold text-sm ${stats[currentStat].color}`}>{stats[currentStat].value}</span>
            </div>
            <div className="h-6 w-px bg-white/10" />
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 bg-[#0A8D7A] rounded-full animate-pulse" />
              <span className="text-xs text-white/60">Live Q&A monthly</span>
            </div>
          </div>

          {/* CTA */}
          <a
            href="#pricing"
            className="flex items-center gap-2 px-4 py-2.5 min-h-[44px] bg-[#C87533] hover:bg-[#b5682d] text-white font-bold text-sm rounded-lg transition-all"
          >
            <span className="hidden sm:inline">Join Crypto Mastery</span>
            <span className="sm:hidden">Enroll Now</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default HeaderMinimal;
