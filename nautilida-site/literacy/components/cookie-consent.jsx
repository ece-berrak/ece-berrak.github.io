// Cookie consent — TTDSG / GDPR compliant banner with three categories.
// Default state is "denied" (set in gtag-init.js via Consent Mode v2 default).
// User decision is stored in localStorage and applied via gtag('consent','update').
// Marketing tag (Leadsy) loads dynamically only after marketing consent.
//
// Reopen the banner from anywhere via:
//   window.dispatchEvent(new CustomEvent('open-cookie-settings'));
const { useState: useStateCC, useEffect: useEffectCC } = React;

const CONSENT_KEY = 'nauti_cookie_consent';
const CONSENT_VERSION = 1;

function loadConsent(){
  try {
    const raw = localStorage.getItem(CONSENT_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (parsed.version !== CONSENT_VERSION) return null;
    return parsed;
  } catch (e) { return null; }
}

function persistConsent(cats){
  const decision = {
    version: CONSENT_VERSION,
    timestamp: new Date().toISOString(),
    categories: {
      necessary: true,
      analytics: !!cats.analytics,
      marketing: !!cats.marketing,
    },
  };
  try { localStorage.setItem(CONSENT_KEY, JSON.stringify(decision)); } catch(e){}
  return decision;
}

function applyConsent(cats){
  // Update GA4 Consent Mode v2 — propagates to all gtag calls afterwards.
  if (typeof window.gtag === 'function'){
    window.gtag('consent', 'update', {
      analytics_storage:  cats.analytics ? 'granted' : 'denied',
      ad_storage:         cats.marketing ? 'granted' : 'denied',
      ad_user_data:       cats.marketing ? 'granted' : 'denied',
      ad_personalization: cats.marketing ? 'granted' : 'denied',
    });
    // Custom event so we can see accept/reject ratios in GA4 reports.
    window.gtag('event', 'cookie_consent', {
      analytics_state: cats.analytics ? 'granted' : 'denied',
      marketing_state: cats.marketing ? 'granted' : 'denied',
    });
  }
  // Conditionally load Leadsy (marketing tag) — only if user opted in.
  if (cats.marketing) loadLeadsy();
}

function loadLeadsy(){
  if (document.getElementById('vtag-ai-js')) return;
  const s = document.createElement('script');
  s.id = 'vtag-ai-js';
  s.async = true;
  s.src = 'https://r2.leadsy.ai/tag.js';
  s.setAttribute('data-pid', 'GBCVkR9nG5j40uK7');
  s.setAttribute('data-version', '062024');
  document.head.appendChild(s);
}

function CookieConsent(){
  const [decision, setDecision] = useStateCC(()=> loadConsent());
  const [forceOpen, setForceOpen] = useStateCC(false);
  const [view, setView] = useStateCC('banner'); // 'banner' or 'customize'
  const [analytics, setAnalytics] = useStateCC(()=> (loadConsent()?.categories?.analytics) || false);
  const [marketing, setMarketing] = useStateCC(()=> (loadConsent()?.categories?.marketing) || false);

  // Apply existing consent on mount + listen for "Cookie settings" reopen events.
  useEffectCC(()=>{
    const existing = loadConsent();
    if (existing) applyConsent(existing.categories);
    const onOpen = ()=>{
      const d = loadConsent();
      setAnalytics(d?.categories?.analytics || false);
      setMarketing(d?.categories?.marketing || false);
      setView('customize');
      setForceOpen(true);
    };
    window.addEventListener('open-cookie-settings', onOpen);
    return ()=> window.removeEventListener('open-cookie-settings', onOpen);
  }, []);

  const isOpen = !decision || forceOpen;
  if (!isOpen) return null;

  function close(){ setForceOpen(false); }

  function acceptAll(){
    const d = persistConsent({analytics:true, marketing:true});
    applyConsent(d.categories);
    setAnalytics(true); setMarketing(true);
    setDecision(d); close();
  }
  function rejectAll(){
    const d = persistConsent({analytics:false, marketing:false});
    applyConsent(d.categories);
    setAnalytics(false); setMarketing(false);
    setDecision(d); close();
  }
  function saveCustom(){
    const d = persistConsent({analytics, marketing});
    applyConsent(d.categories);
    setDecision(d); close();
  }

  // Common style tokens (matches site palette from index.html).
  const ink     = 'var(--ink)';
  const bone    = 'var(--bone)';
  const bone3   = 'var(--bone-3)';
  const ink_soft = 'var(--ink-soft)';
  const ink_quiet = 'var(--ink-quiet)';
  const violet  = 'var(--violet)';
  const lime    = 'var(--lime)';

  return (
    <div role="dialog" aria-label="Cookie consent" aria-modal="false"
      style={{
        position:'fixed', left:'50%', bottom:18, transform:'translateX(-50%)',
        zIndex: 9000, width:'min(720px, calc(100vw - 28px))',
        background:bone3, color:ink,
        border:`1.5px solid ${ink}`, borderRadius:14,
        boxShadow:'10px 10px 0 var(--violet)',
        padding:'22px 24px',
        font:'inherit',
      }}>
      <div className="mono" style={{fontSize:10, letterSpacing:'.16em', color:violet, marginBottom:10}}>
        ◉ {view === 'banner' ? 'COOKIES & TRACKING' : 'COOKIE SETTINGS'}
      </div>

      {view === 'banner' ? (
        <>
          <p style={{margin:'0 0 14px', fontSize:14.5, lineHeight:1.6, color:ink}}>
            We use cookies to understand how the site is used and to improve it. You can <strong>accept all</strong>, <strong>reject all</strong> non-essential, or pick categories. Reject is as easy as accept.
            {' '}
            <a href="#/privacy" onClick={(e)=>{e.preventDefault();close();window.location.hash='#/privacy';}}
              style={{color:violet, textDecoration:'underline'}}>
              Read the privacy policy →
            </a>
          </p>
          <div style={{display:'flex', gap:8, flexWrap:'wrap', alignItems:'center'}}>
            <button onClick={acceptAll} className="btn btn-primary" style={{padding:'9px 16px', fontSize:13}}>
              Accept all <span className="arrow">→</span>
            </button>
            <button onClick={rejectAll} className="btn" style={{padding:'9px 16px', fontSize:13}}>
              Reject all
            </button>
            <button onClick={()=>setView('customize')} className="btn" style={{padding:'9px 16px', fontSize:13, marginLeft:'auto'}}>
              Customize
            </button>
          </div>
        </>
      ) : (
        <>
          <p style={{margin:'0 0 14px', fontSize:13.5, lineHeight:1.55, color:ink_soft}}>
            Pick the categories you allow. Necessary cookies always run because the site cannot function without them.
          </p>
          <div style={{display:'flex', flexDirection:'column', gap:10, marginBottom:14}}>
            <CookieRow
              label="Necessary"
              desc="Essential cookies (page routing, form CSRF). Always on."
              on={true} disabled={true} onChange={()=>{}}
            />
            <CookieRow
              label="Analytics"
              desc="Google Analytics 4. Aggregated page views and events. IP anonymized. No personal data sold."
              on={analytics} disabled={false} onChange={(v)=>setAnalytics(v)}
            />
            <CookieRow
              label="Marketing"
              desc="Leadsy — visitor tracking and lead capture for the waitlist. Loads only if you allow."
              on={marketing} disabled={false} onChange={(v)=>setMarketing(v)}
            />
          </div>
          <div style={{display:'flex', gap:8, flexWrap:'wrap', alignItems:'center'}}>
            <button onClick={saveCustom} className="btn btn-primary" style={{padding:'9px 16px', fontSize:13}}>
              Save settings <span className="arrow">→</span>
            </button>
            <button onClick={rejectAll} className="btn" style={{padding:'9px 16px', fontSize:13}}>
              Reject all
            </button>
            <button onClick={acceptAll} className="btn" style={{padding:'9px 16px', fontSize:13}}>
              Accept all
            </button>
            <button onClick={()=>setView('banner')} className="mono" style={{
              background:'transparent', border:'none', color:ink_quiet, cursor:'pointer',
              fontSize:11, letterSpacing:'.14em', marginLeft:'auto', padding:'9px 6px',
            }}>
              ← BACK
            </button>
          </div>
        </>
      )}
    </div>
  );
}

function CookieRow({label, desc, on, disabled, onChange}){
  return (
    <div style={{
      display:'grid', gridTemplateColumns:'1fr auto', gap:14, alignItems:'center',
      padding:'12px 14px',
      background:'var(--bone)', border:'1px solid var(--ink-line-2)', borderRadius:10,
    }}>
      <div>
        <div className="display" style={{fontSize:14, letterSpacing:'-.005em', lineHeight:1.15, marginBottom:3, textTransform:'none'}}>{label}</div>
        <div style={{fontSize:12.5, color:'var(--ink-soft)', lineHeight:1.5}}>{desc}</div>
      </div>
      <Toggle on={on} disabled={disabled} onChange={onChange}/>
    </div>
  );
}

function Toggle({on, disabled, onChange}){
  return (
    <button
      role="switch"
      aria-checked={on}
      disabled={disabled}
      onClick={()=>!disabled && onChange(!on)}
      style={{
        width:42, height:24, borderRadius:999,
        background: disabled ? 'var(--bone-2)' : (on ? 'var(--lime)' : 'var(--bone-2)'),
        border:`1.5px solid var(--ink)`,
        position:'relative', cursor: disabled ? 'not-allowed' : 'pointer',
        transition:'background .2s ease',
        padding:0,
        opacity: disabled ? 0.6 : 1,
      }}>
      <span style={{
        position:'absolute',
        left: on ? 'auto' : 2, right: on ? 2 : 'auto', top:2,
        width:17, height:17, borderRadius:999,
        background:'var(--ink)',
        transition:'left .2s ease, right .2s ease',
      }}/>
    </button>
  );
}

Object.assign(window, {CookieConsent});
