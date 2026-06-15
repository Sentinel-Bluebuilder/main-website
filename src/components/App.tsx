// @ts-nocheck
/* eslint-disable */
// ─── App island ───
// Server-rendered React root for the Sentinel homepage. Mirrors the original
// inline mount script: it pulls every section component off `window` (populated
// by the three section modules' Object.assign) and composes the page.
//
// Importing ./sections-3 transitively runs sections-2 -> sections-1 -> globals
// in the original load order, so by the time this module body executes, every
// section is registered on `window` (=== globalThis on the server).
//
// Unlike the original we do NOT call ReactDOM.createRoot here — Astro renders
// this component to HTML on the server and hydrates it via client:load.

import '../lib/globals';
import './sections-1';
import './sections-2';
import './sections-3';
import * as React from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// The original page loaded GSAP + ScrollTrigger as UMD globals before the React
// code; the NodeHostingSection scroll-pin reads window.gsap / window.ScrollTrigger
// synchronously inside its useEffect. Expose the npm packages under the same
// global names so that verbatim lookup resolves after hydration. (Importing gsap
// is SSR-safe — nothing touches the DOM until an effect runs, and effects only
// run in the browser.)
{
  const g = window as unknown as Record<string, unknown>;
  g.gsap = gsap;
  g.ScrollTrigger = ScrollTrigger;
}

const {
  Header, Hero, StatsStrip,
  ResilienceCards, StepsSection, SDKSection, PaymentRailsSection,
  NodeHostingSection, AgenticPaymentsSection,
  CompareSection,
  EcosystemSection,
  ContactSection, Footer,
} = window as any;

export default function App() {
  return (
    <React.Fragment>
      <Header />
      <main id="main">
        <Hero />
        <div style={{ position: 'relative', background: '#0b0c10', isolation: 'isolate' }}>
          <div aria-hidden="true" style={{ position: 'absolute', inset: 0, pointerEvents: 'none', background: 'radial-gradient(1100px 540px at 12% -2%, rgba(1,86,252,0.16), transparent 62%), radial-gradient(900px 600px at 92% 24%, rgba(38,112,255,0.10), transparent 60%), radial-gradient(1000px 560px at 4% 60%, rgba(1,86,252,0.08), transparent 60%), radial-gradient(1300px 720px at 50% 102%, rgba(1,86,252,0.14), transparent 65%)' }} />
          <div aria-hidden="true" style={{ position: 'absolute', inset: 0, pointerEvents: 'none', backgroundImage: 'radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1.4px)', backgroundSize: '30px 30px', maskImage: 'linear-gradient(180deg, transparent 0%, black 8%, black 92%, transparent 100%)', WebkitMaskImage: 'linear-gradient(180deg, transparent 0%, black 8%, black 92%, transparent 100%)' }} />
          <div style={{ position: 'relative' }}>
            <StatsStrip />
            <EcosystemSection />
            <ResilienceCards />
            <StepsSection />
          </div>
        </div>
        <SDKSection />
        <PaymentRailsSection />
        <NodeHostingSection />
        <AgenticPaymentsSection />
        <CompareSection />
        <ContactSection />
      </main>
      <Footer />
    </React.Fragment>
  );
}
