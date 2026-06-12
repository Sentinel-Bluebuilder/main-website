// @ts-nocheck
/* eslint-disable */
// Ported verbatim from the original browser bundle. See tools/port-to-tsx.js.
import '../lib/globals';
import './sections-1';

/* ============================================================
   Sentinel · Architecture components
   NodeHosting · AgenticPayments · SentinelDVPN · CentralizedVPN
   BlockchainDHT · Compare · EcosystemSection
   ============================================================ */
const T2 = window.SENTINEL;
const L2 = window.SENTINEL_LINKS;
const { atomStyles: A, ChipDark, ChipLight, BtnPrimary, BtnGhost, CodeWindow } = window;
const { useState: useS2, useEffect: useE2, useRef: useR2 } = React;
const useIsMobile = window.useIsMobile;

/* i18n: translate at render time (window.T is reassigned per request/locale). */
const tr = (k, f) => (typeof window !== 'undefined' && window.T ? window.T(k, f) : (f != null ? f : k));

/* OS targets for the node-hosting CTA buttons */
const NH_OS = [
  { label:'Windows', icon:'windows', href:L2.nodeDeployer },
  { label:'macOS',   icon:'apple',   href:L2.nodeDeployer },
  { label:'Linux',   icon:'tux',     href:L2.hostNode },
];

/* Live node test link — Sentinel-blue side card in the site's branding
   (white Sentinel-mark tile + header-font label, no LIVE chip —
   identical formatting to the Ecosystem "View Network Stats" card) */
function LiveNodeTestLink({ fullWidth }) {
  return (
    <a href={L2.testNode} target="_blank" rel="noopener" className="sn-livetest"
       data-mark="sn-live-clean" style={{ display:'flex', alignItems:'center', gap:12, height:60, padding:'0 20px 0 11px', width: fullWidth ? '100%' : 'auto', boxSizing:'border-box', textDecoration:'none', background:'linear-gradient(135deg, rgba(1,86,252,0.14) 0%, rgba(1,86,252,0.04) 100%)', border:'1px solid rgba(94,148,255,0.26)', borderRadius:14 }}>
      <style>{`
        .sn-livetest { transition:transform 200ms cubic-bezier(.22,.61,.36,1), border-color 220ms, background 220ms; }
        .sn-livetest:hover { transform:translateY(-2px); border-color:rgba(94,148,255,0.55); }
        .sn-livetest-label { transition:color 200ms cubic-bezier(.22,.61,.36,1); }
        .sn-livetest:hover .sn-livetest-label { color:#fff; }
        .sn-livetest-arrow { display:inline-block; transition:transform 200ms cubic-bezier(.22,.61,.36,1); }
        .sn-livetest:hover .sn-livetest-arrow { transform:translateX(3px); }
      `}</style>
      <span style={{ width:40, height:40, borderRadius:12, flexShrink:0, background:T2.white, border:'1px solid rgba(255,255,255,0.45)', display:'inline-flex', alignItems:'center', justifyContent:'center' }}>
        <window.SentinelMark size={22} color="#0156FC" />
      </span>
      <span className="sn-livetest-label" style={{ flex:1, fontFamily:T2.fontHeading, fontWeight:600, fontSize:15, lineHeight:1, color:T2.fog, whiteSpace:'nowrap', minWidth:0 }}>{tr('nodeHosting.liveTest', 'View Live Node Test')}</span>
      <span className="sn-livetest-arrow" aria-hidden="true" style={{ fontSize:15, fontWeight:600, color:'#2670FF', flexShrink:0 }}>↗</span>
    </a>
  );
}

/* ── Node Hosting ─────────────────────────────────────────── */
function NodeHostingSection() {
  const cards = [
    { tab:tr('nodeHosting.installTab','Install'),   title:tr('nodeHosting.card1Title','Host a dVPN Node on Your Device'),
      body:tr('nodeHosting.card1Body','Run a Wireguard or V2Ray dVPN Node on your Windows, Mac, or Linux machine and start earning today!'),
      img:window.__resources.screenNode1 },
    { tab:tr('nodeHosting.cloudTab','Cloud'), title:tr('nodeHosting.card2Title','Host dVPN Nodes on the Cloud'),
      body:tr('nodeHosting.card2Body','SSH into any cloud server and deploy dVPN nodes in batches — spin up, monitor, and manage your entire fleet from one place.'),
      img:window.__resources.screenNode2 },
  ];

  const rootRef = useR2(null);
  const [active, setActive] = useS2(0);
  const isMobile = useIsMobile();

  useE2(() => {
    const gsap = window.gsap, ScrollTrigger = window.ScrollTrigger;
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!gsap || !ScrollTrigger || reduce || isMobile || !rootRef.current) return;
    gsap.registerPlugin(ScrollTrigger);

    const root = rootRef.current;
    const ctx = gsap.context(() => {
      root.classList.add('sn-nh-live');
      const els = gsap.utils.toArray('.sn-nh-card', root);
      const n = els.length;

      // Initial: first card resting, the rest parked off to the right.
      els.forEach((card, i) => {
        gsap.set(card, {
          transformOrigin: 'center center',
          zIndex: i,
          x: i === 0 ? 0 : () => window.innerWidth * 0.9,
          autoAlpha: i === 0 ? 1 : 0,
        });
      });

      const pinEl = root.querySelector('.sn-nh-pin');
      const tl = gsap.timeline({
        defaults: { ease: 'power3.out' },
        scrollTrigger: {
          trigger: pinEl,
          start: 'top top',
          end: () => '+=' + window.innerHeight * Math.max(0.8, n - 2.2),
          pin: pinEl,
          pinSpacing: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: self => {
            const idx = Math.min(n - 1, Math.floor(self.progress * n + 0.0001));
            setActive(idx);
          },
        },
      });

      // Each card slides in from the right and fully covers the one before (no offset).
      els.forEach((card, i) => {
        if (i === 0) return;
        tl.to(card, { x: 0, autoAlpha: 1, duration: 1 }, (i - 1) + (i - 1) * 0.25);
      });

      requestAnimationFrame(() => ScrollTrigger.refresh());
    }, root);

    return () => { ctx.revert(); root.classList.remove('sn-nh-live'); };
  }, [isMobile]);

  return (
    <section ref={rootRef} id="host-dvpn" style={{ background:'radial-gradient(1100px 540px at 12% -2%, rgba(1,86,252,0.14), transparent 62%), radial-gradient(900px 600px at 92% 34%, rgba(38,112,255,0.08), transparent 60%), radial-gradient(1300px 520px at 50% 104%, rgba(38,112,255,0.09), transparent 65%), #0b0c10', scrollMarginTop:90 }}>
      {/* Pinned block — header + stage + dots + CTA pin together, centered in the viewport,
          so the heading stays visible while the cards animate */}
      <div className="sn-nh-pin">
        <div style={{ ...A.container, display:'flex', flexDirection:'column', gap:isMobile?28:'clamp(12px,1.8vh,20px)', paddingTop:isMobile?0:'clamp(10px,1.4vh,16px)', paddingBottom:isMobile?0:'clamp(10px,1.4vh,16px)', height:'100%', boxSizing:'border-box', justifyContent:'center' }}>
          <div style={{ ...A.sectionHead, gap:10 }}>
            <h2 style={{ ...A.h1Dark }}>{tr('nodeHosting.heading', 'Host a dVPN Node. Earn Bandwidth Rewards.')}</h2>
            <p style={{ ...A.leadDark, maxWidth:772 }}>{tr('nodeHosting.lead', 'Run a Sentinel Node in minutes and join 1500+ operators across the world and provide your bandwidth to the future of decentralized privacy.')}</p>
          </div>
          {/* Card stack */}
          <div style={{ width:'100%', display:'flex', flexDirection:'column', gap:14 }}>
            {/* Stage */}
            <div className="sn-nh-stage">
              {cards.map(c => (
                <div key={c.tab} className="sn-nh-card">
                  <div className="sn-nh-imgwrap" style={{ overflow:'hidden', background:'rgb(21,21,21)' }}>
                    <img src={c.img} alt={c.title} style={{ width:'100%', height:'100%', display:'block', objectFit:'cover', objectPosition:'center top' }} />
                  </div>
                  <div style={{ padding:isMobile?'clamp(16px,5vw,24px)':'28px 40px', display:'flex', flexDirection:'column', justifyContent:'center', gap:8 }}>
                    <h3 style={{ fontFamily:T2.fontHeading, fontWeight:500, fontSize:'clamp(20px,4.5vw,27px)', color:'rgb(234,234,234)', margin:0, lineHeight:1.2, letterSpacing:'-0.005em' }}>{c.title}</h3>
                    <p style={{ fontFamily:T2.fontBody, fontSize:'clamp(15px,1.8vw,16px)', lineHeight:1.55, color:'rgba(234,234,234,0.6)', margin:0 }}>{c.body}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Dots — live progress (desktop pin only; mobile stacks statically) */}
            {!isMobile && <div style={{ display:'flex', justifyContent:'center', gap:8, marginTop:0 }}>
              {cards.map((_, i) => (
                <span key={i} aria-hidden="true"
                  style={{ width: i === active ? 24 : 8, height:8, borderRadius:9999, background: i === active ? '#2670ff' : 'rgba(255,255,255,0.18)', transition:'width 240ms, background 240ms' }} />
              ))}
            </div>}
          </div>

          {/* Closing CTA — roomier placement (user request 2026-06-11): vh-fluid top margin
              separates it from the card stack, wider heading-to-chips gap, airier chip row */}
          <div style={{ position:'relative', display:'flex', flexDirection:'column', alignItems:'center', gap:isMobile?24:'clamp(18px,2.8vh,28px)', marginTop:isMobile?44:'clamp(10px,2.2vh,26px)', paddingBottom:isMobile?0:'clamp(4px,1vh,12px)' }}>
            <h3 style={{ fontFamily:T2.fontHeading, fontWeight:500, fontSize:'clamp(23px,3vw,30px)', color:'rgb(234,234,234)', margin:0, lineHeight:1.2, letterSpacing:'-0.005em' }}>{tr('nodeHosting.ctaHeading', 'Host a dVPN Node Today!')}</h3>
            <div style={{ position:'relative', width:'100%', display:'flex', justifyContent:'center', alignItems:'center', flexWrap:'wrap', gap:'clamp(14px,2vw,20px)' }}>
              <style>{'.sn-btn-primary:hover .sn-plat-flip * { fill:#fff; }'}</style>
              {NH_OS.map(o => (
                <BtnPrimary key={o.label} href={o.href} style={{ gap:12, height:isMobile?52:60, padding:isMobile?'0 22px':'0 38px', fontSize:isMobile?15.5:18 }}>
                  <DvpnPlatIcon kind={o.icon} size={20} brand />{o.label}
                </BtnPrimary>
              ))}
              {!isMobile && (
                <div style={{ position:'absolute', right:0, top:'50%', transform:'translateY(-50%)' }}>
                  <LiveNodeTestLink />
                </div>
              )}
            </div>
            {isMobile && <LiveNodeTestLink fullWidth />}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Agentic Payments — x402 matrix theme (x402.sentinel.co) ── */
const AGENT_MARKS = {
  claude: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="#D97757" aria-hidden="true"><path d="M4.709 15.955l4.72-2.647.08-.23-.08-.128H9.2l-.79-.048-2.698-.073-2.339-.097-2.266-.122-.571-.121L0 11.784l.055-.352.48-.321.686.06 1.52.103 2.278.158 1.652.097 2.449.255h.389l.055-.157-.134-.098-.103-.097-2.358-1.596-2.552-1.688-1.336-.972-.724-.491-.364-.462-.158-1.008.656-.722.881.06.225.061.893.686 1.908 1.476 2.491 1.833.365.304.145-.103.019-.073-.164-.274-1.355-2.446-1.446-2.49-.644-1.032-.17-.619a2.97 2.97 0 01-.104-.729L6.283.134 6.696 0l.996.134.42.364.62 1.414 1.002 2.229 1.555 3.03.456.898.243.832.091.255h.158V9.01l.128-1.706.237-2.095.23-2.695.08-.76.376-.91.747-.492.583.28.48.685-.067.444-.286 1.851-.559 2.903-.364 1.942h.212l.243-.242.985-1.306 1.652-2.064.73-.82.85-.904.547-.431h1.033l.76 1.129-.34 1.166-1.064 1.347-.881 1.142-1.264 1.7-.79 1.36.073.11.188-.02 2.856-.606 1.543-.28 1.841-.315.833.388.091.395-.328.807-1.969.486-2.309.462-3.439.813-.042.03.049.061 1.549.146.662.036h1.622l3.02.225.79.522.474.638-.079.485-1.215.62-1.64-.389-3.829-.91-1.312-.329h-.182v.11l1.093 1.068 2.006 1.81 2.509 2.33.127.578-.322.455-.34-.049-2.205-1.657-.851-.747-1.926-1.62h-.128v.17l.444.65 2.345 3.52.122 1.08-.17.353-.608.213-.668-.122-1.374-1.925-1.415-2.167-1.143-1.943-.14.08-.674 7.254-.316.37-.729.28-.607-.461-.322-.747.322-1.476.389-1.924.315-1.53.286-1.9.17-.632-.012-.042-.14.018-1.434 1.967-2.18 2.945-1.726 1.845-.414.164-.717-.37.067-.662.401-.589 2.388-3.036 1.44-1.882.93-1.086-.006-.158h-.055L4.132 18.56l-1.13.146-.487-.456.061-.746.231-.243 1.908-1.312-.006.006z"/></svg>
  ),
  chatgpt: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="#eaf1ff" aria-hidden="true"><path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.073zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.8956zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997z"/></svg>
  ),
  gemini: (
    <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true"><defs><linearGradient id="agGemGrad" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#4285F4"/><stop offset="100%" stopColor="#9B72CB"/></linearGradient></defs><path fill="url(#agGemGrad)" d="M12 24A14.304 14.304 0 0 0 0 12 14.304 14.304 0 0 0 12 0a14.305 14.305 0 0 0 12 12 14.305 14.305 0 0 0-12 12"/></svg>
  ),
};

// Digital rain — ported from x402.sentinel.co's #rain canvas, scoped to the
// section instead of the viewport. Honors prefers-reduced-motion, ~30fps cap.
function MatrixRain({ opacity = 0.22 }) {
  const ref = useR2(null);
  useE2(() => {
    const canvas = ref.current;
    if (!canvas) return;
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const ctx = canvas.getContext('2d');
    const GLYPHS = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモ0123456789ABCDEF<>/=$+';
    const FS = 16;
    const parent = canvas.parentElement;
    let drops = [], w = 0, h = 0, raf = 0, last = 0;
    const dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
    const resize = () => {
      w = parent.offsetWidth; h = parent.offsetHeight;
      canvas.width = w * dpr; canvas.height = h * dpr;
      canvas.style.width = w + 'px'; canvas.style.height = h + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      drops = new Array(Math.ceil(w / FS)).fill(0).map(() => Math.random() * -50);
    };
    const draw = () => {
      ctx.fillStyle = 'rgba(2,8,20,0.085)';
      ctx.fillRect(0, 0, w, h);
      ctx.font = FS + 'px JetBrains Mono, monospace';
      ctx.textBaseline = 'top';
      for (let i = 0; i < drops.length; i++) {
        const y = drops[i] * FS;
        ctx.fillStyle = Math.random() < 0.04 ? '#eaf1ff' : '#2670ff';
        ctx.fillText(GLYPHS.charAt((Math.random() * GLYPHS.length) | 0), i * FS, y);
        if (y > h && Math.random() > 0.975) drops[i] = 0;
        drops[i] += 0.55 + Math.random() * 0.5;
      }
    };
    const loop = ts => { if (ts - last >= 33) { draw(); last = ts; } raf = requestAnimationFrame(loop); };
    resize();
    window.addEventListener('resize', resize, { passive: true });
    raf = requestAnimationFrame(loop);
    const onVis = () => {
      if (document.hidden) { cancelAnimationFrame(raf); raf = 0; }
      else if (!raf) { raf = requestAnimationFrame(loop); }
    };
    document.addEventListener('visibilitychange', onVis);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      document.removeEventListener('visibilitychange', onVis);
    };
  }, []);
  return <canvas ref={ref} aria-hidden="true" style={{ position:'absolute', inset:0, pointerEvents:'none', opacity, maskImage:'linear-gradient(180deg, transparent 0%, black 14%, black 82%, transparent 100%)', WebkitMaskImage:'linear-gradient(180deg, transparent 0%, black 14%, black 82%, transparent 100%)' }} />;
}

