import {
    Building2,
    Bitcoin,
    CandlestickChart,
    Wallet,
    BarChart3,
    Calendar,
} from 'lucide-react';
import { TrustBadge, FaqItem, HeroData, Problem, InstructorFeature, Testimonial } from './types';


export const trustBadges: TrustBadge[] = [
    {
      icon: Building2,
      text: "1,263 learners",
      color: "blue",
    },
    {
      icon: Bitcoin,
      text: "₹27.2 Cr self-reported",
      color: "yellow",
    },
    {
      icon: CandlestickChart,
      text: "73% reported win rate",
      color: "green",
    },
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
          bgColor: "bg-[#0A8D7A]/10",
          iconColor: "text-[#0A8D7A]"
      },
      {
          icon: BarChart3,
          title: "₹27.2 Cr reported",
          description: "Student-reported profits",
          bgColor: "bg-[#0A8D7A]/10",
          iconColor: "text-[#0A8D7A]"
      },
       {
          icon: CandlestickChart,
          title: "73% win rate",
          description: "Sample: 1,847 trades",
          bgColor: "bg-[#0A8D7A]/10",
          iconColor: "text-[#0A8D7A]"
      }
  ];

  export const testimonials: Testimonial[] = [
    {
      name: "Rahul Sharma",
      location: "Bangalore",
      role: "Software Engineer",
      age: "28",
      profit: "₹1.5 Lakhs",
      time: "3 months",
      quoteHeadline: "The risk management module alone was worth it",
      quoteBody: "Lost ₹50K following random Telegram tips before joining. The systematic approach here is completely different — I actually understand why I enter and exit trades now.",
      highlight: "Win rate improved from ~30% to 68%",
      rating: 5,
      image: "https://d2j3cl693ttatt.cloudfront.net/assets/images/student-1.jpg",
      isVerified: true,
      verificationDate: "Verified Nov 2024"
    },
    {
      name: "Priya Patel",
      location: "Mumbai",
      role: "Chartered Accountant",
      age: "32",
      profit: "₹2.3 Lakhs",
      time: "4 months",
      quoteHeadline: "Finally a course that teaches process, not just signals",
      quoteBody: "The 2-hour evening routine fits my CA schedule perfectly. Stop-losses saved me during the March correction — would have lost ₹80K without them.",
      highlight: "Consistent since month 2",
      rating: 5,
      image: "https://d2j3cl693ttatt.cloudfront.net/assets/images/student-2.jpg",
      isVerified: true,
      verificationDate: "Verified Oct 2024"
    },
    {
      name: "Amit Kumar",
      location: "Delhi",
      role: "Doctor (MBBS)",
      age: "35",
      profit: "₹42,000",
      time: "3 months",
      quoteHeadline: "Slow start, but the system works if you follow it",
      quoteBody: "First month was rough — I kept breaking rules. Once I stuck to the checklist and journaling, things clicked. Not life-changing money yet, but I'm consistently profitable now.",
      highlight: "Breakeven month 1, profitable since month 2",
      rating: 4,
      image: "https://d2j3cl693ttatt.cloudfront.net/assets/images/student-3.jpg",
      isVerified: true,
      verificationDate: "Verified Dec 2024"
    },
    {
      name: "Sneha Agarwal",
      location: "Pune",
      role: "Marketing Manager",
      age: "29",
      profit: "₹1.8 Lakhs",
      time: "4 months",
      quoteHeadline: "Stop-loss discipline saved me during the crash",
      quoteBody: "I was nervous entering crypto but the risk-first approach made it manageable. Still had losing weeks, but the system keeps losses small and lets winners run.",
      highlight: "Best month: ₹72K",
      rating: 5,
      image: "https://d2j3cl693ttatt.cloudfront.net/assets/images/student-4.jpg",
      isVerified: true,
      verificationDate: "Verified Jan 2025"
    },
    {
      name: "Vikash Singh",
      location: "Hyderabad",
      role: "Business Analyst",
      age: "26",
      profit: "₹95,000",
      time: "2 months",
      quoteHeadline: "Journal system is underrated — that's where the real learning is",
      quoteBody: "Was losing daily before joining. The scanning checklist alone cut my bad trades by half. Still learning the advanced modules but already seeing results.",
      highlight: "First profitable week: Week 3",
      rating: 4,
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
      quoteHeadline: "Skeptical banker converted — the data speaks for itself",
      quoteBody: "Working in banking, I needed to see the numbers. The methodology transparency and journal tracking convinced me. 6 months in, the compounding is real.",
      highlight: "Most consistent: BTC/ETH pairs",
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
      profit: "₹28,000",
      time: "2 months",
      quoteHeadline: "Good foundation, but you need patience",
      quoteBody: "The course content is solid and well-structured. I'm only 2 months in so profits are modest. The Q&A sessions are helpful — Sidhant is honest about what works and what doesn't.",
      highlight: "Still working through advanced modules",
      rating: 4,
      image: "https://d2j3cl693ttatt.cloudfront.net/assets/images/student-7.jpg",
      isVerified: true,
      verificationDate: "Verified Jan 2025"
    },
    {
      name: "Kavita Rao",
      location: "Chennai",
      role: "HR Professional",
      age: "30",
      profit: "₹1.3 Lakhs",
      time: "3 months",
      quoteHeadline: "The 2-hour routine actually fits a busy schedule",
      quoteBody: "I was worried about time commitment. The 7-9 PM routine with the scanning checklist is efficient. Not every week is profitable, but the trend is clearly up.",
      highlight: "7 out of 12 weeks profitable",
      rating: 4,
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
      quoteHeadline: "The technical depth surprised me — not a typical 'crypto bro' course",
      quoteBody: "As a CA, I appreciated the analytical rigor. Position sizing, risk-reward ratios, trade journaling — this is how professionals approach markets.",
      highlight: "Avg risk-reward: 2.1:1",
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
      quoteHeadline: "Steady side income alongside my government job",
      quoteBody: "Didn't expect quick riches and the course doesn't promise that either. The systematic approach lets me trade without stress. Some months are better than others.",
      highlight: "Avg monthly: ₹35-45K",
      rating: 5,
      image: "https://d2j3cl693ttatt.cloudfront.net/assets/images/student-10.jpg",
      isVerified: true,
      verificationDate: "Verified Nov 2024"
    }
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
        text: "learners"
    },
    features: [
        { icon: CandlestickChart, text: "Rule #1: Invalidation first", subtext: "Exit before entry", color: "green" },
        { icon: Wallet, text: "Journal framework included", subtext: "Track & improve daily", color: "blue" },
        { icon: Calendar, text: "Monthly live Q&A", subtext: "Recording provided", color: "yellow" }
    ],
    stats: [
        { value: "₹27.2 Cr", label: "Self-reported profits", color: "slate" },
        { value: "1,263", label: "Active learners", color: "yellow" },
        { value: "73%", label: "Reported win rate", color: "blue" }
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