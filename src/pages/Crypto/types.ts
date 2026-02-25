import { ElementType } from 'react';

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

export interface Problem {
    problem: string;
    impact: string;
    emotion: string;
}

export interface InstructorFeature {
    icon: ElementType;
    title: string;
    description: string;
    bgColor?: string;
    iconColor?: string;
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
        count: string;
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
    microNote?: string;
    cta: {
        primary: string;
        secondary: string;
    }
} 