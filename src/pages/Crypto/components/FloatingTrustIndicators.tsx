import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { students } from '../data';

const POP_DURATION = 6000;
const MIN_BREAK = 8000;
const MAX_BREAK = 20000;

function getRandomBreak() {
    return Math.floor(Math.random() * (MAX_BREAK - MIN_BREAK + 1)) + MIN_BREAK;
}

function getRandomStudentIdx(exclude?: number): number {
    if (!students || students.length === 0) return -1;
    if (students.length === 1) return 0;
    
    let idx: number;
    do {
        idx = Math.floor(Math.random() * students.length);
    } while (idx === exclude);
    
    return idx;
}

type Phase = 'INITIAL' | 'SHOWING' | 'HIDDEN' | 'WAITING';

const FloatingTrustIndicators: React.FC = () => {
    const [phase, setPhase] = useState<Phase>('INITIAL');
    const [currentIdx, setCurrentIdx] = useState(() => getRandomStudentIdx());

    useEffect(() => {
        if (currentIdx === -1) return;

        let timerId: NodeJS.Timeout;

        switch (phase) {
            case 'INITIAL':
                timerId = setTimeout(() => setPhase('SHOWING'), 2000);
                break;
            case 'SHOWING':
                timerId = setTimeout(() => setPhase('HIDDEN'), POP_DURATION);
                break;
            case 'HIDDEN':
                setCurrentIdx(prev => getRandomStudentIdx(prev));
                setPhase('WAITING');
                break;
            case 'WAITING':
                timerId = setTimeout(() => setPhase('SHOWING'), getRandomBreak());
                break;
        }

        return () => {
            if (timerId) clearTimeout(timerId);
        };
    }, [phase, currentIdx]);

    const currentStudent = currentIdx !== -1 ? students[currentIdx] : null;

    return (
        <AnimatePresence>
            {phase === 'SHOWING' && currentStudent && (
                <motion.div
                    key={currentIdx}
                    initial={{ opacity: 0, scale: 0.6, y: 60 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.6, y: 60 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    className="fixed bottom-6 left-4 z-40 max-w-[90vw] sm:max-w-xs"
                    aria-live="polite"
                >
                    <div className="bg-slate-900/95 backdrop-blur-sm rounded-lg p-4 border border-green-500/30 shadow-xl">
                        <div className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mt-2"></div>
                            <div>
                                <p className="text-sm text-white font-medium">
                                    {currentStudent?.name} from {currentStudent?.location} just enrolled
                                </p>
                                <p className="text-xs text-slate-400 mt-1">
                                    {currentStudent?.time}
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default FloatingTrustIndicators; 