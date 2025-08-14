import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, TrendingUp, MapPin } from 'lucide-react';
import { socialProofData } from '../data';

interface Notification {
  id: number;
  type: 'enrollment' | 'profit' | 'city';
  content: React.ReactNode;
}

const SocialProofNotifications: React.FC = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [nextId, setNextId] = useState(1);

  useEffect(() => {
    const showNotification = () => {
      const types: ('enrollment' | 'profit' | 'city')[] = ['enrollment', 'profit', 'city'];
      const randomType = types[Math.floor(Math.random() * types.length)];
      
      let content: React.ReactNode = null;
      
      switch (randomType) {
        case 'enrollment': {
          const enrollment = socialProofData.recentEnrollments[
            Math.floor(Math.random() * socialProofData.recentEnrollments.length)
          ];
          content = (
            <div className="flex items-center gap-3">
              <Users className="text-green-500" size={20} />
              <div>
                <p className="font-semibold">{enrollment.name} just enrolled from {enrollment.city}</p>
                <p className="text-xs text-gray-400">{enrollment.time}</p>
              </div>
            </div>
          );
          break;
        }
          
        case 'profit': {
          const profitContent = (
            <div className="flex items-center gap-3">
              <TrendingUp className="text-emerald-500" size={20} />
              <div>
                <p className="font-semibold">Our students made {socialProofData.monthlyProfit} profit last month</p>
                <p className="text-xs text-gray-400">Verified results</p>
              </div>
            </div>
          );
          content = profitContent;
          break;
        }
          
        case 'city': {
          const cityContent = (
            <div className="flex items-center gap-3">
              <MapPin className="text-blue-500" size={20} />
              <div>
                <p className="font-semibold">{socialProofData.cityCount} traders from your city already inside</p>
                <p className="text-xs text-gray-400">Join your community</p>
              </div>
            </div>
          );
          content = cityContent;
          break;
        }
      }
      
      const newNotification: Notification = {
        id: nextId,
        type: randomType,
        content
      };
      
      setNotifications(prev => [...prev, newNotification]);
      setNextId(prev => prev + 1);
      
      setTimeout(() => {
        setNotifications(prev => prev.filter(n => n.id !== newNotification.id));
      }, 5000);
    };
    
    const interval = setInterval(showNotification, 8000);
    setTimeout(showNotification, 2000);
    
    return () => clearInterval(interval);
  }, [nextId]);

  return (
    <div className="fixed bottom-0 left-0 right-0 md:bottom-8 md:left-8 md:right-auto z-[800] pointer-events-none">
      <AnimatePresence>
        {notifications.map((notification) => (
          <motion.div
            key={notification.id}
            className="glass-effect rounded-lg p-4 mb-4 max-w-sm pointer-events-auto cursor-pointer hover:scale-105 transition-transform"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.3 }}
            onClick={() => {
              const element = document.getElementById('pricing');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            {notification.content}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default SocialProofNotifications;