import { describe, it, expect } from 'vitest';
import {
  calculateResult,
  getResultBullets,
  getRandomInsight,
  programResults,
  questions,
} from './data';

describe('calculateResult', () => {
  it('returns Crypto (stage 1) for all-beginner answers (score 0)', () => {
    const result = calculateResult({ experience: 'beginner', capital: 'under_50k', time: 'minimal' });
    expect(result.programId).toBe('cmm');
    expect(result.stage).toBe(1);
  });

  it('returns Footprint (stage 2) for mid-range answers (score 4–6)', () => {
    // inconsistent(2) + 50k_2l(1) + dedicated(2) = 5
    const result = calculateResult({ experience: 'inconsistent', capital: '50k_2l', time: 'dedicated' });
    expect(result.programId).toBe('footprint');
    expect(result.stage).toBe(2);
  });

  it('returns Elite Mentorship (stage 3) for advanced answers (score >= 7)', () => {
    // advanced(3) + above_10l(3) + fulltime(3) = 9
    const result = calculateResult({ experience: 'advanced', capital: 'above_10l', time: 'fulltime' });
    expect(result.programId).toBe('elite');
    expect(result.stage).toBe(3);
  });

  it('handles missing answers gracefully (defaults score to 0)', () => {
    const result = calculateResult({});
    expect(result).toEqual(programResults[0]);
  });

  it('boundary: score exactly 4 returns Footprint', () => {
    // losses(1) + 2l_10l(2) + evening(1) = 4
    const result = calculateResult({ experience: 'losses', capital: '2l_10l', time: 'evening' });
    expect(result.programId).toBe('footprint');
  });

  it('boundary: score exactly 7 returns Elite', () => {
    // advanced(3) + 2l_10l(2) + dedicated(2) = 7
    const result = calculateResult({ experience: 'advanced', capital: '2l_10l', time: 'dedicated' });
    expect(result.programId).toBe('elite');
  });

  it('all program results have required fields', () => {
    programResults.forEach(r => {
      expect(r).toHaveProperty('programId');
      expect(r).toHaveProperty('route');
      expect(r).toHaveProperty('tagline');
      expect(r).toHaveProperty('stage');
      expect(r).toHaveProperty('metric');
      expect(r).toHaveProperty('students');
      expect(r).toHaveProperty('successRate');
    });
  });
});

describe('getResultBullets', () => {
  it('returns 3 bullets for valid fear/goal/time combo', () => {
    const bullets = getResultBullets('loss', 'side_income', 'evening');
    expect(bullets).toHaveLength(3);
    bullets.forEach(b => expect(typeof b).toBe('string'));
  });

  it('all 3 bullets are non-empty strings', () => {
    const bullets = getResultBullets('loss', 'side_income', 'evening');
    bullets.forEach(b => expect(b.length).toBeGreaterThan(0));
  });

  it('returns 2 fallback bullets for unknown fear/goal', () => {
    const bullets = getResultBullets('unknown', 'unknown', 'evening');
    expect(bullets).toHaveLength(2);
  });

  it('time bullet varies by time value', () => {
    const minimal = getResultBullets('loss', 'side_income', 'minimal');
    const fulltime = getResultBullets('loss', 'side_income', 'fulltime');
    expect(minimal[2]).not.toBe(fulltime[2]);
  });

  it('fear bullet is specific to fear value', () => {
    const loss = getResultBullets('loss', 'side_income', 'evening');
    const scam = getResultBullets('scam', 'side_income', 'evening');
    expect(loss[0]).not.toBe(scam[0]);
  });

  it('goal bullet varies by goal', () => {
    const sideIncome = getResultBullets('loss', 'side_income', 'evening');
    const freedom = getResultBullets('loss', 'freedom', 'evening');
    expect(sideIncome[1]).not.toBe(freedom[1]);
  });

  it('covers all 4 fear values without throwing', () => {
    const fears = ['loss', 'scam', 'stagnation', 'exits'];
    const goals = ['side_income', 'freedom', 'wealth', 'recovery'];
    fears.forEach(fear => {
      goals.forEach(goal => {
        expect(() => getResultBullets(fear, goal, 'evening')).not.toThrow();
      });
    });
  });
});

describe('getRandomInsight', () => {
  it('returns a non-empty string for valid question/value', () => {
    const insight = getRandomInsight('experience', 'beginner');
    expect(typeof insight).toBe('string');
    expect(insight.length).toBeGreaterThan(0);
  });

  it('returns empty string for unknown questionId', () => {
    expect(getRandomInsight('nonexistent', 'value')).toBe('');
  });

  it('returns empty string for unknown optionValue', () => {
    expect(getRandomInsight('experience', 'nonexistent')).toBe('');
  });

  it('returns one of the known pool values for experience/beginner', () => {
    const pool = [
      '67% of our top earners were complete beginners',
      'Beginners actually learn faster - no bad habits to unlearn',
      'Our youngest millionaire student started with zero experience',
    ];
    const insight = getRandomInsight('experience', 'beginner');
    expect(pool).toContain(insight);
  });

  it('works for all question ids and their option values', () => {
    questions.forEach(q => {
      q.options.forEach(o => {
        const insight = getRandomInsight(q.id, o.value);
        expect(typeof insight).toBe('string');
      });
    });
  });
});

describe('questions data integrity', () => {
  it('has exactly 5 questions', () => {
    expect(questions).toHaveLength(5);
  });

  it('all questions have id, text, subtext, and options array', () => {
    questions.forEach(q => {
      expect(typeof q.id).toBe('string');
      expect(typeof q.text).toBe('string');
      expect(typeof q.subtext).toBe('string');
      expect(Array.isArray(q.options)).toBe(true);
      expect(q.options.length).toBeGreaterThanOrEqual(2);
    });
  });

  it('scoring questions (experience, capital, time) all have numeric scores on every option', () => {
    ['experience', 'capital', 'time'].forEach(qId => {
      const q = questions.find(q => q.id === qId);
      expect(q).toBeDefined();
      q!.options.forEach(o => {
        expect(typeof o.score).toBe('number');
      });
    });
  });

  it('question ids are unique', () => {
    const ids = questions.map(q => q.id);
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(ids.length);
  });

  it('all options have label, value, and profileLabel', () => {
    questions.forEach(q => {
      q.options.forEach(o => {
        expect(typeof o.label).toBe('string');
        expect(typeof o.value).toBe('string');
        expect(typeof o.profileLabel).toBe('string');
      });
    });
  });
});
