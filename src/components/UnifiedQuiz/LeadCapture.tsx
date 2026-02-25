import React, { useState, useRef } from 'react';
import { ArrowRight, Lock, ChevronDown } from 'lucide-react';
import type { ProfileField } from './types';
import ProfileCard from './ProfileCard';

const countryCodes = [
  { code: '+91', country: 'IN', label: '🇮🇳 +91', minLen: 10, maxLen: 10 },
  { code: '+971', country: 'AE', label: '🇦🇪 +971', minLen: 9, maxLen: 9 },
  { code: '+966', country: 'SA', label: '🇸🇦 +966', minLen: 9, maxLen: 9 },
  { code: '+974', country: 'QA', label: '🇶🇦 +974', minLen: 8, maxLen: 8 },
  { code: '+968', country: 'OM', label: '🇴🇲 +968', minLen: 8, maxLen: 8 },
  { code: '+1', country: 'US', label: '🇺🇸 +1', minLen: 10, maxLen: 10 },
  { code: '+44', country: 'GB', label: '🇬🇧 +44', minLen: 10, maxLen: 10 },
  { code: '+65', country: 'SG', label: '🇸🇬 +65', minLen: 8, maxLen: 8 },
  { code: '+61', country: 'AU', label: '🇦🇺 +61', minLen: 9, maxLen: 9 },
  { code: '+60', country: 'MY', label: '🇲🇾 +60', minLen: 9, maxLen: 10 },
] as const;

interface LeadCaptureProps {
  profileFields: ProfileField[];
  onSubmit: (name: string, phone: string) => void;
}

