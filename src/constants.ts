// CDN base URL — all media assets served from CloudFront + S3
export const CDN_BASE = 'https://d2j3cl693ttatt.cloudfront.net';

// Quiz modal behaviour
export const QUIZ_EXIT_INTENT_MOBILE_DELAY_MS = 45_000;
export const QUIZ_STICKY_BAR_HIDE_PCT = 85;

// Binance API service
export const BINANCE_CACHE_TTL_MS = 30_000;
export const BINANCE_FETCH_TIMEOUT_MS = 5_000;
export const WHALE_ORDER_MIN_USD = 100_000;
export const LARGE_TRADE_MIN_USD = 50_000;

// Checkout URLs — single source of truth for all course purchase links
const CHECKOUT_BASE = 'https://learn.tradingwithsidhant.com/web/checkout';

export const CHECKOUT_IDS = {
  crypto: '68468c5a2f492ef9273b5025',
  footprint: '67865c7a63edaa470ad42516',
  mentorship: '689e14304cdc28f73d92a88c',
} as const;

// AiSensy — campaign names must match exactly what's created in AiSensy dashboard
export const AISENSY_CAMPAIGNS = {
  cmm: 'quiz_result_crypto_v1',
  footprint: 'quiz_result_footprint_v1',
  elite: 'quiz_result_elite_v1',
  newsletter: 'newsletter_welcome_v1',
} as const;

// WhatsApp — single source of truth for support number
export const WHATSAPP_NUMBER = '918062963333';
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

/** Build a full checkout URL with UTM params and fire a tracking event. */
export function getCheckoutUrl(
  course: keyof typeof CHECKOUT_IDS,
  utmContent: string,
): string {
  // Fire GTM dataLayer event for checkout click attribution
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: 'checkout_click',
      checkout_course: course,
      checkout_source: utmContent,
    });
  }
  return `${CHECKOUT_BASE}/${CHECKOUT_IDS[course]}?purchaseNow=true&utm_source=twsgurukul&utm_medium=web&utm_campaign=${course}&utm_content=${utmContent}`;
}
