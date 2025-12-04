import { useState, useEffect } from "react";

export default function ConsentBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [consentGiven, setConsentGiven] = useState<boolean | null>(null);

  useEffect(() => {
    // Load saved consent from localStorage
    const savedConsent = localStorage.getItem("adConsent");
    if (savedConsent !== null) {
      setConsentGiven(savedConsent === "true");
    }

    // Region check
    async function checkRegion() {
      try {
        const res = await fetch("https://ipapi.co/json/");
        const data = await res.json();
        const euCountries = [
          "DE",
          "FR",
          "IT",
          "ES",
          "NL",
          "BE",
          "LU",
          "AT",
          "SE",
          "DK",
          "FI",
          "IE",
          "PT",
          "GR",
          "CY",
          "MT",
          "PL",
          "CZ",
          "SK",
          "HU",
          "RO",
          "BG",
          "HR",
          "SI",
          "EE",
          "LV",
          "LT",
        ];
        const uk = ["GB"];
        if (euCountries.includes(data.country) || uk.includes(data.country)) {
          setShowBanner(true);
        }
      } catch (err) {
        console.error("Region check failed", err);
      }
    }
    checkRegion();
  }, []);

  const handleConsent = (value: boolean) => {
    setConsentGiven(value);
    localStorage.setItem("adConsent", value.toString());
  };

  if (!showBanner || consentGiven !== null) return null;

  return (
    <div className="fixed bottom-0 bg-white shadow-lg p-4 text-sm z-50">
      <p>
        We display ads through third-party ad networks. These may use cookies or
        similar technologies. You can accept or reject advertising cookies. Ads
        will still appear either way.
      </p>
      <div className="mt-2 flex gap-2">
        <button
          className="bg-blue-600 text-white px-3 py-1 rounded"
          onClick={() => handleConsent(true)}
        >
          Accept
        </button>
        <button
          className="bg-gray-300 px-3 py-1 rounded"
          onClick={() => handleConsent(false)}
        >
          Reject
        </button>
      </div>
    </div>
  );
}
