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

  const questions = [
    {
      id: 1,
      question: "What's your trading experience?",
      options: [
        { value: 'none', label: 'Complete beginner' },
        { value: 'some', label: '< 6 months' },
        { value: 'moderate', label: '6-12 months' },
        { value: 'experienced', label: '1+ years' }
      ]
    },
    {
      id: 2,
      question: "How much time can you dedicate nightly?",
      options: [
        { value: '30min', label: '30 minutes' },
        { value: '1hr', label: '1 hour' },
        { value: '2hr', label: '2+ hours' },
        { value: 'varies', label: 'It varies' }
      ]
    },
    {
      id: 3,
      question: "Your starting capital?",
      options: [
        { value: 'small', label: '< ₹25,000' },
        { value: 'medium', label: '₹25,000 - ₹1 lakh' },
        { value: 'large', label: '₹1 lakh+' },
        { value: 'testing', label: 'Just testing first' }
      ]
    },
    {
      id: 4,
      question: "What matters most to you?",
      options: [
        { value: 'guidance', label: 'Live coaching & accountability' },
        { value: 'content', label: 'Self-paced learning' },
        { value: 'ideas', label: 'Trade ideas only' },
        { value: 'community', label: 'Community access' }
      ]
    },
    {
      id: 5,
      question: "How do you learn best?",
      options: [
        { value: 'doing', label: 'By doing with guidance' },
        { value: 'watching', label: 'Watching others' },
        { value: 'reading', label: 'Reading & studying' },
        { value: 'trial', label: 'Trial and error' }
      ]
    },
    {
      id: 6,
      question: "Your biggest trading challenge?",
      options: [
        { value: 'discipline', label: 'Lack of discipline' },
        { value: 'knowledge', label: "Don't know what to do" },
        { value: 'time', label: 'Finding time' },
        { value: 'capital', label: 'Limited capital' }
      ]
    }
  ];

  const handleAnswer = (value: string) => {
    const newAnswers = { ...answers, [currentQuestion]: value };
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
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
                  <div className="w-full bg-deep-slate/10 rounded-full h-2">
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
                        onClick={() => handleAnswer(option.value)}
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
              /* Result - always recommend Mentorship */
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

                <div className="bg-deep-slate text-white rounded-2xl p-6 mb-6">
                  <h4 className="text-xl font-semibold mb-2">Mentorship</h4>
                  <p className="text-sm text-soft-sand mb-4">
                    Live coaching, accountability, and structured reviews - everything you need to transform your trading.
                  </p>
                  <div className="text-2xl text-burnt-amber mb-1">₹19,999</div>
                  <div className="text-xs text-soft-sand/70">for 3 months</div>
                </div>
                <p className="text-sm text-deep-slate/70 mb-6">
                  Nightly live sessions, weekly reviews, and a community that keeps you accountable.
                </p>

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
