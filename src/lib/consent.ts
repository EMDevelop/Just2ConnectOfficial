"use client";

import { useSyncExternalStore } from "react";

export enum ConsentStatus {
  /** No choice recorded yet. */
  UNKNOWN = "UNKNOWN",
  GRANTED = "GRANTED",
  DENIED = "DENIED",
}

export interface ConsentState {
  readonly status: ConsentStatus;
  /**
   * False while rendering on the server and during hydration, so the banner
   * never flashes for a visitor who has already answered it.
   */
  readonly isHydrated: boolean;
  readonly grant: () => void;
  readonly deny: () => void;
}

const STORAGE_KEY = "j2c-analytics-consent";

const listeners = new Set<() => void>();

let cachedStatus: ConsentStatus | null = null;

function readStoredStatus(): ConsentStatus {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);

    if (stored === ConsentStatus.GRANTED || stored === ConsentStatus.DENIED) {
      return stored;
    }
  } catch {
    // Storage is unavailable in some private browsing modes. Treat as no choice.
  }

  return ConsentStatus.UNKNOWN;
}

function subscribe(listener: () => void): () => void {
  listeners.add(listener);

  return () => {
    listeners.delete(listener);
  };
}

function getSnapshot(): ConsentStatus {
  if (cachedStatus === null) {
    cachedStatus = readStoredStatus();
  }

  return cachedStatus;
}

function getServerSnapshot(): ConsentStatus {
  return ConsentStatus.UNKNOWN;
}

function setStatus(next: ConsentStatus): void {
  cachedStatus = next;

  try {
    window.localStorage.setItem(STORAGE_KEY, next);
  } catch {
    // A failed write only means the banner reappears on the next visit.
  }

  for (const listener of listeners) {
    listener();
  }
}

function alwaysTrue(): boolean {
  return true;
}

function alwaysFalse(): boolean {
  return false;
}

export function useConsent(): ConsentState {
  const status = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );
  const isHydrated = useSyncExternalStore(subscribe, alwaysTrue, alwaysFalse);

  return {
    status,
    isHydrated,
    grant: () => setStatus(ConsentStatus.GRANTED),
    deny: () => setStatus(ConsentStatus.DENIED),
  };
}
