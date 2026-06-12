// @ts-nocheck
/* eslint-disable */
// Ported verbatim from the original browser bundle. See tools/port-to-tsx.js.
import '../lib/globals';
import './sections-2';

/* ============================================================
   Sentinel · Outro — ContactSection + Footer
   ============================================================ */
const T3 = window.SENTINEL;
const L3 = window.SENTINEL_LINKS;
const { atomStyles: A3, SentinelMark, BtnPrimary } = window;
const { useState: useS } = React;
const useIsMobileO = window.useIsMobile;

/* i18n: translate at render time (window.T is reassigned per request/locale). */
const tr = (k, f) => (typeof window !== 'undefined' && window.T ? window.T(k, f) : (f != null ? f : k));

/* ── Primary community card — brand-colored logo ─────────── */
function CommunityCard({ icon, name, handle, color, href }) {
  const [hovered, setHovered] = useS(false);
  return (
    <a href={href} target="_blank" rel="noopener"
       onMouseEnter={() => setHovered(true)}
       onMouseLeave={() => setHovered(false)}
       style={{
         position:'relative', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:14, textAlign:'center',
         borderRadius:20, border: `1px solid ${hovered ? color : '#ececec'}`,
         background: hovered ? color : `linear-gradient(170deg, ${color}0F 0%, #ffffff 62%)`,
         padding:'26px 20px 22px', textDecoration:'none', boxSizing:'border-box', overflow:'hidden',
         minWidth:0,
         transition:'all 240ms cubic-bezier(.22,.61,.36,1)',
         transform: hovered ? 'translateY(-3px)' : 'none',
         boxShadow: hovered ? `0 16px 32px ${color}38` : '0 1px 2px rgba(0,0,0,0.03)',
       }}>
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"
           style={{ position:'absolute', top:16, right:16, opacity: hovered ? 1 : 0.3, transform: hovered ? 'translate(2px,-2px)' : 'none', transition:'all 240ms' }}>
        <path d="M1 13L13 1M13 1H4.5M13 1V9.5" stroke={hovered ? '#fff' : 'rgba(0,0,0,0.6)'} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <span style={{ width:64, height:64, borderRadius:19, display:'grid', placeItems:'center', background: hovered ? 'rgba(255,255,255,0.18)' : `${color}14`, color: hovered ? '#fff' : color, transition:'all 240ms', flexShrink:0 }}>
        <span style={{ display:'inline-flex', transform:'scale(1.5)', transformOrigin:'center' }}>{icon}</span>
      </span>
      <div style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:3, minWidth:0, maxWidth:'100%' }}>
        <span style={{ fontFamily:T3.fontHeading, fontWeight:600, fontSize:18, lineHeight:1.2, color: hovered ? '#fff' : 'rgba(0,0,0,0.85)', transition:'color 240ms' }}>{name}</span>
        <span style={{ fontFamily:T3.fontBody, fontSize:13, lineHeight:'18px', color: hovered ? 'rgba(255,255,255,0.78)' : 'rgba(0,0,0,0.45)', transition:'color 240ms', overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap', maxWidth:'100%' }}>{handle}</span>
      </div>
    </a>
  );
}

/* ── Secondary community pill ────────────────────────────── */
function CommunityPill({ icon, label, color, href }) {
  const [hovered, setHovered] = useS(false);
  return (
    <a href={href} target="_blank" rel="noopener"
       onMouseEnter={() => setHovered(true)}
       onMouseLeave={() => setHovered(false)}
       style={{
         display:'inline-flex', alignItems:'center', gap:8, padding:'8px 16px 8px 12px',
         borderRadius:9999, border: `1px solid ${hovered ? color : '#ececec'}`,
         background: hovered ? `${color}0F` : '#fff', textDecoration:'none',
         transition:'all 200ms cubic-bezier(.22,.61,.36,1)', boxSizing:'border-box',
       }}>
      <span style={{ display:'inline-flex', alignItems:'center', justifyContent:'center', color, flexShrink:0, transform:'scale(0.78)', transformOrigin:'center' }}>{icon}</span>
      <span style={{ fontFamily:T3.fontBody, fontSize:13, fontWeight:500, color: hovered ? 'rgba(0,0,0,0.82)' : 'rgba(0,0,0,0.6)', whiteSpace:'nowrap', transition:'color 200ms' }}>{label}</span>
    </a>
  );
}

