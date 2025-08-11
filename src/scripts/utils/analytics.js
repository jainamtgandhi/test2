/**
 * Analytics utility for tracking user interactions
 * Supports Google Analytics 4 and custom event tracking
 */

class Analytics {
  constructor() {
    this.isGA4Loaded = typeof gtag !== 'undefined';
    this.sessionId = this.generateSessionId();
    this.startTime = Date.now();
  }

  /**
   * Generate a unique session ID
   */
  generateSessionId() {
    return 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
  }

  /**
   * Track page view
   */
  trackPageView(pageName, customParams = {}) {
    if (this.isGA4Loaded) {
      gtag('event', 'page_view', {
        page_title: pageName,
        page_location: window.location.href,
        session_id: this.sessionId,
        ...customParams
      });
    }
    
    console.log('📊 Page View:', pageName, customParams);
  }

  /**
   * Track app opening
   */
  trackAppOpen(appName, appType = 'desktop_app') {
    if (this.isGA4Loaded) {
      gtag('event', 'app_opened', {
        app_name: appName,
        app_type: appType,
        session_id: this.sessionId,
        timestamp: Date.now()
      });
    }
    
    console.log('📱 App Opened:', appName, appType);
  }

  /**
   * Track user interaction
   */
  trackInteraction(action, element, customParams = {}) {
    if (this.isGA4Loaded) {
      gtag('event', 'user_interaction', {
        action: action,
        element: element,
        session_id: this.sessionId,
        timestamp: Date.now(),
        ...customParams
      });
    }
    
    console.log('👆 Interaction:', action, element, customParams);
  }

  /**
   * Track form submission
   */
  trackFormSubmission(formName, success = true, customParams = {}) {
    if (this.isGA4Loaded) {
      gtag('event', 'form_submit', {
        form_name: formName,
        success: success,
        session_id: this.sessionId,
        timestamp: Date.now(),
        ...customParams
      });
    }
    
    console.log('📝 Form Submit:', formName, success, customParams);
  }

  /**
   * Track external link clicks
   */
  trackExternalLink(url, linkText) {
    if (this.isGA4Loaded) {
      gtag('event', 'external_link_click', {
        link_url: url,
        link_text: linkText,
        session_id: this.sessionId,
        timestamp: Date.now()
      });
    }
    
    console.log('🔗 External Link:', url, linkText);
  }

  /**
   * Track session duration
   */
  trackSessionDuration() {
    const duration = Date.now() - this.startTime;
    
    if (this.isGA4Loaded) {
      gtag('event', 'session_duration', {
        session_id: this.sessionId,
        duration_ms: duration,
        duration_seconds: Math.round(duration / 1000)
      });
    }
    
    console.log('⏱️ Session Duration:', Math.round(duration / 1000), 'seconds');
  }

  /**
   * Track custom event
   */
  trackCustomEvent(eventName, parameters = {}) {
    if (this.isGA4Loaded) {
      gtag('event', eventName, {
        session_id: this.sessionId,
        timestamp: Date.now(),
        ...parameters
      });
    }
    
    console.log('🎯 Custom Event:', eventName, parameters);
  }

  /**
   * Track error
   */
  trackError(error, context = {}) {
    if (this.isGA4Loaded) {
      gtag('event', 'error', {
        error_message: error.message || error,
        error_stack: error.stack,
        session_id: this.sessionId,
        timestamp: Date.now(),
        ...context
      });
    }
    
    console.error('❌ Error Tracked:', error, context);
  }

  /**
   * Track performance metrics
   */
  trackPerformance(metricName, value, unit = 'ms') {
    if (this.isGA4Loaded) {
      gtag('event', 'performance', {
        metric_name: metricName,
        metric_value: value,
        metric_unit: unit,
        session_id: this.sessionId,
        timestamp: Date.now()
      });
    }
    
    console.log('⚡ Performance:', metricName, value, unit);
  }
}

// Create global analytics instance
const analytics = new Analytics();

// Export for use in other modules
export { analytics, Analytics };

// Make available globally for easy access
window.analytics = analytics;

