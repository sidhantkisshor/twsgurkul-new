import type { QuizQuestion, MicroInsightPool, ProgramResult, ResultMessage, ResultTestimonial } from './types';

export const questions: QuizQuestion[] = [
  {
    id: 'experience',
    text: 'Be honest - where are you right now?',
    subtext: 'No judgment. 67% of our most successful students started as beginners.',
    options: [
      { label: "I've never traded (and I'm nervous about it)", value: 'beginner', score: 0, profileLabel: 'Starting Fresh' },
      { label: "I've traded but lost more than I've made", value: 'losses', score: 1, profileLabel: 'Ready to Fix' },
      { label: "I'm profitable sometimes, but it's inconsistent", value: 'inconsistent', score: 2, profileLabel: 'Ready to Scale' },
      { label: "I'm profitable - I want an institutional edge", value: 'advanced', score: 3, profileLabel: 'Advanced Trader' },
    ],
  },
  {
    id: 'capital',
    text: 'How much can you put to work - without losing sleep?',
    subtext: '₹10K or ₹10L - there\'s a path for both.',
    options: [
      { label: '₹10K – ₹50K (I want to test the waters)', value: 'under_50k', score: 0, profileLabel: '₹10K–₹50K' },
      { label: '₹50K – ₹2L (I\'m serious but careful)', value: '50k_2l', score: 1, profileLabel: '₹50K–₹2L' },
      { label: '₹2L – ₹10L (Ready to commit)', value: '2l_10l', score: 2, profileLabel: '₹2L–₹10L' },
      { label: '₹10L+ (I want professional-grade results)', value: 'above_10l', score: 3, profileLabel: '₹10L+' },
    ],
  },
  {
    id: 'time',
    text: 'Realistically, how much time do you have after work?',
    subtext: 'Our most popular program only needs 2 hours in the evening.',
    options: [
      { label: '30 min/day max (just lunch break)', value: 'minimal', score: 0, profileLabel: '30 min/day' },
      { label: '1–2 hours in the evening', value: 'evening', score: 1, profileLabel: '1–2 hrs/evening' },
      { label: '3–4 hours (I\'ll make time)', value: 'dedicated', score: 2, profileLabel: '3–4 hrs/day' },
      { label: 'Full-time - I\'m going all in', value: 'fulltime', score: 3, profileLabel: 'Full-time' },
    ],
  },
  {
    id: 'fear',
    text: 'What scares you most about trading?',
    subtext: 'Your answer determines which support system we build for you.',
    options: [
      { label: 'Losing my hard-earned savings', value: 'loss', profileLabel: 'Capital Protection' },
      { label: 'Getting scammed by fake gurus', value: 'scam', profileLabel: 'Verified System' },
      { label: 'Spending months and making zero progress', value: 'stagnation', profileLabel: 'Fast Results' },
      { label: 'Not knowing when to exit a trade', value: 'exits', profileLabel: 'Clear Exit Rules' },
    ],
  },
  {
    id: 'goal',
    text: 'What does success look like for you in 6 months?',
    subtext: 'Be specific. We\'ll hold you to it.',
    options: [
      { label: 'Extra ₹50K–1L/month alongside my job', value: 'side_income', profileLabel: 'Side Income' },
      { label: 'Replace my salary completely', value: 'freedom', profileLabel: 'Full Freedom' },
      { label: 'Build serious wealth over time', value: 'wealth', profileLabel: 'Wealth Building' },
      { label: 'Recover what I\'ve already lost, then grow', value: 'recovery', profileLabel: 'Recovery Path' },
    ],
  },
];

