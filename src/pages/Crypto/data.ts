import {
    Building2,
    Clock,
    Heart,
    Target,
    TrendingDown,
    TrendingUp,
    Bitcoin,
    CandlestickChart,
    Wallet,
    BarChart3,
} from 'lucide-react';
import { Benefit, ComparisonItem, CurriculumModule, FinalCtaCard, InstructorFeature, LearningPhase, Problem, Student, Testimonial, TrustBadge, FaqItem, HeroData } from './types';

export const students: Student[] = [
    { name: "Ravi", location: "Mumbai", time: "2 minutes ago" },
    { name: "Priya", location: "Delhi", time: "5 minutes ago" },
    { name: "Amit", location: "Bangalore", time: "8 minutes ago" },
    { name: "Sneha", location: "Chennai", time: "10 minutes ago" },
    { name: "Rahul", location: "Hyderabad", time: "7 minutes ago" },
    { name: "Ayesha", location: "Mumbai", time: "4 minutes ago" },
    { name: "Jaspreet", location: "Delhi", time: "3 minutes ago" },
    { name: "Fatima", location: "Hyderabad", time: "6 minutes ago" },
    { name: "Samuel", location: "Chennai", time: "1 minute ago" },
    { name: "Ibrahim", location: "Bangalore", time: "9 minutes ago" },
    { name: "Neha", location: "Delhi", time: "4 minutes ago" },
    { name: "Harpreet", location: "Mumbai", time: "2 minutes ago" },
    { name: "Roshan", location: "Bangalore", time: "7 minutes ago" },
    { name: "Mary", location: "Chennai", time: "6 minutes ago" },
    { name: "Sana", location: "Hyderabad", time: "3 minutes ago" },
    { name: "Karan", location: "Delhi", time: "8 minutes ago" },
    { name: "Zoya", location: "Mumbai", time: "5 minutes ago" },
    { name: "David", location: "Chennai", time: "2 minutes ago" },
    { name: "Imran", location: "Bangalore", time: "6 minutes ago" },
    { name: "Anjali", location: "Hyderabad", time: "9 minutes ago" },
    { name: "Mohit", location: "Delhi", time: "7 minutes ago" },
    { name: "Farhan", location: "Mumbai", time: "3 minutes ago" },
    { name: "Rebecca", location: "Bangalore", time: "4 minutes ago" },
    { name: "Simran", location: "Chennai", time: "8 minutes ago" },
    { name: "Adnan", location: "Hyderabad", time: "2 minutes ago" },
    { name: "Avni", location: "Delhi", time: "1 minute ago" },
    { name: "Yusuf", location: "Mumbai", time: "10 minutes ago" },
    { name: "Raj", location: "Bangalore", time: "5 minutes ago" },
    { name: "Christina", location: "Chennai", time: "6 minutes ago" },
    { name: "Ruksar", location: "Hyderabad", time: "9 minutes ago" },
    { name: "Manpreet", location: "Delhi", time: "2 minutes ago" },
    { name: "Ali", location: "Mumbai", time: "7 minutes ago" },
    { name: "Grace", location: "Bangalore", time: "1 minute ago" },
    { name: "Nikhil", location: "Chennai", time: "4 minutes ago" },
    { name: "Shabana", location: "Hyderabad", time: "8 minutes ago" }
  ];

export const trustBadges: TrustBadge[] = [
    {
      icon: Bitcoin,
      text: "₹2.7Cr Reported Student Profits",
      color: "yellow",
    },
    {
      icon: CandlestickChart,
      text: "73% Reported Win Rate",
      color: "green",
    },
    {
      icon: Wallet,
      text: "Instant INR Withdrawals",
      color: "blue",
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
          title: "Trading Since 2017 Bull Run",
          description: "Survived 3 crashes, 2 bear markets. Still profitable."
      },
      {
          icon: BarChart3,
          title: "₹2.7 Crore+ Student Withdrawals",
          description: "Not paper profits. Real money in real bank accounts."
      },
       {
          icon: CandlestickChart,
          title: "73% Reported Win Rate (Sample: 1,847 Trades)",
          description: "Based on recorded trades. Individual results may vary."
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

export const finalCtaCards: FinalCtaCard[] = [
    {
        icon: TrendingUp,
        title: "Instant Access Today",
        description: "Price increases to ₹24,999 after that (seriously)."
    },
    {
        icon: Clock,
        title: "Offer Expires in 24 Hours",
        description: "1,263 students joined. Don't be the one who missed out."
    },
    {
        icon: Heart,
        title: "Build a Reliable Evening Skill",
        description: "Start today with recorded modules; join the next Live Q&A on 18th AUG."
    }
];

export const uniqueMechanismData = {
    headline: "The 7–9PM Routine",
    subheadline: "Designed for consistency, not \"all‑day charts\" — perfect for working professionals",
    features: [
        {
            letter: "7:00",
            title: "Unwind & Open Watchlist",
            description: "Relax after work and open your watchlist"
        },
        {
            letter: "7:15",
            title: "Scan with Checklist",
            description: "Use our checklist to shortlist 3–5 setups"
        },
        {
            letter: "7:30",
            title: "Plan Your Trades",
            description: "Plan entries/exits with position sizing"
        },
        {
            letter: "8:00",
            title: "Place Orders",
            description: "Place orders; \"set & manage\""
        },
        {
            letter: "9:00",
            title: "Review & Journal",
            description: "Review results and journal improvements"
        }
    ],
    proof: "Designed for consistency, not \"all‑day charts\""
};

export const pricing = {
    totalValue: "₹1,70,000",
    currentPrice: "₹19,499",
    savings: "₹1,50,501",
    dailyCost: "₹54",
    emiAmount: "₹945",
    emiMonths: 12,
    nextBatchPrice: "₹24,999"
  };

export const urgencyData = {
    priceIncrease: {
        newPrice: "₹24,999",
        date: "19th AUG"
    },
    nextLiveQA: "18th AUG",
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

export const contactInfo = {
    whatsappNumber: "918806969132",
    whatsappMessage: "Hi Team, I want to know more about the crypto course",
};

export const curriculumModules: CurriculumModule[] = [
    {
        title: "Foundation & Setup",
        items: ["Crypto Basics & History", "Choosing a Secure Wallet", "Navigating Trading Platforms", "Essential Security Practices"]
    },
    {
        title: "Technical Analysis Mastery",
        items: ["Reading Candlestick Charts", "Support, Resistance & Trendlines", "Key Chart Patterns", "Using Technical Indicators (RSI, MACD)"]
    },
    {
        title: "Risk Management & Strategy",
        items: ["Position Sizing", "Setting Stop-Loss & Take-Profit", "The Psychology of Trading", "Building a Personal Trading Plan"]
    },
    {
        title: "Advanced Trading Techniques",
        items: ["Introduction to Futures Trading", "Understanding Leverage & Margin", "Exploring DeFi & Yield Farming", "On-Chain Analysis Basics"]
    },
    {
        title: "Portfolio Building",
        items: ["Diversification Strategies", "Long-Term Holding (HODLing)", "Researching New Coins (DYOR)", "Tax Implications in India"]
    },
    {
        title: "Real-World Trading Application",
        items: ["Market Analysis Techniques", "Trade Execution Best Practices", "Performance Review & Optimization", "Community Support & Continuous Learning"]
    }
];

export const faqs: FaqItem[] = [
    {
        q: "Ye bhi koi SCAM toh nahi? How do I trust you?",
        a: "Valid question! Check our 1,263+ students with REAL faces, REAL profits (₹2.7Cr+). Scammers hide behind fake profiles. We show everything transparently."
    },
    {
        q: "Main already 2-3 'gurus' se thaga gaya hun...",
        a: "That's EXACTLY why we created this. 30-day satisfaction guarantee + recorded modules + monthly live Q&A. Scammers disappear, we stay."
    },
    {
        q: "Free YouTube/Telegram se kya farak hai?",
        a: "Free = You're the product being sold. They make money from YOUR losses (pump & dump). We make money ONLY when you succeed."
    },
    {
        q: "Kitne din mein profit start hoga?",
        a: "Results vary per student. Focus pehle process pe, profit follows. We teach systematic trading, not quick-money schemes."
    },
    {
        q: "Hidden charges ya upsell hoga baad mein?",
        a: "ZERO hidden charges. One price, lifetime access. No 'advanced' course, no 'VIP' group, no extra fees. Everything included."
    },
    {
        q: "Mobile pe trading kar sakte hain ya laptop chahiye?",
        a: "Dono options hain. Mobile apps bhi detail mein sikhaye hain. Laptop better hai analysis ke liye."
    },
    {
        q: "Course lifetime access hai ya limited time?",
        a: "Lifetime access hai bhai. Ek baar buy karo, hamesha access rahega. Updates bhi free."
    },
    {
        q: "Monthly live Q&A sessions miss ho jaaye toh?",
        a: "All live Q&A sessions record hote hain. Recordings mil jaati hain. Plus written summaries bhi milte hain."
    },
    {
        q: "Family ko pata chal jayega trading kar raha hun?",
        a: "Bilkul private. Aap jitna chahte ho utna share karo. Many students secretly start karte hain."
    },
    {
        q: "Age limit hai kya? Main 40+ hun.",
        a: "No age limit! Oldest student 55 saal ka hai. Age doesn't matter, consistency matters."
    },
    {
        q: "EMI option available hai?",
        a: "Haan, 24 months tak ke EMI available hai. Easy installments. No-Cost EMI bhi available hai."
    },
    {
        q: "Scam toh nahi hai? Bohot log fraud karte hain crypto mein.",
        a: "TEDx speaker hun, IIT mein teach kiya hai. Student results available for review. Fully transparent. 30-day money-back policy available."
    },
    {
        q: "Market crash ho jaaye toh strategies work karengi?",
        a: "Crash mein bhi profit banaya jaata hai. Bear market strategies alag hain, bull market alag. Sab sikhaaya hai."
    },
    {
        q: "WhatsApp pe support milega?",
        a: "Haan, dedicated WhatsApp support group hai. Plus monthly live Q&A sessions for direct doubt clearing."
    },

    {
        q: "Course complete karne mein kitna time lagega?",
        a: "Recorded modules apne pace pe dekho. Daily 1 hour dedicate karo toh 2-3 months. Monthly live Q&A for continuous support."
    },
    {
        q: "Trading mein loss hone pe kya karna chahiye?",
        a: "Risk management properly sikhaya hai. Stop loss, position sizing - sab detail mein covered."
    },
    {
        q: "Kya main trading se job quit kar sakta hun?",
        a: "Trading secondary income ke liye best hai. Job quit karna personal choice hai. Process-first approach sikhate hain."
    },
    {
        q: "Course material download kar sakte hain?",
        a: "Videos downloadable nahi hain offline viewing ke liye."
    }
];

export const heroData: HeroData = {
    headline: {
        line1: "Make crypto a",
        line2: "2‑hour evening skill,",
        line3: "not a gamble"
    },
    description: {
        part1: "A recorded, step‑by‑step system for working professionals —",
        highlight1: "with monthly live Q&A",
        part2: "for",
        highlight2: "doubt‑solving and reviews.",
        part3: ""
    },
    enrollmentStats: {
        count: "1,263+",
        text: "students enrolled"
    },
    features: [
        { icon: CandlestickChart, text: "Proven Strategies", subtext: "73% reported win rate", color: "green" },
        { icon: Wallet, text: "Start with ₹10K", subtext: "No huge capital needed", color: "blue" }
    ],
    stats: [
        { value: "₹2.7Cr", label: "Reported Profits", color: "green" },
        { value: "1,263", label: "Success Stories", color: "yellow" },
        { value: "18 AUG", label: "Next Live Q&A", color: "blue" }
    ],
    video: {
        thumbnail: "https://d2j3cl693ttatt.cloudfront.net/assets/images/-crypto-market-mastery-tws.jpeg",
        title: "LIVE PROOF: ₹2.3L Trade Recording",
        subtitle: "No edits. No fake screenshots. Just results."
    },
    badges: {
        top: "INSTANT ACCESS",
        bottom: "Recorded + Monthly Live Q&A"
    },
    cta: {
        primary: "See Live Student Results",
        secondary: "Start Learning — ₹19,499"
    }
}; 