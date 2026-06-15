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
import { setActiveLocale } from './lib/globals';
import {
  resolveLocale,
  makeT,
  localeDir,
  type Locale,
} from './i18n';

export const onRequest = defineMiddleware(async (context, next) => {
  const locale: Locale = resolveLocale({
    cookieHeader: context.request.headers.get('cookie'),
    acceptLanguage: context.request.headers.get('accept-language'),
  });

  // Install window.T / window.__messages / window.__locale for the island's
  // server render. globalThis is shared, so this must happen before next().
  setActiveLocale(locale);

  const t = makeT(locale);
  context.locals.i18n = {
    locale,
    dir: localeDir(locale),
    title: t('meta.title'),
    description: t('meta.description'),
    ogImageAlt: t('meta.ogImageAlt'),
  };

  return next();
});
