import React, { useState } from 'react';
import { ArrowRight, ChevronRight, Target } from 'lucide-react';

interface Program {
  name: string;
  tagline: string;
  price: string;
  features: string[];
  bonus: string;
  cta: string;
}

const HeroWithQuiz = () => {
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [recommendation, setRecommendation] = useState<Program | null>(null);

  const questions = [
    {
      id: 1,
      question: "What's your current trading experience?",
      options: [
        { value: "beginner", label: "Complete beginner (Never traded)" },
        { value: "basic", label: "Basic (Less than 6 months)" },
        { value: "intermediate", label: "Intermediate (6 months - 2 years)" },
        { value: "advanced", label: "Advanced (2+ years)" }
      ]
    },
    {
      id: 2,
      question: "When can you dedicate time to trading?",
      options: [
        { value: "morning", label: "Morning (9 AM - 12 PM)" },
        { value: "afternoon", label: "Afternoon (12 PM - 4 PM)" },
        { value: "evening", label: "Evening only (7 PM - 9 PM)" },
        { value: "fulltime", label: "Full time availability" }
      ]
    },
    {
      id: 3,
      question: "What's your starting capital?",
      options: [
        { value: "small", label: "₹25,000 - ₹50,000" },
        { value: "medium", label: "₹50,000 - ₹2,00,000" },
        { value: "large", label: "₹2,00,000 - ₹5,00,000" },
        { value: "xlarge", label: "₹5,00,000+" }
      ]
    },
    {
      id: 4,
      question: "What's your main goal?",
      options: [
        { value: "side", label: "Extra income (Keep my job)" },
        { value: "replace", label: "Replace my salary" },
        { value: "wealth", label: "Build long-term wealth" },
        { value: "fulltime", label: "Become full-time trader" }
      ]
    },
    {
      id: 5,
      question: "What's your biggest challenge?",
      options: [
        { value: "knowledge", label: "Don't know where to start" },
        { value: "time", label: "Limited time due to job" },
        { value: "emotions", label: "Can't control emotions" },
        { value: "consistency", label: "No consistent profits" }
      ]
    },
    {
      id: 6,
      question: "Preferred learning style?",
      options: [
        { value: "live", label: "Live sessions with mentor" },
        { value: "recorded", label: "Self-paced videos" },
        { value: "both", label: "Mix of both" },
        { value: "personal", label: "One-on-one guidance" }
      ]
    }
  ];

  const programs = {
    crypto: {
      name: "Crypto Evening Profits",
      tagline: "Perfect for working professionals",
      price: "₹24,999",
      features: [
        "Trade only 7-9 PM daily",
        "Start with ₹25,000 capital",
        "Simple 3-step system",
        "WhatsApp support group"
      ],
      bonus: "₹5,000 bonus indicators + 30-day money back guarantee",
      cta: "Start Crypto Trading Tonight"
    },
    footprint: {
      name: "Footprint Mastery System",
      tagline: "See what institutions are doing",
      price: "₹49,999",
      features: [
        "Advanced order flow analysis",
        "Institutional trading secrets",
        "Live market sessions",
        "Personal mentorship included"
      ],
      bonus: "₹10,000 software license + Lifetime updates",
      cta: "Master Institutional Trading"
    },
    elite: {
      name: "Elite Trader Mentorship",
      tagline: "Complete transformation program",
      price: "₹99,999",
      features: [
        "90-day intensive program",
        "Daily live mentorship",
        "All strategies included",
        "Direct access to Sidhant"
      ],
      bonus: "₹25,000 algo trading setup + Profit guarantee",
      cta: "Join Elite Mentorship"
    }
  };

  const calculateResult = () => {
    // Simple logic to determine recommendation
    const experience = answers[0];
    const schedule = answers[1];
    const capital = answers[2];
    
    if (schedule === 'evening' && (experience === 'beginner' || experience === 'basic')) {
      return programs.crypto;
    } else if (experience === 'advanced' || capital === 'xlarge') {
      return programs.footprint;
    } else {
      return programs.elite;
    }
  };

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Calculate and show result
      setAnswers(newAnswers);
      const result = calculateResult();
      setRecommendation(result);
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setQuizStarted(false);
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResult(false);
    setRecommendation(null);
  };

  if (!quizStarted) {
    return (
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-16">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-black to-slate-900" />
        <div className="absolute top-1/2 -left-20 w-96 h-96 bg-green-500/5 rounded-full filter blur-[120px]" />
        <div className="absolute bottom-1/2 -right-20 w-96 h-96 bg-purple-500/5 rounded-full filter blur-[120px]" />

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            {/* Live indicator */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30 mb-8">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm text-green-400">247 traders found their path today</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              <span className="block text-white">
                Stop Guessing.
              </span>
              <span className="block mt-2 bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
                Start Winning.
              </span>
            </h1>

            <p className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Answer 6 simple questions. Get your personalized trading roadmap.
              <br />
              <span className="text-lg text-gray-400">Join 10,000+ profitable traders who found their perfect strategy.</span>
            </p>

            {/* Trust badges */}
            <div className="flex justify-center gap-8 mb-10">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">89%</div>
                <p className="text-sm text-gray-500">Success Rate</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">2 min</div>
                <p className="text-sm text-gray-500">To Complete</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">₹15K</div>
                <p className="text-sm text-gray-500">In Bonuses</p>
              </div>
            </div>

            {/* Start Quiz Button */}
            <button
              onClick={() => setQuizStarted(true)}
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-full px-10 py-5 text-xl font-bold transition-all duration-300 shadow-2xl hover:shadow-green-500/25 hover:scale-105 animate-pulse hover:animate-none"
            >
              Find My Perfect Strategy Now
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>

            <p className="mt-4 text-sm text-gray-500">
              No payment required • 100% personalized • Instant results
            </p>
          </div>
        </div>
      </section>
    );
  }

  if (showResult && recommendation) {
    return (
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-16">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-black to-slate-900" />
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Success Message */}
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/20 border border-green-500/30 mb-6">
                <Target className="w-4 h-4 text-green-400" />
                <span className="text-sm text-green-400 font-medium">Perfect Match Found!</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                Based on your answers, we recommend:
              </h2>
            </div>

            {/* Recommended Program */}
            <div className="glass-effect rounded-3xl p-8 border border-green-500/30 bg-gradient-to-br from-green-500/5 to-transparent">
              <div className="text-center mb-6">
                <h3 className="text-3xl font-bold text-white mb-2">{recommendation.name}</h3>
                <p className="text-xl text-gray-400">{recommendation.tagline}</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">What You'll Get:</h4>
                  <ul className="space-y-3">
                    {recommendation.features.map((feature: string, index: number) => (
                      <li key={index} className="flex items-start gap-3">
                        <ChevronRight className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">Special Quiz Bonus:</h4>
                  <div className="bg-yellow-500/10 rounded-xl p-4 border border-yellow-500/30">
                    <p className="text-yellow-400 font-semibold mb-2">Exclusive for You:</p>
                    <p className="text-gray-300">{recommendation.bonus}</p>
                  </div>
                  
                  <div className="mt-6 text-center">
                    <p className="text-3xl font-bold text-white mb-1">{recommendation.price}</p>
                    <p className="text-sm text-gray-500">One-time payment</p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="text-center">
                <button className="group inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-full px-8 py-4 text-lg font-bold transition-all duration-300 shadow-lg hover:shadow-green-500/25">
                  {recommendation.cta}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <button
                  onClick={resetQuiz}
                  className="block mx-auto mt-4 text-sm text-gray-500 hover:text-gray-400"
                >
                  ← Take quiz again
                </button>
              </div>
            </div>

            {/* Why This Program */}
            <div className="mt-10 text-center">
              <p className="text-gray-400">
                <span className="text-white font-semibold">Why this program?</span> Based on your {answers[1] === 'evening' ? 'evening availability' : 'schedule'}, 
                {' '}{answers[0] === 'beginner' ? 'beginner level' : 'experience level'}, and {answers[2] === 'small' ? 'starting capital' : 'investment size'}, 
                this program gives you the highest chance of success.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Quiz Questions
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-16">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-black to-slate-900" />
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between text-sm text-gray-500 mb-2">
              <span>Question {currentQuestion + 1} of {questions.length}</span>
              <span>{Math.round(((currentQuestion + 1) / questions.length) * 100)}% Complete</span>
            </div>
            <div className="w-full bg-gray-800 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-green-500 to-green-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              />
            </div>
          </div>

          {/* Question */}
          <div className="glass-effect rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-8">
              {questions[currentQuestion].question}
            </h3>

            <div className="space-y-3">
              {questions[currentQuestion].options.map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleAnswer(option.value)}
                  className="w-full text-left p-4 rounded-xl border border-white/10 hover:border-green-500/50 hover:bg-green-500/10 transition-all duration-200 group"
                >
                  <span className="text-gray-300 group-hover:text-white">
                    {option.label}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Skip */}
          <div className="text-center mt-6">
            <button
              onClick={resetQuiz}
              className="text-sm text-gray-500 hover:text-gray-400"
            >
              ← Start over
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroWithQuiz;