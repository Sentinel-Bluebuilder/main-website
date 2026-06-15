import { e as createComponent, r as renderTemplate, k as renderSlot, l as renderHead, n as defineScriptVars, g as addAttribute, h as createAstro, o as renderComponent } from '../chunks/astro/server_BvRpWg5T.mjs';
import 'piccolore';
import 'clsx';
/* empty css                                 */
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import '../chunks/globals_DHLWSNFs.mjs';
import * as React$1 from 'react';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const i18n = Astro2.locals.i18n;
  const {
    title = i18n.title,
    description = i18n.description
  } = Astro2.props;
  const { locale, dir, ogImageAlt } = i18n;
  const SITE = "https://sentinel.co/";
  const canonical = new URL(Astro2.url.pathname, Astro2.site ?? SITE).toString();
  const ogImage = new URL("/assets/img/og-cover.png", Astro2.site ?? SITE).toString();
  return renderTemplate(_a || (_a = __template(["<html", "", '> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>', '</title><meta name="description"', '><link rel="canonical"', '><!-- OpenGraph --><meta property="og:type" content="website"><meta property="og:site_name" content="Sentinel"><meta property="og:title"', '><meta property="og:description"', '><meta property="og:url"', '><meta property="og:image"', '><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630"><meta property="og:image:alt"', '><!-- Twitter Card --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:site" content="@sentinelp2p"><meta name="twitter:title"', '><meta name="twitter:description"', '><meta name="twitter:image"', `><meta name="theme-color" content="#0156FC"><!-- Seed the active locale before the React island hydrates, so the client's
         globals bootstrap (lib/globals.ts) re-applies the same locale the server
         rendered with \u2014 keeping SSR markup and hydration in sync. --><script>(function(){`, "\n      window.__locale = locale;\n    })();<\/script>", '</head> <body> <a class="sn-skip" href="#main">Skip to content</a> ', ' <!-- Ambient music: OFF by default, pure intent toggle. --> <div id="sn-music"> <span id="sn-music-label" aria-hidden="true">Sound &middot; off</span> <button id="sn-music-btn" type="button" aria-pressed="false" aria-label="Unmute ambient music" title="Unmute ambient music"> <svg class="sn-music-play" width="16" height="14" viewBox="0 0 16 14" fill="none" aria-hidden="true"><path d="M8.2 1.1a.7.7 0 0 1 1.1.6v10.6a.7.7 0 0 1-1.1.6L4.6 10H2.4A1.4 1.4 0 0 1 1 8.6V5.4C1 4.6 1.6 4 2.4 4h2.2l3.6-2.9z" fill="currentColor"></path><path d="M11.2 4.8 14.8 9.2M14.8 4.8 11.2 9.2" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"></path></svg> <span class="sn-music-bars" aria-hidden="true"><i></i><i></i><i></i></span> </button> <audio id="sn-music-audio" src="/assets/media/ambient-music.mp3" loop preload="auto"></audio> </div> <script src="/scripts/music.js"><\/script> </body> </html>'])), addAttribute(locale, "lang"), addAttribute(dir, "dir"), title, addAttribute(description, "content"), addAttribute(canonical, "href"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(canonical, "content"), addAttribute(ogImage, "content"), addAttribute(ogImageAlt, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(ogImage, "content"), defineScriptVars({ locale }), renderHead(), renderSlot($$result, $$slots["default"]));
}, "C:/Users/Connect/AppData/Local/Temp/main-website-pr/src/layouts/Layout.astro", void 0);

const T = window.SENTINEL;
const L = window.SENTINEL_LINKS;
const { useState, useEffect, useRef } = React;
const tr$2 = (k, f) => typeof window !== "undefined" && window.T ? window.T(k, f) : f != null ? f : k;
function useIsMobile$1(bp = 768) {
  const [m, setM] = useState(typeof window !== "undefined" ? window.innerWidth <= bp : false);
  useEffect(() => {
    const fn = () => setM(window.innerWidth <= bp);
    fn();
    window.addEventListener("resize", fn, { passive: true });
    return () => window.removeEventListener("resize", fn);
  }, [bp]);
  return m;
}
window.useIsMobile = useIsMobile$1;
function SentinelMark$1({ size = 30, color = "#0156FC" }) {
  const w = Math.round(size * (200 / 215));
  return /* @__PURE__ */ jsxs("svg", { width: w, height: size, viewBox: "50 15 200 215", fill: "none", "aria-hidden": "true", children: [
    /* @__PURE__ */ jsx("path", { d: "M235.636 23.9037C238.064 23.9037 240.026 25.8656 240.026 28.2934V98.2757V102.623C240.082 111.247 240.153 122.017 238.643 133.436C236.892 146.747 233.42 157.573 228.085 166.536C210.681 195.712 179.416 217.096 150.071 219.947C149.93 219.961 149.789 219.975 149.648 219.975C149.506 219.975 149.365 219.975 149.224 219.947C119.851 217.068 88.586 195.698 71.2104 166.536C65.8467 157.573 62.4026 146.733 60.6524 133.436C59.1562 122.017 59.2267 111.262 59.2973 102.623V98.2757L59.3114 28.2934C59.3114 25.8656 61.2734 23.9037 63.7012 23.9037H235.636ZM235.636 15.1523H63.6871C56.4461 15.1523 50.546 21.0524 50.546 28.2934V102.581C50.4613 110.951 50.3766 122.455 51.9575 134.565C53.8772 149.09 57.7023 161.003 63.673 171.01C72.8477 186.396 85.6642 199.974 100.753 210.307C115.983 220.723 132.399 227.061 148.25 228.628C148.702 228.684 149.168 228.713 149.633 228.713C150.099 228.713 150.551 228.684 151.017 228.628C166.854 227.061 183.27 220.738 198.5 210.321C213.589 199.989 226.419 186.396 235.608 171.01C241.593 160.989 245.418 149.076 247.323 134.58C248.904 122.582 248.834 111.516 248.777 102.609V98.2475V28.3075C248.777 21.0524 242.877 15.1665 235.636 15.1665V15.1523Z", fill: color }),
    /* @__PURE__ */ jsx("path", { d: "M223.698 112.507C224.982 113.481 226.817 112.564 226.817 110.955L226.775 102.105V39.0386C226.789 37.9518 225.914 37.0767 224.827 37.0767H74.5022C73.4154 37.0767 72.5402 37.9518 72.5402 39.0386V77.8267C72.5402 79.4923 72.9213 81.1296 73.6694 82.6117C74.4175 84.0938 75.4903 85.3924 76.8312 86.3804L189.907 170.943C190.895 171.677 190.965 173.103 190.062 173.95C187.973 175.926 185.771 177.775 183.484 179.525C182.779 180.062 181.819 180.062 181.127 179.54L75.6596 100.51C74.3752 99.5497 72.5402 100.453 72.5402 102.076C72.5402 115.627 71.3405 140.907 82.7313 160.273C95.4489 181.911 117.285 198.99 139.756 204.523C143.002 205.314 146.249 205.878 149.495 206.175C149.622 206.189 149.749 206.189 149.862 206.175C164.57 204.848 179.532 198.129 192.377 187.98C195.595 185.425 198.686 182.673 201.622 179.723C207.409 173.894 212.462 167.372 216.626 160.301C220.395 153.907 222.78 146.863 224.291 139.82C224.63 138.295 224.912 136.757 225.166 135.204C225.829 131.167 224.192 127.088 220.931 124.646L125.189 53.0549C123.693 51.9257 124.469 49.5402 126.375 49.5402H139.05C139.474 49.5402 139.883 49.6814 140.236 49.9354L223.712 112.521L223.698 112.507Z", fill: color })
  ] });
}
const atomStyles = {
  container: { maxWidth: 1320, margin: "0 auto", padding: "0 clamp(16px, 2.5vw, 24px)", width: "100%", boxSizing: "border-box" },
  section: { width: "100%", boxSizing: "border-box", paddingTop: "clamp(56px,8vw,120px)", paddingBottom: "clamp(56px,8vw,120px)" },
  sectionHead: { display: "flex", flexDirection: "column", gap: 22, maxWidth: 900 },
  h1Dark: { fontFamily: T.fontHeading, fontWeight: 700, fontSize: "clamp(31px, 5vw, 48px)", lineHeight: 1.12, color: T.onDark80, margin: 0, letterSpacing: "-0.005em" },
  h1Light: { fontFamily: T.fontHeading, fontWeight: 700, fontSize: "clamp(31px, 5vw, 48px)", lineHeight: 1.12, color: T.onLight80, margin: 0, letterSpacing: "-0.005em" },
  leadDark: { fontFamily: T.fontBody, fontSize: "clamp(16px, 1.6vw, 20px)", lineHeight: 1.5, color: T.onDark, margin: 0 },
  leadLight: { fontFamily: T.fontBody, fontSize: "clamp(16px, 1.6vw, 20px)", lineHeight: 1.5, color: T.onLight80, margin: 0 }
};
function ChipDark({ children }) {
  return /* @__PURE__ */ jsx("span", { style: { display: "inline-flex", alignItems: "center", padding: "9px 18px", borderRadius: 28, background: "rgba(1,86,252,0.20)", color: "rgba(234,234,234,0.9)", border: "1px solid rgba(255,255,255,0.06)", fontFamily: T.fontBody, fontWeight: 500, fontSize: 16 }, children });
}
function ChipLight({ children }) {
  return /* @__PURE__ */ jsx("span", { style: { display: "inline-flex", alignItems: "center", padding: "9px 18px", borderRadius: 28, background: "transparent", color: "rgba(0,0,0,0.8)", border: "1px solid rgba(0,0,0,0.06)", fontFamily: T.fontBody, fontWeight: 500, fontSize: 16 }, children });
}
function BtnPrimary$1({ children, href = "#", light, style }) {
  return /* @__PURE__ */ jsx("a", { href, className: "sn-btn-primary", style: { borderColor: light ? "#dce7fa" : "#d9d9d9", ...style }, children });
}
function BtnGhost({ children, dark = true, href = "#" }) {
  return /* @__PURE__ */ jsxs("a", { href, className: dark ? "sn-btn-ghost-dark" : "sn-btn-ghost-light", children: [
    children,
    " ",
    /* @__PURE__ */ jsx("span", { "aria-hidden": "true", children: "→" })
  ] });
}
function CodeWindow() {
  return /* @__PURE__ */ jsxs("div", { style: { background: T.graphite750, borderRadius: 30, overflow: "hidden", border: "1px solid rgba(255,255,255,0.06)", display: "flex", flexDirection: "column", flex: 1, width: "100%" }, children: [
    /* @__PURE__ */ jsxs("div", { style: { height: 44, padding: "0 18px", display: "flex", alignItems: "center", gap: 10, background: "#161618", borderBottom: "0.725px solid #252527", flexShrink: 0 }, children: [
      [0, 1, 2].map((i) => /* @__PURE__ */ jsx("span", { style: { width: 11, height: 11, borderRadius: "50%", background: "#2a2a2c", display: "block" } }, i)),
      /* @__PURE__ */ jsx("span", { style: { flex: 1, textAlign: "center", fontFamily: T.fontBody, fontSize: 12, color: "rgba(255,255,255,0.5)" }, children: "my-dvpn-app.ts" })
    ] }),
    /* @__PURE__ */ jsxs("pre", { className: "sn-code-pre", style: { margin: 0, padding: "22px clamp(16px,3vw,28px)", fontFamily: T.fontMono, fontSize: 13.5, lineHeight: "24px", color: "rgba(255,255,255,0.85)", whiteSpace: "pre", overflowX: "auto", flex: 1 }, children: [
      /* @__PURE__ */ jsx("span", { style: { color: "#6A80CF" }, children: "import" }),
      " { SentinelClient } ",
      /* @__PURE__ */ jsx("span", { style: { color: "#6A80CF" }, children: "from" }),
      " '@sentinel/sdk';\n\n",
      /* @__PURE__ */ jsx("span", { style: { color: "#6A80CF" }, children: "const" }),
      " client = ",
      /* @__PURE__ */ jsx("span", { style: { color: "#6A80CF" }, children: "new" }),
      ` SentinelClient({
  protocol: 'wireguard',   `,
      /* @__PURE__ */ jsx("span", { style: { color: "#757C75" }, children: `// or 'v2ray', 'openvpn'` }),
      `
  plan:     'pro-monthly', `,
      /* @__PURE__ */ jsx("span", { style: { color: "#757C75" }, children: `// your Plan Manager plan id` }),
      `
});

`,
      /* @__PURE__ */ jsx("span", { style: { color: "#757C75" }, children: `// Pick the best node, connect, and route traffic.` }),
      `
`,
      /* @__PURE__ */ jsx("span", { style: { color: "#6A80CF" }, children: "const" }),
      " session = ",
      /* @__PURE__ */ jsx("span", { style: { color: "#6A80CF" }, children: "await" }),
      ` client.connect({ region: 'auto' });
`,
      `console.log('Connected via', session.node.country);`
    ] })
  ] });
}
const NAV_LABEL_KEYS = {
  Explore: "nav.explore",
  dVPN: "nav.dvpn",
  Build: "nav.build",
  More: "nav.more"
};
const NAV_MENUS = {
  Explore: {
    cols: 2,
    width: 660,
    items: [
      { tk: "nav.explore.statsTitle", dk: "nav.explore.statsDesc", title: "Network Statistics", desc: "Monitor real-time network performance and metrics.", href: L.stats },
      { tk: "nav.explore.dashboardTitle", dk: "nav.explore.dashboardDesc", title: "Node Dashboard", desc: "Manage and monitor your node operations.", href: L.nodes },
      { tk: "nav.explore.explorerTitle", dk: "nav.explore.explorerDesc", title: "Explorer", desc: "Search and explore network transactions.", href: L.explorer },
      { tk: "nav.explore.ecosystemTitle", dk: "nav.explore.ecosystemDesc", title: "Ecosystem", desc: "Discover apps and services in our ecosystem.", href: L.dapps }
    ]
  },
  dVPN: {
    cols: 2,
    width: 660,
    items: [
      { tk: "nav.dvpn.downloadTitle", dk: "nav.dvpn.downloadDesc", title: "Download Apps", desc: "Sentinel Shield, Norse, Valt, Meile and more.", href: L.dapps },
      { tk: "nav.dvpn.coverageTitle", dk: "nav.dvpn.coverageDesc", title: "Coverage", desc: "110+ Countries, 430+ Cities.", href: L.nodeMap },
      { tk: "nav.dvpn.learnTitle", dk: "nav.dvpn.learnDesc", title: "Learn", desc: "Explore guides, documentation, and more.", href: L.docs },
      { tk: "nav.dvpn.runNodeTitle", dk: "nav.dvpn.runNodeDesc", title: "Run a Node", desc: "Support the network and earn rewards.", href: L.hostNode },
      { tk: "nav.dvpn.buildTitle", dk: "nav.dvpn.buildDesc", title: "Build", desc: "Create your own applications on the network.", href: L.sdkDocs },
      { tk: "nav.dvpn.earnTitle", dk: "nav.dvpn.earnDesc", title: "Earn", desc: "Monetize your bandwidth and more.", href: L.nodeEarnings }
    ]
  },
  Build: {
    cols: 2,
    width: 680,
    items: [
      { tk: "nav.build.planManagerTitle", dk: "nav.build.planManagerDesc", title: "Plan Manager", desc: "Turn raw bandwidth into priced subscription plans.", href: L.planManager },
      { tk: "nav.build.sdkTitle", dk: "nav.build.sdkDesc", title: "SDK", desc: "Native bindings for iOS, Android, Web & desktop.", href: L.sdkDocs },
      { tk: "nav.build.paymentsTitle", dk: "nav.build.paymentsDesc", title: "Configure Payments", desc: "Stripe, USDC, BTC, on-ramps — wire any gateway per plan.", href: L.planManager },
      { tk: "nav.build.x402Title", dk: "nav.build.x402Desc", title: "x402 Payments", desc: "Per-byte agentic payments — no API keys, no accounts.", href: L.x402 },
      { tk: "nav.build.protocolsTitle", dk: "nav.build.protocolsDesc", title: "VPN Protocols", desc: "WireGuard, V2Ray, OpenVPN — pick what your users need.", href: L.vpnProtocols },
      { tk: "nav.build.docsTitle", dk: "nav.build.docsDesc", title: "Developer Docs", desc: "API reference, quickstarts, and architecture guides.", href: L.docs }
    ]
  },
  More: {
    cols: 1,
    width: 380,
    items: [
      { tk: "nav.more.docsTitle", dk: "nav.more.docsDesc", title: "dVPN Docs", desc: "Clients, nodes, protocols, FAQs.", href: L.docs },
      { tk: "nav.more.contactTitle", dk: "nav.more.contactDesc", title: "Contacts Us", desc: "Question or support — get in touch.", href: L.telegram }
    ]
  }
};
function DropdownPanel({ menu }) {
  return /* @__PURE__ */ jsx("div", { style: {
    width: menu.width,
    boxSizing: "border-box",
    background: "#0c0c0c",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: 24,
    padding: 24,
    boxShadow: "0 30px 70px -20px rgba(0,0,0,0.75)",
    opacity: 0.9
  }, children: /* @__PURE__ */ jsx("div", { style: {
    display: "grid",
    gridTemplateColumns: `repeat(${menu.cols}, 1fr)`,
    gap: "8px 16px"
  }, children: menu.items.map((it) => /* @__PURE__ */ jsxs("a", { href: it.href || "#", target: "_blank", rel: "noopener", className: "sn-dd-item", children: [
    /* @__PURE__ */ jsx("div", { className: "sn-dd-title", children: it.tk ? tr$2(it.tk, it.title) : it.title }),
    /* @__PURE__ */ jsx("div", { className: "sn-dd-desc", children: it.dk ? tr$2(it.dk, it.desc) : it.desc })
  ] }, it.title)) }) });
}
const BUY_LOGOS = {
  mexc: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAD6APoDASIAAhEBAxEB/8QAHAABAAICAwEAAAAAAAAAAAAAAAYHBQgCAwQB/8QAPBAAAQMCAgYGCAUEAwEAAAAAAAECAwQFBhEHEiExgZETFUFRYXEUIiNCUnKhsSQyM2LBFlOCkjRzsuH/xAAbAQEAAgMBAQAAAAAAAAAAAAAABQYDBAcBAv/EADERAAICAQIEAwYGAwEAAAAAAAABAgMEEUEFEiExBhNxFIGRscHhIiNRYdHwMqHxM//aAAwDAQACEQMRAD8AvQAH0eAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHx72xsc97kaxqKrnOXJERO1SqcU6UJnyyUmH1SOJuxaxzc3O+RF3J4rt8jbw8G7Lny1L1eyMN+RCmOs2Ws97Y26z3NY3vcuSfU4xzRTbIpY5PkejvsazVddV18qy1lVNUSLvdK9XL9TpjkfC9HxOcx6bnMXVVORPLwy+XrZ19PuRr4stekenqbRApHDmkm62mVkNxe+votyo9c5WJ+13b5L9C5LdcKW60EVbRTNlp5Uza5Psqdip3ELncOuw5aWLVPs12N/Hyq71+Hv+h6gAaBsgA+KqIiqqoiJtVVAPpxe9sbdaRzWN73KiJ9SrsWaTpElkocPuajW+q+sVM81/Yi9n7l4d5W1XW1VfKstZUzVEi73SvVy/Un8TgF90eex8q+L+BG3cSrrfLFamzMc0U36UscnyPR32OZq7HI+F6Pie6N6bnMXVVOKEyw9pIvFpkZFXSOuFHuVsq+0an7XfwufAyZHhy6EeaqXN+3b+T5q4pCT0mtC8AeO13SjvNvjrqGZJYJNy7lavaip2KncewrsouLcZLRok001qgADw9AAAAAAAAAAAAAAAAAAABxkkZDE+SRyNjY1XOcvYibVUArXSriN8EUVhpnq1Zm9LUqnwZ+q3jlmvkhU5kb9dX3u+1lxfn7eRVYi+61NjU5Ihjjo/DcRYuNGvTr3fqVbKud1rltsAAb5rAmejzFDrHeW0VRJ+ArHI1yKuyN+5rv4Xw8iGAwZOPDIqlVPszLVbKqanHY2kBG8DX7r/AAzBLI/WqoPYT96uRNi8UyXmSQ5pdVKmyVcu66FrrmpxUluCt9KGJ30lO2xUkitlnbr1LmrtbGu5vHt8PMsGtrIbfQz1lQ7VhgjWR6+CIa3Xa5TXi7VVwqP1J5FeqfCnYnBMk4EzwHCV9/mzX4Y/Pb+fgaHEcjy6+SPd/I8YALyV4AAAl+j3Eb7JiCOmlkX0KtckUiKuxrl2Nfz2L4KXqatouS5ouS96GxWE7x17hmjrXOzm1Ojm/wCxuxee/iVDxHiKMo5EV36P6E3wu7VOp7djNAArBLgAAAAAAAAAAAAAAAAAAhmku89WYWfSxuynr3dCmW9Gb3ryyTiTMorSReetcVywxuzgok6BmW5Xb3rz2cCV4Ni+0Zcde0er93b/AGaedd5dL07voRAAHQSsgAAAAAEy0bX3qjEraWV+VNXIkLs12Nf7i89nEvI1cRVaqKiqiptRU7DYPDGI4bvhOK6VEiNdDGrapV91zE9ZeKbeJUPEWG1OORBd+j9dib4Xf+F1vbqRbSvfegoYLJC/16jKafLsYi+qnFdv+JUhkb7dpb7e6u4y5osz82tX3WJsanBMjHFg4biey40a9+79f70I3Ku861y22AAN81gAAAWRolvPQ3Crs8jvUqG9NEi/G38ycW/+Stz12u4S2m60twh/Up5EkRO/LenFM04mnn43tOPKrdrp67GfGt8q1TNmQdVLUxVlJDVQO1oZmNkYveipmh2nNWmnoy1p69UAAAAAAAAAAAAAAAAAAYvEV2bYsP1txVU1oo/Zova9djU5qa4ve6R7nvcrnOXNXL2r3lm6W7xrSUdlidsanpEyJ3rmjE5ZrxQrAvHh/F8rG8195fLYr/Erue3kXZAAE8RoAAAAAAMjR3qsobRX2yGTKnrdTpU+Vc9nnuXwMcWJhXBqXXAV1qnxotVVf8RVTanR7dnzOzTgaedfTTWpXdtV8dfp39xsY9c7JNQ76MrsBd+1MvBQbhrgAAAAAAAAF0aLLz6dh2S3SOzloX5Nz7Y3bU5LmnInhQOArz1LiymfI7Vp6j8PN3ZOXYvB2X1L+KBxvF8jLbXaXX+f9ll4fd5lKT7roAARBugAAAAAAAAAAAA4SyMhhfLK5GxsarnuXsREzVTmQvSbeercLOpI3ZT17uiTLejE2vX7JxM+NRK+6NUd2Y7bFXBzexT98uj73fKy4yZ+3kVzUX3W7mpwTIx4B0yuEa4KEeyKnKTk22AAfZ8gAAAAAHooaOa4V8FHTpnNPI2NieKrkbJ2+iitlupqKnTKKnjbGzgm/wDkqbRRZvSrzPdpW+zo26kar2yOT+G580LiKV4hyvMvVK7R+b+xP8Lp5a3Y9yg8f2XqbFdSkbNWnqfxEXciOVdZODs/oRcuvShZusMNpXxtzmoHa65b1jXY7lsXgpShYeD5XtGLFvuuj932IzOp8q5pdn1AAJQ0wAAAAAAbEYRvHXuGKOtc7ObV6Ob527F57F4mu5Y+ia89BcqqzyO9Spb0sSL8bd6cW/8Akg+PYvnY3mLvHr7t/wCfcSPDbuS3lfZlugAopYQAAAAAAAAAAAAUTpGvPW2LJoo361PRJ6OzLcqp+ZeezgXDiS7tsWHq24Kqa8ceUSL2vXY1Of2NcXOc9yucquc5c1Ve1Sz+HMXmnLIe3RfX+/uRPFLtIqtb9T4AC3kGAAAAAAACS4EsvXeK6WKRutTwL083dqt3JxXJDFfdGmqVkuyWp91wdk1FblwYNsvUWFqSkc3Kd7emm+d21U4JknAz4BzG2yVs3ZLu3qW2EVCKitjrnhjqaeWCZutFKxWPava1UyU1tvNsks15q7dLnrU8isRfiTsXimSmyxVOlqy6k9Jeom7JE9HmVO9M1avLNOCE34fyvKyHU+0vmv6yP4lTz1c67orEAF4K+AAAAAAD12yvltVzpq+BfaU8jZE8cl2pxTNOJ5AfMoqUXF9mexbi9UbPUlVFW0cNVA7WhmjbIxfBUzQ7iBaK7x6bh6S2yOzloX+qi/23bU5LmnInpzPLx3j3yqez/wCFsosVtamtwADXMoAAAAAAACJns7wCqdLd51p6OzRu2MT0iZE71zRics14oViZnFla64YsulS5c0Woc1vytXVT6IYY6Rw3HWPiwhvpq/VlWyrXZdKQABvGsAAAAAAC6NFlm9Bw9JcpG5TVzs259kbc0Tmua8io7TbpbvdqW3w/nqJEYi9ydq8EzU2TpqeKkpYqaBurDCxI2J3NRMkK14jyuWqNC7y6v0X3+RLcLp1m7HsdoAKcTgMXiO0NvuH6y3Kia0secar2PTa1eaIZQH1Ccq5Kce66nkoqScXuauOY5j3Me1Wvaqo5q9ipvQ+Ew0k2bqrFUk8bcoK5OnbluR256c9vEh503FvjfTG2O6KlbW65uD2AAM5jAAAAAAJLgS89S4rpZHu1YKhfR5u7VduXguSl/mre3sXJexTZSxVi3HD9vrHLm6anY93nlt+uZUPEmOlOFy36P6E3wq1uMq3sZAAFYJcAAAAAAH1v5k80PgANZ7tG6K9V8bvzNqZEX/ZTxkt0jWt1txjUyI3KKsRKhi+K7HJ/si8yJHTsS1W0Qmt0ipXQcLJRf6gAGwYgAAAAcmMdI9rGNVz3KiNam9VXcgb0PSydEtl6Wsq7zK31YU6CFV+Jdrl4Jkn+RbJiMMWdLDh2jt+SdJGzWlVO2Rdrvrs4GXOb8SyvacmVm3Zei/upacWnyqlHcAA0TYAAAIfpIs3WuFZJ425z0K9O3Lerdz05beBRZtG5jZGOY9qOY5FRzV7UXehrjiSzvsOIKy3uRdSN+cTl96NdrV5fYt3hvK1jLHk+3VfX+/uQvFKdGrV6GKABaCHAAAAAABsRg2N0WC7O12/0Vq881/k1/oKKW43CnooEzlnkbG3zVcv/AKbL01OykpYaaL9OFjY2+SJkn2Kt4ltXJXXvq2THCYPWUjtABUiaAAAAAAAAAIvjnDH9SWTKBqenUyrJAvxd7OP3RChXsdG9zHtc17VVHNcmSoqb0U2iITjLR/BiBz66gcynuWXrZ7GTfN3L48ywcG4ssb8m7/HZ/p9iMzsJ2/mQ7/MpEHtudouFmqVp7hSS08nZrpsd5LuXgeIukJxnHmi9UQTi4vRgA5RxvlkbHGxz5HLk1jUzVV8EQ9bSPNDiWNoywo6rrG32sjypoF/DNcn6knxeTfv5DCmjKpq5GVl+a6npk2pS55SSfN8KfXyLbhijp4WQwxtjiY1GsY1MkaibkRCr8Y4xDkdFD1b7v6Il8HBfMrLF6I5gAqRNAAAAAAAhOkTCjr7bW11HHrV9I1cmpvlj3q3zTenFO0mwM2NkTx7VbDujHbVG2DhLc1byyBcmMtHUd3kkuNo1IK13rSQrsZMvenwu+i+G8qWvt1ba6l1NXU0tPMnuyNyz8u/gdAweI05kdYPrutytZGLZS+q6fqeUAEgawB2QQTVMzYYInyyuXJrI2q5y8ELLwloxkWRldiBqNYmTmUeeau+dexP28zTy86nEhzWP3bsz0Y9l0tII7dF2FnxL/UFZGrdZqtpGuTbkuxX/AMJxUtA+NajWo1qIjUTJERMkRD6c/wAzLnlXO2f/ABFlopjTBQiAAapmAAAAAAAAAAAAOqopoKuFYamGOaJd7JGI5F4KR2p0e4XqnK5bW2JV/sSOYnJFyJODLVfbV/5ya9HofE64T/ySZEotGuFo3ZrQyyeD6h6p90M/brLbLS3K30FPTd6xsRHLx3/U9wPqzKvtWlk21+7Z5GmuHWMUgADAZAAAAAAAAAAAAAdNVR01dAsNXTxVES+5KxHJ9TuB6m09UGk+jItUaO8LVDld1Z0Sr/ZlexOWeRwh0bYWidrLQSSeElQ9U+6EsBsrPyktPMl8WYfZ6ddeVfA8dvtNutUepb6Knpmrv6KNGqvmu9T2AGtKTk9ZPVmVJJaIAA8PQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/2Q==",
  kucoin: "data:image/png;base64,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",
  osmosis: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0xOTEuMTM2IDM1LjM1MTlDMTg5LjEgMjcuNTEyNCAxODIuNTU2IDE5LjY3MjggMTcwLjc3NyAxMC45NDU4QzE2MS4zMjMgMy45OTM3MSAxNTEuMjg5IDAgMTQzLjI5MSAwQzE0MS42OTEgMCAxNDAuMjM3IDAuMTQ3OTEgMTM4Ljc4MyAwLjQ0Mzc0QzEzNS4xNDcgMS4xODMzIDEzMS45NDcgMy44NDU4MSAxMjkuOTEyIDcuODM5NTRDMTI3LjQ0IDEyLjU3MjggMTI2Ljg1OCAxOC45MzMzIDEyOC40NTggMjIuNzc5QzEyOS4wMzkgMjMuOTYyMyAxMjkuNzY2IDI1LjQ0MTUgMTMwLjYzOSAyNi43NzI3QzEyMi45MzEgMzEuNTA2MSAxMTguNTY4IDMyLjgzNzMgMTE3Ljk4NiAzMi45ODUyQzEzOC4wNTYgMzkuNzg5MyAxNTQuNzggNTMuOTg5MiAxNjUuMjUgNzIuNDc4OEwxNjUuMzk2IDcwLjcwMzhDMTY1LjgzMiA2NS44MjI1IDE2Ny4yODYgNjAuMjAxNyAxNjkuMzIzIDU0LjQzM0MxNzEuMzU4IDU1LjAyNDcgMTczLjM5NCA1NS4zMjA1IDE3NS40MyA1NS4zMjA1QzE4MC44MTEgNTUuMzIwNSAxODUuNDY0IDUzLjEwMTggMTg4LjM3MyA0OS4xMDgxQzE5MS4yODIgNDUuMTE0MyAxOTIuNDQ0IDM5Ljc4OTMgMTkxLjEzNiAzNS4zNTE5WiIgZmlsbD0iIzVFMTJBMCIvPgo8cGF0aCBkPSJNMTcwLjE5NyA1MC4xNDc1QzE4My40MyA1My44NDU0IDE4OC44MTEgNDMuNDkxMyAxODcuMDY1IDM2LjUzOTNDMTg1LjE3NSAyOS41ODcyIDE3OS4wNjcgMjIuNDg3MiAxNjguMzA1IDE0LjQ5OThDMTU3LjU0NCA2LjUxMjM1IDE0Ni42MzggMy4yNTgxOCAxMzkuNjU3IDQuNzM3MjhDMTMyLjY3NyA2LjIxNjQ3IDEzMC42NDEgMTcuMDE0MyAxMzIuMzg1IDIxLjE1NTlDMTMzLjExMyAyMi43ODMgMTM0LjcxMiAyNS4xNDk3IDEzNi44OTQgMjcuODEyMkMxMzQuMTMxIDI5LjczNTEgMTMxLjUxMyAzMS4yMTQyIDEyOS4zMzIgMzIuNTQ1NEMxNDIuNzExIDM4LjYxIDE1NC4zNDUgNDguMDc2NyAxNjMuMDcgNTkuOTA5OUMxNjQuMDg4IDU1LjkxNjIgMTY1LjU0MyA1Mi4zNjYyIDE2Ni44NTIgNDkuMjZDMTY3Ljg2OSA0OS40MDc5IDE2OS4wMzMgNDkuNzAzOCAxNzAuMTk3IDUwLjE0NzVaIiBmaWxsPSJ1cmwoI3BhaW50MF9yYWRpYWxfOTE0XzQ4KSIvPgo8cGF0aCBkPSJNOTQuNDIzOCAxOTUuMTEyQzEzOS4zMiAxOTUuMTEyIDE3NS43MTcgMTU4LjA5MiAxNzUuNzE3IDExMi40MjdDMTc1LjcxNyA2Ni43NjE1IDEzOS4zMiAyOS43NDIyIDk0LjQyMzggMjkuNzQyMkM0OS41MjcgMjkuNzQyMiAxMy4xMzA5IDY2Ljc2MTUgMTMuMTMwOSAxMTIuNDI3QzEzLjEzMDkgMTU4LjA5MiA0OS41MjcgMTk1LjExMiA5NC40MjM4IDE5NS4xMTJaIiBmaWxsPSJ1cmwoI3BhaW50MV9yYWRpYWxfOTE0XzQ4KSIvPgo8cGF0aCBvcGFjaXR5PSIwLjYiIGQ9Ik0xODAuMzc3IDI5LjczMDdDMTY5LjMyNCAxNy44OTc1IDE2MC4wMTcgMTQuNzkxMiAxNDguODE5IDEyLjI3NjdDMTQwLjA5NCAxMC4yMDU4IDE0Mi40MiA1LjE3NjY2IDE1My4wMzcgNi4yMTIwOUMxNDcuOTQ3IDQuNDM3MTEgMTQzLjE0OCAzLjk5MzM0IDEzOS42NTcgNC43MzI4OUMxMzIuNjc3IDYuMjEyMDkgMTMwLjY0MSAxNy4wMDk5IDEzMi4zODYgMjEuMTUxNkMxMzMuMTEzIDIyLjc3ODYgMTM0LjcxMyAyNS4xNDUzIDEzNi44OTUgMjcuODA3OEMxMzIuOTY4IDMwLjQ3MDMgMTI5LjYyMyAzMi4zOTMyIDEyNi44NTkgMzMuODcyNEMxMjguMTY5IDM0LjQ2NCAxMjkuNzY4IDM1LjIwMzYgMTMxLjY1OCAzNi4yMzlDMTM2LjYwMyAzOC45MDE1IDE0MS45ODQgNDMuMzM4OSAxNDEuOTg0IDQzLjMzODlDMTMzLjg0IDM2LjIzOSAxMzUuNTg1IDMyLjk4NDggMTQ2Ljc4MyAyNC45OTc0QzE1MC4yNzQgMjIuNDgyOSAxNTYuNjcyIDIyLjc3ODYgMTYyLjYzNSAyNS44ODQ5QzE2OC41OTcgMjguOTkxMSAxNzUuNTc3IDM2LjgzMDcgMTc1LjU3NyAzNi44MzA3TDE2OC44ODggNDkuODQ3M0MxNjkuMzI0IDQ5Ljk5NTIgMTY5Ljc2IDUwLjE0MyAxNzAuMTk3IDUwLjI5MUMxNzQuNDE0IDUxLjQ3NDMgMTc3Ljc1OCA1MS4xNzg1IDE4MC4zNzcgNTAuMTQzMUMxODMuNDMxIDQ4LjIyMDIgMTkxLjQyOSA0MS43MTE5IDE4MC4zNzcgMjkuNzMwN1oiIGZpbGw9IiNBOTg2OTgiLz4KPHBhdGggZD0iTTE0OC42NzMgMTkuMzg1MkMxNTEuNTgyIDIwLjU2ODUgMTU1LjM2MyAyMi42MzkzIDE2MC4wMTcgMjUuNzQ1NkMxNjUuNTQzIDI5LjQ0MzUgMTcwLjM0MiAzMy41ODUyIDE3My4zOTYgMzYuODM5MkMxNjguMzA2IDQzLjY0MzQgMTY0Ljk2MSA1Mi45NjIxIDE2Mi45MjYgNTkuNDcwNEMxNjMuOTQ0IDYwLjk0OTYgMTY1LjEwNyA2Mi40Mjg3IDE2Ni4xMjUgNjMuOTA3OUMxNjcuMTQzIDYwLjIxIDE2OC44ODcgNTQuNzM3MSAxNzEuMjE0IDQ5LjI2NDJDMTcxLjc5NiA0OS40MTIxIDE3Mi41MjQgNDkuNDEyMSAxNzMuMjUgNDkuNDEyMUMxNzQuOTk1IDQ5LjQxMjEgMTc3LjAzMSA0OS4xMTYzIDE3OC42MzEgNDcuNzg1QzE3OS43OTQgNDYuODk3NSAxODEuMTA0IDQ1LjI3MDUgMTgwLjk1OCA0Mi4zMTIyQzE4MC45NTggMzkuNTAxOCAxNzguNzc3IDM1Ljk1MTggMTc0LjI2OCAzMS42NjIyQzE3MS4wNjkgMjguNTU2IDE2Ni43MDcgMjUuMTUzOSAxNjIuMzQ0IDIyLjA0NzdDMTQ5LjgzNyAxMy42MTY1IDE0MS4xMTEgMTEuMjQ5OCAxMzcuMTg1IDE1LjI0MzVDMTM0LjU2NyAxNy45MDYxIDEzNC44NTggMjEuMTYwMiAxMzUuNzMgMjMuNTI2OUMxMzEuMDc3IDI2LjYzMzEgMTI3LjE1IDI4Ljg1MTggMTI0LjUzMyAzMC4zMzFDMTI2LjI3OCAzMC45MjI3IDEyNy44NzggMzEuNjYyMiAxMjkuNjIzIDMyLjQwMThDMTM0LjI3NiAyOS44ODcyIDE0MC45NjYgMjUuNTk3NiAxNDguNjczIDE5LjM4NTJaTTE3Ni4xNTkgNDAuNTM3MkMxNzYuNTk1IDQxLjI3NjcgMTc2Ljc0MSA0Mi4wMTYzIDE3Ni43NDEgNDIuNDZDMTc2Ljc0MSA0My43OTE0IDE3Ni4zMDUgNDQuMjM1IDE3Ni4wMTMgNDQuNTMwOUMxNzUuNDMyIDQ0Ljk3NDcgMTc0LjI2OCA0NS4yNzA1IDE3My4yNSA0NS4yNzA1QzE3NC4xMjMgNDMuNDk1NSAxNzUuMTQxIDQyLjAxNjMgMTc2LjE1OSA0MC41MzcyWk0xNDAuMjM5IDE4LjQ5NzdDMTQwLjY3NSAxOC4wNTM5IDE0MS44MzkgMTcuNzU4MSAxNDMuNzI5IDE4LjA1MzlDMTQyLjI3NSAxOS4yMzczIDE0MC44MjEgMjAuMjcyNyAxMzkuMzY3IDIxLjMwODFDMTM5LjIyMSAyMC4yNzI3IDEzOS4zNjcgMTkuMjM3MyAxNDAuMjM5IDE4LjQ5NzdaIiBmaWxsPSIjNUUxMkEwIi8+CjxwYXRoIGQ9Ik05NC40MjQxIDI0Ljg2NzJDNDYuODY5OCAyNC44NjcyIDguMzMyMDMgNjQuMDY0OSA4LjMzMjAzIDExMi40MzRDOC4zMzIwMyAxNjAuODAxIDQ2Ljg2OTggMjAwIDk0LjQyNDEgMjAwQzE0MS45NzggMjAwIDE4MC41MTYgMTYwLjgwMSAxODAuNTE2IDExMi40MzRDMTgwLjUxNiA2NC4wNjQ5IDE0MS44MzMgMjQuODY3MiA5NC40MjQxIDI0Ljg2NzJaTTk0LjQyNDEgMTk1LjExOEM0OS40ODc1IDE5NS4xMTggMTMuMTMxMSAxNTguMTQgMTMuMTMxMSAxMTIuNDM0QzEzLjEzMTEgNjYuNzI3NCA0OS40ODc1IDI5Ljc0ODQgOTQuNDI0MSAyOS43NDg0QzEzOS4zNiAyOS43NDg0IDE3NS43MTggNjYuNzI3NCAxNzUuNzE4IDExMi40MzRDMTc1LjcxOCAxNTguMTQgMTM5LjIxNiAxOTUuMTE4IDk0LjQyNDEgMTk1LjExOFoiIGZpbGw9IiM1RTEyQTAiLz4KPHBhdGggb3BhY2l0eT0iMC42IiBkPSJNOTQuNDIzOCAxOTUuMTEyQzEzOS4zMiAxOTUuMTEyIDE3NS43MTcgMTU4LjA5MiAxNzUuNzE3IDExMi40MjdDMTc1LjcxNyA2Ni43NjE1IDEzOS4zMiAyOS43NDIyIDk0LjQyMzggMjkuNzQyMkM0OS41MjcgMjkuNzQyMiAxMy4xMzA5IDY2Ljc2MTUgMTMuMTMwOSAxMTIuNDI3QzEzLjEzMDkgMTU4LjA5MiA0OS41MjcgMTk1LjExMiA5NC40MjM4IDE5NS4xMTJaIiBmaWxsPSJ1cmwoI3BhaW50Ml9saW5lYXJfOTE0XzQ4KSIvPgo8cGF0aCBvcGFjaXR5PSIwLjYiIGQ9Ik05My44NTA4IDE4NS4wNjJDNDkuNDk1OSAxNzcuODE0IDE5LjM5MjggMTM1LjM2MiAyNi42NjQgOTAuMjQ4M0MyOS44NjM1IDcwLjI3OTUgMzkuNzUyNCA1My4yNjkxIDUzLjcxMzMgNDAuOTkyMkMzMy4zNTM3IDUyLjk3MzQgMTguMjI5NCA3My44Mjk1IDE0LjE1NzUgOTkuMjcxMkM3LjAzMTYgMTQ0LjM4NSAzNy4xMzQ3IDE4Ni44MzcgODEuMzQ0MSAxOTQuMDg1QzEwNi4wNjYgMTk4LjIyNyAxMjkuOTE2IDE5MC4zODcgMTQ3LjUxMyAxNzUuMDA0QzEzMS45NTIgMTg0LjE3NSAxMTMuMDQ3IDE4OC4xNjkgOTMuODUwOCAxODUuMDYyWiIgZmlsbD0iI0E5ODY5OCIvPgo8cGF0aCBvcGFjaXR5PSIwLjYiIGQ9Ik0xMDcuMzY1IDMwLjkyMzdDODYuODYwMiAyNy41MjE2IDY2LjkzNjggMzIuMjU0OSA1MC42NDkxIDQyLjc1N0M1MC4zNTgyIDQzLjA1MjcgNTAuMDY3NCA0My4zNDg2IDUwLjA2NzQgNDMuMzQ4NkM1Ni4zMjA3IDM5LjUwMjggNjUuNDgyNSAzNi4xMDA3IDY1LjQ4MjUgMzYuMTAwN0M0MS45MjM2IDUwLjAwNDggMzQuNjUyMyA2NS44MzE4IDM0LjY1MjMgNjUuODMxOEM0My44MTQyIDQ3Ljc4NiA3MC43MTc5IDM1LjA2NTMgOTEuODA0NiAzNC4xNzc4QzExMi44OTEgMzMuMjkwMyAxMjYuNzA2IDM5LjY1MDcgMTQzLjU3NiA1My40MDY4QzE2MC40NDUgNjcuMzExIDE3MC42MjUgOTUuNzEwNCAxNjkuNjA3IDExOC4xOTRDMTY4LjczNSAxNDAuNjc4IDE1Ny4xMDEgMTU4Ljg3MSAxNTcuMTAxIDE1OC44NzFDMTY1LjA5OSAxNDguMzY4IDE2OS44OTggMTQwLjY3OCAxNzIuOTUyIDEzMi44MzdDMTczLjUzNCAxMzAuNDcxIDE3NC4xMTYgMTI4LjEwNSAxNzQuNDA2IDEyNS41OUMxODEuNjc4IDgwLjYyMzMgMTUxLjcyIDM4LjE3MTUgMTA3LjM2NSAzMC45MjM3WiIgZmlsbD0idXJsKCNwYWludDNfbGluZWFyXzkxNF80OCkiLz4KPHBhdGggZD0iTTE3MS42NDQgMTExLjY4OUMxNzEuNjQ0IDE1NS4wMjggMTM3LjAzMiAxOTAuMjMzIDk0LjQyMzEgMTkwLjIzM0M1MS44MTM0IDE5MC4yMzMgMTcuMDU2NiAxNTUuMDI4IDE3LjA1NjYgMTExLjY4OUgxNzEuNjQ0WiIgZmlsbD0idXJsKCNwYWludDRfbGluZWFyXzkxNF80OCkiLz4KPGcgb3BhY2l0eT0iMC42Ij4KPHBhdGggb3BhY2l0eT0iMC42IiBkPSJNMTY1LjUzNCAxMTEuNjg5QzE2NS41MzQgMTUzLjk5MyAxMzIuNjY4IDE4OC42MDUgOTEuMzY3MiAxOTAuMjMzQzkyLjM4NTIgMTkwLjIzMyA5My40MDMyIDE5MC4yMzMgOTQuNDIxMiAxOTAuMjMzQzEzNy4wMzEgMTkwLjIzMyAxNzEuNjQzIDE1NS4wMjggMTcxLjY0MyAxMTEuNjg5SDE2NS41MzRaIiBmaWxsPSJ1cmwoI3BhaW50NV9saW5lYXJfOTE0XzQ4KSIvPgo8L2c+CjxnIG9wYWNpdHk9IjAuNyI+CjxwYXRoIG9wYWNpdHk9IjAuNyIgZD0iTTI3Ljk2MzYgMTExLjY4OUgxNy4wNTY2QzE3LjA1NjYgMTU1LjAyOCA1MS42NjggMTkwLjIzMyA5NC4yNzc3IDE5MC4yMzNDOTYuMTY4MiAxOTAuMjMzIDk3LjkxMzMgMTkwLjIzMyA5OS42NTg1IDE5MC4wODRDNTkuNjY2NCAxODcuMTI2IDI3Ljk2MzYgMTUzLjEwNiAyNy45NjM2IDExMS42ODlaIiBmaWxsPSJ1cmwoI3BhaW50Nl9saW5lYXJfOTE0XzQ4KSIvPgo8L2c+CjxwYXRoIGQ9Ik0xNzEuNDk5IDExMi40MjJDMTcxLjQ5OSAxMDMuMzk5IDE1Ni4wODQgOTguMjIxMSAxMzUuNTc4IDk2LjQ0N0MxMjAuNzQ1IDk1LjI2MzMgMTA1Ljc2NyA5Ni43NDIyIDg4LjYwNjEgMTAyLjA2N0M3My43NzI2IDEwNi41MDUgNjAuMzkzNSAxMDUuNzY1IDUwLjY1IDEwNC41ODFDMjguOTgxNSAxMDIuMDY3IDE3LjA1NjYgMTAxLjc3MSAxNy4wNTY2IDExMi40MjJDMTcuMDU2NiAxMjcuODA1IDQ3Ljg4NjggMTQ3LjAzNCA5NC4xMzIzIDE0MC4zNzdDMTE3LjU0NiAxMzYuOTc2IDEyOS42MTYgMTMwLjAyNCAxNDMuNDMyIDEyNS4yOUMxNTguNDExIDEyMC4yNjEgMTcxLjQ5OSAxMjAuNDA5IDE3MS40OTkgMTEyLjQyMloiIGZpbGw9InVybCgjcGFpbnQ3X2xpbmVhcl85MTRfNDgpIi8+CjxwYXRoIGQ9Ik0xMTkuNzI3IDc1LjE1MjJDMTI2Ljk1NiA3NS4xNTIyIDEzMi44MTUgNjkuMTkyIDEzMi44MTUgNjEuODM5N0MxMzIuODE1IDU0LjQ4NzUgMTI2Ljk1NiA0OC41MjczIDExOS43MjcgNDguNTI3M0MxMTIuNDk5IDQ4LjUyNzMgMTA2LjYzOSA1NC40ODc1IDEwNi42MzkgNjEuODM5N0MxMDYuNjM5IDY5LjE5MiAxMTIuNDk5IDc1LjE1MjIgMTE5LjcyNyA3NS4xNTIyWiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTE0MS4xMDggODUuMDYxOUMxNDQuMTYgODUuMDYxOSAxNDYuNjM0IDgyLjU0NTQgMTQ2LjYzNCA3OS40NDExQzE0Ni42MzQgNzYuMzM2OCAxNDQuMTYgNzMuODIwMyAxNDEuMTA4IDczLjgyMDNDMTM4LjA1NiA3My44MjAzIDEzNS41ODIgNzYuMzM2OCAxMzUuNTgyIDc5LjQ0MTFDMTM1LjU4MiA4Mi41NDU0IDEzOC4wNTYgODUuMDYxOSAxNDEuMTA4IDg1LjA2MTlaIiBmaWxsPSJ3aGl0ZSIvPgo8ZyBvcGFjaXR5PSIwLjYiPgo8cGF0aCBvcGFjaXR5PSIwLjYiIGQ9Ik0xNjAuODg0IDUxLjIwM0MxNjAuNzM4IDUxLjIwMyAxNjAuNTkzIDUxLjIwMyAxNjAuNTkzIDUxLjIwM0MxNTkuNzIgNTEuMDU1MSAxNTkuMTM5IDUwLjE2NzYgMTU5LjI4NCA0OS4xMzIyQzE2MC41OTMgNDIuMzI4IDE2Ni4xMTkgMzUuODE5OCAxNjYuNDEgMzUuNTIzOUMxNjYuOTkxIDM0Ljc4NDQgMTY4LjE1NSAzNC43ODQ0IDE2OC43MzcgMzUuMzc2QzE2OS40NjQgMzUuOTY3NyAxNjkuNDY0IDM3LjE1MSAxNjguODgyIDM3Ljc0MjdDMTY4LjczNyAzNy44OTA2IDE2My42NDcgNDMuOTU1MSAxNjIuNDg0IDQ5Ljg3MThDMTYyLjMzOCA1MC43NTkzIDE2MS42MTEgNTEuMjAzIDE2MC44ODQgNTEuMjAzWiIgZmlsbD0idXJsKCNwYWludDhfbGluZWFyXzkxNF80OCkiLz4KPC9nPgo8cGF0aCBvcGFjaXR5PSIwLjIiIGQ9Ik04OS4wNjAzIDE3NC4wOThDOTEuMzA5MSAxNzQuMDk4IDkzLjEzMjIgMTcyLjI0NCA5My4xMzIyIDE2OS45NTZDOTMuMTMyMiAxNjcuNjY5IDkxLjMwOTEgMTY1LjgxNCA4OS4wNjAzIDE2NS44MTRDODYuODExNCAxNjUuODE0IDg0Ljk4ODMgMTY3LjY2OSA4NC45ODgzIDE2OS45NTZDODQuOTg4MyAxNzIuMjQ0IDg2LjgxMTQgMTc0LjA5OCA4OS4wNjAzIDE3NC4wOThaIiBmaWxsPSJ3aGl0ZSIvPgo8ZyBvcGFjaXR5PSIwLjQiPgo8cGF0aCBvcGFjaXR5PSIwLjYiIGQ9Ik04Ni43MTMxIDE3Mi42NTdDODUuMTEzNCAxNzEuMDMgODUuMTEzNCAxNjguMzY4IDg2LjcxMzEgMTY2Ljc0Qzg3LjAwMzkgMTY2LjQ0NCA4Ny4yOTQ4IDE2Ni4yOTYgODcuNTg1NiAxNjZDODcuMDAzOSAxNjYuMTQ5IDg2LjU2NzYgMTY2LjQ0NCA4Ni4xMzE0IDE2Ni44ODhDODQuNTMxNyAxNjguNTE1IDg0LjUzMTcgMTcxLjE3OCA4Ni4xMzE0IDE3Mi44MDVDODcuNDQwMiAxNzQuMTM2IDg5LjQ3NjEgMTc0LjQzMiA5MS4wNzU4IDE3My41NDVDODkuNjIxNSAxNzQuMTM2IDg3Ljg3NjUgMTczLjg0MSA4Ni43MTMxIDE3Mi42NTdaIiBmaWxsPSJ1cmwoI3BhaW50OV9saW5lYXJfOTE0XzQ4KSIvPgo8L2c+CjxwYXRoIG9wYWNpdHk9IjAuMyIgZD0iTTkwLjQ5MTcgMTY4Ljc3OUM5MC45NzM2IDE2OC43NzkgOTEuMzY0MyAxNjguMzgyIDkxLjM2NDMgMTY3Ljg5MkM5MS4zNjQzIDE2Ny40MDEgOTAuOTczNiAxNjcuMDA0IDkwLjQ5MTcgMTY3LjAwNEM5MC4wMDk4IDE2Ny4wMDQgODkuNjE5MSAxNjcuNDAxIDg5LjYxOTEgMTY3Ljg5MkM4OS42MTkxIDE2OC4zODIgOTAuMDA5OCAxNjguNzc5IDkwLjQ5MTcgMTY4Ljc3OVoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIG9wYWNpdHk9IjAuMiIgZD0iTTExMC4zMDIgMTcyLjAzNUMxMTIuNTUxIDE3Mi4wMzUgMTE0LjM3NCAxNzAuMTggMTE0LjM3NCAxNjcuODkyQzExNC4zNzQgMTY1LjYwNCAxMTIuNTUxIDE2My43NSAxMTAuMzAyIDE2My43NUMxMDguMDUzIDE2My43NSAxMDYuMjMgMTY1LjYwNCAxMDYuMjMgMTY3Ljg5MkMxMDYuMjMgMTcwLjE4IDEwOC4wNTMgMTcyLjAzNSAxMTAuMzAyIDE3Mi4wMzVaIiBmaWxsPSJ3aGl0ZSIvPgo8ZyBvcGFjaXR5PSIwLjQiPgo8cGF0aCBvcGFjaXR5PSIwLjYiIGQ9Ik0xMDcuOTU1IDE3MC41OTNDMTA2LjM1NSAxNjguOTY1IDEwNi4zNTUgMTY2LjMwMiAxMDcuOTU1IDE2NC42NzVDMTA4LjI0NSAxNjQuMzc5IDEwOC41MzcgMTY0LjIzMSAxMDguODI3IDE2My45MzZDMTA4LjI0NSAxNjQuMDgzIDEwNy44MDkgMTY0LjM3OSAxMDcuMzczIDE2NC44MjNDMTA1Ljc3NCAxNjYuNDUgMTA1Ljc3NCAxNjkuMTEzIDEwNy4zNzMgMTcwLjc0QzEwOC42ODMgMTcyLjA3MiAxMTAuNzE4IDE3Mi4zNjcgMTEyLjMxOCAxNzEuNDc5QzExMC44NjQgMTcyLjA3MiAxMDkuMTE5IDE3MS43NzYgMTA3Ljk1NSAxNzAuNTkzWiIgZmlsbD0idXJsKCNwYWludDEwX2xpbmVhcl85MTRfNDgpIi8+CjwvZz4KPHBhdGggb3BhY2l0eT0iMC4zIiBkPSJNMTExLjczNCAxNjYuNzE0QzExMi4yMTYgMTY2LjcxNCAxMTIuNjA2IDE2Ni4zMTcgMTEyLjYwNiAxNjUuODI2QzExMi42MDYgMTY1LjMzNyAxMTIuMjE2IDE2NC45MzkgMTExLjczNCAxNjQuOTM5QzExMS4yNTIgMTY0LjkzOSAxMTAuODYxIDE2NS4zMzcgMTEwLjg2MSAxNjUuODI2QzExMC44NjEgMTY2LjMxNyAxMTEuMjUyIDE2Ni43MTQgMTExLjczNCAxNjYuNzE0WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggb3BhY2l0eT0iMC4yIiBkPSJNOTkuNzk4IDE4MS42NjJDMTAxLjQ4NSAxODEuNjYyIDEwMi44NTIgMTgwLjI3MSAxMDIuODUyIDE3OC41NTZDMTAyLjg1MiAxNzYuODQgMTAxLjQ4NSAxNzUuNDQ5IDk5Ljc5OCAxNzUuNDQ5Qzk4LjExMTQgMTc1LjQ0OSA5Ni43NDQxIDE3Ni44NCA5Ni43NDQxIDE3OC41NTZDOTYuNzQ0MSAxODAuMjcxIDk4LjExMTQgMTgxLjY2MiA5OS43OTggMTgxLjY2MloiIGZpbGw9IndoaXRlIi8+CjxnIG9wYWNpdHk9IjAuNCI+CjxwYXRoIG9wYWNpdHk9IjAuNiIgZD0iTTk4LjA1MjkgMTgwLjQ5N0M5Ni44ODk2IDE3OS4zMTMgOTYuODg5NiAxNzcuMjQzIDk4LjA1MjkgMTc2LjA1OUM5OC4xOTg0IDE3NS45MTEgOTguNDg5MiAxNzUuNzY0IDk4LjYzNDYgMTc1LjYxNUM5OC4xOTg0IDE3NS43NjQgOTcuOTA3NSAxNzYuMDU5IDk3LjYxNjYgMTc2LjM1NUM5Ni40NTMzIDE3Ny41MzggOTYuNDUzMyAxNzkuNjEgOTcuNjE2NiAxODAuNzkzQzk4LjYzNDYgMTgxLjgyOSAxMDAuMDg5IDE4MS45NzYgMTAxLjM5OCAxODEuMjM3QzEwMC4yMzQgMTgxLjY4MSA5OC45MjU1IDE4MS4zODUgOTguMDUyOSAxODAuNDk3WiIgZmlsbD0idXJsKCNwYWludDExX2xpbmVhcl85MTRfNDgpIi8+CjwvZz4KPHBhdGggb3BhY2l0eT0iMC4zIiBkPSJNMTAwLjgyMiAxNzcuNTA4QzEwMS4xNDMgMTc3LjUwOCAxMDEuNDAzIDE3Ny4yNDMgMTAxLjQwMyAxNzYuOTE3QzEwMS40MDMgMTc2LjU5IDEwMS4xNDMgMTc2LjMyNCAxMDAuODIyIDE3Ni4zMjRDMTAwLjUwMSAxNzYuMzI0IDEwMC4yNCAxNzYuNTkgMTAwLjI0IDE3Ni45MTdDMTAwLjI0IDE3Ny4yNDMgMTAwLjUwMSAxNzcuNTA4IDEwMC44MjIgMTc3LjUwOFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIG9wYWNpdHk9IjAuMiIgZD0iTTExOC41NjUgMTc5LjQyOUMxMjAuMjUyIDE3OS40MjkgMTIxLjYxOSAxNzguMDM5IDEyMS42MTkgMTc2LjMyM0MxMjEuNjE5IDE3NC42MDcgMTIwLjI1MiAxNzMuMjE3IDExOC41NjUgMTczLjIxN0MxMTYuODc5IDE3My4yMTcgMTE1LjUxMiAxNzQuNjA3IDExNS41MTIgMTc2LjMyM0MxMTUuNTEyIDE3OC4wMzkgMTE2Ljg3OSAxNzkuNDI5IDExOC41NjUgMTc5LjQyOVoiIGZpbGw9IndoaXRlIi8+CjxnIG9wYWNpdHk9IjAuNCI+CjxwYXRoIG9wYWNpdHk9IjAuNiIgZD0iTTExNi44MjEgMTc4LjI2NUMxMTUuNjU4IDE3Ny4wODEgMTE1LjY1OCAxNzUuMDEgMTE2LjgyMSAxNzMuODI3QzExNi45NjYgMTczLjY3OSAxMTcuMjU3IDE3My41MzEgMTE3LjQwMyAxNzMuMzgzQzExNi45NjYgMTczLjUzMSAxMTYuNjc1IDE3My44MjcgMTE2LjM4NSAxNzQuMTIzQzExNS4yMjEgMTc1LjMwNiAxMTUuMjIxIDE3Ny4zNzcgMTE2LjM4NSAxNzguNTYxQzExNy40MDMgMTc5LjU5NiAxMTguODU3IDE3OS43NDQgMTIwLjE2NiAxNzkuMDA1QzExOS4wMDMgMTc5LjQ0OSAxMTcuNjkzIDE3OS4xNTIgMTE2LjgyMSAxNzguMjY1WiIgZmlsbD0idXJsKCNwYWludDEyX2xpbmVhcl85MTRfNDgpIi8+CjwvZz4KPHBhdGggb3BhY2l0eT0iMC4zIiBkPSJNMTE5LjU5MiAxNzUuMjkzQzExOS45MTQgMTc1LjI5MyAxMjAuMTc0IDE3NS4wMjggMTIwLjE3NCAxNzQuNzAxQzEyMC4xNzQgMTc0LjM3NCAxMTkuOTE0IDE3NC4xMDkgMTE5LjU5MiAxNzQuMTA5QzExOS4yNzEgMTc0LjEwOSAxMTkuMDEgMTc0LjM3NCAxMTkuMDEgMTc0LjcwMUMxMTkuMDEgMTc1LjAyOCAxMTkuMjcxIDE3NS4yOTMgMTE5LjU5MiAxNzUuMjkzWiIgZmlsbD0id2hpdGUiLz4KPHBhdGggb3BhY2l0eT0iMC4yIiBkPSJNNzEuNzM2NSAxNzIuNjM0Qzc1LjQzMTEgMTcyLjYzNCA3OC40MjYgMTY5LjU4NyA3OC40MjYgMTY1LjgzQzc4LjQyNiAxNjIuMDcyIDc1LjQzMTEgMTU5LjAyNSA3MS43MzY1IDE1OS4wMjVDNjguMDQxOSAxNTkuMDI1IDY1LjA0NjkgMTYyLjA3MiA2NS4wNDY5IDE2NS44M0M2NS4wNDY5IDE2OS41ODcgNjguMDQxOSAxNzIuNjM0IDcxLjczNjUgMTcyLjYzNFoiIGZpbGw9IndoaXRlIi8+CjxnIG9wYWNpdHk9IjAuNCI+CjxwYXRoIG9wYWNpdHk9IjAuNiIgZD0iTTY3Ljk1NyAxNzAuMTA0QzY1LjMzOTIgMTY3LjQ0MSA2NS4zMzkyIDE2My4xNTEgNjcuOTU3IDE2MC40ODlDNjguMzkzMiAxNjAuMDQ1IDY4LjgyOTUgMTU5Ljc0OSA2OS40MTExIDE1OS40NTNDNjguNTM4NyAxNTkuNzQ5IDY3LjgxMTUgMTYwLjM0MSA2Ny4wODQ0IDE2MC45MzNDNjQuNDY2NyAxNjMuNTk1IDY0LjQ2NjcgMTY3Ljg4NSA2Ny4wODQ0IDE3MC41NDdDNjkuMjY1NyAxNzIuNzY2IDcyLjYxMDYgMTczLjIxIDc1LjIyODIgMTcxLjU4MkM3Mi43NTYgMTcyLjYxOCA2OS44NDc0IDE3Mi4xNzQgNjcuOTU3IDE3MC4xMDRaIiBmaWxsPSJ1cmwoI3BhaW50MTNfbGluZWFyXzkxNF80OCkiLz4KPC9nPgo8cGF0aCBvcGFjaXR5PSIwLjMiIGQ9Ik03NC4wNzE1IDE2My43NDlDNzQuODc0NiAxNjMuNzQ5IDc1LjUyNTcgMTYzLjA4NyA3NS41MjU3IDE2Mi4yN0M3NS41MjU3IDE2MS40NTMgNzQuODc0NiAxNjAuNzkxIDc0LjA3MTUgMTYwLjc5MUM3My4yNjgyIDE2MC43OTEgNzIuNjE3MiAxNjEuNDUzIDcyLjYxNzIgMTYyLjI3QzcyLjYxNzIgMTYzLjA4NyA3My4yNjgyIDE2My43NDkgNzQuMDcxNSAxNjMuNzQ5WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggb3BhY2l0eT0iMC4yIiBkPSJNMTMxLjUzOSAxNTUuOTEzQzEzNS4yMzQgMTU1LjkxMyAxMzguMjI5IDE1Mi44NjcgMTM4LjIyOSAxNDkuMTA5QzEzOC4yMjkgMTQ1LjM1MSAxMzUuMjM0IDE0Mi4zMDUgMTMxLjUzOSAxNDIuMzA1QzEyNy44NDUgMTQyLjMwNSAxMjQuODUgMTQ1LjM1MSAxMjQuODUgMTQ5LjEwOUMxMjQuODUgMTUyLjg2NyAxMjcuODQ1IDE1NS45MTMgMTMxLjUzOSAxNTUuOTEzWiIgZmlsbD0id2hpdGUiLz4KPGcgb3BhY2l0eT0iMC40Ij4KPHBhdGggb3BhY2l0eT0iMC42IiBkPSJNMTI3LjU3NCAxNTMuNEMxMjQuOTU2IDE1MC43MzggMTI0Ljk1NiAxNDYuNDQ5IDEyNy41NzQgMTQzLjc4NkMxMjguMDEgMTQzLjM0MiAxMjguNDQ3IDE0My4wNDYgMTI5LjAyOSAxNDIuNzVDMTI4LjE1NSAxNDMuMDQ2IDEyNy40MjkgMTQzLjYzOCAxMjYuNzAyIDE0NC4yM0MxMjQuMDg0IDE0Ni44OTIgMTI0LjA4NCAxNTEuMTgyIDEyNi43MDIgMTUzLjg0NEMxMjguODgzIDE1Ni4wNjMgMTMyLjIyOCAxNTYuNTA3IDEzNC44NDYgMTU0Ljg3OUMxMzIuMzczIDE1NS45MTUgMTI5LjYwOSAxNTUuNDcyIDEyNy41NzQgMTUzLjRaIiBmaWxsPSJ1cmwoI3BhaW50MTRfbGluZWFyXzkxNF80OCkiLz4KPC9nPgo8cGF0aCBvcGFjaXR5PSIwLjMiIGQ9Ik0xMzMuODM3IDE0Ny4wNDlDMTM0LjY0MSAxNDcuMDQ5IDEzNS4yOTEgMTQ2LjM4NiAxMzUuMjkxIDE0NS41NjlDMTM1LjI5MSAxNDQuNzUyIDEzNC42NDEgMTQ0LjA5IDEzMy44MzcgMTQ0LjA5QzEzMy4wMzQgMTQ0LjA5IDEzMi4zODMgMTQ0Ljc1MiAxMzIuMzgzIDE0NS41NjlDMTMyLjM4MyAxNDYuMzg2IDEzMy4wMzQgMTQ3LjA0OSAxMzMuODM3IDE0Ny4wNDlaIiBmaWxsPSJ3aGl0ZSIvPgo8ZGVmcz4KPHJhZGlhbEdyYWRpZW50IGlkPSJwYWludDBfcmFkaWFsXzkxNF80OCIgY3g9IjAiIGN5PSIwIiByPSIxIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgZ3JhZGllbnRUcmFuc2Zvcm09InRyYW5zbGF0ZSgxODQuNDEzIDI3LjIyMDQpIHNjYWxlKDY0Ljk5NzEgNjYuMTEwMSkiPgo8c3RvcCBzdG9wLWNvbG9yPSIjRkZFQUZGIiBzdG9wLW9wYWNpdHk9IjAuNiIvPgo8c3RvcCBvZmZzZXQ9IjAuNjgwNyIgc3RvcC1jb2xvcj0iI0EwODdDOSIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMxMDAwMkYiLz4KPC9yYWRpYWxHcmFkaWVudD4KPHJhZGlhbEdyYWRpZW50IGlkPSJwYWludDFfcmFkaWFsXzkxNF80OCIgY3g9IjAiIGN5PSIwIiByPSIxIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgZ3JhZGllbnRUcmFuc2Zvcm09InRyYW5zbGF0ZSgxNjcuMzk0IDk3Ljc0MjkpIHNjYWxlKDE4Mi4wMzMgMTk2LjkxNikiPgo8c3RvcCBzdG9wLWNvbG9yPSIjRkZFQUZGIiBzdG9wLW9wYWNpdHk9IjAuNiIvPgo8c3RvcCBvZmZzZXQ9IjAuNjgwNyIgc3RvcC1jb2xvcj0iI0EwODdDOSIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMxMDAwMkYiLz4KPC9yYWRpYWxHcmFkaWVudD4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDJfbGluZWFyXzkxNF80OCIgeDE9IjgxLjM4MzgiIHkxPSIxOTMuOTQiIHgyPSIxMDguMjYiIHkyPSIzMC45MjIyIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiM4MUZGRkYiLz4KPHN0b3Agb2Zmc2V0PSIwLjYyMDIiIHN0b3AtY29sb3I9IndoaXRlIiBzdG9wLW9wYWNpdHk9IjAiLz4KPC9saW5lYXJHcmFkaWVudD4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDNfbGluZWFyXzkxNF80OCIgeDE9IjE1MS43MTMiIHkxPSI1Ni4yNzE0IiB4Mj0iODMuNDQ5NSIgeTI9IjExNy44NTEiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agb2Zmc2V0PSIwLjI4ODgiIHN0b3AtY29sb3I9IndoaXRlIi8+CjxzdG9wIG9mZnNldD0iMC43Nzk2IiBzdG9wLWNvbG9yPSJ3aGl0ZSIgc3RvcC1vcGFjaXR5PSIwIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQ0X2xpbmVhcl85MTRfNDgiIHgxPSIxNy4xMjIxIiB5MT0iMTUwLjkxNCIgeDI9IjE3MS42MDciIHkyPSIxNTAuOTE0IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiMwMDAyRTkiLz4KPHN0b3Agb2Zmc2V0PSIwLjk5NTIiIHN0b3AtY29sb3I9IiNGRjAwQzciLz4KPC9saW5lYXJHcmFkaWVudD4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDVfbGluZWFyXzkxNF80OCIgeDE9IjE3OC45MTgiIHkxPSIxMTguNTgxIiB4Mj0iOTMuNDg2NyIgeTI9IjE5Ny45NTkiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agb2Zmc2V0PSIwLjI4ODgiIHN0b3AtY29sb3I9IndoaXRlIi8+CjxzdG9wIG9mZnNldD0iMC43Nzk2IiBzdG9wLWNvbG9yPSJ3aGl0ZSIgc3RvcC1vcGFjaXR5PSIwIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQ2X2xpbmVhcl85MTRfNDgiIHgxPSIxNy4xMjIxIiB5MT0iMTUwLjkxNCIgeDI9Ijk5Ljc3MDUiIHkyPSIxNTAuOTE0IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiMwMDAyOTIiLz4KPHN0b3Agb2Zmc2V0PSIwLjk5NTIiIHN0b3AtY29sb3I9IiM3RDAwQzciLz4KPC9saW5lYXJHcmFkaWVudD4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDdfbGluZWFyXzkxNF80OCIgeDE9IjE3LjIyNTgiIHkxPSIxMTguOTQ3IiB4Mj0iMTcxLjUwMyIgeTI9IjExOC45NDciIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iIzAwMDI5MiIvPgo8c3RvcCBvZmZzZXQ9IjAuOTk1MiIgc3RvcC1jb2xvcj0iI0JFMDBDNyIvPgo8L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50OF9saW5lYXJfOTE0XzQ4IiB4MT0iMTY4Ljk3MyIgeTE9IjM0LjgwMzYiIHgyPSIxNTcuNjA5IiB5Mj0iNTIuOTU4MSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBvZmZzZXQ9IjAuMjg4OCIgc3RvcC1jb2xvcj0id2hpdGUiLz4KPHN0b3Agb2Zmc2V0PSIwLjc3OTYiIHN0b3AtY29sb3I9IndoaXRlIiBzdG9wLW9wYWNpdHk9IjAiLz4KPC9saW5lYXJHcmFkaWVudD4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDlfbGluZWFyXzkxNF80OCIgeDE9Ijg0LjkyNzUiIHkxPSIxNzAuMTIxIiB4Mj0iOTEuMDgwMyIgeTI9IjE3MC4xMjEiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agb2Zmc2V0PSIwLjI4ODgiIHN0b3AtY29sb3I9IndoaXRlIi8+CjxzdG9wIG9mZnNldD0iMC43Nzk2IiBzdG9wLWNvbG9yPSJ3aGl0ZSIgc3RvcC1vcGFjaXR5PSIwIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQxMF9saW5lYXJfOTE0XzQ4IiB4MT0iMTA2LjE1NSIgeTE9IjE2OC4wMjgiIHgyPSIxMTIuMzA3IiB5Mj0iMTY4LjAyOCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBvZmZzZXQ9IjAuMjg4OCIgc3RvcC1jb2xvcj0id2hpdGUiLz4KPHN0b3Agb2Zmc2V0PSIwLjc3OTYiIHN0b3AtY29sb3I9IndoaXRlIiBzdG9wLW9wYWNpdHk9IjAiLz4KPC9saW5lYXJHcmFkaWVudD4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDExX2xpbmVhcl85MTRfNDgiIHgxPSI5Ni42NjIzIiB5MT0iMTc4LjYwNCIgeDI9IjEwMS4yODIiIHkyPSIxNzguNjA0IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIG9mZnNldD0iMC4yODg4IiBzdG9wLWNvbG9yPSJ3aGl0ZSIvPgo8c3RvcCBvZmZzZXQ9IjAuNzc5NiIgc3RvcC1jb2xvcj0id2hpdGUiIHN0b3Atb3BhY2l0eT0iMCIvPgo8L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MTJfbGluZWFyXzkxNF80OCIgeDE9IjExNS40MyIgeTE9IjE3Ni4zNzEiIHgyPSIxMjAuMDQ5IiB5Mj0iMTc2LjM3MSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBvZmZzZXQ9IjAuMjg4OCIgc3RvcC1jb2xvcj0id2hpdGUiLz4KPHN0b3Agb2Zmc2V0PSIwLjc3OTYiIHN0b3AtY29sb3I9IndoaXRlIiBzdG9wLW9wYWNpdHk9IjAiLz4KPC9saW5lYXJHcmFkaWVudD4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDEzX2xpbmVhcl85MTRfNDgiIHgxPSI2NS4wNTQ0IiB5MT0iMTY1Ljk4OCIgeDI9Ijc1LjEwMjQiIHkyPSIxNjUuOTg4IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIG9mZnNldD0iMC4yODg4IiBzdG9wLWNvbG9yPSJ3aGl0ZSIvPgo8c3RvcCBvZmZzZXQ9IjAuNzc5NiIgc3RvcC1jb2xvcj0id2hpdGUiIHN0b3Atb3BhY2l0eT0iMCIvPgo8L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MTRfbGluZWFyXzkxNF80OCIgeDE9IjEyNC43MjgiIHkxPSIxNDkuMjc5IiB4Mj0iMTM0Ljc3NSIgeTI9IjE0OS4yNzkiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agb2Zmc2V0PSIwLjI4ODgiIHN0b3AtY29sb3I9IndoaXRlIi8+CjxzdG9wIG9mZnNldD0iMC43Nzk2IiBzdG9wLWNvbG9yPSJ3aGl0ZSIgc3RvcC1vcGFjaXR5PSIwIi8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPC9zdmc+Cg==",
  skip: "data:image/png;base64,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"
};
const buyLogo = (src, r) => /* @__PURE__ */ jsx("img", { src, alt: "", width: "22", height: "22", style: { display: "block", flexShrink: 0, borderRadius: r } });
const buyCoin = (src, pad) => /* @__PURE__ */ jsx("span", { style: { width: 22, height: 22, borderRadius: "50%", background: "#fff", display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0, overflow: "hidden" }, children: /* @__PURE__ */ jsx("img", { src, alt: "", width: 22 - pad * 2, height: 22 - pad * 2, style: { display: "block" } }) });
const BUY_VENUES = [
  { name: "MEXC", tagKey: "buy.mexcTag", tag: "P2P/USDT spot", href: "https://www.mexc.com/exchange/P2P_USDT", logo: buyLogo(BUY_LOGOS.mexc, "50%") },
  { name: "KuCoin", tagKey: "buy.mexcTag", tag: "P2P/USDT spot", href: "https://www.kucoin.com/trade/P2P-USDT", logo: buyCoin(BUY_LOGOS.kucoin, 4) },
  { name: "Osmosis", tagKey: "buy.osmosisTag", tag: "Swap on-chain", href: "https://app.osmosis.zone/?to=P2P", logo: buyLogo(BUY_LOGOS.osmosis, 0) },
  { name: "Skip Go", tagKey: "buy.skipTag", tag: "Cross-chain swap", href: "https://swap.sentinel.co", logo: buyLogo(BUY_LOGOS.skip, 6) }
];
function LangSwitcher() {
  const meta = typeof window !== "undefined" && window.__i18n || {
    cookie: "sn-locale",
    locales: ["en"],
    names: { en: "English" },
    isRtl: () => false
  };
  const current = typeof window !== "undefined" && window.__locale || "en";
  const [open, setOpen] = useState(false);
  const closeT = useRef(null);
  const enter = () => {
    if (closeT.current) clearTimeout(closeT.current);
    setOpen(true);
  };
  const leave = () => {
    if (closeT.current) clearTimeout(closeT.current);
    closeT.current = setTimeout(() => setOpen(false), 350);
  };
  useEffect(() => () => {
    if (closeT.current) clearTimeout(closeT.current);
  }, []);
  const choose = (loc) => {
    if (loc === current) {
      setOpen(false);
      return;
    }
    document.cookie = `${meta.cookie}=${encodeURIComponent(loc)}; path=/; max-age=31536000; samesite=lax`;
    window.location.reload();
  };
  return /* @__PURE__ */ jsxs("div", { style: { position: "relative" }, onMouseEnter: enter, onMouseLeave: leave, children: [
    /* @__PURE__ */ jsxs(
      "button",
      {
        type: "button",
        "aria-haspopup": "true",
        "aria-expanded": open,
        "aria-label": tr$2("lang.label", "Language"),
        onClick: () => setOpen((o) => !o),
        style: { display: "inline-flex", alignItems: "center", gap: 7, height: 34, padding: "0 12px", borderRadius: 999, cursor: "pointer", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.14)", fontFamily: T.fontHeading, fontWeight: 500, fontSize: 13.5, color: "rgba(234,234,234,0.92)", transition: "background 160ms, border-color 160ms" },
        onMouseOver: (e) => {
          e.currentTarget.style.background = "rgba(255,255,255,0.08)";
        },
        onMouseOut: (e) => {
          e.currentTarget.style.background = "rgba(255,255,255,0.05)";
        },
        children: [
          /* @__PURE__ */ jsxs("svg", { width: "15", height: "15", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.6", "aria-hidden": "true", children: [
            /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "9" }),
            /* @__PURE__ */ jsx("path", { d: "M3 12h18M12 3c2.5 2.6 2.5 15.4 0 18M12 3c-2.5 2.6-2.5 15.4 0 18" })
          ] }),
          /* @__PURE__ */ jsx("span", { children: meta.names[current] || current }),
          /* @__PURE__ */ jsx("svg", { width: "8", height: "5", viewBox: "0 0 9 6", fill: "none", style: { transform: open ? "rotate(180deg)" : "none", transition: "transform 220ms" }, "aria-hidden": "true", children: /* @__PURE__ */ jsx("path", { d: "M0.5 1L4.5 5L8.5 1", stroke: "currentColor", strokeWidth: "1.2", strokeLinecap: "round" }) })
        ]
      }
    ),
    open && /* @__PURE__ */ jsx("div", { style: { position: "absolute", top: "100%", right: 0, paddingTop: 8, zIndex: 70, animation: "sn-buy-in 200ms cubic-bezier(.22,.61,.36,1) both" }, children: /* @__PURE__ */ jsx("div", { role: "menu", style: { minWidth: 180, padding: 6, borderRadius: 14, background: "rgba(18,18,20,0.96)", border: "1px solid rgba(255,255,255,0.1)", backdropFilter: "blur(16px)", boxShadow: "0 18px 50px -16px rgba(0,0,0,0.7)" }, children: meta.locales.map((loc) => {
      const active = loc === current;
      return /* @__PURE__ */ jsxs(
        "button",
        {
          type: "button",
          role: "menuitemradio",
          "aria-checked": active,
          dir: meta.isRtl(loc) ? "rtl" : "ltr",
          onClick: () => choose(loc),
          className: "sn-buy-row",
          style: { display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10, width: "100%", boxSizing: "border-box", padding: "9px 12px", borderRadius: 9, border: "none", cursor: "pointer", background: active ? "rgba(1,86,252,0.18)" : "transparent", fontFamily: T.fontBody, fontSize: 14, color: active ? "#9cc0ff" : "rgba(234,234,234,0.82)", textAlign: "start" },
          children: [
            /* @__PURE__ */ jsx("span", { children: meta.names[loc] || loc }),
            active && /* @__PURE__ */ jsx("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.4", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", children: /* @__PURE__ */ jsx("path", { d: "M20 6 9 17l-5-5" }) })
          ]
        },
        loc
      );
    }) }) })
  ] });
}
function BuyP2P() {
  const [open, setOpen] = useState(false);
  const closeT = useRef(null);
  const enter = () => {
    if (closeT.current) clearTimeout(closeT.current);
    setOpen(true);
  };
  const leave = () => {
    if (closeT.current) clearTimeout(closeT.current);
    closeT.current = setTimeout(() => setOpen(false), 350);
  };
  useEffect(() => () => {
    if (closeT.current) clearTimeout(closeT.current);
  }, []);
  return /* @__PURE__ */ jsxs("div", { style: { position: "relative" }, onMouseEnter: enter, onMouseLeave: leave, children: [
    /* @__PURE__ */ jsx("style", { children: `.sn-buy-row { transition:background 160ms; } .sn-buy-row:hover { background:rgba(255,255,255,0.06); } @keyframes sn-buy-in { from { opacity:0; transform:translateY(6px); } to { opacity:1; transform:translateY(0); } }` }),
    /* @__PURE__ */ jsxs(
      "button",
      {
        "aria-haspopup": "true",
        "aria-expanded": open,
        onClick: () => setOpen((o) => !o),
        style: { display: "inline-flex", alignItems: "center", gap: 7, height: 34, padding: "0 14px", borderRadius: 999, cursor: "pointer", background: "#0156FC", border: "1px solid rgba(255,255,255,0.14)", fontFamily: T.fontHeading, fontWeight: 500, fontSize: 14, color: "#fff" },
        children: [
          tr$2("nav.buyP2P", "Buy P2P"),
          /* @__PURE__ */ jsx("svg", { width: "8", height: "5", viewBox: "0 0 9 6", fill: "none", style: { transform: open ? "rotate(180deg)" : "none", transition: "transform 220ms" }, children: /* @__PURE__ */ jsx("path", { d: "M0.5 1L4.5 5L8.5 1", stroke: "white", strokeWidth: "1.2", strokeLinecap: "round" }) })
        ]
      }
    ),
    open && /* @__PURE__ */ jsx("div", { style: { position: "absolute", top: "100%", right: 0, paddingTop: 10, zIndex: 60, animation: "sn-buy-in 220ms cubic-bezier(.22,.61,.36,1) both" }, children: /* @__PURE__ */ jsx("div", { style: { width: 232, boxSizing: "border-box", background: "#0c0c0c", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 18, padding: 10, boxShadow: "0 30px 70px -20px rgba(0,0,0,0.75)", display: "flex", flexDirection: "column", gap: 2 }, children: BUY_VENUES.map((v) => /* @__PURE__ */ jsxs(
      "a",
      {
        href: v.href,
        target: "_blank",
        rel: "noopener",
        className: "sn-buy-row",
        style: { display: "flex", alignItems: "center", gap: 11, padding: "9px 10px", borderRadius: 12, textDecoration: "none" },
        children: [
          v.logo,
          /* @__PURE__ */ jsxs("span", { style: { display: "flex", flexDirection: "column", gap: 1 }, children: [
            /* @__PURE__ */ jsx("span", { style: { fontFamily: T.fontHeading, fontWeight: 500, fontSize: 14.5, color: "rgba(255,255,255,0.95)" }, children: v.name }),
            /* @__PURE__ */ jsx("span", { style: { fontFamily: T.fontBody, fontSize: 11.5, color: "rgba(255,255,255,0.45)" }, children: v.tag })
          ] }),
          /* @__PURE__ */ jsx("span", { style: { marginLeft: "auto", fontFamily: T.fontBody, color: "rgba(255,255,255,0.4)", fontSize: 12 }, "aria-hidden": "true", children: "↗" })
        ]
      },
      v.name
    )) }) })
  ] });
}
function Header$1() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [acc, setAcc] = useState(null);
  const isMobile = useIsMobile$1(900);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);
  useEffect(() => {
    if (!isMobile) setMobileOpen(false);
  }, [isMobile]);
  const navItems = ["Explore", "dVPN", "Build", "More"];
  const headerBg = scrolled || open || mobileOpen ? "rgba(12,12,12,0.92)" : "transparent";
  if (isMobile) {
    return /* @__PURE__ */ jsxs("header", { style: { position: "fixed", top: 0, left: 0, right: 0, zIndex: 50, transition: "background 300ms, border-color 300ms", borderBottom: `1px solid ${scrolled || mobileOpen ? "rgba(255,255,255,0.06)" : "transparent"}`, background: headerBg, backdropFilter: scrolled || mobileOpen ? "blur(16px)" : "none" }, children: [
      /* @__PURE__ */ jsxs("div", { style: { padding: "0 clamp(16px,4vw,24px)", height: 62, display: "flex", alignItems: "center", justifyContent: "space-between" }, children: [
        /* @__PURE__ */ jsxs("a", { href: "#", style: { display: "flex", alignItems: "center", gap: 9, textDecoration: "none" }, children: [
          /* @__PURE__ */ jsx(SentinelMark$1, { size: 28, color: "#0156FC" }),
          /* @__PURE__ */ jsx("span", { style: { fontFamily: T.fontHeading, fontWeight: 400, fontSize: 17, color: "white" }, children: "Sentinel" })
        ] }),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => setMobileOpen((o) => !o),
            "aria-label": "Menu",
            "aria-expanded": mobileOpen,
            style: { width: 42, height: 42, display: "grid", placeItems: "center", background: "transparent", border: "1px solid rgba(255,255,255,0.14)", borderRadius: 12, cursor: "pointer" },
            children: /* @__PURE__ */ jsx("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "#fff", strokeWidth: "2", strokeLinecap: "round", children: mobileOpen ? /* @__PURE__ */ jsxs("g", { children: [
              /* @__PURE__ */ jsx("line", { x1: "6", y1: "6", x2: "18", y2: "18" }),
              /* @__PURE__ */ jsx("line", { x1: "18", y1: "6", x2: "6", y2: "18" })
            ] }) : /* @__PURE__ */ jsxs("g", { children: [
              /* @__PURE__ */ jsx("line", { x1: "3", y1: "7", x2: "21", y2: "7" }),
              /* @__PURE__ */ jsx("line", { x1: "3", y1: "12", x2: "21", y2: "12" }),
              /* @__PURE__ */ jsx("line", { x1: "3", y1: "17", x2: "21", y2: "17" })
            ] }) })
          }
        )
      ] }),
      mobileOpen && /* @__PURE__ */ jsxs("div", { style: { height: "calc(100vh - 62px)", overflowY: "auto", WebkitOverflowScrolling: "touch", padding: "12px clamp(16px,4vw,24px) 40px", display: "flex", flexDirection: "column", gap: 6 }, children: [
        navItems.map((l) => {
          const menu = NAV_MENUS[l];
          const isOpen = acc === l;
          if (!menu) return /* @__PURE__ */ jsx("a", { href: "#", onClick: () => setMobileOpen(false), style: { fontFamily: T.fontHeading, fontWeight: 500, fontSize: 20, color: "#fff", textDecoration: "none", padding: "16px 4px", borderBottom: "1px solid rgba(255,255,255,0.07)" }, children: tr$2(NAV_LABEL_KEYS[l] || "", l) }, l);
          return /* @__PURE__ */ jsxs("div", { style: { borderBottom: "1px solid rgba(255,255,255,0.07)" }, children: [
            /* @__PURE__ */ jsxs(
              "button",
              {
                onClick: () => setAcc(isOpen ? null : l),
                "aria-expanded": isOpen,
                style: { width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", background: "transparent", border: "none", cursor: "pointer", padding: "16px 4px", fontFamily: T.fontHeading, fontWeight: 500, fontSize: 20, color: "#fff" },
                children: [
                  tr$2(NAV_LABEL_KEYS[l] || "", l),
                  /* @__PURE__ */ jsx("svg", { width: "14", height: "9", viewBox: "0 0 14 9", fill: "none", style: { transform: isOpen ? "rotate(180deg)" : "none", transition: "transform 220ms" }, children: /* @__PURE__ */ jsx("path", { d: "M1 1l6 6 6-6", stroke: "rgba(255,255,255,0.6)", strokeWidth: "1.6", strokeLinecap: "round", strokeLinejoin: "round" }) })
                ]
              }
            ),
            isOpen && /* @__PURE__ */ jsx("div", { style: { display: "flex", flexDirection: "column", gap: 2, padding: "0 4px 14px" }, children: menu.items.map((it) => /* @__PURE__ */ jsxs(
              "a",
              {
                href: it.href || "#",
                target: "_blank",
                rel: "noopener",
                onClick: () => setMobileOpen(false),
                style: { display: "flex", flexDirection: "column", gap: 3, padding: "11px 12px", borderRadius: 12, textDecoration: "none", background: "rgba(255,255,255,0.03)" },
                children: [
                  /* @__PURE__ */ jsx("span", { style: { fontFamily: T.fontHeading, fontWeight: 500, fontSize: 15.5, color: "rgba(255,255,255,0.95)" }, children: it.title }),
                  /* @__PURE__ */ jsx("span", { style: { fontFamily: T.fontBody, fontSize: 13, lineHeight: 1.35, color: "rgba(255,255,255,0.45)" }, children: it.desc })
                ]
              },
              it.title
            )) })
          ] }, l);
        }),
        /* @__PURE__ */ jsxs("div", { style: { display: "flex", alignItems: "center", gap: 20, marginTop: 18, padding: "0 4px" }, children: [
          /* @__PURE__ */ jsx("a", { className: "sn-header-icon", "aria-label": "GitHub", href: "https://github.com/sentinel-official", target: "_blank", rel: "noopener", onClick: () => setMobileOpen(false), style: { textDecoration: "none" }, children: /* @__PURE__ */ jsx("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "currentColor", "aria-hidden": "true", children: /* @__PURE__ */ jsx("path", { d: "M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-2.17c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.69 1.25 3.34.96.1-.74.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.18-1.49 3.14-1.18 3.14-1.18.63 1.59.23 2.76.12 3.05.73.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.38-5.25 5.66.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" }) }) }),
          /* @__PURE__ */ jsx(LangSwitcher, {})
        ] }),
        /* @__PURE__ */ jsx("span", { style: { fontFamily: T.fontMono, fontSize: 11, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.45)", marginTop: 18, padding: "0 4px" }, children: tr$2("nav.buyP2P", "Buy P2P") }),
        /* @__PURE__ */ jsx("div", { style: { display: "flex", alignItems: "center", gap: 8, marginTop: 8, padding: "0 4px", flexWrap: "wrap" }, children: BUY_VENUES.map((v) => /* @__PURE__ */ jsxs(
          "a",
          {
            href: v.href,
            target: "_blank",
            rel: "noopener",
            onClick: () => setMobileOpen(false),
            style: { display: "inline-flex", alignItems: "center", gap: 8, padding: "8px 13px 8px 9px", borderRadius: 999, textDecoration: "none", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.10)" },
            children: [
              v.logo,
              /* @__PURE__ */ jsx("span", { style: { fontFamily: T.fontHeading, fontWeight: 500, fontSize: 14, color: "rgba(255,255,255,0.9)" }, children: v.name })
            ]
          },
          v.name
        )) })
      ] })
    ] });
  }
  return /* @__PURE__ */ jsx("header", { style: { position: "fixed", top: 0, left: 0, right: 0, zIndex: 50, transition: "background 300ms, border-color 300ms", borderBottom: `1px solid ${scrolled || open ? "rgba(255,255,255,0.06)" : "transparent"}`, background: headerBg, backdropFilter: scrolled || open ? "blur(16px)" : "none" }, children: /* @__PURE__ */ jsxs("div", { style: { maxWidth: 1320, margin: "0 auto", padding: "0 clamp(16px, 2.5vw, 24px)", height: 68, display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }, children: [
    /* @__PURE__ */ jsxs("a", { href: "#", style: { display: "flex", alignItems: "center", gap: 10, textDecoration: "none", flexShrink: 0, position: "absolute", left: "clamp(16px, 2.5vw, 24px)" }, children: [
      /* @__PURE__ */ jsx(SentinelMark$1, { size: 32, color: "#0156FC" }),
      /* @__PURE__ */ jsx("span", { style: { fontFamily: T.fontHeading, fontWeight: 400, fontSize: 18, color: "white" }, children: "Sentinel" })
    ] }),
    /* @__PURE__ */ jsxs(
      "nav",
      {
        style: { display: "flex", alignItems: "center", gap: 0, height: 68, position: "relative", margin: "0 auto" },
        onMouseLeave: () => setOpen(null),
        children: [
          navItems.map((l) => {
            const hasMenu = !!NAV_MENUS[l];
            return /* @__PURE__ */ jsxs(
              "a",
              {
                href: "#",
                className: "sn-nav-link",
                "data-open": open === l ? "true" : "false",
                onMouseEnter: () => setOpen(hasMenu ? l : null),
                children: [
                  tr$2(NAV_LABEL_KEYS[l] || "", l),
                  hasMenu && /* @__PURE__ */ jsx("svg", { className: "sn-caret", width: "9", height: "6", viewBox: "0 0 9 6", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ jsx("path", { d: "M0.5 1L4.5 5L8.5 1", stroke: "currentColor", strokeWidth: "1.3", strokeLinecap: "round", strokeLinejoin: "round" }) })
                ]
              },
              l
            );
          }),
          open && NAV_MENUS[open] && /* @__PURE__ */ jsx("div", { style: { position: "absolute", top: "100%", left: "50%", paddingTop: 12, zIndex: 60, animation: "sn-dd-in 220ms cubic-bezier(.22,.61,.36,1) both" }, children: /* @__PURE__ */ jsx(DropdownPanel, { menu: NAV_MENUS[open] }) }, open)
        ]
      }
    ),
    /* @__PURE__ */ jsxs("div", { style: { display: "flex", alignItems: "center", gap: 18, position: "absolute", right: "clamp(16px, 2.5vw, 24px)" }, children: [
      /* @__PURE__ */ jsx("a", { className: "sn-header-icon", "aria-label": "GitHub", href: "https://github.com/sentinel-official", target: "_blank", rel: "noopener", style: { textDecoration: "none" }, children: /* @__PURE__ */ jsx("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "currentColor", "aria-hidden": "true", children: /* @__PURE__ */ jsx("path", { d: "M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-2.17c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.69 1.25 3.34.96.1-.74.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.18-1.49 3.14-1.18 3.14-1.18.63 1.59.23 2.76.12 3.05.73.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.38-5.25 5.66.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" }) }) }),
      /* @__PURE__ */ jsx(LangSwitcher, {}),
      /* @__PURE__ */ jsx(BuyP2P, {})
    ] })
  ] }) });
}
function HeroBulletList({ compact }) {
  ({ color: T.fog});
  const POINTS = [
    /* @__PURE__ */ jsx("span", { children: tr$2("hero.bullet1", "A perpetual, on-chain DHT — consensus-protected, censorship-resistant.") }),
    /* @__PURE__ */ jsx("span", { children: tr$2("hero.bullet2", "Zero bootstrap nodes, zero central servers to seize.") }),
    /* @__PURE__ */ jsx("span", { children: tr$2("hero.bullet3", "Bandwidth contributed by independent operators in 70+ countries.") }),
    /* @__PURE__ */ jsx("span", { children: tr$2("hero.bullet4", "Any client can join with nothing more than an RPC endpoint.") })
  ];
  return /* @__PURE__ */ jsx("ul", { style: { listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: compact ? 14 : 18 }, children: POINTS.map((p, i) => /* @__PURE__ */ jsxs("li", { style: { display: "flex", alignItems: "flex-start", gap: compact ? 12 : 14, fontFamily: T.fontBody, fontSize: compact ? 15 : 16, lineHeight: compact ? "23px" : "25px", color: "rgba(234,234,234,0.78)" }, children: [
    /* @__PURE__ */ jsx("span", { "aria-hidden": "true", style: { flexShrink: 0, marginTop: compact ? 3 : 4, display: "inline-flex" }, children: /* @__PURE__ */ jsx(SentinelMark$1, { size: compact ? 14 : 15, color: "#0156FC" }) }),
    p
  ] }, i)) });
}
function HeroNetworkStats({ hideBullets }) {
  const START = 1418375;
  const [count, setCount] = useState(START);
  useEffect(() => {
    const drift = setInterval(() => setCount((c) => c + 1 + Math.floor(Math.random() * 3)), 1800);
    return () => clearInterval(drift);
  }, []);
  return /* @__PURE__ */ jsxs("div", { style: { maxWidth: 580, width: "100%", boxSizing: "border-box", display: "flex", flexDirection: "column", gap: "clamp(26px,3.5vw,34px)" }, children: [
    /* @__PURE__ */ jsx("style", { children: "@keyframes snHeroPulse{0%,100%{opacity:1;transform:scale(1)}50%{opacity:0.35;transform:scale(0.72)}}" }),
    !hideBullets && /* @__PURE__ */ jsx(HeroBulletList, {}),
    /* @__PURE__ */ jsxs("div", { style: { display: "flex", alignItems: "center", gap: 14, flexWrap: "wrap" }, children: [
      /* @__PURE__ */ jsx("span", { "aria-hidden": "true", style: { width: 8, height: 8, borderRadius: 9999, background: "#0156FC", boxShadow: "0 0 9px rgba(1,86,252,0.9)", animation: "snHeroPulse 1.6s ease-in-out infinite", flexShrink: 0, display: "inline-block" } }),
      /* @__PURE__ */ jsx("span", { style: { fontFamily: T.fontHeading, fontWeight: 400, fontSize: "clamp(30px,4vw,40px)", lineHeight: 1.05, letterSpacing: "-0.01em", color: T.fog, fontVariantNumeric: "tabular-nums" }, children: count.toLocaleString("en-US") }),
      /* @__PURE__ */ jsx("span", { style: { fontFamily: T.fontBody, fontSize: "clamp(16px,1.8vw,19px)", lineHeight: 1.4, color: "rgba(234,234,234,0.82)" }, children: tr$2("hero.usersCounter", "people use dVPN apps built on Sentinel") })
    ] })
  ] });
}
function Hero$1() {
  const isMobile = useIsMobile$1();
  const videoRef = useRef(null);
  useEffect(() => {
    const v = videoRef.current;
    if (!v || v.getAttribute("src")) return;
    v.src = window.__resources.heroVideo;
    const p = v.play();
    if (p && typeof p.catch === "function") p.catch((err) => {
      console.warn("[hero] autoplay rejected after src attach:", err && err.name);
    });
  }, []);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("section", { style: { position: "relative", overflow: "hidden", minHeight: "100vh", display: "flex", alignItems: "center", background: "#0b0c10" }, children: [
      /* @__PURE__ */ jsx(
        "video",
        {
          ref: videoRef,
          style: isMobile ? { position: "absolute", top: 0, left: 0, width: "100%", height: "72svh", objectFit: "cover", objectPosition: "center top", zIndex: 0, backgroundColor: "#0b0c10" } : { position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", zIndex: 0, backgroundColor: "#0b0c10" },
          autoPlay: true,
          muted: true,
          loop: true,
          playsInline: true,
          preload: "auto",
          suppressHydrationWarning: true
        }
      ),
      /* @__PURE__ */ jsx("div", { style: isMobile ? { position: "absolute", top: 0, left: 0, right: 0, height: "72svh", zIndex: 1, background: "linear-gradient(to bottom, rgba(11,12,16,0.38) 0%, rgba(11,12,16,0.08) 30%, rgba(11,12,16,0.55) 78%, rgba(11,12,16,1) 100%)", pointerEvents: "none" } : { position: "absolute", inset: 0, zIndex: 1, background: "linear-gradient(to right, rgba(0,0,0,0.38) 0%, rgba(0,0,0,0.12) 50%, rgba(0,0,0,0) 100%)", pointerEvents: "none" } }),
      /* @__PURE__ */ jsx("div", { style: { ...atomStyles.container, position: "relative", zIndex: 2, paddingTop: isMobile ? 0 : "clamp(104px,18vw,140px)", paddingBottom: isMobile ? 56 : "clamp(56px,10vw,100px)" }, children: /* @__PURE__ */ jsxs("div", { "data-mark": "sn-hero-air", style: isMobile ? { display: "flex", flexDirection: "column", justifyContent: "flex-end", gap: 18, maxWidth: 640, minHeight: "100svh", boxSizing: "border-box", paddingTop: "2svh", paddingBottom: 36 } : { display: "flex", flexDirection: "column", gap: "clamp(28px,4.5vw,42px)", maxWidth: 640 }, children: [
        /* @__PURE__ */ jsx("h1", { style: { fontFamily: T.fontHeading, fontWeight: 400, fontSize: "clamp(38px,7.5vw,64px)", lineHeight: 1.08, letterSpacing: "-0.01em", color: T.fog, margin: 0 }, children: tr$2("hero.title", "Build your own decentralized VPN.") }),
        /* @__PURE__ */ jsxs("p", { style: { fontFamily: T.fontBody, fontSize: "clamp(16px,2vw,20px)", lineHeight: 1.5, color: T.onDark, margin: 0, maxWidth: 560 }, children: [
          tr$2("hero.subtitle", "The most resilient peer-to-peer networking protocol designed to be censorship-resistant for any geography."),
          " ",
          /* @__PURE__ */ jsxs("a", { href: "#network-compare", className: "sn-readmore", style: { position: "relative", display: "inline-flex", alignItems: "center", gap: 7, verticalAlign: "baseline", fontFamily: T.fontHeading, fontWeight: 600, fontSize: "0.78em", letterSpacing: "0.02em", color: "#9cc0ff", textDecoration: "none", whiteSpace: "nowrap", paddingBottom: 3, marginLeft: 12 }, children: [
            tr$2("hero.readMore", "Read more"),
            /* @__PURE__ */ jsx("span", { className: "sn-readmore-arrow", "aria-hidden": "true", style: { display: "inline-block", fontSize: "0.92em", opacity: 0.85, lineHeight: 1 }, children: "↓" })
          ] })
        ] }),
        /* @__PURE__ */ jsx(HeroNetworkStats, { hideBullets: isMobile }),
        /* @__PURE__ */ jsxs("div", { style: { display: "flex", alignItems: "stretch", flexWrap: "wrap", gap: "clamp(10px,1.4vw,14px)", marginTop: 14, width: "100%", maxWidth: 640 }, children: [
          /* @__PURE__ */ jsx("style", { children: `
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
            ` }),
          /* @__PURE__ */ jsxs("a", { href: "#use-dvpn", className: "sn-hero-cta sn-cta-blue", children: [
            tr$2("hero.ctaUse", "Use a dVPN App"),
            " ",
            /* @__PURE__ */ jsx("span", { className: "sn-cta-arrow", "aria-hidden": "true", children: "→" })
          ] }),
          /* @__PURE__ */ jsxs("a", { href: "#build-dvpn", className: "sn-hero-cta sn-cta-glass", children: [
            tr$2("hero.ctaBuild", "Build a dVPN App"),
            " ",
            /* @__PURE__ */ jsx("span", { className: "sn-cta-arrow", "aria-hidden": "true", children: "→" })
          ] }),
          /* @__PURE__ */ jsxs("a", { href: "#host-dvpn", className: "sn-hero-cta sn-cta-glass", children: [
            tr$2("hero.ctaHost", "Host a dVPN Node"),
            " ",
            /* @__PURE__ */ jsx("span", { className: "sn-cta-arrow", "aria-hidden": "true", children: "→" })
          ] })
        ] })
      ] }) })
    ] }),
    isMobile && /* @__PURE__ */ jsx("div", { style: { ...atomStyles.container, background: "#0b0c10", paddingTop: 8, paddingBottom: 56 }, children: /* @__PURE__ */ jsx("div", { style: { maxWidth: 560 }, children: /* @__PURE__ */ jsx(HeroBulletList, { compact: true }) }) })
  ] });
}
function SupportersStrip() {
  const logos = [
    { src: window.__resources.logoGalaxy, alt: "Galaxy" },
    { src: window.__resources.logoTrgc, alt: "TRGC" },
    { src: window.__resources.logoCosmos, alt: "Cosmos" },
    { src: window.__resources.logoFetch, alt: "Fetch" }
  ];
  const repeated = [...logos, ...logos, ...logos, ...logos];
  return /* @__PURE__ */ jsx("section", { style: { background: "radial-gradient(900px 360px at 50% -30%, rgba(1,86,252,0.10), transparent 62%), #0b0c10", padding: "64px 0 0" }, children: /* @__PURE__ */ jsx("div", { style: { position: "relative", overflow: "hidden", maskImage: "linear-gradient(to right,transparent 0,black 100px,black calc(100% - 100px),transparent 100%)", WebkitMaskImage: "linear-gradient(to right,transparent 0,black 100px,black calc(100% - 100px),transparent 100%)" }, children: /* @__PURE__ */ jsx("div", { style: { display: "flex", gap: 100, alignItems: "center", width: "max-content", animation: "sn-marquee 28s linear infinite" }, children: repeated.map((l, i) => /* @__PURE__ */ jsx(
    "img",
    {
      src: l.src,
      alt: l.alt,
      style: { height: 28, objectFit: "contain", opacity: 0.55, filter: "grayscale(1) brightness(2)", flexShrink: 0 }
    },
    i
  )) }) }) });
}
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
function StatValue({ value }) {
  const ref = useRef(null);
  const [txt, setTxt] = useState(value);
  useEffect(() => {
    const m = value.match(/^(\d+(?:\.\d+)?)(.*)$/);
    const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!m || reduce || !("IntersectionObserver" in window) || !ref.current) return;
    const target = parseFloat(m[1]);
    const suffix = m[2];
    const decimals = (m[1].split(".")[1] || "").length;
    let raf = null;
    const io = new IntersectionObserver((entries) => {
      if (!entries[0].isIntersecting) return;
      io.disconnect();
      const t0 = performance.now(), dur = 1400;
      const tick = (now) => {
        const p = Math.min(1, (now - t0) / dur);
        const eased = 1 - Math.pow(1 - p, 3);
        setTxt((target * eased).toFixed(decimals) + suffix);
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    }, { threshold: 0.4 });
    io.observe(ref.current);
    return () => {
      io.disconnect();
      if (raf) cancelAnimationFrame(raf);
    };
  }, [value]);
  return /* @__PURE__ */ jsx("span", { ref, children: txt });
}
function StatsStrip$1() {
  const isMobile = useIsMobile$1();
  const stats = [
    { v: "8+", l: tr$2("stats.dapps", "dApps built on Sentinel") },
    { v: "1.4M+", l: tr$2("stats.totalUsers", "Total Users") },
    { v: "1500+", l: tr$2("stats.providers", "P2P Bandwidth Providers") },
    { v: "6+ PB", l: tr$2("stats.data", "Data Consumed") }
  ];
  const hairline = "rgba(255,255,255,0.07)";
  const dividers = (i) => isMobile ? [i % 2 === 1 ? `-1px 0 0 ${hairline}` : null, i >= 2 ? `0 -1px 0 ${hairline}` : null].filter(Boolean).join(", ") || "none" : i > 0 ? `-1px 0 0 ${hairline}` : "none";
  return /* @__PURE__ */ jsxs("section", { style: { background: "transparent", paddingTop: "clamp(48px,6vw,72px)", paddingBottom: "clamp(40px,5vw,64px)" }, children: [
    /* @__PURE__ */ jsx("style", { children: SN_NETWORK_CSS }),
    /* @__PURE__ */ jsxs("div", { style: { ...atomStyles.container }, children: [
      /* @__PURE__ */ jsx("div", { className: "sn-stats-frame", style: { display: "grid", gridTemplateColumns: isMobile ? "repeat(2,minmax(0,1fr))" : "repeat(4,minmax(0,1fr))", borderRadius: 24, border: `1px solid ${hairline}`, background: "linear-gradient(180deg, rgba(255,255,255,0.030), rgba(255,255,255,0.008))", overflow: "hidden" }, children: stats.map((s, i) => /* @__PURE__ */ jsxs("div", { style: { padding: isMobile ? "26px 16px" : "36px 28px 32px", boxShadow: dividers(i), display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }, children: [
        /* @__PURE__ */ jsx("div", { style: { fontFamily: T.fontHeading, fontWeight: 700, fontSize: "clamp(34px,4.2vw,52px)", lineHeight: 1.05, letterSpacing: "-0.01em", fontVariantNumeric: "tabular-nums", background: "linear-gradient(180deg, #ffffff 0%, rgba(234,234,234,0.72) 100%)", WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent" }, children: /* @__PURE__ */ jsx(StatValue, { value: s.v }) }),
        /* @__PURE__ */ jsx("span", { "aria-hidden": "true", style: { width: 22, height: 2, borderRadius: 2, background: "linear-gradient(90deg, #0156fc, #2670ff)", margin: "14px 0 10px" } }),
        /* @__PURE__ */ jsx("div", { style: { fontFamily: T.fontHeading, fontWeight: 500, fontSize: "clamp(13.5px,1.3vw,15px)", lineHeight: 1.45, color: T.onDark60, maxWidth: 210 }, children: s.l })
      ] }, s.l)) }),
      /* @__PURE__ */ jsx("div", { "data-mark": "sn-stats-cta", style: { display: "flex", justifyContent: "center", marginTop: "clamp(18px,2.4vw,26px)" }, children: /* @__PURE__ */ jsxs(
        "a",
        {
          href: L.stats,
          target: "_blank",
          rel: "noopener",
          className: "sn-stats-cta",
          style: { display: "inline-flex", alignItems: "center", gap: 12, padding: "12px 18px", textDecoration: "none", background: "linear-gradient(180deg, rgba(255,255,255,0.040), rgba(255,255,255,0.012))", border: `1px solid ${hairline}`, borderRadius: 14 },
          children: [
            /* @__PURE__ */ jsx("span", { style: { width: 38, height: 38, borderRadius: 11, flexShrink: 0, background: "rgba(1,86,252,0.12)", border: "1px solid rgba(94,148,255,0.30)", display: "inline-flex", alignItems: "center", justifyContent: "center" }, children: /* @__PURE__ */ jsx(SentinelMark$1, { size: 20, color: "#2670FF" }) }),
            /* @__PURE__ */ jsx("span", { className: "sn-stats-cta-label", style: { fontFamily: T.fontHeading, fontWeight: 600, fontSize: 15, lineHeight: 1, color: T.fog, whiteSpace: "nowrap" }, children: tr$2("stats.viewNetworkStats", "View Network Stats") }),
            /* @__PURE__ */ jsx("span", { className: "sn-stats-cta-arrow", "aria-hidden": "true", style: { fontSize: 15, fontWeight: 600, lineHeight: 1, color: "#2670FF", flexShrink: 0 }, children: "↗" })
          ]
        }
      ) })
    ] })
  ] });
}
const SN_FLAGS = {
  US: /* @__PURE__ */ jsxs("svg", { width: "22", height: "16", viewBox: "0 0 22 16", children: [
    /* @__PURE__ */ jsx("rect", { width: "22", height: "16", fill: "#ffffff" }),
    /* @__PURE__ */ jsxs("g", { fill: "#B22234", children: [
      /* @__PURE__ */ jsx("rect", { y: "0", width: "22", height: "1.25" }),
      /* @__PURE__ */ jsx("rect", { y: "2.46", width: "22", height: "1.25" }),
      /* @__PURE__ */ jsx("rect", { y: "4.92", width: "22", height: "1.25" }),
      /* @__PURE__ */ jsx("rect", { y: "7.38", width: "22", height: "1.25" }),
      /* @__PURE__ */ jsx("rect", { y: "9.85", width: "22", height: "1.25" }),
      /* @__PURE__ */ jsx("rect", { y: "12.31", width: "22", height: "1.25" }),
      /* @__PURE__ */ jsx("rect", { y: "14.77", width: "22", height: "1.23" })
    ] }),
    /* @__PURE__ */ jsx("rect", { width: "9.6", height: "8.6", fill: "#3C3B6E" }),
    /* @__PURE__ */ jsxs("g", { fill: "#ffffff", children: [
      /* @__PURE__ */ jsx("circle", { cx: "1.9", cy: "1.7", r: "0.55" }),
      /* @__PURE__ */ jsx("circle", { cx: "4.6", cy: "1.7", r: "0.55" }),
      /* @__PURE__ */ jsx("circle", { cx: "7.3", cy: "1.7", r: "0.55" }),
      /* @__PURE__ */ jsx("circle", { cx: "3.2", cy: "3.4", r: "0.55" }),
      /* @__PURE__ */ jsx("circle", { cx: "5.9", cy: "3.4", r: "0.55" }),
      /* @__PURE__ */ jsx("circle", { cx: "1.9", cy: "5.1", r: "0.55" }),
      /* @__PURE__ */ jsx("circle", { cx: "4.6", cy: "5.1", r: "0.55" }),
      /* @__PURE__ */ jsx("circle", { cx: "7.3", cy: "5.1", r: "0.55" }),
      /* @__PURE__ */ jsx("circle", { cx: "3.2", cy: "6.8", r: "0.55" }),
      /* @__PURE__ */ jsx("circle", { cx: "5.9", cy: "6.8", r: "0.55" })
    ] })
  ] }),
  GB: /* @__PURE__ */ jsxs("svg", { width: "22", height: "16", viewBox: "0 0 22 16", children: [
    /* @__PURE__ */ jsx("rect", { width: "22", height: "16", fill: "#012169" }),
    /* @__PURE__ */ jsx("path", { d: "M0 0l22 16M22 0L0 16", stroke: "#ffffff", strokeWidth: "3.2" }),
    /* @__PURE__ */ jsx("path", { d: "M0 0l22 16M22 0L0 16", stroke: "#C8102E", strokeWidth: "1.3" }),
    /* @__PURE__ */ jsx("path", { d: "M11 0v16M0 8h22", stroke: "#ffffff", strokeWidth: "5" }),
    /* @__PURE__ */ jsx("path", { d: "M11 0v16M0 8h22", stroke: "#C8102E", strokeWidth: "2.8" })
  ] }),
  DE: /* @__PURE__ */ jsxs("svg", { width: "22", height: "16", viewBox: "0 0 22 16", children: [
    /* @__PURE__ */ jsx("rect", { width: "22", height: "5.33", fill: "#141414" }),
    /* @__PURE__ */ jsx("rect", { y: "5.33", width: "22", height: "5.33", fill: "#DD0000" }),
    /* @__PURE__ */ jsx("rect", { y: "10.66", width: "22", height: "5.34", fill: "#FFCE00" })
  ] }),
  NL: /* @__PURE__ */ jsxs("svg", { width: "22", height: "16", viewBox: "0 0 22 16", children: [
    /* @__PURE__ */ jsx("rect", { width: "22", height: "5.33", fill: "#AE1C28" }),
    /* @__PURE__ */ jsx("rect", { y: "5.33", width: "22", height: "5.33", fill: "#ffffff" }),
    /* @__PURE__ */ jsx("rect", { y: "10.66", width: "22", height: "5.34", fill: "#21468B" })
  ] }),
  FR: /* @__PURE__ */ jsxs("svg", { width: "22", height: "16", viewBox: "0 0 22 16", children: [
    /* @__PURE__ */ jsx("rect", { width: "7.33", height: "16", fill: "#002395" }),
    /* @__PURE__ */ jsx("rect", { x: "7.33", width: "7.34", height: "16", fill: "#ffffff" }),
    /* @__PURE__ */ jsx("rect", { x: "14.67", width: "7.33", height: "16", fill: "#ED2939" })
  ] }),
  JP: /* @__PURE__ */ jsxs("svg", { width: "22", height: "16", viewBox: "0 0 22 16", children: [
    /* @__PURE__ */ jsx("rect", { width: "22", height: "16", fill: "#ffffff" }),
    /* @__PURE__ */ jsx("circle", { cx: "11", cy: "8", r: "4.6", fill: "#BC002D" })
  ] }),
  SG: /* @__PURE__ */ jsxs("svg", { width: "22", height: "16", viewBox: "0 0 22 16", children: [
    /* @__PURE__ */ jsx("rect", { width: "22", height: "8", fill: "#EF3340" }),
    /* @__PURE__ */ jsx("rect", { y: "8", width: "22", height: "8", fill: "#ffffff" }),
    /* @__PURE__ */ jsx("circle", { cx: "4.8", cy: "4", r: "2.7", fill: "#ffffff" }),
    /* @__PURE__ */ jsx("circle", { cx: "5.9", cy: "3.7", r: "2.4", fill: "#EF3340" }),
    /* @__PURE__ */ jsxs("g", { fill: "#ffffff", children: [
      /* @__PURE__ */ jsx("circle", { cx: "8.6", cy: "2.4", r: "0.5" }),
      /* @__PURE__ */ jsx("circle", { cx: "7.2", cy: "3.4", r: "0.5" }),
      /* @__PURE__ */ jsx("circle", { cx: "10", cy: "3.4", r: "0.5" }),
      /* @__PURE__ */ jsx("circle", { cx: "7.8", cy: "5", r: "0.5" }),
      /* @__PURE__ */ jsx("circle", { cx: "9.4", cy: "5", r: "0.5" })
    ] })
  ] }),
  CA: /* @__PURE__ */ jsxs("svg", { width: "22", height: "16", viewBox: "0 0 22 16", children: [
    /* @__PURE__ */ jsx("rect", { width: "22", height: "16", fill: "#ffffff" }),
    /* @__PURE__ */ jsx("rect", { width: "5.5", height: "16", fill: "#D80621" }),
    /* @__PURE__ */ jsx("rect", { x: "16.5", width: "5.5", height: "16", fill: "#D80621" }),
    /* @__PURE__ */ jsx("path", { fill: "#D80621", d: "M11 3.4l.8 1.6 1.4-.6-.4 1.7 1.7.2-1.2 1.3 1.5.9-1.8.5.3 1.7-1.6-.8-.7 1.7-.7-1.7-1.6.8.3-1.7-1.8-.5 1.5-.9-1.2-1.3 1.7-.2-.4-1.7 1.4.6z" })
  ] }),
  BR: /* @__PURE__ */ jsxs("svg", { width: "22", height: "16", viewBox: "0 0 22 16", children: [
    /* @__PURE__ */ jsx("rect", { width: "22", height: "16", fill: "#009B3A" }),
    /* @__PURE__ */ jsx("path", { d: "M11 1.6 20.2 8 11 14.4 1.8 8z", fill: "#FEDF00" }),
    /* @__PURE__ */ jsx("circle", { cx: "11", cy: "8", r: "2.9", fill: "#002776" })
  ] }),
  IN: /* @__PURE__ */ jsxs("svg", { width: "22", height: "16", viewBox: "0 0 22 16", children: [
    /* @__PURE__ */ jsx("rect", { width: "22", height: "5.33", fill: "#FF9933" }),
    /* @__PURE__ */ jsx("rect", { y: "5.33", width: "22", height: "5.33", fill: "#ffffff" }),
    /* @__PURE__ */ jsx("rect", { y: "10.66", width: "22", height: "5.34", fill: "#138808" }),
    /* @__PURE__ */ jsx("circle", { cx: "11", cy: "8", r: "1.8", fill: "none", stroke: "#000080", strokeWidth: "0.6" }),
    /* @__PURE__ */ jsx("circle", { cx: "11", cy: "8", r: "0.4", fill: "#000080" })
  ] }),
  SE: /* @__PURE__ */ jsxs("svg", { width: "22", height: "16", viewBox: "0 0 22 16", children: [
    /* @__PURE__ */ jsx("rect", { width: "22", height: "16", fill: "#006AA7" }),
    /* @__PURE__ */ jsx("rect", { x: "6.2", width: "2.8", height: "16", fill: "#FECC00" }),
    /* @__PURE__ */ jsx("rect", { y: "6.6", width: "22", height: "2.8", fill: "#FECC00" })
  ] }),
  CH: /* @__PURE__ */ jsxs("svg", { width: "22", height: "16", viewBox: "0 0 22 16", children: [
    /* @__PURE__ */ jsx("rect", { width: "22", height: "16", fill: "#DA291C" }),
    /* @__PURE__ */ jsx("rect", { x: "9.6", y: "3.2", width: "2.8", height: "9.6", fill: "#ffffff" }),
    /* @__PURE__ */ jsx("rect", { x: "6.2", y: "6.6", width: "9.6", height: "2.8", fill: "#ffffff" })
  ] }),
  PL: /* @__PURE__ */ jsxs("svg", { width: "22", height: "16", viewBox: "0 0 22 16", children: [
    /* @__PURE__ */ jsx("rect", { width: "22", height: "8", fill: "#ffffff" }),
    /* @__PURE__ */ jsx("rect", { y: "8", width: "22", height: "8", fill: "#DC143C" })
  ] }),
  IT: /* @__PURE__ */ jsxs("svg", { width: "22", height: "16", viewBox: "0 0 22 16", children: [
    /* @__PURE__ */ jsx("rect", { width: "7.33", height: "16", fill: "#009246" }),
    /* @__PURE__ */ jsx("rect", { x: "7.33", width: "7.34", height: "16", fill: "#ffffff" }),
    /* @__PURE__ */ jsx("rect", { x: "14.67", width: "7.33", height: "16", fill: "#CE2B37" })
  ] }),
  ES: /* @__PURE__ */ jsxs("svg", { width: "22", height: "16", viewBox: "0 0 22 16", children: [
    /* @__PURE__ */ jsx("rect", { width: "22", height: "4", fill: "#AA151B" }),
    /* @__PURE__ */ jsx("rect", { y: "4", width: "22", height: "8", fill: "#F1BF00" }),
    /* @__PURE__ */ jsx("rect", { y: "12", width: "22", height: "4", fill: "#AA151B" })
  ] }),
  TR: /* @__PURE__ */ jsxs("svg", { width: "22", height: "16", viewBox: "0 0 22 16", children: [
    /* @__PURE__ */ jsx("rect", { width: "22", height: "16", fill: "#E30A17" }),
    /* @__PURE__ */ jsx("circle", { cx: "7.8", cy: "8", r: "3.6", fill: "#ffffff" }),
    /* @__PURE__ */ jsx("circle", { cx: "8.8", cy: "8", r: "3", fill: "#E30A17" }),
    /* @__PURE__ */ jsx("circle", { cx: "12.6", cy: "8", r: "1.1", fill: "#ffffff" })
  ] })
};
function FlagChip({ code, name }) {
  return /* @__PURE__ */ jsxs("span", { title: name, style: { display: "inline-flex", alignItems: "center", gap: 7 }, children: [
    /* @__PURE__ */ jsx("span", { style: { display: "inline-flex", borderRadius: 4, overflow: "hidden", boxShadow: "0 0 0 1px rgba(255,255,255,0.16)", lineHeight: 0 }, children: SN_FLAGS[code] }),
    /* @__PURE__ */ jsx("span", { style: { fontFamily: T.fontHeading, fontWeight: 500, fontSize: 12.5, color: "rgba(234,234,234,0.9)", whiteSpace: "nowrap" }, children: name })
  ] });
}
function WireGuardMark({ size = 30 }) {
  return /* @__PURE__ */ jsxs("svg", { width: size, height: size, viewBox: "0 0 32 32", "aria-hidden": "true", children: [
    /* @__PURE__ */ jsx("circle", { cx: "16", cy: "16", r: "15", fill: "#88171b" }),
    /* @__PURE__ */ jsx("path", { d: "M16 7.5c-4.7 0-8.5 3.8-8.5 8.5s3.8 8.5 8.5 8.5c3.4 0 6.4-2 7.7-4.9", fill: "none", stroke: "#ffffff", strokeWidth: "2.1", strokeLinecap: "round" }),
    /* @__PURE__ */ jsx("path", { d: "M16 12c-2.2 0-4 1.8-4 4s1.8 4 4 4c1.6 0 3-1 3.6-2.3", fill: "none", stroke: "#ffffff", strokeWidth: "2.1", strokeLinecap: "round" }),
    /* @__PURE__ */ jsx("circle", { cx: "16", cy: "16", r: "1.5", fill: "#ffffff" })
  ] });
}
function V2RayMark({ size = 30 }) {
  return /* @__PURE__ */ jsx("img", { src: "data:image/png;base64,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", width: size, height: size, alt: "", "aria-hidden": "true", style: { borderRadius: 7, display: "block" } });
}
function BuilderStackSection() {
  const isMobile = useIsMobile$1();
  const logoTile = { width: 36, height: 36, borderRadius: 10, flexShrink: 0, display: "inline-flex", alignItems: "center", justifyContent: "center", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" };
  const rowChip = { display: "flex", alignItems: "center", justifyContent: "center", gap: 12, background: "rgba(255,255,255,0.035)", border: "1px solid rgba(255,255,255,0.09)", borderRadius: 14, padding: "14px 15px" };
  const chipName = { fontFamily: T.fontHeading, fontWeight: 600, fontSize: 14, lineHeight: 1.25, color: T.fog };
  const chipSub = { fontFamily: T.fontBody, fontSize: 12, lineHeight: 1.35, color: "rgba(214,222,240,0.62)" };
  const actionStyle = { display: "flex", alignItems: "center", justifyContent: "center", gap: 9, alignSelf: "stretch", width: "100%", height: 46, padding: "0 21px", borderRadius: 999, border: "1px solid rgba(125,160,255,0.35)", background: "linear-gradient(180deg, rgba(56,124,255,0.18), rgba(38,112,255,0.07))", boxShadow: "inset 0 1px 0 rgba(255,255,255,0.10)", fontFamily: T.fontHeading, fontWeight: 600, fontSize: 14, letterSpacing: "0.01em", color: "#b9ceff", textDecoration: "none", whiteSpace: "nowrap", boxSizing: "border-box" };
  const actionRow = (label, href) => /* @__PURE__ */ jsxs("a", { href, target: "_blank", rel: "noopener", className: "sn-layer-act", style: actionStyle, children: [
    label,
    /* @__PURE__ */ jsx("span", { className: "sn-layer-act-arrow", "aria-hidden": "true", children: /* @__PURE__ */ jsx("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ jsx("path", { d: "M5 12h14M13 6l6 6-6 6" }) }) })
  ] });
  ({ fontFamily: T.fontMono});
  const iconBadge = (inner) => /* @__PURE__ */ jsx("span", { style: { width: 48, height: 48, borderRadius: 13, flexShrink: 0, display: "inline-flex", alignItems: "center", justifyContent: "center", background: "rgba(38,112,255,0.10)", border: "1px solid rgba(38,112,255,0.25)" }, children: inner });
  const stepChip = { width: 38, height: 38, borderRadius: 12, flexShrink: 0, display: "inline-flex", alignItems: "center", justifyContent: "center", background: "rgba(38,112,255,0.10)", border: "1px solid rgba(38,112,255,0.25)" };
  const ic = { fill: "none", stroke: "#9dbcff", strokeWidth: 1.7, strokeLinecap: "round", strokeLinejoin: "round" };
  const steps = [
    {
      n: "01",
      title: tr$2("builderStack.step1Title", "Direct Node Probe"),
      icon: /* @__PURE__ */ jsxs("svg", { width: "18", height: "18", viewBox: "0 0 24 24", ...ic, "aria-hidden": "true", children: [
        /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "1.6", fill: "#9dbcff", stroke: "none" }),
        /* @__PURE__ */ jsx("path", { d: "M8.5 15.5a5 5 0 0 1 0-7" }),
        /* @__PURE__ */ jsx("path", { d: "M15.5 8.5a5 5 0 0 1 0 7" }),
        /* @__PURE__ */ jsx("path", { d: "M5.6 18.4a9 9 0 0 1 0-12.8" }),
        /* @__PURE__ */ jsx("path", { d: "M18.4 5.6a9 9 0 0 1 0 12.8" })
      ] }),
      body: tr$2("builderStack.step1Body", "HTTPS request directly to the node’s remote address. Returns live status: protocol type, peer count, location, bandwidth. Peer-to-peer, no relay.")
    },
    {
      n: "02",
      title: tr$2("builderStack.step2Title", "On-Chain Session"),
      icon: /* @__PURE__ */ jsxs("svg", { width: "18", height: "18", viewBox: "0 0 24 24", ...ic, "aria-hidden": "true", children: [
        /* @__PURE__ */ jsx("path", { d: "M12 2.5 21 7.5v9l-9 5-9-5v-9z" }),
        /* @__PURE__ */ jsx("path", { d: "M12 12.2 21 7.5M12 12.2 3 7.5M12 12.2V21.5" })
      ] }),
      body: tr$2("builderStack.step2Body", "Signed transaction creates an immutable session record on the blockchain. Session ID, node address, account address — all consensus-validated.")
    },
    {
      n: "03",
      title: tr$2("builderStack.step3Title", "Verified Handshake"),
      icon: /* @__PURE__ */ jsxs("svg", { width: "18", height: "18", viewBox: "0 0 24 24", ...ic, "aria-hidden": "true", children: [
        /* @__PURE__ */ jsx("path", { d: "M12 2.8 20 6v6c0 5-3.4 8.3-8 9.2C7.4 20.3 4 17 4 12V6z" }),
        /* @__PURE__ */ jsx("path", { d: "m8.8 12 2.2 2.2 4.2-4.4" })
      ] }),
      body: tr$2("builderStack.step3Body", "Node receives request, queries the chain to verify the session matches. Only then generates VPN credentials. Authorization is on-chain.")
    },
    {
      n: "04",
      title: tr$2("builderStack.step4Title", "Encrypted Tunnel"),
      icon: /* @__PURE__ */ jsxs("svg", { width: "18", height: "18", viewBox: "0 0 24 24", ...ic, "aria-hidden": "true", children: [
        /* @__PURE__ */ jsx("rect", { x: "4.5", y: "10.5", width: "15", height: "10", rx: "2.5" }),
        /* @__PURE__ */ jsx("path", { d: "M8 10.5V7.8a4 4 0 0 1 8 0v2.7" }),
        /* @__PURE__ */ jsx("circle", { cx: "12", cy: "15.5", r: "1.4", fill: "#9dbcff", stroke: "none" })
      ] }),
      body: tr$2("builderStack.step4Body", "WireGuard (Curve25519) or V2Ray (VLess/VMess) tunnel established directly between client and node. End-to-end encrypted. Zero intermediaries.")
    }
  ];
  const layers = [
    // sn-resil-1line — bullets condensed to one-liners
    {
      title: tr$2("resilience.blockchainTitle", "The blockchain IS the backend"),
      icon: /* @__PURE__ */ jsxs("svg", { width: "22", height: "22", viewBox: "0 0 24 24", ...ic, "aria-hidden": "true", children: [
        /* @__PURE__ */ jsx("rect", { x: "6", y: "6", width: "12", height: "12", rx: "2" }),
        /* @__PURE__ */ jsx("rect", { x: "10", y: "10", width: "4", height: "4" }),
        /* @__PURE__ */ jsx("path", { d: "M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3" })
      ] }),
      points: [
        tr$2("resilience.blockchainPoint1", "Every node, session, and account lives on-chain."),
        tr$2("resilience.blockchainPoint2", "Discovery is a chain query — nothing to take down."),
        tr$2("resilience.blockchainPoint3", "Finality, Sybil resistance, and governance built in.")
      ],
      extra: /* @__PURE__ */ jsx("div", { style: { display: "flex", flexDirection: "column", gap: 18 }, children: actionRow(tr$2("resilience.blockchainAction", "View Real-Time Transactions"), "https://p2pscan.com/transactions") })
    },
    {
      title: tr$2("resilience.validatorsTitle", "Validators provide the compute"),
      icon: /* @__PURE__ */ jsxs("svg", { width: "22", height: "22", viewBox: "0 0 24 24", ...ic, "aria-hidden": "true", children: [
        /* @__PURE__ */ jsx("path", { d: "M12 2 20.5 7v10L12 22 3.5 17V7Z" }),
        /* @__PURE__ */ jsx("path", { d: "M12 22V12M12 12 3.5 7M12 12l8.5-5" })
      ] }),
      points: [
        tr$2("resilience.validatorsPoint1", "Sessions, plans, and payouts verified by Sentinel’s validators."),
        tr$2("resilience.validatorsPoint2", "That consensus compute is your backend: no servers to run."),
        tr$2("resilience.validatorsPoint3", "Every state change is final and tamper-proof.")
      ],
      extra: /* @__PURE__ */ jsx("div", { style: { display: "flex", flexDirection: "column", gap: 18 }, children: actionRow(tr$2("resilience.validatorsAction", "View Validators"), "https://p2pscan.com/validators") })
    },
    {
      title: tr$2("resilience.bandwidthTitle", "Pay for bandwidth directly in P2P"),
      icon: /* @__PURE__ */ jsx(SentinelMark$1, { size: 24, color: "#9dbcff" }),
      points: [
        tr$2("resilience.bandwidthPoint1", "Wallets pay node operators directly on-chain — no invoices."),
        tr$2("resilience.bandwidthPoint2", "Pick nodes by country, price, or protocol."),
        tr$2("resilience.bandwidthPoint3", "Pay in P2P for bandwidth, Sentinel’s native token.")
      ],
      extra: /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: "column", gap: 18 }, children: [
        /* @__PURE__ */ jsxs("span", { style: { ...actionStyle, cursor: "default" }, children: [
          tr$2("nav.buyP2P", "Buy P2P"),
          /* @__PURE__ */ jsx("span", { "aria-hidden": "true", style: { display: "inline-flex" }, children: /* @__PURE__ */ jsx("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ jsx("path", { d: "M12 5v14M6 13l6 6 6-6" }) }) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "sn-tile-grid", children: BUY_VENUES.map((v) => /* @__PURE__ */ jsxs("a", { href: v.href, target: "_blank", rel: "noopener", className: "sn-buy-row", style: { ...rowChip, textDecoration: "none" }, children: [
          /* @__PURE__ */ jsx("span", { style: logoTile, children: v.logo }),
          /* @__PURE__ */ jsxs("span", { style: { display: "flex", flexDirection: "column", gap: 3, minWidth: 0 }, children: [
            /* @__PURE__ */ jsx("span", { style: chipName, children: v.name }),
            /* @__PURE__ */ jsx("span", { style: chipSub, children: v.tagKey ? tr$2(v.tagKey, v.tag) : v.tag })
          ] })
        ] }, v.name)) })
      ] })
    },
    {
      title: tr$2("resilience.serversTitle", "1500+ servers, zero server ops"),
      icon: /* @__PURE__ */ jsxs("svg", { width: "22", height: "22", viewBox: "0 0 24 24", ...ic, "aria-hidden": "true", children: [
        /* @__PURE__ */ jsx("circle", { cx: "12", cy: "18", r: "1.6" }),
        /* @__PURE__ */ jsx("path", { d: "M8.5 14.5a5 5 0 0 1 7 0M5.6 11.6a9 9 0 0 1 12.8 0M2.8 8.7a13 13 0 0 1 18.4 0" })
      ] }),
      points: [
        tr$2("resilience.serversPoint1", "Bandwidth from 1500+ servers run by independent operators."),
        tr$2("resilience.serversPoint2", "90+ countries across six continents."),
        tr$2("resilience.serversPoint3", "Racking, patching, and scaling — abstracted away entirely.")
      ],
      extra: /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: "column", gap: 18 }, children: [
        actionRow(tr$2("resilience.serversAction", "View Global Node Map"), "https://map.suchnode.net/"),
        /* @__PURE__ */ jsxs("div", { className: "sn-tile-grid", children: [
          /* @__PURE__ */ jsxs("span", { style: { ...rowChip }, children: [
            /* @__PURE__ */ jsx("span", { style: logoTile, children: /* @__PURE__ */ jsx(WireGuardMark, { size: 22 }) }),
            /* @__PURE__ */ jsxs("span", { style: { display: "flex", flexDirection: "column", gap: 3, minWidth: 0 }, children: [
              /* @__PURE__ */ jsx("span", { style: chipName, children: "WireGuard" }),
              /* @__PURE__ */ jsx("span", { style: { ...chipSub, whiteSpace: "nowrap" }, children: tr$2("resilience.wireguardSub", "Kernel-fast encrypted tunnels") })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("span", { style: { ...rowChip }, children: [
            /* @__PURE__ */ jsx("span", { style: logoTile, children: /* @__PURE__ */ jsx(V2RayMark, { size: 22 }) }),
            /* @__PURE__ */ jsxs("span", { style: { display: "flex", flexDirection: "column", gap: 3, minWidth: 0 }, children: [
              /* @__PURE__ */ jsx("span", { style: chipName, children: "V2Ray" }),
              /* @__PURE__ */ jsx("span", { style: { ...chipSub, whiteSpace: "nowrap" }, children: tr$2("resilience.v2raySub", "VMess / VLESS · anti-censorship") })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { style: isMobile ? { display: "flex", flexWrap: "wrap", gap: "12px 14px", alignItems: "center", justifyContent: "center" } : { display: "flex", flexWrap: "wrap", gap: "12px 18px", alignItems: "center" }, children: [
          /* @__PURE__ */ jsx(FlagChip, { code: "US", name: "United States" }),
          /* @__PURE__ */ jsx(FlagChip, { code: "JP", name: "Japan" }),
          /* @__PURE__ */ jsx(FlagChip, { code: "DE", name: "Germany" }),
          /* @__PURE__ */ jsx(FlagChip, { code: "BR", name: "Brazil" }),
          /* @__PURE__ */ jsx(FlagChip, { code: "GB", name: "United Kingdom" }),
          /* @__PURE__ */ jsx(FlagChip, { code: "SE", name: "Sweden" }),
          /* @__PURE__ */ jsx(FlagChip, { code: "NL", name: "Netherlands" }),
          /* @__PURE__ */ jsx(FlagChip, { code: "SG", name: "Singapore" }),
          /* @__PURE__ */ jsx(FlagChip, { code: "CH", name: "Switzerland" }),
          /* @__PURE__ */ jsx("span", { title: tr$2("resilience.moreCountriesTitle", "90+ countries across six continents"), style: { display: "inline-flex", alignItems: "center", background: "rgba(94,148,255,0.08)", border: "1px solid rgba(125,160,255,0.32)", borderRadius: 999, padding: "4px 8px", fontFamily: T.fontHeading, fontWeight: 600, fontSize: 12.5, color: "#9dbcff", whiteSpace: "nowrap" }, children: tr$2("resilience.moreCountries", "+ 80 more") })
        ] })
      ] })
    }
  ];
  return /* @__PURE__ */ jsx("section", { id: "builder-stack", style: { background: "transparent", paddingTop: "clamp(8px,2vw,24px)", paddingBottom: "clamp(40px,5vw,64px)", scrollMarginTop: 90 }, children: /* @__PURE__ */ jsxs("div", { style: { ...atomStyles.container }, children: [
    /* @__PURE__ */ jsxs("div", { style: { ...atomStyles.sectionHead, alignItems: "center", textAlign: "center", gap: 18, margin: "0 auto clamp(34px,4.5vw,54px)" }, children: [
      /* @__PURE__ */ jsx("h2", { style: { ...atomStyles.h1Dark, maxWidth: 820 }, children: tr$2("sdk.heading", "Everything a dVPN builder needs. Handled.") }),
      /* @__PURE__ */ jsx("p", { style: { ...atomStyles.leadDark, maxWidth: 680, margin: 0 }, children: tr$2("builderStack.sdkBody", "Compute, bandwidth, payments, security — the Sentinel protocol runs the entire white-label stack underneath your brand. You build the app. The network does the rest.") })
    ] }),
    /* @__PURE__ */ jsx("div", { style: { display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(4, minmax(0,1fr))", gap: isMobile ? 12 : 14 }, children: steps.map((p) => /* @__PURE__ */ jsxs("div", { style: { position: "relative", overflow: "hidden", display: "flex", flexDirection: "column", gap: 10, background: "rgba(255,255,255,0.028)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 16, padding: "20px 18px" }, children: [
      /* @__PURE__ */ jsx("div", { "aria-hidden": "true", style: { position: "absolute", top: 0, left: 22, right: 22, height: 1, background: "linear-gradient(90deg, transparent, rgba(94,148,255,0.55), transparent)" } }),
      /* @__PURE__ */ jsxs("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between" }, children: [
        /* @__PURE__ */ jsx("span", { style: stepChip, children: p.icon }),
        /* @__PURE__ */ jsxs("span", { style: { fontFamily: T.fontMono, fontSize: 12, letterSpacing: "0.1em", color: "rgba(94,148,255,0.9)" }, children: [
          p.n,
          /* @__PURE__ */ jsx("span", { style: { color: "rgba(234,234,234,0.28)" }, children: " / 04" })
        ] })
      ] }),
      /* @__PURE__ */ jsx("h3", { style: { fontFamily: T.fontHeading, fontWeight: 600, fontSize: 16, lineHeight: 1.3, color: T.fog, margin: "4px 0 0" }, children: p.title }),
      /* @__PURE__ */ jsx("p", { style: { fontFamily: T.fontBody, fontSize: 13.5, lineHeight: "21px", color: T.onDark80, margin: 0 }, children: p.body })
    ] }, p.title)) }),
    /* @__PURE__ */ jsxs("div", { style: { position: "relative", display: "flex", flexDirection: "column", alignItems: "center", gap: 20, textAlign: "center", margin: "clamp(30px,4vw,46px) 0 clamp(36px,4.5vw,56px)" }, children: [
      /* @__PURE__ */ jsx("div", { "aria-hidden": "true", style: { width: "min(560px,90%)", height: 1, background: "linear-gradient(90deg, transparent, rgba(94,148,255,0.55), transparent)" } }),
      /* @__PURE__ */ jsxs("h3", { style: { margin: 0, fontFamily: T.fontHeading, fontWeight: 500 }, children: [
        /* @__PURE__ */ jsx("span", { style: { display: "block", fontSize: "clamp(16px,2vw,20px)", lineHeight: 1.4, letterSpacing: "0.01em", color: "rgba(214,222,240,0.82)" }, children: tr$2("builderStack.closing1", "No centralized server is involved at any step.") }),
        /* @__PURE__ */ jsx("span", { style: { display: "block", marginTop: 8, fontWeight: 600, fontSize: "clamp(25px,3.4vw,36px)", lineHeight: 1.2, letterSpacing: "-0.01em", background: "linear-gradient(90deg, #9dbcff, #5e94ff 55%, #b9ceff)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }, children: tr$2("builderStack.closing2", "The blockchain is the backend.") })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { style: { display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(2, minmax(0,1fr))", gridTemplateRows: isMobile ? void 0 : "repeat(6, auto)", gap: 23 }, children: layers.map((c) => /* @__PURE__ */ jsxs("div", { className: "sn-rcard", style: { position: "relative", display: isMobile ? "flex" : "grid", flexDirection: "column", gridTemplateRows: isMobile ? void 0 : "subgrid", gridRow: isMobile ? void 0 : "span 3", gap: isMobile ? 21 : void 0, background: "linear-gradient(180deg, #17181c 0%, #121317 100%)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 20, padding: isMobile ? "25px 21px" : 0, boxShadow: "inset 0 1px 0 rgba(255,255,255,0.05)" }, children: [
      /* @__PURE__ */ jsxs("div", { style: { display: "flex", alignItems: "center", gap: 12, margin: isMobile ? 0 : "clamp(36px,2.9vw,45px) clamp(32px,2.5vw,41px) 0" }, children: [
        iconBadge(c.icon),
        /* @__PURE__ */ jsx("h3", { style: { flex: 1, minWidth: 0, fontFamily: T.fontHeading, fontWeight: 600, fontSize: isMobile ? 17 : 20, lineHeight: 1.25, color: T.fog, margin: 0, letterSpacing: "-0.005em" }, children: c.title })
      ] }),
      /* @__PURE__ */ jsx("ul", { style: { listStyle: "none", display: "flex", flexDirection: "column", gap: 12, margin: isMobile ? 0 : "0 clamp(32px,2.5vw,41px)", padding: 0 }, children: c.points.map((pt) => /* @__PURE__ */ jsxs("li", { style: { display: "flex", alignItems: "flex-start", gap: 11 }, children: [
        /* @__PURE__ */ jsx("span", { "aria-hidden": "true", style: { width: 6, height: 6, borderRadius: "50%", background: "#5e94ff", flexShrink: 0, marginTop: 8 } }),
        /* @__PURE__ */ jsx("span", { style: { fontFamily: T.fontBody, fontSize: 14.5, lineHeight: "22px", color: T.onDark80 }, children: pt })
      ] }, pt)) }),
      c.extra && /* @__PURE__ */ jsx("div", { style: { margin: isMobile ? "auto 0 0" : "0 clamp(32px,2.5vw,41px) clamp(36px,2.9vw,45px)", borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: 21 }, children: c.extra })
    ] }, c.title)) })
  ] }) });
}
const SN_GH_PATH = "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12";
function LangBadge({ mark, name }) {
  return /* @__PURE__ */ jsxs("span", { className: "sn-oss-lang", style: { display: "flex", alignItems: "center", gap: 11, background: "rgba(255,255,255,0.035)", border: "1px solid rgba(255,255,255,0.09)", borderRadius: 14, padding: "10px 14px" }, children: [
    mark,
    /* @__PURE__ */ jsx("span", { style: { fontFamily: T.fontHeading, fontWeight: 600, fontSize: 15, color: T.fog, lineHeight: 1.15, whiteSpace: "nowrap" }, children: name })
  ] });
}
function OpenSourceSection() {
  const isMobile = useIsMobile$1();
  const stats = [
    { v: "4", l: tr$2("oss.sdkLanguagesStat", "SDK languages") },
    { v: "41,000+", l: tr$2("oss.linesOfCodeStat", "lines of open code") }
  ];
  const langs = [
    { name: "JavaScript", mark: /* @__PURE__ */ jsxs("svg", { width: "26", height: "26", viewBox: "0 0 26 26", "aria-hidden": "true", children: [
      /* @__PURE__ */ jsx("rect", { width: "26", height: "26", rx: "4", fill: "#F7DF1E" }),
      /* @__PURE__ */ jsx("text", { x: "23.4", y: "23.2", textAnchor: "end", fontFamily: "Helvetica, Arial, sans-serif", fontWeight: "700", fontSize: "12", fill: "#000000", children: "JS" })
    ] }) },
    { name: "C# / .NET", mark: /* @__PURE__ */ jsxs("svg", { width: "26", height: "26", viewBox: "0 0 26 26", "aria-hidden": "true", children: [
      /* @__PURE__ */ jsx("path", { d: "M13 1.4 23.2 7.2v11.6L13 24.6 2.8 18.8V7.2Z", fill: "#68217A" }),
      /* @__PURE__ */ jsx("text", { x: "13", y: "17.3", textAnchor: "middle", fontFamily: "Helvetica, Arial, sans-serif", fontWeight: "700", fontSize: "10.5", fill: "#ffffff", children: "C#" })
    ] }) },
    { name: "Go", mark: /* @__PURE__ */ jsxs("svg", { width: "26", height: "26", viewBox: "0 0 26 26", "aria-hidden": "true", children: [
      /* @__PURE__ */ jsx("rect", { width: "26", height: "26", rx: "6", fill: "#00ADD8" }),
      /* @__PURE__ */ jsx("text", { x: "13", y: "17.3", textAnchor: "middle", fontFamily: "Helvetica, Arial, sans-serif", fontWeight: "700", fontSize: "11.5", fill: "#ffffff", children: "Go" })
    ] }) },
    { name: "Swift", mark: /* @__PURE__ */ jsxs("svg", { width: "26", height: "26", viewBox: "0 0 26 26", "aria-hidden": "true", children: [
      /* @__PURE__ */ jsx("rect", { width: "26", height: "26", rx: "6", fill: "#F05138" }),
      /* @__PURE__ */ jsx("path", { fill: "#ffffff", d: "M19.6 16.9c1-2.9.2-6.1-2-8.7 1.6 2.3 2 5 .9 7.2-2.3-1.5-5.1-4-6.9-6.1 2.4 2.9 5 5.3 6.2 6.3-2.4-1.2-5.6-3.4-7.5-5.2 2.1 2.8 5 5.4 7.3 6.7-1.8 1-4.5 1.1-6.9-.1 2.7 1.8 6.2 2 8.6.5 1.7.8 3.2.3 3.8-.6 0 0-1.4.5-3.5 0z" })
    ] }) }
  ];
  const stack = [
    { k: tr$2("oss.sdksLabel", "SDKs"), d: tr$2("oss.sdksDesc", "Client libraries in JavaScript, C#, Go & Swift") },
    { k: tr$2("oss.protocolLabel", "Protocol"), d: tr$2("oss.protocolDesc", "WireGuard & V2Ray session layer") },
    { k: tr$2("oss.chainLabel", "Chain"), d: tr$2("oss.chainDesc", "Sentinel Hub, built on the Cosmos SDK") },
    { k: tr$2("oss.nodeLabel", "Node software"), d: tr$2("oss.nodeDesc", "The dVPN node anyone can run and inspect") }
  ];
  const ossColHead = { margin: 0, fontFamily: T.fontHeading, fontWeight: 600, fontSize: "clamp(16.5px,1.7vw,19px)", lineHeight: 1.3, letterSpacing: "-0.005em", color: T.fog };
  const ossColSub = { margin: 0, fontFamily: T.fontBody, fontSize: 13.5, lineHeight: "20px", color: T.onDark60 };
  const ossDivider = "1px solid rgba(255,255,255,0.08)";
  return /* @__PURE__ */ jsx("section", { id: "open-source", style: { background: "transparent", paddingTop: "clamp(24px,3vw,40px)", paddingBottom: "clamp(56px,7vw,96px)", scrollMarginTop: 90 }, children: /* @__PURE__ */ jsxs("div", { style: atomStyles.container, children: [
    /* @__PURE__ */ jsx("style", { children: `
          /* sn-oss-v2 sn-oss-v3 sn-oss-v4 sn-oss-v7 — v4 merged panel restored
             over the v5 centered-cards layout per user, OPEN pills removed.
             (sn-oss-v6 was authored for a v5-based slab rework, never shipped)
             sn-oss-v8 — mono eyebrows replaced with explicit plain-language
             headings + sublines so the two messages read instantly: every
             layer of Sentinel is open source / build in the language you
             already use (user 2026-06-11) */
          .sn-oss-lang { transition:transform 200ms cubic-bezier(.22,.61,.36,1), border-color 220ms, background 220ms; }
          .sn-oss-lang:hover { transform:translateY(-2px); border-color:rgba(94,148,255,0.5); background:rgba(1,86,252,0.08); }
        ` }),
    /* @__PURE__ */ jsxs("div", { "data-mark": "sn-oss-v8", style: { position: "relative", overflow: "hidden", display: "flex", flexDirection: "column", gap: "clamp(20px,2.4vw,26px)", borderRadius: 24, border: "1px solid rgba(255,255,255,0.10)", background: "radial-gradient(560px 240px at 92% -10%, rgba(1,86,252,0.14), transparent 65%), linear-gradient(160deg, rgba(255,255,255,0.045) 0%, rgba(255,255,255,0.015) 55%, rgba(1,86,252,0.06) 100%)", padding: isMobile ? "24px 20px" : "clamp(26px,2.8vw,36px) clamp(26px,3vw,40px)" }, children: [
      /* @__PURE__ */ jsx("svg", { "aria-hidden": "true", width: "190", height: "190", viewBox: "0 0 24 24", fill: "rgba(157,188,255,0.05)", style: { position: "absolute", right: -30, bottom: -56, transform: "rotate(-8deg)", pointerEvents: "none" }, children: /* @__PURE__ */ jsx("path", { d: SN_GH_PATH }) }),
      /* @__PURE__ */ jsxs("div", { style: { position: "relative", display: "flex", flexDirection: isMobile ? "column" : "row", alignItems: isMobile ? "flex-start" : "center", gap: isMobile ? 16 : "clamp(24px,3vw,44px)" }, children: [
        /* @__PURE__ */ jsxs("h2", { style: { flex: 1, minWidth: 0, fontFamily: T.fontHeading, fontWeight: 600, fontSize: "clamp(18px,1.9vw,23px)", lineHeight: 1.45, letterSpacing: "-0.01em", color: T.fog, margin: 0, maxWidth: 760 }, children: [
          /* @__PURE__ */ jsx("span", { style: { color: T.onDark60 }, children: tr$2("oss.closedSource", "Closed-source VPNs ask for your trust.") }),
          " ",
          tr$2("oss.openStatement", "Sentinel is the only open-source, decentralized framework to build a VPN application on — full transparency into the application-side code and the server-side code alike.")
        ] }),
        /* @__PURE__ */ jsxs(BtnPrimary$1, { href: L.github, style: isMobile ? { gap: 10, height: "auto", minHeight: 52, padding: "13px 18px", fontSize: 15, lineHeight: 1.3, whiteSpace: "normal", textAlign: "center", alignSelf: "stretch", width: "100%", maxWidth: "100%", boxSizing: "border-box" } : { gap: 12, height: 58, padding: "0 34px", fontSize: 17, flexShrink: 0, whiteSpace: "nowrap" }, children: [
          /* @__PURE__ */ jsx("svg", { width: "22", height: "22", viewBox: "0 0 24 24", fill: "currentColor", "aria-hidden": "true", children: /* @__PURE__ */ jsx("path", { d: SN_GH_PATH }) }),
          tr$2("oss.githubCta", "View open-source code on GitHub")
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { style: { position: "relative", display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1.15fr 1fr", gap: isMobile ? "22px" : "clamp(28px,3.4vw,52px)", borderTop: ossDivider, paddingTop: "clamp(18px,2.2vw,26px)" }, children: [
        /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: "column", gap: 14 }, children: [
          /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: "column", gap: 5 }, children: [
            /* @__PURE__ */ jsx("h3", { style: ossColHead, children: tr$2("oss.everyLayerHeading", "Every layer of Sentinel is open source") }),
            /* @__PURE__ */ jsx("p", { style: ossColSub, children: tr$2("oss.everyLayerSubhead", "Nothing in the stack is closed — read, audit, and fork all of it.") })
          ] }),
          /* @__PURE__ */ jsxs("div", { style: { position: "relative", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: 13, flex: 1 }, children: [
            /* @__PURE__ */ jsx("span", { "aria-hidden": "true", style: { position: "absolute", left: 5, top: 12, bottom: 12, width: 2, borderRadius: 2, background: "linear-gradient(180deg, rgba(38,112,255,0.85) 0%, rgba(38,112,255,0.2) 100%)" } }),
            stack.map((s) => /* @__PURE__ */ jsxs("div", { style: { display: "flex", alignItems: "flex-start", gap: 13 }, children: [
              /* @__PURE__ */ jsx("span", { "aria-hidden": "true", style: { position: "relative", width: 12, height: 12, flexShrink: 0, marginTop: 5, borderRadius: "50%", background: "#2670FF", boxShadow: "0 0 0 3px rgba(38,112,255,0.22), 0 0 14px rgba(38,112,255,0.7)" } }),
              /* @__PURE__ */ jsxs("span", { style: { display: "flex", flexDirection: "column", gap: 3, minWidth: 0, flex: 1 }, children: [
                /* @__PURE__ */ jsx("span", { style: { fontFamily: T.fontHeading, fontWeight: 600, fontSize: 15.5, color: T.fog, lineHeight: 1.2 }, children: s.k }),
                /* @__PURE__ */ jsx("span", { style: { fontFamily: T.fontBody, fontSize: 13.5, lineHeight: "19px", color: T.onDark60 }, children: s.d })
              ] })
            ] }, s.k))
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: "column", gap: 14 }, children: [
          /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: "column", gap: 5 }, children: [
            /* @__PURE__ */ jsx("h3", { style: ossColHead, children: tr$2("oss.buildLanguageHeading", "Build in the language you already use") }),
            /* @__PURE__ */ jsx("p", { style: ossColSub, children: tr$2("oss.buildLanguageSubhead", "Four official SDKs — every one of them open source.") })
          ] }),
          /* @__PURE__ */ jsx("div", { style: { display: "flex", flexDirection: "column", justifyContent: "space-between", gap: 10, flex: 1 }, children: langs.map((l) => /* @__PURE__ */ jsx(LangBadge, { mark: l.mark, name: l.name }, l.name)) })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { style: { position: "relative", display: "flex", flexWrap: "wrap", alignItems: "baseline", justifyContent: "center", gap: "14px clamp(40px,6vw,84px)", borderTop: ossDivider, paddingTop: "clamp(18px,2.2vw,26px)" }, children: stats.map((s) => /* @__PURE__ */ jsxs("span", { style: { display: "flex", alignItems: "baseline", gap: 12 }, children: [
        /* @__PURE__ */ jsx("span", { style: { fontFamily: T.fontHeading, fontWeight: 700, fontSize: "clamp(28px,3vw,38px)", lineHeight: 1, letterSpacing: "-0.015em", fontVariantNumeric: "tabular-nums", color: "#ffffff" }, children: s.v }),
        /* @__PURE__ */ jsx("span", { style: { fontFamily: T.fontHeading, fontWeight: 500, fontSize: "clamp(14px,1.4vw,16px)", color: T.onDark60 }, children: s.l })
      ] }, s.l)) })
    ] })
  ] }) });
}
function ResilienceCards$1() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(BuilderStackSection, {}),
    /* @__PURE__ */ jsx(OpenSourceSection, {})
  ] });
}
function StepTag({ n, light }) {
  const R = 23, C = 2 * Math.PI * R;
  const ink = light ? "rgba(0,0,0,0.84)" : "rgba(234,234,234,0.92)";
  const faint = light ? "rgba(0,0,0,0.32)" : "rgba(234,234,234,0.40)";
  const track = light ? "rgba(1,86,252,0.14)" : "rgba(255,255,255,0.14)";
  return /* @__PURE__ */ jsxs("span", { style: { display: "inline-flex", alignItems: "center", gap: 15, width: "fit-content" }, children: [
    /* @__PURE__ */ jsxs("span", { style: { position: "relative", width: 52, height: 52, flexShrink: 0, display: "inline-flex", alignItems: "center", justifyContent: "center", borderRadius: "50%", background: light ? "rgba(1,86,252,0.06)" : "rgba(1,86,252,0.12)", boxShadow: light ? "0 1px 10px rgba(1,86,252,0.10)" : "0 0 22px rgba(1,86,252,0.28)" }, children: [
      /* @__PURE__ */ jsxs("svg", { width: "52", height: "52", viewBox: "0 0 52 52", "aria-hidden": "true", style: { position: "absolute", inset: 0, transform: "rotate(-90deg)" }, children: [
        /* @__PURE__ */ jsx("circle", { cx: "26", cy: "26", r: R, fill: "none", stroke: track, strokeWidth: "2.2" }),
        /* @__PURE__ */ jsx("circle", { cx: "26", cy: "26", r: R, fill: "none", stroke: T.blue, strokeWidth: "2.2", strokeLinecap: "round", strokeDasharray: C, strokeDashoffset: C * (1 - n / 3) })
      ] }),
      /* @__PURE__ */ jsx(SentinelMark$1, { size: 23, color: T.blue })
    ] }),
    /* @__PURE__ */ jsxs("span", { style: { fontFamily: T.fontHeading, fontWeight: 600, fontSize: 22, lineHeight: 1.1, letterSpacing: "0.005em", color: ink, whiteSpace: "nowrap" }, children: [
      "Step 0",
      n,
      " ",
      /* @__PURE__ */ jsx("span", { style: { color: faint, fontWeight: 500 }, children: "/ 03" })
    ] })
  ] });
}
function StepsSection$1() {
  const isMobile = useIsMobile$1();
  return /* @__PURE__ */ jsx("section", { style: { background: "transparent" }, children: /* @__PURE__ */ jsxs("div", { style: { ...atomStyles.container, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "clamp(26px,3.6vh,40px)", paddingTop: isMobile ? "clamp(44px,10vw,64px)" : "clamp(64px,7.5vw,110px)", paddingBottom: isMobile ? "clamp(44px,10vw,64px)" : "clamp(64px,7.5vw,110px)" }, children: [
    /* @__PURE__ */ jsx("h2", { style: { fontFamily: T.fontHeading, fontWeight: 600, fontSize: "clamp(31px,5.2vw,66px)", lineHeight: 1.04, letterSpacing: "-0.02em", color: T.fog, margin: 0, maxWidth: 1e3 }, children: tr$2("steps.heading", "Three steps from zero to a production dVPN.") }),
    /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: "column", alignItems: "center", gap: 18, maxWidth: 780 }, children: [
      /* @__PURE__ */ jsx(StepTag, { n: 1 }),
      /* @__PURE__ */ jsx("h3", { style: { fontFamily: T.fontHeading, fontWeight: 600, fontSize: "clamp(22px,2.9vw,36px)", lineHeight: 1.18, letterSpacing: "-0.005em", color: T.fog, margin: 0 }, children: tr$2("steps.step1Heading", "Add nodes to your subscription plan.") }),
      /* @__PURE__ */ jsx("p", { style: { fontFamily: T.fontBody, fontSize: 16.5, lineHeight: "27px", color: "rgba(234,234,234,0.76)", margin: 0, maxWidth: 680 }, children: tr$2("steps.step1Body", "Pay dVPN nodes and add them to your subscription plan. Filter by country, encryption protocol and more to find nodes that meet your application’s capacity needs.") })
    ] }),
    /* @__PURE__ */ jsx("div", { style: { width: "100%", maxWidth: 960, borderRadius: 18, overflow: "hidden", border: "1px solid rgba(255,255,255,0.10)", background: "#0c0c0c", boxShadow: "0 30px 80px rgba(0,0,0,0.45)" }, children: /* @__PURE__ */ jsx("img", { src: window.__resources.screenPlan2, alt: tr$2("steps.planManagerAlt", "Adding nodes to a subscription plan in the Plan Manager"), style: { display: "block", width: "100%", height: "auto", maxHeight: "56vh", objectFit: "cover", objectPosition: "top center" } }) }),
    /* @__PURE__ */ jsx(BtnPrimary$1, { light: true, href: L.planManager, children: tr$2("steps.openPlanManager", "Open Plan Manager") })
  ] }) });
}
const PlatformIcons = {
  iOS: /* @__PURE__ */ jsx("svg", { width: "26", height: "26", viewBox: "0 0 24 24", fill: "#1d1d1f", "aria-hidden": "true", children: /* @__PURE__ */ jsx("path", { d: "M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701z" }) }),
  Android: /* @__PURE__ */ jsx("svg", { width: "26", height: "26", viewBox: "0 0 24 24", fill: "#3DDC84", "aria-hidden": "true", children: /* @__PURE__ */ jsx("path", { d: "M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993.0001.5511-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993 0 .5511-.4482.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C15.5902 8.2439 13.8533 7.8508 12 7.8508s-3.5902.3931-5.1367 1.0989L4.841 5.4467a.4161.4161 0 00-.5677-.1521.4157.4157 0 00-.1521.5676l1.9973 3.4592C2.6889 11.1867.3432 14.6589 0 18.761h24c-.3435-4.1021-2.6892-7.5743-6.1185-9.4396" }) }),
  macOS: /* @__PURE__ */ jsxs("svg", { width: "26", height: "26", viewBox: "0 0 24 24", "aria-hidden": "true", children: [
    /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "11", fill: "#1d1d1f" }),
    /* @__PURE__ */ jsx("g", { transform: "translate(6.2 5.4) scale(0.49)", fill: "#ffffff", children: /* @__PURE__ */ jsx("path", { d: "M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701z" }) })
  ] }),
  Linux: /* @__PURE__ */ jsxs("svg", { width: "26", height: "26", viewBox: "0 0 24 24", "aria-hidden": "true", children: [
    /* @__PURE__ */ jsx("path", { d: "M12 2.4c-2.2 0-3.55 1.75-3.55 4.15 0 1.2-.5 2-1.25 2.95C6 10.9 5 12.5 5 15.1c0 3 1.9 4.5 7 4.5s7-1.5 7-4.5c0-2.6-1-4.2-2.2-5.6-.75-.95-1.25-1.75-1.25-2.95C15.55 4.15 14.2 2.4 12 2.4z", fill: "#111" }),
    /* @__PURE__ */ jsx("ellipse", { cx: "12", cy: "14.6", rx: "3.3", ry: "4.1", fill: "#fff" }),
    /* @__PURE__ */ jsx("ellipse", { cx: "10.2", cy: "7.2", rx: "1.25", ry: "1.6", fill: "#fff" }),
    /* @__PURE__ */ jsx("ellipse", { cx: "13.8", cy: "7.2", rx: "1.25", ry: "1.6", fill: "#fff" }),
    /* @__PURE__ */ jsx("circle", { cx: "10.4", cy: "7.5", r: ".7", fill: "#111" }),
    /* @__PURE__ */ jsx("circle", { cx: "13.6", cy: "7.5", r: ".7", fill: "#111" }),
    /* @__PURE__ */ jsx("path", { d: "M12 8.2l1.6 1.2c-.5.5-1.1.75-1.6.75s-1.1-.25-1.6-.75z", fill: "#F8B500" }),
    /* @__PURE__ */ jsx("ellipse", { cx: "9.6", cy: "19.4", rx: "1.5", ry: ".8", fill: "#F8B500" }),
    /* @__PURE__ */ jsx("ellipse", { cx: "14.4", cy: "19.4", rx: "1.5", ry: ".8", fill: "#F8B500" })
  ] }),
  Windows: /* @__PURE__ */ jsx("svg", { width: "26", height: "26", viewBox: "0 0 24 24", fill: "#00A4EF", "aria-hidden": "true", children: /* @__PURE__ */ jsx("path", { d: "M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801" }) }),
  Web: /* @__PURE__ */ jsxs("svg", { width: "26", height: "26", viewBox: "0 0 24 24", fill: "none", stroke: "#1d1d1f", strokeWidth: "1.5", "aria-hidden": "true", children: [
    /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "9.5" }),
    /* @__PURE__ */ jsx("ellipse", { cx: "12", cy: "12", rx: "4", ry: "9.5" }),
    /* @__PURE__ */ jsx("line", { x1: "2.5", y1: "12", x2: "21.5", y2: "12" }),
    /* @__PURE__ */ jsx("line", { x1: "4", y1: "7", x2: "20", y2: "7" }),
    /* @__PURE__ */ jsx("line", { x1: "4", y1: "17", x2: "20", y2: "17" })
  ] }),
  TV: /* @__PURE__ */ jsxs("svg", { width: "26", height: "26", viewBox: "0 0 24 24", fill: "none", stroke: "#1d1d1f", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", children: [
    /* @__PURE__ */ jsx("rect", { x: "2.5", y: "6", width: "19", height: "12", rx: "2" }),
    /* @__PURE__ */ jsx("path", { d: "M8.5 2.8L12 6l3.5-3.2" }),
    /* @__PURE__ */ jsx("line", { x1: "8", y1: "21.2", x2: "16", y2: "21.2" })
  ] }),
  Server: /* @__PURE__ */ jsxs("svg", { width: "26", height: "26", viewBox: "0 0 24 24", fill: "none", stroke: "#1d1d1f", strokeWidth: "1.5", strokeLinecap: "round", "aria-hidden": "true", children: [
    /* @__PURE__ */ jsx("rect", { x: "3", y: "4", width: "18", height: "6", rx: "1.6" }),
    /* @__PURE__ */ jsx("rect", { x: "3", y: "14", width: "18", height: "6", rx: "1.6" }),
    /* @__PURE__ */ jsx("line", { x1: "6.5", y1: "7", x2: "6.6", y2: "7" }),
    /* @__PURE__ */ jsx("line", { x1: "6.5", y1: "17", x2: "6.6", y2: "17" })
  ] })
};
const BUILD_PLATFORMS = [
  { key: "iOS", name: "iOS", descKey: "sdk.iosDesc", stack: ["Swift", "React Native"], desc: "Ship an App Store client. The Network Extension tunnel is already built." },
  { key: "Android", name: "Android", descKey: "sdk.androidDesc", stack: ["Kotlin", "React Native"], desc: "Ship a Play Store app on VpnService. WireGuard and V2Ray included." },
  { key: "macOS", name: "macOS", descKey: "sdk.macosDesc", stack: ["Swift", "Electron"], desc: "Build a menu-bar app that tunnels all system traffic." },
  { key: "Windows", name: "Windows", descKey: "sdk.windowsDesc", stack: ["Electron", ".NET"], desc: "Build a desktop client for the OS most people use." },
  { key: "Linux", name: "Linux", descKey: "sdk.linuxDesc", stack: ["CLI", "daemon"], desc: "Run headless daemons on servers, routers and homelabs." },
  { key: "Web", name: "Web", descKey: "sdk.webDesc", stack: ["TypeScript", "WASM"], desc: "Build browser extensions and dashboards. Users install nothing." },
  { key: "TV", name: "TV", descKey: "sdk.tvDesc", stack: ["Android TV", "tvOS"], desc: "Build TV apps designed for the remote control." },
  { key: "Server", name: "Server", descKey: "sdk.serverDesc", stack: ["Node", "Go"], desc: "Route traffic from code. Bots, backends and AI agents." }
];
function SDKSection$1() {
  return /* @__PURE__ */ jsxs("section", { id: "build-dvpn", style: { background: "radial-gradient(1000px 480px at 12% -8%, rgba(1,86,252,0.06), transparent 60%), radial-gradient(820px 420px at 94% 36%, rgba(1,86,252,0.04), transparent 60%), linear-gradient(180deg, #f4f6fb 0%, #fbfbfb 28%, #fbfbfb 100%)", ...atomStyles.section, scrollMarginTop: 90 }, children: [
    /* @__PURE__ */ jsx("style", { children: `
        .sn-build-grid { display:grid; grid-template-columns:repeat(4, 1fr); gap:1px; background:${T.line200}; border:1px solid ${T.line200}; border-radius:24px; overflow:hidden; }
        @media (max-width: 1080px) { .sn-build-grid { grid-template-columns:repeat(2, 1fr); } }
        @media (max-width: 560px)  { .sn-build-grid { grid-template-columns:1fr; } }
        .sn-build-card { transition:background 0.3s ease; }
        .sn-build-card:hover { background:#f6f9ff !important; }
        .sn-build-name { transition:color 0.3s ease; }
        .sn-build-card:hover .sn-build-name { color:${T.blue}; }
        .sn-build-arrow { opacity:0; transform:translate(-5px, 5px); transition:opacity 0.3s ease, transform 0.3s ease; }
        .sn-build-card:hover .sn-build-arrow { opacity:1; transform:translate(0, 0); }
      ` }),
    /* @__PURE__ */ jsxs("div", { style: { ...atomStyles.container, display: "flex", flexDirection: "column", gap: "clamp(36px,5vw,52px)" }, children: [
      /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: "column", gap: 18, maxWidth: 720 }, children: [
        /* @__PURE__ */ jsx(StepTag, { n: 2, light: true }),
        /* @__PURE__ */ jsx("h2", { style: { ...atomStyles.h1Light, fontSize: "clamp(26px,3.2vw,38px)", margin: 0 }, children: tr$2("sdk.buildPlatformHeading", "Build a dVPN for Any Platform") }),
        /* @__PURE__ */ jsx("p", { style: { ...atomStyles.leadLight, maxWidth: 680 }, children: tr$2("sdk.buildPlatformBody", "The Sentinel SDK runs on phones, desktops, browsers, TVs and servers. You build the app and own the brand. The network handles bandwidth, routing and payments.") })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "sn-build-grid", children: BUILD_PLATFORMS.map((p) => /* @__PURE__ */ jsxs(
        "a",
        {
          href: L.sdkDocs,
          target: "_blank",
          rel: "noopener",
          className: "sn-build-card",
          style: { background: T.white, padding: "26px 24px 20px", display: "flex", flexDirection: "column", gap: 16, textDecoration: "none", minHeight: 224, boxSizing: "border-box" },
          children: [
            /* @__PURE__ */ jsxs("div", { style: { display: "flex", alignItems: "center", gap: 13 }, children: [
              /* @__PURE__ */ jsx("div", { style: { width: 44, height: 44, borderRadius: 12, background: T.snow, border: `1px solid ${T.line200}`, display: "grid", placeItems: "center", flexShrink: 0 }, children: PlatformIcons[p.key] }),
              /* @__PURE__ */ jsx("span", { className: "sn-build-name", style: { fontFamily: T.fontHeading, fontWeight: 600, fontSize: 20, lineHeight: 1.2, color: T.onLight85 }, children: p.name }),
              /* @__PURE__ */ jsx("span", { className: "sn-build-arrow", "aria-hidden": "true", style: { marginLeft: "auto", color: T.blue, fontSize: 17, lineHeight: 1 }, children: "↗" })
            ] }),
            /* @__PURE__ */ jsx("p", { style: { margin: 0, fontFamily: T.fontBody, fontSize: 14, lineHeight: 1.55, color: T.onLight60, flex: 1 }, children: p.descKey ? tr$2(p.descKey, p.desc) : p.desc }),
            /* @__PURE__ */ jsx("div", { style: { borderTop: `1px solid ${T.line200}`, paddingTop: 14, display: "flex", flexWrap: "wrap", gap: 6 }, children: p.stack.map((s) => /* @__PURE__ */ jsx("span", { style: { fontFamily: T.fontMono, fontSize: 11, letterSpacing: "0.02em", padding: "4px 10px", borderRadius: 7, background: T.snow, color: T.onLight60, whiteSpace: "nowrap" }, children: s }, s)) })
          ]
        },
        p.key
      )) }),
      /* @__PURE__ */ jsxs("div", { style: { display: "flex", alignItems: "stretch", flexWrap: "wrap", gap: "clamp(12px,2vw,28px)", justifyContent: "center" }, children: [
        /* @__PURE__ */ jsx(BtnPrimary$1, { light: true, href: L.sdkDocs, style: { borderColor: "#d9d9d9" }, children: tr$2("sdk.docsButton", "SDK Docs") }),
        /* @__PURE__ */ jsx(BtnGhost, { dark: false, href: L.github, children: tr$2("sdk.githubButton", "View on GitHub") })
      ] })
    ] })
  ] });
}
function PaymentRailsSection$1() {
  const isMobile = useIsMobile$1();
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
    usdc: '<svg viewBox="0 0 2000 2000" width="26" height="26" aria-label="USDC"><path fill="#2775ca" d="M1000 2000c554.17 0 1000-445.83 1000-1000S1554.17 0 1000 0 0 445.83 0 1000s445.83 1000 1000 1000z"/><path fill="#fff" d="M1275 1158.33c0-145.83-87.5-195.83-262.5-216.66-125-16.67-150-50-150-108.34s41.67-95.83 125-95.83c75 0 116.67 25 137.5 87.5 4.17 12.5 16.67 20.83 29.17 20.83h66.66c16.67 0 29.17-12.5 29.17-29.16v-4.17c-16.67-91.67-91.67-162.5-187.5-170.83v-100c0-16.67-12.5-29.17-33.33-33.34h-62.5c-16.67 0-29.17 12.5-33.34 33.34v95.83c-125 16.67-204.16 100-204.16 204.17 0 137.5 83.33 191.66 258.33 212.5 116.67 20.83 154.17 45.83 154.17 112.5s-58.34 112.5-137.5 112.5c-108.34 0-145.84-45.84-158.34-108.34-4.16-16.66-16.66-25-29.16-25h-70.84c-16.66 0-29.16 12.5-29.16 29.17v4.17c16.66 104.16 83.33 179.16 220.83 200v100c0 16.66 12.5 29.16 33.33 33.33h62.5c16.67 0 29.17-12.5 33.34-33.33v-100c125-20.84 208.33-108.34 208.33-220.84z"/><path fill="#fff" d="M787.5 1595.83c-325-116.66-491.67-479.16-370.83-800 62.5-175 200-308.33 370.83-370.83 16.67-8.33 25-20.83 25-41.67V325c0-16.67-8.33-29.17-25-33.33-4.17 0-12.5 0-16.67 4.16-395.83 125-612.5 545.84-487.5 941.67 75 233.33 254.17 412.5 487.5 487.5 16.67 8.33 33.34 0 37.5-16.67 4.17-4.16 4.17-8.33 4.17-16.66v-58.34c0-12.5-12.5-29.16-25-37.5zM1229.17 295.83c-16.67-8.33-33.34 0-37.5 16.67-4.17 4.17-4.17 8.33-4.17 16.67v58.33c0 16.67 12.5 33.33 25 41.67 325 116.66 491.67 479.16 370.83 800-62.5 175-200 308.33-370.83 370.83-16.67 8.33-25 20.83-25 41.67V1700c0 16.67 8.33 29.17 25 33.33 4.17 0 12.5 0 16.67-4.16 395.83-125 612.5-545.84 487.5-941.67-75-237.5-258.34-416.67-487.5-491.67z"/></svg>'
  };
  const Mark = ({ id, big }) => /* @__PURE__ */ jsx("span", { style: { height: big ? 58 : 30, minWidth: big ? 66 : 38, padding: big ? "0 13px" : "0 7px", borderRadius: big ? 13 : 8, background: T.snow, border: `1px solid ${T.line200}`, display: "inline-flex", alignItems: "center", justifyContent: "center", overflow: "hidden", flex: "none" }, children: /* @__PURE__ */ jsx("span", { style: { display: "inline-flex", alignItems: "center", transform: big ? "scale(1.45)" : "scale(0.75)" }, dangerouslySetInnerHTML: { __html: LOGOS[id] } }) });
  const fiatTiles = [
    {
      name: tr$2("payments.creditName", "Credit / Debit Card"),
      marks: ["visa", "mc"],
      desc: tr$2("payments.creditDesc", "Sell dVPN access with Visa, Mastercard, Amex and more — through any payment processor you choose.")
    },
    {
      name: tr$2("payments.walletName", "Apple Pay / Google Pay"),
      marks: ["applepay", "googlepay"],
      desc: tr$2("payments.walletDesc", "Charge for your dVPN with one-tap Apple Pay or Google Pay checkout, on the web or in your app.")
    },
    {
      name: tr$2("payments.stripeName", "Stripe"),
      marks: ["stripe"],
      desc: tr$2("payments.stripeDesc", "Bill your dVPN through Stripe Checkout or Billing — payment confirmed by webhook, access granted in the same flow.")
    },
    {
      name: tr$2("payments.cryptoName", "Digital Currencies"),
      marks: ["btc", "sol", "zec"],
      desc: tr$2("payments.cryptoDesc", "Accept BTC, SOL, ZEC or any other chain for dVPN access, via the processor of your choice.")
    },
    {
      name: tr$2("payments.freeName", "Free VPN"),
      marks: ["free"],
      desc: tr$2("payments.freeDesc", "Grant free dVPN access on any condition you set — ads watched, offers completed, referrals made.")
    }
  ];
  return /* @__PURE__ */ jsx("section", { style: { background: "linear-gradient(180deg, #fbfbfb 0%, #f6f8fc 78%, #edf1f9 100%)", ...atomStyles.section, paddingTop: 0 }, children: /* @__PURE__ */ jsxs("div", { style: { ...atomStyles.container, display: "flex", flexDirection: "column", gap: "clamp(28px,4vw,44px)" }, children: [
    /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }, children: [
      /* @__PURE__ */ jsx(StepTag, { n: 3, light: true }),
      /* @__PURE__ */ jsxs("div", { className: "sn-card-light", style: { background: T.white, border: `1px solid ${T.line200}`, borderRadius: 18, padding: "clamp(32px,5vw,46px) clamp(20px,4vw,40px)", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: 18, alignSelf: "stretch" }, children: [
        /* @__PURE__ */ jsxs("div", { style: { display: "flex", alignItems: "center", justifyContent: "center", gap: 10, flexWrap: "wrap" }, children: [
          /* @__PURE__ */ jsx(Mark, { big: true, id: "visa" }),
          /* @__PURE__ */ jsx(Mark, { big: true, id: "applepay" }),
          /* @__PURE__ */ jsx(Mark, { big: true, id: "stripe" }),
          /* @__PURE__ */ jsx(Mark, { big: true, id: "btc" })
        ] }),
        /* @__PURE__ */ jsx("h2", { style: { ...atomStyles.h1Light, fontSize: "clamp(26px,3.2vw,38px)", margin: 0, maxWidth: 780 }, children: tr$2("payments.heading", "Integrate Any Payment Rails") }),
        /* @__PURE__ */ jsx("p", { style: { fontFamily: T.fontBody, fontSize: 15, lineHeight: 1.65, color: T.onLight50, maxWidth: 760, margin: 0 }, children: tr$2("payments.subhead", "Accept fiat payments, crypto payments, or set any conditional trigger to authorize a user for free VPN services.") })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { style: { display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(5,1fr)", gap: 14 }, children: fiatTiles.map((t) => /* @__PURE__ */ jsxs(
      "div",
      {
        style: { background: T.white, borderRadius: 14, padding: "22px 18px", border: `1px solid ${T.line200}`, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: 10 },
        children: [
          /* @__PURE__ */ jsx("div", { style: { display: "flex", alignItems: "center", justifyContent: "center", gap: 6, flexWrap: "nowrap", height: 32 }, children: t.marks.map((m) => /* @__PURE__ */ jsx(Mark, { id: m }, m)) }),
          /* @__PURE__ */ jsx("div", { style: { fontFamily: T.fontHeading, fontWeight: 600, fontSize: 15, lineHeight: "20px", color: T.onLight80 }, children: t.name }),
          /* @__PURE__ */ jsx("div", { style: { fontFamily: T.fontBody, fontSize: 12.5, lineHeight: "19px", color: T.onLight50, flex: 1 }, children: t.desc })
        ]
      },
      t.name
    )) }),
    /* @__PURE__ */ jsx("div", { style: { display: "flex", alignItems: "stretch", flexWrap: "wrap", gap: "clamp(12px,2vw,28px)", justifyContent: "center" }, children: /* @__PURE__ */ jsx(BtnPrimary$1, { light: true, href: "https://plan.sentinel.co/pricing", children: tr$2("payments.cta", "Integrate Any Payment Rail into your dVPN") }) })
  ] }) });
}
Object.assign(window, {
  SentinelMark: SentinelMark$1,
  ChipDark,
  ChipLight,
  BtnPrimary: BtnPrimary$1,
  BtnGhost,
  atomStyles,
  CodeWindow,
  Header: Header$1,
  Hero: Hero$1,
  SupportersStrip,
  StatsStrip: StatsStrip$1,
  ResilienceCards: ResilienceCards$1,
  StepsSection: StepsSection$1,
  SDKSection: SDKSection$1,
  PaymentRailsSection: PaymentRailsSection$1
});

const T2 = window.SENTINEL;
const L2 = window.SENTINEL_LINKS;
const { atomStyles: A, BtnPrimary} = window;
const { useState: useS2, useEffect: useE2, useRef: useR2 } = React;
const useIsMobile = window.useIsMobile;
const tr$1 = (k, f) => typeof window !== "undefined" && window.T ? window.T(k, f) : f != null ? f : k;
const NH_OS = [
  { label: "Windows", icon: "windows", href: L2.nodeDeployer },
  { label: "macOS", icon: "apple", href: L2.nodeDeployer },
  { label: "Linux", icon: "tux", href: L2.hostNode }
];
function LiveNodeTestLink({ fullWidth }) {
  return /* @__PURE__ */ jsxs(
    "a",
    {
      href: L2.testNode,
      target: "_blank",
      rel: "noopener",
      className: "sn-livetest",
      "data-mark": "sn-live-clean",
      style: { display: "flex", alignItems: "center", gap: 12, height: 60, padding: "0 20px 0 11px", width: fullWidth ? "100%" : "auto", boxSizing: "border-box", textDecoration: "none", background: "linear-gradient(135deg, rgba(1,86,252,0.14) 0%, rgba(1,86,252,0.04) 100%)", border: "1px solid rgba(94,148,255,0.26)", borderRadius: 14 },
      children: [
        /* @__PURE__ */ jsx("style", { children: `
        .sn-livetest { transition:transform 200ms cubic-bezier(.22,.61,.36,1), border-color 220ms, background 220ms; }
        .sn-livetest:hover { transform:translateY(-2px); border-color:rgba(94,148,255,0.55); }
        .sn-livetest-label { transition:color 200ms cubic-bezier(.22,.61,.36,1); }
        .sn-livetest:hover .sn-livetest-label { color:#fff; }
        .sn-livetest-arrow { display:inline-block; transition:transform 200ms cubic-bezier(.22,.61,.36,1); }
        .sn-livetest:hover .sn-livetest-arrow { transform:translateX(3px); }
      ` }),
        /* @__PURE__ */ jsx("span", { style: { width: 40, height: 40, borderRadius: 12, flexShrink: 0, background: T2.white, border: "1px solid rgba(255,255,255,0.45)", display: "inline-flex", alignItems: "center", justifyContent: "center" }, children: /* @__PURE__ */ jsx(window.SentinelMark, { size: 22, color: "#0156FC" }) }),
        /* @__PURE__ */ jsx("span", { className: "sn-livetest-label", style: { flex: 1, fontFamily: T2.fontHeading, fontWeight: 600, fontSize: 15, lineHeight: 1, color: T2.fog, whiteSpace: "nowrap", minWidth: 0 }, children: tr$1("nodeHosting.liveTest", "View Live Node Test") }),
        /* @__PURE__ */ jsx("span", { className: "sn-livetest-arrow", "aria-hidden": "true", style: { fontSize: 15, fontWeight: 600, color: "#2670FF", flexShrink: 0 }, children: "↗" })
      ]
    }
  );
}
function NodeHostingSection$1() {
  const cards = [
    {
      tab: tr$1("nodeHosting.installTab", "Install"),
      title: tr$1("nodeHosting.card1Title", "Host a dVPN Node on Your Device"),
      body: tr$1("nodeHosting.card1Body", "Run a Wireguard or V2Ray dVPN Node on your Windows, Mac, or Linux machine and start earning today!"),
      img: window.__resources.screenNode1
    },
    {
      tab: tr$1("nodeHosting.cloudTab", "Cloud"),
      title: tr$1("nodeHosting.card2Title", "Host dVPN Nodes on the Cloud"),
      body: tr$1("nodeHosting.card2Body", "SSH into any cloud server and deploy dVPN nodes in batches — spin up, monitor, and manage your entire fleet from one place."),
      img: window.__resources.screenNode2
    }
  ];
  const rootRef = useR2(null);
  const [active, setActive] = useS2(0);
  const isMobile = useIsMobile();
  useE2(() => {
    const gsap = window.gsap, ScrollTrigger = window.ScrollTrigger;
    const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!gsap || !ScrollTrigger || reduce || isMobile || !rootRef.current) return;
    gsap.registerPlugin(ScrollTrigger);
    const root = rootRef.current;
    const ctx = gsap.context(() => {
      root.classList.add("sn-nh-live");
      const els = gsap.utils.toArray(".sn-nh-card", root);
      const n = els.length;
      els.forEach((card, i) => {
        gsap.set(card, {
          transformOrigin: "center center",
          zIndex: i,
          x: i === 0 ? 0 : () => window.innerWidth * 0.9,
          autoAlpha: i === 0 ? 1 : 0
        });
      });
      const pinEl = root.querySelector(".sn-nh-pin");
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        scrollTrigger: {
          trigger: pinEl,
          start: "top top",
          end: () => "+=" + window.innerHeight * Math.max(0.8, n - 2.2),
          pin: pinEl,
          pinSpacing: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const idx = Math.min(n - 1, Math.floor(self.progress * n + 1e-4));
            setActive(idx);
          }
        }
      });
      els.forEach((card, i) => {
        if (i === 0) return;
        tl.to(card, { x: 0, autoAlpha: 1, duration: 1 }, i - 1 + (i - 1) * 0.25);
      });
      requestAnimationFrame(() => ScrollTrigger.refresh());
    }, root);
    return () => {
      ctx.revert();
      root.classList.remove("sn-nh-live");
    };
  }, [isMobile]);
  return /* @__PURE__ */ jsx("section", { ref: rootRef, id: "host-dvpn", style: { background: "radial-gradient(1100px 540px at 12% -2%, rgba(1,86,252,0.14), transparent 62%), radial-gradient(900px 600px at 92% 34%, rgba(38,112,255,0.08), transparent 60%), radial-gradient(1300px 520px at 50% 104%, rgba(38,112,255,0.09), transparent 65%), #0b0c10", scrollMarginTop: 90 }, children: /* @__PURE__ */ jsx("div", { className: "sn-nh-pin", children: /* @__PURE__ */ jsxs("div", { style: { ...A.container, display: "flex", flexDirection: "column", gap: isMobile ? 28 : "clamp(12px,1.8vh,20px)", paddingTop: isMobile ? 0 : "clamp(10px,1.4vh,16px)", paddingBottom: isMobile ? 0 : "clamp(10px,1.4vh,16px)", height: "100%", boxSizing: "border-box", justifyContent: "center" }, children: [
    /* @__PURE__ */ jsxs("div", { style: { ...A.sectionHead, gap: 10 }, children: [
      /* @__PURE__ */ jsx("h2", { style: { ...A.h1Dark }, children: tr$1("nodeHosting.heading", "Host a dVPN Node. Earn Bandwidth Rewards.") }),
      /* @__PURE__ */ jsx("p", { style: { ...A.leadDark, maxWidth: 772 }, children: tr$1("nodeHosting.lead", "Run a Sentinel Node in minutes and join 1500+ operators across the world and provide your bandwidth to the future of decentralized privacy.") })
    ] }),
    /* @__PURE__ */ jsxs("div", { style: { width: "100%", display: "flex", flexDirection: "column", gap: 14 }, children: [
      /* @__PURE__ */ jsx("div", { className: "sn-nh-stage", children: cards.map((c) => /* @__PURE__ */ jsxs("div", { className: "sn-nh-card", children: [
        /* @__PURE__ */ jsx("div", { className: "sn-nh-imgwrap", style: { overflow: "hidden", background: "rgb(21,21,21)" }, children: /* @__PURE__ */ jsx("img", { src: c.img, alt: c.title, style: { width: "100%", height: "100%", display: "block", objectFit: "cover", objectPosition: "center top" } }) }),
        /* @__PURE__ */ jsxs("div", { style: { padding: isMobile ? "clamp(16px,5vw,24px)" : "28px 40px", display: "flex", flexDirection: "column", justifyContent: "center", gap: 8 }, children: [
          /* @__PURE__ */ jsx("h3", { style: { fontFamily: T2.fontHeading, fontWeight: 500, fontSize: "clamp(20px,4.5vw,27px)", color: "rgb(234,234,234)", margin: 0, lineHeight: 1.2, letterSpacing: "-0.005em" }, children: c.title }),
          /* @__PURE__ */ jsx("p", { style: { fontFamily: T2.fontBody, fontSize: "clamp(15px,1.8vw,16px)", lineHeight: 1.55, color: "rgba(234,234,234,0.6)", margin: 0 }, children: c.body })
        ] })
      ] }, c.tab)) }),
      !isMobile && /* @__PURE__ */ jsx("div", { style: { display: "flex", justifyContent: "center", gap: 8, marginTop: 0 }, children: cards.map((_, i) => /* @__PURE__ */ jsx(
        "span",
        {
          "aria-hidden": "true",
          style: { width: i === active ? 24 : 8, height: 8, borderRadius: 9999, background: i === active ? "#2670ff" : "rgba(255,255,255,0.18)", transition: "width 240ms, background 240ms" }
        },
        i
      )) })
    ] }),
    /* @__PURE__ */ jsxs("div", { style: { position: "relative", display: "flex", flexDirection: "column", alignItems: "center", gap: isMobile ? 24 : "clamp(18px,2.8vh,28px)", marginTop: isMobile ? 44 : "clamp(10px,2.2vh,26px)", paddingBottom: isMobile ? 0 : "clamp(4px,1vh,12px)" }, children: [
      /* @__PURE__ */ jsx("h3", { style: { fontFamily: T2.fontHeading, fontWeight: 500, fontSize: "clamp(23px,3vw,30px)", color: "rgb(234,234,234)", margin: 0, lineHeight: 1.2, letterSpacing: "-0.005em" }, children: tr$1("nodeHosting.ctaHeading", "Host a dVPN Node Today!") }),
      /* @__PURE__ */ jsxs("div", { style: { position: "relative", width: "100%", display: "flex", justifyContent: "center", alignItems: "center", flexWrap: "wrap", gap: "clamp(14px,2vw,20px)" }, children: [
        /* @__PURE__ */ jsx("style", { children: ".sn-btn-primary:hover .sn-plat-flip * { fill:#fff; }" }),
        NH_OS.map((o) => /* @__PURE__ */ jsxs(BtnPrimary, { href: o.href, style: { gap: 12, height: isMobile ? 52 : 60, padding: isMobile ? "0 22px" : "0 38px", fontSize: isMobile ? 15.5 : 18 }, children: [
          /* @__PURE__ */ jsx(DvpnPlatIcon, { kind: o.icon, size: 20, brand: true }),
          o.label
        ] }, o.label)),
        !isMobile && /* @__PURE__ */ jsx("div", { style: { position: "absolute", right: 0, top: "50%", transform: "translateY(-50%)" }, children: /* @__PURE__ */ jsx(LiveNodeTestLink, {}) })
      ] }),
      isMobile && /* @__PURE__ */ jsx(LiveNodeTestLink, { fullWidth: true })
    ] })
  ] }) }) });
}
const AGENT_MARKS = {
  claude: /* @__PURE__ */ jsx("svg", { width: "22", height: "22", viewBox: "0 0 24 24", fill: "#D97757", "aria-hidden": "true", children: /* @__PURE__ */ jsx("path", { d: "M4.709 15.955l4.72-2.647.08-.23-.08-.128H9.2l-.79-.048-2.698-.073-2.339-.097-2.266-.122-.571-.121L0 11.784l.055-.352.48-.321.686.06 1.52.103 2.278.158 1.652.097 2.449.255h.389l.055-.157-.134-.098-.103-.097-2.358-1.596-2.552-1.688-1.336-.972-.724-.491-.364-.462-.158-1.008.656-.722.881.06.225.061.893.686 1.908 1.476 2.491 1.833.365.304.145-.103.019-.073-.164-.274-1.355-2.446-1.446-2.49-.644-1.032-.17-.619a2.97 2.97 0 01-.104-.729L6.283.134 6.696 0l.996.134.42.364.62 1.414 1.002 2.229 1.555 3.03.456.898.243.832.091.255h.158V9.01l.128-1.706.237-2.095.23-2.695.08-.76.376-.91.747-.492.583.28.48.685-.067.444-.286 1.851-.559 2.903-.364 1.942h.212l.243-.242.985-1.306 1.652-2.064.73-.82.85-.904.547-.431h1.033l.76 1.129-.34 1.166-1.064 1.347-.881 1.142-1.264 1.7-.79 1.36.073.11.188-.02 2.856-.606 1.543-.28 1.841-.315.833.388.091.395-.328.807-1.969.486-2.309.462-3.439.813-.042.03.049.061 1.549.146.662.036h1.622l3.02.225.79.522.474.638-.079.485-1.215.62-1.64-.389-3.829-.91-1.312-.329h-.182v.11l1.093 1.068 2.006 1.81 2.509 2.33.127.578-.322.455-.34-.049-2.205-1.657-.851-.747-1.926-1.62h-.128v.17l.444.65 2.345 3.52.122 1.08-.17.353-.608.213-.668-.122-1.374-1.925-1.415-2.167-1.143-1.943-.14.08-.674 7.254-.316.37-.729.28-.607-.461-.322-.747.322-1.476.389-1.924.315-1.53.286-1.9.17-.632-.012-.042-.14.018-1.434 1.967-2.18 2.945-1.726 1.845-.414.164-.717-.37.067-.662.401-.589 2.388-3.036 1.44-1.882.93-1.086-.006-.158h-.055L4.132 18.56l-1.13.146-.487-.456.061-.746.231-.243 1.908-1.312-.006.006z" }) }),
  chatgpt: /* @__PURE__ */ jsx("svg", { width: "22", height: "22", viewBox: "0 0 24 24", fill: "#eaf1ff", "aria-hidden": "true", children: /* @__PURE__ */ jsx("path", { d: "M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.073zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.8956zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997z" }) }),
  gemini: /* @__PURE__ */ jsxs("svg", { width: "22", height: "22", viewBox: "0 0 24 24", "aria-hidden": "true", children: [
    /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsxs("linearGradient", { id: "agGemGrad", x1: "0", y1: "0", x2: "1", y2: "1", children: [
      /* @__PURE__ */ jsx("stop", { offset: "0%", stopColor: "#4285F4" }),
      /* @__PURE__ */ jsx("stop", { offset: "100%", stopColor: "#9B72CB" })
    ] }) }),
    /* @__PURE__ */ jsx("path", { fill: "url(#agGemGrad)", d: "M12 24A14.304 14.304 0 0 0 0 12 14.304 14.304 0 0 0 12 0a14.305 14.305 0 0 0 12 12 14.305 14.305 0 0 0-12 12" })
  ] })
};
function MatrixRain({ opacity = 0.22 }) {
  const ref = useR2(null);
  useE2(() => {
    const canvas = ref.current;
    if (!canvas) return;
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = canvas.getContext("2d");
    const GLYPHS = "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモ0123456789ABCDEF<>/=$+";
    const FS = 16;
    const parent = canvas.parentElement;
    let drops = [], w = 0, h = 0, raf = 0, last = 0;
    const dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
    const resize = () => {
      w = parent.offsetWidth;
      h = parent.offsetHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      drops = new Array(Math.ceil(w / FS)).fill(0).map(() => Math.random() * -50);
    };
    const draw = () => {
      ctx.fillStyle = "rgba(2,8,20,0.085)";
      ctx.fillRect(0, 0, w, h);
      ctx.font = FS + "px JetBrains Mono, monospace";
      ctx.textBaseline = "top";
      for (let i = 0; i < drops.length; i++) {
        const y = drops[i] * FS;
        ctx.fillStyle = Math.random() < 0.04 ? "#eaf1ff" : "#2670ff";
        ctx.fillText(GLYPHS.charAt(Math.random() * GLYPHS.length | 0), i * FS, y);
        if (y > h && Math.random() > 0.975) drops[i] = 0;
        drops[i] += 0.55 + Math.random() * 0.5;
      }
    };
    const loop = (ts) => {
      if (ts - last >= 33) {
        draw();
        last = ts;
      }
      raf = requestAnimationFrame(loop);
    };
    resize();
    window.addEventListener("resize", resize, { passive: true });
    raf = requestAnimationFrame(loop);
    const onVis = () => {
      if (document.hidden) {
        cancelAnimationFrame(raf);
        raf = 0;
      } else if (!raf) {
        raf = requestAnimationFrame(loop);
      }
    };
    document.addEventListener("visibilitychange", onVis);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, []);
  return /* @__PURE__ */ jsx("canvas", { ref, "aria-hidden": "true", style: { position: "absolute", inset: 0, pointerEvents: "none", opacity, maskImage: "linear-gradient(180deg, transparent 0%, black 14%, black 82%, transparent 100%)", WebkitMaskImage: "linear-gradient(180deg, transparent 0%, black 14%, black 82%, transparent 100%)" } });
}
function AgenticPaymentsSection$1() {
  const isMobile = useIsMobile();
  const X = {
    card: "rgba(10,16,28,0.62)",
    border: "rgba(38,112,255,0.16)",
    borderBright: "rgba(94,148,255,0.38)",
    text: "#cfdcff",
    bright: "#eaf1ff",
    muted: "#8fb0ec",
    dim: "#4a6396",
    accent: "#5e94ff"
  };
  const glow = "radial-gradient(ellipse at 50% -10%, rgba(38,112,255,0.10), transparent 60%), radial-gradient(ellipse at 50% 110%, rgba(1,86,252,0.07), transparent 60%)";
  const steps = [
    [tr$1("agentic.step1Title", "Request access"), tr$1("agentic.step1Body", "Your agent calls the connect endpoint — 1, 7 or 30 days.")],
    [tr$1("agentic.step2Title", "Get the price"), tr$1("agentic.step2Body", "Sentinel replies with the cost: $0.033 for a full day.")],
    [tr$1("agentic.step3Title", "Pay automatically"), tr$1("agentic.step3Body", "The agent signs the USDC payment itself. Settles in ~2 seconds.")],
    [tr$1("agentic.step4Title", "Tunnel up"), tr$1("agentic.step4Body", "Encrypted WireGuard connection. No API keys, no accounts, no human.")]
  ];
  const agents = [
    { key: "claude", label: tr$1("agentic.claudeAgent", "Claude Agent") },
    { key: "chatgpt", label: tr$1("agentic.chatgptAgent", "ChatGPT Agent") },
    { key: "gemini", label: tr$1("agentic.geminiAgent", "Gemini Agent") }
  ];
  return /* @__PURE__ */ jsxs("section", { style: { ...A.section, position: "relative", overflow: "hidden", background: `${glow}, linear-gradient(180deg, #0b0c10 0%, #020814 16%, #020814 84%, #040a18 100%)` }, children: [
    /* @__PURE__ */ jsx(MatrixRain, {}),
    /* @__PURE__ */ jsxs("div", { style: { ...A.container, position: "relative", zIndex: 1, display: "flex", flexDirection: "column", gap: isMobile ? 44 : "clamp(32px,4vw,44px)" }, children: [
      /* @__PURE__ */ jsxs("div", { style: { display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: isMobile ? 36 : 56, alignItems: "center" }, children: [
        /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: "column", gap: 20 }, children: [
          /* @__PURE__ */ jsx("h2", { style: { ...A.h1Dark, maxWidth: 540, color: X.bright }, children: tr$1("agentic.heading", "The first decentralized VPN network for AI agents.") }),
          /* @__PURE__ */ jsx("p", { style: { ...A.leadDark, maxWidth: 540, color: X.muted }, children: tr$1("agentic.lead", "Agents get privacy and bypass geo-restrictions on their own — no API keys, no accounts, no human. A full day of VPN costs $0.033, paid autonomously in USDC.") }),
          /* @__PURE__ */ jsxs("div", { style: isMobile ? { display: "grid", gridTemplateColumns: "repeat(2, minmax(0,1fr))", gap: 10 } : { display: "flex", gap: 12, flexWrap: "wrap" }, children: [
            /* @__PURE__ */ jsxs("span", { style: { display: "inline-flex", alignItems: "center", justifyContent: isMobile ? "center" : "flex-start", gap: 10, padding: isMobile ? "11px 12px" : "10px 18px", borderRadius: 12, background: "rgba(8,16,30,0.72)", border: `1px solid ${X.borderBright}`, boxShadow: "0 0 18px -6px rgba(38,112,255,0.45)", backdropFilter: "blur(6px)" }, children: [
              /* @__PURE__ */ jsx("svg", { width: "18", height: "18", viewBox: "0 0 24 24", "aria-hidden": "true", children: /* @__PURE__ */ jsx("path", { fill: "#0052FF", d: "M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.66565 0 0.475508 4.91843 0.0244141 11.1582H15.8643V12.8418H0.0244141C0.475508 19.0816 5.66565 24 12 24Z" }) }),
              /* @__PURE__ */ jsx("span", { style: { fontFamily: T2.fontMono, fontSize: 12.5, fontWeight: 700, color: X.bright }, children: tr$1("agentic.payOnBase", "Pay on Base") })
            ] }),
            /* @__PURE__ */ jsxs("span", { style: { display: "inline-flex", alignItems: "center", justifyContent: isMobile ? "center" : "flex-start", gap: 10, padding: isMobile ? "11px 12px" : "10px 18px", borderRadius: 12, background: "rgba(8,16,30,0.5)", border: `1px solid ${X.border}`, backdropFilter: "blur(6px)" }, children: [
              /* @__PURE__ */ jsxs("svg", { width: "16", height: "16", viewBox: "0 0 24 24", "aria-hidden": "true", style: { opacity: 0.9 }, children: [
                /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsxs("linearGradient", { id: "agSolGrad", x1: "0", y1: "1", x2: "1", y2: "0", children: [
                  /* @__PURE__ */ jsx("stop", { offset: "0%", stopColor: "#9945FF" }),
                  /* @__PURE__ */ jsx("stop", { offset: "100%", stopColor: "#14F195" })
                ] }) }),
                /* @__PURE__ */ jsx("path", { fill: "url(#agSolGrad)", d: "M4.6 16.82c.14-.14.34-.23.54-.23h15.4c.34 0 .51.41.27.65l-3.21 3.22c-.14.14-.34.23-.54.23H1.66c-.34 0-.51-.41-.27-.65l3.21-3.22zM4.6 3.54c.14-.14.34-.23.54-.23h15.4c.34 0 .51.41.27.65L17.6 7.18c-.14.14-.34.23-.54.23H1.66c-.34 0-.51-.41-.27-.65L4.6 3.54zM17.6 10.13c-.14-.14-.34-.23-.54-.23H1.66c-.34 0-.51.41-.27.65l3.21 3.22c.14.14.34.23.54.23h15.4c.34 0 .51-.41.27-.65l-3.21-3.22z" })
              ] }),
              /* @__PURE__ */ jsx("span", { style: { fontFamily: T2.fontMono, fontSize: 12.5, color: X.muted }, children: "Solana" }),
              /* @__PURE__ */ jsx("span", { style: { fontFamily: T2.fontMono, fontSize: 9.5, fontWeight: 700, letterSpacing: "0.08em", color: "#ffb547", border: "1px solid rgba(255,181,71,0.35)", borderRadius: 6, padding: "2px 7px" }, children: tr$1("agentic.soon", "SOON") })
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { style: { display: "flex", flexWrap: "wrap", gap: 14, marginTop: 6 }, children: /* @__PURE__ */ jsx(BtnPrimary, { href: L2.x402, style: isMobile ? { width: "100%", boxSizing: "border-box" } : void 0, children: tr$1("agentic.launchBtn", "Launch x402.sentinel.co") }) })
        ] }),
        /* @__PURE__ */ jsx("div", { style: { background: X.card, border: `1px solid ${X.border}`, borderRadius: 16, padding: isMobile ? "6px 20px" : "8px 24px", backdropFilter: "blur(6px)", boxShadow: "0 0 0 1px rgba(38,112,255,0.08), 0 24px 60px -30px rgba(0,0,0,0.9)" }, children: steps.map(([title, body], i) => /* @__PURE__ */ jsxs("div", { style: { display: "flex", gap: isMobile ? 14 : 16, alignItems: "flex-start", padding: isMobile ? "17px 0" : "15px 0", borderTop: i === 0 ? "none" : `1px solid ${X.border}` }, children: [
          /* @__PURE__ */ jsx("span", { style: { flexShrink: 0, width: 28, height: 28, borderRadius: 9, border: `1px solid ${X.borderBright}`, background: "rgba(38,112,255,0.10)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontFamily: T2.fontMono, fontSize: 12, fontWeight: 700, color: X.accent }, children: i + 1 }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { style: { fontFamily: T2.fontHeading, fontWeight: 500, fontSize: 16, color: X.bright, margin: "2px 0 3px", lineHeight: 1.3 }, children: title }),
            /* @__PURE__ */ jsx("p", { style: { fontFamily: T2.fontBody, fontSize: 13.5, lineHeight: "20px", color: X.muted, margin: 0 }, children: body })
          ] })
        ] }, title)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }, children: [
        /* @__PURE__ */ jsx("span", { style: { fontFamily: T2.fontMono, fontSize: 11, letterSpacing: "0.1em", fontWeight: 700, color: X.dim }, children: tr$1("agentic.connectAgent", "CONNECT YOUR AGENT") }),
        /* @__PURE__ */ jsx("div", { style: isMobile ? { display: "grid", gridTemplateColumns: "1fr", gap: 10, width: "100%", maxWidth: 300 } : { display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 14 }, children: agents.map((a) => /* @__PURE__ */ jsxs("div", { style: { display: "flex", alignItems: "center", justifyContent: isMobile ? "center" : "flex-start", gap: 12, padding: isMobile ? "13px 22px" : "12px 22px", borderRadius: 14, background: X.card, border: `1px solid ${X.border}`, backdropFilter: "blur(6px)" }, children: [
          AGENT_MARKS[a.key],
          /* @__PURE__ */ jsx("span", { style: { fontFamily: T2.fontMono, fontSize: 13.5, color: X.text }, children: a.label })
        ] }, a.key)) })
      ] })
    ] })
  ] });
}
const DVPN_PLAT_GLYPHS = {
  apple: /* @__PURE__ */ jsx("path", { d: "M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 14.25 3.51 5.88 9.05 5.6c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.59zM12.03 5.5C11.88 3.24 13.71 1.4 15.8 1.22c.29 2.58-2.34 4.5-3.77 4.28z" }),
  tux: /* @__PURE__ */ jsx("path", { d: "M12.504 0c-.155 0-.315.008-.48.021-4.226.333-3.105 4.807-3.17 6.298-.076 1.092-.3 1.953-1.05 3.02-.885 1.051-2.127 2.75-2.716 4.521-.278.832-.41 1.684-.287 2.489a.424.424 0 00-.11.135c-.26.268-.45.6-.663.839-.199.199-.485.267-.797.4-.313.136-.658.269-.864.68-.09.189-.136.394-.132.602 0 .199.027.4.055.536.058.399.116.728.04.97-.249.68-.28 1.145-.106 1.484.174.334.535.47.94.601.81.2 1.91.135 2.774.6.926.466 1.866.67 2.616.47.526-.116.97-.464 1.208-.946.587-.003 1.23-.269 2.26-.334.699-.058 1.574.267 2.577.2.025.134.063.198.114.333l.003.003c.391.778 1.113 1.132 1.884 1.071.771-.06 1.592-.536 2.257-1.306.631-.765 1.683-1.084 2.378-1.503.348-.199.629-.469.649-.853.023-.4-.2-.811-.714-1.376v-.097l-.003-.003c-.17-.2-.25-.535-.338-.926-.085-.401-.182-.786-.492-1.046h-.003c-.059-.054-.123-.067-.188-.135a.357.357 0 00-.19-.064c.431-1.278.264-2.55-.173-3.694-.533-1.41-1.465-2.638-2.175-3.483-.796-1.005-1.576-1.957-1.56-3.368.026-2.152.236-6.133-3.544-6.139zm.529 3.405h.013c.213 0 .396.062.584.198.19.135.33.332.438.533.105.259.158.459.166.724 0-.02.006-.04.006-.06v.105a.086.086 0 01-.004-.021l-.004-.024a1.807 1.807 0 01-.15.706.953.953 0 01-.213.335.71.71 0 00-.088-.042c-.104-.045-.198-.064-.284-.133a1.312 1.312 0 00-.22-.066c.05-.06.146-.133.183-.198.053-.128.082-.264.088-.402v-.02a1.21 1.21 0 00-.061-.4c-.045-.134-.101-.2-.183-.333-.084-.066-.167-.132-.267-.132h-.016c-.093 0-.176.03-.262.132a.8.8 0 00-.205.334 1.18 1.18 0 00-.09.4v.019c.002.089.008.179.02.267-.193-.067-.438-.135-.607-.202a1.635 1.635 0 01-.018-.2v-.02a1.772 1.772 0 01.15-.768c.082-.22.232-.406.43-.533a.985.985 0 01.594-.2zm-2.962.059h.036c.142 0 .27.048.399.135.146.129.264.288.344.465.09.199.14.4.153.667v.004c.007.134.006.2-.002.266v.08c-.03.007-.056.018-.083.024-.152.055-.274.135-.393.2.012-.09.013-.18.003-.267v-.015c-.012-.133-.04-.2-.082-.333a.613.613 0 00-.166-.267.248.248 0 00-.183-.064h-.021c-.071.006-.13.04-.186.132a.552.552 0 00-.12.27.944.944 0 00-.023.33v.015c.012.135.037.2.08.334.046.134.098.2.166.268.01.009.02.018.034.024-.07.057-.117.07-.176.136a.304.304 0 01-.131.068 2.62 2.62 0 01-.275-.402 1.772 1.772 0 01-.155-.667 1.759 1.759 0 01.08-.668 1.43 1.43 0 01.283-.535c.128-.133.26-.2.418-.2zm1.37 1.706c.332 0 .733.065 1.216.399.293.2.523.269 1.052.468h.003c.255.136.405.266.478.399v-.131a.571.571 0 01.016.47c-.123.31-.516.643-1.063.842v.002c-.268.135-.501.333-.775.465-.276.135-.588.292-1.012.267a1.139 1.139 0 01-.448-.067 3.566 3.566 0 01-.322-.198c-.195-.135-.363-.332-.612-.465v-.005h-.005c-.4-.246-.616-.512-.686-.71-.07-.268-.005-.47.193-.6.224-.135.38-.271.483-.336.104-.074.143-.102.176-.131h.002v-.003c.169-.202.436-.47.839-.601.139-.036.294-.065.466-.065zm2.8 2.142c.358 1.417 1.196 3.475 1.735 4.473.286.534.855 1.659 1.102 3.024.156-.005.33.018.513.064.646-1.671-.546-3.467-1.089-3.966-.22-.2-.232-.335-.123-.335.59.534 1.365 1.572 1.646 2.757.13.535.16 1.104.021 1.67.067.028.135.06.205.067 1.032.534 1.413.938 1.23 1.537v-.043c-.06-.003-.12 0-.18 0h-.016c.151-.467-.182-.825-1.065-1.224-.915-.4-1.646-.336-1.77.465-.008.043-.013.066-.018.135-.068.023-.139.053-.209.064-.43.268-.662.669-.793 1.187-.13.533-.17 1.156-.205 1.869v.003c-.02.334-.17.838-.319 1.35-1.5 1.072-3.58 1.538-5.348.334a2.645 2.645 0 00-.402-.533 1.45 1.45 0 00-.275-.333c.182 0 .338-.03.465-.067a.615.615 0 00.314-.334c.108-.267 0-.697-.345-1.163-.345-.467-.931-.995-1.788-1.521-.63-.4-.986-.87-1.15-1.396-.165-.534-.143-1.085-.015-1.645.245-1.07.873-2.11 1.274-2.763.107-.065.037.135-.408.974-.396.751-1.14 2.497-.122 3.854a8.123 8.123 0 01.647-2.876c.564-1.278 1.743-3.504 1.836-5.268.048.036.217.135.289.202.218.133.38.333.59.465.21.201.477.335.876.335.039.003.075.006.11.006.412 0 .73-.134.997-.268.29-.134.52-.334.74-.4h.005c.467-.135.835-.402 1.044-.7zm2.185 8.958c.037.6.343 1.245.882 1.377.588.134 1.434-.333 1.791-.765l.211-.01c.315-.007.577.01.847.268l.003.003c.208.199.305.53.391.876.085.4.154.78.409 1.066.486.527.645.906.636 1.14l.003-.007v.018l-.003-.012c-.015.262-.185.396-.498.595-.63.401-1.746.712-2.457 1.57-.618.737-1.37 1.14-2.036 1.191-.664.053-1.237-.2-1.574-.898l-.005-.003c-.21-.4-.12-1.025.056-1.69.176-.668.428-1.344.463-1.897.037-.714.076-1.335.195-1.814.12-.465.308-.797.641-.984l.045-.022zm-10.814.049h.01c.053 0 .105.005.157.014.376.055.706.333 1.023.752l.91 1.664.003.003c.243.533.754 1.064 1.189 1.637.434.598.77 1.131.729 1.57v.006c-.057.744-.48 1.148-1.125 1.294-.645.135-1.52.002-2.395-.464-.968-.536-2.118-.469-2.857-.602-.369-.066-.61-.2-.723-.4-.11-.2-.113-.602.123-1.23v-.004l.002-.003c.117-.334.03-.752-.027-1.118-.055-.401-.083-.71.043-.94.16-.334.396-.4.69-.533.294-.135.64-.202.915-.47h.002v-.002c.256-.268.445-.601.668-.838.19-.201.38-.336.663-.336zm7.159-9.074c-.435.201-.945.535-1.488.535-.542 0-.97-.267-1.28-.466-.154-.134-.28-.268-.373-.335-.164-.134-.144-.333-.074-.333.109.016.129.134.199.2.096.066.215.2.36.333.292.2.68.467 1.167.467.485 0 1.053-.267 1.398-.466.195-.135.445-.334.648-.467.156-.136.149-.267.279-.267.128.016.034.134-.147.332a8.097 8.097 0 01-.69.468zm-1.082-1.583V5.64c-.006-.02.013-.042.029-.05.074-.043.18-.027.26.004.063 0 .16.067.15.135-.006.049-.085.066-.135.066-.055 0-.092-.043-.141-.068-.052-.018-.146-.008-.163-.065zm-.551 0c-.02.058-.113.049-.166.066-.047.025-.086.068-.14.068-.05 0-.13-.02-.136-.068-.01-.066.088-.133.15-.133.08-.031.184-.047.259-.005.019.009.036.03.03.05v.02h.003z" })
};
function DvpnPlatIcon({ kind, size = 14, brand }) {
  const stroke = { fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" };
  if (brand && kind === "windows")
    return /* @__PURE__ */ jsx("svg", { width: size, height: size, viewBox: "0 0 24 24", className: "sn-plat-flip", "aria-hidden": "true", children: /* @__PURE__ */ jsx("path", { fill: "#0078D4", d: "M0 3.45L9.75 2.1v9.45H0m10.95-9.6L24 0v11.4H10.95M0 12.6h9.75v9.45L0 20.7M10.95 12.6H24V24l-12.9-1.8" }) });
  if (brand && kind === "apple")
    return /* @__PURE__ */ jsx("svg", { width: size, height: size, viewBox: "0 0 24 24", className: "sn-plat-flip", "aria-hidden": "true", children: /* @__PURE__ */ jsx("g", { fill: "#0B0B0C", children: DVPN_PLAT_GLYPHS.apple }) });
  if (brand && kind === "tux")
    return /* @__PURE__ */ jsxs("svg", { width: size, height: size, viewBox: "0 0 24 24", "aria-hidden": "true", children: [
      /* @__PURE__ */ jsx("ellipse", { cx: "7.4", cy: "21.2", rx: "3.3", ry: "2", fill: "#F6BF1E", transform: "rotate(-14 7.4 21.2)" }),
      /* @__PURE__ */ jsx("ellipse", { cx: "16.6", cy: "21.2", rx: "3.3", ry: "2", fill: "#F6BF1E", transform: "rotate(14 16.6 21.2)" }),
      /* @__PURE__ */ jsx("path", { fill: "#0A0A0A", d: "M12 1.6c4 0 5.9 3 5.9 6.7 0 1.8.7 3.2 1.5 4.7.8 1.6 1.5 3.4 1.5 5.2 0 2.4-1.9 3.4-4.2 3.4H7.3c-2.3 0-4.2-1-4.2-3.4 0-1.8.7-3.6 1.5-5.2.8-1.5 1.5-2.9 1.5-4.7C6.1 4.6 8 1.6 12 1.6z" }),
      /* @__PURE__ */ jsx("ellipse", { cx: "12", cy: "16.2", rx: "4.1", ry: "5", fill: "#fff" }),
      /* @__PURE__ */ jsx("circle", { cx: "10.1", cy: "6.6", r: "1.45", fill: "#fff" }),
      /* @__PURE__ */ jsx("circle", { cx: "13.9", cy: "6.6", r: "1.45", fill: "#fff" }),
      /* @__PURE__ */ jsx("circle", { cx: "10.4", cy: "6.8", r: "0.6", fill: "#000" }),
      /* @__PURE__ */ jsx("circle", { cx: "13.6", cy: "6.8", r: "0.6", fill: "#000" }),
      /* @__PURE__ */ jsx("path", { fill: "#F6BF1E", d: "M12 7.8l2.1 1.5-2.1 1.5-2.1-1.5z" })
    ] });
  if (kind === "apple")
    return /* @__PURE__ */ jsx("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "currentColor", "aria-hidden": "true", children: DVPN_PLAT_GLYPHS.apple });
  if (kind === "android")
    return /* @__PURE__ */ jsx("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "currentColor", "aria-hidden": "true", children: /* @__PURE__ */ jsx("path", { d: "M17.6 9.48l1.84-3.18c.16-.29.06-.65-.23-.81-.29-.16-.65-.06-.81.23l-1.86 3.23a11.46 11.46 0 00-9.08 0L5.6 5.72a.59.59 0 00-.81-.23c-.29.16-.39.52-.23.81L6.4 9.48A10.8 10.8 0 001 18.5h22a10.8 10.8 0 00-5.4-9.02M7 15.25a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5m10 0a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5" }) });
  if (kind === "tv")
    return /* @__PURE__ */ jsxs("svg", { width: size, height: size, viewBox: "0 0 24 24", ...stroke, "aria-hidden": "true", children: [
      /* @__PURE__ */ jsx("rect", { x: "2.5", y: "6", width: "19", height: "12", rx: "2" }),
      /* @__PURE__ */ jsx("path", { d: "M8.5 2.8L12 6l3.5-3.2" })
    ] });
  if (kind === "tux")
    return /* @__PURE__ */ jsx("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "currentColor", "aria-hidden": "true", children: DVPN_PLAT_GLYPHS.tux });
  if (kind === "windows")
    return /* @__PURE__ */ jsx("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "currentColor", "aria-hidden": "true", children: /* @__PURE__ */ jsx("path", { d: "M0 3.45L9.75 2.1v9.45H0m10.95-9.6L24 0v11.4H10.95M0 12.6h9.75v9.45L0 20.7M10.95 12.6H24V24l-12.9-1.8" }) });
  if (kind === "linux")
    return /* @__PURE__ */ jsxs("svg", { width: size, height: size, viewBox: "0 0 24 24", ...stroke, "aria-hidden": "true", children: [
      /* @__PURE__ */ jsx("rect", { x: "3", y: "4", width: "18", height: "16", rx: "2" }),
      /* @__PURE__ */ jsx("path", { d: "M7 9l3 3-3 3" }),
      /* @__PURE__ */ jsx("line", { x1: "12.5", y1: "15", x2: "17", y2: "15" })
    ] });
  return null;
}
const DVPN_COUNTRIES = [
  ["US", "United States"],
  ["GB", "United Kingdom"],
  ["DE", "Germany"],
  ["NL", "Netherlands"],
  ["FR", "France"],
  ["CH", "Switzerland"],
  ["SE", "Sweden"],
  ["ES", "Spain"],
  ["CA", "Canada"],
  ["JP", "Japan"],
  ["SG", "Singapore"],
  ["KR", "South Korea"],
  ["AU", "Australia"],
  ["IN", "India"],
  ["BR", "Brazil"],
  ["AE", "UAE"]
];
const DVPN_APPS = [
  {
    name: "DVPN by NORSE",
    logo: window.__resources.ecoNorse,
    featured: true,
    descKey: "apps.norseDesc",
    desc: "A full decentralized-VPN experience wrapped into user-friendly apps for every platform.",
    links: {
      "iOS": "https://apps.apple.com/us/app/dvpn-decentralized-vpn/id6553963594",
      "Android": "https://play.google.com/store/apps/details?hl=en_US&id=io.norselabs.dvpn",
      "Apple TV": "https://apps.apple.com/us/app/dvpn-decentralized-vpn/id6553963594"
    }
  },
  {
    name: "Sentinel Shield",
    logo: window.__resources.ecoSentinelShield,
    descKey: "apps.shieldDesc",
    desc: "Flagship open-source dVPN by Sentinel P2P — WireGuard & V2Ray.",
    links: {
      "iOS": "https://apps.apple.com/us/app/sentinel-shield-dvpn/id6657986086",
      "Android": "https://play.google.com/store/apps/details?hl=en_US&id=co.sentinel.dvpnapp"
    }
  },
  {
    name: "Ryn VPN",
    logo: window.__resources.ecoRyn,
    descKey: "apps.rynDesc",
    desc: "A clean, minimalist privacy VPN trusted by 10M+ people.",
    links: {
      "iOS": "https://apps.apple.com/ae/app/ryn-vpn-secure-vpn-master/id1493328027",
      "Android": "https://play.google.com/store/apps/details?hl=en_US&id=com.secure.cryptovpn",
      "TV": "https://apkpure.net/ryn-vpn-browse-blazing-fast/com.secure.cryptovpn/download/tv"
    }
  },
  {
    name: "Independent dVPN",
    logo: window.__resources.ecoIndependent,
    descKey: "apps.independentDesc",
    desc: "Free decentralized VPN on Sentinel — WireGuard & V2Ray.",
    links: {
      "iOS": "https://apps.apple.com/us/app/independent-dvpn/id6468454526",
      "Android": "https://play.google.com/store/apps/details?hl=en_US&id=com.bagimsizvpn.app"
    }
  },
  {
    name: "Encrypt SIM",
    logo: window.__resources.ecoEncryptsim,
    descKey: "apps.encryptsimDesc",
    desc: "Privacy-first global eSIM — no KYC, no logs, SOC2-grade encryption.",
    links: {
      "iOS": "https://www.encryptsim.com/",
      "Android": "https://www.encryptsim.com/"
    }
  },
  {
    name: "Meile dVPN",
    logo: window.__resources.ecoMeile,
    descKey: "apps.meileDesc",
    desc: "Sentinel-powered desktop dVPN for macOS, Linux & Windows.",
    links: {
      "macOS": "https://mathnodes.com/index.php/meile-dvpn-client-linux-os-x/",
      "Linux": "https://mathnodes.com/index.php/meile-dvpn-client-linux-os-x/",
      "Windows": "https://mathnodes.com/index.php/meile-dvpn-client-linux-os-x/"
    }
  },
  {
    name: "VALT",
    logo: window.__resources.ecoValt,
    imgFilter: "brightness(0)",
    descKey: "apps.valtDesc",
    desc: "Capture and protect the data you create every day.",
    links: {
      "iOS": "https://apps.apple.com/us/app/valt-dvpn/id1630660373",
      "Android": "https://play.google.com/store/apps/details?hl=en_NZ&id=com.hashcash.breadcrumbs",
      "macOS": "https://valtdata.com/app-download/",
      "Linux": "https://valtdata.com/app-download/",
      "Windows": "https://valtdata.com/app-download/"
    }
  }
];
function dvpnLinkFor(a, platform) {
  if (platform === "iOS") return a.links["iOS"];
  if (platform === "Android") return a.links["Android"];
  if (platform === "Desktop") return a.links["macOS"] || a.links["Windows"] || a.links["Linux"];
  return a.links["Apple TV"] || a.links["TV"];
}
const DVPN_CON_PLATFORMS = [
  { key: "iOS", icon: "apple", label: "iOS" },
  { key: "Android", icon: "android", label: "Android" },
  { key: "Desktop", icon: "windows", label: "Desktop" },
  { key: "TV", icon: "tv", label: "TV" }
];
function DvpnConsole() {
  const isMobile = useIsMobile();
  const [open, setOpen] = useS2(false);
  const [country, setCountry] = useS2(DVPN_COUNTRIES[0]);
  const [platform, setPlatform] = useS2("iOS");
  const [appName, setAppName] = useS2("DVPN by NORSE");
  const [connecting, setConnecting] = useS2(false);
  const available = DVPN_APPS.filter((a) => dvpnLinkFor(a, platform));
  useE2(() => {
    if (!available.some((a) => a.name === appName)) setAppName(available[0] ? available[0].name : null);
  }, [platform]);
  const selApp = available.find((a) => a.name === appName) || available[0] || null;
  const url = selApp ? dvpnLinkFor(selApp, platform) : null;
  const connect = () => {
    if (!url) return;
    window.open(url, "_blank", "noopener");
    setConnecting(true);
    setTimeout(() => setConnecting(false), 1800);
  };
  const fld = { display: "flex", flexDirection: "column", gap: 11, position: "relative" };
  const lbl = { fontFamily: T2.fontMono, fontSize: 11, letterSpacing: "0.06em", color: T2.blueLight };
  return /* @__PURE__ */ jsxs("div", { style: { background: T2.bgGraphite, border: "1px solid rgba(255,255,255,0.08)", borderRadius: 28 }, children: [
    /* @__PURE__ */ jsxs("div", { style: { height: 52, padding: "0 22px", display: "flex", alignItems: "center", gap: 13, borderBottom: "1px solid rgba(255,255,255,0.06)" }, children: [
      /* @__PURE__ */ jsx("div", { style: { display: "flex", gap: 8 }, children: [0, 1, 2].map((i) => /* @__PURE__ */ jsx("span", { style: { width: 11, height: 11, borderRadius: "50%", background: "#2a2a2c" } }, i)) }),
      /* @__PURE__ */ jsx("span", { style: { fontFamily: T2.fontMono, fontSize: 13, color: "rgba(234,234,234,0.62)" }, children: "sentinel://connect" }),
      !isMobile && /* @__PURE__ */ jsxs("span", { style: { marginLeft: "auto", display: "inline-flex", alignItems: "center", gap: 8, fontFamily: T2.fontMono, fontSize: 11, color: "rgba(234,234,234,0.5)" }, children: [
        /* @__PURE__ */ jsx("span", { className: "sn-con-dot", style: { width: 7, height: 7, borderRadius: "50%", background: "#3DDC84" } }),
        " ",
        tr$1("console.wireguardBadge", "WIREGUARD · AES-256")
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { style: { padding: isMobile ? "22px 16px 24px" : "30px 30px 28px", display: "flex", flexDirection: "column", gap: 26 }, children: [
      /* @__PURE__ */ jsxs("div", { className: "sn-con-steps", children: [
        /* @__PURE__ */ jsxs("div", { style: fld, children: [
          /* @__PURE__ */ jsx("span", { style: lbl, children: tr$1("console.step01", "01 — EXIT LOCATION") }),
          /* @__PURE__ */ jsxs("button", { className: "sn-con-dd", onClick: () => setOpen((o) => !o), "aria-haspopup": "listbox", "aria-expanded": open, children: [
            /* @__PURE__ */ jsxs("span", { style: { display: "inline-flex", alignItems: "center", gap: 10 }, children: [
              /* @__PURE__ */ jsx("span", { style: { fontFamily: T2.fontMono, fontSize: 11.5, color: T2.blueLight, background: "rgba(38,112,255,0.14)", padding: "2px 7px", borderRadius: 6 }, children: country[0] }),
              country[1]
            ] }),
            /* @__PURE__ */ jsx("svg", { width: "11", height: "7", viewBox: "0 0 11 7", fill: "none", style: { transform: open ? "rotate(180deg)" : "none", transition: "transform 200ms", flexShrink: 0 }, children: /* @__PURE__ */ jsx("path", { d: "M1 1l4.5 4.5L10 1", stroke: "rgba(255,255,255,0.6)", strokeWidth: "1.4", strokeLinecap: "round", strokeLinejoin: "round" }) })
          ] }),
          open && /* @__PURE__ */ jsx("div", { onClick: () => setOpen(false), style: { position: "fixed", inset: 0, zIndex: 29 } }),
          open && /* @__PURE__ */ jsx("div", { className: "sn-con-ddmenu sn-con-scroll", role: "listbox", children: DVPN_COUNTRIES.map((c) => /* @__PURE__ */ jsxs(
            "div",
            {
              className: "sn-con-ddopt",
              "data-on": c[0] === country[0],
              role: "option",
              "aria-selected": c[0] === country[0],
              onClick: () => {
                setCountry(c);
                setOpen(false);
              },
              children: [
                /* @__PURE__ */ jsx("span", { style: { fontFamily: T2.fontMono, fontSize: 11, color: T2.blueLight, width: 26, flexShrink: 0 }, children: c[0] }),
                c[1]
              ]
            },
            c[0]
          )) })
        ] }),
        /* @__PURE__ */ jsxs("div", { style: fld, children: [
          /* @__PURE__ */ jsx("span", { style: lbl, children: tr$1("console.step02", "02 — PLATFORM") }),
          /* @__PURE__ */ jsx("div", { style: { display: "grid", gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(4, 1fr)", gap: 8 }, children: DVPN_CON_PLATFORMS.map((p) => /* @__PURE__ */ jsxs("button", { className: "sn-con-seg", "data-on": platform === p.key, onClick: () => setPlatform(p.key), children: [
            /* @__PURE__ */ jsx(DvpnPlatIcon, { kind: p.icon, size: 15 }),
            " ",
            p.label
          ] }, p.key)) })
        ] }),
        /* @__PURE__ */ jsxs("div", { style: fld, children: [
          /* @__PURE__ */ jsx("span", { style: lbl, children: tr$1("console.step03", "03 — SELECT APP") }),
          /* @__PURE__ */ jsx("div", { className: "sn-con-scroll", style: { display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)", gap: 8, maxHeight: 188, overflowY: "auto" }, children: available.map((a) => /* @__PURE__ */ jsxs("button", { className: "sn-con-app", "data-on": selApp && a.name === selApp.name, onClick: () => setAppName(a.name), children: [
            /* @__PURE__ */ jsx("span", { style: { width: 30, height: 30, borderRadius: 8, background: "#0f0f10", border: "1px solid rgba(255,255,255,0.08)", display: "grid", placeItems: "center", flexShrink: 0, overflow: "hidden" }, children: /* @__PURE__ */ jsx("img", { src: a.logo, alt: "", style: { width: 20, height: 20, objectFit: "contain", filter: a.imgFilter ? "brightness(0) invert(1)" : void 0 } }) }),
            /* @__PURE__ */ jsx("span", { style: { fontFamily: T2.fontBody, fontSize: 14, color: "rgba(234,234,234,0.9)" }, children: a.name }),
            selApp && a.name === selApp.name && /* @__PURE__ */ jsx("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "#2670ff", strokeWidth: "2.4", strokeLinecap: "round", strokeLinejoin: "round", style: { marginLeft: "auto", flexShrink: 0 }, children: /* @__PURE__ */ jsx("polyline", { points: "4 12 10 18 20 6" }) })
          ] }, a.name)) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", gap: 22, flexWrap: "wrap", borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 24 }, children: [
        /* @__PURE__ */ jsxs("div", { style: { fontFamily: T2.fontMono, fontSize: 12.5, lineHeight: "21px", color: "rgba(234,234,234,0.55)", minWidth: 0, overflowWrap: "anywhere" }, children: [
          /* @__PURE__ */ jsx("span", { style: { color: connecting ? "#3DDC84" : T2.blueLight }, children: connecting ? tr$1("console.statusConnecting", "> establishing encrypted tunnel…") : tr$1("console.statusReady", "> ready to connect") }),
          /* @__PURE__ */ jsx("br", {}),
          "exit=",
          country[0],
          " · platform=",
          platform,
          ' · app="',
          selApp ? selApp.name : "—",
          '"'
        ] }),
        /* @__PURE__ */ jsx("button", { className: "sn-con-connect", onClick: connect, disabled: !url || connecting, children: connecting ? /* @__PURE__ */ jsxs(React.Fragment, { children: [
          /* @__PURE__ */ jsx("span", { className: "sn-con-spinner" }),
          " ",
          tr$1("console.connectingBtn", "Connecting…")
        ] }) : /* @__PURE__ */ jsxs(React.Fragment, { children: [
          tr$1("console.connectBtn", "Connect to dVPN"),
          /* @__PURE__ */ jsxs("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round", children: [
            /* @__PURE__ */ jsx("line", { x1: "5", y1: "12", x2: "19", y2: "12" }),
            /* @__PURE__ */ jsx("polyline", { points: "12 5 19 12 12 19" })
          ] })
        ] }) })
      ] })
    ] })
  ] });
}
function SentinelDVPNSection() {
  const apps = DVPN_APPS;
  const [filter, setFilter] = useS2("all");
  const matchFilter = (a) => {
    if (filter === "all") return true;
    if (filter === "iOS") return !!a.links["iOS"];
    if (filter === "Android") return !!a.links["Android"];
    if (filter === "Desktop") return !!(a.links["macOS"] || a.links["Linux"] || a.links["Windows"]);
    if (filter === "TV") return !!(a.links["Apple TV"] || a.links["TV"]);
    return false;
  };
  apps.filter(matchFilter);
  return /* @__PURE__ */ jsx("section", { style: { background: T2.paper, ...A.section }, children: /* @__PURE__ */ jsxs("div", { style: { ...A.container, display: "flex", flexDirection: "column", gap: 40 }, children: [
    /* @__PURE__ */ jsxs("div", { style: { ...A.sectionHead }, children: [
      /* @__PURE__ */ jsx("h2", { style: { ...A.h1Light, maxWidth: 764 }, children: tr$1("sentinelDvpn.heading", "Use open-source decentralized VPN apps you can trust.") }),
      /* @__PURE__ */ jsx("p", { style: { ...A.leadLight, maxWidth: 864 }, children: tr$1("sentinelDvpn.lead", "Pick a location, your platform and an app — then connect. Every app here ships on the Sentinel network, so no single provider owns the bandwidth you route through.") })
    ] }),
    /* @__PURE__ */ jsx(DvpnConsole, {})
  ] }) });
}
function CentralizedVPNSection$1() {
  return null;
}
function BlockchainDHTSection$1() {
  return null;
}
const CmpLogos = {
  tor: /* @__PURE__ */ jsx("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "#7D4698", "aria-hidden": "true", children: /* @__PURE__ */ jsx("path", { d: "M11.9124 17.1581zM17.9817 1.14a8.419 8.419 0 00-4.4695 3.1196A21.4277 21.4277 0 0116.512 0a12.4187 12.4187 0 00-3.9996 4.3595l.64-2.5497a14.6284 14.6284 0 00-1.8998 5.3494l1.1198.48a33.1264 33.1264 0 015.6094-6.4993zm.82 13.0686c-.82-1.5199-2.9197-3.0097-5.1295-4.3896-.51-.3-.61-1.4098-.53-1.8898l-.5099-.24a6.3693 6.3693 0 00.16 2.3898c.24.75.9999 1.5998 1.5198 2.7997a18.158 18.158 0 01.72 2.9197 13.1686 13.1686 0 01-.54 6.1193 4.2595 4.2595 0 01-1.4298 1.9198l-.24.16c4.1595.13 8.829-4.6295 5.9793-9.789zm-5.3995 4.7894a6.6193 6.6193 0 00-.42-1.9997 12.4087 12.4087 0 00-.7498-1.4399 6.2293 6.2293 0 01-.16-2.0698 6.9992 6.9992 0 00.32 1.9398 11.0788 11.0788 0 01.6899 1.2999 8.999 8.999 0 01.5899 2.2697 10.4289 10.4289 0 01-.35 2.9997 5.1094 5.1094 0 01-.4 1 4.8495 4.8495 0 00.7-1.52 12.4187 12.4187 0 00.36-4.4794 11.6087 11.6087 0 00-.46-1.8898c-.44-1.2-1.0699-2.2298-1.1499-2.4698a16.2082 16.2082 0 01-.39-3.3596 14.3084 14.3084 0 00.44 3.1197c.08.24.8 1.3798 1.2999 2.5797a7.4692 7.4692 0 01.48 1.7298 10.7188 10.7188 0 01-.53 5.1594 3.9996 3.9996 0 01-.35.82 3.7196 3.7196 0 00.8-1.41 16.1382 16.1382 0 000-8.109c-.42-1.2799-1.4099-2.3998-1.6499-3.1697a7.6792 7.6792 0 01-.08-2.3897l-2.1497-1c.56 1.44.6599 2.5598.08 2.9998-2.2598 1.8698-5.9994 3.9995-5.9994 7.1092 0 3.3196 1.9998 6.9092 7.0492 7.1792a12.9986 12.9986 0 01-1.6998-.56 3.4496 3.4496 0 01-1.3098-.8998l-.13-.14A9.339 9.339 0 016.233 18.658a2.7097 2.7097 0 01-.08-1.5199 6.6793 6.6793 0 013.2797-3.9995 10.099 10.099 0 00.9999-.61c.4699-.29.7699-1.5298 1.0798-2.5297-.16.77-.34 2.2598-1.0599 2.8197-.29.22-.6099.43-.9299.64-1.2798.8798-2.5397 1.6998-3.1696 3.8095a2.8197 2.8197 0 00.08 1.3799 9.319 9.319 0 001.9498 3.5096s.13.13.13.16a2.9997 2.9997 0 001.9397 1.1499c-.29-.16-.5299-.35-.7399-.48a4.3595 4.3595 0 01-1.9998-3.5996 3.6996 3.6996 0 012.1798-3.3896 3.5796 3.5796 0 001.6798-2.3798 3.1197 3.1197 0 01-1.5898 2.4998 3.9996 3.9996 0 00-2.0998 3.1696 5.6594 5.6594 0 001.8898 3.3996 4.0796 4.0796 0 001.5898.72 2.8897 2.8897 0 01-.4799-.5 4.9995 4.9995 0 01-.45-.9999 2.9997 2.9997 0 01-.27-.9999 3.5996 3.5996 0 01.64-2.3697 2.8397 2.8397 0 00.9-1.3499 2.8697 2.8697 0 01-.72 1.5099 2.9997 2.9997 0 00-.56 2.2397 4.0596 4.0596 0 00.29.93 3.9996 3.9996 0 00.51.9998c.18.21.26.37.5499.48a6.4793 6.4793 0 00.49-2.3498 9.519 9.519 0 000-1.7598c-.13-.7999-.4-1.5998-.4-2.2397.12.5899.43 1.3798.61 2.2097a5.6294 5.6294 0 01.11 1.7298c0 .56-.08 1-.16 1.4899a1.9998 1.9998 0 01-.45.9299 3.2097 3.2097 0 001.1099-1.9998 7.8991 7.8991 0 00.32-2.3598z" }) }),
  ipfs: /* @__PURE__ */ jsx("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "#65C2CB", "aria-hidden": "true", children: /* @__PURE__ */ jsx("path", { d: "M12 0L1.608 6v12L12 24l10.392-6V6zm-1.073 1.445h.001a1.8 1.8 0 002.138 0l7.534 4.35a1.794 1.794 0 000 .403l-7.535 4.35a1.8 1.8 0 00-2.137 0l-7.536-4.35a1.795 1.795 0 000-.402zM21.324 7.4c.109.08.226.147.349.201v8.7a1.8 1.8 0 00-1.069 1.852l-7.535 4.35a1.8 1.8 0 00-.349-.2l-.009-8.653a1.8 1.8 0 001.07-1.851zm-18.648.048l7.535 4.35a1.8 1.8 0 001.069 1.852v8.7c-.124.054-.24.122-.349.202l-7.535-4.35a1.8 1.8 0 00-1.069-1.852v-8.7c.124-.054.24-.122.35-.202z" }) }),
  bittorrent: /* @__PURE__ */ jsx("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "#050505", "aria-hidden": "true", children: /* @__PURE__ */ jsx("path", { d: "M12.0002.0014C5.3735.0004.001 5.3718 0 11.9984a11.9986 11.9986 0 0 0 1.7006 6.1593.132.132 0 0 0 .1128.0384c.0288 0 .048-.0696.048-.1104a.739.739 0 0 0-.0336-.1296 22.14 22.14 0 0 1-.4224-2.2941 9.8389 9.8389 0 0 1 .4272-3.866c1.1014-3.3956 3.3332-5.6993 6.664-6.9376a10.302 10.302 0 0 1 3.398-.5951.7823.7823 0 0 1 .8567.763c0 .4488-.3431.7368-.8495.7656a12.853 12.853 0 0 0-1.6078.1656 8.6918 8.6918 0 0 0-4.8642 2.6397C3.3468 10.8169 2.55 13.4566 3.03 16.4539a8.6846 8.6846 0 0 0 2.4454 4.785 8.9414 8.9414 0 0 0 6.3688 2.7597h.156a11.9507 11.9507 0 0 0 5.613-1.3918h-5.5938a8.3988 8.3988 0 0 1-1.4086-.1296c-4.1387-.7467-6.915-4.673-6.2393-8.8238.5627-3.5271 3.4722-6.2073 7.0336-6.4793a7.6407 7.6407 0 0 1 2.1597.1368.7487.7487 0 0 1 .6168.876.7847.7847 0 0 1-.96.6023 6.0836 6.0836 0 0 0-.8014-.1152 6.328 6.328 0 0 0-2.899.504c-2.5052 1.0803-4.0095 3.6719-3.705 6.3832.3566 3.1366 3.0056 5.5091 6.1624 5.5194h6.9904c.6791 0 .84.0144 1.1375-.24.382-.3525.742-.7284 1.0775-1.1255h-9.3302a4.3483 4.3483 0 0 1-2.0733-.516c-2.4037-1.1787-3.3968-4.0828-2.218-6.4865s4.0828-3.3968 6.4866-2.218c.1195.0586.2365.122.3508.1903a.7511.7511 0 0 1 .3168 1.044.7655.7655 0 0 1-1.0655.2711c-1.5988-.9125-3.6346-.356-4.547 1.2428a3.3332 3.3332 0 0 0-.3964 2.1792c.2433 1.6186 1.6388 2.8127 3.2756 2.8029 3.3596.0336 6.7193 0 10.0789 0a.4224.4224 0 0 0 .2807-.144c3.3584-5.7126 1.45-13.0661-4.2626-16.4245a11.9986 11.9986 0 0 0-6.0802-1.655z" }) }),
  nodes: /* @__PURE__ */ jsxs("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "rgba(0,0,0,0.55)", strokeWidth: "1.6", "aria-hidden": "true", children: [
    /* @__PURE__ */ jsx("circle", { cx: "5", cy: "6", r: "2.4" }),
    /* @__PURE__ */ jsx("circle", { cx: "19", cy: "6", r: "2.4" }),
    /* @__PURE__ */ jsx("circle", { cx: "12", cy: "18", r: "2.4" }),
    /* @__PURE__ */ jsx("line", { x1: "7", y1: "7.4", x2: "10.4", y2: "16.2" }),
    /* @__PURE__ */ jsx("line", { x1: "17", y1: "7.4", x2: "13.6", y2: "16.2" }),
    /* @__PURE__ */ jsx("line", { x1: "7.4", y1: "6", x2: "16.6", y2: "6" })
  ] })
};
const SN_CMP_CSS = `
  @keyframes sn-cmp-pulse { 0%, 100% { opacity:1; } 50% { opacity:0.25; } }
  .sn-cmp-card { transition: transform 240ms cubic-bezier(.22,.61,.36,1), border-color 240ms, box-shadow 240ms; }
  .sn-cmp-card:hover { transform: translateY(-3px); border-color: #d4d4d4; box-shadow: 0 22px 48px -28px rgba(0,0,0,0.22); }
  .sn-cmp-hero { transition: box-shadow 300ms, border-color 300ms; }
  .sn-cmp-hero:hover { border-color: rgba(94,148,255,0.55); box-shadow: 0 36px 110px -40px rgba(1,86,252,0.65), 0 18px 50px -30px rgba(0,0,0,0.55); }
  .sn-cmp-rpc { transition: background 200ms, border-color 200ms; }
  .sn-cmp-rpc:hover { background: rgba(1,86,252,0.28); border-color: rgba(94,148,255,0.62); }
  @media (hover:none) {
    .sn-cmp-card:hover { transform:none; box-shadow:none; }
  }
`;
function CompareSection$1() {
  const isMobile = useIsMobile();
  const i2pSrc = window.__resources && window.__resources.cmpI2p;
  const sentinel = {
    title: "Sentinel",
    rows: [
      [tr$1("compare.rowDiscovery", "Discovery"), tr$1("compare.snDiscoveryVal", "Cosmos-SDK blockchain")],
      [tr$1("compare.rowBootstrap", "Bootstrap"), tr$1("compare.snBootstrapVal", "None — any RPC endpoint")],
      [tr$1("compare.rowEntry", "Entry points"), tr$1("compare.snEntryVal", "∞ permissionless")],
      [tr$1("compare.rowSybil", "Sybil resistance"), tr$1("compare.snSybilVal", "On-chain registration TX")],
      [tr$1("compare.rowState", "State consistency"), tr$1("compare.snStateVal", "Finality · ~6s blocks")],
      [tr$1("compare.rowGovernance", "Governance"), tr$1("compare.snGovVal", "On-chain validator votes")],
      [tr$1("compare.rowIfOrg", "If org disappears"), tr$1("compare.snOrgVal", "Validators continue")],
      [tr$1("compare.rowVerdict", "Verdict"), tr$1("compare.snVerdictVal", "Nothing to block")]
    ],
    callout: tr$1("compare.sentinelCallout", "Discovery is on-chain, entry points are permissionless, and the registry lives as long as anyone runs a validator. Block the team and the network is unaffected.")
  };
  const items = [
    {
      logo: CmpLogos.tor,
      title: "Tor",
      sub: tr$1("compare.torSub", "The Onion Router"),
      fail: tr$1("compare.torFail", "Central directory"),
      rows: [[tr$1("compare.rowDiscovery", "Discovery"), tr$1("compare.torDiscoveryVal", "9 Directory Authorities")], [tr$1("compare.rowRouting", "Routing"), tr$1("compare.torRoutingVal", "3-hop circuit (slow)")], [tr$1("compare.rowCentralFail", "Central failure"), tr$1("compare.torCentralFailVal", "Directory Authorities")], [tr$1("compare.rowIfOrg", "If org disappears"), tr$1("compare.torOrgVal", "Network degrades")]],
      callout: tr$1("compare.torCallout", "9 organizations control the network's directory. Compromise or block them and Tor falls.")
    },
    {
      logo: CmpLogos.nodes,
      title: tr$1("compare.otherTitle", "Other on-chain P2P networks"),
      sub: tr$1("compare.otherSub", "Cross-protocol comparison"),
      fail: tr$1("compare.otherFail", "Company servers"),
      rows: [[tr$1("compare.rowDiscovery", "Discovery"), tr$1("compare.otherDiscoveryVal", "Centralized API servers")], [tr$1("compare.rowRegistry", "Node registry"), tr$1("compare.otherRegistryVal", "Company-operated")], [tr$1("compare.rowIfCompany", "If company disappears"), tr$1("compare.otherOrgVal", "Network dies")], [tr$1("compare.rowOpenSdk", "Open client SDK"), tr$1("compare.otherSdkVal", "Proprietary or limited")]],
      callout: tr$1("compare.otherCallout", "Discovery and coordination still depend on company-operated servers. Not truly decentralized at the networking layer.")
    },
    {
      logo: CmpLogos.ipfs,
      title: "IPFS / Filecoin",
      sub: tr$1("compare.ipfsSub", "Decentralized storage"),
      fail: tr$1("compare.ipfsFail", "Hardcoded peers"),
      rows: [["DHT", "Kademlia (libp2p)"], [tr$1("compare.rowBootstrap", "Bootstrap"), tr$1("compare.ipfsBootstrapVal", "~6 hardcoded peers")], [tr$1("compare.rowSeeds", "Seeds"), "bootstrap.libp2p.io (Protocol Labs)"], [tr$1("compare.rowSybil", "Sybil resistance"), tr$1("compare.ipfsSybilVal", "Weak")]],
      callout: tr$1("compare.ipfsCallout", "Kubo ships with ~6 hardcoded Protocol Labs bootstrap peers; block them, and fresh nodes can’t join the DHT.")
    },
    {
      logo: CmpLogos.bittorrent,
      title: "BitTorrent",
      sub: tr$1("compare.btSub", "File sharing protocol"),
      fail: tr$1("compare.btFail", "Hardcoded hosts"),
      rows: [["DHT", "Mainline Kademlia"], [tr$1("compare.rowBootstrap", "Bootstrap"), tr$1("compare.btBootstrapVal", "~5 hardcoded hosts")], [tr$1("compare.rowSeeds", "Seeds"), "router.bittorrent.com, dht.transmissionbt.com..."], [tr$1("compare.rowSybil", "Sybil resistance"), tr$1("compare.btSybilVal", "Weak (free to flood)")]],
      callout: tr$1("compare.btCallout", "Mainline DHT relies on ~5 hardcoded bootstrap hosts; existing clients can persist peers, but blocking those hosts prevents new users from joining.")
    },
    {
      logo: i2pSrc ? /* @__PURE__ */ jsx("img", { src: i2pSrc, alt: "", style: { height: 13, width: "auto", display: "block" } }) : null,
      wideLogo: true,
      title: "I2P",
      sub: tr$1("compare.i2pSub", "Invisible Internet Project"),
      fail: tr$1("compare.i2pFail", "Reseed servers"),
      rows: [[tr$1("compare.rowDiscovery", "Discovery"), tr$1("compare.i2pDiscoveryVal", "Hardcoded reseed URLs")], [tr$1("compare.rowBootstrap", "Bootstrap"), tr$1("compare.i2pBootstrapVal", "~8 reseed servers")], [tr$1("compare.rowSeeds", "Seeds"), "reseed.i2p-projekt.de"], [tr$1("compare.rowIfBlocked", "If blocked"), tr$1("compare.i2pBlockedVal", "New users can't join")]],
      callout: tr$1("compare.i2pCallout", "Hardcoded reseed URLs. Block ~8 domains and new users cannot bootstrap into the network.")
    }
  ];
  const chip = (logo, wide) => /* @__PURE__ */ jsx("span", { style: { minWidth: 36, height: 36, padding: wide ? "0 12px" : 0, width: wide ? "auto" : 36, borderRadius: 11, background: T2.white, border: `1px solid ${T2.strokeOnLight}`, display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }, children: logo });
  const cardTitle = { fontFamily: T2.fontHeading, fontWeight: 500, fontSize: 16.5, lineHeight: "22px", color: T2.onLight85, margin: 0 };
  const cardSub = { fontFamily: T2.fontMono, fontSize: 10, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: T2.onLight50, margin: "3px 0 0" };
  const keyLight = { fontFamily: T2.fontMono, fontSize: 9.5, fontWeight: 700, letterSpacing: "0.07em", textTransform: "uppercase", color: "rgba(0,0,0,0.42)", lineHeight: "16px" };
  const valLight = { fontFamily: T2.fontBody, fontSize: 12.5, lineHeight: "18px", color: T2.onLight80 };
  const keyDark = { fontFamily: T2.fontMono, fontSize: 9.5, fontWeight: 700, letterSpacing: "0.09em", textTransform: "uppercase", color: "rgba(234,234,234,0.40)", lineHeight: "15px" };
  const valDark = { fontFamily: T2.fontBody, fontSize: 13.5, lineHeight: "20px", color: "rgba(234,234,234,0.93)" };
  return /* @__PURE__ */ jsxs("section", { id: "network-compare", style: { scrollMarginTop: 90, background: "radial-gradient(1000px 480px at 14% -8%, rgba(1,86,252,0.05), transparent 60%), linear-gradient(180deg, #f4f6fb 0%, #fbfbfb 26%, #fbfbfb 100%)", ...A.section }, children: [
    /* @__PURE__ */ jsx("style", { children: SN_CMP_CSS }),
    /* @__PURE__ */ jsxs("div", { style: { ...A.container, display: "flex", flexDirection: "column", gap: "clamp(28px,3.5vw,40px)" }, children: [
      /* @__PURE__ */ jsxs("div", { style: { ...A.sectionHead, maxWidth: 940, gap: 16 }, children: [
        /* @__PURE__ */ jsx("h2", { style: { ...A.h1Light, maxWidth: 940 }, children: tr$1("compare.heading", "How Sentinel's architecture compares to leading P2P networks.") }),
        /* @__PURE__ */ jsx("p", { style: { ...A.leadLight, maxWidth: 760 }, children: tr$1("compare.lead", "Take away the founding organization. Block the bootstrap servers. What keeps running?") })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "sn-cmp-hero", style: { position: "relative", overflow: "hidden", background: "linear-gradient(150deg, #12141b 0%, #0b0c10 55%, #0c1322 100%)", border: "1px solid rgba(38,112,255,0.38)", borderRadius: 26, padding: isMobile ? "22px 20px 20px" : "26px 30px 26px", boxShadow: "0 30px 90px -40px rgba(1,86,252,0.55), 0 18px 50px -30px rgba(0,0,0,0.5)" }, children: [
        /* @__PURE__ */ jsx("div", { "aria-hidden": "true", style: { position: "absolute", inset: 0, pointerEvents: "none", background: "radial-gradient(640px 280px at 12% -10%, rgba(1,86,252,0.24), transparent 62%), radial-gradient(560px 320px at 96% 115%, rgba(38,112,255,0.16), transparent 60%)" } }),
        /* @__PURE__ */ jsx("div", { "aria-hidden": "true", style: { position: "absolute", inset: 0, pointerEvents: "none", backgroundImage: "radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1.4px)", backgroundSize: "26px 26px", maskImage: "linear-gradient(180deg, black, transparent 75%)", WebkitMaskImage: "linear-gradient(180deg, black, transparent 75%)" } }),
        /* @__PURE__ */ jsx("div", { "aria-hidden": "true", style: { position: "absolute", top: 0, left: 30, right: 30, height: 1, background: "linear-gradient(90deg, transparent, rgba(94,148,255,0.7), transparent)" } }),
        /* @__PURE__ */ jsxs("div", { style: { position: "relative", display: "flex", flexDirection: "column", gap: 18 }, children: [
          /* @__PURE__ */ jsxs("div", { style: { display: "flex", alignItems: "center", gap: 14, flexWrap: "wrap" }, children: [
            chip(/* @__PURE__ */ jsx(window.SentinelMark, { size: 20, color: "#0156FC" })),
            /* @__PURE__ */ jsx("div", { style: { minWidth: 0 }, children: /* @__PURE__ */ jsx("h3", { style: { fontFamily: T2.fontHeading, fontWeight: 500, fontSize: 19, lineHeight: "24px", color: "#ffffff", margin: 0 }, children: sentinel.title }) }),
            !isMobile && /* @__PURE__ */ jsxs("a", { className: "sn-cmp-rpc", href: "https://peers.suchnode.net/", target: "_blank", rel: "noopener noreferrer", style: { marginLeft: "auto", boxSizing: "border-box", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 10, padding: "11px 20px", borderRadius: 999, background: "rgba(1,86,252,0.20)", border: "1px solid rgba(94,148,255,0.48)", boxShadow: "0 8px 26px -12px rgba(1,86,252,0.55)", textDecoration: "none" }, children: [
              /* @__PURE__ */ jsx("span", { "aria-hidden": "true", style: { width: 8, height: 8, borderRadius: "50%", background: "#00e05c", boxShadow: "0 0 12px rgba(0,224,92,0.9)", animation: "sn-cmp-pulse 1.8s ease-in-out infinite", flexShrink: 0 } }),
              /* @__PURE__ */ jsx("span", { style: { fontFamily: T2.fontHeading, fontSize: 13, fontWeight: 800, letterSpacing: "0.08em", color: "#e2ecff", whiteSpace: "nowrap" }, children: tr$1("compare.viewLiveRpc", "VIEW LIVE RPC LIST") }),
              /* @__PURE__ */ jsxs("svg", { width: "13", height: "13", viewBox: "0 0 24 24", fill: "none", stroke: "#b6cdff", strokeWidth: "2.4", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", style: { flexShrink: 0 }, children: [
                /* @__PURE__ */ jsx("path", { d: "M7 17 17 7" }),
                /* @__PURE__ */ jsx("path", { d: "M9 7h8v8" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { style: { display: "grid", gridTemplateColumns: isMobile ? "repeat(2, minmax(0,1fr))" : "repeat(4, minmax(0,1fr))", gap: "0 26px" }, children: sentinel.rows.map(([k, v], ri) => /* @__PURE__ */ jsxs("div", { style: { padding: "9px 0 10px", borderTop: "1px solid rgba(255,255,255,0.08)" }, children: [
            /* @__PURE__ */ jsx("span", { style: { display: "block", ...keyDark, marginBottom: 3 }, children: k }),
            /* @__PURE__ */ jsx("span", { style: ri === sentinel.rows.length - 1 ? { ...valDark, color: "#9dbcff", fontWeight: 700 } : valDark, children: v })
          ] }, k)) }),
          /* @__PURE__ */ jsxs("div", { style: { display: "flex", gap: 11, alignItems: "flex-start", justifyContent: "center", borderRadius: 14, background: "rgba(1,86,252,0.12)", border: "1px solid rgba(94,148,255,0.28)", padding: "12px 18px" }, children: [
            /* @__PURE__ */ jsxs("svg", { width: "15", height: "15", viewBox: "0 0 24 24", fill: "none", stroke: "#9dbcff", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", style: { flexShrink: 0, marginTop: 2 }, children: [
              /* @__PURE__ */ jsx("path", { d: "M12 2.8 20 6v6c0 5-3.4 8.3-8 9.2C7.4 20.3 4 17 4 12V6z" }),
              /* @__PURE__ */ jsx("path", { d: "m8.8 12 2.2 2.2 4.2-4.4" })
            ] }),
            /* @__PURE__ */ jsx("span", { style: { fontFamily: T2.fontBody, fontSize: 12.5, lineHeight: "20px", color: "rgba(214,228,255,0.92)", textAlign: isMobile ? "left" : "center" }, children: sentinel.callout })
          ] })
        ] })
      ] }),
      isMobile && /* @__PURE__ */ jsxs("a", { href: "https://peers.suchnode.net/", target: "_blank", rel: "noopener noreferrer", style: { marginTop: -14, width: "100%", boxSizing: "border-box", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 10, padding: "14px 18px", borderRadius: 999, background: "linear-gradient(150deg, #12141b 0%, #0b0c10 55%, #0c1322 100%)", border: "1px solid rgba(38,112,255,0.38)", boxShadow: "0 18px 50px -24px rgba(1,86,252,0.55)", textDecoration: "none" }, children: [
        /* @__PURE__ */ jsx("span", { "aria-hidden": "true", style: { width: 8, height: 8, borderRadius: "50%", background: "#00e05c", boxShadow: "0 0 12px rgba(0,224,92,0.9)", animation: "sn-cmp-pulse 1.8s ease-in-out infinite", flexShrink: 0 } }),
        /* @__PURE__ */ jsx("span", { style: { fontFamily: T2.fontHeading, fontSize: 13, fontWeight: 800, letterSpacing: "0.08em", color: "#e2ecff", whiteSpace: "nowrap" }, children: "VIEW LIVE RPC LIST" }),
        /* @__PURE__ */ jsxs("svg", { width: "13", height: "13", viewBox: "0 0 24 24", fill: "none", stroke: "#b6cdff", strokeWidth: "2.4", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", style: { flexShrink: 0 }, children: [
          /* @__PURE__ */ jsx("path", { d: "M7 17 17 7" }),
          /* @__PURE__ */ jsx("path", { d: "M9 7h8v8" })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { style: { display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(6, minmax(0,1fr))", gap: 14 }, children: items.map((item, idx) => /* @__PURE__ */ jsxs("div", { className: "sn-cmp-card", style: { gridColumn: isMobile ? "auto" : idx < 3 ? "span 2" : "span 3", background: T2.white, border: `1px solid ${T2.line200}`, borderRadius: 20, padding: "20px 22px", display: "flex", flexDirection: "column", gap: 14 }, children: [
        /* @__PURE__ */ jsxs("div", { style: { display: "flex", alignItems: "center", gap: 12 }, children: [
          chip(item.logo, item.wideLogo && i2pSrc),
          /* @__PURE__ */ jsxs("div", { style: { minWidth: 0 }, children: [
            /* @__PURE__ */ jsx("h3", { style: cardTitle, children: item.title }),
            /* @__PURE__ */ jsx("p", { style: cardSub, children: item.sub })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { children: item.rows.map(([k, v]) => /* @__PURE__ */ jsxs("div", { style: { display: "grid", gridTemplateColumns: isMobile ? "96px 1fr" : "118px 1fr", gap: 12, alignItems: "baseline", padding: "7px 0", borderTop: `1px solid ${T2.strokeOnLight}` }, children: [
          /* @__PURE__ */ jsx("span", { style: keyLight, children: k }),
          /* @__PURE__ */ jsx("span", { style: valLight, children: v })
        ] }, k)) }),
        /* @__PURE__ */ jsxs("div", { style: { marginTop: "auto", borderLeft: "2px solid rgba(216,4,4,0.5)", padding: "2px 0 2px 13px" }, children: [
          /* @__PURE__ */ jsx("span", { style: { display: "block", fontFamily: T2.fontMono, fontSize: 9, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: T2.danger700, marginBottom: 4 }, children: tr$1("compare.failureMode", "Failure mode") + " · " + item.fail }),
          /* @__PURE__ */ jsx("span", { style: { fontFamily: T2.fontBody, fontSize: 11.5, lineHeight: "18px", color: T2.onLight60 }, children: item.callout })
        ] })
      ] }, item.title)) }),
      /* @__PURE__ */ jsxs("div", { style: { position: "relative", overflow: "hidden", background: "linear-gradient(150deg, #12141b 0%, #0b0c10 55%, #0c1322 100%)", border: "1px solid rgba(38,112,255,0.38)", borderRadius: 26, padding: "clamp(34px,5vw,58px) clamp(24px,6vw,72px)", textAlign: "center", boxShadow: "0 30px 90px -40px rgba(1,86,252,0.55), 0 18px 50px -30px rgba(0,0,0,0.5)" }, children: [
        /* @__PURE__ */ jsx("div", { "aria-hidden": "true", style: { position: "absolute", inset: 0, pointerEvents: "none", background: "radial-gradient(720px 300px at 50% -20%, rgba(1,86,252,0.26), transparent 65%), radial-gradient(560px 320px at 96% 115%, rgba(38,112,255,0.12), transparent 60%)" } }),
        /* @__PURE__ */ jsx("div", { "aria-hidden": "true", style: { position: "absolute", inset: 0, pointerEvents: "none", backgroundImage: "radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1.4px)", backgroundSize: "26px 26px", maskImage: "linear-gradient(180deg, black, transparent 75%)", WebkitMaskImage: "linear-gradient(180deg, black, transparent 75%)" } }),
        /* @__PURE__ */ jsx("div", { "aria-hidden": "true", style: { position: "absolute", top: 0, left: 30, right: 30, height: 1, background: "linear-gradient(90deg, transparent, rgba(94,148,255,0.7), transparent)" } }),
        /* @__PURE__ */ jsx("p", { style: { position: "relative", fontFamily: T2.fontHeading, fontWeight: 500, fontSize: "clamp(21px,2.9vw,31px)", lineHeight: 1.45, letterSpacing: "-0.01em", color: "rgba(234,234,234,0.92)", margin: "0 auto", maxWidth: 920 }, children: tr$1("compare.closing", "Most networks rely on fixed entry points that censors can block. Sentinel uses permissionless RPC endpoints — anyone can run one, anywhere. As long as one endpoint is reachable, the network remains accessible.") })
      ] })
    ] })
  ] });
}
function TrustCompareStrip() {
  const isMobile = useIsMobile();
  const pairs = [
    [tr$1("trustCompare.bad1", "All user traffic passes through company infrastructure."), tr$1("trustCompare.good1", "Traffic routes directly to your chosen node — no relay layer.")],
    [tr$1("trustCompare.bad2", '"No-log" is a legal promise, not a technical guarantee.'), tr$1("trustCompare.good2", "No company exists that could log your traffic.")],
    [tr$1("trustCompare.bad3", "Server software is proprietary and unauditable."), tr$1("trustCompare.good3", "All code open source — node, client, protocol, SDK.")],
    [tr$1("trustCompare.bad4", "Subject to subpoenas, gag orders, FISA, NSLs."), tr$1("trustCompare.good4", "No single jurisdiction governs the network.")],
    [tr$1("trustCompare.bad5", "Can be compelled to install logging silently."), tr$1("trustCompare.good5", "On-chain session authorization — cryptographic, not corporate.")],
    [tr$1("trustCompare.bad6", "Auto-update is a trusted code execution path."), tr$1("trustCompare.good6", "Protocol governed by validators, not a board.")],
    [tr$1("trustCompare.bad7", "Corporate acquisition can change policies overnight."), tr$1("trustCompare.good7", "WireGuard / V2Ray end-to-end — keys never leave your device.")]
  ];
  const ServerMark = () => /* @__PURE__ */ jsxs("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "#e0413c", strokeWidth: "1.7", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", children: [
    /* @__PURE__ */ jsx("rect", { x: "3", y: "3.5", width: "18", height: "7", rx: "1.6" }),
    /* @__PURE__ */ jsx("rect", { x: "3", y: "13.5", width: "18", height: "7", rx: "1.6" }),
    /* @__PURE__ */ jsx("line", { x1: "13", y1: "7", x2: "18", y2: "7" }),
    /* @__PURE__ */ jsx("line", { x1: "13", y1: "17", x2: "18", y2: "17" })
  ] });
  const Cross = () => /* @__PURE__ */ jsx("span", { style: { width: 22, height: 22, borderRadius: 7, flexShrink: 0, marginTop: 1, display: "inline-flex", alignItems: "center", justifyContent: "center", background: "rgba(224,65,60,0.12)" }, children: /* @__PURE__ */ jsxs("svg", { width: "9", height: "9", viewBox: "0 0 24 24", fill: "none", stroke: "#e0413c", strokeWidth: "3.2", strokeLinecap: "round", "aria-hidden": "true", children: [
    /* @__PURE__ */ jsx("line", { x1: "6", y1: "6", x2: "18", y2: "18" }),
    /* @__PURE__ */ jsx("line", { x1: "18", y1: "6", x2: "6", y2: "18" })
  ] }) });
  const Check = () => /* @__PURE__ */ jsx("span", { style: { width: 22, height: 22, borderRadius: 7, flexShrink: 0, marginTop: 1, display: "inline-flex", alignItems: "center", justifyContent: "center", background: "rgba(38,112,255,0.26)" }, children: /* @__PURE__ */ jsx("svg", { width: "10", height: "10", viewBox: "0 0 24 24", fill: "none", stroke: "#aac8ff", strokeWidth: "3.2", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", children: /* @__PURE__ */ jsx("polyline", { points: "4 12 10 18 20 6" }) }) });
  const Head = ({ bad }) => (
    /* sn-cmp-head-v3 sn-cmp-head-v4 */
    /* @__PURE__ */ jsxs("div", { style: { padding: isMobile ? "20px 18px 16px" : "26px 30px 22px" }, children: [
      /* @__PURE__ */ jsxs("div", { style: { display: "flex", alignItems: "center", gap: isMobile ? 14 : 18 }, children: [
        /* @__PURE__ */ jsx("span", { style: { width: isMobile ? 44 : 50, height: isMobile ? 44 : 50, borderRadius: 14, flexShrink: 0, display: "inline-flex", alignItems: "center", justifyContent: "center", background: bad ? "rgba(224,65,60,0.10)" : T2.white, border: bad ? "1px solid rgba(224,65,60,0.20)" : "1px solid rgba(255,255,255,0.45)" }, children: bad ? /* @__PURE__ */ jsx(ServerMark, {}) : /* @__PURE__ */ jsx(window.SentinelMark, { size: 24, color: "#0156FC" }) }),
        /* @__PURE__ */ jsx("span", { style: { display: "flex", flexDirection: "column", justifyContent: "center", minWidth: 0 }, children: /* @__PURE__ */ jsx("span", { style: { fontFamily: T2.fontHeading, fontWeight: 600, fontSize: isMobile ? 22 : 28, lineHeight: 1.08, letterSpacing: "-0.01em", color: bad ? T2.fog : "#ffffff" }, children: bad ? tr$1("trustCompare.centralizedHead", "Centralized VPN") : tr$1("trustCompare.sentinelHead", "Sentinel dVPN") }) })
      ] }),
      /* @__PURE__ */ jsx("span", { style: { display: "block", fontFamily: T2.fontHeading, fontWeight: 500, fontSize: isMobile ? 14.5 : 16, lineHeight: 1.45, letterSpacing: "0.005em", marginTop: isMobile ? 9 : 11, paddingLeft: isMobile ? 0 : 68, color: bad ? "rgba(255,255,255,0.70)" : "rgba(255,255,255,0.94)" }, children: bad ? tr$1("trustCompare.centralizedSub", "One entity controls every server, every key, every log.") : tr$1("trustCompare.sentinelSub", "No single entity exists that could compromise the network.") })
    ] })
  );
  const rowL = { padding: isMobile ? "12px 18px" : "14px 30px", display: "flex", gap: 12, alignItems: "flex-start", background: "rgba(255,255,255,0.02)", borderTop: "1px solid rgba(255,255,255,0.055)" };
  const rowR = { padding: isMobile ? "12px 18px" : "14px 30px", display: "flex", gap: 12, alignItems: "flex-start", background: "rgba(1,86,252,0.10)", borderTop: "1px solid rgba(255,255,255,0.055)", borderLeft: isMobile ? "none" : "1px solid rgba(255,255,255,0.07)" };
  const txtL = { fontFamily: T2.fontBody, fontSize: 14, lineHeight: "21px", margin: "2px 0 0", color: "rgba(255,255,255,0.62)" };
  const txtR = { fontFamily: T2.fontBody, fontSize: 14, lineHeight: "21px", margin: "2px 0 0", color: "rgba(255,255,255,0.92)" };
  return /* @__PURE__ */ jsx("section", { id: "dvpn-vs-vpn", style: { background: "transparent", padding: "clamp(34px,4.5vw,58px) 24px 0", scrollMarginTop: 90 }, children: /* @__PURE__ */ jsxs("div", { style: { ...A.container, display: "flex", flexDirection: "column", gap: "clamp(18px,2.6vw,28px)" }, children: [
    /* @__PURE__ */ jsxs("div", { style: { ...A.sectionHead, gap: 12 }, children: [
      /* @__PURE__ */ jsx("h2", { style: { ...A.h1Dark, fontSize: "clamp(26px,3.4vw,40px)", maxWidth: 780 }, children: tr$1("centralized.heading", "You can't trust centralized VPNs.") }),
      /* @__PURE__ */ jsx("p", { style: { ...A.leadDark, maxWidth: 860 }, children: tr$1("trustCompare.lead", "A centralized VPN only moves your trust from your ISP to a VPN company — a single point of control that now sees all of your traffic, not just some of it.") })
    ] }),
    isMobile ? /* @__PURE__ */ jsxs("div", { style: { border: "1px solid rgba(255,255,255,0.08)", borderRadius: 20, overflow: "hidden" }, children: [
      /* @__PURE__ */ jsx("div", { style: { background: "rgba(255,255,255,0.02)" }, children: /* @__PURE__ */ jsx(Head, { bad: true }) }),
      /* @__PURE__ */ jsx("div", { style: { background: "linear-gradient(135deg, rgba(1,86,252,0.22) 0%, rgba(1,86,252,0.08) 100%)", borderTop: "1px solid rgba(255,255,255,0.07)" }, children: /* @__PURE__ */ jsx(Head, {}) }),
      pairs.map((p, i) => /* @__PURE__ */ jsxs("div", { style: { borderTop: "1px solid rgba(255,255,255,0.10)" }, children: [
        /* @__PURE__ */ jsxs("div", { style: rowL, children: [
          /* @__PURE__ */ jsx(Cross, {}),
          /* @__PURE__ */ jsx("p", { style: txtL, children: p[0] })
        ] }),
        /* @__PURE__ */ jsxs("div", { style: rowR, children: [
          /* @__PURE__ */ jsx(Check, {}),
          /* @__PURE__ */ jsx("p", { style: txtR, children: p[1] })
        ] })
      ] }, i))
    ] }) : /* @__PURE__ */ jsxs("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 20, overflow: "hidden" }, children: [
      /* @__PURE__ */ jsx("div", { style: { background: "rgba(255,255,255,0.02)" }, children: /* @__PURE__ */ jsx(Head, { bad: true }) }),
      /* @__PURE__ */ jsx("div", { style: { background: "linear-gradient(135deg, rgba(1,86,252,0.22) 0%, rgba(1,86,252,0.08) 100%)", borderLeft: "1px solid rgba(255,255,255,0.07)" }, children: /* @__PURE__ */ jsx(Head, {}) }),
      pairs.map((p, i) => [
        /* @__PURE__ */ jsxs("div", { style: rowL, children: [
          /* @__PURE__ */ jsx(Cross, {}),
          /* @__PURE__ */ jsx("p", { style: txtL, children: p[0] })
        ] }, "l" + i),
        /* @__PURE__ */ jsxs("div", { style: rowR, children: [
          /* @__PURE__ */ jsx(Check, {}),
          /* @__PURE__ */ jsx("p", { style: txtR, children: p[1] })
        ] }, "r" + i)
      ])
    ] })
  ] }) });
}
function EcoOSIcon({ k }) {
  const c = { width: 15, height: 15, fill: "currentColor" };
  if (k === "android") return /* @__PURE__ */ jsx("svg", { ...c, viewBox: "0 0 16 16", "aria-hidden": "true", children: /* @__PURE__ */ jsx("path", { d: "m10.213 1.471.691-1.26q.069-.124-.048-.192-.128-.057-.195.058l-.7 1.27A4.8 4.8 0 0 0 8.005.941q-1.032 0-1.956.404l-.7-1.27Q5.281-.037 5.154.02q-.117.069-.049.193l.691 1.259a4.25 4.25 0 0 0-1.673 1.476A3.7 3.7 0 0 0 3.5 5.02h9q0-1.125-.623-2.072a4.27 4.27 0 0 0-1.664-1.476ZM6.22 3.303a.37.37 0 0 1-.267.11.35.35 0 0 1-.263-.11.37.37 0 0 1-.107-.264.37.37 0 0 1 .107-.265.35.35 0 0 1 .263-.11q.155 0 .267.11a.36.36 0 0 1 .112.265.36.36 0 0 1-.112.264m4.101 0a.35.35 0 0 1-.262.11.37.37 0 0 1-.268-.11.36.36 0 0 1-.112-.264q0-.154.112-.265a.37.37 0 0 1 .268-.11q.155 0 .262.11a.37.37 0 0 1 .107.265q0 .153-.107.264M3.5 11.77q0 .441.311.75.311.306.76.307h.758l.01 2.182q0 .414.292.703a.96.96 0 0 0 .7.288.97.97 0 0 0 .71-.288.95.95 0 0 0 .292-.703v-2.182h1.343v2.182q0 .414.292.703a.97.97 0 0 0 .71.288.97.97 0 0 0 .71-.288.95.95 0 0 0 .292-.703v-2.182h.76q.436 0 .749-.308.31-.307.311-.75V5.365h-9zm10.495-6.587a.98.98 0 0 0-.702.278.9.9 0 0 0-.293.685v4.063q0 .406.293.69a.97.97 0 0 0 .702.284q.42 0 .712-.284a.92.92 0 0 0 .293-.69V6.146a.9.9 0 0 0-.293-.685 1 1 0 0 0-.712-.278m-12.702.283a1 1 0 0 1 .712-.283q.41 0 .702.283a.9.9 0 0 1 .293.68v4.063a.93.93 0 0 1-.288.69.97.97 0 0 1-.707.284 1 1 0 0 1-.712-.284.92.92 0 0 1-.293-.69V6.146q0-.396.293-.68" }) });
  if (k === "apple") return /* @__PURE__ */ jsx("svg", { ...c, viewBox: "0 0 16 16", "aria-hidden": "true", children: /* @__PURE__ */ jsx("path", { d: "M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516s1.52.087 2.475-1.258.762-2.391.728-2.43m3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422s1.675-2.789 1.698-2.854-.597-.79-1.254-1.157a3.7 3.7 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56s.625 1.924 1.273 2.796c.576.984 1.34 1.667 1.659 1.899s1.219.386 1.843.067c.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758q.52-1.185.473-1.282" }) });
  if (k === "windows") return /* @__PURE__ */ jsx("svg", { ...c, viewBox: "0 0 16 16", "aria-hidden": "true", children: /* @__PURE__ */ jsx("path", { d: "M6.555 1.375 0 2.237v5.45h6.555zM0 13.795l6.555.933V8.313H0zm7.278-5.4.026 6.378L16 16V8.395zM16 0 7.33 1.244v6.414H16z" }) });
  if (k === "linux") return /* @__PURE__ */ jsx("svg", { ...c, viewBox: "0 0 448 512", "aria-hidden": "true", children: /* @__PURE__ */ jsx("path", { d: "M220.8 123.3c1 .5 1.8 1.7 3 1.7 1.1 0 2.8-.4 2.9-1.5.2-1.4-1.9-2.3-3.2-2.9-1.7-.7-3.9-1-5.5-.1-.4.2-.8.7-.6 1.1.3 1.3 2.3 1.1 3.4 1.7zm-21.9 1.7c1.2 0 2-1.2 3-1.7 1.1-.6 3.1-.4 3.5-1.6.2-.4-.2-.9-.6-1.1-1.6-.9-3.8-.6-5.5.1-1.3.6-3.4 1.5-3.2 2.9.1 1 1.8 1.5 2.8 1.4zM420 403.8c-3.6-4-5.3-11.6-7.2-19.7-1.8-8.1-3.9-16.8-10.5-22.4-1.3-1.1-2.6-2.1-4-2.9-1.3-.8-2.7-1.5-4.1-2 9.2-27.3 5.6-54.5-3.7-79.1-11.4-30.1-31.3-56.4-46.5-74.4-17.1-21.5-33.7-41.9-33.4-72C311.1 85.4 315.7.1 234.8 0 132.4-.2 158 103.4 156.9 135.2c-1.7 23.4-6.4 41.8-22.5 64.7-18.9 22.5-45.5 58.8-58.1 96.7-6 17.9-8.8 36.1-6.2 53.3-6.5 5.8-11.4 14.7-16.6 20.2-4.2 4.3-10.3 5.9-17 8.3s-14 6-18.5 14.5c-2.1 3.9-2.8 8.1-2.8 12.4 0 3.9.6 7.9 1.2 11.8 1.2 8.1 2.5 15.7.8 20.8-5.2 14.4-5.9 24.4-2.2 31.7 3.8 7.3 11.4 10.5 20.1 12.3 17.3 3.6 40.8 2.7 59.3 12.5 19.8 10.4 39.9 14.1 55.9 10.4 11.6-2.6 21.1-9.6 25.9-20.2 12.5-.1 26.3-5.4 48.3-6.6 14.9-1.2 33.6 5.3 55.1 4.1.6 2.3 1.4 4.6 2.5 6.7v.1c8.3 16.7 23.8 24.3 40.3 23 16.6-1.3 34.1-11 48.3-27.9 13.6-16.4 36-23.2 50.9-32.2 7.4-4.5 13.4-10.1 13.9-18.3.4-8.2-4.4-17.3-15.5-29.7zM223.7 87.3c9.8-22.2 34.2-21.8 44-.4 6.5 14.2 3.6 30.9-4.3 40.4-1.6-.8-5.9-2.6-12.6-4.9 1.1-1.2 3.1-2.7 3.9-4.6 4.8-11.8-.2-27-9.1-27.3-7.3-.5-13.9 10.8-11.8 23-4.1-2-9.4-3.5-13-4.4-1-6.9-.3-14.6 2.9-21.8zM183 75.8c10.1 0 20.8 14.2 19.1 33.5-3.5 1-7.1 2.5-10.2 4.6 1.2-8.9-3.3-20.1-9.6-19.6-8.4.7-9.8 21.2-1.8 28.1 1 .8 1.9-.2-5.9 5.5-15.6-14.6-10.5-52.1 8.4-52.1zm-13.6 60.7c6.2-4.6 13.6-10 14.1-10.5 4.7-4.4 13.5-14.2 27.9-14.2 7.1 0 15.6 2.3 25.9 8.9 6.3 4.1 11.3 4.4 22.6 9.3 8.4 3.5 13.7 9.7 10.5 18.2-2.6 7.1-11 14.4-22.7 18.1-11.1 3.6-19.8 16-38.2 14.9-3.9-.2-7-1-9.6-2.1-8-3.5-12.2-10.4-20-15-8.6-4.8-13.2-10.4-14.7-15.3-1.4-4.9 0-9 4.2-12.3zm3.3 334c-2.7 35.1-43.9 34.4-75.3 18-29.9-15.8-68.6-6.5-76.5-21.9-2.4-4.7-2.4-12.7 2.6-26.4v-.2c2.4-7.6.6-16-.6-23.9-1.2-7.8-1.8-15 .9-20 3.5-6.7 8.5-9.1 14.8-11.3 10.3-3.7 11.8-3.4 19.6-9.9 5.5-5.7 9.5-12.9 14.3-18 5.1-5.5 10-8.1 17.7-6.9 8.1 1.2 15.1 6.8 21.9 16l19.6 35.6c9.5 19.9 43.1 48.4 41 68.9zm-1.4-25.9c-4.1-6.6-9.6-13.6-14.4-19.6 7.1 0 14.2-2.2 16.7-8.9 2.3-6.2 0-14.9-7.4-24.9-13.5-18.2-38.3-32.5-38.3-32.5-13.5-8.4-21.1-18.7-24.6-29.9s-3-23.3-.3-35.2c5.2-22.9 18.6-45.2 27.2-59.2 2.3-1.7.8 3.2-8.7 20.8-8.5 16.1-24.4 53.3-2.6 82.4.6-20.7 5.5-41.8 13.8-61.5 12-27.4 37.3-74.9 39.3-112.7 1.1.8 4.6 3.2 6.2 4.1 4.6 2.7 8.1 6.7 12.6 10.3 12.4 10 28.5 9.2 42.4 1.2 6.2-3.5 11.2-7.5 15.9-9 9.9-3.1 17.8-8.6 22.3-15 7.7 30.4 25.7 74.3 37.2 95.7 6.1 11.4 18.3 35.5 23.6 64.6 3.3-.1 7 .4 10.9 1.4 13.8-35.7-11.7-74.2-23.3-84.9-4.7-4.6-4.9-6.6-2.6-6.5 12.6 11.2 29.2 33.7 35.2 59 2.8 11.6 3.3 23.7.4 35.7 16.4 6.8 35.9 17.9 30.7 34.8-2.2-.1-3.2 0-4.2 0 3.2-10.1-3.9-17.6-22.8-26.1-19.6-8.6-36-8.6-38.3 12.5-12.1 4.2-18.3 14.7-21.4 27.3-2.8 11.2-3.6 24.7-4.4 39.9-.5 7.7-3.6 18-6.8 29-32.1 22.9-76.7 32.9-114.3 7.2zm257.4-11.5c-.9 16.8-41.2 19.9-63.2 46.5-13.2 15.7-29.4 24.4-43.6 25.5s-26.5-4.8-33.7-19.3c-4.7-11.1-2.4-23.1 1.1-36.3 3.7-14.2 9.2-28.8 9.9-40.6.8-15.2 1.7-28.5 4.2-38.7 2.6-10.3 6.6-17.2 13.7-21.1.3-.2.7-.3 1-.5.8 13.2 7.3 26.6 18.8 29.5 12.6 3.3 30.7-7.5 38.4-16.3 9-.3 15.7-.9 22.6 5.1 9.9 8.5 7.1 30.3 17.1 41.6 10.6 11.6 14 19.5 13.7 24.6zM173.3 148.7c2 1.9 4.7 4.5 8 7.1 6.6 5.2 15.8 10.6 27.3 10.6 11.6 0 22.5-5.9 31.8-10.8 4.9-2.6 10.9-7 14.8-10.4s5.9-6.3 3.1-6.6-2.6 2.6-6 5.1c-4.4 3.2-9.7 7.4-13.9 9.8-7.4 4.2-19.5 10.2-29.9 10.2s-18.7-4.8-24.9-9.7c-3.1-2.5-5.7-5-7.7-6.9-1.5-1.4-1.9-4.6-4.3-4.9-1.4-.1-1.8 3.7 1.7 6.5z" }) });
  return null;
}
function EcosystemGrid() {
  const isMobile = useIsMobile();
  const apps = [
    { logo: window.__resources.ecoIndependent, name: "Independent VPN", body: tr$1("ecosystem.independentBody", "Free Decentralized VPN on Sentinel-WireGuard & V2Ray; Android & iOS."), href: L2.independent, builds: [{ k: "android", label: "Android", href: "https://play.google.com/store/apps/details?id=com.bagimsizvpn.app" }, { k: "apple", label: "iOS", href: "https://apps.apple.com/us/app/independent-dvpn/id6468454526" }] },
    { logo: window.__resources.ecoRyn, name: "Ryn VPN", body: tr$1("ecosystem.rynBody", "Sentinel-powered privacy VPN with a clean minimalist interface and a user base of over 10 million people."), href: L2.rynVpn, builds: [{ k: "android", label: "Android", href: "https://play.google.com/store/apps/details?id=com.secure.cryptovpn" }, { k: "apple", label: "iOS", href: "https://apps.apple.com/app/apple-store/id1493328027" }] },
    { logo: window.__resources.ecoSentinelShield, name: "Sentinel Shield", body: tr$1("ecosystem.shieldBody", "Flagship open-source dVPN by Sentinel P2P, WireGuard & V2Ray; Android & iOS."), href: L2.sentinelShield, builds: [{ k: "android", label: "Android", href: "https://play.google.com/store/apps/details?id=co.sentinel.dvpnapp" }, { k: "apple", label: "iOS & macOS", href: "https://apps.apple.com/us/app/sentinel-shield-dvpn/id6657986086" }] },
    { logo: window.__resources.ecoNorse, name: "DVPN by NORSE", body: tr$1("ecosystem.norseBody", "Decentralized VPN experience wrapped into user-friendly apps for all platforms."), href: L2.norse, builds: [{ k: "android", label: "Android", href: "https://play.google.com/store/apps/details?id=io.norselabs.dvpn" }, { k: "apple", label: "iOS & macOS", href: "https://apps.apple.com/us/app/dvpn-decentralized-vpn/id6553963594" }, { k: "windows", label: "Windows", href: "https://apps.microsoft.com/detail/9ph6snjxz1v1" }, { k: "linux", label: "Linux", href: "https://norselabs.io/products/dvpn" }] },
    { logo: window.__resources.ecoValt, name: "VALT", body: tr$1("ecosystem.valtBody", "VALT is the only app available that allows you to capture and protect the data you create everyday."), href: L2.valt, builds: [{ k: "android", label: "Android", href: "https://play.google.com/store/apps/details?id=com.hashcash.breadcrumbs" }, { k: "apple", label: "iOS", href: "https://apps.apple.com/us/app/valt-dvpn/id1630660373" }] },
    { logo: window.__resources.ecoMeile, name: "MeileVPN", body: tr$1("ecosystem.meileBody", "Sentinel-powered desktop dVPN for macOS, Linux & Windows."), href: L2.meile, builds: [{ k: "apple", label: "macOS", href: "https://github.com/MathNodes/meile-gui/releases" }, { k: "windows", label: "Windows", href: "https://github.com/MathNodes/meile-gui/releases" }, { k: "linux", label: "Linux", href: "https://github.com/MathNodes/meile-gui/releases" }] }
  ];
  return /* @__PURE__ */ jsxs("section", { id: "use-dvpn", style: { background: "transparent", ...A.section, scrollMarginTop: 90 }, children: [
    /* @__PURE__ */ jsx("style", { children: ".sn-eco-dl { transition:border-color 200ms cubic-bezier(.22,.61,.36,1), background 200ms cubic-bezier(.22,.61,.36,1), color 200ms cubic-bezier(.22,.61,.36,1), transform 200ms cubic-bezier(.22,.61,.36,1); } .sn-eco-dl:hover { border-color:rgba(94,148,255,0.55); background:rgba(38,112,255,0.14); color:#fff; transform:translateY(-1px); }" }),
    /* @__PURE__ */ jsxs("div", { style: { ...A.container, display: "flex", flexDirection: "column", gap: "clamp(36px,5vw,64px)" }, children: [
      /* @__PURE__ */ jsx("div", { style: { display: "flex", flexDirection: isMobile ? "column" : "row", justifyContent: "space-between", alignItems: isMobile ? "stretch" : "flex-end", gap: isMobile ? 22 : 56 }, children: /* @__PURE__ */ jsxs("div", { style: { ...A.sectionHead, flex: "1 1 auto", minWidth: 0, marginBottom: 0 }, children: [
        /* @__PURE__ */ jsx("h2", { style: { ...A.h1Dark }, children: tr$1("ecosystem.heading", "Don't trust a centralized VPN, trust a decentralized VPN Built on Sentinel") }),
        /* @__PURE__ */ jsx("p", { style: { ...A.leadDark }, children: tr$1("ecosystem.lead", "dVPN Applications built on Sentinel are used by 1.4M+ users.") })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { style: { display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(4,1fr)", gap: 14 }, children: [
        apps.map((a) => /* @__PURE__ */ jsxs(
          "div",
          {
            className: "sn-card-dark",
            style: { background: T2.graphite750, borderRadius: 24, padding: 22, border: "1px solid rgba(255,255,255,0.06)", display: "flex", flexDirection: "column", gap: 14 },
            children: [
              /* @__PURE__ */ jsxs("div", { "data-mark": "sn-eco-v2", style: { display: "flex", alignItems: "center", gap: 13 }, children: [
                /* @__PURE__ */ jsx("div", { style: { width: 56, height: 56, borderRadius: 15, background: "#0f0f10", border: "1px solid rgba(255,255,255,0.10)", display: "grid", placeItems: "center", overflow: "hidden", flexShrink: 0 }, children: /* @__PURE__ */ jsx("img", { src: a.logo, alt: a.name, style: { width: 40, height: 40, objectFit: "contain" } }) }),
                /* @__PURE__ */ jsxs("h3", { style: { fontFamily: T2.fontHeading, fontWeight: 600, fontSize: 17.5, lineHeight: 1.2, color: "#ffffff", letterSpacing: "-0.01em", margin: 0, display: "flex", alignItems: "center", gap: 9, flexWrap: "wrap" }, children: [
                  a.name,
                  a.beta && /* @__PURE__ */ jsx("span", { style: { fontFamily: T2.fontMono, fontSize: 9.5, fontWeight: 700, letterSpacing: "0.12em", color: "#9cc0ff", background: "rgba(1,86,252,0.14)", border: "1px solid rgba(94,148,255,0.32)", borderRadius: 999, padding: "3px 8px", lineHeight: 1, flexShrink: 0 }, children: "BETA" })
                ] })
              ] }),
              /* @__PURE__ */ jsx("p", { style: { fontFamily: T2.fontBody, fontSize: 13, lineHeight: "20px", color: T2.onDark, margin: 0, flex: 1 }, children: a.body }),
              /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: "column", gap: 9, marginTop: 2 }, children: [
                /* @__PURE__ */ jsx("span", { style: { fontFamily: T2.fontMono, fontSize: 10, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: T2.onDark60 }, children: tr$1("ecosystem.downloadLabel", "Download App:") }),
                /* @__PURE__ */ jsx("div", { style: { display: "flex", flexWrap: "wrap", gap: 8 }, children: (a.builds || []).map((b) => /* @__PURE__ */ jsx(
                  "a",
                  {
                    href: b.href,
                    target: "_blank",
                    rel: "noopener",
                    className: "sn-eco-dl",
                    title: a.name + " — " + b.label,
                    "aria-label": a.name + " for " + b.label,
                    style: { width: 32, height: 32, borderRadius: 10, display: "inline-flex", alignItems: "center", justifyContent: "center", color: "rgba(230,236,248,0.78)", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.10)", textDecoration: "none" },
                    children: /* @__PURE__ */ jsx(EcoOSIcon, { k: b.k })
                  },
                  b.label
                )) })
              ] })
            ]
          },
          a.name
        )),
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: L2.sdkDocs || "#",
            className: "sn-card-dark sn-eco-cta",
            style: { background: T2.graphite750, borderRadius: 24, padding: 22, border: "1.5px solid #0156fc", display: "flex", flexDirection: "column", gap: 14, textDecoration: "none" },
            children: [
              /* @__PURE__ */ jsxs("div", { "data-mark": "sn-eco-v2", style: { display: "flex", alignItems: "center", gap: 13 }, children: [
                /* @__PURE__ */ jsx("div", { style: { width: 56, height: 56, borderRadius: 15, background: "#0f0f10", border: "1px solid rgba(255,255,255,0.10)", display: "grid", placeItems: "center", flexShrink: 0 }, children: /* @__PURE__ */ jsx("svg", { width: "32", height: "32", viewBox: "8 14 84 70", fill: "#0156fc", "aria-hidden": "true", children: /* @__PURE__ */ jsx("path", { d: "m81 16.082h-62c-5.8906 0-10.668 4.7773-10.668 10.668v46.5c0 2.8281 1.125 5.543 3.125 7.543s4.7148 3.125 7.543 3.125h62c5.8906 0 10.668-4.7773 10.668-10.668v-46.5c0-5.8906-4.7773-10.668-10.668-10.668zm4.832 57.168c0 2.668-2.1641 4.832-4.832 4.832h-62c-2.668 0-4.832-2.1641-4.832-4.832v-46.5c0-2.668 2.1641-4.832 4.832-4.832h62c1.2812 0 2.5117 0.50781 3.418 1.4141s1.4141 2.1367 1.4141 3.418zm-59.289-26.668c-1.8867 1.8867-1.8867 4.9492 0 6.8359l10 10.043v-0.003907c0.57031 0.54297 0.89062 1.2969 0.89062 2.0859 0 0.78516-0.32031 1.5391-0.89062 2.082-0.53906 0.58203-1.293 0.91406-2.0859 0.91406-0.78906 0-1.5469-0.33203-2.082-0.91406l-10.043-10c-4.1641-4.1641-4.1641-10.918 0-15.082l10.043-10c0.53516-0.58203 1.293-0.91406 2.082-0.91406 0.79297 0 1.5469 0.33203 2.0859 0.91406 0.57031 0.54297 0.89062 1.293 0.89062 2.082s-0.32031 1.5391-0.89062 2.082zm51.043-4.168-0.003907 0.003907c4.1641 4.1641 4.1641 10.918 0 15.082l-10.043 10h0.003907c-0.53906 0.58203-1.293 0.91406-2.0859 0.91406-0.78906 0-1.5469-0.33203-2.082-0.91406-0.57031-0.54297-0.89453-1.2969-0.89453-2.082 0-0.78906 0.32422-1.543 0.89453-2.0859l10-10.043v0.003907c1.8867-1.8867 1.8867-4.9492 0-6.8359l-10-10.043v0.003907c-0.57031-0.54297-0.89453-1.2969-0.89453-2.0859 0-0.78516 0.32422-1.5391 0.89453-2.082 0.53516-0.58203 1.293-0.91406 2.082-0.91406 0.79297 0 1.5469 0.33203 2.0859 0.91406z" }) }) }),
                /* @__PURE__ */ jsx("h3", { style: { fontFamily: T2.fontHeading, fontWeight: 600, fontSize: 17.5, lineHeight: 1.2, color: "#ffffff", letterSpacing: "-0.01em", margin: 0 }, children: tr$1("ecosystem.ctaTitle", "Make your own dVPN") })
              ] }),
              /* @__PURE__ */ jsx("p", { style: { fontFamily: T2.fontBody, fontSize: 13, lineHeight: "20px", color: T2.onDark, margin: 0, flex: 1 }, children: tr$1("ecosystem.ctaBody", "Use the Sentinel SDK to ship your own decentralized VPN — your brand, your protocol, your distribution.") }),
              /* @__PURE__ */ jsx("span", { style: { fontFamily: T2.fontBody, fontWeight: 500, fontSize: 13, color: T2.onDark60 }, children: tr$1("ecosystem.ctaStart", "Start building →") })
            ]
          }
        )
      ] })
    ] })
  ] });
}
function EcosystemSection$1() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(TrustCompareStrip, {}),
    /* @__PURE__ */ jsx(EcosystemGrid, {})
  ] });
}
Object.assign(window, {
  NodeHostingSection: NodeHostingSection$1,
  AgenticPaymentsSection: AgenticPaymentsSection$1,
  SentinelDVPNSection,
  CentralizedVPNSection: CentralizedVPNSection$1,
  BlockchainDHTSection: BlockchainDHTSection$1,
  CompareSection: CompareSection$1,
  EcosystemSection: EcosystemSection$1
});

const T3 = window.SENTINEL;
const L3 = window.SENTINEL_LINKS;
const { SentinelMark} = window;
const { useState: useS } = React;
const useIsMobileO = window.useIsMobile;
const tr = (k, f) => typeof window !== "undefined" && window.T ? window.T(k, f) : f != null ? f : k;
function CommunityCard({ icon, name, handle, color, href }) {
  const [hovered, setHovered] = useS(false);
  return /* @__PURE__ */ jsxs(
    "a",
    {
      href,
      target: "_blank",
      rel: "noopener",
      onMouseEnter: () => setHovered(true),
      onMouseLeave: () => setHovered(false),
      style: {
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 14,
        textAlign: "center",
        borderRadius: 20,
        border: `1px solid ${hovered ? color : "#ececec"}`,
        background: hovered ? color : `linear-gradient(170deg, ${color}0F 0%, #ffffff 62%)`,
        padding: "26px 20px 22px",
        textDecoration: "none",
        boxSizing: "border-box",
        overflow: "hidden",
        minWidth: 0,
        transition: "all 240ms cubic-bezier(.22,.61,.36,1)",
        transform: hovered ? "translateY(-3px)" : "none",
        boxShadow: hovered ? `0 16px 32px ${color}38` : "0 1px 2px rgba(0,0,0,0.03)"
      },
      children: [
        /* @__PURE__ */ jsx(
          "svg",
          {
            width: "14",
            height: "14",
            viewBox: "0 0 14 14",
            fill: "none",
            "aria-hidden": "true",
            style: { position: "absolute", top: 16, right: 16, opacity: hovered ? 1 : 0.3, transform: hovered ? "translate(2px,-2px)" : "none", transition: "all 240ms" },
            children: /* @__PURE__ */ jsx("path", { d: "M1 13L13 1M13 1H4.5M13 1V9.5", stroke: hovered ? "#fff" : "rgba(0,0,0,0.6)", strokeWidth: "1.6", strokeLinecap: "round", strokeLinejoin: "round" })
          }
        ),
        /* @__PURE__ */ jsx("span", { style: { width: 64, height: 64, borderRadius: 19, display: "grid", placeItems: "center", background: hovered ? "rgba(255,255,255,0.18)" : `${color}14`, color: hovered ? "#fff" : color, transition: "all 240ms", flexShrink: 0 }, children: /* @__PURE__ */ jsx("span", { style: { display: "inline-flex", transform: "scale(1.5)", transformOrigin: "center" }, children: icon }) }),
        /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: "column", alignItems: "center", gap: 3, minWidth: 0, maxWidth: "100%" }, children: [
          /* @__PURE__ */ jsx("span", { style: { fontFamily: T3.fontHeading, fontWeight: 600, fontSize: 18, lineHeight: 1.2, color: hovered ? "#fff" : "rgba(0,0,0,0.85)", transition: "color 240ms" }, children: name }),
          /* @__PURE__ */ jsx("span", { style: { fontFamily: T3.fontBody, fontSize: 13, lineHeight: "18px", color: hovered ? "rgba(255,255,255,0.78)" : "rgba(0,0,0,0.45)", transition: "color 240ms", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", maxWidth: "100%" }, children: handle })
        ] })
      ]
    }
  );
}
function CommunityPill({ icon, label, color, href }) {
  const [hovered, setHovered] = useS(false);
  return /* @__PURE__ */ jsxs(
    "a",
    {
      href,
      target: "_blank",
      rel: "noopener",
      onMouseEnter: () => setHovered(true),
      onMouseLeave: () => setHovered(false),
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        padding: "8px 16px 8px 12px",
        borderRadius: 9999,
        border: `1px solid ${hovered ? color : "#ececec"}`,
        background: hovered ? `${color}0F` : "#fff",
        textDecoration: "none",
        transition: "all 200ms cubic-bezier(.22,.61,.36,1)",
        boxSizing: "border-box"
      },
      children: [
        /* @__PURE__ */ jsx("span", { style: { display: "inline-flex", alignItems: "center", justifyContent: "center", color, flexShrink: 0, transform: "scale(0.78)", transformOrigin: "center" }, children: icon }),
        /* @__PURE__ */ jsx("span", { style: { fontFamily: T3.fontBody, fontSize: 13, fontWeight: 500, color: hovered ? "rgba(0,0,0,0.82)" : "rgba(0,0,0,0.6)", whiteSpace: "nowrap", transition: "color 200ms" }, children: label })
      ]
    }
  );
}
const IconX = () => /* @__PURE__ */ jsx("svg", { width: "21", height: "20", viewBox: "0 0 21.123 19.093", fill: "currentColor", children: /* @__PURE__ */ jsx("path", { d: "M16.635 0l3.239 0L12.798 8.088 21.123 19.093l-6.518 0L9.5 12.418 3.658 19.093l-3.241 0 7.569-8.651L0 0l6.684 0 4.614 6.101L16.635 0ZM15.499 17.154l1.794 0L5.708 1.837 3.782 1.837 15.499 17.154Z" }) });
const IconTelegram = () => /* @__PURE__ */ jsx("svg", { width: "22", height: "19", viewBox: "0 0 24 21", fill: "currentColor", children: /* @__PURE__ */ jsx("path", { d: "M23.9 1.8L20.2 20c-.3 1.3-1.1 1.6-2.2 1L12 16.6l-2.9 2.8c-.3.3-.6.6-1.2.6l.4-5.8L19.8 3.3c.5-.4-.1-.6-.7-.2L4.6 13.5 0 12.1C-1 11.8-1 11.1.4 10.5l22.1-8.5c.9-.4 1.8.3 1.4 1.8Z" }) });
const IconGitHub = () => /* @__PURE__ */ jsx("svg", { width: "22", height: "22", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsx("path", { d: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" }) });
const IconDiscord = () => /* @__PURE__ */ jsx("svg", { width: "24", height: "18", viewBox: "0 0 24 18", fill: "currentColor", children: /* @__PURE__ */ jsx("path", { d: "M20.317 1.492a19.84 19.84 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 1.49a.07.07 0 0 0-.032.027C.533 6.093-.32 10.555.099 14.961a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 12.278c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" }) });
const IconYouTube = () => /* @__PURE__ */ jsx("svg", { width: "26", height: "19", viewBox: "0 0 24 17", fill: "currentColor", children: /* @__PURE__ */ jsx("path", { d: "M23.495 2.659a3.011 3.011 0 0 0-2.12-2.132C19.505 0 12 0 12 0S4.495 0 2.625.527a3.011 3.011 0 0 0-2.12 2.132C0 4.545 0 8.5 0 8.5s0 3.955.505 5.841a3.011 3.011 0 0 0 2.12 2.132C4.495 17 12 17 12 17s7.505 0 9.375-.527a3.011 3.011 0 0 0 2.12-2.132C24 12.455 24 8.5 24 8.5s0-3.955-.505-5.841zM9.545 12.068V4.932L15.818 8.5l-6.273 3.568z" }) });
function ContactSection$1() {
  const isMobile = useIsMobileO();
  const [agree, setAgree] = useS(false);
  const [form, setForm] = useS({ first: "", last: "", email: "", project: "", message: "" });
  const primary = [
    { icon: /* @__PURE__ */ jsx(IconTelegram, {}), name: "Telegram", handle: "@sentinelp2p", color: "#229ED9", href: L3.telegram },
    { icon: /* @__PURE__ */ jsx(IconX, {}), name: "X / Twitter", handle: "@sentinelp2p", color: "#0F1419", href: L3.twitter },
    { icon: /* @__PURE__ */ jsx(IconDiscord, {}), name: "Discord", handle: "Sentinel Network", color: "#5865F2", href: L3.discord },
    { icon: /* @__PURE__ */ jsx(IconGitHub, {}), name: "GitHub", handle: "sentinel-official", color: "#24292F", href: L3.github }
  ];
  const secondary = [
    { icon: /* @__PURE__ */ jsx(IconYouTube, {}), label: "YouTube", color: "#FF0000", href: L3.youtube },
    { icon: /* @__PURE__ */ jsx(IconTelegram, {}), label: "Growth DAO", color: "#229ED9", href: L3.growthDao },
    { icon: /* @__PURE__ */ jsx(IconTelegram, {}), label: "p2p News", color: "#229ED9", href: L3.p2pNews },
    { icon: /* @__PURE__ */ jsx(IconX, {}), label: "Bluefrens", color: "#0F1419", href: L3.bluefrens }
  ];
  ({
    fontFamily: T3.fontBody});
  ({ fontFamily: T3.fontBody});
  const SHOW_CONTACT_FORM = false;
  return /* @__PURE__ */ jsx("section", { style: { background: "radial-gradient(900px 420px at 86% -6%, rgba(1,86,252,0.05), transparent 60%), linear-gradient(180deg, #fbfbfb 0%, #f3f5fa 100%)", padding: "clamp(56px,8vw,120px) 0" }, children: /* @__PURE__ */ jsx("div", { style: { maxWidth: 1320, margin: "0 auto", padding: "0 clamp(16px, 2.5vw, 24px)", boxSizing: "border-box" }, children: /* @__PURE__ */ jsxs("div", { style: { background: T3.white, borderRadius: 24, padding: "clamp(28px, 5vw, 56px) clamp(22px, 5vw, 64px)", display: "grid", gridTemplateColumns: "1fr" , gap: isMobile ? 44 : "clamp(32px, 5vw, 64px)", maxWidth: 880, margin: "0 auto", boxSizing: "border-box" }, children: [
    /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: "column", gap: 28 }, children: [
      /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: "column", gap: 10, textAlign: "center" }, children: [
        /* @__PURE__ */ jsx("h2", { style: { fontFamily: T3.fontHeading, fontWeight: 700, fontSize: "clamp(31px,6vw,48px)", lineHeight: 1.12, color: "rgba(0,0,0,0.8)", margin: 0, letterSpacing: "-0.005em" }, children: tr("community.heading", "Join the Community") }),
        /* @__PURE__ */ jsx("p", { style: { fontFamily: T3.fontBody, fontSize: 16, lineHeight: "22px", color: "rgba(0,0,0,0.5)", margin: 0 }, children: tr("community.subtitle", "The Sentinel community goes beyond the chain.") })
      ] }),
      /* @__PURE__ */ jsx("div", { style: { display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 12 }, children: primary.map((c) => /* @__PURE__ */ jsx(CommunityCard, { icon: c.icon, name: c.name, handle: c.handle, color: c.color, href: c.href }, c.name)) }),
      /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: "column", gap: 12, alignItems: "center" }, children: [
        /* @__PURE__ */ jsx("span", { style: { fontFamily: T3.fontBody, fontWeight: 600, fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(0,0,0,0.35)" }, children: tr("community.more", "More from the community") }),
        /* @__PURE__ */ jsx("div", { style: { display: "flex", flexWrap: "wrap", gap: 8, justifyContent: "center" }, children: secondary.map((c) => /* @__PURE__ */ jsx(CommunityPill, { icon: c.icon, label: c.label, color: c.color, href: c.href }, c.label)) })
      ] })
    ] }),
    SHOW_CONTACT_FORM
  ] }) }) });
}
function Footer$1() {
  const isMobile = useIsMobileO();
  const cols = [
    { head: "Explore", headKey: "nav.explore", links: [
      ["Network Statistics", L3.stats, "footer.exploreStats"],
      ["Node Dashboard", L3.nodes, "footer.exploreDashboard"],
      ["Node Map", L3.nodeMap, "footer.exploreNodeMap"],
      ["Explorer", L3.explorer, "footer.exploreExplorer"]
    ] },
    { head: "dVPN", headKey: "nav.dvpn", links: [
      ["Sentinel Shield", L3.sentinelShield, "footer.dvpnShield"],
      ["Independent VPN", L3.independent, "footer.dvpnIndependent"],
      ["DVPN by NORSE", L3.norse, "footer.dvpnNorse"],
      ["VALT", L3.valt, "footer.dvpnValt"],
      ["Ryn dVPN", L3.rynVpn, "footer.dvpnRyn"],
      ["Meile dVPN (beta)", L3.meile, "footer.dvpnMeile"]
    ] },
    { head: "Build", headKey: "nav.build", links: [
      ["Plan Manager", L3.planManager, "footer.buildPlanManager"],
      ["SDKs", L3.sdkDocs, "footer.buildSdks"],
      ["Configure Payment", L3.subplanDocs, "footer.buildPayments"],
      ["Run a Node", L3.hostNode, "footer.buildRunNode"],
      ["Earn from dVPN", L3.nodeEarnings, "footer.buildEarn"],
      ["Learn", L3.docs, "footer.buildLearn"]
    ] },
    { head: "More", headKey: "nav.more", links: [
      ["dVPN Docs", L3.docs, "footer.moreDocs"],
      ["x402 Payments", L3.x402, "footer.moreX402"],
      ["Sentinel Node Tester", L3.testNode, "footer.moreNodeTester"],
      ["Contact Us", L3.telegram, "footer.moreContact"]
    ] }
  ];
  return /* @__PURE__ */ jsx("footer", { style: { background: `url("${window.__resources && window.__resources.meshBg || "../../assets/textures/mesh-bg-faint.png"}") center/cover no-repeat, url("${window.__resources && window.__resources.noiseBg || "../../assets/textures/noise-bg.png"}") center/cover no-repeat, radial-gradient(ellipse at center, #1c1c1c 0%, #0c0c0c 100%)`, position: "relative", overflow: "hidden", paddingTop: 80, paddingBottom: 0 }, children: /* @__PURE__ */ jsxs("div", { style: { position: "relative", maxWidth: 1440, margin: "0 auto", padding: "0 clamp(20px, 3vw, 40px)", boxSizing: "border-box" }, children: [
    /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: isMobile ? "column" : "row", gap: isMobile ? 32 : 48, marginBottom: isMobile ? 48 : 64 }, children: [
      /* @__PURE__ */ jsx("div", { style: { flexShrink: 0 }, children: /* @__PURE__ */ jsx(SentinelMark, { size: 42, color: "#0156FC" }) }),
      /* @__PURE__ */ jsx("div", { style: { flex: 1, display: "grid", gridTemplateColumns: isMobile ? "repeat(2,1fr)" : "repeat(4,1fr)", gap: isMobile ? "28px 20px" : 32 }, children: cols.map((c) => /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { style: { fontFamily: T3.fontHeading, fontWeight: 500, fontSize: 15, color: "rgba(234,234,234,0.9)", marginBottom: 18, letterSpacing: "0.02em" }, children: tr(c.headKey, c.head) }),
        c.links.map(([label, url, labelKey]) => /* @__PURE__ */ jsx(
          "a",
          {
            href: url,
            target: "_blank",
            rel: "noopener",
            style: { display: "block", fontFamily: T3.fontBody, fontSize: 14, lineHeight: "26px", color: "rgba(234,234,234,0.55)", textDecoration: "none", padding: "3px 0", transition: "color 200ms" },
            onMouseEnter: (e) => e.target.style.color = "rgba(234,234,234,0.9)",
            onMouseLeave: (e) => e.target.style.color = "rgba(234,234,234,0.55)",
            children: tr(labelKey, label)
          },
          label
        ))
      ] }, c.head)) })
    ] }),
    /* @__PURE__ */ jsx("div", { style: { fontFamily: T3.fontHeading, fontWeight: 600, fontSize: "clamp(48px,16vw,220px)", lineHeight: 1, color: "rgba(234,234,234,0.9)", letterSpacing: "-0.02em", textAlign: "center", userSelect: "none", marginTop: 8, paddingBottom: 16 }, children: "Sentinel" }),
    /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: isMobile ? "column" : "row", alignItems: isMobile ? "flex-start" : "center", justifyContent: "space-between", gap: isMobile ? 16 : 0, paddingTop: 18, borderTop: "1px solid rgba(255,255,255,0.06)", paddingBottom: 28 }, children: [
      /* @__PURE__ */ jsx("div", { style: { display: "flex", gap: 22, alignItems: "center" }, children: [
        ["Sentinel © 2026", L3.home, "footer.copyright"],
        ["Privacy Policy", L3.privacy, "footer.privacyPolicy"]
      ].map(([label, url, labelKey]) => /* @__PURE__ */ jsx("a", { href: url, target: "_blank", rel: "noopener", style: { fontFamily: T3.fontBody, fontSize: 13, color: "rgba(255,255,255,0.45)", textDecoration: "none" }, children: tr(labelKey, label) }, label)) }),
      /* @__PURE__ */ jsx("div", { style: { display: "flex", gap: 16, alignItems: "center" }, children: [
        { label: "X / Twitter", path: "M16.6 0h3.2l-7 8 8.3 11h-6.5l-5.1-6.7L3.7 19H.4l7.6-8.7L0 0h6.7l4.6 6.1L16.6 0zm-1.1 17.2h1.8L5.7 1.8H3.8l11.7 15.4z" },
        { label: "Telegram", path: "M21.6 1.3 18.5 18c-.2 1.1-.9 1.4-1.8.9l-5-3.7-2.4 2.3c-.3.3-.5.5-1 .5l.3-4.9 9-8.1c.4-.3-.1-.5-.6-.2L5.9 11.7l-4.7-1.5C.2 9.8.2 9.1 1.4 8.6L20.3.7c.9-.3 1.7.3 1.3 2z" }
      ].map((s) => /* @__PURE__ */ jsx(
        "a",
        {
          href: "#",
          "aria-label": s.label,
          style: { color: "rgba(255,255,255,0.45)", display: "grid", placeItems: "center", transition: "color 200ms" },
          onMouseEnter: (e) => e.currentTarget.style.color = "rgba(255,255,255,0.85)",
          onMouseLeave: (e) => e.currentTarget.style.color = "rgba(255,255,255,0.45)",
          children: /* @__PURE__ */ jsx("svg", { width: "18", height: "18", viewBox: "0 0 22 22", fill: "currentColor", children: /* @__PURE__ */ jsx("path", { d: s.path }) })
        },
        s.label
      )) })
    ] })
  ] }) });
}
Object.assign(window, { ContactSection: ContactSection$1, Footer: Footer$1 });

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/

/* eslint-disable */
var _config = {
  autoSleep: 120,
  force3D: "auto",
  nullTargetWarn: 1,
  units: {
    lineHeight: ""
  }
},
    _defaults$1 = {
  duration: .5,
  overwrite: false,
  delay: 0
},
    _suppressOverwrites$1,
    _reverting$1,
    _context$2,
    _bigNum$1 = 1e8,
    _tinyNum = 1 / _bigNum$1,
    _2PI = Math.PI * 2,
    _HALF_PI = _2PI / 4,
    _gsID = 0,
    _sqrt = Math.sqrt,
    _cos = Math.cos,
    _sin = Math.sin,
    _isString$1 = function _isString(value) {
  return typeof value === "string";
},
    _isFunction$1 = function _isFunction(value) {
  return typeof value === "function";
},
    _isNumber$1 = function _isNumber(value) {
  return typeof value === "number";
},
    _isUndefined = function _isUndefined(value) {
  return typeof value === "undefined";
},
    _isObject$1 = function _isObject(value) {
  return typeof value === "object";
},
    _isNotFalse = function _isNotFalse(value) {
  return value !== false;
},
    _windowExists$2 = function _windowExists() {
  return typeof window !== "undefined";
},
    _isFuncOrString = function _isFuncOrString(value) {
  return _isFunction$1(value) || _isString$1(value);
},
    _isTypedArray = typeof ArrayBuffer === "function" && ArrayBuffer.isView || function () {},
    // note: IE10 has ArrayBuffer, but NOT ArrayBuffer.isView().
_isArray = Array.isArray,
    _randomExp = /random\([^)]+\)/g,
    _commaDelimExp = /,\s*/g,
    _strictNumExp = /(?:-?\.?\d|\.)+/gi,
    //only numbers (including negatives and decimals) but NOT relative values.
_numExp = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
    //finds any numbers, including ones that start with += or -=, negative numbers, and ones in scientific notation like 1e-8.
_numWithUnitExp = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
    _complexStringNumExp = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
    //duplicate so that while we're looping through matches from exec(), it doesn't contaminate the lastIndex of _numExp which we use to search for colors too.
_relExp = /[+-]=-?[.\d]+/,
    _delimitedValueExp = /[^,'"\[\]\s]+/gi,
    // previously /[#\-+.]*\b[a-z\d\-=+%.]+/gi but didn't catch special characters.
_unitExp = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
    _globalTimeline,
    _win$3,
    _coreInitted$2,
    _doc$3,
    _globals = {},
    _installScope = {},
    _coreReady,
    _install = function _install(scope) {
  return (_installScope = _merge(scope, _globals)) && gsap$2;
},
    _missingPlugin = function _missingPlugin(property, value) {
  return console.warn("Invalid property", property, "set to", value, "Missing plugin? gsap.registerPlugin()");
},
    _warn = function _warn(message, suppress) {
  return !suppress && console.warn(message);
},
    _addGlobal = function _addGlobal(name, obj) {
  return name && (_globals[name] = obj) && _installScope && (_installScope[name] = obj) || _globals;
},
    _emptyFunc = function _emptyFunc() {
  return 0;
},
    _startAtRevertConfig = {
  suppressEvents: true,
  isStart: true,
  kill: false
},
    _revertConfigNoKill = {
  suppressEvents: true,
  kill: false
},
    _revertConfig = {
  suppressEvents: true
},
    _reservedProps = {},
    _lazyTweens = [],
    _lazyLookup = {},
    _lastRenderedFrame,
    _plugins = {},
    _effects = {},
    _nextGCFrame = 30,
    _harnessPlugins = [],
    _callbackNames = "",
    _harness = function _harness(targets) {
  var target = targets[0],
      harnessPlugin,
      i;
  _isObject$1(target) || _isFunction$1(target) || (targets = [targets]);

  if (!(harnessPlugin = (target._gsap || {}).harness)) {
    // find the first target with a harness. We assume targets passed into an animation will be of similar type, meaning the same kind of harness can be used for them all (performance optimization)
    i = _harnessPlugins.length;

    while (i-- && !_harnessPlugins[i].targetTest(target)) {}

    harnessPlugin = _harnessPlugins[i];
  }

  i = targets.length;

  while (i--) {
    targets[i] && (targets[i]._gsap || (targets[i]._gsap = new GSCache(targets[i], harnessPlugin))) || targets.splice(i, 1);
  }

  return targets;
},
    _getCache = function _getCache(target) {
  return target._gsap || _harness(toArray(target))[0]._gsap;
},
    _getProperty = function _getProperty(target, property, v) {
  return (v = target[property]) && _isFunction$1(v) ? target[property]() : _isUndefined(v) && target.getAttribute && target.getAttribute(property) || v;
},
    _forEachName = function _forEachName(names, func) {
  return (names = names.split(",")).forEach(func) || names;
},
    //split a comma-delimited list of names into an array, then run a forEach() function and return the split array (this is just a way to consolidate/shorten some code).
_round$1 = function _round(value) {
  return Math.round(value * 100000) / 100000 || 0;
},
    _roundPrecise = function _roundPrecise(value) {
  return Math.round(value * 10000000) / 10000000 || 0;
},
    // increased precision mostly for timing values.
_parseRelative = function _parseRelative(start, value) {
  var operator = value.charAt(0),
      end = parseFloat(value.substr(2));
  start = parseFloat(start);
  return operator === "+" ? start + end : operator === "-" ? start - end : operator === "*" ? start * end : start / end;
},
    _arrayContainsAny = function _arrayContainsAny(toSearch, toFind) {
  //searches one array to find matches for any of the items in the toFind array. As soon as one is found, it returns true. It does NOT return all the matches; it's simply a boolean search.
  var l = toFind.length,
      i = 0;

  for (; toSearch.indexOf(toFind[i]) < 0 && ++i < l;) {}

  return i < l;
},
    _lazyRender = function _lazyRender() {
  var l = _lazyTweens.length,
      a = _lazyTweens.slice(0),
      i,
      tween;

  _lazyLookup = {};
  _lazyTweens.length = 0;

  for (i = 0; i < l; i++) {
    tween = a[i];
    tween && tween._lazy && (tween.render(tween._lazy[0], tween._lazy[1], true)._lazy = 0);
  }
},
    _isRevertWorthy = function _isRevertWorthy(animation) {
  return !!(animation._initted || animation._startAt || animation.add);
},
    _lazySafeRender = function _lazySafeRender(animation, time, suppressEvents, force) {
  _lazyTweens.length && !_reverting$1 && _lazyRender();
  animation.render(time, suppressEvents, !!(_reverting$1 && time < 0 && _isRevertWorthy(animation)));
  _lazyTweens.length && !_reverting$1 && _lazyRender(); //in case rendering caused any tweens to lazy-init, we should render them because typically when someone calls seek() or time() or progress(), they expect an immediate render.
},
    _numericIfPossible = function _numericIfPossible(value) {
  var n = parseFloat(value);
  return (n || n === 0) && (value + "").match(_delimitedValueExp).length < 2 ? n : _isString$1(value) ? value.trim() : value;
},
    _passThrough$1 = function _passThrough(p) {
  return p;
},
    _setDefaults$1 = function _setDefaults(obj, defaults) {
  for (var p in defaults) {
    p in obj || (obj[p] = defaults[p]);
  }

  return obj;
},
    _setKeyframeDefaults = function _setKeyframeDefaults(excludeDuration) {
  return function (obj, defaults) {
    for (var p in defaults) {
      p in obj || p === "duration" && excludeDuration || p === "ease" || (obj[p] = defaults[p]);
    }
  };
},
    _merge = function _merge(base, toMerge) {
  for (var p in toMerge) {
    base[p] = toMerge[p];
  }

  return base;
},
    _mergeDeep = function _mergeDeep(base, toMerge) {
  for (var p in toMerge) {
    p !== "__proto__" && p !== "constructor" && p !== "prototype" && (base[p] = _isObject$1(toMerge[p]) ? _mergeDeep(base[p] || (base[p] = {}), toMerge[p]) : toMerge[p]);
  }

  return base;
},
    _copyExcluding = function _copyExcluding(obj, excluding) {
  var copy = {},
      p;

  for (p in obj) {
    p in excluding || (copy[p] = obj[p]);
  }

  return copy;
},
    _inheritDefaults = function _inheritDefaults(vars) {
  var parent = vars.parent || _globalTimeline,
      func = vars.keyframes ? _setKeyframeDefaults(_isArray(vars.keyframes)) : _setDefaults$1;

  if (_isNotFalse(vars.inherit)) {
    while (parent) {
      func(vars, parent.vars.defaults);
      parent = parent.parent || parent._dp;
    }
  }

  return vars;
},
    _arraysMatch = function _arraysMatch(a1, a2) {
  var i = a1.length,
      match = i === a2.length;

  while (match && i-- && a1[i] === a2[i]) {}

  return i < 0;
},
    _addLinkedListItem = function _addLinkedListItem(parent, child, firstProp, lastProp, sortBy) {

  var prev = parent[lastProp],
      t;

  if (sortBy) {
    t = child[sortBy];

    while (prev && prev[sortBy] > t) {
      prev = prev._prev;
    }
  }

  if (prev) {
    child._next = prev._next;
    prev._next = child;
  } else {
    child._next = parent[firstProp];
    parent[firstProp] = child;
  }

  if (child._next) {
    child._next._prev = child;
  } else {
    parent[lastProp] = child;
  }

  child._prev = prev;
  child.parent = child._dp = parent;
  return child;
},
    _removeLinkedListItem = function _removeLinkedListItem(parent, child, firstProp, lastProp) {
  if (firstProp === void 0) {
    firstProp = "_first";
  }

  if (lastProp === void 0) {
    lastProp = "_last";
  }

  var prev = child._prev,
      next = child._next;

  if (prev) {
    prev._next = next;
  } else if (parent[firstProp] === child) {
    parent[firstProp] = next;
  }

  if (next) {
    next._prev = prev;
  } else if (parent[lastProp] === child) {
    parent[lastProp] = prev;
  }

  child._next = child._prev = child.parent = null; // don't delete the _dp just so we can revert if necessary. But parent should be null to indicate the item isn't in a linked list.
},
    _removeFromParent = function _removeFromParent(child, onlyIfParentHasAutoRemove) {
  child.parent && (!onlyIfParentHasAutoRemove || child.parent.autoRemoveChildren) && child.parent.remove && child.parent.remove(child);
  child._act = 0;
},
    _uncache = function _uncache(animation, child) {
  if (animation && (!child || child._end > animation._dur || child._start < 0)) {
    // performance optimization: if a child animation is passed in we should only uncache if that child EXTENDS the animation (its end time is beyond the end)
    var a = animation;

    while (a) {
      a._dirty = 1;
      a = a.parent;
    }
  }

  return animation;
},
    _recacheAncestors = function _recacheAncestors(animation) {
  var parent = animation.parent;

  while (parent && parent.parent) {
    //sometimes we must force a re-sort of all children and update the duration/totalDuration of all ancestor timelines immediately in case, for example, in the middle of a render loop, one tween alters another tween's timeScale which shoves its startTime before 0, forcing the parent timeline to shift around and shiftChildren() which could affect that next tween's render (startTime). Doesn't matter for the root timeline though.
    parent._dirty = 1;
    parent.totalDuration();
    parent = parent.parent;
  }

  return animation;
},
    _rewindStartAt = function _rewindStartAt(tween, totalTime, suppressEvents, force) {
  return tween._startAt && (_reverting$1 ? tween._startAt.revert(_revertConfigNoKill) : tween.vars.immediateRender && !tween.vars.autoRevert || tween._startAt.render(totalTime, true, force));
},
    _hasNoPausedAncestors = function _hasNoPausedAncestors(animation) {
  return !animation || animation._ts && _hasNoPausedAncestors(animation.parent);
},
    _elapsedCycleDuration = function _elapsedCycleDuration(animation) {
  return animation._repeat ? _animationCycle(animation._tTime, animation = animation.duration() + animation._rDelay) * animation : 0;
},
    // feed in the totalTime and cycleDuration and it'll return the cycle (iteration minus 1) and if the playhead is exactly at the very END, it will NOT bump up to the next cycle.
_animationCycle = function _animationCycle(tTime, cycleDuration) {
  var whole = Math.floor(tTime = _roundPrecise(tTime / cycleDuration));
  return tTime && whole === tTime ? whole - 1 : whole;
},
    _parentToChildTotalTime = function _parentToChildTotalTime(parentTime, child) {
  return (parentTime - child._start) * child._ts + (child._ts >= 0 ? 0 : child._dirty ? child.totalDuration() : child._tDur);
},
    _setEnd = function _setEnd(animation) {
  return animation._end = _roundPrecise(animation._start + (animation._tDur / Math.abs(animation._ts || animation._rts || _tinyNum) || 0));
},
    _alignPlayhead = function _alignPlayhead(animation, totalTime) {
  // adjusts the animation's _start and _end according to the provided totalTime (only if the parent's smoothChildTiming is true and the animation isn't paused). It doesn't do any rendering or forcing things back into parent timelines, etc. - that's what totalTime() is for.
  var parent = animation._dp;

  if (parent && parent.smoothChildTiming && animation._ts) {
    animation._start = _roundPrecise(parent._time - (animation._ts > 0 ? totalTime / animation._ts : ((animation._dirty ? animation.totalDuration() : animation._tDur) - totalTime) / -animation._ts));

    _setEnd(animation);

    parent._dirty || _uncache(parent, animation); //for performance improvement. If the parent's cache is already dirty, it already took care of marking the ancestors as dirty too, so skip the function call here.
  }

  return animation;
},

/*
_totalTimeToTime = (clampedTotalTime, duration, repeat, repeatDelay, yoyo) => {
	let cycleDuration = duration + repeatDelay,
		time = _round(clampedTotalTime % cycleDuration);
	if (time > duration) {
		time = duration;
	}
	return (yoyo && (~~(clampedTotalTime / cycleDuration) & 1)) ? duration - time : time;
},
*/
_postAddChecks = function _postAddChecks(timeline, child) {
  var t;

  if (child._time || !child._dur && child._initted || child._start < timeline._time && (child._dur || !child.add)) {
    // in case, for example, the _start is moved on a tween that has already rendered, or if it's being inserted into a timeline BEFORE where the playhead is currently. Imagine it's at its end state, then the startTime is moved WAY later (after the end of this timeline), it should render at its beginning. Special case: if it's a timeline (has .add() method) and no duration, we can skip rendering because the user may be populating it AFTER adding it to a parent timeline (unconventional, but possible, and we wouldn't want it to get removed if the parent's autoRemoveChildren is true).
    t = _parentToChildTotalTime(timeline.rawTime(), child);

    if (!child._dur || _clamp$1(0, child.totalDuration(), t) - child._tTime > _tinyNum) {
      child.render(t, true);
    }
  } //if the timeline has already ended but the inserted tween/timeline extends the duration, we should enable this timeline again so that it renders properly. We should also align the playhead with the parent timeline's when appropriate.


  if (_uncache(timeline, child)._dp && timeline._initted && timeline._time >= timeline._dur && timeline._ts) {
    //in case any of the ancestors had completed but should now be enabled...
    if (timeline._dur < timeline.duration()) {
      t = timeline;

      while (t._dp) {
        t.rawTime() >= 0 && t.totalTime(t._tTime); //moves the timeline (shifts its startTime) if necessary, and also enables it. If it's currently zero, though, it may not be scheduled to render until later so there's no need to force it to align with the current playhead position. Only move to catch up with the playhead.

        t = t._dp;
      }
    }

    timeline._zTime = -_tinyNum; // helps ensure that the next render() will be forced (crossingStart = true in render()), even if the duration hasn't changed (we're adding a child which would need to get rendered). Definitely an edge case. Note: we MUST do this AFTER the loop above where the totalTime() might trigger a render() because this _addToTimeline() method gets called from the Animation constructor, BEFORE tweens even record their targets, etc. so we wouldn't want things to get triggered in the wrong order.
  }
},
    _addToTimeline = function _addToTimeline(timeline, child, position, skipChecks) {
  child.parent && _removeFromParent(child);
  child._start = _roundPrecise((_isNumber$1(position) ? position : position || timeline !== _globalTimeline ? _parsePosition$1(timeline, position, child) : timeline._time) + child._delay);
  child._end = _roundPrecise(child._start + (child.totalDuration() / Math.abs(child.timeScale()) || 0));

  _addLinkedListItem(timeline, child, "_first", "_last", timeline._sort ? "_start" : 0);

  _isFromOrFromStart(child) || (timeline._recent = child);
  skipChecks || _postAddChecks(timeline, child);
  timeline._ts < 0 && _alignPlayhead(timeline, timeline._tTime); // if the timeline is reversed and the new child makes it longer, we may need to adjust the parent's _start (push it back)

  return timeline;
},
    _scrollTrigger = function _scrollTrigger(animation, trigger) {
  return (_globals.ScrollTrigger || _missingPlugin("scrollTrigger", trigger)) && _globals.ScrollTrigger.create(trigger, animation);
},
    _attemptInitTween = function _attemptInitTween(tween, time, force, suppressEvents, tTime) {
  _initTween(tween, time, tTime);

  if (!tween._initted) {
    return 1;
  }

  if (!force && tween._pt && !_reverting$1 && (tween._dur && tween.vars.lazy !== false || !tween._dur && tween.vars.lazy) && _lastRenderedFrame !== _ticker.frame) {
    _lazyTweens.push(tween);

    tween._lazy = [tTime, suppressEvents];
    return 1;
  }
},
    _parentPlayheadIsBeforeStart = function _parentPlayheadIsBeforeStart(_ref) {
  var parent = _ref.parent;
  return parent && parent._ts && parent._initted && !parent._lock && (parent.rawTime() < 0 || _parentPlayheadIsBeforeStart(parent));
},
    // check parent's _lock because when a timeline repeats/yoyos and does its artificial wrapping, we shouldn't force the ratio back to 0
_isFromOrFromStart = function _isFromOrFromStart(_ref2) {
  var data = _ref2.data;
  return data === "isFromStart" || data === "isStart";
},
    _renderZeroDurationTween = function _renderZeroDurationTween(tween, totalTime, suppressEvents, force) {
  var prevRatio = tween.ratio,
      ratio = totalTime < 0 || !totalTime && (!tween._start && _parentPlayheadIsBeforeStart(tween) && !(!tween._initted && _isFromOrFromStart(tween)) || (tween._ts < 0 || tween._dp._ts < 0) && !_isFromOrFromStart(tween)) ? 0 : 1,
      // if the tween or its parent is reversed and the totalTime is 0, we should go to a ratio of 0. Edge case: if a from() or fromTo() stagger tween is placed later in a timeline, the "startAt" zero-duration tween could initially render at a time when the parent timeline's playhead is technically BEFORE where this tween is, so make sure that any "from" and "fromTo" startAt tweens are rendered the first time at a ratio of 1.
  repeatDelay = tween._rDelay,
      tTime = 0,
      pt,
      iteration,
      prevIteration;

  if (repeatDelay && tween._repeat) {
    // in case there's a zero-duration tween that has a repeat with a repeatDelay
    tTime = _clamp$1(0, tween._tDur, totalTime);
    iteration = _animationCycle(tTime, repeatDelay);
    tween._yoyo && iteration & 1 && (ratio = 1 - ratio);

    if (iteration !== _animationCycle(tween._tTime, repeatDelay)) {
      // if iteration changed
      prevRatio = 1 - ratio;
      tween.vars.repeatRefresh && tween._initted && tween.invalidate();
    }
  }

  if (ratio !== prevRatio || _reverting$1 || force || tween._zTime === _tinyNum || !totalTime && tween._zTime) {
    if (!tween._initted && _attemptInitTween(tween, totalTime, force, suppressEvents, tTime)) {
      // if we render the very beginning (time == 0) of a fromTo(), we must force the render (normal tweens wouldn't need to render at a time of 0 when the prevTime was also 0). This is also mandatory to make sure overwriting kicks in immediately.
      return;
    }

    prevIteration = tween._zTime;
    tween._zTime = totalTime || (suppressEvents ? _tinyNum : 0); // when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect.

    suppressEvents || (suppressEvents = totalTime && !prevIteration); // if it was rendered previously at exactly 0 (_zTime) and now the playhead is moving away, DON'T fire callbacks otherwise they'll seem like duplicates.

    tween.ratio = ratio;
    tween._from && (ratio = 1 - ratio);
    tween._time = 0;
    tween._tTime = tTime;
    pt = tween._pt;

    while (pt) {
      pt.r(ratio, pt.d);
      pt = pt._next;
    }

    totalTime < 0 && _rewindStartAt(tween, totalTime, suppressEvents, true);
    tween._onUpdate && !suppressEvents && _callback$1(tween, "onUpdate");
    tTime && tween._repeat && !suppressEvents && tween.parent && _callback$1(tween, "onRepeat");

    if ((totalTime >= tween._tDur || totalTime < 0) && tween.ratio === ratio) {
      ratio && _removeFromParent(tween, 1);

      if (!suppressEvents && !_reverting$1) {
        _callback$1(tween, ratio ? "onComplete" : "onReverseComplete", true);

        tween._prom && tween._prom();
      }
    }
  } else if (!tween._zTime) {
    tween._zTime = totalTime;
  }
},
    _findNextPauseTween = function _findNextPauseTween(animation, prevTime, time) {
  var child;

  if (time > prevTime) {
    child = animation._first;

    while (child && child._start <= time) {
      if (child.data === "isPause" && child._start > prevTime) {
        return child;
      }

      child = child._next;
    }
  } else {
    child = animation._last;

    while (child && child._start >= time) {
      if (child.data === "isPause" && child._start < prevTime) {
        return child;
      }

      child = child._prev;
    }
  }
},
    _setDuration = function _setDuration(animation, duration, skipUncache, leavePlayhead) {
  var repeat = animation._repeat,
      dur = _roundPrecise(duration) || 0,
      totalProgress = animation._tTime / animation._tDur;
  totalProgress && !leavePlayhead && (animation._time *= dur / animation._dur);
  animation._dur = dur;
  animation._tDur = !repeat ? dur : repeat < 0 ? 1e10 : _roundPrecise(dur * (repeat + 1) + animation._rDelay * repeat);
  totalProgress > 0 && !leavePlayhead && _alignPlayhead(animation, animation._tTime = animation._tDur * totalProgress);
  animation.parent && _setEnd(animation);
  skipUncache || _uncache(animation.parent, animation);
  return animation;
},
    _onUpdateTotalDuration = function _onUpdateTotalDuration(animation) {
  return animation instanceof Timeline ? _uncache(animation) : _setDuration(animation, animation._dur);
},
    _zeroPosition = {
  _start: 0,
  endTime: _emptyFunc,
  totalDuration: _emptyFunc
},
    _parsePosition$1 = function _parsePosition(animation, position, percentAnimation) {
  var labels = animation.labels,
      recent = animation._recent || _zeroPosition,
      clippedDuration = animation.duration() >= _bigNum$1 ? recent.endTime(false) : animation._dur,
      //in case there's a child that infinitely repeats, users almost never intend for the insertion point of a new child to be based on a SUPER long value like that so we clip it and assume the most recently-added child's endTime should be used instead.
  i,
      offset,
      isPercent;

  if (_isString$1(position) && (isNaN(position) || position in labels)) {
    //if the string is a number like "1", check to see if there's a label with that name, otherwise interpret it as a number (absolute value).
    offset = position.charAt(0);
    isPercent = position.substr(-1) === "%";
    i = position.indexOf("=");

    if (offset === "<" || offset === ">") {
      i >= 0 && (position = position.replace(/=/, ""));
      return (offset === "<" ? recent._start : recent.endTime(recent._repeat >= 0)) + (parseFloat(position.substr(1)) || 0) * (isPercent ? (i < 0 ? recent : percentAnimation).totalDuration() / 100 : 1);
    }

    if (i < 0) {
      position in labels || (labels[position] = clippedDuration);
      return labels[position];
    }

    offset = parseFloat(position.charAt(i - 1) + position.substr(i + 1));

    if (isPercent && percentAnimation) {
      offset = offset / 100 * (_isArray(percentAnimation) ? percentAnimation[0] : percentAnimation).totalDuration();
    }

    return i > 1 ? _parsePosition(animation, position.substr(0, i - 1), percentAnimation) + offset : clippedDuration + offset;
  }

  return position == null ? clippedDuration : +position;
},
    _createTweenType = function _createTweenType(type, params, timeline) {
  var isLegacy = _isNumber$1(params[1]),
      varsIndex = (isLegacy ? 2 : 1) + (type < 2 ? 0 : 1),
      vars = params[varsIndex],
      irVars,
      parent;

  isLegacy && (vars.duration = params[1]);
  vars.parent = timeline;

  if (type) {
    irVars = vars;
    parent = timeline;

    while (parent && !("immediateRender" in irVars)) {
      // inheritance hasn't happened yet, but someone may have set a default in an ancestor timeline. We could do vars.immediateRender = _isNotFalse(_inheritDefaults(vars).immediateRender) but that'd exact a slight performance penalty because _inheritDefaults() also runs in the Tween constructor. We're paying a small kb price here to gain speed.
      irVars = parent.vars.defaults || {};
      parent = _isNotFalse(parent.vars.inherit) && parent.parent;
    }

    vars.immediateRender = _isNotFalse(irVars.immediateRender);
    type < 2 ? vars.runBackwards = 1 : vars.startAt = params[varsIndex - 1]; // "from" vars
  }

  return new Tween(params[0], vars, params[varsIndex + 1]);
},
    _conditionalReturn = function _conditionalReturn(value, func) {
  return value || value === 0 ? func(value) : func;
},
    _clamp$1 = function _clamp(min, max, value) {
  return value < min ? min : value > max ? max : value;
},
    getUnit = function getUnit(value, v) {
  return !_isString$1(value) || !(v = _unitExp.exec(value)) ? "" : v[1];
},
    // note: protect against padded numbers as strings, like "100.100". That shouldn't return "00" as the unit. If it's numeric, return no unit.
clamp = function clamp(min, max, value) {
  return _conditionalReturn(value, function (v) {
    return _clamp$1(min, max, v);
  });
},
    _slice = [].slice,
    _isArrayLike = function _isArrayLike(value, nonEmpty) {
  return value && _isObject$1(value) && "length" in value && (!nonEmpty && !value.length || value.length - 1 in value && _isObject$1(value[0])) && !value.nodeType && value !== _win$3;
},
    _flatten = function _flatten(ar, leaveStrings, accumulator) {
  if (accumulator === void 0) {
    accumulator = [];
  }

  return ar.forEach(function (value) {
    var _accumulator;

    return _isString$1(value) && !leaveStrings || _isArrayLike(value, 1) ? (_accumulator = accumulator).push.apply(_accumulator, toArray(value)) : accumulator.push(value);
  }) || accumulator;
},
    // takes any value and returns an Array. If it's a string (and leaveStrings isn't true), it'll use document.querySelectorAll() and convert that to an array. It'll also accept iterables like jQuery objects.
toArray = function toArray(value, scope, leaveStrings) {
  return _context$2 && !scope && _context$2.selector ? _context$2.selector(value) : _isString$1(value) && !leaveStrings && (_coreInitted$2 || !_wake()) ? _slice.call((scope || _doc$3).querySelectorAll(value), 0) : _isArray(value) ? _flatten(value, leaveStrings) : _isArrayLike(value) ? _slice.call(value, 0) : value ? [value] : [];
},
    selector = function selector(value) {
  value = toArray(value)[0] || _warn("Invalid scope") || {};
  return function (v) {
    var el = value.current || value.nativeElement || value;
    return toArray(v, el.querySelectorAll ? el : el === value ? _warn("Invalid scope") || _doc$3.createElement("div") : value);
  };
},
    shuffle = function shuffle(a) {
  return a.sort(function () {
    return .5 - Math.random();
  });
},
    // alternative that's a bit faster and more reliably diverse but bigger:   for (let j, v, i = a.length; i; j = (Math.random() * i) | 0, v = a[--i], a[i] = a[j], a[j] = v); return a;
// for distributing values across an Array. Can accept a number, a function or (most commonly) an object which can contain the following properties: {base, amount, from, ease, grid, axis, length, each}. Returns a function that expects the following parameters: index, target, array.
distribute = function distribute(v) {
  if (_isFunction$1(v)) {
    return v;
  }

  var vars = _isObject$1(v) ? v : {
    each: v
  },
      //n:1 is just to indicate v was a number; we leverage that later to set v according to the length we get. If a number is passed in, we treat it like the old stagger value where 0.1, for example, would mean that things would be distributed with 0.1 between each element in the array rather than a total "amount" that's chunked out among them all.
  ease = _parseEase(vars.ease),
      from = vars.from || 0,
      base = parseFloat(vars.base) || 0,
      cache = {},
      isDecimal = from > 0 && from < 1,
      ratios = isNaN(from) || isDecimal,
      axis = vars.axis,
      ratioX = from,
      ratioY = from;

  if (_isString$1(from)) {
    ratioX = ratioY = {
      center: .5,
      edges: .5,
      end: 1
    }[from] || 0;
  } else if (!isDecimal && ratios) {
    ratioX = from[0];
    ratioY = from[1];
  }

  return function (i, target, a) {
    var l = (a || vars).length,
        distances = cache[l],
        originX,
        originY,
        x,
        y,
        d,
        j,
        max,
        min,
        wrapAt;

    if (!distances) {
      wrapAt = vars.grid === "auto" ? 0 : (vars.grid || [1, _bigNum$1])[1];

      if (!wrapAt) {
        max = -_bigNum$1;

        while (max < (max = a[wrapAt++].getBoundingClientRect().left) && wrapAt < l) {}

        wrapAt < l && wrapAt--;
      }

      distances = cache[l] = [];
      originX = ratios ? Math.min(wrapAt, l) * ratioX - .5 : from % wrapAt;
      originY = wrapAt === _bigNum$1 ? 0 : ratios ? l * ratioY / wrapAt - .5 : from / wrapAt | 0;
      max = 0;
      min = _bigNum$1;

      for (j = 0; j < l; j++) {
        x = j % wrapAt - originX;
        y = originY - (j / wrapAt | 0);
        distances[j] = d = !axis ? _sqrt(x * x + y * y) : Math.abs(axis === "y" ? y : x);
        d > max && (max = d);
        d < min && (min = d);
      }

      from === "random" && shuffle(distances);
      distances.max = max - min;
      distances.min = min;
      distances.v = l = (parseFloat(vars.amount) || parseFloat(vars.each) * (wrapAt > l ? l - 1 : !axis ? Math.max(wrapAt, l / wrapAt) : axis === "y" ? l / wrapAt : wrapAt) || 0) * (from === "edges" ? -1 : 1);
      distances.b = l < 0 ? base - l : base;
      distances.u = getUnit(vars.amount || vars.each) || 0; //unit

      ease = ease && l < 0 ? _invertEase(ease) : ease;
    }

    l = (distances[i] - distances.min) / distances.max || 0;
    return _roundPrecise(distances.b + (ease ? ease(l) : l) * distances.v) + distances.u; //round in order to work around floating point errors
  };
},
    _roundModifier = function _roundModifier(v) {
  //pass in 0.1 get a function that'll round to the nearest tenth, or 5 to round to the closest 5, or 0.001 to the closest 1000th, etc.
  var p = Math.pow(10, ((v + "").split(".")[1] || "").length); //to avoid floating point math errors (like 24 * 0.1 == 2.4000000000000004), we chop off at a specific number of decimal places (much faster than toFixed())

  return function (raw) {
    var n = _roundPrecise(Math.round(parseFloat(raw) / v) * v * p);

    return (n - n % 1) / p + (_isNumber$1(raw) ? 0 : getUnit(raw)); // n - n % 1 replaces Math.floor() in order to handle negative values properly. For example, Math.floor(-150.00000000000003) is 151!
  };
},
    snap = function snap(snapTo, value) {
  var isArray = _isArray(snapTo),
      radius,
      is2D;

  if (!isArray && _isObject$1(snapTo)) {
    radius = isArray = snapTo.radius || _bigNum$1;

    if (snapTo.values) {
      snapTo = toArray(snapTo.values);

      if (is2D = !_isNumber$1(snapTo[0])) {
        radius *= radius; //performance optimization so we don't have to Math.sqrt() in the loop.
      }
    } else {
      snapTo = _roundModifier(snapTo.increment);
    }
  }

  return _conditionalReturn(value, !isArray ? _roundModifier(snapTo) : _isFunction$1(snapTo) ? function (raw) {
    is2D = snapTo(raw);
    return Math.abs(is2D - raw) <= radius ? is2D : raw;
  } : function (raw) {
    var x = parseFloat(is2D ? raw.x : raw),
        y = parseFloat(is2D ? raw.y : 0),
        min = _bigNum$1,
        closest = 0,
        i = snapTo.length,
        dx,
        dy;

    while (i--) {
      if (is2D) {
        dx = snapTo[i].x - x;
        dy = snapTo[i].y - y;
        dx = dx * dx + dy * dy;
      } else {
        dx = Math.abs(snapTo[i] - x);
      }

      if (dx < min) {
        min = dx;
        closest = i;
      }
    }

    closest = !radius || min <= radius ? snapTo[closest] : raw;
    return is2D || closest === raw || _isNumber$1(raw) ? closest : closest + getUnit(raw);
  });
},
    random = function random(min, max, roundingIncrement, returnFunction) {
  return _conditionalReturn(_isArray(min) ? !max : roundingIncrement === true ? !!(roundingIncrement = 0) : !returnFunction, function () {
    return _isArray(min) ? min[~~(Math.random() * min.length)] : (roundingIncrement = roundingIncrement || 1e-5) && (returnFunction = roundingIncrement < 1 ? Math.pow(10, (roundingIncrement + "").length - 2) : 1) && Math.floor(Math.round((min - roundingIncrement / 2 + Math.random() * (max - min + roundingIncrement * .99)) / roundingIncrement) * roundingIncrement * returnFunction) / returnFunction;
  });
},
    pipe = function pipe() {
  for (var _len = arguments.length, functions = new Array(_len), _key = 0; _key < _len; _key++) {
    functions[_key] = arguments[_key];
  }

  return function (value) {
    return functions.reduce(function (v, f) {
      return f(v);
    }, value);
  };
},
    unitize = function unitize(func, unit) {
  return function (value) {
    return func(parseFloat(value)) + (unit || getUnit(value));
  };
},
    normalize = function normalize(min, max, value) {
  return mapRange(min, max, 0, 1, value);
},
    _wrapArray = function _wrapArray(a, wrapper, value) {
  return _conditionalReturn(value, function (index) {
    return a[~~wrapper(index)];
  });
},
    wrap = function wrap(min, max, value) {
  // NOTE: wrap() CANNOT be an arrow function! A very odd compiling bug causes problems (unrelated to GSAP).
  var range = max - min;
  return _isArray(min) ? _wrapArray(min, wrap(0, min.length), max) : _conditionalReturn(value, function (value) {
    return (range + (value - min) % range) % range + min;
  });
},
    wrapYoyo = function wrapYoyo(min, max, value) {
  var range = max - min,
      total = range * 2;
  return _isArray(min) ? _wrapArray(min, wrapYoyo(0, min.length - 1), max) : _conditionalReturn(value, function (value) {
    value = (total + (value - min) % total) % total || 0;
    return min + (value > range ? total - value : value);
  });
},
    _replaceRandom = function _replaceRandom(s) {
  return s.replace(_randomExp, function (match) {
    //replaces all occurrences of random(...) in a string with the calculated random value. can be a range like random(-100, 100, 5) or an array like random([0, 100, 500])
    var arIndex = match.indexOf("[") + 1,
        values = match.substring(arIndex || 7, arIndex ? match.indexOf("]") : match.length - 1).split(_commaDelimExp);
    return random(arIndex ? values : +values[0], arIndex ? 0 : +values[1], +values[2] || 1e-5);
  });
},
    mapRange = function mapRange(inMin, inMax, outMin, outMax, value) {
  var inRange = inMax - inMin,
      outRange = outMax - outMin;
  return _conditionalReturn(value, function (value) {
    return outMin + ((value - inMin) / inRange * outRange || 0);
  });
},
    interpolate = function interpolate(start, end, progress, mutate) {
  var func = isNaN(start + end) ? 0 : function (p) {
    return (1 - p) * start + p * end;
  };

  if (!func) {
    var isString = _isString$1(start),
        master = {},
        p,
        i,
        interpolators,
        l,
        il;

    progress === true && (mutate = 1) && (progress = null);

    if (isString) {
      start = {
        p: start
      };
      end = {
        p: end
      };
    } else if (_isArray(start) && !_isArray(end)) {
      interpolators = [];
      l = start.length;
      il = l - 2;

      for (i = 1; i < l; i++) {
        interpolators.push(interpolate(start[i - 1], start[i])); //build the interpolators up front as a performance optimization so that when the function is called many times, it can just reuse them.
      }

      l--;

      func = function func(p) {
        p *= l;
        var i = Math.min(il, ~~p);
        return interpolators[i](p - i);
      };

      progress = end;
    } else if (!mutate) {
      start = _merge(_isArray(start) ? [] : {}, start);
    }

    if (!interpolators) {
      for (p in end) {
        _addPropTween.call(master, start, p, "get", end[p]);
      }

      func = function func(p) {
        return _renderPropTweens(p, master) || (isString ? start.p : start);
      };
    }
  }

  return _conditionalReturn(progress, func);
},
    _getLabelInDirection = function _getLabelInDirection(timeline, fromTime, backward) {
  //used for nextLabel() and previousLabel()
  var labels = timeline.labels,
      min = _bigNum$1,
      p,
      distance,
      label;

  for (p in labels) {
    distance = labels[p] - fromTime;

    if (distance < 0 === !!backward && distance && min > (distance = Math.abs(distance))) {
      label = p;
      min = distance;
    }
  }

  return label;
},
    _callback$1 = function _callback(animation, type, executeLazyFirst) {
  var v = animation.vars,
      callback = v[type],
      prevContext = _context$2,
      context = animation._ctx,
      params,
      scope,
      result;

  if (!callback) {
    return;
  }

  params = v[type + "Params"];
  scope = v.callbackScope || animation;
  executeLazyFirst && _lazyTweens.length && _lazyRender(); //in case rendering caused any tweens to lazy-init, we should render them because typically when a timeline finishes, users expect things to have rendered fully. Imagine an onUpdate on a timeline that reports/checks tweened values.

  context && (_context$2 = context);
  result = params ? callback.apply(scope, params) : callback.call(scope);
  _context$2 = prevContext;
  return result;
},
    _interrupt = function _interrupt(animation) {
  _removeFromParent(animation);

  animation.scrollTrigger && animation.scrollTrigger.kill(!!_reverting$1);
  animation.progress() < 1 && _callback$1(animation, "onInterrupt");
  return animation;
},
    _quickTween,
    _registerPluginQueue = [],
    _createPlugin = function _createPlugin(config) {
  if (!config) return;
  config = !config.name && config["default"] || config; // UMD packaging wraps things oddly, so for example MotionPathHelper becomes {MotionPathHelper:MotionPathHelper, default:MotionPathHelper}.

  if (_windowExists$2() || config.headless) {
    // edge case: some build tools may pass in a null/undefined value
    var name = config.name,
        isFunc = _isFunction$1(config),
        Plugin = name && !isFunc && config.init ? function () {
      this._props = [];
    } : config,
        //in case someone passes in an object that's not a plugin, like CustomEase
    instanceDefaults = {
      init: _emptyFunc,
      render: _renderPropTweens,
      add: _addPropTween,
      kill: _killPropTweensOf,
      modifier: _addPluginModifier,
      rawVars: 0
    },
        statics = {
      targetTest: 0,
      get: 0,
      getSetter: _getSetter,
      aliases: {},
      register: 0
    };

    _wake();

    if (config !== Plugin) {
      if (_plugins[name]) {
        return;
      }

      _setDefaults$1(Plugin, _setDefaults$1(_copyExcluding(config, instanceDefaults), statics)); //static methods


      _merge(Plugin.prototype, _merge(instanceDefaults, _copyExcluding(config, statics))); //instance methods


      _plugins[Plugin.prop = name] = Plugin;

      if (config.targetTest) {
        _harnessPlugins.push(Plugin);

        _reservedProps[name] = 1;
      }

      name = (name === "css" ? "CSS" : name.charAt(0).toUpperCase() + name.substr(1)) + "Plugin"; //for the global name. "motionPath" should become MotionPathPlugin
    }

    _addGlobal(name, Plugin);

    config.register && config.register(gsap$2, Plugin, PropTween);
  } else {
    _registerPluginQueue.push(config);
  }
},

/*
 * --------------------------------------------------------------------------------------
 * COLORS
 * --------------------------------------------------------------------------------------
 */
_255 = 255,
    _colorLookup = {
  aqua: [0, _255, _255],
  lime: [0, _255, 0],
  silver: [192, 192, 192],
  black: [0, 0, 0],
  maroon: [128, 0, 0],
  teal: [0, 128, 128],
  blue: [0, 0, _255],
  navy: [0, 0, 128],
  white: [_255, _255, _255],
  olive: [128, 128, 0],
  yellow: [_255, _255, 0],
  orange: [_255, 165, 0],
  gray: [128, 128, 128],
  purple: [128, 0, 128],
  green: [0, 128, 0],
  red: [_255, 0, 0],
  pink: [_255, 192, 203],
  cyan: [0, _255, _255],
  transparent: [_255, _255, _255, 0]
},
    // possible future idea to replace the hard-coded color name values - put this in the ticker.wake() where we set the _doc:
// let ctx = _doc.createElement("canvas").getContext("2d");
// _forEachName("aqua,lime,silver,black,maroon,teal,blue,navy,white,olive,yellow,orange,gray,purple,green,red,pink,cyan", color => {ctx.fillStyle = color; _colorLookup[color] = splitColor(ctx.fillStyle)});
_hue = function _hue(h, m1, m2) {
  h += h < 0 ? 1 : h > 1 ? -1 : 0;
  return (h * 6 < 1 ? m1 + (m2 - m1) * h * 6 : h < .5 ? m2 : h * 3 < 2 ? m1 + (m2 - m1) * (2 / 3 - h) * 6 : m1) * _255 + .5 | 0;
},
    splitColor = function splitColor(v, toHSL, forceAlpha) {
  var a = !v ? _colorLookup.black : _isNumber$1(v) ? [v >> 16, v >> 8 & _255, v & _255] : 0,
      r,
      g,
      b,
      h,
      s,
      l,
      max,
      min,
      d,
      wasHSL;

  if (!a) {
    if (v.substr(-1) === ",") {
      //sometimes a trailing comma is included and we should chop it off (typically from a comma-delimited list of values like a textShadow:"2px 2px 2px blue, 5px 5px 5px rgb(255,0,0)" - in this example "blue," has a trailing comma. We could strip it out inside parseComplex() but we'd need to do it to the beginning and ending values plus it wouldn't provide protection from other potential scenarios like if the user passes in a similar value.
      v = v.substr(0, v.length - 1);
    }

    if (_colorLookup[v]) {
      a = _colorLookup[v];
    } else if (v.charAt(0) === "#") {
      if (v.length < 6) {
        //for shorthand like #9F0 or #9F0F (could have alpha)
        r = v.charAt(1);
        g = v.charAt(2);
        b = v.charAt(3);
        v = "#" + r + r + g + g + b + b + (v.length === 5 ? v.charAt(4) + v.charAt(4) : "");
      }

      if (v.length === 9) {
        // hex with alpha, like #fd5e53ff
        a = parseInt(v.substr(1, 6), 16);
        return [a >> 16, a >> 8 & _255, a & _255, parseInt(v.substr(7), 16) / 255];
      }

      v = parseInt(v.substr(1), 16);
      a = [v >> 16, v >> 8 & _255, v & _255];
    } else if (v.substr(0, 3) === "hsl") {
      a = wasHSL = v.match(_strictNumExp);

      if (!toHSL) {
        h = +a[0] % 360 / 360;
        s = +a[1] / 100;
        l = +a[2] / 100;
        g = l <= .5 ? l * (s + 1) : l + s - l * s;
        r = l * 2 - g;
        a.length > 3 && (a[3] *= 1); //cast as number

        a[0] = _hue(h + 1 / 3, r, g);
        a[1] = _hue(h, r, g);
        a[2] = _hue(h - 1 / 3, r, g);
      } else if (~v.indexOf("=")) {
        //if relative values are found, just return the raw strings with the relative prefixes in place.
        a = v.match(_numExp);
        forceAlpha && a.length < 4 && (a[3] = 1);
        return a;
      }
    } else {
      a = v.match(_strictNumExp) || _colorLookup.transparent;
    }

    a = a.map(Number);
  }

  if (toHSL && !wasHSL) {
    r = a[0] / _255;
    g = a[1] / _255;
    b = a[2] / _255;
    max = Math.max(r, g, b);
    min = Math.min(r, g, b);
    l = (max + min) / 2;

    if (max === min) {
      h = s = 0;
    } else {
      d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      h = max === r ? (g - b) / d + (g < b ? 6 : 0) : max === g ? (b - r) / d + 2 : (r - g) / d + 4;
      h *= 60;
    }

    a[0] = ~~(h + .5);
    a[1] = ~~(s * 100 + .5);
    a[2] = ~~(l * 100 + .5);
  }

  forceAlpha && a.length < 4 && (a[3] = 1);
  return a;
},
    _colorOrderData = function _colorOrderData(v) {
  // strips out the colors from the string, finds all the numeric slots (with units) and returns an array of those. The Array also has a "c" property which is an Array of the index values where the colors belong. This is to help work around issues where there's a mis-matched order of color/numeric data like drop-shadow(#f00 0px 1px 2px) and drop-shadow(0x 1px 2px #f00). This is basically a helper function used in _formatColors()
  var values = [],
      c = [],
      i = -1;
  v.split(_colorExp).forEach(function (v) {
    var a = v.match(_numWithUnitExp) || [];
    values.push.apply(values, a);
    c.push(i += a.length + 1);
  });
  values.c = c;
  return values;
},
    _formatColors = function _formatColors(s, toHSL, orderMatchData) {
  var result = "",
      colors = (s + result).match(_colorExp),
      type = toHSL ? "hsla(" : "rgba(",
      i = 0,
      c,
      shell,
      d,
      l;

  if (!colors) {
    return s;
  }

  colors = colors.map(function (color) {
    return (color = splitColor(color, toHSL, 1)) && type + (toHSL ? color[0] + "," + color[1] + "%," + color[2] + "%," + color[3] : color.join(",")) + ")";
  });

  if (orderMatchData) {
    d = _colorOrderData(s);
    c = orderMatchData.c;

    if (c.join(result) !== d.c.join(result)) {
      shell = s.replace(_colorExp, "1").split(_numWithUnitExp);
      l = shell.length - 1;

      for (; i < l; i++) {
        result += shell[i] + (~c.indexOf(i) ? colors.shift() || type + "0,0,0,0)" : (d.length ? d : colors.length ? colors : orderMatchData).shift());
      }
    }
  }

  if (!shell) {
    shell = s.split(_colorExp);
    l = shell.length - 1;

    for (; i < l; i++) {
      result += shell[i] + colors[i];
    }
  }

  return result + shell[l];
},
    _colorExp = function () {
  var s = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
      //we'll dynamically build this Regular Expression to conserve file size. After building it, it will be able to find rgb(), rgba(), # (hexadecimal), and named color values like red, blue, purple, etc.,
  p;

  for (p in _colorLookup) {
    s += "|" + p + "\\b";
  }

  return new RegExp(s + ")", "gi");
}(),
    _hslExp = /hsl[a]?\(/,
    _colorStringFilter = function _colorStringFilter(a) {
  var combined = a.join(" "),
      toHSL;
  _colorExp.lastIndex = 0;

  if (_colorExp.test(combined)) {
    toHSL = _hslExp.test(combined);
    a[1] = _formatColors(a[1], toHSL);
    a[0] = _formatColors(a[0], toHSL, _colorOrderData(a[1])); // make sure the order of numbers/colors match with the END value.

    return true;
  }
},

/*
 * --------------------------------------------------------------------------------------
 * TICKER
 * --------------------------------------------------------------------------------------
 */
_tickerActive,
    _ticker = function () {
  var _getTime = Date.now,
      _lagThreshold = 500,
      _adjustedLag = 33,
      _startTime = _getTime(),
      _lastUpdate = _startTime,
      _gap = 1000 / 240,
      _nextTime = _gap,
      _listeners = [],
      _id,
      _req,
      _raf,
      _self,
      _delta,
      _i,
      _tick = function _tick(v) {
    var elapsed = _getTime() - _lastUpdate,
        manual = v === true,
        overlap,
        dispatch,
        time,
        frame;

    (elapsed > _lagThreshold || elapsed < 0) && (_startTime += elapsed - _adjustedLag);
    _lastUpdate += elapsed;
    time = _lastUpdate - _startTime;
    overlap = time - _nextTime;

    if (overlap > 0 || manual) {
      frame = ++_self.frame;
      _delta = time - _self.time * 1000;
      _self.time = time = time / 1000;
      _nextTime += overlap + (overlap >= _gap ? 4 : _gap - overlap);
      dispatch = 1;
    }

    manual || (_id = _req(_tick)); //make sure the request is made before we dispatch the "tick" event so that timing is maintained. Otherwise, if processing the "tick" requires a bunch of time (like 15ms) and we're using a setTimeout() that's based on 16.7ms, it'd technically take 31.7ms between frames otherwise.

    if (dispatch) {
      for (_i = 0; _i < _listeners.length; _i++) {
        // use _i and check _listeners.length instead of a variable because a listener could get removed during the loop, and if that happens to an element less than the current index, it'd throw things off in the loop.
        _listeners[_i](time, _delta, frame, v);
      }
    }
  };

  _self = {
    time: 0,
    frame: 0,
    tick: function tick() {
      _tick(true);
    },
    deltaRatio: function deltaRatio(fps) {
      return _delta / (1000 / (fps || 60));
    },
    wake: function wake() {
      if (_coreReady) {
        if (!_coreInitted$2 && _windowExists$2()) {
          _win$3 = _coreInitted$2 = window;
          _doc$3 = _win$3.document || {};
          _globals.gsap = gsap$2;
          (_win$3.gsapVersions || (_win$3.gsapVersions = [])).push(gsap$2.version);

          _install(_installScope || _win$3.GreenSockGlobals || !_win$3.gsap && _win$3 || {});

          _registerPluginQueue.forEach(_createPlugin);
        }

        _raf = typeof requestAnimationFrame !== "undefined" && requestAnimationFrame;
        _id && _self.sleep();

        _req = _raf || function (f) {
          return setTimeout(f, _nextTime - _self.time * 1000 + 1 | 0);
        };

        _tickerActive = 1;

        _tick(2);
      }
    },
    sleep: function sleep() {
      (_raf ? cancelAnimationFrame : clearTimeout)(_id);
      _tickerActive = 0;
      _req = _emptyFunc;
    },
    lagSmoothing: function lagSmoothing(threshold, adjustedLag) {
      _lagThreshold = threshold || Infinity; // zero should be interpreted as basically unlimited

      _adjustedLag = Math.min(adjustedLag || 33, _lagThreshold);
    },
    fps: function fps(_fps) {
      _gap = 1000 / (_fps || 240);
      _nextTime = _self.time * 1000 + _gap;
    },
    add: function add(callback, once, prioritize) {
      var func = once ? function (t, d, f, v) {
        callback(t, d, f, v);

        _self.remove(func);
      } : callback;

      _self.remove(callback);

      _listeners[prioritize ? "unshift" : "push"](func);

      _wake();

      return func;
    },
    remove: function remove(callback, i) {
      ~(i = _listeners.indexOf(callback)) && _listeners.splice(i, 1) && _i >= i && _i--;
    },
    _listeners: _listeners
  };
  return _self;
}(),
    _wake = function _wake() {
  return !_tickerActive && _ticker.wake();
},
    //also ensures the core classes are initialized.

/*
* -------------------------------------------------
* EASING
* -------------------------------------------------
*/
_easeMap = {},
    _customEaseExp = /^[\d.\-M][\d.\-,\s]/,
    _quotesExp = /["']/g,
    _parseObjectInString = function _parseObjectInString(value) {
  //takes a string like "{wiggles:10, type:anticipate})" and turns it into a real object. Notice it ends in ")" and includes the {} wrappers. This is because we only use this function for parsing ease configs and prioritized optimization rather than reusability.
  var obj = {},
      split = value.substr(1, value.length - 3).split(":"),
      key = split[0],
      i = 1,
      l = split.length,
      index,
      val,
      parsedVal;

  for (; i < l; i++) {
    val = split[i];
    index = i !== l - 1 ? val.lastIndexOf(",") : val.length;
    parsedVal = val.substr(0, index);
    obj[key] = isNaN(parsedVal) ? parsedVal.replace(_quotesExp, "").trim() : +parsedVal;
    key = val.substr(index + 1).trim();
  }

  return obj;
},
    _valueInParentheses = function _valueInParentheses(value) {
  var open = value.indexOf("(") + 1,
      close = value.indexOf(")"),
      nested = value.indexOf("(", open);
  return value.substring(open, ~nested && nested < close ? value.indexOf(")", close + 1) : close);
},
    _configEaseFromString = function _configEaseFromString(name) {
  //name can be a string like "elastic.out(1,0.5)", and pass in _easeMap as obj and it'll parse it out and call the actual function like _easeMap.Elastic.easeOut.config(1,0.5). It will also parse custom ease strings as long as CustomEase is loaded and registered (internally as _easeMap._CE).
  var split = (name + "").split("("),
      ease = _easeMap[split[0]];
  return ease && split.length > 1 && ease.config ? ease.config.apply(null, ~name.indexOf("{") ? [_parseObjectInString(split[1])] : _valueInParentheses(name).split(",").map(_numericIfPossible)) : _easeMap._CE && _customEaseExp.test(name) ? _easeMap._CE("", name) : ease;
},
    _invertEase = function _invertEase(ease) {
  return function (p) {
    return 1 - ease(1 - p);
  };
},
    _parseEase = function _parseEase(ease, defaultEase) {
  return !ease ? defaultEase : (_isFunction$1(ease) ? ease : _easeMap[ease] || _configEaseFromString(ease)) || defaultEase;
},
    _insertEase = function _insertEase(names, easeIn, easeOut, easeInOut) {
  if (easeOut === void 0) {
    easeOut = function easeOut(p) {
      return 1 - easeIn(1 - p);
    };
  }

  if (easeInOut === void 0) {
    easeInOut = function easeInOut(p) {
      return p < .5 ? easeIn(p * 2) / 2 : 1 - easeIn((1 - p) * 2) / 2;
    };
  }

  var ease = {
    easeIn: easeIn,
    easeOut: easeOut,
    easeInOut: easeInOut
  },
      lowercaseName;

  _forEachName(names, function (name) {
    _easeMap[name] = _globals[name] = ease;
    _easeMap[lowercaseName = name.toLowerCase()] = easeOut;

    for (var p in ease) {
      _easeMap[lowercaseName + (p === "easeIn" ? ".in" : p === "easeOut" ? ".out" : ".inOut")] = _easeMap[name + "." + p] = ease[p];
    }
  });

  return ease;
},
    _easeInOutFromOut = function _easeInOutFromOut(easeOut) {
  return function (p) {
    return p < .5 ? (1 - easeOut(1 - p * 2)) / 2 : .5 + easeOut((p - .5) * 2) / 2;
  };
},
    _configElastic = function _configElastic(type, amplitude, period) {
  var p1 = amplitude >= 1 ? amplitude : 1,
      //note: if amplitude is < 1, we simply adjust the period for a more natural feel. Otherwise the math doesn't work right and the curve starts at 1.
  p2 = (period || (type ? .3 : .45)) / (amplitude < 1 ? amplitude : 1),
      p3 = p2 / _2PI * (Math.asin(1 / p1) || 0),
      easeOut = function easeOut(p) {
    return p === 1 ? 1 : p1 * Math.pow(2, -10 * p) * _sin((p - p3) * p2) + 1;
  },
      ease = type === "out" ? easeOut : type === "in" ? function (p) {
    return 1 - easeOut(1 - p);
  } : _easeInOutFromOut(easeOut);

  p2 = _2PI / p2; //precalculate to optimize

  ease.config = function (amplitude, period) {
    return _configElastic(type, amplitude, period);
  };

  return ease;
},
    _configBack = function _configBack(type, overshoot) {
  if (overshoot === void 0) {
    overshoot = 1.70158;
  }

  var easeOut = function easeOut(p) {
    return p ? --p * p * ((overshoot + 1) * p + overshoot) + 1 : 0;
  },
      ease = type === "out" ? easeOut : type === "in" ? function (p) {
    return 1 - easeOut(1 - p);
  } : _easeInOutFromOut(easeOut);

  ease.config = function (overshoot) {
    return _configBack(type, overshoot);
  };

  return ease;
}; // a cheaper (kb and cpu) but more mild way to get a parameterized weighted ease by feeding in a value between -1 (easeIn) and 1 (easeOut) where 0 is linear.
// _weightedEase = ratio => {
// 	let y = 0.5 + ratio / 2;
// 	return p => (2 * (1 - p) * p * y + p * p);
// },
// a stronger (but more expensive kb/cpu) parameterized weighted ease that lets you feed in a value between -1 (easeIn) and 1 (easeOut) where 0 is linear.
// _weightedEaseStrong = ratio => {
// 	ratio = .5 + ratio / 2;
// 	let o = 1 / 3 * (ratio < .5 ? ratio : 1 - ratio),
// 		b = ratio - o,
// 		c = ratio + o;
// 	return p => p === 1 ? p : 3 * b * (1 - p) * (1 - p) * p + 3 * c * (1 - p) * p * p + p * p * p;
// };


_forEachName("Linear,Quad,Cubic,Quart,Quint,Strong", function (name, i) {
  var power = i < 5 ? i + 1 : i;

  _insertEase(name + ",Power" + (power - 1), i ? function (p) {
    return Math.pow(p, power);
  } : function (p) {
    return p;
  }, function (p) {
    return 1 - Math.pow(1 - p, power);
  }, function (p) {
    return p < .5 ? Math.pow(p * 2, power) / 2 : 1 - Math.pow((1 - p) * 2, power) / 2;
  });
});

_easeMap.Linear.easeNone = _easeMap.none = _easeMap.Linear.easeIn;

_insertEase("Elastic", _configElastic("in"), _configElastic("out"), _configElastic());

(function (n, c) {
  var n1 = 1 / c,
      n2 = 2 * n1,
      n3 = 2.5 * n1,
      easeOut = function easeOut(p) {
    return p < n1 ? n * p * p : p < n2 ? n * Math.pow(p - 1.5 / c, 2) + .75 : p < n3 ? n * (p -= 2.25 / c) * p + .9375 : n * Math.pow(p - 2.625 / c, 2) + .984375;
  };

  _insertEase("Bounce", function (p) {
    return 1 - easeOut(1 - p);
  }, easeOut);
})(7.5625, 2.75);

_insertEase("Expo", function (p) {
  return Math.pow(2, 10 * (p - 1)) * p + p * p * p * p * p * p * (1 - p);
}); // previously 2 ** (10 * (p - 1)) but that doesn't end up with the value quite at the right spot so we do a blended ease to ensure it lands where it should perfectly.


_insertEase("Circ", function (p) {
  return -(_sqrt(1 - p * p) - 1);
});

_insertEase("Sine", function (p) {
  return p === 1 ? 1 : -_cos(p * _HALF_PI) + 1;
});

_insertEase("Back", _configBack("in"), _configBack("out"), _configBack());

_easeMap.SteppedEase = _easeMap.steps = _globals.SteppedEase = {
  config: function config(steps, immediateStart) {
    if (steps === void 0) {
      steps = 1;
    }

    var p1 = 1 / steps,
        p2 = steps + (immediateStart ? 0 : 1),
        p3 = immediateStart ? 1 : 0,
        max = 1 - _tinyNum;
    return function (p) {
      return ((p2 * _clamp$1(0, max, p) | 0) + p3) * p1;
    };
  }
};
_defaults$1.ease = _easeMap["quad.out"];

_forEachName("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function (name) {
  return _callbackNames += name + "," + name + "Params,";
});
/*
 * --------------------------------------------------------------------------------------
 * CACHE
 * --------------------------------------------------------------------------------------
 */


var GSCache = function GSCache(target, harness) {
  this.id = _gsID++;
  target._gsap = this;
  this.target = target;
  this.harness = harness;
  this.get = harness ? harness.get : _getProperty;
  this.set = harness ? harness.getSetter : _getSetter;
};
/*
 * --------------------------------------------------------------------------------------
 * ANIMATION
 * --------------------------------------------------------------------------------------
 */

var Animation = /*#__PURE__*/function () {
  function Animation(vars) {
    this.vars = vars;
    this._delay = +vars.delay || 0;

    if (this._repeat = vars.repeat === Infinity ? -2 : vars.repeat || 0) {
      // TODO: repeat: Infinity on a timeline's children must flag that timeline internally and affect its totalDuration, otherwise it'll stop in the negative direction when reaching the start.
      this._rDelay = vars.repeatDelay || 0;
      this._yoyo = !!vars.yoyo || !!vars.yoyoEase;
    }

    this._ts = 1;

    _setDuration(this, +vars.duration, 1, 1);

    this.data = vars.data;

    if (_context$2) {
      this._ctx = _context$2;

      _context$2.data.push(this);
    }

    _tickerActive || _ticker.wake();
  }

  var _proto = Animation.prototype;

  _proto.delay = function delay(value) {
    if (value || value === 0) {
      this.parent && this.parent.smoothChildTiming && this.startTime(this._start + value - this._delay);
      this._delay = value;
      return this;
    }

    return this._delay;
  };

  _proto.duration = function duration(value) {
    return arguments.length ? this.totalDuration(this._repeat > 0 ? value + (value + this._rDelay) * this._repeat : value) : this.totalDuration() && this._dur;
  };

  _proto.totalDuration = function totalDuration(value) {
    if (!arguments.length) {
      return this._tDur;
    }

    this._dirty = 0;
    return _setDuration(this, this._repeat < 0 ? value : (value - this._repeat * this._rDelay) / (this._repeat + 1));
  };

  _proto.totalTime = function totalTime(_totalTime, suppressEvents) {
    _wake();

    if (!arguments.length) {
      return this._tTime;
    }

    var parent = this._dp;

    if (parent && parent.smoothChildTiming && this._ts) {
      _alignPlayhead(this, _totalTime);

      !parent._dp || parent.parent || _postAddChecks(parent, this); // edge case: if this is a child of a timeline that already completed, for example, we must re-activate the parent.
      //in case any of the ancestor timelines had completed but should now be enabled, we should reset their totalTime() which will also ensure that they're lined up properly and enabled. Skip for animations that are on the root (wasteful). Example: a TimelineLite.exportRoot() is performed when there's a paused tween on the root, the export will not complete until that tween is unpaused, but imagine a child gets restarted later, after all [unpaused] tweens have completed. The start of that child would get pushed out, but one of the ancestors may have completed.

      while (parent && parent.parent) {
        if (parent.parent._time !== parent._start + (parent._ts >= 0 ? parent._tTime / parent._ts : (parent.totalDuration() - parent._tTime) / -parent._ts)) {
          parent.totalTime(parent._tTime, true);
        }

        parent = parent.parent;
      }

      if (!this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && _totalTime < this._tDur || this._ts < 0 && _totalTime > 0 || !this._tDur && !_totalTime)) {
        //if the animation doesn't have a parent, put it back into its last parent (recorded as _dp for exactly cases like this). Limit to parents with autoRemoveChildren (like globalTimeline) so that if the user manually removes an animation from a timeline and then alters its playhead, it doesn't get added back in.
        _addToTimeline(this._dp, this, this._start - this._delay);
      }
    }

    if (this._tTime !== _totalTime || !this._dur && !suppressEvents || this._initted && Math.abs(this._zTime) === _tinyNum || !this._initted && this._dur && _totalTime || !_totalTime && !this._initted && (this.add || this._ptLookup)) {
      // check for _ptLookup on a Tween instance to ensure it has actually finished being instantiated, otherwise if this.reverse() gets called in the Animation constructor, it could trigger a render() here even though the _targets weren't populated, thus when _init() is called there won't be any PropTweens (it'll act like the tween is non-functional)
      this._ts || (this._pTime = _totalTime); // otherwise, if an animation is paused, then the playhead is moved back to zero, then resumed, it'd revert back to the original time at the pause
      //if (!this._lock) { // avoid endless recursion (not sure we need this yet or if it's worth the performance hit)
      //   this._lock = 1;

      _lazySafeRender(this, _totalTime, suppressEvents); //   this._lock = 0;
      //}

    }

    return this;
  };

  _proto.time = function time(value, suppressEvents) {
    return arguments.length ? this.totalTime(Math.min(this.totalDuration(), value + _elapsedCycleDuration(this)) % (this._dur + this._rDelay) || (value ? this._dur : 0), suppressEvents) : this._time; // note: if the modulus results in 0, the playhead could be exactly at the end or the beginning, and we always defer to the END with a non-zero value, otherwise if you set the time() to the very end (duration()), it would render at the START!
  };

  _proto.totalProgress = function totalProgress(value, suppressEvents) {
    return arguments.length ? this.totalTime(this.totalDuration() * value, suppressEvents) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() >= 0 && this._initted ? 1 : 0;
  };

  _proto.progress = function progress(value, suppressEvents) {
    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - value : value) + _elapsedCycleDuration(this), suppressEvents) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0;
  };

  _proto.iteration = function iteration(value, suppressEvents) {
    var cycleDuration = this.duration() + this._rDelay;

    return arguments.length ? this.totalTime(this._time + (value - 1) * cycleDuration, suppressEvents) : this._repeat ? _animationCycle(this._tTime, cycleDuration) + 1 : 1;
  } // potential future addition:
  // isPlayingBackwards() {
  // 	let animation = this,
  // 		orientation = 1; // 1 = forward, -1 = backward
  // 	while (animation) {
  // 		orientation *= animation.reversed() || (animation.repeat() && !(animation.iteration() & 1)) ? -1 : 1;
  // 		animation = animation.parent;
  // 	}
  // 	return orientation < 0;
  // }
  ;

  _proto.timeScale = function timeScale(value, suppressEvents) {
    if (!arguments.length) {
      return this._rts === -_tinyNum ? 0 : this._rts; // recorded timeScale. Special case: if someone calls reverse() on an animation with timeScale of 0, we assign it -_tinyNum to remember it's reversed.
    }

    if (this._rts === value) {
      return this;
    }

    var tTime = this.parent && this._ts ? _parentToChildTotalTime(this.parent._time, this) : this._tTime; // make sure to do the parentToChildTotalTime() BEFORE setting the new _ts because the old one must be used in that calculation.
    // future addition? Up side: fast and minimal file size. Down side: only works on this animation; if a timeline is reversed, for example, its childrens' onReverse wouldn't get called.
    //(+value < 0 && this._rts >= 0) && _callback(this, "onReverse", true);
    // prioritize rendering where the parent's playhead lines up instead of this._tTime because there could be a tween that's animating another tween's timeScale in the same rendering loop (same parent), thus if the timeScale tween renders first, it would alter _start BEFORE _tTime was set on that tick (in the rendering loop), effectively freezing it until the timeScale tween finishes.

    this._rts = +value || 0;
    this._ts = this._ps || value === -_tinyNum ? 0 : this._rts; // _ts is the functional timeScale which would be 0 if the animation is paused.

    this.totalTime(_clamp$1(-Math.abs(this._delay), this.totalDuration(), tTime), suppressEvents !== false);

    _setEnd(this); // if parent.smoothChildTiming was false, the end time didn't get updated in the _alignPlayhead() method, so do it here.


    return _recacheAncestors(this);
  };

  _proto.paused = function paused(value) {
    if (!arguments.length) {
      return this._ps;
    } // possible future addition - if an animation is removed from its parent and then .restart() or .play() or .resume() is called, perhaps we should force it back into the globalTimeline but be careful because what if it's already at its end? We don't want it to just persist forever and not get released for GC.
    // !this.parent && !value && this._tTime < this._tDur && this !== _globalTimeline && _globalTimeline.add(this);


    if (this._ps !== value) {
      this._ps = value;

      if (value) {
        this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()); // if the pause occurs during the delay phase, make sure that's factored in when resuming.

        this._ts = this._act = 0; // _ts is the functional timeScale, so a paused tween would effectively have a timeScale of 0. We record the "real" timeScale as _rts (recorded time scale)
      } else {
        _wake();

        this._ts = this._rts; //only defer to _pTime (pauseTime) if tTime is zero. Remember, someone could pause() an animation, then scrub the playhead and resume(). If the parent doesn't have smoothChildTiming, we render at the rawTime() because the startTime won't get updated.

        this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== _tinyNum && (this._tTime -= _tinyNum)); // edge case: animation.progress(1).pause().play() wouldn't render again because the playhead is already at the end, but the call to totalTime() below will add it back to its parent...and not remove it again (since removing only happens upon rendering at a new time). Offsetting the _tTime slightly is done simply to cause the final render in totalTime() that'll pop it off its timeline (if autoRemoveChildren is true, of course). Check to make sure _zTime isn't -_tinyNum to avoid an edge case where the playhead is pushed to the end but INSIDE a tween/callback, the timeline itself is paused thus halting rendering and leaving a few unrendered. When resuming, it wouldn't render those otherwise.
      }
    }

    return this;
  };

  _proto.startTime = function startTime(value) {
    if (arguments.length) {
      this._start = _roundPrecise(value);
      var parent = this.parent || this._dp;
      parent && (parent._sort || !this.parent) && _addToTimeline(parent, this, this._start - this._delay);
      return this;
    }

    return this._start;
  };

  _proto.endTime = function endTime(includeRepeats) {
    return this._start + (_isNotFalse(includeRepeats) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
  };

  _proto.rawTime = function rawTime(wrapRepeats) {
    var parent = this.parent || this._dp; // _dp = detached parent

    return !parent ? this._tTime : wrapRepeats && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : !this._ts ? this._tTime : _parentToChildTotalTime(parent.rawTime(wrapRepeats), this);
  };

  _proto.revert = function revert(config) {
    if (config === void 0) {
      config = _revertConfig;
    }

    var prevIsReverting = _reverting$1;
    _reverting$1 = config;

    if (_isRevertWorthy(this)) {
      this.timeline && this.timeline.revert(config);
      this.totalTime(-0.01, config.suppressEvents);
    }

    this.data !== "nested" && config.kill !== false && this.kill();
    _reverting$1 = prevIsReverting;
    return this;
  };

  _proto.globalTime = function globalTime(rawTime) {
    var animation = this,
        time = arguments.length ? rawTime : animation.rawTime();

    while (animation) {
      time = animation._start + time / (Math.abs(animation._ts) || 1);
      animation = animation._dp;
    }

    return !this.parent && this._sat ? this._sat.globalTime(rawTime) : time; // the _startAt tweens for .fromTo() and .from() that have immediateRender should always be FIRST in the timeline (important for context.revert()). "_sat" stands for _startAtTween, referring to the parent tween that created the _startAt. We must discern if that tween had immediateRender so that we can know whether or not to prioritize it in revert().
  };

  _proto.repeat = function repeat(value) {
    if (arguments.length) {
      this._repeat = value === Infinity ? -2 : value;
      return _onUpdateTotalDuration(this);
    }

    return this._repeat === -2 ? Infinity : this._repeat;
  };

  _proto.repeatDelay = function repeatDelay(value) {
    if (arguments.length) {
      var time = this._time;
      this._rDelay = value;

      _onUpdateTotalDuration(this);

      return time ? this.time(time) : this;
    }

    return this._rDelay;
  };

  _proto.yoyo = function yoyo(value) {
    if (arguments.length) {
      this._yoyo = value;
      return this;
    }

    return this._yoyo;
  };

  _proto.seek = function seek(position, suppressEvents) {
    return this.totalTime(_parsePosition$1(this, position), _isNotFalse(suppressEvents));
  };

  _proto.restart = function restart(includeDelay, suppressEvents) {
    this.play().totalTime(includeDelay ? -this._delay : 0, _isNotFalse(suppressEvents));
    this._dur || (this._zTime = -_tinyNum); // ensures onComplete fires on a zero-duration animation that gets restarted.

    return this;
  };

  _proto.play = function play(from, suppressEvents) {
    from != null && this.seek(from, suppressEvents);
    return this.reversed(false).paused(false);
  };

  _proto.reverse = function reverse(from, suppressEvents) {
    from != null && this.seek(from || this.totalDuration(), suppressEvents);
    return this.reversed(true).paused(false);
  };

  _proto.pause = function pause(atTime, suppressEvents) {
    atTime != null && this.seek(atTime, suppressEvents);
    return this.paused(true);
  };

  _proto.resume = function resume() {
    return this.paused(false);
  };

  _proto.reversed = function reversed(value) {
    if (arguments.length) {
      !!value !== this.reversed() && this.timeScale(-this._rts || (value ? -_tinyNum : 0)); // in case timeScale is zero, reversing would have no effect so we use _tinyNum.

      return this;
    }

    return this._rts < 0;
  };

  _proto.invalidate = function invalidate() {
    this._initted = this._act = 0;
    this._zTime = -_tinyNum;
    return this;
  };

  _proto.isActive = function isActive() {
    var parent = this.parent || this._dp,
        start = this._start,
        rawTime;
    return !!(!parent || this._ts && this._initted && parent.isActive() && (rawTime = parent.rawTime(true)) >= start && rawTime < this.endTime(true) - _tinyNum);
  };

  _proto.eventCallback = function eventCallback(type, callback, params) {
    var vars = this.vars;

    if (arguments.length > 1) {
      if (!callback) {
        delete vars[type];
      } else {
        vars[type] = callback;
        params && (vars[type + "Params"] = params);
        type === "onUpdate" && (this._onUpdate = callback);
      }

      return this;
    }

    return vars[type];
  };

  _proto.then = function then(onFulfilled) {
    var self = this,
        prevProm = self._prom;
    return new Promise(function (resolve) {
      var f = _isFunction$1(onFulfilled) ? onFulfilled : _passThrough$1,
          _resolve = function _resolve() {
        var _then = self.then;
        self.then = null; // temporarily null the then() method to avoid an infinite loop (see https://github.com/greensock/GSAP/issues/322)

        prevProm && prevProm();
        _isFunction$1(f) && (f = f(self)) && (f.then || f === self) && (self.then = _then);
        resolve(f);
        self.then = _then;
      };

      if (self._initted && self.totalProgress() === 1 && self._ts >= 0 || !self._tTime && self._ts < 0) {
        _resolve();
      } else {
        self._prom = _resolve;
      }
    });
  };

  _proto.kill = function kill() {
    _interrupt(this);
  };

  return Animation;
}();

_setDefaults$1(Animation.prototype, {
  _time: 0,
  _start: 0,
  _end: 0,
  _tTime: 0,
  _tDur: 0,
  _dirty: 0,
  _repeat: 0,
  _yoyo: false,
  parent: null,
  _initted: false,
  _rDelay: 0,
  _ts: 1,
  _dp: 0,
  ratio: 0,
  _zTime: -_tinyNum,
  _prom: 0,
  _ps: false,
  _rts: 1
});
/*
 * -------------------------------------------------
 * TIMELINE
 * -------------------------------------------------
 */


var Timeline = /*#__PURE__*/function (_Animation) {
  _inheritsLoose(Timeline, _Animation);

  function Timeline(vars, position) {
    var _this;

    if (vars === void 0) {
      vars = {};
    }

    _this = _Animation.call(this, vars) || this;
    _this.labels = {};
    _this.smoothChildTiming = !!vars.smoothChildTiming;
    _this.autoRemoveChildren = !!vars.autoRemoveChildren;
    _this._sort = _isNotFalse(vars.sortChildren);
    _globalTimeline && _addToTimeline(vars.parent || _globalTimeline, _assertThisInitialized(_this), position);
    vars.reversed && _this.reverse();
    vars.paused && _this.paused(true);
    vars.scrollTrigger && _scrollTrigger(_assertThisInitialized(_this), vars.scrollTrigger);
    return _this;
  }

  var _proto2 = Timeline.prototype;

  _proto2.to = function to(targets, vars, position) {
    _createTweenType(0, arguments, this);

    return this;
  };

  _proto2.from = function from(targets, vars, position) {
    _createTweenType(1, arguments, this);

    return this;
  };

  _proto2.fromTo = function fromTo(targets, fromVars, toVars, position) {
    _createTweenType(2, arguments, this);

    return this;
  };

  _proto2.set = function set(targets, vars, position) {
    vars.duration = 0;
    vars.parent = this;
    _inheritDefaults(vars).repeatDelay || (vars.repeat = 0);
    vars.immediateRender = !!vars.immediateRender;
    new Tween(targets, vars, _parsePosition$1(this, position), 1);
    return this;
  };

  _proto2.call = function call(callback, params, position) {
    return _addToTimeline(this, Tween.delayedCall(0, callback, params), position);
  } //ONLY for backward compatibility! Maybe delete?
  ;

  _proto2.staggerTo = function staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
    vars.duration = duration;
    vars.stagger = vars.stagger || stagger;
    vars.onComplete = onCompleteAll;
    vars.onCompleteParams = onCompleteAllParams;
    vars.parent = this;
    new Tween(targets, vars, _parsePosition$1(this, position));
    return this;
  };

  _proto2.staggerFrom = function staggerFrom(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
    vars.runBackwards = 1;
    _inheritDefaults(vars).immediateRender = _isNotFalse(vars.immediateRender);
    return this.staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams);
  };

  _proto2.staggerFromTo = function staggerFromTo(targets, duration, fromVars, toVars, stagger, position, onCompleteAll, onCompleteAllParams) {
    toVars.startAt = fromVars;
    _inheritDefaults(toVars).immediateRender = _isNotFalse(toVars.immediateRender);
    return this.staggerTo(targets, duration, toVars, stagger, position, onCompleteAll, onCompleteAllParams);
  };

  _proto2.render = function render(totalTime, suppressEvents, force) {
    var prevTime = this._time,
        tDur = this._dirty ? this.totalDuration() : this._tDur,
        dur = this._dur,
        tTime = totalTime <= 0 ? 0 : _roundPrecise(totalTime),
        // if a paused timeline is resumed (or its _start is updated for another reason...which rounds it), that could result in the playhead shifting a **tiny** amount and a zero-duration child at that spot may get rendered at a different ratio, like its totalTime in render() may be 1e-17 instead of 0, for example.
    crossingStart = this._zTime < 0 !== totalTime < 0 && (this._initted || !dur),
        time,
        child,
        next,
        iteration,
        cycleDuration,
        prevPaused,
        pauseTween,
        timeScale,
        prevStart,
        prevIteration,
        yoyo,
        isYoyo;
    this !== _globalTimeline && tTime > tDur && totalTime >= 0 && (tTime = tDur);

    if (tTime !== this._tTime || force || crossingStart) {
      if (prevTime !== this._time && dur) {
        //if totalDuration() finds a child with a negative startTime and smoothChildTiming is true, things get shifted around internally so we need to adjust the time accordingly. For example, if a tween starts at -30 we must shift EVERYTHING forward 30 seconds and move this timeline's startTime backward by 30 seconds so that things align with the playhead (no jump).
        tTime += this._time - prevTime;
        totalTime += this._time - prevTime;
      }

      time = tTime;
      prevStart = this._start;
      timeScale = this._ts;
      prevPaused = !timeScale;

      if (crossingStart) {
        dur || (prevTime = this._zTime); //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration timeline, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect.

        (totalTime || !suppressEvents) && (this._zTime = totalTime);
      }

      if (this._repeat) {
        //adjust the time for repeats and yoyos
        yoyo = this._yoyo;
        cycleDuration = dur + this._rDelay;

        if (this._repeat < -1 && totalTime < 0) {
          return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
        }

        time = _roundPrecise(tTime % cycleDuration); //round to avoid floating point errors. (4 % 0.8 should be 0 but some browsers report it as 0.79999999!)

        if (tTime === tDur) {
          // the tDur === tTime is for edge cases where there's a lengthy decimal on the duration and it may reach the very end but the time is rendered as not-quite-there (remember, tDur is rounded to 4 decimals whereas dur isn't)
          iteration = this._repeat;
          time = dur;
        } else {
          prevIteration = _roundPrecise(tTime / cycleDuration); // full decimal version of iterations, not the previous iteration (we're reusing prevIteration variable for efficiency)

          iteration = ~~prevIteration;

          if (iteration && iteration === prevIteration) {
            time = dur;
            iteration--;
          }

          time > dur && (time = dur);
        }

        prevIteration = _animationCycle(this._tTime, cycleDuration);
        !prevTime && this._tTime && prevIteration !== iteration && this._tTime - prevIteration * cycleDuration - this._dur <= 0 && (prevIteration = iteration); // edge case - if someone does addPause() at the very beginning of a repeating timeline, that pause is technically at the same spot as the end which causes this._time to get set to 0 when the totalTime would normally place the playhead at the end. See https://gsap.com/forums/topic/23823-closing-nav-animation-not-working-on-ie-and-iphone-6-maybe-other-older-browser/?tab=comments#comment-113005 also, this._tTime - prevIteration * cycleDuration - this._dur <= 0 just checks to make sure it wasn't previously in the "repeatDelay" portion

        if (yoyo && iteration & 1) {
          time = dur - time;
          isYoyo = 1;
        }
        /*
        make sure children at the end/beginning of the timeline are rendered properly. If, for example,
        a 3-second long timeline rendered at 2.9 seconds previously, and now renders at 3.2 seconds (which
        would get translated to 2.8 seconds if the timeline yoyos or 0.2 seconds if it just repeats), there
        could be a callback or a short tween that's at 2.95 or 3 seconds in which wouldn't render. So
        we need to push the timeline to the end (and/or beginning depending on its yoyo value). Also we must
        ensure that zero-duration tweens at the very beginning or end of the Timeline work.
        */


        if (iteration !== prevIteration && !this._lock) {
          var rewinding = yoyo && prevIteration & 1,
              doesWrap = rewinding === (yoyo && iteration & 1);
          iteration < prevIteration && (rewinding = !rewinding);
          prevTime = rewinding ? 0 : tTime % dur ? dur : tTime; // if the playhead is landing exactly at the end of an iteration, use that totalTime rather than only the duration, otherwise it'll skip the 2nd render since it's effectively at the same time.

          this._lock = 1;
          this.render(prevTime || (isYoyo ? 0 : _roundPrecise(iteration * cycleDuration)), suppressEvents, !dur)._lock = 0;
          this._tTime = tTime; // if a user gets the iteration() inside the onRepeat, for example, it should be accurate.

          !suppressEvents && this.parent && _callback$1(this, "onRepeat");

          if (this.vars.repeatRefresh && !isYoyo) {
            this.invalidate()._lock = 1;
            prevIteration = iteration; // otherwise, the onStart() may fire on the 2nd iteration.
          }

          if (prevTime && prevTime !== this._time || prevPaused !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) {
            // if prevTime is 0 and we render at the very end, _time will be the end, thus won't match. So in this edge case, prevTime won't match _time but that's okay. If it gets killed in the onRepeat, eject as well.
            return this;
          }

          dur = this._dur; // in case the duration changed in the onRepeat

          tDur = this._tDur;

          if (doesWrap) {
            this._lock = 2;
            prevTime = rewinding ? dur : -1e-4;
            this.render(prevTime, true);
            this.vars.repeatRefresh && !isYoyo && this.invalidate();
          }

          this._lock = 0;

          if (!this._ts && !prevPaused) {
            return this;
          }
        }
      }

      if (this._hasPause && !this._forcing && this._lock < 2) {
        pauseTween = _findNextPauseTween(this, _roundPrecise(prevTime), _roundPrecise(time));

        if (pauseTween) {
          tTime -= time - (time = pauseTween._start);
        }
      }

      this._tTime = tTime;
      this._time = time;
      this._act = !!timeScale; // as long as it's not paused, force it to be active so that if the user renders independent of the parent timeline, it'll be forced to re-render on the next tick.

      if (!this._initted) {
        this._onUpdate = this.vars.onUpdate;
        this._initted = 1;
        this._zTime = totalTime;
        prevTime = 0; // upon init, the playhead should always go forward; someone could invalidate() a completed timeline and then if they restart(), that would make child tweens render in reverse order which could lock in the wrong starting values if they build on each other, like tl.to(obj, {x: 100}).to(obj, {x: 0}).
      }

      if (!prevTime && tTime && dur && !suppressEvents && !prevIteration) {
        _callback$1(this, "onStart");

        if (this._tTime !== tTime) {
          // in case the onStart triggered a render at a different spot, eject. Like if someone did animation.pause(0.5) or something inside the onStart.
          return this;
        }
      }

      if (time >= prevTime && totalTime >= 0) {
        child = this._first;

        while (child) {
          next = child._next;

          if ((child._act || time >= child._start) && child._ts && pauseTween !== child) {
            if (child.parent !== this) {
              // an extreme edge case - the child's render could do something like kill() the "next" one in the linked list, or reparent it. In that case we must re-initiate the whole render to be safe.
              return this.render(totalTime, suppressEvents, force);
            }

            child.render(child._ts > 0 ? (time - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (time - child._start) * child._ts, suppressEvents, force);

            if (time !== this._time || !this._ts && !prevPaused) {
              //in case a tween pauses or seeks the timeline when rendering, like inside of an onUpdate/onComplete
              pauseTween = 0;
              next && (tTime += this._zTime = -_tinyNum); // it didn't finish rendering, so flag zTime as negative so that the next time render() is called it'll be forced (to render any remaining children)

              break;
            }
          }

          child = next;
        }
      } else {
        child = this._last;
        var adjustedTime = totalTime < 0 ? totalTime : time; //when the playhead goes backward beyond the start of this timeline, we must pass that information down to the child animations so that zero-duration tweens know whether to render their starting or ending values.

        while (child) {
          next = child._prev;

          if ((child._act || adjustedTime <= child._end) && child._ts && pauseTween !== child) {
            if (child.parent !== this) {
              // an extreme edge case - the child's render could do something like kill() the "next" one in the linked list, or reparent it. In that case we must re-initiate the whole render to be safe.
              return this.render(totalTime, suppressEvents, force);
            }

            child.render(child._ts > 0 ? (adjustedTime - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (adjustedTime - child._start) * child._ts, suppressEvents, force || _reverting$1 && _isRevertWorthy(child)); // if reverting, we should always force renders of initted tweens (but remember that .fromTo() or .from() may have a _startAt but not _initted yet). If, for example, a .fromTo() tween with a stagger (which creates an internal timeline) gets reverted BEFORE some of its child tweens render for the first time, it may not properly trigger them to revert.

            if (time !== this._time || !this._ts && !prevPaused) {
              //in case a tween pauses or seeks the timeline when rendering, like inside of an onUpdate/onComplete
              pauseTween = 0;
              next && (tTime += this._zTime = adjustedTime ? -_tinyNum : _tinyNum); // it didn't finish rendering, so adjust zTime so that so that the next time render() is called it'll be forced (to render any remaining children)

              break;
            }
          }

          child = next;
        }
      }

      if (pauseTween && !suppressEvents) {
        this.pause();
        pauseTween.render(time >= prevTime ? 0 : -_tinyNum)._zTime = time >= prevTime ? 1 : -1;

        if (this._ts) {
          //the callback resumed playback! So since we may have held back the playhead due to where the pause is positioned, go ahead and jump to where it's SUPPOSED to be (if no pause happened).
          this._start = prevStart; //if the pause was at an earlier time and the user resumed in the callback, it could reposition the timeline (changing its startTime), throwing things off slightly, so we make sure the _start doesn't shift.

          _setEnd(this);

          return this.render(totalTime, suppressEvents, force);
        }
      }

      this._onUpdate && !suppressEvents && _callback$1(this, "onUpdate", true);
      if (tTime === tDur && this._tTime >= this.totalDuration() || !tTime && prevTime) if (prevStart === this._start || Math.abs(timeScale) !== Math.abs(this._ts)) if (!this._lock) {
        // remember, a child's callback may alter this timeline's playhead or timeScale which is why we need to add some of these checks.
        (totalTime || !dur) && (tTime === tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1); // don't remove if the timeline is reversed and the playhead isn't at 0, otherwise tl.progress(1).reverse() won't work. Only remove if the playhead is at the end and timeScale is positive, or if the playhead is at 0 and the timeScale is negative.

        if (!suppressEvents && !(totalTime < 0 && !prevTime) && (tTime || prevTime || !tDur)) {
          _callback$1(this, tTime === tDur && totalTime >= 0 ? "onComplete" : "onReverseComplete", true);

          this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
        }
      }
    }

    return this;
  };

  _proto2.add = function add(child, position) {
    var _this2 = this;

    _isNumber$1(position) || (position = _parsePosition$1(this, position, child));

    if (!(child instanceof Animation)) {
      if (_isArray(child)) {
        child.forEach(function (obj) {
          return _this2.add(obj, position);
        });
        return this;
      }

      if (_isString$1(child)) {
        return this.addLabel(child, position);
      }

      if (_isFunction$1(child)) {
        child = Tween.delayedCall(0, child);
      } else {
        return this;
      }
    }

    return this !== child ? _addToTimeline(this, child, position) : this; //don't allow a timeline to be added to itself as a child!
  };

  _proto2.getChildren = function getChildren(nested, tweens, timelines, ignoreBeforeTime) {
    if (nested === void 0) {
      nested = true;
    }

    if (tweens === void 0) {
      tweens = true;
    }

    if (timelines === void 0) {
      timelines = true;
    }

    if (ignoreBeforeTime === void 0) {
      ignoreBeforeTime = -_bigNum$1;
    }

    var a = [],
        child = this._first;

    while (child) {
      if (child._start >= ignoreBeforeTime) {
        if (child instanceof Tween) {
          tweens && a.push(child);
        } else {
          timelines && a.push(child);
          nested && a.push.apply(a, child.getChildren(true, tweens, timelines));
        }
      }

      child = child._next;
    }

    return a;
  };

  _proto2.getById = function getById(id) {
    var animations = this.getChildren(1, 1, 1),
        i = animations.length;

    while (i--) {
      if (animations[i].vars.id === id) {
        return animations[i];
      }
    }
  };

  _proto2.remove = function remove(child) {
    if (_isString$1(child)) {
      return this.removeLabel(child);
    }

    if (_isFunction$1(child)) {
      return this.killTweensOf(child);
    }

    child.parent === this && _removeLinkedListItem(this, child);

    if (child === this._recent) {
      this._recent = this._last;
    }

    return _uncache(this);
  };

  _proto2.totalTime = function totalTime(_totalTime2, suppressEvents) {
    if (!arguments.length) {
      return this._tTime;
    }

    this._forcing = 1;

    if (!this._dp && this._ts) {
      //special case for the global timeline (or any other that has no parent or detached parent).
      this._start = _roundPrecise(_ticker.time - (this._ts > 0 ? _totalTime2 / this._ts : (this.totalDuration() - _totalTime2) / -this._ts));
    }

    _Animation.prototype.totalTime.call(this, _totalTime2, suppressEvents);

    this._forcing = 0;
    return this;
  };

  _proto2.addLabel = function addLabel(label, position) {
    this.labels[label] = _parsePosition$1(this, position);
    return this;
  };

  _proto2.removeLabel = function removeLabel(label) {
    delete this.labels[label];
    return this;
  };

  _proto2.addPause = function addPause(position, callback, params) {
    var t = Tween.delayedCall(0, callback || _emptyFunc, params);
    t.data = "isPause";
    this._hasPause = 1;
    return _addToTimeline(this, t, _parsePosition$1(this, position));
  };

  _proto2.removePause = function removePause(position) {
    var child = this._first;
    position = _parsePosition$1(this, position);

    while (child) {
      if (child._start === position && child.data === "isPause") {
        _removeFromParent(child);
      }

      child = child._next;
    }
  };

  _proto2.killTweensOf = function killTweensOf(targets, props, onlyActive) {
    var tweens = this.getTweensOf(targets, onlyActive),
        i = tweens.length;

    while (i--) {
      _overwritingTween !== tweens[i] && tweens[i].kill(targets, props);
    }

    return this;
  };

  _proto2.getTweensOf = function getTweensOf(targets, onlyActive) {
    var a = [],
        parsedTargets = toArray(targets),
        child = this._first,
        isGlobalTime = _isNumber$1(onlyActive),
        // a number is interpreted as a global time. If the animation spans
    children;

    while (child) {
      if (child instanceof Tween) {
        if (_arrayContainsAny(child._targets, parsedTargets) && (isGlobalTime ? (!_overwritingTween || child._initted && child._ts) && child.globalTime(0) <= onlyActive && child.globalTime(child.totalDuration()) > onlyActive : !onlyActive || child.isActive())) {
          // note: if this is for overwriting, it should only be for tweens that aren't paused and are initted.
          a.push(child);
        }
      } else if ((children = child.getTweensOf(parsedTargets, onlyActive)).length) {
        a.push.apply(a, children);
      }

      child = child._next;
    }

    return a;
  } // potential future feature - targets() on timelines
  // targets() {
  // 	let result = [];
  // 	this.getChildren(true, true, false).forEach(t => result.push(...t.targets()));
  // 	return result.filter((v, i) => result.indexOf(v) === i);
  // }
  ;

  _proto2.tweenTo = function tweenTo(position, vars) {
    vars = vars || {};

    var tl = this,
        endTime = _parsePosition$1(tl, position),
        _vars = vars,
        startAt = _vars.startAt,
        _onStart = _vars.onStart,
        onStartParams = _vars.onStartParams,
        immediateRender = _vars.immediateRender,
        initted,
        tween = Tween.to(tl, _setDefaults$1({
      ease: vars.ease || "none",
      lazy: false,
      immediateRender: false,
      time: endTime,
      overwrite: "auto",
      duration: vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale()) || _tinyNum,
      onStart: function onStart() {
        tl.pause();

        if (!initted) {
          var duration = vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale());
          tween._dur !== duration && _setDuration(tween, duration, 0, 1).render(tween._time, true, true);
          initted = 1;
        }

        _onStart && _onStart.apply(tween, onStartParams || []); //in case the user had an onStart in the vars - we don't want to overwrite it.
      }
    }, vars));

    return immediateRender ? tween.render(0) : tween;
  };

  _proto2.tweenFromTo = function tweenFromTo(fromPosition, toPosition, vars) {
    return this.tweenTo(toPosition, _setDefaults$1({
      startAt: {
        time: _parsePosition$1(this, fromPosition)
      }
    }, vars));
  };

  _proto2.recent = function recent() {
    return this._recent;
  };

  _proto2.nextLabel = function nextLabel(afterTime) {
    if (afterTime === void 0) {
      afterTime = this._time;
    }

    return _getLabelInDirection(this, _parsePosition$1(this, afterTime));
  };

  _proto2.previousLabel = function previousLabel(beforeTime) {
    if (beforeTime === void 0) {
      beforeTime = this._time;
    }

    return _getLabelInDirection(this, _parsePosition$1(this, beforeTime), 1);
  };

  _proto2.currentLabel = function currentLabel(value) {
    return arguments.length ? this.seek(value, true) : this.previousLabel(this._time + _tinyNum);
  };

  _proto2.shiftChildren = function shiftChildren(amount, adjustLabels, ignoreBeforeTime) {
    if (ignoreBeforeTime === void 0) {
      ignoreBeforeTime = 0;
    }

    var child = this._first,
        labels = this.labels,
        p;
    amount = _roundPrecise(amount);

    while (child) {
      if (child._start >= ignoreBeforeTime) {
        child._start += amount;
        child._end += amount;
      }

      child = child._next;
    }

    if (adjustLabels) {
      for (p in labels) {
        if (labels[p] >= ignoreBeforeTime) {
          labels[p] += amount;
        }
      }
    }

    return _uncache(this);
  };

  _proto2.invalidate = function invalidate(soft) {
    var child = this._first;
    this._lock = 0;

    while (child) {
      child.invalidate(soft);
      child = child._next;
    }

    return _Animation.prototype.invalidate.call(this, soft);
  };

  _proto2.clear = function clear(includeLabels) {
    if (includeLabels === void 0) {
      includeLabels = true;
    }

    var child = this._first,
        next;

    while (child) {
      next = child._next;
      this.remove(child);
      child = next;
    }

    this._dp && (this._time = this._tTime = this._pTime = 0);
    includeLabels && (this.labels = {});
    return _uncache(this);
  };

  _proto2.totalDuration = function totalDuration(value) {
    var max = 0,
        self = this,
        child = self._last,
        prevStart = _bigNum$1,
        prev,
        start,
        parent;

    if (arguments.length) {
      return self.timeScale((self._repeat < 0 ? self.duration() : self.totalDuration()) / (self.reversed() ? -value : value));
    }

    if (self._dirty) {
      parent = self.parent;

      while (child) {
        prev = child._prev; //record it here in case the tween changes position in the sequence...

        child._dirty && child.totalDuration(); //could change the tween._startTime, so make sure the animation's cache is clean before analyzing it.

        start = child._start;

        if (start > prevStart && self._sort && child._ts && !self._lock) {
          //in case one of the tweens shifted out of order, it needs to be re-inserted into the correct position in the sequence
          self._lock = 1; //prevent endless recursive calls - there are methods that get triggered that check duration/totalDuration when we add().

          _addToTimeline(self, child, start - child._delay, 1)._lock = 0;
        } else {
          prevStart = start;
        }

        if (start < 0 && child._ts) {
          //children aren't allowed to have negative startTimes unless smoothChildTiming is true, so adjust here if one is found.
          max -= start;

          if (!parent && !self._dp || parent && parent.smoothChildTiming) {
            self._start += _roundPrecise(start / self._ts);
            self._time -= start;
            self._tTime -= start;
          }

          self.shiftChildren(-start, false, -Infinity);
          prevStart = 0;
        }

        child._end > max && child._ts && (max = child._end);
        child = prev;
      }

      _setDuration(self, self === _globalTimeline && self._time > max ? self._time : max, 1, 1);

      self._dirty = 0;
    }

    return self._tDur;
  };

  Timeline.updateRoot = function updateRoot(time) {
    if (_globalTimeline._ts) {
      _lazySafeRender(_globalTimeline, _parentToChildTotalTime(time, _globalTimeline));

      _lastRenderedFrame = _ticker.frame;
    }

    if (_ticker.frame >= _nextGCFrame) {
      _nextGCFrame += _config.autoSleep || 120;
      var child = _globalTimeline._first;
      if (!child || !child._ts) if (_config.autoSleep && _ticker._listeners.length < 2) {
        while (child && !child._ts) {
          child = child._next;
        }

        child || _ticker.sleep();
      }
    }
  };

  return Timeline;
}(Animation);

_setDefaults$1(Timeline.prototype, {
  _lock: 0,
  _hasPause: 0,
  _forcing: 0
});

var _addComplexStringPropTween = function _addComplexStringPropTween(target, prop, start, end, setter, stringFilter, funcParam) {
  //note: we call _addComplexStringPropTween.call(tweenInstance...) to ensure that it's scoped properly. We may call it from within a plugin too, thus "this" would refer to the plugin.
  var pt = new PropTween(this._pt, target, prop, 0, 1, _renderComplexString, null, setter),
      index = 0,
      matchIndex = 0,
      result,
      startNums,
      color,
      endNum,
      chunk,
      startNum,
      hasRandom,
      a;
  pt.b = start;
  pt.e = end;
  start += ""; //ensure values are strings

  end += "";

  if (hasRandom = ~end.indexOf("random(")) {
    end = _replaceRandom(end);
  }

  if (stringFilter) {
    a = [start, end];
    stringFilter(a, target, prop); //pass an array with the starting and ending values and let the filter do whatever it needs to the values.

    start = a[0];
    end = a[1];
  }

  startNums = start.match(_complexStringNumExp) || [];

  while (result = _complexStringNumExp.exec(end)) {
    endNum = result[0];
    chunk = end.substring(index, result.index);

    if (color) {
      color = (color + 1) % 5;
    } else if (chunk.substr(-5) === "rgba(") {
      color = 1;
    }

    if (endNum !== startNums[matchIndex++]) {
      startNum = parseFloat(startNums[matchIndex - 1]) || 0; //these nested PropTweens are handled in a special way - we'll never actually call a render or setter method on them. We'll just loop through them in the parent complex string PropTween's render method.

      pt._pt = {
        _next: pt._pt,
        p: chunk || matchIndex === 1 ? chunk : ",",
        //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
        s: startNum,
        c: endNum.charAt(1) === "=" ? _parseRelative(startNum, endNum) - startNum : parseFloat(endNum) - startNum,
        m: color && color < 4 ? Math.round : 0
      };
      index = _complexStringNumExp.lastIndex;
    }
  }

  pt.c = index < end.length ? end.substring(index, end.length) : ""; //we use the "c" of the PropTween to store the final part of the string (after the last number)

  pt.fp = funcParam;

  if (_relExp.test(end) || hasRandom) {
    pt.e = 0; //if the end string contains relative values or dynamic random(...) values, delete the end it so that on the final render we don't actually set it to the string with += or -= characters (forces it to use the calculated value).
  }

  this._pt = pt; //start the linked list with this new PropTween. Remember, we call _addComplexStringPropTween.call(tweenInstance...) to ensure that it's scoped properly. We may call it from within a plugin too, thus "this" would refer to the plugin.

  return pt;
},
    _addPropTween = function _addPropTween(target, prop, start, end, index, targets, modifier, stringFilter, funcParam, optional) {
  _isFunction$1(end) && (end = end(index || 0, target, targets));
  var currentValue = target[prop],
      parsedStart = start !== "get" ? start : !_isFunction$1(currentValue) ? currentValue : funcParam ? target[prop.indexOf("set") || !_isFunction$1(target["get" + prop.substr(3)]) ? prop : "get" + prop.substr(3)](funcParam) : target[prop](),
      setter = !_isFunction$1(currentValue) ? _setterPlain : funcParam ? _setterFuncWithParam : _setterFunc,
      pt;

  if (_isString$1(end)) {
    if (~end.indexOf("random(")) {
      end = _replaceRandom(end);
    }

    if (end.charAt(1) === "=") {
      pt = _parseRelative(parsedStart, end) + (getUnit(parsedStart) || 0);

      if (pt || pt === 0) {
        // to avoid isNaN, like if someone passes in a value like "!= whatever"
        end = pt;
      }
    }
  }

  if (!optional || parsedStart !== end || _forceAllPropTweens) {
    if (!isNaN(parsedStart * end) && end !== "") {
      // fun fact: any number multiplied by "" is evaluated as the number 0!
      pt = new PropTween(this._pt, target, prop, +parsedStart || 0, end - (parsedStart || 0), typeof currentValue === "boolean" ? _renderBoolean : _renderPlain, 0, setter);
      funcParam && (pt.fp = funcParam);
      modifier && pt.modifier(modifier, this, target);
      return this._pt = pt;
    }

    !currentValue && !(prop in target) && _missingPlugin(prop, end);
    return _addComplexStringPropTween.call(this, target, prop, parsedStart, end, setter, stringFilter || _config.stringFilter, funcParam);
  }
},
    //creates a copy of the vars object and processes any function-based values (putting the resulting values directly into the copy) as well as strings with "random()" in them. It does NOT process relative values.
_processVars = function _processVars(vars, index, target, targets, tween) {
  _isFunction$1(vars) && (vars = _parseFuncOrString(vars, tween, index, target, targets));

  if (!_isObject$1(vars) || vars.style && vars.nodeType || _isArray(vars) || _isTypedArray(vars)) {
    return _isString$1(vars) ? _parseFuncOrString(vars, tween, index, target, targets) : vars;
  }

  var copy = {},
      p;

  for (p in vars) {
    copy[p] = _parseFuncOrString(vars[p], tween, index, target, targets);
  }

  return copy;
},
    _checkPlugin = function _checkPlugin(property, vars, tween, index, target, targets) {
  var plugin, pt, ptLookup, i;

  if (_plugins[property] && (plugin = new _plugins[property]()).init(target, plugin.rawVars ? vars[property] : _processVars(vars[property], index, target, targets, tween), tween, index, targets) !== false) {
    tween._pt = pt = new PropTween(tween._pt, target, property, 0, 1, plugin.render, plugin, 0, plugin.priority);

    if (tween !== _quickTween) {
      ptLookup = tween._ptLookup[tween._targets.indexOf(target)]; //note: we can't use tween._ptLookup[index] because for staggered tweens, the index from the fullTargets array won't match what it is in each individual tween that spawns from the stagger.

      i = plugin._props.length;

      while (i--) {
        ptLookup[plugin._props[i]] = pt;
      }
    }
  }

  return plugin;
},
    _overwritingTween,
    //store a reference temporarily so we can avoid overwriting itself.
_forceAllPropTweens,
    _initTween = function _initTween(tween, time, tTime) {
  var vars = tween.vars,
      ease = vars.ease,
      startAt = vars.startAt,
      immediateRender = vars.immediateRender,
      lazy = vars.lazy,
      onUpdate = vars.onUpdate,
      runBackwards = vars.runBackwards,
      yoyoEase = vars.yoyoEase,
      keyframes = vars.keyframes,
      autoRevert = vars.autoRevert,
      dur = tween._dur,
      prevStartAt = tween._startAt,
      targets = tween._targets,
      parent = tween.parent,
      fullTargets = parent && parent.data === "nested" ? parent.vars.targets : targets,
      autoOverwrite = tween._overwrite === "auto" && !_suppressOverwrites$1,
      tl = tween.timeline,
      reverseEase = vars.easeReverse || yoyoEase,
      cleanVars,
      i,
      p,
      pt,
      target,
      hasPriority,
      gsData,
      harness,
      plugin,
      ptLookup,
      index,
      harnessVars,
      overwritten;
  tl && (!keyframes || !ease) && (ease = "none");
  tween._ease = _parseEase(ease, _defaults$1.ease);
  tween._rEase = reverseEase && (_parseEase(reverseEase) || tween._ease);
  tween._from = !tl && !!vars.runBackwards; //nested timelines should never run backwards - the backwards-ness is in the child tweens.

  if (tween._from) tween.ratio = 1;

  if (!tl || keyframes && !vars.stagger) {
    //if there's an internal timeline, skip all the parsing because we passed that task down the chain.
    harness = targets[0] ? _getCache(targets[0]).harness : 0;
    harnessVars = harness && vars[harness.prop]; //someone may need to specify CSS-specific values AND non-CSS values, like if the element has an "x" property plus it's a standard DOM element. We allow people to distinguish by wrapping plugin-specific stuff in a css:{} object for example.

    cleanVars = _copyExcluding(vars, _reservedProps);

    if (prevStartAt) {
      prevStartAt._zTime < 0 && prevStartAt.progress(1); // in case it's a lazy startAt that hasn't rendered yet.

      time < 0 && runBackwards && immediateRender && !autoRevert ? prevStartAt.render(-1, true) : prevStartAt.revert(runBackwards && dur ? _revertConfigNoKill : _startAtRevertConfig); // if it's a "startAt" (not "from()" or runBackwards: true), we only need to do a shallow revert (keep transforms cached in CSSPlugin)
      // don't just _removeFromParent(prevStartAt.render(-1, true)) because that'll leave inline styles. We're creating a new _startAt for "startAt" tweens that re-capture things to ensure that if the pre-tween values changed since the tween was created, they're recorded.

      prevStartAt._lazy = 0;
    }

    if (startAt) {
      _removeFromParent(tween._startAt = Tween.set(targets, _setDefaults$1({
        data: "isStart",
        overwrite: false,
        parent: parent,
        immediateRender: true,
        lazy: !prevStartAt && _isNotFalse(lazy),
        startAt: null,
        delay: 0,
        onUpdate: onUpdate && function () {
          return _callback$1(tween, "onUpdate");
        },
        stagger: 0
      }, startAt))); //copy the properties/values into a new object to avoid collisions, like var to = {x:0}, from = {x:500}; timeline.fromTo(e, from, to).fromTo(e, to, from);


      tween._startAt._dp = 0; // don't allow it to get put back into root timeline! Like when revert() is called and totalTime() gets set.

      tween._startAt._sat = tween; // used in globalTime(). _sat stands for _startAtTween

      time < 0 && (_reverting$1 || !immediateRender && !autoRevert) && tween._startAt.revert(_revertConfigNoKill); // rare edge case, like if a render is forced in the negative direction of a non-initted tween.

      if (immediateRender) {
        if (dur && time <= 0 && tTime <= 0) {
          // check tTime here because in the case of a yoyo tween whose playhead gets pushed to the end like tween.progress(1), we should allow it through so that the onComplete gets fired properly.
          time && (tween._zTime = time);
          return; //we skip initialization here so that overwriting doesn't occur until the tween actually begins. Otherwise, if you create several immediateRender:true tweens of the same target/properties to drop into a Timeline, the last one created would overwrite the first ones because they didn't get placed into the timeline yet before the first render occurs and kicks in overwriting.
        }
      }
    } else if (runBackwards && dur) {
      // from() tweens must be handled uniquely: their beginning values must be rendered but we don't want overwriting to occur yet (when time is still 0). Wait until the tween actually begins before doing all the routines like overwriting. At that time, we should render at the END of the tween to ensure that things initialize correctly (remember, from() tweens go backwards)
      if (!prevStartAt) {
        time && (immediateRender = false); //in rare cases (like if a from() tween runs and then is invalidate()-ed), immediateRender could be true but the initial forced-render gets skipped, so there's no need to force the render in this context when the _time is greater than 0

        p = _setDefaults$1({
          overwrite: false,
          data: "isFromStart",
          //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
          lazy: immediateRender && !prevStartAt && _isNotFalse(lazy),
          immediateRender: immediateRender,
          //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
          stagger: 0,
          parent: parent //ensures that nested tweens that had a stagger are handled properly, like gsap.from(".class", {y: gsap.utils.wrap([-100,100]), stagger: 0.5})

        }, cleanVars);
        harnessVars && (p[harness.prop] = harnessVars); // in case someone does something like .from(..., {css:{}})

        _removeFromParent(tween._startAt = Tween.set(targets, p));

        tween._startAt._dp = 0; // don't allow it to get put back into root timeline!

        tween._startAt._sat = tween; // used in globalTime()

        time < 0 && (_reverting$1 ? tween._startAt.revert(_revertConfigNoKill) : tween._startAt.render(-1, true));
        tween._zTime = time;

        if (!immediateRender) {
          _initTween(tween._startAt, _tinyNum, _tinyNum); //ensures that the initial values are recorded

        } else if (!time) {
          return;
        }
      }
    }

    tween._pt = tween._ptCache = 0;
    lazy = dur && _isNotFalse(lazy) || lazy && !dur;

    for (i = 0; i < targets.length; i++) {
      target = targets[i];
      gsData = target._gsap || _harness(targets)[i]._gsap;
      tween._ptLookup[i] = ptLookup = {};
      _lazyLookup[gsData.id] && _lazyTweens.length && _lazyRender(); //if other tweens of the same target have recently initted but haven't rendered yet, we've got to force the render so that the starting values are correct (imagine populating a timeline with a bunch of sequential tweens and then jumping to the end)

      index = fullTargets === targets ? i : fullTargets.indexOf(target);

      if (harness && (plugin = new harness()).init(target, harnessVars || cleanVars, tween, index, fullTargets) !== false) {
        tween._pt = pt = new PropTween(tween._pt, target, plugin.name, 0, 1, plugin.render, plugin, 0, plugin.priority);

        plugin._props.forEach(function (name) {
          ptLookup[name] = pt;
        });

        plugin.priority && (hasPriority = 1);
      }

      if (!harness || harnessVars) {
        for (p in cleanVars) {
          if (_plugins[p] && (plugin = _checkPlugin(p, cleanVars, tween, index, target, fullTargets))) {
            plugin.priority && (hasPriority = 1);
          } else {
            ptLookup[p] = pt = _addPropTween.call(tween, target, p, "get", cleanVars[p], index, fullTargets, 0, vars.stringFilter);
          }
        }
      }

      tween._op && tween._op[i] && tween.kill(target, tween._op[i]);

      if (autoOverwrite && tween._pt) {
        _overwritingTween = tween;

        _globalTimeline.killTweensOf(target, ptLookup, tween.globalTime(time)); // make sure the overwriting doesn't overwrite THIS tween!!!


        overwritten = !tween.parent;
        _overwritingTween = 0;
      }

      tween._pt && lazy && (_lazyLookup[gsData.id] = 1);
    }

    hasPriority && _sortPropTweensByPriority(tween);
    tween._onInit && tween._onInit(tween); //plugins like RoundProps must wait until ALL of the PropTweens are instantiated. In the plugin's init() function, it sets the _onInit on the tween instance. May not be pretty/intuitive, but it's fast and keeps file size down.
  }

  tween._onUpdate = onUpdate;
  tween._initted = (!tween._op || tween._pt) && !overwritten; // if overwrittenProps resulted in the entire tween being killed, do NOT flag it as initted or else it may render for one tick.

  keyframes && time <= 0 && tl.render(_bigNum$1, true, true); // if there's a 0% keyframe, it'll render in the "before" state for any staggered/delayed animations thus when the following tween initializes, it'll use the "before" state instead of the "after" state as the initial values.
},
    _updatePropTweens = function _updatePropTweens(tween, property, value, start, startIsRelative, ratio, time, skipRecursion) {
  var ptCache = (tween._pt && tween._ptCache || (tween._ptCache = {}))[property],
      pt,
      rootPT,
      lookup,
      i;

  if (!ptCache) {
    ptCache = tween._ptCache[property] = [];
    lookup = tween._ptLookup;
    i = tween._targets.length;

    while (i--) {
      pt = lookup[i][property];

      if (pt && pt.d && pt.d._pt) {
        // it's a plugin, so find the nested PropTween
        pt = pt.d._pt;

        while (pt && pt.p !== property && pt.fp !== property) {
          // "fp" is functionParam for things like setting CSS variables which require .setProperty("--var-name", value)
          pt = pt._next;
        }
      }

      if (!pt) {
        // there is no PropTween associated with that property, so we must FORCE one to be created and ditch out of this
        // if the tween has other properties that already rendered at new positions, we'd normally have to rewind to put them back like tween.render(0, true) before forcing an _initTween(), but that can create another edge case like tweening a timeline's progress would trigger onUpdates to fire which could move other things around. It's better to just inform users that .resetTo() should ONLY be used for tweens that already have that property. For example, you can't gsap.to(...{ y: 0 }) and then tween.restTo("x", 200) for example.
        _forceAllPropTweens = 1; // otherwise, when we _addPropTween() and it finds no change between the start and end values, it skips creating a PropTween (for efficiency...why tween when there's no difference?) but in this case we NEED that PropTween created so we can edit it.

        tween.vars[property] = "+=0";

        _initTween(tween, time);

        _forceAllPropTweens = 0;
        return skipRecursion ? _warn(property + " not eligible for reset. Try splitting into individual properties") : 1; // if someone tries to do a quickTo() on a special property like borderRadius which must get split into 4 different properties, that's not eligible for .resetTo().
      }

      ptCache.push(pt);
    }
  }

  i = ptCache.length;

  while (i--) {
    rootPT = ptCache[i];
    pt = rootPT._pt || rootPT; // complex values may have nested PropTweens. We only accommodate the FIRST value.

    pt.s = (start || start === 0) && !startIsRelative ? start : pt.s + (start || 0) + ratio * pt.c;
    pt.c = value - pt.s;
    rootPT.e && (rootPT.e = _round$1(value) + getUnit(rootPT.e)); // mainly for CSSPlugin (end value)

    rootPT.b && (rootPT.b = pt.s + getUnit(rootPT.b)); // (beginning value)
  }
},
    _addAliasesToVars = function _addAliasesToVars(targets, vars) {
  var harness = targets[0] ? _getCache(targets[0]).harness : 0,
      propertyAliases = harness && harness.aliases,
      copy,
      p,
      i,
      aliases;

  if (!propertyAliases) {
    return vars;
  }

  copy = _merge({}, vars);

  for (p in propertyAliases) {
    if (p in copy) {
      aliases = propertyAliases[p].split(",");
      i = aliases.length;

      while (i--) {
        copy[aliases[i]] = copy[p];
      }
    }
  }

  return copy;
},
    // parses multiple formats, like {"0%": {x: 100}, {"50%": {x: -20}} and { x: {"0%": 100, "50%": -20} }, and an "ease" can be set on any object. We populate an "allProps" object with an Array for each property, like {x: [{}, {}], y:[{}, {}]} with data for each property tween. The objects have a "t" (time), "v", (value), and "e" (ease) property. This allows us to piece together a timeline later.
_parseKeyframe = function _parseKeyframe(prop, obj, allProps, easeEach) {
  var ease = obj.ease || easeEach || "power1.inOut",
      p,
      a;

  if (_isArray(obj)) {
    a = allProps[prop] || (allProps[prop] = []); // t = time (out of 100), v = value, e = ease

    obj.forEach(function (value, i) {
      return a.push({
        t: i / (obj.length - 1) * 100,
        v: value,
        e: ease
      });
    });
  } else {
    for (p in obj) {
      a = allProps[p] || (allProps[p] = []);
      p === "ease" || a.push({
        t: parseFloat(prop),
        v: obj[p],
        e: ease
      });
    }
  }
},
    _parseFuncOrString = function _parseFuncOrString(value, tween, i, target, targets) {
  return _isFunction$1(value) ? value.call(tween, i, target, targets) : _isString$1(value) && ~value.indexOf("random(") ? _replaceRandom(value) : value;
},
    _staggerTweenProps = _callbackNames + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",
    _staggerPropsToSkip = {};

_forEachName(_staggerTweenProps + ",id,stagger,delay,duration,paused,scrollTrigger", function (name) {
  return _staggerPropsToSkip[name] = 1;
});
/*
 * --------------------------------------------------------------------------------------
 * TWEEN
 * --------------------------------------------------------------------------------------
 */


var Tween = /*#__PURE__*/function (_Animation2) {
  _inheritsLoose(Tween, _Animation2);

  function Tween(targets, vars, position, skipInherit) {
    var _this3;

    if (typeof vars === "number") {
      position.duration = vars;
      vars = position;
      position = null;
    }

    _this3 = _Animation2.call(this, skipInherit ? vars : _inheritDefaults(vars)) || this;
    var _this3$vars = _this3.vars,
        duration = _this3$vars.duration,
        delay = _this3$vars.delay,
        immediateRender = _this3$vars.immediateRender,
        stagger = _this3$vars.stagger,
        overwrite = _this3$vars.overwrite,
        keyframes = _this3$vars.keyframes,
        defaults = _this3$vars.defaults,
        scrollTrigger = _this3$vars.scrollTrigger,
        parent = vars.parent || _globalTimeline,
        parsedTargets = (_isArray(targets) || _isTypedArray(targets) ? _isNumber$1(targets[0]) : "length" in vars) ? [targets] : toArray(targets),
        tl,
        i,
        copy,
        l,
        p,
        curTarget,
        staggerFunc,
        staggerVarsToMerge;
    _this3._targets = parsedTargets.length ? _harness(parsedTargets) : _warn("GSAP target " + targets + " not found. https://gsap.com", !_config.nullTargetWarn) || [];
    _this3._ptLookup = []; //PropTween lookup. An array containing an object for each target, having keys for each tweening property

    _this3._overwrite = overwrite;

    if (keyframes || stagger || _isFuncOrString(duration) || _isFuncOrString(delay)) {
      vars = _this3.vars;
      var easeReverse = vars.easeReverse || vars.yoyoEase;
      tl = _this3.timeline = new Timeline({
        data: "nested",
        defaults: defaults || {},
        targets: parent && parent.data === "nested" ? parent.vars.targets : parsedTargets
      }); // we need to store the targets because for staggers and keyframes, we end up creating an individual tween for each but function-based values need to know the index and the whole Array of targets.

      tl.kill();
      tl.parent = tl._dp = _assertThisInitialized(_this3);
      tl._start = 0;

      if (stagger || _isFuncOrString(duration) || _isFuncOrString(delay)) {
        l = parsedTargets.length;
        staggerFunc = stagger && distribute(stagger);

        if (_isObject$1(stagger)) {
          //users can pass in callbacks like onStart/onComplete in the stagger object. These should fire with each individual tween.
          for (p in stagger) {
            if (~_staggerTweenProps.indexOf(p)) {
              staggerVarsToMerge || (staggerVarsToMerge = {});
              staggerVarsToMerge[p] = stagger[p];
            }
          }
        }

        for (i = 0; i < l; i++) {
          copy = _copyExcluding(vars, _staggerPropsToSkip);
          copy.stagger = 0;
          easeReverse && (copy.easeReverse = easeReverse);
          staggerVarsToMerge && _merge(copy, staggerVarsToMerge);
          curTarget = parsedTargets[i]; //don't just copy duration or delay because if they're a string or function, we'd end up in an infinite loop because _isFuncOrString() would evaluate as true in the child tweens, entering this loop, etc. So we parse the value straight from vars and default to 0.

          copy.duration = +_parseFuncOrString(duration, _assertThisInitialized(_this3), i, curTarget, parsedTargets);
          copy.delay = (+_parseFuncOrString(delay, _assertThisInitialized(_this3), i, curTarget, parsedTargets) || 0) - _this3._delay;

          if (!stagger && l === 1 && copy.delay) {
            // if someone does delay:"random(1, 5)", repeat:-1, for example, the delay shouldn't be inside the repeat.
            _this3._delay = delay = copy.delay;
            _this3._start += delay;
            copy.delay = 0;
          }

          tl.to(curTarget, copy, staggerFunc ? staggerFunc(i, curTarget, parsedTargets) : 0);
          tl._ease = _easeMap.none;
        }

        tl.duration() ? duration = delay = 0 : _this3.timeline = 0; // if the timeline's duration is 0, we don't need a timeline internally!
      } else if (keyframes) {
        _inheritDefaults(_setDefaults$1(tl.vars.defaults, {
          ease: "none"
        }));

        tl._ease = _parseEase(keyframes.ease || vars.ease || "none");
        var time = 0,
            a,
            kf,
            v;

        if (_isArray(keyframes)) {
          keyframes.forEach(function (frame) {
            return tl.to(parsedTargets, frame, ">");
          });
          tl.duration(); // to ensure tl._dur is cached because we tap into it for performance purposes in the render() method.
        } else {
          copy = {};

          for (p in keyframes) {
            p === "ease" || p === "easeEach" || _parseKeyframe(p, keyframes[p], copy, keyframes.easeEach);
          }

          for (p in copy) {
            a = copy[p].sort(function (a, b) {
              return a.t - b.t;
            });
            time = 0;

            for (i = 0; i < a.length; i++) {
              kf = a[i];
              v = {
                ease: kf.e,
                duration: (kf.t - (i ? a[i - 1].t : 0)) / 100 * duration
              };
              v[p] = kf.v;
              tl.to(parsedTargets, v, time);
              time += v.duration;
            }
          }

          tl.duration() < duration && tl.to({}, {
            duration: duration - tl.duration()
          }); // in case keyframes didn't go to 100%
        }
      }

      duration || _this3.duration(duration = tl.duration());
    } else {
      _this3.timeline = 0; //speed optimization, faster lookups (no going up the prototype chain)
    }

    if (overwrite === true && !_suppressOverwrites$1) {
      _overwritingTween = _assertThisInitialized(_this3);

      _globalTimeline.killTweensOf(parsedTargets);

      _overwritingTween = 0;
    }

    _addToTimeline(parent, _assertThisInitialized(_this3), position);

    vars.reversed && _this3.reverse();
    vars.paused && _this3.paused(true);

    if (immediateRender || !duration && !keyframes && _this3._start === _roundPrecise(parent._time) && _isNotFalse(immediateRender) && _hasNoPausedAncestors(_assertThisInitialized(_this3)) && parent.data !== "nested") {
      _this3._tTime = -_tinyNum; //forces a render without having to set the render() "force" parameter to true because we want to allow lazying by default (using the "force" parameter always forces an immediate full render)

      _this3.render(Math.max(0, -delay) || 0); //in case delay is negative

    }

    scrollTrigger && _scrollTrigger(_assertThisInitialized(_this3), scrollTrigger);
    return _this3;
  }

  var _proto3 = Tween.prototype;

  _proto3.render = function render(totalTime, suppressEvents, force) {
    var prevTime = this._time,
        tDur = this._tDur,
        dur = this._dur,
        isNegative = totalTime < 0,
        tTime = totalTime > tDur - _tinyNum && !isNegative ? tDur : totalTime < _tinyNum ? 0 : totalTime,
        time,
        pt,
        iteration,
        cycleDuration,
        prevIteration,
        isYoyo,
        ratio,
        timeline;

    if (!dur) {
      _renderZeroDurationTween(this, totalTime, suppressEvents, force);
    } else if (tTime !== this._tTime || !totalTime || force || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== isNegative || this._lazy) {
      // this senses if we're crossing over the start time, in which case we must record _zTime and force the render, but we do it in this lengthy conditional way for performance reasons (usually we can skip the calculations): this._initted && (this._zTime < 0) !== (totalTime < 0)
      time = tTime;
      timeline = this.timeline;

      if (this._repeat) {
        //adjust the time for repeats and yoyos
        cycleDuration = dur + this._rDelay;

        if (this._repeat < -1 && isNegative) {
          return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
        }

        time = _roundPrecise(tTime % cycleDuration); //round to avoid floating point errors. (4 % 0.8 should be 0 but some browsers report it as 0.79999999!)

        if (tTime === tDur) {
          // the tDur === tTime is for edge cases where there's a lengthy decimal on the duration and it may reach the very end but the time is rendered as not-quite-there (remember, tDur is rounded to 4 decimals whereas dur isn't)
          iteration = this._repeat;
          time = dur;
        } else {
          prevIteration = _roundPrecise(tTime / cycleDuration); // full decimal version of iterations, not the previous iteration (we're reusing prevIteration variable for efficiency)

          iteration = ~~prevIteration;

          if (iteration && iteration === prevIteration) {
            time = dur;
            iteration--;
          } else if (time > dur) {
            time = dur;
          }
        }

        isYoyo = this._yoyo && iteration & 1;
        if (isYoyo) time = dur - time;
        prevIteration = _animationCycle(this._tTime, cycleDuration);

        if (time === prevTime && !force && this._initted && iteration === prevIteration) {
          //could be during the repeatDelay part. No need to render and fire callbacks.
          this._tTime = tTime;
          return this;
        }

        if (iteration !== prevIteration) {
          //repeatRefresh functionality
          if (this.vars.repeatRefresh && !isYoyo && !this._lock && time !== cycleDuration && this._initted) {
            // this._time will === cycleDuration when we render at EXACTLY the end of an iteration. Without this condition, it'd often do the repeatRefresh render TWICE (again on the very next tick).
            this._lock = force = 1; //force, otherwise if lazy is true, the _attemptInitTween() will return and we'll jump out and get caught bouncing on each tick.

            this.render(_roundPrecise(cycleDuration * iteration), true).invalidate()._lock = 0;
          }
        }
      }

      if (!this._initted) {
        if (_attemptInitTween(this, isNegative ? totalTime : time, force, suppressEvents, tTime)) {
          this._tTime = 0; // in constructor if immediateRender is true, we set _tTime to -_tinyNum to have the playhead cross the starting point but we can't leave _tTime as a negative number.

          return this;
        }

        if (prevTime !== this._time && !(force && this.vars.repeatRefresh && iteration !== prevIteration)) {
          // rare edge case - during initialization, an onUpdate in the _startAt (.fromTo()) might force this tween to render at a different spot in which case we should ditch this render() call so that it doesn't revert the values. But we also don't want to dump if we're doing a repeatRefresh render!
          return this;
        }

        if (dur !== this._dur) {
          // while initting, a plugin like InertiaPlugin might alter the duration, so rerun from the start to ensure everything renders as it should.
          return this.render(totalTime, suppressEvents, force);
        }
      }

      if (this._rEase) {
        var inv = time < prevTime;

        if (inv !== this._inv) {
          var segDur = inv ? prevTime : dur - prevTime;
          this._inv = inv;
          if (this._from) this.ratio = 1 - this.ratio;
          this._invRatio = this.ratio;
          this._invTime = prevTime;
          this._invRecip = segDur ? (inv ? -1 : 1) / segDur : 0;
          this._invScale = inv ? -this.ratio : 1 - this.ratio;
          this._invEase = inv ? this._rEase : this._ease;
        }

        this.ratio = ratio = this._invRatio + this._invScale * this._invEase((time - this._invTime) * this._invRecip);
      } else {
        this.ratio = ratio = this._ease(time / dur);
      }

      if (this._from) this.ratio = ratio = 1 - ratio;
      this._tTime = tTime;
      this._time = time;

      if (!this._act && this._ts) {
        this._act = 1; //as long as it's not paused, force it to be active so that if the user renders independent of the parent timeline, it'll be forced to re-render on the next tick.

        this._lazy = 0;
      }

      if (!prevTime && tTime && !suppressEvents && !prevIteration) {
        _callback$1(this, "onStart");

        if (this._tTime !== tTime) {
          // in case the onStart triggered a render at a different spot, eject. Like if someone did animation.pause(0.5) or something inside the onStart.
          return this;
        }
      }

      pt = this._pt;

      while (pt) {
        pt.r(ratio, pt.d);
        pt = pt._next;
      }

      timeline && timeline.render(totalTime < 0 ? totalTime : timeline._dur * timeline._ease(time / this._dur), suppressEvents, force) || this._startAt && (this._zTime = totalTime);

      if (this._onUpdate && !suppressEvents) {
        isNegative && _rewindStartAt(this, totalTime, suppressEvents, force); //note: for performance reasons, we tuck this conditional logic inside less traveled areas (most tweens don't have an onUpdate). We'd just have it at the end before the onComplete, but the values should be updated before any onUpdate is called, so we ALSO put it here and then if it's not called, we do so later near the onComplete.

        _callback$1(this, "onUpdate");
      }

      this._repeat && iteration !== prevIteration && this.vars.onRepeat && !suppressEvents && this.parent && _callback$1(this, "onRepeat");

      if ((tTime === this._tDur || !tTime) && this._tTime === tTime) {
        isNegative && !this._onUpdate && _rewindStartAt(this, totalTime, true, true);
        (totalTime || !dur) && (tTime === this._tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1); // don't remove if we're rendering at exactly a time of 0, as there could be autoRevert values that should get set on the next tick (if the playhead goes backward beyond the startTime, negative totalTime). Don't remove if the timeline is reversed and the playhead isn't at 0, otherwise tl.progress(1).reverse() won't work. Only remove if the playhead is at the end and timeScale is positive, or if the playhead is at 0 and the timeScale is negative.

        if (!suppressEvents && !(isNegative && !prevTime) && (tTime || prevTime || isYoyo)) {
          // if prevTime and tTime are zero, we shouldn't fire the onReverseComplete. This could happen if you gsap.to(... {paused:true}).play();
          _callback$1(this, tTime === tDur ? "onComplete" : "onReverseComplete", true);

          this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
        }
      }
    }

    return this;
  };

  _proto3.targets = function targets() {
    return this._targets;
  };

  _proto3.invalidate = function invalidate(soft) {
    // "soft" gives us a way to clear out everything EXCEPT the recorded pre-"from" portion of from() tweens. Otherwise, for example, if you tween.progress(1).render(0, true true).invalidate(), the "from" values would persist and then on the next render, the from() tweens would initialize and the current value would match the "from" values, thus animate from the same value to the same value (no animation). We tap into this in ScrollTrigger's refresh() where we must push a tween to completion and then back again but honor its init state in case the tween is dependent on another tween further up on the page.
    (!soft || !this.vars.runBackwards) && (this._startAt = 0);
    this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0;
    this._ptLookup = [];
    this.timeline && this.timeline.invalidate(soft);
    return _Animation2.prototype.invalidate.call(this, soft);
  };

  _proto3.resetTo = function resetTo(property, value, start, startIsRelative, skipRecursion) {
    _tickerActive || _ticker.wake();
    this._ts || this.play();
    var time = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
        ratio;
    this._initted || _initTween(this, time);
    ratio = this._ease(time / this._dur); // don't just get tween.ratio because it may not have rendered yet.
    // possible future addition to allow an object with multiple values to update, like tween.resetTo({x: 100, y: 200}); At this point, it doesn't seem worth the added kb given the fact that most users will likely opt for the convenient gsap.quickTo() way of interacting with this method.
    // if (_isObject(property)) { // performance optimization
    // 	for (p in property) {
    // 		if (_updatePropTweens(this, p, property[p], value ? value[p] : null, start, ratio, time)) {
    // 			return this.resetTo(property, value, start, startIsRelative); // if a PropTween wasn't found for the property, it'll get forced with a re-initialization so we need to jump out and start over again.
    // 		}
    // 	}
    // } else {

    if (_updatePropTweens(this, property, value, start, startIsRelative, ratio, time, skipRecursion)) {
      return this.resetTo(property, value, start, startIsRelative, 1); // if a PropTween wasn't found for the property, it'll get forced with a re-initialization so we need to jump out and start over again.
    } //}


    _alignPlayhead(this, 0);

    this.parent || _addLinkedListItem(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0);
    return this.render(0);
  };

  _proto3.kill = function kill(targets, vars) {
    if (vars === void 0) {
      vars = "all";
    }

    if (!targets && (!vars || vars === "all")) {
      this._lazy = this._pt = 0;
      this.parent ? _interrupt(this) : this.scrollTrigger && this.scrollTrigger.kill(!!_reverting$1);
      return this;
    }

    if (this.timeline) {
      var tDur = this.timeline.totalDuration();
      this.timeline.killTweensOf(targets, vars, _overwritingTween && _overwritingTween.vars.overwrite !== true)._first || _interrupt(this); // if nothing is left tweening, interrupt.

      this.parent && tDur !== this.timeline.totalDuration() && _setDuration(this, this._dur * this.timeline._tDur / tDur, 0, 1); // if a nested tween is killed that changes the duration, it should affect this tween's duration. We must use the ratio, though, because sometimes the internal timeline is stretched like for keyframes where they don't all add up to whatever the parent tween's duration was set to.

      return this;
    }

    var parsedTargets = this._targets,
        killingTargets = targets ? toArray(targets) : parsedTargets,
        propTweenLookup = this._ptLookup,
        firstPT = this._pt,
        overwrittenProps,
        curLookup,
        curOverwriteProps,
        props,
        p,
        pt,
        i;

    if ((!vars || vars === "all") && _arraysMatch(parsedTargets, killingTargets)) {
      vars === "all" && (this._pt = 0);
      return _interrupt(this);
    }

    overwrittenProps = this._op = this._op || [];

    if (vars !== "all") {
      //so people can pass in a comma-delimited list of property names
      if (_isString$1(vars)) {
        p = {};

        _forEachName(vars, function (name) {
          return p[name] = 1;
        });

        vars = p;
      }

      vars = _addAliasesToVars(parsedTargets, vars);
    }

    i = parsedTargets.length;

    while (i--) {
      if (~killingTargets.indexOf(parsedTargets[i])) {
        curLookup = propTweenLookup[i];

        if (vars === "all") {
          overwrittenProps[i] = vars;
          props = curLookup;
          curOverwriteProps = {};
        } else {
          curOverwriteProps = overwrittenProps[i] = overwrittenProps[i] || {};
          props = vars;
        }

        for (p in props) {
          pt = curLookup && curLookup[p];

          if (pt) {
            if (!("kill" in pt.d) || pt.d.kill(p) === true) {
              _removeLinkedListItem(this, pt, "_pt");
            }

            delete curLookup[p];
          }

          if (curOverwriteProps !== "all") {
            curOverwriteProps[p] = 1;
          }
        }
      }
    }

    this._initted && !this._pt && firstPT && _interrupt(this); //if all tweening properties are killed, kill the tween. Without this line, if there's a tween with multiple targets and then you killTweensOf() each target individually, the tween would technically still remain active and fire its onComplete even though there aren't any more properties tweening.

    return this;
  };

  Tween.to = function to(targets, vars) {
    return new Tween(targets, vars, arguments[2]);
  };

  Tween.from = function from(targets, vars) {
    return _createTweenType(1, arguments);
  };

  Tween.delayedCall = function delayedCall(delay, callback, params, scope) {
    return new Tween(callback, 0, {
      immediateRender: false,
      lazy: false,
      overwrite: false,
      delay: delay,
      onComplete: callback,
      onReverseComplete: callback,
      onCompleteParams: params,
      onReverseCompleteParams: params,
      callbackScope: scope
    }); // we must use onReverseComplete too for things like timeline.add(() => {...}) which should be triggered in BOTH directions (forward and reverse)
  };

  Tween.fromTo = function fromTo(targets, fromVars, toVars) {
    return _createTweenType(2, arguments);
  };

  Tween.set = function set(targets, vars) {
    vars.duration = 0;
    vars.repeatDelay || (vars.repeat = 0);
    return new Tween(targets, vars);
  };

  Tween.killTweensOf = function killTweensOf(targets, props, onlyActive) {
    return _globalTimeline.killTweensOf(targets, props, onlyActive);
  };

  return Tween;
}(Animation);

_setDefaults$1(Tween.prototype, {
  _targets: [],
  _lazy: 0,
  _startAt: 0,
  _op: 0,
  _onInit: 0
}); //add the pertinent timeline methods to Tween instances so that users can chain conveniently and create a timeline automatically. (removed due to concerns that it'd ultimately add to more confusion especially for beginners)
// _forEachName("to,from,fromTo,set,call,add,addLabel,addPause", name => {
// 	Tween.prototype[name] = function() {
// 		let tl = new Timeline();
// 		return _addToTimeline(tl, this)[name].apply(tl, toArray(arguments));
// 	}
// });
//for backward compatibility. Leverage the timeline calls.


_forEachName("staggerTo,staggerFrom,staggerFromTo", function (name) {
  Tween[name] = function () {
    var tl = new Timeline(),
        params = _slice.call(arguments, 0);

    params.splice(name === "staggerFromTo" ? 5 : 4, 0, 0);
    return tl[name].apply(tl, params);
  };
});
/*
 * --------------------------------------------------------------------------------------
 * PROPTWEEN
 * --------------------------------------------------------------------------------------
 */


var _setterPlain = function _setterPlain(target, property, value) {
  return target[property] = value;
},
    _setterFunc = function _setterFunc(target, property, value) {
  return target[property](value);
},
    _setterFuncWithParam = function _setterFuncWithParam(target, property, value, data) {
  return target[property](data.fp, value);
},
    _setterAttribute = function _setterAttribute(target, property, value) {
  return target.setAttribute(property, value);
},
    _getSetter = function _getSetter(target, property) {
  return _isFunction$1(target[property]) ? _setterFunc : _isUndefined(target[property]) && target.setAttribute ? _setterAttribute : _setterPlain;
},
    _renderPlain = function _renderPlain(ratio, data) {
  return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 1000000) / 1000000, data);
},
    _renderBoolean = function _renderBoolean(ratio, data) {
  return data.set(data.t, data.p, !!(data.s + data.c * ratio), data);
},
    _renderComplexString = function _renderComplexString(ratio, data) {
  var pt = data._pt,
      s = "";

  if (!ratio && data.b) {
    //b = beginning string
    s = data.b;
  } else if (ratio === 1 && data.e) {
    //e = ending string
    s = data.e;
  } else {
    while (pt) {
      s = pt.p + (pt.m ? pt.m(pt.s + pt.c * ratio) : Math.round((pt.s + pt.c * ratio) * 10000) / 10000) + s; //we use the "p" property for the text inbetween (like a suffix). And in the context of a complex string, the modifier (m) is typically just Math.round(), like for RGB colors.

      pt = pt._next;
    }

    s += data.c; //we use the "c" of the PropTween to store the final chunk of non-numeric text.
  }

  data.set(data.t, data.p, s, data);
},
    _renderPropTweens = function _renderPropTweens(ratio, data) {
  var pt = data._pt;

  while (pt) {
    pt.r(ratio, pt.d);
    pt = pt._next;
  }
},
    _addPluginModifier = function _addPluginModifier(modifier, tween, target, property) {
  var pt = this._pt,
      next;

  while (pt) {
    next = pt._next;
    pt.p === property && pt.modifier(modifier, tween, target);
    pt = next;
  }
},
    _killPropTweensOf = function _killPropTweensOf(property) {
  var pt = this._pt,
      hasNonDependentRemaining,
      next;

  while (pt) {
    next = pt._next;

    if (pt.p === property && !pt.op || pt.op === property) {
      _removeLinkedListItem(this, pt, "_pt");
    } else if (!pt.dep) {
      hasNonDependentRemaining = 1;
    }

    pt = next;
  }

  return !hasNonDependentRemaining;
},
    _setterWithModifier = function _setterWithModifier(target, property, value, data) {
  data.mSet(target, property, data.m.call(data.tween, value, data.mt), data);
},
    _sortPropTweensByPriority = function _sortPropTweensByPriority(parent) {
  var pt = parent._pt,
      next,
      pt2,
      first,
      last; //sorts the PropTween linked list in order of priority because some plugins need to do their work after ALL of the PropTweens were created (like RoundPropsPlugin and ModifiersPlugin)

  while (pt) {
    next = pt._next;
    pt2 = first;

    while (pt2 && pt2.pr > pt.pr) {
      pt2 = pt2._next;
    }

    if (pt._prev = pt2 ? pt2._prev : last) {
      pt._prev._next = pt;
    } else {
      first = pt;
    }

    if (pt._next = pt2) {
      pt2._prev = pt;
    } else {
      last = pt;
    }

    pt = next;
  }

  parent._pt = first;
}; //PropTween key: t = target, p = prop, r = renderer, d = data, s = start, c = change, op = overwriteProperty (ONLY populated when it's different than p), pr = priority, _next/_prev for the linked list siblings, set = setter, m = modifier, mSet = modifierSetter (the original setter, before a modifier was added)


var PropTween = /*#__PURE__*/function () {
  function PropTween(next, target, prop, start, change, renderer, data, setter, priority) {
    this.t = target;
    this.s = start;
    this.c = change;
    this.p = prop;
    this.r = renderer || _renderPlain;
    this.d = data || this;
    this.set = setter || _setterPlain;
    this.pr = priority || 0;
    this._next = next;

    if (next) {
      next._prev = this;
    }
  }

  var _proto4 = PropTween.prototype;

  _proto4.modifier = function modifier(func, tween, target) {
    this.mSet = this.mSet || this.set; //in case it was already set (a PropTween can only have one modifier)

    this.set = _setterWithModifier;
    this.m = func;
    this.mt = target; //modifier target

    this.tween = tween;
  };

  return PropTween;
}(); //Initialization tasks

_forEachName(_callbackNames + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse", function (name) {
  return _reservedProps[name] = 1;
});

_globals.TweenMax = _globals.TweenLite = Tween;
_globals.TimelineLite = _globals.TimelineMax = Timeline;
_globalTimeline = new Timeline({
  sortChildren: false,
  defaults: _defaults$1,
  autoRemoveChildren: true,
  id: "root",
  smoothChildTiming: true
});
_config.stringFilter = _colorStringFilter;

var _media = [],
    _listeners$1 = {},
    _emptyArray$1 = [],
    _lastMediaTime = 0,
    _contextID = 0,
    _dispatch$1 = function _dispatch(type) {
  return (_listeners$1[type] || _emptyArray$1).map(function (f) {
    return f();
  });
},
    _onMediaChange = function _onMediaChange() {
  var time = Date.now(),
      matches = [];

  if (time - _lastMediaTime > 2) {
    _dispatch$1("matchMediaInit");

    _media.forEach(function (c) {
      var queries = c.queries,
          conditions = c.conditions,
          match,
          p,
          anyMatch,
          toggled;

      for (p in queries) {
        match = _win$3.matchMedia(queries[p]).matches; // Firefox doesn't update the "matches" property of the MediaQueryList object correctly - it only does so as it calls its change handler - so we must re-create a media query here to ensure it's accurate.

        match && (anyMatch = 1);

        if (match !== conditions[p]) {
          conditions[p] = match;
          toggled = 1;
        }
      }

      if (toggled) {
        c.revert();
        anyMatch && matches.push(c);
      }
    });

    _dispatch$1("matchMediaRevert");

    matches.forEach(function (c) {
      return c.onMatch(c, function (func) {
        return c.add(null, func);
      });
    });
    _lastMediaTime = time;

    _dispatch$1("matchMedia");
  }
};

var Context = /*#__PURE__*/function () {
  function Context(func, scope) {
    this.selector = scope && selector(scope);
    this.data = [];
    this._r = []; // returned/cleanup functions

    this.isReverted = false;
    this.id = _contextID++; // to work around issues that frameworks like Vue cause by making things into Proxies which make it impossible to do something like _media.indexOf(this) because "this" would no longer refer to the Context instance itself - it'd refer to a Proxy! We needed a way to identify the context uniquely

    func && this.add(func);
  }

  var _proto5 = Context.prototype;

  _proto5.add = function add(name, func, scope) {
    // possible future addition if we need the ability to add() an animation to a context and for whatever reason cannot create that animation inside of a context.add(() => {...}) function.
    // if (name && _isFunction(name.revert)) {
    // 	this.data.push(name);
    // 	return (name._ctx = this);
    // }
    if (_isFunction$1(name)) {
      scope = func;
      func = name;
      name = _isFunction$1;
    }

    var self = this,
        f = function f() {
      var prev = _context$2,
          prevSelector = self.selector,
          result;
      prev && prev !== self && prev.data.push(self);
      scope && (self.selector = selector(scope));
      _context$2 = self;
      result = func.apply(self, arguments);
      _isFunction$1(result) && self._r.push(result);
      _context$2 = prev;
      self.selector = prevSelector;
      self.isReverted = false;
      return result;
    };

    self.last = f;
    return name === _isFunction$1 ? f(self, function (func) {
      return self.add(null, func);
    }) : name ? self[name] = f : f;
  };

  _proto5.ignore = function ignore(func) {
    var prev = _context$2;
    _context$2 = null;
    func(this);
    _context$2 = prev;
  };

  _proto5.getTweens = function getTweens() {
    var a = [];
    this.data.forEach(function (e) {
      return e instanceof Context ? a.push.apply(a, e.getTweens()) : e instanceof Tween && !(e.parent && e.parent.data === "nested") && a.push(e);
    });
    return a;
  };

  _proto5.clear = function clear() {
    this._r.length = this.data.length = 0;
  };

  _proto5.kill = function kill(revert, matchMedia) {
    var _this4 = this;

    if (revert) {
      (function () {
        var tweens = _this4.getTweens(),
            i = _this4.data.length,
            t;

        while (i--) {
          // Flip plugin tweens are very different in that they should actually be pushed to their end. The plugin replaces the timeline's .revert() method to do exactly that. But we also need to remove any of those nested tweens inside the flip timeline so that they don't get individually reverted.
          t = _this4.data[i];

          if (t.data === "isFlip") {
            t.revert();
            t.getChildren(true, true, false).forEach(function (tween) {
              return tweens.splice(tweens.indexOf(tween), 1);
            });
          }
        } // save as an object so that we can cache the globalTime for each tween to optimize performance during the sort


        tweens.map(function (t) {
          return {
            g: t._dur || t._delay || t._sat && !t._sat.vars.immediateRender ? t.globalTime(0) : -Infinity,
            t: t
          };
        }).sort(function (a, b) {
          return b.g - a.g || -Infinity;
        }).forEach(function (o) {
          return o.t.revert(revert);
        }); // note: all of the _startAt tweens should be reverted in reverse order that they were created, and they'll all have the same globalTime (-1) so the " || -1" in the sort keeps the order properly.

        i = _this4.data.length;

        while (i--) {
          // make sure we loop backwards so that, for example, SplitTexts that were created later on the same element get reverted first
          t = _this4.data[i];

          if (t instanceof Timeline) {
            if (t.data !== "nested") {
              t.scrollTrigger && t.scrollTrigger.revert();
              t.kill(); // don't revert() the timeline because that's duplicating efforts since we already reverted all the tweens
            }
          } else {
            !(t instanceof Tween) && t.revert && t.revert(revert);
          }
        }

        _this4._r.forEach(function (f) {
          return f(revert, _this4);
        });

        _this4.isReverted = true;
      })();
    } else {
      this.data.forEach(function (e) {
        return e.kill && e.kill();
      });
    }

    this.clear();

    if (matchMedia) {
      var i = _media.length;

      while (i--) {
        // previously, we checked _media.indexOf(this), but some frameworks like Vue enforce Proxy objects that make it impossible to get the proper result that way, so we must use a unique ID number instead.
        _media[i].id === this.id && _media.splice(i, 1);
      }
    }
  } // killWithCleanup() {
  // 	this.kill();
  // 	this._r.forEach(f => f(false, this));
  // }
  ;

  _proto5.revert = function revert(config) {
    this.kill(config || {});
  };

  return Context;
}();

var MatchMedia = /*#__PURE__*/function () {
  function MatchMedia(scope) {
    this.contexts = [];
    this.scope = scope;
    _context$2 && _context$2.data.push(this);
  }

  var _proto6 = MatchMedia.prototype;

  _proto6.add = function add(conditions, func, scope) {
    _isObject$1(conditions) || (conditions = {
      matches: conditions
    });
    var context = new Context(0, scope || this.scope),
        cond = context.conditions = {},
        mq,
        p,
        active;
    _context$2 && !context.selector && (context.selector = _context$2.selector); // in case a context is created inside a context. Like a gsap.matchMedia() that's inside a scoped gsap.context()

    this.contexts.push(context);
    func = context.add("onMatch", func);
    context.queries = conditions;

    for (p in conditions) {
      if (p === "all") {
        active = 1;
      } else {
        mq = _win$3.matchMedia(conditions[p]);

        if (mq) {
          _media.indexOf(context) < 0 && _media.push(context);
          (cond[p] = mq.matches) && (active = 1);
          mq.addListener ? mq.addListener(_onMediaChange) : mq.addEventListener("change", _onMediaChange);
        }
      }
    }

    active && func(context, function (f) {
      return context.add(null, f);
    });
    return this;
  } // refresh() {
  // 	let time = _lastMediaTime,
  // 		media = _media;
  // 	_lastMediaTime = -1;
  // 	_media = this.contexts;
  // 	_onMediaChange();
  // 	_lastMediaTime = time;
  // 	_media = media;
  // }
  ;

  _proto6.revert = function revert(config) {
    this.kill(config || {});
  };

  _proto6.kill = function kill(revert) {
    this.contexts.forEach(function (c) {
      return c.kill(revert, true);
    });
  };

  return MatchMedia;
}();
/*
 * --------------------------------------------------------------------------------------
 * GSAP
 * --------------------------------------------------------------------------------------
 */


var _gsap = {
  registerPlugin: function registerPlugin() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    args.forEach(function (config) {
      return _createPlugin(config);
    });
  },
  timeline: function timeline(vars) {
    return new Timeline(vars);
  },
  getTweensOf: function getTweensOf(targets, onlyActive) {
    return _globalTimeline.getTweensOf(targets, onlyActive);
  },
  getProperty: function getProperty(target, property, unit, uncache) {
    _isString$1(target) && (target = toArray(target)[0]); //in case selector text or an array is passed in

    var getter = _getCache(target || {}).get,
        format = unit ? _passThrough$1 : _numericIfPossible;

    unit === "native" && (unit = "");
    return !target ? target : !property ? function (property, unit, uncache) {
      return format((_plugins[property] && _plugins[property].get || getter)(target, property, unit, uncache));
    } : format((_plugins[property] && _plugins[property].get || getter)(target, property, unit, uncache));
  },
  quickSetter: function quickSetter(target, property, unit) {
    target = toArray(target);

    if (target.length > 1) {
      var setters = target.map(function (t) {
        return gsap$2.quickSetter(t, property, unit);
      }),
          l = setters.length;
      return function (value) {
        var i = l;

        while (i--) {
          setters[i](value);
        }
      };
    }

    target = target[0] || {};

    var Plugin = _plugins[property],
        cache = _getCache(target),
        p = cache.harness && (cache.harness.aliases || {})[property] || property,
        // in case it's an alias, like "rotate" for "rotation".
    setter = Plugin ? function (value) {
      var p = new Plugin();
      _quickTween._pt = 0;
      p.init(target, unit ? value + unit : value, _quickTween, 0, [target]);
      p.render(1, p);
      _quickTween._pt && _renderPropTweens(1, _quickTween);
    } : cache.set(target, p);

    return Plugin ? setter : function (value) {
      return setter(target, p, unit ? value + unit : value, cache, 1);
    };
  },
  quickTo: function quickTo(target, property, vars) {
    var _setDefaults2;

    var tween = gsap$2.to(target, _setDefaults$1((_setDefaults2 = {}, _setDefaults2[property] = "+=0.1", _setDefaults2.paused = true, _setDefaults2.stagger = 0, _setDefaults2), vars || {})),
        func = function func(value, start, startIsRelative) {
      return tween.resetTo(property, value, start, startIsRelative);
    };

    func.tween = tween;
    return func;
  },
  isTweening: function isTweening(targets) {
    return _globalTimeline.getTweensOf(targets, true).length > 0;
  },
  defaults: function defaults(value) {
    value && value.ease && (value.ease = _parseEase(value.ease, _defaults$1.ease));
    return _mergeDeep(_defaults$1, value || {});
  },
  config: function config(value) {
    return _mergeDeep(_config, value || {});
  },
  registerEffect: function registerEffect(_ref3) {
    var name = _ref3.name,
        effect = _ref3.effect,
        plugins = _ref3.plugins,
        defaults = _ref3.defaults,
        extendTimeline = _ref3.extendTimeline;
    (plugins || "").split(",").forEach(function (pluginName) {
      return pluginName && !_plugins[pluginName] && !_globals[pluginName] && _warn(name + " effect requires " + pluginName + " plugin.");
    });

    _effects[name] = function (targets, vars, tl) {
      return effect(toArray(targets), _setDefaults$1(vars || {}, defaults), tl);
    };

    if (extendTimeline) {
      Timeline.prototype[name] = function (targets, vars, position) {
        return this.add(_effects[name](targets, _isObject$1(vars) ? vars : (position = vars) && {}, this), position);
      };
    }
  },
  registerEase: function registerEase(name, ease) {
    _easeMap[name] = _parseEase(ease);
  },
  parseEase: function parseEase(ease, defaultEase) {
    return arguments.length ? _parseEase(ease, defaultEase) : _easeMap;
  },
  getById: function getById(id) {
    return _globalTimeline.getById(id);
  },
  exportRoot: function exportRoot(vars, includeDelayedCalls) {
    if (vars === void 0) {
      vars = {};
    }

    var tl = new Timeline(vars),
        child,
        next;
    tl.smoothChildTiming = _isNotFalse(vars.smoothChildTiming);

    _globalTimeline.remove(tl);

    tl._dp = 0; //otherwise it'll get re-activated when adding children and be re-introduced into _globalTimeline's linked list (then added to itself).

    tl._time = tl._tTime = _globalTimeline._time;
    child = _globalTimeline._first;

    while (child) {
      next = child._next;

      if (includeDelayedCalls || !(!child._dur && child instanceof Tween && child.vars.onComplete === child._targets[0])) {
        _addToTimeline(tl, child, child._start - child._delay);
      }

      child = next;
    }

    _addToTimeline(_globalTimeline, tl, 0);

    return tl;
  },
  context: function context(func, scope) {
    return func ? new Context(func, scope) : _context$2;
  },
  matchMedia: function matchMedia(scope) {
    return new MatchMedia(scope);
  },
  matchMediaRefresh: function matchMediaRefresh() {
    return _media.forEach(function (c) {
      var cond = c.conditions,
          found,
          p;

      for (p in cond) {
        if (cond[p]) {
          cond[p] = false;
          found = 1;
        }
      }

      found && c.revert();
    }) || _onMediaChange();
  },
  addEventListener: function addEventListener(type, callback) {
    var a = _listeners$1[type] || (_listeners$1[type] = []);
    ~a.indexOf(callback) || a.push(callback);
  },
  removeEventListener: function removeEventListener(type, callback) {
    var a = _listeners$1[type],
        i = a && a.indexOf(callback);
    i >= 0 && a.splice(i, 1);
  },
  utils: {
    wrap: wrap,
    wrapYoyo: wrapYoyo,
    distribute: distribute,
    random: random,
    snap: snap,
    normalize: normalize,
    getUnit: getUnit,
    clamp: clamp,
    splitColor: splitColor,
    toArray: toArray,
    selector: selector,
    mapRange: mapRange,
    pipe: pipe,
    unitize: unitize,
    interpolate: interpolate,
    shuffle: shuffle
  },
  install: _install,
  effects: _effects,
  ticker: _ticker,
  updateRoot: Timeline.updateRoot,
  plugins: _plugins,
  globalTimeline: _globalTimeline,
  core: {
    PropTween: PropTween,
    globals: _addGlobal,
    Tween: Tween,
    Timeline: Timeline,
    Animation: Animation,
    getCache: _getCache,
    _removeLinkedListItem: _removeLinkedListItem,
    reverting: function reverting() {
      return _reverting$1;
    },
    context: function context(toAdd) {
      if (toAdd && _context$2) {
        _context$2.data.push(toAdd);

        toAdd._ctx = _context$2;
      }

      return _context$2;
    },
    suppressOverwrites: function suppressOverwrites(value) {
      return _suppressOverwrites$1 = value;
    }
  }
};

_forEachName("to,from,fromTo,delayedCall,set,killTweensOf", function (name) {
  return _gsap[name] = Tween[name];
});

_ticker.add(Timeline.updateRoot);

_quickTween = _gsap.to({}, {
  duration: 0
}); // ---- EXTRA PLUGINS --------------------------------------------------------

var _getPluginPropTween = function _getPluginPropTween(plugin, prop) {
  var pt = plugin._pt;

  while (pt && pt.p !== prop && pt.op !== prop && pt.fp !== prop) {
    pt = pt._next;
  }

  return pt;
},
    _addModifiers = function _addModifiers(tween, modifiers) {
  var targets = tween._targets,
      p,
      i,
      pt;

  for (p in modifiers) {
    i = targets.length;

    while (i--) {
      pt = tween._ptLookup[i][p];

      if (pt && (pt = pt.d)) {
        if (pt._pt) {
          // is a plugin
          pt = _getPluginPropTween(pt, p);
        }

        pt && pt.modifier && pt.modifier(modifiers[p], tween, targets[i], p);
      }
    }
  }
},
    _buildModifierPlugin = function _buildModifierPlugin(name, modifier) {
  return {
    name: name,
    headless: 1,
    rawVars: 1,
    //don't pre-process function-based values or "random()" strings.
    init: function init(target, vars, tween) {
      tween._onInit = function (tween) {
        var temp, p;

        if (_isString$1(vars)) {
          temp = {};

          _forEachName(vars, function (name) {
            return temp[name] = 1;
          }); //if the user passes in a comma-delimited list of property names to roundProps, like "x,y", we round to whole numbers.


          vars = temp;
        }

        if (modifier) {
          temp = {};

          for (p in vars) {
            temp[p] = modifier(vars[p]);
          }

          vars = temp;
        }

        _addModifiers(tween, vars);
      };
    }
  };
}; //register core plugins


var gsap$2 = _gsap.registerPlugin({
  name: "attr",
  init: function init(target, vars, tween, index, targets) {
    var p, pt, v;
    this.tween = tween;

    for (p in vars) {
      v = target.getAttribute(p) || "";
      pt = this.add(target, "setAttribute", (v || 0) + "", vars[p], index, targets, 0, 0, p);
      pt.op = p;
      pt.b = v; // record the beginning value so we can revert()

      this._props.push(p);
    }
  },
  render: function render(ratio, data) {
    var pt = data._pt;

    while (pt) {
      _reverting$1 ? pt.set(pt.t, pt.p, pt.b, pt) : pt.r(ratio, pt.d); // if reverting, go back to the original (pt.b)

      pt = pt._next;
    }
  }
}, {
  name: "endArray",
  headless: 1,
  init: function init(target, value) {
    var i = value.length;

    while (i--) {
      this.add(target, i, target[i] || 0, value[i], 0, 0, 0, 0, 0, 1);
    }
  }
}, _buildModifierPlugin("roundProps", _roundModifier), _buildModifierPlugin("modifiers"), _buildModifierPlugin("snap", snap)) || _gsap; //to prevent the core plugins from being dropped via aggressive tree shaking, we must include them in the variable declaration in this way.

Tween.version = Timeline.version = gsap$2.version = "3.15.0";
_coreReady = 1;
_windowExists$2() && _wake();
_easeMap.Power0;
    _easeMap.Power1;
    _easeMap.Power2;
    _easeMap.Power3;
    _easeMap.Power4;
    _easeMap.Linear;
    _easeMap.Quad;
    _easeMap.Cubic;
    _easeMap.Quart;
    _easeMap.Quint;
    _easeMap.Strong;
    _easeMap.Elastic;
    _easeMap.Back;
    _easeMap.SteppedEase;
    _easeMap.Bounce;
    _easeMap.Sine;
    _easeMap.Expo;
    _easeMap.Circ;

/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/


var _win$2,
    _doc$2,
    _docElement,
    _pluginInitted,
    _tempDiv,
    _recentSetterPlugin,
    _reverting,
    _windowExists$1 = function _windowExists() {
  return typeof window !== "undefined";
},
    _transformProps = {},
    _RAD2DEG = 180 / Math.PI,
    _DEG2RAD = Math.PI / 180,
    _atan2 = Math.atan2,
    _bigNum = 1e8,
    _capsExp$1 = /([A-Z])/g,
    _horizontalExp = /(left|right|width|margin|padding|x)/i,
    _complexExp = /[\s,\(]\S/,
    _propertyAliases = {
  autoAlpha: "opacity,visibility",
  scale: "scaleX,scaleY",
  alpha: "opacity"
},
    _renderCSSProp = function _renderCSSProp(ratio, data) {
  return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 10000) / 10000 + data.u, data);
},
    _renderPropWithEnd = function _renderPropWithEnd(ratio, data) {
  return data.set(data.t, data.p, ratio === 1 ? data.e : Math.round((data.s + data.c * ratio) * 10000) / 10000 + data.u, data);
},
    _renderCSSPropWithBeginning = function _renderCSSPropWithBeginning(ratio, data) {
  return data.set(data.t, data.p, ratio ? Math.round((data.s + data.c * ratio) * 10000) / 10000 + data.u : data.b, data);
},
    //if units change, we need a way to render the original unit/value when the tween goes all the way back to the beginning (ratio:0)
_renderCSSPropWithBeginningAndEnd = function _renderCSSPropWithBeginningAndEnd(ratio, data) {
  return data.set(data.t, data.p, ratio === 1 ? data.e : ratio ? Math.round((data.s + data.c * ratio) * 10000) / 10000 + data.u : data.b, data);
},
    //if units change, we need a way to render the original unit/value when the tween goes all the way back to the beginning (ratio:0)
_renderRoundedCSSProp = function _renderRoundedCSSProp(ratio, data) {
  var value = data.s + data.c * ratio;
  data.set(data.t, data.p, ~~(value + (value < 0 ? -0.5 : .5)) + data.u, data);
},
    _renderNonTweeningValue = function _renderNonTweeningValue(ratio, data) {
  return data.set(data.t, data.p, ratio ? data.e : data.b, data);
},
    _renderNonTweeningValueOnlyAtEnd = function _renderNonTweeningValueOnlyAtEnd(ratio, data) {
  return data.set(data.t, data.p, ratio !== 1 ? data.b : data.e, data);
},
    _setterCSSStyle = function _setterCSSStyle(target, property, value) {
  return target.style[property] = value;
},
    _setterCSSProp = function _setterCSSProp(target, property, value) {
  return target.style.setProperty(property, value);
},
    _setterTransform = function _setterTransform(target, property, value) {
  return target._gsap[property] = value;
},
    _setterScale = function _setterScale(target, property, value) {
  return target._gsap.scaleX = target._gsap.scaleY = value;
},
    _setterScaleWithRender = function _setterScaleWithRender(target, property, value, data, ratio) {
  var cache = target._gsap;
  cache.scaleX = cache.scaleY = value;
  cache.renderTransform(ratio, cache);
},
    _setterTransformWithRender = function _setterTransformWithRender(target, property, value, data, ratio) {
  var cache = target._gsap;
  cache[property] = value;
  cache.renderTransform(ratio, cache);
},
    _transformProp$1 = "transform",
    _transformOriginProp = _transformProp$1 + "Origin",
    _saveStyle = function _saveStyle(property, isNotCSS) {
  var _this = this;

  var target = this.target,
      style = target.style,
      cache = target._gsap;

  if (property in _transformProps && style) {
    this.tfm = this.tfm || {};

    if (property !== "transform") {
      property = _propertyAliases[property] || property;
      ~property.indexOf(",") ? property.split(",").forEach(function (a) {
        return _this.tfm[a] = _get(target, a);
      }) : this.tfm[property] = cache.x ? cache[property] : _get(target, property); // note: scale would map to "scaleX,scaleY", thus we loop and apply them both.

      property === _transformOriginProp && (this.tfm.zOrigin = cache.zOrigin);
    } else {
      return _propertyAliases.transform.split(",").forEach(function (p) {
        return _saveStyle.call(_this, p, isNotCSS);
      });
    }

    if (this.props.indexOf(_transformProp$1) >= 0) {
      return;
    }

    if (cache.svg) {
      this.svgo = target.getAttribute("data-svg-origin");
      this.props.push(_transformOriginProp, isNotCSS, "");
    }

    property = _transformProp$1;
  }

  (style || isNotCSS) && this.props.push(property, isNotCSS, style[property]);
},
    _removeIndependentTransforms = function _removeIndependentTransforms(style) {
  if (style.translate) {
    style.removeProperty("translate");
    style.removeProperty("scale");
    style.removeProperty("rotate");
  }
},
    _revertStyle = function _revertStyle() {
  var props = this.props,
      target = this.target,
      style = target.style,
      cache = target._gsap,
      i,
      p;

  for (i = 0; i < props.length; i += 3) {
    // stored like this: property, isNotCSS, value
    if (!props[i + 1]) {
      props[i + 2] ? style[props[i]] = props[i + 2] : style.removeProperty(props[i].substr(0, 2) === "--" ? props[i] : props[i].replace(_capsExp$1, "-$1").toLowerCase());
    } else if (props[i + 1] === 2) {
      // non-CSS value (function-based)
      target[props[i]](props[i + 2]);
    } else {
      // non-CSS value (not function-based)
      target[props[i]] = props[i + 2];
    }
  }

  if (this.tfm) {
    for (p in this.tfm) {
      cache[p] = this.tfm[p];
    }

    if (cache.svg) {
      cache.renderTransform();
      target.setAttribute("data-svg-origin", this.svgo || "");
    }

    i = _reverting();

    if ((!i || !i.isStart) && !style[_transformProp$1]) {
      _removeIndependentTransforms(style);

      if (cache.zOrigin && style[_transformOriginProp]) {
        style[_transformOriginProp] += " " + cache.zOrigin + "px"; // since we're uncaching, we must put the zOrigin back into the transformOrigin so that we can pull it out accurately when we parse again. Otherwise, we'd lose the z portion of the origin since we extract it to protect from Safari bugs.

        cache.zOrigin = 0;
        cache.renderTransform();
      }

      cache.uncache = 1; // if it's a startAt that's being reverted in the _initTween() of the core, we don't need to uncache transforms. This is purely a performance optimization.
    }
  }
},
    _getStyleSaver = function _getStyleSaver(target, properties) {
  var saver = {
    target: target,
    props: [],
    revert: _revertStyle,
    save: _saveStyle
  };
  target._gsap || gsap$2.core.getCache(target); // just make sure there's a _gsap cache defined because we read from it in _saveStyle() and it's more efficient to just check it here once.

  properties && target.style && target.nodeType && properties.split(",").forEach(function (p) {
    return saver.save(p);
  }); // make sure it's a DOM node too.

  return saver;
},
    _supports3D,
    _createElement = function _createElement(type, ns) {
  var e = _doc$2.createElementNS ? _doc$2.createElementNS((ns || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), type) : _doc$2.createElement(type); //some servers swap in https for http in the namespace which can break things, making "style" inaccessible.

  return e && e.style ? e : _doc$2.createElement(type); //some environments won't allow access to the element's style when created with a namespace in which case we default to the standard createElement() to work around the issue. Also note that when GSAP is embedded directly inside an SVG file, createElement() won't allow access to the style object in Firefox (see https://gsap.com/forums/topic/20215-problem-using-tweenmax-in-standalone-self-containing-svg-file-err-cannot-set-property-csstext-of-undefined/).
},
    _getComputedProperty = function _getComputedProperty(target, property, skipPrefixFallback) {
  var cs = getComputedStyle(target);
  return cs[property] || cs.getPropertyValue(property.replace(_capsExp$1, "-$1").toLowerCase()) || cs.getPropertyValue(property) || !skipPrefixFallback && _getComputedProperty(target, _checkPropPrefix(property) || property, 1) || ""; //css variables may not need caps swapped out for dashes and lowercase.
},
    _prefixes = "O,Moz,ms,Ms,Webkit".split(","),
    _checkPropPrefix = function _checkPropPrefix(property, element, preferPrefix) {
  var e = element || _tempDiv,
      s = e.style,
      i = 5;

  if (property in s && !preferPrefix) {
    return property;
  }

  property = property.charAt(0).toUpperCase() + property.substr(1);

  while (i-- && !(_prefixes[i] + property in s)) {}

  return i < 0 ? null : (i === 3 ? "ms" : i >= 0 ? _prefixes[i] : "") + property;
},
    _initCore$1 = function _initCore() {
  if (_windowExists$1() && window.document) {
    _win$2 = window;
    _doc$2 = _win$2.document;
    _docElement = _doc$2.documentElement;
    _tempDiv = _createElement("div") || {
      style: {}
    };
    _createElement("div");
    _transformProp$1 = _checkPropPrefix(_transformProp$1);
    _transformOriginProp = _transformProp$1 + "Origin";
    _tempDiv.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0"; //make sure to override certain properties that may contaminate measurements, in case the user has overreaching style sheets.

    _supports3D = !!_checkPropPrefix("perspective");
    _reverting = gsap$2.core.reverting;
    _pluginInitted = 1;
  }
},
    _getReparentedCloneBBox = function _getReparentedCloneBBox(target) {
  //works around issues in some browsers (like Firefox) that don't correctly report getBBox() on SVG elements inside a <defs> element and/or <mask>. We try creating an SVG, adding it to the documentElement and toss the element in there so that it's definitely part of the rendering tree, then grab the bbox and if it works, we actually swap out the original getBBox() method for our own that does these extra steps whenever getBBox is needed. This helps ensure that performance is optimal (only do all these extra steps when absolutely necessary...most elements don't need it).
  var owner = target.ownerSVGElement,
      svg = _createElement("svg", owner && owner.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
      clone = target.cloneNode(true),
      bbox;

  clone.style.display = "block";
  svg.appendChild(clone);

  _docElement.appendChild(svg);

  try {
    bbox = clone.getBBox();
  } catch (e) {}

  svg.removeChild(clone);

  _docElement.removeChild(svg);

  return bbox;
},
    _getAttributeFallbacks = function _getAttributeFallbacks(target, attributesArray) {
  var i = attributesArray.length;

  while (i--) {
    if (target.hasAttribute(attributesArray[i])) {
      return target.getAttribute(attributesArray[i]);
    }
  }
},
    _getBBox = function _getBBox(target) {
  var bounds, cloned;

  try {
    bounds = target.getBBox(); //Firefox throws errors if you try calling getBBox() on an SVG element that's not rendered (like in a <symbol> or <defs>). https://bugzilla.mozilla.org/show_bug.cgi?id=612118
  } catch (error) {
    bounds = _getReparentedCloneBBox(target);
    cloned = 1;
  }

  bounds && (bounds.width || bounds.height) || cloned || (bounds = _getReparentedCloneBBox(target)); //some browsers (like Firefox) misreport the bounds if the element has zero width and height (it just assumes it's at x:0, y:0), thus we need to manually grab the position in that case.

  return bounds && !bounds.width && !bounds.x && !bounds.y ? {
    x: +_getAttributeFallbacks(target, ["x", "cx", "x1"]) || 0,
    y: +_getAttributeFallbacks(target, ["y", "cy", "y1"]) || 0,
    width: 0,
    height: 0
  } : bounds;
},
    _isSVG = function _isSVG(e) {
  return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && _getBBox(e));
},
    //reports if the element is an SVG on which getBBox() actually works
_removeProperty = function _removeProperty(target, property) {
  if (property) {
    var style = target.style,
        first2Chars;

    if (property in _transformProps && property !== _transformOriginProp) {
      property = _transformProp$1;
    }

    if (style.removeProperty) {
      first2Chars = property.substr(0, 2);

      if (first2Chars === "ms" || property.substr(0, 6) === "webkit") {
        //Microsoft and some Webkit browsers don't conform to the standard of capitalizing the first prefix character, so we adjust so that when we prefix the caps with a dash, it's correct (otherwise it'd be "ms-transform" instead of "-ms-transform" for IE9, for example)
        property = "-" + property;
      }

      style.removeProperty(first2Chars === "--" ? property : property.replace(_capsExp$1, "-$1").toLowerCase());
    } else {
      //note: old versions of IE use "removeAttribute()" instead of "removeProperty()"
      style.removeAttribute(property);
    }
  }
},
    _addNonTweeningPT = function _addNonTweeningPT(plugin, target, property, beginning, end, onlySetAtEnd) {
  var pt = new PropTween(plugin._pt, target, property, 0, 1, onlySetAtEnd ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue);
  plugin._pt = pt;
  pt.b = beginning;
  pt.e = end;

  plugin._props.push(property);

  return pt;
},
    _nonConvertibleUnits = {
  deg: 1,
  rad: 1,
  turn: 1
},
    _nonStandardLayouts = {
  grid: 1,
  flex: 1
},
    //takes a single value like 20px and converts it to the unit specified, like "%", returning only the numeric amount.
_convertToUnit = function _convertToUnit(target, property, value, unit) {
  var curValue = parseFloat(value) || 0,
      curUnit = (value + "").trim().substr((curValue + "").length) || "px",
      // some browsers leave extra whitespace at the beginning of CSS variables, hence the need to trim()
  style = _tempDiv.style,
      horizontal = _horizontalExp.test(property),
      isRootSVG = target.tagName.toLowerCase() === "svg",
      measureProperty = (isRootSVG ? "client" : "offset") + (horizontal ? "Width" : "Height"),
      amount = 100,
      toPixels = unit === "px",
      toPercent = unit === "%",
      px,
      parent,
      cache,
      isSVG;

  if (unit === curUnit || !curValue || _nonConvertibleUnits[unit] || _nonConvertibleUnits[curUnit]) {
    return curValue;
  }

  curUnit !== "px" && !toPixels && (curValue = _convertToUnit(target, property, value, "px"));
  isSVG = target.getCTM && _isSVG(target);

  if ((toPercent || curUnit === "%") && (_transformProps[property] || ~property.indexOf("adius"))) {
    px = isSVG ? target.getBBox()[horizontal ? "width" : "height"] : target[measureProperty];
    return _round$1(toPercent ? curValue / px * amount : curValue / 100 * px);
  }

  style[horizontal ? "width" : "height"] = amount + (toPixels ? curUnit : unit);
  parent = unit !== "rem" && ~property.indexOf("adius") || unit === "em" && target.appendChild && !isRootSVG ? target : target.parentNode;

  if (isSVG) {
    parent = (target.ownerSVGElement || {}).parentNode;
  }

  if (!parent || parent === _doc$2 || !parent.appendChild) {
    parent = _doc$2.body;
  }

  cache = parent._gsap;

  if (cache && toPercent && cache.width && horizontal && cache.time === _ticker.time && !cache.uncache) {
    return _round$1(curValue / cache.width * amount);
  } else {
    if (toPercent && (property === "height" || property === "width")) {
      // if we're dealing with width/height that's inside a container with padding and/or it's a flexbox/grid container, we must apply it to the target itself rather than the _tempDiv in order to ensure complete accuracy, factoring in the parent's padding.
      var v = target.style[property];
      target.style[property] = amount + unit;
      px = target[measureProperty];
      v ? target.style[property] = v : _removeProperty(target, property);
    } else {
      (toPercent || curUnit === "%") && !_nonStandardLayouts[_getComputedProperty(parent, "display")] && (style.position = _getComputedProperty(target, "position"));
      parent === target && (style.position = "static"); // like for borderRadius, if it's a % we must have it relative to the target itself but that may not have position: relative or position: absolute in which case it'd go up the chain until it finds its offsetParent (bad). position: static protects against that.

      parent.appendChild(_tempDiv);
      px = _tempDiv[measureProperty];
      parent.removeChild(_tempDiv);
      style.position = "absolute";
    }

    if (horizontal && toPercent) {
      cache = _getCache(parent);
      cache.time = _ticker.time;
      cache.width = parent[measureProperty];
    }
  }

  return _round$1(toPixels ? px * curValue / amount : px && curValue ? amount / px * curValue : 0);
},
    _get = function _get(target, property, unit, uncache) {
  var value;
  _pluginInitted || _initCore$1();

  if (property in _propertyAliases && property !== "transform") {
    property = _propertyAliases[property];

    if (~property.indexOf(",")) {
      property = property.split(",")[0];
    }
  }

  if (_transformProps[property] && property !== "transform") {
    value = _parseTransform(target, uncache);
    value = property !== "transformOrigin" ? value[property] : value.svg ? value.origin : _firstTwoOnly(_getComputedProperty(target, _transformOriginProp)) + " " + value.zOrigin + "px";
  } else {
    value = target.style[property];

    if (!value || value === "auto" || uncache || ~(value + "").indexOf("calc(")) {
      value = _specialProps[property] && _specialProps[property](target, property, unit) || _getComputedProperty(target, property) || _getProperty(target, property) || (property === "opacity" ? 1 : 0); // note: some browsers, like Firefox, don't report borderRadius correctly! Instead, it only reports every corner like  borderTopLeftRadius
    }
  }

  return unit && !~(value + "").trim().indexOf(" ") ? _convertToUnit(target, property, value, unit) + unit : value;
},
    _tweenComplexCSSString = function _tweenComplexCSSString(target, prop, start, end) {
  // note: we call _tweenComplexCSSString.call(pluginInstance...) to ensure that it's scoped properly. We may call it from within a plugin too, thus "this" would refer to the plugin.
  if (!start || start === "none") {
    // some browsers like Safari actually PREFER the prefixed property and mis-report the unprefixed value like clipPath (BUG). In other words, even though clipPath exists in the style ("clipPath" in target.style) and it's set in the CSS properly (along with -webkit-clip-path), Safari reports clipPath as "none" whereas WebkitClipPath reports accurately like "ellipse(100% 0% at 50% 0%)", so in this case we must SWITCH to using the prefixed property instead. See https://gsap.com/forums/topic/18310-clippath-doesnt-work-on-ios/
    var p = _checkPropPrefix(prop, target, 1),
        s = p && _getComputedProperty(target, p, 1);

    if (s && s !== start) {
      prop = p;
      start = s;
    } else if (prop === "borderColor") {
      start = _getComputedProperty(target, "borderTopColor"); // Firefox bug: always reports "borderColor" as "", so we must fall back to borderTopColor. See https://gsap.com/forums/topic/24583-how-to-return-colors-that-i-had-after-reverse/
    }
  }

  var pt = new PropTween(this._pt, target.style, prop, 0, 1, _renderComplexString),
      index = 0,
      matchIndex = 0,
      a,
      result,
      startValues,
      startNum,
      color,
      startValue,
      endValue,
      endNum,
      chunk,
      endUnit,
      startUnit,
      endValues;
  pt.b = start;
  pt.e = end;
  start += ""; // ensure values are strings

  end += "";

  if (end.substring(0, 6) === "var(--") {
    end = _getComputedProperty(target, end.substring(4, end.indexOf(")")));
  }

  if (end === "auto") {
    startValue = target.style[prop];
    target.style[prop] = end;
    end = _getComputedProperty(target, prop) || end;
    startValue ? target.style[prop] = startValue : _removeProperty(target, prop);
  }

  a = [start, end];

  _colorStringFilter(a); // pass an array with the starting and ending values and let the filter do whatever it needs to the values. If colors are found, it returns true and then we must match where the color shows up order-wise because for things like boxShadow, sometimes the browser provides the computed values with the color FIRST, but the user provides it with the color LAST, so flip them if necessary. Same for drop-shadow().


  start = a[0];
  end = a[1];
  startValues = start.match(_numWithUnitExp) || [];
  endValues = end.match(_numWithUnitExp) || [];

  if (endValues.length) {
    while (result = _numWithUnitExp.exec(end)) {
      endValue = result[0];
      chunk = end.substring(index, result.index);

      if (color) {
        color = (color + 1) % 5;
      } else if (chunk.substr(-5) === "rgba(" || chunk.substr(-5) === "hsla(") {
        color = 1;
      }

      if (endValue !== (startValue = startValues[matchIndex++] || "")) {
        startNum = parseFloat(startValue) || 0;
        startUnit = startValue.substr((startNum + "").length);
        endValue.charAt(1) === "=" && (endValue = _parseRelative(startNum, endValue) + startUnit);
        endNum = parseFloat(endValue);
        endUnit = endValue.substr((endNum + "").length);
        index = _numWithUnitExp.lastIndex - endUnit.length;

        if (!endUnit) {
          //if something like "perspective:300" is passed in and we must add a unit to the end
          endUnit = endUnit || _config.units[prop] || startUnit;

          if (index === end.length) {
            end += endUnit;
            pt.e += endUnit;
          }
        }

        if (startUnit !== endUnit) {
          startNum = _convertToUnit(target, prop, startValue, endUnit) || 0;
        } // these nested PropTweens are handled in a special way - we'll never actually call a render or setter method on them. We'll just loop through them in the parent complex string PropTween's render method.


        pt._pt = {
          _next: pt._pt,
          p: chunk || matchIndex === 1 ? chunk : ",",
          //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
          s: startNum,
          c: endNum - startNum,
          m: color && color < 4 || prop === "zIndex" ? Math.round : 0
        };
      }
    }

    pt.c = index < end.length ? end.substring(index, end.length) : ""; //we use the "c" of the PropTween to store the final part of the string (after the last number)
  } else {
    pt.r = prop === "display" && end === "none" ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue;
  }

  _relExp.test(end) && (pt.e = 0); //if the end string contains relative values or dynamic random(...) values, delete the end it so that on the final render we don't actually set it to the string with += or -= characters (forces it to use the calculated value).

  this._pt = pt; //start the linked list with this new PropTween. Remember, we call _tweenComplexCSSString.call(pluginInstance...) to ensure that it's scoped properly. We may call it from within another plugin too, thus "this" would refer to the plugin.

  return pt;
},
    _keywordToPercent = {
  top: "0%",
  bottom: "100%",
  left: "0%",
  right: "100%",
  center: "50%"
},
    _convertKeywordsToPercentages = function _convertKeywordsToPercentages(value) {
  var split = value.split(" "),
      x = split[0],
      y = split[1] || "50%";

  if (x === "top" || x === "bottom" || y === "left" || y === "right") {
    //the user provided them in the wrong order, so flip them
    value = x;
    x = y;
    y = value;
  }

  split[0] = _keywordToPercent[x] || x;
  split[1] = _keywordToPercent[y] || y;
  return split.join(" ");
},
    _renderClearProps = function _renderClearProps(ratio, data) {
  if (data.tween && data.tween._time === data.tween._dur) {
    var target = data.t,
        style = target.style,
        props = data.u,
        cache = target._gsap,
        prop,
        clearTransforms,
        i;

    if (props === "all" || props === true) {
      style.cssText = "";
      clearTransforms = 1;
    } else {
      props = props.split(",");
      i = props.length;

      while (--i > -1) {
        prop = props[i];

        if (_transformProps[prop]) {
          clearTransforms = 1;
          prop = prop === "transformOrigin" ? _transformOriginProp : _transformProp$1;
        }

        _removeProperty(target, prop);
      }
    }

    if (clearTransforms) {
      _removeProperty(target, _transformProp$1);

      if (cache) {
        cache.svg && target.removeAttribute("transform");
        style.scale = style.rotate = style.translate = "none";

        _parseTransform(target, 1); // force all the cached values back to "normal"/identity, otherwise if there's another tween that's already set to render transforms on this element, it could display the wrong values.


        cache.uncache = 1;

        _removeIndependentTransforms(style);
      }
    }
  }
},
    // note: specialProps should return 1 if (and only if) they have a non-zero priority. It indicates we need to sort the linked list.
_specialProps = {
  clearProps: function clearProps(plugin, target, property, endValue, tween) {
    if (tween.data !== "isFromStart") {
      var pt = plugin._pt = new PropTween(plugin._pt, target, property, 0, 0, _renderClearProps);
      pt.u = endValue;
      pt.pr = -10;
      pt.tween = tween;

      plugin._props.push(property);

      return 1;
    }
  }
  /* className feature (about 0.4kb gzipped).
  , className(plugin, target, property, endValue, tween) {
  	let _renderClassName = (ratio, data) => {
  			data.css.render(ratio, data.css);
  			if (!ratio || ratio === 1) {
  				let inline = data.rmv,
  					target = data.t,
  					p;
  				target.setAttribute("class", ratio ? data.e : data.b);
  				for (p in inline) {
  					_removeProperty(target, p);
  				}
  			}
  		},
  		_getAllStyles = (target) => {
  			let styles = {},
  				computed = getComputedStyle(target),
  				p;
  			for (p in computed) {
  				if (isNaN(p) && p !== "cssText" && p !== "length") {
  					styles[p] = computed[p];
  				}
  			}
  			_setDefaults(styles, _parseTransform(target, 1));
  			return styles;
  		},
  		startClassList = target.getAttribute("class"),
  		style = target.style,
  		cssText = style.cssText,
  		cache = target._gsap,
  		classPT = cache.classPT,
  		inlineToRemoveAtEnd = {},
  		data = {t:target, plugin:plugin, rmv:inlineToRemoveAtEnd, b:startClassList, e:(endValue.charAt(1) !== "=") ? endValue : startClassList.replace(new RegExp("(?:\\s|^)" + endValue.substr(2) + "(?![\\w-])"), "") + ((endValue.charAt(0) === "+") ? " " + endValue.substr(2) : "")},
  		changingVars = {},
  		startVars = _getAllStyles(target),
  		transformRelated = /(transform|perspective)/i,
  		endVars, p;
  	if (classPT) {
  		classPT.r(1, classPT.d);
  		_removeLinkedListItem(classPT.d.plugin, classPT, "_pt");
  	}
  	target.setAttribute("class", data.e);
  	endVars = _getAllStyles(target, true);
  	target.setAttribute("class", startClassList);
  	for (p in endVars) {
  		if (endVars[p] !== startVars[p] && !transformRelated.test(p)) {
  			changingVars[p] = endVars[p];
  			if (!style[p] && style[p] !== "0") {
  				inlineToRemoveAtEnd[p] = 1;
  			}
  		}
  	}
  	cache.classPT = plugin._pt = new PropTween(plugin._pt, target, "className", 0, 0, _renderClassName, data, 0, -11);
  	if (style.cssText !== cssText) { //only apply if things change. Otherwise, in cases like a background-image that's pulled dynamically, it could cause a refresh. See https://gsap.com/forums/topic/20368-possible-gsap-bug-switching-classnames-in-chrome/.
  		style.cssText = cssText; //we recorded cssText before we swapped classes and ran _getAllStyles() because in cases when a className tween is overwritten, we remove all the related tweening properties from that class change (otherwise class-specific stuff can't override properties we've directly set on the target's style object due to specificity).
  	}
  	_parseTransform(target, true); //to clear the caching of transforms
  	data.css = new gsap.plugins.css();
  	data.css.init(target, changingVars, tween);
  	plugin._props.push(...data.css._props);
  	return 1;
  }
  */

},

/*
 * --------------------------------------------------------------------------------------
 * TRANSFORMS
 * --------------------------------------------------------------------------------------
 */
_identity2DMatrix = [1, 0, 0, 1, 0, 0],
    _rotationalProperties = {},
    _isNullTransform = function _isNullTransform(value) {
  return value === "matrix(1, 0, 0, 1, 0, 0)" || value === "none" || !value;
},
    _getComputedTransformMatrixAsArray = function _getComputedTransformMatrixAsArray(target) {
  var matrixString = _getComputedProperty(target, _transformProp$1);

  return _isNullTransform(matrixString) ? _identity2DMatrix : matrixString.substr(7).match(_numExp).map(_round$1);
},
    _getMatrix = function _getMatrix(target, force2D) {
  var cache = target._gsap || _getCache(target),
      style = target.style,
      matrix = _getComputedTransformMatrixAsArray(target),
      parent,
      nextSibling,
      temp,
      addedToDOM;

  if (cache.svg && target.getAttribute("transform")) {
    temp = target.transform.baseVal.consolidate().matrix; //ensures that even complex values like "translate(50,60) rotate(135,0,0)" are parsed because it mashes it into a matrix.

    matrix = [temp.a, temp.b, temp.c, temp.d, temp.e, temp.f];
    return matrix.join(",") === "1,0,0,1,0,0" ? _identity2DMatrix : matrix;
  } else if (matrix === _identity2DMatrix && !target.offsetParent && target !== _docElement && !cache.svg) {
    //note: if offsetParent is null, that means the element isn't in the normal document flow, like if it has display:none or one of its ancestors has display:none). Firefox returns null for getComputedStyle() if the element is in an iframe that has display:none. https://bugzilla.mozilla.org/show_bug.cgi?id=548397
    //browsers don't report transforms accurately unless the element is in the DOM and has a display value that's not "none". Firefox and Microsoft browsers have a partial bug where they'll report transforms even if display:none BUT not any percentage-based values like translate(-50%, 8px) will be reported as if it's translate(0, 8px).
    temp = style.display;
    style.display = "block";
    parent = target.parentNode;

    if (!parent || !target.offsetParent && !target.getBoundingClientRect().width) {
      // note: in 3.3.0 we switched target.offsetParent to _doc.body.contains(target) to avoid [sometimes unnecessary] MutationObserver calls but that wasn't adequate because there are edge cases where nested position: fixed elements need to get reparented to accurately sense transforms. See https://github.com/greensock/GSAP/issues/388 and https://github.com/greensock/GSAP/issues/375. Note: position: fixed elements report a null offsetParent but they could also be invisible because they're in an ancestor with display: none, so we check getBoundingClientRect(). We only want to alter the DOM if we absolutely have to because it can cause iframe content to reload, like a Vimeo video.
      addedToDOM = 1; //flag

      nextSibling = target.nextElementSibling;

      _docElement.appendChild(target); //we must add it to the DOM in order to get values properly

    }

    matrix = _getComputedTransformMatrixAsArray(target);
    temp ? style.display = temp : _removeProperty(target, "display");

    if (addedToDOM) {
      nextSibling ? parent.insertBefore(target, nextSibling) : parent ? parent.appendChild(target) : _docElement.removeChild(target);
    }
  }

  return force2D && matrix.length > 6 ? [matrix[0], matrix[1], matrix[4], matrix[5], matrix[12], matrix[13]] : matrix;
},
    _applySVGOrigin = function _applySVGOrigin(target, origin, originIsAbsolute, smooth, matrixArray, pluginToAddPropTweensTo) {
  var cache = target._gsap,
      matrix = matrixArray || _getMatrix(target, true),
      xOriginOld = cache.xOrigin || 0,
      yOriginOld = cache.yOrigin || 0,
      xOffsetOld = cache.xOffset || 0,
      yOffsetOld = cache.yOffset || 0,
      a = matrix[0],
      b = matrix[1],
      c = matrix[2],
      d = matrix[3],
      tx = matrix[4],
      ty = matrix[5],
      originSplit = origin.split(" "),
      xOrigin = parseFloat(originSplit[0]) || 0,
      yOrigin = parseFloat(originSplit[1]) || 0,
      bounds,
      determinant,
      x,
      y;

  if (!originIsAbsolute) {
    bounds = _getBBox(target);
    xOrigin = bounds.x + (~originSplit[0].indexOf("%") ? xOrigin / 100 * bounds.width : xOrigin);
    yOrigin = bounds.y + (~(originSplit[1] || originSplit[0]).indexOf("%") ? yOrigin / 100 * bounds.height : yOrigin); // if (!("xOrigin" in cache) && (xOrigin || yOrigin)) { // added in 3.12.3, reverted in 3.12.4; requires more exploration
    // 	xOrigin -= bounds.x;
    // 	yOrigin -= bounds.y;
    // }
  } else if (matrix !== _identity2DMatrix && (determinant = a * d - b * c)) {
    //if it's zero (like if scaleX and scaleY are zero), skip it to avoid errors with dividing by zero.
    x = xOrigin * (d / determinant) + yOrigin * (-c / determinant) + (c * ty - d * tx) / determinant;
    y = xOrigin * (-b / determinant) + yOrigin * (a / determinant) - (a * ty - b * tx) / determinant;
    xOrigin = x;
    yOrigin = y; // theory: we only had to do this for smoothing and it assumes that the previous one was not originIsAbsolute.
  }

  if (smooth || smooth !== false && cache.smooth) {
    tx = xOrigin - xOriginOld;
    ty = yOrigin - yOriginOld;
    cache.xOffset = xOffsetOld + (tx * a + ty * c) - tx;
    cache.yOffset = yOffsetOld + (tx * b + ty * d) - ty;
  } else {
    cache.xOffset = cache.yOffset = 0;
  }

  cache.xOrigin = xOrigin;
  cache.yOrigin = yOrigin;
  cache.smooth = !!smooth;
  cache.origin = origin;
  cache.originIsAbsolute = !!originIsAbsolute;
  target.style[_transformOriginProp] = "0px 0px"; //otherwise, if someone sets  an origin via CSS, it will likely interfere with the SVG transform attribute ones (because remember, we're baking the origin into the matrix() value).

  if (pluginToAddPropTweensTo) {
    _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOrigin", xOriginOld, xOrigin);

    _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOrigin", yOriginOld, yOrigin);

    _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOffset", xOffsetOld, cache.xOffset);

    _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOffset", yOffsetOld, cache.yOffset);
  }

  target.setAttribute("data-svg-origin", xOrigin + " " + yOrigin);
},
    _parseTransform = function _parseTransform(target, uncache) {
  var cache = target._gsap || new GSCache(target);

  if ("x" in cache && !uncache && !cache.uncache) {
    return cache;
  }

  var style = target.style,
      invertedScaleX = cache.scaleX < 0,
      px = "px",
      deg = "deg",
      cs = getComputedStyle(target),
      origin = _getComputedProperty(target, _transformOriginProp) || "0",
      x,
      y,
      z,
      scaleX,
      scaleY,
      rotation,
      rotationX,
      rotationY,
      skewX,
      skewY,
      perspective,
      xOrigin,
      yOrigin,
      matrix,
      angle,
      cos,
      sin,
      a,
      b,
      c,
      d,
      a12,
      a22,
      t1,
      t2,
      t3,
      a13,
      a23,
      a33,
      a42,
      a43,
      a32;
  x = y = z = rotation = rotationX = rotationY = skewX = skewY = perspective = 0;
  scaleX = scaleY = 1;
  cache.svg = !!(target.getCTM && _isSVG(target));

  if (cs.translate) {
    // accommodate independent transforms by combining them into normal ones.
    if (cs.translate !== "none" || cs.scale !== "none" || cs.rotate !== "none") {
      style[_transformProp$1] = (cs.translate !== "none" ? "translate3d(" + (cs.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (cs.rotate !== "none" ? "rotate(" + cs.rotate + ") " : "") + (cs.scale !== "none" ? "scale(" + cs.scale.split(" ").join(",") + ") " : "") + (cs[_transformProp$1] !== "none" ? cs[_transformProp$1] : "");
    }

    style.scale = style.rotate = style.translate = "none";
  }

  matrix = _getMatrix(target, cache.svg);

  if (cache.svg) {
    if (cache.uncache) {
      // if cache.uncache is true (and maybe if origin is 0,0), we need to set element.style.transformOrigin = (cache.xOrigin - bbox.x) + "px " + (cache.yOrigin - bbox.y) + "px". Previously we let the data-svg-origin stay instead, but when introducing revert(), it complicated things.
      t2 = target.getBBox();
      origin = cache.xOrigin - t2.x + "px " + (cache.yOrigin - t2.y) + "px";
      t1 = "";
    } else {
      t1 = !uncache && target.getAttribute("data-svg-origin"); //  Remember, to work around browser inconsistencies we always force SVG elements' transformOrigin to 0,0 and offset the translation accordingly.
    }

    _applySVGOrigin(target, t1 || origin, !!t1 || cache.originIsAbsolute, cache.smooth !== false, matrix);
  }

  xOrigin = cache.xOrigin || 0;
  yOrigin = cache.yOrigin || 0;

  if (matrix !== _identity2DMatrix) {
    a = matrix[0]; //a11

    b = matrix[1]; //a21

    c = matrix[2]; //a31

    d = matrix[3]; //a41

    x = a12 = matrix[4];
    y = a22 = matrix[5]; //2D matrix

    if (matrix.length === 6) {
      scaleX = Math.sqrt(a * a + b * b);
      scaleY = Math.sqrt(d * d + c * c);
      rotation = a || b ? _atan2(b, a) * _RAD2DEG : 0; //note: if scaleX is 0, we cannot accurately measure rotation. Same for skewX with a scaleY of 0. Therefore, we default to the previously recorded value (or zero if that doesn't exist).

      skewX = c || d ? _atan2(c, d) * _RAD2DEG + rotation : 0;
      skewX && (scaleY *= Math.abs(Math.cos(skewX * _DEG2RAD)));

      if (cache.svg) {
        x -= xOrigin - (xOrigin * a + yOrigin * c);
        y -= yOrigin - (xOrigin * b + yOrigin * d);
      } //3D matrix

    } else {
      a32 = matrix[6];
      a42 = matrix[7];
      a13 = matrix[8];
      a23 = matrix[9];
      a33 = matrix[10];
      a43 = matrix[11];
      x = matrix[12];
      y = matrix[13];
      z = matrix[14];
      angle = _atan2(a32, a33);
      rotationX = angle * _RAD2DEG; //rotationX

      if (angle) {
        cos = Math.cos(-angle);
        sin = Math.sin(-angle);
        t1 = a12 * cos + a13 * sin;
        t2 = a22 * cos + a23 * sin;
        t3 = a32 * cos + a33 * sin;
        a13 = a12 * -sin + a13 * cos;
        a23 = a22 * -sin + a23 * cos;
        a33 = a32 * -sin + a33 * cos;
        a43 = a42 * -sin + a43 * cos;
        a12 = t1;
        a22 = t2;
        a32 = t3;
      } //rotationY


      angle = _atan2(-c, a33);
      rotationY = angle * _RAD2DEG;

      if (angle) {
        cos = Math.cos(-angle);
        sin = Math.sin(-angle);
        t1 = a * cos - a13 * sin;
        t2 = b * cos - a23 * sin;
        t3 = c * cos - a33 * sin;
        a43 = d * sin + a43 * cos;
        a = t1;
        b = t2;
        c = t3;
      } //rotationZ


      angle = _atan2(b, a);
      rotation = angle * _RAD2DEG;

      if (angle) {
        cos = Math.cos(angle);
        sin = Math.sin(angle);
        t1 = a * cos + b * sin;
        t2 = a12 * cos + a22 * sin;
        b = b * cos - a * sin;
        a22 = a22 * cos - a12 * sin;
        a = t1;
        a12 = t2;
      }

      if (rotationX && Math.abs(rotationX) + Math.abs(rotation) > 359.9) {
        //when rotationY is set, it will often be parsed as 180 degrees different than it should be, and rotationX and rotation both being 180 (it looks the same), so we adjust for that here.
        rotationX = rotation = 0;
        rotationY = 180 - rotationY;
      }

      scaleX = _round$1(Math.sqrt(a * a + b * b + c * c));
      scaleY = _round$1(Math.sqrt(a22 * a22 + a32 * a32));
      angle = _atan2(a12, a22);
      skewX = Math.abs(angle) > 0.0002 ? angle * _RAD2DEG : 0;
      perspective = a43 ? 1 / (a43 < 0 ? -a43 : a43) : 0;
    }

    if (cache.svg) {
      //sense if there are CSS transforms applied on an SVG element in which case we must overwrite them when rendering. The transform attribute is more reliable cross-browser, but we can't just remove the CSS ones because they may be applied in a CSS rule somewhere (not just inline).
      t1 = target.getAttribute("transform");
      cache.forceCSS = target.setAttribute("transform", "") || !_isNullTransform(_getComputedProperty(target, _transformProp$1));
      t1 && target.setAttribute("transform", t1);
    }
  }

  if (Math.abs(skewX) > 90 && Math.abs(skewX) < 270) {
    if (invertedScaleX) {
      scaleX *= -1;
      skewX += rotation <= 0 ? 180 : -180;
      rotation += rotation <= 0 ? 180 : -180;
    } else {
      scaleY *= -1;
      skewX += skewX <= 0 ? 180 : -180;
    }
  }

  uncache = uncache || cache.uncache;
  cache.x = x - ((cache.xPercent = x && (!uncache && cache.xPercent || (Math.round(target.offsetWidth / 2) === Math.round(-x) ? -50 : 0))) ? target.offsetWidth * cache.xPercent / 100 : 0) + px;
  cache.y = y - ((cache.yPercent = y && (!uncache && cache.yPercent || (Math.round(target.offsetHeight / 2) === Math.round(-y) ? -50 : 0))) ? target.offsetHeight * cache.yPercent / 100 : 0) + px;
  cache.z = z + px;
  cache.scaleX = _round$1(scaleX);
  cache.scaleY = _round$1(scaleY);
  cache.rotation = _round$1(rotation) + deg;
  cache.rotationX = _round$1(rotationX) + deg;
  cache.rotationY = _round$1(rotationY) + deg;
  cache.skewX = skewX + deg;
  cache.skewY = skewY + deg;
  cache.transformPerspective = perspective + px;

  if (cache.zOrigin = parseFloat(origin.split(" ")[2]) || !uncache && cache.zOrigin || 0) {
    style[_transformOriginProp] = _firstTwoOnly(origin);
  }

  cache.xOffset = cache.yOffset = 0;
  cache.force3D = _config.force3D;
  cache.renderTransform = cache.svg ? _renderSVGTransforms : _supports3D ? _renderCSSTransforms : _renderNon3DTransforms;
  cache.uncache = 0;
  return cache;
},
    _firstTwoOnly = function _firstTwoOnly(value) {
  return (value = value.split(" "))[0] + " " + value[1];
},
    //for handling transformOrigin values, stripping out the 3rd dimension
_addPxTranslate = function _addPxTranslate(target, start, value) {
  var unit = getUnit(start);
  return _round$1(parseFloat(start) + parseFloat(_convertToUnit(target, "x", value + "px", unit))) + unit;
},
    _renderNon3DTransforms = function _renderNon3DTransforms(ratio, cache) {
  cache.z = "0px";
  cache.rotationY = cache.rotationX = "0deg";
  cache.force3D = 0;

  _renderCSSTransforms(ratio, cache);
},
    _zeroDeg = "0deg",
    _zeroPx = "0px",
    _endParenthesis = ") ",
    _renderCSSTransforms = function _renderCSSTransforms(ratio, cache) {
  var _ref = cache || this,
      xPercent = _ref.xPercent,
      yPercent = _ref.yPercent,
      x = _ref.x,
      y = _ref.y,
      z = _ref.z,
      rotation = _ref.rotation,
      rotationY = _ref.rotationY,
      rotationX = _ref.rotationX,
      skewX = _ref.skewX,
      skewY = _ref.skewY,
      scaleX = _ref.scaleX,
      scaleY = _ref.scaleY,
      transformPerspective = _ref.transformPerspective,
      force3D = _ref.force3D,
      target = _ref.target,
      zOrigin = _ref.zOrigin,
      transforms = "",
      use3D = force3D === "auto" && ratio && ratio !== 1 || force3D === true; // Safari has a bug that causes it not to render 3D transform-origin values properly, so we force the z origin to 0, record it in the cache, and then do the math here to offset the translate values accordingly (basically do the 3D transform-origin part manually)


  if (zOrigin && (rotationX !== _zeroDeg || rotationY !== _zeroDeg)) {
    var angle = parseFloat(rotationY) * _DEG2RAD,
        a13 = Math.sin(angle),
        a33 = Math.cos(angle),
        cos;

    angle = parseFloat(rotationX) * _DEG2RAD;
    cos = Math.cos(angle);
    x = _addPxTranslate(target, x, a13 * cos * -zOrigin);
    y = _addPxTranslate(target, y, -Math.sin(angle) * -zOrigin);
    z = _addPxTranslate(target, z, a33 * cos * -zOrigin + zOrigin);
  }

  if (transformPerspective !== _zeroPx) {
    transforms += "perspective(" + transformPerspective + _endParenthesis;
  }

  if (xPercent || yPercent) {
    transforms += "translate(" + xPercent + "%, " + yPercent + "%) ";
  }

  if (use3D || x !== _zeroPx || y !== _zeroPx || z !== _zeroPx) {
    transforms += z !== _zeroPx || use3D ? "translate3d(" + x + ", " + y + ", " + z + ") " : "translate(" + x + ", " + y + _endParenthesis;
  }

  if (rotation !== _zeroDeg) {
    transforms += "rotate(" + rotation + _endParenthesis;
  }

  if (rotationY !== _zeroDeg) {
    transforms += "rotateY(" + rotationY + _endParenthesis;
  }

  if (rotationX !== _zeroDeg) {
    transforms += "rotateX(" + rotationX + _endParenthesis;
  }

  if (skewX !== _zeroDeg || skewY !== _zeroDeg) {
    transforms += "skew(" + skewX + ", " + skewY + _endParenthesis;
  }

  if (scaleX !== 1 || scaleY !== 1) {
    transforms += "scale(" + scaleX + ", " + scaleY + _endParenthesis;
  }

  target.style[_transformProp$1] = transforms || "translate(0, 0)";
},
    _renderSVGTransforms = function _renderSVGTransforms(ratio, cache) {
  var _ref2 = cache || this,
      xPercent = _ref2.xPercent,
      yPercent = _ref2.yPercent,
      x = _ref2.x,
      y = _ref2.y,
      rotation = _ref2.rotation,
      skewX = _ref2.skewX,
      skewY = _ref2.skewY,
      scaleX = _ref2.scaleX,
      scaleY = _ref2.scaleY,
      target = _ref2.target,
      xOrigin = _ref2.xOrigin,
      yOrigin = _ref2.yOrigin,
      xOffset = _ref2.xOffset,
      yOffset = _ref2.yOffset,
      forceCSS = _ref2.forceCSS,
      tx = parseFloat(x),
      ty = parseFloat(y),
      a11,
      a21,
      a12,
      a22,
      temp;

  rotation = parseFloat(rotation);
  skewX = parseFloat(skewX);
  skewY = parseFloat(skewY);

  if (skewY) {
    //for performance reasons, we combine all skewing into the skewX and rotation values. Remember, a skewY of 10 degrees looks the same as a rotation of 10 degrees plus a skewX of 10 degrees.
    skewY = parseFloat(skewY);
    skewX += skewY;
    rotation += skewY;
  }

  if (rotation || skewX) {
    rotation *= _DEG2RAD;
    skewX *= _DEG2RAD;
    a11 = Math.cos(rotation) * scaleX;
    a21 = Math.sin(rotation) * scaleX;
    a12 = Math.sin(rotation - skewX) * -scaleY;
    a22 = Math.cos(rotation - skewX) * scaleY;

    if (skewX) {
      skewY *= _DEG2RAD;
      temp = Math.tan(skewX - skewY);
      temp = Math.sqrt(1 + temp * temp);
      a12 *= temp;
      a22 *= temp;

      if (skewY) {
        temp = Math.tan(skewY);
        temp = Math.sqrt(1 + temp * temp);
        a11 *= temp;
        a21 *= temp;
      }
    }

    a11 = _round$1(a11);
    a21 = _round$1(a21);
    a12 = _round$1(a12);
    a22 = _round$1(a22);
  } else {
    a11 = scaleX;
    a22 = scaleY;
    a21 = a12 = 0;
  }

  if (tx && !~(x + "").indexOf("px") || ty && !~(y + "").indexOf("px")) {
    tx = _convertToUnit(target, "x", x, "px");
    ty = _convertToUnit(target, "y", y, "px");
  }

  if (xOrigin || yOrigin || xOffset || yOffset) {
    tx = _round$1(tx + xOrigin - (xOrigin * a11 + yOrigin * a12) + xOffset);
    ty = _round$1(ty + yOrigin - (xOrigin * a21 + yOrigin * a22) + yOffset);
  }

  if (xPercent || yPercent) {
    //The SVG spec doesn't support percentage-based translation in the "transform" attribute, so we merge it into the translation to simulate it.
    temp = target.getBBox();
    tx = _round$1(tx + xPercent / 100 * temp.width);
    ty = _round$1(ty + yPercent / 100 * temp.height);
  }

  temp = "matrix(" + a11 + "," + a21 + "," + a12 + "," + a22 + "," + tx + "," + ty + ")";
  target.setAttribute("transform", temp);
  forceCSS && (target.style[_transformProp$1] = temp); //some browsers prioritize CSS transforms over the transform attribute. When we sense that the user has CSS transforms applied, we must overwrite them this way (otherwise some browser simply won't render the transform attribute changes!)
},
    _addRotationalPropTween = function _addRotationalPropTween(plugin, target, property, startNum, endValue) {
  var cap = 360,
      isString = _isString$1(endValue),
      endNum = parseFloat(endValue) * (isString && ~endValue.indexOf("rad") ? _RAD2DEG : 1),
      change = endNum - startNum,
      finalValue = startNum + change + "deg",
      direction,
      pt;

  if (isString) {
    direction = endValue.split("_")[1];

    if (direction === "short") {
      change %= cap;

      if (change !== change % (cap / 2)) {
        change += change < 0 ? cap : -cap;
      }
    }

    if (direction === "cw" && change < 0) {
      change = (change + cap * _bigNum) % cap - ~~(change / cap) * cap;
    } else if (direction === "ccw" && change > 0) {
      change = (change - cap * _bigNum) % cap - ~~(change / cap) * cap;
    }
  }

  plugin._pt = pt = new PropTween(plugin._pt, target, property, startNum, change, _renderPropWithEnd);
  pt.e = finalValue;
  pt.u = "deg";

  plugin._props.push(property);

  return pt;
},
    _assign = function _assign(target, source) {
  // Internet Explorer doesn't have Object.assign(), so we recreate it here.
  for (var p in source) {
    target[p] = source[p];
  }

  return target;
},
    _addRawTransformPTs = function _addRawTransformPTs(plugin, transforms, target) {
  //for handling cases where someone passes in a whole transform string, like transform: "scale(2, 3) rotate(20deg) translateY(30em)"
  var startCache = _assign({}, target._gsap),
      exclude = "perspective,force3D,transformOrigin,svgOrigin",
      style = target.style,
      endCache,
      p,
      startValue,
      endValue,
      startNum,
      endNum,
      startUnit,
      endUnit;

  if (startCache.svg) {
    startValue = target.getAttribute("transform");
    target.setAttribute("transform", "");
    style[_transformProp$1] = transforms;
    endCache = _parseTransform(target, 1);

    _removeProperty(target, _transformProp$1);

    target.setAttribute("transform", startValue);
  } else {
    startValue = getComputedStyle(target)[_transformProp$1];
    style[_transformProp$1] = transforms;
    endCache = _parseTransform(target, 1);
    style[_transformProp$1] = startValue;
  }

  for (p in _transformProps) {
    startValue = startCache[p];
    endValue = endCache[p];

    if (startValue !== endValue && exclude.indexOf(p) < 0) {
      //tweening to no perspective gives very unintuitive results - just keep the same perspective in that case.
      startUnit = getUnit(startValue);
      endUnit = getUnit(endValue);
      startNum = startUnit !== endUnit ? _convertToUnit(target, p, startValue, endUnit) : parseFloat(startValue);
      endNum = parseFloat(endValue);
      plugin._pt = new PropTween(plugin._pt, endCache, p, startNum, endNum - startNum, _renderCSSProp);
      plugin._pt.u = endUnit || 0;

      plugin._props.push(p);
    }
  }

  _assign(endCache, startCache);
}; // handle splitting apart padding, margin, borderWidth, and borderRadius into their 4 components. Firefox, for example, won't report borderRadius correctly - it will only do borderTopLeftRadius and the other corners. We also want to handle paddingTop, marginLeft, borderRightWidth, etc.


_forEachName("padding,margin,Width,Radius", function (name, index) {
  var t = "Top",
      r = "Right",
      b = "Bottom",
      l = "Left",
      props = (index < 3 ? [t, r, b, l] : [t + l, t + r, b + r, b + l]).map(function (side) {
    return index < 2 ? name + side : "border" + side + name;
  });

  _specialProps[index > 1 ? "border" + name : name] = function (plugin, target, property, endValue, tween) {
    var a, vars;

    if (arguments.length < 4) {
      // getter, passed target, property, and unit (from _get())
      a = props.map(function (prop) {
        return _get(plugin, prop, property);
      });
      vars = a.join(" ");
      return vars.split(a[0]).length === 5 ? a[0] : vars;
    }

    a = (endValue + "").split(" ");
    vars = {};
    props.forEach(function (prop, i) {
      return vars[prop] = a[i] = a[i] || a[(i - 1) / 2 | 0];
    });
    plugin.init(target, vars, tween);
  };
});

var CSSPlugin = {
  name: "css",
  register: _initCore$1,
  targetTest: function targetTest(target) {
    return target.style && target.nodeType;
  },
  init: function init(target, vars, tween, index, targets) {
    var props = this._props,
        style = target.style,
        startAt = tween.vars.startAt,
        startValue,
        endValue,
        endNum,
        startNum,
        type,
        specialProp,
        p,
        startUnit,
        endUnit,
        relative,
        isTransformRelated,
        transformPropTween,
        cache,
        smooth,
        hasPriority,
        inlineProps,
        finalTransformValue;
    _pluginInitted || _initCore$1(); // we may call init() multiple times on the same plugin instance, like when adding special properties, so make sure we don't overwrite the revert data or inlineProps

    this.styles = this.styles || _getStyleSaver(target);
    inlineProps = this.styles.props;
    this.tween = tween;

    for (p in vars) {
      if (p === "autoRound") {
        continue;
      }

      endValue = vars[p];

      if (_plugins[p] && _checkPlugin(p, vars, tween, index, target, targets)) {
        // plugins
        continue;
      }

      type = typeof endValue;
      specialProp = _specialProps[p];

      if (type === "function") {
        endValue = endValue.call(tween, index, target, targets);
        type = typeof endValue;
      }

      if (type === "string" && ~endValue.indexOf("random(")) {
        endValue = _replaceRandom(endValue);
      }

      if (specialProp) {
        specialProp(this, target, p, endValue, tween) && (hasPriority = 1);
      } else if (p.substr(0, 2) === "--") {
        //CSS variable
        startValue = (getComputedStyle(target).getPropertyValue(p) + "").trim();
        endValue += "";
        _colorExp.lastIndex = 0;

        if (!_colorExp.test(startValue)) {
          // colors don't have units
          startUnit = getUnit(startValue);
          endUnit = getUnit(endValue);
          endUnit ? startUnit !== endUnit && (startValue = _convertToUnit(target, p, startValue, endUnit) + endUnit) : startUnit && (endValue += startUnit);
        }

        this.add(style, "setProperty", startValue, endValue, index, targets, 0, 0, p);
        props.push(p);
        inlineProps.push(p, 0, style[p]);
      } else if (type !== "undefined") {
        if (startAt && p in startAt) {
          // in case someone hard-codes a complex value as the start, like top: "calc(2vh / 2)". Without this, it'd use the computed value (always in px)
          startValue = typeof startAt[p] === "function" ? startAt[p].call(tween, index, target, targets) : startAt[p];
          _isString$1(startValue) && ~startValue.indexOf("random(") && (startValue = _replaceRandom(startValue));
          getUnit(startValue + "") || startValue === "auto" || (startValue += _config.units[p] || getUnit(_get(target, p)) || ""); // for cases when someone passes in a unitless value like {x: 100}; if we try setting translate(100, 0px) it won't work.

          (startValue + "").charAt(1) === "=" && (startValue = _get(target, p)); // can't work with relative values
        } else {
          startValue = _get(target, p);
        }

        startNum = parseFloat(startValue);
        relative = type === "string" && endValue.charAt(1) === "=" && endValue.substr(0, 2);
        relative && (endValue = endValue.substr(2));
        endNum = parseFloat(endValue);

        if (p in _propertyAliases) {
          if (p === "autoAlpha") {
            //special case where we control the visibility along with opacity. We still allow the opacity value to pass through and get tweened.
            if (startNum === 1 && _get(target, "visibility") === "hidden" && endNum) {
              //if visibility is initially set to "hidden", we should interpret that as intent to make opacity 0 (a convenience)
              startNum = 0;
            }

            inlineProps.push("visibility", 0, style.visibility);

            _addNonTweeningPT(this, style, "visibility", startNum ? "inherit" : "hidden", endNum ? "inherit" : "hidden", !endNum);
          }

          if (p !== "scale" && p !== "transform") {
            p = _propertyAliases[p];
            ~p.indexOf(",") && (p = p.split(",")[0]);
          }
        }

        isTransformRelated = p in _transformProps; //--- TRANSFORM-RELATED ---

        if (isTransformRelated) {
          this.styles.save(p);
          finalTransformValue = endValue; // this is always the same as endValue except when it's a var(--) value, in which case we need to calculate the end value.

          if (type === "string" && endValue.substring(0, 6) === "var(--") {
            endValue = _getComputedProperty(target, endValue.substring(4, endValue.indexOf(")")));

            if (endValue.substring(0, 5) === "calc(") {
              var origPerspective = target.style.perspective;
              target.style.perspective = endValue;
              endValue = _getComputedProperty(target, "perspective");
              origPerspective ? target.style.perspective = origPerspective : _removeProperty(target, "perspective");
            }

            endNum = parseFloat(endValue);
          }

          if (!transformPropTween) {
            cache = target._gsap;
            cache.renderTransform && !vars.parseTransform || _parseTransform(target, vars.parseTransform); // if, for example, gsap.set(... {transform:"translateX(50vw)"}), the _get() call doesn't parse the transform, thus cache.renderTransform won't be set yet so force the parsing of the transform here.

            smooth = vars.smoothOrigin !== false && cache.smooth;
            transformPropTween = this._pt = new PropTween(this._pt, style, _transformProp$1, 0, 1, cache.renderTransform, cache, 0, -1); //the first time through, create the rendering PropTween so that it runs LAST (in the linked list, we keep adding to the beginning)

            transformPropTween.dep = 1; //flag it as dependent so that if things get killed/overwritten and this is the only PropTween left, we can safely kill the whole tween.
          }

          if (p === "scale") {
            this._pt = new PropTween(this._pt, cache, "scaleY", cache.scaleY, (relative ? _parseRelative(cache.scaleY, relative + endNum) : endNum) - cache.scaleY || 0, _renderCSSProp);
            this._pt.u = 0;
            props.push("scaleY", p);
            p += "X";
          } else if (p === "transformOrigin") {
            inlineProps.push(_transformOriginProp, 0, style[_transformOriginProp]);
            endValue = _convertKeywordsToPercentages(endValue); //in case something like "left top" or "bottom right" is passed in. Convert to percentages.

            if (cache.svg) {
              _applySVGOrigin(target, endValue, 0, smooth, 0, this);
            } else {
              endUnit = parseFloat(endValue.split(" ")[2]) || 0; //handle the zOrigin separately!

              endUnit !== cache.zOrigin && _addNonTweeningPT(this, cache, "zOrigin", cache.zOrigin, endUnit);

              _addNonTweeningPT(this, style, p, _firstTwoOnly(startValue), _firstTwoOnly(endValue));
            }

            continue;
          } else if (p === "svgOrigin") {
            _applySVGOrigin(target, endValue, 1, smooth, 0, this);

            continue;
          } else if (p in _rotationalProperties) {
            _addRotationalPropTween(this, cache, p, startNum, relative ? _parseRelative(startNum, relative + endValue) : endValue);

            continue;
          } else if (p === "smoothOrigin") {
            _addNonTweeningPT(this, cache, "smooth", cache.smooth, endValue);

            continue;
          } else if (p === "force3D") {
            cache[p] = endValue;
            continue;
          } else if (p === "transform") {
            _addRawTransformPTs(this, endValue, target);

            continue;
          }
        } else if (!(p in style)) {
          p = _checkPropPrefix(p) || p;
        }

        if (isTransformRelated || (endNum || endNum === 0) && (startNum || startNum === 0) && !_complexExp.test(endValue) && p in style) {
          startUnit = (startValue + "").substr((startNum + "").length);
          endNum || (endNum = 0); // protect against NaN

          endUnit = getUnit(endValue) || (p in _config.units ? _config.units[p] : startUnit);
          startUnit !== endUnit && (startNum = _convertToUnit(target, p, startValue, endUnit));
          this._pt = new PropTween(this._pt, isTransformRelated ? cache : style, p, startNum, (relative ? _parseRelative(startNum, relative + endNum) : endNum) - startNum, !isTransformRelated && (endUnit === "px" || p === "zIndex") && vars.autoRound !== false ? _renderRoundedCSSProp : _renderCSSProp);
          this._pt.u = endUnit || 0;

          if (isTransformRelated && finalTransformValue !== endValue) {
            this._pt.b = startValue;
            this._pt.e = finalTransformValue;
            this._pt.r = _renderCSSPropWithBeginningAndEnd;
          } else if (startUnit !== endUnit && endUnit !== "%") {
            //when the tween goes all the way back to the beginning, we need to revert it to the OLD/ORIGINAL value (with those units). We record that as a "b" (beginning) property and point to a render method that handles that. (performance optimization)
            this._pt.b = startValue;
            this._pt.r = _renderCSSPropWithBeginning;
          }
        } else if (!(p in style)) {
          if (p in target) {
            //maybe it's not a style - it could be a property added directly to an element in which case we'll try to animate that.
            this.add(target, p, startValue || target[p], relative ? relative + endValue : endValue, index, targets);
          } else if (p !== "parseTransform") {
            _missingPlugin(p, endValue);

            continue;
          }
        } else {
          _tweenComplexCSSString.call(this, target, p, startValue, relative ? relative + endValue : endValue);
        }

        isTransformRelated || (p in style ? inlineProps.push(p, 0, style[p]) : typeof target[p] === "function" ? inlineProps.push(p, 2, target[p]()) : inlineProps.push(p, 1, startValue || target[p]));
        props.push(p);
      }
    }

    hasPriority && _sortPropTweensByPriority(this);
  },
  render: function render(ratio, data) {
    if (data.tween._time || !_reverting()) {
      var pt = data._pt;

      while (pt) {
        pt.r(ratio, pt.d);
        pt = pt._next;
      }
    } else {
      data.styles.revert();
    }
  },
  get: _get,
  aliases: _propertyAliases,
  getSetter: function getSetter(target, property, plugin) {
    //returns a setter function that accepts target, property, value and applies it accordingly. Remember, properties like "x" aren't as simple as target.style.property = value because they've got to be applied to a proxy object and then merged into a transform string in a renderer.
    var p = _propertyAliases[property];
    p && p.indexOf(",") < 0 && (property = p);
    return property in _transformProps && property !== _transformOriginProp && (target._gsap.x || _get(target, "x")) ? plugin && _recentSetterPlugin === plugin ? property === "scale" ? _setterScale : _setterTransform : (_recentSetterPlugin = plugin || {}) && (property === "scale" ? _setterScaleWithRender : _setterTransformWithRender) : target.style && !_isUndefined(target.style[property]) ? _setterCSSStyle : ~property.indexOf("-") ? _setterCSSProp : _getSetter(target, property);
  },
  core: {
    _removeProperty: _removeProperty,
    _getMatrix: _getMatrix
  }
};
gsap$2.utils.checkPrefix = _checkPropPrefix;
gsap$2.core.getStyleSaver = _getStyleSaver;

(function (positionAndScale, rotation, others, aliases) {
  var all = _forEachName(positionAndScale + "," + rotation + "," + others, function (name) {
    _transformProps[name] = 1;
  });

  _forEachName(rotation, function (name) {
    _config.units[name] = "deg";
    _rotationalProperties[name] = 1;
  });

  _propertyAliases[all[13]] = positionAndScale + "," + rotation;

  _forEachName(aliases, function (name) {
    var split = name.split(":");
    _propertyAliases[split[1]] = all[split[0]];
  });
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");

_forEachName("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function (name) {
  _config.units[name] = "px";
});

gsap$2.registerPlugin(CSSPlugin);

var gsapWithCSS = gsap$2.registerPlugin(CSSPlugin) || gsap$2;
    // to protect from tree shaking
gsapWithCSS.core.Tween;

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); return Constructor; }

/*!
 * Observer 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/

/* eslint-disable */
var gsap$1,
    _coreInitted$1,
    _win$1,
    _doc$1,
    _docEl$1,
    _body$1,
    _isTouch,
    _pointerType,
    ScrollTrigger$1,
    _root$1,
    _normalizer$1,
    _eventTypes,
    _context$1,
    _getGSAP$1 = function _getGSAP() {
  return gsap$1 || typeof window !== "undefined" && (gsap$1 = window.gsap) && gsap$1.registerPlugin && gsap$1;
},
    _startup$1 = 1,
    _observers = [],
    _scrollers = [],
    _proxies = [],
    _getTime$1 = Date.now,
    _bridge = function _bridge(name, value) {
  return value;
},
    _integrate = function _integrate() {
  var core = ScrollTrigger$1.core,
      data = core.bridge || {},
      scrollers = core._scrollers,
      proxies = core._proxies;
  scrollers.push.apply(scrollers, _scrollers);
  proxies.push.apply(proxies, _proxies);
  _scrollers = scrollers;
  _proxies = proxies;

  _bridge = function _bridge(name, value) {
    return data[name](value);
  };
},
    _getProxyProp = function _getProxyProp(element, property) {
  return ~_proxies.indexOf(element) && _proxies[_proxies.indexOf(element) + 1][property];
},
    _isViewport$1 = function _isViewport(el) {
  return !!~_root$1.indexOf(el);
},
    _addListener$1 = function _addListener(element, type, func, passive, capture) {
  return element.addEventListener(type, func, {
    passive: passive !== false,
    capture: !!capture
  });
},
    _removeListener$1 = function _removeListener(element, type, func, capture) {
  return element.removeEventListener(type, func, !!capture);
},
    _scrollLeft = "scrollLeft",
    _scrollTop = "scrollTop",
    _onScroll$1 = function _onScroll() {
  return _normalizer$1 && _normalizer$1.isPressed || _scrollers.cache++;
},
    _scrollCacheFunc = function _scrollCacheFunc(f, doNotCache) {
  var cachingFunc = function cachingFunc(value) {
    // since reading the scrollTop/scrollLeft/pageOffsetY/pageOffsetX can trigger a layout, this function allows us to cache the value so it only gets read fresh after a "scroll" event fires (or while we're refreshing because that can lengthen the page and alter the scroll position). when "soft" is true, that means don't actually set the scroll, but cache the new value instead (useful in ScrollSmoother)
    if (value || value === 0) {
      _startup$1 && (_win$1.history.scrollRestoration = "manual"); // otherwise the new position will get overwritten by the browser onload.

      var isNormalizing = _normalizer$1 && _normalizer$1.isPressed;
      value = cachingFunc.v = Math.round(value) || (_normalizer$1 && _normalizer$1.iOS ? 1 : 0); //TODO: iOS Bug: if you allow it to go to 0, Safari can start to report super strange (wildly inaccurate) touch positions!

      f(value);
      cachingFunc.cacheID = _scrollers.cache;
      isNormalizing && _bridge("ss", value); // set scroll (notify ScrollTrigger so it can dispatch a "scrollStart" event if necessary
    } else if (doNotCache || _scrollers.cache !== cachingFunc.cacheID || _bridge("ref")) {
      cachingFunc.cacheID = _scrollers.cache;
      cachingFunc.v = f();
    }

    return cachingFunc.v + cachingFunc.offset;
  };

  cachingFunc.offset = 0;
  return f && cachingFunc;
},
    _horizontal = {
  s: _scrollLeft,
  p: "left",
  p2: "Left",
  os: "right",
  os2: "Right",
  d: "width",
  d2: "Width",
  a: "x",
  sc: _scrollCacheFunc(function (value) {
    return arguments.length ? _win$1.scrollTo(value, _vertical.sc()) : _win$1.pageXOffset || _doc$1[_scrollLeft] || _docEl$1[_scrollLeft] || _body$1[_scrollLeft] || 0;
  })
},
    _vertical = {
  s: _scrollTop,
  p: "top",
  p2: "Top",
  os: "bottom",
  os2: "Bottom",
  d: "height",
  d2: "Height",
  a: "y",
  op: _horizontal,
  sc: _scrollCacheFunc(function (value) {
    return arguments.length ? _win$1.scrollTo(_horizontal.sc(), value) : _win$1.pageYOffset || _doc$1[_scrollTop] || _docEl$1[_scrollTop] || _body$1[_scrollTop] || 0;
  })
},
    _getTarget = function _getTarget(t, self) {
  return (self && self._ctx && self._ctx.selector || gsap$1.utils.toArray)(t)[0] || (typeof t === "string" && gsap$1.config().nullTargetWarn !== false ? console.warn("Element not found:", t) : null);
},
    _isWithin = function _isWithin(element, list) {
  // check if the element is in the list or is a descendant of an element in the list.
  var i = list.length;

  while (i--) {
    if (list[i] === element || list[i].contains(element)) {
      return true;
    }
  }

  return false;
},
    _getScrollFunc = function _getScrollFunc(element, _ref) {
  var s = _ref.s,
      sc = _ref.sc;
  // we store the scroller functions in an alternating sequenced Array like [element, verticalScrollFunc, horizontalScrollFunc, ...] so that we can minimize memory, maximize performance, and we also record the last position as a ".rec" property in order to revert to that after refreshing to ensure things don't shift around.
  _isViewport$1(element) && (element = _doc$1.scrollingElement || _docEl$1);

  var i = _scrollers.indexOf(element),
      offset = sc === _vertical.sc ? 1 : 2;

  !~i && (i = _scrollers.push(element) - 1);
  _scrollers[i + offset] || _addListener$1(element, "scroll", _onScroll$1); // clear the cache when a scroll occurs

  var prev = _scrollers[i + offset],
      func = prev || (_scrollers[i + offset] = _scrollCacheFunc(_getProxyProp(element, s), true) || (_isViewport$1(element) ? sc : _scrollCacheFunc(function (value) {
    return arguments.length ? element[s] = value : element[s];
  })));
  func.target = element;
  prev || (func.smooth = gsap$1.getProperty(element, "scrollBehavior") === "smooth"); // only set it the first time (don't reset every time a scrollFunc is requested because perhaps it happens during a refresh() when it's disabled in ScrollTrigger.

  return func;
},
    _getVelocityProp = function _getVelocityProp(value, minTimeRefresh, useDelta) {
  var v1 = value,
      v2 = value,
      t1 = _getTime$1(),
      t2 = t1,
      min = minTimeRefresh || 50,
      dropToZeroTime = Math.max(500, min * 3),
      update = function update(value, force) {
    var t = _getTime$1();

    if (force || t - t1 > min) {
      v2 = v1;
      v1 = value;
      t2 = t1;
      t1 = t;
    } else if (useDelta) {
      v1 += value;
    } else {
      // not totally necessary, but makes it a bit more accurate by adjusting the v1 value according to the new slope. This way we're not just ignoring the incoming data. Removing for now because it doesn't seem to make much practical difference and it's probably not worth the kb.
      v1 = v2 + (value - v2) / (t - t2) * (t1 - t2);
    }
  },
      reset = function reset() {
    v2 = v1 = useDelta ? 0 : v1;
    t2 = t1 = 0;
  },
      getVelocity = function getVelocity(latestValue) {
    var tOld = t2,
        vOld = v2,
        t = _getTime$1();

    (latestValue || latestValue === 0) && latestValue !== v1 && update(latestValue);
    return t1 === t2 || t - t2 > dropToZeroTime ? 0 : (v1 + (useDelta ? vOld : -vOld)) / ((useDelta ? t : t1) - tOld) * 1000;
  };

  return {
    update: update,
    reset: reset,
    getVelocity: getVelocity
  };
},
    _getEvent = function _getEvent(e, preventDefault) {
  preventDefault && !e._gsapAllow && e.cancelable !== false && e.preventDefault();
  return e.changedTouches ? e.changedTouches[0] : e;
},
    _getAbsoluteMax = function _getAbsoluteMax(a) {
  var max = Math.max.apply(Math, a),
      min = Math.min.apply(Math, a);
  return Math.abs(max) >= Math.abs(min) ? max : min;
},
    _setScrollTrigger = function _setScrollTrigger() {
  ScrollTrigger$1 = gsap$1.core.globals().ScrollTrigger;
  ScrollTrigger$1 && ScrollTrigger$1.core && _integrate();
},
    _initCore = function _initCore(core) {
  gsap$1 = core || _getGSAP$1();

  if (!_coreInitted$1 && gsap$1 && typeof document !== "undefined" && document.body) {
    _win$1 = window;
    _doc$1 = document;
    _docEl$1 = _doc$1.documentElement;
    _body$1 = _doc$1.body;
    _root$1 = [_win$1, _doc$1, _docEl$1, _body$1];
    gsap$1.utils.clamp;

    _context$1 = gsap$1.core.context || function () {};

    _pointerType = "onpointerenter" in _body$1 ? "pointer" : "mouse"; // isTouch is 0 if no touch, 1 if ONLY touch, and 2 if it can accommodate touch but also other types like mouse/pointer.

    _isTouch = Observer.isTouch = _win$1.matchMedia && _win$1.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in _win$1 || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0;
    _eventTypes = Observer.eventTypes = ("ontouchstart" in _docEl$1 ? "touchstart,touchmove,touchcancel,touchend" : !("onpointerdown" in _docEl$1) ? "mousedown,mousemove,mouseup,mouseup" : "pointerdown,pointermove,pointercancel,pointerup").split(",");
    setTimeout(function () {
      return _startup$1 = 0;
    }, 500);
    _coreInitted$1 = 1;
  }

  ScrollTrigger$1 || _setScrollTrigger(); // Observer might be initted BEFORE ScrollTrigger, so don't put this with the initting code. ScrollTrigger will call Observer.register() when it inits.

  return _coreInitted$1;
};

_horizontal.op = _vertical;
_scrollers.cache = 0;
var Observer = /*#__PURE__*/function () {
  function Observer(vars) {
    this.init(vars);
  }

  var _proto = Observer.prototype;

  _proto.init = function init(vars) {
    _coreInitted$1 || _initCore(gsap$1) || console.warn("Please gsap.registerPlugin(Observer)");
    ScrollTrigger$1 || _setScrollTrigger();
    var tolerance = vars.tolerance,
        dragMinimum = vars.dragMinimum,
        type = vars.type,
        target = vars.target,
        lineHeight = vars.lineHeight,
        debounce = vars.debounce,
        preventDefault = vars.preventDefault,
        onStop = vars.onStop,
        onStopDelay = vars.onStopDelay,
        ignore = vars.ignore,
        wheelSpeed = vars.wheelSpeed,
        event = vars.event,
        onDragStart = vars.onDragStart,
        onDragEnd = vars.onDragEnd,
        onDrag = vars.onDrag,
        onPress = vars.onPress,
        onRelease = vars.onRelease,
        onRight = vars.onRight,
        onLeft = vars.onLeft,
        onUp = vars.onUp,
        onDown = vars.onDown,
        onChangeX = vars.onChangeX,
        onChangeY = vars.onChangeY,
        onChange = vars.onChange,
        onToggleX = vars.onToggleX,
        onToggleY = vars.onToggleY,
        onHover = vars.onHover,
        onHoverEnd = vars.onHoverEnd,
        onMove = vars.onMove,
        ignoreCheck = vars.ignoreCheck,
        isNormalizer = vars.isNormalizer,
        onGestureStart = vars.onGestureStart,
        onGestureEnd = vars.onGestureEnd,
        onWheel = vars.onWheel,
        onEnable = vars.onEnable,
        onDisable = vars.onDisable,
        onClick = vars.onClick,
        scrollSpeed = vars.scrollSpeed,
        capture = vars.capture,
        allowClicks = vars.allowClicks,
        lockAxis = vars.lockAxis,
        onLockAxis = vars.onLockAxis;
    this.target = target = _getTarget(target) || _docEl$1;
    this.vars = vars;
    ignore && (ignore = gsap$1.utils.toArray(ignore));
    tolerance = tolerance || 1e-9;
    dragMinimum = dragMinimum || 0;
    wheelSpeed = wheelSpeed || 1;
    scrollSpeed = scrollSpeed || 1;
    type = type || "wheel,touch,pointer";
    debounce = debounce !== false;
    lineHeight || (lineHeight = parseFloat(_win$1.getComputedStyle(_body$1).lineHeight) || 22); // note: browser may report "normal", so default to 22.

    var id,
        onStopDelayedCall,
        dragged,
        moved,
        wheeled,
        locked,
        axis,
        self = this,
        prevDeltaX = 0,
        prevDeltaY = 0,
        passive = vars.passive || !preventDefault && vars.passive !== false,
        scrollFuncX = _getScrollFunc(target, _horizontal),
        scrollFuncY = _getScrollFunc(target, _vertical),
        scrollX = scrollFuncX(),
        scrollY = scrollFuncY(),
        limitToTouch = ~type.indexOf("touch") && !~type.indexOf("pointer") && _eventTypes[0] === "pointerdown",
        // for devices that accommodate mouse events and touch events, we need to distinguish.
    isViewport = _isViewport$1(target),
        ownerDoc = target.ownerDocument || _doc$1,
        deltaX = [0, 0, 0],
        // wheel, scroll, pointer/touch
    deltaY = [0, 0, 0],
        onClickTime = 0,
        clickCapture = function clickCapture() {
      return onClickTime = _getTime$1();
    },
        _ignoreCheck = function _ignoreCheck(e, isPointerOrTouch) {
      return (self.event = e) && ignore && _isWithin(e.target, ignore) || isPointerOrTouch && limitToTouch && e.pointerType !== "touch" || ignoreCheck && ignoreCheck(e, isPointerOrTouch);
    },
        onStopFunc = function onStopFunc() {
      self._vx.reset();

      self._vy.reset();

      onStopDelayedCall.pause();
      onStop && onStop(self);
    },
        update = function update() {
      var dx = self.deltaX = _getAbsoluteMax(deltaX),
          dy = self.deltaY = _getAbsoluteMax(deltaY),
          changedX = Math.abs(dx) >= tolerance,
          changedY = Math.abs(dy) >= tolerance;

      onChange && (changedX || changedY) && onChange(self, dx, dy, deltaX, deltaY); // in ScrollTrigger.normalizeScroll(), we need to know if it was touch/pointer so we need access to the deltaX/deltaY Arrays before we clear them out.

      if (changedX) {
        onRight && self.deltaX > 0 && onRight(self);
        onLeft && self.deltaX < 0 && onLeft(self);
        onChangeX && onChangeX(self);
        onToggleX && self.deltaX < 0 !== prevDeltaX < 0 && onToggleX(self);
        prevDeltaX = self.deltaX;
        deltaX[0] = deltaX[1] = deltaX[2] = 0;
      }

      if (changedY) {
        onDown && self.deltaY > 0 && onDown(self);
        onUp && self.deltaY < 0 && onUp(self);
        onChangeY && onChangeY(self);
        onToggleY && self.deltaY < 0 !== prevDeltaY < 0 && onToggleY(self);
        prevDeltaY = self.deltaY;
        deltaY[0] = deltaY[1] = deltaY[2] = 0;
      }

      if (moved || dragged) {
        onMove && onMove(self);

        if (dragged) {
          onDragStart && dragged === 1 && onDragStart(self);
          onDrag && onDrag(self);
          dragged = 0;
        }

        moved = false;
      }

      locked && !(locked = false) && onLockAxis && onLockAxis(self);

      if (wheeled) {
        onWheel(self);
        wheeled = false;
      }

      id = 0;
    },
        onDelta = function onDelta(x, y, index) {
      deltaX[index] += x;
      deltaY[index] += y;

      self._vx.update(x);

      self._vy.update(y);

      debounce ? id || (id = requestAnimationFrame(update)) : update();
    },
        onTouchOrPointerDelta = function onTouchOrPointerDelta(x, y) {
      if (lockAxis && !axis) {
        self.axis = axis = Math.abs(x) > Math.abs(y) ? "x" : "y";
        locked = true;
      }

      if (axis !== "y") {
        deltaX[2] += x;

        self._vx.update(x, true); // update the velocity as frequently as possible instead of in the debounced function so that very quick touch-scrolls (flicks) feel natural. If it's the mouse/touch/pointer, force it so that we get snappy/accurate momentum scroll.

      }

      if (axis !== "x") {
        deltaY[2] += y;

        self._vy.update(y, true);
      }

      debounce ? id || (id = requestAnimationFrame(update)) : update();
    },
        _onDrag = function _onDrag(e) {
      if (_ignoreCheck(e, 1)) {
        return;
      }

      e = _getEvent(e, preventDefault);
      var x = e.clientX,
          y = e.clientY,
          dx = x - self.x,
          dy = y - self.y,
          isDragging = self.isDragging;
      self.x = x;
      self.y = y;

      if (isDragging || (dx || dy) && (Math.abs(self.startX - x) >= dragMinimum || Math.abs(self.startY - y) >= dragMinimum)) {
        dragged || (dragged = isDragging ? 2 : 1); // dragged: 0 = not dragging, 1 = first drag, 2 = normal drag

        isDragging || (self.isDragging = true);
        onTouchOrPointerDelta(dx, dy);
      }
    },
        _onPress = self.onPress = function (e) {
      if (_ignoreCheck(e, 1) || e && e.button) {
        return;
      }

      self.axis = axis = null;
      onStopDelayedCall.pause();
      self.isPressed = true;
      e = _getEvent(e); // note: may need to preventDefault(?) Won't side-scroll on iOS Safari if we do, though.

      prevDeltaX = prevDeltaY = 0;
      self.startX = self.x = e.clientX;
      self.startY = self.y = e.clientY;

      self._vx.reset(); // otherwise the t2 may be stale if the user touches and flicks super fast and releases in less than 2 requestAnimationFrame ticks, causing velocity to be 0.


      self._vy.reset();

      _addListener$1(isNormalizer ? target : ownerDoc, _eventTypes[1], _onDrag, passive, true);

      self.deltaX = self.deltaY = 0;
      onPress && onPress(self);
    },
        _onRelease = self.onRelease = function (e) {
      if (_ignoreCheck(e, 1)) {
        return;
      }

      _removeListener$1(isNormalizer ? target : ownerDoc, _eventTypes[1], _onDrag, true);

      var isTrackingDrag = !isNaN(self.y - self.startY),
          wasDragging = self.isDragging,
          isDragNotClick = wasDragging && (Math.abs(self.x - self.startX) > 3 || Math.abs(self.y - self.startY) > 3),
          // some touch devices need some wiggle room in terms of sensing clicks - the finger may move a few pixels.
      eventData = _getEvent(e);

      if (!isDragNotClick && isTrackingDrag) {
        self._vx.reset();

        self._vy.reset(); //if (preventDefault && allowClicks && self.isPressed) { // check isPressed because in a rare edge case, the inputObserver in ScrollTrigger may stopPropagation() on the press/drag, so the onRelease may get fired without the onPress/onDrag ever getting called, thus it could trigger a click to occur on a link after scroll-dragging it.


        if (preventDefault && allowClicks) {
          gsap$1.delayedCall(0.08, function () {
            // some browsers (like Firefox) won't trust script-generated clicks, so if the user tries to click on a video to play it, for example, it simply won't work. Since a regular "click" event will most likely be generated anyway (one that has its isTrusted flag set to true), we must slightly delay our script-generated click so that the "real"/trusted one is prioritized. Remember, when there are duplicate events in quick succession, we suppress all but the first one. Some browsers don't even trigger the "real" one at all, so our synthetic one is a safety valve that ensures that no matter what, a click event does get dispatched.
            if (_getTime$1() - onClickTime > 300 && !e.defaultPrevented) {
              if (e.target.click) {
                //some browsers (like mobile Safari) don't properly trigger the click event
                e.target.click();
              } else if (ownerDoc.createEvent) {
                var syntheticEvent = ownerDoc.createEvent("MouseEvents");
                syntheticEvent.initMouseEvent("click", true, true, _win$1, 1, eventData.screenX, eventData.screenY, eventData.clientX, eventData.clientY, false, false, false, false, 0, null);
                e.target.dispatchEvent(syntheticEvent);
              }
            }
          });
        }
      }

      self.isDragging = self.isGesturing = self.isPressed = false;
      onStop && wasDragging && !isNormalizer && onStopDelayedCall.restart(true);
      dragged && update(); // in case debouncing, we don't want onDrag to fire AFTER onDragEnd().

      onDragEnd && wasDragging && onDragEnd(self);
      onRelease && onRelease(self, isDragNotClick);
    },
        _onGestureStart = function _onGestureStart(e) {
      return e.touches && e.touches.length > 1 && (self.isGesturing = true) && onGestureStart(e, self.isDragging);
    },
        _onGestureEnd = function _onGestureEnd() {
      return (self.isGesturing = false) || onGestureEnd(self);
    },
        onScroll = function onScroll(e) {
      if (_ignoreCheck(e)) {
        return;
      }

      var x = scrollFuncX(),
          y = scrollFuncY();
      onDelta((x - scrollX) * scrollSpeed, (y - scrollY) * scrollSpeed, 1);
      scrollX = x;
      scrollY = y;
      onStop && onStopDelayedCall.restart(true);
    },
        _onWheel = function _onWheel(e) {
      if (_ignoreCheck(e)) {
        return;
      }

      e = _getEvent(e, preventDefault);
      onWheel && (wheeled = true);
      var multiplier = (e.deltaMode === 1 ? lineHeight : e.deltaMode === 2 ? _win$1.innerHeight : 1) * wheelSpeed;
      onDelta(e.deltaX * multiplier, e.deltaY * multiplier, 0);
      onStop && !isNormalizer && onStopDelayedCall.restart(true);
    },
        _onMove = function _onMove(e) {
      if (_ignoreCheck(e)) {
        return;
      }

      var x = e.clientX,
          y = e.clientY,
          dx = x - self.x,
          dy = y - self.y;
      self.x = x;
      self.y = y;
      moved = true;
      onStop && onStopDelayedCall.restart(true);
      (dx || dy) && onTouchOrPointerDelta(dx, dy);
    },
        _onHover = function _onHover(e) {
      self.event = e;
      onHover(self);
    },
        _onHoverEnd = function _onHoverEnd(e) {
      self.event = e;
      onHoverEnd(self);
    },
        _onClick = function _onClick(e) {
      return _ignoreCheck(e) || _getEvent(e, preventDefault) && onClick(self);
    };

    onStopDelayedCall = self._dc = gsap$1.delayedCall(onStopDelay || 0.25, onStopFunc).pause();
    self.deltaX = self.deltaY = 0;
    self._vx = _getVelocityProp(0, 50, true);
    self._vy = _getVelocityProp(0, 50, true);
    self.scrollX = scrollFuncX;
    self.scrollY = scrollFuncY;
    self.isDragging = self.isGesturing = self.isPressed = false;

    _context$1(this);

    self.enable = function (e) {
      if (!self.isEnabled) {
        _addListener$1(isViewport ? ownerDoc : target, "scroll", _onScroll$1);

        type.indexOf("scroll") >= 0 && _addListener$1(isViewport ? ownerDoc : target, "scroll", onScroll, passive, capture);
        type.indexOf("wheel") >= 0 && _addListener$1(target, "wheel", _onWheel, passive, capture);

        if (type.indexOf("touch") >= 0 && _isTouch || type.indexOf("pointer") >= 0) {
          _addListener$1(target, _eventTypes[0], _onPress, passive, capture);

          _addListener$1(ownerDoc, _eventTypes[2], _onRelease);

          _addListener$1(ownerDoc, _eventTypes[3], _onRelease);

          allowClicks && _addListener$1(target, "click", clickCapture, true, true);
          onClick && _addListener$1(target, "click", _onClick);
          onGestureStart && _addListener$1(ownerDoc, "gesturestart", _onGestureStart);
          onGestureEnd && _addListener$1(ownerDoc, "gestureend", _onGestureEnd);
          onHover && _addListener$1(target, _pointerType + "enter", _onHover);
          onHoverEnd && _addListener$1(target, _pointerType + "leave", _onHoverEnd);
          onMove && _addListener$1(target, _pointerType + "move", _onMove);
        }

        self.isEnabled = true;
        self.isDragging = self.isGesturing = self.isPressed = moved = dragged = false;

        self._vx.reset();

        self._vy.reset();

        scrollX = scrollFuncX();
        scrollY = scrollFuncY();
        e && e.type && _onPress(e);
        onEnable && onEnable(self);
      }

      return self;
    };

    self.disable = function () {
      if (self.isEnabled) {
        // only remove the _onScroll listener if there aren't any others that rely on the functionality.
        _observers.filter(function (o) {
          return o !== self && _isViewport$1(o.target);
        }).length || _removeListener$1(isViewport ? ownerDoc : target, "scroll", _onScroll$1);

        if (self.isPressed) {
          self._vx.reset();

          self._vy.reset();

          _removeListener$1(isNormalizer ? target : ownerDoc, _eventTypes[1], _onDrag, true);
        }

        _removeListener$1(isViewport ? ownerDoc : target, "scroll", onScroll, capture);

        _removeListener$1(target, "wheel", _onWheel, capture);

        _removeListener$1(target, _eventTypes[0], _onPress, capture);

        _removeListener$1(ownerDoc, _eventTypes[2], _onRelease);

        _removeListener$1(ownerDoc, _eventTypes[3], _onRelease);

        _removeListener$1(target, "click", clickCapture, true);

        _removeListener$1(target, "click", _onClick);

        _removeListener$1(ownerDoc, "gesturestart", _onGestureStart);

        _removeListener$1(ownerDoc, "gestureend", _onGestureEnd);

        _removeListener$1(target, _pointerType + "enter", _onHover);

        _removeListener$1(target, _pointerType + "leave", _onHoverEnd);

        _removeListener$1(target, _pointerType + "move", _onMove);

        self.isEnabled = self.isPressed = self.isDragging = false;
        onDisable && onDisable(self);
      }
    };

    self.kill = self.revert = function () {
      self.disable();

      var i = _observers.indexOf(self);

      i >= 0 && _observers.splice(i, 1);
      _normalizer$1 === self && (_normalizer$1 = 0);
    };

    _observers.push(self);

    isNormalizer && _isViewport$1(target) && (_normalizer$1 = self);
    self.enable(event);
  };

  _createClass(Observer, [{
    key: "velocityX",
    get: function get() {
      return this._vx.getVelocity();
    }
  }, {
    key: "velocityY",
    get: function get() {
      return this._vy.getVelocity();
    }
  }]);

  return Observer;
}();
Observer.version = "3.15.0";

Observer.create = function (vars) {
  return new Observer(vars);
};

Observer.register = _initCore;

Observer.getAll = function () {
  return _observers.slice();
};

Observer.getById = function (id) {
  return _observers.filter(function (o) {
    return o.vars.id === id;
  })[0];
};

_getGSAP$1() && gsap$1.registerPlugin(Observer);

/*!
 * ScrollTrigger 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/


var gsap,
    _coreInitted,
    _win,
    _doc,
    _docEl,
    _body,
    _root,
    _resizeDelay,
    _toArray,
    _clamp,
    _time2,
    _syncInterval,
    _refreshing,
    _pointerIsDown,
    _transformProp,
    _i,
    _prevWidth,
    _prevHeight,
    _autoRefresh,
    _sort,
    _suppressOverwrites,
    _ignoreResize,
    _normalizer,
    _ignoreMobileResize,
    _baseScreenHeight,
    _baseScreenWidth,
    _fixIOSBug,
    _context,
    _scrollRestoration,
    _div100vh,
    _100vh,
    _isReverted,
    _clampingMax,
    _limitCallbacks,
    // if true, we'll only trigger callbacks if the active state toggles, so if you scroll immediately past both the start and end positions of a ScrollTrigger (thus inactive to inactive), neither its onEnter nor onLeave will be called. This is useful during startup.
_startup = 1,
    _getTime = Date.now,
    _time1 = _getTime(),
    _lastScrollTime = 0,
    _enabled = 0,
    _parseClamp = function _parseClamp(value, type, self) {
  var clamp = _isString(value) && (value.substr(0, 6) === "clamp(" || value.indexOf("max") > -1);
  self["_" + type + "Clamp"] = clamp;
  return clamp ? value.substr(6, value.length - 7) : value;
},
    _keepClamp = function _keepClamp(value, clamp) {
  return clamp && (!_isString(value) || value.substr(0, 6) !== "clamp(") ? "clamp(" + value + ")" : value;
},
    _rafBugFix = function _rafBugFix() {
  return _enabled && requestAnimationFrame(_rafBugFix);
},
    // in some browsers (like Firefox), screen repaints weren't consistent unless we had SOMETHING queued up in requestAnimationFrame()! So this just creates a super simple loop to keep it alive and smooth out repaints.
_pointerDownHandler = function _pointerDownHandler() {
  return _pointerIsDown = 1;
},
    _pointerUpHandler = function _pointerUpHandler() {
  return _pointerIsDown = 0;
},
    _passThrough = function _passThrough(v) {
  return v;
},
    _round = function _round(value) {
  return Math.round(value * 100000) / 100000 || 0;
},
    _windowExists = function _windowExists() {
  return typeof window !== "undefined";
},
    _getGSAP = function _getGSAP() {
  return gsap || _windowExists() && (gsap = window.gsap) && gsap.registerPlugin && gsap;
},
    _isViewport = function _isViewport(e) {
  return !!~_root.indexOf(e);
},
    _getViewportDimension = function _getViewportDimension(dimensionProperty) {
  return (dimensionProperty === "Height" ? _100vh : _win["inner" + dimensionProperty]) || _docEl["client" + dimensionProperty] || _body["client" + dimensionProperty];
},
    _getBoundsFunc = function _getBoundsFunc(element) {
  return _getProxyProp(element, "getBoundingClientRect") || (_isViewport(element) ? function () {
    _winOffsets.width = _win.innerWidth;
    _winOffsets.height = _100vh;
    return _winOffsets;
  } : function () {
    return _getBounds(element);
  });
},
    _getSizeFunc = function _getSizeFunc(scroller, isViewport, _ref) {
  var d = _ref.d,
      d2 = _ref.d2,
      a = _ref.a;
  return (a = _getProxyProp(scroller, "getBoundingClientRect")) ? function () {
    return a()[d];
  } : function () {
    return (isViewport ? _getViewportDimension(d2) : scroller["client" + d2]) || 0;
  };
},
    _getOffsetsFunc = function _getOffsetsFunc(element, isViewport) {
  return !isViewport || ~_proxies.indexOf(element) ? _getBoundsFunc(element) : function () {
    return _winOffsets;
  };
},
    _maxScroll = function _maxScroll(element, _ref2) {
  var s = _ref2.s,
      d2 = _ref2.d2,
      d = _ref2.d,
      a = _ref2.a;
  return Math.max(0, (s = "scroll" + d2) && (a = _getProxyProp(element, s)) ? a() - _getBoundsFunc(element)()[d] : _isViewport(element) ? (_docEl[s] || _body[s]) - _getViewportDimension(d2) : element[s] - element["offset" + d2]);
},
    _iterateAutoRefresh = function _iterateAutoRefresh(func, events) {
  for (var i = 0; i < _autoRefresh.length; i += 3) {
    (!events || ~events.indexOf(_autoRefresh[i + 1])) && func(_autoRefresh[i], _autoRefresh[i + 1], _autoRefresh[i + 2]);
  }
},
    _isString = function _isString(value) {
  return typeof value === "string";
},
    _isFunction = function _isFunction(value) {
  return typeof value === "function";
},
    _isNumber = function _isNumber(value) {
  return typeof value === "number";
},
    _isObject = function _isObject(value) {
  return typeof value === "object";
},
    _endAnimation = function _endAnimation(animation, reversed, pause) {
  return animation && animation.progress(reversed ? 0 : 1) && pause && animation.pause();
},
    _callback = function _callback(self, func, extraParam) {
  if (self.enabled) {
    var result = self._ctx ? self._ctx.add(function () {
      return func(self, extraParam);
    }) : func(self, extraParam);
    result && result.totalTime && (self.callbackAnimation = result);
  }
},
    _abs = Math.abs,
    _left = "left",
    _top = "top",
    _right = "right",
    _bottom = "bottom",
    _width = "width",
    _height = "height",
    _Right = "Right",
    _Left = "Left",
    _Top = "Top",
    _Bottom = "Bottom",
    _padding = "padding",
    _margin = "margin",
    _Width = "Width",
    _Height = "Height",
    _px = "px",
    _getComputedStyle = function _getComputedStyle(element) {
  return _win.getComputedStyle(element.nodeType === Node.DOCUMENT_NODE ? element.scrollingElement : element);
},
    _makePositionable = function _makePositionable(element) {
  // if the element already has position: absolute or fixed, leave that, otherwise make it position: relative
  var position = _getComputedStyle(element).position;

  element.style.position = position === "absolute" || position === "fixed" ? position : "relative";
},
    _setDefaults = function _setDefaults(obj, defaults) {
  for (var p in defaults) {
    p in obj || (obj[p] = defaults[p]);
  }

  return obj;
},
    _getBounds = function _getBounds(element, withoutTransforms) {
  var tween = withoutTransforms && _getComputedStyle(element)[_transformProp] !== "matrix(1, 0, 0, 1, 0, 0)" && gsap.to(element, {
    x: 0,
    y: 0,
    xPercent: 0,
    yPercent: 0,
    rotation: 0,
    rotationX: 0,
    rotationY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0
  }).progress(1),
      bounds = element.getBoundingClientRect ? element.getBoundingClientRect() : element.scrollingElement.getBoundingClientRect();
  tween && tween.progress(0).kill();
  return bounds;
},
    _getSize = function _getSize(element, _ref3) {
  var d2 = _ref3.d2;
  return element["offset" + d2] || element["client" + d2] || 0;
},
    _getLabelRatioArray = function _getLabelRatioArray(timeline) {
  var a = [],
      labels = timeline.labels,
      duration = timeline.duration(),
      p;

  for (p in labels) {
    a.push(labels[p] / duration);
  }

  return a;
},
    _getClosestLabel = function _getClosestLabel(animation) {
  return function (value) {
    return gsap.utils.snap(_getLabelRatioArray(animation), value);
  };
},
    _snapDirectional = function _snapDirectional(snapIncrementOrArray) {
  var snap = gsap.utils.snap(snapIncrementOrArray),
      a = Array.isArray(snapIncrementOrArray) && snapIncrementOrArray.slice(0).sort(function (a, b) {
    return a - b;
  });
  return a ? function (value, direction, threshold) {
    if (threshold === void 0) {
      threshold = 1e-3;
    }

    var i;

    if (!direction) {
      return snap(value);
    }

    if (direction > 0) {
      value -= threshold; // to avoid rounding errors. If we're too strict, it might snap forward, then immediately again, and again.

      for (i = 0; i < a.length; i++) {
        if (a[i] >= value) {
          return a[i];
        }
      }

      return a[i - 1];
    } else {
      i = a.length;
      value += threshold;

      while (i--) {
        if (a[i] <= value) {
          return a[i];
        }
      }
    }

    return a[0];
  } : function (value, direction, threshold) {
    if (threshold === void 0) {
      threshold = 1e-3;
    }

    var snapped = snap(value);
    return !direction || Math.abs(snapped - value) < threshold || snapped - value < 0 === direction < 0 ? snapped : snap(direction < 0 ? value - snapIncrementOrArray : value + snapIncrementOrArray);
  };
},
    _getLabelAtDirection = function _getLabelAtDirection(timeline) {
  return function (value, st) {
    return _snapDirectional(_getLabelRatioArray(timeline))(value, st.direction);
  };
},
    _multiListener = function _multiListener(func, element, types, callback) {
  return types.split(",").forEach(function (type) {
    return func(element, type, callback);
  });
},
    _addListener = function _addListener(element, type, func, nonPassive, capture) {
  return element.addEventListener(type, func, {
    passive: !nonPassive,
    capture: !!capture
  });
},
    _removeListener = function _removeListener(element, type, func, capture) {
  return element.removeEventListener(type, func, !!capture);
},
    _wheelListener = function _wheelListener(func, el, scrollFunc) {
  scrollFunc = scrollFunc && scrollFunc.wheelHandler;

  if (scrollFunc) {
    func(el, "wheel", scrollFunc);
    func(el, "touchmove", scrollFunc);
  }
},
    _markerDefaults = {
  startColor: "green",
  endColor: "red",
  indent: 0,
  fontSize: "16px",
  fontWeight: "normal"
},
    _defaults = {
  toggleActions: "play",
  anticipatePin: 0
},
    _keywords = {
  top: 0,
  left: 0,
  center: 0.5,
  bottom: 1,
  right: 1
},
    _offsetToPx = function _offsetToPx(value, size) {
  if (_isString(value)) {
    var eqIndex = value.indexOf("="),
        relative = ~eqIndex ? +(value.charAt(eqIndex - 1) + 1) * parseFloat(value.substr(eqIndex + 1)) : 0;

    if (~eqIndex) {
      value.indexOf("%") > eqIndex && (relative *= size / 100);
      value = value.substr(0, eqIndex - 1);
    }

    value = relative + (value in _keywords ? _keywords[value] * size : ~value.indexOf("%") ? parseFloat(value) * size / 100 : parseFloat(value) || 0);
  }

  return value;
},
    _createMarker = function _createMarker(type, name, container, direction, _ref4, offset, matchWidthEl, containerAnimation) {
  var startColor = _ref4.startColor,
      endColor = _ref4.endColor,
      fontSize = _ref4.fontSize,
      indent = _ref4.indent,
      fontWeight = _ref4.fontWeight;

  var e = _doc.createElement("div"),
      useFixedPosition = _isViewport(container) || _getProxyProp(container, "pinType") === "fixed",
      isScroller = type.indexOf("scroller") !== -1,
      parent = useFixedPosition ? _body : container.tagName === "IFRAME" ? container.contentDocument.body : container,
      isStart = type.indexOf("start") !== -1,
      color = isStart ? startColor : endColor,
      css = "border-color:" + color + ";font-size:" + fontSize + ";color:" + color + ";font-weight:" + fontWeight + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";

  css += "position:" + ((isScroller || containerAnimation) && useFixedPosition ? "fixed;" : "absolute;");
  (isScroller || containerAnimation || !useFixedPosition) && (css += (direction === _vertical ? _right : _bottom) + ":" + (offset + parseFloat(indent)) + "px;");
  matchWidthEl && (css += "box-sizing:border-box;text-align:left;width:" + matchWidthEl.offsetWidth + "px;");
  e._isStart = isStart;
  e.setAttribute("class", "gsap-marker-" + type + (name ? " marker-" + name : ""));
  e.style.cssText = css;
  e.innerText = name || name === 0 ? type + "-" + name : type;
  parent.children[0] ? parent.insertBefore(e, parent.children[0]) : parent.appendChild(e);
  e._offset = e["offset" + direction.op.d2];

  _positionMarker(e, 0, direction, isStart);

  return e;
},
    _positionMarker = function _positionMarker(marker, start, direction, flipped) {
  var vars = {
    display: "block"
  },
      side = direction[flipped ? "os2" : "p2"],
      oppositeSide = direction[flipped ? "p2" : "os2"];
  marker._isFlipped = flipped;
  vars[direction.a + "Percent"] = flipped ? -100 : 0;
  vars[direction.a] = flipped ? "1px" : 0;
  vars["border" + side + _Width] = 1;
  vars["border" + oppositeSide + _Width] = 0;
  vars[direction.p] = start + "px";
  gsap.set(marker, vars);
},
    _triggers = [],
    _ids = {},
    _rafID,
    _sync = function _sync() {
  return _getTime() - _lastScrollTime > 34 && (_rafID || (_rafID = requestAnimationFrame(_updateAll)));
},
    _onScroll = function _onScroll() {
  // previously, we tried to optimize performance by batching/deferring to the next requestAnimationFrame(), but discovered that Safari has a few bugs that make this unworkable (especially on iOS). See https://codepen.io/GreenSock/pen/16c435b12ef09c38125204818e7b45fc?editors=0010 and https://codepen.io/GreenSock/pen/JjOxYpQ/3dd65ccec5a60f1d862c355d84d14562?editors=0010 and https://codepen.io/GreenSock/pen/ExbrPNa/087cef197dc35445a0951e8935c41503?editors=0010
  if (!_normalizer || !_normalizer.isPressed || _normalizer.startX > _body.clientWidth) {
    // if the user is dragging the scrollbar, allow it.
    _scrollers.cache++;

    if (_normalizer) {
      _rafID || (_rafID = requestAnimationFrame(_updateAll));
    } else {
      _updateAll(); // Safari in particular (on desktop) NEEDS the immediate update rather than waiting for a requestAnimationFrame() whereas iOS seems to benefit from waiting for the requestAnimationFrame() tick, at least when normalizing. See https://codepen.io/GreenSock/pen/qBYozqO?editors=0110

    }

    _lastScrollTime || _dispatch("scrollStart");
    _lastScrollTime = _getTime();
  }
},
    _setBaseDimensions = function _setBaseDimensions() {
  _baseScreenWidth = _win.innerWidth;
  _baseScreenHeight = _win.innerHeight;
},
    _onResize = function _onResize(force) {
  _scrollers.cache++;
  (force === true || !_refreshing && !_ignoreResize && !_doc.fullscreenElement && !_doc.webkitFullscreenElement && (!_ignoreMobileResize || _baseScreenWidth !== _win.innerWidth || Math.abs(_win.innerHeight - _baseScreenHeight) > _win.innerHeight * 0.25)) && _resizeDelay.restart(true);
},
    // ignore resizes triggered by refresh()
_listeners = {},
    _emptyArray = [],
    _softRefresh = function _softRefresh() {
  return _removeListener(ScrollTrigger, "scrollEnd", _softRefresh) || _refreshAll(true);
},
    _dispatch = function _dispatch(type) {
  return _listeners[type] && _listeners[type].map(function (f) {
    return f();
  }) || _emptyArray;
},
    _savedStyles = [],
    // when ScrollTrigger.saveStyles() is called, the inline styles are recorded in this Array in a sequential format like [element, cssText, gsCache, media]. This keeps it very memory-efficient and fast to iterate through.
_revertRecorded = function _revertRecorded(media) {
  for (var i = 0; i < _savedStyles.length; i += 5) {
    if (!media || _savedStyles[i + 4] && _savedStyles[i + 4].query === media) {
      _savedStyles[i].style.cssText = _savedStyles[i + 1];
      _savedStyles[i].getBBox && _savedStyles[i].setAttribute("transform", _savedStyles[i + 2] || "");
      _savedStyles[i + 3].uncache = 1;
    }
  }
},
    _recordScrollPositions = function _recordScrollPositions() {
  return _scrollers.forEach(function (obj) {
    return _isFunction(obj) && ++obj.cacheID && (obj.rec = obj());
  });
},
    // record the current scroll position. Also force the clearing of the cache because some browsers take a little while to dispatch the "scroll" event and the user may have changed the scroll position and then called ScrollTrigger.refresh() right away
_revertAll = function _revertAll(kill, media) {
  var trigger;

  for (_i = 0; _i < _triggers.length; _i++) {
    trigger = _triggers[_i];

    if (trigger && (!media || trigger._ctx === media)) {
      if (kill) {
        trigger.kill(1);
      } else {
        trigger.revert(true, true);
      }
    }
  }

  _isReverted = true;
  media && _revertRecorded(media);
  media || _dispatch("revert");
},
    _clearScrollMemory = function _clearScrollMemory(scrollRestoration, force) {
  // zero-out all the recorded scroll positions. Don't use _triggers because if, for example, .matchMedia() is used to create some ScrollTriggers and then the user resizes and it removes ALL ScrollTriggers, and then go back to a size where there are ScrollTriggers, it would have kept the position(s) saved from the initial state.
  _scrollers.cache++;
  (force || !_refreshingAll) && _scrollers.forEach(function (obj) {
    return _isFunction(obj) && obj.cacheID++ && (obj.rec = 0);
  });
  _isString(scrollRestoration) && (_win.history.scrollRestoration = _scrollRestoration = scrollRestoration);
},
    _refreshingAll,
    _refreshID = 0,
    _queueRefreshID,
    _queueRefreshAll = function _queueRefreshAll() {
  // we don't want to call _refreshAll() every time we create a new ScrollTrigger (for performance reasons) - it's better to batch them. Some frameworks dynamically load content and we can't rely on the window's "load" or "DOMContentLoaded" events to trigger it.
  if (_queueRefreshID !== _refreshID) {
    var id = _queueRefreshID = _refreshID;
    requestAnimationFrame(function () {
      return id === _refreshID && _refreshAll(true);
    });
  }
},
    _refresh100vh = function _refresh100vh() {
  _body.appendChild(_div100vh);

  _100vh = !_normalizer && _div100vh.offsetHeight || _win.innerHeight;

  _body.removeChild(_div100vh);
},
    _hideAllMarkers = function _hideAllMarkers(hide) {
  return _toArray(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function (el) {
    return el.style.display = hide ? "none" : "block";
  });
},
    _refreshAll = function _refreshAll(force, skipRevert) {
  _docEl = _doc.documentElement; // some frameworks like Astro may cache the <body> and replace it during routing, so we'll just re-record the _docEl and _body for safety (otherwise, the markers may not get added properly).

  _body = _doc.body;
  _root = [_win, _doc, _docEl, _body];

  if (_lastScrollTime && !force && !_isReverted) {
    _addListener(ScrollTrigger, "scrollEnd", _softRefresh);

    return;
  }

  _refresh100vh();

  _refreshingAll = ScrollTrigger.isRefreshing = true;
  _isReverted || _recordScrollPositions();

  var refreshInits = _dispatch("refreshInit");

  _sort && ScrollTrigger.sort();
  skipRevert || _revertAll();

  _scrollers.forEach(function (obj) {
    if (_isFunction(obj)) {
      obj.smooth && (obj.target.style.scrollBehavior = "auto"); // smooth scrolling interferes

      obj(0);
    }
  });

  _triggers.slice(0).forEach(function (t) {
    return t.refresh();
  }); // don't loop with _i because during a refresh() someone could call ScrollTrigger.update() which would iterate through _i resulting in a skip.


  _isReverted = false;

  _triggers.forEach(function (t) {
    // nested pins (pinnedContainer) with pinSpacing may expand the container, so we must accommodate that here.
    if (t._subPinOffset && t.pin) {
      var prop = t.vars.horizontal ? "offsetWidth" : "offsetHeight",
          original = t.pin[prop];
      t.revert(true, 1);
      t.adjustPinSpacing(t.pin[prop] - original);
      t.refresh();
    }
  });

  _clampingMax = 1; // pinSpacing might be propping a page open, thus when we .setPositions() to clamp a ScrollTrigger's end we should leave the pinSpacing alone. That's what this flag is for.

  _hideAllMarkers(true);

  _triggers.forEach(function (t) {
    // the scroller's max scroll position may change after all the ScrollTriggers refreshed (like pinning could push it down), so we need to loop back and correct any with end: "max". Same for anything with a clamped end
    var max = _maxScroll(t.scroller, t._dir),
        endClamp = t.vars.end === "max" || t._endClamp && t.end > max,
        startClamp = t._startClamp && t.start >= max;

    (endClamp || startClamp) && t.setPositions(startClamp ? max - 1 : t.start, endClamp ? Math.max(startClamp ? max : t.start + 1, max) : t.end, true);
  });

  _hideAllMarkers(false);

  _clampingMax = 0;
  refreshInits.forEach(function (result) {
    return result && result.render && result.render(-1);
  }); // if the onRefreshInit() returns an animation (typically a gsap.set()), revert it. This makes it easy to put things in a certain spot before refreshing for measurement purposes, and then put things back.

  _scrollers.forEach(function (obj) {
    if (_isFunction(obj)) {
      obj.smooth && requestAnimationFrame(function () {
        return obj.target.style.scrollBehavior = "smooth";
      });
      obj.rec && obj(obj.rec);
    }
  });

  _clearScrollMemory(_scrollRestoration, 1);

  _resizeDelay.pause();

  _refreshID++;
  _refreshingAll = 2;

  _updateAll(2);

  _triggers.forEach(function (t) {
    return _isFunction(t.vars.onRefresh) && t.vars.onRefresh(t);
  });

  _refreshingAll = ScrollTrigger.isRefreshing = false;

  _dispatch("refresh");
},
    _lastScroll = 0,
    _direction = 1,
    _primary,
    _updateAll = function _updateAll(force) {
  if (force === 2 || !_refreshingAll && !_isReverted) {
    // _isReverted could be true if, for example, a matchMedia() is in the process of executing. We don't want to update during the time everything is reverted.
    ScrollTrigger.isUpdating = true;
    _primary && _primary.update(0); // ScrollSmoother uses refreshPriority -9999 to become the primary that gets updated before all others because it affects the scroll position.

    var l = _triggers.length,
        time = _getTime(),
        recordVelocity = time - _time1 >= 50,
        scroll = l && _triggers[0].scroll();

    _direction = _lastScroll > scroll ? -1 : 1;
    _refreshingAll || (_lastScroll = scroll);

    if (recordVelocity) {
      if (_lastScrollTime && !_pointerIsDown && time - _lastScrollTime > 200) {
        _lastScrollTime = 0;

        _dispatch("scrollEnd");
      }

      _time2 = _time1;
      _time1 = time;
    }

    if (_direction < 0) {
      _i = l;

      while (_i-- > 0) {
        _triggers[_i] && _triggers[_i].update(0, recordVelocity);
      }

      _direction = 1;
    } else {
      for (_i = 0; _i < l; _i++) {
        _triggers[_i] && _triggers[_i].update(0, recordVelocity);
      }
    }

    ScrollTrigger.isUpdating = false;
  }

  _rafID = 0;
},
    _propNamesToCopy = [_left, _top, _bottom, _right, _margin + _Bottom, _margin + _Right, _margin + _Top, _margin + _Left, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"],
    _stateProps = _propNamesToCopy.concat([_width, _height, "boxSizing", "max" + _Width, "max" + _Height, "position", _margin, _padding, _padding + _Top, _padding + _Right, _padding + _Bottom, _padding + _Left]),
    _swapPinOut = function _swapPinOut(pin, spacer, state) {
  _setState(state);

  var cache = pin._gsap;

  if (cache.spacerIsNative) {
    _setState(cache.spacerState);
  } else if (pin._gsap.swappedIn) {
    var parent = spacer.parentNode;

    if (parent) {
      parent.insertBefore(pin, spacer);
      parent.removeChild(spacer);
    }
  }

  pin._gsap.swappedIn = false;
},
    _swapPinIn = function _swapPinIn(pin, spacer, cs, spacerState) {
  if (!pin._gsap.swappedIn) {
    var i = _propNamesToCopy.length,
        spacerStyle = spacer.style,
        pinStyle = pin.style,
        p;

    while (i--) {
      p = _propNamesToCopy[i];
      spacerStyle[p] = cs[p];
    }

    spacerStyle.position = cs.position === "absolute" ? "absolute" : "relative";
    cs.display === "inline" && (spacerStyle.display = "inline-block");
    pinStyle[_bottom] = pinStyle[_right] = "auto";
    spacerStyle.flexBasis = cs.flexBasis || "auto";
    spacerStyle.overflow = "visible";
    spacerStyle.boxSizing = "border-box";
    spacerStyle[_width] = _getSize(pin, _horizontal) + _px;
    spacerStyle[_height] = _getSize(pin, _vertical) + _px;
    spacerStyle[_padding] = pinStyle[_margin] = pinStyle[_top] = pinStyle[_left] = "0";

    _setState(spacerState);

    pinStyle[_width] = pinStyle["max" + _Width] = cs[_width];
    pinStyle[_height] = pinStyle["max" + _Height] = cs[_height];
    pinStyle[_padding] = cs[_padding];

    if (pin.parentNode !== spacer) {
      pin.parentNode.insertBefore(spacer, pin);
      spacer.appendChild(pin);
    }

    pin._gsap.swappedIn = true;
  }
},
    _capsExp = /([A-Z])/g,
    _setState = function _setState(state) {
  if (state) {
    var style = state.t.style,
        l = state.length,
        i = 0,
        p,
        value;
    (state.t._gsap || gsap.core.getCache(state.t)).uncache = 1; // otherwise transforms may be off

    for (; i < l; i += 2) {
      value = state[i + 1];
      p = state[i];

      if (value) {
        style[p] = value;
      } else if (style[p]) {
        style.removeProperty(p.replace(_capsExp, "-$1").toLowerCase());
      }
    }
  }
},
    _getState = function _getState(element) {
  // returns an Array with alternating values like [property, value, property, value] and a "t" property pointing to the target (element). Makes it fast and cheap.
  var l = _stateProps.length,
      style = element.style,
      state = [],
      i = 0;

  for (; i < l; i++) {
    state.push(_stateProps[i], style[_stateProps[i]]);
  }

  state.t = element;
  return state;
},
    _copyState = function _copyState(state, override, omitOffsets) {
  var result = [],
      l = state.length,
      i = omitOffsets ? 8 : 0,
      // skip top, left, right, bottom if omitOffsets is true
  p;

  for (; i < l; i += 2) {
    p = state[i];
    result.push(p, p in override ? override[p] : state[i + 1]);
  }

  result.t = state.t;
  return result;
},
    _winOffsets = {
  left: 0,
  top: 0
},
    // // potential future feature (?) Allow users to calculate where a trigger hits (scroll position) like getScrollPosition("#id", "top bottom")
// _getScrollPosition = (trigger, position, {scroller, containerAnimation, horizontal}) => {
// 	scroller = _getTarget(scroller || _win);
// 	let direction = horizontal ? _horizontal : _vertical,
// 		isViewport = _isViewport(scroller);
// 	_getSizeFunc(scroller, isViewport, direction);
// 	return _parsePosition(position, _getTarget(trigger), _getSizeFunc(scroller, isViewport, direction)(), direction, _getScrollFunc(scroller, direction)(), 0, 0, 0, _getOffsetsFunc(scroller, isViewport)(), isViewport ? 0 : parseFloat(_getComputedStyle(scroller)["border" + direction.p2 + _Width]) || 0, 0, containerAnimation ? containerAnimation.duration() : _maxScroll(scroller), containerAnimation);
// },
_parsePosition = function _parsePosition(value, trigger, scrollerSize, direction, scroll, marker, markerScroller, self, scrollerBounds, borderWidth, useFixedPosition, scrollerMax, containerAnimation, clampZeroProp) {
  _isFunction(value) && (value = value(self));

  if (_isString(value) && value.substr(0, 3) === "max") {
    value = scrollerMax + (value.charAt(4) === "=" ? _offsetToPx("0" + value.substr(3), scrollerSize) : 0);
  }

  var time = containerAnimation ? containerAnimation.time() : 0,
      p1,
      p2,
      element;
  containerAnimation && containerAnimation.seek(0);
  isNaN(value) || (value = +value); // convert a string number like "45" to an actual number

  if (!_isNumber(value)) {
    _isFunction(trigger) && (trigger = trigger(self));
    var offsets = (value || "0").split(" "),
        bounds,
        localOffset,
        globalOffset,
        display;
    element = _getTarget(trigger, self) || _body;
    bounds = _getBounds(element) || {};

    if ((!bounds || !bounds.left && !bounds.top) && _getComputedStyle(element).display === "none") {
      // if display is "none", it won't report getBoundingClientRect() properly
      display = element.style.display;
      element.style.display = "block";
      bounds = _getBounds(element);
      display ? element.style.display = display : element.style.removeProperty("display");
    }

    localOffset = _offsetToPx(offsets[0], bounds[direction.d]);
    globalOffset = _offsetToPx(offsets[1] || "0", scrollerSize);
    value = bounds[direction.p] - scrollerBounds[direction.p] - borderWidth + localOffset + scroll - globalOffset;
    markerScroller && _positionMarker(markerScroller, globalOffset, direction, scrollerSize - globalOffset < 20 || markerScroller._isStart && globalOffset > 20);
    scrollerSize -= scrollerSize - globalOffset; // adjust for the marker
  } else {
    containerAnimation && (value = gsap.utils.mapRange(containerAnimation.scrollTrigger.start, containerAnimation.scrollTrigger.end, 0, scrollerMax, value));
    markerScroller && _positionMarker(markerScroller, scrollerSize, direction, true);
  }

  if (clampZeroProp) {
    self[clampZeroProp] = value || -1e-3;
    value < 0 && (value = 0);
  }

  if (marker) {
    var position = value + scrollerSize,
        isStart = marker._isStart;
    p1 = "scroll" + direction.d2;

    _positionMarker(marker, position, direction, isStart && position > 20 || !isStart && (useFixedPosition ? Math.max(_body[p1], _docEl[p1]) : marker.parentNode[p1]) <= position + 1);

    if (useFixedPosition) {
      scrollerBounds = _getBounds(markerScroller);
      useFixedPosition && (marker.style[direction.op.p] = scrollerBounds[direction.op.p] - direction.op.m - marker._offset + _px);
    }
  }

  if (containerAnimation && element) {
    p1 = _getBounds(element);
    containerAnimation.seek(scrollerMax);
    p2 = _getBounds(element);
    containerAnimation._caScrollDist = p1[direction.p] - p2[direction.p];
    value = value / containerAnimation._caScrollDist * scrollerMax;
  }

  containerAnimation && containerAnimation.seek(time);
  return containerAnimation ? value : Math.round(value);
},
    _prefixExp = /(webkit|moz|length|cssText|inset)/i,
    _reparent = function _reparent(element, parent, top, left) {
  if (element.parentNode !== parent) {
    var style = element.style,
        p,
        cs;

    if (parent === _body) {
      element._stOrig = style.cssText; // record original inline styles so we can revert them later

      cs = _getComputedStyle(element);

      for (p in cs) {
        // must copy all relevant styles to ensure that nothing changes visually when we reparent to the <body>. Skip the vendor prefixed ones.
        if (!+p && !_prefixExp.test(p) && cs[p] && typeof style[p] === "string" && p !== "0") {
          style[p] = cs[p];
        }
      }

      style.top = top;
      style.left = left;
    } else {
      style.cssText = element._stOrig;
    }

    gsap.core.getCache(element).uncache = 1;
    parent.appendChild(element);
  }
},
    _interruptionTracker = function _interruptionTracker(getValueFunc, initialValue, onInterrupt) {
  var last1 = initialValue,
      last2 = last1;
  return function (value) {
    var current = Math.round(getValueFunc()); // round because in some [very uncommon] Windows environments, scroll can get reported with decimals even though it was set without.

    if (current !== last1 && current !== last2 && Math.abs(current - last1) > 3 && Math.abs(current - last2) > 3) {
      // if the user scrolls, kill the tween. iOS Safari intermittently misreports the scroll position, it may be the most recently-set one or the one before that! When Safari is zoomed (CMD-+), it often misreports as 1 pixel off too! So if we set the scroll position to 125, for example, it'll actually report it as 124.
      value = current;
      onInterrupt && onInterrupt();
    }

    last2 = last1;
    last1 = Math.round(value);
    return last1;
  };
},
    _shiftMarker = function _shiftMarker(marker, direction, value) {
  var vars = {};
  vars[direction.p] = "+=" + value;
  gsap.set(marker, vars);
},
    // _mergeAnimations = animations => {
// 	let tl = gsap.timeline({smoothChildTiming: true}).startTime(Math.min(...animations.map(a => a.globalTime(0))));
// 	animations.forEach(a => {let time = a.totalTime(); tl.add(a); a.totalTime(time); });
// 	tl.smoothChildTiming = false;
// 	return tl;
// },
// returns a function that can be used to tween the scroll position in the direction provided, and when doing so it'll add a .tween property to the FUNCTION itself, and remove it when the tween completes or gets killed. This gives us a way to have multiple ScrollTriggers use a central function for any given scroller and see if there's a scroll tween running (which would affect if/how things get updated)
_getTweenCreator = function _getTweenCreator(scroller, direction) {
  var getScroll = _getScrollFunc(scroller, direction),
      prop = "_scroll" + direction.p2,
      // add a tweenable property to the scroller that's a getter/setter function, like _scrollTop or _scrollLeft. This way, if someone does gsap.killTweensOf(scroller) it'll kill the scroll tween.
  getTween = function getTween(scrollTo, vars, initialValue, change1, change2) {
    var tween = getTween.tween,
        onComplete = vars.onComplete,
        modifiers = {};
    initialValue = initialValue || getScroll();

    var checkForInterruption = _interruptionTracker(getScroll, initialValue, function () {
      tween.kill();
      getTween.tween = 0;
    });

    change2 = change1 && change2 || 0; // if change1 is 0, we set that to the difference and ignore change2. Otherwise, there would be a compound effect.

    change1 = change1 || scrollTo - initialValue;
    tween && tween.kill();
    vars[prop] = scrollTo;
    vars.inherit = false;
    vars.modifiers = modifiers;

    modifiers[prop] = function () {
      return checkForInterruption(initialValue + change1 * tween.ratio + change2 * tween.ratio * tween.ratio);
    };

    vars.onUpdate = function () {
      _scrollers.cache++;
      getTween.tween && _updateAll(); // if it was interrupted/killed, like in a context.revert(), don't force an updateAll()
    };

    vars.onComplete = function () {
      getTween.tween = 0;
      onComplete && onComplete.call(tween);
    };

    tween = getTween.tween = gsap.to(scroller, vars);
    return tween;
  };

  scroller[prop] = getScroll;

  getScroll.wheelHandler = function () {
    return getTween.tween && getTween.tween.kill() && (getTween.tween = 0);
  };

  _addListener(scroller, "wheel", getScroll.wheelHandler); // Windows machines handle mousewheel scrolling in chunks (like "3 lines per scroll") meaning the typical strategy for cancelling the scroll isn't as sensitive. It's much more likely to match one of the previous 2 scroll event positions. So we kill any snapping as soon as there's a wheel event.


  ScrollTrigger.isTouch && _addListener(scroller, "touchmove", getScroll.wheelHandler);
  return getTween;
};

var ScrollTrigger = /*#__PURE__*/function () {
  function ScrollTrigger(vars, animation) {
    _coreInitted || ScrollTrigger.register(gsap) || console.warn("Please gsap.registerPlugin(ScrollTrigger)");

    _context(this);

    this.init(vars, animation);
  }

  var _proto = ScrollTrigger.prototype;

  _proto.init = function init(vars, animation) {
    this.progress = this.start = 0;
    this.vars && this.kill(true, true); // in case it's being initted again

    if (!_enabled) {
      this.update = this.refresh = this.kill = _passThrough;
      return;
    }

    vars = _setDefaults(_isString(vars) || _isNumber(vars) || vars.nodeType ? {
      trigger: vars
    } : vars, _defaults);

    var _vars = vars,
        onUpdate = _vars.onUpdate,
        toggleClass = _vars.toggleClass,
        id = _vars.id,
        onToggle = _vars.onToggle,
        onRefresh = _vars.onRefresh,
        scrub = _vars.scrub,
        trigger = _vars.trigger,
        pin = _vars.pin,
        pinSpacing = _vars.pinSpacing,
        invalidateOnRefresh = _vars.invalidateOnRefresh,
        anticipatePin = _vars.anticipatePin,
        onScrubComplete = _vars.onScrubComplete,
        onSnapComplete = _vars.onSnapComplete,
        once = _vars.once,
        snap = _vars.snap,
        pinReparent = _vars.pinReparent,
        pinSpacer = _vars.pinSpacer,
        containerAnimation = _vars.containerAnimation,
        fastScrollEnd = _vars.fastScrollEnd,
        preventOverlaps = _vars.preventOverlaps,
        direction = vars.horizontal || vars.containerAnimation && vars.horizontal !== false ? _horizontal : _vertical,
        isToggle = !scrub && scrub !== 0,
        scroller = _getTarget(vars.scroller || _win),
        scrollerCache = gsap.core.getCache(scroller),
        isViewport = _isViewport(scroller),
        useFixedPosition = ("pinType" in vars ? vars.pinType : _getProxyProp(scroller, "pinType") || isViewport && "fixed") === "fixed",
        callbacks = [vars.onEnter, vars.onLeave, vars.onEnterBack, vars.onLeaveBack],
        toggleActions = isToggle && vars.toggleActions.split(" "),
        markers = "markers" in vars ? vars.markers : _defaults.markers,
        borderWidth = isViewport ? 0 : parseFloat(_getComputedStyle(scroller)["border" + direction.p2 + _Width]) || 0,
        self = this,
        onRefreshInit = vars.onRefreshInit && function () {
      return vars.onRefreshInit(self);
    },
        getScrollerSize = _getSizeFunc(scroller, isViewport, direction),
        getScrollerOffsets = _getOffsetsFunc(scroller, isViewport),
        lastSnap = 0,
        lastRefresh = 0,
        prevProgress = 0,
        scrollFunc = _getScrollFunc(scroller, direction),
        tweenTo,
        pinCache,
        snapFunc,
        scroll1,
        scroll2,
        start,
        end,
        markerStart,
        markerEnd,
        markerStartTrigger,
        markerEndTrigger,
        markerVars,
        executingOnRefresh,
        change,
        pinOriginalState,
        pinActiveState,
        pinState,
        spacer,
        offset,
        pinGetter,
        pinSetter,
        pinStart,
        pinChange,
        spacingStart,
        spacerState,
        markerStartSetter,
        pinMoves,
        markerEndSetter,
        cs,
        snap1,
        snap2,
        scrubTween,
        scrubSmooth,
        snapDurClamp,
        snapDelayedCall,
        prevScroll,
        prevAnimProgress,
        caMarkerSetter,
        customRevertReturn; // for the sake of efficiency, _startClamp/_endClamp serve like a truthy value indicating that clamping was enabled on the start/end, and ALSO store the actual pre-clamped numeric value. We tap into that in ScrollSmoother for speed effects. So for example, if start="clamp(top bottom)" results in a start of -100 naturally, it would get clamped to 0 but -100 would be stored in _startClamp.


    self._startClamp = self._endClamp = false;
    self._dir = direction;
    anticipatePin *= 45;
    self.scroller = scroller;
    self.scroll = containerAnimation ? containerAnimation.time.bind(containerAnimation) : scrollFunc;
    scroll1 = scrollFunc();
    self.vars = vars;
    animation = animation || vars.animation;

    if ("refreshPriority" in vars) {
      _sort = 1;
      vars.refreshPriority === -9999 && (_primary = self); // used by ScrollSmoother
    }

    scrollerCache.tweenScroll = scrollerCache.tweenScroll || {
      top: _getTweenCreator(scroller, _vertical),
      left: _getTweenCreator(scroller, _horizontal)
    };
    self.tweenTo = tweenTo = scrollerCache.tweenScroll[direction.p];

    self.scrubDuration = function (value) {
      scrubSmooth = _isNumber(value) && value;

      if (!scrubSmooth) {
        scrubTween && scrubTween.progress(1).kill();
        scrubTween = 0;
      } else {
        scrubTween ? scrubTween.duration(value) : scrubTween = gsap.to(animation, {
          ease: "expo",
          totalProgress: "+=0",
          inherit: false,
          duration: scrubSmooth,
          paused: true,
          onComplete: function onComplete() {
            return onScrubComplete && onScrubComplete(self);
          }
        });
      }
    };

    if (animation) {
      animation.vars.lazy = false;
      animation._initted && !self.isReverted || animation.vars.immediateRender !== false && vars.immediateRender !== false && animation.duration() && animation.render(0, true, true); // special case: if this ScrollTrigger gets re-initted, a from() tween with a stagger could get initted initially and then reverted on the re-init which means it'll need to get rendered again here to properly display things. Otherwise, See https://gsap.com/forums/topic/36777-scrollsmoother-splittext-nextjs/ and https://codepen.io/GreenSock/pen/eYPyPpd?editors=0010

      self.animation = animation.pause();
      animation.scrollTrigger = self;
      self.scrubDuration(scrub);
      snap1 = 0;
      id || (id = animation.vars.id);
    }

    if (snap) {
      // TODO: potential idea: use legitimate CSS scroll snapping by pushing invisible elements into the DOM that serve as snap positions, and toggle the document.scrollingElement.style.scrollSnapType onToggle. See https://codepen.io/GreenSock/pen/JjLrgWM for a quick proof of concept.
      if (!_isObject(snap) || snap.push) {
        snap = {
          snapTo: snap
        };
      }

      "scrollBehavior" in _body.style && gsap.set(isViewport ? [_body, _docEl] : scroller, {
        scrollBehavior: "auto"
      }); // smooth scrolling doesn't work with snap.

      _scrollers.forEach(function (o) {
        return _isFunction(o) && o.target === (isViewport ? _doc.scrollingElement || _docEl : scroller) && (o.smooth = false);
      }); // note: set smooth to false on both the vertical and horizontal scroll getters/setters


      snapFunc = _isFunction(snap.snapTo) ? snap.snapTo : snap.snapTo === "labels" ? _getClosestLabel(animation) : snap.snapTo === "labelsDirectional" ? _getLabelAtDirection(animation) : snap.directional !== false ? function (value, st) {
        return _snapDirectional(snap.snapTo)(value, _getTime() - lastRefresh < 500 ? 0 : st.direction);
      } : gsap.utils.snap(snap.snapTo);
      snapDurClamp = snap.duration || {
        min: 0.1,
        max: 2
      };
      snapDurClamp = _isObject(snapDurClamp) ? _clamp(snapDurClamp.min, snapDurClamp.max) : _clamp(snapDurClamp, snapDurClamp);
      snapDelayedCall = gsap.delayedCall(snap.delay || scrubSmooth / 2 || 0.1, function () {
        var scroll = scrollFunc(),
            refreshedRecently = _getTime() - lastRefresh < 500,
            tween = tweenTo.tween;

        if ((refreshedRecently || Math.abs(self.getVelocity()) < 10) && !tween && !_pointerIsDown && lastSnap !== scroll) {
          var progress = (scroll - start) / change,
              totalProgress = animation && !isToggle ? animation.totalProgress() : progress,
              velocity = refreshedRecently ? 0 : (totalProgress - snap2) / (_getTime() - _time2) * 1000 || 0,
              change1 = gsap.utils.clamp(-progress, 1 - progress, _abs(velocity / 2) * velocity / 0.185),
              naturalEnd = progress + (snap.inertia === false ? 0 : change1),
              endValue,
              endScroll,
              _snap = snap,
              onStart = _snap.onStart,
              _onInterrupt = _snap.onInterrupt,
              _onComplete = _snap.onComplete;
          endValue = snapFunc(naturalEnd, self);
          _isNumber(endValue) || (endValue = naturalEnd); // in case the function didn't return a number, fall back to using the naturalEnd

          endScroll = Math.max(0, Math.round(start + endValue * change));

          if (scroll <= end && scroll >= start && endScroll !== scroll) {
            if (tween && !tween._initted && tween.data <= _abs(endScroll - scroll)) {
              // there's an overlapping snap! So we must figure out which one is closer and let that tween live.
              return;
            }

            if (snap.inertia === false) {
              change1 = endValue - progress;
            }

            tweenTo(endScroll, {
              duration: snapDurClamp(_abs(Math.max(_abs(naturalEnd - totalProgress), _abs(endValue - totalProgress)) * 0.185 / velocity / 0.05 || 0)),
              ease: snap.ease || "power3",
              data: _abs(endScroll - scroll),
              // record the distance so that if another snap tween occurs (conflict) we can prioritize the closest snap.
              onInterrupt: function onInterrupt() {
                return snapDelayedCall.restart(true) && _onInterrupt && _callback(self, _onInterrupt);
              },
              onComplete: function onComplete() {
                self.update();
                lastSnap = scrollFunc();

                if (animation && !isToggle) {
                  // the resolution of the scrollbar is limited, so we should correct the scrubbed animation's playhead at the end to match EXACTLY where it was supposed to snap
                  scrubTween ? scrubTween.resetTo("totalProgress", endValue, animation._tTime / animation._tDur) : animation.progress(endValue);
                }

                snap1 = snap2 = animation && !isToggle ? animation.totalProgress() : self.progress;
                onSnapComplete && onSnapComplete(self);
                _onComplete && _callback(self, _onComplete);
              }
            }, scroll, change1 * change, endScroll - scroll - change1 * change);
            onStart && _callback(self, onStart, tweenTo.tween);
          }
        } else if (self.isActive && lastSnap !== scroll) {
          snapDelayedCall.restart(true);
        }
      }).pause();
    }

    id && (_ids[id] = self);
    trigger = self.trigger = _getTarget(trigger || pin !== true && pin); // if a trigger has some kind of scroll-related effect applied that could contaminate the "y" or "x" position (like a ScrollSmoother effect), we needed a way to temporarily revert it, so we use the stRevert property of the gsCache. It can return another function that we'll call at the end so it can return to its normal state.

    customRevertReturn = trigger && trigger._gsap && trigger._gsap.stRevert;
    customRevertReturn && (customRevertReturn = customRevertReturn(self));
    pin = pin === true ? trigger : _getTarget(pin);
    _isString(toggleClass) && (toggleClass = {
      targets: trigger,
      className: toggleClass
    });

    if (pin) {
      pinSpacing === false || pinSpacing === _margin || (pinSpacing = !pinSpacing && pin.parentNode && pin.parentNode.style && _getComputedStyle(pin.parentNode).display === "flex" ? false : _padding); // if the parent is display: flex, don't apply pinSpacing by default. We should check that pin.parentNode is an element (not shadow dom window)

      self.pin = pin;
      pinCache = gsap.core.getCache(pin);

      if (!pinCache.spacer) {
        // record the spacer and pinOriginalState on the cache in case someone tries pinning the same element with MULTIPLE ScrollTriggers - we don't want to have multiple spacers or record the "original" pin state after it has already been affected by another ScrollTrigger.
        if (pinSpacer) {
          pinSpacer = _getTarget(pinSpacer);
          pinSpacer && !pinSpacer.nodeType && (pinSpacer = pinSpacer.current || pinSpacer.nativeElement); // for React & Angular

          pinCache.spacerIsNative = !!pinSpacer;
          pinSpacer && (pinCache.spacerState = _getState(pinSpacer));
        }

        pinCache.spacer = spacer = pinSpacer || _doc.createElement("div");
        spacer.classList.add("pin-spacer");
        id && spacer.classList.add("pin-spacer-" + id);
        pinCache.pinState = pinOriginalState = _getState(pin);
      } else {
        pinOriginalState = pinCache.pinState;
      }

      vars.force3D !== false && gsap.set(pin, {
        force3D: true
      });
      self.spacer = spacer = pinCache.spacer;
      cs = _getComputedStyle(pin);
      spacingStart = cs[pinSpacing + direction.os2];
      pinGetter = gsap.getProperty(pin);
      pinSetter = gsap.quickSetter(pin, direction.a, _px); // pin.firstChild && !_maxScroll(pin, direction) && (pin.style.overflow = "hidden"); // protects from collapsing margins, but can have unintended consequences as demonstrated here: https://codepen.io/GreenSock/pen/1e42c7a73bfa409d2cf1e184e7a4248d so it was removed in favor of just telling people to set up their CSS to avoid the collapsing margins (overflow: hidden | auto is just one option. Another is border-top: 1px solid transparent).

      _swapPinIn(pin, spacer, cs);

      pinState = _getState(pin);
    }

    if (markers) {
      markerVars = _isObject(markers) ? _setDefaults(markers, _markerDefaults) : _markerDefaults;
      markerStartTrigger = _createMarker("scroller-start", id, scroller, direction, markerVars, 0);
      markerEndTrigger = _createMarker("scroller-end", id, scroller, direction, markerVars, 0, markerStartTrigger);
      offset = markerStartTrigger["offset" + direction.op.d2];

      var content = _getTarget(_getProxyProp(scroller, "content") || scroller);

      markerStart = this.markerStart = _createMarker("start", id, content, direction, markerVars, offset, 0, containerAnimation);
      markerEnd = this.markerEnd = _createMarker("end", id, content, direction, markerVars, offset, 0, containerAnimation);
      containerAnimation && (caMarkerSetter = gsap.quickSetter([markerStart, markerEnd], direction.a, _px));

      if (!useFixedPosition && !(_proxies.length && _getProxyProp(scroller, "fixedMarkers") === true)) {
        _makePositionable(isViewport ? _body : scroller);

        gsap.set([markerStartTrigger, markerEndTrigger], {
          force3D: true
        });
        markerStartSetter = gsap.quickSetter(markerStartTrigger, direction.a, _px);
        markerEndSetter = gsap.quickSetter(markerEndTrigger, direction.a, _px);
      }
    }

    if (containerAnimation) {
      var oldOnUpdate = containerAnimation.vars.onUpdate,
          oldParams = containerAnimation.vars.onUpdateParams;
      containerAnimation.eventCallback("onUpdate", function () {
        self.update(0, 0, 1);
        oldOnUpdate && oldOnUpdate.apply(containerAnimation, oldParams || []);
      });
    }

    self.previous = function () {
      return _triggers[_triggers.indexOf(self) - 1];
    };

    self.next = function () {
      return _triggers[_triggers.indexOf(self) + 1];
    };

    self.revert = function (revert, temp) {
      if (!temp) {
        return self.kill(true);
      } // for compatibility with gsap.context() and gsap.matchMedia() which call revert()


      var r = revert !== false || !self.enabled,
          prevRefreshing = _refreshing;

      if (r !== self.isReverted) {
        if (r) {
          prevScroll = Math.max(scrollFunc(), self.scroll.rec || 0); // record the scroll so we can revert later (repositioning/pinning things can affect scroll position). In the static refresh() method, we first record all the scroll positions as a reference.

          prevProgress = self.progress;
          prevAnimProgress = animation && animation.progress();
        }

        markerStart && [markerStart, markerEnd, markerStartTrigger, markerEndTrigger].forEach(function (m) {
          return m.style.display = r ? "none" : "block";
        });

        if (r) {
          _refreshing = self;
          self.update(r); // make sure the pin is back in its original position so that all the measurements are correct. do this BEFORE swapping the pin out
        }

        if (pin && (!pinReparent || !self.isActive)) {
          if (r) {
            _swapPinOut(pin, spacer, pinOriginalState);
          } else {
            _swapPinIn(pin, spacer, _getComputedStyle(pin), spacerState);
          }
        }

        r || self.update(r); // when we're restoring, the update should run AFTER swapping the pin into its pin-spacer.

        _refreshing = prevRefreshing; // restore. We set it to true during the update() so that things fire properly in there.

        self.isReverted = r;
      }
    };

    self.refresh = function (soft, force, position, pinOffset) {
      // position is typically only defined if it's coming from setPositions() - it's a way to skip the normal parsing. pinOffset is also only from setPositions() and is mostly related to fancy stuff we need to do in ScrollSmoother with effects
      if ((_refreshing || !self.enabled) && !force) {
        return;
      }

      if (pin && soft && _lastScrollTime) {
        _addListener(ScrollTrigger, "scrollEnd", _softRefresh);

        return;
      }

      !_refreshingAll && onRefreshInit && onRefreshInit(self);
      _refreshing = self;

      if (tweenTo.tween && !position) {
        // we skip this if a position is passed in because typically that's from .setPositions() and it's best to allow in-progress snapping to continue.
        tweenTo.tween.kill();
        tweenTo.tween = 0;
      }

      scrubTween && scrubTween.pause();

      if (invalidateOnRefresh && animation) {
        animation.revert({
          kill: false
        }).invalidate();
        animation.getChildren ? animation.getChildren(true, true, false).forEach(function (t) {
          return t.vars.immediateRender && t.render(0, true, true);
        }) : animation.vars.immediateRender && animation.render(0, true, true); // any from() or fromTo() tweens should render immediately (well, unless they have immediateRender: false)
      }

      self.isReverted || self.revert(true, true);
      self._subPinOffset = false; // we'll set this to true in the sub-pins if we find any

      var size = getScrollerSize(),
          scrollerBounds = getScrollerOffsets(),
          max = containerAnimation ? containerAnimation.duration() : _maxScroll(scroller, direction),
          isFirstRefresh = change <= 0.01 || !change,
          offset = 0,
          otherPinOffset = pinOffset || 0,
          parsedEnd = _isObject(position) ? position.end : vars.end,
          parsedEndTrigger = vars.endTrigger || trigger,
          parsedStart = _isObject(position) ? position.start : vars.start || (vars.start === 0 || !trigger ? 0 : pin ? "0 0" : "0 100%"),
          pinnedContainer = self.pinnedContainer = vars.pinnedContainer && _getTarget(vars.pinnedContainer, self),
          triggerIndex = trigger && Math.max(0, _triggers.indexOf(self)) || 0,
          i = triggerIndex,
          cs,
          bounds,
          scroll,
          isVertical,
          override,
          curTrigger,
          curPin,
          oppositeScroll,
          initted,
          revertedPins,
          forcedOverflow,
          markerStartOffset,
          markerEndOffset;

      if (markers && _isObject(position)) {
        // if we alter the start/end positions with .setPositions(), it generally feeds in absolute NUMBERS which don't convey information about where to line up the markers, so to keep it intuitive, we record how far the trigger positions shift after applying the new numbers and then offset by that much in the opposite direction. We do the same to the associated trigger markers too of course.
        markerStartOffset = gsap.getProperty(markerStartTrigger, direction.p);
        markerEndOffset = gsap.getProperty(markerEndTrigger, direction.p);
      }

      while (i-- > 0) {
        // user might try to pin the same element more than once, so we must find any prior triggers with the same pin, revert them, and determine how long they're pinning so that we can offset things appropriately. Make sure we revert from last to first so that things "rewind" properly.
        curTrigger = _triggers[i];
        curTrigger.end || curTrigger.refresh(0, 1) || (_refreshing = self); // if it's a timeline-based trigger that hasn't been fully initialized yet because it's waiting for 1 tick, just force the refresh() here, otherwise if it contains a pin that's supposed to affect other ScrollTriggers further down the page, they won't be adjusted properly.

        curPin = curTrigger.pin;

        if (curPin && (curPin === trigger || curPin === pin || curPin === pinnedContainer) && !curTrigger.isReverted) {
          revertedPins || (revertedPins = []);
          revertedPins.unshift(curTrigger); // we'll revert from first to last to make sure things reach their end state properly

          curTrigger.revert(true, true);
        }

        if (curTrigger !== _triggers[i]) {
          // in case it got removed.
          triggerIndex--;
          i--;
        }
      }

      _isFunction(parsedStart) && (parsedStart = parsedStart(self));
      parsedStart = _parseClamp(parsedStart, "start", self);
      start = _parsePosition(parsedStart, trigger, size, direction, scrollFunc(), markerStart, markerStartTrigger, self, scrollerBounds, borderWidth, useFixedPosition, max, containerAnimation, self._startClamp && "_startClamp") || (pin ? -1e-3 : 0);
      _isFunction(parsedEnd) && (parsedEnd = parsedEnd(self));

      if (_isString(parsedEnd) && !parsedEnd.indexOf("+=")) {
        if (~parsedEnd.indexOf(" ")) {
          parsedEnd = (_isString(parsedStart) ? parsedStart.split(" ")[0] : "") + parsedEnd;
        } else {
          offset = _offsetToPx(parsedEnd.substr(2), size);
          parsedEnd = _isString(parsedStart) ? parsedStart : (containerAnimation ? gsap.utils.mapRange(0, containerAnimation.duration(), containerAnimation.scrollTrigger.start, containerAnimation.scrollTrigger.end, start) : start) + offset; // _parsePosition won't factor in the offset if the start is a number, so do it here.

          parsedEndTrigger = trigger;
        }
      }

      parsedEnd = _parseClamp(parsedEnd, "end", self);
      end = Math.max(start, _parsePosition(parsedEnd || (parsedEndTrigger ? "100% 0" : max), parsedEndTrigger, size, direction, scrollFunc() + offset, markerEnd, markerEndTrigger, self, scrollerBounds, borderWidth, useFixedPosition, max, containerAnimation, self._endClamp && "_endClamp")) || -1e-3;
      offset = 0;
      i = triggerIndex;

      while (i--) {
        curTrigger = _triggers[i] || {};
        curPin = curTrigger.pin;

        if (curPin && curTrigger.start - curTrigger._pinPush <= start && !containerAnimation && curTrigger.end > 0) {
          cs = curTrigger.end - (self._startClamp ? Math.max(0, curTrigger.start) : curTrigger.start);

          if ((curPin === trigger && curTrigger.start - curTrigger._pinPush < start || curPin === pinnedContainer) && isNaN(parsedStart)) {
            // numeric start values shouldn't be offset at all - treat them as absolute
            offset += cs * (1 - curTrigger.progress);
          }

          curPin === pin && (otherPinOffset += cs);
        }
      }

      start += offset;
      end += offset;
      self._startClamp && (self._startClamp += offset);

      if (self._endClamp && !_refreshingAll) {
        self._endClamp = end || -1e-3;
        end = Math.min(end, _maxScroll(scroller, direction));
      }

      change = end - start || (start -= 0.01) && 0.001;

      if (isFirstRefresh) {
        // on the very first refresh(), the prevProgress couldn't have been accurate yet because the start/end were never calculated, so we set it here. Before 3.11.5, it could lead to an inaccurate scroll position restoration with snapping.
        prevProgress = gsap.utils.clamp(0, 1, gsap.utils.normalize(start, end, prevScroll));
      }

      self._pinPush = otherPinOffset;

      if (markerStart && offset) {
        // offset the markers if necessary
        cs = {};
        cs[direction.a] = "+=" + offset;
        pinnedContainer && (cs[direction.p] = "-=" + scrollFunc());
        gsap.set([markerStart, markerEnd], cs);
      }

      if (pin && !(_clampingMax && self.end >= _maxScroll(scroller, direction))) {
        cs = _getComputedStyle(pin);
        isVertical = direction === _vertical;
        scroll = scrollFunc(); // recalculate because the triggers can affect the scroll

        pinStart = parseFloat(pinGetter(direction.a)) + otherPinOffset;

        if (!max && end > 1) {
          // makes sure the scroller has a scrollbar, otherwise if something has width: 100%, for example, it would be too big (exclude the scrollbar). See https://gsap.com/forums/topic/25182-scrolltrigger-width-of-page-increase-where-markers-are-set-to-false/
          forcedOverflow = (isViewport ? _doc.scrollingElement || _docEl : scroller).style;
          forcedOverflow = {
            style: forcedOverflow,
            value: forcedOverflow["overflow" + direction.a.toUpperCase()]
          };

          if (isViewport && _getComputedStyle(_body)["overflow" + direction.a.toUpperCase()] !== "scroll") {
            // avoid an extra scrollbar if BOTH <html> and <body> have overflow set to "scroll"
            forcedOverflow.style["overflow" + direction.a.toUpperCase()] = "scroll";
          }
        }

        _swapPinIn(pin, spacer, cs);

        pinState = _getState(pin); // transforms will interfere with the top/left/right/bottom placement, so remove them temporarily. getBoundingClientRect() factors in transforms.

        bounds = _getBounds(pin, true);
        oppositeScroll = useFixedPosition && _getScrollFunc(scroller, isVertical ? _horizontal : _vertical)();

        if (pinSpacing) {
          spacerState = [pinSpacing + direction.os2, change + otherPinOffset + _px];
          spacerState.t = spacer;
          i = pinSpacing === _padding ? _getSize(pin, direction) + change + otherPinOffset : 0;

          if (i) {
            spacerState.push(direction.d, i + _px); // for box-sizing: border-box (must include padding).

            spacer.style.flexBasis !== "auto" && (spacer.style.flexBasis = i + _px);
          }

          _setState(spacerState);

          if (pinnedContainer) {
            // in ScrollTrigger.refresh(), we need to re-evaluate the pinContainer's size because this pinSpacing may stretch it out, but we can't just add the exact distance because depending on layout, it may not push things down or it may only do so partially.
            _triggers.forEach(function (t) {
              if (t.pin === pinnedContainer && t.vars.pinSpacing !== false) {
                t._subPinOffset = true;
              }
            });
          }

          useFixedPosition && scrollFunc(prevScroll);
        } else {
          i = _getSize(pin, direction);
          i && spacer.style.flexBasis !== "auto" && (spacer.style.flexBasis = i + _px);
        }

        if (useFixedPosition) {
          override = {
            top: bounds.top + (isVertical ? scroll - start : oppositeScroll) + _px,
            left: bounds.left + (isVertical ? oppositeScroll : scroll - start) + _px,
            boxSizing: "border-box",
            position: "fixed"
          };
          override[_width] = override["max" + _Width] = Math.ceil(bounds.width) + _px;
          override[_height] = override["max" + _Height] = Math.ceil(bounds.height) + _px;
          override[_margin] = override[_margin + _Top] = override[_margin + _Right] = override[_margin + _Bottom] = override[_margin + _Left] = "0";
          override[_padding] = cs[_padding];
          override[_padding + _Top] = cs[_padding + _Top];
          override[_padding + _Right] = cs[_padding + _Right];
          override[_padding + _Bottom] = cs[_padding + _Bottom];
          override[_padding + _Left] = cs[_padding + _Left];
          pinActiveState = _copyState(pinOriginalState, override, pinReparent);
          _refreshingAll && scrollFunc(0);
        }

        if (animation) {
          // the animation might be affecting the transform, so we must jump to the end, check the value, and compensate accordingly. Otherwise, when it becomes unpinned, the pinSetter() will get set to a value that doesn't include whatever the animation did.
          initted = animation._initted; // if not, we must invalidate() after this step, otherwise it could lock in starting values prematurely.

          _suppressOverwrites(1);

          animation.render(animation.duration(), true, true);
          pinChange = pinGetter(direction.a) - pinStart + change + otherPinOffset;
          pinMoves = Math.abs(change - pinChange) > 1;
          useFixedPosition && pinMoves && pinActiveState.splice(pinActiveState.length - 2, 2); // transform is the last property/value set in the state Array. Since the animation is controlling that, we should omit it.

          animation.render(0, true, true);
          initted || animation.invalidate(true);
          animation.parent || animation.totalTime(animation.totalTime()); // if, for example, a toggleAction called play() and then refresh() happens and when we render(1) above, it would cause the animation to complete and get removed from its parent, so this makes sure it gets put back in.

          _suppressOverwrites(0);
        } else {
          pinChange = change;
        }

        forcedOverflow && (forcedOverflow.value ? forcedOverflow.style["overflow" + direction.a.toUpperCase()] = forcedOverflow.value : forcedOverflow.style.removeProperty("overflow-" + direction.a));
      } else if (trigger && scrollFunc() && !containerAnimation) {
        // it may be INSIDE a pinned element, so walk up the tree and look for any elements with _pinOffset to compensate because anything with pinSpacing that's already scrolled would throw off the measurements in getBoundingClientRect()
        bounds = trigger.parentNode;

        while (bounds && bounds !== _body) {
          if (bounds._pinOffset) {
            start -= bounds._pinOffset;
            end -= bounds._pinOffset;
          }

          bounds = bounds.parentNode;
        }
      }

      revertedPins && revertedPins.forEach(function (t) {
        return t.revert(false, true);
      });
      self.start = start;
      self.end = end;
      scroll1 = scroll2 = _refreshingAll ? prevScroll : scrollFunc(); // reset velocity

      if (!containerAnimation && !_refreshingAll) {
        scroll1 < prevScroll && scrollFunc(prevScroll);
        self.scroll.rec = 0;
      }

      self.revert(false, true);
      lastRefresh = _getTime();

      if (snapDelayedCall) {
        lastSnap = -1; // just so snapping gets re-enabled, clear out any recorded last value
        // self.isActive && scrollFunc(start + change * prevProgress); // previously this line was here to ensure that when snapping kicks in, it's from the previous progress but in some cases that's not desirable, like an all-page ScrollTrigger when new content gets added to the page, that'd totally change the progress.

        snapDelayedCall.restart(true);
      }

      _refreshing = 0;
      animation && isToggle && (animation._initted || prevAnimProgress) && animation.progress() !== prevAnimProgress && animation.progress(prevAnimProgress || 0, true).render(animation.time(), true, true); // must force a re-render because if saveStyles() was used on the target(s), the styles could have been wiped out during the refresh().

      if (isFirstRefresh || prevProgress !== self.progress || containerAnimation || invalidateOnRefresh || animation && !animation._initted) {
        // ensures that the direction is set properly (when refreshing, progress is set back to 0 initially, then back again to wherever it needs to be) and that callbacks are triggered.
        animation && !isToggle && (animation._initted || prevProgress || animation.vars.immediateRender !== false) && animation.totalProgress(containerAnimation && start < -1e-3 && !prevProgress ? gsap.utils.normalize(start, end, 0) : prevProgress, true); // to avoid issues where animation callbacks like onStart aren't triggered.

        self.progress = isFirstRefresh || (scroll1 - start) / change === prevProgress ? 0 : prevProgress;
      }

      pin && pinSpacing && (spacer._pinOffset = Math.round(self.progress * pinChange));
      scrubTween && scrubTween.invalidate();

      if (!isNaN(markerStartOffset)) {
        // numbers were passed in for the position which are absolute, so instead of just putting the markers at the very bottom of the viewport, we figure out how far they shifted down (it's safe to assume they were originally positioned in closer relation to the trigger element with values like "top", "center", a percentage or whatever, so we offset that much in the opposite direction to basically revert them to the relative position thy were at previously.
        markerStartOffset -= gsap.getProperty(markerStartTrigger, direction.p);
        markerEndOffset -= gsap.getProperty(markerEndTrigger, direction.p);

        _shiftMarker(markerStartTrigger, direction, markerStartOffset);

        _shiftMarker(markerStart, direction, markerStartOffset - (pinOffset || 0));

        _shiftMarker(markerEndTrigger, direction, markerEndOffset);

        _shiftMarker(markerEnd, direction, markerEndOffset - (pinOffset || 0));
      }

      isFirstRefresh && !_refreshingAll && self.update(); // edge case - when you reload a page when it's already scrolled down, some browsers fire a "scroll" event before DOMContentLoaded, triggering an updateAll(). If we don't update the self.progress as part of refresh(), then when it happens next, it may record prevProgress as 0 when it really shouldn't, potentially causing a callback in an animation to fire again.

      if (onRefresh && !_refreshingAll && !executingOnRefresh) {
        // when refreshing all, we do extra work to correct pinnedContainer sizes and ensure things don't exceed the maxScroll, so we should do all the refreshes at the end after all that work so that the start/end values are corrected.
        executingOnRefresh = true;
        onRefresh(self);
        executingOnRefresh = false;
      }
    };

    self.getVelocity = function () {
      return (scrollFunc() - scroll2) / (_getTime() - _time2) * 1000 || 0;
    };

    self.endAnimation = function () {
      _endAnimation(self.callbackAnimation);

      if (animation) {
        scrubTween ? scrubTween.progress(1) : !animation.paused() ? _endAnimation(animation, animation.reversed()) : isToggle || _endAnimation(animation, self.direction < 0, 1);
      }
    };

    self.labelToScroll = function (label) {
      return animation && animation.labels && (start || self.refresh() || start) + animation.labels[label] / animation.duration() * change || 0;
    };

    self.getTrailing = function (name) {
      var i = _triggers.indexOf(self),
          a = self.direction > 0 ? _triggers.slice(0, i).reverse() : _triggers.slice(i + 1);

      return (_isString(name) ? a.filter(function (t) {
        return t.vars.preventOverlaps === name;
      }) : a).filter(function (t) {
        return self.direction > 0 ? t.end <= start : t.start >= end;
      });
    };

    self.update = function (reset, recordVelocity, forceFake) {
      if (containerAnimation && !forceFake && !reset) {
        return;
      }

      var scroll = _refreshingAll === true ? prevScroll : self.scroll(),
          p = reset ? 0 : (scroll - start) / change,
          clipped = p < 0 ? 0 : p > 1 ? 1 : p || 0,
          prevProgress = self.progress,
          isActive,
          wasActive,
          toggleState,
          action,
          stateChanged,
          toggled,
          isAtMax,
          isTakingAction;

      if (recordVelocity) {
        scroll2 = scroll1;
        scroll1 = containerAnimation ? scrollFunc() : scroll;

        if (snap) {
          snap2 = snap1;
          snap1 = animation && !isToggle ? animation.totalProgress() : clipped;
        }
      } // anticipate the pinning a few ticks ahead of time based on velocity to avoid a visual glitch due to the fact that most browsers do scrolling on a separate thread (not synced with requestAnimationFrame).


      if (anticipatePin && pin && !_refreshing && !_startup && _lastScrollTime) {
        if (!clipped && start < scroll + (scroll - scroll2) / (_getTime() - _time2) * anticipatePin) {
          clipped = 0.0001;
        } else if (clipped === 1 && end > scroll + (scroll - scroll2) / (_getTime() - _time2) * anticipatePin) {
          clipped = 0.9999;
        }
      }

      if (clipped !== prevProgress && self.enabled) {
        isActive = self.isActive = !!clipped && clipped < 1;
        wasActive = !!prevProgress && prevProgress < 1;
        toggled = isActive !== wasActive;
        stateChanged = toggled || !!clipped !== !!prevProgress; // could go from start all the way to end, thus it didn't toggle but it did change state in a sense (may need to fire a callback)

        self.direction = clipped > prevProgress ? 1 : -1;
        self.progress = clipped;

        if (stateChanged && !_refreshing) {
          toggleState = clipped && !prevProgress ? 0 : clipped === 1 ? 1 : prevProgress === 1 ? 2 : 3; // 0 = enter, 1 = leave, 2 = enterBack, 3 = leaveBack (we prioritize the FIRST encounter, thus if you scroll really fast past the onEnter and onLeave in one tick, it'd prioritize onEnter.

          if (isToggle) {
            action = !toggled && toggleActions[toggleState + 1] !== "none" && toggleActions[toggleState + 1] || toggleActions[toggleState]; // if it didn't toggle, that means it shot right past and since we prioritize the "enter" action, we should switch to the "leave" in this case (but only if one is defined)

            isTakingAction = animation && (action === "complete" || action === "reset" || action in animation);
          }
        }

        preventOverlaps && (toggled || isTakingAction) && (isTakingAction || scrub || !animation) && (_isFunction(preventOverlaps) ? preventOverlaps(self) : self.getTrailing(preventOverlaps).forEach(function (t) {
          return t.endAnimation();
        }));

        if (!isToggle) {
          if (scrubTween && !_refreshing && !_startup) {
            scrubTween._dp._time - scrubTween._start !== scrubTween._time && scrubTween.render(scrubTween._dp._time - scrubTween._start); // if there's a scrub on both the container animation and this one (or a ScrollSmoother), the update order would cause this one not to have rendered yet, so it wouldn't make any progress before we .restart() it heading toward the new progress so it'd appear stuck thus we force a render here.

            if (scrubTween.resetTo) {
              scrubTween.resetTo("totalProgress", clipped, animation._tTime / animation._tDur);
            } else {
              // legacy support (courtesy), before 3.10.0
              scrubTween.vars.totalProgress = clipped;
              scrubTween.invalidate().restart();
            }
          } else if (animation) {
            animation.totalProgress(clipped, !!(_refreshing && (lastRefresh || reset)));
          }
        }

        if (pin) {
          reset && pinSpacing && (spacer.style[pinSpacing + direction.os2] = spacingStart);

          if (!useFixedPosition) {
            pinSetter(_round(pinStart + pinChange * clipped));
          } else if (stateChanged) {
            isAtMax = !reset && clipped > prevProgress && end + 1 > scroll && scroll + 1 >= _maxScroll(scroller, direction); // if it's at the VERY end of the page, don't switch away from position: fixed because it's pointless and it could cause a brief flash when the user scrolls back up (when it gets pinned again)

            if (pinReparent) {
              if (!reset && (isActive || isAtMax)) {
                var bounds = _getBounds(pin, true),
                    _offset = scroll - start;

                _reparent(pin, _body, bounds.top + (direction === _vertical ? _offset : 0) + _px, bounds.left + (direction === _vertical ? 0 : _offset) + _px);
              } else {
                _reparent(pin, spacer);
              }
            }

            _setState(isActive || isAtMax ? pinActiveState : pinState);

            pinMoves && clipped < 1 && isActive || pinSetter(pinStart + (clipped === 1 && !isAtMax ? pinChange : 0));
          }
        }

        snap && !tweenTo.tween && !_refreshing && !_startup && snapDelayedCall.restart(true);
        toggleClass && (toggled || once && clipped && (clipped < 1 || !_limitCallbacks)) && _toArray(toggleClass.targets).forEach(function (el) {
          return el.classList[isActive || once ? "add" : "remove"](toggleClass.className);
        }); // classes could affect positioning, so do it even if reset or refreshing is true.

        onUpdate && !isToggle && !reset && onUpdate(self);

        if (stateChanged && !_refreshing) {
          if (isToggle) {
            if (isTakingAction) {
              if (action === "complete") {
                animation.pause().totalProgress(1);
              } else if (action === "reset") {
                animation.restart(true).pause();
              } else if (action === "restart") {
                animation.restart(true);
              } else {
                animation[action]();
              }
            }

            onUpdate && onUpdate(self);
          }

          if (toggled || !_limitCallbacks) {
            // on startup, the page could be scrolled and we don't want to fire callbacks that didn't toggle. For example onEnter shouldn't fire if the ScrollTrigger isn't actually entered.
            onToggle && toggled && _callback(self, onToggle);
            callbacks[toggleState] && _callback(self, callbacks[toggleState]);
            once && (clipped === 1 ? self.kill(false, 1) : callbacks[toggleState] = 0); // a callback shouldn't be called again if once is true.

            if (!toggled) {
              // it's possible to go completely past, like from before the start to after the end (or vice-versa) in which case BOTH callbacks should be fired in that order
              toggleState = clipped === 1 ? 1 : 3;
              callbacks[toggleState] && _callback(self, callbacks[toggleState]);
            }
          }

          if (fastScrollEnd && !isActive && Math.abs(self.getVelocity()) > (_isNumber(fastScrollEnd) ? fastScrollEnd : 2500)) {
            _endAnimation(self.callbackAnimation);

            scrubTween ? scrubTween.progress(1) : _endAnimation(animation, action === "reverse" ? 1 : !clipped, 1);
          }
        } else if (isToggle && onUpdate && !_refreshing) {
          onUpdate(self);
        }
      } // update absolutely-positioned markers (only if the scroller isn't the viewport)


      if (markerEndSetter) {
        var n = containerAnimation ? scroll / containerAnimation.duration() * (containerAnimation._caScrollDist || 0) : scroll;
        markerStartSetter(n + (markerStartTrigger._isFlipped ? 1 : 0));
        markerEndSetter(n);
      }

      caMarkerSetter && caMarkerSetter(-scroll / containerAnimation.duration() * (containerAnimation._caScrollDist || 0));
    };

    self.enable = function (reset, refresh) {
      if (!self.enabled) {
        self.enabled = true;

        _addListener(scroller, "resize", _onResize);

        isViewport || _addListener(scroller, "scroll", _onScroll);
        onRefreshInit && _addListener(ScrollTrigger, "refreshInit", onRefreshInit);

        if (reset !== false) {
          self.progress = prevProgress = 0;
          scroll1 = scroll2 = lastSnap = scrollFunc();
        }

        refresh !== false && self.refresh();
      }
    };

    self.getTween = function (snap) {
      return snap && tweenTo ? tweenTo.tween : scrubTween;
    };

    self.setPositions = function (newStart, newEnd, keepClamp, pinOffset) {
      // doesn't persist after refresh()! Intended to be a way to override values that were set during refresh(), like you could set it in onRefresh()
      if (containerAnimation) {
        // convert ratios into scroll positions. Remember, start/end values on ScrollTriggers that have a containerAnimation refer to the time (in seconds), NOT scroll positions.
        var st = containerAnimation.scrollTrigger,
            duration = containerAnimation.duration(),
            _change = st.end - st.start;

        newStart = st.start + _change * newStart / duration;
        newEnd = st.start + _change * newEnd / duration;
      }

      self.refresh(false, false, {
        start: _keepClamp(newStart, keepClamp && !!self._startClamp),
        end: _keepClamp(newEnd, keepClamp && !!self._endClamp)
      }, pinOffset);
      self.update();
    };

    self.adjustPinSpacing = function (amount) {
      if (spacerState && amount) {
        var i = spacerState.indexOf(direction.d) + 1;
        spacerState[i] = parseFloat(spacerState[i]) + amount + _px;
        spacerState[1] = parseFloat(spacerState[1]) + amount + _px;

        _setState(spacerState);
      }
    };

    self.disable = function (reset, allowAnimation) {
      reset !== false && self.revert(true, true);

      if (self.enabled) {
        self.enabled = self.isActive = false;
        allowAnimation || scrubTween && scrubTween.pause();
        prevScroll = 0;
        pinCache && (pinCache.uncache = 1);
        onRefreshInit && _removeListener(ScrollTrigger, "refreshInit", onRefreshInit);

        if (snapDelayedCall) {
          snapDelayedCall.pause();
          tweenTo.tween && tweenTo.tween.kill() && (tweenTo.tween = 0);
        }

        if (!isViewport) {
          var i = _triggers.length;

          while (i--) {
            if (_triggers[i].scroller === scroller && _triggers[i] !== self) {
              return; //don't remove the listeners if there are still other triggers referencing it.
            }
          }

          _removeListener(scroller, "resize", _onResize);

          isViewport || _removeListener(scroller, "scroll", _onScroll);
        }
      }
    };

    self.kill = function (revert, allowAnimation) {
      self.disable(revert, allowAnimation);
      scrubTween && !allowAnimation && scrubTween.kill();
      id && delete _ids[id];

      var i = _triggers.indexOf(self);

      i >= 0 && _triggers.splice(i, 1);
      i === _i && _direction > 0 && _i--; // if we're in the middle of a refresh() or update(), splicing would cause skips in the index, so adjust...
      // if no other ScrollTrigger instances of the same scroller are found, wipe out any recorded scroll position. Otherwise, in a single page application, for example, it could maintain scroll position when it really shouldn't.

      i = 0;

      _triggers.forEach(function (t) {
        return t.scroller === self.scroller && (i = 1);
      });

      i || _refreshingAll || (self.scroll.rec = 0);

      if (animation) {
        animation.scrollTrigger = null;
        revert && animation.revert({
          kill: false
        });
        allowAnimation || animation.kill();
      }

      markerStart && [markerStart, markerEnd, markerStartTrigger, markerEndTrigger].forEach(function (m) {
        return m.parentNode && m.parentNode.removeChild(m);
      });
      _primary === self && (_primary = 0);

      if (pin) {
        pinCache && (pinCache.uncache = 1);
        i = 0;

        _triggers.forEach(function (t) {
          return t.pin === pin && i++;
        });

        i || (pinCache.spacer = 0); // if there aren't any more ScrollTriggers with the same pin, remove the spacer, otherwise it could be contaminated with old/stale values if the user re-creates a ScrollTrigger for the same element.
      }

      vars.onKill && vars.onKill(self);
    };

    _triggers.push(self);

    self.enable(false, false);
    customRevertReturn && customRevertReturn(self);

    if (animation && animation.add && !change) {
      // if the animation is a timeline, it may not have been populated yet, so it wouldn't render at the proper place on the first refresh(), thus we should schedule one for the next tick. If "change" is defined, we know it must be re-enabling, thus we can refresh() right away.
      var updateFunc = self.update; // some browsers may fire a scroll event BEFORE a tick elapses and/or the DOMContentLoaded fires. So there's a chance update() will be called BEFORE a refresh() has happened on a Timeline-attached ScrollTrigger which means the start/end won't be calculated yet. We don't want to add conditional logic inside the update() method (like check to see if end is defined and if not, force a refresh()) because that's a function that gets hit a LOT (performance). So we swap out the real update() method for this one that'll re-attach it the first time it gets called and of course forces a refresh().

      self.update = function () {
        self.update = updateFunc;
        _scrollers.cache++; // otherwise a cached scroll position may get used in the refresh() in a very rare scenario, like if ScrollTriggers are created inside a DOMContentLoaded event and the queued requestAnimationFrame() fires beforehand. See https://gsap.com/community/forums/topic/41267-scrolltrigger-breaks-on-refresh-when-using-domcontentloaded/

        start || end || self.refresh();
      };

      gsap.delayedCall(0.01, self.update);
      change = 0.01;
      start = end = 0;
    } else {
      self.refresh();
    }

    pin && _queueRefreshAll(); // pinning could affect the positions of other things, so make sure we queue a full refresh()
  };

  ScrollTrigger.register = function register(core) {
    if (!_coreInitted) {
      gsap = core || _getGSAP();
      _windowExists() && window.document && ScrollTrigger.enable();
      _coreInitted = _enabled;
    }

    return _coreInitted;
  };

  ScrollTrigger.defaults = function defaults(config) {
    if (config) {
      for (var p in config) {
        _defaults[p] = config[p];
      }
    }

    return _defaults;
  };

  ScrollTrigger.disable = function disable(reset, kill) {
    _enabled = 0;

    _triggers.forEach(function (trigger) {
      return trigger[kill ? "kill" : "disable"](reset);
    });

    _removeListener(_win, "wheel", _onScroll);

    _removeListener(_doc, "scroll", _onScroll);

    clearInterval(_syncInterval);

    _removeListener(_doc, "touchcancel", _passThrough);

    _removeListener(_body, "touchstart", _passThrough);

    _multiListener(_removeListener, _doc, "pointerdown,touchstart,mousedown", _pointerDownHandler);

    _multiListener(_removeListener, _doc, "pointerup,touchend,mouseup", _pointerUpHandler);

    _resizeDelay.kill();

    _iterateAutoRefresh(_removeListener);

    for (var i = 0; i < _scrollers.length; i += 3) {
      _wheelListener(_removeListener, _scrollers[i], _scrollers[i + 1]);

      _wheelListener(_removeListener, _scrollers[i], _scrollers[i + 2]);
    }
  };

  ScrollTrigger.enable = function enable() {
    _win = window;
    _doc = document;
    _docEl = _doc.documentElement;
    _body = _doc.body;

    if (gsap) {
      _toArray = gsap.utils.toArray;
      _clamp = gsap.utils.clamp;
      _context = gsap.core.context || _passThrough;
      _suppressOverwrites = gsap.core.suppressOverwrites || _passThrough;
      _scrollRestoration = _win.history.scrollRestoration || "auto";
      _lastScroll = _win.pageYOffset || 0;
      gsap.core.globals("ScrollTrigger", ScrollTrigger); // must register the global manually because in Internet Explorer, functions (classes) don't have a "name" property.

      if (_body) {
        _enabled = 1;
        _div100vh = document.createElement("div"); // to solve mobile browser address bar show/hide resizing, we shouldn't rely on window.innerHeight. Instead, use a <div> with its height set to 100vh and measure that since that's what the scrolling is based on anyway and it's not affected by address bar showing/hiding.

        _div100vh.style.height = "100vh";
        _div100vh.style.position = "absolute";

        _refresh100vh();

        _rafBugFix();

        Observer.register(gsap); // isTouch is 0 if no touch, 1 if ONLY touch, and 2 if it can accommodate touch but also other types like mouse/pointer.

        ScrollTrigger.isTouch = Observer.isTouch;
        _fixIOSBug = Observer.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent); // since 2017, iOS has had a bug that causes event.clientX/Y to be inaccurate when a scroll occurs, thus we must alternate ignoring every other touchmove event to work around it. See https://bugs.webkit.org/show_bug.cgi?id=181954 and https://codepen.io/GreenSock/pen/ExbrPNa/087cef197dc35445a0951e8935c41503

        _ignoreMobileResize = Observer.isTouch === 1;

        _addListener(_win, "wheel", _onScroll); // mostly for 3rd party smooth scrolling libraries.


        _root = [_win, _doc, _docEl, _body];

        if (gsap.matchMedia) {
          ScrollTrigger.matchMedia = function (vars) {
            var mm = gsap.matchMedia(),
                p;

            for (p in vars) {
              mm.add(p, vars[p]);
            }

            return mm;
          };

          gsap.addEventListener("matchMediaInit", function () {
            _recordScrollPositions();

            _revertAll();
          });
          gsap.addEventListener("matchMediaRevert", function () {
            return _revertRecorded();
          });
          gsap.addEventListener("matchMedia", function () {
            _refreshAll(0, 1);

            _dispatch("matchMedia");
          });
          gsap.matchMedia().add("(orientation: portrait)", function () {
            // when orientation changes, we should take new base measurements for the ignoreMobileResize feature.
            _setBaseDimensions();

            return _setBaseDimensions;
          });
        } else {
          console.warn("Requires GSAP 3.11.0 or later");
        }

        _setBaseDimensions();

        _addListener(_doc, "scroll", _onScroll); // some browsers (like Chrome), the window stops dispatching scroll events on the window if you scroll really fast, but it's consistent on the document!


        var bodyHasStyle = _body.hasAttribute("style"),
            bodyStyle = _body.style,
            border = bodyStyle.borderTopStyle,
            AnimationProto = gsap.core.Animation.prototype,
            bounds,
            i;

        AnimationProto.revert || Object.defineProperty(AnimationProto, "revert", {
          value: function value() {
            return this.time(-0.01, true);
          }
        }); // only for backwards compatibility (Animation.revert() was added after 3.10.4)

        bodyStyle.borderTopStyle = "solid"; // works around an issue where a margin of a child element could throw off the bounds of the _body, making it seem like there's a margin when there actually isn't. The border ensures that the bounds are accurate.

        bounds = _getBounds(_body);
        _vertical.m = Math.round(bounds.top + _vertical.sc()) || 0; // accommodate the offset of the <body> caused by margins and/or padding

        _horizontal.m = Math.round(bounds.left + _horizontal.sc()) || 0;
        border ? bodyStyle.borderTopStyle = border : bodyStyle.removeProperty("border-top-style");

        if (!bodyHasStyle) {
          // SSR frameworks like Next.js complain if this attribute gets added.
          _body.setAttribute("style", ""); // it's not enough to just removeAttribute() - we must first set it to empty, otherwise Next.js complains.


          _body.removeAttribute("style");
        } // TODO: (?) maybe move to leveraging the velocity mechanism in Observer and skip intervals.


        _syncInterval = setInterval(_sync, 250);
        gsap.delayedCall(0.5, function () {
          return _startup = 0;
        });

        _addListener(_doc, "touchcancel", _passThrough); // some older Android devices intermittently stop dispatching "touchmove" events if we don't listen for "touchcancel" on the document.


        _addListener(_body, "touchstart", _passThrough); //works around Safari bug: https://gsap.com/forums/topic/21450-draggable-in-iframe-on-mobile-is-buggy/


        _multiListener(_addListener, _doc, "pointerdown,touchstart,mousedown", _pointerDownHandler);

        _multiListener(_addListener, _doc, "pointerup,touchend,mouseup", _pointerUpHandler);

        _transformProp = gsap.utils.checkPrefix("transform");

        _stateProps.push(_transformProp);

        _coreInitted = _getTime();
        _resizeDelay = gsap.delayedCall(0.2, _refreshAll).pause();
        _autoRefresh = [_doc, "visibilitychange", function () {
          var w = _win.innerWidth,
              h = _win.innerHeight;

          if (_doc.hidden) {
            _prevWidth = w;
            _prevHeight = h;
          } else if (_prevWidth !== w || _prevHeight !== h) {
            _onResize();
          }
        }, _doc, "DOMContentLoaded", _refreshAll, _win, "load", _refreshAll, _win, "resize", _onResize];

        _iterateAutoRefresh(_addListener);

        _triggers.forEach(function (trigger) {
          return trigger.enable(0, 1);
        });

        for (i = 0; i < _scrollers.length; i += 3) {
          _wheelListener(_removeListener, _scrollers[i], _scrollers[i + 1]);

          _wheelListener(_removeListener, _scrollers[i], _scrollers[i + 2]);
        }
      } else if (_doc) {
        var onLoad = function onLoad() {
          ScrollTrigger.enable();

          _doc.removeEventListener("DOMContentLoaded", onLoad);
        };

        _doc.addEventListener("DOMContentLoaded", onLoad);
      }
    }
  };

  ScrollTrigger.config = function config(vars) {
    "limitCallbacks" in vars && (_limitCallbacks = !!vars.limitCallbacks);
    var ms = vars.syncInterval;
    ms && clearInterval(_syncInterval) || (_syncInterval = ms) && setInterval(_sync, ms);
    "ignoreMobileResize" in vars && (_ignoreMobileResize = ScrollTrigger.isTouch === 1 && vars.ignoreMobileResize);

    if ("autoRefreshEvents" in vars) {
      _iterateAutoRefresh(_removeListener) || _iterateAutoRefresh(_addListener, vars.autoRefreshEvents || "none");
      _ignoreResize = (vars.autoRefreshEvents + "").indexOf("resize") === -1;
    }
  };

  ScrollTrigger.scrollerProxy = function scrollerProxy(target, vars) {
    var t = _getTarget(target),
        i = _scrollers.indexOf(t),
        isViewport = _isViewport(t);

    if (~i) {
      _scrollers.splice(i, isViewport ? 6 : 2);
    }

    if (vars) {
      isViewport ? _proxies.unshift(_win, vars, _body, vars, _docEl, vars) : _proxies.unshift(t, vars);
    }
  };

  ScrollTrigger.clearMatchMedia = function clearMatchMedia(query) {
    _triggers.forEach(function (t) {
      return t._ctx && t._ctx.query === query && t._ctx.kill(true, true);
    });
  };

  ScrollTrigger.isInViewport = function isInViewport(element, ratio, horizontal) {
    var bounds = (_isString(element) ? _getTarget(element) : element).getBoundingClientRect(),
        offset = bounds[horizontal ? _width : _height] * ratio || 0;
    return horizontal ? bounds.right - offset > 0 && bounds.left + offset < _win.innerWidth : bounds.bottom - offset > 0 && bounds.top + offset < _win.innerHeight;
  };

  ScrollTrigger.positionInViewport = function positionInViewport(element, referencePoint, horizontal) {
    _isString(element) && (element = _getTarget(element));
    var bounds = element.getBoundingClientRect(),
        size = bounds[horizontal ? _width : _height],
        offset = referencePoint == null ? size / 2 : referencePoint in _keywords ? _keywords[referencePoint] * size : ~referencePoint.indexOf("%") ? parseFloat(referencePoint) * size / 100 : parseFloat(referencePoint) || 0;
    return horizontal ? (bounds.left + offset) / _win.innerWidth : (bounds.top + offset) / _win.innerHeight;
  };

  ScrollTrigger.killAll = function killAll(allowListeners) {
    _triggers.slice(0).forEach(function (t) {
      return t.vars.id !== "ScrollSmoother" && t.kill();
    });

    if (allowListeners !== true) {
      var listeners = _listeners.killAll || [];
      _listeners = {};
      listeners.forEach(function (f) {
        return f();
      });
    }
  };

  return ScrollTrigger;
}();
ScrollTrigger.version = "3.15.0";

ScrollTrigger.saveStyles = function (targets) {
  return targets ? _toArray(targets).forEach(function (target) {
    // saved styles are recorded in a consecutive alternating Array, like [element, cssText, transform attribute, cache, matchMedia, ...]
    if (target && target.style) {
      var i = _savedStyles.indexOf(target);

      i >= 0 && _savedStyles.splice(i, 5);

      _savedStyles.push(target, target.style.cssText, target.getBBox && target.getAttribute("transform"), gsap.core.getCache(target), _context());
    }
  }) : _savedStyles;
};

ScrollTrigger.revert = function (soft, media) {
  return _revertAll(!soft, media);
};

ScrollTrigger.create = function (vars, animation) {
  return new ScrollTrigger(vars, animation);
};

ScrollTrigger.refresh = function (safe) {
  return safe ? _onResize(true) : (_coreInitted || ScrollTrigger.register()) && _refreshAll(true);
};

ScrollTrigger.update = function (force) {
  return ++_scrollers.cache && _updateAll(force === true ? 2 : 0);
};

ScrollTrigger.clearScrollMemory = _clearScrollMemory;

ScrollTrigger.maxScroll = function (element, horizontal) {
  return _maxScroll(element, horizontal ? _horizontal : _vertical);
};

ScrollTrigger.getScrollFunc = function (element, horizontal) {
  return _getScrollFunc(_getTarget(element), horizontal ? _horizontal : _vertical);
};

ScrollTrigger.getById = function (id) {
  return _ids[id];
};

ScrollTrigger.getAll = function () {
  return _triggers.filter(function (t) {
    return t.vars.id !== "ScrollSmoother";
  });
}; // it's common for people to ScrollTrigger.getAll(t => t.kill()) on page routes, for example, and we don't want it to ruin smooth scrolling by killing the main ScrollSmoother one.


ScrollTrigger.isScrolling = function () {
  return !!_lastScrollTime;
};

ScrollTrigger.snapDirectional = _snapDirectional;

ScrollTrigger.addEventListener = function (type, callback) {
  var a = _listeners[type] || (_listeners[type] = []);
  ~a.indexOf(callback) || a.push(callback);
};

ScrollTrigger.removeEventListener = function (type, callback) {
  var a = _listeners[type],
      i = a && a.indexOf(callback);
  i >= 0 && a.splice(i, 1);
};

ScrollTrigger.batch = function (targets, vars) {
  var result = [],
      varsCopy = {},
      interval = vars.interval || 0.016,
      batchMax = vars.batchMax || 1e9,
      proxyCallback = function proxyCallback(type, callback) {
    var elements = [],
        triggers = [],
        delay = gsap.delayedCall(interval, function () {
      callback(elements, triggers);
      elements = [];
      triggers = [];
    }).pause();
    return function (self) {
      elements.length || delay.restart(true);
      elements.push(self.trigger);
      triggers.push(self);
      batchMax <= elements.length && delay.progress(1);
    };
  },
      p;

  for (p in vars) {
    varsCopy[p] = p.substr(0, 2) === "on" && _isFunction(vars[p]) && p !== "onRefreshInit" ? proxyCallback(p, vars[p]) : vars[p];
  }

  if (_isFunction(batchMax)) {
    batchMax = batchMax();

    _addListener(ScrollTrigger, "refresh", function () {
      return batchMax = vars.batchMax();
    });
  }

  _toArray(targets).forEach(function (target) {
    var config = {};

    for (p in varsCopy) {
      config[p] = varsCopy[p];
    }

    config.trigger = target;
    result.push(ScrollTrigger.create(config));
  });

  return result;
}; // to reduce file size. clamps the scroll and also returns a duration multiplier so that if the scroll gets chopped shorter, the duration gets curtailed as well (otherwise if you're very close to the top of the page, for example, and swipe up really fast, it'll suddenly slow down and take a long time to reach the top).


var _clampScrollAndGetDurationMultiplier = function _clampScrollAndGetDurationMultiplier(scrollFunc, current, end, max) {
  current > max ? scrollFunc(max) : current < 0 && scrollFunc(0);
  return end > max ? (max - current) / (end - current) : end < 0 ? current / (current - end) : 1;
},
    _allowNativePanning = function _allowNativePanning(target, direction) {
  if (direction === true) {
    target.style.removeProperty("touch-action");
  } else {
    target.style.touchAction = direction === true ? "auto" : direction ? "pan-" + direction + (Observer.isTouch ? " pinch-zoom" : "") : "none"; // note: Firefox doesn't support it pinch-zoom properly, at least in addition to a pan-x or pan-y.
  }

  target === _docEl && _allowNativePanning(_body, direction);
},
    _overflow = {
  auto: 1,
  scroll: 1
},
    _nestedScroll = function _nestedScroll(_ref5) {
  var event = _ref5.event,
      target = _ref5.target,
      axis = _ref5.axis;

  var node = (event.changedTouches ? event.changedTouches[0] : event).target,
      cache = node._gsap || gsap.core.getCache(node),
      time = _getTime(),
      cs;

  if (!cache._isScrollT || time - cache._isScrollT > 2000) {
    // cache for 2 seconds to improve performance.
    while (node && node !== _body && (node.scrollHeight <= node.clientHeight && node.scrollWidth <= node.clientWidth || !(_overflow[(cs = _getComputedStyle(node)).overflowY] || _overflow[cs.overflowX]))) {
      node = node.parentNode;
    }

    cache._isScroll = node && node !== target && !_isViewport(node) && (_overflow[(cs = _getComputedStyle(node)).overflowY] || _overflow[cs.overflowX]);
    cache._isScrollT = time;
  }

  if (cache._isScroll || axis === "x") {
    event.stopPropagation();
    event._gsapAllow = true;
  }
},
    // capture events on scrollable elements INSIDE the <body> and allow those by calling stopPropagation() when we find a scrollable ancestor
_inputObserver = function _inputObserver(target, type, inputs, nested) {
  return Observer.create({
    target: target,
    capture: true,
    debounce: false,
    lockAxis: true,
    type: type,
    onWheel: nested = nested && _nestedScroll,
    onPress: nested,
    onDrag: nested,
    onScroll: nested,
    onEnable: function onEnable() {
      return inputs && _addListener(_doc, Observer.eventTypes[0], _captureInputs, false, true);
    },
    onDisable: function onDisable() {
      return _removeListener(_doc, Observer.eventTypes[0], _captureInputs, true);
    }
  });
},
    _inputExp = /(input|label|select|textarea)/i,
    _inputIsFocused,
    _captureInputs = function _captureInputs(e) {
  var isInput = _inputExp.test(e.target.tagName);

  if (isInput || _inputIsFocused) {
    e._gsapAllow = true;
    _inputIsFocused = isInput;
  }
},
    _getScrollNormalizer = function _getScrollNormalizer(vars) {
  _isObject(vars) || (vars = {});
  vars.preventDefault = vars.isNormalizer = vars.allowClicks = true;
  vars.type || (vars.type = "wheel,touch");
  vars.debounce = !!vars.debounce;
  vars.id = vars.id || "normalizer";

  var _vars2 = vars,
      normalizeScrollX = _vars2.normalizeScrollX,
      momentum = _vars2.momentum,
      allowNestedScroll = _vars2.allowNestedScroll,
      onRelease = _vars2.onRelease,
      self,
      maxY,
      target = _getTarget(vars.target) || _docEl,
      smoother = gsap.core.globals().ScrollSmoother,
      smootherInstance = smoother && smoother.get(),
      content = _fixIOSBug && (vars.content && _getTarget(vars.content) || smootherInstance && vars.content !== false && !smootherInstance.smooth() && smootherInstance.content()),
      scrollFuncY = _getScrollFunc(target, _vertical),
      scrollFuncX = _getScrollFunc(target, _horizontal),
      scale = 1,
      initialScale = (Observer.isTouch && _win.visualViewport ? _win.visualViewport.scale * _win.visualViewport.width : _win.outerWidth) / _win.innerWidth,
      wheelRefresh = 0,
      resolveMomentumDuration = _isFunction(momentum) ? function () {
    return momentum(self);
  } : function () {
    return momentum || 2.8;
  },
      lastRefreshID,
      skipTouchMove,
      inputObserver = _inputObserver(target, vars.type, true, allowNestedScroll),
      resumeTouchMove = function resumeTouchMove() {
    return skipTouchMove = false;
  },
      scrollClampX = _passThrough,
      scrollClampY = _passThrough,
      updateClamps = function updateClamps() {
    maxY = _maxScroll(target, _vertical);
    scrollClampY = _clamp(_fixIOSBug ? 1 : 0, maxY);
    normalizeScrollX && (scrollClampX = _clamp(0, _maxScroll(target, _horizontal)));
    lastRefreshID = _refreshID;
  },
      removeContentOffset = function removeContentOffset() {
    content._gsap.y = _round(parseFloat(content._gsap.y) + scrollFuncY.offset) + "px";
    content.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(content._gsap.y) + ", 0, 1)";
    scrollFuncY.offset = scrollFuncY.cacheID = 0;
  },
      ignoreDrag = function ignoreDrag() {
    if (skipTouchMove) {
      requestAnimationFrame(resumeTouchMove);

      var offset = _round(self.deltaY / 2),
          scroll = scrollClampY(scrollFuncY.v - offset);

      if (content && scroll !== scrollFuncY.v + scrollFuncY.offset) {
        scrollFuncY.offset = scroll - scrollFuncY.v;

        var y = _round((parseFloat(content && content._gsap.y) || 0) - scrollFuncY.offset);

        content.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + y + ", 0, 1)";
        content._gsap.y = y + "px";
        scrollFuncY.cacheID = _scrollers.cache;

        _updateAll();
      }

      return true;
    }

    scrollFuncY.offset && removeContentOffset();
    skipTouchMove = true;
  },
      tween,
      startScrollX,
      startScrollY,
      onStopDelayedCall,
      onResize = function onResize() {
    // if the window resizes, like on an iPhone which Apple FORCES the address bar to show/hide even if we event.preventDefault(), it may be scrolling too far now that the address bar is showing, so we must dynamically adjust the momentum tween.
    updateClamps();

    if (tween.isActive() && tween.vars.scrollY > maxY) {
      scrollFuncY() > maxY ? tween.progress(1) && scrollFuncY(maxY) : tween.resetTo("scrollY", maxY);
    }
  };

  content && gsap.set(content, {
    y: "+=0"
  }); // to ensure there's a cache (element._gsap)

  vars.ignoreCheck = function (e) {
    return _fixIOSBug && e.type === "touchmove" && ignoreDrag() || scale > 1.05 && e.type !== "touchstart" || self.isGesturing || e.touches && e.touches.length > 1;
  };

  vars.onPress = function () {
    skipTouchMove = false;
    var prevScale = scale;
    scale = _round((_win.visualViewport && _win.visualViewport.scale || 1) / initialScale);
    tween.pause();
    prevScale !== scale && _allowNativePanning(target, scale > 1.01 ? true : normalizeScrollX ? false : "x");
    startScrollX = scrollFuncX();
    startScrollY = scrollFuncY();
    updateClamps();
    lastRefreshID = _refreshID;
  };

  vars.onRelease = vars.onGestureStart = function (self, wasDragging) {
    scrollFuncY.offset && removeContentOffset();

    if (!wasDragging) {
      onStopDelayedCall.restart(true);
    } else {
      _scrollers.cache++; // make sure we're pulling the non-cached value
      // alternate algorithm: durX = Math.min(6, Math.abs(self.velocityX / 800)),	dur = Math.max(durX, Math.min(6, Math.abs(self.velocityY / 800))); dur = dur * (0.4 + (1 - _power4In(dur / 6)) * 0.6)) * (momentumSpeed || 1)

      var dur = resolveMomentumDuration(),
          currentScroll,
          endScroll;

      if (normalizeScrollX) {
        currentScroll = scrollFuncX();
        endScroll = currentScroll + dur * 0.05 * -self.velocityX / 0.227; // the constant .227 is from power4(0.05). velocity is inverted because scrolling goes in the opposite direction.

        dur *= _clampScrollAndGetDurationMultiplier(scrollFuncX, currentScroll, endScroll, _maxScroll(target, _horizontal));
        tween.vars.scrollX = scrollClampX(endScroll);
      }

      currentScroll = scrollFuncY();
      endScroll = currentScroll + dur * 0.05 * -self.velocityY / 0.227; // the constant .227 is from power4(0.05)

      dur *= _clampScrollAndGetDurationMultiplier(scrollFuncY, currentScroll, endScroll, _maxScroll(target, _vertical));
      tween.vars.scrollY = scrollClampY(endScroll);
      tween.invalidate().duration(dur).play(0.01);

      if (_fixIOSBug && tween.vars.scrollY >= maxY || currentScroll >= maxY - 1) {
        // iOS bug: it'll show the address bar but NOT fire the window "resize" event until the animation is done but we must protect against overshoot so we leverage an onUpdate to do so.
        gsap.to({}, {
          onUpdate: onResize,
          duration: dur
        });
      }
    }

    onRelease && onRelease(self);
  };

  vars.onWheel = function () {
    tween._ts && tween.pause();

    if (_getTime() - wheelRefresh > 1000) {
      // after 1 second, refresh the clamps otherwise that'll only happen when ScrollTrigger.refresh() is called or for touch-scrolling.
      lastRefreshID = 0;
      wheelRefresh = _getTime();
    }
  };

  vars.onChange = function (self, dx, dy, xArray, yArray) {
    _refreshID !== lastRefreshID && updateClamps();
    dx && normalizeScrollX && scrollFuncX(scrollClampX(xArray[2] === dx ? startScrollX + (self.startX - self.x) : scrollFuncX() + dx - xArray[1])); // for more precision, we track pointer/touch movement from the start, otherwise it'll drift.

    if (dy) {
      scrollFuncY.offset && removeContentOffset();
      var isTouch = yArray[2] === dy,
          y = isTouch ? startScrollY + self.startY - self.y : scrollFuncY() + dy - yArray[1],
          yClamped = scrollClampY(y);
      isTouch && y !== yClamped && (startScrollY += yClamped - y);
      scrollFuncY(yClamped);
    }

    (dy || dx) && _updateAll();
  };

  vars.onEnable = function () {
    _allowNativePanning(target, normalizeScrollX ? false : "x");

    ScrollTrigger.addEventListener("refresh", onResize);

    _addListener(_win, "resize", onResize);

    if (scrollFuncY.smooth) {
      scrollFuncY.target.style.scrollBehavior = "auto";
      scrollFuncY.smooth = scrollFuncX.smooth = false;
    }

    inputObserver.enable();
  };

  vars.onDisable = function () {
    _allowNativePanning(target, true);

    _removeListener(_win, "resize", onResize);

    ScrollTrigger.removeEventListener("refresh", onResize);
    inputObserver.kill();
  };

  vars.lockAxis = vars.lockAxis !== false;
  self = new Observer(vars);
  self.iOS = _fixIOSBug; // used in the Observer getCachedScroll() function to work around an iOS bug that wreaks havoc with TouchEvent.clientY if we allow scroll to go all the way back to 0.

  _fixIOSBug && !scrollFuncY() && scrollFuncY(1); // iOS bug causes event.clientY values to freak out (wildly inaccurate) if the scroll position is exactly 0.

  _fixIOSBug && gsap.ticker.add(_passThrough); // prevent the ticker from sleeping

  onStopDelayedCall = self._dc;
  tween = gsap.to(self, {
    ease: "power4",
    paused: true,
    inherit: false,
    scrollX: normalizeScrollX ? "+=0.1" : "+=0",
    scrollY: "+=0.1",
    modifiers: {
      scrollY: _interruptionTracker(scrollFuncY, scrollFuncY(), function () {
        return tween.pause();
      })
    },
    onUpdate: _updateAll,
    onComplete: onStopDelayedCall.vars.onComplete
  }); // we need the modifier to sense if the scroll position is altered outside of the momentum tween (like with a scrollTo tween) so we can pause() it to prevent conflicts.

  return self;
};

ScrollTrigger.sort = function (func) {
  if (_isFunction(func)) {
    return _triggers.sort(func);
  }

  var scroll = _win.pageYOffset || 0;
  ScrollTrigger.getAll().forEach(function (t) {
    return t._sortY = t.trigger ? scroll + t.trigger.getBoundingClientRect().top : t.start + _win.innerHeight;
  });
  return _triggers.sort(func || function (a, b) {
    return (a.vars.refreshPriority || 0) * -1e6 + (a.vars.containerAnimation ? 1e6 : a._sortY) - ((b.vars.containerAnimation ? 1e6 : b._sortY) + (b.vars.refreshPriority || 0) * -1e6);
  }); // anything with a containerAnimation should refresh last.
};

ScrollTrigger.observe = function (vars) {
  return new Observer(vars);
};

ScrollTrigger.normalizeScroll = function (vars) {
  if (typeof vars === "undefined") {
    return _normalizer;
  }

  if (vars === true && _normalizer) {
    return _normalizer.enable();
  }

  if (vars === false) {
    _normalizer && _normalizer.kill();
    _normalizer = vars;
    return;
  }

  var normalizer = vars instanceof Observer ? vars : _getScrollNormalizer(vars);
  _normalizer && _normalizer.target === normalizer.target && _normalizer.kill();
  _isViewport(normalizer.target) && (_normalizer = normalizer);
  return normalizer;
};

ScrollTrigger.core = {
  // smaller file size way to leverage in ScrollSmoother and Observer
  _getVelocityProp: _getVelocityProp,
  _inputObserver: _inputObserver,
  _scrollers: _scrollers,
  _proxies: _proxies,
  bridge: {
    // when normalizeScroll sets the scroll position (ss = setScroll)
    ss: function ss() {
      _lastScrollTime || _dispatch("scrollStart");
      _lastScrollTime = _getTime();
    },
    // a way to get the _refreshing value in Observer
    ref: function ref() {
      return _refreshing;
    }
  }
};
_getGSAP() && gsap.registerPlugin(ScrollTrigger);

{
  const g = window;
  g.gsap = gsapWithCSS;
  g.ScrollTrigger = ScrollTrigger;
}
const {
  Header,
  Hero,
  StatsStrip,
  ResilienceCards,
  StepsSection,
  SDKSection,
  PaymentRailsSection,
  NodeHostingSection,
  AgenticPaymentsSection,
  CentralizedVPNSection,
  BlockchainDHTSection,
  CompareSection,
  EcosystemSection,
  ContactSection,
  Footer
} = window;
function App() {
  return /* @__PURE__ */ jsxs(React$1.Fragment, { children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs("main", { id: "main", children: [
      /* @__PURE__ */ jsx(Hero, {}),
      /* @__PURE__ */ jsxs("div", { style: { position: "relative", background: "#0b0c10", isolation: "isolate" }, children: [
        /* @__PURE__ */ jsx("div", { "aria-hidden": "true", style: { position: "absolute", inset: 0, pointerEvents: "none", background: "radial-gradient(1100px 540px at 12% -2%, rgba(1,86,252,0.16), transparent 62%), radial-gradient(900px 600px at 92% 24%, rgba(38,112,255,0.10), transparent 60%), radial-gradient(1000px 560px at 4% 60%, rgba(1,86,252,0.08), transparent 60%), radial-gradient(1300px 720px at 50% 102%, rgba(1,86,252,0.14), transparent 65%)" } }),
        /* @__PURE__ */ jsx("div", { "aria-hidden": "true", style: { position: "absolute", inset: 0, pointerEvents: "none", backgroundImage: "radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1.4px)", backgroundSize: "30px 30px", maskImage: "linear-gradient(180deg, transparent 0%, black 8%, black 92%, transparent 100%)", WebkitMaskImage: "linear-gradient(180deg, transparent 0%, black 8%, black 92%, transparent 100%)" } }),
        /* @__PURE__ */ jsxs("div", { style: { position: "relative" }, children: [
          /* @__PURE__ */ jsx(StatsStrip, {}),
          /* @__PURE__ */ jsx(EcosystemSection, {}),
          /* @__PURE__ */ jsx(ResilienceCards, {}),
          /* @__PURE__ */ jsx(StepsSection, {})
        ] })
      ] }),
      /* @__PURE__ */ jsx(SDKSection, {}),
      /* @__PURE__ */ jsx(PaymentRailsSection, {}),
      /* @__PURE__ */ jsx(NodeHostingSection, {}),
      /* @__PURE__ */ jsx(AgenticPaymentsSection, {}),
      /* @__PURE__ */ jsx(CentralizedVPNSection, {}),
      /* @__PURE__ */ jsx(BlockchainDHTSection, {}),
      /* @__PURE__ */ jsx(CompareSection, {}),
      /* @__PURE__ */ jsx(ContactSection, {})
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "App", App, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/Connect/AppData/Local/Temp/main-website-pr/src/components/App.tsx", "client:component-export": "default" })} ` })}`;
}, "C:/Users/Connect/AppData/Local/Temp/main-website-pr/src/pages/index.astro", void 0);

const $$file = "C:/Users/Connect/AppData/Local/Temp/main-website-pr/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
