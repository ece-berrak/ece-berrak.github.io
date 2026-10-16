// Shared motion primitives — Reveal, useCountUp, MagneticButton, Marquee
const { useEffect: useEffectM, useState: useStateM, useRef: useRefM } = React;

// Wrap any block to fade-up when it enters the viewport.
function Reveal({as='div', delay=0, children, ...rest}){
  const ref = useRefM(null);
  const [seen, setSeen] = useStateM(false);
  useEffectM(()=>{
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver(([e])=>{
      if (e.isIntersecting){ setSeen(true); io.disconnect(); }
    }, {threshold:0.18});
    io.observe(el);
    return ()=>io.disconnect();
  },[]);
  const Tag = as;
  const className = (rest.className ? rest.className+' ' : '') + 'reveal' + (seen?' in':'');
  const style = {transitionDelay: delay+'ms', ...(rest.style||{})};
  const merged = {...rest, className, style, ref};
  return <Tag {...merged}>{children}</Tag>;
}

// Animate a number from start to target when the el enters view.
function useCountUp(target, {duration=1400, prefix='', suffix='', decimals=0} = {}){
  const ref = useRefM(null);
  const [val, setVal] = useStateM(0);
  const started = useRefM(false);
  useEffectM(()=>{
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver(([e])=>{
      if (e.isIntersecting && !started.current){
        started.current = true;
        const t0 = performance.now();
        const tick = (now)=>{
          const t = Math.min(1, (now - t0)/duration);
          const eased = 1 - Math.pow(1-t, 3);
          setVal(target * eased);
          if (t<1) requestAnimationFrame(tick);
          else setVal(target);
        };
        requestAnimationFrame(tick);
      }
    }, {threshold:0.4});
    io.observe(el);
    return ()=>io.disconnect();
  },[target,duration]);
  const formatted = prefix + val.toLocaleString(undefined, {
    minimumFractionDigits:decimals, maximumFractionDigits:decimals
  }) + suffix;
  return [ref, formatted];
}

// Counts up commas-formatted; takes the same string the static design used and parses it.
function CountUpText({value, prefix='', suffix='', decimals=0, ...rest}){
  const [ref, out] = useCountUp(value, {prefix, suffix, decimals});
  return <span ref={ref} {...rest}>{out}</span>;
}

// Subtle button that drifts toward the cursor on hover.
function MagneticButton({children, strength=0.25, className='', style={}, ...rest}){
  const ref = useRefM(null);
  useEffectM(()=>{
    const el = ref.current; if (!el) return;
    const onMove = (e)=>{
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width/2, cy = r.top + r.height/2;
      const dx = (e.clientX - cx) * strength;
      const dy = (e.clientY - cy) * strength;
      el.style.transform = `translate3d(${dx}px, ${dy}px, 0)`;
    };
    const reset = ()=>{ el.style.transform = ''; };
    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', reset);
    return ()=>{ el.removeEventListener('mousemove', onMove); el.removeEventListener('mouseleave', reset); };
  },[strength]);
  return (
    <button ref={ref} className={className}
      style={{transition:'transform .25s cubic-bezier(.2,.7,.2,1), background .2s ease, border-color .2s ease, box-shadow .2s ease', ...style}}
      {...rest}>{children}</button>
  );
}

// Infinite marquee strip — accepts any children, duplicates them for seamless loop.
function Marquee({children, gap=48, className='', style={}}){
  return (
    <div className={'marquee '+className} style={{overflow:'hidden',whiteSpace:'nowrap',...style}}>
      <div className="marquee-track" style={{gap}}>
        {children}
        {children}
      </div>
    </div>
  );
}

// Floating particles — tiny dots drifting around hero/spiral
function Particles({count=18, color='rgba(212,255,61,.55)'}){
  const items = useRefM(
    Array.from({length:count}, ()=> ({
      x:Math.random()*100, y:Math.random()*100,
      s:1+Math.random()*2, d:6+Math.random()*10, ph:Math.random()*Math.PI*2,
    }))
  );
  return (
    <div style={{position:'absolute',inset:0,pointerEvents:'none',overflow:'hidden'}}>
      {items.current.map((p,i)=>(
        <span key={i} style={{
          position:'absolute',left:p.x+'%',top:p.y+'%',width:p.s+'px',height:p.s+'px',
          background:color,borderRadius:999,
          boxShadow:`0 0 ${p.s*3}px ${color}`,
          animation:`p${i} ${p.d}s ease-in-out ${i*0.2}s infinite alternate`,
        }}/>
      ))}
      <style>{items.current.map((p,i)=>(
        `@keyframes p${i}{to{transform:translate(${(Math.cos(p.ph)*30).toFixed(1)}px,${(Math.sin(p.ph)*40).toFixed(1)}px)}}`
      )).join('\n')}</style>
    </div>
  );
}

