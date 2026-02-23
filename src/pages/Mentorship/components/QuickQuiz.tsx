import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, ArrowLeft } from 'lucide-react';

interface QuickQuizProps {
  isOpen: boolean;
  onClose: () => void;
}

const QuickQuiz: React.FC<QuickQuizProps> = ({ isOpen, onClose }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResult, setShowResult] = useState(false);
  const [recommendation, setRecommendation] = useState<'max' | 'lite' | null>(null);

  const questions = [
    {
      id: 1,
      question: "What's your trading experience?",
      options: [
        { value: 'none', label: 'Complete beginner', points: 0 },
        { value: 'some', label: '< 6 months', points: 1 },
        { value: 'moderate', label: '6-12 months', points: 2 },
        { value: 'experienced', label: '1+ years', points: 3 }
      ]
    },
    {
      id: 2,
      question: "How much time can you dedicate nightly?",
      options: [
        { value: '30min', label: '30 minutes', points: 0 },
        { value: '1hr', label: '1 hour', points: 1 },
        { value: '2hr', label: '2+ hours', points: 3 },
        { value: 'varies', label: 'It varies', points: 2 }
      ]
    },
    {
      id: 3,
      question: "Your starting capital?",
      options: [
        { value: 'small', label: '< ₹25,000', points: 0 },
        { value: 'medium', label: '₹25,000 - ₹1 lakh', points: 2 },
        { value: 'large', label: '₹1 lakh+', points: 3 },
        { value: 'testing', label: 'Just testing first', points: 1 }
      ]
    },
    {
      id: 4,
      question: "What matters most to you?",
      options: [
        { value: 'guidance', label: 'Live coaching & accountability', points: 3 },
        { value: 'content', label: 'Self-paced learning', points: 1 },
        { value: 'ideas', label: 'Trade ideas only', points: 0 },
        { value: 'community', label: 'Community access', points: 2 }
      ]
    },
    {
      id: 5,
      question: "How do you learn best?",
      options: [
        { value: 'doing', label: 'By doing with guidance', points: 3 },
        { value: 'watching', label: 'Watching others', points: 2 },
        { value: 'reading', label: 'Reading & studying', points: 1 },
        { value: 'trial', label: 'Trial and error', points: 0 }
      ]
    },
    {
      id: 6,
      question: "Your biggest trading challenge?",
      options: [
        { value: 'discipline', label: 'Lack of discipline', points: 3 },
        { value: 'knowledge', label: 'Don\'t know what to do', points: 2 },
        { value: 'time', label: 'Finding time', points: 1 },
        { value: 'capital', label: 'Limited capital', points: 0 }
      ]
    }
  ];

  const handleAnswer = (value: string, points: number) => {
    const newAnswers = { ...answers, [currentQuestion]: value };
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Calculate total points
      const totalPoints = Object.values(newAnswers).reduce((sum, answer) => {
        const question = questions.find((_, index) => index === Object.keys(newAnswers).indexOf(answer));
        const option = question?.options.find(opt => opt.value === answer);
        return sum + (option?.points || 0);
      }, 0);

      // Determine recommendation (>10 points = Max, <=10 = Lite)
      setRecommendation(totalPoints > 10 ? 'max' : 'lite');
      setShowResult(true);
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResult(false);
    setRecommendation(null);
  };

  const scrollToPricing = () => {
    onClose();
    const element = document.getElementById('pricing');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="relative w-full max-w-lg mx-4 bg-white rounded-3xl shadow-2xl max-h-[90vh] overflow-y-auto"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", duration: 0.5 }}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-deep-slate/40 hover:text-deep-slate transition-colors z-10"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="p-8">
            {!showResult ? (
              <>
                {/* Progress bar */}
                <div className="mb-8">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-deep-slate/60">
                      Question {currentQuestion + 1} of {questions.length}
                    </span>
                    <span className="text-sm text-deep-slate/60">
                      {Math.round(((currentQuestion + 1) / questions.length) * 100)}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <motion.div
                      className="bg-wealth-teal h-2 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </div>

                {/* Question */}
                <motion.div
                  key={currentQuestion}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-xl sm:text-2xl font-semibold text-deep-slate mb-6">
                    {questions[currentQuestion].question}
                  </h3>

                  {/* Options */}
                  <div className="space-y-3">
                    {questions[currentQuestion].options.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => handleAnswer(option.value, option.points)}
                        className={`w-full text-left p-4 rounded-2xl border transition-all duration-200 ${
                          answers[currentQuestion] === option.value
                            ? 'border-burnt-amber bg-burnt-amber/10 text-deep-slate'
                            : 'border-deep-slate/20 hover:border-burnt-amber hover:bg-burnt-amber/5'
                        }`}
                      >
                        <span className="text-base text-deep-slate">{option.label}</span>
                      </button>
                    ))}
                  </div>

                  {/* Back button */}
                  {currentQuestion > 0 && (
                    <button
                      onClick={handleBack}
                      className="mt-6 flex items-center gap-2 text-sm text-deep-slate/50 hover:text-deep-slate/70 transition-colors"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      Back
                    </button>
                  )}
                </motion.div>
              </>
            ) : (
              /* Result */
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center py-4"
              >
                <div className="w-20 h-20 bg-burnt-amber/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🎯</span>
                </div>

                <h3 className="text-2xl font-semibold text-deep-slate mb-4">
                  Your perfect match:
                </h3>

                {recommendation === 'max' ? (
                  <>
                    <div className="bg-deep-slate text-white rounded-2xl p-6 mb-6">
                      <h4 className="text-xl font-semibold mb-2">ETM Max</h4>
                      <p className="text-sm text-soft-sand mb-4">
                        Based on your answers, you'll benefit most from live coaching, accountability, and structured reviews.
                      </p>
                      <div className="text-2xl text-burnt-amber mb-1">₹19,999</div>
                      <div className="text-xs text-soft-sand/70">for 3 months</div>
                    </div>
                    <p className="text-sm text-deep-slate/70 mb-6">
                      You need guidance and structure to succeed. Max provides nightly live sessions and weekly reviews.
                    </p>
                  </>
                ) : (
                  <>
                    <div className="bg-burnt-amber/10 rounded-2xl p-6 mb-6">
                      <h4 className="text-xl font-semibold text-deep-slate mb-2">ETM Lite</h4>
                      <p className="text-sm text-deep-slate/70 mb-4">
                        Perfect for beginners who want to start small with daily trade ideas and basic analysis.
                      </p>
                      <div className="text-2xl text-burnt-amber mb-1">₹6,999</div>
                      <div className="text-xs text-deep-slate/50">per month</div>
                    </div>
                    <p className="text-sm text-deep-slate/70 mb-6">
                      Start here to get a feel for our system. You can always upgrade to Max later.
                    </p>
                  </>
                )}

                <div className="space-y-3">
                  <motion.button
                    onClick={scrollToPricing}
                    className="w-full py-4 bg-burnt-amber text-white font-semibold rounded-full hover:bg-burnt-amber/90 transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    View pricing details
                    <ArrowRight className="inline-block ml-2 w-4 h-4" />
                  </motion.button>

                  <button
                    onClick={handleRestart}
                    className="w-full py-3 text-deep-slate/50 hover:text-deep-slate/70 transition-colors text-sm"
                  >
                    Retake quiz
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default QuickQuiz;