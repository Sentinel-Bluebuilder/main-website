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

// Resolve the active per-request SSR context WITHOUT importing request-context.ts.
// That module imports node:async_hooks; a static import here would pull it into
// the client bundle and break the browser build. The server's middleware imports
// request-context.ts, which registers `__snCurrentContext` on globalThis — so this
// lookup finds the resolver during SSR and returns undefined in the browser (no
// store, no concurrency), where the getters below fall back to seeded defaults.
type RequestCtx = { locale: Locale; messages: unknown; t: (k: string, f?: string) => string; isMobile: boolean };
function currentContext(): RequestCtx | undefined {
  const resolve = (g as { __snCurrentContext?: () => RequestCtx | undefined }).__snCurrentContext;
  return typeof resolve === 'function' ? resolve() : undefined;
}

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
// fallback), plus window.__locale / window.__messages. These are installed as
// ACCESSORS, not plain values, so each read resolves the per-request
// AsyncLocalStorage context first (currentContext()). That isolation is what
// keeps concurrent SSR requests from bleeding one another's locale: request A's
// render reads A's store even while request B interleaves on the event loop.
// Outside any request (browser, or module-eval before a request) the accessors
// fall back to a module-level "default" set by setActiveLocale() — which the
// browser hydration path uses after Layout.astro seeds window.__locale.
//
// Browser seed capture: Layout.astro's inline script runs BEFORE this module and
// writes window.__locale / window.__isMobile as plain data properties. Read those
// seeded values NOW, before we redefine the names as getters below (the redefine
// would otherwise discard them), so client hydration starts in the server's locale
// and layout.
const seededLocale = (g as { __locale?: Locale }).__locale;
const seededIsMobile = (g as { __isMobile?: boolean }).__isMobile;

let defaultLocale: Locale = seededLocale ?? DEFAULT_LOCALE;
let defaultMessages = messagesFor(defaultLocale);
let defaultT = makeT(defaultLocale);
let defaultIsMobile = typeof seededIsMobile === 'boolean' ? seededIsMobile : false;

function defineContextGetter(name: string, read: () => unknown): void {
  Object.defineProperty(g, name, {
    configurable: true,
    enumerable: true,
    get: read,
  });
}

defineContextGetter('__locale', () => currentContext()?.locale ?? defaultLocale);
defineContextGetter('__messages', () => currentContext()?.messages ?? defaultMessages);
defineContextGetter('T', () => currentContext()?.t ?? defaultT);

// Updates the FALLBACK locale used when no per-request context is active (the
// browser hydration path, and module-eval before any request). On the server the
// per-request AsyncLocalStorage context — installed by the middleware — takes
// precedence over this default for the duration of each render.
export function setActiveLocale(locale: Locale): void {
  defaultLocale = locale;
  defaultMessages = messagesFor(locale);
  defaultT = makeT(locale);
}

// ─── Responsive bootstrap ───
// useIsMobile() (sections-1.tsx) seeds its initial render state from
// window.__isMobile. On the server each request's AsyncLocalStorage context
// carries its own isMobile (resolved from the User-Agent) so concurrent renders
// can't swap layouts on each other; in the browser Layout.astro stamps the value
// onto the page before hydration so the client's first render matches the server
// (no desktop->mobile reflow flash). After hydration the hook's effect re-reads
// the real window.innerWidth and corrects if needed.
defineContextGetter('__isMobile', () => currentContext()?.isMobile ?? defaultIsMobile);

// Updates the FALLBACK isMobile used when no per-request context is active.
export function setServerIsMobile(isMobile: boolean): void {
  defaultIsMobile = isMobile;
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

// The locale/isMobile defaults were already seeded above from any value
// Layout.astro stamped onto the page (seededLocale / seededIsMobile), and the
// __locale / __isMobile getters now resolve through those defaults when no
// per-request AsyncLocalStorage context is active. Nothing further to install
// here — the server's per-request context (set by the middleware) overrides the
// defaults for each render.

// Re-export the key type so components can `import type { StringKey }` if they
// want compile-time-checked keys (they currently pass string literals).
export type { StringKey, Locale };

export {};
