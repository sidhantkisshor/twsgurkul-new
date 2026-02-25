import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Brain, Zap, CheckCircle, ArrowRight, BarChart3, Code, Globe, Target, Sparkles, Rocket, Flame, XCircle, Lightbulb, AlertTriangle, GitBranch, Briefcase, FileText, ShoppingCart, ShieldCheck, AreaChart, Cpu, ListChecks } from 'lucide-react';

const CommandDoc = ({ category, commands, icon: Icon }: { category: string; commands: { description: string; command: string }[]; icon: React.ElementType }) => (
  <div id={category.toLowerCase().replace(/ /g, '-')} className="mb-8 sm:mb-10">
    <h3 className="text-lg sm:text-2xl font-bold mb-4 sm:mb-6 text-burnt-amber flex items-center gap-2 sm:gap-3">
      <Icon className="w-5 h-5 sm:w-7 sm:h-7 shrink-0" aria-hidden="true" />
      {category}
    </h3>
    <div className="space-y-3 sm:space-y-4">
      {commands.map((cmd, idx) => (
        <div key={idx} className="bg-deep-slate/50 rounded-lg p-4 border border-soft-sand/10">
          <p className="text-soft-sand/60 text-xs sm:text-sm mb-2 leading-relaxed">{cmd.description}</p>
          {/*
            overflow-x-auto on the wrapper prevents the command string from
            breaking the page layout on narrow mobile screens.
            whitespace-nowrap keeps the command on one line so it stays readable.
          */}
          <div className="bg-deep-slate rounded-sm p-3 overflow-x-auto">
            <code className="font-mono text-xs text-wealth-teal whitespace-nowrap">{cmd.command}</code>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const UseCaseCard = ({ icon: Icon, title, description, features }: { icon: React.ElementType; title: string; description?: string; features: string[] }) => (
  /*
    hover:-translate-y-1 uses GPU-composited transform — safer on mobile than
    scale-[1.02] which triggers layout reflow on sibling elements.
  */
  <div className="bg-gradient-to-br from-deep-slate to-deep-slate/80 rounded-xl p-5 sm:p-6 border border-soft-sand/10 hover:border-burnt-amber/50 transition-colors duration-300 hover:-translate-y-1 transform-gpu relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-burnt-amber to-brushed-gold" aria-hidden="true"></div>
      <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
          <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-burnt-amber shrink-0" aria-hidden="true" />
          <h3 className="text-base sm:text-xl font-bold text-white leading-snug">{title}</h3>
      </div>
      {description && <p className="text-soft-sand/70 mb-3 sm:mb-4 text-xs sm:text-sm leading-relaxed">{description}</p>}
      <ul className="space-y-2">
          {features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm">
                  <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-wealth-teal mt-0.5 shrink-0" aria-hidden="true" />
                  <span className="text-soft-sand/60 leading-relaxed">{feature}</span>
              </li>
          ))}
      </ul>
  </div>
);

const BlogPost = () => {
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
    <div className="min-h-screen bg-deep-slate text-white">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-deep-slate z-50">
        <div
          className="h-full bg-gradient-to-r from-burnt-amber to-brushed-gold transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Hero Section — py reduced on mobile to avoid wasted scroll space */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-burnt-amber/10 to-wealth-teal/10" aria-hidden="true"></div>
        <div className="relative container mx-auto px-4 py-10 sm:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-4 sm:mb-6">
              <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-brushed-gold mr-2 shrink-0" aria-hidden="true" />
              <span className="text-brushed-gold font-semibold text-sm sm:text-base">The Complete 2025 Trading Game-Changer</span>
            </div>
            {/*
              text-2xl on mobile keeps long title readable without wrapping awkwardly.
              leading-snug prevents cramped line-height on multi-line mobile display.
            */}
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-white leading-snug">
              How to Automate Your Zerodha Investment Portfolio with Free AI Tools
            </h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 sm:py-12 max-w-6xl">
        {/* Introduction */}
        <div className="prose prose-invert max-w-none mb-10 sm:mb-16">
          {/* Pull quote — p-5 on mobile, p-8 on desktop */}
          <div className="bg-gradient-to-r from-burnt-amber/10 to-wealth-teal/10 rounded-xl p-5 sm:p-8 mb-6 sm:mb-8">
            <p className="text-base sm:text-lg italic text-soft-sand/60 leading-relaxed">
              Bhai, picture this: You're sitting with your morning chai, and instead of frantically checking 50 different apps and websites for market analysis, your AI assistant has already done the homework. Portfolio analyzed, risk assessed, orders placed – all while you were sleeping. Sounds like a dream? Welcome to the reality of AI-powered investing.
            </p>
          </div>

          <p className="text-soft-sand/60 text-sm sm:text-base leading-relaxed">The game has changed, doston. What used to cost lakhs in portfolio management fees is now available for free. Today, I'm going to show you exactly how to transform your Zerodha account into an AI-powered investment machine that thinks, analyzes, and executes like a pro trader. If you're serious about levelling up, check out our <Link to="/mentorship" className="text-burnt-amber underline hover:text-burnt-amber/80">1-on-1 Mentorship program</Link> where we provide live trading setups and personalised guidance.</p>
          <p className="text-soft-sand/60 text-sm sm:text-base leading-relaxed">This complete guide includes everything I promised in the YouTube video – from configuration files to detailed research reports. Buckle up!</p>

          <h2 className="text-2xl sm:text-3xl font-bold mt-8 sm:mt-12 mb-4 sm:mb-6 flex items-center gap-3 text-white">
            <Rocket className="w-6 h-6 sm:w-8 sm:h-8 text-brushed-gold shrink-0" aria-hidden="true" />
            The AI Revolution is Here – And It's Free
          </h2>
          <p className="text-soft-sand/60 text-sm sm:text-base leading-relaxed">Let me drop a truth bomb: The average investor wastes 300+ hours annually doing what AI can accomplish in minutes. While you're manually juggling multiple apps and drowning in data paralysis, smart traders are leveraging AI to make lightning-fast, data-driven decisions.</p>
        </div>

        {/* AI Stats Section */}
        <section className="mb-10 sm:mb-16">
            {/*
              2 columns on mobile (fits well for stat-heavy cards) → 4 on large screens.
              p-4 on mobile keeps the numbers visible without overflow.
            */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-6 sm:mb-8">
                <div className="bg-deep-slate/80 rounded-lg p-4 sm:p-6 text-center border border-soft-sand/10">
                  <div className="text-3xl sm:text-4xl font-bold text-burnt-amber mb-1 sm:mb-2">89%</div>
                  <p className="text-xs sm:text-sm text-soft-sand/70 leading-relaxed">of global trading volume will be AI-powered by 2025</p>
                </div>
                <div className="bg-deep-slate/80 rounded-lg p-4 sm:p-6 text-center border border-soft-sand/10">
                  <div className="text-3xl sm:text-4xl font-bold text-wealth-teal mb-1 sm:mb-2">20%</div>
                  <p className="text-xs sm:text-sm text-soft-sand/70 leading-relaxed">CAGR growth in AI trading platforms (2025-2030)</p>
                </div>
                <div className="bg-deep-slate/80 rounded-lg p-4 sm:p-6 text-center border border-soft-sand/10">
                  <div className="text-3xl sm:text-4xl font-bold text-brushed-gold mb-1 sm:mb-2">$50.4B</div>
                  <p className="text-xs sm:text-sm text-soft-sand/70 leading-relaxed">AI trading market size by 2033</p>
                </div>
                <div className="bg-deep-slate/80 rounded-lg p-4 sm:p-6 text-center border border-soft-sand/10">
                  <div className="text-3xl sm:text-4xl font-bold text-yellow-400 mb-1 sm:mb-2">90%</div>
                  <p className="text-xs sm:text-sm text-soft-sand/70 leading-relaxed">time reduction in research & analysis</p>
                </div>
            </div>

            {/* Reality check callout — flex-wrap prevents overflow on small screens */}
            <div className="bg-yellow-900/20 border border-yellow-700 rounded-lg p-4 sm:p-6 text-center mb-6 sm:mb-8">
                <p className="text-sm sm:text-lg font-semibold text-yellow-300 flex flex-wrap items-start sm:items-center justify-center gap-2 leading-relaxed">
                    <Flame className="w-5 h-5 sm:w-6 sm:h-6 shrink-0 mt-0.5 sm:mt-0" aria-hidden="true" />
                    The Brutal Reality: Traditional managers charge 2-3% annually (₹2-3 lakhs on ₹1 crore) while AI delivers 70-80% accurate analysis for FREE!
                </p>
            </div>

            {/*
              VS comparison: stacks vertically on mobile with a horizontal divider.
              Side-by-side layout restored on md+.
            */}
            <div className="bg-deep-slate/80 p-5 sm:p-8 rounded-xl border border-soft-sand/10">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-0 sm:gap-8">
                <div className="text-center opacity-70 py-4 sm:py-0">
                    <h3 className="text-base sm:text-xl font-bold mb-3 sm:mb-4 flex items-center justify-center gap-2">
                      <XCircle className="w-5 h-5 sm:w-6 sm:h-6 text-red-500 shrink-0" aria-hidden="true" />
                      Traditional Trading
                    </h3>
                    <p className="text-soft-sand/70 text-sm sm:text-base">300+ hours annually</p>
                    <p className="text-soft-sand/70 text-sm sm:text-base">₹2-3L portfolio fees</p>
                    <p className="text-soft-sand/70 text-sm sm:text-base">Emotional decisions</p>
                </div>
                {/* Horizontal divider on mobile, hidden on sm+ where the flex row provides visual separation */}
                <div className="flex items-center justify-center py-2 sm:py-0">
                  <div className="w-full h-px sm:w-px sm:h-16 bg-soft-sand/10" aria-hidden="true" />
                  <span className="font-bold text-xl sm:text-2xl text-brushed-gold px-4 sm:px-0 shrink-0">VS</span>
                  <div className="w-full h-px sm:w-px sm:h-16 bg-soft-sand/10" aria-hidden="true" />
                </div>
                <div className="text-center text-wealth-teal py-4 sm:py-0">
                    <h3 className="text-base sm:text-xl font-bold mb-3 sm:mb-4 flex items-center justify-center gap-2">
                      <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" aria-hidden="true" />
                      AI-Powered Trading
                    </h3>
                    <p className="text-sm sm:text-base">Minutes of analysis</p>
                    <p className="text-sm sm:text-base">FREE AI tools</p>
                    <p className="text-sm sm:text-base">Data-driven decisions</p>
                </div>
              </div>
            </div>
            <div className="prose prose-invert max-w-none mt-8 text-sm text-soft-sand/70">
                <p>Here's what's happening right now: AI is reshaping portfolio management by automating investment strategies and refining risk assessments. It will handle almost 89% of the world's trading volume by 2025, with the market growing at 20% CAGR. The democratization of finance is happening – and you can either ride the wave or get swept away. Our <Link to="/footprint" className="text-burnt-amber underline hover:text-burnt-amber/80">Footprint Mastery course</Link> teaches you how to read institutional order flow - the same data AI uses to make decisions.</p>
                <p>The secret weapon? Integrating Claude AI and Cursor AI with your Zerodha account through Kite MCP (Market Connect Platform). This isn't just automation – it's financial intelligence that works 24/7.</p>
            </div>
        </section>

        {/* Why AI Section */}
        <section className="mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-5 sm:mb-8 flex items-center gap-3">
            <Brain className="w-6 h-6 sm:w-8 sm:h-8 text-burnt-amber shrink-0" aria-hidden="true" />
            Why AI is Your New Trading Partner
          </h2>
          <div className="prose prose-invert max-w-none mb-6 sm:mb-8">
            <p className="text-soft-sand/60 text-sm sm:text-base leading-relaxed">Think of AI as your personal research analyst, portfolio manager, and risk assessment expert rolled into one. But unlike humans, it doesn't get emotional, doesn't take coffee breaks, and processes thousands of data points in seconds. What can AI do for your Zerodha portfolio?</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <UseCaseCard icon={BarChart3} title="Deep Portfolio Analysis" features={["Instantly identify sector concentration", "Analyze risk exposure", "Find diversification gaps"]} />
            <UseCaseCard icon={Zap} title="Real-time Intelligence" features={["Process global market data", "Analyze news sentiment", "Factor in geopolitical events"]} />
            <UseCaseCard icon={Target} title="Smart Order Management" features={["Place GTT orders automatically", "Calculate optimal quantities", "Set scientific stop-losses"]} />
            <UseCaseCard icon={Globe} title="Geopolitical Strategies" features={["Identify opportunities from global events", "Analyze policy changes", "Find macro-driven trades"]} />
          </div>
          <div className="mt-6 sm:mt-8 text-center">
            <p className="text-soft-sand/70 text-sm sm:text-base mb-3 sm:mb-4">Want to master these strategies in crypto markets?</p>
            {/* CTA button: min-h-[44px] and py-3 ensure 44px tap target */}
            <Link
              to="/crypto"
              className="inline-flex items-center gap-2 bg-burnt-amber hover:bg-burnt-amber/90 text-white px-6 py-3 rounded-lg font-semibold transition-all min-h-[44px] text-sm sm:text-base"
            >
              Explore Crypto Mastery
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" aria-hidden="true" />
            </Link>
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mt-6 sm:mt-8">
              <UseCaseCard icon={FileText} title="Research Automation" features={["Access data from Screener & Trendlyne", "Compile expert targets", "Integrate technical indicators"]} />
              <UseCaseCard icon={ShieldCheck} title="Advanced Risk Management" features={["Portfolio correlation analysis", "Volatility assessment", "Conduct stress testing"]} />
            </div>
          </div>
          <div className="prose prose-invert max-w-none mt-6 sm:mt-8">
              <p className="text-soft-sand/60 text-sm sm:text-base leading-relaxed">The best part? This level of sophistication was exclusive to institutional investors until now. Today, it's available to anyone with a Zerodha account and an internet connection. For more insights on advanced trading psychology and risk management, visit <a href="#" target="_blank" rel="noopener noreferrer" className="text-burnt-amber hover:text-burnt-amber/80">Trading With Sidhant</a> where I share weekly market analysis and strategy updates.</p>
          </div>
        </section>

        {/* Setup Guide */}
        <section className="mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-5 sm:mb-8 flex items-center gap-3">
            <Code className="w-6 h-6 sm:w-8 sm:h-8 text-brushed-gold shrink-0" aria-hidden="true" />
            Setting Up Your AI Investment Command Center
          </h2>

          <div className="bg-deep-slate/80 rounded-xl p-5 sm:p-8 mb-5 sm:mb-8 border border-soft-sand/10">
            <h3 className="text-xl sm:text-2xl font-bold mb-5 sm:mb-6 text-burnt-amber">Method 1: Claude AI + Zerodha Integration</h3>
            <div className="space-y-5 sm:space-y-6">
              {/* Step 1 */}
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-burnt-amber rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base" aria-hidden="true">1</div>
                <div>
                  <h4 className="font-semibold text-white mb-1.5 sm:mb-2 text-sm sm:text-base">Download and Install Claude</h4>
                  <p className="text-soft-sand/70 text-sm leading-relaxed">Head to "Meet Claude Anthropic" and download the desktop version. Choose the correct option for your system (Mac, Windows, or Windows ARM 64 if applicable).</p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-burnt-amber rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base" aria-hidden="true">2</div>
                <div className="min-w-0">
                  <h4 className="font-semibold text-white mb-1.5 sm:mb-2 text-sm sm:text-base">Configure Claude for Zerodha Access</h4>
                  <p className="text-soft-sand/70 text-sm mb-3 sm:mb-4 leading-relaxed">Open Settings (Ctrl + Comma) → Developer → Edit Config. Delete existing content and paste the following:</p>
                  {/*
                    overflow-x-auto on the wrapper + pre allows horizontal scrolling
                    of code on narrow screens without breaking the page layout.
                    text-xs on mobile keeps code visible; sm:text-sm scales up.
                  */}
                  <div className="bg-deep-slate rounded-lg p-3 sm:p-4 overflow-x-auto">
                    <pre className="text-wealth-teal text-xs sm:text-sm font-mono whitespace-pre leading-relaxed">{`{\n    "mcpServers": {\n        "kite": {\n            "command": "npx",\n            "args": ["mcp-remote", "https://mcp.kite.trade/sse"]\n        }\n    }\n}`}</pre>
                  </div>
                  <div className="mt-3 sm:mt-4 bg-red-900/20 border border-red-700 rounded-lg p-3 sm:p-4">
                    <p className="text-red-400 font-semibold flex items-start gap-2 text-sm">
                      <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 shrink-0 mt-0.5" aria-hidden="true" />
                      Critical Step: Restart Claude completely via Task Manager after saving.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-burnt-amber rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base" aria-hidden="true">3</div>
                <div className="min-w-0">
                  <h4 className="font-semibold text-white mb-1.5 sm:mb-2 text-sm sm:text-base">Connect to Your Zerodha Account</h4>
                  <p className="text-soft-sand/70 text-sm mb-2 leading-relaxed">Type this exact command in Claude:</p>
                  <div className="bg-deep-slate rounded-lg p-3 sm:p-4 overflow-x-auto">
                    <code className="text-wealth-teal text-xs sm:text-sm whitespace-nowrap">Hello Can you please help me login to Kite with MCP?</code>
                  </div>
                  <p className="text-soft-sand/40 text-xs mt-2 leading-relaxed">Claude will generate a secure login link. Think of Kite MCP as a secure translator between Claude and Zerodha.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-deep-slate/80 rounded-xl p-5 sm:p-8 border border-soft-sand/10">
            <h3 className="text-xl sm:text-2xl font-bold mb-5 sm:mb-6 text-brushed-gold">Method 2: Free Alternative with Cursor AI</h3>
            <div className="space-y-3 sm:space-y-4">
              <p className="text-soft-sand/70 text-sm sm:text-base leading-relaxed">For zero subscription costs, use Cursor AI with Gemini 2.5 Flash.</p>
              <ol className="list-none space-y-2 text-sm text-soft-sand/70">
                <li className="leading-relaxed">1. Install from cursor.sh (check "Add to Path"). Restart PC.</li>
                <li className="leading-relaxed">2. Open Cursor, create a new project/folder (e.g., "Kite").</li>
                <li className="leading-relaxed">3. Go to Settings → Models → Enable "Gemini 2.5 Flash" and set it as default.</li>
                <li className="leading-relaxed">4. Run the MCP installation command and log in via the auth link.</li>
              </ol>
              <div className="mt-3 sm:mt-4 bg-burnt-amber/10 border border-burnt-amber/30 rounded-lg p-4">
                <p className="text-burnt-amber font-semibold flex items-center gap-2 text-sm sm:text-base mb-1">
                  <Lightbulb className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" aria-hidden="true" />
                  Pro Tip:
                </p>
                <p className="text-soft-sand/60 text-sm leading-relaxed">Cursor with Gemini provides 70-75% accuracy. It's free and incredibly powerful. For detailed video tutorials, check out my guides on <a href="#" target="_blank" rel="noopener noreferrer" className="text-burnt-amber hover:text-burnt-amber/80 underline">TWS GurukulX</a>.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Complete AI Trading Documentation */}
        <section className="mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 flex items-center gap-3">
            <ListChecks className="w-6 h-6 sm:w-8 sm:h-8 text-wealth-teal shrink-0" aria-hidden="true" />
            Complete AI Trading Documentation
          </h2>
          <p className="text-soft-sand/70 text-sm sm:text-base mb-6 sm:mb-8 leading-relaxed">Bhai, ab yahan hai complete documentation with every single command you'll ever need! Save this, bookmark this, and refer to it whenever you're commanding your AI trading assistant.</p>

          <div className="bg-gradient-to-br from-deep-slate to-deep-slate/80 p-5 sm:p-8 rounded-xl border border-soft-sand/10">
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

            <div className="mt-8 border-t border-soft-sand/10 pt-8">
                 <div className="bg-burnt-amber/10 border border-burnt-amber/30 rounded-lg p-6 mb-4">
                    <h4 className="font-bold text-burnt-amber mb-2 flex items-center"><Lightbulb className="w-5 h-5 mr-2" />Pro Tips for Better Results</h4>
                    <ul className="list-disc list-inside text-sm text-soft-sand/60 space-y-1">
                        <li>Be specific with stock names, quantities, and your risk tolerance.</li>
                        <li>Always verify AI suggestions with your own research.</li>
                        <li>Use paper trading to test new strategies first.</li>
                    </ul>
                </div>
                <div className="bg-red-900/20 border border-red-700 rounded-lg p-6">
                    <h4 className="font-bold text-red-400 mb-2 flex items-center"><AlertTriangle className="w-5 h-5 mr-2" />Important Disclaimers</h4>
                    <p className="text-soft-sand/60 text-sm">AI provides analysis and suggestions but should complement, not replace, your investment judgment. Accuracy is approximately 70-80%. Never share your login credentials.</p>
                </div>
            </div>
          </div>
        </section>

        {/* Kite MCP Use Cases */}
        <section className="mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold mb-5 sm:mb-8 flex items-center gap-3">
                <Rocket className="w-6 h-6 sm:w-8 sm:h-8 text-brushed-gold shrink-0" aria-hidden="true" />
                Kite MCP Complete Arsenal
            </h2>
            <p className="text-soft-sand/70 text-sm sm:text-base mb-5 sm:mb-8 leading-relaxed">Master every function of your AI trading assistant with these powerful use cases.</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                <UseCaseCard icon={Briefcase} title="Portfolio Management" description="Complete portfolio oversight and management." features={["Real-time portfolio analysis", "Sector-wise allocation breakdown", "Diversification gap analysis", "Position sizing recommendations"]} />
                <UseCaseCard icon={FileText} title="Deep Stock Research" description="Institutional-grade research and analysis." features={["Fundamental & technical analysis", "Peer comparison studies", "News sentiment analysis", "Risk-reward calculations"]} />
                <UseCaseCard icon={ShoppingCart} title="Smart Order Management" description="Automated and intelligent order execution." features={["GTT order placement", "Stop-loss automation", "Target order setup", "Position-based quantity calculation"]} />
                <UseCaseCard icon={AreaChart} title="Market Data & Analytics" description="Real-time market intelligence and insights." features={["Live price quotes (LTP)", "OHLC data analysis", "Volume and OI tracking", "Instrument search capabilities"]} />
                <UseCaseCard icon={ShieldCheck} title="Risk Management" description="Advanced risk assessment and mitigation." features={["Portfolio risk analysis", "Concentration risk identification", "Volatility assessment", "Stress testing scenarios"]} />
                <UseCaseCard icon={Globe} title="Strategic Intelligence" description="Geopolitical and thematic investment insights." features={["Geopolitical opportunity mapping", "Thematic investment strategies", "Sector rotation analysis", "Policy impact assessment"]} />
            </div>
            <div className="mt-8 sm:mt-12 bg-deep-slate/80 p-5 sm:p-8 rounded-xl border border-soft-sand/10">
                <h3 className="text-xl sm:text-2xl font-bold text-brushed-gold mb-4 sm:mb-6">Advanced Use Cases</h3>
                <div className="space-y-3 sm:space-y-4">
                    <div className="bg-deep-slate/50 p-4 rounded-lg">
                      <h4 className="font-semibold text-white mb-2 text-sm sm:text-base">Portfolio Rebalancing Automation</h4>
                      {/* overflow-x-auto lets long code strings scroll instead of wrapping or overflowing */}
                      <div className="overflow-x-auto">
                        <code className="text-wealth-teal font-mono text-xs sm:text-sm whitespace-nowrap">"Analyze my portfolio allocation vs my target of 60% equity, 30% debt, 10% gold and suggest rebalancing trades"</code>
                      </div>
                    </div>
                    <div className="bg-deep-slate/50 p-4 rounded-lg">
                      <h4 className="font-semibold text-white mb-2 text-sm sm:text-base">Event-Based Trading</h4>
                      <div className="overflow-x-auto">
                        <code className="text-wealth-teal font-mono text-xs sm:text-sm whitespace-nowrap">"Analyze upcoming earnings calendar for my holdings and suggest pre/post earnings strategies"</code>
                      </div>
                    </div>
                </div>
            </div>
        </section>

        {/* CTA Section */}
        <section>
          <div className="bg-gradient-to-r from-burnt-amber/20 to-wealth-teal/20 border border-burnt-amber/30 rounded-xl p-6 sm:p-12 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Ready to Transform Your Trading?</h2>
            <p className="text-base sm:text-xl text-soft-sand/60 mb-6 sm:mb-8 leading-relaxed">Join thousands of traders who've already embraced AI-powered investing</p>
            {/* Full-width buttons on mobile, side-by-side on sm+ */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link
                to="/mentorship"
                className="bg-burnt-amber hover:bg-burnt-amber/90 text-white px-6 sm:px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 min-h-[52px] text-sm sm:text-base"
              >
                Join Our Live Trading Mentorship
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" aria-hidden="true" />
              </Link>
              <Link
                to="/"
                className="bg-transparent border-2 border-soft-sand/20 text-white px-6 sm:px-8 py-4 rounded-lg font-semibold hover:bg-soft-sand/5 transition-colors flex items-center justify-center min-h-[52px] text-sm sm:text-base"
              >
                Explore All Programs
              </Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default BlogPost;
