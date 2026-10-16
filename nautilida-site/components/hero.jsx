// Hero — cream page, heavy display headline, lime sticker accent, black Ask Nauti island
const { useEffect: useEffectH, useState: useStateH, useRef: useRefH } = React;

function useTypewriter(text, speed=22, startDelay=0, deps=[]){
  const [out,setOut] = useStateH('');
  useEffectH(()=>{
    setOut('');
    let i = 0, to1, to2;
    to1 = setTimeout(()=>{
      const tick = () => {
        i++;
        setOut(text.slice(0,i));
        if (i < text.length) to2 = setTimeout(tick, speed);
      };
      tick();
    }, startDelay);
    return ()=>{ clearTimeout(to1); clearTimeout(to2); };
  }, deps);
  return out;
}

// Headlines — [main display, smaller inline tail].  Rendered side-by-side on one line.
const HERO_LINES = {
  teamlead: ['AI TEAM LEAD',     'for sales teams.'],
  rhythm:   ['A WEEKLY RHYTHM',  'reps actually keep.'],
  stack:    ['ONE BRIEF.',       'whole revenue stack.'],
};

// Black "Ask Nauti" island — single source of motion in the hero.
function AskNautiDemo(){
  const prompts = [
    "Why did Acme's order health drop this week?",
    "Which orders missed expected close in the last 14 days?",
    "What changed across my AMs since Monday?",
  ];
  const [step,setStep] = useStateH(0);
  const q = prompts[step % prompts.length];
  const typed = useTypewriter(q, 28, 300, [step]);
  const [showAnswer,setShowAnswer] = useStateH(false);
  useEffectH(()=>{
    setShowAnswer(false);
    const t1 = setTimeout(()=>setShowAnswer(true), 300 + q.length*28 + 400);
    const t2 = setTimeout(()=>setStep(s=>s+1), 300 + q.length*28 + 4400);
    return ()=>{ clearTimeout(t1); clearTimeout(t2); };
  },[step]);

  const answers = [
    { signals:[
        {src:'HubSpot',  text:'Order health: 82 → 54 · AOV down 18% wk/wk'},
        {src:'HubSpot',  text:'Champion (Ops Lead) silent on thread for 9 days'},
        {src:'Teams',    text:'Buyer re-opened the procurement checklist'},
      ],
      verdict:'Risk: champion drift. Reopen the loop with Ops Lead before Friday recap.' },
    { signals:[
        {src:'HubSpot',  text:'3 orders past expected close > 14 days'},
        {src:'HubSpot',  text:'Order tag missing on 2 of 3 — destination unclear'},
        {src:'Teams',    text:'Procurement copied late on the third thread'},
      ],
      verdict:'Pattern: handoff gap on multi-line orders. Tag + loop in ops today.' },
    { signals:[
        {src:'HubSpot',  text:'+$840k new order pipeline created'},
        {src:'HubSpot',  text:'2 orders slipped past expected revenue date'},
        {src:'Teams',    text:'AM thread on Globex went quiet for 6 days'},
      ],
      verdict:'Net: pipeline strong, but Globex needs exec air-cover this week.' },
  ];
  const a = answers[step % answers.length];

  return (
    <div className="card-ink" style={{
      width:'100%',maxWidth:520,
      boxShadow:'10px 10px 0 var(--ink), 0 18px 40px rgba(14,13,20,.18)',
      overflow:'hidden',
    }}>
      <div style={{display:'flex',alignItems:'center',gap:10,padding:'12px 14px',borderBottom:'1px solid rgba(255,255,255,.10)'}}>
        <span style={{width:8,height:8,borderRadius:999,background:'var(--lime)',boxShadow:'0 0 12px var(--lime)'}}/>
        <span className="mono" style={{fontSize:11,color:'rgba(250,248,241,.65)',letterSpacing:'.08em'}}>ASK NAUTI · live · ⌘K from anywhere</span>
        <span style={{flex:1}}/>
        <span className="mono" style={{fontSize:10,color:'rgba(250,248,241,.45)'}}>chat</span>
      </div>
      <div style={{padding:'18px 18px 6px'}}>
        <div className="mono" style={{fontSize:11,color:'rgba(250,248,241,.5)',letterSpacing:'.1em'}}>YOU</div>
        <div style={{fontSize:18,marginTop:6,minHeight:54,letterSpacing:'-.01em'}}>
          {typed}<span style={{display:'inline-block',width:8,height:18,background:'var(--lime)',marginLeft:2,verticalAlign:'-3px',animation:'blink 1s steps(2) infinite'}}/>
        </div>
      </div>
      <div style={{padding:'10px 18px 18px'}}>
        <div className="mono" style={{fontSize:11,color:'var(--lime)',letterSpacing:'.1em',display:'flex',alignItems:'center',gap:8}}>
          <span style={{width:6,height:6,borderRadius:999,background:'var(--lime)'}}/> NAUTI
        </div>
        <div style={{minHeight:160,marginTop:8,opacity: showAnswer?1:0, transform:`translateY(${showAnswer?0:6}px)`, transition:'opacity .4s ease, transform .4s ease'}}>
          <div className="mono" style={{fontSize:10,color:'rgba(250,248,241,.45)',letterSpacing:'.12em',marginBottom:8}}>EVIDENCE · 3 SIGNALS · YOUR REVENUE STACK</div>
          {a.signals.map((s,i)=>(
            <div key={i} style={{display:'grid',gridTemplateColumns:'70px 1fr',gap:10,alignItems:'center',padding:'9px 10px',marginBottom:6,
              background:'rgba(255,255,255,.04)',border:'.5px solid rgba(255,255,255,.08)',borderRadius:8,fontSize:13}}>
              <span className="mono" style={{fontSize:10,color:'var(--lime)',letterSpacing:'.08em'}}>{s.src.toUpperCase()}</span>
              <span style={{color:'rgba(250,248,241,.85)'}}>{s.text}</span>
            </div>
          ))}
          <div style={{marginTop:12,padding:'12px 14px',borderRadius:10,
            background:'var(--lime)',color:'var(--ink)',fontSize:13.5,fontWeight:500,
            boxShadow:'inset 0 0 0 1px rgba(14,13,20,.2)'}}>
            <span className="mono" style={{fontSize:10,letterSpacing:'.12em',marginRight:8,color:'var(--ink)'}}>VERDICT</span>{a.verdict}
          </div>
        </div>
      </div>
      <style>{`@keyframes blink{50%{opacity:0}}`}</style>
    </div>
  );
}

