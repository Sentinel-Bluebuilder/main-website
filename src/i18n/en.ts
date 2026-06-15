// ─── English base locale (canonical key set) ───
// Every other locale is keyed against this map. This is the FULL user-facing
// surface of the site: <head> meta, nav + footer, hero, every section's
// headings, body copy, cards, comparison tables, console, forms, and CTAs.
// Non-English locales are partial maps; any key they omit falls back to the
// English value here (see makeT in ./index.ts), so the page is always complete
// in English and fully translated wherever a locale provides the key.
//
// Brand/product names (Sentinel, dVPN, P2P, WireGuard, V2Ray, Tor, GitHub,
// Base, Solana, ChatGPT, Claude, Gemini, x402, ticker symbols, social-platform
// names) are intentionally NOT keyed — they stay constant across languages.

export const en = {
  // ─── Document / social meta ───
  'meta.title': 'Sentinel — Build your own decentralized VPN.',
  'meta.description':
    'Sentinel is a Layer-1 decentralized bandwidth network. Bring your protocol, your client, your distribution — we handle the network.',
  'meta.ogImageAlt': 'Sentinel — decentralized Layer-1 bandwidth network',

  // ─── Nav bar + footer column heads (shared four labels) ───
  'nav.explore': 'Explore',
  'nav.dvpn': 'dVPN',
  'nav.build': 'Build',
  'nav.more': 'More',
  'nav.buyP2P': 'Buy P2P',

  // ─── Nav: Explore dropdown ───
  'nav.explore.statsTitle': 'Network Statistics',
  'nav.explore.statsDesc': 'Monitor real-time network performance and metrics.',
  'nav.explore.dashboardTitle': 'Node Explorer',
  'nav.explore.dashboardDesc': 'Live map of active nodes, sessions, and data usage.',
  'nav.explore.explorerTitle': 'Explorer',
  'nav.explore.explorerDesc': 'Search and explore network transactions.',
  'nav.explore.ecosystemTitle': 'Ecosystem',
  'nav.explore.ecosystemDesc': 'Discover apps and services in our ecosystem.',

  // ─── Nav: dVPN dropdown ───
  'nav.dvpn.downloadTitle': 'Download Apps',
  'nav.dvpn.downloadDesc': 'Sentinel Shield, Norse, Valt, Meile and more.',
  'nav.dvpn.coverageTitle': 'Coverage',
  'nav.dvpn.coverageDesc': '110+ Countries, 430+ Cities.',
  'nav.dvpn.learnTitle': 'Learn',
  'nav.dvpn.learnDesc': 'Explore guides, documentation, and more.',
  'nav.dvpn.runNodeTitle': 'Run a Node',
  'nav.dvpn.runNodeDesc': 'Support the network and earn rewards.',
  'nav.dvpn.buildTitle': 'Build',
  'nav.dvpn.buildDesc': 'Create your own applications on the network.',
  'nav.dvpn.earnTitle': 'Earn',
  'nav.dvpn.earnDesc': 'Monetize your bandwidth and more.',

  // ─── Nav: Build dropdown ───
  'nav.build.planManagerTitle': 'Plan Manager',
  'nav.build.planManagerDesc': 'Turn raw bandwidth into priced subscription plans.',
  'nav.build.sdkTitle': 'SDK',
  'nav.build.sdkDesc': 'Native bindings for iOS, Android, Web & desktop.',
  'nav.build.paymentsTitle': 'Configure Payments',
  'nav.build.paymentsDesc': 'Stripe, USDC, BTC, on-ramps — wire any gateway per plan.',
  'nav.build.x402Title': 'x402 Payments',
  'nav.build.x402Desc': 'Per-byte agentic payments — no API keys, no accounts.',
  'nav.build.protocolsTitle': 'VPN Protocols',
  'nav.build.protocolsDesc': 'WireGuard, V2Ray, OpenVPN — pick what your users need.',
  'nav.build.docsTitle': 'Developer Docs',
  'nav.build.docsDesc': 'API reference, quickstarts, and architecture guides.',

  // ─── Nav: More dropdown ───
  'nav.more.docsTitle': 'dVPN Docs',
  'nav.more.docsDesc': 'Clients, nodes, protocols, FAQs.',
  'nav.more.contactTitle': 'Contacts Us',
  'nav.more.contactDesc': 'Question or support — get in touch.',

  // ─── Buy P2P dropdown ───
  'buy.mexcTag': 'P2P/USDT spot',
  'buy.osmosisTag': 'Swap on-chain',
  'buy.skipTag': 'Cross-chain swap',

  // ─── Header chrome ───
  'header.menu': 'Menu',
  'lang.label': 'Language',

  // ─── Hero ───
  'hero.title': 'Build your own decentralized VPN.',
  'hero.subtitle':
    'The most resilient peer-to-peer networking protocol designed to be censorship-resistant for any geography.',
  'hero.readMore': 'Read more',
  'hero.ctaUse': 'Use a dVPN App',
  'hero.ctaBuild': 'Build a dVPN App',
  'hero.ctaHost': 'Host a dVPN Node',
  'hero.bullet1': 'A perpetual, on-chain DHT — consensus-protected, censorship-resistant.',
  'hero.bullet2': 'Zero bootstrap nodes, zero central servers to seize.',
  'hero.bullet3': 'Bandwidth contributed by independent operators in 70+ countries.',
  'hero.bullet4': 'Any client can join with nothing more than an RPC endpoint.',
  'hero.usersCounter': 'people use dVPN apps built on Sentinel',

  // ─── Stats strip ───
  'stats.dapps': 'dApps built on Sentinel',
  'stats.totalUsers': 'Total Users',
  'stats.providers': 'P2P Bandwidth Providers',
  'stats.data': 'Data Consumed',
  'stats.viewNetworkStats': 'View Network Stats',

  // ─── Builder-stack: section heading + connection pipeline ───
  'sdk.heading': 'Everything a dVPN builder needs. Handled.',
  'builderStack.step1Title': 'Direct Node Probe',
  'builderStack.step1Body':
    "HTTPS request directly to the node's remote address. Returns live status: protocol type, peer count, location, bandwidth. Peer-to-peer, no relay.",
  'builderStack.step2Title': 'On-Chain Session',
  'builderStack.step2Body':
    'Signed transaction creates an immutable session record on the blockchain. Session ID, node address, account address — all consensus-validated.',
  'builderStack.step3Title': 'Verified Handshake',
  'builderStack.step3Body':
    'Node receives request, queries the chain to verify the session matches. Only then generates VPN credentials. Authorization is on-chain.',
  'builderStack.step4Title': 'Encrypted Tunnel',
  'builderStack.step4Body':
    'WireGuard (Curve25519) or V2Ray (VLess/VMess) tunnel established directly between client and node. End-to-end encrypted. Zero intermediaries.',
  'builderStack.closing1': 'No centralized server is involved at any step.',
  'builderStack.closing2': 'The blockchain is the backend.',
  'builderStack.sdkBody':
    'Compute, bandwidth, payments, security — the Sentinel protocol runs the entire white-label stack underneath your brand. You build the app. The network does the rest.',

  // ─── Resilience cards ───
  'resilience.blockchainTitle': 'The blockchain IS the backend',
  'resilience.blockchainPoint1': 'Every node, session, and account lives on-chain.',
  'resilience.blockchainPoint2': 'Discovery is a chain query — nothing to take down.',
  'resilience.blockchainPoint3': 'Finality, Sybil resistance, and governance built in.',
  'resilience.blockchainAction': 'View Real-Time Transactions',
  'resilience.validatorsTitle': 'Validators provide the compute',
  'resilience.validatorsPoint1': "Sessions, plans, and payouts verified by Sentinel's validators.",
  'resilience.validatorsPoint2': 'That consensus compute is your backend: no servers to run.',
  'resilience.validatorsPoint3': 'Every state change is final and tamper-proof.',
  'resilience.validatorsAction': 'View Validators',
  'resilience.bandwidthTitle': 'Pay for bandwidth directly in P2P',
  'resilience.bandwidthPoint1': 'Wallets pay node operators directly on-chain — no invoices.',
  'resilience.bandwidthPoint2': 'Pick nodes by country, price, or protocol.',
  'resilience.bandwidthPoint3': "Pay in P2P for bandwidth, Sentinel's native token.",
  'resilience.serversTitle': '1500+ servers, zero server ops',
  'resilience.serversPoint1': 'Bandwidth from 1500+ servers run by independent operators.',
  'resilience.serversPoint2': '90+ countries across six continents.',
  'resilience.serversPoint3': 'Racking, patching, and scaling — abstracted away entirely.',
  'resilience.serversAction': 'View Global Node Map',
  'resilience.wireguardSub': 'Kernel-fast encrypted tunnels',
  'resilience.v2raySub': 'VMess / VLESS · anti-censorship',
  'resilience.moreCountries': '+ 80 more',
  'resilience.moreCountriesTitle': '90+ countries across six continents',

  // ─── Open-source section ───
  'oss.closedSource': 'Closed-source VPNs ask for your trust.',
  'oss.openStatement':
    'Sentinel is the only open-source, decentralized framework to build a VPN application on — full transparency into the application-side code and the server-side code alike.',
  'oss.githubCta': 'View open-source code on GitHub',
  'oss.everyLayerHeading': 'Every layer of Sentinel is open source',
  'oss.everyLayerSubhead': 'Nothing in the stack is closed — read, audit, and fork all of it.',
  'oss.sdksLabel': 'SDKs',
  'oss.sdksDesc': 'Client libraries in JavaScript, C#, Go & Swift',
  'oss.protocolLabel': 'Protocol',
  'oss.protocolDesc': 'WireGuard & V2Ray session layer',
  'oss.chainLabel': 'Chain',
  'oss.chainDesc': 'Sentinel Hub, built on the Cosmos SDK',
  'oss.nodeLabel': 'Node software',
  'oss.nodeDesc': 'The dVPN node anyone can run and inspect',
  'oss.buildLanguageHeading': 'Build in the language you already use',
  'oss.buildLanguageSubhead': 'Four official SDKs — every one of them open source.',
  'oss.sdkLanguagesStat': 'SDK languages',
  'oss.linesOfCodeStat': 'lines of open code',

  // ─── Steps section ───
  'steps.heading': 'Three steps from zero to a production dVPN.',
  'steps.step1Heading': 'Add nodes to your subscription plan.',
  'steps.step1Body':
    "Pay dVPN nodes and add them to your subscription plan. Filter by country, encryption protocol and more to find nodes that meet your application's capacity needs.",
  'steps.planManagerAlt': 'Adding nodes to a subscription plan in the Plan Manager',
  'steps.openPlanManager': 'Open Plan Manager',

  // ─── SDK / platforms section ───
  'sdk.buildPlatformHeading': 'Build a dVPN for Any Platform',
  'sdk.buildPlatformBody':
    'The Sentinel SDK runs on phones, desktops, browsers, TVs and servers. You build the app and own the brand. The network handles bandwidth, routing and payments.',
  'sdk.iosDesc': 'Ship an App Store client. The Network Extension tunnel is already built.',
  'sdk.androidDesc': 'Ship a Play Store app on VpnService. WireGuard and V2Ray included.',
  'sdk.macosDesc': 'Build a menu-bar app that tunnels all system traffic.',
  'sdk.windowsDesc': 'Build a desktop client for the OS most people use.',
  'sdk.linuxDesc': 'Run headless daemons on servers, routers and homelabs.',
  'sdk.webDesc': 'Build browser extensions and dashboards. Users install nothing.',
  'sdk.tvDesc': 'Build TV apps designed for the remote control.',
  'sdk.serverDesc': 'Route traffic from code. Bots, backends and AI agents.',
  'sdk.docsButton': 'SDK Docs',
  'sdk.githubButton': 'View on GitHub',

  // ─── Payments section ───
  'payments.heading': 'Integrate Any Payment Rails',
  'payments.subhead':
    'Accept fiat payments, crypto payments, or set any conditional trigger to authorize a user for free VPN services.',
  'payments.creditName': 'Credit / Debit Card',
  'payments.creditDesc':
    'Sell dVPN access with Visa, Mastercard, Amex and more — through any payment processor you choose.',
  'payments.walletName': 'Apple Pay / Google Pay',
  'payments.walletDesc':
    'Charge for your dVPN with one-tap Apple Pay or Google Pay checkout, on the web or in your app.',
  'payments.stripeName': 'Stripe',
  'payments.stripeDesc':
    'Bill your dVPN through Stripe Checkout or Billing — payment confirmed by webhook, access granted in the same flow.',
  'payments.cryptoName': 'Digital Currencies',
  'payments.cryptoDesc':
    'Accept BTC, SOL, ZEC or any other chain for dVPN access, via the processor of your choice.',
  'payments.freeName': 'Free VPN',
  'payments.freeDesc':
    'Grant free dVPN access on any condition you set — ads watched, offers completed, referrals made.',
  'payments.cta': 'Integrate Any Payment Rail into your dVPN',

  // ─── Node hosting section ───
  'nodeHosting.heading': 'Host a dVPN Node. Earn Bandwidth Rewards.',
  'nodeHosting.lead':
    'Run a Sentinel Node in minutes and join 1500+ operators across the world and provide your bandwidth to the future of decentralized privacy.',
  'nodeHosting.installTab': 'Install',
  'nodeHosting.cloudTab': 'Cloud',
  'nodeHosting.card1Title': 'Host a dVPN Node on Your Device',
  'nodeHosting.card1Body':
    'Run a Wireguard or V2Ray dVPN Node on your Windows, Mac, or Linux machine and start earning today!',
  'nodeHosting.card2Title': 'Host dVPN Nodes on the Cloud',
  'nodeHosting.card2Body':
    'SSH into any cloud server and deploy dVPN nodes in batches — spin up, monitor, and manage your entire fleet from one place.',
  'nodeHosting.ctaHeading': 'Host a dVPN Node Today!',
  'nodeHosting.liveTest': 'View Live Node Test',

  // ─── Agentic payments (x402) section ───
  'agentic.heading': 'The first decentralized VPN network for AI agents.',
  'agentic.lead':
    'Agents get privacy and bypass geo-restrictions on their own — no API keys, no accounts, no human. A full day of VPN costs $0.033, paid autonomously in USDC.',
  'agentic.payOnBase': 'Pay on Base',
  'agentic.soon': 'SOON',
  'agentic.launchBtn': 'Launch x402.sentinel.co',
  'agentic.step1Title': 'Request access',
  'agentic.step1Body': 'Your agent calls the connect endpoint — 1, 7 or 30 days.',
  'agentic.step2Title': 'Get the price',
  'agentic.step2Body': 'Sentinel replies with the cost: $0.033 for a full day.',
  'agentic.step3Title': 'Pay automatically',
  'agentic.step3Body': 'The agent signs the USDC payment itself. Settles in ~2 seconds.',
  'agentic.step4Title': 'Tunnel up',
  'agentic.step4Body': 'Encrypted WireGuard connection. No API keys, no accounts, no human.',
  'agentic.connectAgent': 'CONNECT YOUR AGENT',
  'agentic.claudeAgent': 'Claude Agent',
  'agentic.chatgptAgent': 'ChatGPT Agent',
  'agentic.geminiAgent': 'Gemini Agent',

  // ─── dVPN console ───
  'console.wireguardBadge': 'WIREGUARD · AES-256',
  'console.step01': '01 — EXIT LOCATION',
  'console.step02': '02 — PLATFORM',
  'console.step03': '03 — SELECT APP',
  'console.statusReady': '> ready to connect',
  'console.statusConnecting': '> establishing encrypted tunnel…',
  'console.connectBtn': 'Connect to dVPN',
  'console.connectingBtn': 'Connecting…',

  // ─── Sentinel dVPN apps section ───
  'sentinelDvpn.heading': 'Use open-source decentralized VPN apps you can trust.',
  'sentinelDvpn.lead':
    'Pick a location, your platform and an app — then connect. Every app here ships on the Sentinel network, so no single provider owns the bandwidth you route through.',
  'apps.norseDesc':
    'A full decentralized-VPN experience wrapped into user-friendly apps for every platform.',
  'apps.shieldDesc': 'Flagship open-source dVPN by Sentinel P2P — WireGuard & V2Ray.',
  'apps.rynDesc': 'A clean, minimalist privacy VPN trusted by 10M+ people.',
  'apps.independentDesc': 'Free decentralized VPN on Sentinel — WireGuard & V2Ray.',
  'apps.encryptsimDesc': 'Privacy-first global eSIM — no KYC, no logs, SOC2-grade encryption.',
  'apps.meileDesc': 'Sentinel-powered desktop dVPN for macOS, Linux & Windows.',
  'apps.valtDesc': 'Capture and protect the data you create every day.',

  // ─── Trust-compare (centralized vs Sentinel) section ───
  'centralized.heading': "You can't trust centralized VPNs.",
  'trustCompare.lead':
    'A centralized VPN only moves your trust from your ISP to a VPN company — a single point of control that now sees all of your traffic, not just some of it.',
  'trustCompare.centralizedHead': 'Centralized VPN',
  'trustCompare.sentinelHead': 'Sentinel dVPN',
  'trustCompare.centralizedSub': 'One entity controls every server, every key, every log.',
  'trustCompare.sentinelSub': 'No single entity exists that could compromise the network.',
  'trustCompare.bad1': 'All user traffic passes through company infrastructure.',
  'trustCompare.good1': 'Traffic routes directly to your chosen node — no relay layer.',
  'trustCompare.bad2': '"No-log" is a legal promise, not a technical guarantee.',
  'trustCompare.good2': 'No company exists that could log your traffic.',
  'trustCompare.bad3': 'Server software is proprietary and unauditable.',
  'trustCompare.good3': 'All code open source — node, client, protocol, SDK.',
  'trustCompare.bad4': 'Subject to subpoenas, gag orders, FISA, NSLs.',
  'trustCompare.good4': 'No single jurisdiction governs the network.',
  'trustCompare.bad5': 'Can be compelled to install logging silently.',
  'trustCompare.good5': 'On-chain session authorization — cryptographic, not corporate.',
  'trustCompare.bad6': 'Auto-update is a trusted code execution path.',
  'trustCompare.good6': 'Protocol governed by validators, not a board.',
  'trustCompare.bad7': 'Corporate acquisition can change policies overnight.',
  'trustCompare.good7': 'WireGuard / V2Ray end-to-end — keys never leave your device.',

  // ─── Network-compare (vs leading P2P networks) section ───
  'compare.heading': "How Sentinel's architecture compares to leading P2P networks.",
  'compare.lead':
    'Take away the founding organization. Block the bootstrap servers. What keeps running?',
  'compare.sentinelCallout':
    'Discovery is on-chain, entry points are permissionless, and the registry lives as long as anyone runs a validator. Block the team and the network is unaffected.',
  'compare.viewLiveRpc': 'VIEW LIVE RPC LIST',
  'compare.torSub': 'The Onion Router',
  'compare.torFail': 'Central directory',
  'compare.torCallout':
    "9 organizations control the network's directory. Compromise or block them and Tor falls.",
  'compare.otherTitle': 'Other on-chain P2P networks',
  'compare.otherSub': 'Cross-protocol comparison',
  'compare.otherFail': 'Company servers',
  'compare.otherCallout':
    'Discovery and coordination still depend on company-operated servers. Not truly decentralized at the networking layer.',
  'compare.ipfsSub': 'Decentralized storage',
  'compare.ipfsFail': 'Hardcoded peers',
  'compare.ipfsCallout':
    "Kubo ships with ~6 hardcoded Protocol Labs bootstrap peers; block them, and fresh nodes can't join the DHT.",
  'compare.btSub': 'File sharing protocol',
  'compare.btFail': 'Hardcoded hosts',
  'compare.btCallout':
    'Mainline DHT relies on ~5 hardcoded bootstrap hosts; existing clients can persist peers, but blocking those hosts prevents new users from joining.',
  'compare.i2pSub': 'Invisible Internet Project',
  'compare.i2pFail': 'Reseed servers',
  'compare.i2pCallout':
    'Hardcoded reseed URLs. Block ~8 domains and new users cannot bootstrap into the network.',
  'compare.failureMode': 'Failure mode',
  'compare.rowDiscovery': 'Discovery',
  'compare.rowBootstrap': 'Bootstrap',
  'compare.rowEntry': 'Entry points',
  'compare.rowSybil': 'Sybil resistance',
  'compare.rowState': 'State consistency',
  'compare.rowGovernance': 'Governance',
  'compare.rowIfOrg': 'If org disappears',
  'compare.rowVerdict': 'Verdict',
  'compare.rowRouting': 'Routing',
  'compare.rowCentralFail': 'Central failure',
  'compare.rowRegistry': 'Node registry',
  'compare.rowIfCompany': 'If company disappears',
  'compare.rowOpenSdk': 'Open client SDK',
  'compare.rowSeeds': 'Seeds',
  'compare.rowIfBlocked': 'If blocked',
  'compare.snDiscoveryVal': 'Cosmos-SDK blockchain',
  'compare.snBootstrapVal': 'None — any RPC endpoint',
  'compare.snEntryVal': '∞ permissionless',
  'compare.snSybilVal': 'On-chain registration TX',
  'compare.snStateVal': 'Finality · ~6s blocks',
  'compare.snGovVal': 'On-chain validator votes',
  'compare.snOrgVal': 'Validators continue',
  'compare.snVerdictVal': 'Nothing to block',
  'compare.torDiscoveryVal': '9 Directory Authorities',
  'compare.torRoutingVal': '3-hop circuit (slow)',
  'compare.torCentralFailVal': 'Directory Authorities',
  'compare.torOrgVal': 'Network degrades',
  'compare.otherDiscoveryVal': 'Centralized API servers',
  'compare.otherRegistryVal': 'Company-operated',
  'compare.otherOrgVal': 'Network dies',
  'compare.otherSdkVal': 'Proprietary or limited',
  'compare.ipfsBootstrapVal': '~6 hardcoded peers',
  'compare.ipfsSybilVal': 'Weak',
  'compare.btBootstrapVal': '~5 hardcoded hosts',
  'compare.btSybilVal': 'Weak (free to flood)',
  'compare.i2pDiscoveryVal': 'Hardcoded reseed URLs',
  'compare.i2pBootstrapVal': '~8 reseed servers',
  'compare.i2pBlockedVal': "New users can't join",
  'compare.closing':
    'Most networks rely on fixed entry points that censors can block. Sentinel uses permissionless RPC endpoints — anyone can run one, anywhere. As long as one endpoint is reachable, the network remains accessible.',

  // ─── Ecosystem grid section ───
  'ecosystem.heading':
    "Don't trust a centralized VPN, trust a decentralized VPN Built on Sentinel",
  'ecosystem.lead': 'dVPN Applications built on Sentinel are used by 1.4M+ users.',
  'ecosystem.downloadLabel': 'Download App:',
  'ecosystem.independentBody':
    'Free Decentralized VPN on Sentinel-WireGuard & V2Ray; Android & iOS.',
  'ecosystem.rynBody':
    'Sentinel-powered privacy VPN with a clean minimalist interface and a user base of over 10 million people.',
  'ecosystem.shieldBody':
    'Flagship open-source dVPN by Sentinel P2P, WireGuard & V2Ray; Android & iOS.',
  'ecosystem.norseBody':
    'Decentralized VPN experience wrapped into user-friendly apps for all platforms.',
  'ecosystem.valtBody':
    'VALT is the only app available that allows you to capture and protect the data you create everyday.',
  'ecosystem.meileBody': 'Sentinel-powered desktop dVPN for macOS, Linux & Windows.',
  'ecosystem.ctaTitle': 'Make your own dVPN',
  'ecosystem.ctaBody':
    'Use the Sentinel SDK to ship your own decentralized VPN — your brand, your protocol, your distribution.',
  'ecosystem.ctaStart': 'Start building →',
  'ecosystem.counterBefore': 'Apps built on Sentinel have been used by over',
  'ecosystem.counterAfter': 'people — and counting',

  // ─── Community section ───
  'community.heading': 'Join the Community',
  'community.subtitle': 'The Sentinel community goes beyond the chain.',
  'community.discordHandle': 'Sentinel Network',
  'community.more': 'More from the community',
  'community.growthDao': 'Growth DAO',
  'community.p2pNews': 'p2p News',

  // ─── Contact form ───
  'contact.heading': "Let's Build Together",
  'contact.subtitle':
    "Shipping a dVPN, integrating an SDK, or applying for a grant? Tell us what you're working on and we'll connect you with the right tools, partners, and people.",
  'contact.fieldName': 'Name',
  'contact.firstNamePlaceholder': 'First name',
  'contact.lastNamePlaceholder': 'Last name',
  'contact.fieldEmail': 'Email',
  'contact.emailPlaceholder': 'you@yourproject.com',
  'contact.fieldProject': 'Project',
  'contact.projectPlaceholder': 'What are you building? A dVPN app, node fleet, integration…',
  'contact.fieldMessage': 'Message',
  'contact.messagePlaceholder':
    'Where are you today — idea, prototype, or live product — and where could you use a hand?',
  'contact.privacyAgree': 'I agree to the',
  'contact.privacyLink': 'privacy policy',
  'contact.submit': 'Send Message',

  // ─── Footer columns ───
  'footer.exploreStats': 'Network Statistics',
  'footer.exploreDashboard': 'Node Explorer',
  'footer.exploreNodeMap': 'Node Map',
  'footer.exploreExplorer': 'Explorer',
  'footer.dvpnShield': 'Sentinel Shield',
  'footer.dvpnIndependent': 'Independent VPN',
  'footer.dvpnNorse': 'DVPN by NORSE',
  'footer.dvpnValt': 'VALT',
  'footer.dvpnRyn': 'Ryn dVPN',
  'footer.dvpnMeile': 'Meile dVPN (beta)',
  'footer.buildPlanManager': 'Plan Manager',
  'footer.buildSdks': 'SDKs',
  'footer.buildPayments': 'Configure Payment',
  'footer.buildRunNode': 'Run a Node',
  'footer.buildEarn': 'Earn from dVPN',
  'footer.buildLearn': 'Learn',
  'footer.moreDocs': 'dVPN Docs',
  'footer.moreX402': 'x402 Payments',
  'footer.moreNodeTester': 'Sentinel Node Tester',
  'footer.moreContact': 'Contact Us',
  'footer.copyright': 'Sentinel © 2026',
  'footer.privacyPolicy': 'Privacy Policy',
} as const;

export type StringKey = keyof typeof en;
export type Messages = Record<StringKey, string>;
