// Global analytics objects injected by third-party scripts.
// Typed here to avoid scattered `(window as any)` casts.

export {};

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
    gtag: (...args: unknown[]) => void;
    fbq: (method: string, event: string, data?: Record<string, unknown>) => void;
  }
}
