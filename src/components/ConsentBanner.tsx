import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { hasUserConsented, saveConsentChoice, updateConsentMode, ConsentState } from '../utils/analytics';

interface ConsentBannerProps {
  onConsent: (consent: ConsentState) => void;
}

export default function ConsentBanner({ onConsent }: ConsentBannerProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    if (!hasUserConsented()) {
      setIsVisible(true);
    }
  }, []);

  const handleAcceptAll = () => {
    const consent: ConsentState = { analytics: true, marketing: true };
    saveConsentChoice(consent);
    updateConsentMode(consent);
    onConsent(consent);
    setIsVisible(false);
  };

  const handleRejectAll = () => {
    const consent: ConsentState = { analytics: false, marketing: false };
    saveConsentChoice(consent);
    updateConsentMode(consent);
    onConsent(consent);
    setIsVisible(false);
  };

  const handleSavePreferences = (analytics: boolean, marketing: boolean) => {
    const consent: ConsentState = { analytics, marketing };
    saveConsentChoice(consent);
    updateConsentMode(consent);
    onConsent(consent);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 animate-slide-up">
      <div className="mx-4 mb-4 bg-[#0A0A0A]/95 backdrop-blur-md border border-it-silver/30 rounded-xl shadow-[0_-10px_40px_rgba(0,0,0,0.8)] p-6 max-w-3xl mx-auto">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex-1">
            <h3 className="font-montserrat font-bold text-white text-lg mb-2">
              Privacy & Cookies
            </h3>
            <p className="font-montserrat text-it-silver text-sm leading-relaxed">
              We use cookies to enhance your experience and analyze site usage. We respect your privacy and only use analytics if you consent.
            </p>
          </div>
          <button
            onClick={handleRejectAll}
            className="flex-shrink-0 p-2 hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5 text-it-silver hover:text-white" />
          </button>
        </div>

        {showDetails && (
          <div className="mb-6 p-4 bg-white/5 border border-it-silver/20 rounded-lg">
            <div className="space-y-4">
              <div>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="w-4 h-4 rounded accent-it-blue"
                    disabled
                  />
                  <span className="font-montserrat text-sm text-white">
                    Essential Cookies <span className="text-it-silver">(Always active)</span>
                  </span>
                </label>
                <p className="font-montserrat text-xs text-it-silver mt-1 ml-7">
                  Required for basic site functionality and security.
                </p>
              </div>

              <div>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    id="analytics"
                    defaultChecked={false}
                    className="w-4 h-4 rounded accent-it-blue"
                  />
                  <span className="font-montserrat text-sm text-white group-hover:text-it-blue transition-colors">
                    Analytics
                  </span>
                </label>
                <p className="font-montserrat text-xs text-it-silver mt-1 ml-7">
                  Help us improve by analyzing how you use our site.
                </p>
              </div>

              <div>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    id="marketing"
                    defaultChecked={false}
                    className="w-4 h-4 rounded accent-it-blue"
                  />
                  <span className="font-montserrat text-sm text-white group-hover:text-it-blue transition-colors">
                    Marketing
                  </span>
                </label>
                <p className="font-montserrat text-xs text-it-silver mt-1 ml-7">
                  Allow personalized ads and marketing content.
                </p>
              </div>
            </div>

            <button
              onClick={() => {
                const analyticsCheckbox = document.getElementById('analytics') as HTMLInputElement;
                const marketingCheckbox = document.getElementById('marketing') as HTMLInputElement;
                handleSavePreferences(analyticsCheckbox?.checked || false, marketingCheckbox?.checked || false);
              }}
              className="w-full mt-4 px-4 py-2 bg-it-blue hover:bg-it-blue/80 text-white font-montserrat font-semibold rounded-lg transition-all duration-300"
            >
              Save Preferences
            </button>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-3 items-center">
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="px-4 py-2 text-it-silver hover:text-white font-montserrat font-medium transition-colors text-sm"
          >
            {showDetails ? 'Hide Details' : 'Customize'}
          </button>

          <button
            onClick={handleRejectAll}
            className="px-6 py-2 border border-it-silver/40 hover:border-it-silver/80 text-it-silver hover:text-white font-montserrat font-semibold rounded-lg transition-all duration-300 text-sm"
          >
            Reject All
          </button>

          <button
            onClick={handleAcceptAll}
            className="px-6 py-2 bg-it-red hover:bg-it-red/80 text-white font-montserrat font-semibold rounded-lg shadow-[0_0_20px_rgba(199,0,57,0.4)] hover:shadow-[0_0_30px_rgba(199,0,57,0.7)] transition-all duration-300 transform hover:scale-105 text-sm"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
}
