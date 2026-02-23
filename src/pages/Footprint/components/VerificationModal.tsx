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
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-900"
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
              className="bg-[#2C3539] rounded-2xl p-8 max-w-lg w-full mx-4 border border-[#C87533]/20 shadow-2xl max-h-[85vh] overflow-y-auto pointer-events-auto"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-[#EDE6D8]">
                  How TWS Verifies Student Feedback
                </h2>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-[#3A4449] rounded-lg transition-colors text-[#B8A99A] hover:text-[#EDE6D8]"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Content */}
              <div className="space-y-6">
                {/* Introduction */}
                <div className="bg-[#3A4449] rounded-lg p-4 border border-[#C87533]/10">
                  <p className="text-[#B8A99A]">
                    TWS Gurukul maintains transparency in how we collect, verify, and present student results.
                    All testimonials undergo a multi-step verification process.
                  </p>
                </div>

                {/* Verification Process */}
                <div>
                  <h3 className="text-lg font-semibold text-[#EDE6D8] mb-4 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-[#0A8D7A]" />
                    Our Verification Process
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-[#C87533] rounded-full flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-white font-bold text-sm">1</span>
                      </div>
                      <div>
                        <h4 className="text-[#EDE6D8] font-medium mb-1">Identity Verification</h4>
                        <p className="text-sm text-[#B8A99A]">
                          All students must be enrolled in our programs with verified email and payment records.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-[#C87533] rounded-full flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-white font-bold text-sm">2</span>
                      </div>
                      <div>
                        <h4 className="text-[#EDE6D8] font-medium mb-1">Result Documentation</h4>
                        <p className="text-sm text-[#B8A99A]">
                          Students voluntarily submit their experiences through our feedback forms after
                          completing modules or attending live Q&A sessions.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-[#C87533] rounded-full flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-white font-bold text-sm">3</span>
                      </div>
                      <div>
                        <h4 className="text-[#EDE6D8] font-medium mb-1">Consent & Publication</h4>
                        <p className="text-sm text-[#B8A99A]">
                          Written consent obtained before publishing any testimonial.
                          Students can request removal at any time.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* What We Track */}
                <div>
                  <h3 className="text-lg font-semibold text-[#EDE6D8] mb-4 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-[#0A8D7A]" />
                    What We Track
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="bg-[#3A4449] rounded-lg p-4 border border-[#C87533]/10">
                      <h4 className="text-[#EDE6D8] font-medium mb-2">Learning Progress</h4>
                      <ul className="text-sm text-[#B8A99A] space-y-1">
                        <li>• Module completion rates</li>
                        <li>• Q&A session attendance</li>
                        <li>• Community engagement</li>
                      </ul>
                    </div>
                    <div className="bg-[#3A4449] rounded-lg p-4 border border-[#C87533]/10">
                      <h4 className="text-[#EDE6D8] font-medium mb-2">Skill Development</h4>
                      <ul className="text-sm text-[#B8A99A] space-y-1">
                        <li>• Understanding of concepts</li>
                        <li>• Application of F.A.S.T. framework</li>
                        <li>• Risk management improvements</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Important Disclaimers */}
                <div className="bg-[#3A4449] border border-[#E5484D]/20 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#EDE6D8] mb-3 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-[#E5484D]" />
                    Important Disclaimers
                  </h3>
                  <ul className="text-sm text-[#B8A99A] space-y-2">
                    <li>• Individual results vary based on practice, market conditions, and risk management</li>
                    <li>• Past performance does not guarantee future results</li>
                    <li>• This is educational content, not investment advice</li>
                    <li>• Trading involves substantial risk of loss</li>
                    <li>• We do not provide tips, signals, or guaranteed returns</li>
                  </ul>
                </div>

                {/* Student Count */}
                <div className="text-center py-4 border-t border-[#3A4449]">
                  <div className="flex items-center justify-center gap-3">
                    <Users className="w-5 h-5 text-[#0A8D7A]" />
                    <p className="text-[#B8A99A]">
                      <span className="text-[#C87533] font-bold">1,263+</span> verified students across all TWS programs
                    </p>
                  </div>
                  <p className="text-xs text-[#B8A99A]/60 mt-2">
                    Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                  </p>
                </div>
              </div>

              {/* Footer */}
              <div className="border-t border-[#3A4449] pt-4 mt-2">
                <button
                  onClick={onClose}
                  className="w-full sm:w-auto px-6 py-2 bg-[#C87533] hover:bg-[#C87533]/80 text-white font-semibold rounded-lg transition-colors"
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
