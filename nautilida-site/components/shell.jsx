// Top nav + scroll progress.  Cream background, ink type. Cursor companion is opt-in.
const { useEffect, useState, useRef } = React;

// Reusable wordmark — always renders the brand logo image, never plain text.
// tone: 'ink' (black, default), 'violet' (brand), 'light' (white for dark backgrounds)
// size: visual height in px (proportional crop scales with it)
// Reusable wordmark — renders the brand logo image left-aligned to its container's edge.
// tone: 'ink' (black, default), 'violet' (brand), 'light' (white for dark backgrounds)
// size: visual height in px (proportional crop scales with it)
function Wordmark({size=22, tone='ink'}){
  const scale = size / 22;
  // Container hugs the wordmark's visible glyph area — no padding on left/right.
  const w    = Math.round(108 * scale);
  const h    = Math.round(28  * scale);
  const imgW = Math.round(132 * scale);
  // Shift image so the wordmark's left edge sits at container x=0.
  const imgLeft = Math.round(-12 * scale);
  const imgTop  = Math.round((h - imgW) / 2);
  const filter =
    tone === 'violet' || tone === 'brand' ? 'none' :
    tone === 'light' ? 'brightness(0) invert(1)' :
    'brightness(0)';
  return (
    <span style={{
      display:'inline-block',
      width:w, height:h,
      position:'relative', overflow:'hidden',
      verticalAlign:'middle',
    }}>
      <img
        src="uploads/nautilida-wordmark-tr.png"
        alt="nautilida"
        style={{
          position:'absolute',
          width:imgW, height:'auto',
          left:imgLeft, top:imgTop,
          filter,
          imageRendering:'-webkit-optimize-contrast',
          transition:'filter .3s ease',
        }}
      />
    </span>
  );
}
const NautilusMark = Wordmark;

function NavLink({href, children, scrolled}){
  const [h, setH] = useState(false);
  return (
    <a href={href}
      onMouseEnter={()=>setH(true)}
      onMouseLeave={()=>setH(false)}
      style={{
        fontSize:13,
        color: h ? 'var(--ink)' : (scrolled ? 'rgba(14,13,20,.85)' : 'var(--ink-soft)'),
        position:'relative',padding:'4px 0',
        transition:'color .2s ease',
      }}>
      {children}
      <span style={{
        position:'absolute',left:0,right:0,bottom:0,height:1.5,
        background:'var(--violet)',
        transformOrigin:'left center',
        transform: h ? 'scaleX(1)' : 'scaleX(0)',
        transition:'transform .25s cubic-bezier(.2,.7,.2,1)',
      }}/>
    </a>
  );
}

function Nav(){
  const scrolled = true;
  return (
    <nav style={{
      position:'fixed', top:0, left:0, right:0, zIndex:50,
      transition:'background .25s ease, border-color .25s ease, backdrop-filter .25s ease',
      background: scrolled ? 'rgba(236,230,216,.78)' : 'transparent',
      backdropFilter: scrolled ? 'blur(18px) saturate(150%)' : 'none',
      WebkitBackdropFilter: scrolled ? 'blur(18px) saturate(150%)' : 'none',
      borderBottom: scrolled ? '1px solid var(--ink-line)' : '1px solid transparent',
    }}>
      <div className="container" style={{display:'flex',alignItems:'center',justifyContent:'space-between',height:64}}>
        <a href="#" style={{display:'flex',alignItems:'center',gap:10}}>
          <Wordmark size={22} tone={scrolled ? 'violet' : 'ink'}/>
        </a>
        <div className="nav-section-links" style={{display:'flex',gap:32,alignItems:'center'}}>
          {['Product','Rhythm','Evidence','Integrations'].map(s=>(
            <NavLink key={s} href={`#${s.toLowerCase()}`} scrolled={scrolled}>{s}</NavLink>
          ))}
          <NavLink href="#/use-cases" scrolled={scrolled}>Use cases</NavLink>
          <NavLink href="#/compare" scrolled={scrolled}>Compare</NavLink>
        </div>
        <div style={{display:'flex',gap:10,alignItems:'center'}}>
          <span className="nav-signin"><NavLink href="#/signin" scrolled={scrolled}>Sign in</NavLink></span>
          <a href="#/waitlist" className="btn btn-primary" style={{
            padding:'8px 14px',fontSize:13,
            background:    scrolled ? 'var(--violet)' : 'var(--ink)',
            borderColor:   scrolled ? 'var(--violet)' : 'var(--ink)',
            color:         scrolled ? 'var(--shell)'  : 'var(--bone)',
            transition:'background .3s ease, border-color .3s ease, color .3s ease, transform .15s ease',
          }}>
            Join the waitlist <span className="arrow">→</span>
          </a>
        </div>
      </div>
    </nav>
  );
}

function CursorCompanion(){
  const ref = useRef(null);
  const trail = useRef({x:-100,y:-100,tx:-100,ty:-100});
  useEffect(()=>{
    const onMove = (e)=>{ trail.current.tx = e.clientX; trail.current.ty = e.clientY; };
    window.addEventListener('mousemove', onMove);
    let raf;
    const tick = () => {
      const t = trail.current;
      t.x += (t.tx - t.x) * 0.18;
      t.y += (t.ty - t.y) * 0.18;
      if (ref.current) ref.current.style.transform = `translate3d(${t.x-10}px, ${t.y-10}px, 0)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return ()=>{ window.removeEventListener('mousemove', onMove); cancelAnimationFrame(raf); };
  },[]);
  return (
    <div ref={ref} style={{
      position:'fixed', left:0, top:0, width:14, height:14, borderRadius:999,
      pointerEvents:'none', zIndex:40,
      background:'radial-gradient(circle at 30% 30%, var(--lime) 0%, var(--lime) 35%, var(--violet) 100%)',
      boxShadow:'0 0 12px rgba(91,63,230,.4), 0 0 6px rgba(212,255,61,.45)',
      mixBlendMode:'normal',
    }}/>
  );
}

function ScrollProgress(){
  const ref = useRef(null);
  useEffect(()=>{
    const onScroll = ()=>{
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max>0 ? window.scrollY / max : 0;
      if (ref.current) ref.current.style.transform = `scaleX(${p})`;
    };
    onScroll();
    window.addEventListener('scroll', onScroll, {passive:true});
    return ()=>window.removeEventListener('scroll', onScroll);
  },[]);
  return (
    <div style={{position:'fixed',top:0,left:0,right:0,height:2,zIndex:60,background:'rgba(14,13,20,.06)'}}>
      <div ref={ref} style={{height:'100%',background:'var(--ink)',transformOrigin:'0 50%',transform:'scaleX(0)'}}/>
    </div>
  );
}

Object.assign(window, {Wordmark, NautilusMark, Nav, CursorCompanion, ScrollProgress});
