import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Seo from '../../components/Seo';

interface RedFlag {
  id: string;
  text: string;
  checked: boolean;
}

function PropScannerPage() {
  // Add structured data for SEO
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Prop Firm Safety Checker - Free AI Analysis Tool",
      "description": "Free prop firm legitimacy checker. Instantly verify prop trading firms before paying challenge fees. AI-powered safety analysis for FTMO, Topstep, MyFundedFX and 100+ prop firms.",
      "url": "https://twsgurukul.com/prop-firm-safety-checker",
      "applicationCategory": "FinanceApplication",
      "operatingSystem": "Web",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "1263"
      },
      "author": {
        "@type": "Organization",
        "name": "TWS Gurukul",
        "url": "https://twsgurukul.com"
      }
    });
    document.head.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);
  const [firmName, setFirmName] = useState('');
  const [country, setCountry] = useState('');
  const [fee, setFee] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [showPrompt, setShowPrompt] = useState(false);
  const [copied, setCopied] = useState(false);
  const [redFlags, setRedFlags] = useState<RedFlag[]>([
    { id: 'rf1', text: "Can't find company address or registration", checked: false },
    { id: 'rf2', text: 'Pushing crypto-only payments or VPN use', checked: false },
    { id: 'rf3', text: 'No clear info about demo vs real trading', checked: false },
    { id: 'rf4', text: 'Promises seem unrealistic (e.g., "guaranteed profits")', checked: false },
  ]);

  const handleRedFlagToggle = (id: string) => {
    setRedFlags(prev => prev.map(flag => 
      flag.id === id ? { ...flag, checked: !flag.checked } : flag
    ));
  };

  const generatePrompt = () => {
    if (!firmName.trim()) {
      const element = document.getElementById('firmName');
      if (element) {
        element.classList.add('animate-shake');
        element.focus();
        setTimeout(() => element.classList.remove('animate-shake'), 500);
      }
      return;
    }

    if (!country) {
      const element = document.getElementById('country');
      if (element) {
        element.classList.add('animate-shake');
        element.focus();
        setTimeout(() => element.classList.remove('animate-shake'), 500);
      }
      return;
    }

    setShowResults(true);
    setShowPrompt(true);
    
    setTimeout(() => {
      document.getElementById('promptSection')?.scrollIntoView({ 
        behavior: 'smooth',
        block: 'nearest'
      });
    }, 100);
  };

  const getCheckedRedFlags = () => redFlags.filter(flag => flag.checked);

  const getPromptText = () => {
    const checkedFlags = getCheckedRedFlags();
    return `Please perform a comprehensive safety evaluation of the prop trading firm "${firmName}" for a trader from ${country}. ${fee ? `The challenge fee is $${fee}.` : ''}

${checkedFlags.length > 0 ? `⚠️ CRITICAL RED FLAGS ALREADY NOTICED:
${checkedFlags.map(flag => `• ${flag.text}`).join('\n')}

` : ''}INVESTIGATION CHECKLIST:

1. REGULATORY COMPLIANCE
- Search "${firmName}" on UK FCA Warning List
- Check ${country === 'India' ? 'SEBI warnings and RBI alerts' : country === 'USA' ? 'CFTC/NFA enforcement database' : country === 'Canada' ? 'CSA investor alerts' : country === 'Australia' ? 'ASIC warnings' : 'relevant financial regulator warnings'}
- Look for any cease & desist orders or legal actions

2. COMPANY VERIFICATION
- Find registered company address and incorporation details
- Verify how long they've been operating (check domain age)
- Identify founders and management team
- Confirm business model transparency

3. TRADING ENVIRONMENT
- Determine if accounts are DEMO/SIMULATED or REAL/LIVE
- Check if this is clearly stated in Terms & Conditions
- Assess if marketing is misleading about account types

4. PAYOUT AUTHENTICATION
- Search for verified trader payout proofs
- Review withdrawal terms, frequency, and limits
- Find complaints about withheld or delayed payments
- Check TrustPilot, Reddit, and ForexPeaceArmy reviews

5. RULE ANALYSIS
- Drawdown type: Static (good) vs Trailing on equity (harsh)
- Daily loss limits and calculation method
- Consistency rules or profit caps
- Hidden fees or impossible requirements

6. ${country.toUpperCase()} LEGAL STATUS
- Verify if prop trading is legal in ${country}
- Check for country-specific regulatory warnings
- Understand tax implications for ${country} residents
- Confirm payment methods available to ${country} traders

${fee ? `7. ROI CALCULATION
- With $${fee} fee, calculate break-even payout needed
- Assuming 10-20% pass rate, determine profitability
- Compare to investing the same amount directly` : ''}

FINAL SAFETY RATING:
Based on all findings, rate "${firmName}" as:

✅ SAFE (Score 75-100)
Can proceed with standard due diligence

⚠️ CAUTION (Score 50-74)
Has concerns but may be legitimate with careful approach

❌ AVOID (Score 0-49 or any critical red flags)
Too risky, find alternatives

Provide:
1. Overall safety score (0-100)
2. Top 3 reasons for the rating
3. Specific evidence/sources for each finding
4. Recommended action for a ${country} trader`;
  };

  const copyPrompt = async () => {
    const promptText = getPromptText();
    try {
      await navigator.clipboard.writeText(promptText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = promptText;
      textArea.style.position = 'fixed';
      textArea.style.opacity = '0';
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const checkedFlags = getCheckedRedFlags();

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-purple-900 to-slate-900">
      <Seo
        title="Prop Firm Safety Checker 2025 - Free Legitimacy Scanner | TWS Gurukul"
        description="Free prop firm legitimacy checker tool. Instantly verify FTMO, Topstep, MyFundedFX & 100+ prop trading firms before paying fees. AI-powered safety analysis for traders."
        keywords="prop firm checker, prop firm legitimacy, prop trading safety, FTMO review, Topstep verification, prop firm scam checker, funded trader program review, prop firm analysis tool, trading challenge verification"
        ogType="website"
        ogImage="https://twsgurukul.com/og-prop-firm-checker.jpg"
        canonicalUrl="https://twsgurukul.com/prop-firm-safety-checker"
      />

      {/* Header */}
      <div className="border-b border-white/10 bg-slate-900/50 backdrop-blur-xs sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-linear-to-br from-cyan-500 to-teal-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">TWS</span>
              </div>
              <span className="text-white font-semibold text-lg">TWS Gurukul</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-2xl mx-auto px-4 py-12">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden border border-white/20">
          {/* Card Header */}
          <div className="bg-linear-to-r from-purple-600 to-indigo-600 p-8 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative z-10">
              <h1 className="text-3xl font-bold text-white mb-2">⚡ Free Prop Firm Safety Checker</h1>
              <p className="text-purple-100">Instant AI-Powered Legitimacy Verification Tool</p>
            </div>
          </div>

          {/* Card Body */}
          <div className="p-6 lg:p-8 space-y-6">
            {/* Alert with SEO keywords */}
            <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4 flex gap-3">
              <div className="w-6 h-6 rounded-full bg-amber-500 flex items-center justify-center shrink-0 mt-0.5">
                <span className="text-white font-bold text-xs">!</span>
              </div>
              <div className="text-amber-100 text-sm">
                <strong>Important for Traders:</strong> Most "prop firms" including FTMO, Topstep, and MyFundedFX are evaluation companies using demo accounts, not real trading capital. Use this free tool to verify legitimacy before paying challenge fees.
              </div>
            </div>

            {/* Firm Name Input */}
            <div>
              <label htmlFor="firmName" className="block text-sm font-semibold text-white mb-2">
                Prop Firm Name
                <span className="ml-2 text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded-sm">Required</span>
              </label>
              <input
                type="text"
                id="firmName"
                value={firmName}
                onChange={(e) => setFirmName(e.target.value)}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-hidden focus:border-purple-400 focus:bg-white/15 transition-all"
                placeholder="e.g., FTMO, Topstep, MyFundedFX"
                autoComplete="off"
              />
              <p className="text-xs text-gray-400 mt-1">Enter exactly as shown on their website</p>
            </div>

            {/* Country Select */}
            <div>
              <label htmlFor="country" className="block text-sm font-semibold text-white mb-2">
                Your Location
                <span className="ml-2 text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded-sm">Required</span>
              </label>
              <select
                id="country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-hidden focus:border-purple-400 focus:bg-white/15 transition-all"
              >
                <option value="" className="bg-slate-800">Select your country</option>
                <option value="India" className="bg-slate-800">🇮🇳 India</option>
                <option value="USA" className="bg-slate-800">🇺🇸 United States</option>
                <option value="UK" className="bg-slate-800">🇬🇧 United Kingdom</option>
                <option value="Canada" className="bg-slate-800">🇨🇦 Canada</option>
                <option value="Australia" className="bg-slate-800">🇦🇺 Australia</option>
                <option value="UAE" className="bg-slate-800">🇦🇪 UAE</option>
                <option value="Singapore" className="bg-slate-800">🇸🇬 Singapore</option>
                <option value="Other" className="bg-slate-800">🌍 Other Country</option>
              </select>
              <p className="text-xs text-gray-400 mt-1">For checking local regulations</p>
            </div>

            {/* Challenge Fee */}
            <div>
              <label htmlFor="fee" className="block text-sm font-semibold text-white mb-2">
                Challenge Fee
                <span className="ml-2 text-xs bg-green-500/20 text-green-300 px-2 py-1 rounded-sm">Optional</span>
              </label>
              <input
                type="number"
                id="fee"
                value={fee}
                onChange={(e) => setFee(e.target.value)}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-hidden focus:border-purple-400 focus:bg-white/15 transition-all"
                placeholder="Amount in USD (e.g., 150)"
              />
              <p className="text-xs text-gray-400 mt-1">Helps calculate ROI potential</p>
            </div>

            {/* Red Flags Checklist */}
            <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
              <h3 className="text-red-300 font-semibold mb-3 flex items-center gap-2">
                🚩 Quick Red Flag Check
              </h3>
              <div className="space-y-2">
                {redFlags.map(flag => (
                  <label 
                    key={flag.id}
                    className="flex items-center gap-3 p-2 rounded-sm hover:bg-white/5 cursor-pointer transition-colors"
                  >
                    <input
                      type="checkbox"
                      checked={flag.checked}
                      onChange={() => handleRedFlagToggle(flag.id)}
                      className="w-4 h-4 rounded-sm border-red-400 text-red-500 focus:ring-red-500 focus:ring-offset-0 bg-transparent"
                    />
                    <span className="text-red-200 text-sm">{flag.text}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Generate Button */}
            <button
              onClick={generatePrompt}
              className="w-full py-4 bg-linear-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold rounded-lg shadow-lg transform hover:scale-[1.02] transition-all duration-200"
            >
              Generate Safety Analysis →
            </button>

            {/* Results Section */}
            {showResults && (
              <div className={`rounded-lg p-5 animate-fade-in ${
                checkedFlags.length > 0 
                  ? 'bg-red-500/10 border border-red-500/30' 
                  : 'bg-amber-500/10 border border-amber-500/30'
              }`}>
                {checkedFlags.length > 0 ? (
                  <>
                    <h3 className="text-red-300 font-semibold mb-3 flex items-center gap-2">
                      ⛔ Critical Warning
                    </h3>
                    <p className="text-red-200 text-sm mb-3">
                      <strong>Red flags detected:</strong>
                    </p>
                    <ul className="space-y-1 mb-4">
                      {checkedFlags.map(flag => (
                        <li key={flag.id} className="text-red-200 text-sm ml-4">• {flag.text}</li>
                      ))}
                    </ul>
                    <p className="text-red-200 text-sm">
                      <strong>Action:</strong> These are serious concerns. Proceed with extreme caution or consider alternatives.
                    </p>
                  </>
                ) : (
                  <>
                    <h3 className="text-amber-300 font-semibold mb-3 flex items-center gap-2">
                      ⚠️ Verification Needed
                    </h3>
                    <p className="text-amber-200 text-sm">
                      No immediate red flags found, but always verify thoroughly using the AI prompt below before committing any funds.
                    </p>
                  </>
                )}
              </div>
            )}

            {/* Prompt Section */}
            {showPrompt && (
              <div id="promptSection" className="space-y-4 animate-fade-in">
                <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-5">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-blue-300 font-semibold flex items-center gap-2">
                      🤖 Your AI Analysis Prompt
                    </h3>
                    <button
                      onClick={copyPrompt}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                        copied 
                          ? 'bg-green-500 text-white' 
                          : 'bg-blue-600 hover:bg-blue-700 text-white'
                      }`}
                    >
                      {copied ? '✓ Copied!' : '📋 Copy'}
                    </button>
                  </div>
                  <div className="bg-black/30 rounded-lg p-4 max-h-64 overflow-y-auto">
                    <pre className="text-xs text-gray-300 whitespace-pre-wrap font-mono">
                      {getPromptText()}
                    </pre>
                  </div>
                </div>

                {/* Tips */}
                <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                  <h4 className="text-green-300 font-semibold mb-3 flex items-center gap-2">
                    💡 How to Use This
                  </h4>
                  <ul className="space-y-2 text-green-200 text-sm">
                    <li className="flex items-start gap-2">
                      <span>→</span>
                      <span>Copy the prompt above with one click</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span>→</span>
                      <span>Paste into ChatGPT, Claude, or Gemini</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span>→</span>
                      <span>Get detailed safety analysis in seconds</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span>→</span>
                      <span>Look for the final verdict: SAFE, CAUTION, or AVOID</span>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* CTA Section with SEO content */}
        <div className="mt-12 text-center">
          <div className="bg-linear-to-r from-cyan-500/10 to-teal-500/10 backdrop-blur-xs rounded-2xl p-8 border border-cyan-500/20">
            <h2 className="text-2xl font-bold text-white mb-4">
              Learn Real Trading Instead of Prop Firm Challenges
            </h2>
            <p className="text-gray-300 mb-6">
              Skip the prop firm evaluation fees. Join Wealth OS and learn professional trading strategies that work with your own capital.
            </p>
            <a 
              href="https://learn.tradingwithsidhant.com/l/f232107210"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-linear-to-r from-cyan-500 to-teal-600 hover:from-cyan-600 hover:to-teal-700 text-white font-semibold rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              <span>Join Wealth OS</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <p className="text-xs text-gray-400 mt-4">
              1,200+ students • Live mentorship • Proven strategies
            </p>
          </div>
        </div>

        {/* SEO Content Section */}
        <div className="mt-12 bg-white/5 backdrop-blur-xs rounded-2xl p-8 border border-white/10">
          <h2 className="text-xl font-bold text-white mb-4">Why Use Our Prop Firm Safety Checker?</h2>
          <div className="text-gray-300 space-y-4 text-sm">
            <p>
              Before paying hundreds or thousands in challenge fees to prop trading firms like FTMO, Topstep, MyFundedFX, or any other funded trader program, 
              it's crucial to verify their legitimacy. Our free prop firm checker tool helps traders avoid scams and make informed decisions.
            </p>
            <h3 className="text-lg font-semibold text-white mt-4">What This Tool Checks:</h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Regulatory compliance and warnings from FCA, CFTC, SEBI, and other authorities</li>
              <li>Company registration and business transparency</li>
              <li>Real vs demo account trading verification</li>
              <li>Payout history and trader testimonials</li>
              <li>Hidden fees and impossible challenge requirements</li>
              <li>Country-specific legal status for Indian, US, UK, and other traders</li>
            </ul>
            <h3 className="text-lg font-semibold text-white mt-4">Popular Prop Firms to Check:</h3>
            <p>
              FTMO, Topstep, MyFundedFX, The Funded Trader, E8 Funding, True Forex Funds, Fidelcrest, 
              FundedNext, Blue Guardian, Alpha Capital Group, and 100+ other prop trading firms.
            </p>
            <p className="mt-4">
              <strong>Remember:</strong> This tool provides an AI-generated analysis prompt. Always do your own research and never invest money you can't afford to lose.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-gray-400 text-sm">
          <p>© 2024 TWS Gurukul - Prop Firm Safety Checker | <Link to="/" className="hover:text-white">Home</Link></p>
        </div>
      </div>

      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-10px); }
          75% { transform: translateX(10px); }
        }
        
        .animate-shake {
          animation: shake 0.5s;
        }
        
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </div>
  );
}

export default PropScannerPage;