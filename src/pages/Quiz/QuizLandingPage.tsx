import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Target, 
  CheckCircle,
  ArrowRight,
  Zap,
  Shield,
  AlertTriangle
} from 'lucide-react';
import { PersonalizedQuiz } from '../../components/PersonalizedQuiz';

export default function QuizLandingPage() {
  const [showQuiz, setShowQuiz] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ minutes: 14, seconds: 59 });
  const [spotsLeft, setSpotsLeft] = useState(27);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds === 0) {
          if (prev.minutes === 0) {
            return { minutes: 14, seconds: 59 };
          }
          return { minutes: prev.minutes - 1, seconds: 59 };
        }
        return { ...prev, seconds: prev.seconds - 1 };
      });
    }, 1000);

    // Randomly decrease spots
    const spotsTimer = setInterval(() => {
      if (Math.random() > 0.7) {
        setSpotsLeft(prev => Math.max(3, prev - 1));
      }
    }, 30000);

    return () => {
      clearInterval(timer);
      clearInterval(spotsTimer);
    };
  }, []);

  if (showQuiz) {
    return <PersonalizedQuiz />;
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Urgency Banner */}
      <div className="bg-red-600/20 border-b border-red-600/30 backdrop-blur-xs">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-center gap-2 text-sm">
            <AlertTriangle className="w-4 h-4 text-red-500 animate-pulse" />
            <span className="text-red-400">
              LIVE UPDATE: Rajesh from Mumbai just got assigned to Crypto Mastery after taking the quiz
            </span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto text-center">
          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-yellow-500/20 text-yellow-400 px-4 py-2 rounded-full text-sm mb-8"
          >
            <Shield className="w-4 h-4" />
            <span>2,347 traders found their perfect path this week</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
          >
            <span className="text-yellow-500">WARNING:</span> 97% of Traders
            <br />
            Choose the <span className="text-red-500 line-through">WRONG</span> Program
            <br />
            <span className="text-2xl md:text-3xl text-gray-400 font-normal">
              (And lose ₹50K+ before realizing it)
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 mb-8"
          >
            Take this 2-minute AI-powered quiz to discover YOUR perfect trading path
            <br />
            <span className="text-yellow-400 font-semibold">
              Get ₹15,000 in bonuses based on your personalized results
            </span>
          </motion.p>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-3 gap-4 mb-8 max-w-2xl mx-auto"
          >
            <div className="bg-gray-800/50 backdrop-blur-xs rounded-lg p-4 border border-gray-700">
              <div className="text-2xl font-bold text-yellow-500">89%</div>
              <div className="text-sm text-gray-400">Match Accuracy</div>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-xs rounded-lg p-4 border border-gray-700">
              <div className="text-2xl font-bold text-green-500">2 Min</div>
              <div className="text-sm text-gray-400">To Complete</div>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-xs rounded-lg p-4 border border-gray-700">
              <div className="text-2xl font-bold text-blue-500">₹15K</div>
              <div className="text-sm text-gray-400">In Bonuses</div>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowQuiz(true)}
            className="bg-linear-to-r from-yellow-500 to-yellow-600 text-gray-900 font-bold py-5 px-12 rounded-lg text-lg shadow-2xl hover:shadow-yellow-500/25 transition-all flex items-center gap-3 mx-auto"
          >
            <Brain className="w-6 h-6" />
            START MY PERSONALIZED ASSESSMENT
            <ArrowRight className="w-6 h-6" />
          </motion.button>

          {/* Urgency */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-4 text-sm text-gray-400"
          >
            <span className="text-red-400 font-semibold">
              ⏰ Bonus expires in: {String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
            </span>
            {' • '}
            <span className="text-yellow-400">
              Only {spotsLeft} personalized spots left today
            </span>
          </motion.div>
        </div>

        {/* Problem Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="max-w-4xl mx-auto mt-16 grid md:grid-cols-2 gap-8"
        >
          {/* Wrong Choice */}
          <div className="bg-red-500/10 backdrop-blur-xs rounded-xl p-6 border border-red-500/30">
            <h3 className="text-xl font-bold text-red-400 mb-4 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5" />
              What Happens When You Choose WRONG
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-1">✗</span>
                <span>Join a program that's too advanced = Confused & overwhelmed</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-1">✗</span>
                <span>Pick something too basic = Bored & no real profits</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-1">✗</span>
                <span>Wrong strategy for your capital = Blown account in weeks</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-1">✗</span>
                <span>Mismatched time commitment = Give up after 30 days</span>
              </li>
            </ul>
            <div className="mt-4 p-3 bg-red-500/10 rounded-lg">
              <p className="text-sm text-red-400">
                💸 Average loss: ₹73,000 (wrong program + wasted time)
              </p>
            </div>
          </div>

          {/* Right Choice */}
          <div className="bg-green-500/10 backdrop-blur-xs rounded-xl p-6 border border-green-500/30">
            <h3 className="text-xl font-bold text-green-400 mb-4 flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              What Happens With PERFECT Match
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>Strategy matches your experience = Fast implementation</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>Right program for your capital = Optimal position sizing</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>Fits your schedule perfectly = Consistent daily progress</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>Personalized bonuses = Extra tools for YOUR goals</span>
              </li>
            </ul>
            <div className="mt-4 p-3 bg-green-500/10 rounded-lg">
              <p className="text-sm text-green-400">
                💰 Average profit: ₹47,000/month (by month 3)
              </p>
            </div>
          </div>
        </motion.div>

        {/* How It Works */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="max-w-4xl mx-auto mt-16"
        >
          <h2 className="text-3xl font-bold text-center mb-8">
            How Your Personalized Path Works
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-yellow-500" />
              </div>
              <h3 className="font-bold mb-2">1. Smart Assessment</h3>
              <p className="text-gray-400 text-sm">
                6 strategic questions analyze your experience, goals, capital, and psychology
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="font-bold mb-2">2. AI Matching</h3>
              <p className="text-gray-400 text-sm">
                Our algorithm matches you with the PERFECT program from 12+ options
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="font-bold mb-2">3. Exclusive Bonuses</h3>
              <p className="text-gray-400 text-sm">
                Get personalized bonuses worth ₹15,000+ based on YOUR specific needs
              </p>
            </div>
          </div>
        </motion.div>

        {/* Social Proof */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="max-w-4xl mx-auto mt-16 bg-gray-800/30 backdrop-blur-xs rounded-xl p-8 border border-gray-700"
        >
          <h3 className="text-2xl font-bold text-center mb-6">
            Recent Quiz Results (Live Updates)
          </h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-700/30 rounded-lg">
              <div>
                <p className="font-semibold">Priya S. from Delhi</p>
                <p className="text-sm text-gray-400">Matched with: Crypto Evening Profits</p>
              </div>
              <div className="text-right">
                <p className="text-green-400 font-semibold">Perfect Match!</p>
                <p className="text-xs text-gray-500">2 minutes ago</p>
              </div>
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-700/30 rounded-lg">
              <div>
                <p className="font-semibold">Amit K. from Mumbai</p>
                <p className="text-sm text-gray-400">Matched with: Elite Trader Mentorship MAX</p>
              </div>
              <div className="text-right">
                <p className="text-green-400 font-semibold">₹70K Bonus Unlocked</p>
                <p className="text-xs text-gray-500">5 minutes ago</p>
              </div>
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-700/30 rounded-lg">
              <div>
                <p className="font-semibold">Rahul V. from Bangalore</p>
                <p className="text-sm text-gray-400">Matched with: Institutional Footprints</p>
              </div>
              <div className="text-right">
                <p className="text-green-400 font-semibold">Advanced Trader</p>
                <p className="text-xs text-gray-500">8 minutes ago</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="max-w-4xl mx-auto mt-16 text-center"
        >
          <div className="bg-yellow-500/10 backdrop-blur-xs rounded-xl p-8 border border-yellow-500/30">
            <h3 className="text-2xl font-bold mb-4">
              ⚠️ Why Most Traders Fail (And How You Won't)
            </h3>
            <p className="text-gray-300 mb-6">
              They randomly pick programs based on price or marketing hype.
              <br />
              You're about to get a scientifically matched program based on YOUR profile.
              <br />
              <span className="text-yellow-400 font-semibold">
                That's why our students have 89% success rate vs 3% industry average.
              </span>
            </p>
            <button
              onClick={() => setShowQuiz(true)}
              className="bg-linear-to-r from-yellow-500 to-yellow-600 text-gray-900 font-bold py-4 px-8 rounded-lg shadow-lg hover:shadow-yellow-500/25 transition-all inline-flex items-center gap-2"
            >
              <Brain className="w-5 h-5" />
              DISCOVER MY PERFECT PROGRAM NOW
              <ArrowRight className="w-5 h-5" />
            </button>
            <p className="text-sm text-gray-500 mt-4">
              🔒 No payment required • 2 minutes to complete • ₹15K in personalized bonuses
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}