const LeadCapture: React.FC<LeadCaptureProps> = ({ profileFields, onSubmit }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [countryCode, setCountryCode] = useState('+91');
  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({});
  const submitRef = useRef<HTMLButtonElement>(null);

  const selectedCountry = countryCodes.find(c => c.code === countryCode) || countryCodes[0];

  const validatePhone = (value: string): boolean => {
    const cleaned = value.replace(/\D/g, '');
    if (countryCode === '+91') {
      return cleaned.length === 10 && /^[6-9]/.test(cleaned);
    }
    return cleaned.length >= selectedCountry.minLen && cleaned.length <= selectedCountry.maxLen;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { name?: string; phone?: string } = {};

    if (!name.trim() || name.trim().length < 2) {
      newErrors.name = 'Please enter your name';
    }
    if (!validatePhone(phone)) {
      const len = selectedCountry.minLen === selectedCountry.maxLen
        ? `${selectedCountry.minLen}-digit`
        : `${selectedCountry.minLen}–${selectedCountry.maxLen} digit`;
      newErrors.phone = `Enter a valid ${len} mobile number`;
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    const cleanDigits = phone.replace(/\D/g, '');
    onSubmit(name.trim(), `${countryCode}${cleanDigits}`);
  };

  // Scroll submit button into view when phone field is focused (mobile keyboard)
  const handlePhoneFocus = () => {
    setTimeout(() => {
      submitRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 350);
  };

  return (
    <div className="animate-[fadeIn_0.5s_ease-out]">
      <div className="text-center mb-8">
        <div className="w-12 h-12 rounded-full bg-burnt-amber/10 flex items-center justify-center mx-auto mb-4">
          <Lock className="w-5 h-5 text-burnt-amber/70" />
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-white font-sans mb-2">
          Your profile is ready
        </h2>
        <p className="text-sm text-soft-sand/60 font-sans">
          We&apos;ve matched you with the perfect program. Enter your details to unlock your result.
        </p>
      </div>

      <div className="mb-8 sm:max-w-xs sm:mx-auto">
        <ProfileCard fields={profileFields} />
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="quiz-name" className="sr-only">Your Name (required)</label>
          <input
            id="quiz-name"
            type="text"
            value={name}
            onChange={(e) => { setName(e.target.value); setErrors(prev => ({ ...prev, name: undefined })); }}
            placeholder="Your Name"
            required
            aria-required="true"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
            autoComplete="name"
            autoCapitalize="words"
            className={`w-full min-h-[52px] bg-white/[0.05] border ${errors.name ? 'border-red-400/50' : 'border-white/[0.08]'} rounded-xl px-5 py-4 text-white font-sans text-base placeholder:text-soft-sand/50 focus:outline-none focus:border-burnt-amber/40 focus:ring-1 focus:ring-burnt-amber/20 transition-[border-color,box-shadow] duration-200`}
          />
          {errors.name && (
            <p id="name-error" role="alert" className="text-[12px] text-red-400 font-sans mt-1.5 ml-1">{errors.name}</p>
          )}
        </div>

        <div>
          <div className="flex gap-2">
            <div className="relative shrink-0">
              <label htmlFor="quiz-country" className="sr-only">Country code</label>
              <select
                id="quiz-country"
                value={countryCode}
                onChange={(e) => { setCountryCode(e.target.value); setErrors(prev => ({ ...prev, phone: undefined })); }}
                aria-label="Country code"
                className={`appearance-none min-h-[52px] w-[88px] bg-white/[0.05] border ${errors.phone ? 'border-red-400/50' : 'border-white/[0.08]'} rounded-xl pl-3 pr-7 py-4 text-white font-sans text-base focus:outline-none focus:border-burnt-amber/40 focus:ring-1 focus:ring-burnt-amber/20 transition-[border-color,box-shadow] duration-200 cursor-pointer`}
              >
                {countryCodes.map(c => (
                  <option key={c.code} value={c.code} className="bg-deep-slate text-white">
                    {c.label}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-soft-sand/50 pointer-events-none" />
            </div>
            <label htmlFor="quiz-phone" className="sr-only">WhatsApp Number (required)</label>
            <input
              id="quiz-phone"
              type="tel"
              inputMode="numeric"
              value={phone}
              onChange={(e) => {
                const digits = e.target.value.replace(/\D/g, '');
                if (digits.length <= selectedCountry.maxLen) {
                  setPhone(digits);
                  setErrors(prev => ({ ...prev, phone: undefined }));
                }
              }}
              onFocus={handlePhoneFocus}
              placeholder="WhatsApp Number"
              required
              aria-required="true"
              aria-invalid={!!errors.phone}
              aria-describedby={errors.phone ? "phone-error" : undefined}
              autoComplete="tel-national"
              className={`flex-1 min-w-0 min-h-[52px] bg-white/[0.05] border ${errors.phone ? 'border-red-400/50' : 'border-white/[0.08]'} rounded-xl px-5 py-4 text-white font-sans text-base placeholder:text-soft-sand/50 focus:outline-none focus:border-burnt-amber/40 focus:ring-1 focus:ring-burnt-amber/20 transition-[border-color,box-shadow] duration-200`}
            />
          </div>
          {errors.phone && (
            <p id="phone-error" role="alert" className="text-[12px] text-red-400 font-sans mt-1.5 ml-1">{errors.phone}</p>
          )}
        </div>

        <button
          ref={submitRef}
          type="submit"
          className="w-full group relative flex items-center justify-center gap-2 bg-burnt-amber text-white rounded-xl px-6 py-4 min-h-[52px] text-base font-bold font-sans transition-[background-color,opacity] duration-200 active:opacity-85 overflow-hidden"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-burnt-amber to-[#d4843f] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <span className="relative z-10 flex items-center gap-2">
            Unlock My Result
            <ArrowRight className="w-5 h-5 shrink-0 group-hover:translate-x-0.5 transition-transform duration-200" />
          </span>
        </button>
      </form>

      <p className="text-[11px] text-soft-sand/50 font-sans text-center mt-4 flex items-center justify-center gap-1.5">
        <Lock className="w-3 h-3" />
        We&apos;ll send your plan on WhatsApp. No spam. Unsubscribe anytime.
      </p>
    </div>
  );
};

export default LeadCapture;
