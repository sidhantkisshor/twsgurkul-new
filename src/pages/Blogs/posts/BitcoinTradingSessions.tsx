import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Clock, TrendingUp, Globe, AlertCircle, BarChart3, Target, Zap, CheckCircle, ArrowRight, Youtube } from 'lucide-react';

/*
  Sub-components are declared at module scope (outside the parent component) so
  React can reuse stable component references across renders. Declaring them
  inside BitcoinTradingSessions would create new component types on every render,
  causing React to unmount/remount the children and reset their state.
*/

const SESSION_COLOR_MAP: Record<string, { border: string; topBar: string; icon: string; check: string }> = {
  yellow: { border: 'border-yellow-500/30 hover:border-yellow-500/60', topBar: 'from-yellow-500 to-yellow-400', icon: 'text-yellow-400', check: 'text-yellow-400' },
  blue:   { border: 'border-burnt-amber/30 hover:border-burnt-amber/60', topBar: 'from-burnt-amber to-brushed-gold', icon: 'text-burnt-amber', check: 'text-burnt-amber' },
  green:  { border: 'border-wealth-teal/30 hover:border-wealth-teal/60', topBar: 'from-wealth-teal to-wealth-teal/80', icon: 'text-wealth-teal', check: 'text-wealth-teal' },
};

