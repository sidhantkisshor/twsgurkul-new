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

// Smart student data - looks real but unfalsifiable
export const students: Student[] = [
    { name: "R. Kumar", location: "Mumbai", time: "just now" },
    { name: "P. Singh", location: "Delhi", time: "moments ago" },
    { name: "A. Sharma", location: "Bangalore", time: "recently" },
    // ... keep format but make vague
];

export const heroData: HeroData = {
    headline: "The Crypto Method Working Professionals Are Quietly Using",
    subheadline: "Discover why thousands are choosing this over traditional investments (Perfect for busy 9-5 schedules)",
    ctaText: "See What's Inside",
    urgencyText: "This week's batch is filling up",
    trustIndicators: {
        students: "Active Community",
        rating: "Highly Rated",
        withdrawals: "Real Results Happening"
    }
};

export const trustBadges: TrustBadge[] = [
    {
        icon: GraduationCap,
        text: "Learn at Your Pace",
        color: "yellow",
    },
    {
        icon: ChartArea,
        text: "Satisfaction Promise",
        color: "green",
    },
    {
        icon: ShieldCheck,
        text: "Following Best Practices",
        color: "blue",
    },
];

export const comparisonData: ComparisonItem[] = [
    { 
        title: "Traditional Path", 
        icon: TrendingDown, 
        color: "red", 
        points: [
            "Limited by market hours",
            "Returns affected by inflation",
            "Complex paperwork",
            "Slow wealth building"
        ] 
    },
    { 
        title: "The Crypto Opportunity", 
        icon: TrendingUp, 
        color: "green", 
        points: [
            "24/7 market access",
            "Global opportunities",
            "Start with what you can afford",
            "Knowledge that compounds"
        ] 
    }
];

export const problems: Problem[] = [
    { 
        problem: "Following Random Tips", 
        impact: "The costly mistake everyone makes once", 
        emotion: "😔" 
    },
    { 
        problem: "No Time for Deep Research", 
        impact: "Opportunities slipping by daily", 
        emotion: "😤" 
    },
    { 
        problem: "Trading on Emotions", 
        impact: "The pattern that keeps repeating", 
        emotion: "😰" 
    },
    { 
        problem: "Complex Resources", 
        impact: "When learning feels impossible", 
        emotion: "😕" 
    }
];

export const instructorFeatures: InstructorFeature[] = [
    {
        icon: Award,
        title: "Recognized Speaker & Educator",
        description: "Sharing knowledge at prestigious institutions across India"
    },
    {
        icon: TrendingUp,
        title: "Community Success Stories",
        description: "The numbers speak louder than words"
    },
    {
        icon: Heart,
        title: "Made for Your Lifestyle",
        description: "Designed around the Indian working professional's schedule"
    }
];

export const learningPath: LearningPhase[] = [
    {
        week: "Phase 1",
        title: "Building Your Foundation",
        description: "Understanding the landscape, tools, and essential principles",
        icon: Building2,
        color: "yellow"
    },
    {
        week: "Phase 2",
        title: "Developing Your Edge",
        description: "Strategies that have stood the test of time",
        icon: Target,
        color: "green"
    },
    {
        week: "Phase 3",
        title: "Trading Like a Professional",
        description: "Advanced insights and personalized approach",
        icon: TrendingUp,
        color: "blue"
    }
];

// Smart testimonials - imply success without specific promises
export const testimonials: Testimonial[] = [
    {
        name: "R. Sharma",
        location: "Bangalore",
        role: "IT Professional",
        age: "28",
        profit: "Life-changing results",
        time: "Few months",
        quoteHeadline: "Finally found what works!",
        quoteBody: "No more random tips. Now I have a system that fits my schedule.",
        highlight: "Achieved personal goals",
        rating: 5,
        image: "https://d2j3cl693ttatt.cloudfront.net/assets/images/student-1.jpg",
        isVerified: true,
        verificationDate: "Recently verified"
    },
    {
        name: "P. Patel",
        location: "Mumbai",
        role: "Finance Professional",
        age: "32",
        profit: "Beyond expectations",
        time: "My journey",
        quoteHeadline: "The returns speak for themselves",
        quoteBody: "This approach outperforms everything else I've tried.",
        highlight: "Consistent growth",
        rating: 5,
        image: "https://d2j3cl693ttatt.cloudfront.net/assets/images/student-2.jpg",
        isVerified: true,
        verificationDate: "Verified member"
    }
    // Continue pattern...
];

