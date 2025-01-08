// lib/fpixel.ts

// Standard Facebook Pixel events
export const StandardEvents = {
  PURCHASE: 'Purchase',
  LEAD: 'Lead',
  START_TRIAL: 'StartTrial',
  COMPLETE_REGISTRATION: 'CompleteRegistration',
  ADD_TO_CART: 'AddToCart',
  VIEW_CONTENT: 'ViewContent',
  SEARCH: 'Search',
  CONTACT: 'Contact',
  CUSTOMIZE_PRODUCT: 'CustomizeProduct',
  DONATE: 'Donate',
  FIND_LOCATION: 'FindLocation',
  SCHEDULE: 'Schedule',
  SUBSCRIBE: 'Subscribe',
  PAGE_VIEW: 'PageView',
} as const;

type StandardEvent = typeof StandardEvents[keyof typeof StandardEvents];

// Custom event type to allow string literals for custom events
type CustomEvent = string & {}; // This allows any string but keeps type checking

// Union type for all possible event names
export type FacebookPixelEvent = StandardEvent | CustomEvent;

// Base options interface
interface BasePixelOptions {
  value?: number;
  currency?: string;
  content_name?: string;
  content_type?: string;
  content_ids?: string[];
  content_category?: string;
  num_items?: number;
  status?: string;
  delivery_category?: 'in_store' | 'home_delivery' | 'curbside';
  [key: string]: string | number | string[] | undefined; // More specific type for additional parameters
}

// Specific options for different event types
interface PurchaseOptions extends BasePixelOptions {
  value: number; // Required for Purchase
  currency: string; // Required for Purchase
  transaction_id?: string;
}

interface LeadOptions extends BasePixelOptions {
  lead_id?: string;
  lead_type?: string;
}

interface ViewContentOptions extends BasePixelOptions {
  content_ids: string[]; // Required for ViewContent
  content_type: string; // Required for ViewContent
}

// Type guard functions
const isPurchaseOptions = (options: BasePixelOptions): options is PurchaseOptions => {
  return typeof options.value === 'number' && typeof options.currency === 'string';
};

const isViewContentOptions = (options: BasePixelOptions): options is ViewContentOptions => {
  return Array.isArray(options.content_ids) && typeof options.content_type === 'string';
};

// Main tracking function with debug mode and error handling
const track = (eventName: FacebookPixelEvent, options: BasePixelOptions = {}) => {
  try {
    if (typeof window === 'undefined' || !window.fbq) {
      console.warn('[FB Pixel] Facebook Pixel not initialized');
      return;
    }

    const debug = process.env.NODE_ENV !== 'production';
    if (debug) {
      console.log(`[FB Pixel] Tracking event: ${eventName}`, options);
    }

    window.fbq('track', eventName, options);
  } catch (error) {
    console.error('[FB Pixel] Error tracking event:', error);
  }
};

// Page view tracking
export const pageview = () => {
  track(StandardEvents.PAGE_VIEW);
};

// Generic event tracking with type checking
export const event = <T extends BasePixelOptions>(
  name: FacebookPixelEvent,
  options: T = {} as T
) => {
  track(name, options);
};

// Typed event tracking functions
export const events = {
  purchase: (options: PurchaseOptions) => {
    if (!isPurchaseOptions(options)) {
      console.error('[FB Pixel] Invalid purchase options. Required: value and currency');
      return;
    }
    track(StandardEvents.PURCHASE, options);
  },

  lead: (options: LeadOptions = {}) => {
    track(StandardEvents.LEAD, options);
  },

  viewContent: (options: ViewContentOptions) => {
    if (!isViewContentOptions(options)) {
      console.error('[FB Pixel] Invalid viewContent options. Required: content_ids and content_type');
      return;
    }
    track(StandardEvents.VIEW_CONTENT, options);
  },

  startTrial: (options: BasePixelOptions = {}) => {
    track(StandardEvents.START_TRIAL, options);
  },

  subscribe: (options: BasePixelOptions = {}) => {
    track(StandardEvents.SUBSCRIBE, options);
  },

  addToCart: (options: BasePixelOptions = {}) => {
    track(StandardEvents.ADD_TO_CART, options);
  },

  search: (options: BasePixelOptions = {}) => {
    track(StandardEvents.SEARCH, options);
  },

  // Custom event tracking with type safety
  custom: (eventName: CustomEvent, options: BasePixelOptions = {}) => {
    track(eventName, options);
  }
};

// Example usage:
/*
// Track a purchase
events.purchase({
  value: 99.99,
  currency: 'USD',
  content_name: 'Premium Subscription',
  transaction_id: 'TX_123'
});

// Track view content
events.viewContent({
  content_ids: ['PROD_123'],
  content_type: 'product',
  content_name: 'Blue Shirt',
  value: 29.99,
  currency: 'USD'
});

// Track a custom event
events.custom('UserAction', {
  action_type: 'click',
  element_id: 'signup_button'
});
*/

// Types for global window object
declare global {
  interface Window {
    fbq: FacebookPixel;
    _fbq: FacebookPixel;
  }
}

interface FacebookPixel {
  (event: 'init', pixelId: string): void;
  (event: 'track', eventName: FacebookPixelEvent, options?: BasePixelOptions): void;
  push(args: unknown[]): void;
  loaded: boolean;
  version: string;
  queue: unknown[];
}