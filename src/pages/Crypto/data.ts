import {
    Building2,
    Target,
    TrendingDown,
    TrendingUp,
    Bitcoin,
    CandlestickChart,
    Wallet,
    BarChart3,
} from 'lucide-react';
import { TrustBadge, FaqItem, HeroData } from './types';
import { getNextFirstSaturday } from './utils/dateHelpers';


export const trustBadges: TrustBadge[] = [
    {
      icon: Building2,
      text: "1,263 learners",
      color: "blue",
    },
    {
      icon: Bitcoin,
      text: "₹27.2Cr self-reported",
      color: "yellow",
    },
    {
      icon: CandlestickChart,
      text: "73% reported win rate",
      color: "green",
    },
  ];

  export const comparisonData: ComparisonItem[] = [
    { title: "Common Online Courses", icon: TrendingDown, color: "red", points: ["Pre-recorded videos only", "No live support or Q&A", "Generic strategies", "One-size-fits-all approach"] },
    { title: "What We Offer", icon: TrendingUp, color: "green", points: ["Recorded modules + monthly live Q&A", "Active community support", "Systematic trading approach", "Focus on risk management"] }
  ];

  export const problems: Problem[] = [
    { problem: "Following Unverified 'Tips'", impact: "No systematic approach to trading decisions", emotion: "📉" },
    { problem: "Learning from Random Sources", impact: "Conflicting strategies and confused approach", emotion: "🤔" },
    { problem: "No Risk Management System", impact: "Unpredictable results and stress", emotion: "📊" },
    { problem: "Lack of Community Support", impact: "Trading alone without guidance or feedback", emotion: "👥" }
  ];

  export const instructorFeatures: InstructorFeature[] = [
      {
          icon: Bitcoin,
          title: "Since 2017",
          description: "3 crashes, 2 bears, still here",
          bgColor: "bg-yellow-500/20",
          iconColor: "text-yellow-400"
      },
      {
          icon: BarChart3,
          title: "₹27.2Cr reported",
          description: "Student-reported profits",
          bgColor: "bg-green-500/20",
          iconColor: "text-green-400"
      },
       {
          icon: CandlestickChart,
          title: "73% win rate",
          description: "Sample: 1,847 trades",
          bgColor: "bg-blue-500/20",
          iconColor: "text-blue-400"
      }
  ];

  export const learningPath: LearningPhase[] = [
      {
        week: "Week 1-2",
        title: "Master the Basics",
        description: "Understanding crypto markets, setting up tools, risk management fundamentals",
        icon: Building2,
        color: "yellow"
      },
      {
        week: "Week 3-4",
        title: "Implement Proven Strategies",
        description: "Learn support/resistance, chart patterns, and entry/exit strategies",
        icon: Target,
        color: "green"
      },
      {
        week: "Week 5+",
        title: "Trade with Confidence",
        description: "Advanced techniques, backtesting strategies, building your trading plan",
        icon: TrendingUp,
        color: "blue"
      }
  ];

  export const testimonials: Testimonial[] = [ 
    { 
      name: "Rahul Sharma", 
      location: "Bangalore", 
      role: "Software Engineer at Infosys", 
      age: "28", 
      profit: "₹1.5 Lakhs", 
      time: "3 months", 
      quoteHeadline: "₹10K → ₹1.5L in BTC/ETH trades", 
      quoteBody: "Lost ₹50K to Instagram gurus before. This course saved my trading career. Clear signals, no guesswork.", 
      highlight: "73% reported win rate on sample of 47 trades", 
      rating: 5, 
      image: "https://d2j3cl693ttatt.cloudfront.net/assets/images/student-1.jpg", 
      isVerified: true, 
      verificationDate: "Verified Nov 2024" 
    }, 
    { 
      name: "Priya Patel", 
      location: "Mumbai", 
      role: "CA at Big 4", 
      age: "32", 
      profit: "₹2.3 Lakhs", 
      time: "4 months", 
      quoteHeadline: "₹2.3L profit with 2hr evening trading", 
      quoteBody: "CA job + crypto profits = financial freedom. The risk management saved me from March crash.", 
      highlight: "Caught SOL pump: +340%", 
      rating: 5, 
      image: "https://d2j3cl693ttatt.cloudfront.net/assets/images/student-2.jpg", 
      isVerified: true, 
      verificationDate: "Verified Oct 2024" 
    }, 
    { 
      name: "Dr. Amit Kumar", 
      location: "Delhi", 
      role: "MBBS Doctor", 
      age: "35", 
      profit: "₹3.1 Lakhs", 
      time: "5 months", 
      quoteHeadline: "Doctor earns ₹3.1L between surgeries", 
      quoteBody: "Mobile trading during breaks. Lost money on YouTube strategies before. This actually works.", 
      highlight: "Weekly profits: ₹15-25K", 
      rating: 5, 
      image: "https://d2j3cl693ttatt.cloudfront.net/assets/images/student-3.jpg", 
      isVerified: true, 
      verificationDate: "Verified Dec 2024" 
    },
    { 
      name: "Sneha Agarwal", 
      location: "Pune", 
      role: "Marketing Manager at TCS", 
      age: "29", 
      profit: "₹1.8 Lakhs", 
      time: "4 months", 
      quoteHeadline: "TCS manager hits ₹1.8L in altcoins", 
      quoteBody: "Stop-loss saved ₹80K during Luna crash. Now I spot pumps BEFORE they happen.", 
      highlight: "Turned ₹25K → ₹1.8L", 
      rating: 5, 
      image: "https://d2j3cl693ttatt.cloudfront.net/assets/images/student-4.jpg", 
      isVerified: true, 
      verificationDate: "Verified Jan 2025" 
    },
    { 
      name: "Vikash Singh", 
      location: "Hyderabad", 
      role: "Business Analyst at Wipro", 
      age: "26", 
      profit: "₹95,000", 
      time: "2 months", 
      quoteHeadline: "Wipro analyst: ₹10K → ₹95K (2 months)", 
      quoteBody: "Was losing daily before. Now I follow the system: scan, trade, profit. That simple.", 
      highlight: "First profit: Day 11", 
      rating: 5, 
      image: "https://d2j3cl693ttatt.cloudfront.net/assets/images/student-5.jpg", 
      isVerified: true, 
      verificationDate: "Verified Dec 2024" 
    },
    { 
      name: "Anjali Mehta", 
      location: "Ahmedabad", 
      role: "Banking Professional", 
      age: "31", 
      profit: "₹2.7 Lakhs", 
      time: "6 months", 
      quoteHeadline: "Better returns than my bank's investment products!", 
      quoteBody: "Working in banking, I was skeptical about crypto. This course made me a believer with solid strategies.", 
      highlight: "Renovated parents' house", 
      rating: 5, 
      image: "https://d2j3cl693ttatt.cloudfront.net/assets/images/student-6.jpg", 
      isVerified: true, 
      verificationDate: "Verified Nov 2024" 
    },
    { 
      name: "Rohit Gupta", 
      location: "Noida", 
      role: "IT Consultant", 
      age: "33", 
      profit: "₹4.2 Lakhs", 
      time: "7 months", 
      quoteHeadline: "Crossed ₹4L profit milestone!", 
      quoteBody: "The advanced strategies in the course helped me scale beyond basic trading. Truly life-changing.", 
      highlight: "Started home loan prepayment", 
      rating: 5, 
      image: "https://d2j3cl693ttatt.cloudfront.net/assets/images/student-7.jpg", 
      isVerified: true, 
      verificationDate: "Verified Oct 2024" 
    },
    { 
      name: "Kavita Rao", 
      location: "Chennai", 
      role: "HR Manager at Cognizant", 
      age: "30", 
      profit: "₹1.3 Lakhs", 
      time: "3 months", 
      quoteHeadline: "Perfect side income for working professionals.", 
      quoteBody: "Balancing full-time job and trading seemed impossible. This course made it manageable and profitable.", 
      highlight: "Enrolled daughter in international school", 
      rating: 5, 
      image: "https://d2j3cl693ttatt.cloudfront.net/assets/images/student-8.jpg", 
      isVerified: true, 
      verificationDate: "Verified Jan 2025" 
    },
    { 
      name: "Manish Jain", 
      location: "Jaipur", 
      role: "Chartered Accountant", 
      age: "34", 
      profit: "₹2.9 Lakhs", 
      time: "5 months", 
      quoteHeadline: "My accounting background helped me appreciate the strategy depth.", 
      quoteBody: "The technical analysis combined with fundamental insights is what sets this course apart from others.", 
      highlight: "Invested in new CA practice office", 
      rating: 5, 
      image: "https://d2j3cl693ttatt.cloudfront.net/assets/images/student-9.jpg", 
      isVerified: true, 
      verificationDate: "Verified Dec 2024" 
    },
    { 
      name: "Deepak Verma", 
      location: "Lucknow", 
      role: "Government Employee", 
      age: "37", 
      profit: "₹1.6 Lakhs", 
      time: "4 months", 
      quoteHeadline: "Government salary + crypto profits = Financial freedom!", 
      quoteBody: "Never thought government employees could succeed in crypto. This course proved me wrong completely.", 
      highlight: "Planning child's higher education abroad", 
      rating: 5, 
      image: "https://d2j3cl693ttatt.cloudfront.net/assets/images/student-10.jpg", 
      isVerified: true, 
      verificationDate: "Verified Nov 2024" 
    }
  ];

  export const benefits: Benefit[] = [
    {item: "Lifetime Access to Recorded Modules", value: "₹80,000"},
    {item: "Monthly Live Q&A Sessions", value: "₹50,000"},
    {item: "24/7 Private Community Support", value: "₹15,000"},
    {item: "Bonus: Pro Trading Tools & Checklists", value: "₹10,000"},
    {item: "Bonus: Risk Management Templates", value: "₹15,000"},
];