// Single shared rAF-driven scroll source so we don't pile up listeners.
const __scroll = { y: 0, listeners: new Set(), running: false };
function __scrollEmit(){
  __scroll.y = window.scrollY;
  __scroll.listeners.forEach(fn => fn(__scroll.y));
}
function __scrollEnsure(){
  if (__scroll.running) return;
  __scroll.running = true;
  let queued = false;
  const onScroll = () => {
    if (queued) return;
    queued = true;
    requestAnimationFrame(()=>{ queued = false; __scrollEmit(); });
  };
  window.addEventListener('scroll', onScroll, {passive:true});
  window.addEventListener('resize', onScroll);
  __scrollEmit();
}

// useParallax(speed) — translateY = -scrollY * speed (negative = stays put when page moves up)
// Apply to background layers with small speeds (0.1 — 0.4) for depth.
function useParallax(speed=0.2, axis='y'){
  const ref = useRefM(null);
  useEffectM(()=>{
    __scrollEnsure();
    const el = ref.current; if (!el) return;
    let last = -1;
    const apply = (y) => {
      // Only translate when element is within ~1.5 viewport heights of the fold
      const rect = el.getBoundingClientRect();
      const out = rect.bottom < -window.innerHeight*0.5 || rect.top > window.innerHeight*1.5;
      if (out){ el.style.transform = ''; last = -1; return; }
      const v = (-y * speed);
      if (Math.abs(v - last) < 0.5) return;
      last = v;
      el.style.transform = axis==='x' ? `translate3d(${v}px,0,0)` : `translate3d(0,${v}px,0)`;
    };
    __scroll.listeners.add(apply);
    apply(__scroll.y);
    return ()=>__scroll.listeners.delete(apply);
  },[speed, axis]);
  return ref;
}

// useScrollProgress() — returns ref + a CSS-var-style 0..1 progress through the section
// 0 when section's top hits bottom of viewport, 1 when section's bottom hits top.
// Use it inside the component and read the var via JS to drive transforms manually,
// or set CSS variables on the element for pure-CSS reads.
function useScrollProgress(){
  const ref = useRefM(null);
  useEffectM(()=>{
    __scrollEnsure();
    const el = ref.current; if (!el) return;
    const apply = ()=>{
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = r.height + vh;
      const passed = vh - r.top;
      const p = Math.max(0, Math.min(1, passed / total));
      el.style.setProperty('--p', p.toFixed(4));
    };
    __scroll.listeners.add(apply);
    apply();
    return ()=>__scroll.listeners.delete(apply);
  },[]);
  return ref;
}

// SectionFrame — mono header bar at top of each section
// Renders:  ● NAUTI    // 02 / 09        + a heavy display title with optional kicker
function SectionFrame({nr, total=9, kicker, title, sub, children, accent='ink'}){
  const idx = String(nr).padStart(2,'0');
  const tot = String(total).padStart(2,'0');
  const tone = accent==='lime' ? 'var(--lime)' : accent==='violet' ? 'var(--violet)' : 'var(--ink)';
  return (
    <header style={{display:'flex',flexDirection:'column',gap:18,marginBottom:36}}>
      <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',
        borderTop:'1px solid var(--ink)',borderBottom:'1px solid var(--ink-line)',
        padding:'10px 0'}}>
        <span className="mono" style={{fontSize:11,letterSpacing:'.16em',display:'inline-flex',alignItems:'center',gap:8}}>
          <span style={{width:6,height:6,borderRadius:999,background:tone}}/>
          NAUTI
          {kicker && <span style={{color:'var(--ink-quiet)',marginLeft:14}}>// {kicker.toUpperCase()}</span>}
        </span>
        <span className="mono" style={{fontSize:11,color:'var(--ink-quiet)',letterSpacing:'.12em'}}>
          // {idx} <span style={{color:'var(--ink)'}}>{idx} / {tot}</span>
        </span>
      </div>
      {title && (
        <h2 className="display" style={{margin:0,fontSize:'clamp(40px, 6.4vw, 86px)',color:'var(--ink)'}}>{title}</h2>
      )}
      {sub && (
        <p style={{margin:0,fontSize:17,color:'var(--ink-soft)',maxWidth:680,lineHeight:1.55}}>{sub}</p>
      )}
      {children}
    </header>
  );
}

Object.assign(window, {Reveal, useCountUp, CountUpText, MagneticButton, Marquee, Particles, useParallax, useScrollProgress, SectionFrame});
