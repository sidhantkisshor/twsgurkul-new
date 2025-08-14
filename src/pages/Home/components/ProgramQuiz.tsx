import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, ChevronLeft, Target, Sparkles, Clock, Loader2, CheckCircle, TrendingUp, User } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Recommendation {
  stage: string;
  program: string;
  name: string;
  promise: string;
  outcomes: string[];
  price: string;
  link: string;
  urgency?: string;
  testimonial?: {
    name: string;
    role: string;
    quote: string;
  };
}

const ProgramQuiz = () => {
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const [showResult, setShowResult] = useState(false);
  const [isCalculating, setIsCalculating] = useState(false);
  const [recommendation, setRecommendation] = useState<Recommendation | null>(null);
  const resultRef = useRef<HTMLDivElement>(null);

  const questions = [
    {
      id: 'experience',
      question: "How would you describe your trading experience?",
      options: [
        { 
          value: 0, 
          label: 'Brand new, never placed a trade',
          emoji: '🌱'
        },
        { 
          value: 1, 
          label: 'Dabbled with some trades, mixed results',
          emoji: '📊'
        },
        { 
          value: 2, 
          label: 'Trading regularly but not consistently profitable',
          emoji: '📈'
        },
        { 
          value: 3, 
          label: 'Consistently profitable for 6+ months',
          emoji: '🚀'
        }
      ]
    },
    {
      id: 'capital',
      question: "What's your starting trading capital?",
      options: [
        { 
          value: 0, 
          label: 'Less than ₹50,000',
          emoji: '💵'
        },
        { 
          value: 1, 
          label: '₹50,000 – ₹2,00,000',
          emoji: '💰'
        },
        { 
          value: 2, 
          label: '₹2,00,000 – ₹5,00,000',
          emoji: '💎'
        },
        { 
          value: 3, 
          label: '₹5,00,000+',
          emoji: '👑'
        }
      ]
    },
    {
      id: 'time',
      question: "How much time can you dedicate to trading & learning weekly?",
      options: [
        { 
          value: 0, 
          label: 'Less than 4 hours/week',
          emoji: '⏰'
        },
        { 
          value: 1, 
          label: '4–10 hours/week',
          emoji: '📅'
        },
        { 
          value: 2, 
          label: '10–20 hours/week',
          emoji: '⚡'
        },
        { 
          value: 3, 
          label: '20+ hours/week',
          emoji: '🔥'
        }
      ]
    },
    {
      id: 'markets',
      question: "Which markets are you most interested in?",
      options: [
        { 
          value: 'crypto', 
          label: 'Crypto only',
          emoji: '₿'
        },
        { 
          value: 'indian', 
          label: 'Indian Stocks / F&O',
          emoji: '🇮🇳'
        },
        { 
          value: 'international', 
          label: 'International Markets (Forex, US Stocks)',
          emoji: '🌍'
        },
        { 
          value: 'all', 
          label: 'All of the above',
          emoji: '🎯'
        }
      ]
    },
    {
      id: 'risk',
      question: "How would you describe your approach to risk?",
      options: [
        { 
          value: 0, 
          label: 'Cautious — prefer slow and steady growth',
          emoji: '🛡️'
        },
        { 
          value: 1, 
          label: 'Balanced — some risk, some safety',
          emoji: '⚖️'
        },
        { 
          value: 2, 
          label: 'Aggressive — high risk for high returns',
          emoji: '🎲'
        }
      ]
    },
    {
      id: 'urgency',
      question: "When do you want to see your first profitable month?",
      options: [
        { 
          value: 'high', 
          label: 'Within 1–3 months',
          emoji: '🏃'
        },
        { 
          value: 'medium', 
          label: '3–6 months',
          emoji: '🚶'
        },
        { 
          value: 'low', 
          label: "I'm not in a hurry",
          emoji: '🧘'
        }
      ]
    },
    {
      id: 'obstacle',
      question: "What's your biggest challenge right now?",
      options: [
        { 
          value: 'time', 
          label: 'Time & schedule',
          emoji: '⏳'
        },
        { 
          value: 'strategy', 
          label: 'Lack of clear strategy',
          emoji: '🗺️'
        },
        { 
          value: 'capital', 
          label: 'Capital limitations',
          emoji: '💸'
        },
        { 
          value: 'discipline', 
          label: 'Sticking to discipline',
          emoji: '🎯'
        }
      ]
    }
  ];

  const calculateRecommendation = () => {
    // Calculate total score (Experience + Capital + Time)
    const experienceScore = answers.experience || 0;
    const capitalScore = answers.capital || 0;
    const timeScore = answers.time || 0;
    const totalScore = experienceScore + capitalScore + timeScore;

    // Get other answers for personalization
    const markets = answers.markets;
    const risk = answers.risk;
    const urgency = answers.urgency;
    const obstacle = answers.obstacle;

    // Determine program based on score ranges
    if (totalScore <= 3) {
      // Stage 1: Crypto Market Mastery
      return {
        stage: 'Stage 1',
        program: 'crypto',
        name: 'Crypto Market Mastery',
        promise: 'Start trading from scratch with a structured evening system perfect for beginners',
        outcomes: [
          'Learn profitable crypto trading in just 1-2 hours daily',
          'Start with as little as ₹10,000 capital',
          'Average student reaches ₹30-50K monthly within 3 months'
        ],
        price: '₹19,499',
        link: '/crypto',
        urgency: urgency === 'high' ? 'Next batch closes in 48 hours - Limited seats!' : 'Enrollment open now',
        testimonial: {
          name: 'Rahul Kumar',
          role: 'Software Engineer',
          quote: 'Started as complete beginner. Now making ₹45K monthly from just 2 hours evening trading!'
        }
      };
    } else if (totalScore <= 6) {
      // Stage 2: Footprint Mastery
      return {
        stage: 'Stage 2',
        program: 'footprint',
        name: 'Footprint Mastery System',
        promise: 'Trade with institutional players using advanced footprint analysis',
        outcomes: [
          'Master institutional order flow and footprint charts',
          'Achieve 85%+ win rate with professional risk management',
          'Scale to ₹1-2 Lakh monthly with proven strategies'
        ],
        price: '₹34,997',
        link: '/footprint',
        urgency: urgency === 'high' ? 'Early bird discount expires tonight!' : 'Join 5000+ profitable traders',
        testimonial: {
          name: 'Priya Sharma',
          role: 'Business Owner',
          quote: 'Footprint analysis changed everything! Went from losses to ₹1.5L monthly in 4 months.'
        }
      };
    } else {
      // Stage 3: Elite Mentorship Program
      return {
        stage: 'Stage 3',
        program: 'elite',
        name: 'Elite Trading Room',
        promise: 'Live trading with Sidhant - Copy high-probability setups in real-time',
        outcomes: [
          'Trade LIVE with Sidhant every market day',
          'Direct WhatsApp access for instant trade support',
          'Scale beyond ₹3 Lakh monthly with institutional strategies'
        ],
        price: '₹19,999/month',
        link: '/mentorship',
        urgency: urgency === 'high' ? 'Only 10 seats left this month!' : 'Applications open for serious traders',
        testimonial: {
          name: 'Amit Patel',
          role: 'Full-time Trader',
          quote: 'Trading live with Sidhant took me from ₹2L to ₹5L+ monthly. Worth every penny!'
        }
      };
    }
  };

  const handleAnswer = (value: any) => {
    const questionId = questions[currentQuestion].id;
    const newAnswers = { ...answers, [questionId]: value };
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1);
      }, 300);
    } else {
      // Show calculating screen
      setIsCalculating(true);
      
      // Calculate result
      setTimeout(() => {
        const result = calculateRecommendation();
        setRecommendation(result);
        setIsCalculating(false);
        setShowResult(true);
        
        // Auto-scroll to results
        setTimeout(() => {
          resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }, 3000); // 3 second calculation animation
    }
  };

  const goBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const resetQuiz = () => {
    setQuizStarted(false);
    setCurrentQuestion(0);
    setAnswers({});
    setShowResult(false);
    setIsCalculating(false);
    setRecommendation(null);
  };

  // Welcome screen
  if (!quizStarted) {
    return (
      <section id="quiz" className="py-12 sm:py-16 md:py-20 relative overflow-hidden bg-slate-900/50">
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Sidhant intro card */}
            <div className="glass-effect rounded-2xl p-6 mb-8 border border-white/10">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center flex-shrink-0">
                  <User className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white mb-1">A Message from Sidhant</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    "Every successful trader started exactly where you are. This 2-minute assessment will help me understand your unique situation and recommend the perfect program to fast-track your success. Let's find your path to profitable trading!"
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 mb-6">
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span className="text-sm text-purple-400 font-medium">Personalized Path to Profits</span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
                <span className="text-white">Discover Your Perfect </span>
                <span className="text-green-400">Trading Program</span>
              </h2>
              
              <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto">
                Answer 7 quick questions to get your personalized trading roadmap
              </p>
              
              <div className="flex items-center justify-center gap-4 sm:gap-6 md:gap-8 mb-8 md:mb-10">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-white">2 min</div>
                  <div className="text-xs sm:text-sm text-gray-500">to complete</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-green-400">10,847+</div>
                  <div className="text-xs sm:text-sm text-gray-500">success stories</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-blue-400">89%</div>
                  <div className="text-xs sm:text-sm text-gray-500">success rate</div>
                </div>
              </div>

              <button
                onClick={() => setQuizStarted(true)}
                className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white rounded-full w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 text-base sm:text-lg md:text-xl font-bold transition-all duration-300 shadow-2xl hover:shadow-green-500/25 hover:scale-105 active:scale-95"
              >
                Start Your Assessment
                <ArrowRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform" />
              </button>

              <p className="mt-4 md:mt-6 text-sm md:text-base text-gray-500">
                ✓ No email required • ✓ Instant results • ✓ 100% Free
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Calculating screen
  if (isCalculating) {
    return (
      <section className="py-16 sm:py-20 relative overflow-hidden bg-slate-900/50">
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <div className="glass-effect rounded-2xl p-12 border border-white/10">
              <Loader2 className="w-16 h-16 text-green-400 animate-spin mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">
                We're Calculating Your Perfect Path...
              </h3>
              <div className="space-y-3 text-gray-400">
                <p className="flex items-center justify-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  Analyzing your experience level
                </p>
                <p className="flex items-center justify-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  Matching capital requirements
                </p>
                <p className="flex items-center justify-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  Finding your ideal program
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Show result
  if (showResult && recommendation) {
    return (
      <section ref={resultRef} className="py-16 sm:py-20 relative overflow-hidden bg-slate-900/50">
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Success header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/20 border border-green-500/30 mb-4">
                <Target className="w-4 h-4 text-green-400" />
                <span className="text-sm text-green-400 font-medium">Perfect Match Found!</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
                Congratulations! You're in {recommendation.stage}
              </h2>
              
              <p className="text-gray-400">
                Based on your {answers.experience <= 1 ? 'beginner experience' : 'trading experience'} and {answers.time <= 1 ? 'limited time availability' : 'time commitment'}, 
                we recommend:
              </p>
            </div>

            {/* Recommendation Card */}
            <div className="glass-effect rounded-3xl p-8 border border-green-500/30 bg-gradient-to-br from-green-500/5 to-transparent mb-8">
              <div className="text-center mb-6">
                <h3 className="text-3xl font-bold text-white mb-2">
                  {recommendation.name}
                </h3>
                <p className="text-gray-400 italic">
                  {recommendation.promise}
                </p>
              </div>

              {/* 3 Key Outcomes */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-white mb-4">Your 3 Key Outcomes:</h4>
                <div className="space-y-3">
                  {recommendation.outcomes.map((outcome, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-green-400 font-bold">{index + 1}</span>
                      </div>
                      <p className="text-gray-300">{outcome}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Testimonial */}
              {recommendation.testimonial && (
                <div className="mb-8 p-4 bg-blue-500/10 rounded-xl border border-blue-500/30">
                  <p className="text-sm text-gray-400 mb-2">Success Story:</p>
                  <p className="text-white italic mb-2">"{recommendation.testimonial.quote}"</p>
                  <p className="text-sm text-gray-400">
                    — {recommendation.testimonial.name}, {recommendation.testimonial.role}
                  </p>
                </div>
              )}

              {/* Price and urgency */}
              <div className="text-center mb-6">
                <div className="text-4xl font-bold text-green-400 mb-2">{recommendation.price}</div>
                {recommendation.urgency && (
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/20 border border-red-500/30">
                    <Clock className="w-4 h-4 text-red-400" />
                    <span className="text-sm text-red-400 font-medium">{recommendation.urgency}</span>
                  </div>
                )}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to={recommendation.link}
                  className="flex-1 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-xl py-4 text-lg font-bold transition-all duration-300 shadow-lg hover:shadow-green-500/25 text-center flex items-center justify-center gap-2"
                >
                  Start Your {recommendation.stage} Now
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <button
                  onClick={resetQuiz}
                  className="flex-1 glass-effect hover:bg-white/10 text-white rounded-xl py-4 text-lg font-semibold transition-all duration-300 border border-white/20 hover:border-white/30"
                >
                  Retake Assessment
                </button>
              </div>
            </div>

            {/* Optional email capture */}
            <div className="glass-effect rounded-2xl p-6 border border-white/10 text-center">
              <p className="text-gray-300 mb-4">
                Want to save your results and get a ₹15,000 bonus trading toolkit?
              </p>
              <div className="flex gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email (optional)"
                  className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:border-green-400 focus:outline-none"
                />
                <button className="px-6 py-2 bg-green-500/20 hover:bg-green-500/30 border border-green-500/30 rounded-lg text-green-400 font-medium transition-all">
                  Get Bonus
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Quiz in progress
  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const currentQ = questions[currentQuestion];

  return (
    <section className="py-8 sm:py-16 md:py-20 relative overflow-hidden bg-slate-900/50">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-2xl mx-auto">
          {/* Progress bar */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-3">
              <span className="text-sm text-gray-400">Question {currentQuestion + 1} of {questions.length}</span>
              <span className="text-sm font-medium text-green-400">{Math.round(progress)}% complete</span>
            </div>
            <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-green-500 to-emerald-500 transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Question */}
          <div className="glass-effect rounded-2xl p-6 md:p-8 border border-white/10">
            {currentQuestion > 0 && (
              <button
                onClick={goBack}
                className="flex items-center gap-2 text-gray-400 hover:text-white mb-4 transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                Back
              </button>
            )}

            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                {currentQ.question}
              </h3>
            </div>

            <div className="grid gap-3">
              {currentQ.options.map((option) => (
                <button
                  key={option.label}
                  onClick={() => handleAnswer(option.value)}
                  className="relative overflow-hidden rounded-xl border border-white/10 hover:border-green-500/50 transition-all duration-300 group hover:scale-[1.02] active:scale-[0.98] p-4 text-left"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{option.emoji}</span>
                    <span className="text-white font-medium">{option.label}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="text-center mt-6">
            <button
              onClick={resetQuiz}
              className="text-sm text-gray-500 hover:text-gray-400"
            >
              Cancel assessment
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramQuiz;