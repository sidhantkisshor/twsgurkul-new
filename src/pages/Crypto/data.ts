import {
    Award,
    Building2,
    Clock,
    GraduationCap,
    Heart,
    ShieldCheck,
    Target,
    TrendingDown,
    TrendingUp,
    ChartArea,
    Languages,
    Shield,
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
      icon: GraduationCap,
      text: "Lifetime Access",
      color: "yellow",
    },
    {
      icon: ChartArea,
      text: "Money-Back Guarantee",
      color: "green",
    },
    {
      icon: ShieldCheck,
      text: "RBI Guidelines Compliant",
      color: "blue",
    },
  ];

  export const comparisonData: ComparisonItem[] = [
    { title: "Traditional Investments", icon: TrendingDown, color: "red", points: ["FD Returns: 6-7% yearly", "Gold: 8-10% yearly", "Mutual Funds: 12-15% yearly", "Inflation eating returns"] },
    { title: "Crypto Trading (With Knowledge)", icon: TrendingUp, color: "green", points: ["Potential: 10-30% monthly", "24/7 market access", "Start with just ₹10,000", "Learn once, earn for a lifetime"] }
  ];

  export const problems: Problem[] = [
    { problem: "Following Free Telegram/WhatsApp Tips", impact: "Lost ₹50,000 in pump & dump schemes", emotion: "😔" },
    { problem: "No Time for Research (Job + Family)", impact: "Missing profitable opportunities daily", emotion: "😤" },
    { problem: "Emotional Trading (FOMO/Panic)", impact: "Buying high, selling low repeatedly", emotion: "😰" },
    { problem: "Complex English Resources", impact: "Can't understand advanced strategies", emotion: "😕" }
  ];

  export const instructorFeatures: InstructorFeature[] = [
      {
          icon: Award,
          title: "TEDx Speaker & Featured at IIT",
          description: "Shared my trading journey with thousands of students across India."
      },
      {
          icon: TrendingUp,
          title: "₹10 Crore+ in Student Profits",
          description: "My students' results are my biggest achievement. We track their progress closely."
      },
       {
          icon: Heart,
          title: "Designed for the Indian Lifestyle",
          description: "The course is in Hinglish and fits perfectly around a 9-to-5 job schedule."
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
        description: "Advanced techniques, live trading sessions, building your trading plan",
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
      quoteHeadline: "Recovered my course fee 5x!", 
      quoteBody: "Finally quit following random tips. Now I trade systematically after office hours.", 
      highlight: "Bought iPhone 15 for wife", 
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
      quoteHeadline: "Earning more from crypto than my MF returns.", 
      quoteBody: "Best decision ever! The Hindi explanations made complex concepts easy.", 
      highlight: "Paid off car loan early", 
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
      quoteHeadline: "Consistently profitable, even with my hectic schedule.", 
      quoteBody: "Was skeptical initially, but the results speak for themselves. The strategies are easy to implement.", 
      highlight: "Planning Europe trip with family", 
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
      quoteHeadline: "Finally making money while I sleep!", 
      quoteBody: "The risk management techniques saved me from major losses. Now I trade confidently.", 
      highlight: "Funded sister's wedding expenses", 
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
      quoteHeadline: "From ₹10k to ₹1L in just 2 months!", 
      quoteBody: "The systematic approach changed everything. No more FOMO trading or emotional decisions.", 
      highlight: "Bought first bike with profits", 
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
    {item: "Lifetime Access to 20+ Video Modules", value: "₹80,000"},
    {item: "Monthly Live Trading & QnA with Experts", value: "₹50,000"},
    {item: "24/7 Private VIP Community Access", value: "₹15,000"},
    {item: "Bonus: Pro Trading Tools & Checklists", value: "₹10,000"},
    {item: "Bonus: 10x Coin Finding Blueprint", value: "₹15,000"},
];

export const finalCtaCards: FinalCtaCard[] = [
    {
        icon: TrendingUp,
        title: "High-Growth Skill",
        description: "Learn a skill that has the potential for high returns."
    },
    {
        icon: Clock,
        title: "Flexible Learning",
        description: "Learn anytime, anywhere, at your own pace around your job."
    },
    {
        icon: Heart,
        title: "Lifetime Community",
        description: "Join a community of like-minded traders for lifelong support."
    }
];

export const pricing = {
    totalValue: "₹1,70,000",
    currentPrice: "₹19,499",
    savings: "₹1,50,501",
    dailyCost: "₹54",
    emiAmount: "₹945",
    emiMonths: 12,
    nextBatchPrice: "₹24,999"
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
        title: "Live Trading & Execution",
        items: ["Live Market Analysis", "Executing Trades Under Pressure", "Reviewing & Learning from Trades", "Continuous Learning & Community"]
    }
];