export const uniqueMechanismData = {
    headline: "The 2-Hour Skillstack (7–9 PM)",
    subheadline: "",
    features: [
        {
            letter: "1",
            title: "Define risk first",
            description: "Invalidation and position size set before entry"
        },
        {
            letter: "2",
            title: "Scan with checklist",
            description: "Shortlist 3–5 clean setups"
        },
        {
            letter: "3",
            title: "Plan entries/exits",
            description: "Rules for partials and stops, not gut feel"
        },
        {
            letter: "4",
            title: "Execute with alerts",
            description: "Place orders; manage by exception"
        },
        {
            letter: "5",
            title: "Review & journal",
            description: "Weekly refinement tightens the system"
        }
    ],
    proof: ""
};

export const pricing = {
    totalValue: "₹1,70,000",
    currentPrice: "₹19,499",
    savings: "₹1,50,501",
    dailyCost: "₹54",
    emiAmount: "₹1,625",
    emiMonths: 12,
    nextBatchPrice: "₹24,999"
  };

export const urgencyData = {
    priceIncrease: {
        newPrice: "₹24,999",
        date: getNextFirstSaturday()
    },
    nextLiveQA: getNextFirstSaturday(),
    bonusDeadline: "Next 48 hours only",
    bonusDescription: "Advanced Bot Trading Module",
    bonusValue: "₹15,000"
};

