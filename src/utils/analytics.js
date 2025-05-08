// Google Analytics 4 configuration
export const GA_TRACKING_ID = 'G-B5NJWKHV4R'; // GA4 Measurement ID

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
      stream_id: '11196818354' // Adding stream ID for better tracking
    });
  }
};

// Track page views
export const pageview = (url) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
      stream_id: '11196818354'
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
      stream_id: '11196818354'
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