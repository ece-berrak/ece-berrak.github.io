// Chapter shell — wraps a chapter with hero, body, prev/next nav, and footer.
// Single source of truth for chapter metadata + visited-progress tracking.

const CHAPTERS = [
  { num:'01', slug:'what-is-an-ai-team-lead',     title:'What is an AI team lead?',                     dek:'A new category. How it differs from AI assistants and AI chatbots, and why the distinction matters for revenue teams.',                            mins:'6 min', status:'live' },
  { num:'02', slug:'visibility-to-coordination',  title:'The shift: visibility → coordination',         dek:'Why more dashboards is the wrong answer to a coordination problem. The thesis behind every other chapter.',                                          mins:'5 min', status:'live' },
  { num:'03', slug:'anatomy-of-the-loop',         title:'Anatomy of the weekly loop',                   dek:'Monday brief, mid-week priorities, Friday recap, compounding memory. The four parts of a working revenue rhythm — at a glance.',                      mins:'6 min', status:'live' },
  { num:'04', slug:'memory-the-compound-layer',   title:'Memory: the layer that compounds',             dek:'Three layers of memory — conversation, pattern, loop-fed — and why a rules-based stack cannot produce them.',                                        mins:'7 min', status:'live' },
  { num:'05', slug:'where-it-fits',               title:'Where it fits in your stack',                  dek:'Honest comparisons. Nauti vs ChatGPT, Claude, Gong, Clari, CRM AI. Different categories, different jobs.',                                            mins:'6 min', status:'live' },
  { num:'06', slug:'the-hard-questions',          title:'The hard questions',                           dek:'GDPR, hallucinations, "can\'t Claude do this?", confidential data, trust. The objections we hear most — answered without dodging.',                    mins:'7 min', status:'live' },
  { num:'07', slug:'where-were-going',            title:"Where we're going",                            dek:'Today the brain. Tomorrow the senses. What we\'re shipping next, what we\'re deliberately not, and why brain-first matters.',                        mins:'5 min', status:'live' },
];

function chapterByNum(n){ return CHAPTERS.find(c => c.num === n); }
function chapterRoute(c){ return c ? `#/${c.num}-${c.slug}` : '#'; }

// localStorage-backed progress. Falls back gracefully if storage is blocked.
function getVisited(){
  try { return JSON.parse(localStorage.getItem('nlp.visited') || '[]'); }
  catch { return []; }
}
function markVisited(num){
  try {
    const v = getVisited();
    if (!v.includes(num)){
      v.push(num);
      localStorage.setItem('nlp.visited', JSON.stringify(v));
      // tickle storage event for same-tab listeners
      window.dispatchEvent(new Event('storage'));
    }
  } catch {}
}
function markFinished(){
  try { localStorage.setItem('nlp.finished', '1'); window.dispatchEvent(new Event('storage')); } catch {}
}
function isFinished(){
  try { return localStorage.getItem('nlp.finished') === '1'; } catch { return false; }
}