export const faqs: FaqItem[] = [
    {
        q: "Main job karta hun, kya main kar paunga?",
        a: "Bilkul! 80% students working professionals hain. Daily 1-2 hours kaafi hai."
    },
    {
        q: "Agar profit nahi hua toh?",
        a: "30-day money back guarantee hai agar aap sare modules complete kare and methods follow kare. Plus monthly live support milega."
    },
    {
        q: "English weak hai, samajh aayega?",
        a: "All videos in Hindi/English mix. Jaise aap comfortable ho."
    },
    {
        q: "Kitna paisa lagega trading start karne ke liye?",
        a: "Minimum ₹10,000 se start kar sakte ho. Course mein proper risk management sikhaya hai."
    },
    {
        q: "Technical analysis pehle se pata nahi hai, kya problem hogi?",
        a: "Zero problem! Complete beginner se start karte hain. Step-by-step sab kuch cover kiya hai."
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
        q: "Live sessions miss ho jaaye toh?",
        a: "All live sessions record hote hain. Aap one week ke andar kabhi bhi dekh sakte ho."
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
        a: "TEDx speaker hun, IIT mein teach kiya hai. 1000+ students ke results check kar sakte ho. Fully transparent. 30-day money back guarantee hai."
    },
    {
        q: "Market crash ho jaaye toh strategies work karengi?",
        a: "Crash mein bhi profit banaya jaata hai. Bear market strategies alag hain, bull market alag. Sab sikhaaya hai."
    },
    {
        q: "WhatsApp pe support milega?",
        a: "Haan, dedicated support group hai. Plus monthly live calls for direct doubt clearing."
    },

    {
        q: "Course complete karne mein kitna time lagega?",
        a: "21 videos total. Daily 1 video dekho toh 3 weeks. But practice ke saath 2 months realistically."
    },
    {
        q: "Trading mein loss hone pe kya karna chahiye?",
        a: "Risk management properly sikhaya hai. Stop loss, position sizing - sab detail mein covered."
    },
    {
        q: "Kya main trading se job quit kar sakta hun?",
        a: "Many students ne kiya hai, but gradual process hai. Pehle consistent profits, then transition planning."
    },
    {
        q: "Course material download kar sakte hain?",
        a: "Videos downloadable nahi hain offline viewing ke liye."
    }
];

export const heroData: HeroData = {
    headline: {
        line1: "Learn How Indians Are",
        line2: "Earning ₹50k to ₹2 Lakhs",
        line3: "Monthly from Crypto"
    },
    description: {
        part1: "Join",
        highlight1: "1,047 working professionals",
        part2: "who learned the exact system to trade crypto safely while managing their",
        highlight2: "9-to-5 jobs and family responsibilities",
        part3: "."
    },
    enrollmentStats: {
        count: 247,
        text: "students enrolled this week"
    },
    features: [
        { icon: Languages, text: "Learn in Hindi/English", subtext: "Your comfort language", color: "blue" },
        { icon: Shield, text: "SEBI-Compliant", subtext: "Adheres to Legal Guidelines", color: "green" }
    ],
    stats: [
        { value: "₹50Cr+", label: "Withdrawn by Students", color: "green" },
        { value: "4.9", label: "Based on 1,000+ Reviews", color: "yellow" },
        { value: "30Day", label: "Money-Back Guarantee", color: "blue" }
    ],
    video: {
        thumbnail: "https://d2j3cl693ttatt.cloudfront.net/assets/images/-crypto-market-mastery-tws.jpeg",
        title: "Watch 2-Min Success Story",
        subtitle: "See how Shantanu earns ₹1.5L/month"
    },
    badges: {
        top: "As Seen on TEDx",
        bottom: "Verified Course"
    },
    cta: {
        primary: "Enroll Now & Get ₹2,000 Bonus",
        secondary: "Get Free Consultation"
    }
}; 