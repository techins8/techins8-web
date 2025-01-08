import { env } from "./env";

type FacebookPixelEvent = 
  | 'PageView' 
  | 'AddToCart' 
  | 'Purchase' 
  | 'Subscribe' 
  | 'StartTrial' 
  | 'Lead' 
  | 'ViewContent';

type FacebookPixelOptions = {
  value?: number;
  currency?: string;
  content_name?: string;
  content_type?: string;
  content_ids?: string[];
  content_category?: string;
  num_items?: number;
  status?: string;
  [key: string]: string | number | string[] | undefined;
};

type FacebookPixel = {
  (event: 'init', pixelId: string): void;
  (event: 'track', eventName: FacebookPixelEvent, options?: FacebookPixelOptions): void;
  push(args: unknown[]): void;
  loaded: boolean;
  version: string;
  queue: unknown[];
};

declare global {
  interface Window {
    fbq: FacebookPixel;
    _fbq: FacebookPixel;
  }
}

export const FB_PIXEL_ID = env.FACEBOOK_PIXEL_ID as string;

export const pageview = () => {
    window.fbq('track', 'PageView');
};

export const event = (name: FacebookPixelEvent, options: FacebookPixelOptions = {}) => {
    window.fbq('track', name, options)
};

// Common events you might want to track
export const events = {
  addToCart: (value: number, currency: string) => 
    event('AddToCart', { value, currency }),
  purchase: (value: number, currency: string) => 
    event('Purchase', { value, currency }),
  subscribe: (value: number, currency: string) => 
    event('Subscribe', { value, currency }),
  startTrial: () => 
    event('StartTrial'),
  leadGeneration: () => 
    event('Lead'),
  viewContent: (contentName: string) => 
    event('ViewContent', { content_name: contentName }),
};
