// ─── i18n middleware ───
// Runs on every request before the page renders. Resolves the active locale
// (cookie > Accept-Language > default), installs the translation globals so the
// React island SSRs in that language, and stashes the locale + translated head
// strings on Astro.locals for Layout.astro to consume.
//
// Routing model: no path prefix — every locale renders at the same URL. The
// language switcher writes the `sn-locale` cookie and reloads; the next request
// picks it up here.
import { defineMiddleware } from 'astro:middleware';
import { setActiveLocale, setServerIsMobile } from './lib/globals';
import { requestStore, makeRequestContext } from './lib/request-context';
import {
  resolveLocale,
  makeT,
  localeDir,
  type Locale,
} from './i18n';

// Coarse mobile detection from the User-Agent. The island's useIsMobile() hook
// can't read window.innerWidth on the server, so without this the SSR pass always
// emits the desktop layout — and on a phone the page visibly flashes the desktop
// view, then reflows to mobile the instant React hydrates. Resolving a best-guess
// here lets the server render the mobile layout up front so first paint already
// matches. (Tablets land on the desktop branch, same as the <=768px breakpoint.)
const MOBILE_UA = /Android|iPhone|iPod|webOS|BlackBerry|IEMobile|Opera Mini|Mobile|Silk/i;
function detectMobile(ua: string | null): boolean {
  if (!ua) return false;
  // iPad reports a desktop UA on iPadOS 13+; treat it as desktop (>768px) anyway.
  return MOBILE_UA.test(ua) && !/iPad/i.test(ua);
}

export const onRequest = defineMiddleware(async (context, next) => {
  const locale: Locale = resolveLocale({
    cookieHeader: context.request.headers.get('cookie'),
    acceptLanguage: context.request.headers.get('accept-language'),
  });

  const isMobile = detectMobile(context.request.headers.get('user-agent'));

  // Keep the process-wide fallbacks in step with the latest request (used in the
  // browser and at module-eval). The per-request isolation that actually matters
  // under concurrency comes from running next() inside requestStore.run() below —
  // window.T / window.__locale / window.__isMobile resolve that request's context
  // first, so concurrent renders can't bleed locale/layout into each other.
  setActiveLocale(locale);
  setServerIsMobile(isMobile);

  const t = makeT(locale);
  context.locals.i18n = {
    locale,
    dir: localeDir(locale),
    title: t('meta.title'),
    description: t('meta.description'),
    ogImageAlt: t('meta.ogImageAlt'),
  };
  context.locals.isMobile = isMobile;

  // Run the entire render pipeline inside this request's AsyncLocalStorage frame
  // so the globals' getters resolve THIS request's locale/isMobile even while
  // other requests interleave on the event loop at await points.
  return requestStore.run(makeRequestContext(locale, isMobile), () => next());
});