/* ── Community icon SVGs ─────────────────────────────────── */
const IconX = () => (
  <svg width="21" height="20" viewBox="0 0 21.123 19.093" fill="currentColor">
    <path d="M16.635 0l3.239 0L12.798 8.088 21.123 19.093l-6.518 0L9.5 12.418 3.658 19.093l-3.241 0 7.569-8.651L0 0l6.684 0 4.614 6.101L16.635 0ZM15.499 17.154l1.794 0L5.708 1.837 3.782 1.837 15.499 17.154Z"/>
  </svg>
);
const IconTelegram = () => (
  <svg width="22" height="19" viewBox="0 0 24 21" fill="currentColor">
    <path d="M23.9 1.8L20.2 20c-.3 1.3-1.1 1.6-2.2 1L12 16.6l-2.9 2.8c-.3.3-.6.6-1.2.6l.4-5.8L19.8 3.3c.5-.4-.1-.6-.7-.2L4.6 13.5 0 12.1C-1 11.8-1 11.1.4 10.5l22.1-8.5c.9-.4 1.8.3 1.4 1.8Z"/>
  </svg>
);
const IconGitHub = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
);
const IconDiscord = () => (
  <svg width="24" height="18" viewBox="0 0 24 18" fill="currentColor">
    <path d="M20.317 1.492a19.84 19.84 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 1.49a.07.07 0 0 0-.032.027C.533 6.093-.32 10.555.099 14.961a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 12.278c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
  </svg>
);
const IconYouTube = () => (
  <svg width="26" height="19" viewBox="0 0 24 17" fill="currentColor">
    <path d="M23.495 2.659a3.011 3.011 0 0 0-2.12-2.132C19.505 0 12 0 12 0S4.495 0 2.625.527a3.011 3.011 0 0 0-2.12 2.132C0 4.545 0 8.5 0 8.5s0 3.955.505 5.841a3.011 3.011 0 0 0 2.12 2.132C4.495 17 12 17 12 17s7.505 0 9.375-.527a3.011 3.011 0 0 0 2.12-2.132C24 12.455 24 8.5 24 8.5s0-3.955-.505-5.841zM9.545 12.068V4.932L15.818 8.5l-6.273 3.568z"/>
  </svg>
);
const IconGrowthDAO = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/>
  </svg>
);
const IconP2P = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
  </svg>
);
const IconBluesky = () => (
  <svg width="22" height="20" viewBox="0 0 24 21" fill="currentColor">
    <path d="M12 2.163c-3.204 0-6.277 2.082-6.277 5.68 0 1.97.805 3.29 1.932 4.18-1.145.13-3.655.65-3.655 3.283 0 2.384 2.115 3.694 5 3.694 1.91 0 3.467-.567 4.5-.567s2.59.567 4.5.567c2.885 0 5-1.31 5-3.694 0-2.633-2.51-3.153-3.655-3.283 1.127-.89 1.932-2.21 1.932-4.18 0-3.598-3.073-5.68-6.277-5.68z"/>
  </svg>
);

