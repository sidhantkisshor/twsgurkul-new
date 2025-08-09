import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronRight, 
  TrendingUp, 
  Brain, 
  Target,
  AlertCircle,
  IndianRupee,
  Clock,
  Shield,
  Zap,
  Trophy,
  ArrowRight
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
// import confetti from 'canvas-confetti';

interface Question {
  id: string;
  text: string;
  subtext?: string;
  options: {
    text: string;
    value: string;
    icon?: React.ElementType;
    color?: string;
  }[];
}

interface QuizResult {
  recommendation: 'crypto' | 'footprint' | 'mentorship' | 'etm-lite';
  tier?: 'lite' | 'pro' | 'max';
  personalizedMessage: string;
  urgencyMessage: string;
  bonusOffer: string;
  additionalInfo?: string;
}

const questions: Question[] = [
  {
    id: 'experience',
    text: "First, let's see where you stand right now...",
    subtext: "Be honest - this determines your personalized path",
    options: [
      { text: "Complete beginner (Lost money to scams)", value: 'beginner', icon: AlertCircle, color: 'red' },
      { text: "Some experience (Breaking even)", value: 'intermediate', icon: TrendingUp, color: 'yellow' },
      { text: "Profitable but inconsistent", value: 'advanced', icon: Brain, color: 'green' },
      { text: "Looking for institutional edge", value: 'expert', icon: Trophy, color: 'blue' }
    ]
  },
  {
    id: 'goal',
    text: "What's your REAL goal? (No judgment)",
    subtext: "87% of traders lie here. Don't be them.",
    options: [
      { text: "Recover my losses first (₹50K+)", value: 'recover', icon: Shield, color: 'red' },
      { text: "₹50K-1L monthly side income", value: 'side_income', icon: IndianRupee, color: 'green' },
      { text: "Replace my job income", value: 'full_time', icon: Target, color: 'blue' },
      { text: "Build serious wealth (₹1Cr+)", value: 'wealth', icon: Zap, color: 'yellow' }
    ]
  },
  {
    id: 'time',
    text: "How much time can you ACTUALLY dedicate?",
    subtext: "Success requires commitment, not dreams",
    options: [
      { text: "30 mins daily (lunch break)", value: 'minimal', icon: Clock, color: 'gray' },
      { text: "2 hours evening (after office)", value: 'evening', icon: Clock, color: 'blue' },
      { text: "4+ hours (serious commitment)", value: 'dedicated', icon: Clock, color: 'green' },
      { text: "Full-time focus", value: 'full_time', icon: Clock, color: 'yellow' }
    ]
  },
  {
    id: 'capital',
    text: "Starting capital? (100% confidential)",
    subtext: "This determines your profit potential",
    options: [
      { text: "₹10K-25K (Testing waters)", value: 'small', color: 'gray' },
      { text: "₹25K-1L (Serious but careful)", value: 'medium', color: 'blue' },
      { text: "₹1L-5L (Ready to scale)", value: 'large', color: 'green' },
      { text: "₹5L+ (Professional level)", value: 'professional', color: 'yellow' }
    ]
  },
  {
    id: 'pain',
    text: "What's your BIGGEST frustration?",
    subtext: "We'll solve this first",
    options: [
      { text: "Fake gurus & scam groups", value: 'scams', color: 'red' },
      { text: "No consistent strategy", value: 'strategy', color: 'yellow' },
      { text: "Can't spot opportunities", value: 'opportunities', color: 'blue' },
      { text: "Missing the 'insider' edge", value: 'edge', color: 'green' }
    ]
  },
  {
    id: 'style',
    text: "Your preferred learning style?",
    subtext: "This is crucial for your success",
    options: [
      { text: "Show me LIVE - I'll copy", value: 'live', color: 'green' },
      { text: "Teach me systems to apply", value: 'systems', color: 'blue' },
      { text: "Give me advanced tools", value: 'tools', color: 'yellow' },
      { text: "Personal mentorship only", value: 'mentorship', color: 'red' }
    ]
  }
];

