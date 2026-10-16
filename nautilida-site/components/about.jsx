// About — fun, anonymous. Footer-only entrypoint.  Single-page editorial layout
// (not the split form treatment used by sign-in / waitlist / contact).
function About(){
  const goHome     = (e)=>{ e.preventDefault(); window.location.hash = ''; };
  const goWaitlist = (e)=>{ e.preventDefault(); window.location.hash = '#/waitlist'; };
  const goContact  = (e)=>{ e.preventDefault(); window.location.hash = '#/contact'; };

  // Anonymous "team" — roles only, no names.
  const team = [
    {n:'01', role:'OWNS THE RHYTHM',         line:'sets the Mon→Fri cadence so nothing leaks.'},
    {n:'02', role:'MAKES THE LIME STICK',    line:'argues for one accent, then ships three.'},
    {n:'03', role:'REFUSES TO ADD CHARTS',   line:'turns dashboards into one paragraph.'},
    {n:'04', role:'SPEAKS PROCUREMENT',      line:'translates Berlin coffee orders into revenue signals.'},
    {n:'05', role:'IS ACTUALLY NAUTI',       line:'reads every thread, never asks for a 1:1.'},
  ];

  const beliefs = [
    'Real-time data is real-time anxiety. Sales teams need rhythm.',
    'We don\'t just find leakage — we story-tell it.',
    'Direction beats dashboards. Every single Monday.',
    'Memory beats handover meetings, and beats pretending the last AM never existed.',
    'No alert is better than a bad alert.',
  ];

  return (
    <main style={{minHeight:'100vh',background:'var(--bone)',color:'var(--ink)'}}>
      {/* Top strip */}
      <div style={{padding:'24px 28px',display:'flex',alignItems:'center',justifyContent:'space-between',
        borderBottom:'1px solid var(--ink-line)'}}>
        <a href="#" onClick={goHome}>
          <Wordmark size={24} tone="ink"/>
        </a>
        <div style={{display:'flex',gap:8,flexWrap:'wrap'}}>
          <a href="#" onClick={goContact} className="mono"
            style={{fontSize:11,letterSpacing:'.14em',color:'var(--ink-soft)',
              padding:'7px 12px',border:'1px solid var(--ink-line-2)',borderRadius:999}}>
            CONTACT →
          </a>
          <a href="#" onClick={goHome} className="mono"
            style={{fontSize:11,letterSpacing:'.14em',color:'var(--ink-soft)',
              padding:'7px 12px',border:'1px solid var(--ink-line-2)',borderRadius:999}}>
            ← BACK TO SITE
          </a>
        </div>
      </div>

      {/* Hero block */}
      <section style={{padding:'96px 0 80px'}}>
        <div className="container">
          <div style={{marginBottom:32}}>
            <span className="stick" style={{
              display:'inline-block',padding:'12px 18px',
              fontFamily:'"Geist", sans-serif',fontWeight:800,fontSize:'clamp(22px, 3vw, 36px)',
              letterSpacing:'-.04em',lineHeight:1,
              boxShadow:'4px 4px 0 var(--ink)',transform:'rotate(-1.4deg)',
              border:'1.5px solid var(--ink)',
            }}>anonymous on purpose.</span>
          </div>
          <h1 className="display" style={{margin:'0 0 28px',fontSize:'clamp(56px, 8.4vw, 116px)',lineHeight:.95,letterSpacing:'-.03em'}}>
            <span style={{display:'block'}}>WHO WE ARE</span>
            <span style={{display:'block',marginLeft:'2.4em',marginTop:'-.04em',fontSize:'.5em',letterSpacing:'-.005em',lineHeight:1}}>
              <span className="serif-grad">(not yet, anyway.)</span>
            </span>
          </h1>
          <p style={{fontSize:18,color:'var(--ink-soft)',maxWidth:560,lineHeight:1.55,margin:0}}>
            We're a small team in Berlin building Nauti. We don't put faces on landing pages until we ship. So instead — here's how we think, and a roll-call without the headshots.
          </p>
        </div>
      </section>

      {/* Stats / quick facts */}
      <section style={{padding:'40px 0',background:'var(--bone-2)',borderTop:'1px solid var(--ink-line)',borderBottom:'1px solid var(--ink-line)'}}>
        <div className="container" style={{display:'grid',gridTemplateColumns:'repeat(auto-fit, minmax(180px, 1fr))',gap:24}}>
          {[
            ['5','humans','+ a lot of voicenotes'],
            ['1','AI','that just learned english'],
            ['1','city','Berlin, mostly Mitte'],
            ['1','first design partner','aveato — B2B catering'],
          ].map(([n,l,sub],i)=>(
            <div key={i} style={{display:'flex',flexDirection:'column'}}>
              <span className="display" style={{fontSize:'clamp(40px, 5vw, 72px)',lineHeight:1,letterSpacing:'-.02em'}}>{n}</span>
              <span className="display" style={{fontSize:18,marginTop:8,letterSpacing:'-.005em'}}>{l}</span>
              <span className="mono" style={{fontSize:10,letterSpacing:'.12em',color:'var(--ink-quiet)',marginTop:8}}>{sub.toUpperCase()}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Anonymous team */}
      <section style={{padding:'96px 0'}}>
        <div className="container">
          <div style={{display:'flex',alignItems:'baseline',justifyContent:'space-between',gap:24,flexWrap:'wrap',marginBottom:36}}>
            <h2 className="display" style={{margin:0,fontSize:'clamp(40px, 5vw, 72px)',lineHeight:1.0}}>
              THE TEAM,{' '}
              <span style={{display:'inline-block'}}>
                <span className="serif-grad" style={{fontSize:'1.05em'}}>without the headshots.</span>
              </span>
            </h2>
            <span className="mono" style={{fontSize:11,letterSpacing:'.14em',color:'var(--ink-quiet)'}}>// ROLL-CALL</span>
          </div>

          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit, minmax(220px, 1fr))',gap:14}}>
            {team.map((p,i)=>{
              const fills = ['ink','lime','ink','violet','lime'];
              const fill = fills[i] || 'ink';
              const isInk    = fill==='ink';
              const isLime   = fill==='lime';
              const isViolet = fill==='violet';
              const bg = isInk?'var(--ink)':isLime?'var(--lime)':'var(--violet)';
              const fg = isInk?'var(--bone)':isViolet?'var(--bone)':'var(--ink)';
              return (
                <div key={p.n} className={'tile-hover'+(i%2?' right':'')} style={{
                  padding:'20px 18px 18px',aspectRatio:'1 / 1.1',
                  background:bg,color:fg,
                  border:'1.5px solid var(--ink)',borderRadius:14,
                  display:'flex',flexDirection:'column',
                  boxShadow: isLime ? '5px 5px 0 var(--ink)' : isViolet ? '5px 5px 0 var(--lime)' : '5px 5px 0 var(--lime)',
                  cursor:'default',
                }}>
                  {/* "Avatar" — masked silhouette = a single big initial in a contrasting circle */}
                  <div style={{
                    width:54,height:54,borderRadius:999,
                    background: isInk ? 'var(--lime)' : isLime ? 'var(--ink)' : 'var(--bone)',
                    color: isInk ? 'var(--ink)' : isLime ? 'var(--bone)' : 'var(--ink)',
                    display:'flex',alignItems:'center',justifyContent:'center',
                    fontFamily:'"Archivo Black", "Geist", sans-serif',fontWeight:900,fontSize:18,letterSpacing:'-.02em',
                    border:'1.5px solid var(--ink)',
                  }}>{p.n}</div>
                  <span style={{flex:1}}/>
                  <span className="display" style={{fontSize:16,letterSpacing:'-.005em',lineHeight:1.1}}>{p.role}</span>
                  <span style={{fontSize:12.5,marginTop:8,opacity:.85,lineHeight:1.45}}>{p.line}</span>
                </div>
              );
            })}
          </div>
          <p className="mono" style={{fontSize:11,color:'var(--ink-quiet)',letterSpacing:'.12em',marginTop:18,textAlign:'center'}}>
            ↳ FACES ARRIVE WITH GA. UNTIL THEN — TRUST THE WORK.
          </p>
        </div>
      </section>

      {/* What we believe */}
      <section style={{padding:'96px 0',background:'var(--bone-2)',borderTop:'1px solid var(--ink-line)',borderBottom:'1px solid var(--ink-line)'}}>
        <div className="container" style={{display:'grid',gridTemplateColumns:'minmax(0, .9fr) minmax(0, 1.1fr)',gap:64,alignItems:'start'}}>
          <h2 className="display" style={{margin:0,fontSize:'clamp(40px, 5vw, 72px)',lineHeight:1.0}}>
            WHAT WE{' '}
            <span style={{display:'inline-block'}}>
              <span className="serif-grad" style={{fontSize:'1.05em'}}>believe.</span>
            </span>
          </h2>
          <div style={{display:'flex',flexDirection:'column'}}>
            {beliefs.map((b,i)=>(
              <div key={i} style={{
                display:'grid',gridTemplateColumns:'56px 1fr',gap:20,alignItems:'baseline',
                padding:'18px 0',borderTop: i===0 ? '1px solid var(--ink)' : '1px solid var(--ink-line)',
              }}>
                <span className="mono" style={{fontSize:11,letterSpacing:'.16em',color:'var(--violet)'}}>// {String(i+1).padStart(2,'0')}</span>
                <span style={{fontSize:18,lineHeight:1.5,color:'var(--ink)'}}>{b}</span>
              </div>
            ))}
            <div style={{borderTop:'1px solid var(--ink)'}}/>
          </div>
        </div>
      </section>

      {/* Outro CTA */}
      <section style={{padding:'96px 0'}}>
        <div className="container" style={{textAlign:'center'}}>
          <h2 className="display" style={{margin:'0 0 20px',fontSize:'clamp(40px, 6vw, 88px)',lineHeight:.98}}>
            BUILT IN{' '}
            <span className="serif-grad" style={{fontSize:'1.05em'}}>Berlin.</span>
          </h2>
          <p style={{fontSize:17,color:'var(--ink-soft)',margin:'0 auto 32px',maxWidth:520,lineHeight:1.55}}>
            Want to meet the people behind the masks? Get on the waitlist or drop us a line — we reply fast.
          </p>
          <div style={{display:'flex',gap:10,alignItems:'center',justifyContent:'center',flexWrap:'wrap'}}>
            <a href="#/waitlist" onClick={goWaitlist} className="btn btn-primary">Join the waitlist <span className="arrow">→</span></a>
            <a href="#/contact"  onClick={goContact} className="btn">Talk to a human</a>
          </div>
        </div>
      </section>

      <Footer/>
    </main>
  );
}

Object.assign(window, {About});
