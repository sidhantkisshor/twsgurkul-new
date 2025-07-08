import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Brain, Zap, CheckCircle, ArrowRight, BarChart3, Code, Globe, Target, Sparkles, Rocket, Flame, XCircle, Lightbulb, AlertTriangle, GitBranch, Briefcase, FileText, ShoppingCart, ShieldCheck, AreaChart, Cpu, ListChecks } from 'lucide-react';

const BlogPost = () => {
  // Removed unused activeSection state
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Debounce or throttle this in a real app for performance
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const CommandDoc = ({ category, commands, icon: Icon }) => (
    <div id={category.toLowerCase().replace(/ /g, '-')} className="mb-10">
      <h3 className="text-2xl font-bold mb-6 text-blue-400 flex items-center">
        <Icon className="w-7 h-7 mr-3" />
        {category}
      </h3>
      <div className="space-y-4">
        {commands.map((cmd, idx) => (
          <div key={idx} className="bg-gray-900/50 rounded-lg p-4 border border-gray-800">
            <p className="text-gray-300 text-sm mb-2">{cmd.description}</p>
            <div className="bg-black/50 rounded p-3 font-mono text-xs text-green-400">
              {cmd.command}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
  
  const UseCaseCard = ({ icon: Icon, title, description, features }) => (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
        <div className="flex items-center mb-4">
            <Icon className="w-8 h-8 text-blue-400" />
            <h3 className="text-xl font-bold text-white ml-3">{title}</h3>
        </div>
        <p className="text-gray-400 mb-4 text-sm">{description}</p>
        <ul className="space-y-2">
            {features.map((feature, idx) => (
                <li key={idx} className="flex items-start text-sm">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                </li>
            ))}
        </ul>
    </div>
  );

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-800 z-50">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>
        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <Sparkles className="w-8 h-8 text-yellow-400 mr-2" />
              <span className="text-yellow-400 font-semibold">The Complete 2025 Trading Game-Changer</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              How to Automate Your Zerodha Investment Portfolio with Free AI Tools
            </h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Introduction */}
        <div className="prose prose-invert max-w-none mb-16">
          <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-xl p-8 mb-8">
            <p className="text-lg italic text-gray-300">
              Bhai, picture this: You're sitting with your morning chai, and instead of frantically checking 50 different apps and websites for market analysis, your AI assistant has already done the homework. Portfolio analyzed, risk assessed, orders placed – all while you were sleeping. Sounds like a dream? Welcome to the reality of AI-powered investing.
            </p>
          </div>

          <p>The game has changed, doston. What used to cost lakhs in portfolio management fees is now available for free. Today, I'm going to show you exactly how to transform your Zerodha account into an AI-powered investment machine that thinks, analyzes, and executes like a pro trader. If you're serious about automated trading, check out our <Link to="/superstreams" className="text-blue-400 underline hover:text-blue-300">SuperStreams program</Link> where we provide live AI-powered trading signals.</p>
          <p>This complete guide includes everything I promised in the YouTube video – from configuration files to detailed research reports. Buckle up!</p>
          
          <h2 className="text-3xl font-bold mt-12 mb-6 flex items-center">
            <Rocket className="w-8 h-8 mr-3 text-yellow-400" />
            The AI Revolution is Here – And It's Free
          </h2>
          <p>Let me drop a truth bomb: The average investor wastes 300+ hours annually doing what AI can accomplish in minutes. While you're manually juggling multiple apps and drowning in data paralysis, smart traders are leveraging AI to make lightning-fast, data-driven decisions.</p>
        </div>

        {/* AI Stats Section */}
        <section className="mb-16">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="bg-gray-900 rounded-lg p-6 text-center border border-gray-800"><div className="text-4xl font-bold text-blue-400 mb-2">89%</div><p className="text-sm text-gray-400">of global trading volume will be AI-powered by 2025</p></div>
                <div className="bg-gray-900 rounded-lg p-6 text-center border border-gray-800"><div className="text-4xl font-bold text-green-400 mb-2">20%</div><p className="text-sm text-gray-400">CAGR growth in AI trading platforms (2025-2030)</p></div>
                <div className="bg-gray-900 rounded-lg p-6 text-center border border-gray-800"><div className="text-4xl font-bold text-purple-400 mb-2">$50.4B</div><p className="text-sm text-gray-400">AI trading market size by 2033</p></div>
                <div className="bg-gray-900 rounded-lg p-6 text-center border border-gray-800"><div className="text-4xl font-bold text-yellow-400 mb-2">90%</div><p className="text-sm text-gray-400">time reduction in research & analysis</p></div>
            </div>
             <div className="bg-yellow-900/20 border border-yellow-700 rounded-lg p-6 text-center mb-8">
                <p className="text-lg font-semibold text-yellow-300 flex items-center justify-center">
                    <Flame className="w-6 h-6 mr-3"/>
                    The Brutal Reality: Traditional managers charge 2-3% annually (₹2-3 lakhs on ₹1 crore) while AI delivers 70-80% accurate analysis for FREE!
                </p>
            </div>
             <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 bg-gray-900 p-8 rounded-xl">
                <div className="text-center opacity-70">
                    <h3 className="text-xl font-bold mb-4 flex items-center justify-center"><XCircle className="w-6 h-6 mr-2 text-red-500"/>Traditional Trading</h3>
                    <p>300+ hours annually</p><p>₹2-3L portfolio fees</p><p>Emotional decisions</p>
                </div>
                <div className="font-bold text-2xl text-yellow-400 my-4 md:my-0">VS</div>
                <div className="text-center text-green-400">
                    <h3 className="text-xl font-bold mb-4 flex items-center justify-center"><CheckCircle className="w-6 h-6 mr-2"/>AI-Powered Trading</h3>
                    <p>Minutes of analysis</p><p>FREE AI tools</p><p>Data-driven decisions</p>
                </div>
            </div>
            <div className="prose prose-invert max-w-none mt-8 text-sm text-gray-400">
                <p>Here's what's happening right now: AI is reshaping portfolio management by automating investment strategies and refining risk assessments. It will handle almost 89% of the world's trading volume by 2025, with the market growing at 20% CAGR. The democratization of finance is happening – and you can either ride the wave or get swept away. Our <Link to="/footprint" className="text-blue-400 underline hover:text-blue-300">Footprint Mastery course</Link> teaches you how to read institutional order flow - the same data AI uses to make decisions.</p>
                <p>The secret weapon? Integrating Claude AI and Cursor AI with your Zerodha account through Kite MCP (Market Connect Platform). This isn't just automation – it's financial intelligence that works 24/7.</p>
            </div>
        </section>

        {/* Why AI Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 flex items-center">
            <Brain className="w-8 h-8 mr-3 text-blue-400" />
            Why AI is Your New Trading Partner
          </h2>
          <div className="prose prose-invert max-w-none mb-8">
            <p>Think of AI as your personal research analyst, portfolio manager, and risk assessment expert rolled into one. But unlike humans, it doesn't get emotional, doesn't take coffee breaks, and processes thousands of data points in seconds. What can AI do for your Zerodha portfolio?</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <UseCaseCard icon={BarChart3} title="Deep Portfolio Analysis" features={["Instantly identify sector concentration", "Analyze risk exposure", "Find diversification gaps"]} />
            <UseCaseCard icon={Zap} title="Real-time Intelligence" features={["Process global market data", "Analyze news sentiment", "Factor in geopolitical events"]} />
            <UseCaseCard icon={Target} title="Smart Order Management" features={["Place GTT orders automatically", "Calculate optimal quantities", "Set scientific stop-losses"]} />
            <UseCaseCard icon={Globe} title="Geopolitical Strategies" features={["Identify opportunities from global events", "Analyze policy changes", "Find macro-driven trades"]} />
          </div>
          <div className="mt-8 text-center">
            <p className="text-gray-400 mb-4">Want to master these strategies in crypto markets?</p>
            <Link to="/crypto" className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all">
              Explore Crypto Market Mastery <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <UseCaseCard icon={FileText} title="Research Automation" features={["Access data from Screener & Trendlyne", "Compile expert targets", "Integrate technical indicators"]} />
            <UseCaseCard icon={ShieldCheck} title="Advanced Risk Management" features={["Portfolio correlation analysis", "Volatility assessment", "Conduct stress testing"]} />
          </div>
           <div className="prose prose-invert max-w-none mt-8">
                <p>The best part? This level of sophistication was exclusive to institutional investors until now. Today, it's available to anyone with a Zerodha account and an internet connection. For more insights on advanced trading psychology and risk management, visit <a href="#" target="_blank" rel="noopener noreferrer">Trading With Sidhant</a> where I share weekly market analysis and strategy updates.</p>
            </div>
        </section>

        {/* Setup Guide */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 flex items-center">
            <Code className="w-8 h-8 mr-3 text-purple-400" />
            Setting Up Your AI Investment Command Center
          </h2>
          
          <div className="bg-gray-900 rounded-xl p-8 mb-8">
            <h3 className="text-2xl font-bold mb-6 text-blue-400">Method 1: Claude AI + Zerodha Integration</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4"><div className="flex-shrink-0 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">1</div><div><h4 className="font-semibold text-white mb-2">Download and Install Claude</h4><p className="text-gray-400">Head to "Meet Claude Anthropic" and download the desktop version. Choose the correct option for your system (Mac, Windows, or Windows ARM 64 if applicable).</p></div></div>
              <div className="flex items-start space-x-4"><div className="flex-shrink-0 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">2</div><div><h4 className="font-semibold text-white mb-2">Configure Claude for Zerodha Access</h4><p className="text-gray-400 mb-4">Open Settings (Ctrl + Comma) → Developer → Edit Config. Delete existing content and paste the following:</p><div className="bg-black rounded-lg p-4 overflow-x-auto"><pre className="text-green-400 text-sm font-mono">{`{\n    "mcpServers": {\n        "kite": {\n            "command": "npx",\n            "args": ["mcp-remote", "https://mcp.kite.trade/sse"]\n        }\n    }\n}`}</pre></div><div className="mt-4 bg-red-900/20 border border-red-700 rounded-lg p-4"><p className="text-red-400 font-semibold flex items-center"><AlertTriangle className="w-5 h-5 mr-2"/>Critical Step: Restart Claude completely via Task Manager after saving.</p></div></div></div>
              <div className="flex items-start space-x-4"><div className="flex-shrink-0 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">3</div><div><h4 className="font-semibold text-white mb-2">Connect to Your Zerodha Account</h4><p className="text-gray-400 mb-2">Type this exact command in Claude:</p><div className="bg-black rounded-lg p-4"><code className="text-green-400 text-sm">Hello Can you please help me login to Kite with MCP?</code></div><p className="text-gray-400 text-xs mt-2">Claude will generate a secure login link. Think of Kite MCP as a secure translator between Claude and Zerodha.</p></div></div>
            </div>
          </div>

          <div className="bg-gray-900 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-purple-400">Method 2: Free Alternative with Cursor AI</h3>
             <div className="space-y-4">
                <p className="text-gray-400">For zero subscription costs, use Cursor AI with Gemini 2.5 Flash.</p>
                <p className="text-sm text-gray-400">1. Install from cursor.sh (check "Add to Path"). Restart PC.</p>
                <p className="text-sm text-gray-400">2. Open Cursor, create a new project/folder (e.g., "Kite").</p>
                <p className="text-sm text-gray-400">3. Go to Settings → Models → Enable "Gemini 2.5 Flash" and set it as default.</p>
                <p className="text-sm text-gray-400">4. Run the MCP installation command and log in via the auth link.</p>
                <div className="mt-4 bg-blue-900/20 border border-blue-700 rounded-lg p-4">
                  <p className="text-blue-400 font-semibold flex items-center"><Lightbulb className="w-5 h-5 mr-2"/>Pro Tip:</p>
                  <p className="text-gray-300 text-sm">Cursor with Gemini provides 70-75% accuracy. It's free and incredibly powerful. For detailed video tutorials, check out my guides on <a href="#" target="_blank" rel="noopener noreferrer">TWS Gurukul</a>.</p>
                </div>
            </div>
          </div>
        </section>
        
        {/* Complete AI Trading Documentation */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-4 flex items-center">
            <ListChecks className="w-8 h-8 mr-3 text-green-400" />
            Complete AI Trading Documentation
          </h2>
          <p className="text-gray-400 mb-8">Bhai, ab yahan hai complete documentation with every single command you'll ever need! Save this, bookmark this, and refer to it whenever you're commanding your AI trading assistant.</p>
          
          <div className="bg-gradient-to-br from-gray-900 to-black/50 p-8 rounded-xl border border-gray-800">
            <CommandDoc category="Basic Setup" icon={Cpu} commands={[
              { description: 'Initiate the secure connection to your Zerodha account.', command: 'Hello Can you please help me login to Kite with MCP?' },
              { description: 'Verify that the connection is active and stable.', command: 'Can you verify my Kite MCP connection status?' },
              { description: 'Get a full summary of your account, including available margins and holdings value.', command: 'Show me my complete account overview including margins and holdings' }
            ]} />
            <CommandDoc category="Portfolio Analysis" icon={Briefcase} commands={[
              { description: 'Analyze your holdings to see which sectors you are most exposed to.', command: 'Based on my portfolio, can you share which segment I am mostly invested in?' },
              { description: 'Get a comprehensive health check, identifying concentration risks and diversification gaps.', command: 'Analyze my portfolio for concentration risks and diversification gaps' },
              { description: 'Review the performance of your mutual fund investments.', command: 'Show me my mutual fund holdings and their current performance' },
            ]} />
            <CommandDoc category="Stock Research" icon={FileText} commands={[
              { description: 'Get institutional-grade research including technical/fundamental analysis and GTT order placement.', command: 'Do a deep research on [STOCK_NAME] using technical and fundamental analysis, suggest SL and take profit levels and help me place 10% quantity GTT orders' },
              { description: 'Get a quick overview of a stock with key levels and market sentiment.', command: 'Give me a quick analysis of [STOCK_NAME] with current price, support, resistance, and sentiment' },
              { description: 'Analyze how recent news might affect a stock and get a suggested trading strategy.', command: 'Analyze recent news impact on [STOCK_NAME] and suggest trading strategy' }
            ]} />
            <CommandDoc category="Order Management" icon={ShoppingCart} commands={[
                { description: 'Place a Good-Till-Triggered (GTT) order to buy a stock at a specific price point.', command: 'Place a GTT order to buy [STOCK_NAME] when it falls [X]% from current market price' },
                { description: 'Automatically set stop-loss orders for all your current holdings to manage risk.', command: 'Set up stop loss orders for all my current positions at [X]% below current price' }
            ]} />
            <CommandDoc category="Risk Management" icon={ShieldCheck} commands={[
                { description: 'Calculate the optimal number of shares to buy based on your risk tolerance and portfolio size.', command: 'Calculate optimal position size for [STOCK_NAME] with [AMOUNT] investment based on my portfolio size' },
                { description: 'Identify hidden risks by checking the correlation between your different holdings.', command: 'Check correlation between my holdings and identify concentration risks' }
            ]} />
            <CommandDoc category="Advanced Strategy" icon={GitBranch} commands={[
                { description: 'Get stock suggestions based on current geopolitical events and potential fund infusion.', command: 'If I add [AMOUNT] more to my portfolio, can you do geopolitical research and suggest best stocks to buy today?' },
                { description: 'Find stocks that fit a specific investment theme (e.g., renewable energy, defense) with entry/exit points.', command: 'Suggest stocks for [THEME] investing (e.g., renewable energy, defense, fintech) with entry and exit points' }
            ]} />

            <div className="mt-8 border-t border-gray-700 pt-8">
                 <div className="bg-blue-900/20 border border-blue-700 rounded-lg p-6 mb-4">
                    <h4 className="font-bold text-blue-400 mb-2 flex items-center"><Lightbulb className="w-5 h-5 mr-2" />Pro Tips for Better Results</h4>
                    <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
                        <li>Be specific with stock names, quantities, and your risk tolerance.</li>
                        <li>Always verify AI suggestions with your own research.</li>
                        <li>Use paper trading to test new strategies first.</li>
                    </ul>
                </div>
                <div className="bg-red-900/20 border border-red-700 rounded-lg p-6">
                    <h4 className="font-bold text-red-400 mb-2 flex items-center"><AlertTriangle className="w-5 h-5 mr-2" />Important Disclaimers</h4>
                    <p className="text-gray-300 text-sm">AI provides analysis and suggestions but should complement, not replace, your investment judgment. Accuracy is approximately 70-80%. Never share your login credentials.</p>
                </div>
            </div>
          </div>
        </section>

        {/* Kite MCP Use Cases */}
        <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 flex items-center">
                <Rocket className="w-8 h-8 mr-3 text-yellow-400" />
                Kite MCP Complete Arsenal
            </h2>
            <p className="text-gray-400 mb-8">Master every function of your AI trading assistant with these powerful use cases.</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <UseCaseCard icon={Briefcase} title="Portfolio Management" description="Complete portfolio oversight and management." features={["Real-time portfolio analysis", "Sector-wise allocation breakdown", "Diversification gap analysis", "Position sizing recommendations"]} />
                <UseCaseCard icon={FileText} title="Deep Stock Research" description="Institutional-grade research and analysis." features={["Fundamental & technical analysis", "Peer comparison studies", "News sentiment analysis", "Risk-reward calculations"]} />
                <UseCaseCard icon={ShoppingCart} title="Smart Order Management" description="Automated and intelligent order execution." features={["GTT order placement", "Stop-loss automation", "Target order setup", "Position-based quantity calculation"]} />
                <UseCaseCard icon={AreaChart} title="Market Data & Analytics" description="Real-time market intelligence and insights." features={["Live price quotes (LTP)", "OHLC data analysis", "Volume and OI tracking", "Instrument search capabilities"]} />
                <UseCaseCard icon={ShieldCheck} title="Risk Management" description="Advanced risk assessment and mitigation." features={["Portfolio risk analysis", "Concentration risk identification", "Volatility assessment", "Stress testing scenarios"]} />
                <UseCaseCard icon={Globe} title="Strategic Intelligence" description="Geopolitical and thematic investment insights." features={["Geopolitical opportunity mapping", "Thematic investment strategies", "Sector rotation analysis", "Policy impact assessment"]} />
            </div>
            <div className="mt-12 bg-gray-900 p-8 rounded-xl border border-gray-800">
                <h3 className="text-2xl font-bold text-purple-400 mb-6">🎯 Advanced Use Cases</h3>
                <div className="space-y-4">
                    <div className="bg-black/50 p-4 rounded-lg"><h4 className="font-semibold text-white mb-2">Portfolio Rebalancing Automation</h4><code className="text-green-400 font-mono text-sm">"Analyze my portfolio allocation vs my target of 60% equity, 30% debt, 10% gold and suggest rebalancing trades"</code></div>
                    <div className="bg-black/50 p-4 rounded-lg"><h4 className="font-semibold text-white mb-2">Event-Based Trading</h4><code className="text-green-400 font-mono text-sm">"Analyze upcoming earnings calendar for my holdings and suggest pre/post earnings strategies"</code></div>
                </div>
            </div>
        </section>


        {/* CTA Section */}
        <section>
          <div className="bg-gradient-to-r from-blue-900 to-purple-900 rounded-xl p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Trading?</h2>
            <p className="text-xl text-gray-300 mb-8">Join thousands of traders who've already embraced AI-powered investing</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/superstreams" className="bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center">Join Our Live Trading Streams<ArrowRight className="w-5 h-5 ml-2" /></Link>
              <Link to="/" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">Explore All Programs</Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default BlogPost;