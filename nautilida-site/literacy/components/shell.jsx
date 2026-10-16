// Shared shell — Wordmark logo, top bar with chapter stepper, footer.
const { useEffect, useState, useRef } = React;

function Wordmark({size=22, tone='ink'}){
  const scale = size / 22;
  const w    = Math.round(108 * scale);
  const h    = Math.round(28  * scale);
  const imgW = Math.round(132 * scale);
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

// Chapter stepper — 7 dots in the top bar. Current = violet, visited = lime, future = hollow.
function ChapterStepper({currentNum}){
  const [visited, setVisited] = useState(()=> getVisited());
  // Re-read on hash change (so the stepper updates when user navigates).
  useEffect(()=>{
    const sync = ()=> setVisited(getVisited());
    window.addEventListener('hashchange', sync);
    window.addEventListener('storage', sync);
    return ()=>{
      window.removeEventListener('hashchange', sync);
      window.removeEventListener('storage', sync);
    };
  },[]);

  return (
    <div style={{display:'inline-flex',gap:8,alignItems:'center'}}>
      {CHAPTERS.map(c => {
        const isCurrent = c.num === currentNum;
        const isVisited = !isCurrent && visited.includes(c.num);
        const fill =
          isCurrent ? 'var(--violet)' :
          isVisited ? 'var(--lime)'   :
          'transparent';
        const border =
          isCurrent ? 'var(--violet)' :
          isVisited ? 'var(--ink)'    :
          'var(--ink-line-2)';
        return (
          <a key={c.num} href={chapterRoute(c)} title={`Chapter ${c.num} · ${c.title}`}
            style={{
              width: 10, height: 10, borderRadius: 999,
              background: fill,
              border: `1px solid ${border}`,
              transition: 'all .2s ease',
              display:'inline-block',
            }}
            aria-label={`Chapter ${c.num}: ${c.title}`}
          />
        );
      })}
    </div>
  );
}

function TopBar({chapterNum}){
  return (
    <div style={{
      position:'sticky',top:0,zIndex:50,
      background:'rgba(236,230,216,.92)',
      backdropFilter:'blur(14px) saturate(140%)',
      WebkitBackdropFilter:'blur(14px) saturate(140%)',
      borderBottom:'1px solid var(--ink-line)',
    }}>
      <div className="container" style={{
        display:'flex',alignItems:'center',justifyContent:'space-between',
        height:60,gap:16,
      }}>
        <a href="#" onClick={(e)=>{e.preventDefault();window.location.hash='';}} style={{display:'inline-flex',alignItems:'center',gap:10}}>
          <Wordmark size={22} tone="ink"/>
          <span className="mono" style={{fontSize:10,letterSpacing:'.16em',color:'var(--ink-quiet)'}}>// LITERACY</span>
        </a>

        <span className="topbar-meta" style={{display:'inline-flex',alignItems:'center',gap:14}}>
          <ChapterStepper currentNum={chapterNum}/>
          <span className="mono" style={{fontSize:10,letterSpacing:'.16em',color:'var(--ink-soft)'}}>
            {chapterNum
              ? <>CH <strong style={{color:'var(--ink)'}}>{chapterNum}</strong>/07</>
              : <>FIRST EDITION</>
            }
          </span>
        </span>

        <a href="https://nautilida.ai/" target="_blank" rel="noopener noreferrer" className="mono" style={{
          fontSize:11,letterSpacing:'.14em',color:'var(--ink-soft)',
          padding:'7px 12px',border:'1px solid var(--ink-line-2)',borderRadius:999,
          display:'inline-flex',alignItems:'center',gap:6,
        }}>
          NAUTILIDA.AI <span style={{fontSize:10}}>↗</span>
        </a>
      </div>
    </div>
  );
}

function PlaybookFooter(){
  return (
    <footer style={{
      background:'var(--ink)',color:'var(--bone)',padding:'56px 0 36px',marginTop:80,
    }}>
      <div className="container" style={{display:'flex',justifyContent:'space-between',gap:24,flexWrap:'wrap',alignItems:'flex-start'}}>
        <div style={{maxWidth:380}}>
          <Wordmark size={28} tone="light"/>
          <div style={{fontSize:13,color:'rgba(250,248,241,.6)',lineHeight:1.55,marginTop:14,maxWidth:340}}>
            Nautilida Literacy · First Edition. Notes from the team building the AI team lead for sales.
          </div>
        </div>
        <div className="mono" style={{fontSize:10,letterSpacing:'.14em',color:'rgba(250,248,241,.5)',display:'flex',gap:18,flexWrap:'wrap'}}>
          <a href="https://nautilida.ai/" target="_blank" rel="noopener noreferrer" style={{color:'rgba(250,248,241,.85)'}}>NAUTILIDA.AI ↗</a>
          <a href="https://nautilida.ai/#/waitlist" target="_blank" rel="noopener noreferrer" style={{color:'rgba(250,248,241,.85)'}}>JOIN WAITLIST ↗</a>
          <a href="https://de.linkedin.com/company/nautilida" target="_blank" rel="noopener noreferrer" style={{color:'rgba(250,248,241,.85)'}}>LINKEDIN ↗</a>
        </div>
      </div>
      <div className="container mono" style={{marginTop:28,paddingTop:14,borderTop:'1px solid rgba(250,248,241,.15)',
        fontSize:10,letterSpacing:'.12em',color:'rgba(250,248,241,.45)',
        display:'flex',justifyContent:'space-between',gap:10,flexWrap:'wrap'}}>
        <span style={{display:'inline-flex',gap:18,flexWrap:'wrap',alignItems:'center'}}>
          <span>© 2026 nautilida</span>
          <button
            onClick={()=>window.dispatchEvent(new CustomEvent('open-cookie-settings'))}
            style={{
              background:'transparent',border:'none',padding:0,cursor:'pointer',
              font:'inherit',color:'rgba(250,248,241,.45)',letterSpacing:'.12em',
              transition:'color .2s ease',
            }}
            onMouseEnter={(e)=>e.currentTarget.style.color='var(--lime)'}
            onMouseLeave={(e)=>e.currentTarget.style.color='rgba(250,248,241,.45)'}
          >
            COOKIE SETTINGS
          </button>
        </span>
        <span>FIRST EDITION · BUILT IN BERLIN</span>
      </div>
    </footer>
  );
}

Object.assign(window, {Wordmark, TopBar, ChapterStepper, PlaybookFooter});
