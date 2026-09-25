"use client";

import { GoogleAnalytics } from "@next/third-parties/google";

import { isAnalyticsConfigured, publicEnv } from "@/config/public-env";
import { ConsentStatus, useConsent } from "@/lib/consent";

/**
 * Loads GA4 only after the visitor opts in, which is what UK PECR requires for
 * analytics cookies. The previous build fired Analytics on first paint.
 */
export function AnalyticsGate() {
  const { status } = useConsent();

  if (!isAnalyticsConfigured()) {
    return null;
  }

  if (status !== ConsentStatus.GRANTED) {
    return null;
  }

  return <GoogleAnalytics gaId={publicEnv.gaMeasurementId} />;
}
