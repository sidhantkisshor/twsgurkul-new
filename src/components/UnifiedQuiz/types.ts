export interface QuizOption {
  label: string;
  value: string;
  score?: number;
  profileLabel?: string;
}

export interface QuizQuestion {
  id: string;
  text: string;
  subtext: string;
  options: QuizOption[];
}

export interface MicroInsightPool {
  [questionId: string]: {
    [optionValue: string]: string[];
  };
}

export interface ResultTestimonial {
  name: string;
  location: string;
  profession: string;
  quote: string;
  profit: string;
}

export interface ProgramResult {
  stage: number;
  program: string;
  programId: string;
  route: string;
  tagline: string;
  metric: string;
  duration: string;
  students: string;
  successRate: string;
}

export interface ResultMessage {
  fearBullet: string;
  goalBullet: string;
}

export interface QuizAnswers {
  experience?: string;
  capital?: string;
  time?: string;
  fear?: string;
  goal?: string;
}

export interface ProfileField {
  id: string;
  value?: string;
}

export interface UnifiedQuizProps {
  mode: 'modal' | 'standalone';
  isOpen?: boolean;
  onClose?: () => void;
  source?: string;
}
