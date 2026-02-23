import React, { useState, useEffect, useRef } from 'react';
import { X, ChevronLeft, ArrowRight, Check, Clock, IndianRupee, Target, AlertCircle, TrendingUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface QuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  source?: string;
}

// Question types
interface Question {
  id: string;
  question: string;
  options: { value: string; label: string; points?: number }[];
  icon?: React.ElementType;
}

// Result type
interface QuizResult {
  stage: number;
  program: string;
  programId: string;
  route: string;
  tagline: string;
  outcomes: string[];
  testimonial: {
    name: string;
    location: string;
    profit: string;
    text: string;
  };
}

const QuizModal: React.FC<QuizModalProps> = ({ isOpen, onClose, source = 'unknown' }) => {
  const navigate = useNavigate();
  const modalRef = useRef<HTMLDivElement>(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [isCalculating, setIsCalculating] = useState(false);
  const [showExitConfirm, setShowExitConfirm] = useState(false);
  const [emailCapture, setEmailCapture] = useState('');
  const [language, setLanguage] = useState<'en' | 'hi'>('en');

  // Questions data
  const questions: Question[] = [
    {
      id: 'experience',
      question: language === 'en' ? "How would you describe your trading experience?" : "आपका ट्रेडिंग अनुभव कैसा है?",
      icon: TrendingUp,
      options: [
        { value: 'complete_beginner', label: language === 'en' ? 'Complete Beginner (never traded)' : 'पूर्ण शुरुआती (कभी ट्रेड नहीं किया)', points: 0 },
        { value: 'some_experience', label: language === 'en' ? 'Some Experience (1-2 years, mixed results)' : 'कुछ अनुभव (1-2 साल, मिश्रित परिणाम)', points: 1 },
        { value: 'experienced', label: language === 'en' ? 'Experienced (2+ years, profitable sometimes)' : 'अनुभवी (2+ साल, कभी-कभी लाभदायक)', points: 2 },
        { value: 'advanced', label: language === 'en' ? 'Advanced (consistent profits, want to scale)' : 'उन्नत (लगातार मुनाफा, स्केल करना चाहते हैं)', points: 3 }
      ]
    },
    {
      id: 'capital',
      question: language === 'en' ? "What's your starting trading capital?" : "आपकी शुरुआती ट्रेडिंग पूंजी क्या है?",
      icon: IndianRupee,
      options: [
        { value: 'under_50k', label: '₹10K - ₹50K', points: 0 },
        { value: '50k_2l', label: '₹50K - ₹2L', points: 1 },
        { value: '2l_10l', label: '₹2L - ₹10L', points: 2 },
        { value: 'above_10l', label: '₹10L+', points: 3 }
      ]
    },
    {
      id: 'time',
      question: language === 'en' ? "How much time can you dedicate to trading & learning weekly?" : "आप साप्ताहिक ट्रेडिंग और सीखने के लिए कितना समय दे सकते हैं?",
      icon: Clock,
      options: [
        { value: 'under_4hrs', label: language === 'en' ? 'Less than 4 hours' : '4 घंटे से कम', points: 0 },
        { value: '4_10hrs', label: language === 'en' ? '4-10 hours' : '4-10 घंटे', points: 1 },
        { value: '10_20hrs', label: language === 'en' ? '10-20 hours' : '10-20 घंटे', points: 2 },
        { value: 'fulltime', label: language === 'en' ? '20+ hours (want to go full-time)' : '20+ घंटे (फुल-टाइम जाना चाहते हैं)', points: 3 }
      ]
    },
    {
      id: 'market',
      question: language === 'en' ? "Which market interests you most?" : "कौन सा बाजार आपको सबसे ज्यादा पसंद है?",
      icon: Target,
      options: [
        { value: 'crypto', label: language === 'en' ? 'Crypto (Bitcoin, Ethereum)' : 'क्रिप्टो (बिटकॉइन, एथेरियम)' },
        { value: 'stocks', label: language === 'en' ? 'Stocks (Nifty, Bank Nifty)' : 'स्टॉक्स (निफ्टी, बैंक निफ्टी)' },
        { value: 'forex', label: language === 'en' ? 'Forex (USD/INR, EUR/USD)' : 'फॉरेक्स (USD/INR, EUR/USD)' },
        { value: 'all', label: language === 'en' ? "I'm open to all markets" : 'मैं सभी बाजारों के लिए खुला हूं' }
      ]
    },
    {
      id: 'risk',
      question: language === 'en' ? "What's your risk tolerance?" : "आपकी जोखिम सहनशीलता क्या है?",
      icon: AlertCircle,
      options: [
        { value: 'conservative', label: language === 'en' ? 'Conservative (preserve capital first)' : 'रूढ़िवादी (पहले पूंजी संरक्षित करें)' },
        { value: 'balanced', label: language === 'en' ? 'Balanced (steady growth)' : 'संतुलित (स्थिर वृद्धि)' },
        { value: 'aggressive', label: language === 'en' ? 'Aggressive (high returns, okay with volatility)' : 'आक्रामक (उच्च रिटर्न, अस्थिरता के साथ ठीक)' }
      ]
    },
    {
      id: 'urgency',
      question: language === 'en' ? "When do you want to see results?" : "आप कब परिणाम देखना चाहते हैं?",
      options: [
        { value: 'asap', label: language === 'en' ? 'ASAP (within 30 days)' : 'जल्द से जल्द (30 दिनों के भीतर)' },
        { value: '3_months', label: language === 'en' ? 'Next 3 months' : 'अगले 3 महीने' },
        { value: '6_months', label: language === 'en' ? 'Next 6 months' : 'अगले 6 महीने' },
        { value: 'no_rush', label: language === 'en' ? 'No rush, I want to learn properly' : 'कोई जल्दी नहीं, मैं ठीक से सीखना चाहता हूं' }
      ]
    },
    {
      id: 'obstacle',
      question: language === 'en' ? "What's your biggest trading challenge?" : "आपकी सबसे बड़ी ट्रेडिंग चुनौती क्या है?",
      options: [
        { value: 'knowledge', label: language === 'en' ? "Don't know where to start" : 'कहां से शुरू करें पता नहीं' },
        { value: 'strategy', label: language === 'en' ? 'No proven strategy' : 'कोई सिद्ध रणनीति नहीं' },
        { value: 'psychology', label: language === 'en' ? 'Emotional trading (fear/greed)' : 'भावनात्मक ट्रेडिंग (डर/लालच)' },
        { value: 'consistency', label: language === 'en' ? 'Inconsistent profits' : 'असंगत मुनाफा' }
      ]
    }
  ];

  // Calculate score and determine program
  const calculateResult = (): QuizResult => {
    const experiencePoints = questions[0].options.find(o => o.value === answers.experience)?.points || 0;
    const capitalPoints = questions[1].options.find(o => o.value === answers.capital)?.points || 0;
    const timePoints = questions[2].options.find(o => o.value === answers.time)?.points || 0;
    
    const totalScore = experiencePoints + capitalPoints + timePoints;

    if (totalScore <= 3) {
      return {
        stage: 1,
        program: 'Crypto Mastery Method (CMM)',
        programId: 'cmm',
        route: '/crypto',
        tagline: 'Start Your Trading Journey',
        outcomes: [
          '₹0 → ₹1.2L/month in 45 days',
          'Master crypto fundamentals & risk management',
          'Join 4,200+ successful beginners'
        ],
        testimonial: {
          name: 'Priya S.',
          location: 'Delhi',
          profit: '+₹1,20,000/month',
          text: 'Started with zero knowledge, now making ₹1.2L/month'
        }
      };
    } else if (totalScore <= 6) {
      return {
        stage: 2,
        program: 'Footprint Trading',
        programId: 'footprint',
        route: '/footprint',
        tagline: 'Scale Your Profits',
        outcomes: [
          '₹1L → ₹5L/month in 60 days',
          'Master institutional order flow analysis',
          'Join 3,800+ profitable traders'
        ],
        testimonial: {
          name: 'Vikram R.',
          location: 'Mumbai',
          profit: '+₹5,00,000/month',
          text: 'Footprint changed everything — ₹5L consistent now'
        }
      };
    } else {
      return {
        stage: 3,
        program: 'Elite Mentorship',
        programId: 'elite',
        route: '/mentorship',
        tagline: 'Master The Markets',
        outcomes: [
          '₹5L → ₹25L/month in 90 days',
          '1-on-1 mentorship with Sidhant',
          'Join 2,847+ elite traders'
        ],
        testimonial: {
          name: 'Arjun K.',
          location: 'Bangalore',
          profit: '+₹15,00,000/month',
          text: 'Quit my job, now earning ₹15L/month'
        }
      };
    }
  };

  // Handle answer selection
  const handleAnswer = (questionId: string, value: string) => {
    const newAnswers = { ...answers, [questionId]: value };
    setAnswers(newAnswers);
    
    // Save to sessionStorage
    sessionStorage.setItem('quizProgress', JSON.stringify({
      currentStep: currentStep + 1,
      answers: newAnswers
    }));

    // Auto-advance after selection
    setTimeout(() => {
      if (currentStep < questions.length - 1) {
        setCurrentStep(currentStep + 1);
      } else {
        handleComplete();
      }
    }, 300);

    // Analytics
    if (window.dataLayer) {
      window.dataLayer.push({
        event: 'quiz_option_select',
        q_id: questionId,
        value: value
      });
    }
  };

  // Handle quiz completion
  const handleComplete = () => {
    setIsCalculating(true);
    
    // Analytics
    if (window.dataLayer) {
      const result = calculateResult();
      window.dataLayer.push({
        event: 'quiz_complete',
        score: result.stage,
        stage: result.programId
      });
    }

    setTimeout(() => {
      setIsCalculating(false);
      setShowResults(true);
    }, 3000);
  };

  // Handle CTA click
  const handleCTAClick = () => {
    const result = calculateResult();
    const queryParams = new URLSearchParams({
      stage: `S${result.stage}`,
      risk: answers.risk || 'balanced',
      obs: answers.obstacle || 'strategy',
      market: answers.market || 'all'
    });

    // Analytics
    if (window.dataLayer) {
      window.dataLayer.push({
        event: 'quiz_result_cta_click',
        stage: result.programId
      });
    }

    // Close modal and navigate
    onClose();
    navigate(`${result.route}?${queryParams.toString()}`);
  };

  // Handle close attempt
  const handleCloseAttempt = () => {
    if (currentStep > 0 && !showResults) {
      setShowExitConfirm(true);
    } else {
      handleClose();
    }
  };

  // Handle close
  const handleClose = () => {
    // Analytics
    if (window.dataLayer) {
      window.dataLayer.push({
        event: 'quiz_modal_close',
        at_step: currentStep,
        reason: showExitConfirm ? 'confirmed' : 'direct'
      });
    }
    
    sessionStorage.setItem('quizDismissed', 'true');
    onClose();
  };

  // Handle ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleCloseAttempt();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
      
      // Analytics
      if (window.dataLayer) {
        window.dataLayer.push({
          event: 'quiz_modal_open',
          source: source
        });
      }
    }

    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, currentStep, showResults]);

  // Restore progress from sessionStorage when modal opens
  useEffect(() => {
    const savedProgress = sessionStorage.getItem('quizProgress');
    if (savedProgress && isOpen) {
      const { currentStep: savedStep, answers: savedAnswers } = JSON.parse(savedProgress);
      setCurrentStep(savedStep);
      setAnswers(savedAnswers);
    }
  }, [isOpen]);

  // Calculate progress percentage
  const progressPercentage = ((currentStep + 1) / questions.length) * 100;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-xs"
        onClick={handleCloseAttempt}
      />

      {/* Modal Container */}
      <div 
        ref={modalRef}
        className="relative w-full max-w-[720px] max-h-[90vh] md:max-h-[85vh] bg-black border border-white/10 rounded-none md:rounded-2xl overflow-hidden md:scale-in-animation slide-up-animation"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="sticky top-0 z-10 bg-black/95 backdrop-blur-sm border-b border-white/10 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img src="/favicon.png" alt="TWS" className="w-8 h-8" />
              {!showResults && !isCalculating && (
                <div className="flex items-center gap-3">
                  <span className="text-sm text-gray-400">
                    Step {currentStep + 1} of {questions.length}
                  </span>
                  <div className="w-32 h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-linear-to-r from-green-500 to-emerald-500 transition-all duration-500"
                      style={{ width: `${progressPercentage}%` }}
                    />
                  </div>
                  <span className="text-xs text-gray-500">{Math.round(progressPercentage)}%</span>
                </div>
              )}
            </div>
            
            <div className="flex items-center gap-3">
              {/* Language Toggle */}
              <div className="flex items-center gap-1 bg-white/10 rounded-full p-0.5">
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-2 py-0.5 rounded-full text-xs transition-all ${
                    language === 'en' ? 'bg-white text-black' : 'text-gray-400'
                  }`}
                >
                  EN
                </button>
                <button
                  onClick={() => setLanguage('hi')}
                  className={`px-2 py-0.5 rounded-full text-xs transition-all ${
                    language === 'hi' ? 'bg-white text-black' : 'text-gray-400'
                  }`}
                >
                  हिन्दी
                </button>
              </div>
              
              {/* Close Button */}
              <button
                onClick={handleCloseAttempt}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5 text-gray-400 hover:text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="p-6 md:p-8 overflow-y-auto max-h-[calc(100vh-200px)] md:max-h-[calc(85vh-140px)]">
          {/* Exit Confirmation */}
          {showExitConfirm && (
            <div className="fixed inset-0 z-110 flex items-center justify-center p-4">
              <div className="bg-black border border-white/20 rounded-xl p-6 max-w-sm">
                <h3 className="text-lg font-bold text-white mb-2">Leave the quiz?</h3>
                <p className="text-gray-400 mb-4">
                  You're {Math.round(progressPercentage)}% done. You can resume anytime.
                </p>
                <div className="flex gap-3">
                  <button
                    onClick={() => setShowExitConfirm(false)}
                    className="flex-1 px-4 py-2 bg-linear-to-r from-green-500 to-emerald-500 text-white rounded-full font-medium hover:shadow-lg transition-all"
                  >
                    Resume
                  </button>
                  <button
                    onClick={handleClose}
                    className="flex-1 px-4 py-2 border border-white/20 text-gray-400 rounded-full hover:bg-white/10 transition-all"
                  >
                    Leave
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Quiz Content */}
          {!isCalculating && !showResults && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  {currentStep === 0 ? (language === 'en' ? "Let's find your perfect trading path" : "आइए आपका सही ट्रेडिंग पथ खोजें") : ''}
                </h2>
                {currentStep === 0 && (
                  <p className="text-gray-400">
                    {language === 'en' ? 'No email needed • Instant result • 2 minutes' : 'कोई ईमेल नहीं • तुरंत परिणाम • 2 मिनट'}
                  </p>
                )}
                <p className="text-sm text-gray-500 mt-2">
                  {language === 'en' ? 'Answer honestly — we have programs for every level.' : 'ईमानदारी से जवाब दें — हमारे पास हर स्तर के लिए कार्यक्रम हैं।'}
                </p>
              </div>

              {/* Current Question */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                  {questions[currentStep].icon && (() => {
                    const Icon = questions[currentStep].icon;
                    return Icon ? <Icon className="w-5 h-5 text-green-400" /> : null;
                  })()}
                  {questions[currentStep].question}
                </h3>
                
                <div className="grid gap-3">
                  {questions[currentStep].options.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => handleAnswer(questions[currentStep].id, option.value)}
                      className={`group relative p-4 rounded-xl border text-left transition-all hover:scale-[1.02] ${
                        answers[questions[currentStep].id] === option.value
                          ? 'border-green-500 bg-green-500/10'
                          : 'border-white/10 hover:border-white/30 hover:bg-white/5'
                      }`}
                      style={{ minHeight: '60px' }}
                    >
                      <span className="text-white font-medium">{option.label}</span>
                      {answers[questions[currentStep].id] === option.value && (
                        <div className="absolute right-4 top-1/2 -translate-y-1/2">
                          <Check className="w-5 h-5 text-green-400" />
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="flex justify-between items-center pt-4">
                <button
                  onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                  disabled={currentStep === 0}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
                    currentStep === 0 
                      ? 'text-gray-600 cursor-not-allowed' 
                      : 'text-gray-400 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <ChevronLeft className="w-4 h-4" />
                  Back
                </button>
                
                {currentStep === questions.length - 1 && (
                  <button
                    onClick={handleComplete}
                    disabled={!answers[questions[currentStep].id]}
                    className="flex items-center gap-2 px-6 py-2 bg-linear-to-r from-green-500 to-emerald-500 text-white rounded-full font-medium hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Get Results
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          )}

          {/* Calculating Screen */}
          {isCalculating && (
            <div className="flex flex-col items-center justify-center py-20">
              <div className="relative w-24 h-24 mb-6">
                <div className="absolute inset-0 border-4 border-green-500/20 rounded-full" />
                <div className="absolute inset-0 border-4 border-green-500 rounded-full border-t-transparent animate-spin" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {language === 'en' ? 'Analyzing your profile...' : 'आपकी प्रोफ़ाइल का विश्लेषण किया जा रहा है...'}
              </h3>
              <p className="text-gray-400">
                {language === 'en' ? 'Matching your level, capital and time...' : 'आपके स्तर, पूंजी और समय का मिलान...'}
              </p>
            </div>
          )}

          {/* Results Screen */}
          {showResults && (
            <div className="space-y-6">
              {(() => {
                const result = calculateResult();
                const experienceLabel = questions[0].options.find(o => o.value === answers.experience)?.label.split('(')[0].trim();
                const capitalLabel = questions[1].options.find(o => o.value === answers.capital)?.label;
                const timeLabel = questions[2].options.find(o => o.value === answers.time)?.label.split('(')[0].trim();
                
                return (
                  <>
                    {/* Success Header */}
                    <div className="text-center mb-8">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/20 mb-4">
                        <Check className="w-8 h-8 text-green-400" />
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                        {language === 'en' ? 'Perfect Match Found!' : 'सही मैच मिला!'}
                      </h2>
                      <p className="text-gray-400">
                        {experienceLabel} • {capitalLabel} • {timeLabel}
                      </p>
                    </div>

                    {/* Recommended Program Card */}
                    <div className="glass-effect rounded-2xl p-6 border border-green-500/30 bg-linear-to-br from-green-950/20 to-emerald-950/10">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <span className="text-xs font-bold text-green-400">RECOMMENDED FOR YOU</span>
                          <h3 className="text-2xl font-bold text-white mt-1">{result.program}</h3>
                          <p className="text-gray-400">{result.tagline}</p>
                        </div>
                        <div className="w-16 h-16 rounded-xl bg-linear-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                          <span className="text-2xl font-bold text-white">{result.stage}</span>
                        </div>
                      </div>

                      {/* Outcomes */}
                      <div className="space-y-3 mb-6">
                        {result.outcomes.map((outcome, index) => (
                          <div key={index} className="flex items-start gap-2">
                            <Check className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                            <span className="text-gray-300">{outcome}</span>
                          </div>
                        ))}
                      </div>

                      {/* Testimonial */}
                      <div className="p-4 rounded-xl bg-black/30 mb-6">
                        <div className="flex items-start gap-3 mb-2">
                          <div className="w-10 h-10 rounded-full bg-linear-to-br from-green-400 to-emerald-500 flex items-center justify-center">
                            <span className="text-lg">👤</span>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <span className="font-semibold text-white">{result.testimonial.name}</span>
                              <span className="text-xs text-gray-500">{result.testimonial.location}</span>
                            </div>
                            <p className="text-sm text-gray-400 italic">"{result.testimonial.text}"</p>
                          </div>
                          <span className="text-sm font-bold text-green-400">{result.testimonial.profit}</span>
                        </div>
                      </div>

                      {/* Urgency Band */}
                      {answers.urgency === 'asap' && (
                        <div className="p-3 rounded-lg bg-yellow-500/10 border border-yellow-500/30 mb-4">
                          <p className="text-sm text-yellow-400 text-center">
                            ⚡ Fast-track batch starting in 3 days • Limited seats
                          </p>
                        </div>
                      )}

                      {/* CTA Buttons */}
                      <div className="space-y-3">
                        <button
                          onClick={handleCTAClick}
                          className="w-full py-4 bg-linear-to-r from-green-500 to-emerald-500 text-white rounded-full font-bold text-lg hover:shadow-lg hover:shadow-green-500/25 transition-all"
                        >
                          {result.stage === 3 ? 'Apply for Elite Mentorship →' : `Start Stage ${result.stage} (${result.programId.toUpperCase()}) →`}
                        </button>
                        
                        <button
                          onClick={() => navigate(`${result.route}/syllabus`)}
                          className="w-full py-3 border border-white/20 text-gray-400 rounded-full hover:bg-white/10 transition-all"
                        >
                          See Syllabus First
                        </button>
                      </div>

                      {/* Email Capture (Optional) */}
                      <div className="mt-6 p-4 rounded-xl bg-white/5 border border-white/10">
                        <p className="text-sm text-gray-400 mb-3">
                          Save my plan + ₹15k toolkit (optional)
                        </p>
                        <div className="flex gap-2">
                          <input
                            type="email"
                            value={emailCapture}
                            onChange={(e) => setEmailCapture(e.target.value)}
                            placeholder="your@email.com"
                            className="flex-1 px-4 py-2 bg-black/50 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-hidden focus:border-green-500"
                          />
                          <button
                            onClick={() => {
                              if (emailCapture && window.dataLayer) {
                                window.dataLayer.push({
                                  event: 'quiz_save_plan_submit',
                                  email: emailCapture,
                                  stage: result.programId
                                });
                              }
                            }}
                            className="px-6 py-2 bg-white/10 text-gray-300 rounded-lg hover:bg-white/20 transition-all"
                          >
                            Save
                          </button>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })()}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizModal;