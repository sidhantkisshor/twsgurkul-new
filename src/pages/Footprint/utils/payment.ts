import { getCheckoutUrl } from '../../../constants';

export const handlePaymentPopup = (e?: { preventDefault: () => void }) => {
  if (e) {
    e.preventDefault();
  }

  // Track CTA click before opening checkout
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: 'footprint_cta_click', page: 'footprint' });

  // noopener,noreferrer prevents opener reference leak; _blank opens in new tab
  window.open(
    getCheckoutUrl('footprint', 'cta'),
    '_blank',
    'noopener,noreferrer'
  );
};
