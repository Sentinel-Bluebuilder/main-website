// ─── Globals bootstrap ───
// The original site shipped three browser scripts that communicated through
// `window`: a tokens script set window.SENTINEL / window.SENTINEL_LINKS, an
// unpacker set window.__resources (asset URLs), and the three component files
// hung their shared components/hooks (atomStyles, ChipDark, SentinelMark,
// useIsMobile, every section) on `window` so later files could read them.
//
// To keep the ported components byte-for-byte faithful — they still say
// `window.SENTINEL`, `window.__resources.heroVideo`, `window.SentinelMark` —
// we reproduce that contract on `globalThis`. On the server `window` is
// undefined, so we alias it to `globalThis`; the components then resolve the
// same names whether they render on the server or hydrate in the browser.
//
// Import this module for its side effects BEFORE the component modules.

import * as React from 'react';
import { SENTINEL, SENTINEL_LINKS } from './sentinel';
import { RESOURCES } from './resources';
import {
  DEFAULT_LOCALE,
  LOCALE_COOKIE,
  LOCALE_NAMES,
  LOCALES,
  isRtl,
  makeT,
  messagesFor,
  type Locale,
  type StringKey,
} from '../i18n';

const g = globalThis as unknown as Record<string, unknown>;

// On the server there is no `window`; make it the global object so the
// components' `window.*` lookups resolve. In the browser `window` already
// exists and === globalThis, so this is a no-op there.
if (typeof (g as { window?: unknown }).window === 'undefined') {
  (g as { window?: unknown }).window = g;
}

// React is referenced as a bare global (`const { useState } = React`) inside
// the ported component files, mirroring the UMD <script> the bundle loaded.
g.React = React;

// Token + link contract.
g.SENTINEL = SENTINEL;
g.SENTINEL_LINKS = SENTINEL_LINKS;

// Asset URL map (was window.__resources, populated by the unpacker).
g.__resources = RESOURCES;

// ─── i18n bootstrap ───
// The ported components read strings through a single global, window.T(key,
// fallback). We install it here (default English) so the contract exists the
// moment the components evaluate. On the server, the middleware calls
// setActiveLocale() per request BEFORE the island renders, swapping in the
// resolved locale's table so SSR output matches the language. In the browser,
// the active locale is serialized into the page (window.__locale) and re-applied
// during hydration so the client renders the same strings the server did.
export function setActiveLocale(locale: Locale): void {
  g.__locale = locale;
  g.__messages = messagesFor(locale);
  g.T = makeT(locale);
}

// Static i18n metadata the language-switcher component reads off `window`
// (the ported components avoid importing modules directly — they consume
// everything through globals, mirroring the original bundle's contract).
g.__i18n = {
  cookie: LOCALE_COOKIE,
  locales: LOCALES,
  names: LOCALE_NAMES,
  isRtl: (l: Locale) => isRtl(l),
};

// Browser hydration path: if the server stamped a locale onto the page, honour
// it; otherwise fall back to the default. (No-op re-install on the server when
// the middleware has already set a locale, but harmless.)
const preset = (g as { __locale?: Locale }).__locale;
setActiveLocale(preset ?? DEFAULT_LOCALE);

// Re-export the key type so components can `import type { StringKey }` if they
// want compile-time-checked keys (they currently pass string literals).
export type { StringKey, Locale };

export {};
