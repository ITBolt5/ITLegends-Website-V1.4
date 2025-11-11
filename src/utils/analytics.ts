const GA_ID = 'G-XXXXXXXXXX';

export interface ConsentState {
  analytics: boolean;
  marketing: boolean;
}

const CONSENT_STORAGE_KEY = 'analytics_consent';

export function initializeAnalytics(consent: ConsentState): void {
  if (!consent.analytics) {
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: unknown[]) {
      window.dataLayer?.push(arguments);
    }
    gtag('consent', 'default', {
      'analytics_storage': 'denied',
      'marketing_storage': 'denied',
      'ad_storage': 'denied',
      'personalization_storage': 'denied',
    });
    return;
  }

  window.dataLayer = window.dataLayer || [];
  function gtag(...args: unknown[]) {
    window.dataLayer?.push(arguments);
  }
  gtag('js', new Date());
  gtag('config', GA_ID);

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(script);
}

export function updateConsentMode(consent: ConsentState): void {
  if (!window.gtag) {
    window.dataLayer = window.dataLayer || [];
    window.gtag = function() {
      window.dataLayer?.push(arguments);
    };
  }

  window.gtag('consent', 'update', {
    'analytics_storage': consent.analytics ? 'granted' : 'denied',
    'marketing_storage': consent.marketing ? 'granted' : 'denied',
    'ad_storage': consent.marketing ? 'granted' : 'denied',
    'personalization_storage': consent.marketing ? 'granted' : 'denied',
  });
}

export function getStoredConsent(): ConsentState | null {
  const stored = localStorage.getItem(CONSENT_STORAGE_KEY);
  if (!stored) return null;
  try {
    return JSON.parse(stored);
  } catch {
    return null;
  }
}

export function saveConsentChoice(consent: ConsentState): void {
  localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(consent));
}

export function hasUserConsented(): boolean {
  return localStorage.getItem(CONSENT_STORAGE_KEY) !== null;
}

declare global {
  interface Window {
    dataLayer?: IArguments[];
    gtag?: (...args: unknown[]) => void;
  }
}