function ChapterShell({num, eyebrow, children}){
  const ch = chapterByNum(num);
  const idx = CHAPTERS.findIndex(c => c.num === num);
  const prev = idx > 0 ? CHAPTERS[idx - 1] : null;
  const next = idx < CHAPTERS.length - 1 ? CHAPTERS[idx + 1] : null;
  const isLast = !next;
  const goHome = (e)=>{ e.preventDefault(); window.location.hash = ''; };

  // Mark as visited on mount.
  React.useEffect(()=>{ markVisited(num); }, [num]);

  return (
    <main style={{minHeight:'100vh',background:'var(--bone)',color:'var(--ink)'}}>
      <TopBar chapterNum={num}/>

      {/* Hero */}
      <section style={{padding:'72px 0 28px'}}>
        <div className="container" style={{maxWidth:820}}>
          <div className="eyebrow" style={{marginBottom:18}}>
            [ Literacy · Chapter {num}{eyebrow ? ` · ${eyebrow}` : ''} ]
          </div>
          <h1 className="display" style={{
            margin:'0 0 22px',
            fontSize:'clamp(40px, 5.6vw, 80px)',
            lineHeight:1.0,letterSpacing:'-.02em',
          }}>{ch.title}</h1>
          <Lead>{ch.dek}</Lead>
          <div className="mono" style={{display:'flex',alignItems:'center',gap:14,fontSize:11,letterSpacing:'.14em',color:'var(--ink-quiet)'}}>
            <span>Nautilida</span>
            <span>◉</span>
            <span>April 2026</span>
            <span>◉</span>
            <span>{ch.mins} read</span>
          </div>
        </div>
      </section>

      {/* Body */}
      <article style={{padding:'24px 0 64px'}}>
        <div className="container" style={{maxWidth:760}}>
          {children}
        </div>
      </article>

      {/* Prev / Next nav. Last chapter's Next points to the Finish page (survey + recap). */}
      <section style={{padding:'24px 0 56px',background:'var(--bone-2)',borderTop:'1px solid var(--ink-line)',borderBottom:'1px solid var(--ink-line)'}}>
        <div className="container" style={{maxWidth:1000}}>
          <div className="row-2" style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:18}}>
            {prev ? (
              <a href={chapterRoute(prev)} style={{
                display:'block',padding:'22px 24px',
                border:'1.5px solid var(--ink)',borderRadius:14,background:'var(--bone-3)',
                boxShadow:'5px 5px 0 var(--ink)',
              }}>
                <span className="mono" style={{fontSize:10,letterSpacing:'.16em',color:'var(--ink-quiet)'}}>← PREVIOUS · CHAPTER {prev.num}</span>
                <div className="display" style={{marginTop:8,fontSize:18,letterSpacing:'-.005em',lineHeight:1.2}}>{prev.title}</div>
              </a>
            ) : (
              <a href="#" onClick={goHome} style={{
                display:'block',padding:'22px 24px',
                border:'1.5px solid var(--ink)',borderRadius:14,background:'var(--bone-3)',
                boxShadow:'5px 5px 0 var(--ink)',
              }}>
                <span className="mono" style={{fontSize:10,letterSpacing:'.16em',color:'var(--ink-quiet)'}}>← BACK</span>
                <div className="display" style={{marginTop:8,fontSize:18,letterSpacing:'-.005em',lineHeight:1.2}}>Literacy home</div>
              </a>
            )}
            {isLast ? (
              <a href="#/finish" style={{
                display:'block',padding:'22px 24px',
                border:'1.5px solid var(--ink)',borderRadius:14,background:'var(--ink)',color:'var(--bone)',
                boxShadow:'5px 5px 0 var(--lime)',textAlign:'right',
              }}>
                <span className="mono" style={{fontSize:10,letterSpacing:'.16em',color:'var(--lime)'}}>FINISH ↗</span>
                <div className="display" style={{marginTop:8,fontSize:18,letterSpacing:'-.005em',lineHeight:1.2}}>You're done. Tell us what you'd want.</div>
              </a>
            ) : (
              <a href={chapterRoute(next)} style={{
                display:'block',padding:'22px 24px',
                border:'1.5px solid var(--ink)',borderRadius:14,
                background: next.status === 'live' ? 'var(--ink)' : 'var(--bone-3)',
                color: next.status === 'live' ? 'var(--bone)' : 'var(--ink)',
                boxShadow:'5px 5px 0 var(--violet)',textAlign:'right',
              }}>
                <span className="mono" style={{
                  fontSize:10,letterSpacing:'.16em',
                  color: next.status === 'live' ? 'var(--lime)' : 'var(--violet)',
                }}>
                  NEXT · CHAPTER {next.num} {next.status !== 'live' ? '· DRAFT' : ''} →
                </span>
                <div className="display" style={{marginTop:8,fontSize:18,letterSpacing:'-.005em',lineHeight:1.2}}>{next.title}</div>
              </a>
            )}
          </div>
        </div>
      </section>

      <PlaybookFooter/>
    </main>
  );
}

Object.assign(window, {ChapterShell, CHAPTERS, chapterByNum, chapterRoute, getVisited, markVisited, markFinished, isFinished});
