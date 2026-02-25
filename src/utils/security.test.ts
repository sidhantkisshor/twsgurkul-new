import { describe, it, expect } from 'vitest';
import { validateEmail } from './security';
// sanitizeInput and sanitizeHTML use DOMPurify which requires a DOM environment;
// validateEmail is pure regex and fully testable in a node environment.

describe('validateEmail', () => {
  it('accepts standard email addresses', () => {
    expect(validateEmail('user@example.com')).toBe(true);
    expect(validateEmail('user.name@example.com')).toBe(true);
    expect(validateEmail('user+tag@example.co.uk')).toBe(true);
  });

  it('accepts subdomains and multi-part TLDs', () => {
    expect(validateEmail('user@subdomain.domain.com')).toBe(true);
    expect(validateEmail('a@b.io')).toBe(true);
  });

  it('rejects addresses with no @ sign', () => {
    expect(validateEmail('notanemail')).toBe(false);
    expect(validateEmail('noatsign.com')).toBe(false);
  });

  it('rejects addresses with no local part', () => {
    expect(validateEmail('@nodomain.com')).toBe(false);
  });

  it('rejects addresses with no domain part', () => {
    expect(validateEmail('user@')).toBe(false);
  });

  it('rejects empty string', () => {
    expect(validateEmail('')).toBe(false);
  });

  it('rejects addresses with spaces', () => {
    expect(validateEmail('user name@example.com')).toBe(false);
    expect(validateEmail('user@exam ple.com')).toBe(false);
  });

  it('rejects double @ signs', () => {
    expect(validateEmail('user@@example.com')).toBe(false);
  });
});