function AgenticPaymentsSection() {
  const isMobile = useIsMobile();
  // x402 theme recolored to the Sentinel blue family on near-black.
  const X = {
    bg: '#020814', card: 'rgba(10,16,28,0.62)',
    border: 'rgba(38,112,255,0.16)', borderBright: 'rgba(94,148,255,0.38)',
    text: '#cfdcff', bright: '#eaf1ff', muted: '#8fb0ec', dim: '#4a6396',
    accent: '#5e94ff',
  };
  const glow = 'radial-gradient(ellipse at 50% -10%, rgba(38,112,255,0.10), transparent 60%), radial-gradient(ellipse at 50% 110%, rgba(1,86,252,0.07), transparent 60%)';

  const steps = [
    [tr('agentic.step1Title','Request access'),    tr('agentic.step1Body','Your agent calls the connect endpoint — 1, 7 or 30 days.')],
    [tr('agentic.step2Title','Get the price'),     tr('agentic.step2Body','Sentinel replies with the cost: $0.033 for a full day.')],
    [tr('agentic.step3Title','Pay automatically'), tr('agentic.step3Body','The agent signs the USDC payment itself. Settles in ~2 seconds.')],
    [tr('agentic.step4Title','Tunnel up'),         tr('agentic.step4Body','Encrypted WireGuard connection. No API keys, no accounts, no human.')],
  ];

  const agents = [
    { key:'claude',  label:tr('agentic.claudeAgent','Claude Agent')  },
    { key:'chatgpt', label:tr('agentic.chatgptAgent','ChatGPT Agent') },
    { key:'gemini',  label:tr('agentic.geminiAgent','Gemini Agent')  },
  ];

  return (
    <section style={{ ...A.section, position:'relative', overflow:'hidden', background:`${glow}, linear-gradient(180deg, #0b0c10 0%, #020814 16%, #020814 84%, #040a18 100%)` }}>
      <MatrixRain />
      <div style={{ ...A.container, position:'relative', zIndex:1, display:'flex', flexDirection:'column', gap:isMobile?44:'clamp(32px,4vw,44px)' }}>
        <div style={{ display:'grid', gridTemplateColumns:isMobile?'1fr':'1fr 1fr', gap:isMobile?36:56, alignItems:'center' }}>
          <div style={{ display:'flex', flexDirection:'column', gap:20 }}>
            <h2 style={{ ...A.h1Dark, maxWidth:540, color:X.bright }}>{tr('agentic.heading','The first decentralized VPN network for AI agents.')}</h2>
            <p style={{ ...A.leadDark, maxWidth:540, color:X.muted }}>{tr('agentic.lead','Agents get privacy and bypass geo-restrictions on their own — no API keys, no accounts, no human. A full day of VPN costs $0.033, paid autonomously in USDC.')}</p>
            <div style={isMobile?{ display:'grid', gridTemplateColumns:'repeat(2, minmax(0,1fr))', gap:10 }:{ display:'flex', gap:12, flexWrap:'wrap' }}>
              <span style={{ display:'inline-flex', alignItems:'center', justifyContent:isMobile?'center':'flex-start', gap:10, padding:isMobile?'11px 12px':'10px 18px', borderRadius:12, background:'rgba(8,16,30,0.72)', border:`1px solid ${X.borderBright}`, boxShadow:'0 0 18px -6px rgba(38,112,255,0.45)', backdropFilter:'blur(6px)' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><path fill="#0052FF" d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.66565 0 0.475508 4.91843 0.0244141 11.1582H15.8643V12.8418H0.0244141C0.475508 19.0816 5.66565 24 12 24Z"/></svg>
                <span style={{ fontFamily:T2.fontMono, fontSize:12.5, fontWeight:700, color:X.bright }}>{tr('agentic.payOnBase','Pay on Base')}</span>
              </span>
              <span style={{ display:'inline-flex', alignItems:'center', justifyContent:isMobile?'center':'flex-start', gap:10, padding:isMobile?'11px 12px':'10px 18px', borderRadius:12, background:'rgba(8,16,30,0.5)', border:`1px solid ${X.border}`, backdropFilter:'blur(6px)' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" style={{ opacity:0.9 }}><defs><linearGradient id="agSolGrad" x1="0" y1="1" x2="1" y2="0"><stop offset="0%" stopColor="#9945FF"/><stop offset="100%" stopColor="#14F195"/></linearGradient></defs><path fill="url(#agSolGrad)" d="M4.6 16.82c.14-.14.34-.23.54-.23h15.4c.34 0 .51.41.27.65l-3.21 3.22c-.14.14-.34.23-.54.23H1.66c-.34 0-.51-.41-.27-.65l3.21-3.22zM4.6 3.54c.14-.14.34-.23.54-.23h15.4c.34 0 .51.41.27.65L17.6 7.18c-.14.14-.34.23-.54.23H1.66c-.34 0-.51-.41-.27-.65L4.6 3.54zM17.6 10.13c-.14-.14-.34-.23-.54-.23H1.66c-.34 0-.51.41-.27.65l3.21 3.22c.14.14.34.23.54.23h15.4c.34 0 .51-.41.27-.65l-3.21-3.22z"/></svg>
                <span style={{ fontFamily:T2.fontMono, fontSize:12.5, color:X.muted }}>Solana</span>
                <span style={{ fontFamily:T2.fontMono, fontSize:9.5, fontWeight:700, letterSpacing:'0.08em', color:'#ffb547', border:'1px solid rgba(255,181,71,0.35)', borderRadius:6, padding:'2px 7px' }}>{tr('agentic.soon','SOON')}</span>
              </span>
            </div>
            <div style={{ display:'flex', flexWrap:'wrap', gap:14, marginTop:6 }}>
              <BtnPrimary href={L2.x402} style={isMobile?{ width:'100%', boxSizing:'border-box' }:undefined}>{tr('agentic.launchBtn','Launch x402.sentinel.co')}</BtnPrimary>
            </div>
          </div>

          <div style={{ background:X.card, border:`1px solid ${X.border}`, borderRadius:16, padding:isMobile?'6px 20px':'8px 24px', backdropFilter:'blur(6px)', boxShadow:'0 0 0 1px rgba(38,112,255,0.08), 0 24px 60px -30px rgba(0,0,0,0.9)' }}>
            {steps.map(([title, body], i) => (
              <div key={title} style={{ display:'flex', gap:isMobile?14:16, alignItems:'flex-start', padding:isMobile?'17px 0':'15px 0', borderTop:i === 0 ? 'none' : `1px solid ${X.border}` }}>
                <span style={{ flexShrink:0, width:28, height:28, borderRadius:9, border:`1px solid ${X.borderBright}`, background:'rgba(38,112,255,0.10)', display:'inline-flex', alignItems:'center', justifyContent:'center', fontFamily:T2.fontMono, fontSize:12, fontWeight:700, color:X.accent }}>{i + 1}</span>
                <div>
                  <h3 style={{ fontFamily:T2.fontHeading, fontWeight:500, fontSize:16, color:X.bright, margin:'2px 0 3px', lineHeight:1.3 }}>{title}</h3>
                  <p style={{ fontFamily:T2.fontBody, fontSize:13.5, lineHeight:'20px', color:X.muted, margin:0 }}>{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:16 }}>
          <span style={{ fontFamily:T2.fontMono, fontSize:11, letterSpacing:'0.1em', fontWeight:700, color:X.dim }}>{tr('agentic.connectAgent','CONNECT YOUR AGENT')}</span>
          <div style={isMobile?{ display:'grid', gridTemplateColumns:'1fr', gap:10, width:'100%', maxWidth:300 }:{ display:'flex', flexWrap:'wrap', justifyContent:'center', gap:14 }}>
            {agents.map(a => (
              <div key={a.key} style={{ display:'flex', alignItems:'center', justifyContent:isMobile?'center':'flex-start', gap:12, padding:isMobile?'13px 22px':'12px 22px', borderRadius:14, background:X.card, border:`1px solid ${X.border}`, backdropFilter:'blur(6px)' }}>
                {AGENT_MARKS[a.key]}
                <span style={{ fontFamily:T2.fontMono, fontSize:13.5, color:X.text }}>{a.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Sentinel dVPN — consumer apps list ──────────────────── */
const DVPN_PLAT_GLYPHS = {
  apple: <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 14.25 3.51 5.88 9.05 5.6c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.59zM12.03 5.5C11.88 3.24 13.71 1.4 15.8 1.22c.29 2.58-2.34 4.5-3.77 4.28z" />,
  tux: <path d="M12.504 0c-.155 0-.315.008-.48.021-4.226.333-3.105 4.807-3.17 6.298-.076 1.092-.3 1.953-1.05 3.02-.885 1.051-2.127 2.75-2.716 4.521-.278.832-.41 1.684-.287 2.489a.424.424 0 00-.11.135c-.26.268-.45.6-.663.839-.199.199-.485.267-.797.4-.313.136-.658.269-.864.68-.09.189-.136.394-.132.602 0 .199.027.4.055.536.058.399.116.728.04.97-.249.68-.28 1.145-.106 1.484.174.334.535.47.94.601.81.2 1.91.135 2.774.6.926.466 1.866.67 2.616.47.526-.116.97-.464 1.208-.946.587-.003 1.23-.269 2.26-.334.699-.058 1.574.267 2.577.2.025.134.063.198.114.333l.003.003c.391.778 1.113 1.132 1.884 1.071.771-.06 1.592-.536 2.257-1.306.631-.765 1.683-1.084 2.378-1.503.348-.199.629-.469.649-.853.023-.4-.2-.811-.714-1.376v-.097l-.003-.003c-.17-.2-.25-.535-.338-.926-.085-.401-.182-.786-.492-1.046h-.003c-.059-.054-.123-.067-.188-.135a.357.357 0 00-.19-.064c.431-1.278.264-2.55-.173-3.694-.533-1.41-1.465-2.638-2.175-3.483-.796-1.005-1.576-1.957-1.56-3.368.026-2.152.236-6.133-3.544-6.139zm.529 3.405h.013c.213 0 .396.062.584.198.19.135.33.332.438.533.105.259.158.459.166.724 0-.02.006-.04.006-.06v.105a.086.086 0 01-.004-.021l-.004-.024a1.807 1.807 0 01-.15.706.953.953 0 01-.213.335.71.71 0 00-.088-.042c-.104-.045-.198-.064-.284-.133a1.312 1.312 0 00-.22-.066c.05-.06.146-.133.183-.198.053-.128.082-.264.088-.402v-.02a1.21 1.21 0 00-.061-.4c-.045-.134-.101-.2-.183-.333-.084-.066-.167-.132-.267-.132h-.016c-.093 0-.176.03-.262.132a.8.8 0 00-.205.334 1.18 1.18 0 00-.09.4v.019c.002.089.008.179.02.267-.193-.067-.438-.135-.607-.202a1.635 1.635 0 01-.018-.2v-.02a1.772 1.772 0 01.15-.768c.082-.22.232-.406.43-.533a.985.985 0 01.594-.2zm-2.962.059h.036c.142 0 .27.048.399.135.146.129.264.288.344.465.09.199.14.4.153.667v.004c.007.134.006.2-.002.266v.08c-.03.007-.056.018-.083.024-.152.055-.274.135-.393.2.012-.09.013-.18.003-.267v-.015c-.012-.133-.04-.2-.082-.333a.613.613 0 00-.166-.267.248.248 0 00-.183-.064h-.021c-.071.006-.13.04-.186.132a.552.552 0 00-.12.27.944.944 0 00-.023.33v.015c.012.135.037.2.08.334.046.134.098.2.166.268.01.009.02.018.034.024-.07.057-.117.07-.176.136a.304.304 0 01-.131.068 2.62 2.62 0 01-.275-.402 1.772 1.772 0 01-.155-.667 1.759 1.759 0 01.08-.668 1.43 1.43 0 01.283-.535c.128-.133.26-.2.418-.2zm1.37 1.706c.332 0 .733.065 1.216.399.293.2.523.269 1.052.468h.003c.255.136.405.266.478.399v-.131a.571.571 0 01.016.47c-.123.31-.516.643-1.063.842v.002c-.268.135-.501.333-.775.465-.276.135-.588.292-1.012.267a1.139 1.139 0 01-.448-.067 3.566 3.566 0 01-.322-.198c-.195-.135-.363-.332-.612-.465v-.005h-.005c-.4-.246-.616-.512-.686-.71-.07-.268-.005-.47.193-.6.224-.135.38-.271.483-.336.104-.074.143-.102.176-.131h.002v-.003c.169-.202.436-.47.839-.601.139-.036.294-.065.466-.065zm2.8 2.142c.358 1.417 1.196 3.475 1.735 4.473.286.534.855 1.659 1.102 3.024.156-.005.33.018.513.064.646-1.671-.546-3.467-1.089-3.966-.22-.2-.232-.335-.123-.335.59.534 1.365 1.572 1.646 2.757.13.535.16 1.104.021 1.67.067.028.135.06.205.067 1.032.534 1.413.938 1.23 1.537v-.043c-.06-.003-.12 0-.18 0h-.016c.151-.467-.182-.825-1.065-1.224-.915-.4-1.646-.336-1.77.465-.008.043-.013.066-.018.135-.068.023-.139.053-.209.064-.43.268-.662.669-.793 1.187-.13.533-.17 1.156-.205 1.869v.003c-.02.334-.17.838-.319 1.35-1.5 1.072-3.58 1.538-5.348.334a2.645 2.645 0 00-.402-.533 1.45 1.45 0 00-.275-.333c.182 0 .338-.03.465-.067a.615.615 0 00.314-.334c.108-.267 0-.697-.345-1.163-.345-.467-.931-.995-1.788-1.521-.63-.4-.986-.87-1.15-1.396-.165-.534-.143-1.085-.015-1.645.245-1.07.873-2.11 1.274-2.763.107-.065.037.135-.408.974-.396.751-1.14 2.497-.122 3.854a8.123 8.123 0 01.647-2.876c.564-1.278 1.743-3.504 1.836-5.268.048.036.217.135.289.202.218.133.38.333.59.465.21.201.477.335.876.335.039.003.075.006.11.006.412 0 .73-.134.997-.268.29-.134.52-.334.74-.4h.005c.467-.135.835-.402 1.044-.7zm2.185 8.958c.037.6.343 1.245.882 1.377.588.134 1.434-.333 1.791-.765l.211-.01c.315-.007.577.01.847.268l.003.003c.208.199.305.53.391.876.085.4.154.78.409 1.066.486.527.645.906.636 1.14l.003-.007v.018l-.003-.012c-.015.262-.185.396-.498.595-.63.401-1.746.712-2.457 1.57-.618.737-1.37 1.14-2.036 1.191-.664.053-1.237-.2-1.574-.898l-.005-.003c-.21-.4-.12-1.025.056-1.69.176-.668.428-1.344.463-1.897.037-.714.076-1.335.195-1.814.12-.465.308-.797.641-.984l.045-.022zm-10.814.049h.01c.053 0 .105.005.157.014.376.055.706.333 1.023.752l.91 1.664.003.003c.243.533.754 1.064 1.189 1.637.434.598.77 1.131.729 1.57v.006c-.057.744-.48 1.148-1.125 1.294-.645.135-1.52.002-2.395-.464-.968-.536-2.118-.469-2.857-.602-.369-.066-.61-.2-.723-.4-.11-.2-.113-.602.123-1.23v-.004l.002-.003c.117-.334.03-.752-.027-1.118-.055-.401-.083-.71.043-.94.16-.334.396-.4.69-.533.294-.135.64-.202.915-.47h.002v-.002c.256-.268.445-.601.668-.838.19-.201.38-.336.663-.336zm7.159-9.074c-.435.201-.945.535-1.488.535-.542 0-.97-.267-1.28-.466-.154-.134-.28-.268-.373-.335-.164-.134-.144-.333-.074-.333.109.016.129.134.199.2.096.066.215.2.36.333.292.2.68.467 1.167.467.485 0 1.053-.267 1.398-.466.195-.135.445-.334.648-.467.156-.136.149-.267.279-.267.128.016.034.134-.147.332a8.097 8.097 0 01-.69.468zm-1.082-1.583V5.64c-.006-.02.013-.042.029-.05.074-.043.18-.027.26.004.063 0 .16.067.15.135-.006.049-.085.066-.135.066-.055 0-.092-.043-.141-.068-.052-.018-.146-.008-.163-.065zm-.551 0c-.02.058-.113.049-.166.066-.047.025-.086.068-.14.068-.05 0-.13-.02-.136-.068-.01-.066.088-.133.15-.133.08-.031.184-.047.259-.005.019.009.036.03.03.05v.02h.003z" />,
};
function DvpnPlatIcon({ kind, size = 14, brand }) {
  const stroke = { fill:'none', stroke:'currentColor', strokeWidth:2, strokeLinecap:'round', strokeLinejoin:'round' };
  /* brand mode: official platform colors (CTA buttons on light bg);
     sn-plat-flip icons turn white on .sn-btn-primary hover (blue bg) */
  if (brand && kind === 'windows')
    return <svg width={size} height={size} viewBox="0 0 24 24" className="sn-plat-flip" aria-hidden="true"><path fill="#0078D4" d="M0 3.45L9.75 2.1v9.45H0m10.95-9.6L24 0v11.4H10.95M0 12.6h9.75v9.45L0 20.7M10.95 12.6H24V24l-12.9-1.8"/></svg>;
  if (brand && kind === 'apple')
    return <svg width={size} height={size} viewBox="0 0 24 24" className="sn-plat-flip" aria-hidden="true"><g fill="#0B0B0C">{DVPN_PLAT_GLYPHS.apple}</g></svg>;
  if (brand && kind === 'tux')
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
        <ellipse cx="7.4" cy="21.2" rx="3.3" ry="2" fill="#F6BF1E" transform="rotate(-14 7.4 21.2)" />
        <ellipse cx="16.6" cy="21.2" rx="3.3" ry="2" fill="#F6BF1E" transform="rotate(14 16.6 21.2)" />
        <path fill="#0A0A0A" d="M12 1.6c4 0 5.9 3 5.9 6.7 0 1.8.7 3.2 1.5 4.7.8 1.6 1.5 3.4 1.5 5.2 0 2.4-1.9 3.4-4.2 3.4H7.3c-2.3 0-4.2-1-4.2-3.4 0-1.8.7-3.6 1.5-5.2.8-1.5 1.5-2.9 1.5-4.7C6.1 4.6 8 1.6 12 1.6z" />
        <ellipse cx="12" cy="16.2" rx="4.1" ry="5" fill="#fff" />
        <circle cx="10.1" cy="6.6" r="1.45" fill="#fff" /><circle cx="13.9" cy="6.6" r="1.45" fill="#fff" />
        <circle cx="10.4" cy="6.8" r="0.6" fill="#000" /><circle cx="13.6" cy="6.8" r="0.6" fill="#000" />
        <path fill="#F6BF1E" d="M12 7.8l2.1 1.5-2.1 1.5-2.1-1.5z" />
      </svg>
    );
  if (kind === 'apple')
    return <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">{DVPN_PLAT_GLYPHS.apple}</svg>;
  if (kind === 'android')
    return <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.6 9.48l1.84-3.18c.16-.29.06-.65-.23-.81-.29-.16-.65-.06-.81.23l-1.86 3.23a11.46 11.46 0 00-9.08 0L5.6 5.72a.59.59 0 00-.81-.23c-.29.16-.39.52-.23.81L6.4 9.48A10.8 10.8 0 001 18.5h22a10.8 10.8 0 00-5.4-9.02M7 15.25a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5m10 0a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5"/></svg>;
  if (kind === 'tv')
    return <svg width={size} height={size} viewBox="0 0 24 24" {...stroke} aria-hidden="true"><rect x="2.5" y="6" width="19" height="12" rx="2"/><path d="M8.5 2.8L12 6l3.5-3.2"/></svg>;
  if (kind === 'tux')
    return <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">{DVPN_PLAT_GLYPHS.tux}</svg>;
  if (kind === 'windows')
    return <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M0 3.45L9.75 2.1v9.45H0m10.95-9.6L24 0v11.4H10.95M0 12.6h9.75v9.45L0 20.7M10.95 12.6H24V24l-12.9-1.8"/></svg>;
  if (kind === 'linux')
    return <svg width={size} height={size} viewBox="0 0 24 24" {...stroke} aria-hidden="true"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 9l3 3-3 3"/><line x1="12.5" y1="15" x2="17" y2="15"/></svg>;
  return null;
}
const DVPN_PLAT_ICON = {
  'iOS':'apple', 'Android':'android', 'Apple TV':'tv', 'TV':'tv',
  'macOS':'apple', 'Linux':'linux', 'Windows':'windows',
};
const DVPN_STORE_LABEL = {
  'iOS':'App Store',
  'Android':'Google Play',
  'Apple TV':'Apple TV',
  'TV':'Android TV',
  'macOS':'macOS',
  'Linux':'Linux',
  'Windows':'Windows',
};
const DVPN_COUNTRIES = [
  ['US','United States'],['GB','United Kingdom'],['DE','Germany'],['NL','Netherlands'],
  ['FR','France'],['CH','Switzerland'],['SE','Sweden'],['ES','Spain'],
  ['CA','Canada'],['JP','Japan'],['SG','Singapore'],['KR','South Korea'],
  ['AU','Australia'],['IN','India'],['BR','Brazil'],['AE','UAE'],
];

const DVPN_APPS = [
    { name:'DVPN by NORSE', logo:window.__resources.ecoNorse, featured:true,
      descKey:'apps.norseDesc', desc:'A full decentralized-VPN experience wrapped into user-friendly apps for every platform.',
      links: {
        'iOS':      'https://apps.apple.com/us/app/dvpn-decentralized-vpn/id6553963594',
        'Android':  'https://play.google.com/store/apps/details?hl=en_US&id=io.norselabs.dvpn',
        'Apple TV': 'https://apps.apple.com/us/app/dvpn-decentralized-vpn/id6553963594',
      } },
    { name:'Sentinel Shield', logo:window.__resources.ecoSentinelShield,
      descKey:'apps.shieldDesc', desc:'Flagship open-source dVPN by Sentinel P2P — WireGuard & V2Ray.',
      links: {
        'iOS':     'https://apps.apple.com/us/app/sentinel-shield-dvpn/id6657986086',
        'Android': 'https://play.google.com/store/apps/details?hl=en_US&id=co.sentinel.dvpnapp',
      } },
    { name:'Ryn VPN', logo:window.__resources.ecoRyn,
      descKey:'apps.rynDesc', desc:'A clean, minimalist privacy VPN trusted by 10M+ people.',
      links: {
        'iOS':     'https://apps.apple.com/ae/app/ryn-vpn-secure-vpn-master/id1493328027',
        'Android': 'https://play.google.com/store/apps/details?hl=en_US&id=com.secure.cryptovpn',
        'TV':      'https://apkpure.net/ryn-vpn-browse-blazing-fast/com.secure.cryptovpn/download/tv',
      } },
    { name:'Independent dVPN', logo:window.__resources.ecoIndependent,
      descKey:'apps.independentDesc', desc:'Free decentralized VPN on Sentinel — WireGuard & V2Ray.',
      links: {
        'iOS':     'https://apps.apple.com/us/app/independent-dvpn/id6468454526',
        'Android': 'https://play.google.com/store/apps/details?hl=en_US&id=com.bagimsizvpn.app',
      } },
    { name:'Encrypt SIM', logo:window.__resources.ecoEncryptsim,
      descKey:'apps.encryptsimDesc', desc:'Privacy-first global eSIM — no KYC, no logs, SOC2-grade encryption.',
      links: {
        'iOS':     'https://www.encryptsim.com/',
        'Android': 'https://www.encryptsim.com/',
      } },
    { name:'Meile dVPN', logo:window.__resources.ecoMeile,
      descKey:'apps.meileDesc', desc:'Sentinel-powered desktop dVPN for macOS, Linux & Windows.',
      links: {
        'macOS':   'https://mathnodes.com/index.php/meile-dvpn-client-linux-os-x/',
        'Linux':   'https://mathnodes.com/index.php/meile-dvpn-client-linux-os-x/',
        'Windows': 'https://mathnodes.com/index.php/meile-dvpn-client-linux-os-x/',
      } },
    { name:'VALT', logo:window.__resources.ecoValt, imgFilter:'brightness(0)',
      descKey:'apps.valtDesc', desc:'Capture and protect the data you create every day.',
      links: {
        'iOS':     'https://apps.apple.com/us/app/valt-dvpn/id1630660373',
        'Android': 'https://play.google.com/store/apps/details?hl=en_NZ&id=com.hashcash.breadcrumbs',
        'macOS':   'https://valtdata.com/app-download/',
        'Linux':   'https://valtdata.com/app-download/',
        'Windows': 'https://valtdata.com/app-download/',
      } },
];

/* ── Guided connect console ──────────────────────────────── */
function dvpnLinkFor(a, platform) {
  if (platform === 'iOS')     return a.links['iOS'];
  if (platform === 'Android') return a.links['Android'];
  if (platform === 'Desktop') return a.links['macOS'] || a.links['Windows'] || a.links['Linux'];
  return a.links['Apple TV'] || a.links['TV'];
}
const DVPN_CON_PLATFORMS = [
  { key:'iOS',     icon:'apple',   label:'iOS' },
  { key:'Android', icon:'android', label:'Android' },
  { key:'Desktop', icon:'windows', label:'Desktop' },
  { key:'TV',      icon:'tv',      label:'TV' },
];

function DvpnConsole() {
  const isMobile = useIsMobile();
  const [open, setOpen]             = useS2(false);
  const [country, setCountry]       = useS2(DVPN_COUNTRIES[0]);
  const [platform, setPlatform]     = useS2('iOS');
  const [appName, setAppName]       = useS2('DVPN by NORSE');
  const [connecting, setConnecting] = useS2(false);

  const available = DVPN_APPS.filter(a => dvpnLinkFor(a, platform));
  useE2(() => {
    if (!available.some(a => a.name === appName)) setAppName(available[0] ? available[0].name : null);
  }, [platform]);
  const selApp = available.find(a => a.name === appName) || available[0] || null;
  const url = selApp ? dvpnLinkFor(selApp, platform) : null;

  const connect = () => {
    if (!url) return;
    window.open(url, '_blank', 'noopener');
    setConnecting(true);
    setTimeout(() => setConnecting(false), 1800);
  };

  const fld = { display:'flex', flexDirection:'column', gap:11, position:'relative' };
  const lbl = { fontFamily:T2.fontMono, fontSize:11, letterSpacing:'0.06em', color:T2.blueLight };

  return (
    <div style={{ background:T2.bgGraphite, border:'1px solid rgba(255,255,255,0.08)', borderRadius:28 }}>
      {/* title bar */}
      <div style={{ height:52, padding:'0 22px', display:'flex', alignItems:'center', gap:13, borderBottom:'1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ display:'flex', gap:8 }}>
          {[0,1,2].map(i => <span key={i} style={{ width:11, height:11, borderRadius:'50%', background:'#2a2a2c' }} />)}
        </div>
        <span style={{ fontFamily:T2.fontMono, fontSize:13, color:'rgba(234,234,234,0.62)' }}>sentinel://connect</span>
        {!isMobile && (
          <span style={{ marginLeft:'auto', display:'inline-flex', alignItems:'center', gap:8, fontFamily:T2.fontMono, fontSize:11, color:'rgba(234,234,234,0.5)' }}>
            <span className="sn-con-dot" style={{ width:7, height:7, borderRadius:'50%', background:'#3DDC84' }} /> {tr('console.wireguardBadge', 'WIREGUARD · AES-256')}
          </span>
        )}
      </div>
      {/* body */}
      <div style={{ padding:isMobile?'22px 16px 24px':'30px 30px 28px', display:'flex', flexDirection:'column', gap:26 }}>
        <div className="sn-con-steps">
          {/* 01 LOCATION */}
          <div style={fld}>
            <span style={lbl}>{tr('console.step01', '01 — EXIT LOCATION')}</span>
            <button className="sn-con-dd" onClick={() => setOpen(o => !o)} aria-haspopup="listbox" aria-expanded={open}>
              <span style={{ display:'inline-flex', alignItems:'center', gap:10 }}>
                <span style={{ fontFamily:T2.fontMono, fontSize:11.5, color:T2.blueLight, background:'rgba(38,112,255,0.14)', padding:'2px 7px', borderRadius:6 }}>{country[0]}</span>
                {country[1]}
              </span>
              <svg width="11" height="7" viewBox="0 0 11 7" fill="none" style={{ transform: open ? 'rotate(180deg)' : 'none', transition:'transform 200ms', flexShrink:0 }}><path d="M1 1l4.5 4.5L10 1" stroke="rgba(255,255,255,0.6)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            {open && <div onClick={() => setOpen(false)} style={{ position:'fixed', inset:0, zIndex:29 }} />}
            {open && (
              <div className="sn-con-ddmenu sn-con-scroll" role="listbox">
                {DVPN_COUNTRIES.map(c => (
                  <div key={c[0]} className="sn-con-ddopt" data-on={c[0] === country[0]} role="option" aria-selected={c[0] === country[0]}
                       onClick={() => { setCountry(c); setOpen(false); }}>
                    <span style={{ fontFamily:T2.fontMono, fontSize:11, color:T2.blueLight, width:26, flexShrink:0 }}>{c[0]}</span>
                    {c[1]}
                  </div>
                ))}
              </div>
            )}
          </div>
          {/* 02 PLATFORM */}
          <div style={fld}>
            <span style={lbl}>{tr('console.step02', '02 — PLATFORM')}</span>
            <div style={{ display:'grid', gridTemplateColumns:isMobile?'repeat(2, 1fr)':'repeat(4, 1fr)', gap:8 }}>
              {DVPN_CON_PLATFORMS.map(p => (
                <button key={p.key} className="sn-con-seg" data-on={platform === p.key} onClick={() => setPlatform(p.key)}>
                  <DvpnPlatIcon kind={p.icon} size={15} /> {p.label}
                </button>
              ))}
            </div>
          </div>
          {/* 03 APP */}
          <div style={fld}>
            <span style={lbl}>{tr('console.step03', '03 — SELECT APP')}</span>
            <div className="sn-con-scroll" style={{ display:'grid', gridTemplateColumns:isMobile?'1fr':'repeat(2, 1fr)', gap:8, maxHeight:188, overflowY:'auto' }}>
              {available.map(a => (
                <button key={a.name} className="sn-con-app" data-on={selApp && a.name === selApp.name} onClick={() => setAppName(a.name)}>
                  <span style={{ width:30, height:30, borderRadius:8, background:'#0f0f10', border:'1px solid rgba(255,255,255,0.08)', display:'grid', placeItems:'center', flexShrink:0, overflow:'hidden' }}>
                    <img src={a.logo} alt="" style={{ width:20, height:20, objectFit:'contain', filter: a.imgFilter ? 'brightness(0) invert(1)' : undefined }} />
                  </span>
                  <span style={{ fontFamily:T2.fontBody, fontSize:14, color:'rgba(234,234,234,0.9)' }}>{a.name}</span>
                  {selApp && a.name === selApp.name && (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2670ff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft:'auto', flexShrink:0 }}><polyline points="4 12 10 18 20 6"/></svg>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
        {/* status + connect */}
        <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', gap:22, flexWrap:'wrap', borderTop:'1px solid rgba(255,255,255,0.06)', paddingTop:24 }}>
          <div style={{ fontFamily:T2.fontMono, fontSize:12.5, lineHeight:'21px', color:'rgba(234,234,234,0.55)', minWidth:0, overflowWrap:'anywhere' }}>
            <span style={{ color: connecting ? '#3DDC84' : T2.blueLight }}>{connecting ? tr('console.statusConnecting', '> establishing encrypted tunnel…') : tr('console.statusReady', '> ready to connect')}</span><br/>
            exit={country[0]} · platform={platform} · app="{selApp ? selApp.name : '—'}"
          </div>
          <button className="sn-con-connect" onClick={connect} disabled={!url || connecting}>
            {connecting
              ? (<React.Fragment><span className="sn-con-spinner" /> {tr('console.connectingBtn', 'Connecting…')}</React.Fragment>)
              : (<React.Fragment>{tr('console.connectBtn', 'Connect to dVPN')}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </React.Fragment>)}
          </button>
        </div>
      </div>
    </div>
  );
}

function SentinelDVPNSection() {
  const apps = DVPN_APPS;

  const filters = [
    { key:'all',     label:'All apps' },
    { key:'iOS',     label:'iOS' },
    { key:'Android', label:'Android' },
    { key:'Desktop', label:'Desktop' },
    { key:'TV',      label:'TV' },
  ];
  const [filter, setFilter] = useS2('all');

  const matchFilter = (a) => {
    if (filter === 'all')     return true;
    if (filter === 'iOS')     return !!a.links['iOS'];
    if (filter === 'Android') return !!a.links['Android'];
    if (filter === 'Desktop') return !!(a.links['macOS'] || a.links['Linux'] || a.links['Windows']);
    if (filter === 'TV')      return !!(a.links['Apple TV'] || a.links['TV']);
    return false;
  };
  const visible = apps.filter(matchFilter);
  const gridApps = visible;

  const PlatPill = ({ platform, href }) => (
    <a href={href} target="_blank" rel="noopener" className="sn-dvpn-link" title={platform}>
      <DvpnPlatIcon kind={DVPN_PLAT_ICON[platform] || 'apple'} size={14} />
      {platform}
    </a>
  );

  const AppCard = (a) => (
    <div key={a.name} className="sn-dvpn-card"
         style={{ background:T2.white, borderRadius:20, padding:'24px 24px 22px', border:`1px solid ${T2.line200}`, display:'flex', flexDirection:'column', gap:16, minHeight:228, boxSizing:'border-box' }}>
      <div style={{ display:'flex', alignItems:'center', gap:14 }}>
        <div style={{ width:52, height:52, borderRadius:14, background:T2.snow, border:`1px solid ${T2.line200}`, display:'grid', placeItems:'center', flexShrink:0, overflow:'hidden' }}>
          <img src={a.logo} alt={a.name} style={{ width:34, height:34, objectFit:'contain', filter:a.imgFilter || undefined }} />
        </div>
        <div style={{ fontFamily:T2.fontHeading, fontWeight:500, fontSize:19, color:T2.onLight80 }}>{a.name}</div>
      </div>
      <p style={{ fontFamily:T2.fontBody, fontSize:14, lineHeight:'21px', color:'rgba(0,0,0,0.55)', margin:0, flex:1 }}>{a.descKey ? tr(a.descKey, a.desc) : a.desc}</p>
      <div style={{ display:'flex', flexWrap:'wrap', gap:8 }}>
        {Object.entries(a.links).map(([plat, url]) => (
          <PlatPill key={plat} platform={plat} href={url} />
        ))}
      </div>
    </div>
  );

  return (
    <section style={{ background:T2.paper, ...A.section }}>
      <div style={{ ...A.container, display:'flex', flexDirection:'column', gap:40 }}>
        <div style={{ ...A.sectionHead }}>
          <h2 style={{ ...A.h1Light, maxWidth:764 }}>{tr('sentinelDvpn.heading', 'Use open-source decentralized VPN apps you can trust.')}</h2>
          <p style={{ ...A.leadLight, maxWidth:864 }}>{tr('sentinelDvpn.lead', 'Pick a location, your platform and an app — then connect. Every app here ships on the Sentinel network, so no single provider owns the bandwidth you route through.')}</p>
        </div>

        {/* Guided connect console */}
        <DvpnConsole />
      </div>
    </section>
  );
}

/* ── Centralized VPN ──────────────────────────────────────── */
function CentralizedVPNSection() {
  return null; // comparison moved up — TrustCompareStrip renders above the ecosystem grid
  const isMobile = useIsMobile();
  // Paired point ↔ counterpoint, rendered as aligned rows of one panel.
  const pairs = [
    ['All user traffic passes through company infrastructure.', 'Traffic routes directly to your chosen node — no relay layer.'],
    ['"No-log" is a legal promise, not a technical guarantee.', 'No company exists that could log your traffic.'],
    ['Server software is proprietary and unauditable.', 'All code open source — node, client, protocol, SDK.'],
    ['Subject to subpoenas, gag orders, FISA, NSLs.', 'No single jurisdiction governs the network.'],
    ['Can be compelled to install logging silently.', 'On-chain session authorization — cryptographic, not corporate.'],
    ['Auto-update is a trusted code execution path.', 'Protocol governed by validators, not a board.'],
    ['Corporate acquisition can change policies overnight.', 'WireGuard / V2Ray end-to-end — keys never leave your device.'],
  ];

  const ServerMark = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#e0413c" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="3.5" width="18" height="7" rx="1.6"/>
      <rect x="3" y="13.5" width="18" height="7" rx="1.6"/>
      <circle cx="7" cy="7" r="0.4" fill="#e0413c"/>
      <circle cx="7" cy="17" r="0.4" fill="#e0413c"/>
      <line x1="13" y1="7" x2="18" y2="7"/>
      <line x1="13" y1="17" x2="18" y2="17"/>
    </svg>
  );

  const Card = ({ bad }) => {
    const hair = bad ? T2.strokeOnLight : 'rgba(255,255,255,0.16)';
    return (
      <div style={{
        background: bad ? T2.white : 'linear-gradient(165deg, #0a5cff 0%, #0143cd 100%)',
        border: `1px solid ${bad ? T2.line200 : 'rgba(255,255,255,0.10)'}`,
        borderRadius: 26,
        padding: 'clamp(24px,2.6vw,32px)',
        boxShadow: bad ? '0 20px 48px -36px rgba(0,0,0,0.20)' : '0 28px 64px -32px rgba(1,86,252,0.50)',
        display: 'flex', flexDirection: 'column',
      }}>
        <div style={{ display:'flex', alignItems:'center', gap:15 }}>
          <span style={{ width:46, height:46, borderRadius:14, flexShrink:0, display:'inline-flex', alignItems:'center', justifyContent:'center', background: bad ? 'rgba(224,65,60,0.08)' : T2.white, border:`1px solid ${bad ? 'rgba(224,65,60,0.18)' : 'rgba(255,255,255,0.45)'}` }}>
            {bad ? <ServerMark/> : <window.SentinelMark size={24} color="#0156FC" />}
          </span>
          <div style={{ display:'flex', flexDirection:'column', gap:4 }}>
            <span style={{ fontFamily:T2.fontMono, fontSize:11, letterSpacing:'0.1em', fontWeight:700, color: bad ? '#e0413c' : 'rgba(255,255,255,0.85)' }}>{bad ? 'CENTRALIZED VPN' : 'SENTINEL DVPN'}</span>
            <h3 style={{ fontFamily:T2.fontHeading, fontWeight:500, fontSize:'clamp(20px,2.2vw,23px)', lineHeight:1.15, margin:0, color: bad ? T2.onLight85 : '#ffffff' }}>{bad ? 'Trust-dependent.' : 'Trustless by construction.'}</h3>
          </div>
        </div>
        <p style={{ fontFamily:T2.fontBody, fontSize:14.5, lineHeight:'22px', margin:'14px 0 0', color: bad ? T2.onLight50 : 'rgba(255,255,255,0.78)' }}>{bad ? 'One entity controls every server, every key, every log.' : 'No single entity exists that could compromise the network.'}</p>
        <div style={{ height:1, background:hair, margin:'18px 0 5px' }} aria-hidden="true"/>
        {pairs.map((p, i) => (
          <div key={i} style={{ display:'flex', gap:13, alignItems:'flex-start', padding:'13px 0', borderTop: i === 0 ? 'none' : `1px solid ${hair}` }}>
            <span style={{ width:24, height:24, borderRadius:8, flexShrink:0, marginTop:1, display:'inline-flex', alignItems:'center', justifyContent:'center', background: bad ? 'rgba(224,65,60,0.10)' : 'rgba(255,255,255,0.16)' }}>
              {bad
                ? <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#e0413c" strokeWidth="3.2" strokeLinecap="round" aria-hidden="true"><line x1="6" y1="6" x2="18" y2="18"/><line x1="18" y1="6" x2="6" y2="18"/></svg>
                : <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="4 12 10 18 20 6"/></svg>}
            </span>
            <p style={{ fontFamily:T2.fontBody, fontSize:14, lineHeight:'22px', margin:'1px 0 0', color: bad ? T2.onLight80 : 'rgba(255,255,255,0.92)' }}>{p[bad ? 0 : 1]}</p>
          </div>
        ))}
      </div>
    );
  };

  return (
    <section id="dvpn-vs-vpn" style={{ scrollMarginTop:90, background:'radial-gradient(1100px 320px at 50% -6%, rgba(0,204,82,0.045), transparent 60%), radial-gradient(900px 480px at 88% 22%, rgba(1,86,252,0.05), transparent 60%), linear-gradient(180deg, #f3f6f5 0%, #fbfbfb 22%, #fbfbfb 100%)', ...A.section }}>
      <div style={{ ...A.container, display:'flex', flexDirection:'column', gap:'clamp(32px,4vw,48px)' }}>
        <div style={{ ...A.sectionHead, maxWidth:960, gap:16 }}>
          <h2 style={{ ...A.h1Light, maxWidth:826 }}>{tr('centralized.heading', "You can't trust centralized VPNs.")}</h2>
          <p style={{ ...A.leadLight, maxWidth:880, fontSize:'clamp(15px,1.5vw,17px)', color:T2.onLight60 }}>A centralized VPN only moves your trust from your ISP to a VPN company — a single point of control that now sees all of your traffic, not just some of it.</p>
        </div>

        <div style={{ display:'grid', gridTemplateColumns:isMobile?'1fr':'1fr 1fr', gap:isMobile?18:'clamp(18px,2.4vw,28px)', alignItems:'stretch' }}>
          <Card bad />
          <Card />
        </div>
      </div>
    </section>
  );
}

/* ── Blockchain DHT ───────────────────────────────────────── */
function BlockchainDHTSection() {
  return null; // pipeline merged into BuilderStackSection (builder-stack)
}

/* ── Compare section — Sentinel + 5 networks ─────────────── */
const CmpLogos = {
  tor: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="#7D4698" aria-hidden="true"><path d="M11.9124 17.1581zM17.9817 1.14a8.419 8.419 0 00-4.4695 3.1196A21.4277 21.4277 0 0116.512 0a12.4187 12.4187 0 00-3.9996 4.3595l.64-2.5497a14.6284 14.6284 0 00-1.8998 5.3494l1.1198.48a33.1264 33.1264 0 015.6094-6.4993zm.82 13.0686c-.82-1.5199-2.9197-3.0097-5.1295-4.3896-.51-.3-.61-1.4098-.53-1.8898l-.5099-.24a6.3693 6.3693 0 00.16 2.3898c.24.75.9999 1.5998 1.5198 2.7997a18.158 18.158 0 01.72 2.9197 13.1686 13.1686 0 01-.54 6.1193 4.2595 4.2595 0 01-1.4298 1.9198l-.24.16c4.1595.13 8.829-4.6295 5.9793-9.789zm-5.3995 4.7894a6.6193 6.6193 0 00-.42-1.9997 12.4087 12.4087 0 00-.7498-1.4399 6.2293 6.2293 0 01-.16-2.0698 6.9992 6.9992 0 00.32 1.9398 11.0788 11.0788 0 01.6899 1.2999 8.999 8.999 0 01.5899 2.2697 10.4289 10.4289 0 01-.35 2.9997 5.1094 5.1094 0 01-.4 1 4.8495 4.8495 0 00.7-1.52 12.4187 12.4187 0 00.36-4.4794 11.6087 11.6087 0 00-.46-1.8898c-.44-1.2-1.0699-2.2298-1.1499-2.4698a16.2082 16.2082 0 01-.39-3.3596 14.3084 14.3084 0 00.44 3.1197c.08.24.8 1.3798 1.2999 2.5797a7.4692 7.4692 0 01.48 1.7298 10.7188 10.7188 0 01-.53 5.1594 3.9996 3.9996 0 01-.35.82 3.7196 3.7196 0 00.8-1.41 16.1382 16.1382 0 000-8.109c-.42-1.2799-1.4099-2.3998-1.6499-3.1697a7.6792 7.6792 0 01-.08-2.3897l-2.1497-1c.56 1.44.6599 2.5598.08 2.9998-2.2598 1.8698-5.9994 3.9995-5.9994 7.1092 0 3.3196 1.9998 6.9092 7.0492 7.1792a12.9986 12.9986 0 01-1.6998-.56 3.4496 3.4496 0 01-1.3098-.8998l-.13-.14A9.339 9.339 0 016.233 18.658a2.7097 2.7097 0 01-.08-1.5199 6.6793 6.6793 0 013.2797-3.9995 10.099 10.099 0 00.9999-.61c.4699-.29.7699-1.5298 1.0798-2.5297-.16.77-.34 2.2598-1.0599 2.8197-.29.22-.6099.43-.9299.64-1.2798.8798-2.5397 1.6998-3.1696 3.8095a2.8197 2.8197 0 00.08 1.3799 9.319 9.319 0 001.9498 3.5096s.13.13.13.16a2.9997 2.9997 0 001.9397 1.1499c-.29-.16-.5299-.35-.7399-.48a4.3595 4.3595 0 01-1.9998-3.5996 3.6996 3.6996 0 012.1798-3.3896 3.5796 3.5796 0 001.6798-2.3798 3.1197 3.1197 0 01-1.5898 2.4998 3.9996 3.9996 0 00-2.0998 3.1696 5.6594 5.6594 0 001.8898 3.3996 4.0796 4.0796 0 001.5898.72 2.8897 2.8897 0 01-.4799-.5 4.9995 4.9995 0 01-.45-.9999 2.9997 2.9997 0 01-.27-.9999 3.5996 3.5996 0 01.64-2.3697 2.8397 2.8397 0 00.9-1.3499 2.8697 2.8697 0 01-.72 1.5099 2.9997 2.9997 0 00-.56 2.2397 4.0596 4.0596 0 00.29.93 3.9996 3.9996 0 00.51.9998c.18.21.26.37.5499.48a6.4793 6.4793 0 00.49-2.3498 9.519 9.519 0 000-1.7598c-.13-.7999-.4-1.5998-.4-2.2397.12.5899.43 1.3798.61 2.2097a5.6294 5.6294 0 01.11 1.7298c0 .56-.08 1-.16 1.4899a1.9998 1.9998 0 01-.45.9299 3.2097 3.2097 0 001.1099-1.9998 7.8991 7.8991 0 00.32-2.3598z"/></svg>
  ),
  ipfs: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="#65C2CB" aria-hidden="true"><path d="M12 0L1.608 6v12L12 24l10.392-6V6zm-1.073 1.445h.001a1.8 1.8 0 002.138 0l7.534 4.35a1.794 1.794 0 000 .403l-7.535 4.35a1.8 1.8 0 00-2.137 0l-7.536-4.35a1.795 1.795 0 000-.402zM21.324 7.4c.109.08.226.147.349.201v8.7a1.8 1.8 0 00-1.069 1.852l-7.535 4.35a1.8 1.8 0 00-.349-.2l-.009-8.653a1.8 1.8 0 001.07-1.851zm-18.648.048l7.535 4.35a1.8 1.8 0 001.069 1.852v8.7c-.124.054-.24.122-.349.202l-7.535-4.35a1.8 1.8 0 00-1.069-1.852v-8.7c.124-.054.24-.122.35-.202z"/></svg>
  ),
  bittorrent: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="#050505" aria-hidden="true"><path d="M12.0002.0014C5.3735.0004.001 5.3718 0 11.9984a11.9986 11.9986 0 0 0 1.7006 6.1593.132.132 0 0 0 .1128.0384c.0288 0 .048-.0696.048-.1104a.739.739 0 0 0-.0336-.1296 22.14 22.14 0 0 1-.4224-2.2941 9.8389 9.8389 0 0 1 .4272-3.866c1.1014-3.3956 3.3332-5.6993 6.664-6.9376a10.302 10.302 0 0 1 3.398-.5951.7823.7823 0 0 1 .8567.763c0 .4488-.3431.7368-.8495.7656a12.853 12.853 0 0 0-1.6078.1656 8.6918 8.6918 0 0 0-4.8642 2.6397C3.3468 10.8169 2.55 13.4566 3.03 16.4539a8.6846 8.6846 0 0 0 2.4454 4.785 8.9414 8.9414 0 0 0 6.3688 2.7597h.156a11.9507 11.9507 0 0 0 5.613-1.3918h-5.5938a8.3988 8.3988 0 0 1-1.4086-.1296c-4.1387-.7467-6.915-4.673-6.2393-8.8238.5627-3.5271 3.4722-6.2073 7.0336-6.4793a7.6407 7.6407 0 0 1 2.1597.1368.7487.7487 0 0 1 .6168.876.7847.7847 0 0 1-.96.6023 6.0836 6.0836 0 0 0-.8014-.1152 6.328 6.328 0 0 0-2.899.504c-2.5052 1.0803-4.0095 3.6719-3.705 6.3832.3566 3.1366 3.0056 5.5091 6.1624 5.5194h6.9904c.6791 0 .84.0144 1.1375-.24.382-.3525.742-.7284 1.0775-1.1255h-9.3302a4.3483 4.3483 0 0 1-2.0733-.516c-2.4037-1.1787-3.3968-4.0828-2.218-6.4865s4.0828-3.3968 6.4866-2.218c.1195.0586.2365.122.3508.1903a.7511.7511 0 0 1 .3168 1.044.7655.7655 0 0 1-1.0655.2711c-1.5988-.9125-3.6346-.356-4.547 1.2428a3.3332 3.3332 0 0 0-.3964 2.1792c.2433 1.6186 1.6388 2.8127 3.2756 2.8029 3.3596.0336 6.7193 0 10.0789 0a.4224.4224 0 0 0 .2807-.144c3.3584-5.7126 1.45-13.0661-4.2626-16.4245a11.9986 11.9986 0 0 0-6.0802-1.655z"/></svg>
  ),
  nodes: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(0,0,0,0.55)" strokeWidth="1.6" aria-hidden="true"><circle cx="5" cy="6" r="2.4"/><circle cx="19" cy="6" r="2.4"/><circle cx="12" cy="18" r="2.4"/><line x1="7" y1="7.4" x2="10.4" y2="16.2"/><line x1="17" y1="7.4" x2="13.6" y2="16.2"/><line x1="7.4" y1="6" x2="16.6" y2="6"/></svg>
  ),
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

function CompareSection() {
  const isMobile = useIsMobile();
  const i2pSrc = window.__resources && window.__resources.cmpI2p;
  const sentinel = {
    title: 'Sentinel',
    rows: [
      [tr('compare.rowDiscovery','Discovery'),         tr('compare.snDiscoveryVal','Cosmos-SDK blockchain')],
      [tr('compare.rowBootstrap','Bootstrap'),         tr('compare.snBootstrapVal','None — any RPC endpoint')],
      [tr('compare.rowEntry','Entry points'),          tr('compare.snEntryVal','∞ permissionless')],
      [tr('compare.rowSybil','Sybil resistance'),      tr('compare.snSybilVal','On-chain registration TX')],
      [tr('compare.rowState','State consistency'),     tr('compare.snStateVal','Finality · ~6s blocks')],
      [tr('compare.rowGovernance','Governance'),       tr('compare.snGovVal','On-chain validator votes')],
      [tr('compare.rowIfOrg','If org disappears'),     tr('compare.snOrgVal','Validators continue')],
      [tr('compare.rowVerdict','Verdict'),             tr('compare.snVerdictVal','Nothing to block')],
    ],
    callout: tr('compare.sentinelCallout','Discovery is on-chain, entry points are permissionless, and the registry lives as long as anyone runs a validator. Block the team and the network is unaffected.'),
  };
  const items = [
    { logo:CmpLogos.tor, title:'Tor', sub:tr('compare.torSub','The Onion Router'), fail:tr('compare.torFail','Central directory'),
      rows:[[tr('compare.rowDiscovery','Discovery'),tr('compare.torDiscoveryVal','9 Directory Authorities')],[tr('compare.rowRouting','Routing'),tr('compare.torRoutingVal','3-hop circuit (slow)')],[tr('compare.rowCentralFail','Central failure'),tr('compare.torCentralFailVal','Directory Authorities')],[tr('compare.rowIfOrg','If org disappears'),tr('compare.torOrgVal','Network degrades')]],
      callout:tr('compare.torCallout',"9 organizations control the network's directory. Compromise or block them and Tor falls.") },
    { logo:CmpLogos.nodes, title:tr('compare.otherTitle','Other on-chain P2P networks'), sub:tr('compare.otherSub','Cross-protocol comparison'), fail:tr('compare.otherFail','Company servers'),
      rows:[[tr('compare.rowDiscovery','Discovery'),tr('compare.otherDiscoveryVal','Centralized API servers')],[tr('compare.rowRegistry','Node registry'),tr('compare.otherRegistryVal','Company-operated')],[tr('compare.rowIfCompany','If company disappears'),tr('compare.otherOrgVal','Network dies')],[tr('compare.rowOpenSdk','Open client SDK'),tr('compare.otherSdkVal','Proprietary or limited')]],
      callout:tr('compare.otherCallout','Discovery and coordination still depend on company-operated servers. Not truly decentralized at the networking layer.') },
    { logo:CmpLogos.ipfs, title:'IPFS / Filecoin', sub:tr('compare.ipfsSub','Decentralized storage'), fail:tr('compare.ipfsFail','Hardcoded peers'),
      rows:[['DHT','Kademlia (libp2p)'],[tr('compare.rowBootstrap','Bootstrap'),tr('compare.ipfsBootstrapVal','~6 hardcoded peers')],[tr('compare.rowSeeds','Seeds'),'bootstrap.libp2p.io (Protocol Labs)'],[tr('compare.rowSybil','Sybil resistance'),tr('compare.ipfsSybilVal','Weak')]],
      callout:tr('compare.ipfsCallout',"Kubo ships with ~6 hardcoded Protocol Labs bootstrap peers; block them, and fresh nodes can’t join the DHT.") },
    { logo:CmpLogos.bittorrent, title:'BitTorrent', sub:tr('compare.btSub','File sharing protocol'), fail:tr('compare.btFail','Hardcoded hosts'),
      rows:[['DHT','Mainline Kademlia'],[tr('compare.rowBootstrap','Bootstrap'),tr('compare.btBootstrapVal','~5 hardcoded hosts')],[tr('compare.rowSeeds','Seeds'),'router.bittorrent.com, dht.transmissionbt.com...'],[tr('compare.rowSybil','Sybil resistance'),tr('compare.btSybilVal','Weak (free to flood)')]],
      callout:tr('compare.btCallout',"Mainline DHT relies on ~5 hardcoded bootstrap hosts; existing clients can persist peers, but blocking those hosts prevents new users from joining.") },
    { logo:(i2pSrc ? <img src={i2pSrc} alt="" style={{ height:13, width:'auto', display:'block' }}/> : null), wideLogo:true, title:'I2P', sub:tr('compare.i2pSub','Invisible Internet Project'), fail:tr('compare.i2pFail','Reseed servers'),
      rows:[[tr('compare.rowDiscovery','Discovery'),tr('compare.i2pDiscoveryVal','Hardcoded reseed URLs')],[tr('compare.rowBootstrap','Bootstrap'),tr('compare.i2pBootstrapVal','~8 reseed servers')],[tr('compare.rowSeeds','Seeds'),'reseed.i2p-projekt.de'],[tr('compare.rowIfBlocked','If blocked'),tr('compare.i2pBlockedVal',"New users can't join")]],
      callout:tr('compare.i2pCallout','Hardcoded reseed URLs. Block ~8 domains and new users cannot bootstrap into the network.') },
  ];

  const chip = (logo, wide) => (
    <span style={{ minWidth:36, height:36, padding: wide ? '0 12px' : 0, width: wide ? 'auto' : 36, borderRadius:11, background:T2.white, border:`1px solid ${T2.strokeOnLight}`, display:'inline-flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>{logo}</span>
  );
  const cardTitle = { fontFamily:T2.fontHeading, fontWeight:500, fontSize:16.5, lineHeight:'22px', color:T2.onLight85, margin:0 };
  const cardSub  = { fontFamily:T2.fontMono, fontSize:10, fontWeight:700, letterSpacing:'0.08em', textTransform:'uppercase', color:T2.onLight50, margin:'3px 0 0' };
  const keyLight = { fontFamily:T2.fontMono, fontSize:9.5, fontWeight:700, letterSpacing:'0.07em', textTransform:'uppercase', color:'rgba(0,0,0,0.42)', lineHeight:'16px' };
  const valLight = { fontFamily:T2.fontBody, fontSize:12.5, lineHeight:'18px', color:T2.onLight80 };
  const keyDark  = { fontFamily:T2.fontMono, fontSize:9.5, fontWeight:700, letterSpacing:'0.09em', textTransform:'uppercase', color:'rgba(234,234,234,0.40)', lineHeight:'15px' };
  const valDark  = { fontFamily:T2.fontBody, fontSize:13.5, lineHeight:'20px', color:'rgba(234,234,234,0.93)' };

  return (
    <section id="network-compare" style={{ scrollMarginTop:90, background:'radial-gradient(1000px 480px at 14% -8%, rgba(1,86,252,0.05), transparent 60%), linear-gradient(180deg, #f4f6fb 0%, #fbfbfb 26%, #fbfbfb 100%)', ...A.section }}>
      <style>{SN_CMP_CSS}</style>
      <div style={{ ...A.container, display:'flex', flexDirection:'column', gap:'clamp(28px,3.5vw,40px)' }}>
        <div style={{ ...A.sectionHead, maxWidth:940, gap:16 }}>
          <h2 style={{ ...A.h1Light, maxWidth:940 }}>{tr('compare.heading',"How Sentinel's architecture compares to leading P2P networks.")}</h2>
          <p style={{ ...A.leadLight, maxWidth:760 }}>{tr('compare.lead','Take away the founding organization. Block the bootstrap servers. What keeps running?')}</p>
        </div>

        {/* Sentinel — dark monolith hero card */}
        <div className="sn-cmp-hero" style={{ position:'relative', overflow:'hidden', background:'linear-gradient(150deg, #12141b 0%, #0b0c10 55%, #0c1322 100%)', border:'1px solid rgba(38,112,255,0.38)', borderRadius:26, padding: isMobile ? '22px 20px 20px' : '26px 30px 26px', boxShadow:'0 30px 90px -40px rgba(1,86,252,0.55), 0 18px 50px -30px rgba(0,0,0,0.5)' }}>
          <div aria-hidden="true" style={{ position:'absolute', inset:0, pointerEvents:'none', background:'radial-gradient(640px 280px at 12% -10%, rgba(1,86,252,0.24), transparent 62%), radial-gradient(560px 320px at 96% 115%, rgba(38,112,255,0.16), transparent 60%)' }} />
          <div aria-hidden="true" style={{ position:'absolute', inset:0, pointerEvents:'none', backgroundImage:'radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1.4px)', backgroundSize:'26px 26px', maskImage:'linear-gradient(180deg, black, transparent 75%)', WebkitMaskImage:'linear-gradient(180deg, black, transparent 75%)' }} />
          <div aria-hidden="true" style={{ position:'absolute', top:0, left:30, right:30, height:1, background:'linear-gradient(90deg, transparent, rgba(94,148,255,0.7), transparent)' }} />
          <div style={{ position:'relative', display:'flex', flexDirection:'column', gap:18 }}>
            <div style={{ display:'flex', alignItems:'center', gap:14, flexWrap:'wrap' }}>
              {chip(<window.SentinelMark size={20} color="#0156FC" />)}
              <div style={{ minWidth:0 }}>
                <h3 style={{ fontFamily:T2.fontHeading, fontWeight:500, fontSize:19, lineHeight:'24px', color:'#ffffff', margin:0 }}>{sentinel.title}</h3>
              </div>
              {!isMobile && (
              <a className="sn-cmp-rpc" href="https://peers.suchnode.net/" target="_blank" rel="noopener noreferrer" style={{ marginLeft:'auto', boxSizing:'border-box', display:'inline-flex', alignItems:'center', justifyContent:'center', gap:10, padding:'11px 20px', borderRadius:999, background:'rgba(1,86,252,0.20)', border:'1px solid rgba(94,148,255,0.48)', boxShadow:'0 8px 26px -12px rgba(1,86,252,0.55)', textDecoration:'none' }}>
                <span aria-hidden="true" style={{ width:8, height:8, borderRadius:'50%', background:'#00e05c', boxShadow:'0 0 12px rgba(0,224,92,0.9)', animation:'sn-cmp-pulse 1.8s ease-in-out infinite', flexShrink:0 }} />
                <span style={{ fontFamily:T2.fontHeading, fontSize:13, fontWeight:800, letterSpacing:'0.08em', color:'#e2ecff', whiteSpace:'nowrap' }}>{tr('compare.viewLiveRpc','VIEW LIVE RPC LIST')}</span>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#b6cdff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flexShrink:0 }}><path d="M7 17 17 7"/><path d="M9 7h8v8"/></svg>
              </a>
              )}
            </div>
            <div style={{ display:'grid', gridTemplateColumns: isMobile ? 'repeat(2, minmax(0,1fr))' : 'repeat(4, minmax(0,1fr))', gap:'0 26px' }}>
              {sentinel.rows.map(([k,v], ri) => (
                <div key={k} style={{ padding:'9px 0 10px', borderTop:'1px solid rgba(255,255,255,0.08)' }}>
                  <span style={{ display:'block', ...keyDark, marginBottom:3 }}>{k}</span>
                  <span style={ ri === sentinel.rows.length - 1 ? { ...valDark, color:'#9dbcff', fontWeight:700 } : valDark }>{v}</span>
                </div>
              ))}
            </div>
            <div style={{ display:'flex', gap:11, alignItems:'flex-start', justifyContent:'center', borderRadius:14, background:'rgba(1,86,252,0.12)', border:'1px solid rgba(94,148,255,0.28)', padding:'12px 18px' }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#9dbcff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flexShrink:0, marginTop:2 }}><path d="M12 2.8 20 6v6c0 5-3.4 8.3-8 9.2C7.4 20.3 4 17 4 12V6z"/><path d="m8.8 12 2.2 2.2 4.2-4.4"/></svg>
              <span style={{ fontFamily:T2.fontBody, fontSize:12.5, lineHeight:'20px', color:'rgba(214,228,255,0.92)', textAlign: isMobile ? 'left' : 'center' }}>{sentinel.callout}</span>
            </div>
          </div>
        </div>

        {/* Mobile: RPC-list pill sits directly below the Sentinel card */}
        {isMobile && (
          <a href="https://peers.suchnode.net/" target="_blank" rel="noopener noreferrer" style={{ marginTop:-14, width:'100%', boxSizing:'border-box', display:'inline-flex', alignItems:'center', justifyContent:'center', gap:10, padding:'14px 18px', borderRadius:999, background:'linear-gradient(150deg, #12141b 0%, #0b0c10 55%, #0c1322 100%)', border:'1px solid rgba(38,112,255,0.38)', boxShadow:'0 18px 50px -24px rgba(1,86,252,0.55)', textDecoration:'none' }}>
            <span aria-hidden="true" style={{ width:8, height:8, borderRadius:'50%', background:'#00e05c', boxShadow:'0 0 12px rgba(0,224,92,0.9)', animation:'sn-cmp-pulse 1.8s ease-in-out infinite', flexShrink:0 }} />
            <span style={{ fontFamily:T2.fontHeading, fontSize:13, fontWeight:800, letterSpacing:'0.08em', color:'#e2ecff', whiteSpace:'nowrap' }}>VIEW LIVE RPC LIST</span>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#b6cdff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flexShrink:0 }}><path d="M7 17 17 7"/><path d="M9 7h8v8"/></svg>
          </a>
        )}

        {/* Comparison grid — white spec-sheet cards */}
        <div style={{ display:'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(6, minmax(0,1fr))', gap:14 }}>
          {items.map((item, idx) => (
            <div key={item.title} className="sn-cmp-card" style={{ gridColumn: isMobile ? 'auto' : (idx < 3 ? 'span 2' : 'span 3'), background:T2.white, border:`1px solid ${T2.line200}`, borderRadius:20, padding:'20px 22px', display:'flex', flexDirection:'column', gap:14 }}>
              <div style={{ display:'flex', alignItems:'center', gap:12 }}>
                {chip(item.logo, item.wideLogo && i2pSrc)}
                <div style={{ minWidth:0 }}>
                  <h3 style={cardTitle}>{item.title}</h3>
                  <p style={cardSub}>{item.sub}</p>
                </div>
              </div>
              <div>
                {item.rows.map(([k,v]) => (
                  <div key={k} style={{ display:'grid', gridTemplateColumns:isMobile?'96px 1fr':'118px 1fr', gap:12, alignItems:'baseline', padding:'7px 0', borderTop:`1px solid ${T2.strokeOnLight}` }}>
                    <span style={keyLight}>{k}</span>
                    <span style={valLight}>{v}</span>
                  </div>
                ))}
              </div>
              <div style={{ marginTop:'auto', borderLeft:'2px solid rgba(216,4,4,0.5)', padding:'2px 0 2px 13px' }}>
                <span style={{ display:'block', fontFamily:T2.fontMono, fontSize:9, fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', color:T2.danger700, marginBottom:4 }}>{tr('compare.failureMode','Failure mode') + ' · ' + item.fail}</span>
                <span style={{ fontFamily:T2.fontBody, fontSize:11.5, lineHeight:'18px', color:T2.onLight60 }}>{item.callout}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Closing statement — dark monolith card echoing the Sentinel hero above */}
        <div style={{ position:'relative', overflow:'hidden', background:'linear-gradient(150deg, #12141b 0%, #0b0c10 55%, #0c1322 100%)', border:'1px solid rgba(38,112,255,0.38)', borderRadius:26, padding:'clamp(34px,5vw,58px) clamp(24px,6vw,72px)', textAlign:'center', boxShadow:'0 30px 90px -40px rgba(1,86,252,0.55), 0 18px 50px -30px rgba(0,0,0,0.5)' }}>
          <div aria-hidden="true" style={{ position:'absolute', inset:0, pointerEvents:'none', background:'radial-gradient(720px 300px at 50% -20%, rgba(1,86,252,0.26), transparent 65%), radial-gradient(560px 320px at 96% 115%, rgba(38,112,255,0.12), transparent 60%)' }} />
          <div aria-hidden="true" style={{ position:'absolute', inset:0, pointerEvents:'none', backgroundImage:'radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1.4px)', backgroundSize:'26px 26px', maskImage:'linear-gradient(180deg, black, transparent 75%)', WebkitMaskImage:'linear-gradient(180deg, black, transparent 75%)' }} />
          <div aria-hidden="true" style={{ position:'absolute', top:0, left:30, right:30, height:1, background:'linear-gradient(90deg, transparent, rgba(94,148,255,0.7), transparent)' }} />
          <p style={{ position:'relative', fontFamily:T2.fontHeading, fontWeight:500, fontSize:'clamp(21px,2.9vw,31px)', lineHeight:1.45, letterSpacing:'-0.01em', color:'rgba(234,234,234,0.92)', margin:'0 auto', maxWidth:920 }}>
            {tr('compare.closing', 'Most networks rely on fixed entry points that censors can block. Sentinel uses permissionless RPC endpoints — anyone can run one, anywhere. As long as one endpoint is reachable, the network remains accessible.')}
          </p>
        </div>
      </div>
    </section>
  );
}

/* ── Ecosystem — live user counter ────────────────────────── */
function EcoUserCounter() {
  const ECO_TARGET = 1300000;
  const [count, setCount] = useS2(ECO_TARGET - 160000);
  const wrapRef = useR2(null);
  const startedRef = useR2(false);

  useE2(() => {
    const el = wrapRef.current;
    if (!el) return;
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let raf = 0, drift = 0;
    const startDrift = () => {
      drift = setInterval(() => setCount(c => c + 1 + Math.floor(Math.random() * 3)), 1800);
    };
    if (reduce) {
      setCount(ECO_TARGET);
      startDrift();
      return () => clearInterval(drift);
    }
    const io = new IntersectionObserver(entries => {
      if (!entries[0].isIntersecting || startedRef.current) return;
      startedRef.current = true;
      io.disconnect();
      const from = ECO_TARGET - 160000, dur = 2600, t0 = performance.now();
      const step = t => {
        const p = Math.min(1, (t - t0) / dur);
        const eased = 1 - Math.pow(1 - p, 3);
        setCount(Math.round(from + (ECO_TARGET - from) * eased));
        if (p < 1) raf = requestAnimationFrame(step);
        else startDrift();
      };
      raf = requestAnimationFrame(step);
    }, { threshold: 0.35 });
    io.observe(el);
    return () => { io.disconnect(); cancelAnimationFrame(raf); clearInterval(drift); };
  }, []);

  return (
    <div ref={wrapRef} style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:6, textAlign:'center' }}>
      <style>{'@keyframes snEcoPulse{0%,100%{opacity:1;transform:scale(1)}50%{opacity:0.35;transform:scale(0.72)}}'}</style>
      <p style={{ ...A.leadDark, margin:0 }}>{tr('ecosystem.counterBefore', 'Apps built on Sentinel have been used by over')}</p>
      <div style={{ fontFamily:T2.fontHeading, fontWeight:600, fontSize:'clamp(46px,8vw,88px)', lineHeight:1.05, letterSpacing:'-0.02em', fontVariantNumeric:'tabular-nums', backgroundImage:'linear-gradient(180deg,#ffffff 10%,#2670ff 135%)', WebkitBackgroundClip:'text', backgroundClip:'text', color:'transparent' }}>
        {count.toLocaleString('en-US')}
      </div>
      <p style={{ ...A.leadDark, margin:0, display:'inline-flex', alignItems:'center', gap:10, justifyContent:'center' }}>
        <span aria-hidden="true" style={{ width:9, height:9, borderRadius:9999, background:'#2670ff', boxShadow:'0 0 12px rgba(38,112,255,0.9)', animation:'snEcoPulse 1.6s ease-in-out infinite', display:'inline-block', flexShrink:0 }} />
        {tr('ecosystem.counterAfter', 'people — and counting')}
      </p>
    </div>
  );
}

/* ── Trust compare (condensed) — all 7 points, paired rows ── */
function TrustCompareStrip() {
  const isMobile = useIsMobile();
  const pairs = [
    [tr('trustCompare.bad1','All user traffic passes through company infrastructure.'), tr('trustCompare.good1','Traffic routes directly to your chosen node — no relay layer.')],
    [tr('trustCompare.bad2','"No-log" is a legal promise, not a technical guarantee.'), tr('trustCompare.good2','No company exists that could log your traffic.')],
    [tr('trustCompare.bad3','Server software is proprietary and unauditable.'), tr('trustCompare.good3','All code open source — node, client, protocol, SDK.')],
    [tr('trustCompare.bad4','Subject to subpoenas, gag orders, FISA, NSLs.'), tr('trustCompare.good4','No single jurisdiction governs the network.')],
    [tr('trustCompare.bad5','Can be compelled to install logging silently.'), tr('trustCompare.good5','On-chain session authorization — cryptographic, not corporate.')],
    [tr('trustCompare.bad6','Auto-update is a trusted code execution path.'), tr('trustCompare.good6','Protocol governed by validators, not a board.')],
    [tr('trustCompare.bad7','Corporate acquisition can change policies overnight.'), tr('trustCompare.good7','WireGuard / V2Ray end-to-end — keys never leave your device.')],
  ];
  const ServerMark = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#e0413c" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="3.5" width="18" height="7" rx="1.6"/>
      <rect x="3" y="13.5" width="18" height="7" rx="1.6"/>
      <line x1="13" y1="7" x2="18" y2="7"/>
      <line x1="13" y1="17" x2="18" y2="17"/>
    </svg>
  );
  const Cross = () => (
    <span style={{ width:22, height:22, borderRadius:7, flexShrink:0, marginTop:1, display:'inline-flex', alignItems:'center', justifyContent:'center', background:'rgba(224,65,60,0.12)' }}>
      <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#e0413c" strokeWidth="3.2" strokeLinecap="round" aria-hidden="true"><line x1="6" y1="6" x2="18" y2="18"/><line x1="18" y1="6" x2="6" y2="18"/></svg>
    </span>
  );
  const Check = () => (
    <span style={{ width:22, height:22, borderRadius:7, flexShrink:0, marginTop:1, display:'inline-flex', alignItems:'center', justifyContent:'center', background:'rgba(38,112,255,0.26)' }}>
      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#aac8ff" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="4 12 10 18 20 6"/></svg>
    </span>
  );
  const Head = ({ bad }) => (
    /* sn-cmp-head-v3 sn-cmp-head-v4 */
    <div style={{ padding:isMobile?'20px 18px 16px':'26px 30px 22px' }}>
      <div style={{ display:'flex', alignItems:'center', gap:isMobile?14:18 }}>
        <span style={{ width:isMobile?44:50, height:isMobile?44:50, borderRadius:14, flexShrink:0, display:'inline-flex', alignItems:'center', justifyContent:'center', background: bad ? 'rgba(224,65,60,0.10)' : T2.white, border: bad ? '1px solid rgba(224,65,60,0.20)' : '1px solid rgba(255,255,255,0.45)' }}>
          {bad ? <ServerMark/> : <window.SentinelMark size={24} color="#0156FC" />}
        </span>
        <span style={{ display:'flex', flexDirection:'column', justifyContent:'center', minWidth:0 }}>
          <span style={{ fontFamily:T2.fontHeading, fontWeight:600, fontSize:isMobile?22:28, lineHeight:1.08, letterSpacing:'-0.01em', color: bad ? T2.fog : '#ffffff' }}>{bad ? tr('trustCompare.centralizedHead','Centralized VPN') : tr('trustCompare.sentinelHead','Sentinel dVPN')}</span>
        </span>
      </div>
      <span style={{ display:'block', fontFamily:T2.fontHeading, fontWeight:500, fontSize:isMobile?14.5:16, lineHeight:1.45, letterSpacing:'0.005em', marginTop:isMobile?9:11, paddingLeft:isMobile?0:68, color: bad ? 'rgba(255,255,255,0.70)' : 'rgba(255,255,255,0.94)' }}>{bad ? tr('trustCompare.centralizedSub','One entity controls every server, every key, every log.') : tr('trustCompare.sentinelSub','No single entity exists that could compromise the network.')}</span>
    </div>
  );
  const rowL = { padding:isMobile?'12px 18px':'14px 30px', display:'flex', gap:12, alignItems:'flex-start', background:'rgba(255,255,255,0.02)', borderTop:'1px solid rgba(255,255,255,0.055)' };
  const rowR = { padding:isMobile?'12px 18px':'14px 30px', display:'flex', gap:12, alignItems:'flex-start', background:'rgba(1,86,252,0.10)', borderTop:'1px solid rgba(255,255,255,0.055)', borderLeft:isMobile?'none':'1px solid rgba(255,255,255,0.07)' };
  const txtL = { fontFamily:T2.fontBody, fontSize:14, lineHeight:'21px', margin:'2px 0 0', color:'rgba(255,255,255,0.62)' };
  const txtR = { fontFamily:T2.fontBody, fontSize:14, lineHeight:'21px', margin:'2px 0 0', color:'rgba(255,255,255,0.92)' };
  return (
    <section id="dvpn-vs-vpn" style={{ background:'transparent', padding:'clamp(34px,4.5vw,58px) 24px 0', scrollMarginTop:90 }}>
      <div style={{ ...A.container, display:'flex', flexDirection:'column', gap:'clamp(18px,2.6vw,28px)' }}>
        <div style={{ ...A.sectionHead, gap:12 }}>
          <h2 style={{ ...A.h1Dark, fontSize:'clamp(26px,3.4vw,40px)', maxWidth:780 }}>{tr('centralized.heading', "You can't trust centralized VPNs.")}</h2>
          <p style={{ ...A.leadDark, maxWidth:860 }}>{tr('trustCompare.lead', 'A centralized VPN only moves your trust from your ISP to a VPN company — a single point of control that now sees all of your traffic, not just some of it.')}</p>
        </div>
        {isMobile ? (
          <div style={{ border:'1px solid rgba(255,255,255,0.08)', borderRadius:20, overflow:'hidden' }}>
            <div style={{ background:'rgba(255,255,255,0.02)' }}><Head bad /></div>
            <div style={{ background:'linear-gradient(135deg, rgba(1,86,252,0.22) 0%, rgba(1,86,252,0.08) 100%)', borderTop:'1px solid rgba(255,255,255,0.07)' }}><Head /></div>
            {pairs.map((p, i) => (
              <div key={i} style={{ borderTop:'1px solid rgba(255,255,255,0.10)' }}>
                <div style={rowL}><Cross/><p style={txtL}>{p[0]}</p></div>
                <div style={rowR}><Check/><p style={txtR}>{p[1]}</p></div>
              </div>
            ))}
          </div>
        ) : (
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', border:'1px solid rgba(255,255,255,0.08)', borderRadius:20, overflow:'hidden' }}>
            <div style={{ background:'rgba(255,255,255,0.02)' }}><Head bad /></div>
            <div style={{ background:'linear-gradient(135deg, rgba(1,86,252,0.22) 0%, rgba(1,86,252,0.08) 100%)', borderLeft:'1px solid rgba(255,255,255,0.07)' }}><Head /></div>
            {pairs.map((p, i) => [
              <div key={'l' + i} style={rowL}><Cross/><p style={txtL}>{p[0]}</p></div>,
              <div key={'r' + i} style={rowR}><Check/><p style={txtR}>{p[1]}</p></div>,
            ])}
          </div>
        )}
      </div>
    </section>
  );
}

/* ── Ecosystem download icons — Bootstrap Icons (MIT) Android/Apple/Windows + Font Awesome Free (CC BY 4.0) Tux ── */
function EcoOSIcon({ k }) {
  const c = { width:15, height:15, fill:'currentColor' };
  if (k === 'android') return (<svg {...c} viewBox="0 0 16 16" aria-hidden="true"><path d="m10.213 1.471.691-1.26q.069-.124-.048-.192-.128-.057-.195.058l-.7 1.27A4.8 4.8 0 0 0 8.005.941q-1.032 0-1.956.404l-.7-1.27Q5.281-.037 5.154.02q-.117.069-.049.193l.691 1.259a4.25 4.25 0 0 0-1.673 1.476A3.7 3.7 0 0 0 3.5 5.02h9q0-1.125-.623-2.072a4.27 4.27 0 0 0-1.664-1.476ZM6.22 3.303a.37.37 0 0 1-.267.11.35.35 0 0 1-.263-.11.37.37 0 0 1-.107-.264.37.37 0 0 1 .107-.265.35.35 0 0 1 .263-.11q.155 0 .267.11a.36.36 0 0 1 .112.265.36.36 0 0 1-.112.264m4.101 0a.35.35 0 0 1-.262.11.37.37 0 0 1-.268-.11.36.36 0 0 1-.112-.264q0-.154.112-.265a.37.37 0 0 1 .268-.11q.155 0 .262.11a.37.37 0 0 1 .107.265q0 .153-.107.264M3.5 11.77q0 .441.311.75.311.306.76.307h.758l.01 2.182q0 .414.292.703a.96.96 0 0 0 .7.288.97.97 0 0 0 .71-.288.95.95 0 0 0 .292-.703v-2.182h1.343v2.182q0 .414.292.703a.97.97 0 0 0 .71.288.97.97 0 0 0 .71-.288.95.95 0 0 0 .292-.703v-2.182h.76q.436 0 .749-.308.31-.307.311-.75V5.365h-9zm10.495-6.587a.98.98 0 0 0-.702.278.9.9 0 0 0-.293.685v4.063q0 .406.293.69a.97.97 0 0 0 .702.284q.42 0 .712-.284a.92.92 0 0 0 .293-.69V6.146a.9.9 0 0 0-.293-.685 1 1 0 0 0-.712-.278m-12.702.283a1 1 0 0 1 .712-.283q.41 0 .702.283a.9.9 0 0 1 .293.68v4.063a.93.93 0 0 1-.288.69.97.97 0 0 1-.707.284 1 1 0 0 1-.712-.284.92.92 0 0 1-.293-.69V6.146q0-.396.293-.68"/></svg>);
  if (k === 'apple')   return (<svg {...c} viewBox="0 0 16 16" aria-hidden="true"><path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516s1.52.087 2.475-1.258.762-2.391.728-2.43m3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422s1.675-2.789 1.698-2.854-.597-.79-1.254-1.157a3.7 3.7 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56s.625 1.924 1.273 2.796c.576.984 1.34 1.667 1.659 1.899s1.219.386 1.843.067c.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758q.52-1.185.473-1.282"/></svg>);
  if (k === 'windows') return (<svg {...c} viewBox="0 0 16 16" aria-hidden="true"><path d="M6.555 1.375 0 2.237v5.45h6.555zM0 13.795l6.555.933V8.313H0zm7.278-5.4.026 6.378L16 16V8.395zM16 0 7.33 1.244v6.414H16z"/></svg>);
  if (k === 'linux')   return (<svg {...c} viewBox="0 0 448 512" aria-hidden="true"><path d="M220.8 123.3c1 .5 1.8 1.7 3 1.7 1.1 0 2.8-.4 2.9-1.5.2-1.4-1.9-2.3-3.2-2.9-1.7-.7-3.9-1-5.5-.1-.4.2-.8.7-.6 1.1.3 1.3 2.3 1.1 3.4 1.7zm-21.9 1.7c1.2 0 2-1.2 3-1.7 1.1-.6 3.1-.4 3.5-1.6.2-.4-.2-.9-.6-1.1-1.6-.9-3.8-.6-5.5.1-1.3.6-3.4 1.5-3.2 2.9.1 1 1.8 1.5 2.8 1.4zM420 403.8c-3.6-4-5.3-11.6-7.2-19.7-1.8-8.1-3.9-16.8-10.5-22.4-1.3-1.1-2.6-2.1-4-2.9-1.3-.8-2.7-1.5-4.1-2 9.2-27.3 5.6-54.5-3.7-79.1-11.4-30.1-31.3-56.4-46.5-74.4-17.1-21.5-33.7-41.9-33.4-72C311.1 85.4 315.7.1 234.8 0 132.4-.2 158 103.4 156.9 135.2c-1.7 23.4-6.4 41.8-22.5 64.7-18.9 22.5-45.5 58.8-58.1 96.7-6 17.9-8.8 36.1-6.2 53.3-6.5 5.8-11.4 14.7-16.6 20.2-4.2 4.3-10.3 5.9-17 8.3s-14 6-18.5 14.5c-2.1 3.9-2.8 8.1-2.8 12.4 0 3.9.6 7.9 1.2 11.8 1.2 8.1 2.5 15.7.8 20.8-5.2 14.4-5.9 24.4-2.2 31.7 3.8 7.3 11.4 10.5 20.1 12.3 17.3 3.6 40.8 2.7 59.3 12.5 19.8 10.4 39.9 14.1 55.9 10.4 11.6-2.6 21.1-9.6 25.9-20.2 12.5-.1 26.3-5.4 48.3-6.6 14.9-1.2 33.6 5.3 55.1 4.1.6 2.3 1.4 4.6 2.5 6.7v.1c8.3 16.7 23.8 24.3 40.3 23 16.6-1.3 34.1-11 48.3-27.9 13.6-16.4 36-23.2 50.9-32.2 7.4-4.5 13.4-10.1 13.9-18.3.4-8.2-4.4-17.3-15.5-29.7zM223.7 87.3c9.8-22.2 34.2-21.8 44-.4 6.5 14.2 3.6 30.9-4.3 40.4-1.6-.8-5.9-2.6-12.6-4.9 1.1-1.2 3.1-2.7 3.9-4.6 4.8-11.8-.2-27-9.1-27.3-7.3-.5-13.9 10.8-11.8 23-4.1-2-9.4-3.5-13-4.4-1-6.9-.3-14.6 2.9-21.8zM183 75.8c10.1 0 20.8 14.2 19.1 33.5-3.5 1-7.1 2.5-10.2 4.6 1.2-8.9-3.3-20.1-9.6-19.6-8.4.7-9.8 21.2-1.8 28.1 1 .8 1.9-.2-5.9 5.5-15.6-14.6-10.5-52.1 8.4-52.1zm-13.6 60.7c6.2-4.6 13.6-10 14.1-10.5 4.7-4.4 13.5-14.2 27.9-14.2 7.1 0 15.6 2.3 25.9 8.9 6.3 4.1 11.3 4.4 22.6 9.3 8.4 3.5 13.7 9.7 10.5 18.2-2.6 7.1-11 14.4-22.7 18.1-11.1 3.6-19.8 16-38.2 14.9-3.9-.2-7-1-9.6-2.1-8-3.5-12.2-10.4-20-15-8.6-4.8-13.2-10.4-14.7-15.3-1.4-4.9 0-9 4.2-12.3zm3.3 334c-2.7 35.1-43.9 34.4-75.3 18-29.9-15.8-68.6-6.5-76.5-21.9-2.4-4.7-2.4-12.7 2.6-26.4v-.2c2.4-7.6.6-16-.6-23.9-1.2-7.8-1.8-15 .9-20 3.5-6.7 8.5-9.1 14.8-11.3 10.3-3.7 11.8-3.4 19.6-9.9 5.5-5.7 9.5-12.9 14.3-18 5.1-5.5 10-8.1 17.7-6.9 8.1 1.2 15.1 6.8 21.9 16l19.6 35.6c9.5 19.9 43.1 48.4 41 68.9zm-1.4-25.9c-4.1-6.6-9.6-13.6-14.4-19.6 7.1 0 14.2-2.2 16.7-8.9 2.3-6.2 0-14.9-7.4-24.9-13.5-18.2-38.3-32.5-38.3-32.5-13.5-8.4-21.1-18.7-24.6-29.9s-3-23.3-.3-35.2c5.2-22.9 18.6-45.2 27.2-59.2 2.3-1.7.8 3.2-8.7 20.8-8.5 16.1-24.4 53.3-2.6 82.4.6-20.7 5.5-41.8 13.8-61.5 12-27.4 37.3-74.9 39.3-112.7 1.1.8 4.6 3.2 6.2 4.1 4.6 2.7 8.1 6.7 12.6 10.3 12.4 10 28.5 9.2 42.4 1.2 6.2-3.5 11.2-7.5 15.9-9 9.9-3.1 17.8-8.6 22.3-15 7.7 30.4 25.7 74.3 37.2 95.7 6.1 11.4 18.3 35.5 23.6 64.6 3.3-.1 7 .4 10.9 1.4 13.8-35.7-11.7-74.2-23.3-84.9-4.7-4.6-4.9-6.6-2.6-6.5 12.6 11.2 29.2 33.7 35.2 59 2.8 11.6 3.3 23.7.4 35.7 16.4 6.8 35.9 17.9 30.7 34.8-2.2-.1-3.2 0-4.2 0 3.2-10.1-3.9-17.6-22.8-26.1-19.6-8.6-36-8.6-38.3 12.5-12.1 4.2-18.3 14.7-21.4 27.3-2.8 11.2-3.6 24.7-4.4 39.9-.5 7.7-3.6 18-6.8 29-32.1 22.9-76.7 32.9-114.3 7.2zm257.4-11.5c-.9 16.8-41.2 19.9-63.2 46.5-13.2 15.7-29.4 24.4-43.6 25.5s-26.5-4.8-33.7-19.3c-4.7-11.1-2.4-23.1 1.1-36.3 3.7-14.2 9.2-28.8 9.9-40.6.8-15.2 1.7-28.5 4.2-38.7 2.6-10.3 6.6-17.2 13.7-21.1.3-.2.7-.3 1-.5.8 13.2 7.3 26.6 18.8 29.5 12.6 3.3 30.7-7.5 38.4-16.3 9-.3 15.7-.9 22.6 5.1 9.9 8.5 7.1 30.3 17.1 41.6 10.6 11.6 14 19.5 13.7 24.6zM173.3 148.7c2 1.9 4.7 4.5 8 7.1 6.6 5.2 15.8 10.6 27.3 10.6 11.6 0 22.5-5.9 31.8-10.8 4.9-2.6 10.9-7 14.8-10.4s5.9-6.3 3.1-6.6-2.6 2.6-6 5.1c-4.4 3.2-9.7 7.4-13.9 9.8-7.4 4.2-19.5 10.2-29.9 10.2s-18.7-4.8-24.9-9.7c-3.1-2.5-5.7-5-7.7-6.9-1.5-1.4-1.9-4.6-4.3-4.9-1.4-.1-1.8 3.7 1.7 6.5z"/></svg>);
  return null;
}

/* ── Ecosystem — dark grid of 7 apps ─────────────────────── */
function EcosystemGrid() {
  const isMobile = useIsMobile();
  const apps = [
    { logo:window.__resources.ecoIndependent,     name:'Independent VPN',   body:tr('ecosystem.independentBody','Free Decentralized VPN on Sentinel-WireGuard & V2Ray; Android & iOS.'), href:L2.independent, builds:[{ k:'android', label:'Android', href:'https://play.google.com/store/apps/details?id=com.bagimsizvpn.app' }, { k:'apple', label:'iOS', href:'https://apps.apple.com/us/app/independent-dvpn/id6468454526' }] },
    { logo:window.__resources.ecoRyn,             name:'Ryn VPN',           body:tr('ecosystem.rynBody','Sentinel-powered privacy VPN with a clean minimalist interface and a user base of over 10 million people.'), href:L2.rynVpn, builds:[{ k:'android', label:'Android', href:'https://play.google.com/store/apps/details?id=com.secure.cryptovpn' }, { k:'apple', label:'iOS', href:'https://apps.apple.com/app/apple-store/id1493328027' }] },
    { logo:window.__resources.ecoSentinelShield, name:'Sentinel Shield',   body:tr('ecosystem.shieldBody','Flagship open-source dVPN by Sentinel P2P, WireGuard & V2Ray; Android & iOS.'), href:L2.sentinelShield, builds:[{ k:'android', label:'Android', href:'https://play.google.com/store/apps/details?id=co.sentinel.dvpnapp' }, { k:'apple', label:'iOS & macOS', href:'https://apps.apple.com/us/app/sentinel-shield-dvpn/id6657986086' }] },
    { logo:window.__resources.ecoNorse,           name:'DVPN by NORSE',     body:tr('ecosystem.norseBody','Decentralized VPN experience wrapped into user-friendly apps for all platforms.'), href:L2.norse, builds:[{ k:'android', label:'Android', href:'https://play.google.com/store/apps/details?id=io.norselabs.dvpn' }, { k:'apple', label:'iOS & macOS', href:'https://apps.apple.com/us/app/dvpn-decentralized-vpn/id6553963594' }, { k:'windows', label:'Windows', href:'https://apps.microsoft.com/detail/9ph6snjxz1v1' }, { k:'linux', label:'Linux', href:'https://norselabs.io/products/dvpn' }] },
    { logo:window.__resources.ecoValt,            name:'VALT',              body:tr('ecosystem.valtBody','VALT is the only app available that allows you to capture and protect the data you create everyday.'), href:L2.valt, builds:[{ k:'android', label:'Android', href:'https://play.google.com/store/apps/details?id=com.hashcash.breadcrumbs' }, { k:'apple', label:'iOS', href:'https://apps.apple.com/us/app/valt-dvpn/id1630660373' }] },
    { logo:window.__resources.ecoMeile,           name:'MeileVPN',          body:tr('ecosystem.meileBody','Sentinel-powered desktop dVPN for macOS, Linux & Windows.'), href:L2.meile, builds:[{ k:'apple', label:'macOS', href:'https://github.com/MathNodes/meile-gui/releases' }, { k:'windows', label:'Windows', href:'https://github.com/MathNodes/meile-gui/releases' }, { k:'linux', label:'Linux', href:'https://github.com/MathNodes/meile-gui/releases' }] },
  ];
  return (
    <section id="use-dvpn" style={{ background:'transparent', ...A.section, scrollMarginTop:90 }}>
      <style>{'.sn-eco-dl { transition:border-color 200ms cubic-bezier(.22,.61,.36,1), background 200ms cubic-bezier(.22,.61,.36,1), color 200ms cubic-bezier(.22,.61,.36,1), transform 200ms cubic-bezier(.22,.61,.36,1); } .sn-eco-dl:hover { border-color:rgba(94,148,255,0.55); background:rgba(38,112,255,0.14); color:#fff; transform:translateY(-1px); }'}</style>
      <div style={{ ...A.container, display:'flex', flexDirection:'column', gap:'clamp(36px,5vw,64px)' }}>
        <div style={{ display:'flex', flexDirection:isMobile?'column':'row', justifyContent:'space-between', alignItems:isMobile?'stretch':'flex-end', gap:isMobile?22:56 }}>
          <div style={{ ...A.sectionHead, flex:'1 1 auto', minWidth:0, marginBottom:0 }}>
            <h2 style={{ ...A.h1Dark }}>{tr('ecosystem.heading',"Don't trust a centralized VPN, trust a decentralized VPN Built on Sentinel")}</h2>
            <p style={{ ...A.leadDark }}>{tr('ecosystem.lead','dVPN Applications built on Sentinel are used by 1.4M+ users.')}</p>
          </div>
          {/* sn-netstats-moved: network-stats CTA + its CSS relocated below StatsStrip (asset 6567a9ed, sn-stats-cta) */}
        </div>
        <div style={{ display:'grid', gridTemplateColumns:isMobile?'1fr':'repeat(4,1fr)', gap:14 }}>
          {apps.map(a => (
            <div key={a.name} className="sn-card-dark"
                 style={{ background:T2.graphite750, borderRadius:24, padding:22, border:'1px solid rgba(255,255,255,0.06)', display:'flex', flexDirection:'column', gap:14 }}>
              <div data-mark="sn-eco-v2" style={{ display:'flex', alignItems:'center', gap:13 }}>
                <div style={{ width:56, height:56, borderRadius:15, background:'#0f0f10', border:'1px solid rgba(255,255,255,0.10)', display:'grid', placeItems:'center', overflow:'hidden', flexShrink:0 }}>
                  <img src={a.logo} alt={a.name} style={{ width:40, height:40, objectFit:'contain' }} />
                </div>
                <h3 style={{ fontFamily:T2.fontHeading, fontWeight:600, fontSize:17.5, lineHeight:1.2, color:'#ffffff', letterSpacing:'-0.01em', margin:0, display:'flex', alignItems:'center', gap:9, flexWrap:'wrap' }}>{a.name}{a.beta && <span style={{ fontFamily:T2.fontMono, fontSize:9.5, fontWeight:700, letterSpacing:'0.12em', color:'#9cc0ff', background:'rgba(1,86,252,0.14)', border:'1px solid rgba(94,148,255,0.32)', borderRadius:999, padding:'3px 8px', lineHeight:1, flexShrink:0 }}>BETA</span>}</h3>
              </div>
              <p style={{ fontFamily:T2.fontBody, fontSize:13, lineHeight:'20px', color:T2.onDark, margin:0, flex:1 }}>{a.body}</p>
              {/* sn-eco-downloads — per-platform store links (user 2026-06-11) */}
              <div style={{ display:'flex', flexDirection:'column', gap:9, marginTop:2 }}>
                <span style={{ fontFamily:T2.fontMono, fontSize:10, fontWeight:600, letterSpacing:'0.14em', textTransform:'uppercase', color:T2.onDark60 }}>{tr('ecosystem.downloadLabel','Download App:')}</span>
                <div style={{ display:'flex', flexWrap:'wrap', gap:8 }}>
                  {(a.builds || []).map(b => (
                    <a key={b.label} href={b.href} target="_blank" rel="noopener" className="sn-eco-dl" title={a.name + ' — ' + b.label} aria-label={a.name + ' for ' + b.label}
                       style={{ width:32, height:32, borderRadius:10, display:'inline-flex', alignItems:'center', justifyContent:'center', color:'rgba(230,236,248,0.78)', background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.10)', textDecoration:'none' }}>
                      <EcoOSIcon k={b.k} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
          {/* CTA tile — recruit builders */}
          <a href={L2.sdkDocs || '#'} className="sn-card-dark sn-eco-cta"
             style={{ background:T2.graphite750, borderRadius:24, padding:22, border:'1.5px solid #0156fc', display:'flex', flexDirection:'column', gap:14, textDecoration:'none' }}>
            <div data-mark="sn-eco-v2" style={{ display:'flex', alignItems:'center', gap:13 }}>
              <div style={{ width:56, height:56, borderRadius:15, background:'#0f0f10', border:'1px solid rgba(255,255,255,0.10)', display:'grid', placeItems:'center', flexShrink:0 }}>
              <svg width="32" height="32" viewBox="8 14 84 70" fill="#0156fc" aria-hidden="true">
                <path d="m81 16.082h-62c-5.8906 0-10.668 4.7773-10.668 10.668v46.5c0 2.8281 1.125 5.543 3.125 7.543s4.7148 3.125 7.543 3.125h62c5.8906 0 10.668-4.7773 10.668-10.668v-46.5c0-5.8906-4.7773-10.668-10.668-10.668zm4.832 57.168c0 2.668-2.1641 4.832-4.832 4.832h-62c-2.668 0-4.832-2.1641-4.832-4.832v-46.5c0-2.668 2.1641-4.832 4.832-4.832h62c1.2812 0 2.5117 0.50781 3.418 1.4141s1.4141 2.1367 1.4141 3.418zm-59.289-26.668c-1.8867 1.8867-1.8867 4.9492 0 6.8359l10 10.043v-0.003907c0.57031 0.54297 0.89062 1.2969 0.89062 2.0859 0 0.78516-0.32031 1.5391-0.89062 2.082-0.53906 0.58203-1.293 0.91406-2.0859 0.91406-0.78906 0-1.5469-0.33203-2.082-0.91406l-10.043-10c-4.1641-4.1641-4.1641-10.918 0-15.082l10.043-10c0.53516-0.58203 1.293-0.91406 2.082-0.91406 0.79297 0 1.5469 0.33203 2.0859 0.91406 0.57031 0.54297 0.89062 1.293 0.89062 2.082s-0.32031 1.5391-0.89062 2.082zm51.043-4.168-0.003907 0.003907c4.1641 4.1641 4.1641 10.918 0 15.082l-10.043 10h0.003907c-0.53906 0.58203-1.293 0.91406-2.0859 0.91406-0.78906 0-1.5469-0.33203-2.082-0.91406-0.57031-0.54297-0.89453-1.2969-0.89453-2.082 0-0.78906 0.32422-1.543 0.89453-2.0859l10-10.043v0.003907c1.8867-1.8867 1.8867-4.9492 0-6.8359l-10-10.043v0.003907c-0.57031-0.54297-0.89453-1.2969-0.89453-2.0859 0-0.78516 0.32422-1.5391 0.89453-2.082 0.53516-0.58203 1.293-0.91406 2.082-0.91406 0.79297 0 1.5469 0.33203 2.0859 0.91406z" />
              </svg>
              </div>
              <h3 style={{ fontFamily:T2.fontHeading, fontWeight:600, fontSize:17.5, lineHeight:1.2, color:'#ffffff', letterSpacing:'-0.01em', margin:0 }}>{tr('ecosystem.ctaTitle','Make your own dVPN')}</h3>
            </div>
            <p style={{ fontFamily:T2.fontBody, fontSize:13, lineHeight:'20px', color:T2.onDark, margin:0, flex:1 }}>{tr('ecosystem.ctaBody','Use the Sentinel SDK to ship your own decentralized VPN — your brand, your protocol, your distribution.')}</p>
            <span style={{ fontFamily:T2.fontBody, fontWeight:500, fontSize:13, color:T2.onDark60 }}>{tr('ecosystem.ctaStart','Start building →')}</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function EcosystemSection() {
  return (
    <>
      <TrustCompareStrip />
      <EcosystemGrid />
    </>
  );
}

Object.assign(window, {
  NodeHostingSection, AgenticPaymentsSection, SentinelDVPNSection,
  CentralizedVPNSection, BlockchainDHTSection, CompareSection, EcosystemSection,
});