export const microInsights: MicroInsightPool = {
  experience: {
    beginner: [
      '67% of our top earners were complete beginners',
      'Beginners actually learn faster - no bad habits to unlearn',
      'Our youngest millionaire student started with zero experience',
    ],
    losses: [
      'Most traders lose money without a system - you\'re not alone',
      '83% of students who were losing now trade profitably',
      'The #1 fix? A rule-based system that removes emotion',
    ],
    inconsistent: [
      'Inconsistency usually means good instincts, no system',
      'Students at your level see results in the first 30 days',
      'One framework change can make inconsistent traders consistent',
    ],
    advanced: [
      'Only 8% of quiz takers are at your level',
      'Advanced traders benefit most from institutional order flow',
      'Our top earner was already profitable - now he makes ₹25L/mo',
    ],
  },
  capital: {
    under_50k: [
      'You can absolutely start with ₹10K - 40% of students do',
      'Small capital = low risk while you learn the system',
      'Our best ROI students started with under ₹50K',
    ],
    '50k_2l': [
      'Average student with your capital earns ₹87K in month 1',
      'This is the sweet spot - enough to trade, low enough to sleep well',
      '₹50K–₹2L is our most common starting range',
    ],
    '2l_10l': [
      'With ₹2L+, you can access higher-probability setups',
      '73% of students in this range upgrade their capital within 30 days',
      'Serious capital + a system = serious results',
    ],
    above_10l: [
      'At ₹10L+, institutional-grade strategies unlock',
      'Our Elite Mentorship is designed for capital at your level',
      'Professional capital deserves professional systems',
    ],
  },
  time: {
    minimal: [
      'Even 30 min/day works - if you have the right alerts',
      'Many students trade on their lunch break profitably',
      'Quality of analysis > quantity of screen time',
    ],
    evening: [
      'The 7–9 PM window is when most of our students trade',
      '2 hours/evening is the #1 time commitment among profitable students',
      'Evening trading fits perfectly with a 9-to-5 job',
    ],
    dedicated: [
      'With 3–4 hours, you can run multiple strategies simultaneously',
      'Dedicated time = faster results. Simple math.',
      'Students with your time commitment see results 40% faster',
    ],
    fulltime: [
      'Full-time commitment unlocks the highest earning potential',
      'Our top earners all went full-time within 6 months',
      'You\'re ready for the most intensive program we offer',
    ],
  },
  fear: {
    loss: [
      'Every strategy we teach starts with "define your risk first"',
      'Our #1 rule: never risk more than 2% on a single trade',
      'Capital protection is built into every lesson',
    ],
    scam: [
      'Sidhant trades live every day - you can watch and verify',
      '₹100 Cr+ in verified student profits. Not screenshots - real P&L',
      '7-day refund policy if less than 20% of course content accessed.',
    ],
    stagnation: [
      'Our structured timeline means measurable progress every week',
      'Students see their first profit within 30 days, or money back',
      'No theory dumps. You trade from week 1.',
    ],
    exits: [
      'Every trade has a pre-defined exit BEFORE you enter',
      'Rule-based exits remove the "should I hold?" anxiety completely',
      'Our system tells you exactly when to get out - up or down',
    ],
  },
  goal: {
    side_income: [
      '₹50K–1L/month is our most common student outcome',
      'Most students achieve this within 30–60 days',
      'Side income from trading + your salary = financial safety net',
    ],
    freedom: [
      '23% of our graduates eventually left their 9-to-5',
      'Salary replacement typically happens at month 4–6',
      'Financial freedom starts with a skill, not a shortcut',
    ],
    wealth: [
      'Long-term wealth building is our favorite goal to support',
      'Compound growth + a system = exponential results over time',
      'Our wealthiest students all started with patience',
    ],
    recovery: [
      'Recovery is the most common first goal - and the most achievable',
      '83% of students who lost money recovered within 30 days',
      'A system turns your past losses into lessons, not regrets',
    ],
  },
};

export const programResults: ProgramResult[] = [
  {
    stage: 1,
    program: 'Crypto Mastery',
    programId: 'cmm',
    route: '/crypto',
    tagline: 'Start earning from crypto in 45 days - even as a beginner',
    metric: '₹0 → ₹1.2L/mo',
    duration: '45 days',
    students: '4,200+',
    successRate: '89%',
  },
  {
    stage: 2,
    program: 'Footprint Trading',
    programId: 'footprint',
    route: '/footprint',
    tagline: 'See where big money moves - and trade before the crowd',
    metric: '₹1L → ₹5L/mo',
    duration: '60 days',
    students: '3,800+',
    successRate: '89%',
  },
  {
    stage: 3,
    program: 'Elite Mentorship',
    programId: 'elite',
    route: '/mentorship',
    tagline: 'Trade live with Sidhant every day. Master the markets.',
    metric: '₹5L → ₹25L/mo',
    duration: '90 days',
    students: '2,847+',
    successRate: '89%',
  },
];

