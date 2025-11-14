// src/lib/gtag.js
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || '';

// Pageview: call on route change
export const pageview = (url) => {
  if (!GA_MEASUREMENT_ID) return;
  if (typeof window === 'undefined') return;
  if (!window.gtag) return;
  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: url,
  });
};

// Event: use for custom events
export const event = ({ action, category, label, value }) => {
  if (!GA_MEASUREMENT_ID) return;
  if (typeof window === 'undefined') return;
  if (!window.gtag) return;
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value,
  });
};
