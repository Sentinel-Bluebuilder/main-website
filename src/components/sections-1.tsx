// @ts-nocheck
/* eslint-disable */
// Ported verbatim from the original browser bundle. See tools/port-to-tsx.js.
import '../lib/globals';

/* ============================================================
   Sentinel · Marketing components — Header · Hero · Supporters
   Stats · Steps · SDK · Payments
   ============================================================ */
const T = window.SENTINEL;
const L = window.SENTINEL_LINKS;
const { useState, useEffect, useRef } = React;

/* ── i18n: translate a key at render time. window.T is reassigned per request
   by the SSR middleware (and seeded per locale on the client), so we must
   dereference it on every call rather than capture it at module load. The
   second argument is the inline English fallback. ── */
const tr = (k, f) => (typeof window !== 'undefined' && window.T ? window.T(k, f) : (f != null ? f : k));

/* ── Responsive hook (shared across all section files via window) ── */
// Initial state is seeded from window.__isMobile (set by the middleware on the
// server from the User-Agent, and stamped onto the page by Layout.astro before
// hydration) — NOT from window.innerWidth. That keeps the server render and the
// client's first render identical, so React hydrates without the desktop->mobile
// reflow flash. The effect then re-reads the real viewport width and corrects if
// the coarse UA guess was wrong (e.g. a narrow desktop window, or a phone the UA
// regex missed). For the default 768px breakpoint the correction is almost always
// a no-op; non-default breakpoints fall back to the width read on mount.
function useIsMobile(bp = 768) {
  const seed = (typeof window !== 'undefined' && typeof window.__isMobile === 'boolean')
    ? window.__isMobile
    : false;
  const [m, setM] = useState(seed);
  useEffect(() => {
    const fn = () => setM(window.innerWidth <= bp);
    fn();
    window.addEventListener('resize', fn, { passive: true });
    return () => window.removeEventListener('resize', fn);
  }, [bp]);
  return m;
}
window.useIsMobile = useIsMobile;

/* ── Actual shield paths from Sentinel logo SVG ─────────── */
function SentinelMark({ size = 30, color = '#0156FC' }) {
  const w = Math.round(size * (200 / 215));
  return (
    <svg width={w} height={size} viewBox="50 15 200 215" fill="none" aria-hidden="true">
      <path d="M235.636 23.9037C238.064 23.9037 240.026 25.8656 240.026 28.2934V98.2757V102.623C240.082 111.247 240.153 122.017 238.643 133.436C236.892 146.747 233.42 157.573 228.085 166.536C210.681 195.712 179.416 217.096 150.071 219.947C149.93 219.961 149.789 219.975 149.648 219.975C149.506 219.975 149.365 219.975 149.224 219.947C119.851 217.068 88.586 195.698 71.2104 166.536C65.8467 157.573 62.4026 146.733 60.6524 133.436C59.1562 122.017 59.2267 111.262 59.2973 102.623V98.2757L59.3114 28.2934C59.3114 25.8656 61.2734 23.9037 63.7012 23.9037H235.636ZM235.636 15.1523H63.6871C56.4461 15.1523 50.546 21.0524 50.546 28.2934V102.581C50.4613 110.951 50.3766 122.455 51.9575 134.565C53.8772 149.09 57.7023 161.003 63.673 171.01C72.8477 186.396 85.6642 199.974 100.753 210.307C115.983 220.723 132.399 227.061 148.25 228.628C148.702 228.684 149.168 228.713 149.633 228.713C150.099 228.713 150.551 228.684 151.017 228.628C166.854 227.061 183.27 220.738 198.5 210.321C213.589 199.989 226.419 186.396 235.608 171.01C241.593 160.989 245.418 149.076 247.323 134.58C248.904 122.582 248.834 111.516 248.777 102.609V98.2475V28.3075C248.777 21.0524 242.877 15.1665 235.636 15.1665V15.1523Z" fill={color}/>
      <path d="M223.698 112.507C224.982 113.481 226.817 112.564 226.817 110.955L226.775 102.105V39.0386C226.789 37.9518 225.914 37.0767 224.827 37.0767H74.5022C73.4154 37.0767 72.5402 37.9518 72.5402 39.0386V77.8267C72.5402 79.4923 72.9213 81.1296 73.6694 82.6117C74.4175 84.0938 75.4903 85.3924 76.8312 86.3804L189.907 170.943C190.895 171.677 190.965 173.103 190.062 173.95C187.973 175.926 185.771 177.775 183.484 179.525C182.779 180.062 181.819 180.062 181.127 179.54L75.6596 100.51C74.3752 99.5497 72.5402 100.453 72.5402 102.076C72.5402 115.627 71.3405 140.907 82.7313 160.273C95.4489 181.911 117.285 198.99 139.756 204.523C143.002 205.314 146.249 205.878 149.495 206.175C149.622 206.189 149.749 206.189 149.862 206.175C164.57 204.848 179.532 198.129 192.377 187.98C195.595 185.425 198.686 182.673 201.622 179.723C207.409 173.894 212.462 167.372 216.626 160.301C220.395 153.907 222.78 146.863 224.291 139.82C224.63 138.295 224.912 136.757 225.166 135.204C225.829 131.167 224.192 127.088 220.931 124.646L125.189 53.0549C123.693 51.9257 124.469 49.5402 126.375 49.5402H139.05C139.474 49.5402 139.883 49.6814 140.236 49.9354L223.712 112.521L223.698 112.507Z" fill={color}/>
    </svg>
  );
}

const atomStyles = {
  container: { maxWidth: 1320, margin: '0 auto', padding: '0 clamp(16px, 2.5vw, 24px)', width: '100%', boxSizing: 'border-box' },
  section:   { width: '100%', boxSizing: 'border-box', paddingTop: 'clamp(56px,8vw,120px)', paddingBottom: 'clamp(56px,8vw,120px)' },
  sectionHead: { display: 'flex', flexDirection: 'column', gap: 22, maxWidth: 900 },
  h1Dark:  { fontFamily: T.fontHeading, fontWeight: 700, fontSize: 'clamp(31px, 5vw, 48px)', lineHeight: 1.12, color: T.onDark80, margin: 0, letterSpacing: '-0.005em' },
  h1Light: { fontFamily: T.fontHeading, fontWeight: 700, fontSize: 'clamp(31px, 5vw, 48px)', lineHeight: 1.12, color: T.onLight80, margin: 0, letterSpacing: '-0.005em' },
  leadDark:  { fontFamily: T.fontBody, fontSize: 'clamp(16px, 1.6vw, 20px)', lineHeight: 1.5, color: T.onDark,  margin: 0 },
  leadLight: { fontFamily: T.fontBody, fontSize: 'clamp(16px, 1.6vw, 20px)', lineHeight: 1.5, color: T.onLight80, margin: 0 },
};

function ChipDark({ children }) {
  return <span style={{ display:'inline-flex', alignItems:'center', padding:'9px 18px', borderRadius:28, background:'rgba(1,86,252,0.20)', color:'rgba(234,234,234,0.9)', border:'1px solid rgba(255,255,255,0.06)', fontFamily:T.fontBody, fontWeight:500, fontSize:16 }}>{children}</span>;
}
function ChipLight({ children }) {
  return <span style={{ display:'inline-flex', alignItems:'center', padding:'9px 18px', borderRadius:28, background:'transparent', color:'rgba(0,0,0,0.8)', border:'1px solid rgba(0,0,0,0.06)', fontFamily:T.fontBody, fontWeight:500, fontSize:16 }}>{children}</span>;
}
function BtnPrimary({ children, href='#', light, style }) {
  return <a href={href} className="sn-btn-primary" style={{ borderColor: light ? '#dce7fa' : '#d9d9d9', ...style }}>{children}</a>;
}
function BtnGhost({ children, dark=true, href='#' }) {
  return <a href={href} className={dark ? 'sn-btn-ghost-dark' : 'sn-btn-ghost-light'}>{children} <span aria-hidden="true">→</span></a>;
}

/* ── Code window — shared by SDK + Agentic sections ─────── */
function CodeWindow() {
  return (
    <div style={{ background:T.graphite750, borderRadius:30, overflow:'hidden', border:'1px solid rgba(255,255,255,0.06)', display:'flex', flexDirection:'column', flex:1, width:'100%' }}>
      <div style={{ height:44, padding:'0 18px', display:'flex', alignItems:'center', gap:10, background:'#161618', borderBottom:'0.725px solid #252527', flexShrink:0 }}>
        {[0,1,2].map(i=><span key={i} style={{ width:11, height:11, borderRadius:'50%', background:'#2a2a2c', display:'block' }}/>)}
        <span style={{ flex:1, textAlign:'center', fontFamily:T.fontBody, fontSize:12, color:'rgba(255,255,255,0.5)' }}>my-dvpn-app.ts</span>
      </div>
      <pre className="sn-code-pre" style={{ margin:0, padding:'22px clamp(16px,3vw,28px)', fontFamily:T.fontMono, fontSize:13.5, lineHeight:'24px', color:'rgba(255,255,255,0.85)', whiteSpace:'pre', overflowX:'auto', flex:1 }}>
        <span style={{ color:'#6A80CF' }}>import</span>{" { SentinelClient } "}<span style={{ color:'#6A80CF' }}>from</span>{" '@sentinel/sdk';\n\n"}
        <span style={{ color:'#6A80CF' }}>const</span>{" client = "}<span style={{ color:'#6A80CF' }}>new</span>{` SentinelClient({\n  protocol: 'wireguard',   `}<span style={{ color:'#757C75' }}>{`// or 'v2ray', 'openvpn'`}</span>{`\n  plan:     'pro-monthly', `}<span style={{ color:'#757C75' }}>{`// your Plan Manager plan id`}</span>{`\n});\n\n`}
        <span style={{ color:'#757C75' }}>{`// Pick the best node, connect, and route traffic.`}</span>{`\n`}
        <span style={{ color:'#6A80CF' }}>const</span>{" session = "}<span style={{ color:'#6A80CF' }}>await</span>{` client.connect({ region: 'auto' });\n`}
        {`console.log('Connected via', session.node.country);`}
      </pre>
    </div>
  );
}

/* ── Header ──────────────────────────────────────────────── */
// Maps each NAV_MENUS key (a stable identifier, kept in English so item
// lookups/anchors don't shift per locale) to its i18n key for display.
const NAV_LABEL_KEYS = {
  Explore: 'nav.explore',
  dVPN: 'nav.dvpn',
  Build: 'nav.build',
  More: 'nav.more',
};
const NAV_MENUS = {
  Explore: {
    cols: 2, width: 660,
    items: [
      { tk:'nav.explore.statsTitle',     dk:'nav.explore.statsDesc',     title:'Network Statistics', desc:'Monitor real-time network performance and metrics.', href:L.stats    },
      { tk:'nav.explore.dashboardTitle', dk:'nav.explore.dashboardDesc', title:'Node Explorer',      desc:'Live map of active nodes, sessions, and data usage.', href:L.nodes    },
      { tk:'nav.explore.explorerTitle',  dk:'nav.explore.explorerDesc',  title:'Explorer',           desc:'Search and explore network transactions.',           href:L.explorer },
      { tk:'nav.explore.ecosystemTitle', dk:'nav.explore.ecosystemDesc', title:'Ecosystem',          desc:'Discover apps and services in our ecosystem.',       href:'#use-dvpn' },
    ],
  },
  dVPN: {
    cols: 2, width: 660,
    items: [
      { tk:'nav.dvpn.downloadTitle', dk:'nav.dvpn.downloadDesc', title:'Download Apps', desc:'Sentinel Shield, Norse, Valt, Meile and more.',    href:'#use-dvpn'    },
      { tk:'nav.dvpn.coverageTitle', dk:'nav.dvpn.coverageDesc', title:'Coverage',      desc:'110+ Countries, 430+ Cities.',                     href:L.nodeMap      },
      { tk:'nav.dvpn.learnTitle',    dk:'nav.dvpn.learnDesc',    title:'Learn',         desc:'Explore guides, documentation, and more.',         href:L.docs         },
      { tk:'nav.dvpn.runNodeTitle',  dk:'nav.dvpn.runNodeDesc',  title:'Run a Node',    desc:'Support the network and earn rewards.',            href:'#host-dvpn'   },
      { tk:'nav.dvpn.buildTitle',    dk:'nav.dvpn.buildDesc',    title:'Build',         desc:'Create your own applications on the network.',     href:L.sdkDocs      },
      { tk:'nav.dvpn.earnTitle',     dk:'nav.dvpn.earnDesc',     title:'Earn',          desc:'Monetize your bandwidth and more.',                href:L.nodeEarnings },
    ],
  },
  Build: {
    cols: 2, width: 680,
    items: [
      { tk:'nav.build.planManagerTitle', dk:'nav.build.planManagerDesc', title:'Plan Manager',       desc:'Turn raw bandwidth into priced subscription plans.', href:L.planManager },
      { tk:'nav.build.sdkTitle',         dk:'nav.build.sdkDesc',         title:'SDK',                desc:'Native bindings for iOS, Android, Web & desktop.',  href:L.sdkDocs    },
      { tk:'nav.build.paymentsTitle',    dk:'nav.build.paymentsDesc',    title:'Configure Payments', desc:'Stripe, USDC, BTC, on-ramps — wire any gateway per plan.', href:L.planManager },
      { tk:'nav.build.x402Title',        dk:'nav.build.x402Desc',        title:'x402 Payments',      desc:'Per-byte agentic payments — no API keys, no accounts.', href:L.x402 },
      { tk:'nav.build.protocolsTitle',   dk:'nav.build.protocolsDesc',   title:'VPN Protocols',      desc:'WireGuard, V2Ray, OpenVPN — pick what your users need.', href:L.vpnProtocols },
      { tk:'nav.build.docsTitle',        dk:'nav.build.docsDesc',        title:'Developer Docs',     desc:'API reference, quickstarts, and architecture guides.', href:L.docs },
    ],
  },
  More: {
    cols: 1, width: 380,
    items: [
      { tk:'nav.more.docsTitle',    dk:'nav.more.docsDesc',    title:'dVPN Docs',   desc:'Clients, nodes, protocols, FAQs.', href:L.docs     },
      { tk:'nav.more.contactTitle', dk:'nav.more.contactDesc', title:'Contacts Us', desc:'Question or support — get in touch.', href:L.telegram },
    ],
  },
};

function DropdownPanel({ menu }) {
  return (
    <div style={{
      width: menu.width, boxSizing:'border-box',
      background:'#0c0c0c',
      border:'1px solid rgba(255,255,255,0.08)',
      borderRadius:24, padding:24,
      boxShadow:'0 30px 70px -20px rgba(0,0,0,0.75)',
      opacity: 0.9,
    }}>
      <div style={{
        display:'grid',
        gridTemplateColumns:`repeat(${menu.cols}, 1fr)`,
        gap:'8px 16px',
      }}>
        {menu.items.map(it => {
          // In-page anchors (href="#…") jump to a section on this page — they must
          // stay in the same tab, not open a new one like the external links do.
          const anchor = (it.href || '').charAt(0) === '#';
          return (
          <a key={it.title} href={it.href || '#'}
             target={anchor ? undefined : '_blank'} rel={anchor ? undefined : 'noopener noreferrer'}
             className="sn-dd-item">
            <div className="sn-dd-title">{it.tk ? tr(it.tk, it.title) : it.title}</div>
            <div className="sn-dd-desc">{it.dk ? tr(it.dk, it.desc) : it.desc}</div>
          </a>
          );
        })}
      </div>
    </div>
  );
}

