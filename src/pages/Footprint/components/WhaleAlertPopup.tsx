import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertTriangle, TrendingUp } from 'lucide-react';

interface WhaleAlert {
  id: string;
  type: 'BUY' | 'SELL';
  amount: string;
  coin: 'BTC' | 'ETH';
  price: string;
  message: string;
}

const WhaleAlertPopup: React.FC = () => {
  const [alerts, setAlerts] = useState<WhaleAlert[]>([]);
  const [currentAlert, setCurrentAlert] = useState<WhaleAlert | null>(null);

  useEffect(() => {
    // Generate random whale alerts
    const alertMessages = [
      { type: 'BUY' as const, amount: '$47M', coin: 'BTC' as const, price: 'MARKET', message: 'Whale accumulation detected!' },
      { type: 'BUY' as const, amount: '$23M', coin: 'ETH' as const, price: 'MARKET', message: 'Smart money buying!' },
      { type: 'SELL' as const, amount: '$15M', coin: 'BTC' as const, price: 'MARKET', message: 'Take profits NOW!' },
      { type: 'BUY' as const, amount: '$67M', coin: 'BTC' as const, price: 'MARKET', message: 'MASSIVE support building!' },
    ];

    const showAlert = () => {
      const randomAlert = alertMessages[Math.floor(Math.random() * alertMessages.length)];
      const alert: WhaleAlert = {
        id: Date.now().toString(),
        ...randomAlert
      };
      
      setCurrentAlert(alert);
      setTimeout(() => setCurrentAlert(null), 5000);
    };

    // Show first alert after 10 seconds
    const firstTimeout = setTimeout(() => showAlert(), 10000);
    
    // Then show alerts every 45 seconds
    const interval = setInterval(() => showAlert(), 45000);

    return () => {
      clearTimeout(firstTimeout);
      clearInterval(interval);
    };
  }, []);

  return (
    <AnimatePresence>
      {currentAlert && (
        <motion.div
          initial={{ x: 400, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 400, opacity: 0 }}
          transition={{ type: 'spring', damping: 25 }}
          className="fixed bottom-20 right-4 z-50 max-w-sm"
        >
          <div className={`bg-slate-900 border-2 ${
            currentAlert.type === 'BUY' ? 'border-green-500' : 'border-red-500'
          } rounded-lg p-4 shadow-2xl`}>
            <div className="flex items-start gap-3">
              <div className={`p-2 rounded-full ${
                currentAlert.type === 'BUY' ? 'bg-green-500/20' : 'bg-red-500/20'
              }`}>
                {currentAlert.type === 'BUY' ? (
                  <TrendingUp className="w-5 h-5 text-green-400" />
                ) : (
                  <AlertTriangle className="w-5 h-5 text-red-400" />
                )}
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-white mb-1">
                  🐋 WHALE ALERT: {currentAlert.amount} {currentAlert.coin} {currentAlert.type}
                </h4>
                <p className="text-sm text-slate-300 mb-2">
                  Order placed at {currentAlert.price}
                </p>
                <p className={`text-sm font-semibold ${
                  currentAlert.type === 'BUY' ? 'text-green-400' : 'text-red-400'
                }`}>
                  {currentAlert.message}
                </p>
                <p className="text-xs text-slate-400 mt-2">
                  Detected by whale tracker • Just now
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WhaleAlertPopup;