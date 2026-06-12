/// <reference types="astro/client" />

import type { Locale } from './i18n';

declare global {
  namespace App {
    interface Locals {
      // Set by src/middleware.ts on every request: the resolved active locale,
      // text direction, and the translated <head> strings Layout.astro renders.
      i18n: {
        locale: Locale;
        dir: 'ltr' | 'rtl';
        title: string;
        description: string;
        ogImageAlt: string;
      };
    }
  }
}

export {};
