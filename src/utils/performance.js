// Performance monitoring utility
export const initPerformanceMonitoring = () => {
  if (typeof window !== 'undefined' && 'performance' in window) {
    // Monitor Largest Contentful Paint (LCP)
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      const lastEntry = entries[entries.length - 1];
      console.log('LCP:', lastEntry.startTime);
      // Send to analytics
    }).observe({ entryTypes: ['largest-contentful-paint'] });

    // Monitor First Input Delay (FID)
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      entries.forEach(entry => {
        console.log('FID:', entry.processingStart - entry.startTime);
        // Send to analytics
      });
    }).observe({ entryTypes: ['first-input'] });

    // Monitor Cumulative Layout Shift (CLS)
    new PerformanceObserver((entryList) => {
      let clsValue = 0;
      const entries = entryList.getEntries();
      entries.forEach(entry => {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
        }
      });
      console.log('CLS:', clsValue);
      // Send to analytics
    }).observe({ entryTypes: ['layout-shift'] });
  }
};

// Resource timing monitoring
export const monitorResourceTiming = () => {
  if (typeof window !== 'undefined' && 'performance' in window) {
    const resources = performance.getEntriesByType('resource');
    resources.forEach(resource => {
      console.log(`${resource.name}:`, {
        duration: resource.duration,
        size: resource.transferSize,
        type: resource.initiatorType
      });
    });
  }
};

// Page load timing
export const getPageLoadMetrics = () => {
  if (typeof window !== 'undefined' && 'performance' in window) {
    const timing = performance.timing;
    return {
      dnsLookup: timing.domainLookupEnd - timing.domainLookupStart,
      tcpConnection: timing.connectEnd - timing.connectStart,
      serverResponse: timing.responseEnd - timing.requestStart,
      domLoad: timing.domComplete - timing.domLoading,
      pageLoad: timing.loadEventEnd - timing.navigationStart
    };
  }
  return null;
}; 