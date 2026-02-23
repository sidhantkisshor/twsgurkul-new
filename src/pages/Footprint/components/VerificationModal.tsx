import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, AlertCircle, Users, TrendingUp } from 'lucide-react';

interface VerificationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const VerificationModal: React.FC<VerificationModalProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-xs z-900"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          
          {/* Modal */}
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-900 p-4 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-slate-900 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-cyan-500/20 shadow-2xl pointer-events-auto"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="sticky top-0 bg-slate-900 border-b border-slate-800 p-6 flex items-center justify-between">
                <h2 className="text-2xl font-bold text-white">
                  How TWS Verifies Student Feedback
                </h2>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-slate-800 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5 text-slate-400" />
                </button>
              </div>
              
              {/* Content */}
              <div className="p-6 space-y-6">
                {/* Introduction */}
                <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
                  <p className="text-slate-300">
                    TWS Gurukul maintains transparency in how we collect, verify, and present student results. 
                    All testimonials undergo a multi-step verification process.
                  </p>
                </div>
                
                {/* Verification Process */}
                <div>
                  <h3 className="text-lg font-semibold text-cyan-400 mb-4 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    Our Verification Process
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-cyan-500/20 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-cyan-400 font-bold text-sm">1</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">Identity Verification</h4>
                        <p className="text-sm text-slate-400">
                          All students must be enrolled in our programs with verified email and payment records.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-cyan-500/20 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-cyan-400 font-bold text-sm">2</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">Result Documentation</h4>
                        <p className="text-sm text-slate-400">
                          Students voluntarily submit their experiences through our feedback forms after 
                          completing modules or attending live Q&A sessions.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-cyan-500/20 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-cyan-400 font-bold text-sm">3</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">Consent & Publication</h4>
                        <p className="text-sm text-slate-400">
                          Written consent obtained before publishing any testimonial. 
                          Students can request removal at any time.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* What We Track */}
                <div>
                  <h3 className="text-lg font-semibold text-cyan-400 mb-4 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5" />
                    What We Track
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="bg-slate-800/30 rounded-lg p-4 border border-slate-700">
                      <h4 className="font-semibold text-white mb-2">Learning Progress</h4>
                      <ul className="text-sm text-slate-400 space-y-1">
                        <li>• Module completion rates</li>
                        <li>• Q&A session attendance</li>
                        <li>• Community engagement</li>
                      </ul>
                    </div>
                    <div className="bg-slate-800/30 rounded-lg p-4 border border-slate-700">
                      <h4 className="font-semibold text-white mb-2">Skill Development</h4>
                      <ul className="text-sm text-slate-400 space-y-1">
                        <li>• Understanding of concepts</li>
                        <li>• Application of F.A.S.T. framework</li>
                        <li>• Risk management improvements</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                {/* Important Disclaimers */}
                <div className="bg-amber-500/10 rounded-lg p-4 border border-amber-500/30">
                  <h3 className="text-lg font-semibold text-amber-400 mb-3 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5" />
                    Important Disclaimers
                  </h3>
                  <ul className="text-sm text-slate-300 space-y-2">
                    <li>• Individual results vary based on practice, market conditions, and risk management</li>
                    <li>• Past performance does not guarantee future results</li>
                    <li>• This is educational content, not investment advice</li>
                    <li>• Trading involves substantial risk of loss</li>
                    <li>• We do not provide tips, signals, or guaranteed returns</li>
                  </ul>
                </div>
                
                {/* Student Count */}
                <div className="text-center py-4 border-t border-slate-800">
                  <div className="flex items-center justify-center gap-3">
                    <Users className="w-5 h-5 text-cyan-400" />
                    <p className="text-slate-300">
                      <span className="font-bold text-white">1,263+</span> verified students across all TWS programs
                    </p>
                  </div>
                  <p className="text-xs text-slate-500 mt-2">
                    Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                  </p>
                </div>
              </div>
              
              {/* Footer */}
              <div className="sticky bottom-0 bg-slate-900 border-t border-slate-800 p-4">
                <button
                  onClick={onClose}
                  className="w-full sm:w-auto px-6 py-2 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default VerificationModal;