/**
 * Analytics Configuration
 * Configure different analytics providers and their settings
 */

export const ANALYTICS_CONFIG = {
  // Google Analytics 4 Configuration
  googleAnalytics: {
    enabled: true,
    measurementId: 'G-XXXXXXXXXX', // Replace with your actual GA4 measurement ID
    debugMode: false, // Set to true for development
    customDimensions: {
      'app_name': 'cd1',
      'session_id': 'cd2',
      'user_type': 'cd3'
    },
    customMetrics: {
      'session_duration': 'cm1',
      'app_interactions': 'cm2'
    }
  },

  // Mixpanel Configuration (if you want to add Mixpanel)
  mixpanel: {
    enabled: false,
    token: 'YOUR_MIXPANEL_TOKEN',
    debugMode: false
  },

  // Hotjar Configuration (for heatmaps and session recordings)
  hotjar: {
    enabled: false,
    hjid: 'YOUR_HOTJAR_ID',
    hjsv: '6'
  },

  // Custom Analytics Configuration
  custom: {
    enabled: true,
    endpoint: '/api/analytics', // Your custom analytics endpoint
    batchSize: 10,
    flushInterval: 30000 // 30 seconds
  }
};

/**
 * Analytics Events Configuration
 * Define standard events for your Windows XP interface
 */
export const ANALYTICS_EVENTS = {
  // App Events
  APP_OPEN: 'app_open',
  APP_CLOSE: 'app_close',
  APP_MINIMIZE: 'app_minimize',
  APP_MAXIMIZE: 'app_maximize',

  // Desktop Events
  DESKTOP_ICON_CLICK: 'desktop_icon_click',
  DESKTOP_ICON_DOUBLE_CLICK: 'desktop_icon_double_click',
  DESKTOP_RIGHT_CLICK: 'desktop_right_click',

  // Start Menu Events
  START_MENU_OPEN: 'start_menu_open',
  START_MENU_CLOSE: 'start_menu_close',
  START_MENU_ITEM_CLICK: 'start_menu_item_click',

  // Taskbar Events
  TASKBAR_BUTTON_CLICK: 'taskbar_button_click',
  TASKBAR_PROGRAM_SWITCH: 'taskbar_program_switch',

  // Window Events
  WINDOW_DRAG: 'window_drag',
  WINDOW_RESIZE: 'window_resize',
  WINDOW_FOCUS: 'window_focus',
  WINDOW_BLUR: 'window_blur',

  // System Events
  BOOT_COMPLETE: 'boot_complete',
  LOGIN_SUCCESS: 'login_success',
  LOGOUT: 'logout',
  SHUTDOWN: 'shutdown',

  // Form Events
  FORM_START: 'form_start',
  FORM_COMPLETE: 'form_complete',
  FORM_ERROR: 'form_error',

  // Navigation Events
  EXTERNAL_LINK_CLICK: 'external_link_click',
  INTERNAL_NAVIGATION: 'internal_navigation',

  // Performance Events
  PAGE_LOAD_TIME: 'page_load_time',
  APP_LOAD_TIME: 'app_load_time',
  INTERACTION_RESPONSE_TIME: 'interaction_response_time'
};

/**
 * Analytics Parameters Configuration
 * Define standard parameters for events
 */
export const ANALYTICS_PARAMETERS = {
  // App Parameters
  APP_NAME: 'app_name',
  APP_TYPE: 'app_type',
  APP_VERSION: 'app_version',

  // User Parameters
  USER_ID: 'user_id',
  SESSION_ID: 'session_id',
  USER_TYPE: 'user_type',

  // Interaction Parameters
  ELEMENT_ID: 'element_id',
  ELEMENT_TYPE: 'element_type',
  ELEMENT_TEXT: 'element_text',

  // Performance Parameters
  LOAD_TIME: 'load_time',
  RESPONSE_TIME: 'response_time',
  ERROR_MESSAGE: 'error_message',

  // Navigation Parameters
  FROM_PAGE: 'from_page',
  TO_PAGE: 'to_page',
  NAVIGATION_TYPE: 'navigation_type',

  // Form Parameters
  FORM_NAME: 'form_name',
  FORM_FIELDS: 'form_fields',
  FORM_SUCCESS: 'form_success'
};

/**
 * Analytics Helper Functions
 */
export class AnalyticsHelper {
  /**
   * Get analytics configuration
   */
  static getConfig() {
    return ANALYTICS_CONFIG;
  }

  /**
   * Check if analytics is enabled
   */
  static isEnabled(provider = 'googleAnalytics') {
    return ANALYTICS_CONFIG[provider]?.enabled || false;
  }

  /**
   * Get measurement ID for GA4
   */
  static getGA4MeasurementId() {
    return ANALYTICS_CONFIG.googleAnalytics.measurementId;
  }

  /**
   * Format event name for analytics
   */
  static formatEventName(eventName) {
    return eventName.toLowerCase().replace(/\s+/g, '_');
  }

  /**
   * Sanitize parameters for analytics
   */
  static sanitizeParameters(params) {
    const sanitized = {};
    for (const [key, value] of Object.entries(params)) {
      if (value !== null && value !== undefined) {
        sanitized[key] = String(value).substring(0, 100); // Limit length
      }
    }
    return sanitized;
  }

  /**
   * Generate user properties
   */
  static generateUserProperties() {
    return {
      user_type: 'visitor',
      session_id: window.analytics?.sessionId || 'unknown',
      device_type: this.getDeviceType(),
      browser: this.getBrowserInfo(),
      screen_resolution: `${screen.width}x${screen.height}`
    };
  }

  /**
   * Get device type
   */
  static getDeviceType() {
    const userAgent = navigator.userAgent.toLowerCase();
    if (/mobile|android|iphone|ipad|phone/i.test(userAgent)) {
      return 'mobile';
    } else if (/tablet/i.test(userAgent)) {
      return 'tablet';
    } else {
      return 'desktop';
    }
  }

  /**
   * Get browser information
   */
  static getBrowserInfo() {
    const userAgent = navigator.userAgent;
    let browser = 'unknown';
    
    if (userAgent.includes('Chrome')) browser = 'chrome';
    else if (userAgent.includes('Firefox')) browser = 'firefox';
    else if (userAgent.includes('Safari')) browser = 'safari';
    else if (userAgent.includes('Edge')) browser = 'edge';
    else if (userAgent.includes('Opera')) browser = 'opera';
    
    return browser;
  }
}