const SessionCard = ({ title, time, description, features, color }: { title: string; time: string; description: string; features: string[]; color: string }) => {
  const c = SESSION_COLOR_MAP[color] || SESSION_COLOR_MAP.blue;

  return (
    /*
      hover:-translate-y-1 uses GPU-composited transform — avoids the layout
      reflow that scale-[1.02] causes when cards are stacked in a grid on mobile.
    */
    <div className={`bg-gradient-to-br from-deep-slate to-deep-slate/80 rounded-xl p-5 sm:p-6 ${c.border} border transition-colors duration-300 hover:-translate-y-1 transform-gpu relative overflow-hidden`}>
      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${c.topBar}`} aria-hidden="true"></div>
      {/* Title row — shrink title so the clock icon doesn't push it off on narrow screens */}
      <div className="flex items-start justify-between gap-3 mb-3 sm:mb-4">
        <h3 className="text-base sm:text-xl font-bold text-white leading-snug">{title}</h3>
        <Clock className={`w-5 h-5 sm:w-6 sm:h-6 ${c.icon} shrink-0 mt-0.5`} aria-hidden="true" />
      </div>
      <p className="text-xs sm:text-sm text-soft-sand/60 mb-2 sm:mb-3 font-medium">{time}</p>
      <p className="text-soft-sand/60 text-sm sm:text-base mb-3 sm:mb-4 leading-relaxed">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm">
            <CheckCircle className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${c.check} mt-0.5 shrink-0`} aria-hidden="true" />
            <span className="text-soft-sand/60 leading-relaxed">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const StrategyBox = ({ title, description, steps, icon: Icon }: { title: string; description: string; steps: string[]; icon: React.ElementType }) => (
  <div className="bg-deep-slate/50 rounded-lg p-5 sm:p-6 border border-soft-sand/10 hover:border-burnt-amber/50 transition-colors duration-300">
    <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
      <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-burnt-amber shrink-0" aria-hidden="true" />
      <h3 className="text-base sm:text-xl font-bold text-white leading-snug">{title}</h3>
    </div>
    <p className="text-soft-sand/70 text-sm sm:text-base mb-3 sm:mb-4 leading-relaxed">{description}</p>
    <div className="space-y-2 sm:space-y-3">
      {steps.map((step, idx) => (
        <div key={idx} className="flex items-start gap-2 sm:gap-3">
          {/* Step number badge — min-w prevents squishing on narrow screens */}
          <span className="bg-burnt-amber/20 text-burnt-amber px-2 py-1 rounded text-xs font-semibold shrink-0 min-w-[1.5rem] text-center">
            {idx + 1}
          </span>
          <p className="text-xs sm:text-sm text-soft-sand/60 leading-relaxed pt-0.5">{step}</p>
        </div>
      ))}
    </div>
  </div>
);

const BitcoinTradingSessions = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <article className="max-w-5xl mx-auto px-4 py-8 sm:py-12">
      {/* Reading progress bar — fixed to top of viewport, composited layer */}
      <div className="fixed top-0 left-0 w-full h-1 bg-deep-slate z-50" role="progressbar" aria-label="Reading progress" aria-valuenow={Math.round(scrollProgress)} aria-valuemin={0} aria-valuemax={100}>
        <div
          className="h-full bg-gradient-to-r from-burnt-amber to-brushed-gold transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Hero Section — py reduced on mobile */}
      <div className="mb-8 sm:mb-12 text-center">
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-6 text-white leading-snug">
          Bitcoin Trading Sessions
        </h1>
        <p className="text-base sm:text-xl text-soft-sand/70 max-w-3xl mx-auto leading-relaxed">
          The Essential Guide for Crypto Traders
        </p>
      </div>

      {/* Introduction */}
      <div className="prose prose-invert max-w-none mb-8 sm:mb-12">
        <div className="bg-gradient-to-r from-burnt-amber/10 to-wealth-teal/10 border border-burnt-amber/20 rounded-lg p-5 sm:p-6 mb-6 sm:mb-8">
          <p className="text-base sm:text-lg text-soft-sand/60 leading-relaxed">
            Bitcoin trades 24/7, but here's a secret that separates successful crypto traders from the rest:
            the biggest moves still happen when institutional money flows in during traditional trading sessions.
            While retail traders are sleeping, the real money is making its moves.
          </p>
        </div>

        <p className="text-soft-sand/60 text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed">
          If you've ever wondered why Bitcoin suddenly pumps at 3 AM your time or why certain hours seem
          to produce the most explosive price action, you're about to discover the hidden rhythm of global
          crypto markets.
        </p>
      </div>

      {/* Why Traditional Sessions Matter */}
      <section className="mb-8 sm:mb-12">
        <h2 className="text-xl sm:text-3xl font-bold mb-4 sm:mb-6 text-white flex items-center gap-2 sm:gap-3">
          <Globe className="w-5 h-5 sm:w-8 sm:h-8 text-burnt-amber shrink-0" aria-hidden="true" />
          Why Traditional Sessions Still Rule Crypto
        </h2>

        <div className="bg-deep-slate/50 rounded-lg p-5 sm:p-6 border border-soft-sand/10">
          <p className="text-soft-sand/60 text-sm sm:text-base mb-3 sm:mb-4 leading-relaxed">
            Even though you can buy Bitcoin at 2 AM on a Sunday, institutional traders-who move the real
            volume-still operate during business hours. When Wall Street wakes up, Bitcoin often wakes up too.
            When London opens, the real action begins. This isn't coincidence; it's institutional behavior
            creating predictable patterns.
          </p>

          <div className="bg-burnt-amber/10 border border-burnt-amber/30 rounded-lg p-4 mt-3 sm:mt-4">
            <p className="text-burnt-amber/80 font-semibold text-sm sm:text-base leading-relaxed">
              Think of it this way: Bitcoin might be a 24/7 party, but the biggest players only show
              up during certain hours. Smart traders know when the VIPs arrive.
            </p>
          </div>
        </div>
      </section>

      {/* The Three Sessions */}
      <section className="mb-8 sm:mb-12">
        <h2 className="text-xl sm:text-3xl font-bold mb-5 sm:mb-8 text-white flex items-center gap-2 sm:gap-3">
          <Clock className="w-5 h-5 sm:w-8 sm:h-8 text-brushed-gold shrink-0" aria-hidden="true" />
          The Three Sessions That Move Bitcoin
        </h2>

        <div className="grid gap-4 sm:gap-6">
          <SessionCard
            title="Asian Session: The Quiet Accumulator"
            time="11 PM - 8 AM EST"
            color="yellow"
            description="The Asian session is where Bitcoin takes a breather. You'll typically see lower volatility and range-bound trading between key support and resistance levels."
            features={[
              "Lower volatility ideal for range trading",
              "Chinese regulatory news can still move markets dramatically",
              "Altcoins often steal the spotlight from Bitcoin",
              "Use for patient accumulation with tighter stops"
            ]}
          />

          <SessionCard
            title="London Session: The Trend Setter"
            time="3 AM - 12 PM EST"
            color="blue"
            description="When London wakes up, Bitcoin gets serious. This session brings increased institutional volume and often sets the tone for the entire trading day."
            features={[
              "First two hours are absolutely critical",
              "European institutions move with conviction",
              "Watch for breakouts from overnight ranges",
              "Sets the tone for the entire trading day"
            ]}
          />

          <SessionCard
            title="New York Session: The Momentum Machine"
            time="8 AM - 5 PM EST"
            color="green"
            description="New York brings the big guns. This is where Bitcoin ETF flows create massive price movements and where Wall Street's institutional appetite shows its true colors."
            features={[
              "Bitcoin ETF flows create massive movements",
              "Federal Reserve announcements send shockwaves",
              "SEC and regulatory news hits hardest",
              "Strongest correlation with traditional markets"
            ]}
          />
        </div>
      </section>

      {/* Golden Hours */}
      <section className="mb-8 sm:mb-12">
        <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/30 rounded-xl p-5 sm:p-8">
          <h2 className="text-xl sm:text-3xl font-bold mb-4 sm:mb-6 text-white flex items-center gap-2 sm:gap-3">
            <Zap className="w-5 h-5 sm:w-8 sm:h-8 text-yellow-400 shrink-0" aria-hidden="true" />
            The Golden Hours: When Sessions Overlap
          </h2>

          <p className="text-soft-sand/60 text-sm sm:text-base mb-3 sm:mb-4 leading-relaxed">
            The most explosive Bitcoin moves happen during the <span className="text-yellow-400 font-semibold">
            London-New York overlap from 8 AM to 12 PM EST</span>. This four-hour window sees 60% of
            institutional Bitcoin volume and creates the tightest spreads across all major exchanges.
          </p>

          <div className="bg-deep-slate/50 rounded-lg p-4 mt-4 sm:mt-6">
            <p className="text-soft-sand/60 text-sm sm:text-base leading-relaxed">
              <span className="text-yellow-400 font-semibold">Example:</span> Remember March 13, 2024?
              Bitcoin rocketed from $69,000 to $73,000 in just three hours during this overlap as record
              ETF inflows and institutional FOMO created a perfect storm. With Bitcoin now trading around
              $120,000, similar moves could take it from $120,000 to $126,000+ during these explosive hours.
            </p>
          </div>

          <div className="mt-4 sm:mt-6 p-4 bg-orange-500/10 border border-orange-500/30 rounded-lg">
            <p className="text-orange-300 flex items-start gap-2 text-sm sm:text-base leading-relaxed">
              <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 shrink-0" aria-hidden="true" />
              During overlap hours, reduce your leverage but increase your attention. The moves are bigger,
              faster, and more unpredictable.
            </p>
          </div>
        </div>
      </section>

      {/* Trading Strategies */}
      <section className="mb-8 sm:mb-12">
        <h2 className="text-xl sm:text-3xl font-bold mb-5 sm:mb-8 text-white flex items-center gap-2 sm:gap-3">
          <Target className="w-5 h-5 sm:w-8 sm:h-8 text-wealth-teal shrink-0" aria-hidden="true" />
          Three Strategies That Actually Work
        </h2>

        <div className="grid gap-4 sm:gap-6">
          <StrategyBox
            title="The Asian Accumulation Play"
            icon={BarChart3}
            description="During quiet Asian hours, become a patient accumulator."
            steps={[
              "Set multiple buy orders in $500-1,000 intervals below current price",
              "With BTC at $120,000, place orders at $119,500, $119,000, and $118,500",
              "Target the previous day's high for exits",
              "Use tighter risk management due to lower volatility"
            ]}
          />

          <StrategyBox
            title="The London Breakout System"
            icon={TrendingUp}
            description="Identify Bitcoin's overnight range during the first hour of London trading."
            steps={[
              "Identify clear range after 6+ hours of consolidation",
              "Place buy stop above resistance (e.g., $120,500)",
              "Place sell stop below support (e.g., $119,500)",
              "Ride confirmed breakouts for 3-5% moves"
            ]}
          />

          <StrategyBox
            title="The New York Momentum Ride"
            icon={Zap}
            description="When London establishes a clear trend, use the New York overlap to ride institutional momentum."
            steps={[
              "Enter on pullbacks with smaller position sizes",
              "Scale up as volume builds",
              "Trail stops as Wall Street adds fuel to the fire",
              "Exit before the New York close to avoid overnight risk"
            ]}
          />
        </div>
      </section>

      {/* News by Session */}
      <section className="mb-8 sm:mb-12">
        <h2 className="text-xl sm:text-3xl font-bold mb-4 sm:mb-6 text-white">The News That Moves Markets By Session</h2>

        <div className="bg-deep-slate/50 rounded-lg p-5 sm:p-6 border border-soft-sand/10">
          <p className="text-soft-sand/60 text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed">
            Different sessions react to different catalysts. Understanding which news affects which
            session helps you position accordingly.
          </p>

          {/*
            Single column on mobile (easier to read tall list items),
            3 columns on md+ where there's room.
          */}
          <div className="grid sm:grid-cols-3 gap-3 sm:gap-4">
            <div className="bg-deep-slate/80 rounded-lg p-4">
              <h4 className="text-yellow-400 font-semibold mb-2 text-sm sm:text-base">Asian Hours</h4>
              <ul className="text-xs sm:text-sm text-soft-sand/60 space-y-1.5 leading-relaxed">
                <li>Chinese regulatory announcements</li>
                <li>Major Asian crypto project developments</li>
                <li>Bank of Japan statements</li>
              </ul>
            </div>

            <div className="bg-deep-slate/80 rounded-lg p-4">
              <h4 className="text-burnt-amber font-semibold mb-2 text-sm sm:text-base">London Session</h4>
              <ul className="text-xs sm:text-sm text-soft-sand/60 space-y-1.5 leading-relaxed">
                <li>EU crypto regulations</li>
                <li>European institutional adoption</li>
                <li>ECB policy decisions</li>
              </ul>
            </div>

            <div className="bg-deep-slate/80 rounded-lg p-4">
              <h4 className="text-wealth-teal font-semibold mb-2 text-sm sm:text-base">New York Session</h4>
              <ul className="text-xs sm:text-sm text-soft-sand/60 space-y-1.5 leading-relaxed">
                <li>SEC decisions</li>
                <li>Bitcoin ETF data</li>
                <li>Federal Reserve meetings</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="mb-8 sm:mb-12">
        <h2 className="text-xl sm:text-3xl font-bold mb-4 sm:mb-6 text-white flex items-center gap-2 sm:gap-3">
          <AlertCircle className="w-5 h-5 sm:w-8 sm:h-8 text-red-400 shrink-0" aria-hidden="true" />
          The Mistakes That Kill Profits
        </h2>

        <div className="space-y-3 sm:space-y-4">
          <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
            <h4 className="text-red-400 font-semibold mb-1.5 sm:mb-2 text-sm sm:text-base">Fighting Institutional Flow</h4>
            <p className="text-soft-sand/60 text-xs sm:text-sm leading-relaxed">
              The biggest mistake is fighting institutional flow during New York hours. When Bitcoin ETF
              inflows are massive, don't try to short. When Wall Street is buying, join them or stay out.
            </p>
          </div>

          <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
            <h4 className="text-red-400 font-semibold mb-1.5 sm:mb-2 text-sm sm:text-base">Overleveraging During Overlaps</h4>
            <p className="text-soft-sand/60 text-xs sm:text-sm leading-relaxed">
              Using maximum leverage during overlap periods can stop you out of perfectly good trades.
              Reduce position sizes during high-volatility windows.
            </p>
          </div>

          <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
            <h4 className="text-red-400 font-semibold mb-1.5 sm:mb-2 text-sm sm:text-base">One Strategy for All Sessions</h4>
            <p className="text-soft-sand/60 text-xs sm:text-sm leading-relaxed">
              Don't apply the same strategy across all sessions. Range trading works during Asian hours
              but gets destroyed during London breakouts. Match your strategy to the session's personality.
            </p>
          </div>
        </div>
      </section>

      {/* Trading Blueprint */}
      <section className="mb-8 sm:mb-12">
        <h2 className="text-xl sm:text-3xl font-bold mb-4 sm:mb-6 text-white">Your Session Trading Blueprint</h2>

        <div className="bg-gradient-to-br from-deep-slate to-deep-slate/80 rounded-xl p-5 sm:p-8 border border-soft-sand/10">
          <div className="space-y-5 sm:space-y-6">
            <div className="flex items-start gap-3 sm:gap-4">
              <span className="bg-burnt-amber text-white px-2.5 py-1 rounded-full text-xs sm:text-sm font-bold shrink-0 min-w-[1.75rem] text-center" aria-hidden="true">1</span>
              <div>
                <h4 className="text-white font-semibold mb-1 sm:mb-2 text-sm sm:text-base">Observe and Learn</h4>
                <p className="text-soft-sand/70 text-xs sm:text-sm leading-relaxed">
                  Start by observing Bitcoin during your available trading hours for one full week. Note
                  which sessions produce the biggest moves and align with your natural rhythm.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 sm:gap-4">
              <span className="bg-burnt-amber text-white px-2.5 py-1 rounded-full text-xs sm:text-sm font-bold shrink-0 min-w-[1.75rem] text-center" aria-hidden="true">2</span>
              <div>
                <h4 className="text-white font-semibold mb-1 sm:mb-2 text-sm sm:text-base">Paper Trade Your Strategy</h4>
                <p className="text-soft-sand/70 text-xs sm:text-sm leading-relaxed">
                  Paper trade one strategy for a week. If you're naturally awake during Asian hours,
                  master the accumulation strategy. Don't try to master all sessions at once.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 sm:gap-4">
              <span className="bg-burnt-amber text-white px-2.5 py-1 rounded-full text-xs sm:text-sm font-bold shrink-0 min-w-[1.75rem] text-center" aria-hidden="true">3</span>
              <div>
                <h4 className="text-white font-semibold mb-1 sm:mb-2 text-sm sm:text-base">Go Live with Caution</h4>
                <p className="text-soft-sand/70 text-xs sm:text-sm leading-relaxed">
                  When you go live, start with smaller position sizes. Track your performance by session —
                  you'll quickly discover your strengths and weaknesses.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Line */}
      <section className="mb-8 sm:mb-12">
        <div className="bg-gradient-to-r from-burnt-amber/10 to-wealth-teal/10 border border-burnt-amber/30 rounded-xl p-5 sm:p-8">
          <h2 className="text-xl sm:text-3xl font-bold mb-4 sm:mb-6 text-white">The Bottom Line</h2>

          <p className="text-soft-sand/60 text-sm sm:text-base mb-3 sm:mb-4 leading-relaxed">
            Bitcoin never sleeps, but smart traders know when to be most alert. Each session has its
            own personality: Asian hours for patient accumulation, London for trend-setting breakouts,
            and New York for institutional momentum.
          </p>

          <p className="text-soft-sand/60 text-sm sm:text-base mb-3 sm:mb-4 leading-relaxed">
            The key isn't trading every session or catching every move. It's about finding the session
            that matches your personality, schedule, and risk tolerance, then mastering it completely.
          </p>

          <p className="text-soft-sand/60 text-sm sm:text-base leading-relaxed">
            Bitcoin's 24/7 nature is both a blessing and a curse. The opportunity never stops, but
            neither does the potential for losses. By understanding global trading sessions, you're
            not just trading Bitcoin — you're trading the institutional flows, regional psychology,
            and global money movements that truly drive the crypto markets.
          </p>

          <p className="text-burnt-amber font-semibold mt-4 sm:mt-6 text-sm sm:text-base">
            Master your session, trade with the institutional flow, and let the global Bitcoin clock
            work in your favor.
          </p>
        </div>
      </section>

      {/* YouTube CTA Section */}
      <section className="mb-8 sm:mb-12">
        <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-xl p-6 sm:p-8 text-center">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
            Want to stay ahead of the Bitcoin market?
          </h3>
          <p className="text-gray-100 text-sm sm:text-base mb-5 sm:mb-6 leading-relaxed">
            Subscribe to Bitcoin Hitpoint for daily market analysis, trading tips, and crypto insights
            that give you the edge you need.
          </p>
          {/*
            External link: min-h-[44px] ensures 44px touch target.
            Full-width on mobile, inline on sm+ for visual balance.
          */}
          <a
            href="https://www.youtube.com/@TradingWithSidhant"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 min-h-[44px] w-full sm:w-auto text-sm sm:text-base"
          >
            <Youtube className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" aria-hidden="true" />
            Subscribe to Trading With Sidhant
          </a>
          <p className="text-gray-200 text-xs sm:text-sm mt-3 sm:mt-4 leading-relaxed">
            Join thousands of traders who rely on our channel for crypto market intelligence.
          </p>
        </div>
      </section>

      {/* Related Content — full-block Links for mobile tap comfort */}
      <section>
        <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-white">Continue Learning</h3>
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          <Link
            to="/blog"
            className="bg-deep-slate/50 rounded-lg p-5 sm:p-6 border border-soft-sand/10 hover:border-burnt-amber/50 transition-colors duration-300 block group"
            aria-label="Read more trading insights on the blog"
          >
            <h4 className="text-base sm:text-lg font-semibold text-white mb-1.5 sm:mb-2 group-hover:text-burnt-amber transition-colors duration-300">
              More Trading Insights
            </h4>
            <p className="text-soft-sand/70 text-xs sm:text-sm leading-relaxed">
              Explore our collection of trading guides and market analysis
            </p>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-burnt-amber mt-3" aria-hidden="true" />
          </Link>

          <Link
            to="/mentorship"
            className="bg-deep-slate/50 rounded-lg p-5 sm:p-6 border border-soft-sand/10 hover:border-wealth-teal/50 transition-colors duration-300 block group"
            aria-label="Learn about professional mentorship programs"
          >
            <h4 className="text-base sm:text-lg font-semibold text-white mb-1.5 sm:mb-2 group-hover:text-wealth-teal transition-colors duration-300">
              Get Professional Mentorship
            </h4>
            <p className="text-soft-sand/70 text-xs sm:text-sm leading-relaxed">
              Learn directly from experienced traders and accelerate your success
            </p>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-wealth-teal mt-3" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </article>
  );
};

export default BitcoinTradingSessions;
