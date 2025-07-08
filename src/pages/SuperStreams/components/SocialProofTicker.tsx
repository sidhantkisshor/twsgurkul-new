import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SocialProofTicker: React.FC = () => {
  const [currentNotification, setCurrentNotification] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const notifications = [
    {
      name: "Rajesh Kumar",
      location: "Mumbai",
      action: "just enrolled in Pro Circle",
      time: "2 minutes ago",
      avatar: "R"
    },
    {
      name: "Priya Sharma",
      location: "Delhi",
      action: "upgraded to Master Circle",
      time: "5 minutes ago",
      avatar: "P"
    },
    {
      name: "Amit Patel",
      location: "Bangalore",
      action: "joined Starter Plus",
      time: "8 minutes ago",
      avatar: "A"
    },
    {
      name: "Neha Singh",
      location: "Pune",
      action: "enrolled in SuperStreams",
      time: "12 minutes ago",
      avatar: "N"
    },
    {
      name: "Vikash Gupta",
      location: "Hyderabad",
      action: "chose Pro Circle plan",
      time: "15 minutes ago",
      avatar: "V"
    }
  ];

  useEffect(() => {
    // Show ticker after 5 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setCurrentNotification((prev) => (prev + 1) % notifications.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isVisible, notifications.length]);

  if (!isVisible) return null;

  const notification = notifications[currentNotification];

  return (
    <div className="fixed bottom-20 left-4 z-30 hidden sm:block">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentNotification}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="bg-slate-800/90 backdrop-blur-sm border border-slate-700/50 rounded-lg p-4 shadow-lg max-w-sm"
        >
          <div className="flex items-center space-x-3">
            {/* Avatar */}
            <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center text-slate-900 font-bold text-sm">
              {notification.avatar}
            </div>
            
            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center space-x-2 mb-1">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                <span className="text-green-400 text-xs font-semibold">Live Update</span>
              </div>
              
              <p className="text-white text-sm font-medium">
                {notification.name}
              </p>
              <p className="text-slate-300 text-xs">
                from {notification.location} {notification.action}
              </p>
              <p className="text-slate-400 text-xs mt-1">
                {notification.time}
              </p>
            </div>

            {/* Close button */}
            <button
              onClick={() => setIsVisible(false)}
              className="text-slate-400 hover:text-white transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default SocialProofTicker; 