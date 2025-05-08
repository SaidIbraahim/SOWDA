// Google Analytics 4 configuration
export const GA_TRACKING_ID = 'G-XXXXXXXXXX'; // Replace with your GA4 measurement ID

// Initialize GA4
export const initGA = () => {
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', GA_TRACKING_ID, {
      page_path: window.location.pathname,
    });
  }
};

// Track page views
export const pageview = (url) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

// Track events
export const event = ({ action, category, label, value }) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Track form submissions
export const trackFormSubmission = (formName) => {
  event({
    action: 'form_submission',
    category: 'Forms',
    label: formName,
  });
};

// Track button clicks
export const trackButtonClick = (buttonName) => {
  event({
    action: 'button_click',
    category: 'Buttons',
    label: buttonName,
  });
};

// Track outbound links
export const trackOutboundLink = (url) => {
  event({
    action: 'outbound_link',
    category: 'Links',
    label: url,
  });
}; 