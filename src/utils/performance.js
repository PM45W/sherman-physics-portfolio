// Performance monitoring utility
class PerformanceMonitor {
  constructor() {
    this.metrics = {
      pageLoads: {},
      interactions: {},
      errors: []
    };
    this.init();
  }

  init() {
    // Monitor page load performance
    if (typeof window !== 'undefined') {
      window.addEventListener('load', () => {
        this.recordPageLoad();
      });

      // Monitor Core Web Vitals
      this.monitorCoreWebVitals();
    }
  }

  recordPageLoad() {
    const navigation = performance.getEntriesByType('navigation')[0];
    const paint = performance.getEntriesByType('paint');
    
    const metrics = {
      timestamp: Date.now(),
      url: window.location.href,
      loadTime: navigation.loadEventEnd - navigation.loadEventStart,
      domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
      firstPaint: paint.find(entry => entry.name === 'first-paint')?.startTime,
      firstContentfulPaint: paint.find(entry => entry.name === 'first-contentful-paint')?.startTime
    };

    this.metrics.pageLoads[window.location.href] = metrics;
    
    // Log performance data in development
    if (process.env.NODE_ENV === 'development') {
      console.log('Page Load Performance:', metrics);
    }
  }

  monitorCoreWebVitals() {
    // Monitor Largest Contentful Paint (LCP)
    if ('PerformanceObserver' in window) {
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        this.metrics.lcp = lastEntry.startTime;
        
        if (process.env.NODE_ENV === 'development') {
          console.log('LCP:', lastEntry.startTime);
        }
      });
      
      try {
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
      } catch (e) {
        // Browser doesn't support LCP
      }

      // Monitor First Input Delay (FID)
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach(entry => {
          this.metrics.fid = entry.processingStart - entry.startTime;
          
          if (process.env.NODE_ENV === 'development') {
            console.log('FID:', entry.processingStart - entry.startTime);
          }
        });
      });
      
      try {
        fidObserver.observe({ entryTypes: ['first-input'] });
      } catch (e) {
        // Browser doesn't support FID
      }
    }
  }

  recordInteraction(name, duration) {
    this.metrics.interactions[name] = {
      timestamp: Date.now(),
      duration
    };
    
    if (process.env.NODE_ENV === 'development') {
      console.log(`Interaction: ${name} took ${duration}ms`);
    }
  }

  recordError(error, context = {}) {
    const errorRecord = {
      timestamp: Date.now(),
      error: error.message || error,
      stack: error.stack,
      context,
      url: window.location.href
    };
    
    this.metrics.errors.push(errorRecord);
    
    if (process.env.NODE_ENV === 'development') {
      console.error('Error recorded:', errorRecord);
    }
  }

  getMetrics() {
    return this.metrics;
  }

  // Export metrics for analytics
  exportMetrics() {
    return {
      ...this.metrics,
      userAgent: navigator.userAgent,
      screenResolution: `${window.screen.width}x${window.screen.height}`,
      viewport: `${window.innerWidth}x${window.innerHeight}`
    };
  }
}

// Create singleton instance
const performanceMonitor = new PerformanceMonitor();

export default performanceMonitor; 