import { e as defineMiddleware, s as sequence } from './chunks/render-context_BDTmhSEO.mjs';
import { m as makeT, a as messagesFor, r as resolveLocale, l as localeDir, s as setActiveLocale, b as setServerIsMobile } from './chunks/globals_CUqkIAQj.mjs';
import { AsyncLocalStorage } from 'node:async_hooks';
import 'es-module-lexer';
import './chunks/astro-designed-error-pages_BjDLxeEP.mjs';
import 'piccolore';
import './chunks/astro/server_BvRpWg5T.mjs';
import 'clsx';

const requestStore = new AsyncLocalStorage();
function makeRequestContext(locale, isMobile) {
  return {
    locale,
    messages: messagesFor(locale),
    t: makeT(locale),
    isMobile
  };
}
function currentContext() {
  return requestStore.getStore();
}
globalThis.__snCurrentContext = currentContext;

const MOBILE_UA = /Android|iPhone|iPod|webOS|BlackBerry|IEMobile|Opera Mini|Mobile|Silk/i;
function detectMobile(ua) {
  if (!ua) return false;
  return MOBILE_UA.test(ua) && !/iPad/i.test(ua);
}
const onRequest$1 = defineMiddleware(async (context, next) => {
  const locale = resolveLocale({
    cookieHeader: context.request.headers.get("cookie"),
    acceptLanguage: context.request.headers.get("accept-language")
  });
  const isMobile = detectMobile(context.request.headers.get("user-agent"));
  setActiveLocale(locale);
  setServerIsMobile(isMobile);
  const t = makeT(locale);
  context.locals.i18n = {
    locale,
    dir: localeDir(locale),
    title: t("meta.title"),
    description: t("meta.description"),
    ogImageAlt: t("meta.ogImageAlt")
  };
  context.locals.isMobile = isMobile;
  return requestStore.run(makeRequestContext(locale, isMobile), () => next());
});

const onRequest = sequence(
	
	onRequest$1
	
);

export { onRequest };