function HeroStat({value, suffix='', decimals=0, label}){
  const [ref, out] = useCountUp(value, {duration:1600, suffix, decimals});
  return (
    <div style={{display:'flex',flexDirection:'column',minWidth:120}}>
      <span ref={ref} className="display" style={{fontSize:38,lineHeight:1,color:'var(--ink)',fontVariantNumeric:'tabular-nums',letterSpacing:'-.02em',whiteSpace:'nowrap'}}>{out}</span>
      <span className="mono" style={{fontSize:10,color:'var(--ink-quiet)',letterSpacing:'.14em',marginTop:10,textTransform:'uppercase'}}>{label}</span>
    </div>
  );
}

// Product video — blurred mock-UI poster as fallback; real <video> on top, blurred by default.
// On hover: video plays (sound on, mute fallback) AND the wrapper morphs to the video's
// native aspect ratio so the full content fits with no crop.
function HeroVideo({src, wide=false}){
  const ref = React.useRef(null);
  const wrapRef = React.useRef(null);
  const onMeta = (e)=>{
    const v = e.currentTarget;
    if (v.videoWidth && v.videoHeight && wrapRef.current){
      wrapRef.current.style.setProperty('--vid-aspect', `${v.videoWidth} / ${v.videoHeight}`);
    }
  };
  const onEnter = ()=>{
    const v = ref.current; if (!v) return;
    v.muted = false;
    v.play().catch(()=>{ v.muted = true; v.play().catch(()=>{}); });
  };
  const onLeave = ()=>{
    const v = ref.current; if (!v) return;
    v.pause(); v.muted = true;
  };
  return (
    <div ref={wrapRef} className={'hv'+(wide?' hv-wide':'')} onMouseEnter={onEnter} onMouseLeave={onLeave}>
      {/* Blurred poster — a stylized fake-product UI so the frame reads even with no video file */}
      <div className="hv-blur" style={{
        background:'linear-gradient(155deg, #15121E 0%, #1F1A36 45%, #2A1F4A 100%)',
        padding:'22px 24px',
      }}>
        <div style={{display:'flex',alignItems:'center',gap:8,marginBottom:18}}>
          <span style={{width:8,height:8,borderRadius:999,background:'var(--lime)'}}/>
          <span className="mono" style={{fontSize:10,color:'rgba(250,248,241,.7)',letterSpacing:'.14em'}}>NAUTI · MONDAY 7:00</span>
        </div>
        <div className="display" style={{color:'var(--bone)',fontSize:34,lineHeight:1,marginBottom:18}}>
          ONE WEEK.<br/>EVERY ACCOUNT.
        </div>
        {/* Mock brief lines */}
        <div style={{display:'flex',flexDirection:'column',gap:10}}>
          {[
            {tone:'lime',  d:'MON', label:'BRIEF',     stat:'47'},
            {tone:'ink',   d:'TUE', label:'PRIORITIZE',stat:'12'},
            {tone:'violet',d:'WED', label:'PATTERN',   stat:'03'},
            {tone:'lime',  d:'FRI', label:'WRAP',      stat:'+9'},
          ].map((r,i)=>{
            const bg = r.tone==='lime'?'var(--lime)':r.tone==='violet'?'var(--violet)':'var(--ink)';
            const fg = r.tone==='lime'?'var(--ink)':'var(--bone)';
            return (
              <div key={i} style={{
                display:'grid',gridTemplateColumns:'40px 1fr 50px',gap:10,alignItems:'center',
                padding:'10px 14px',background:bg,color:fg,
                border:'1px solid '+(r.tone==='ink'?'rgba(250,248,241,.18)':'var(--ink)'),
                borderRadius:8,
              }}>
                <span className="mono" style={{fontSize:9,letterSpacing:'.14em',opacity:.85}}>{r.d}</span>
                <span className="display" style={{fontSize:14}}>{r.label}</span>
                <span className="display" style={{fontSize:18,textAlign:'right'}}>{r.stat}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Real video — sits in front of the mock poster; blurred by default, plays on hover */}
      {src && (
        <video ref={ref} className="hv-video" muted loop playsInline preload="metadata" src={src} onLoadedMetadata={onMeta}/>
      )}

      {/* Default-state overlay: gradient + caption */}
      <div className="hv-overlay">
        <div style={{display:'flex',alignItems:'flex-end',justifyContent:'space-between',gap:10}}>
          <div>
            <div className="mono" style={{fontSize:10,letterSpacing:'.14em',opacity:.8,marginBottom:6}}>// 90 SECONDS</div>
            <div className="display" style={{fontSize:24,lineHeight:1}}>WATCH THE PRODUCT</div>
          </div>
          <span className="mono" style={{fontSize:10,opacity:.7,letterSpacing:'.12em'}}>HOVER TO PLAY</span>
        </div>
      </div>

      {/* Center play button */}
      <div className="hv-play">▶</div>

      {/* "Now playing" badge appears on hover */}
      <div className="hv-now">
        <span className="hv-bars"><span/><span/><span/></span>
        NOW PLAYING
      </div>
    </div>
  );
}

function Hero({heroLine='teamlead'}){
  const [topLine, stickerLine] = HERO_LINES[heroLine] || HERO_LINES.teamlead;

  return (
    <section style={{
      position:'relative', paddingTop:120, paddingBottom:96,
      background:
        // Bottom fade to bone — soft, no hard edge — starts at 55%, fully bone by 100%
        'linear-gradient(to bottom, rgba(236,230,216,0) 0%, rgba(236,230,216,0) 55%, var(--bone) 100%),'+
        // Lime green radial glow on the right
        'radial-gradient(ellipse 70% 95% at 95% 28%, rgba(212,255,61,.55) 0%, rgba(212,255,61,0) 58%),'+
        // Soft lilac base — slightly graded for depth
        'linear-gradient(135deg, #E8E0FA 0%, #DDD2F6 55%, #E2DAFB 100%)',
    }}>
      <div className="container">
        {/* Kicker — pushed down from the section top for a slower opener */}
        <div style={{marginTop:48,marginBottom:48}}>
          <span className="stick" style={{
            display:'inline-block',padding:'14px 22px',
            fontFamily:'"Geist", ui-sans-serif, system-ui, sans-serif',
            fontWeight:800,fontSize:'clamp(28px, 3.4vw, 44px)',letterSpacing:'-.04em',lineHeight:1,
            boxShadow:'5px 5px 0 var(--ink)',transform:'rotate(-1.2deg)',
            border:'1.5px solid var(--ink)',
          }}>meet nauti.</span>
        </div>

        {/* Headline — two equal lines, paired like Meet/Nauti reference:
            display caps top, serif italic violet gradient bottom */}
        <h1 className="display" style={{
          margin:'0 0 56px',color:'var(--ink)',
          fontSize:'clamp(56px, 9.6vw, 132px)',
          lineHeight:.92,letterSpacing:'-.03em',
        }}>
          <span style={{display:'block'}}>{topLine}</span>
          <span style={{display:'block',marginTop:'.04em'}}>
            <span className="serif-grad" style={{letterSpacing:'-.01em'}}>{stickerLine}</span>
          </span>
        </h1>

        {/* Actions + stats row */}
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-end',gap:48,flexWrap:'wrap',marginBottom:64}}>
          <div style={{display:'flex',gap:10,alignItems:'center',flexWrap:'wrap'}}>
            <a href="#/waitlist" className="btn btn-primary">Join the waitlist <span className="arrow">→</span></a>
            <a href="#/contact" className="btn" style={{background:'var(--violet)',color:'var(--bone)',borderColor:'var(--violet)'}}
              onMouseOver={(e)=>{e.currentTarget.style.background='var(--ink)';e.currentTarget.style.borderColor='var(--ink)'}}
              onMouseOut={(e)=>{e.currentTarget.style.background='var(--violet)';e.currentTarget.style.borderColor='var(--violet)'}}>
              Talk to a human
            </a>
          </div>

          <div style={{display:'flex',gap:36,alignItems:'flex-end',flexWrap:'wrap'}}>
            <HeroStat value={12481} label="signals/wk"/>
            <HeroStat value={96.4} suffix="%" decimals={1} label="traceability"/>
            <HeroStat value={2.5} suffix=" hrs" decimals={1} label="saved per AM/week"/>
          </div>
        </div>

        {/* Full-width cinematic product video band */}
        <HeroVideo src="uploads/product.mp4" wide/>
      </div>
    </section>
  );
}

// Live signal ticker — flat cream strip with mono items, no glow.
function SignalTicker(){
  const items = [
    {src:'HubSpot', text:'Acme order health 82 → 54',                 tone:'risk'},
    {src:'Teams',   text:'Procurement reopened the Globex thread',     tone:'watch'},
    {src:'HubSpot', text:'Soylent · 4th repeat order this quarter',    tone:'good'},
    {src:'HubSpot', text:'AOV down 18% wk/wk on the Initech account',  tone:'risk'},
    {src:'Teams',   text:'Ops Lead at Acme replied — loop reopened',   tone:'good'},
    {src:'HubSpot', text:'Hooli cluster · 3 orders past expected close',tone:'watch'},
    {src:'HubSpot', text:'+$840k of new order pipeline this week',     tone:'good'},
    {src:'Teams',   text:'Champion silent for 9 days at Acme',          tone:'risk'},
  ];
  const tones = {risk:'var(--rose)', watch:'var(--amber)', good:'var(--lime)'};
  const item = (it,i)=>(
    <span key={i} style={{display:'inline-flex',alignItems:'center',gap:14,fontSize:16,color:'var(--ink-soft)'}}>
      <span style={{width:7,height:7,borderRadius:999,background:tones[it.tone],boxShadow:`0 0 8px ${tones[it.tone]}`}}/>
      <span className="mono" style={{fontSize:12,color:'var(--ink)',letterSpacing:'.12em'}}>{it.src.toUpperCase()}</span>
      <span>{it.text}</span>
      <span style={{color:'var(--ink-quiet)',marginLeft:14}}>·</span>
    </span>
  );
  return (
    <div style={{borderTop:'1px solid var(--ink)',borderBottom:'1px solid var(--ink-line)',background:'var(--bone-2)',padding:'14px 0'}}>
      <div className="container" style={{display:'flex',alignItems:'center',gap:18}}>
        <span className="mono" style={{fontSize:12,color:'var(--ink)',letterSpacing:'.16em',padding:'6px 11px',background:'var(--lime)',borderRadius:0,whiteSpace:'nowrap',border:'1px solid var(--ink)'}}>LIVE · YOUR REVENUE STACK</span>
        <Marquee gap={36} style={{flex:1}}>
          {items.map(item)}
        </Marquee>
      </div>
    </div>
  );
}

Object.assign(window, {Hero, AskNautiDemo, SignalTicker});
