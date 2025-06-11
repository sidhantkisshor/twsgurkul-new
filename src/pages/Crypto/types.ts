import { ElementType } from 'react';

export interface Student {
  name: string;
  location: string;
  time: string;
}

export interface TrustBadge {
  icon: ElementType;
  text: string;
  color: 'yellow' | 'green' | 'blue';
}

export interface TimeLeft {
  hours: number;
  minutes: number;
  seconds: number;
}

export interface Testimonial {
  name: string;
  location: string;
  role: string;
  age: string;
  profit: string;
  time: string;
  quoteHeadline: string;
  quoteBody: string;
  highlight: string;
  rating: number;
  image: string;
  isVerified?: boolean;
  verificationDate?: string;
}

export interface ComparisonItem {
    title: string;
    icon: ElementType;
    color: 'red' | 'green';
    points: string[];
}

export interface Problem {
    problem: string;
    impact: string;
    emotion: string;
}

export interface InstructorFeature {
    icon: ElementType;
    title: string;
    description: string;
}

export interface LearningPhase {
    week: string;
    title: string;
    description: string;
    icon: ElementType;
    color: 'yellow' | 'green' | 'blue' | 'purple' | 'pink' | 'indigo';
}

export interface Benefit {
    item: string;
    value: string;
}

export interface FinalCtaCard {
    icon: ElementType;
    title: string;
    description: string;
}

export interface CurriculumModule {
    title: string;
    items: string[];
}

export interface FaqItem {
    q: string;
    a: string;
}

export interface HeroFeature {
    icon: React.ElementType;
    text: string;
    subtext: string;
    color: string;
}

export interface HeroStat {
    value: string;
    label: string;
    color: string;
}

export interface HeroData {
    headline: {
        line1: string;
        line2: string;
        line3: string;
    };
    description: {
        part1: string;
        highlight1: string;
        part2: string;
        highlight2: string;
        part3: string;
    };
    enrollmentStats: {
        count: number;
        text: string;
    };
    features: HeroFeature[];
    stats: HeroStat[];
    video: {
        thumbnail: string;
        title: string;
        subtitle: string;
    };
    badges: {
        top: string;
        bottom: string;
    };
    cta: {
        primary: string;
        secondary: string;
    }
} 