export const resultMessages: Record<string, Record<string, ResultMessage>> = {
  loss: {
    side_income: {
      fearBullet: 'Risk management is built into every lesson - you\'ll never risk more than you can afford to lose',
      goalBullet: 'Students with your profile earn ₹50K–1L/month within 30 days, with capital fully protected',
    },
    freedom: {
      fearBullet: 'Every trade starts with a pre-defined risk limit - your savings stay safe while you learn',
      goalBullet: 'Build income gradually until it replaces your salary - no rushing, no unnecessary risk',
    },
    wealth: {
      fearBullet: 'Wealth building starts with capital protection - Rule #1 is never lose big',
      goalBullet: 'Compound small, consistent gains over time - this is how real wealth is built',
    },
    recovery: {
      fearBullet: 'We start by fixing what caused your losses - usually emotional trading without rules',
      goalBullet: '83% of students who lost money recovered within 30 days using our system',
    },
  },
  scam: {
    side_income: {
      fearBullet: 'Sidhant trades live every day - you can verify results in real-time, not from screenshots',
      goalBullet: '₹100 Cr+ in verified student profits, with a 7-day refund policy',
    },
    freedom: {
      fearBullet: 'IIT Bombay faculty, TEDx speaker, 12+ years trading - credentials you can verify',
      goalBullet: 'A proven system from a real trader - not a course from someone who\'s never traded',
    },
    wealth: {
      fearBullet: '10,847+ students can\'t all be wrong. Verified results, real P&L statements',
      goalBullet: 'Build wealth with a system backed by ₹100 Cr+ in collective student earnings',
    },
    recovery: {
      fearBullet: 'After bad experiences with fake gurus, you deserve transparency - and we deliver it daily',
      goalBullet: 'Recover your losses with a verified, systematic approach - not more empty promises',
    },
  },
  stagnation: {
    side_income: {
      fearBullet: 'Our structured weekly milestones guarantee measurable progress from day 1',
      goalBullet: 'Week 1: learn the system. Week 4: first trades. Month 3: consistent side income',
    },
    freedom: {
      fearBullet: 'A clear 30-day roadmap with weekly checkpoints - you\'ll always know where you stand',
      goalBullet: 'Students who follow the timeline typically reach salary-replacement income by month 4–6',
    },
    wealth: {
      fearBullet: 'Every week builds on the last - no plateaus, no guesswork, no wasted time',
      goalBullet: 'Systematic progress compounds - small weekly gains turn into massive yearly returns',
    },
    recovery: {
      fearBullet: 'You won\'t spend months confused - our system gets you trading profitably within 30 days',
      goalBullet: 'Fast recovery through structured learning, not random experimentation',
    },
  },
  exits: {
    side_income: {
      fearBullet: 'Every single trade has a pre-defined exit rule - no more guessing when to sell',
      goalBullet: 'Clear exits mean consistent profits - the foundation of reliable side income',
    },
    freedom: {
      fearBullet: 'Rule-based exits eliminate the biggest source of trading anxiety permanently',
      goalBullet: 'When exits are automatic, you can scale your trading to salary-replacement level',
    },
    wealth: {
      fearBullet: 'Systematic entries AND exits - the complete system that removes all guesswork',
      goalBullet: 'Clear exit rules protect your gains and compound your wealth over time',
    },
    recovery: {
      fearBullet: 'Bad exits probably caused most of your losses - we fix that on day 1',
      goalBullet: 'With clear exit rules, you\'ll stop giving back profits and start growing your account',
    },
  },
};

export const testimonials: Record<string, ResultTestimonial> = {
  cmm: {
    name: 'Rahul S.',
    location: 'Pune',
    profession: 'IT Engineer',
    quote: 'I was terrified of losing money. Started with ₹25K, now making ₹87K/month consistently.',
    profit: '+₹87,000/month',
  },
  footprint: {
    name: 'Priya M.',
    location: 'Mumbai',
    profession: 'Data Analyst',
    quote: 'Footprint changed how I see charts. My win rate jumped from 40% to 73% in two months.',
    profit: '+₹3,50,000/month',
  },
  elite: {
    name: 'Vikram K.',
    location: 'Delhi',
    profession: 'Ex-Corporate',
    quote: 'Best investment I ever made. Quit my job after 4 months. Earning ₹8L/month now.',
    profit: '+₹8,00,000/month',
  },
};

export function calculateResult(answers: Record<string, string>): ProgramResult {
  const experienceScore = questions[0].options.find(o => o.value === answers.experience)?.score ?? 0;
  const capitalScore = questions[1].options.find(o => o.value === answers.capital)?.score ?? 0;
  const timeScore = questions[2].options.find(o => o.value === answers.time)?.score ?? 0;
  const total = experienceScore + capitalScore + timeScore;

  if (total >= 7) return programResults[2]; // Elite
  if (total >= 4) return programResults[1]; // Footprint
  return programResults[0]; // Crypto
}

export function getResultBullets(fear: string, goal: string, timePeriod: string): string[] {
  const messages = resultMessages[fear]?.[goal];
  if (!messages) {
    return [
      'A proven system built for traders at your exact level',
      'Join 10,847+ students who transformed their trading',
    ];
  }

  const timeMap: Record<string, string> = {
    minimal: 'Works even with just 30 minutes a day - we\'ll show you how',
    evening: 'Designed for the 7–9 PM window - perfect for your schedule',
    dedicated: 'With 3–4 hours, you\'ll progress faster than 80% of students',
    fulltime: 'Full-time focus means you\'ll see results in half the usual time',
  };

  return [
    messages.fearBullet,
    messages.goalBullet,
    timeMap[timePeriod] || 'Fits your schedule with flexible learning',
  ];
}

export function getRandomInsight(questionId: string, optionValue: string): string {
  const pool = microInsights[questionId]?.[optionValue];
  if (!pool || pool.length === 0) return '';
  return pool[Math.floor(Math.random() * pool.length)];
}
