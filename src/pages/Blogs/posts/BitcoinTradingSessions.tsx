import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Clock, TrendingUp, Globe, AlertCircle, BarChart3, Target, Zap, CheckCircle, ArrowRight, Youtube } from 'lucide-react';

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

  const SessionCard = ({ title, time, description, features, color }) => (
    <div className={`bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 border border-${color}-500/30 hover:border-${color}-500 transition-all duration-300 hover:transform hover:scale-105 relative overflow-hidden`}>
      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-${color}-500 to-${color}-400`}></div>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <Clock className={`w-6 h-6 text-${color}-400`} />
      </div>
      <p className="text-sm text-gray-400 mb-3">{time}</p>
      <p className="text-gray-300 mb-4">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start text-sm">
            <CheckCircle className={`w-4 h-4 text-${color}-400 mr-2 mt-0.5 flex-shrink-0`} />
            <span className="text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );

  const StrategyBox = ({ title, description, steps, icon: Icon }) => (
    <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-800 hover:border-blue-500/50 transition-all duration-300">
      <div className="flex items-center mb-4">
        <Icon className="w-8 h-8 text-blue-400 mr-3" />
        <h3 className="text-xl font-bold text-white">{title}</h3>
      </div>
      <p className="text-gray-400 mb-4">{description}</p>
      <div className="space-y-3">
        {steps.map((step, idx) => (
          <div key={idx} className="flex items-start">
            <span className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded text-xs font-semibold mr-3">{idx + 1}</span>
            <p className="text-sm text-gray-300">{step}</p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <article className="max-w-5xl mx-auto px-4 py-12">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-800 z-50">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Hero Section */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Bitcoin Trading Sessions
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          The Essential Guide for Crypto Traders
        </p>
      </div>

      {/* Introduction */}
      <div className="prose prose-invert max-w-none mb-12">
        <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-lg p-6 mb-8">
          <p className="text-lg text-gray-300 leading-relaxed">
            Bitcoin trades 24/7, but here's a secret that separates successful crypto traders from the rest: 
            the biggest moves still happen when institutional money flows in during traditional trading sessions. 
            While retail traders are sleeping, the real money is making its moves.
          </p>
        </div>

        <p className="text-gray-300 mb-6">
          If you've ever wondered why Bitcoin suddenly pumps at 3 AM your time or why certain hours seem 
          to produce the most explosive price action, you're about to discover the hidden rhythm of global 
          crypto markets.
        </p>
      </div>

      {/* Why Traditional Sessions Matter */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-white flex items-center">
          <Globe className="w-8 h-8 mr-3 text-blue-400" />
          Why Traditional Sessions Still Rule Crypto
        </h2>
        
        <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-800">
          <p className="text-gray-300 mb-4">
            Even though you can buy Bitcoin at 2 AM on a Sunday, institutional traders—who move the real 
            volume—still operate during business hours. When Wall Street wakes up, Bitcoin often wakes up too. 
            When London opens, the real action begins. This isn't coincidence; it's institutional behavior 
            creating predictable patterns.
          </p>
          
          <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4 mt-4">
            <p className="text-blue-300 font-semibold">
              💡 Think of it this way: Bitcoin might be a 24/7 party, but the biggest players only show 
              up during certain hours. Smart traders know when the VIPs arrive.
            </p>
          </div>
        </div>
      </section>

      {/* The Three Sessions */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-white flex items-center">
          <Clock className="w-8 h-8 mr-3 text-purple-400" />
          The Three Sessions That Move Bitcoin
        </h2>
        
        <div className="grid gap-6">
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
      <section className="mb-12">
        <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/30 rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-6 text-white flex items-center">
            <Zap className="w-8 h-8 mr-3 text-yellow-400" />
            The Golden Hours: When Sessions Overlap
          </h2>
          
          <p className="text-gray-300 mb-4">
            The most explosive Bitcoin moves happen during the <span className="text-yellow-400 font-semibold">
            London-New York overlap from 8 AM to 12 PM EST</span>. This four-hour window sees 60% of 
            institutional Bitcoin volume and creates the tightest spreads across all major exchanges.
          </p>

          <div className="bg-black/30 rounded-lg p-4 mt-6">
            <p className="text-gray-300">
              <span className="text-yellow-400 font-semibold">Example:</span> Remember March 13, 2024? 
              Bitcoin rocketed from $69,000 to $73,000 in just three hours during this overlap as record 
              ETF inflows and institutional FOMO created a perfect storm. With Bitcoin now trading around 
              $120,000, similar moves could take it from $120,000 to $126,000+ during these explosive hours.
            </p>
          </div>

          <div className="mt-6 p-4 bg-orange-500/10 border border-orange-500/30 rounded-lg">
            <p className="text-orange-300 flex items-start">
              <AlertCircle className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
              During overlap hours, reduce your leverage but increase your attention. The moves are bigger, 
              faster, and more unpredictable.
            </p>
          </div>
        </div>
      </section>

      {/* Trading Strategies */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-white flex items-center">
          <Target className="w-8 h-8 mr-3 text-green-400" />
          Three Strategies That Actually Work
        </h2>
        
        <div className="grid gap-6">
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
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-white">The News That Moves Markets By Session</h2>
        
        <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-800">
          <p className="text-gray-300 mb-6">
            Different sessions react to different catalysts. Understanding which news affects which 
            session helps you position accordingly.
          </p>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-black/30 rounded-lg p-4">
              <h4 className="text-yellow-400 font-semibold mb-2">Asian Hours</h4>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Chinese regulatory announcements</li>
                <li>• Major Asian crypto project developments</li>
                <li>• Bank of Japan statements</li>
              </ul>
            </div>
            
            <div className="bg-black/30 rounded-lg p-4">
              <h4 className="text-blue-400 font-semibold mb-2">London Session</h4>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• EU crypto regulations</li>
                <li>• European institutional adoption</li>
                <li>• ECB policy decisions</li>
              </ul>
            </div>
            
            <div className="bg-black/30 rounded-lg p-4">
              <h4 className="text-green-400 font-semibold mb-2">New York Session</h4>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• SEC decisions</li>
                <li>• Bitcoin ETF data</li>
                <li>• Federal Reserve meetings</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-white flex items-center">
          <AlertCircle className="w-8 h-8 mr-3 text-red-400" />
          The Mistakes That Kill Profits
        </h2>
        
        <div className="space-y-4">
          <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
            <h4 className="text-red-400 font-semibold mb-2">Fighting Institutional Flow</h4>
            <p className="text-gray-300 text-sm">
              The biggest mistake is fighting institutional flow during New York hours. When Bitcoin ETF 
              inflows are massive, don't try to short. When Wall Street is buying, join them or stay out.
            </p>
          </div>
          
          <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
            <h4 className="text-red-400 font-semibold mb-2">Overleveraging During Overlaps</h4>
            <p className="text-gray-300 text-sm">
              Using maximum leverage during overlap periods can stop you out of perfectly good trades. 
              Reduce position sizes during high-volatility windows.
            </p>
          </div>
          
          <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
            <h4 className="text-red-400 font-semibold mb-2">One Strategy for All Sessions</h4>
            <p className="text-gray-300 text-sm">
              Don't apply the same strategy across all sessions. Range trading works during Asian hours 
              but gets destroyed during London breakouts. Match your strategy to the session's personality.
            </p>
          </div>
        </div>
      </section>

      {/* Trading Blueprint */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-white">Your Session Trading Blueprint</h2>
        
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8 border border-gray-700">
          <div className="space-y-6">
            <div className="flex items-start">
              <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold mr-4">1</span>
              <div>
                <h4 className="text-white font-semibold mb-2">Observe and Learn</h4>
                <p className="text-gray-400 text-sm">
                  Start by observing Bitcoin during your available trading hours for one full week. Note 
                  which sessions produce the biggest moves and align with your natural rhythm.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold mr-4">2</span>
              <div>
                <h4 className="text-white font-semibold mb-2">Paper Trade Your Strategy</h4>
                <p className="text-gray-400 text-sm">
                  Paper trade one strategy for a week. If you're naturally awake during Asian hours, 
                  master the accumulation strategy. Don't try to master all sessions at once.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold mr-4">3</span>
              <div>
                <h4 className="text-white font-semibold mb-2">Go Live with Caution</h4>
                <p className="text-gray-400 text-sm">
                  When you go live, start with smaller position sizes. Track your performance by session—
                  you'll quickly discover your strengths and weaknesses.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Line */}
      <section className="mb-12">
        <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/30 rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-6 text-white">The Bottom Line</h2>
          
          <p className="text-gray-300 mb-4">
            Bitcoin never sleeps, but smart traders know when to be most alert. Each session has its 
            own personality: Asian hours for patient accumulation, London for trend-setting breakouts, 
            and New York for institutional momentum.
          </p>
          
          <p className="text-gray-300 mb-4">
            The key isn't trading every session or catching every move. It's about finding the session 
            that matches your personality, schedule, and risk tolerance, then mastering it completely.
          </p>
          
          <p className="text-gray-300">
            Bitcoin's 24/7 nature is both a blessing and a curse. The opportunity never stops, but 
            neither does the potential for losses. By understanding global trading sessions, you're 
            not just trading Bitcoin—you're trading the institutional flows, regional psychology, 
            and global money movements that truly drive the crypto markets.
          </p>
          
          <p className="text-purple-300 font-semibold mt-6">
            Master your session, trade with the institutional flow, and let the global Bitcoin clock 
            work in your favor.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mb-12">
        <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Want to stay ahead of the Bitcoin market?
          </h3>
          <p className="text-gray-100 mb-6">
            Subscribe to Bitcoin Hitpoint for daily market analysis, trading tips, and crypto insights 
            that give you the edge you need.
          </p>
          <a
            href="https://www.youtube.com/@BitcoinHitpoint"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
          >
            <Youtube className="w-5 h-5 mr-2" />
            Subscribe to Bitcoin Hitpoint
          </a>
          <p className="text-gray-200 text-sm mt-4">
            Join thousands of traders who rely on Bitcoin Hitpoint for their crypto market intelligence.
          </p>
        </div>
      </section>

      {/* Related Content */}
      <section>
        <h3 className="text-2xl font-bold mb-6 text-white">Continue Learning</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <Link
            to="/blog"
            className="bg-gray-900/50 rounded-lg p-6 border border-gray-800 hover:border-blue-500 transition-all duration-300 block group"
          >
            <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
              More Trading Insights
            </h4>
            <p className="text-gray-400 text-sm">
              Explore our collection of trading guides and market analysis
            </p>
            <ArrowRight className="w-5 h-5 text-blue-400 mt-3" />
          </Link>
          
          <Link
            to="/mentorship"
            className="bg-gray-900/50 rounded-lg p-6 border border-gray-800 hover:border-green-500 transition-all duration-300 block group"
          >
            <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-green-400 transition-colors">
              Get Professional Mentorship
            </h4>
            <p className="text-gray-400 text-sm">
              Learn directly from experienced traders and accelerate your success
            </p>
            <ArrowRight className="w-5 h-5 text-green-400 mt-3" />
          </Link>
        </div>
      </section>
    </article>
  );
};

export default BitcoinTradingSessions;