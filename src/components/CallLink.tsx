"use client";

import type { ReactNode } from "react";

import { telHref } from "@/content/business";
import { AnalyticsEvent, trackEvent } from "@/lib/analytics";

export interface CallLinkProps {
  readonly children: ReactNode;
  /** Identifies which call link was used, e.g. "header". */
  readonly source: string;
  readonly className?: string;
}

/**
 * `tel:` link that reports a conversion. Every phone number on the site goes
 * through this so calls can be attributed, which the previous build could not do.
 */
export function CallLink({ children, source, className }: CallLinkProps) {
  function handleClick(): void {
    trackEvent(AnalyticsEvent.CLICK_TO_CALL, {
      source,
      page_path: window.location.pathname,
    });
  }

  return (
    <a href={telHref} className={className} onClick={handleClick}>
      {children}
    </a>
  );
}
