// ─── Per-request SSR context ───
// The ported components read the active locale, translator, and isMobile flag off
// `window.*` (=== globalThis on the server). If the middleware mutated those
// globals directly, two concurrent requests on the single Node process would race:
// request B's setActiveLocale() could land while request A is parked at an await
// inside its render, so A would finish rendering in B's language/layout (a real
// request-bleed: wrong locale or wrong mobile/desktop HTML served to a user).
//
// AsyncLocalStorage gives every request its own isolated store that travels with
// the async render. The globals (lib/globals.ts) install getters that read this
// store first, so each request resolves ITS OWN locale/T/isMobile even while
// other requests interleave on the event loop. In the browser there is no store
// and no concurrency — the getters fall back to the statically-installed values
// that Layout.astro seeds before hydration.

import { AsyncLocalStorage } from 'node:async_hooks';
import { makeT, messagesFor, type Locale, type Messages } from '../i18n';

export interface RequestContext {
  locale: Locale;
  messages: Partial<Messages>;
  t: (key: string, fallback?: string) => string;
  isMobile: boolean;
}

// A single store shared process-wide; each request runs its render inside its own
// run() frame, so reads resolve to that frame's context.
export const requestStore = new AsyncLocalStorage<RequestContext>();

// Build a context object from a resolved locale + mobile guess.
export function makeRequestContext(locale: Locale, isMobile: boolean): RequestContext {
  return {
    locale,
    messages: messagesFor(locale),
    t: makeT(locale),
    isMobile,
  };
}

// The active context for the current async frame, or undefined in the browser /
// outside any request (e.g. module-eval time).
export function currentContext(): RequestContext | undefined {
  return requestStore.getStore();
}

// Register the resolver on the global object so lib/globals.ts can read the
// active request context WITHOUT statically importing this module. That matters
// for the client bundle: a static `import './request-context'` would drag
// `node:async_hooks` into the browser build (which can't resolve it and fails the
// build). Only the server ever imports this file (via the middleware), so the
// resolver is present during SSR and simply absent in the browser — where the
// globals' getters then fall back to their seeded defaults.
(globalThis as { __snCurrentContext?: () => RequestContext | undefined })
  .__snCurrentContext = currentContext;
