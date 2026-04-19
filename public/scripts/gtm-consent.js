/*
  GTM consent-gated loader. Loads GTM only if the user previously accepted
  cookie consent (localStorage key 'cookie_consent' === 'accepted').
  Externalized from index.html so we can drop 'unsafe-inline' from CSP script-src.
*/
(function () {
  window.dataLayer = window.dataLayer || [];
  window.loadGTM = function () {
    if (window.__gtmLoaded) return;
    window.__gtmLoaded = true;
    var f = document.getElementsByTagName('script')[0];
    var j = document.createElement('script');
    j.async = true;
    j.src = 'https://www.googletagmanager.com/gtm.js?id=GTM-TMQ589CP';
    f.parentNode.insertBefore(j, f);
    window.dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
  };
  try {
    if (localStorage.getItem('cookie_consent') === 'accepted') {
      if ('requestIdleCallback' in window) {
        requestIdleCallback(window.loadGTM);
      } else {
        setTimeout(window.loadGTM, 2000);
      }
    }
  } catch (e) {}
})();
