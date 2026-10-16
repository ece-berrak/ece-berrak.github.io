// GA4 init + Google Consent Mode v2 default deny.
// Sets all non-essential storage to 'denied' BEFORE the gtag.js async load
// processes the dataLayer. The cookie-consent banner updates these via
// gtag('consent','update',...) once the user makes a choice.
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}

// Consent Mode v2 — default deny (TTDSG / GDPR baseline).
gtag('consent', 'default', {
  analytics_storage:    'denied',
  ad_storage:           'denied',
  ad_user_data:         'denied',
  ad_personalization:   'denied',
  functionality_storage:'granted',
  security_storage:     'granted',
  wait_for_update:      500
});

gtag('js', new Date());
gtag('config', 'G-50KRVTC4H7', { anonymize_ip: true });
