/**
 * Analytics Integration for Windows XP Interface
 * Automatically tracks user interactions and system events
 */

import { analytics } from './analytics.js';
import { ANALYTICS_EVENTS, ANALYTICS_PARAMETERS, AnalyticsHelper } from './analyticsConfig.js';

class AnalyticsIntegration {
  constructor() {
    this.isInitialized = false;
    this.trackedElements = new Set();
    this.performanceObserver = null;
  }

  /**
   * Initialize analytics integration
   */
  init() {
    if (this.isInitialized) return;
    
    this.setupPerformanceTracking();
    this.setupAutomaticTracking();
    this.setupErrorTracking();
    this.setupSessionTracking();
    
    this.isInitialized = true;
    console.log('📊 Analytics Integration initialized');
  }

  /**
   * Setup performance tracking
   */
  setupPerformanceTracking() {
    // Track page load time
    window.addEventListener('load', () => {
      const loadTime = performance.now();
      analytics.trackPerformance('page_load_time', Math.round(loadTime), 'ms');
    });

    // Track app load times
    this.performanceObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'measure') {
          analytics.trackPerformance(entry.name, Math.round(entry.duration), 'ms');
        }
      }
    });

    try {
      this.performanceObserver.observe({ entryTypes: ['measure'] });
    } catch (e) {
      console.warn('Performance Observer not supported');
    }
  }

  /**
   * Setup automatic tracking for common interactions
   */
  setupAutomaticTracking() {
    // Track desktop icon clicks
    this.trackDesktopIcons();
    
    // Track start menu interactions
    this.trackStartMenu();
    
    // Track taskbar interactions
    this.trackTaskbar();
    
    // Track window interactions
    this.trackWindows();
    
    // Track form submissions
    this.trackForms();
    
    // Track external links
    this.trackExternalLinks();
  }

  /**
   * Track desktop icon interactions
   */
  trackDesktopIcons() {
    document.addEventListener('click', (event) => {
      const desktopIcon = event.target.closest('.desktop-icon');
      if (desktopIcon && !this.trackedElements.has(desktopIcon)) {
        this.trackedElements.add(desktopIcon);
        
        const appName = desktopIcon.dataset.programName || 'unknown';
        analytics.trackAppOpen(appName, 'desktop_app');
        analytics.trackInteraction('click', 'desktop_icon', {
          app_name: appName,
          element_text: desktopIcon.textContent?.trim()
        });
      }
    });
  }

  /**
   * Track start menu interactions
   */
  trackStartMenu() {
    // Track start button clicks
    const startButton = document.getElementById('start-button');
    if (startButton) {
      startButton.addEventListener('click', () => {
        analytics.trackInteraction('click', 'start_button');
      });
    }

    // Track start menu item clicks
    document.addEventListener('click', (event) => {
      const menuItem = event.target.closest('.menu-item');
      if (menuItem) {
        const itemText = menuItem.textContent?.trim();
        const itemId = menuItem.id;
        
        analytics.trackInteraction('click', 'start_menu_item', {
          item_text: itemText,
          item_id: itemId
        });
      }
    });
  }

  /**
   * Track taskbar interactions
   */
  trackTaskbar() {
    document.addEventListener('click', (event) => {
      const taskbarButton = event.target.closest('.taskbar-program');
      if (taskbarButton) {
        const programName = taskbarButton.dataset.programName || 'unknown';
        
        analytics.trackInteraction('click', 'taskbar_button', {
          program_name: programName
        });
      }
    });
  }

  /**
   * Track window interactions
   */
  trackWindows() {
    // Track window focus/blur
    document.addEventListener('focusin', (event) => {
      const window = event.target.closest('.window');
      if (window) {
        const windowTitle = window.querySelector('.window-title')?.textContent || 'unknown';
        analytics.trackInteraction('focus', 'window', {
          window_title: windowTitle
        });
      }
    });

    document.addEventListener('focusout', (event) => {
      const window = event.target.closest('.window');
      if (window) {
        const windowTitle = window.querySelector('.window-title')?.textContent || 'unknown';
        analytics.trackInteraction('blur', 'window', {
          window_title: windowTitle
        });
      }
    });

    // Track window controls
    document.addEventListener('click', (event) => {
      const closeButton = event.target.closest('.window-close');
      const minimizeButton = event.target.closest('.window-minimize');
      const maximizeButton = event.target.closest('.window-maximize');
      
      if (closeButton) {
        const window = closeButton.closest('.window');
        const windowTitle = window?.querySelector('.window-title')?.textContent || 'unknown';
        analytics.trackInteraction('click', 'window_close', {
          window_title: windowTitle
        });
      }
      
      if (minimizeButton) {
        const window = minimizeButton.closest('.window');
        const windowTitle = window?.querySelector('.window-title')?.textContent || 'unknown';
        analytics.trackInteraction('click', 'window_minimize', {
          window_title: windowTitle
        });
      }
      
      if (maximizeButton) {
        const window = maximizeButton.closest('.window');
        const windowTitle = window?.querySelector('.window-title')?.textContent || 'unknown';
        analytics.trackInteraction('click', 'window_maximize', {
          window_title: windowTitle
        });
      }
    });
  }

  /**
   * Track form submissions
   */
  trackForms() {
    document.addEventListener('submit', (event) => {
      const form = event.target;
      const formName = form.id || form.className || 'unknown_form';
      
      analytics.trackFormSubmission(formName, true, {
        form_action: form.action,
        form_method: form.method
      });
    });

    // Track form field interactions
    document.addEventListener('focus', (event) => {
      if (event.target.tagName === 'INPUT' || event.target.tagName === 'TEXTAREA') {
        const form = event.target.closest('form');
        const formName = form?.id || form?.className || 'unknown_form';
        
        analytics.trackInteraction('focus', 'form_field', {
          field_name: event.target.name || event.target.id,
          field_type: event.target.type,
          form_name: formName
        });
      }
    });
  }

  /**
   * Track external link clicks
   */
  trackExternalLinks() {
    document.addEventListener('click', (event) => {
      const link = event.target.closest('a');
      if (link && link.href && !link.href.startsWith(window.location.origin)) {
        analytics.trackExternalLink(link.href, link.textContent?.trim());
      }
    });
  }

  /**
   * Setup error tracking
   */
  setupErrorTracking() {
    // Track JavaScript errors
    window.addEventListener('error', (event) => {
      analytics.trackError(event.error || event.message, {
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno
      });
    });

    // Track unhandled promise rejections
    window.addEventListener('unhandledrejection', (event) => {
      analytics.trackError(event.reason, {
        type: 'unhandled_promise_rejection'
      });
    });
  }

  /**
   * Setup session tracking
   */
  setupSessionTracking() {
    // Track session duration on page unload
    window.addEventListener('beforeunload', () => {
      analytics.trackSessionDuration();
    });

    // Track visibility changes
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        analytics.trackCustomEvent('page_hidden');
      } else {
        analytics.trackCustomEvent('page_visible');
      }
    });
  }

  /**
   * Track custom app events
   */
  trackAppEvent(eventName, parameters = {}) {
    analytics.trackCustomEvent(eventName, {
      ...AnalyticsHelper.generateUserProperties(),
      ...AnalyticsHelper.sanitizeParameters(parameters)
    });
  }

  /**
   * Track boot sequence
   */
  trackBootSequence() {
    analytics.trackCustomEvent(ANALYTICS_EVENTS.BOOT_COMPLETE, {
      boot_time: Date.now()
    });
  }

  /**
   * Track login success
   */
  trackLoginSuccess() {
    analytics.trackCustomEvent(ANALYTICS_EVENTS.LOGIN_SUCCESS, {
      login_time: Date.now()
    });
  }

  /**
   * Track logout
   */
  trackLogout() {
    analytics.trackCustomEvent(ANALYTICS_EVENTS.LOGOUT, {
      logout_time: Date.now()
    });
  }

  /**
   * Track shutdown
   */
  trackShutdown() {
    analytics.trackCustomEvent(ANALYTICS_EVENTS.SHUTDOWN, {
      shutdown_time: Date.now()
    });
  }

  /**
   * Cleanup
   */
  destroy() {
    if (this.performanceObserver) {
      this.performanceObserver.disconnect();
    }
    this.trackedElements.clear();
    this.isInitialized = false;
  }
}

// Create global analytics integration instance
const analyticsIntegration = new AnalyticsIntegration();

// Export for use in other modules
export { analyticsIntegration, AnalyticsIntegration };

// Make available globally
window.analyticsIntegration = analyticsIntegration;

