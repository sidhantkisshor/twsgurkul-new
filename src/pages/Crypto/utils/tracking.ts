// Analytics tracking utility for crypto page events
// This sends events to Google Analytics, Meta Pixel, or any other configured tracking service

interface TrackingEvent {
  eventName: string;
  eventCategory?: string;
  eventLabel?: string;
  eventValue?: number;
  customData?: Record<string, any>;
}

// Main tracking function
export const trackEvent = ({
  eventName,
  eventCategory = 'Engagement',
  eventLabel,
  eventValue,
  customData = {}
}: TrackingEvent): void => {
  try {
    // Google Analytics 4
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', eventName, {
        event_category: eventCategory,
        event_label: eventLabel,
        value: eventValue,
        ...customData,
        send_to: 'default'
      });
    }

    // Facebook Pixel
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('trackCustom', eventName, {
        category: eventCategory,
        label: eventLabel,
        value: eventValue,
        ...customData
      });
    }

    // Console log in development
    if (process.env.NODE_ENV === 'development') {
      console.log('📊 Track Event:', {
        eventName,
        eventCategory,
        eventLabel,
        eventValue,
        customData,
        timestamp: new Date().toISOString()
      });
    }
  } catch (error) {
    console.error('Tracking error:', error);
  }
};

// Predefined tracking events for the crypto page
export const cryptoTrackingEvents = {
  // Modal and content interactions
  methodologyModalOpened: () => trackEvent({
    eventName: 'methodology_modal_opened',
    eventCategory: 'Trust Building',
    eventLabel: 'User viewed methodology details'
  }),

  proofScreenshotOpened: (studentName?: string) => trackEvent({
    eventName: 'proof_screenshot_opened',
    eventCategory: 'Trust Building',
    eventLabel: 'User viewed proof screenshot',
    customData: { studentName }
  }),

  journalPreviewViewed: (duration?: number) => trackEvent({
    eventName: 'journal_preview_viewed',
    eventCategory: 'High Intent',
    eventLabel: 'User viewed trading journal preview',
    eventValue: duration,
    customData: { 
      predictsPurchase: true,
      engagementLevel: 'high'
    }
  }),

  // Exit intent funnel
  exitIntentShow: () => trackEvent({
    eventName: 'exit_intent_show',
    eventCategory: 'Recovery',
    eventLabel: 'Exit intent popup displayed'
  }),

  couponClaimed: (discountAmount?: number) => trackEvent({
    eventName: 'coupon_claimed',
    eventCategory: 'Recovery',
    eventLabel: 'User claimed exit intent coupon',
    eventValue: discountAmount,
    customData: { 
      funnelStep: 'exit_intent_conversion'
    }
  }),

  checkoutStart: (source: string, price?: number) => trackEvent({
    eventName: 'checkout_start',
    eventCategory: 'Conversion',
    eventLabel: `Checkout started from ${source}`,
    eventValue: price,
    customData: { 
      source,
      conversionStep: 'checkout_initiated'
    }
  }),

  // Returning user events
  returningUserDetected: () => trackEvent({
    eventName: 'returning_user_detected',
    eventCategory: 'User Behavior',
    eventLabel: 'Returning visitor identified'
  }),

  returningUserQuickCheckoutClicked: () => trackEvent({
    eventName: 'returning_user_quick_checkout_clicked',
    eventCategory: 'High Intent',
    eventLabel: 'Returning user clicked quick checkout',
    customData: { 
      conversionLikelihood: 'very_high',
      userSegment: 'returning_high_intent'
    }
  }),

  // Additional high-value events
  videoPlayed: (duration?: number) => trackEvent({
    eventName: 'hero_video_played',
    eventCategory: 'Engagement',
    eventLabel: 'User played hero video',
    eventValue: duration
  }),

  pricingViewed: (timeOnSection?: number) => trackEvent({
    eventName: 'pricing_section_viewed',
    eventCategory: 'High Intent',
    eventLabel: 'User viewed pricing section',
    eventValue: timeOnSection
  }),

  liveQADateViewed: (date: string) => trackEvent({
    eventName: 'live_qa_date_viewed',
    eventCategory: 'Engagement',
    eventLabel: 'User saw next live Q&A date',
    customData: { nextQADate: date }
  }),

  scrollDepth: (percentage: number) => trackEvent({
    eventName: 'scroll_depth',
    eventCategory: 'Engagement',
    eventLabel: `Scrolled ${percentage}%`,
    eventValue: percentage
  })
};

// Utility to track scroll depth
export const initScrollTracking = () => {
  if (typeof window === 'undefined') return;

  let maxScroll = 0;
  const thresholds = [25, 50, 75, 90, 100];
  const tracked = new Set<number>();

  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = window.scrollY;
    const scrollPercentage = Math.round((scrollTop + windowHeight) / documentHeight * 100);

    if (scrollPercentage > maxScroll) {
      maxScroll = scrollPercentage;
      
      thresholds.forEach(threshold => {
        if (scrollPercentage >= threshold && !tracked.has(threshold)) {
          tracked.add(threshold);
          cryptoTrackingEvents.scrollDepth(threshold);
        }
      });
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  return () => window.removeEventListener('scroll', handleScroll);
};

// Check if user is returning (using localStorage)
export const isReturningUser = (): boolean => {
  if (typeof window === 'undefined') return false;
  
  const visitKey = 'crypto_page_visited';
  const hasVisited = localStorage.getItem(visitKey);
  
  if (!hasVisited) {
    localStorage.setItem(visitKey, new Date().toISOString());
    return false;
  }
  
  return true;
};

// Track time on page
export const trackTimeOnPage = () => {
  if (typeof window === 'undefined') return;
  
  const startTime = Date.now();
  
  window.addEventListener('beforeunload', () => {
    const timeOnPage = Math.round((Date.now() - startTime) / 1000);
    trackEvent({
      eventName: 'time_on_page',
      eventCategory: 'Engagement',
      eventLabel: 'Total time on crypto page',
      eventValue: timeOnPage
    });
  });
};