/* ── Buy P2P — exchange links shown next to the header ticker ── */
const BUY_LOGOS = {
  mexc:    'data:image/jpeg;base64,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',
  kucoin:  'data:image/png;base64,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',
  osmosis: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0xOTEuMTM2IDM1LjM1MTlDMTg5LjEgMjcuNTEyNCAxODIuNTU2IDE5LjY3MjggMTcwLjc3NyAxMC45NDU4QzE2MS4zMjMgMy45OTM3MSAxNTEuMjg5IDAgMTQzLjI5MSAwQzE0MS42OTEgMCAxNDAuMjM3IDAuMTQ3OTEgMTM4Ljc4MyAwLjQ0Mzc0QzEzNS4xNDcgMS4xODMzIDEzMS45NDcgMy44NDU4MSAxMjkuOTEyIDcuODM5NTRDMTI3LjQ0IDEyLjU3MjggMTI2Ljg1OCAxOC45MzMzIDEyOC40NTggMjIuNzc5QzEyOS4wMzkgMjMuOTYyMyAxMjkuNzY2IDI1LjQ0MTUgMTMwLjYzOSAyNi43NzI3QzEyMi45MzEgMzEuNTA2MSAxMTguNTY4IDMyLjgzNzMgMTE3Ljk4NiAzMi45ODUyQzEzOC4wNTYgMzkuNzg5MyAxNTQuNzggNTMuOTg5MiAxNjUuMjUgNzIuNDc4OEwxNjUuMzk2IDcwLjcwMzhDMTY1LjgzMiA2NS44MjI1IDE2Ny4yODYgNjAuMjAxNyAxNjkuMzIzIDU0LjQzM0MxNzEuMzU4IDU1LjAyNDcgMTczLjM5NCA1NS4zMjA1IDE3NS40MyA1NS4zMjA1QzE4MC44MTEgNTUuMzIwNSAxODUuNDY0IDUzLjEwMTggMTg4LjM3MyA0OS4xMDgxQzE5MS4yODIgNDUuMTE0MyAxOTIuNDQ0IDM5Ljc4OTMgMTkxLjEzNiAzNS4zNTE5WiIgZmlsbD0iIzVFMTJBMCIvPgo8cGF0aCBkPSJNMTcwLjE5NyA1MC4xNDc1QzE4My40MyA1My44NDU0IDE4OC44MTEgNDMuNDkxMyAxODcuMDY1IDM2LjUzOTNDMTg1LjE3NSAyOS41ODcyIDE3OS4wNjcgMjIuNDg3MiAxNjguMzA1IDE0LjQ5OThDMTU3LjU0NCA2LjUxMjM1IDE0Ni42MzggMy4yNTgxOCAxMzkuNjU3IDQuNzM3MjhDMTMyLjY3NyA2LjIxNjQ3IDEzMC42NDEgMTcuMDE0MyAxMzIuMzg1IDIxLjE1NTlDMTMzLjExMyAyMi43ODMgMTM0LjcxMiAyNS4xNDk3IDEzNi44OTQgMjcuODEyMkMxMzQuMTMxIDI5LjczNTEgMTMxLjUxMyAzMS4yMTQyIDEyOS4zMzIgMzIuNTQ1NEMxNDIuNzExIDM4LjYxIDE1NC4zNDUgNDguMDc2NyAxNjMuMDcgNTkuOTA5OUMxNjQuMDg4IDU1LjkxNjIgMTY1LjU0MyA1Mi4zNjYyIDE2Ni44NTIgNDkuMjZDMTY3Ljg2OSA0OS40MDc5IDE2OS4wMzMgNDkuNzAzOCAxNzAuMTk3IDUwLjE0NzVaIiBmaWxsPSJ1cmwoI3BhaW50MF9yYWRpYWxfOTE0XzQ4KSIvPgo8cGF0aCBkPSJNOTQuNDIzOCAxOTUuMTEyQzEzOS4zMiAxOTUuMTEyIDE3NS43MTcgMTU4LjA5MiAxNzUuNzE3IDExMi40MjdDMTc1LjcxNyA2Ni43NjE1IDEzOS4zMiAyOS43NDIyIDk0LjQyMzggMjkuNzQyMkM0OS41MjcgMjkuNzQyMiAxMy4xMzA5IDY2Ljc2MTUgMTMuMTMwOSAxMTIuNDI3QzEzLjEzMDkgMTU4LjA5MiA0OS41MjcgMTk1LjExMiA5NC40MjM4IDE5NS4xMTJaIiBmaWxsPSJ1cmwoI3BhaW50MV9yYWRpYWxfOTE0XzQ4KSIvPgo8cGF0aCBvcGFjaXR5PSIwLjYiIGQ9Ik0xODAuMzc3IDI5LjczMDdDMTY5LjMyNCAxNy44OTc1IDE2MC4wMTcgMTQuNzkxMiAxNDguODE5IDEyLjI3NjdDMTQwLjA5NCAxMC4yMDU4IDE0Mi40MiA1LjE3NjY2IDE1My4wMzcgNi4yMTIwOUMxNDcuOTQ3IDQuNDM3MTEgMTQzLjE0OCAzLjk5MzM0IDEzOS42NTcgNC43MzI4OUMxMzIuNjc3IDYuMjEyMDkgMTMwLjY0MSAxNy4wMDk5IDEzMi4zODYgMjEuMTUxNkMxMzMuMTEzIDIyLjc3ODYgMTM0LjcxMyAyNS4xNDUzIDEzNi44OTUgMjcuODA3OEMxMzIuOTY4IDMwLjQ3MDMgMTI5LjYyMyAzMi4zOTMyIDEyNi44NTkgMzMuODcyNEMxMjguMTY5IDM0LjQ2NCAxMjkuNzY4IDM1LjIwMzYgMTMxLjY1OCAzNi4yMzlDMTM2LjYwMyAzOC45MDE1IDE0MS45ODQgNDMuMzM4OSAxNDEuOTg0IDQzLjMzODlDMTMzLjg0IDM2LjIzOSAxMzUuNTg1IDMyLjk4NDggMTQ2Ljc4MyAyNC45OTc0QzE1MC4yNzQgMjIuNDgyOSAxNTYuNjcyIDIyLjc3ODYgMTYyLjYzNSAyNS44ODQ5QzE2OC41OTcgMjguOTkxMSAxNzUuNTc3IDM2LjgzMDcgMTc1LjU3NyAzNi44MzA3TDE2OC44ODggNDkuODQ3M0MxNjkuMzI0IDQ5Ljk5NTIgMTY5Ljc2IDUwLjE0MyAxNzAuMTk3IDUwLjI5MUMxNzQuNDE0IDUxLjQ3NDMgMTc3Ljc1OCA1MS4xNzg1IDE4MC4zNzcgNTAuMTQzMUMxODMuNDMxIDQ4LjIyMDIgMTkxLjQyOSA0MS43MTE5IDE4MC4zNzcgMjkuNzMwN1oiIGZpbGw9IiNBOTg2OTgiLz4KPHBhdGggZD0iTTE0OC42NzMgMTkuMzg1MkMxNTEuNTgyIDIwLjU2ODUgMTU1LjM2MyAyMi42MzkzIDE2MC4wMTcgMjUuNzQ1NkMxNjUuNTQzIDI5LjQ0MzUgMTcwLjM0MiAzMy41ODUyIDE3My4zOTYgMzYuODM5MkMxNjguMzA2IDQzLjY0MzQgMTY0Ljk2MSA1Mi45NjIxIDE2Mi45MjYgNTkuNDcwNEMxNjMuOTQ0IDYwLjk0OTYgMTY1LjEwNyA2Mi40Mjg3IDE2Ni4xMjUgNjMuOTA3OUMxNjcuMTQzIDYwLjIxIDE2OC44ODcgNTQuNzM3MSAxNzEuMjE0IDQ5LjI2NDJDMTcxLjc5NiA0OS40MTIxIDE3Mi41MjQgNDkuNDEyMSAxNzMuMjUgNDkuNDEyMUMxNzQuOTk1IDQ5LjQxMjEgMTc3LjAzMSA0OS4xMTYzIDE3OC42MzEgNDcuNzg1QzE3OS43OTQgNDYuODk3NSAxODEuMTA0IDQ1LjI3MDUgMTgwLjk1OCA0Mi4zMTIyQzE4MC45NTggMzkuNTAxOCAxNzguNzc3IDM1Ljk1MTggMTc0LjI2OCAzMS42NjIyQzE3MS4wNjkgMjguNTU2IDE2Ni43MDcgMjUuMTUzOSAxNjIuMzQ0IDIyLjA0NzdDMTQ5LjgzNyAxMy42MTY1IDE0MS4xMTEgMTEuMjQ5OCAxMzcuMTg1IDE1LjI0MzVDMTM0LjU2NyAxNy45MDYxIDEzNC44NTggMjEuMTYwMiAxMzUuNzMgMjMuNTI2OUMxMzEuMDc3IDI2LjYzMzEgMTI3LjE1IDI4Ljg1MTggMTI0LjUzMyAzMC4zMzFDMTI2LjI3OCAzMC45MjI3IDEyNy44NzggMzEuNjYyMiAxMjkuNjIzIDMyLjQwMThDMTM0LjI3NiAyOS44ODcyIDE0MC45NjYgMjUuNTk3NiAxNDguNjczIDE5LjM4NTJaTTE3Ni4xNTkgNDAuNTM3MkMxNzYuNTk1IDQxLjI3NjcgMTc2Ljc0MSA0Mi4wMTYzIDE3Ni43NDEgNDIuNDZDMTc2Ljc0MSA0My43OTE0IDE3Ni4zMDUgNDQuMjM1IDE3Ni4wMTMgNDQuNTMwOUMxNzUuNDMyIDQ0Ljk3NDcgMTc0LjI2OCA0NS4yNzA1IDE3My4yNSA0NS4yNzA1QzE3NC4xMjMgNDMuNDk1NSAxNzUuMTQxIDQyLjAxNjMgMTc2LjE1OSA0MC41MzcyWk0xNDAuMjM5IDE4LjQ5NzdDMTQwLjY3NSAxOC4wNTM5IDE0MS44MzkgMTcuNzU4MSAxNDMuNzI5IDE4LjA1MzlDMTQyLjI3NSAxOS4yMzczIDE0MC44MjEgMjAuMjcyNyAxMzkuMzY3IDIxLjMwODFDMTM5LjIyMSAyMC4yNzI3IDEzOS4zNjcgMTkuMjM3MyAxNDAuMjM5IDE4LjQ5NzdaIiBmaWxsPSIjNUUxMkEwIi8+CjxwYXRoIGQ9Ik05NC40MjQxIDI0Ljg2NzJDNDYuODY5OCAyNC44NjcyIDguMzMyMDMgNjQuMDY0OSA4LjMzMjAzIDExMi40MzRDOC4zMzIwMyAxNjAuODAxIDQ2Ljg2OTggMjAwIDk0LjQyNDEgMjAwQzE0MS45NzggMjAwIDE4MC41MTYgMTYwLjgwMSAxODAuNTE2IDExMi40MzRDMTgwLjUxNiA2NC4wNjQ5IDE0MS44MzMgMjQuODY3MiA5NC40MjQxIDI0Ljg2NzJaTTk0LjQyNDEgMTk1LjExOEM0OS40ODc1IDE5NS4xMTggMTMuMTMxMSAxNTguMTQgMTMuMTMxMSAxMTIuNDM0QzEzLjEzMTEgNjYuNzI3NCA0OS40ODc1IDI5Ljc0ODQgOTQuNDI0MSAyOS43NDg0QzEzOS4zNiAyOS43NDg0IDE3NS43MTggNjYuNzI3NCAxNzUuNzE4IDExMi40MzRDMTc1LjcxOCAxNTguMTQgMTM5LjIxNiAxOTUuMTE4IDk0LjQyNDEgMTk1LjExOFoiIGZpbGw9IiM1RTEyQTAiLz4KPHBhdGggb3BhY2l0eT0iMC42IiBkPSJNOTQuNDIzOCAxOTUuMTEyQzEzOS4zMiAxOTUuMTEyIDE3NS43MTcgMTU4LjA5MiAxNzUuNzE3IDExMi40MjdDMTc1LjcxNyA2Ni43NjE1IDEzOS4zMiAyOS43NDIyIDk0LjQyMzggMjkuNzQyMkM0OS41MjcgMjkuNzQyMiAxMy4xMzA5IDY2Ljc2MTUgMTMuMTMwOSAxMTIuNDI3QzEzLjEzMDkgMTU4LjA5MiA0OS41MjcgMTk1LjExMiA5NC40MjM4IDE5NS4xMTJaIiBmaWxsPSJ1cmwoI3BhaW50Ml9saW5lYXJfOTE0XzQ4KSIvPgo8cGF0aCBvcGFjaXR5PSIwLjYiIGQ9Ik05My44NTA4IDE4NS4wNjJDNDkuNDk1OSAxNzcuODE0IDE5LjM5MjggMTM1LjM2MiAyNi42NjQgOTAuMjQ4M0MyOS44NjM1IDcwLjI3OTUgMzkuNzUyNCA1My4yNjkxIDUzLjcxMzMgNDAuOTkyMkMzMy4zNTM3IDUyLjk3MzQgMTguMjI5NCA3My44Mjk1IDE0LjE1NzUgOTkuMjcxMkM3LjAzMTYgMTQ0LjM4NSAzNy4xMzQ3IDE4Ni44MzcgODEuMzQ0MSAxOTQuMDg1QzEwNi4wNjYgMTk4LjIyNyAxMjkuOTE2IDE5MC4zODcgMTQ3LjUxMyAxNzUuMDA0QzEzMS45NTIgMTg0LjE3NSAxMTMuMDQ3IDE4OC4xNjkgOTMuODUwOCAxODUuMDYyWiIgZmlsbD0iI0E5ODY5OCIvPgo8cGF0aCBvcGFjaXR5PSIwLjYiIGQ9Ik0xMDcuMzY1IDMwLjkyMzdDODYuODYwMiAyNy41MjE2IDY2LjkzNjggMzIuMjU0OSA1MC42NDkxIDQyLjc1N0M1MC4zNTgyIDQzLjA1MjcgNTAuMDY3NCA0My4zNDg2IDUwLjA2NzQgNDMuMzQ4NkM1Ni4zMjA3IDM5LjUwMjggNjUuNDgyNSAzNi4xMDA3IDY1LjQ4MjUgMzYuMTAwN0M0MS45MjM2IDUwLjAwNDggMzQuNjUyMyA2NS44MzE4IDM0LjY1MjMgNjUuODMxOEM0My44MTQyIDQ3Ljc4NiA3MC43MTc5IDM1LjA2NTMgOTEuODA0NiAzNC4xNzc4QzExMi44OTEgMzMuMjkwMyAxMjYuNzA2IDM5LjY1MDcgMTQzLjU3NiA1My40MDY4QzE2MC40NDUgNjcuMzExIDE3MC42MjUgOTUuNzEwNCAxNjkuNjA3IDExOC4xOTRDMTY4LjczNSAxNDAuNjc4IDE1Ny4xMDEgMTU4Ljg3MSAxNTcuMTAxIDE1OC44NzFDMTY1LjA5OSAxNDguMzY4IDE2OS44OTggMTQwLjY3OCAxNzIuOTUyIDEzMi44MzdDMTczLjUzNCAxMzAuNDcxIDE3NC4xMTYgMTI4LjEwNSAxNzQuNDA2IDEyNS41OUMxODEuNjc4IDgwLjYyMzMgMTUxLjcyIDM4LjE3MTUgMTA3LjM2NSAzMC45MjM3WiIgZmlsbD0idXJsKCNwYWludDNfbGluZWFyXzkxNF80OCkiLz4KPHBhdGggZD0iTTE3MS42NDQgMTExLjY4OUMxNzEuNjQ0IDE1NS4wMjggMTM3LjAzMiAxOTAuMjMzIDk0LjQyMzEgMTkwLjIzM0M1MS44MTM0IDE5MC4yMzMgMTcuMDU2NiAxNTUuMDI4IDE3LjA1NjYgMTExLjY4OUgxNzEuNjQ0WiIgZmlsbD0idXJsKCNwYWludDRfbGluZWFyXzkxNF80OCkiLz4KPGcgb3BhY2l0eT0iMC42Ij4KPHBhdGggb3BhY2l0eT0iMC42IiBkPSJNMTY1LjUzNCAxMTEuNjg5QzE2NS41MzQgMTUzLjk5MyAxMzIuNjY4IDE4OC42MDUgOTEuMzY3MiAxOTAuMjMzQzkyLjM4NTIgMTkwLjIzMyA5My40MDMyIDE5MC4yMzMgOTQuNDIxMiAxOTAuMjMzQzEzNy4wMzEgMTkwLjIzMyAxNzEuNjQzIDE1NS4wMjggMTcxLjY0MyAxMTEuNjg5SDE2NS41MzRaIiBmaWxsPSJ1cmwoI3BhaW50NV9saW5lYXJfOTE0XzQ4KSIvPgo8L2c+CjxnIG9wYWNpdHk9IjAuNyI+CjxwYXRoIG9wYWNpdHk9IjAuNyIgZD0iTTI3Ljk2MzYgMTExLjY4OUgxNy4wNTY2QzE3LjA1NjYgMTU1LjAyOCA1MS42NjggMTkwLjIzMyA5NC4yNzc3IDE5MC4yMzNDOTYuMTY4MiAxOTAuMjMzIDk3LjkxMzMgMTkwLjIzMyA5OS42NTg1IDE5MC4wODRDNTkuNjY2NCAxODcuMTI2IDI3Ljk2MzYgMTUzLjEwNiAyNy45NjM2IDExMS42ODlaIiBmaWxsPSJ1cmwoI3BhaW50Nl9saW5lYXJfOTE0XzQ4KSIvPgo8L2c+CjxwYXRoIGQ9Ik0xNzEuNDk5IDExMi40MjJDMTcxLjQ5OSAxMDMuMzk5IDE1Ni4wODQgOTguMjIxMSAxMzUuNTc4IDk2LjQ0N0MxMjAuNzQ1IDk1LjI2MzMgMTA1Ljc2NyA5Ni43NDIyIDg4LjYwNjEgMTAyLjA2N0M3My43NzI2IDEwNi41MDUgNjAuMzkzNSAxMDUuNzY1IDUwLjY1IDEwNC41ODFDMjguOTgxNSAxMDIuMDY3IDE3LjA1NjYgMTAxLjc3MSAxNy4wNTY2IDExMi40MjJDMTcuMDU2NiAxMjcuODA1IDQ3Ljg4NjggMTQ3LjAzNCA5NC4xMzIzIDE0MC4zNzdDMTE3LjU0NiAxMzYuOTc2IDEyOS42MTYgMTMwLjAyNCAxNDMuNDMyIDEyNS4yOUMxNTguNDExIDEyMC4yNjEgMTcxLjQ5OSAxMjAuNDA5IDE3MS40OTkgMTEyLjQyMloiIGZpbGw9InVybCgjcGFpbnQ3X2xpbmVhcl85MTRfNDgpIi8+CjxwYXRoIGQ9Ik0xMTkuNzI3IDc1LjE1MjJDMTI2Ljk1NiA3NS4xNTIyIDEzMi44MTUgNjkuMTkyIDEzMi44MTUgNjEuODM5N0MxMzIuODE1IDU0LjQ4NzUgMTI2Ljk1NiA0OC41MjczIDExOS43MjcgNDguNTI3M0MxMTIuNDk5IDQ4LjUyNzMgMTA2LjYzOSA1NC40ODc1IDEwNi42MzkgNjEuODM5N0MxMDYuNjM5IDY5LjE5MiAxMTIuNDk5IDc1LjE1MjIgMTE5LjcyNyA3NS4xNTIyWiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTE0MS4xMDggODUuMDYxOUMxNDQuMTYgODUuMDYxOSAxNDYuNjM0IDgyLjU0NTQgMTQ2LjYzNCA3OS40NDExQzE0Ni42MzQgNzYuMzM2OCAxNDQuMTYgNzMuODIwMyAxNDEuMTA4IDczLjgyMDNDMTM4LjA1NiA3My44MjAzIDEzNS41ODIgNzYuMzM2OCAxMzUuNTgyIDc5LjQ0MTFDMTM1LjU4MiA4Mi41NDU0IDEzOC4wNTYgODUuMDYxOSAxNDEuMTA4IDg1LjA2MTlaIiBmaWxsPSJ3aGl0ZSIvPgo8ZyBvcGFjaXR5PSIwLjYiPgo8cGF0aCBvcGFjaXR5PSIwLjYiIGQ9Ik0xNjAuODg0IDUxLjIwM0MxNjAuNzM4IDUxLjIwMyAxNjAuNTkzIDUxLjIwMyAxNjAuNTkzIDUxLjIwM0MxNTkuNzIgNTEuMDU1MSAxNTkuMTM5IDUwLjE2NzYgMTU5LjI4NCA0OS4xMzIyQzE2MC41OTMgNDIuMzI4IDE2Ni4xMTkgMzUuODE5OCAxNjYuNDEgMzUuNTIzOUMxNjYuOTkxIDM0Ljc4NDQgMTY4LjE1NSAzNC43ODQ0IDE2OC43MzcgMzUuMzc2QzE2OS40NjQgMzUuOTY3NyAxNjkuNDY0IDM3LjE1MSAxNjguODgyIDM3Ljc0MjdDMTY4LjczNyAzNy44OTA2IDE2My42NDcgNDMuOTU1MSAxNjIuNDg0IDQ5Ljg3MThDMTYyLjMzOCA1MC43NTkzIDE2MS42MTEgNTEuMjAzIDE2MC44ODQgNTEuMjAzWiIgZmlsbD0idXJsKCNwYWludDhfbGluZWFyXzkxNF80OCkiLz4KPC9nPgo8cGF0aCBvcGFjaXR5PSIwLjIiIGQ9Ik04OS4wNjAzIDE3NC4wOThDOTEuMzA5MSAxNzQuMDk4IDkzLjEzMjIgMTcyLjI0NCA5My4xMzIyIDE2OS45NTZDOTMuMTMyMiAxNjcuNjY5IDkxLjMwOTEgMTY1LjgxNCA4OS4wNjAzIDE2NS44MTRDODYuODExNCAxNjUuODE0IDg0Ljk4ODMgMTY3LjY2OSA4NC45ODgzIDE2OS45NTZDODQuOTg4MyAxNzIuMjQ0IDg2LjgxMTQgMTc0LjA5OCA4OS4wNjAzIDE3NC4wOThaIiBmaWxsPSJ3aGl0ZSIvPgo8ZyBvcGFjaXR5PSIwLjQiPgo8cGF0aCBvcGFjaXR5PSIwLjYiIGQ9Ik04Ni43MTMxIDE3Mi42NTdDODUuMTEzNCAxNzEuMDMgODUuMTEzNCAxNjguMzY4IDg2LjcxMzEgMTY2Ljc0Qzg3LjAwMzkgMTY2LjQ0NCA4Ny4yOTQ4IDE2Ni4yOTYgODcuNTg1NiAxNjZDODcuMDAzOSAxNjYuMTQ5IDg2LjU2NzYgMTY2LjQ0NCA4Ni4xMzE0IDE2Ni44ODhDODQuNTMxNyAxNjguNTE1IDg0LjUzMTcgMTcxLjE3OCA4Ni4xMzE0IDE3Mi44MDVDODcuNDQwMiAxNzQuMTM2IDg5LjQ3NjEgMTc0LjQzMiA5MS4wNzU4IDE3My41NDVDODkuNjIxNSAxNzQuMTM2IDg3Ljg3NjUgMTczLjg0MSA4Ni43MTMxIDE3Mi42NTdaIiBmaWxsPSJ1cmwoI3BhaW50OV9saW5lYXJfOTE0XzQ4KSIvPgo8L2c+CjxwYXRoIG9wYWNpdHk9IjAuMyIgZD0iTTkwLjQ5MTcgMTY4Ljc3OUM5MC45NzM2IDE2OC43NzkgOTEuMzY0MyAxNjguMzgyIDkxLjM2NDMgMTY3Ljg5MkM5MS4zNjQzIDE2Ny40MDEgOTAuOTczNiAxNjcuMDA0IDkwLjQ5MTcgMTY3LjAwNEM5MC4wMDk4IDE2Ny4wMDQgODkuNjE5MSAxNjcuNDAxIDg5LjYxOTEgMTY3Ljg5MkM4OS42MTkxIDE2OC4zODIgOTAuMDA5OCAxNjguNzc5IDkwLjQ5MTcgMTY4Ljc3OVoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIG9wYWNpdHk9IjAuMiIgZD0iTTExMC4zMDIgMTcyLjAzNUMxMTIuNTUxIDE3Mi4wMzUgMTE0LjM3NCAxNzAuMTggMTE0LjM3NCAxNjcuODkyQzExNC4zNzQgMTY1LjYwNCAxMTIuNTUxIDE2My43NSAxMTAuMzAyIDE2My43NUMxMDguMDUzIDE2My43NSAxMDYuMjMgMTY1LjYwNCAxMDYuMjMgMTY3Ljg5MkMxMDYuMjMgMTcwLjE4IDEwOC4wNTMgMTcyLjAzNSAxMTAuMzAyIDE3Mi4wMzVaIiBmaWxsPSJ3aGl0ZSIvPgo8ZyBvcGFjaXR5PSIwLjQiPgo8cGF0aCBvcGFjaXR5PSIwLjYiIGQ9Ik0xMDcuOTU1IDE3MC41OTNDMTA2LjM1NSAxNjguOTY1IDEwNi4zNTUgMTY2LjMwMiAxMDcuOTU1IDE2NC42NzVDMTA4LjI0NSAxNjQuMzc5IDEwOC41MzcgMTY0LjIzMSAxMDguODI3IDE2My45MzZDMTA4LjI0NSAxNjQuMDgzIDEwNy44MDkgMTY0LjM3OSAxMDcuMzczIDE2NC44MjNDMTA1Ljc3NCAxNjYuNDUgMTA1Ljc3NCAxNjkuMTEzIDEwNy4zNzMgMTcwLjc0QzEwOC42ODMgMTcyLjA3MiAxMTAuNzE4IDE3Mi4zNjcgMTEyLjMxOCAxNzEuNDc5QzExMC44NjQgMTcyLjA3MiAxMDkuMTE5IDE3MS43NzYgMTA3Ljk1NSAxNzAuNTkzWiIgZmlsbD0idXJsKCNwYWludDEwX2xpbmVhcl85MTRfNDgpIi8+CjwvZz4KPHBhdGggb3BhY2l0eT0iMC4zIiBkPSJNMTExLjczNCAxNjYuNzE0QzExMi4yMTYgMTY2LjcxNCAxMTIuNjA2IDE2Ni4zMTcgMTEyLjYwNiAxNjUuODI2QzExMi42MDYgMTY1LjMzNyAxMTIuMjE2IDE2NC45MzkgMTExLjczNCAxNjQuOTM5QzExMS4yNTIgMTY0LjkzOSAxMTAuODYxIDE2NS4zMzcgMTEwLjg2MSAxNjUuODI2QzExMC44NjEgMTY2LjMxNyAxMTEuMjUyIDE2Ni43MTQgMTExLjczNCAxNjYuNzE0WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggb3BhY2l0eT0iMC4yIiBkPSJNOTkuNzk4IDE4MS42NjJDMTAxLjQ4NSAxODEuNjYyIDEwMi44NTIgMTgwLjI3MSAxMDIuODUyIDE3OC41NTZDMTAyLjg1MiAxNzYuODQgMTAxLjQ4NSAxNzUuNDQ5IDk5Ljc5OCAxNzUuNDQ5Qzk4LjExMTQgMTc1LjQ0OSA5Ni43NDQxIDE3Ni44NCA5Ni43NDQxIDE3OC41NTZDOTYuNzQ0MSAxODAuMjcxIDk4LjExMTQgMTgxLjY2MiA5OS43OTggMTgxLjY2MloiIGZpbGw9IndoaXRlIi8+CjxnIG9wYWNpdHk9IjAuNCI+CjxwYXRoIG9wYWNpdHk9IjAuNiIgZD0iTTk4LjA1MjkgMTgwLjQ5N0M5Ni44ODk2IDE3OS4zMTMgOTYuODg5NiAxNzcuMjQzIDk4LjA1MjkgMTc2LjA1OUM5OC4xOTg0IDE3NS45MTEgOTguNDg5MiAxNzUuNzY0IDk4LjYzNDYgMTc1LjYxNUM5OC4xOTg0IDE3NS43NjQgOTcuOTA3NSAxNzYuMDU5IDk3LjYxNjYgMTc2LjM1NUM5Ni40NTMzIDE3Ny41MzggOTYuNDUzMyAxNzkuNjEgOTcuNjE2NiAxODAuNzkzQzk4LjYzNDYgMTgxLjgyOSAxMDAuMDg5IDE4MS45NzYgMTAxLjM5OCAxODEuMjM3QzEwMC4yMzQgMTgxLjY4MSA5OC45MjU1IDE4MS4zODUgOTguMDUyOSAxODAuNDk3WiIgZmlsbD0idXJsKCNwYWludDExX2xpbmVhcl85MTRfNDgpIi8+CjwvZz4KPHBhdGggb3BhY2l0eT0iMC4zIiBkPSJNMTAwLjgyMiAxNzcuNTA4QzEwMS4xNDMgMTc3LjUwOCAxMDEuNDAzIDE3Ny4yNDMgMTAxLjQwMyAxNzYuOTE3QzEwMS40MDMgMTc2LjU5IDEwMS4xNDMgMTc2LjMyNCAxMDAuODIyIDE3Ni4zMjRDMTAwLjUwMSAxNzYuMzI0IDEwMC4yNCAxNzYuNTkgMTAwLjI0IDE3Ni45MTdDMTAwLjI0IDE3Ny4yNDMgMTAwLjUwMSAxNzcuNTA4IDEwMC44MjIgMTc3LjUwOFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIG9wYWNpdHk9IjAuMiIgZD0iTTExOC41NjUgMTc5LjQyOUMxMjAuMjUyIDE3OS40MjkgMTIxLjYxOSAxNzguMDM5IDEyMS42MTkgMTc2LjMyM0MxMjEuNjE5IDE3NC42MDcgMTIwLjI1MiAxNzMuMjE3IDExOC41NjUgMTczLjIxN0MxMTYuODc5IDE3My4yMTcgMTE1LjUxMiAxNzQuNjA3IDExNS41MTIgMTc2LjMyM0MxMTUuNTEyIDE3OC4wMzkgMTE2Ljg3OSAxNzkuNDI5IDExOC41NjUgMTc5LjQyOVoiIGZpbGw9IndoaXRlIi8+CjxnIG9wYWNpdHk9IjAuNCI+CjxwYXRoIG9wYWNpdHk9IjAuNiIgZD0iTTExNi44MjEgMTc4LjI2NUMxMTUuNjU4IDE3Ny4wODEgMTE1LjY1OCAxNzUuMDEgMTE2LjgyMSAxNzMuODI3QzExNi45NjYgMTczLjY3OSAxMTcuMjU3IDE3My41MzEgMTE3LjQwMyAxNzMuMzgzQzExNi45NjYgMTczLjUzMSAxMTYuNjc1IDE3My44MjcgMTE2LjM4NSAxNzQuMTIzQzExNS4yMjEgMTc1LjMwNiAxMTUuMjIxIDE3Ny4zNzcgMTE2LjM4NSAxNzguNTYxQzExNy40MDMgMTc5LjU5NiAxMTguODU3IDE3OS43NDQgMTIwLjE2NiAxNzkuMDA1QzExOS4wMDMgMTc5LjQ0OSAxMTcuNjkzIDE3OS4xNTIgMTE2LjgyMSAxNzguMjY1WiIgZmlsbD0idXJsKCNwYWludDEyX2xpbmVhcl85MTRfNDgpIi8+CjwvZz4KPHBhdGggb3BhY2l0eT0iMC4zIiBkPSJNMTE5LjU5MiAxNzUuMjkzQzExOS45MTQgMTc1LjI5MyAxMjAuMTc0IDE3NS4wMjggMTIwLjE3NCAxNzQuNzAxQzEyMC4xNzQgMTc0LjM3NCAxMTkuOTE0IDE3NC4xMDkgMTE5LjU5MiAxNzQuMTA5QzExOS4yNzEgMTc0LjEwOSAxMTkuMDEgMTc0LjM3NCAxMTkuMDEgMTc0LjcwMUMxMTkuMDEgMTc1LjAyOCAxMTkuMjcxIDE3NS4yOTMgMTE5LjU5MiAxNzUuMjkzWiIgZmlsbD0id2hpdGUiLz4KPHBhdGggb3BhY2l0eT0iMC4yIiBkPSJNNzEuNzM2NSAxNzIuNjM0Qzc1LjQzMTEgMTcyLjYzNCA3OC40MjYgMTY5LjU4NyA3OC40MjYgMTY1LjgzQzc4LjQyNiAxNjIuMDcyIDc1LjQzMTEgMTU5LjAyNSA3MS43MzY1IDE1OS4wMjVDNjguMDQxOSAxNTkuMDI1IDY1LjA0NjkgMTYyLjA3MiA2NS4wNDY5IDE2NS44M0M2NS4wNDY5IDE2OS41ODcgNjguMDQxOSAxNzIuNjM0IDcxLjczNjUgMTcyLjYzNFoiIGZpbGw9IndoaXRlIi8+CjxnIG9wYWNpdHk9IjAuNCI+CjxwYXRoIG9wYWNpdHk9IjAuNiIgZD0iTTY3Ljk1NyAxNzAuMTA0QzY1LjMzOTIgMTY3LjQ0MSA2NS4zMzkyIDE2My4xNTEgNjcuOTU3IDE2MC40ODlDNjguMzkzMiAxNjAuMDQ1IDY4LjgyOTUgMTU5Ljc0OSA2OS40MTExIDE1OS40NTNDNjguNTM4NyAxNTkuNzQ5IDY3LjgxMTUgMTYwLjM0MSA2Ny4wODQ0IDE2MC45MzNDNjQuNDY2NyAxNjMuNTk1IDY0LjQ2NjcgMTY3Ljg4NSA2Ny4wODQ0IDE3MC41NDdDNjkuMjY1NyAxNzIuNzY2IDcyLjYxMDYgMTczLjIxIDc1LjIyODIgMTcxLjU4MkM3Mi43NTYgMTcyLjYxOCA2OS44NDc0IDE3Mi4xNzQgNjcuOTU3IDE3MC4xMDRaIiBmaWxsPSJ1cmwoI3BhaW50MTNfbGluZWFyXzkxNF80OCkiLz4KPC9nPgo8cGF0aCBvcGFjaXR5PSIwLjMiIGQ9Ik03NC4wNzE1IDE2My43NDlDNzQuODc0NiAxNjMuNzQ5IDc1LjUyNTcgMTYzLjA4NyA3NS41MjU3IDE2Mi4yN0M3NS41MjU3IDE2MS40NTMgNzQuODc0NiAxNjAuNzkxIDc0LjA3MTUgMTYwLjc5MUM3My4yNjgyIDE2MC43OTEgNzIuNjE3MiAxNjEuNDUzIDcyLjYxNzIgMTYyLjI3QzcyLjYxNzIgMTYzLjA4NyA3My4yNjgyIDE2My43NDkgNzQuMDcxNSAxNjMuNzQ5WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggb3BhY2l0eT0iMC4yIiBkPSJNMTMxLjUzOSAxNTUuOTEzQzEzNS4yMzQgMTU1LjkxMyAxMzguMjI5IDE1Mi44NjcgMTM4LjIyOSAxNDkuMTA5QzEzOC4yMjkgMTQ1LjM1MSAxMzUuMjM0IDE0Mi4zMDUgMTMxLjUzOSAxNDIuMzA1QzEyNy44NDUgMTQyLjMwNSAxMjQuODUgMTQ1LjM1MSAxMjQuODUgMTQ5LjEwOUMxMjQuODUgMTUyLjg2NyAxMjcuODQ1IDE1NS45MTMgMTMxLjUzOSAxNTUuOTEzWiIgZmlsbD0id2hpdGUiLz4KPGcgb3BhY2l0eT0iMC40Ij4KPHBhdGggb3BhY2l0eT0iMC42IiBkPSJNMTI3LjU3NCAxNTMuNEMxMjQuOTU2IDE1MC43MzggMTI0Ljk1NiAxNDYuNDQ5IDEyNy41NzQgMTQzLjc4NkMxMjguMDEgMTQzLjM0MiAxMjguNDQ3IDE0My4wNDYgMTI5LjAyOSAxNDIuNzVDMTI4LjE1NSAxNDMuMDQ2IDEyNy40MjkgMTQzLjYzOCAxMjYuNzAyIDE0NC4yM0MxMjQuMDg0IDE0Ni44OTIgMTI0LjA4NCAxNTEuMTgyIDEyNi43MDIgMTUzLjg0NEMxMjguODgzIDE1Ni4wNjMgMTMyLjIyOCAxNTYuNTA3IDEzNC44NDYgMTU0Ljg3OUMxMzIuMzczIDE1NS45MTUgMTI5LjYwOSAxNTUuNDcyIDEyNy41NzQgMTUzLjRaIiBmaWxsPSJ1cmwoI3BhaW50MTRfbGluZWFyXzkxNF80OCkiLz4KPC9nPgo8cGF0aCBvcGFjaXR5PSIwLjMiIGQ9Ik0xMzMuODM3IDE0Ny4wNDlDMTM0LjY0MSAxNDcuMDQ5IDEzNS4yOTEgMTQ2LjM4NiAxMzUuMjkxIDE0NS41NjlDMTM1LjI5MSAxNDQuNzUyIDEzNC42NDEgMTQ0LjA5IDEzMy44MzcgMTQ0LjA5QzEzMy4wMzQgMTQ0LjA5IDEzMi4zODMgMTQ0Ljc1MiAxMzIuMzgzIDE0NS41NjlDMTMyLjM4MyAxNDYuMzg2IDEzMy4wMzQgMTQ3LjA0OSAxMzMuODM3IDE0Ny4wNDlaIiBmaWxsPSJ3aGl0ZSIvPgo8ZGVmcz4KPHJhZGlhbEdyYWRpZW50IGlkPSJwYWludDBfcmFkaWFsXzkxNF80OCIgY3g9IjAiIGN5PSIwIiByPSIxIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgZ3JhZGllbnRUcmFuc2Zvcm09InRyYW5zbGF0ZSgxODQuNDEzIDI3LjIyMDQpIHNjYWxlKDY0Ljk5NzEgNjYuMTEwMSkiPgo8c3RvcCBzdG9wLWNvbG9yPSIjRkZFQUZGIiBzdG9wLW9wYWNpdHk9IjAuNiIvPgo8c3RvcCBvZmZzZXQ9IjAuNjgwNyIgc3RvcC1jb2xvcj0iI0EwODdDOSIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMxMDAwMkYiLz4KPC9yYWRpYWxHcmFkaWVudD4KPHJhZGlhbEdyYWRpZW50IGlkPSJwYWludDFfcmFkaWFsXzkxNF80OCIgY3g9IjAiIGN5PSIwIiByPSIxIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgZ3JhZGllbnRUcmFuc2Zvcm09InRyYW5zbGF0ZSgxNjcuMzk0IDk3Ljc0MjkpIHNjYWxlKDE4Mi4wMzMgMTk2LjkxNikiPgo8c3RvcCBzdG9wLWNvbG9yPSIjRkZFQUZGIiBzdG9wLW9wYWNpdHk9IjAuNiIvPgo8c3RvcCBvZmZzZXQ9IjAuNjgwNyIgc3RvcC1jb2xvcj0iI0EwODdDOSIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMxMDAwMkYiLz4KPC9yYWRpYWxHcmFkaWVudD4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDJfbGluZWFyXzkxNF80OCIgeDE9IjgxLjM4MzgiIHkxPSIxOTMuOTQiIHgyPSIxMDguMjYiIHkyPSIzMC45MjIyIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiM4MUZGRkYiLz4KPHN0b3Agb2Zmc2V0PSIwLjYyMDIiIHN0b3AtY29sb3I9IndoaXRlIiBzdG9wLW9wYWNpdHk9IjAiLz4KPC9saW5lYXJHcmFkaWVudD4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDNfbGluZWFyXzkxNF80OCIgeDE9IjE1MS43MTMiIHkxPSI1Ni4yNzE0IiB4Mj0iODMuNDQ5NSIgeTI9IjExNy44NTEiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agb2Zmc2V0PSIwLjI4ODgiIHN0b3AtY29sb3I9IndoaXRlIi8+CjxzdG9wIG9mZnNldD0iMC43Nzk2IiBzdG9wLWNvbG9yPSJ3aGl0ZSIgc3RvcC1vcGFjaXR5PSIwIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQ0X2xpbmVhcl85MTRfNDgiIHgxPSIxNy4xMjIxIiB5MT0iMTUwLjkxNCIgeDI9IjE3MS42MDciIHkyPSIxNTAuOTE0IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiMwMDAyRTkiLz4KPHN0b3Agb2Zmc2V0PSIwLjk5NTIiIHN0b3AtY29sb3I9IiNGRjAwQzciLz4KPC9saW5lYXJHcmFkaWVudD4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDVfbGluZWFyXzkxNF80OCIgeDE9IjE3OC45MTgiIHkxPSIxMTguNTgxIiB4Mj0iOTMuNDg2NyIgeTI9IjE5Ny45NTkiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agb2Zmc2V0PSIwLjI4ODgiIHN0b3AtY29sb3I9IndoaXRlIi8+CjxzdG9wIG9mZnNldD0iMC43Nzk2IiBzdG9wLWNvbG9yPSJ3aGl0ZSIgc3RvcC1vcGFjaXR5PSIwIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQ2X2xpbmVhcl85MTRfNDgiIHgxPSIxNy4xMjIxIiB5MT0iMTUwLjkxNCIgeDI9Ijk5Ljc3MDUiIHkyPSIxNTAuOTE0IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiMwMDAyOTIiLz4KPHN0b3Agb2Zmc2V0PSIwLjk5NTIiIHN0b3AtY29sb3I9IiM3RDAwQzciLz4KPC9saW5lYXJHcmFkaWVudD4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDdfbGluZWFyXzkxNF80OCIgeDE9IjE3LjIyNTgiIHkxPSIxMTguOTQ3IiB4Mj0iMTcxLjUwMyIgeTI9IjExOC45NDciIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iIzAwMDI5MiIvPgo8c3RvcCBvZmZzZXQ9IjAuOTk1MiIgc3RvcC1jb2xvcj0iI0JFMDBDNyIvPgo8L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50OF9saW5lYXJfOTE0XzQ4IiB4MT0iMTY4Ljk3MyIgeTE9IjM0LjgwMzYiIHgyPSIxNTcuNjA5IiB5Mj0iNTIuOTU4MSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBvZmZzZXQ9IjAuMjg4OCIgc3RvcC1jb2xvcj0id2hpdGUiLz4KPHN0b3Agb2Zmc2V0PSIwLjc3OTYiIHN0b3AtY29sb3I9IndoaXRlIiBzdG9wLW9wYWNpdHk9IjAiLz4KPC9saW5lYXJHcmFkaWVudD4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDlfbGluZWFyXzkxNF80OCIgeDE9Ijg0LjkyNzUiIHkxPSIxNzAuMTIxIiB4Mj0iOTEuMDgwMyIgeTI9IjE3MC4xMjEiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agb2Zmc2V0PSIwLjI4ODgiIHN0b3AtY29sb3I9IndoaXRlIi8+CjxzdG9wIG9mZnNldD0iMC43Nzk2IiBzdG9wLWNvbG9yPSJ3aGl0ZSIgc3RvcC1vcGFjaXR5PSIwIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQxMF9saW5lYXJfOTE0XzQ4IiB4MT0iMTA2LjE1NSIgeTE9IjE2OC4wMjgiIHgyPSIxMTIuMzA3IiB5Mj0iMTY4LjAyOCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBvZmZzZXQ9IjAuMjg4OCIgc3RvcC1jb2xvcj0id2hpdGUiLz4KPHN0b3Agb2Zmc2V0PSIwLjc3OTYiIHN0b3AtY29sb3I9IndoaXRlIiBzdG9wLW9wYWNpdHk9IjAiLz4KPC9saW5lYXJHcmFkaWVudD4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDExX2xpbmVhcl85MTRfNDgiIHgxPSI5Ni42NjIzIiB5MT0iMTc4LjYwNCIgeDI9IjEwMS4yODIiIHkyPSIxNzguNjA0IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIG9mZnNldD0iMC4yODg4IiBzdG9wLWNvbG9yPSJ3aGl0ZSIvPgo8c3RvcCBvZmZzZXQ9IjAuNzc5NiIgc3RvcC1jb2xvcj0id2hpdGUiIHN0b3Atb3BhY2l0eT0iMCIvPgo8L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MTJfbGluZWFyXzkxNF80OCIgeDE9IjExNS40MyIgeTE9IjE3Ni4zNzEiIHgyPSIxMjAuMDQ5IiB5Mj0iMTc2LjM3MSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBvZmZzZXQ9IjAuMjg4OCIgc3RvcC1jb2xvcj0id2hpdGUiLz4KPHN0b3Agb2Zmc2V0PSIwLjc3OTYiIHN0b3AtY29sb3I9IndoaXRlIiBzdG9wLW9wYWNpdHk9IjAiLz4KPC9saW5lYXJHcmFkaWVudD4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDEzX2xpbmVhcl85MTRfNDgiIHgxPSI2NS4wNTQ0IiB5MT0iMTY1Ljk4OCIgeDI9Ijc1LjEwMjQiIHkyPSIxNjUuOTg4IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIG9mZnNldD0iMC4yODg4IiBzdG9wLWNvbG9yPSJ3aGl0ZSIvPgo8c3RvcCBvZmZzZXQ9IjAuNzc5NiIgc3RvcC1jb2xvcj0id2hpdGUiIHN0b3Atb3BhY2l0eT0iMCIvPgo8L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MTRfbGluZWFyXzkxNF80OCIgeDE9IjEyNC43MjgiIHkxPSIxNDkuMjc5IiB4Mj0iMTM0Ljc3NSIgeTI9IjE0OS4yNzkiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agb2Zmc2V0PSIwLjI4ODgiIHN0b3AtY29sb3I9IndoaXRlIi8+CjxzdG9wIG9mZnNldD0iMC43Nzk2IiBzdG9wLWNvbG9yPSJ3aGl0ZSIgc3RvcC1vcGFjaXR5PSIwIi8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPC9zdmc+Cg==',
  skip:    'data:image/png;base64,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',
};
const buyLogo = (src, r) => (<img src={src} alt="" width="22" height="22" style={{ display:'block', flexShrink:0, borderRadius:r }}/>);
const buyCoin = (src, pad) => (<span style={{ width:22, height:22, borderRadius:'50%', background:'#fff', display:'inline-flex', alignItems:'center', justifyContent:'center', flexShrink:0, overflow:'hidden' }}><img src={src} alt="" width={22 - pad * 2} height={22 - pad * 2} style={{ display:'block' }}/></span>);
const BUY_VENUES = [
  { name:'MEXC',    tagKey:'buy.mexcTag',    tag:'P2P/USDT spot',    href:'https://www.mexc.com/exchange/P2P_USDT', logo:buyLogo(BUY_LOGOS.mexc, '50%') },
  { name:'KuCoin',  tagKey:'buy.mexcTag',    tag:'P2P/USDT spot',    href:'https://www.kucoin.com/trade/P2P-USDT',  logo:buyCoin(BUY_LOGOS.kucoin, 4) },
  { name:'Osmosis', tagKey:'buy.osmosisTag', tag:'Swap on-chain',    href:'https://app.osmosis.zone/?to=P2P',       logo:buyLogo(BUY_LOGOS.osmosis, 0) },
  { name:'Skip Go', tagKey:'buy.skipTag',    tag:'Cross-chain swap', href:'https://swap.sentinel.co',               logo:buyLogo(BUY_LOGOS.skip, 6) },
];