export const guarantees = {
    moneyBack: {
        period: "30-Day Satisfaction Guarantee",
        condition: "Go through the first 4 modules and exercises. If it's not worth it, email support within 30 days for a full refund. No hidden conditions."
    },
    support: {
        type: "Lifetime",
        includes: "Monthly Q&A sessions, community access, and all future updates"
    },
    results: {
        claim: "Student satisfaction",
        verified: "Based on student feedback and course completion rates"
    }
};



export const faqs: FaqItem[] = [
    {
        q: "Live or recorded?",
        a: "Recorded program + one monthly live Q&A (recordings provided). Learn at your pace, then join live sessions for doubt-solving and trade reviews."
    },
    {
        q: "Legal in India?",
        a: "Trading on compliant platforms is permitted. Education only; no tips. We teach methods and risk control, not specific token recommendations."
    },
    {
        q: "Taxes basics?",
        a: "We include a beginner primer + CA resources. Generally 30% tax + 1% TDS on transactions above ₹10,000. Consult a tax professional."
    },
    {
        q: "Exchange risk/self-custody?",
        a: "Counterparty risk exists; we include a self-custody primer & risk checklist. Learn to minimize exchange exposure and protect your assets properly."
    },
    {
        q: "Mobile vs laptop?",
        a: "Both taught; laptop preferred for analysis. Many students trade successfully on mobile. We cover apps and tools for both platforms."
    },
    {
        q: "If I miss the live Q&A?",
        a: "Recording + written summary provided. All live sessions are recorded so you never miss important insights or trade reviews."
    }
];

export const heroData: HeroData = {
    headline: {
        line1: "Make crypto your",
        line2: "2-hour evening skill",
        line3: ""
    },
    description: {
        part1: "A step-by-step recorded system for busy professionals,",
        highlight1: "with monthly live Q&A",
        part2: "for",
        highlight2: "doubt-solving and trade reviews.",
        part3: ""
    },
    enrollmentStats: {
        count: "1,263",
        text: "students enrolled"
    },
    features: [
        { icon: CandlestickChart, text: "Rule #1: Invalidation first", subtext: "Exit before entry", color: "green" },
        { icon: Wallet, text: "Journal framework included", subtext: "Track & improve daily", color: "blue" }
    ],
    stats: [
        { value: "₹27.2Cr", label: "Student Reports", color: "slate" },
        { value: "1,263", label: "Active Learners", color: "yellow" },
        { value: "73%", label: "Win Rate", color: "blue" }
    ],
    video: {
        thumbnail: "https://d2j3cl693ttatt.cloudfront.net/assets/images/-crypto-market-mastery-tws.jpeg",
        title: "Uncut trade review: ₹2.3L example",
        subtitle: "Watch how we analyze winning trades"
    },
    badges: {
        top: "INSTANT ACCESS",
        bottom: "Recorded + Monthly Live Q&A"
    },
    microNote: "Education only. Results vary. Trading involves risk.",
    cta: {
        primary: "Start my 2-hour skill today",
        secondary: "See verified student results"
    }
}; 