/* ── Contact + Community ─────────────────────────────────── */
function ContactSection() {
  const isMobile = useIsMobileO();
  const [agree, setAgree] = useS(false);
  const [form, setForm] = useS({ first:'', last:'', email:'', project:'', message:'' });
  const set = k => e => setForm(f => ({ ...f, [k]: e.target.value }));

  const primary = [
    { icon:<IconTelegram />, name:'Telegram',    handle:'@sentinelp2p',      color:'#229ED9', href:L3.telegram },
    { icon:<IconX />,        name:'X / Twitter', handle:'@sentinelp2p',      color:'#0F1419', href:L3.twitter  },
    { icon:<IconDiscord />,  name:'Discord',     handle:'Sentinel Network',  color:'#5865F2', href:L3.discord  },
    { icon:<IconGitHub />,   name:'GitHub',      handle:'sentinel-official', color:'#24292F', href:L3.github   },
  ];
  const secondary = [
    { icon:<IconYouTube />,  label:'YouTube',    color:'#FF0000', href:L3.youtube   },
    { icon:<IconTelegram />, label:'Growth DAO', color:'#229ED9', href:L3.growthDao },
    { icon:<IconTelegram />, label:'p2p News',   color:'#229ED9', href:L3.p2pNews   },
    { icon:<IconX />,        label:'Bluefrens',  color:'#0F1419', href:L3.bluefrens },
  ];

  const fieldStyle = {
    width:'100%', boxSizing:'border-box', height:54, padding:'0 18px',
    borderRadius:14, border:'1px solid transparent',
    background:'#f6f7f9',
    fontFamily:T3.fontBody, fontSize:14.5, color:'rgba(0,0,0,0.85)',
    outline:'none', transition:'border-color 200ms, background 200ms, box-shadow 200ms',
  };
  const textareaStyle = { ...fieldStyle, height:'auto', minHeight:120, padding:'15px 18px',
    resize:'vertical', lineHeight:'22px' };
  const fieldLabel = { fontFamily:T3.fontBody, fontWeight:600, fontSize:11, letterSpacing:'0.12em', textTransform:'uppercase', color:'rgba(0,0,0,0.38)' };
  const focusOn  = e => { e.target.style.borderColor='#0156FC'; e.target.style.background='#fff'; e.target.style.boxShadow='0 0 0 3px rgba(1,86,252,0.10)'; };
  const focusOff = e => { e.target.style.borderColor='transparent'; e.target.style.background='#f6f7f9'; e.target.style.boxShadow='none'; };

  // contact form hidden for now — flip to true to bring it back
  const SHOW_CONTACT_FORM = false;

  return (
    <section style={{ background:'radial-gradient(900px 420px at 86% -6%, rgba(1,86,252,0.05), transparent 60%), linear-gradient(180deg, #fbfbfb 0%, #f3f5fa 100%)', padding:'clamp(56px,8vw,120px) 0' }}>
      <div style={{ maxWidth:1320, margin:'0 auto', padding:'0 clamp(16px, 2.5vw, 24px)', boxSizing:'border-box' }}>
        <div style={{ background:T3.white, borderRadius:24, padding:'clamp(28px, 5vw, 56px) clamp(22px, 5vw, 64px)', display:'grid', gridTemplateColumns:(isMobile || !SHOW_CONTACT_FORM)?'1fr':'1fr 1fr', gap:isMobile?44:'clamp(32px, 5vw, 64px)', maxWidth:SHOW_CONTACT_FORM?'none':880, margin:'0 auto', boxSizing:'border-box' }}>

          {/* LEFT — Community (centered while the contact form is hidden) */}
          <div style={{ display:'flex', flexDirection:'column', gap:28 }}>
            <div style={{ display:'flex', flexDirection:'column', gap:10, textAlign:SHOW_CONTACT_FORM?'left':'center' }}>
              <h2 style={{ fontFamily:T3.fontHeading, fontWeight:700, fontSize:'clamp(31px,6vw,48px)', lineHeight:1.12, color:'rgba(0,0,0,0.8)', margin:0, letterSpacing:'-0.005em' }}>{tr('community.heading', 'Join the Community')}</h2>
              <p style={{ fontFamily:T3.fontBody, fontSize:16, lineHeight:'22px', color:'rgba(0,0,0,0.5)', margin:0 }}>{tr('community.subtitle', 'The Sentinel community goes beyond the chain.')}</p>
            </div>
            {/* primary networks — Telegram / X / Discord / GitHub */}
            <div style={{ display:'grid', gridTemplateColumns:isMobile?'1fr':'1fr 1fr', gap:12 }}>
              {primary.map(c => (
                <CommunityCard key={c.name} icon={c.icon} name={c.name} handle={c.handle} color={c.color} href={c.href} />
              ))}
            </div>
            {/* secondary channels */}
            <div style={{ display:'flex', flexDirection:'column', gap:12, alignItems:SHOW_CONTACT_FORM?'flex-start':'center' }}>
              <span style={{ fontFamily:T3.fontBody, fontWeight:600, fontSize:11, letterSpacing:'0.14em', textTransform:'uppercase', color:'rgba(0,0,0,0.35)' }}>{tr('community.more', 'More from the community')}</span>
              <div style={{ display:'flex', flexWrap:'wrap', gap:8, justifyContent:SHOW_CONTACT_FORM?'flex-start':'center' }}>
                {secondary.map(c => (
                  <CommunityPill key={c.label} icon={c.icon} label={c.label} color={c.color} href={c.href} />
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT — Contact form (hidden for now via SHOW_CONTACT_FORM) */}
          {SHOW_CONTACT_FORM && (
          <form onSubmit={e => e.preventDefault()} style={{ display:'flex', flexDirection:'column', gap:24 }}>
            <div style={{ display:'flex', flexDirection:'column', gap:10 }}>
              <h2 style={{ fontFamily:T3.fontHeading, fontWeight:700, fontSize:'clamp(31px,6vw,48px)', lineHeight:1.12, color:'rgba(0,0,0,0.8)', margin:0, letterSpacing:'-0.005em' }}>Let's Build Together</h2>
              <p style={{ fontFamily:T3.fontBody, fontSize:16, lineHeight:'24px', color:'rgba(0,0,0,0.5)', margin:0 }}>Shipping a dVPN, integrating an SDK, or applying for a grant? Tell us what you're working on and we'll connect you with the right tools, partners, and people.</p>
            </div>
            <div style={{ display:'flex', flexDirection:'column', gap:16 }}>
              <div style={{ display:'flex', flexDirection:'column', gap:7 }}>
                <span style={fieldLabel}>Name</span>
                <div style={{ display:'grid', gridTemplateColumns:isMobile?'1fr':'1fr 1fr', gap:10 }}>
                  <input style={fieldStyle} placeholder="First name" value={form.first} onChange={set('first')} onFocus={focusOn} onBlur={focusOff} required />
                  <input style={fieldStyle} placeholder="Last name" value={form.last} onChange={set('last')} onFocus={focusOn} onBlur={focusOff} required />
                </div>
              </div>
              <div style={{ display:'flex', flexDirection:'column', gap:7 }}>
                <span style={fieldLabel}>Email</span>
                <input style={fieldStyle} type="email" placeholder="you@yourproject.com" value={form.email} onChange={set('email')} onFocus={focusOn} onBlur={focusOff} required />
              </div>
              <div style={{ display:'flex', flexDirection:'column', gap:7 }}>
                <span style={fieldLabel}>Project</span>
                <input style={fieldStyle} placeholder="What are you building? A dVPN app, node fleet, integration…" value={form.project} onChange={set('project')} onFocus={focusOn} onBlur={focusOff} required />
              </div>
              <div style={{ display:'flex', flexDirection:'column', gap:7 }}>
                <span style={fieldLabel}>Message</span>
                <textarea style={textareaStyle} placeholder="Where are you today — idea, prototype, or live product — and where could you use a hand?" value={form.message} onChange={set('message')} rows={4} onFocus={focusOn} onBlur={focusOff} />
              </div>
            </div>
            <label style={{ display:'inline-flex', alignItems:'flex-start', gap:12, fontFamily:T3.fontBody, fontSize:14, color:'rgba(0,0,0,0.5)', cursor:'pointer', lineHeight:'20px' }}>
              <span onClick={()=>setAgree(v=>!v)}
                    style={{ width:20, height:20, minWidth:20, borderRadius:6, border: agree ? '1.5px solid #0156FC' : '1.5px solid rgba(0,0,0,0.3)', display:'inline-grid', placeItems:'center', background: agree ? '#0156FC' : 'transparent', transition:'all 200ms', marginTop:1 }}>
                {agree && <svg width="11" height="8" viewBox="0 0 11 8" fill="none"><path d="M1 4L4 7L10 1" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>}
              </span>
              <span>I agree to the <a href={L3.privacy} target="_blank" rel="noopener" style={{ color:'#0156FC', textDecoration:'none', fontWeight:500 }}>privacy policy</a>.</span>
            </label>
            <div style={{ display:'flex', alignItems:'center', gap:16, flexWrap:'wrap' }}>
              <button type="submit"
                      style={{ display:'inline-flex', alignItems:'center', gap:10, height:52, padding:'0 30px',
                               borderRadius:9999, border:'none', background:'#0156FC', color:'#fff',
                               fontFamily:T3.fontHeading, fontWeight:500, fontSize:15.5, cursor:'pointer',
                               transition:'all 200ms cubic-bezier(.22,.61,.36,1)', boxShadow:'0 8px 20px rgba(1,86,252,0.25)' }}
                      onMouseEnter={e=>{ e.currentTarget.style.background='#0143C9'; e.currentTarget.style.transform='translateY(-1px)'; e.currentTarget.style.boxShadow='0 12px 26px rgba(1,86,252,0.32)'; }}
                      onMouseLeave={e=>{ e.currentTarget.style.background='#0156FC'; e.currentTarget.style.transform='none'; e.currentTarget.style.boxShadow='0 8px 20px rgba(1,86,252,0.25)'; }}>
                Send Message
                <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M1 13L13 1M13 1H4.5M13 1V9.5" stroke="#fff" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
            </div>
          </form>
          )}

        </div>
      </div>
    </section>
  );
}

/* ── Footer ──────────────────────────────────────────────── */
function Footer() {
  const isMobile = useIsMobileO();
  const cols = [
    { head:'Explore', headKey:'nav.explore', links:[
      ['Network Statistics', L3.stats,    'footer.exploreStats'],
      ['Node Dashboard',     L3.nodes,    'footer.exploreDashboard'],
      ['Node Map',           L3.nodeMap,  'footer.exploreNodeMap'],
      ['Explorer',           L3.explorer, 'footer.exploreExplorer'],
    ]},
    { head:'dVPN', headKey:'nav.dvpn', links:[
      ['Sentinel Shield',    L3.sentinelShield, 'footer.dvpnShield'],
      ['Independent VPN',    L3.independent,     'footer.dvpnIndependent'],
      ['DVPN by NORSE',      L3.norse,           'footer.dvpnNorse'],
      ['VALT',               L3.valt,            'footer.dvpnValt'],
      ['Ryn dVPN',           L3.rynVpn,          'footer.dvpnRyn'],
      ['Meile dVPN (beta)',  L3.meile,           'footer.dvpnMeile'],
    ]},
    { head:'Build', headKey:'nav.build', links:[
      ['Plan Manager',       L3.planManager,  'footer.buildPlanManager'],
      ['SDKs',               L3.sdkDocs,       'footer.buildSdks'],
      ['Configure Payment',  L3.subplanDocs,   'footer.buildPayments'],
      ['Run a Node',         L3.hostNode,      'footer.buildRunNode'],
      ['Earn from dVPN',     L3.nodeEarnings,  'footer.buildEarn'],
      ['Learn',              L3.docs,          'footer.buildLearn'],
    ]},
    { head:'More', headKey:'nav.more', links:[
      ['dVPN Docs',           L3.docs,    'footer.moreDocs'],
      ['x402 Payments',       L3.x402,    'footer.moreX402'],
      ['Sentinel Node Tester', L3.testNode, 'footer.moreNodeTester'],
      ['Contact Us',          L3.telegram, 'footer.moreContact'],
    ]},
  ];

  return (
    <footer style={{ background:`url("${(window.__resources&&window.__resources.meshBg)||'../../assets/textures/mesh-bg-faint.png'}") center/cover no-repeat, url("${(window.__resources&&window.__resources.noiseBg)||'../../assets/textures/noise-bg.png'}") center/cover no-repeat, radial-gradient(ellipse at center, #1c1c1c 0%, #0c0c0c 100%)`, position:'relative', overflow:'hidden', paddingTop:80, paddingBottom:0 }}>


      <div style={{ position:'relative', maxWidth:1440, margin:'0 auto', padding:'0 clamp(20px, 3vw, 40px)', boxSizing:'border-box' }}>
        {/* Sitemap row */}
        <div style={{ display:'flex', flexDirection:isMobile?'column':'row', gap:isMobile?32:48, marginBottom:isMobile?48:64 }}>
          {/* Logo */}
          <div style={{ flexShrink:0 }}>
            <SentinelMark size={42} color="#0156FC" />
          </div>
          {/* Columns */}
          <div style={{ flex:1, display:'grid', gridTemplateColumns:isMobile?'repeat(2,1fr)':'repeat(4,1fr)', gap:isMobile?'28px 20px':32 }}>
            {cols.map(c => (
              <div key={c.head}>
                <div style={{ fontFamily:T3.fontHeading, fontWeight:500, fontSize:15, color:'rgba(234,234,234,0.9)', marginBottom:18, letterSpacing:'0.02em' }}>{tr(c.headKey, c.head)}</div>
                {c.links.map(([label, url, labelKey]) => (
                  <a key={label} href={url} target="_blank" rel="noopener" style={{ display:'block', fontFamily:T3.fontBody, fontSize:14, lineHeight:'26px', color:'rgba(234,234,234,0.55)', textDecoration:'none', padding:'3px 0', transition:'color 200ms' }}
                     onMouseEnter={e=>e.target.style.color='rgba(234,234,234,0.9)'}
                     onMouseLeave={e=>e.target.style.color='rgba(234,234,234,0.55)'}>{tr(labelKey, label)}</a>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Giant wordmark */}
        <div style={{ fontFamily:T3.fontHeading, fontWeight:600, fontSize:'clamp(48px,16vw,220px)', lineHeight:1, color:'rgba(234,234,234,0.9)', letterSpacing:'-0.02em', textAlign:'center', userSelect:'none', marginTop:8, paddingBottom:16 }}>
          Sentinel
        </div>

        {/* Bottom bar */}
        <div style={{ display:'flex', flexDirection:isMobile?'column':'row', alignItems:isMobile?'flex-start':'center', justifyContent:'space-between', gap:isMobile?16:0, paddingTop:18, borderTop:'1px solid rgba(255,255,255,0.06)', paddingBottom:28 }}>
          <div style={{ display:'flex', gap:22, alignItems:'center' }}>
            {[
              ['Sentinel © 2026', L3.home,    'footer.copyright'],
              ['Privacy Policy',  L3.privacy, 'footer.privacyPolicy'],
            ].map(([label, url, labelKey]) => (
              <a key={label} href={url} target="_blank" rel="noopener" style={{ fontFamily:T3.fontBody, fontSize:13, color:'rgba(255,255,255,0.45)', textDecoration:'none' }}>{tr(labelKey, label)}</a>
            ))}
          </div>
          <div style={{ display:'flex', gap:16, alignItems:'center' }}>
            {[
              { label:'X / Twitter', path:'M16.6 0h3.2l-7 8 8.3 11h-6.5l-5.1-6.7L3.7 19H.4l7.6-8.7L0 0h6.7l4.6 6.1L16.6 0zm-1.1 17.2h1.8L5.7 1.8H3.8l11.7 15.4z' },
              { label:'Telegram', path:'M21.6 1.3 18.5 18c-.2 1.1-.9 1.4-1.8.9l-5-3.7-2.4 2.3c-.3.3-.5.5-1 .5l.3-4.9 9-8.1c.4-.3-.1-.5-.6-.2L5.9 11.7l-4.7-1.5C.2 9.8.2 9.1 1.4 8.6L20.3.7c.9-.3 1.7.3 1.3 2z' },
            ].map(s => (
              <a key={s.label} href="#" aria-label={s.label}
                 style={{ color:'rgba(255,255,255,0.45)', display:'grid', placeItems:'center', transition:'color 200ms' }}
                 onMouseEnter={e=>e.currentTarget.style.color='rgba(255,255,255,0.85)'}
                 onMouseLeave={e=>e.currentTarget.style.color='rgba(255,255,255,0.45)'}>
                <svg width="18" height="18" viewBox="0 0 22 22" fill="currentColor">
                  <path d={s.path}/>
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { ContactSection, Footer });