/* ── Language switcher ───────────────────────────────────────
   Globe button + dropdown of locale endonyms. Picking a locale writes the
   `sn-locale` cookie and reloads; the SSR middleware reads the cookie on the
   next request and renders the page in that language (no path prefix). The
   active locale comes from window.__locale, which the server stamps into the
   page and lib/globals.ts re-applies on hydration — so the initial label
   matches between server and client (no hydration mismatch). ── */
function LangSwitcher() {
  const meta = (typeof window !== 'undefined' && window.__i18n) || {
    cookie: 'sn-locale',
    locales: ['en'],
    names: { en: 'English' },
    isRtl: () => false,
  };
  const current = (typeof window !== 'undefined' && window.__locale) || 'en';
  const [open, setOpen] = useState(false);
  const closeT = useRef(null);
  const enter = () => { if (closeT.current) clearTimeout(closeT.current); setOpen(true); };
  const leave = () => { if (closeT.current) clearTimeout(closeT.current); closeT.current = setTimeout(() => setOpen(false), 350); };
  useEffect(() => () => { if (closeT.current) clearTimeout(closeT.current); }, []);

  const choose = (loc) => {
    if (loc === current) { setOpen(false); return; }
    // 1 year, site-wide. Reloading lets the server re-render in the new locale.
    // Secure only over HTTPS so plain-http dev (e.g. http://127.0.0.1) can still
    // write it — browsers drop Secure cookies on non-secure origins.
    const secure = location.protocol === 'https:' ? '; secure' : '';
    document.cookie = `${meta.cookie}=${encodeURIComponent(loc)}; path=/; max-age=31536000; samesite=lax${secure}`;
    window.location.reload();
  };

  return (
    <div style={{ position:'relative' }} onMouseEnter={enter} onMouseLeave={leave}>
      <button type="button" aria-haspopup="menu" aria-expanded={open} aria-label={tr('lang.label', 'Language')}
        onClick={() => setOpen(o => !o)}
        style={{ display:'inline-flex', alignItems:'center', gap:7, height:34, padding:'0 12px', borderRadius:999, cursor:'pointer', background:'rgba(255,255,255,0.05)', border:'1px solid rgba(255,255,255,0.14)', fontFamily:T.fontHeading, fontWeight:500, fontSize:13.5, color:'rgba(234,234,234,0.92)', transition:'background 160ms, border-color 160ms' }}
        onMouseOver={e => { e.currentTarget.style.background='rgba(255,255,255,0.08)'; }}
        onMouseOut={e => { e.currentTarget.style.background='rgba(255,255,255,0.05)'; }}>
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.6 2.5 15.4 0 18M12 3c-2.5 2.6-2.5 15.4 0 18"/></svg>
        <span>{meta.names[current] || current}</span>
        <svg width="8" height="5" viewBox="0 0 9 6" fill="none" style={{ transform:open?'rotate(180deg)':'none', transition:'transform 220ms' }} aria-hidden="true"><path d="M0.5 1L4.5 5L8.5 1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>
      </button>
      {open && (
        <div style={{ position:'absolute', top:'100%', right:0, paddingTop:8, zIndex:70, animation:'sn-buy-in 200ms cubic-bezier(.22,.61,.36,1) both' }}>
        <div role="menu" style={{ minWidth:180, padding:6, borderRadius:14, background:'rgba(18,18,20,0.96)', border:'1px solid rgba(255,255,255,0.1)', backdropFilter:'blur(16px)', boxShadow:'0 18px 50px -16px rgba(0,0,0,0.7)' }}>
          {meta.locales.map((loc) => {
            const active = loc === current;
            return (
              <button key={loc} type="button" role="menuitemradio" aria-checked={active}
                dir={meta.isRtl(loc) ? 'rtl' : 'ltr'}
                onClick={() => choose(loc)}
                className="sn-buy-row"
                style={{ display:'flex', alignItems:'center', justifyContent:'space-between', gap:10, width:'100%', boxSizing:'border-box', padding:'9px 12px', borderRadius:9, border:'none', cursor:'pointer', background:active?'rgba(1,86,252,0.18)':'transparent', fontFamily:T.fontBody, fontSize:14, color:active?'#9cc0ff':'rgba(234,234,234,0.82)', textAlign:'start' }}>
                <span>{meta.names[loc] || loc}</span>
                {active && (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
                )}
              </button>
            );
          })}
        </div>
        </div>
      )}
    </div>
  );
}