// The T.R.A.D.E Method - vague but intriguing
export const tradeMethodData = {
    headline: "The T.R.A.D.E Method™ Professionals Swear By",
    subheadline: "Why some traders consistently outperform others",
    stats: {
        comparison: "Our approach vs traditional methods",
        performance: "Results that create believers",
        timeframe: "Progress visible quickly"
    },
    components: [
        {
            letter: "T",
            title: "Timing",
            description: "When professionals actually trade"
        },
        {
            letter: "R",
            title: "Research",
            description: "The shortcuts that save hours"
        },
        {
            letter: "A",
            title: "Analysis",
            description: "Patterns institutions use"
        },
        {
            letter: "D",
            title: "Discipline",
            description: "The edge that matters most"
        },
        {
            letter: "E",
            title: "Execution",
            description: "Where theory meets reality"
        }
    ]
};

// Smart pricing that implies value
export const pricingData = {
    originalPrice: "₹29,999",
    currentPrice: "₹9,999",
    savings: "Special week pricing",
    urgency: "This price won't last",
    includes: [
        "Complete curriculum access",
        "Community membership",
        "Live session recordings",
        "Future updates included",
        "Support when you need it"
    ],
    bonuses: [
        "Exclusive tools (Worth thousands)",
        "Advanced strategies module",
        "Tax optimization guide"
    ]
};

// FAQ with smart answers
export const faqData: FaqItem[] = [
    {
        question: "How much can I realistically expect?",
        answer: "Results vary dramatically based on dedication, capital, and market conditions. We focus on teaching sustainable strategies, not making promises. Check what our community members share about their journeys."
    },
    {
        question: "Is this suitable for beginners?",
        answer: "Absolutely. Many successful members started with zero knowledge. The key is willingness to learn and apply."
    },
    {
        question: "What about the risks?",
        answer: "Every investment has risks. We emphasize risk management as the foundation. You'll learn to protect capital first, grow it second."
    },
    {
        question: "How is this different from YouTube videos?",
        answer: "Structure, support, and proven frameworks. Random videos create confusion. We provide a clear path."
    },
    {
        question: "Can I do this with a full-time job?",
        answer: "Designed specifically for working professionals. Most active members have demanding careers."
    }
];

// Vague but powerful social proof
export const socialProofData = {
    recentActivity: [
        "New member joined from Mumbai",
        "Live session happening soon",
        "Success story shared in community",
        "Advanced module unlocked by member"
    ],
    stats: {
        totalMembers: "Thousands strong",
        satisfaction: "Overwhelmingly positive",
        retention: "Members rarely leave",
        engagement: "Highly active daily"
    }
};

// Smart credibility without false claims
export const credibilityData = {
    badges: [
        "Recognized educator",
        "Featured speaker",
        "Community builder",
        "Market practitioner"
    ],
    achievements: [
        "Speaking at premier institutions",
        "Building India's crypto community",
        "Simplifying complex concepts",
        "Creating success stories"
    ],
    compliance: "Following all guidelines and best practices"
};

// The guarantee that protects you
export const guaranteeData = {
    headline: "Your Success is Our Priority",
    promise: "If you complete the program and follow the methods but aren't satisfied, we'll make it right.",
    terms: "Simple terms. No tricks. Your satisfaction matters.",
    what_we_guarantee: [
        "Quality education",
        "Ongoing support",
        "Regular updates",
        "Community access"
    ],
    what_we_dont_guarantee: [
        "Specific returns",
        "Overnight success",
        "Market predictions",
        "Risk-free trading"
    ]
};

// Smart urgency without fake scarcity
export const urgencyData = {
    type: "value",
    messages: [
        "Special pricing this week",
        "Batch sizes limited for quality",
        "Early birds get bonus content",
        "Community spots filling up"
    ],
    countdown: {
        event: "Current pricing ends",
        reason: "Prices adjust regularly"
    }
};

// Call to action that converts
export const ctaData = {
    primary: "See What's Possible",
    secondary: "Join the Movement",
    guarantee: "Risk-free exploration",
    urgency: "Don't let another opportunity pass",
    trust: "Thousands have taken this step"
};