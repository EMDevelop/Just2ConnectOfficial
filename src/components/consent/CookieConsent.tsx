"use client";

import Link from "next/link";

import { isAnalyticsConfigured } from "@/config/public-env";
import { ConsentStatus, useConsent } from "@/lib/consent";

export function CookieConsent() {
  const { status, isHydrated, grant, deny } = useConsent();

  // Nothing to consent to when analytics is not configured.
  if (!isAnalyticsConfigured()) {
    return null;
  }

  if (!isHydrated) {
    return null;
  }

  if (status !== ConsentStatus.UNKNOWN) {
    return null;
  }

  return (
    <div
      className="cookieConsent"
      role="dialog"
      aria-label="Cookies"
      aria-live="polite"
    >
      <p className="cookieConsent__text">
        We would like to use Google Analytics to count visits and see which
        pages are useful. Nothing is set unless you agree. See our{" "}
        <Link href="/privacy-policy" className="cookieConsent__link">
          privacy policy
        </Link>
        .
      </p>

      <div className="cookieConsent__actions">
        <button
          type="button"
          className="cookieConsent__button cookieConsent__button--accept"
          onClick={grant}
        >
          Accept
        </button>
        <button
          type="button"
          className="cookieConsent__button cookieConsent__button--reject"
          onClick={deny}
        >
          No thanks
        </button>
      </div>
    </div>
  );
}
