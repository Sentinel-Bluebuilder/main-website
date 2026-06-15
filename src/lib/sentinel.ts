// ─── Sentinel JS-side design tokens + outbound links ───
// Ported verbatim from the original window.SENTINEL / window.SENTINEL_LINKS
// token script. A few places (gradient backgrounds, inline conditional colors)
// read tokens out of a JS object more naturally than a CSS var.
//
// bgRadial / bgGraphite reference the noise texture, now a real file path
// instead of a runtime blob URL.

import { RESOURCES } from './resources';

const noise = RESOURCES.noiseBg;

export const SENTINEL = {
  // Brand
  blue: '#0156FC',
  blueLight: '#2670FF',
  blueTint: 'rgba(1, 86, 252, 0.20)',
  blueTint08: 'rgba(1, 86, 252, 0.08)',

  // Dark neutrals
  black: '#000000',
  graphite900: '#0c0c0c',
  graphite850: '#121212',
  graphite750: '#151515',
  graphite700: '#181818',
  graphite650: '#1c1c1c',
  graphite600: '#23262b',
  graphite500: '#252527',

  // Light neutrals
  white: '#ffffff',
  paper: '#fbfbfb',
  snow: '#f7f7f7',
  mist: '#efefef',
  fog: '#eaeaea',
  line200: '#ebebeb',
  line300: '#eeeeee',
  line500: '#d9d9d9',
  ink900: '#1d1d1f',
  ink700: '#262626',

  // Danger
  danger700: 'rgba(216, 4, 4, 0.84)',

  // Opacity stacks
  onDark: 'rgba(234, 234, 234, 0.90)',
  onDark80: 'rgba(234, 234, 234, 0.80)',
  onDark60: 'rgba(234, 234, 234, 0.60)',
  onDark50: 'rgba(255, 255, 255, 0.50)',
  onLight80: 'rgba(0, 0, 0, 0.80)',
  onLight60: 'rgba(0, 0, 0, 0.60)',
  onLight50: 'rgba(0, 0, 0, 0.50)',
  onLight85: 'rgba(0, 0, 0, 0.85)',

  // Strokes
  strokeOnDark: 'rgba(255, 255, 255, 0.06)',
  strokeOnLight: 'rgba(0, 0, 0, 0.06)',

  // Bg helpers — noise texture as a full-bleed cover layer over the dark fills.
  bgRadial: `url("${noise}") center/cover no-repeat, radial-gradient(ellipse at center, #1c1c1c 0%, #0c0c0c 100%)`,
  bgGraphite: `url("${noise}") center/cover no-repeat, #0c0c0c`,
  bgPaper: '#fbfbfb',

  // Fonts
  fontHeading: '"Funnel Display", "Noto Sans", system-ui, sans-serif',
  fontBody: '"Lato", "Noto Sans", system-ui, sans-serif',
  fontMono: '"JetBrains Mono", ui-monospace, "SF Mono", Menlo, Consolas, monospace',

  // Layout
  container: 1160,
  pageWidth: 1440,
};

export const SENTINEL_LINKS = {
  // Primary
  docs: 'https://docs.sentinel.co/',
  github: 'https://github.com/sentinel-official',
  dapps: 'https://www.sentinel.co/dapps',
  home: 'https://sentinel.co/',
  privacy: 'https://sentinel.co/legal/privacy',

  // Network / explorer
  stats: 'https://stats.sentinel.co/',
  nodes: 'https://nodes.suchnode.net/',
  nodeMap: 'https://map.sentinel.co/',
  explorer: 'https://p2pscan.com/',

  // Developer
  sdkDocs: 'https://docs.sentinel.co/sentinel-hub',
  hubDocs: 'https://docs.sentinel.co/sentinel-hub',
  vpnProtocols: 'https://docs.sentinel.co/get-started/dvpn/vpn-protocols',
  subplanDocs: 'https://docs.sentinel.co/sentinel-hub/commands/transactions/subplan',

  // Node operator
  hostNode: 'https://docs.sentinel.co/dvpn-node-setup',
  nodeEarnings: 'https://docs.sentinel.co/dvpn-nodes/earnings',
  nodeDeployer: 'https://github.com/sentinel-official/node-deployer-experimental/releases/tag/v0.1.2',

  // New / testing products
  testNode: 'https://test.sentinel.co/',
  planManager: 'https://plan.sentinel.co/',
  x402: 'https://x402.sentinel.co/',

  // Apps / ecosystem
  rynVpn: 'https://www.rynvpn.com/',
  sentinelShield: 'https://shield.sentinel.co/',
  independent: 'https://independentdvpn.com/',
  norse: 'https://norselabs.io/',
  meile: 'https://mathnodes.com/index.php/meile-dvpn-client-linux-os-x/',
  valt: 'https://valtdata.com/',
  encryptSim: 'https://www.encryptsim.com/',

  // Community
  twitter: 'https://x.com/sentinelp2p',
  telegram: 'https://t.me/sentinelp2p',
  discord: 'https://discord.com/invite/mmAA8qF',
  growthDao: 'https://t.me/sentinelgrowthdao',
  p2pNews: 'https://t.me/p2pnewswire',
  bluefrens: 'https://x.com/BluefrensNFT',
};
