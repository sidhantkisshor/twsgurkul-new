import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, Users, TrendingUp } from 'lucide-react';

const LiveDashboardSection: React.FC = () => {
  // Static counters from a recent session (not simulated)
  const attendance = 127;
  const checklists = 89;
  const winRate = 73;
  const [currentFeedIndex, setCurrentFeedIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // Sample feed tiles that rotate
  const feedTiles = [
    {
      id: 1,
      content: "BTC absorption at 8:17 PM. Entry explained live. Exit at Target 2. R multiple: 1.9R. Replay at 42:13.",
      time: "8:17 PM",
      result: "+1.9R"
    },
    {
      id: 2,
      content: "SOL sweep and reclaim at prior day high. Stop moved to break-even as per rule 4. R multiple: 1.2R.",
      time: "8:45 PM",
      result: "+1.2R"
    },
    {
      id: 3,
      content: "ETH liquidity grab rejected. No entry as per checklist item 3. Discipline saved capital. No trade taken.",
      time: "9:02 PM",
      result: "No Trade"
    },
    {
      id: 4,
      content: "MATIC footprint shows absorption. Long entry with 0.5% risk. Trail stop triggered. R multiple: 2.3R.",
      time: "9:28 PM",
      result: "+2.3R"
    }
  ];

  // Simulate loading state
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 800);
  }, []);

  // Rotate feed tiles
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentFeedIndex((prev) => (prev + 1) % feedTiles.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [feedTiles.length]);

  return (
    <section id="live-dashboard" className="py-16 lg:py-24 relative overflow-hidden bg-white">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-sans font-bold text-deep-slate mb-6">
              Inside a <span className="font-serif italic font-normal text-burnt-amber">Typical Session</span>
            </h2>
            <p className="text-lg text-deep-slate/70 max-w-3xl mx-auto font-normal">
              Real sessions. Real trades. Same screen, same time.
            </p>
          </motion.div>

          {/* Live Counters */}
          <motion.div
            className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-warm-white rounded-2xl p-6 text-center border border-deep-slate/10">
              <div className="flex items-center justify-center mb-3">
                <Users className="w-5 h-5 text-deep-slate/70" />
              </div>
              <p className="text-3xl font-semibold text-deep-slate mb-2">
                {attendance}
              </p>
              <p className="text-sm text-deep-slate/70">Last session attendance</p>
            </div>

            <div className="bg-warm-white rounded-2xl p-6 text-center border border-deep-slate/10">
              <div className="flex items-center justify-center mb-3">
                <Activity className="w-5 h-5 text-deep-slate/70" />
              </div>
              <p className="text-3xl font-semibold text-deep-slate mb-2">
                {checklists}
              </p>
              <p className="text-sm text-deep-slate/70">Checklists submitted</p>
            </div>

            <div className="bg-warm-white rounded-2xl p-6 text-center border border-deep-slate/10">
              <div className="flex items-center justify-center mb-3">
                <TrendingUp className="w-5 h-5 text-deep-slate/70" />
              </div>
              <p className="text-3xl font-semibold text-deep-slate mb-2">
                {winRate}%
              </p>
              <p className="text-sm text-deep-slate/70">Win rate last session</p>
            </div>
          </motion.div>

          {/* Sample Feed Tiles */}
          <motion.div
            className="max-w-4xl mx-auto mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="bg-deep-slate text-white rounded-3xl p-8 sm:p-12 min-h-[200px] relative overflow-hidden">
              {isLoading ? (
                // Skeleton loader
                <div className="space-y-4 animate-pulse">
                  <div className="flex items-center justify-between mb-4">
                    <div className="h-4 w-16 bg-deep-slate/70 rounded-sm"></div>
                    <div className="h-4 w-12 bg-deep-slate/70 rounded-sm"></div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-4 w-full bg-deep-slate/70 rounded-sm"></div>
                    <div className="h-4 w-5/6 bg-deep-slate/70 rounded-sm"></div>
                  </div>
                </div>
              ) : (
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentFeedIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-4"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm text-soft-sand/60">{feedTiles[currentFeedIndex].time}</span>
                      <span className={`text-sm font-medium ${
                        feedTiles[currentFeedIndex].result.includes('+')
                          ? 'text-wealth-teal'
                          : 'text-soft-sand/60'
                      }`}>
                        {feedTiles[currentFeedIndex].result}
                      </span>
                    </div>
                    <p className="text-base sm:text-lg leading-relaxed">
                      {feedTiles[currentFeedIndex].content}
                    </p>
                  </motion.div>
                </AnimatePresence>
              )}

              {/* Progress indicator */}
              <div className="absolute bottom-4 left-8 right-8 flex gap-2">
                {feedTiles.map((_, index) => (
                  <div
                    key={index}
                    className={`h-1 flex-1 rounded-full transition-all duration-300 ${
                      index === currentFeedIndex 
                        ? 'bg-white' 
                        : 'bg-white/20'
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Disclosure Line */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-sm text-deep-slate/60 max-w-3xl mx-auto">
              Example session recaps. Your results depend on your skill, capital, and discipline.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LiveDashboardSection;