function BuyP2P() {
  const [open, setOpen] = useState(false);
  const closeT = useRef(null);
  const enter = () => { if (closeT.current) clearTimeout(closeT.current); setOpen(true); };
  const leave = () => { if (closeT.current) clearTimeout(closeT.current); closeT.current = setTimeout(() => setOpen(false), 350); };
  useEffect(() => () => { if (closeT.current) clearTimeout(closeT.current); }, []);
  return (
    <div style={{ position:'relative' }} onMouseEnter={enter} onMouseLeave={leave}>
      <style>{`.sn-buy-row { transition:background 160ms; } .sn-buy-row:hover { background:rgba(255,255,255,0.06); } @keyframes sn-buy-in { from { opacity:0; transform:translateY(6px); } to { opacity:1; transform:translateY(0); } }`}</style>
      <button aria-haspopup="true" aria-expanded={open} onClick={() => setOpen(o => !o)}
        style={{ display:'inline-flex', alignItems:'center', gap:7, height:34, padding:'0 14px', borderRadius:999, cursor:'pointer', background:'#0156FC', border:'1px solid rgba(255,255,255,0.14)', fontFamily:T.fontHeading, fontWeight:500, fontSize:14, color:'#fff' }}>
        {tr('nav.buyP2P', 'Buy P2P')}
        <svg width="8" height="5" viewBox="0 0 9 6" fill="none" style={{ transform:open?'rotate(180deg)':'none', transition:'transform 220ms' }}><path d="M0.5 1L4.5 5L8.5 1" stroke="white" strokeWidth="1.2" strokeLinecap="round"/></svg>
      </button>
      {open && (
        <div style={{ position:'absolute', top:'100%', right:0, paddingTop:10, zIndex:60, animation:'sn-buy-in 220ms cubic-bezier(.22,.61,.36,1) both' }}>
          <div style={{ width:232, boxSizing:'border-box', background:'#0c0c0c', border:'1px solid rgba(255,255,255,0.08)', borderRadius:18, padding:10, boxShadow:'0 30px 70px -20px rgba(0,0,0,0.75)', display:'flex', flexDirection:'column', gap:2 }}>
            {BUY_VENUES.map(v => (
              <a key={v.name} href={v.href} target="_blank" rel="noopener noreferrer" className="sn-buy-row"
                 style={{ display:'flex', alignItems:'center', gap:11, padding:'9px 10px', borderRadius:12, textDecoration:'none' }}>
                {v.logo}
                <span style={{ display:'flex', flexDirection:'column', gap:1 }}>
                  <span style={{ fontFamily:T.fontHeading, fontWeight:500, fontSize:14.5, color:'rgba(255,255,255,0.95)' }}>{v.name}</span>
                  <span style={{ fontFamily:T.fontBody, fontSize:11.5, color:'rgba(255,255,255,0.45)' }}>{v.tag}</span>
                </span>
                <span style={{ marginLeft:'auto', fontFamily:T.fontBody, color:'rgba(255,255,255,0.4)', fontSize:12 }} aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [acc, setAcc] = useState(null);
  const isMobile = useIsMobile(900);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);
  useEffect(() => { if (!isMobile) setMobileOpen(false); }, [isMobile]);
  const navItems = ['Explore','dVPN','Build','More'];
  const headerBg = (scrolled || open || mobileOpen) ? 'rgba(12,12,12,0.92)' : 'transparent';

  if (isMobile) {
    return (
      <header style={{ position:'fixed', top:0, left:0, right:0, zIndex:50, transition:'background 300ms, border-color 300ms', borderBottom:`1px solid ${(scrolled||mobileOpen) ? 'rgba(255,255,255,0.06)' : 'transparent'}`, background: headerBg, backdropFilter:(scrolled||mobileOpen) ? 'blur(16px)' : 'none' }}>
        <div style={{ padding:'0 clamp(16px,4vw,24px)', height:62, display:'flex', alignItems:'center', justifyContent:'space-between' }}>
          <a href="#" style={{ display:'flex', alignItems:'center', gap:9, textDecoration:'none' }}>
            <SentinelMark size={28} color="#0156FC" />
            <span style={{ fontFamily:T.fontHeading, fontWeight:400, fontSize:17, color:'white' }}>Sentinel</span>
          </a>
          {/* Language switcher sits in the always-visible top bar, left of the
              hamburger, so the locale is selectable without opening the menu. */}
          <div style={{ display:'flex', alignItems:'center', gap:10 }}>
            <LangSwitcher />
            <button onClick={() => setMobileOpen(o => !o)} aria-label={tr('nav.menu', 'Menu')} aria-expanded={mobileOpen} aria-controls="sn-mobile-nav"
              style={{ width:42, height:42, display:'grid', placeItems:'center', background:'transparent', border:'1px solid rgba(255,255,255,0.14)', borderRadius:12, cursor:'pointer' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round">
                {mobileOpen
                  ? <g><line x1="6" y1="6" x2="18" y2="18"/><line x1="18" y1="6" x2="6" y2="18"/></g>
                  : <g><line x1="3" y1="7" x2="21" y2="7"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="17" x2="21" y2="17"/></g>}
              </svg>
            </button>
          </div>
        </div>
        {mobileOpen && (
          <nav id="sn-mobile-nav" aria-label={tr('nav.primary', 'Primary')} style={{ height:'calc(100vh - 62px)', overflowY:'auto', WebkitOverflowScrolling:'touch', padding:'12px clamp(16px,4vw,24px) 40px', display:'flex', flexDirection:'column', gap:6 }}>
            {navItems.map(l => {
              const menu = NAV_MENUS[l];
              const isOpen = acc === l;
              if (!menu) return (
                <a key={l} href="#" onClick={() => setMobileOpen(false)} style={{ fontFamily:T.fontHeading, fontWeight:500, fontSize:20, color:'#fff', textDecoration:'none', padding:'16px 4px', borderBottom:'1px solid rgba(255,255,255,0.07)' }}>{tr(NAV_LABEL_KEYS[l] || '', l)}</a>
              );
              return (
                <div key={l} style={{ borderBottom:'1px solid rgba(255,255,255,0.07)' }}>
                  <button onClick={() => setAcc(isOpen ? null : l)} aria-expanded={isOpen}
                    style={{ width:'100%', display:'flex', alignItems:'center', justifyContent:'space-between', background:'transparent', border:'none', cursor:'pointer', padding:'16px 4px', fontFamily:T.fontHeading, fontWeight:500, fontSize:20, color:'#fff' }}>
                    {tr(NAV_LABEL_KEYS[l] || '', l)}
                    <svg width="14" height="9" viewBox="0 0 14 9" fill="none" style={{ transform:isOpen?'rotate(180deg)':'none', transition:'transform 220ms' }}><path d="M1 1l6 6 6-6" stroke="rgba(255,255,255,0.6)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </button>
                  {isOpen && (
                    <div style={{ display:'flex', flexDirection:'column', gap:2, padding:'0 4px 14px' }}>
                      {menu.items.map(it => {
                        const anchor = (it.href || '').charAt(0) === '#';
                        return (
                        <a key={it.title} href={it.href || '#'}
                          target={anchor ? undefined : '_blank'} rel={anchor ? undefined : 'noopener noreferrer'}
                          onClick={() => setMobileOpen(false)}
                          style={{ display:'flex', flexDirection:'column', gap:3, padding:'11px 12px', borderRadius:12, textDecoration:'none', background:'rgba(255,255,255,0.03)' }}>
                          <span style={{ fontFamily:T.fontHeading, fontWeight:500, fontSize:15.5, color:'rgba(255,255,255,0.95)' }}>{it.title}</span>
                          <span style={{ fontFamily:T.fontBody, fontSize:13, lineHeight:1.35, color:'rgba(255,255,255,0.45)' }}>{it.desc}</span>
                        </a>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
            <div style={{ display:'flex', alignItems:'center', gap:20, marginTop:18, padding:'0 4px' }}>
              <a className="sn-header-icon" aria-label="GitHub" href="https://github.com/sentinel-official" target="_blank" rel="noopener noreferrer" onClick={() => setMobileOpen(false)} style={{ textDecoration:'none' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-2.17c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.69 1.25 3.34.96.1-.74.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.18-1.49 3.14-1.18 3.14-1.18.63 1.59.23 2.76.12 3.05.73.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.38-5.25 5.66.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z"/></svg>
              </a>
            </div>
            <span style={{ fontFamily:T.fontMono, fontSize:11, fontWeight:600, letterSpacing:'0.14em', textTransform:'uppercase', color:'rgba(255,255,255,0.45)', marginTop:18, padding:'0 4px' }}>{tr('nav.buyP2P', 'Buy P2P')}</span>
            <div style={{ display:'flex', alignItems:'center', gap:8, marginTop:8, padding:'0 4px', flexWrap:'wrap' }}>
              {BUY_VENUES.map(v => (
                <a key={v.name} href={v.href} target="_blank" rel="noopener noreferrer" onClick={() => setMobileOpen(false)}
                   style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'8px 13px 8px 9px', borderRadius:999, textDecoration:'none', background:'rgba(255,255,255,0.05)', border:'1px solid rgba(255,255,255,0.10)' }}>
                  {v.logo}
                  <span style={{ fontFamily:T.fontHeading, fontWeight:500, fontSize:14, color:'rgba(255,255,255,0.9)' }}>{v.name}</span>
                </a>
              ))}
            </div>
          </nav>
        )}
      </header>
    );
  }

  return (
    <header style={{ position:'fixed', top:0, left:0, right:0, zIndex:50, transition:'background 300ms, border-color 300ms', borderBottom:`1px solid ${(scrolled||open) ? 'rgba(255,255,255,0.06)' : 'transparent'}`, background: headerBg, backdropFilter: (scrolled||open) ? 'blur(16px)' : 'none' }}>
      <div style={{ maxWidth:1320, margin:'0 auto', padding:'0 clamp(16px, 2.5vw, 24px)', height:68, display:'flex', alignItems:'center', justifyContent:'center', position:'relative' }}>
        <a href="#" style={{ display:'flex', alignItems:'center', gap:10, textDecoration:'none', flexShrink:0, position:'absolute', left:'clamp(16px, 2.5vw, 24px)' }}>
          <SentinelMark size={32} color="#0156FC" />
          <span style={{ fontFamily:T.fontHeading, fontWeight:400, fontSize:18, color:'white' }}>Sentinel</span>
        </a>
        <nav aria-label={tr('nav.primary', 'Primary')}
             style={{ display:'flex', alignItems:'center', gap:0, height:68, position:'relative', margin:'0 auto' }}
             onMouseLeave={() => setOpen(null)}
             onKeyDown={(e) => { if (e.key === 'Escape') setOpen(null); }}>
          {navItems.map(l => {
            const hasMenu = !!NAV_MENUS[l];
            const isOpen = open === l;
            const label = tr(NAV_LABEL_KEYS[l] || '', l);
            if (!hasMenu) {
              return (
                <a key={l} href="#" className="sn-nav-link"
                   onMouseEnter={() => setOpen(null)} onFocus={() => setOpen(null)}>
                  {label}
                </a>
              );
            }
            return (
              <button key={l} type="button" className="sn-nav-link" data-open={isOpen ? 'true' : 'false'}
                 aria-haspopup="true" aria-expanded={isOpen} aria-controls={`sn-nav-menu-${l}`}
                 onMouseEnter={() => setOpen(l)} onFocus={() => setOpen(l)}
                 onClick={() => setOpen(o => o === l ? null : l)}
                 onKeyDown={(e) => { if (e.key === 'ArrowDown') { e.preventDefault(); setOpen(l); } }}>
                {label}
                <svg className="sn-caret" width="9" height="6" viewBox="0 0 9 6" fill="none" aria-hidden="true">
                  <path d="M0.5 1L4.5 5L8.5 1" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            );
          })}
          {open && NAV_MENUS[open] && (
            <div key={open} id={`sn-nav-menu-${open}`} style={{ position:'absolute', top:'100%', left:'50%', paddingTop:12, zIndex:60, animation:'sn-dd-in 220ms cubic-bezier(.22,.61,.36,1) both' }}>
              <DropdownPanel menu={NAV_MENUS[open]} />
            </div>
          )}
        </nav>
        <div style={{ display:'flex', alignItems:'center', gap:18, position:'absolute', right:'clamp(16px, 2.5vw, 24px)' }}>
          <a className="sn-header-icon" aria-label="GitHub" href="https://github.com/sentinel-official" target="_blank" rel="noopener noreferrer" style={{ textDecoration:'none' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-2.17c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.69 1.25 3.34.96.1-.74.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.18-1.49 3.14-1.18 3.14-1.18.63 1.59.23 2.76.12 3.05.73.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.38-5.25 5.66.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z"/></svg>
          </a>
          <LangSwitcher />
          <BuyP2P />
        </div>
      </div>
    </header>
  );
}

/* ── Hero — network points + minimal live counter ───────── */
function HeroBulletList({ compact }) {
  const bold = { color:T.fog, fontWeight:600 };
  const POINTS = [
    (<span>{tr('hero.bullet1', 'A perpetual, on-chain DHT — consensus-protected, censorship-resistant.')}</span>),
    (<span>{tr('hero.bullet2', 'Zero bootstrap nodes, zero central servers to seize.')}</span>),
    (<span>{tr('hero.bullet3', 'Bandwidth contributed by independent operators in 70+ countries.')}</span>),
    (<span>{tr('hero.bullet4', 'Any client can join with nothing more than an RPC endpoint.')}</span>),
  ];
  return (
    <ul style={{ listStyle:'none', padding:0, margin:0, display:'flex', flexDirection:'column', gap: compact ? 14 : 18 }}>
      {POINTS.map((p, i) => (
        <li key={i} style={{ display:'flex', alignItems:'flex-start', gap: compact ? 12 : 14, fontFamily:T.fontBody, fontSize: compact ? 15 : 16, lineHeight: compact ? '23px' : '25px', color:'rgba(234,234,234,0.78)' }}>
          <span aria-hidden="true" style={{ flexShrink:0, marginTop: compact ? 3 : 4, display:'inline-flex' }}>
            <SentinelMark size={compact ? 14 : 15} color="#0156FC" />
          </span>
          {p}
        </li>
      ))}
    </ul>
  );
}

function HeroNetworkStats({ hideBullets }) {
  const START = 1418375;
  const [count, setCount] = useState(START);

  useEffect(() => {
    const drift = setInterval(() => setCount(c => c + 1 + Math.floor(Math.random() * 3)), 1800);
    return () => clearInterval(drift);
  }, []);

  return (
    <div style={{ maxWidth:580, width:'100%', boxSizing:'border-box', display:'flex', flexDirection:'column', gap:'clamp(26px,3.5vw,34px)' }}>
      <style>{'@keyframes snHeroPulse{0%,100%{opacity:1;transform:scale(1)}50%{opacity:0.35;transform:scale(0.72)}}'}</style>
      {!hideBullets && <HeroBulletList />}
      <div style={{ display:'flex', alignItems:'center', gap:14, flexWrap:'wrap' }}>
        <span aria-hidden="true" style={{ width:8, height:8, borderRadius:9999, background:'#0156FC', boxShadow:'0 0 9px rgba(1,86,252,0.9)', animation:'snHeroPulse 1.6s ease-in-out infinite', flexShrink:0, display:'inline-block' }} />
        <span style={{ fontFamily:T.fontHeading, fontWeight:400, fontSize:'clamp(30px,4vw,40px)', lineHeight:1.05, letterSpacing:'-0.01em', color:T.fog, fontVariantNumeric:'tabular-nums' }}>{count.toLocaleString('en-US')}</span>
        <span style={{ fontFamily:T.fontBody, fontSize:'clamp(16px,1.8vw,19px)', lineHeight:1.4, color:'rgba(234,234,234,0.82)' }}>{tr('hero.usersCounter', 'people use dVPN apps built on Sentinel')}</span>
      </div>
    </div>
  );
}

/* ── Hero ────────────────────────────────────────────────── */
function Hero() {
  const isMobile = useIsMobile();
  // Hero video src is attached on the client AFTER hydration, never in SSR
  // markup. Reason: with src in the SSR HTML, the browser begins loading the
  // <video> immediately; then React's client:load hydration of this island
  // tears the element down and remounts it, forcing a SECOND resource load —
  // the visible "flashes twice" on first paint. Rendering the element src-less
  // on the server (and on the very first client render, so hydration matches)
  // then setting src once in an effect yields exactly one load, one paint.
  const videoRef = useRef(null);
  useEffect(() => {
    const v = videoRef.current;
    if (!v || v.getAttribute('src')) return;
    v.src = window.__resources.heroVideo;
    // autoPlay attribute alone won't fire after a late src assignment; nudge it.
    const p = v.play();
    if (p && typeof p.catch === 'function') p.catch((err) => {
      console.warn('[hero] autoplay rejected after src attach:', err && err.name);
    });
  }, []);
  return (<>
    <section style={{ position:'relative', overflow:'hidden', minHeight:'100vh', display:'flex', alignItems:'center', background:'#0b0c10' }}>
      <video ref={videoRef}
             style={ isMobile
               ? { position:'absolute', top:0, left:0, width:'100%', height:'72svh', objectFit:'cover', objectPosition:'center top', zIndex:0, backgroundColor:'#0b0c10' }
               : { position:'absolute', inset:0, width:'100%', height:'100%', objectFit:'cover', objectPosition:'center', zIndex:0, backgroundColor:'#0b0c10' } }
             autoPlay muted loop playsInline preload="auto" suppressHydrationWarning />
      <div style={ isMobile
             ? { position:'absolute', top:0, left:0, right:0, height:'72svh', zIndex:1, background:'linear-gradient(to bottom, rgba(11,12,16,0.38) 0%, rgba(11,12,16,0.08) 30%, rgba(11,12,16,0.55) 78%, rgba(11,12,16,1) 100%)', pointerEvents:'none' }
             : { position:'absolute', inset:0, zIndex:1, background:'linear-gradient(to right, rgba(0,0,0,0.38) 0%, rgba(0,0,0,0.12) 50%, rgba(0,0,0,0) 100%)', pointerEvents:'none' } } />
      <div style={{ ...atomStyles.container, position:'relative', zIndex:2, paddingTop: isMobile ? 0 : 'clamp(104px,18vw,140px)', paddingBottom: isMobile ? 56 : 'clamp(56px,10vw,100px)' }}>
        <div data-mark="sn-hero-air" style={ isMobile
            ? { display:'flex', flexDirection:'column', justifyContent:'flex-end', gap:18, maxWidth:640, minHeight:'100svh', boxSizing:'border-box', paddingTop:'2svh', paddingBottom:36 }
            : { display:'flex', flexDirection:'column', gap:'clamp(28px,4.5vw,42px)', maxWidth:640 } }>
          <h1 style={{ fontFamily:T.fontHeading, fontWeight:400, fontSize:'clamp(38px,7.5vw,64px)', lineHeight:1.08, letterSpacing:'-0.01em', color:T.fog, margin:0 }}>
            {tr('hero.title', 'Build your own decentralized VPN.')}
          </h1>
          <p style={{ fontFamily:T.fontBody, fontSize:'clamp(16px,2vw,20px)', lineHeight:1.5, color:T.onDark, margin:0, maxWidth:560 }}>
            {tr('hero.subtitle', 'The most resilient peer-to-peer networking protocol designed to be censorship-resistant for any geography.')}{' '}
            <a href="#network-compare" className="sn-readmore" style={{ position:'relative', display:'inline-flex', alignItems:'center', gap:7, verticalAlign:'baseline', fontFamily:T.fontHeading, fontWeight:600, fontSize:'0.78em', letterSpacing:'0.02em', color:'#9cc0ff', textDecoration:'none', whiteSpace:'nowrap', paddingBottom:3, marginLeft:12 }}>
              {tr('hero.readMore', 'Read more')}
              <span className="sn-readmore-arrow" aria-hidden="true" style={{ display:'inline-block', fontSize:'0.92em', opacity:0.85, lineHeight:1 }}>↓</span>
            </a>
          </p>
          <HeroNetworkStats hideBullets={isMobile} />
          <div style={{ display:'flex', alignItems:'stretch', flexWrap:'wrap', gap:'clamp(10px,1.4vw,14px)', marginTop:14, width:'100%', maxWidth:640 }}>
            <style>{`
              /* sn-hero-cta-v3 — three equal pills, always one line */
              .sn-readmore { transition:color 180ms ease; }
              .sn-readmore::after { content:""; position:absolute; left:0; bottom:0; width:30px; height:1px; background:rgba(156,192,255,0.55); transition:width 260ms cubic-bezier(.22,.61,.36,1), background 260ms ease; }
              .sn-readmore:hover { color:#fff; }
              .sn-readmore:hover::after { width:100%; background:#9cc0ff; }
              .sn-readmore .sn-readmore-arrow { transition:transform 260ms cubic-bezier(.22,.61,.36,1); }
              .sn-readmore:hover .sn-readmore-arrow { transform:translateY(2px); }
              .sn-hero-cta { display:inline-flex; align-items:center; justify-content:center; gap:8px; flex:1 1 0; min-width:0; height:clamp(44px,6vw,52px); padding:0 clamp(8px,1.4vw,18px); border-radius:14px; font-family:"Funnel Display","Noto Sans",system-ui,sans-serif; font-weight:500; font-size:clamp(12.5px,1.5vw,15px); letter-spacing:0.01em; text-decoration:none; white-space:nowrap; box-sizing:border-box; transition:transform 200ms cubic-bezier(.22,.61,.36,1), box-shadow 200ms cubic-bezier(.22,.61,.36,1), background 200ms cubic-bezier(.22,.61,.36,1), border-color 200ms cubic-bezier(.22,.61,.36,1), color 200ms cubic-bezier(.22,.61,.36,1); }
              .sn-hero-cta .sn-cta-arrow { display:inline-block; opacity:0.65; transition:transform 200ms cubic-bezier(.22,.61,.36,1), opacity 200ms cubic-bezier(.22,.61,.36,1); }
              .sn-hero-cta:hover .sn-cta-arrow { transform:translateX(3px); opacity:1; }
              .sn-hero-cta:active { transform:translateY(0) scale(0.99); }
              .sn-cta-blue { background:linear-gradient(180deg, #2670FF 0%, #0156FC 100%); color:#fff; border:1px solid rgba(255,255,255,0.22); box-shadow:0 10px 26px -12px rgba(1,86,252,0.75), inset 0 1px 0 rgba(255,255,255,0.25); }
              .sn-cta-blue:hover { background:linear-gradient(180deg, #3b7dff 0%, #1261ff 100%); transform:translateY(-2px); box-shadow:0 14px 30px -12px rgba(1,86,252,0.8), inset 0 1px 0 rgba(255,255,255,0.3); }
              .sn-cta-glass { background:rgba(255,255,255,0.05); color:rgba(234,234,234,0.92); border:1px solid rgba(255,255,255,0.14); backdrop-filter:blur(12px); -webkit-backdrop-filter:blur(12px); }
              .sn-cta-glass:hover { transform:translateY(-2px); background:rgba(255,255,255,0.08); border-color:rgba(38,112,255,0.55); color:#fff; }
              @media (max-width: 560px) { .sn-hero-cta { flex:1 1 100%; font-size:13.5px; gap:6px; padding:0 12px; border-radius:12px; } }
            `}</style>
            <a href="#use-dvpn" className="sn-hero-cta sn-cta-blue">{tr('hero.ctaUse', 'Use a dVPN App')} <span className="sn-cta-arrow" aria-hidden="true">→</span></a>
            <a href="#build-dvpn" className="sn-hero-cta sn-cta-glass">{tr('hero.ctaBuild', 'Build a dVPN App')} <span className="sn-cta-arrow" aria-hidden="true">→</span></a>
            <a href="#host-dvpn" className="sn-hero-cta sn-cta-glass">{tr('hero.ctaHost', 'Host a dVPN Node')} <span className="sn-cta-arrow" aria-hidden="true">→</span></a>
          </div>
        </div>
      </div>
    </section>
    {/* mobile: bullets live below the hero so the full-bleed video can run
        down to the top of the first bullet ("A perpetual, on-chain DHT") */}
    {isMobile && (
      <div style={{ ...atomStyles.container, background:'#0b0c10', paddingTop:8, paddingBottom:56 }}>
        <div style={{ maxWidth:560 }}>
          <HeroBulletList compact />
        </div>
      </div>
    )}
  </>);
}

/* ── Supporters strip ────────────────────────────────────── */
function SupportersStrip() {
  const logos = [
    { src:window.__resources.logoGalaxy,  alt:'Galaxy' },
    { src:window.__resources.logoTrgc,    alt:'TRGC'   },
    { src:window.__resources.logoCosmos,  alt:'Cosmos' },
    { src:window.__resources.logoFetch,   alt:'Fetch'  },
  ];
  const repeated = [...logos, ...logos, ...logos, ...logos];
  return (
    <section style={{ background:'radial-gradient(900px 360px at 50% -30%, rgba(1,86,252,0.10), transparent 62%), #0b0c10', padding:'64px 0 0' }}>
      <div style={{ position:'relative', overflow:'hidden', maskImage:'linear-gradient(to right,transparent 0,black 100px,black calc(100% - 100px),transparent 100%)', WebkitMaskImage:'linear-gradient(to right,transparent 0,black 100px,black calc(100% - 100px),transparent 100%)' }}>
        <div style={{ display:'flex', gap:100, alignItems:'center', width:'max-content', animation:'sn-marquee 28s linear infinite' }}>
          {repeated.map((l, i) => (
            <img key={i} src={l.src} alt={l.alt}
                 style={{ height:28, objectFit:'contain', opacity:0.55, filter:'grayscale(1) brightness(2)', flexShrink:0 }} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Stats strip ─────────────────────────────────────────── */
/* Shared chrome for the stats strip + resilience cards. Inline styles
   can't express :hover / ::before, so these live in a style tag that
   StatsStrip renders once (it always mounts before ResilienceCards). */
const SN_NETWORK_CSS = `
  .sn-stats-frame { position:relative; }
  .sn-stats-frame::before { content:''; position:absolute; inset:0; border-radius:inherit; box-shadow:inset 0 1px 0 rgba(255,255,255,0.07); pointer-events:none; }
  .sn-rcard { position:relative; overflow:hidden; transition:transform .35s cubic-bezier(.2,.7,.2,1), border-color .35s ease, box-shadow .35s ease; }
  .sn-rcard::before { content:''; position:absolute; inset:0; border-radius:inherit; background:radial-gradient(460px 220px at 16% -12%, rgba(1,86,252,0.18), transparent 70%); opacity:0; transition:opacity .4s ease; pointer-events:none; }
  .sn-rcard:hover { transform:translateY(-4px); border-color:rgba(38,112,255,0.38) !important; box-shadow:0 24px 56px -24px rgba(1,86,252,0.40), inset 0 1px 0 rgba(255,255,255,0.08); }
  .sn-rcard:hover::before { opacity:1; }
  .sn-rcard-ghost { transition:color .4s ease; }
  .sn-rcard:hover .sn-rcard-ghost { color:rgba(38,112,255,0.13) !important; }
  @media (hover:none) { .sn-rcard:hover { transform:none; box-shadow:inset 0 1px 0 rgba(255,255,255,0.05); } }
  .sn-layer-act { transition:border-color 200ms cubic-bezier(.22,.61,.36,1), background 200ms cubic-bezier(.22,.61,.36,1), transform 200ms cubic-bezier(.22,.61,.36,1); }
  .sn-layer-act:hover { border-color:rgba(94,148,255,0.65); background:linear-gradient(180deg, rgba(76,140,255,0.26), rgba(38,112,255,0.12)); transform:translateY(-1px); box-shadow:inset 0 1px 0 rgba(255,255,255,0.12), 0 10px 24px -12px rgba(1,86,252,0.5); }
  .sn-layer-act .sn-layer-act-arrow { display:inline-flex; transition:transform 200ms cubic-bezier(.22,.61,.36,1); }
  .sn-layer-act:hover .sn-layer-act-arrow { transform:translateX(3px); }
  .sn-tile-grid { display:grid; grid-template-columns:repeat(2, minmax(0,1fr)); gap:14px; }
  @media (max-width:1279px) { .sn-tile-grid { grid-template-columns:1fr; } }
  .sn-stats-cta { transition:border-color 200ms cubic-bezier(.22,.61,.36,1), background 200ms cubic-bezier(.22,.61,.36,1), transform 200ms cubic-bezier(.22,.61,.36,1); }
  .sn-stats-cta:hover { border-color:rgba(94,148,255,0.55); background:linear-gradient(180deg, rgba(255,255,255,0.055), rgba(255,255,255,0.018)); transform:translateY(-2px); }
  .sn-stats-cta .sn-stats-cta-label { transition:color 200ms cubic-bezier(.22,.61,.36,1); }
  .sn-stats-cta:hover .sn-stats-cta-label { color:#fff; }
  .sn-stats-cta .sn-stats-cta-arrow { display:inline-block; transition:transform 200ms cubic-bezier(.22,.61,.36,1); }
  .sn-stats-cta:hover .sn-stats-cta-arrow { transform:translate(2px,-2px); }
`;

/* Count-up on first scroll into view. Falls back to static text when
   IntersectionObserver is missing or the user prefers reduced motion. */
function StatValue({ value }) {
  const ref = useRef(null);
  const [txt, setTxt] = useState(value);
  useEffect(() => {
    const m = value.match(/^(\d+(?:\.\d+)?)(.*)$/);
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!m || reduce || !('IntersectionObserver' in window) || !ref.current) return;
    const target = parseFloat(m[1]);
    const suffix = m[2];
    const decimals = (m[1].split('.')[1] || '').length;
    let raf = null;
    const io = new IntersectionObserver(entries => {
      if (!entries[0].isIntersecting) return;
      io.disconnect();
      const t0 = performance.now(), dur = 1400;
      const tick = now => {
        const p = Math.min(1, (now - t0) / dur);
        const eased = 1 - Math.pow(1 - p, 3);
        setTxt((target * eased).toFixed(decimals) + suffix);
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    }, { threshold: 0.4 });
    io.observe(ref.current);
    return () => { io.disconnect(); if (raf) cancelAnimationFrame(raf); };
  }, [value]);
  return <span ref={ref}>{txt}</span>;
}

function StatsStrip() {
  const isMobile = useIsMobile();
  const stats = [
    { v:'8+',    l:tr('stats.dapps', 'dApps built on Sentinel') },
    { v:'1.4M+', l:tr('stats.totalUsers', 'Total Users')        },
    { v:'1500+', l:tr('stats.providers', 'P2P Bandwidth Providers') },
    { v:'6+ PB', l:tr('stats.data', 'Data Consumed')            },
  ];
  const hairline = 'rgba(255,255,255,0.07)';
  const dividers = i => isMobile
    ? [i % 2 === 1 ? `-1px 0 0 ${hairline}` : null, i >= 2 ? `0 -1px 0 ${hairline}` : null].filter(Boolean).join(', ') || 'none'
    : (i > 0 ? `-1px 0 0 ${hairline}` : 'none');
  return (
    <section style={{ background:'transparent', paddingTop:'clamp(48px,6vw,72px)', paddingBottom:'clamp(40px,5vw,64px)' }}>
      <style>{SN_NETWORK_CSS}</style>
      <div style={{ ...atomStyles.container }}>
        <div className="sn-stats-frame" style={{ display:'grid', gridTemplateColumns:isMobile?'repeat(2,minmax(0,1fr))':'repeat(4,minmax(0,1fr))', borderRadius:24, border:`1px solid ${hairline}`, background:'linear-gradient(180deg, rgba(255,255,255,0.030), rgba(255,255,255,0.008))', overflow:'hidden' }}>
          {stats.map((s, i) => (
            <div key={s.l} style={{ padding:isMobile?'26px 16px':'36px 28px 32px', boxShadow:dividers(i), display:'flex', flexDirection:'column', alignItems:'center', textAlign:'center' }}>
              <div style={{ fontFamily:T.fontHeading, fontWeight:700, fontSize:'clamp(34px,4.2vw,52px)', lineHeight:1.05, letterSpacing:'-0.01em', fontVariantNumeric:'tabular-nums', background:'linear-gradient(180deg, #ffffff 0%, rgba(234,234,234,0.72) 100%)', WebkitBackgroundClip:'text', backgroundClip:'text', WebkitTextFillColor:'transparent' }}>
                <StatValue value={s.v} />
              </div>
              <span aria-hidden="true" style={{ width:22, height:2, borderRadius:2, background:'linear-gradient(90deg, #0156fc, #2670ff)', margin:'14px 0 10px' }} />
              <div style={{ fontFamily:T.fontHeading, fontWeight:500, fontSize:'clamp(13.5px,1.3vw,15px)', lineHeight:1.45, color:T.onDark60, maxWidth:210 }}>{s.l}</div>
            </div>
          ))}
        </div>
        <div data-mark="sn-stats-cta" style={{ display:'flex', justifyContent:'center', marginTop:'clamp(18px,2.4vw,26px)' }}>
          <a href={L.stats} target="_blank" rel="noopener noreferrer" className="sn-stats-cta"
             style={{ display:'inline-flex', alignItems:'center', gap:12, padding:'12px 18px', textDecoration:'none', background:'linear-gradient(180deg, rgba(255,255,255,0.040), rgba(255,255,255,0.012))', border:`1px solid ${hairline}`, borderRadius:14 }}>
            <span style={{ width:38, height:38, borderRadius:11, flexShrink:0, background:'rgba(1,86,252,0.12)', border:'1px solid rgba(94,148,255,0.30)', display:'inline-flex', alignItems:'center', justifyContent:'center' }}>
              <SentinelMark size={20} color="#2670FF" />
            </span>
            <span className="sn-stats-cta-label" style={{ fontFamily:T.fontHeading, fontWeight:600, fontSize:15, lineHeight:1, color:T.fog, whiteSpace:'nowrap' }}>{tr('stats.viewNetworkStats', 'View Network Stats')}</span>
            <span className="sn-stats-cta-arrow" aria-hidden="true" style={{ fontSize:15, fontWeight:600, lineHeight:1, color:'#2670FF', flexShrink:0 }}>↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}

/* ── Builder stack — everything a dVPN app needs, handled ── */
/* Tiny geometric country flags — emoji flags render as letter pairs on
   Windows, so these are hand-drawn 22×16 SVGs clipped by the chip ring. */
const SN_FLAGS = {
  US: (<svg width="22" height="16" viewBox="0 0 22 16"><rect width="22" height="16" fill="#ffffff"/><g fill="#B22234"><rect y="0" width="22" height="1.25"/><rect y="2.46" width="22" height="1.25"/><rect y="4.92" width="22" height="1.25"/><rect y="7.38" width="22" height="1.25"/><rect y="9.85" width="22" height="1.25"/><rect y="12.31" width="22" height="1.25"/><rect y="14.77" width="22" height="1.23"/></g><rect width="9.6" height="8.6" fill="#3C3B6E"/><g fill="#ffffff"><circle cx="1.9" cy="1.7" r="0.55"/><circle cx="4.6" cy="1.7" r="0.55"/><circle cx="7.3" cy="1.7" r="0.55"/><circle cx="3.2" cy="3.4" r="0.55"/><circle cx="5.9" cy="3.4" r="0.55"/><circle cx="1.9" cy="5.1" r="0.55"/><circle cx="4.6" cy="5.1" r="0.55"/><circle cx="7.3" cy="5.1" r="0.55"/><circle cx="3.2" cy="6.8" r="0.55"/><circle cx="5.9" cy="6.8" r="0.55"/></g></svg>),
  GB: (<svg width="22" height="16" viewBox="0 0 22 16"><rect width="22" height="16" fill="#012169"/><path d="M0 0l22 16M22 0L0 16" stroke="#ffffff" strokeWidth="3.2"/><path d="M0 0l22 16M22 0L0 16" stroke="#C8102E" strokeWidth="1.3"/><path d="M11 0v16M0 8h22" stroke="#ffffff" strokeWidth="5"/><path d="M11 0v16M0 8h22" stroke="#C8102E" strokeWidth="2.8"/></svg>),
  DE: (<svg width="22" height="16" viewBox="0 0 22 16"><rect width="22" height="5.33" fill="#141414"/><rect y="5.33" width="22" height="5.33" fill="#DD0000"/><rect y="10.66" width="22" height="5.34" fill="#FFCE00"/></svg>),
  NL: (<svg width="22" height="16" viewBox="0 0 22 16"><rect width="22" height="5.33" fill="#AE1C28"/><rect y="5.33" width="22" height="5.33" fill="#ffffff"/><rect y="10.66" width="22" height="5.34" fill="#21468B"/></svg>),
  FR: (<svg width="22" height="16" viewBox="0 0 22 16"><rect width="7.33" height="16" fill="#002395"/><rect x="7.33" width="7.34" height="16" fill="#ffffff"/><rect x="14.67" width="7.33" height="16" fill="#ED2939"/></svg>),
  JP: (<svg width="22" height="16" viewBox="0 0 22 16"><rect width="22" height="16" fill="#ffffff"/><circle cx="11" cy="8" r="4.6" fill="#BC002D"/></svg>),
  SG: (<svg width="22" height="16" viewBox="0 0 22 16"><rect width="22" height="8" fill="#EF3340"/><rect y="8" width="22" height="8" fill="#ffffff"/><circle cx="4.8" cy="4" r="2.7" fill="#ffffff"/><circle cx="5.9" cy="3.7" r="2.4" fill="#EF3340"/><g fill="#ffffff"><circle cx="8.6" cy="2.4" r="0.5"/><circle cx="7.2" cy="3.4" r="0.5"/><circle cx="10" cy="3.4" r="0.5"/><circle cx="7.8" cy="5" r="0.5"/><circle cx="9.4" cy="5" r="0.5"/></g></svg>),
  CA: (<svg width="22" height="16" viewBox="0 0 22 16"><rect width="22" height="16" fill="#ffffff"/><rect width="5.5" height="16" fill="#D80621"/><rect x="16.5" width="5.5" height="16" fill="#D80621"/><path fill="#D80621" d="M11 3.4l.8 1.6 1.4-.6-.4 1.7 1.7.2-1.2 1.3 1.5.9-1.8.5.3 1.7-1.6-.8-.7 1.7-.7-1.7-1.6.8.3-1.7-1.8-.5 1.5-.9-1.2-1.3 1.7-.2-.4-1.7 1.4.6z"/></svg>),
  BR: (<svg width="22" height="16" viewBox="0 0 22 16"><rect width="22" height="16" fill="#009B3A"/><path d="M11 1.6 20.2 8 11 14.4 1.8 8z" fill="#FEDF00"/><circle cx="11" cy="8" r="2.9" fill="#002776"/></svg>),
  IN: (<svg width="22" height="16" viewBox="0 0 22 16"><rect width="22" height="5.33" fill="#FF9933"/><rect y="5.33" width="22" height="5.33" fill="#ffffff"/><rect y="10.66" width="22" height="5.34" fill="#138808"/><circle cx="11" cy="8" r="1.8" fill="none" stroke="#000080" strokeWidth="0.6"/><circle cx="11" cy="8" r="0.4" fill="#000080"/></svg>),
  SE: (<svg width="22" height="16" viewBox="0 0 22 16"><rect width="22" height="16" fill="#006AA7"/><rect x="6.2" width="2.8" height="16" fill="#FECC00"/><rect y="6.6" width="22" height="2.8" fill="#FECC00"/></svg>),
  CH: (<svg width="22" height="16" viewBox="0 0 22 16"><rect width="22" height="16" fill="#DA291C"/><rect x="9.6" y="3.2" width="2.8" height="9.6" fill="#ffffff"/><rect x="6.2" y="6.6" width="9.6" height="2.8" fill="#ffffff"/></svg>),
  PL: (<svg width="22" height="16" viewBox="0 0 22 16"><rect width="22" height="8" fill="#ffffff"/><rect y="8" width="22" height="8" fill="#DC143C"/></svg>),
  IT: (<svg width="22" height="16" viewBox="0 0 22 16"><rect width="7.33" height="16" fill="#009246"/><rect x="7.33" width="7.34" height="16" fill="#ffffff"/><rect x="14.67" width="7.33" height="16" fill="#CE2B37"/></svg>),
  ES: (<svg width="22" height="16" viewBox="0 0 22 16"><rect width="22" height="4" fill="#AA151B"/><rect y="4" width="22" height="8" fill="#F1BF00"/><rect y="12" width="22" height="4" fill="#AA151B"/></svg>),
  TR: (<svg width="22" height="16" viewBox="0 0 22 16"><rect width="22" height="16" fill="#E30A17"/><circle cx="7.8" cy="8" r="3.6" fill="#ffffff"/><circle cx="8.8" cy="8" r="3" fill="#E30A17"/><circle cx="12.6" cy="8" r="1.1" fill="#ffffff"/></svg>),
};

function FlagChip({ code, name }) {
  return (
    <span title={name} style={{ display:'inline-flex', alignItems:'center', gap:7 }}>
      <span style={{ display:'inline-flex', borderRadius:4, overflow:'hidden', boxShadow:'0 0 0 1px rgba(255,255,255,0.16)', lineHeight:0 }}>{SN_FLAGS[code]}</span>
      <span style={{ fontFamily:T.fontHeading, fontWeight:500, fontSize:12.5, color:'rgba(234,234,234,0.9)', whiteSpace:'nowrap' }}>{name}</span>
    </span>
  );
}

/* Stylized protocol marks — coil for WireGuard, the Project-V chevron for V2Ray */
function WireGuardMark({ size = 30 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden="true">
      <circle cx="16" cy="16" r="15" fill="#88171b"/>
      <path d="M16 7.5c-4.7 0-8.5 3.8-8.5 8.5s3.8 8.5 8.5 8.5c3.4 0 6.4-2 7.7-4.9" fill="none" stroke="#ffffff" strokeWidth="2.1" strokeLinecap="round"/>
      <path d="M16 12c-2.2 0-4 1.8-4 4s1.8 4 4 4c1.6 0 3-1 3.6-2.3" fill="none" stroke="#ffffff" strokeWidth="2.1" strokeLinecap="round"/>
      <circle cx="16" cy="16" r="1.5" fill="#ffffff"/>
    </svg>
  );
}
function V2RayMark({ size = 30 }) {
  return (
    <img src="data:image/png;base64,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" width={size} height={size} alt="" aria-hidden="true" style={{ borderRadius:7, display:'block' }} />
  );
}

function BuilderStackSection() {
  const isMobile = useIsMobile();
  const logoTile = { width:36, height:36, borderRadius:10, flexShrink:0, display:'inline-flex', alignItems:'center', justifyContent:'center', background:'rgba(255,255,255,0.05)', border:'1px solid rgba(255,255,255,0.08)' };
  const rowChip = { display:'flex', alignItems:'center', justifyContent:'center', gap:12, background:'rgba(255,255,255,0.035)', border:'1px solid rgba(255,255,255,0.09)', borderRadius:14, padding:'14px 15px' };
  const chipName = { fontFamily:T.fontHeading, fontWeight:600, fontSize:14, lineHeight:1.25, color:T.fog };
  const chipSub = { fontFamily:T.fontBody, fontSize:12, lineHeight:1.35, color:'rgba(214,222,240,0.62)' };
  const actionStyle = { display:'flex', alignItems:'center', justifyContent:'center', gap:9, alignSelf:'stretch', width:'100%', height:46, padding:'0 21px', borderRadius:999, border:'1px solid rgba(125,160,255,0.35)', background:'linear-gradient(180deg, rgba(56,124,255,0.18), rgba(38,112,255,0.07))', boxShadow:'inset 0 1px 0 rgba(255,255,255,0.10)', fontFamily:T.fontHeading, fontWeight:600, fontSize:14, letterSpacing:'0.01em', color:'#b9ceff', textDecoration:'none', whiteSpace:'nowrap', boxSizing:'border-box' };
  const actionRow = (label, href) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="sn-layer-act" style={actionStyle}>
      {label}
      <span className="sn-layer-act-arrow" aria-hidden="true">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
      </span>
    </a>
  );
  const extraLabel = { fontFamily:T.fontMono, fontSize:11, fontWeight:600, letterSpacing:'0.14em', textTransform:'uppercase', color:'rgba(214,222,240,0.5)' };
  const iconBadge = inner => (
    <span style={{ width:48, height:48, borderRadius:13, flexShrink:0, display:'inline-flex', alignItems:'center', justifyContent:'center', background:'rgba(38,112,255,0.10)', border:'1px solid rgba(38,112,255,0.25)' }}>{inner}</span>
  );
  const stepChip = { width:38, height:38, borderRadius:12, flexShrink:0, display:'inline-flex', alignItems:'center', justifyContent:'center', background:'rgba(38,112,255,0.10)', border:'1px solid rgba(38,112,255,0.25)' };
  const ic = { fill:'none', stroke:'#9dbcff', strokeWidth:1.7, strokeLinecap:'round', strokeLinejoin:'round' };
  const steps = [
    {
      n:'01', title:tr('builderStack.step1Title', 'Direct Node Probe'),
      icon:(<svg width="18" height="18" viewBox="0 0 24 24" {...ic} aria-hidden="true"><circle cx="12" cy="12" r="1.6" fill="#9dbcff" stroke="none"/><path d="M8.5 15.5a5 5 0 0 1 0-7"/><path d="M15.5 8.5a5 5 0 0 1 0 7"/><path d="M5.6 18.4a9 9 0 0 1 0-12.8"/><path d="M18.4 5.6a9 9 0 0 1 0 12.8"/></svg>),
      body:tr('builderStack.step1Body', 'HTTPS request directly to the node’s remote address. Returns live status: protocol type, peer count, location, bandwidth. Peer-to-peer, no relay.'),
    },
    {
      n:'02', title:tr('builderStack.step2Title', 'On-Chain Session'),
      icon:(<svg width="18" height="18" viewBox="0 0 24 24" {...ic} aria-hidden="true"><path d="M12 2.5 21 7.5v9l-9 5-9-5v-9z"/><path d="M12 12.2 21 7.5M12 12.2 3 7.5M12 12.2V21.5"/></svg>),
      body:tr('builderStack.step2Body', 'Signed transaction creates an immutable session record on the blockchain. Session ID, node address, account address — all consensus-validated.'),
    },
    {
      n:'03', title:tr('builderStack.step3Title', 'Verified Handshake'),
      icon:(<svg width="18" height="18" viewBox="0 0 24 24" {...ic} aria-hidden="true"><path d="M12 2.8 20 6v6c0 5-3.4 8.3-8 9.2C7.4 20.3 4 17 4 12V6z"/><path d="m8.8 12 2.2 2.2 4.2-4.4"/></svg>),
      body:tr('builderStack.step3Body', 'Node receives request, queries the chain to verify the session matches. Only then generates VPN credentials. Authorization is on-chain.'),
    },
    {
      n:'04', title:tr('builderStack.step4Title', 'Encrypted Tunnel'),
      icon:(<svg width="18" height="18" viewBox="0 0 24 24" {...ic} aria-hidden="true"><rect x="4.5" y="10.5" width="15" height="10" rx="2.5"/><path d="M8 10.5V7.8a4 4 0 0 1 8 0v2.7"/><circle cx="12" cy="15.5" r="1.4" fill="#9dbcff" stroke="none"/></svg>),
      body:tr('builderStack.step4Body', 'WireGuard (Curve25519) or V2Ray (VLess/VMess) tunnel established directly between client and node. End-to-end encrypted. Zero intermediaries.'),
    },
  ];
  const layers = [ // sn-resil-1line — bullets condensed to one-liners
    {
      title:tr('resilience.blockchainTitle', 'The blockchain IS the backend'),
      icon:(<svg width="22" height="22" viewBox="0 0 24 24" {...ic} aria-hidden="true"><rect x="6" y="6" width="12" height="12" rx="2"/><rect x="10" y="10" width="4" height="4"/><path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3"/></svg>),
      points:[
        tr('resilience.blockchainPoint1', 'Every node, session, and account lives on-chain.'),
        tr('resilience.blockchainPoint2', 'Discovery is a chain query — nothing to take down.'),
        tr('resilience.blockchainPoint3', 'Finality, Sybil resistance, and governance built in.'),
      ],
      extra:(
        <div style={{ display:'flex', flexDirection:'column', gap:18 }}>
          {actionRow(tr('resilience.blockchainAction', 'View Real-Time Transactions'), 'https://p2pscan.com/transactions')}
        </div>
      ),
    },
    {
      title:tr('resilience.validatorsTitle', 'Validators provide the compute'),
      icon:(<svg width="22" height="22" viewBox="0 0 24 24" {...ic} aria-hidden="true"><path d="M12 2 20.5 7v10L12 22 3.5 17V7Z"/><path d="M12 22V12M12 12 3.5 7M12 12l8.5-5"/></svg>),
      points:[
        tr('resilience.validatorsPoint1', 'Sessions, plans, and payouts verified by Sentinel’s validators.'),
        tr('resilience.validatorsPoint2', 'That consensus compute is your backend: no servers to run.'),
        tr('resilience.validatorsPoint3', 'Every state change is final and tamper-proof.'),
      ],
      extra:(
        <div style={{ display:'flex', flexDirection:'column', gap:18 }}>
          {actionRow(tr('resilience.validatorsAction', 'View Validators'), 'https://p2pscan.com/validators')}
        </div>
      ),
    },
    {
      title:tr('resilience.bandwidthTitle', 'Pay for bandwidth directly in P2P'),
      icon:(<SentinelMark size={24} color="#9dbcff" />),
      points:[
        tr('resilience.bandwidthPoint1', 'Wallets pay node operators directly on-chain — no invoices.'),
        tr('resilience.bandwidthPoint2', 'Pick nodes by country, price, or protocol.'),
        tr('resilience.bandwidthPoint3', 'Pay in P2P for bandwidth, Sentinel’s native token.'),
      ],
      extra:(
        <div style={{ display:'flex', flexDirection:'column', gap:18 }}>
          <span style={{ ...actionStyle, cursor:'default' }}>
            {tr('nav.buyP2P', 'Buy P2P')}
            <span aria-hidden="true" style={{ display:'inline-flex' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M6 13l6 6 6-6"/></svg>
            </span>
          </span>
          <div className="sn-tile-grid">
            {BUY_VENUES.map(v => (
              <a key={v.name} href={v.href} target="_blank" rel="noopener noreferrer" className="sn-buy-row" style={{ ...rowChip, textDecoration:'none' }}>
                <span style={logoTile}>{v.logo}</span>
                <span style={{ display:'flex', flexDirection:'column', gap:3, minWidth:0 }}>
                  <span style={chipName}>{v.name}</span>
                  <span style={chipSub}>{v.tagKey ? tr(v.tagKey, v.tag) : v.tag}</span>
                </span>
              </a>
            ))}
          </div>
        </div>
      ),
    },
    {
      title:tr('resilience.serversTitle', '1500+ servers, zero server ops'),
      icon:(<svg width="22" height="22" viewBox="0 0 24 24" {...ic} aria-hidden="true"><circle cx="12" cy="18" r="1.6"/><path d="M8.5 14.5a5 5 0 0 1 7 0M5.6 11.6a9 9 0 0 1 12.8 0M2.8 8.7a13 13 0 0 1 18.4 0"/></svg>),
      points:[
        tr('resilience.serversPoint1', 'Bandwidth from 1500+ servers run by independent operators.'),
        tr('resilience.serversPoint2', '90+ countries across six continents.'),
        tr('resilience.serversPoint3', 'Racking, patching, and scaling — abstracted away entirely.'),
      ],
      extra:(
        <div style={{ display:'flex', flexDirection:'column', gap:18 }}>
          {actionRow(tr('resilience.serversAction', 'View Global Node Map'), 'https://map.suchnode.net/')}
          <div className="sn-tile-grid">
            <span style={{ ...rowChip }}>
              <span style={logoTile}><WireGuardMark size={22} /></span>
              <span style={{ display:'flex', flexDirection:'column', gap:3, minWidth:0 }}>
                <span style={chipName}>WireGuard</span>
                <span style={{ ...chipSub, whiteSpace:'nowrap' }}>{tr('resilience.wireguardSub', 'Kernel-fast encrypted tunnels')}</span>
              </span>
            </span>
            <span style={{ ...rowChip }}>
              <span style={logoTile}><V2RayMark size={22} /></span>
              <span style={{ display:'flex', flexDirection:'column', gap:3, minWidth:0 }}>
                <span style={chipName}>V2Ray</span>
                <span style={{ ...chipSub, whiteSpace:'nowrap' }}>{tr('resilience.v2raySub', 'VMess / VLESS · anti-censorship')}</span>
              </span>
            </span>
          </div>
          <div style={ isMobile
            ? { display:'flex', flexWrap:'wrap', gap:'12px 14px', alignItems:'center', justifyContent:'center' }
            : { display:'flex', flexWrap:'wrap', gap:'12px 18px', alignItems:'center' } }>
            <FlagChip code="US" name="United States" /><FlagChip code="JP" name="Japan" /><FlagChip code="DE" name="Germany" /><FlagChip code="BR" name="Brazil" /><FlagChip code="GB" name="United Kingdom" /><FlagChip code="SE" name="Sweden" /><FlagChip code="NL" name="Netherlands" /><FlagChip code="SG" name="Singapore" /><FlagChip code="CH" name="Switzerland" />
            <span title={tr('resilience.moreCountriesTitle', '90+ countries across six continents')} style={{ display:'inline-flex', alignItems:'center', background:'rgba(94,148,255,0.08)', border:'1px solid rgba(125,160,255,0.32)', borderRadius:999, padding:'4px 8px', fontFamily:T.fontHeading, fontWeight:600, fontSize:12.5, color:'#9dbcff', whiteSpace:'nowrap' }}>{tr('resilience.moreCountries', '+ 80 more')}</span>
          </div>
        </div>
      ),
    },
  ];
  return (
    <section id="builder-stack" style={{ background:'transparent', paddingTop:'clamp(8px,2vw,24px)', paddingBottom:'clamp(40px,5vw,64px)', scrollMarginTop:90 }}>
      <div style={{ ...atomStyles.container }}>
        <div style={{ ...atomStyles.sectionHead, alignItems:'center', textAlign:'center', gap:18, margin:'0 auto clamp(34px,4.5vw,54px)' }}>
          <h2 style={{ ...atomStyles.h1Dark, maxWidth:820 }}>{tr('sdk.heading', 'Everything a dVPN builder needs. Handled.')}</h2>
          <p style={{ ...atomStyles.leadDark, maxWidth:680, margin:0 }}>
            {tr('builderStack.sdkBody', 'Compute, bandwidth, payments, security — the Sentinel protocol runs the entire white-label stack underneath your brand. You build the app. The network does the rest.')}
          </p>
        </div>
        {/* connection pipeline */}
        <div style={{ display:'grid', gridTemplateColumns:isMobile?'1fr':'repeat(4, minmax(0,1fr))', gap:isMobile?12:14 }}>
          {steps.map(p => (
            <div key={p.title} style={{ position:'relative', overflow:'hidden', display:'flex', flexDirection:'column', gap:10, background:'rgba(255,255,255,0.028)', border:'1px solid rgba(255,255,255,0.08)', borderRadius:16, padding:'20px 18px' }}>
              <div aria-hidden="true" style={{ position:'absolute', top:0, left:22, right:22, height:1, background:'linear-gradient(90deg, transparent, rgba(94,148,255,0.55), transparent)' }} />
              <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between' }}>
                <span style={stepChip}>{p.icon}</span>
                <span style={{ fontFamily:T.fontMono, fontSize:12, letterSpacing:'0.1em', color:'rgba(94,148,255,0.9)' }}>{p.n}<span style={{ color:'rgba(234,234,234,0.28)' }}> / 04</span></span>
              </div>
              <h3 style={{ fontFamily:T.fontHeading, fontWeight:600, fontSize:16, lineHeight:1.3, color:T.fog, margin:'4px 0 0' }}>{p.title}</h3>
              <p style={{ fontFamily:T.fontBody, fontSize:13.5, lineHeight:'21px', color:T.onDark80, margin:0 }}>{p.body}</p>
            </div>
          ))}
        </div>
        {/* closing statement */}
        <div style={{ position:'relative', display:'flex', flexDirection:'column', alignItems:'center', gap:20, textAlign:'center', margin:'clamp(30px,4vw,46px) 0 clamp(36px,4.5vw,56px)' }}>
          <div aria-hidden="true" style={{ width:'min(560px,90%)', height:1, background:'linear-gradient(90deg, transparent, rgba(94,148,255,0.55), transparent)' }} />
          <h3 style={{ margin:0, fontFamily:T.fontHeading, fontWeight:500 }}>
            <span style={{ display:'block', fontSize:'clamp(16px,2vw,20px)', lineHeight:1.4, letterSpacing:'0.01em', color:'rgba(214,222,240,0.82)' }}>{tr('builderStack.closing1', 'No centralized server is involved at any step.')}</span>
            <span style={{ display:'block', marginTop:8, fontWeight:600, fontSize:'clamp(25px,3.4vw,36px)', lineHeight:1.2, letterSpacing:'-0.01em', background:'linear-gradient(90deg, #9dbcff, #5e94ff 55%, #b9ceff)', WebkitBackgroundClip:'text', backgroundClip:'text', color:'transparent' }}>{tr('builderStack.closing2', 'The blockchain is the backend.')}</span>
          </h3>
        </div>
        {/* sn-layer-align: subgrid rows keep the footer dividers level across each card row */}
        <div style={{ display:'grid', gridTemplateColumns:isMobile?'1fr':'repeat(2, minmax(0,1fr))', gridTemplateRows:isMobile?undefined:'repeat(6, auto)', gap:23 }}>
          {layers.map(c => (
            <div key={c.title} className="sn-rcard" style={{ position:'relative', display:isMobile?'flex':'grid', flexDirection:'column', gridTemplateRows:isMobile?undefined:'subgrid', gridRow:isMobile?undefined:'span 3', gap:isMobile?21:undefined, background:'linear-gradient(180deg, #17181c 0%, #121317 100%)', border:'1px solid rgba(255,255,255,0.07)', borderRadius:20, padding:isMobile?'25px 21px':0, boxShadow:'inset 0 1px 0 rgba(255,255,255,0.05)' }}>
              <div style={{ display:'flex', alignItems:'center', gap:12, margin:isMobile?0:'clamp(36px,2.9vw,45px) clamp(32px,2.5vw,41px) 0', justifyContent:isMobile?'center':'flex-start', textAlign:isMobile?'center':'left' }}>
                {iconBadge(c.icon)}
                <h3 style={{ flex:isMobile?'0 1 auto':1, minWidth:0, fontFamily:T.fontHeading, fontWeight:600, fontSize:isMobile?17:20, lineHeight:1.25, color:T.fog, margin:0, letterSpacing:'-0.005em' }}>{c.title}</h3>
              </div>
              <ul style={{ listStyle:'none', display:'flex', flexDirection:'column', gap:12, margin:isMobile?0:'0 clamp(32px,2.5vw,41px)', padding:0 }}>
                {c.points.map(pt => (
                  <li key={pt} style={{ display:'flex', alignItems:isMobile?'center':'flex-start', justifyContent:isMobile?'center':'flex-start', gap:11, textAlign:isMobile?'center':'left' }}>
                    <span aria-hidden="true" style={{ width:6, height:6, borderRadius:'50%', background:'#5e94ff', flexShrink:0, marginTop:isMobile?0:8 }} />
                    <span style={{ fontFamily:T.fontBody, fontSize:14.5, lineHeight:'22px', color:T.onDark80 }}>{pt}</span>
                  </li>
                ))}
              </ul>
              {c.extra && (
                <div style={{ margin:isMobile?'auto 0 0':'0 clamp(32px,2.5vw,41px) clamp(36px,2.9vw,45px)', borderTop:'1px solid rgba(255,255,255,0.07)', paddingTop:21 }}>{c.extra}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Open source — the only end-to-end transparent dVPN stack ── */
const SN_GH_PATH = 'M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12';

function LangBadge({ mark, name }) {
  return (
    <span className="sn-oss-lang" style={{ display:'flex', alignItems:'center', gap:11, background:'rgba(255,255,255,0.035)', border:'1px solid rgba(255,255,255,0.09)', borderRadius:14, padding:'10px 14px' }}>
      {mark}
      <span style={{ fontFamily:T.fontHeading, fontWeight:600, fontSize:15, color:T.fog, lineHeight:1.15, whiteSpace:'nowrap' }}>{name}</span>
    </span>
  );
}

function OpenSourceSection() {
  const isMobile = useIsMobile();
  const stats = [
    { v:'4', l:tr('oss.sdkLanguagesStat', 'SDK languages') },
    { v:'41,000+', l:tr('oss.linesOfCodeStat', 'lines of open code') },
  ];
  const langs = [
    { name:'JavaScript', mark:(
      <svg width="26" height="26" viewBox="0 0 26 26" aria-hidden="true"><rect width="26" height="26" rx="4" fill="#F7DF1E"/><text x="23.4" y="23.2" textAnchor="end" fontFamily="Helvetica, Arial, sans-serif" fontWeight="700" fontSize="12" fill="#000000">JS</text></svg>
    ) },
    { name:'C# / .NET', mark:(
      <svg width="26" height="26" viewBox="0 0 26 26" aria-hidden="true"><path d="M13 1.4 23.2 7.2v11.6L13 24.6 2.8 18.8V7.2Z" fill="#68217A"/><text x="13" y="17.3" textAnchor="middle" fontFamily="Helvetica, Arial, sans-serif" fontWeight="700" fontSize="10.5" fill="#ffffff">C#</text></svg>
    ) },
    { name:'Go', mark:(
      <svg width="26" height="26" viewBox="0 0 26 26" aria-hidden="true"><rect width="26" height="26" rx="6" fill="#00ADD8"/><text x="13" y="17.3" textAnchor="middle" fontFamily="Helvetica, Arial, sans-serif" fontWeight="700" fontSize="11.5" fill="#ffffff">Go</text></svg>
    ) },
    { name:'Swift', mark:(
      <svg width="26" height="26" viewBox="0 0 26 26" aria-hidden="true"><rect width="26" height="26" rx="6" fill="#F05138"/><path fill="#ffffff" d="M19.6 16.9c1-2.9.2-6.1-2-8.7 1.6 2.3 2 5 .9 7.2-2.3-1.5-5.1-4-6.9-6.1 2.4 2.9 5 5.3 6.2 6.3-2.4-1.2-5.6-3.4-7.5-5.2 2.1 2.8 5 5.4 7.3 6.7-1.8 1-4.5 1.1-6.9-.1 2.7 1.8 6.2 2 8.6.5 1.7.8 3.2.3 3.8-.6 0 0-1.4.5-3.5 0z"/></svg>
    ) },
  ];
  const stack = [
    { k:tr('oss.sdksLabel', 'SDKs'),              d:tr('oss.sdksDesc', 'Client libraries in JavaScript, C#, Go & Swift') },
    { k:tr('oss.protocolLabel', 'Protocol'),      d:tr('oss.protocolDesc', 'WireGuard & V2Ray session layer') },
    { k:tr('oss.chainLabel', 'Chain'),            d:tr('oss.chainDesc', 'Sentinel Hub, built on the Cosmos SDK') },
    { k:tr('oss.nodeLabel', 'Node software'),     d:tr('oss.nodeDesc', 'The dVPN node anyone can run and inspect') },
  ];
  const ossColHead = { margin:0, fontFamily:T.fontHeading, fontWeight:600, fontSize:'clamp(16.5px,1.7vw,19px)', lineHeight:1.3, letterSpacing:'-0.005em', color:T.fog };
  const ossColSub = { margin:0, fontFamily:T.fontBody, fontSize:13.5, lineHeight:'20px', color:T.onDark60 };
  const ossDivider = '1px solid rgba(255,255,255,0.08)';
  return (
    <section id="open-source" style={{ background:'transparent', paddingTop:'clamp(24px,3vw,40px)', paddingBottom:'clamp(56px,7vw,96px)', scrollMarginTop:90 }}>
      <div style={atomStyles.container}>
        <style>{`
          /* sn-oss-v2 sn-oss-v3 sn-oss-v4 sn-oss-v7 — v4 merged panel restored
             over the v5 centered-cards layout per user, OPEN pills removed.
             (sn-oss-v6 was authored for a v5-based slab rework, never shipped)
             sn-oss-v8 — mono eyebrows replaced with explicit plain-language
             headings + sublines so the two messages read instantly: every
             layer of Sentinel is open source / build in the language you
             already use (user 2026-06-11) */
          .sn-oss-lang { transition:transform 200ms cubic-bezier(.22,.61,.36,1), border-color 220ms, background 220ms; }
          .sn-oss-lang:hover { transform:translateY(-2px); border-color:rgba(94,148,255,0.5); background:rgba(1,86,252,0.08); }
        `}</style>
        <div data-mark="sn-oss-v8" style={{ position:'relative', overflow:'hidden', display:'flex', flexDirection:'column', gap:'clamp(20px,2.4vw,26px)', borderRadius:24, border:'1px solid rgba(255,255,255,0.10)', background:'radial-gradient(560px 240px at 92% -10%, rgba(1,86,252,0.14), transparent 65%), linear-gradient(160deg, rgba(255,255,255,0.045) 0%, rgba(255,255,255,0.015) 55%, rgba(1,86,252,0.06) 100%)', padding: isMobile ? '24px 20px' : 'clamp(26px,2.8vw,36px) clamp(26px,3vw,40px)' }}>
          <svg aria-hidden="true" width="190" height="190" viewBox="0 0 24 24" fill="rgba(157,188,255,0.05)" style={{ position:'absolute', right:-30, bottom:-56, transform:'rotate(-8deg)', pointerEvents:'none' }}><path d={SN_GH_PATH}/></svg>
          {/* header row: statement left, GitHub CTA pinned right */}
          <div style={{ position:'relative', display:'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: isMobile ? 'center' : 'center', gap: isMobile ? 16 : 'clamp(24px,3vw,44px)' }}>
            <h2 style={{ flex:1, minWidth:0, fontFamily:T.fontHeading, fontWeight:600, fontSize:'clamp(18px,1.9vw,23px)', lineHeight:1.45, letterSpacing:'-0.01em', color:T.fog, margin:0, maxWidth:760, textAlign:isMobile?'center':'left' }}>
              <span style={{ color:T.onDark60 }}>{tr('oss.closedSource', 'Closed-source VPNs ask for your trust.')}</span>{' '}
              {tr('oss.openStatement', 'Sentinel is the only open-source, decentralized framework to build a VPN application on — full transparency into the application-side code and the server-side code alike.')}
            </h2>
            <BtnPrimary href={L.github} style={ isMobile
              ? { gap:10, height:'auto', minHeight:52, padding:'13px 18px', fontSize:15, lineHeight:1.3, whiteSpace:'normal', textAlign:'center', alignSelf:'stretch', width:'100%', maxWidth:'100%', boxSizing:'border-box' }
              : { gap:12, height:58, padding:'0 34px', fontSize:17, flexShrink:0, whiteSpace:'nowrap' } }>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d={SN_GH_PATH}/></svg>
              {tr('oss.githubCta', 'View open-source code on GitHub')}
            </BtnPrimary>
          </div>
          {/* body: pipeline + languages as equal four-row columns */}
          <div style={{ position:'relative', display:'grid', gridTemplateColumns: isMobile ? '1fr' : '1.15fr 1fr', gap: isMobile ? '22px' : 'clamp(28px,3.4vw,52px)', borderTop:ossDivider, paddingTop:'clamp(18px,2.2vw,26px)' }}>
            <div style={{ display:'flex', flexDirection:'column', gap:14, alignItems:isMobile?'center':'stretch' }}>
              <div style={{ display:'flex', flexDirection:'column', gap:5, textAlign:isMobile?'center':'left' }}>
                <h3 style={ossColHead}>{tr('oss.everyLayerHeading', 'Every layer of Sentinel is open source')}</h3>
                <p style={ossColSub}>{tr('oss.everyLayerSubhead', 'Nothing in the stack is closed — read, audit, and fork all of it.')}</p>
              </div>
              <div style={{ position:'relative', display:'flex', flexDirection:'column', justifyContent:'space-between', gap:13, flex:1, alignItems:isMobile?'center':'stretch', width:isMobile?'100%':'auto' }}>
                {!isMobile && <span aria-hidden="true" style={{ position:'absolute', left:5, top:12, bottom:12, width:2, borderRadius:2, background:'linear-gradient(180deg, rgba(38,112,255,0.85) 0%, rgba(38,112,255,0.2) 100%)' }} />}
                {stack.map(s => (
                  <div key={s.k} style={{ display:'flex', alignItems:isMobile?'center':'flex-start', justifyContent:isMobile?'center':'flex-start', gap:13 }}>
                    <span aria-hidden="true" style={{ position:'relative', width:12, height:12, flexShrink:0, marginTop:isMobile?0:5, borderRadius:'50%', background:'#2670FF', boxShadow:'0 0 0 3px rgba(38,112,255,0.22), 0 0 14px rgba(38,112,255,0.7)' }} />
                    <span style={{ display:'flex', flexDirection:'column', gap:3, minWidth:0, flex:isMobile?'0 1 auto':1, textAlign:isMobile?'center':'left' }}>
                      <span style={{ fontFamily:T.fontHeading, fontWeight:600, fontSize:15.5, color:T.fog, lineHeight:1.2 }}>{s.k}</span>
                      <span style={{ fontFamily:T.fontBody, fontSize:13.5, lineHeight:'19px', color:T.onDark60 }}>{s.d}</span>
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ display:'flex', flexDirection:'column', gap:14, alignItems:isMobile?'center':'stretch' }}>
              <div style={{ display:'flex', flexDirection:'column', gap:5, textAlign:isMobile?'center':'left' }}>
                <h3 style={ossColHead}>{tr('oss.buildLanguageHeading', 'Build in the language you already use')}</h3>
                <p style={ossColSub}>{tr('oss.buildLanguageSubhead', 'Four official SDKs — every one of them open source.')}</p>
              </div>
              <div style={{ display:'flex', flexDirection:'column', justifyContent:'space-between', gap:10, flex:1, width:isMobile?'100%':'auto' }}>
                {langs.map(l => <LangBadge key={l.name} mark={l.mark} name={l.name} />)}
              </div>
            </div>
          </div>
          {/* footer: inline stats — centered + enlarged (user 2026-06-11) */}
          <div style={{ position:'relative', display:'flex', flexWrap:'wrap', alignItems:'baseline', justifyContent:'center', gap:'14px clamp(40px,6vw,84px)', borderTop:ossDivider, paddingTop:'clamp(18px,2.2vw,26px)' }}>
            {stats.map(s => (
              <span key={s.l} style={{ display:'flex', alignItems:'baseline', gap:12 }}>
                <span style={{ fontFamily:T.fontHeading, fontWeight:700, fontSize:'clamp(28px,3vw,38px)', lineHeight:1, letterSpacing:'-0.015em', fontVariantNumeric:'tabular-nums', color:'#ffffff' }}>{s.v}</span>
                <span style={{ fontFamily:T.fontHeading, fontWeight:500, fontSize:'clamp(14px,1.4vw,16px)', color:T.onDark60 }}>{s.l}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
function ResilienceCards() {
  return (<><BuilderStackSection /><OpenSourceSection /></>);
}

/* ── Steps / Plan Manager — pinned stacked-card scroll ──── */
/* Step badge — shared by the three "zero to production dVPN" steps */
function StepTag({ n, light }) {
  /* sn-steptag-mark sn-steptag-xl */
  const R = 23, C = 2 * Math.PI * R;
  const ink   = light ? 'rgba(0,0,0,0.84)'    : 'rgba(234,234,234,0.92)';
  const faint = light ? 'rgba(0,0,0,0.32)'    : 'rgba(234,234,234,0.40)';
  const track = light ? 'rgba(1,86,252,0.14)' : 'rgba(255,255,255,0.14)';
  return (
    <span style={{ display:'inline-flex', alignItems:'center', gap:15, width:'fit-content' }}>
      <span style={{ position:'relative', width:52, height:52, flexShrink:0, display:'inline-flex', alignItems:'center', justifyContent:'center', borderRadius:'50%', background: light ? 'rgba(1,86,252,0.06)' : 'rgba(1,86,252,0.12)', boxShadow: light ? '0 1px 10px rgba(1,86,252,0.10)' : '0 0 22px rgba(1,86,252,0.28)' }}>
        <svg width="52" height="52" viewBox="0 0 52 52" aria-hidden="true" style={{ position:'absolute', inset:0, transform:'rotate(-90deg)' }}>
          <circle cx="26" cy="26" r={R} fill="none" stroke={track} strokeWidth="2.2" />
          <circle cx="26" cy="26" r={R} fill="none" stroke={T.blue} strokeWidth="2.2" strokeLinecap="round" strokeDasharray={C} strokeDashoffset={C * (1 - n / 3)} />
        </svg>
        <SentinelMark size={23} color={T.blue} />
      </span>
      <span style={{ fontFamily:T.fontHeading, fontWeight:600, fontSize:22, lineHeight:1.1, letterSpacing:'0.005em', color:ink, whiteSpace:'nowrap' }}>
        Step 0{n}{'\u2009'}<span style={{ color:faint, fontWeight:500 }}>{'/\u200903'}</span>
      </span>
    </span>
  );
}

/* Step 1 — static (no pinned scroll), styled like the NodeHosting section:
   centered header + one screenshot, everything visible on one screen. */
function StepsSection() {
  const isMobile = useIsMobile();
  return (
    <section style={{ background:'transparent' }}>
      <div style={{ ...atomStyles.container, display:'flex', flexDirection:'column', alignItems:'center', textAlign:'center', gap:'clamp(26px,3.6vh,40px)', paddingTop:isMobile?'clamp(44px,10vw,64px)':'clamp(64px,7.5vw,110px)', paddingBottom:isMobile?'clamp(44px,10vw,64px)':'clamp(64px,7.5vw,110px)' }}>
        <h2 style={{ fontFamily:T.fontHeading, fontWeight:600, fontSize:'clamp(31px,5.2vw,66px)', lineHeight:1.04, letterSpacing:'-0.02em', color:T.fog, margin:0, maxWidth:1000 }}>{tr('steps.heading', 'Three steps from zero to a production dVPN.')}</h2>
        <div style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:18, maxWidth:780 }}>
          <StepTag n={1} />
          <h3 style={{ fontFamily:T.fontHeading, fontWeight:600, fontSize:'clamp(22px,2.9vw,36px)', lineHeight:1.18, letterSpacing:'-0.005em', color:T.fog, margin:0 }}>{tr('steps.step1Heading', 'Add nodes to your subscription plan.')}</h3>
          <p style={{ fontFamily:T.fontBody, fontSize:16.5, lineHeight:'27px', color:'rgba(234,234,234,0.76)', margin:0, maxWidth:680 }}>{tr('steps.step1Body', 'Pay dVPN nodes and add them to your subscription plan. Filter by country, encryption protocol and more to find nodes that meet your application’s capacity needs.')}</p>
        </div>
        <div style={{ width:'100%', maxWidth:960, borderRadius:18, overflow:'hidden', border:'1px solid rgba(255,255,255,0.10)', background:'#0c0c0c', boxShadow:'0 30px 80px rgba(0,0,0,0.45)' }}>
          <img src={window.__resources.screenPlan2} alt={tr('steps.planManagerAlt', 'Adding nodes to a subscription plan in the Plan Manager')} style={{ display:'block', width:'100%', height:'auto', maxHeight:'56vh', objectFit:'cover', objectPosition:'top center' }} />
        </div>
        <BtnPrimary light href={L.planManager}>{tr('steps.openPlanManager', 'Open Plan Manager')}</BtnPrimary>
      </div>
    </section>
  );
}

/* ── SDK section — "Build your own dVPN app" ────────────── */
const PlatformIcons = {
  iOS: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="#1d1d1f" aria-hidden="true">
      <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701z"/>
    </svg>
  ),
  Android: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="#3DDC84" aria-hidden="true">
      <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993.0001.5511-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993 0 .5511-.4482.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C15.5902 8.2439 13.8533 7.8508 12 7.8508s-3.5902.3931-5.1367 1.0989L4.841 5.4467a.4161.4161 0 00-.5677-.1521.4157.4157 0 00-.1521.5676l1.9973 3.4592C2.6889 11.1867.3432 14.6589 0 18.761h24c-.3435-4.1021-2.6892-7.5743-6.1185-9.4396"/>
    </svg>
  ),
  macOS: (
    <svg width="26" height="26" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="11" fill="#1d1d1f"/>
      <g transform="translate(6.2 5.4) scale(0.49)" fill="#ffffff">
        <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701z"/>
      </g>
    </svg>
  ),
  Linux: (
    <svg width="26" height="26" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2.4c-2.2 0-3.55 1.75-3.55 4.15 0 1.2-.5 2-1.25 2.95C6 10.9 5 12.5 5 15.1c0 3 1.9 4.5 7 4.5s7-1.5 7-4.5c0-2.6-1-4.2-2.2-5.6-.75-.95-1.25-1.75-1.25-2.95C15.55 4.15 14.2 2.4 12 2.4z" fill="#111"/>
      <ellipse cx="12" cy="14.6" rx="3.3" ry="4.1" fill="#fff"/>
      <ellipse cx="10.2" cy="7.2" rx="1.25" ry="1.6" fill="#fff"/>
      <ellipse cx="13.8" cy="7.2" rx="1.25" ry="1.6" fill="#fff"/>
      <circle cx="10.4" cy="7.5" r=".7" fill="#111"/>
      <circle cx="13.6" cy="7.5" r=".7" fill="#111"/>
      <path d="M12 8.2l1.6 1.2c-.5.5-1.1.75-1.6.75s-1.1-.25-1.6-.75z" fill="#F8B500"/>
      <ellipse cx="9.6" cy="19.4" rx="1.5" ry=".8" fill="#F8B500"/>
      <ellipse cx="14.4" cy="19.4" rx="1.5" ry=".8" fill="#F8B500"/>
    </svg>
  ),
  Windows: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="#00A4EF" aria-hidden="true">
      <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801"/>
    </svg>
  ),
  Web: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#1d1d1f" strokeWidth="1.5" aria-hidden="true">
      <circle cx="12" cy="12" r="9.5"/>
      <ellipse cx="12" cy="12" rx="4" ry="9.5"/>
      <line x1="2.5" y1="12" x2="21.5" y2="12"/>
      <line x1="4" y1="7" x2="20" y2="7"/>
      <line x1="4" y1="17" x2="20" y2="17"/>
    </svg>
  ),
  TV: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#1d1d1f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2.5" y="6" width="19" height="12" rx="2"/>
      <path d="M8.5 2.8L12 6l3.5-3.2"/>
      <line x1="8" y1="21.2" x2="16" y2="21.2"/>
    </svg>
  ),
  Server: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#1d1d1f" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
      <rect x="3" y="4" width="18" height="6" rx="1.6"/>
      <rect x="3" y="14" width="18" height="6" rx="1.6"/>
      <line x1="6.5" y1="7" x2="6.6" y2="7"/>
      <line x1="6.5" y1="17" x2="6.6" y2="17"/>
    </svg>
  ),
};

const BUILD_PLATFORMS = [
  { key:'iOS',     name:'iOS',     descKey:'sdk.iosDesc',     stack:['Swift', 'React Native'],   desc:'Ship an App Store client. The Network Extension tunnel is already built.' },
  { key:'Android', name:'Android', descKey:'sdk.androidDesc', stack:['Kotlin', 'React Native'],  desc:'Ship a Play Store app on VpnService. WireGuard and V2Ray included.' },
  { key:'macOS',   name:'macOS',   descKey:'sdk.macosDesc',   stack:['Swift', 'Electron'],       desc:'Build a menu-bar app that tunnels all system traffic.' },
  { key:'Windows', name:'Windows', descKey:'sdk.windowsDesc', stack:['Electron', '.NET'],        desc:'Build a desktop client for the OS most people use.' },
  { key:'Linux',   name:'Linux',   descKey:'sdk.linuxDesc',   stack:['CLI', 'daemon'],           desc:'Run headless daemons on servers, routers and homelabs.' },
  { key:'Web',     name:'Web',     descKey:'sdk.webDesc',     stack:['TypeScript', 'WASM'],      desc:'Build browser extensions and dashboards. Users install nothing.' },
  { key:'TV',      name:'TV',      descKey:'sdk.tvDesc',      stack:['Android TV', 'tvOS'],      desc:'Build TV apps designed for the remote control.' },
  { key:'Server',  name:'Server',  descKey:'sdk.serverDesc',  stack:['Node', 'Go'],              desc:'Route traffic from code. Bots, backends and AI agents.' },
];

function SDKSection() {
  const isMobile = useIsMobile();
  return (
    <section id="build-dvpn" style={{ background:'radial-gradient(1000px 480px at 12% -8%, rgba(1,86,252,0.06), transparent 60%), radial-gradient(820px 420px at 94% 36%, rgba(1,86,252,0.04), transparent 60%), linear-gradient(180deg, #f4f6fb 0%, #fbfbfb 28%, #fbfbfb 100%)', ...atomStyles.section, scrollMarginTop:90 }}>
      <style>{`
        .sn-build-grid { display:grid; grid-template-columns:repeat(4, 1fr); gap:1px; background:${T.line200}; border:1px solid ${T.line200}; border-radius:24px; overflow:hidden; }
        @media (max-width: 1080px) { .sn-build-grid { grid-template-columns:repeat(2, 1fr); } }
        @media (max-width: 560px)  { .sn-build-grid { grid-template-columns:1fr; } }
        .sn-build-card { transition:background 0.3s ease; }
        .sn-build-card:hover { background:#f6f9ff !important; }
        .sn-build-name { transition:color 0.3s ease; }
        .sn-build-card:hover .sn-build-name { color:${T.blue}; }
        .sn-build-arrow { opacity:0; transform:translate(-5px, 5px); transition:opacity 0.3s ease, transform 0.3s ease; }
        .sn-build-card:hover .sn-build-arrow { opacity:1; transform:translate(0, 0); }
      `}</style>
      <div style={{ ...atomStyles.container, display:'flex', flexDirection:'column', gap:'clamp(36px,5vw,52px)' }}>
        {/* Text header */}
        <div style={{ display:'flex', flexDirection:'column', gap:18, maxWidth:720, alignItems:isMobile?'center':'flex-start', textAlign:isMobile?'center':'left', alignSelf:isMobile?'center':'auto' }}>
          <StepTag n={2} light />
          <h2 style={{ ...atomStyles.h1Light, fontSize:'clamp(26px,3.2vw,38px)', margin:0 }}>{tr('sdk.buildPlatformHeading', 'Build a dVPN for Any Platform')}</h2>
          <p style={{ ...atomStyles.leadLight, maxWidth:680 }}>{tr('sdk.buildPlatformBody', 'The Sentinel SDK runs on phones, desktops, browsers, TVs and servers. You build the app and own the brand. The network handles bandwidth, routing and payments.')}</p>
        </div>
        {/* Platform grid — seamless hairline cells, aligned rows */}
        <div className="sn-build-grid">
          {BUILD_PLATFORMS.map(p => (
            <a key={p.key} href={L.sdkDocs} target="_blank" rel="noopener noreferrer" className="sn-build-card"
               style={{ background:T.white, padding:'26px 24px 20px', display:'flex', flexDirection:'column', gap:16, textDecoration:'none', minHeight:224, boxSizing:'border-box' }}>
              <div style={{ display:'flex', alignItems:'center', gap:13 }}>
                <div style={{ width:44, height:44, borderRadius:12, background:T.snow, border:`1px solid ${T.line200}`, display:'grid', placeItems:'center', flexShrink:0 }}>{PlatformIcons[p.key]}</div>
                <span className="sn-build-name" style={{ fontFamily:T.fontHeading, fontWeight:600, fontSize:20, lineHeight:1.2, color:T.onLight85 }}>{p.name}</span>
                <span className="sn-build-arrow" aria-hidden="true" style={{ marginLeft:'auto', color:T.blue, fontSize:17, lineHeight:1 }}>↗</span>
              </div>
              <p style={{ margin:0, fontFamily:T.fontBody, fontSize:14, lineHeight:1.55, color:T.onLight60, flex:1 }}>{p.descKey ? tr(p.descKey, p.desc) : p.desc}</p>
              <div style={{ borderTop:`1px solid ${T.line200}`, paddingTop:14, display:'flex', flexWrap:'wrap', gap:6 }}>
                {p.stack.map(s => (
                  <span key={s} style={{ fontFamily:T.fontMono, fontSize:11, letterSpacing:'0.02em', padding:'4px 10px', borderRadius:7, background:T.snow, color:T.onLight60, whiteSpace:'nowrap' }}>{s}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
        <div style={{ display:'flex', alignItems:'stretch', flexWrap:'wrap', gap:'clamp(12px,2vw,28px)', justifyContent:'center' }}>
          <BtnPrimary light href={L.sdkDocs} style={{ borderColor:'#d9d9d9' }}>{tr('sdk.docsButton', 'SDK Docs')}</BtnPrimary>
          <BtnGhost dark={false} href={L.github}>{tr('sdk.githubButton', 'View on GitHub')}</BtnGhost>
        </div>
      </div>
    </section>
  );
}

/* ── Payment section — content mirrors the Plan Manager Payment page ── */
function PaymentRailsSection() {
  const isMobile = useIsMobile();
  // Inline brand marks lifted from the Plan Manager Payment page (RAIL_LOGOS).
  const LOGOS = {
    visa: '<svg viewBox="0 0 78 26" width="50" height="17" aria-label="Visa"><text x="39" y="21" text-anchor="middle" font-family="Arial Black,Helvetica,sans-serif" font-style="italic" font-weight="900" font-size="22" letter-spacing="1" fill="#1A1F71">VISA</text><path d="M22 23 L25 23 L23.5 19 Z" fill="#f7b600"/></svg>',
    mc: '<svg viewBox="0 0 64 40" width="38" height="24" aria-label="Mastercard"><circle cx="24" cy="20" r="13" fill="#eb001b"/><circle cx="40" cy="20" r="13" fill="#f79e1b"/><path d="M32 10.5a13 13 0 0 1 0 19 13 13 0 0 1 0-19z" fill="#ff5f00"/></svg>',
    stripe: '<svg viewBox="0 0 60 25" width="48" height="20" aria-label="Stripe"><path fill="#635BFF" d="M59.64 14.28h-8.06c.19 1.93 1.6 2.55 3.2 2.55 1.64 0 2.96-.37 4.05-.95v3.32a8.33 8.33 0 0 1-4.56 1.1c-4.01 0-6.83-2.5-6.83-7.48 0-4.19 2.39-7.52 6.3-7.52 3.92 0 5.96 3.28 5.96 7.5 0 .4-.04 1.26-.06 1.48zm-5.92-5.62c-1.03 0-2.17.73-2.17 2.58h4.25c0-1.85-1.07-2.58-2.08-2.58zM40.95 20.3c-1.44 0-2.32-.6-2.9-1.04l-.02 4.63-4.12.87V5.57h3.76l.08 1.02a4.7 4.7 0 0 1 3.23-1.29c2.9 0 5.62 2.6 5.62 7.4 0 5.23-2.7 7.6-5.65 7.6zM40 9.04c-.95 0-1.54.34-1.97.81l.02 6.12c.4.44.98.78 1.95.78 1.52 0 2.54-1.65 2.54-3.87 0-2.16-1.04-3.84-2.54-3.84zM28.24 5.57h4.13v14.44h-4.13V5.57zm0-4.7L32.37 0v3.36l-4.13.88V.88zm-4.32 9.35v9.79H19.8V5.57h3.7l.12 1.22c1-1.77 3.07-1.41 3.62-1.22v3.79c-.52-.17-2.29-.43-3.32.86zm-8.55 4.72c0 2.43 2.6 1.68 3.12 1.46v3.36c-.55.3-1.54.54-2.89.54a4.15 4.15 0 0 1-4.27-4.24l.01-13.17 4.02-.86v3.54h3.14V9.1h-3.13v5.85zm-4.91.7c0 2.97-2.31 4.66-5.73 4.66a11.2 11.2 0 0 1-4.46-.93v-3.93c1.38.75 3.1 1.31 4.46 1.31.92 0 1.58-.24 1.58-1C6.31 13.83 0 14.84 0 10.2 0 7.29 2.27 5.55 5.61 5.55c1.36 0 2.72.2 4.09.75v3.88a9.23 9.23 0 0 0-4.1-1.06c-.86 0-1.4.25-1.4.9 0 1.85 6.35.97 6.35 5.62z"/></svg>',
    applepay: '<span style="display:inline-flex;align-items:center;gap:2.5px"><svg viewBox="0 0 24 24" width="15" height="15" aria-label="Apple Pay"><path fill="#000" d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"/></svg><span style="font-family:Helvetica,Arial,sans-serif;font-weight:600;font-size:14.5px;letter-spacing:-0.2px;color:#000">Pay</span></span>',
    googlepay: '<span style="display:inline-flex;align-items:center;gap:3px"><svg viewBox="0 0 24 24" width="15" height="15" aria-label="Google Pay"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg><span style="font-family:Helvetica,Arial,sans-serif;font-weight:500;font-size:14.5px;color:#5f6368">Pay</span></span>',
    btc: '<svg viewBox="0 0 4091.27 4091.73" width="26" height="26" aria-label="Bitcoin"><path fill="#F7931A" d="M4030.06 2540.77c-273.24 1096.01-1383.32 1763.02-2479.46 1489.71C455.15 3757.21-211.99 2647.08 61.35 1551.14 334.5 455.11 1444.58-211.99 2540.45 61.27c1096.06 273.24 1763.16 1383.51 1489.61 2479.5z"/><path fill="#FFF" d="M2947.77 1754.38c40.72-272.26-166.56-418.61-450-516.24l91.95-368.8-224.5-55.94-89.51 359.09c-59.02-14.72-119.63-28.59-179.87-42.34l90.16-361.46-224.36-55.94-92 368.68c-48.84-11.12-96.81-22.11-143.35-33.69l.26-1.16-309.59-77.31-59.72 239.78s166.56 38.18 163.05 40.53c90.91 22.69 107.35 82.87 104.62 130.57l-104.74 420.15c6.26 1.59 14.38 3.89 23.34 7.49-7.49-1.86-15.46-3.89-23.73-5.87l-146.81 588.57c-11.11 27.62-39.31 69.07-102.87 53.33 2.25 3.26-163.17-40.72-163.17-40.72l-111.46 256.98 292.15 72.83c54.35 13.63 107.61 27.89 160.06 41.3l-92.9 373.03 224.24 55.94 92-369.07c61.26 16.63 120.71 31.97 178.91 46.43l-91.69 367.33 224.51 55.94 92.89-372.33c382.82 72.45 670.67 43.24 791.83-303.02 97.63-278.78-4.86-439.58-206.26-544.44 146.69-33.83 257.18-130.31 286.64-329.61zm-512.93 719.26c-69.36 278.78-538.76 128.08-690.94 90.29l123.28-494.2c152.17 37.99 640.17 113.17 567.67 403.91zm69.41-723.3c-63.29 253.58-453.96 124.75-580.69 93.16l111.77-448.21c126.73 31.59 534.85 90.55 468.94 355.05z"/></svg>',
    zec: '<svg viewBox="0 0 32 32" width="26" height="26" aria-label="Zcash"><circle cx="16" cy="16" r="16" fill="#F4B728"/><path fill="#fff" d="M14.8 4.8h2.4v2.8H22v2.4l-7.4 11.4H22v2.4h-4.8v2.8h-2.4v-2.8H10v-2.4l7.4-11.4H10V7.6h4.8z"/></svg>',
    eth: '<svg viewBox="0 0 256 417" width="16" height="26" aria-label="Ethereum" preserveAspectRatio="xMidYMid"><path fill="#343434" d="M127.961 0l-2.795 9.5v275.668l2.795 2.79 127.962-75.638z"/><path fill="#8C8C8C" d="M127.962 0L0 212.32l127.962 75.639V154.158z"/><path fill="#3C3C3B" d="M127.961 312.187l-1.575 1.92v98.199l1.575 4.6L256 236.587z"/><path fill="#8C8C8C" d="M127.962 416.905v-104.72L0 236.585z"/><path fill="#141414" d="M127.961 287.958l127.96-75.637-127.96-58.162z"/><path fill="#393939" d="M0 212.32l127.96 75.638v-133.8z"/></svg>',
    sol: '<svg viewBox="0 0 397.7 311.7" width="28" height="22" aria-label="Solana"><defs><linearGradient id="solg-bot" x1="360.879" y1="351.455" x2="141.213" y2="-69.294" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1 0 0 -1 0 314)"><stop offset="0" stop-color="#00ffa3"/><stop offset="1" stop-color="#dc1fff"/></linearGradient><linearGradient id="solg-mid" x1="264.829" y1="401.601" x2="45.163" y2="-19.148" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1 0 0 -1 0 314)"><stop offset="0" stop-color="#00ffa3"/><stop offset="1" stop-color="#dc1fff"/></linearGradient><linearGradient id="solg-top" x1="312.548" y1="376.688" x2="92.882" y2="-44.061" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1 0 0 -1 0 314)"><stop offset="0" stop-color="#00ffa3"/><stop offset="1" stop-color="#dc1fff"/></linearGradient></defs><path fill="url(#solg-bot)" d="M64.6 237.9c2.4-2.4 5.7-3.8 9.2-3.8h317.4c5.8 0 8.7 7 4.6 11.1l-62.7 62.7c-2.4 2.4-5.7 3.8-9.2 3.8H6.5c-5.8 0-8.7-7-4.6-11.1l62.7-62.7z"/><path fill="url(#solg-mid)" d="M64.6 3.8C67.1 1.4 70.4 0 73.8 0h317.4c5.8 0 8.7 7 4.6 11.1l-62.7 62.7c-2.4 2.4-5.7 3.8-9.2 3.8H6.5c-5.8 0-8.7-7-4.6-11.1L64.6 3.8z"/><path fill="url(#solg-top)" d="M333.1 120.1c-2.4-2.4-5.7-3.8-9.2-3.8H6.5c-5.8 0-8.7 7-4.6 11.1l62.7 62.7c2.4 2.4 5.7 3.8 9.2 3.8h317.4c5.8 0 8.7-7 4.6-11.1l-62.7-62.6z"/></svg>',
    free: '<svg viewBox="0 0 32 32" width="26" height="26" fill="none" stroke="#0156FC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 3l11 4v8c0 7-4.5 12-11 14C9.5 27 5 22 5 15V7l11-4z" fill="rgba(1,86,252,0.10)"/><path d="M16 3l11 4v8c0 7-4.5 12-11 14C9.5 27 5 22 5 15V7l11-4z"/><path d="M11 16l3.5 3.5L21 13"/></svg>',
    atom: '<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" aria-label="Cosmos Hub ATOM" fill="none" viewBox="0 0 800 800"><path fill="#2E3148" fill-rule="evenodd" d="M400.012 0.768066C620.509 0.768066 799.257 179.501 799.257 399.98C799.257 620.458 620.509 799.192 400.012 799.192C179.516 799.192 0.767944 620.458 0.767944 399.98C0.767944 179.501 179.516 0.768066 400.012 0.768066Z" clip-rule="evenodd"/><path fill="#1B1E36" fill-rule="evenodd" d="M399.226 169.68C526.431 169.68 629.552 272.801 629.552 400.007C629.552 527.212 526.431 630.333 399.226 630.333C272.02 630.333 168.899 527.212 168.899 400.007C168.899 272.801 272.02 169.68 399.226 169.68Z" clip-rule="evenodd"/><path fill-rule="evenodd" stroke="#6F7390" stroke-width="15" d="M401.181 58.2666C394.32 58.2666 386.121 65.8115 377.843 81.5569C368.982 98.411 360.796 123.281 353.849 154.523C339.501 219.047 331.271 306.552 331.271 399.977C331.271 493.402 339.501 580.908 353.849 645.431C360.796 676.673 368.982 701.543 377.843 718.397C386.121 734.143 394.32 741.688 401.181 741.688C408.042 741.688 416.241 734.143 424.519 718.397C433.38 701.543 441.566 676.673 448.513 645.431C462.862 580.908 471.092 493.402 471.092 399.977C471.092 306.552 462.862 219.047 448.513 154.523C441.566 123.281 433.38 98.411 424.519 81.5569C416.241 65.8115 408.042 58.2666 401.181 58.2666Z" clip-rule="evenodd"/><path fill-rule="evenodd" stroke="#6F7390" stroke-width="15" d="M697.298 229.144C693.869 223.208 683.229 219.884 665.444 220.592C646.407 221.351 620.761 226.702 590.213 236.311C527.123 256.157 447.177 292.789 366.216 339.504C285.255 386.219 213.538 437.098 164.797 481.78C141.196 503.415 123.737 522.936 113.562 539.033C104.057 554.069 101.618 564.935 105.046 570.868C108.475 576.804 119.115 580.129 136.9 579.42C155.937 578.662 181.583 573.311 212.131 563.701C275.221 543.856 355.167 507.224 436.129 460.508C517.09 413.793 588.806 362.915 637.547 318.233C661.148 296.598 678.607 277.077 688.783 260.98C698.287 245.944 700.726 235.078 697.298 229.144V229.144ZM697.298 229.144C697.298 229.144 697.298 229.144 697.298 229.144L697.298 229.144C697.298 229.144 697.298 229.144 697.298 229.144V229.144Z" clip-rule="evenodd"/><path fill-rule="evenodd" stroke="#6F7390" stroke-width="15" d="M697.298 570.868L697.298 570.868C700.726 564.935 698.288 554.069 688.783 539.033C678.607 522.936 661.148 503.415 637.548 481.78C588.806 437.098 517.09 386.219 436.129 339.504C355.167 292.789 275.221 256.157 212.131 236.311C181.583 226.702 155.937 221.351 136.9 220.592C119.115 219.884 108.475 223.208 105.046 229.144C101.618 235.078 104.057 245.944 113.562 260.98C123.737 277.077 141.196 296.598 164.797 318.233C213.538 362.915 285.255 413.793 366.216 460.508C447.177 507.224 527.123 543.856 590.213 563.701C620.761 573.311 646.407 578.662 665.444 579.42C683.229 580.129 693.869 576.804 697.298 570.868Z" clip-rule="evenodd"/><path fill="#B7B9C8" fill-rule="evenodd" d="M177.765 302.102C191.34 302.102 202.345 313.112 202.345 326.694C202.345 340.276 191.34 351.286 177.765 351.286C164.189 351.286 153.185 340.276 153.185 326.694C153.185 313.112 164.189 302.102 177.765 302.102Z" clip-rule="evenodd"/><path fill="#B7B9C8" fill-rule="evenodd" d="M568.451 217.905C582.033 217.905 593.043 228.915 593.043 242.497C593.043 256.079 582.033 267.089 568.451 267.089C554.869 267.089 543.859 256.079 543.859 242.497C543.859 228.915 554.869 217.905 568.451 217.905Z" clip-rule="evenodd"/><path fill="#B7B9C8" fill-rule="evenodd" d="M351.649 603.909C365.231 603.909 376.241 614.914 376.241 628.489C376.241 642.064 365.231 653.069 351.649 653.069C338.067 653.069 327.057 642.064 327.057 628.489C327.057 614.914 338.067 603.909 351.649 603.909Z" clip-rule="evenodd"/><path fill="#B7B9C8" fill-rule="evenodd" d="M399.811 358.173C422.806 358.173 441.447 376.814 441.447 399.809C441.447 422.803 422.806 441.444 399.811 441.444C376.817 441.444 358.176 422.803 358.176 399.809C358.176 376.814 376.817 358.173 399.811 358.173Z" clip-rule="evenodd"/></svg>',
    osmo: '<svg width="26" height="26" aria-label="Osmosis OSMO" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M191.136 35.3519C189.1 27.5124 182.556 19.6728 170.777 10.9458C161.323 3.99371 151.289 0 143.291 0C141.691 0 140.237 0.14791 138.783 0.44374C135.147 1.1833 131.947 3.84581 129.912 7.83954C127.44 12.5728 126.858 18.9333 128.458 22.779C129.039 23.9623 129.766 25.4415 130.639 26.7727C122.931 31.5061 118.568 32.8373 117.986 32.9852C138.056 39.7893 154.78 53.9892 165.25 72.4788L165.396 70.7038C165.832 65.8225 167.286 60.2017 169.323 54.433C171.358 55.0247 173.394 55.3205 175.43 55.3205C180.811 55.3205 185.464 53.1018 188.373 49.1081C191.282 45.1143 192.444 39.7893 191.136 35.3519Z" fill="#5E12A0"/><path d="M170.197 50.1475C183.43 53.8454 188.811 43.4913 187.065 36.5393C185.175 29.5872 179.067 22.4872 168.305 14.4998C157.544 6.51235 146.638 3.25818 139.657 4.73728C132.677 6.21647 130.641 17.0143 132.385 21.1559C133.113 22.783 134.712 25.1497 136.894 27.8122C134.131 29.7351 131.513 31.2142 129.332 32.5454C142.711 38.61 154.345 48.0767 163.07 59.9099C164.088 55.9162 165.543 52.3662 166.852 49.26C167.869 49.4079 169.033 49.7038 170.197 50.1475Z" fill="url(#paint0_radial_914_48)"/><path d="M94.4238 195.112C139.32 195.112 175.717 158.092 175.717 112.427C175.717 66.7615 139.32 29.7422 94.4238 29.7422C49.527 29.7422 13.1309 66.7615 13.1309 112.427C13.1309 158.092 49.527 195.112 94.4238 195.112Z" fill="url(#paint1_radial_914_48)"/><path opacity="0.6" d="M180.377 29.7307C169.324 17.8975 160.017 14.7912 148.819 12.2767C140.094 10.2058 142.42 5.17666 153.037 6.21209C147.947 4.43711 143.148 3.99334 139.657 4.73289C132.677 6.21209 130.641 17.0099 132.386 21.1516C133.113 22.7786 134.713 25.1453 136.895 27.8078C132.968 30.4703 129.623 32.3932 126.859 33.8724C128.169 34.464 129.768 35.2036 131.658 36.239C136.603 38.9015 141.984 43.3389 141.984 43.3389C133.84 36.239 135.585 32.9848 146.783 24.9974C150.274 22.4829 156.672 22.7786 162.635 25.8849C168.597 28.9911 175.577 36.8307 175.577 36.8307L168.888 49.8473C169.324 49.9952 169.76 50.143 170.197 50.291C174.414 51.4743 177.758 51.1785 180.377 50.1431C183.431 48.2202 191.429 41.7119 180.377 29.7307Z" fill="#A98698"/><path d="M148.673 19.3852C151.582 20.5685 155.363 22.6393 160.017 25.7456C165.543 29.4435 170.342 33.5852 173.396 36.8392C168.306 43.6434 164.961 52.9621 162.926 59.4704C163.944 60.9496 165.107 62.4287 166.125 63.9079C167.143 60.21 168.887 54.7371 171.214 49.2642C171.796 49.4121 172.524 49.4121 173.25 49.4121C174.995 49.4121 177.031 49.1163 178.631 47.785C179.794 46.8975 181.104 45.2705 180.958 42.3122C180.958 39.5018 178.777 35.9518 174.268 31.6622C171.069 28.556 166.707 25.1539 162.344 22.0477C149.837 13.6165 141.111 11.2498 137.185 15.2435C134.567 17.9061 134.858 21.1602 135.73 23.5269C131.077 26.6331 127.15 28.8518 124.533 30.331C126.278 30.9227 127.878 31.6622 129.623 32.4018C134.276 29.8872 140.966 25.5976 148.673 19.3852ZM176.159 40.5372C176.595 41.2767 176.741 42.0163 176.741 42.46C176.741 43.7914 176.305 44.235 176.013 44.5309C175.432 44.9747 174.268 45.2705 173.25 45.2705C174.123 43.4955 175.141 42.0163 176.159 40.5372ZM140.239 18.4977C140.675 18.0539 141.839 17.7581 143.729 18.0539C142.275 19.2373 140.821 20.2727 139.367 21.3081C139.221 20.2727 139.367 19.2373 140.239 18.4977Z" fill="#5E12A0"/><path d="M94.4241 24.8672C46.8698 24.8672 8.33203 64.0649 8.33203 112.434C8.33203 160.801 46.8698 200 94.4241 200C141.978 200 180.516 160.801 180.516 112.434C180.516 64.0649 141.833 24.8672 94.4241 24.8672ZM94.4241 195.118C49.4875 195.118 13.1311 158.14 13.1311 112.434C13.1311 66.7274 49.4875 29.7484 94.4241 29.7484C139.36 29.7484 175.718 66.7274 175.718 112.434C175.718 158.14 139.216 195.118 94.4241 195.118Z" fill="#5E12A0"/><path opacity="0.6" d="M94.4238 195.112C139.32 195.112 175.717 158.092 175.717 112.427C175.717 66.7615 139.32 29.7422 94.4238 29.7422C49.527 29.7422 13.1309 66.7615 13.1309 112.427C13.1309 158.092 49.527 195.112 94.4238 195.112Z" fill="url(#paint2_linear_914_48)"/><path opacity="0.6" d="M93.8508 185.062C49.4959 177.814 19.3928 135.362 26.664 90.2483C29.8635 70.2795 39.7524 53.2691 53.7133 40.9922C33.3537 52.9734 18.2294 73.8295 14.1575 99.2712C7.0316 144.385 37.1347 186.837 81.3441 194.085C106.066 198.227 129.916 190.387 147.513 175.004C131.952 184.175 113.047 188.169 93.8508 185.062Z" fill="#A98698"/><path opacity="0.6" d="M107.365 30.9237C86.8602 27.5216 66.9368 32.2549 50.6491 42.757C50.3582 43.0527 50.0674 43.3486 50.0674 43.3486C56.3207 39.5028 65.4825 36.1007 65.4825 36.1007C41.9236 50.0048 34.6523 65.8318 34.6523 65.8318C43.8142 47.786 70.7179 35.0653 91.8046 34.1778C112.891 33.2903 126.706 39.6507 143.576 53.4068C160.445 67.311 170.625 95.7104 169.607 118.194C168.735 140.678 157.101 158.871 157.101 158.871C165.099 148.368 169.898 140.678 172.952 132.837C173.534 130.471 174.116 128.105 174.406 125.59C181.678 80.6233 151.72 38.1715 107.365 30.9237Z" fill="url(#paint3_linear_914_48)"/><path d="M171.644 111.689C171.644 155.028 137.032 190.233 94.4231 190.233C51.8134 190.233 17.0566 155.028 17.0566 111.689H171.644Z" fill="url(#paint4_linear_914_48)"/><g opacity="0.6"><path opacity="0.6" d="M165.534 111.689C165.534 153.993 132.668 188.605 91.3672 190.233C92.3852 190.233 93.4032 190.233 94.4212 190.233C137.031 190.233 171.643 155.028 171.643 111.689H165.534Z" fill="url(#paint5_linear_914_48)"/></g><g opacity="0.7"><path opacity="0.7" d="M27.9636 111.689H17.0566C17.0566 155.028 51.668 190.233 94.2777 190.233C96.1682 190.233 97.9133 190.233 99.6585 190.084C59.6664 187.126 27.9636 153.106 27.9636 111.689Z" fill="url(#paint6_linear_914_48)"/></g><path d="M171.499 112.422C171.499 103.399 156.084 98.2211 135.578 96.447C120.745 95.2633 105.767 96.7422 88.6061 102.067C73.7726 106.505 60.3935 105.765 50.65 104.581C28.9815 102.067 17.0566 101.771 17.0566 112.422C17.0566 127.805 47.8868 147.034 94.1323 140.377C117.546 136.976 129.616 130.024 143.432 125.29C158.411 120.261 171.499 120.409 171.499 112.422Z" fill="url(#paint7_linear_914_48)"/><path d="M119.727 75.1522C126.956 75.1522 132.815 69.192 132.815 61.8397C132.815 54.4875 126.956 48.5273 119.727 48.5273C112.499 48.5273 106.639 54.4875 106.639 61.8397C106.639 69.192 112.499 75.1522 119.727 75.1522Z" fill="white"/><path d="M141.108 85.0619C144.16 85.0619 146.634 82.5454 146.634 79.4411C146.634 76.3368 144.16 73.8203 141.108 73.8203C138.056 73.8203 135.582 76.3368 135.582 79.4411C135.582 82.5454 138.056 85.0619 141.108 85.0619Z" fill="white"/><g opacity="0.6"><path opacity="0.6" d="M160.884 51.203C160.738 51.203 160.593 51.203 160.593 51.203C159.72 51.0551 159.139 50.1676 159.284 49.1322C160.593 42.328 166.119 35.8198 166.41 35.5239C166.991 34.7844 168.155 34.7844 168.737 35.376C169.464 35.9677 169.464 37.151 168.882 37.7427C168.737 37.8906 163.647 43.9551 162.484 49.8718C162.338 50.7593 161.611 51.203 160.884 51.203Z" fill="url(#paint8_linear_914_48)"/></g><path opacity="0.2" d="M89.0603 174.098C91.3091 174.098 93.1322 172.244 93.1322 169.956C93.1322 167.669 91.3091 165.814 89.0603 165.814C86.8114 165.814 84.9883 167.669 84.9883 169.956C84.9883 172.244 86.8114 174.098 89.0603 174.098Z" fill="white"/><g opacity="0.4"><path opacity="0.6" d="M86.7131 172.657C85.1134 171.03 85.1134 168.368 86.7131 166.74C87.0039 166.444 87.2948 166.296 87.5856 166C87.0039 166.149 86.5676 166.444 86.1314 166.888C84.5317 168.515 84.5317 171.178 86.1314 172.805C87.4402 174.136 89.4761 174.432 91.0758 173.545C89.6215 174.136 87.8765 173.841 86.7131 172.657Z" fill="url(#paint9_linear_914_48)"/></g><path opacity="0.3" d="M90.4917 168.779C90.9736 168.779 91.3643 168.382 91.3643 167.892C91.3643 167.401 90.9736 167.004 90.4917 167.004C90.0098 167.004 89.6191 167.401 89.6191 167.892C89.6191 168.382 90.0098 168.779 90.4917 168.779Z" fill="white"/><path opacity="0.2" d="M110.302 172.035C112.551 172.035 114.374 170.18 114.374 167.892C114.374 165.604 112.551 163.75 110.302 163.75C108.053 163.75 106.23 165.604 106.23 167.892C106.23 170.18 108.053 172.035 110.302 172.035Z" fill="white"/><g opacity="0.4"><path opacity="0.6" d="M107.955 170.593C106.355 168.965 106.355 166.302 107.955 164.675C108.245 164.379 108.537 164.231 108.827 163.936C108.245 164.083 107.809 164.379 107.373 164.823C105.774 166.45 105.774 169.113 107.373 170.74C108.683 172.072 110.718 172.367 112.318 171.479C110.864 172.072 109.119 171.776 107.955 170.593Z" fill="url(#paint10_linear_914_48)"/></g><path opacity="0.3" d="M111.734 166.714C112.216 166.714 112.606 166.317 112.606 165.826C112.606 165.337 112.216 164.939 111.734 164.939C111.252 164.939 110.861 165.337 110.861 165.826C110.861 166.317 111.252 166.714 111.734 166.714Z" fill="white"/><path opacity="0.2" d="M99.798 181.662C101.485 181.662 102.852 180.271 102.852 178.556C102.852 176.84 101.485 175.449 99.798 175.449C98.1114 175.449 96.7441 176.84 96.7441 178.556C96.7441 180.271 98.1114 181.662 99.798 181.662Z" fill="white"/><g opacity="0.4"><path opacity="0.6" d="M98.0529 180.497C96.8896 179.313 96.8896 177.243 98.0529 176.059C98.1984 175.911 98.4892 175.764 98.6346 175.615C98.1984 175.764 97.9075 176.059 97.6166 176.355C96.4533 177.538 96.4533 179.61 97.6166 180.793C98.6346 181.829 100.089 181.976 101.398 181.237C100.234 181.681 98.9255 181.385 98.0529 180.497Z" fill="url(#paint11_linear_914_48)"/></g><path opacity="0.3" d="M100.822 177.508C101.143 177.508 101.403 177.243 101.403 176.917C101.403 176.59 101.143 176.324 100.822 176.324C100.501 176.324 100.24 176.59 100.24 176.917C100.24 177.243 100.501 177.508 100.822 177.508Z" fill="white"/><path opacity="0.2" d="M118.565 179.429C120.252 179.429 121.619 178.039 121.619 176.323C121.619 174.607 120.252 173.217 118.565 173.217C116.879 173.217 115.512 174.607 115.512 176.323C115.512 178.039 116.879 179.429 118.565 179.429Z" fill="white"/><g opacity="0.4"><path opacity="0.6" d="M116.821 178.265C115.658 177.081 115.658 175.01 116.821 173.827C116.966 173.679 117.257 173.531 117.403 173.383C116.966 173.531 116.675 173.827 116.385 174.123C115.221 175.306 115.221 177.377 116.385 178.561C117.403 179.596 118.857 179.744 120.166 179.005C119.003 179.449 117.693 179.152 116.821 178.265Z" fill="url(#paint12_linear_914_48)"/></g><path opacity="0.3" d="M119.592 175.293C119.914 175.293 120.174 175.028 120.174 174.701C120.174 174.374 119.914 174.109 119.592 174.109C119.271 174.109 119.01 174.374 119.01 174.701C119.01 175.028 119.271 175.293 119.592 175.293Z" fill="white"/><path opacity="0.2" d="M71.7365 172.634C75.4311 172.634 78.426 169.587 78.426 165.83C78.426 162.072 75.4311 159.025 71.7365 159.025C68.0419 159.025 65.0469 162.072 65.0469 165.83C65.0469 169.587 68.0419 172.634 71.7365 172.634Z" fill="white"/><g opacity="0.4"><path opacity="0.6" d="M67.957 170.104C65.3392 167.441 65.3392 163.151 67.957 160.489C68.3932 160.045 68.8295 159.749 69.4111 159.453C68.5387 159.749 67.8115 160.341 67.0844 160.933C64.4667 163.595 64.4667 167.885 67.0844 170.547C69.2657 172.766 72.6106 173.21 75.2282 171.582C72.756 172.618 69.8474 172.174 67.957 170.104Z" fill="url(#paint13_linear_914_48)"/></g><path opacity="0.3" d="M74.0715 163.749C74.8746 163.749 75.5257 163.087 75.5257 162.27C75.5257 161.453 74.8746 160.791 74.0715 160.791C73.2682 160.791 72.6172 161.453 72.6172 162.27C72.6172 163.087 73.2682 163.749 74.0715 163.749Z" fill="white"/><path opacity="0.2" d="M131.539 155.913C135.234 155.913 138.229 152.867 138.229 149.109C138.229 145.351 135.234 142.305 131.539 142.305C127.845 142.305 124.85 145.351 124.85 149.109C124.85 152.867 127.845 155.913 131.539 155.913Z" fill="white"/><g opacity="0.4"><path opacity="0.6" d="M127.574 153.4C124.956 150.738 124.956 146.449 127.574 143.786C128.01 143.342 128.447 143.046 129.029 142.75C128.155 143.046 127.429 143.638 126.702 144.23C124.084 146.892 124.084 151.182 126.702 153.844C128.883 156.063 132.228 156.507 134.846 154.879C132.373 155.915 129.609 155.472 127.574 153.4Z" fill="url(#paint14_linear_914_48)"/></g><path opacity="0.3" d="M133.837 147.049C134.641 147.049 135.291 146.386 135.291 145.569C135.291 144.752 134.641 144.09 133.837 144.09C133.034 144.09 132.383 144.752 132.383 145.569C132.383 146.386 133.034 147.049 133.837 147.049Z" fill="white"/><defs><radialGradient id="paint0_radial_914_48" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(184.413 27.2204) scale(64.9971 66.1101)"><stop stop-color="#FFEAFF" stop-opacity="0.6"/><stop offset="0.6807" stop-color="#A087C9"/><stop offset="1" stop-color="#10002F"/></radialGradient><radialGradient id="paint1_radial_914_48" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(167.394 97.7429) scale(182.033 196.916)"><stop stop-color="#FFEAFF" stop-opacity="0.6"/><stop offset="0.6807" stop-color="#A087C9"/><stop offset="1" stop-color="#10002F"/></radialGradient><linearGradient id="paint2_linear_914_48" x1="81.3838" y1="193.94" x2="108.26" y2="30.9222" gradientUnits="userSpaceOnUse"><stop stop-color="#81FFFF"/><stop offset="0.6202" stop-color="white" stop-opacity="0"/></linearGradient><linearGradient id="paint3_linear_914_48" x1="151.713" y1="56.2714" x2="83.4495" y2="117.851" gradientUnits="userSpaceOnUse"><stop offset="0.2888" stop-color="white"/><stop offset="0.7796" stop-color="white" stop-opacity="0"/></linearGradient><linearGradient id="paint4_linear_914_48" x1="17.1221" y1="150.914" x2="171.607" y2="150.914" gradientUnits="userSpaceOnUse"><stop stop-color="#0002E9"/><stop offset="0.9952" stop-color="#FF00C7"/></linearGradient><linearGradient id="paint5_linear_914_48" x1="178.918" y1="118.581" x2="93.4867" y2="197.959" gradientUnits="userSpaceOnUse"><stop offset="0.2888" stop-color="white"/><stop offset="0.7796" stop-color="white" stop-opacity="0"/></linearGradient><linearGradient id="paint6_linear_914_48" x1="17.1221" y1="150.914" x2="99.7705" y2="150.914" gradientUnits="userSpaceOnUse"><stop stop-color="#000292"/><stop offset="0.9952" stop-color="#7D00C7"/></linearGradient><linearGradient id="paint7_linear_914_48" x1="17.2258" y1="118.947" x2="171.503" y2="118.947" gradientUnits="userSpaceOnUse"><stop stop-color="#000292"/><stop offset="0.9952" stop-color="#BE00C7"/></linearGradient><linearGradient id="paint8_linear_914_48" x1="168.973" y1="34.8036" x2="157.609" y2="52.9581" gradientUnits="userSpaceOnUse"><stop offset="0.2888" stop-color="white"/><stop offset="0.7796" stop-color="white" stop-opacity="0"/></linearGradient><linearGradient id="paint9_linear_914_48" x1="84.9275" y1="170.121" x2="91.0803" y2="170.121" gradientUnits="userSpaceOnUse"><stop offset="0.2888" stop-color="white"/><stop offset="0.7796" stop-color="white" stop-opacity="0"/></linearGradient><linearGradient id="paint10_linear_914_48" x1="106.155" y1="168.028" x2="112.307" y2="168.028" gradientUnits="userSpaceOnUse"><stop offset="0.2888" stop-color="white"/><stop offset="0.7796" stop-color="white" stop-opacity="0"/></linearGradient><linearGradient id="paint11_linear_914_48" x1="96.6623" y1="178.604" x2="101.282" y2="178.604" gradientUnits="userSpaceOnUse"><stop offset="0.2888" stop-color="white"/><stop offset="0.7796" stop-color="white" stop-opacity="0"/></linearGradient><linearGradient id="paint12_linear_914_48" x1="115.43" y1="176.371" x2="120.049" y2="176.371" gradientUnits="userSpaceOnUse"><stop offset="0.2888" stop-color="white"/><stop offset="0.7796" stop-color="white" stop-opacity="0"/></linearGradient><linearGradient id="paint13_linear_914_48" x1="65.0544" y1="165.988" x2="75.1024" y2="165.988" gradientUnits="userSpaceOnUse"><stop offset="0.2888" stop-color="white"/><stop offset="0.7796" stop-color="white" stop-opacity="0"/></linearGradient><linearGradient id="paint14_linear_914_48" x1="124.728" y1="149.279" x2="134.775" y2="149.279" gradientUnits="userSpaceOnUse"><stop offset="0.2888" stop-color="white"/><stop offset="0.7796" stop-color="white" stop-opacity="0"/></linearGradient></defs></svg>',
    usdc: '<svg viewBox="0 0 2000 2000" width="26" height="26" aria-label="USDC"><path fill="#2775ca" d="M1000 2000c554.17 0 1000-445.83 1000-1000S1554.17 0 1000 0 0 445.83 0 1000s445.83 1000 1000 1000z"/><path fill="#fff" d="M1275 1158.33c0-145.83-87.5-195.83-262.5-216.66-125-16.67-150-50-150-108.34s41.67-95.83 125-95.83c75 0 116.67 25 137.5 87.5 4.17 12.5 16.67 20.83 29.17 20.83h66.66c16.67 0 29.17-12.5 29.17-29.16v-4.17c-16.67-91.67-91.67-162.5-187.5-170.83v-100c0-16.67-12.5-29.17-33.33-33.34h-62.5c-16.67 0-29.17 12.5-33.34 33.34v95.83c-125 16.67-204.16 100-204.16 204.17 0 137.5 83.33 191.66 258.33 212.5 116.67 20.83 154.17 45.83 154.17 112.5s-58.34 112.5-137.5 112.5c-108.34 0-145.84-45.84-158.34-108.34-4.16-16.66-16.66-25-29.16-25h-70.84c-16.66 0-29.16 12.5-29.16 29.17v4.17c16.66 104.16 83.33 179.16 220.83 200v100c0 16.66 12.5 29.16 33.33 33.33h62.5c16.67 0 29.17-12.5 33.34-33.33v-100c125-20.84 208.33-108.34 208.33-220.84z"/><path fill="#fff" d="M787.5 1595.83c-325-116.66-491.67-479.16-370.83-800 62.5-175 200-308.33 370.83-370.83 16.67-8.33 25-20.83 25-41.67V325c0-16.67-8.33-29.17-25-33.33-4.17 0-12.5 0-16.67 4.16-395.83 125-612.5 545.84-487.5 941.67 75 233.33 254.17 412.5 487.5 487.5 16.67 8.33 33.34 0 37.5-16.67 4.17-4.16 4.17-8.33 4.17-16.66v-58.34c0-12.5-12.5-29.16-25-37.5zM1229.17 295.83c-16.67-8.33-33.34 0-37.5 16.67-4.17 4.17-4.17 8.33-4.17 16.67v58.33c0 16.67 12.5 33.33 25 41.67 325 116.66 491.67 479.16 370.83 800-62.5 175-200 308.33-370.83 370.83-16.67 8.33-25 20.83-25 41.67V1700c0 16.67 8.33 29.17 25 33.33 4.17 0 12.5 0 16.67-4.16 395.83-125 612.5-545.84 487.5-941.67-75-237.5-258.34-416.67-487.5-491.67z"/></svg>',
  };
  const Mark = ({ id, big }) => (
    <span style={{ height:big?58:30, minWidth:big?66:38, padding:big?'0 13px':'0 7px', borderRadius:big?13:8, background:T.snow, border:`1px solid ${T.line200}`, display:'inline-flex', alignItems:'center', justifyContent:'center', overflow:'hidden', flex:'none' }}>
      <span style={{ display:'inline-flex', alignItems:'center', transform:big?'scale(1.45)':'scale(0.75)' }} dangerouslySetInnerHTML={{ __html: LOGOS[id] }} />
    </span>
  );
  const fiatTiles = [
    { name:tr('payments.creditName', 'Credit / Debit Card'), marks:['visa','mc'],
      desc:tr('payments.creditDesc', 'Sell dVPN access with Visa, Mastercard, Amex and more — through any payment processor you choose.') },
    { name:tr('payments.walletName', 'Apple Pay / Google Pay'), marks:['applepay','googlepay'],
      desc:tr('payments.walletDesc', 'Charge for your dVPN with one-tap Apple Pay or Google Pay checkout, on the web or in your app.') },
    { name:tr('payments.stripeName', 'Stripe'), marks:['stripe'],
      desc:tr('payments.stripeDesc', 'Bill your dVPN through Stripe Checkout or Billing — payment confirmed by webhook, access granted in the same flow.') },
    { name:tr('payments.cryptoName', 'Digital Currencies'), marks:['btc','sol','zec'],
      desc:tr('payments.cryptoDesc', 'Accept BTC, SOL, ZEC or any other chain for dVPN access, via the processor of your choice.') },
    { name:tr('payments.freeName', 'Free VPN'), marks:['free'],
      desc:tr('payments.freeDesc', 'Grant free dVPN access on any condition you set — ads watched, offers completed, referrals made.') },
  ];
  return (
    <section style={{ background:'linear-gradient(180deg, #fbfbfb 0%, #f6f8fc 78%, #edf1f9 100%)', ...atomStyles.section, paddingTop:0 }}>
      <div style={{ ...atomStyles.container, display:'flex', flexDirection:'column', gap:'clamp(28px,4vw,44px)' }}>
        {/* Focus hero — copied from the Plan Manager Payment page (fiat rail view) */}
        <div style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:16 }}>
        <StepTag n={3} light />
        <div className="sn-card-light" style={{ background:T.white, border:`1px solid ${T.line200}`, borderRadius:18, padding:'clamp(32px,5vw,46px) clamp(20px,4vw,40px)', display:'flex', flexDirection:'column', alignItems:'center', textAlign:'center', gap:18, alignSelf:'stretch' }}>
          <div style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:10, flexWrap:'wrap' }}>
            <Mark big id="visa" /><Mark big id="applepay" /><Mark big id="stripe" /><Mark big id="btc" />
          </div>
          <h2 style={{ ...atomStyles.h1Light, fontSize:'clamp(26px,3.2vw,38px)', margin:0, maxWidth:780 }}>{tr('payments.heading','Integrate Any Payment Rails')}</h2>
          <p style={{ fontFamily:T.fontBody, fontSize:15, lineHeight:1.65, color:T.onLight50, maxWidth:760, margin:0 }}>{tr('payments.subhead','Accept fiat payments, crypto payments, or set any conditional trigger to authorize a user for free VPN services.')}</p>
        </div>
        </div>
        {/* Fiat rail tiles — informational only, not clickable */}
        <div style={{ display:'grid', gridTemplateColumns:isMobile?'1fr':'repeat(5,1fr)', gap:14 }}>
          {fiatTiles.map(t => (
            <div key={t.name}
               style={{ background:T.white, borderRadius:14, padding:'22px 18px', border:`1px solid ${T.line200}`, display:'flex', flexDirection:'column', alignItems:'center', textAlign:'center', gap:10 }}>
              <div style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:6, flexWrap:'nowrap', height:32 }}>
                {t.marks.map(m => <Mark key={m} id={m} />)}
              </div>
              <div style={{ fontFamily:T.fontHeading, fontWeight:600, fontSize:15, lineHeight:'20px', color:T.onLight80 }}>{t.name}</div>
              <div style={{ fontFamily:T.fontBody, fontSize:12.5, lineHeight:'19px', color:T.onLight50, flex:1 }}>{t.desc}</div>
            </div>
          ))}
        </div>
        <div style={{ display:'flex', alignItems:'stretch', flexWrap:'wrap', gap:'clamp(12px,2vw,28px)', justifyContent:'center' }}>
          <BtnPrimary light href="https://plan.sentinel.co/pricing">{tr('payments.cta','Integrate Any Payment Rail into your dVPN')}</BtnPrimary>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, {
  SentinelMark, ChipDark, ChipLight, BtnPrimary, BtnGhost, atomStyles, CodeWindow,
  Header, Hero, StatsStrip, ResilienceCards, StepsSection, SDKSection, PaymentRailsSection,
});
