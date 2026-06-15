import { e as defineMiddleware, s as sequence } from './chunks/render-context_BDTmhSEO.mjs';
import { r as resolveLocale, s as setActiveLocale, l as localeDir, m as makeT } from './chunks/globals_DHLWSNFs.mjs';
import 'es-module-lexer';
import './chunks/astro-designed-error-pages_BjDLxeEP.mjs';
import 'piccolore';
import './chunks/astro/server_BvRpWg5T.mjs';
import 'clsx';

const onRequest$1 = defineMiddleware(async (context, next) => {
  const locale = resolveLocale({
    cookieHeader: context.request.headers.get("cookie"),
    acceptLanguage: context.request.headers.get("accept-language")
  });
  setActiveLocale(locale);
  const t = makeT(locale);
  context.locals.i18n = {
    locale,
    dir: localeDir(locale),
    title: t("meta.title"),
    description: t("meta.description"),
    ogImageAlt: t("meta.ogImageAlt")
  };
  return next();
});

const onRequest = sequence(
	
	onRequest$1
	
);

export { onRequest };
