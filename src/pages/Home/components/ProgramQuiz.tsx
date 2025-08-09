import React, { useState } from 'react';
import { ArrowRight, ChevronLeft, Target, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Recommendation {
  program: string;
  name: string;
  promise: string;
  match: number;
  reasons: string[];
  price: string;
  link: string;
  note?: string;
  personalized?: string;
  isPopular?: boolean;
}

const ProgramQuiz = () => {
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResult, setShowResult] = useState(false);
  const [recommendation, setRecommendation] = useState<Recommendation | null>(null);

  const questions = [
    {
      id: 'experience',
      question: "Where are you in your trading journey?",
      subtitle: "Be honest - we have programs for every level",
      options: [
        { 
          value: 'beginner', 
          label: 'Complete Beginner', 
          emoji: '🌱',
          description: "Never traded or just started",
          color: 'from-green-500/20 to-green-600/20'
        },
        { 
          value: 'intermediate', 
          label: 'Some Experience', 
          emoji: '📊',
          description: "1-2 years, mixed results",
          color: 'from-blue-500/20 to-blue-600/20'
        },
        { 
          value: 'advanced', 
          label: 'Ready to Scale', 
          emoji: '🚀',
          description: "Profitable but want more",
          color: 'from-purple-500/20 to-purple-600/20'
        }
      ]
    },
    {
      id: 'time',
      question: "How much time can you dedicate daily?",
      subtitle: "Different strategies need different commitments",
      options: [
        { 
          value: 'minimal', 
          label: '1-2 Hours', 
          emoji: '⏰',
          description: "Part-time alongside job",
          color: 'from-yellow-500/20 to-yellow-600/20'
        },
        { 
          value: 'moderate', 
          label: '3-4 Hours', 
          emoji: '📅',
          description: "Serious side hustle",
          color: 'from-orange-500/20 to-orange-600/20'
        },
        { 
          value: 'full', 
          label: 'Full-Time', 
          emoji: '💯',
          description: "Ready to go all-in",
          color: 'from-red-500/20 to-red-600/20'
        }
      ]
    },
    {
      id: 'goal',
      question: "What's your 6-month income target?",
      subtitle: "Set realistic expectations for sustainable growth",
      options: [
        { 
          value: 'extra', 
          label: '₹30-50K/month', 
          emoji: '💵',
          description: "Extra income stream",
          color: 'from-cyan-500/20 to-cyan-600/20'
        },
        { 
          value: 'replace', 
          label: '₹1-2L/month', 
          emoji: '💰',
          description: "Replace current salary",
          color: 'from-emerald-500/20 to-emerald-600/20'
        },
        { 
          value: 'freedom', 
          label: '₹3L+/month', 
          emoji: '👑',
          description: "Financial freedom",
          color: 'from-amber-500/20 to-amber-600/20'
        }
      ]
    },
    {
      id: 'style',
      question: "What's your ideal learning environment?",
      subtitle: "Everyone learns differently - what works for you?",
      options: [
        { 
          value: 'self', 
          label: 'Self-Paced', 
          emoji: '📚',
          description: "Videos & practice at my speed",
          color: 'from-indigo-500/20 to-indigo-600/20'
        },
        { 
          value: 'live', 
          label: 'Live Sessions', 
          emoji: '🔴',
          description: "Real-time with mentor",
          color: 'from-rose-500/20 to-rose-600/20'
        },
        { 
          value: 'hybrid', 
          label: 'Mix of Both', 
          emoji: '⚡',
          description: "Videos + live support",
          color: 'from-violet-500/20 to-violet-600/20'
        }
      ]
    },
    {
      id: 'commitment',
      question: "How serious are you about starting?",
      subtitle: "This helps us prioritize support for action-takers",
      options: [
        { 
          value: 'exploring', 
          label: 'Just Exploring', 
          emoji: '🤔',
          description: "Researching options",
          color: 'from-slate-500/20 to-slate-600/20'
        },
        { 
          value: 'ready', 
          label: 'Ready This Month', 
          emoji: '✅',
          description: "Will start soon",
          color: 'from-teal-500/20 to-teal-600/20'
        },
        { 
          value: 'now', 
          label: 'Starting Today', 
          emoji: '🔥',
          description: "Let's go right now",
          color: 'from-red-500/20 to-orange-600/20'
        }
      ]
    }
  ];

  const calculateRecommendation = () => {
    const exp = answers.experience;
    const time = answers.time;
    const goal = answers.goal;
    const style = answers.style;
    const commitment = answers.commitment;

    // Calculate match score based on answers
    let cryptoScore = 0;
    let footprintScore = 0;
    let eliteScore = 0;

    // Experience scoring
    if (exp === 'beginner') {
      cryptoScore += 40;
      footprintScore += 10;
      eliteScore += 5;
    } else if (exp === 'intermediate') {
      cryptoScore += 20;
      footprintScore += 40;
      eliteScore += 30;
    } else if (exp === 'advanced') {
      cryptoScore += 10;
      footprintScore += 35;
      eliteScore += 40;
    }

    // Time scoring
    if (time === 'minimal') {
      cryptoScore += 30;
      footprintScore += 20;
      eliteScore += 10;
    } else if (time === 'moderate') {
      cryptoScore += 20;
      footprintScore += 30;
      eliteScore += 25;
    } else if (time === 'full') {
      cryptoScore += 10;
      footprintScore += 25;
      eliteScore += 35;
    }

    // Goal scoring
    if (goal === 'extra') {
      cryptoScore += 30;
      footprintScore += 20;
      eliteScore += 15;
    } else if (goal === 'replace') {
      cryptoScore += 15;
      footprintScore += 30;
      eliteScore += 25;
    } else if (goal === 'freedom') {
      cryptoScore += 5;
      footprintScore += 25;
      eliteScore += 35;
    }

    // Style scoring
    if (style === 'self') {
      cryptoScore += 30;
      footprintScore += 25;
      eliteScore += 5;
    } else if (style === 'live') {
      cryptoScore += 5;
      footprintScore += 15;
      eliteScore += 40;
    } else if (style === 'hybrid') {
      cryptoScore += 20;
      footprintScore += 30;
      eliteScore += 25;
    }

    // Commitment bonus
    if (commitment === 'now') {
      cryptoScore += 5;
      footprintScore += 10;
      eliteScore += 15;
    }

    // Determine best match
    const scores = [
      { program: 'crypto', score: cryptoScore },
      { program: 'footprint', score: footprintScore },
      { program: 'elite', score: eliteScore }
    ];
    scores.sort((a, b) => b.score - a.score);
    const winner = scores[0];

    // Return recommendation based on highest score
    if (winner.program === 'crypto') {
      return {
        program: 'crypto',
        name: 'Crypto Market Mastery',
        promise: 'Start trading from scratch with a structured evening system',
        match: Math.min(94, 70 + Math.floor(winner.score / 5)),
        reasons: [
          time === 'minimal' ? 'Perfect for 1-2 hour commitment' : 'Flexible timing options',
          exp === 'beginner' ? 'Beginner-friendly system' : 'Works for all experience levels',
          'Start with just ₹10K',
          'Average student profit: ₹45K/month'
        ],
        price: '₹19,499',
        link: '/crypto',
        personalized: `Based on your ${exp === 'beginner' ? 'beginner status' : 'experience'} and ${time === 'minimal' ? 'limited time' : 'schedule'}, this program fits perfectly.`,
        isPopular: false
      };
    } else if (winner.program === 'footprint') {
      return {
        program: 'footprint',
        name: 'Footprint Mastery System',
        promise: 'Trade with big players using institutional footprint analysis',
        match: Math.min(96, 70 + Math.floor(winner.score / 5)),
        reasons: [
          'Track institutional money flow',
          '94.7% accuracy on signals',
          goal === 'freedom' ? 'Path to ₹3L+ months' : 'Scale to ₹1-2L monthly',
          'Most popular among serious traders'
        ],
        price: '₹34,997',
        link: '/footprint',
        personalized: `With your ${exp === 'intermediate' ? 'existing experience' : 'readiness to scale'} and ${goal === 'replace' ? 'salary replacement goal' : 'income targets'}, Footprint is ideal.`,
        isPopular: true
      };
    } else {
      return {
        program: 'elite',
        name: 'Elite Trading Room',
        promise: 'Live trading with Sidhant. Copy high-probability setups and scale safely',
        match: Math.min(95, 70 + Math.floor(winner.score / 5)),
        reasons: [
          'Trade LIVE with Sidhant daily',
          'Copy trades in real-time',
          'WhatsApp hotline for support',
          commitment === 'now' ? 'Start trading today' : 'Immediate implementation'
        ],
        price: '₹19,999',
        link: '/mentorship',
        note: 'Best results after completing Footprint',
        personalized: `Your preference for ${style === 'live' ? 'live mentoring' : 'hands-on learning'} and ${time === 'full' ? 'full-time commitment' : 'serious approach'} makes Elite perfect.`,
        isPopular: false
      };
    }
  };

  const handleAnswer = (value: string) => {
    const questionId = questions[currentQuestion].id;
    const newAnswers = { ...answers, [questionId]: value };
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1);
      }, 300);
    } else {
      setAnswers(newAnswers);
      const result = calculateRecommendation();
      setRecommendation(result);
      setTimeout(() => {
        setShowResult(true);
      }, 500);
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
    setRecommendation(null);
  };

  // Quiz not started
  if (!quizStarted) {
    return (
      <section id="quiz" className="py-16 sm:py-20 relative overflow-hidden bg-slate-900/50">
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 mb-6">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-purple-400 font-medium">Personalized Recommendation</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Find Your Perfect </span>
              <span className="text-green-400">Trading Program</span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Get a personalized roadmap based on your exact situation
            </p>
            
            <div className="flex items-center justify-center gap-8 mb-10">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">30 sec</div>
                <div className="text-xs text-gray-500">to complete</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">94%</div>
                <div className="text-xs text-gray-500">match accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">10,847</div>
                <div className="text-xs text-gray-500">students helped</div>
              </div>
            </div>

            <button
              onClick={() => setQuizStarted(true)}
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white rounded-full px-10 py-5 text-xl font-bold transition-all duration-300 shadow-2xl hover:shadow-purple-500/25 hover:scale-105"
            >
              Start My Assessment
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>

            <p className="mt-6 text-sm text-gray-500">
              Takes only 2 minutes • No email required • 100% free
            </p>
          </div>
        </div>
      </section>
    );
  }

  // Show result
  if (showResult && recommendation) {
    return (
      <section className="py-16 sm:py-20 relative overflow-hidden bg-slate-900/50">
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Success animation */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/20 border border-green-500/30 mb-4">
                <Target className="w-4 h-4 text-green-400" />
                <span className="text-sm text-green-400 font-medium">{recommendation.match}% Match Found!</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
                Based on your answers, we recommend:
              </h2>
            </div>

            {/* Recommendation Card */}
            <div className="relative glass-effect rounded-3xl p-8 border border-green-500/30 bg-gradient-to-br from-green-500/5 to-transparent mb-8">
              {/* Popular Ribbon */}
              {recommendation.isPopular && (
                <div className="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                  ⭐ Most Popular
                </div>
              )}
              
              <h3 className="text-3xl font-bold text-white mb-2 text-center">
                {recommendation.name}
              </h3>
              
              {/* Promise line */}
              {recommendation.promise && (
                <p className="text-center text-gray-400 text-sm mb-4 italic">
                  {recommendation.promise}
                </p>
              )}
              
              {recommendation.personalized && (
                <div className="mb-6 p-4 bg-blue-500/10 rounded-xl border border-blue-500/30">
                  <p className="text-sm text-blue-300 text-center">{recommendation.personalized}</p>
                </div>
              )}
              
              <div className="text-center mb-6">
                <span className="text-4xl font-bold text-green-400">{recommendation.price}</span>
                <p className="text-gray-400 mt-1">One-time investment</p>
                <p className="text-xs text-gray-500 mt-1">EMI options available at checkout</p>
              </div>

              <div className="mb-8">
                <p className="text-sm text-gray-400 mb-3">Why this program is perfect for you:</p>
                <div className="space-y-2">
                  {recommendation.reasons.map((reason: string, index: number) => (
                    <div key={index} className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">✓</span>
                      <span className="text-gray-300">{reason}</span>
                    </div>
                  ))}
                </div>
              </div>

              {recommendation.note && (
                <div className="mb-6 p-4 bg-yellow-500/10 rounded-xl border border-yellow-500/30">
                  <p className="text-sm text-yellow-400">💡 Note: {recommendation.note}</p>
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to={recommendation.link}
                  className="flex-1 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-xl py-4 text-lg font-bold transition-all duration-300 shadow-lg hover:shadow-green-500/25 text-center"
                >
                  Yes! Enroll Me Now
                </Link>
                <button
                  onClick={resetQuiz}
                  className="flex-1 glass-effect hover:bg-white/10 text-white rounded-xl py-4 text-lg font-semibold transition-all duration-300 border border-white/20 hover:border-white/30"
                >
                  Show All Programs
                </button>
              </div>
            </div>

            {/* Alternative options */}
            <div className="text-center">
              <p className="text-gray-400 mb-4">Want to explore other options?</p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="#programs" className="text-green-400 hover:text-green-300 underline">View all programs</a>
                <span className="text-gray-600">|</span>
                <button onClick={resetQuiz} className="text-green-400 hover:text-green-300 underline">Retake quiz</button>
                <span className="text-gray-600">|</span>
                <a href="tel:+919999999999" className="text-green-400 hover:text-green-300 underline">Talk to counselor</a>
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
    <section className="py-16 sm:py-20 relative overflow-hidden bg-slate-900/50">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-2xl mx-auto">
          {/* Progress bar */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm text-gray-400">Question {currentQuestion + 1} of {questions.length}</span>
              <span className="text-sm font-medium text-green-400">{Math.round(progress)}% complete</span>
            </div>
            
            {/* Visual progress indicators */}
            <div className="flex items-center gap-2 mb-3">
              {questions.map((q, index) => (
                <div key={index} className="flex-1">
                  <div className={`h-2 rounded-full transition-all duration-500 ${
                    index < currentQuestion ? 'bg-green-500' : 
                    index === currentQuestion ? 'bg-green-500/50 animate-pulse' : 
                    'bg-gray-700'
                  }`} />
                </div>
              ))}
            </div>
            
            {/* Question emojis */}
            <div className="flex justify-between">
              {questions.map((q, index) => (
                <div key={index} className={`text-xl transition-all duration-300 ${
                  index < currentQuestion ? 'opacity-100 scale-110' :
                  index === currentQuestion ? 'opacity-100 scale-125 animate-bounce' :
                  'opacity-30'
                }`}>
                  {q.options[0].emoji}
                </div>
              ))}
            </div>
          </div>

          {/* Question */}
          <div className="glass-effect rounded-2xl p-8 border border-white/10">
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
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                {currentQ.question}
              </h3>
              {currentQ.subtitle && (
                <p className="text-gray-400 text-sm">{currentQ.subtitle}</p>
              )}
            </div>

            <div className="grid gap-3">
              {currentQ.options.map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleAnswer(option.value)}
                  className={`relative overflow-hidden rounded-xl border border-white/10 hover:border-white/30 transition-all duration-300 group hover:scale-[1.02] hover:shadow-xl`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${option.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  <div className="relative p-5 flex items-center gap-4">
                    <div className="text-3xl sm:text-4xl">{option.emoji}</div>
                    <div className="flex-1 text-left">
                      <div className="font-semibold text-white text-lg mb-1">{option.label}</div>
                      {option.description && (
                        <div className="text-sm text-gray-400 group-hover:text-gray-300">{option.description}</div>
                      )}
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-600 group-hover:text-white opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1" />
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