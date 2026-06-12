// ─── i18n runtime ───
// Locale registry, RTL handling, server-side locale negotiation (cookie >
// Accept-Language > default), and the T() translation-helper factory.
//
// Routing model: NO path prefix. Every locale renders at the same URL; the
// active locale is resolved per-request from the `sn-locale` cookie, falling
// back to the browser's Accept-Language header, then to English. A language
// switcher writes the cookie and reloads.
//
// Components consume strings through a single global, window.T(key) — see
// ../lib/globals.ts, which installs T plus the active locale/messages onto
// globalThis before the React island renders (so SSR and hydration agree).

import { en, type StringKey, type Messages } from './en';
import { es } from './es';
import { zh } from './zh';
import { ru } from './ru';
import { de } from './de';
import { fr } from './fr';
import { ar } from './ar';
import { fa } from './fa';
import { pt } from './pt';

export type Locale = 'en' | 'es' | 'zh' | 'ru' | 'de' | 'fr' | 'ar' | 'fa' | 'pt';

export const DEFAULT_LOCALE: Locale = 'en';
export const LOCALE_COOKIE = 'sn-locale';

// Right-to-left scripts. Drives <html dir="rtl"> and mirrors layout.
export const RTL_LOCALES: ReadonlySet<Locale> = new Set<Locale>(['ar', 'fa']);

// Endonyms (each language named in itself) for the switcher UI.
export const LOCALE_NAMES: Record<Locale, string> = {
  en: 'English',
  es: 'Español',
  zh: '中文',
  ru: 'Русский',
  de: 'Deutsch',
  pt: 'Português (Brasil)',
  fr: 'Français',
  ar: 'العربية',
  fa: 'فارسی',
};

export const LOCALES = Object.keys(LOCALE_NAMES) as Locale[];

// Each locale's message map. Non-English maps are partial; missing keys fall
// back to English at lookup time (see makeT). en is the canonical full set.
const MESSAGES: Record<Locale, Partial<Messages>> = {
  en, es, zh, ru, de, fr, ar, fa, pt,
};

export function isLocale(value: string | null | undefined): value is Locale {
  return !!value && (LOCALES as string[]).includes(value);
}

export function isRtl(locale: Locale): boolean {
  return RTL_LOCALES.has(locale);
}

export function localeDir(locale: Locale): 'rtl' | 'ltr' {
  return isRtl(locale) ? 'rtl' : 'ltr';
}

// Pull our locale out of a Cookie header value, if present and valid.
export function localeFromCookie(cookieHeader: string | null | undefined): Locale | null {
  if (!cookieHeader) return null;
  for (const part of cookieHeader.split(';')) {
    const idx = part.indexOf('=');
    if (idx === -1) continue;
    const name = part.slice(0, idx).trim();
    if (name !== LOCALE_COOKIE) continue;
    const val = decodeURIComponent(part.slice(idx + 1).trim());
    return isLocale(val) ? val : null;
  }
  return null;
}

// Parse an Accept-Language header and return the best supported locale.
// Matches by primary subtag (e.g. "pt-BR" -> "pt"); honours q-weights.
export function localeFromAcceptLanguage(header: string | null | undefined): Locale | null {
  if (!header) return null;
  const ranked = header
    .split(',')
    .map((part) => {
      const [tag, ...params] = part.trim().split(';');
      let q = 1;
      for (const p of params) {
        const m = /^q=([0-9.]+)$/.exec(p.trim());
        if (m) q = parseFloat(m[1]);
      }
      return { tag: tag.trim().toLowerCase(), q };
    })
    .filter((x) => x.tag && !Number.isNaN(x.q))
    .sort((a, b) => b.q - a.q);

  for (const { tag } of ranked) {
    if (tag === '*') continue;
    if (isLocale(tag)) return tag;
    const primary = tag.split('-')[0];
    if (isLocale(primary)) return primary;
  }
  return null;
}

// Server-side resolution order: explicit cookie wins, then Accept-Language,
// then the default. `cookieLocale` is passed separately so a switcher's fresh
// choice (set this request) can take precedence even before the cookie lands.
export function resolveLocale(opts: {
  cookieHeader?: string | null;
  acceptLanguage?: string | null;
}): Locale {
  return (
    localeFromCookie(opts.cookieHeader) ??
    localeFromAcceptLanguage(opts.acceptLanguage) ??
    DEFAULT_LOCALE
  );
}

export function messagesFor(locale: Locale): Partial<Messages> {
  return MESSAGES[locale] ?? {};
}

// Build a translation function bound to a locale. Lookup order:
//   locale message -> English message -> the provided fallback (inline copy).
// The fallback lets components keep their original literal for un-keyed strings.
export function makeT(locale: Locale) {
  const table = MESSAGES[locale] ?? {};
  return function t(key: StringKey, fallback?: string): string {
    const hit = table[key];
    if (hit != null) return hit;
    const base = en[key];
    if (base != null) return base;
    return fallback != null ? fallback : (key as string);
  };
}

export type { StringKey } from './en';