export default function PersonalizedQuiz() {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState<QuizResult | null>(null);
  const [userName, setUserName] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [isCalculating, setIsCalculating] = useState(false);

  useEffect(() => {
    // Track quiz start
    if (window.gtag) {
      window.gtag('event', 'quiz_start', {
        event_category: 'engagement',
        event_label: 'personalized_quiz'
      });
    }
  }, []);

  const handleAnswer = (value: string) => {
    const newAnswers = { ...answers, [questions[currentQuestion].id]: value };
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1);
      }, 300);
    } else {
      calculateResult(newAnswers);
    }
  };

  const calculateResult = (allAnswers: Record<string, string>) => {
    setIsCalculating(true);
    
    setTimeout(() => {
      let recommendation: 'crypto' | 'footprint' | 'mentorship' | 'etm-lite' = 'crypto';
      const tier: 'lite' | 'pro' | 'max' = 'max';
      let personalizedMessage = '';
      let urgencyMessage = '';
      let bonusOffer = '';
      let additionalInfo = '';

      // Complex scoring logic based on answers
      const { experience, goal, time, capital, pain, style } = allAnswers;

      // ETM Lite - For those who just want calls/tips with small budget
      if (
        capital === 'small' &&
        time === 'minimal' &&
        (style === 'live' || pain === 'strategy') &&
        (experience === 'beginner' || experience === 'intermediate')
      ) {
        recommendation = 'etm-lite';
        personalizedMessage = `Based on your limited time and budget, ETM LITE is perfect for you. Get daily profitable calls and tips without the full course commitment.`;
        urgencyMessage = `📱 Only ₹6,999 for 3 months of daily signals`;
        bonusOffer = `🎁 First week FREE to prove our accuracy`;
        additionalInfo = `💡 73% of LITE users upgrade to full programs after seeing profits. Start small, grow big!`;
      }
      // Footprint - Advanced traders looking for institutional edge
      else if (
        (experience === 'expert' || experience === 'advanced') &&
        (goal === 'wealth' || capital === 'professional' || capital === 'large') &&
        (pain === 'edge' || pain === 'opportunities') &&
        (style === 'tools' || style === 'systems')
      ) {
        recommendation = 'footprint';
        personalizedMessage = `Based on your profile, you're ready for institutional-level trading. You need the W.H.A.L.E. Detection System™ to see what 99% can't.`;
        urgencyMessage = `⚠️ Only 7 API seats left. Exchanges are limiting access.`;
        bonusOffer = `🎁 Your profile qualifies for the $2,000 Whale Alert Bot (FREE today only)`;
        additionalInfo = `📈 After mastering Footprint, you'll be eligible for Elite Trader Mentorship (ETM) - where millionaire traders are made.`;
      }
      // Crypto - Most beginners and intermediate traders
      else if (
        experience === 'beginner' || 
        experience === 'intermediate' ||
        time === 'evening' || 
        time === 'minimal' ||
        goal === 'side_income' || 
        goal === 'recover' ||
        pain === 'scams' ||
        pain === 'strategy'
      ) {
        recommendation = 'crypto';
        personalizedMessage = `Perfect! The 7-9PM Profit Window™ is designed exactly for someone like you. Master the basics with ₹${capital === 'small' ? '10K' : '25K'} capital and build from there.`;
        urgencyMessage = `🔥 47 spots left at ₹19,499 (increases tomorrow)`;
        bonusOffer = `💰 You get the 10x Coin Finding Blueprint (₹15,000 value) FREE`;
        additionalInfo = `🚀 After completing Crypto Mastery, you'll unlock access to Elite Trader Mentorship (ETM) for advanced strategies.`;
      }
      // Advanced but not quite ready for Footprint
      else if (
        experience === 'advanced' &&
        (capital === 'medium' || time === 'dedicated') &&
        style === 'live'
      ) {
        recommendation = 'crypto';
        personalizedMessage = `You have experience but need structured systems. Start with Crypto Mastery to solidify your foundation, then advance to institutional strategies.`;
        urgencyMessage = `⚡ Your experience qualifies you for fast-track completion`;
        bonusOffer = `🎯 Advanced traders get priority access to ETM after graduation`;
        additionalInfo = `💡 Most profitable traders complete Crypto → ETM → Footprint progression.`;
      }
      // Those asking for mentorship specifically
      else if (style === 'mentorship') {
        recommendation = 'crypto';
        personalizedMessage = `You want personal mentorship - great! Start with Crypto Mastery first. This gives you the foundation needed for Elite Trader Mentorship (ETM).`;
        urgencyMessage = `📚 Foundation first, then personal mentorship`;
        bonusOffer = `🎓 Crypto graduates get 30% off ETM enrollment`;
        additionalInfo = `⚠️ ETM is only available after completing Crypto or Footprint. No exceptions (for your own success).`;
      }
      // Default to Crypto for everyone else
      else {
        recommendation = 'crypto';
        personalizedMessage = `Based on your answers, Crypto Mastery is your ideal starting point. Build a solid foundation with proven strategies.`;
        urgencyMessage = `🎯 Join 1,263 successful traders who started here`;
        bonusOffer = `💰 Limited time: ₹19,499 (usually ₹24,999)`;
        additionalInfo = `📊 90% of our millionaire traders started with Crypto Mastery.`;
      }

      setResult({
        recommendation,
        tier: recommendation === 'etm-lite' ? 'lite' : tier,
        personalizedMessage,
        urgencyMessage,
        bonusOffer,
        additionalInfo
      });
      
      setIsCalculating(false);
      setShowResult(true);
      
      // Fire confetti (install canvas-confetti to enable)
      // confetti({
      //   particleCount: 100,
      //   spread: 70,
      //   origin: { y: 0.6 }
      // });
    }, 3000);
  };

  const handleFinalSubmit = () => {
    if (!userName || !userPhone) {
      alert('Please enter your name and phone number');
      return;
    }

    // Track conversion
    if (window.gtag) {
      window.gtag('event', 'quiz_complete', {
        event_category: 'conversion',
        event_label: result?.recommendation,
        value: result?.tier
      });
    }

    // Navigate to recommended page
    switch (result?.recommendation) {
      case 'crypto':
        navigate('/crypto');
        break;
      case 'footprint':
        navigate('/footprint');
        break;
      case 'mentorship':
        navigate('/mentorship');
        break;
      case 'etm-lite':
        navigate('/mentorship');
        break;
    }
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <AnimatePresence mode="wait">
          {!showResult && !isCalculating && (
            <motion.div
              key={currentQuestion}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-gray-700"
            >
              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex justify-between text-sm text-gray-400 mb-2">
                  <span>Question {currentQuestion + 1} of {questions.length}</span>
                  <span>{Math.round(progress)}% Complete</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-yellow-500 to-yellow-600"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </div>

              {/* Question */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-2">{questions[currentQuestion].text}</h2>
                {questions[currentQuestion].subtext && (
                  <p className="text-gray-400">{questions[currentQuestion].subtext}</p>
                )}
              </div>

              {/* Options */}
              <div className="space-y-4">
                {questions[currentQuestion].options.map((option, index) => (
                  <motion.button
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => handleAnswer(option.value)}
                    className={`w-full p-4 rounded-xl border-2 transition-all hover:scale-105 ${
                      option.color === 'red' ? 'border-red-500/30 hover:border-red-500 hover:bg-red-500/10' :
                      option.color === 'yellow' ? 'border-yellow-500/30 hover:border-yellow-500 hover:bg-yellow-500/10' :
                      option.color === 'green' ? 'border-green-500/30 hover:border-green-500 hover:bg-green-500/10' :
                      option.color === 'blue' ? 'border-blue-500/30 hover:border-blue-500 hover:bg-blue-500/10' :
                      'border-gray-600 hover:border-gray-500 hover:bg-gray-700/50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        {option.icon && <option.icon className="w-5 h-5" />}
                        <span className="font-medium">{option.text}</span>
                      </div>
                      <ChevronRight className="w-5 h-5" />
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}

          {/* Calculating Result */}
          {isCalculating && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center"
            >
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-12 shadow-2xl border border-gray-700">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="w-20 h-20 mx-auto mb-6"
                >
                  <Brain className="w-full h-full text-yellow-500" />
                </motion.div>
                <h2 className="text-2xl font-bold mb-4">Analyzing Your Profile...</h2>
                <p className="text-gray-400 mb-4">Creating your personalized trading path</p>
                <div className="space-y-2 text-sm text-gray-500">
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    ✓ Matching your goals with proven strategies...
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                  >
                    ✓ Calculating your profit potential...
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                  >
                    ✓ Preparing your exclusive offer...
                  </motion.p>
                </div>
              </div>
            </motion.div>
          )}

          {/* Result */}
          {showResult && result && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-gray-700"
            >
              <div className="text-center mb-8">
                <Trophy className="w-20 h-20 text-yellow-500 mx-auto mb-4" />
                <h2 className="text-3xl font-bold mb-2">Your Personalized Path is Ready!</h2>
                <p className="text-gray-400">Based on your profile, we've found the PERFECT program for you</p>
              </div>

              {/* Recommendation Box */}
              <div className="bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 rounded-xl p-6 mb-6 border border-yellow-500/30">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-yellow-500" />
                  YOUR RECOMMENDATION: {result.recommendation === 'etm-lite' ? 'ETM LITE' : result.recommendation.toUpperCase()}
                  {result.tier && result.recommendation !== 'etm-lite' && ` - ${result.tier.toUpperCase()}`}
                </h3>
                <p className="text-gray-300 mb-4">{result.personalizedMessage}</p>
                <div className="space-y-2">
                  <p className="text-yellow-400 font-medium">{result.urgencyMessage}</p>
                  <p className="text-green-400">{result.bonusOffer}</p>
                  {result.additionalInfo && (
                    <p className="text-blue-400 text-sm mt-3 p-3 bg-blue-500/10 rounded-lg border border-blue-500/30">
                      {result.additionalInfo}
                    </p>
                  )}
                </div>
              </div>

              {/* Lead Capture */}
              <div className="space-y-4 mb-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:border-yellow-500 focus:outline-none"
                />
                <input
                  type="tel"
                  placeholder="WhatsApp Number (for instant access)"
                  value={userPhone}
                  onChange={(e) => setUserPhone(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:border-yellow-500 focus:outline-none"
                />
              </div>

              {/* CTA */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleFinalSubmit}
                className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-gray-900 font-bold py-4 px-8 rounded-lg flex items-center justify-center gap-2 shadow-lg"
              >
                CLAIM MY SPOT NOW
                <ArrowRight className="w-5 h-5" />
              </motion.button>

              <p className="text-center text-gray-500 text-sm mt-4">
                🔒 Your information is 100% secure and will never be shared
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}