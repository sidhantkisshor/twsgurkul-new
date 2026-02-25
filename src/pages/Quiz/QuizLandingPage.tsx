import React, { useState } from 'react';
import { Clock, CheckCircle, AlertTriangle, ArrowRight } from 'lucide-react';
import { UnifiedQuiz } from '../../components/UnifiedQuiz';
import Seo from '../../components/Seo';

export default function QuizLandingPage() {
  const [showQuiz, setShowQuiz] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-deep-slate via-[#1e2a2f] to-[#0f1519] text-white">
      <Seo
        title="Find Your Trading Program | TWS GurukulX Quiz"
        description="Take our 90-second quiz to find the perfect trading program for your experience level, capital, and goals."
        canonicalUrl="https://www.twsgurukul.com/quiz"
      />
      {showQuiz ? (
        <UnifiedQuiz mode="standalone" source="quiz_page" />
      ) : (
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-burnt-amber/10 text-burnt-amber/80 px-4 py-2 rounded-full text-sm font-sans mb-8">
              <Clock className="w-4 h-4" />
              <span>Takes 90 seconds</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl mb-6 leading-tight">
              <span className="font-sans font-bold text-white">Not sure which program </span>
              <span className="font-serif italic font-normal text-burnt-amber">fits your level?</span>
            </h1>

            <p className="text-lg text-soft-sand/70 mb-10 max-w-xl mx-auto font-sans leading-relaxed">
              Answer 5 quick questions about your experience, capital, and goals.
              We&apos;ll recommend the exact program that fits your situation.
            </p>

            {/* CTA */}
            <button
              onClick={() => setShowQuiz(true)}
              className="group relative inline-flex items-center gap-3 bg-burnt-amber text-white rounded-full px-10 py-4 text-base font-bold font-sans transition-all duration-300 hover:scale-[1.03] overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-burnt-amber to-[#d4843f] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10 flex items-center gap-3">
                Start the Quiz
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>

            <p className="mt-4 text-[13px] text-soft-sand/50 font-sans">
              Free &middot; No email required &middot; Get your match instantly
            </p>
          </div>

          {/* Why take the quiz -two columns */}
          <div className="max-w-4xl mx-auto mt-20 grid md:grid-cols-2 gap-6">
            <div className="bg-red-500/[0.04] backdrop-blur-sm rounded-2xl p-6 border border-red-500/[0.08]">
              <h3 className="text-lg font-bold text-red-400 mb-4 flex items-center gap-2 font-sans">
                <AlertTriangle className="w-5 h-5" />
                When You Choose Wrong
              </h3>
              <ul className="space-y-3 text-soft-sand/70 text-sm font-sans">
                <li className="flex items-start gap-2">
                  <span className="text-red-400/50 mt-0.5">&times;</span>
                  <span>Program too advanced -confused and overwhelmed</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400/50 mt-0.5">&times;</span>
                  <span>Wrong strategy for your capital -blown account</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400/50 mt-0.5">&times;</span>
                  <span>Time commitment doesn&apos;t fit -you give up in 30 days</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400/50 mt-0.5">&times;</span>
                  <span>Average loss from wrong choice: ₹73,000</span>
                </li>
              </ul>
            </div>

            <div className="bg-wealth-teal/[0.04] backdrop-blur-sm rounded-2xl p-6 border border-wealth-teal/[0.08]">
              <h3 className="text-lg font-bold text-wealth-teal/70 mb-4 flex items-center gap-2 font-sans">
                <CheckCircle className="w-5 h-5" />
                When the Program Fits
              </h3>
              <ul className="space-y-3 text-soft-sand/70 text-sm font-sans">
                <li className="flex items-start gap-2">
                  <span className="text-wealth-teal mt-0.5">&check;</span>
                  <span>Content matches your skill -fast progress</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-wealth-teal mt-0.5">&check;</span>
                  <span>Strategy suits your capital -optimal position sizing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-wealth-teal mt-0.5">&check;</span>
                  <span>Fits your schedule -consistent daily progress</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-wealth-teal mt-0.5">&check;</span>
                  <span>Average profit by month 3: ₹47,000/month</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Final CTA */}
          <div className="max-w-3xl mx-auto mt-16 text-center">
            <button
              onClick={() => setShowQuiz(true)}
              className="group inline-flex items-center gap-2.5 text-burnt-amber font-semibold font-sans text-sm border-2 border-burnt-amber/25 rounded-full px-7 py-3 transition-all duration-300 hover:border-burnt-amber/50 hover:bg-burnt-amber/[0.04]"
            >
              Find My Program
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="text-[13px] text-soft-sand/40 mt-4 font-sans">
              No payment required &middot; Takes 90 seconds
            </p>
          </div>

          {/* Disclaimer */}
          <div className="max-w-3xl mx-auto mt-12 text-center">
            <p className="text-xs text-soft-sand/40 font-sans">
              This quiz recommends a program based on your self-reported answers.
              Results vary based on individual effort, market conditions, and dedication.
              Education only, not investment advice.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
