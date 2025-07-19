export interface TrustBarData {
  studentsToday: number;
  totalProfits: string;
  nextBatch: number;
}

export interface Problem {
  title: string;
  description: string;
  icon: string;
}

export interface LiveResult {
  name: string;
  profit: string;
  duration: string;
  status: 'profit' | 'loss';
}

export interface Testimonial {
  name: string;
  location: string;
  headline: string;
  story: string;
  proofLink?: string;
  videoLink?: string;
  linkedIn?: string;
  verified?: boolean;
  warning?: boolean;
}

export interface PricingPlan {
  name: string;
  price: string;
  originalPrice?: string;
  salePrice?: string;
  savings?: string;
  description: string;
  subtitle: string;
  features: string[];
  badge?: string;
  stat?: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface RecentEnrollment {
  name: string;
  city: string;
  time: string;
}