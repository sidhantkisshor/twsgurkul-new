import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, Loader } from 'lucide-react';
import { useConvertKit } from '../hooks/useConvertKit';
import { sanitizeInput, validateEmail } from '../../../utils/security';

/**
 * Secure consultation form modal with the following security features:
 * - Input sanitization using DOMPurify
 * - Input length validation
 * - Rate limiting (5 second minimum between submissions)
 * - Phone number input restriction (digits only)
 * - Email validation
 * - Environment variable validation
 * - Proper error handling
 * - ARIA accessibility support
 * - Focus trap for keyboard navigation
 */

interface ConsultationFormModalProps {
    isVisible: boolean;
    onClose: () => void;
}

const ConsultationFormModal: React.FC<ConsultationFormModalProps> = ({ isVisible, onClose }) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [experience, setExperience] = useState('');
    const [errors, setErrors] = useState<{ name?: string; phone?: string; email?: string; experience?: string }>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [lastSubmissionTime, setLastSubmissionTime] = useState<number>(0);
    
    const { subscribeToForm, isLoading, isSuccess, error } = useConvertKit();

    const modalRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<Element | null>(null);

    // Phone number input handler - only allow digits
    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/\D/g, ''); // Remove non-digits
        setPhone(value);
    };

    // Focus Trap & Escape key
    useEffect(() => {
        if (isVisible) {
            triggerRef.current = document.activeElement;
            const focusableElements = modalRef.current?.querySelectorAll<HTMLElement>(
                'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
            );
            const firstElement = focusableElements?.[0];
            const lastElement = focusableElements?.[focusableElements.length - 1];

            firstElement?.focus();

            const handleKeyDown = (e: KeyboardEvent) => {
                if (e.key === 'Escape') {
                    handleClose();
                }
                if (e.key === 'Tab' && focusableElements) {
                    if (e.shiftKey) { // Shift+Tab
                        if (document.activeElement === firstElement) {
                            lastElement?.focus();
                            e.preventDefault();
                        }
                    } else { // Tab
                        if (document.activeElement === lastElement) {
                            firstElement?.focus();
                            e.preventDefault();
                        }
                    }
                }
            };
            
            window.addEventListener('keydown', handleKeyDown);
            return () => {
                window.removeEventListener('keydown', handleKeyDown);
                (triggerRef.current as HTMLElement)?.focus();
            };
        }
    }, [isVisible, onClose]);
    
    const validate = (cleanData: { name: string; email: string; phone: string; experience: string }) => {
        const newErrors: { name?: string; phone?: string; email?: string; experience?: string } = {};
        
        // Validate sanitized data
        if (!cleanData.name.trim()) newErrors.name = "Name is required.";
        if (!/^\d{10}$/.test(cleanData.phone)) newErrors.phone = "Please enter a valid 10-digit phone number.";
        if (!validateEmail(cleanData.email)) newErrors.email = "Please enter a valid email address.";
        if (!cleanData.experience) newErrors.experience = "Please select your experience level.";
        
        // Additional length validations for security
        if (cleanData.name.length > 100) newErrors.name = "Name is too long.";
        if (cleanData.email.length > 254) newErrors.email = "Email is too long.";
        if (cleanData.phone.length > 15) newErrors.phone = "Phone number is too long.";
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const resetForm = () => {
        setName('');
        setPhone('');
        setEmail('');
        setExperience('');
        setErrors({});
        setIsSubmitting(false);
    }

    const handleClose = () => {
        if (isLoading) return;
        resetForm();
        onClose();
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        // Prevent double submission and rate limiting (min 5 seconds between submissions)
        const now = Date.now();
        if (isSubmitting || isLoading || (now - lastSubmissionTime < 5000)) {
            if (now - lastSubmissionTime < 5000) {
                setErrors({ experience: "Please wait before submitting again." });
            }
            return;
        }
        setIsSubmitting(true);
        setLastSubmissionTime(now);

        try {
            // Sanitize all inputs before validation
            const cleanData = {
                name: sanitizeInput(name),
                email: sanitizeInput(email),
                phone: sanitizeInput(phone),
                experience: sanitizeInput(experience)
            };

            // Validate sanitized data
            if (!validate(cleanData)) {
                setIsSubmitting(false);
                return;
            }
            
            // Check environment variables
            const formId = import.meta.env.VITE_CONVERTKIT_FORM_ID;
            const apiKey = import.meta.env.VITE_CONVERTKIT_API_KEY;

            if (!formId || !apiKey) {
                console.error("ConvertKit credentials not found. Make sure VITE_CONVERTKIT_FORM_ID and VITE_CONVERTKIT_API_KEY are set in your .env file.");
                setErrors({ experience: "Service temporarily unavailable. Please try again later." });
                setIsSubmitting(false);
                return;
            }

            // Submit with sanitized data
            await subscribeToForm({
                formId,
                apiKey,
                email: cleanData.email,
                name: cleanData.name,
                fields: {
                    phone: cleanData.phone,
                    experience: cleanData.experience,
                },
            });
        } catch (submitError) {
            console.error('Form submission error:', submitError);
            setErrors({ experience: "Failed to submit form. Please try again." });
        } finally {
            setIsSubmitting(false);
        }
    };

    useEffect(() => {
        if (isSuccess) {
            const timer = setTimeout(() => {
                handleClose();
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [isSuccess]);
    
    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center px-6 py-8 sm:p-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={handleClose}
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="dialog-title"
                >
                    <motion.div
                        ref={modalRef}
                        className="bg-slate-800 rounded-xl p-4 sm:p-6 md:p-8 max-w-sm sm:max-w-md w-full border border-slate-700"
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {isSuccess ? (
                            <div className="text-center py-8">
                                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 300, damping: 20 }}>
                                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                                </motion.div>
                                <h3 id="dialog-title" className="text-2xl font-bold text-white">Thank You!</h3>
                                <p className="text-slate-300 mt-2">Our team will contact you shortly.</p>
                            </div>
                        ) : (
                            <>
                                <div className="flex justify-between items-center mb-4">
                                    <h3 id="dialog-title" className="text-xl font-bold text-yellow-400">Request a Free Consultation</h3>
                                    <button
                                        onClick={handleClose}
                                        className="p-1 hover:bg-slate-700 rounded-full"
                                        aria-label="Close modal"
                                    >
                                        <X className="w-5 h-5 text-slate-400" />
                                    </button>
                                </div>
                                <p className="text-sm text-slate-400 mb-6">
                                    Our team will call you within 24 hours to understand your goals and answer your questions. No pressure to enroll.
                                </p>
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div>
                                        <label htmlFor="name" className="sr-only">Your Name</label>
                                        <input
                                            id="name"
                                            type="text"
                                            placeholder="Your Name"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            maxLength={100}
                                            autoComplete="name"
                                            className={`w-full px-4 py-3 bg-slate-700 rounded-lg focus:outline-none focus:ring-2 text-white ${errors.name ? 'ring-red-500' : 'focus:ring-yellow-400'}`}
                                            aria-invalid={!!errors.name}
                                            aria-describedby={errors.name ? "name-error" : undefined}
                                        />
                                        {errors.name && <p id="name-error" className="text-red-500 text-xs mt-1">{errors.name}</p>}
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="sr-only">Email Address</label>
                                        <input
                                            id="email"
                                            type="email"
                                            placeholder="Email Address"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            maxLength={254}
                                            autoComplete="email"
                                            className={`w-full px-4 py-3 bg-slate-700 rounded-lg focus:outline-none focus:ring-2 text-white ${errors.email ? 'ring-red-500' : 'focus:ring-yellow-400'}`}
                                            aria-invalid={!!errors.email}
                                            aria-describedby={errors.email ? "email-error" : undefined}
                                        />
                                        {errors.email && <p id="email-error" className="text-red-500 text-xs mt-1">{errors.email}</p>}
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="sr-only">WhatsApp Number</label>
                                        <input
                                            id="phone"
                                            type="tel"
                                            inputMode="tel"
                                            placeholder="WhatsApp Number"
                                            value={phone}
                                            onChange={handlePhoneChange}
                                            maxLength={15}
                                            autoComplete="tel"
                                            pattern="[0-9]*"
                                            className={`w-full px-4 py-3 bg-slate-700 rounded-lg focus:outline-none focus:ring-2 text-white ${errors.phone ? 'ring-red-500' : 'focus:ring-yellow-400'}`}
                                            aria-invalid={!!errors.phone}
                                            aria-describedby={errors.phone ? "phone-error" : undefined}
                                        />
                                        {errors.phone && <p id="phone-error" className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                                    </div>
                                    <div>
                                        <label htmlFor="experience" className="sr-only">Your Trading Experience?</label>
                                        <select
                                            id="experience"
                                            value={experience}
                                            onChange={(e) => setExperience(e.target.value)}
                                            className={`w-full px-4 py-3 bg-slate-700 rounded-lg focus:outline-none focus:ring-2 text-white appearance-none ${errors.experience ? 'ring-red-500' : 'focus:ring-yellow-400'}`}
                                            aria-invalid={!!errors.experience}
                                            aria-describedby={errors.experience ? "experience-error" : undefined}
                                        >
                                            <option value="" disabled>Your Trading Experience?</option>
                                            <option>Complete Beginner</option>
                                            <option>Tried a Little, Lost Money</option>
                                            <option>Know Basics, Want to be Profitable</option>
                                        </select>
                                        {errors.experience && <p id="experience-error" className="text-red-500 text-xs mt-1">{errors.experience}</p>}
                                    </div>
                                    {error && <p className="text-red-500 text-xs text-center">{error}</p>}
                                    <button
                                        type="submit"
                                        className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-slate-900 py-3 rounded-lg font-bold hover:from-yellow-600 hover:to-orange-600 transition-all flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                                        disabled={isLoading || isSubmitting}
                                    >
                                        {(isLoading || isSubmitting) ? <Loader className="animate-spin w-6 h-6" /> : 'Request a Callback'}
                                    </button>
                                </form>
                            </>
                        )}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ConsultationFormModal; 