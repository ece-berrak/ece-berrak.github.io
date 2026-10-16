// Integrations / Stack — what's live + a click-revealed two-page panel:
//   page 1 → Integration roadmap (Pipedrive + Slack are the next two)
//   page 2 → What's Next (virtual capabilities — proactive ping, meeting, chat, follow-through)
const { useState: useStateI } = React;

function Integrations(){
  const tiles = [
    {n:'HubSpot',         s:'live'},
    {n:'Microsoft Teams', s:'live'},
    {n:'+ yours',         s:'by request'},
    {n:'More coming',     s:'soon'},
  ];

  // Roadmap: Pipedrive + Slack are the immediate next ones.
  const roadmap = [
    {n:'Pipedrive', s:'next up'},
    {n:'Slack',     s:'next up'},
    {n:'Gmail',     s:'by request'},
    {n:'Outlook',   s:'by request'},
    {n:'Salesforce',s:'by request'},
    {n:'Notion',    s:'by request'},
    {n:'Zapier',    s:'by request'},
    {n:'Tell us yours', s:'open'},
  ];

  // What's Next — virtual capabilities (was its own home section)
  const future = [
    { n:'01', label:'PROACTIVE PING',
      body:'Nauti nudges the right AM in Slack or Teams the moment a play opens — evidence attached, not noise.',
      status:'shipping soon', fill:'lime' },
    { n:'02', label:'MEETING NOTES',
      body:'Joins your customer calls, captures decisions and signals, files them as account memory.',
      status:'in build', fill:'ink' },
    { n:'03', label:'TEAM CHAT PRESENCE',
      body:'Answers portfolio and account questions inside your team channel — same brain, different surface.',
      status:'in build', fill:'violet' },
    { n:'04', label:'AUTO FOLLOW-THROUGH',
      body:'Drafts the email, books the exec follow-up, ships the loop without you switching tabs.',
      status:'next', fill:'lime' },
  ];

  const [open, setOpen] = useStateI(false);
  const [page, setPage] = useStateI(1);

  return (
    <section id="integrations" style={{padding:'130px 0',background:'var(--bone)'}}>
      <div className="container">
        <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',
          borderTop:'1px solid var(--ink)',borderBottom:'1px solid var(--ink-line)',
          padding:'10px 0',marginBottom:36}}>
          <span className="mono" style={{fontSize:11,letterSpacing:'.16em',display:'inline-flex',alignItems:'center',gap:8}}>
            <span style={{width:6,height:6,borderRadius:999,background:'var(--lime)'}}/>
            NAUTI <span style={{color:'var(--ink-quiet)',marginLeft:14}}>// STACK</span>
          </span>
          <span className="mono" style={{fontSize:11,color:'var(--ink-quiet)',letterSpacing:'.12em'}}>
          </span>
        </div>

        <div className="row-2" style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:48,alignItems:'end',marginBottom:48}}>
          <h2 className="display" style={{margin:0,fontSize:'clamp(40px, 5.4vw, 72px)',lineHeight:1.0}}>
            ON YOUR STACK.<br/>
            <span style={{display:'inline-block',marginTop:'.14em'}}>
              <span className="serif-grad" style={{fontSize:'1.05em'}}>we listen.</span>
            </span>
          </h2>
          <p style={{fontSize:17,color:'var(--ink-soft)',lineHeight:1.55,maxWidth:460,margin:0}}>
            Nautilida lives on top of HubSpot and Microsoft Teams today. Read-only by default. Every signal time-stamped, every claim sourced. More integrations soon — bring yours.
          </p>
        </div>

        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit, minmax(200px, 1fr))',gap:14}}>
          {tiles.map((t,i)=>{
            const live  = t.s==='live';
            const soon  = t.s==='soon';
            const byReq = t.s==='by request';
            const bg = live?'var(--lime)':soon?'var(--bone-3)':byReq?'var(--violet)':'var(--ink)';
            const fg = live?'var(--ink)':soon?'var(--ink)':'var(--bone)';
            return (
              <div key={i} className={'tile-hover'+(i%2?' right':'')} style={{
                padding:'20px 20px 18px',aspectRatio:'1 / .9',
                background:bg,color:fg,
                border:'1.5px solid var(--ink)',borderRadius:12,
                display:'flex',flexDirection:'column',
                boxShadow: live?'5px 5px 0 var(--ink)':byReq?'5px 5px 0 var(--ink)':'none',
                cursor:'pointer',
              }}>
                <span className="mono" style={{fontSize:10,letterSpacing:'.14em',opacity:.75}}>// {String(i+1).padStart(2,'0')}</span>
                <span style={{flex:1}}/>
                <span className="display" style={{fontSize:22,letterSpacing:'-.01em',lineHeight:1.05}}>{t.n}</span>
                <span className="mono" style={{fontSize:10,marginTop:6,letterSpacing:'.14em',opacity:live?1:.75}}>{t.s.toUpperCase()}</span>
              </div>
            );
          })}
        </div>

        {/* Trust bullets + click-CTA */}
        <div style={{marginTop:32,display:'flex',justifyContent:'space-between',gap:24,flexWrap:'wrap',alignItems:'flex-end'}}>
          <div style={{display:'flex',gap:8,flexWrap:'wrap'}}>
            {['Read-only','OAuth 2.0','Region-locked','Zero training on your data'].map(t=>(
              <span key={t} className="mono" style={{fontSize:11,padding:'8px 14px',border:'1px solid var(--ink)',borderRadius:999,color:'var(--ink)'}}>{t}</span>
            ))}
          </div>
          <div style={{display:'flex',flexDirection:'column',alignItems:'flex-end',gap:6}}>
            <button className="btn" onClick={()=>{ setOpen(o=>!o); if (!open) setPage(1); }}
              style={open ? {background:'var(--ink)',color:'var(--bone)',borderColor:'var(--ink)'} : {}}>
              {open ? 'Close ×' : <>See what's coming <span className="arrow">→</span></>}
            </button>
            <span className="mono" style={{fontSize:10,letterSpacing:'.14em',color:'var(--ink-quiet)'}}>
              ↳ {open ? 'TWO PAGES · ROADMAP + VIRTUAL' : 'TAP TO OPEN ROADMAP + WHAT\'S NEXT'}
            </span>
          </div>
        </div>

        {/* Click-revealed panel with two pages */}
        <div style={{
          overflow:'hidden',
          maxHeight: open ? 1600 : 0,
          opacity:   open ? 1 : 0,
          transform: `translateY(${open ? 0 : -8}px)`,
          transition:'max-height .55s cubic-bezier(.2,.7,.2,1), opacity .35s ease, transform .35s ease',
          willChange:'max-height, opacity, transform',
        }}>
          <div style={{
            marginTop:24,padding:'24px 26px 28px',
            border:'1.5px solid var(--ink)',borderRadius:18,
            background:'var(--bone-3)',boxShadow:'8px 8px 0 var(--violet)',
          }}>
            {/* Tab bar */}
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:24,flexWrap:'wrap',gap:14}}>
              <div style={{display:'flex',gap:0,border:'1px solid var(--ink)',borderRadius:999,overflow:'hidden'}}>
                {[
                  [1,'// 01  ROADMAP'],
                  [2,'// 02  WHAT\'S NEXT'],
                ].map(([k,l])=>(
                  <button key={k} onClick={()=>setPage(k)} className="mono" style={{
                    padding:'10px 18px',fontSize:11,border:0,cursor:'pointer',letterSpacing:'.14em',
                    background: page===k ? 'var(--ink)' : 'transparent',
                    color: page===k ? 'var(--bone)' : 'var(--ink)',
                  }}>{l}</button>
                ))}
              </div>
              <a href="#/contact" className="mono" style={{fontSize:10,letterSpacing:'.14em',color:'var(--ink-quiet)'}}>REQUEST AN INTEGRATION →</a>
            </div>

            {/* PAGE 1 — Roadmap */}
            {page===1 && (
              <div>
                <h3 className="display" style={{margin:'0 0 8px',fontSize:'clamp(28px, 3.6vw, 44px)',lineHeight:1.0}}>
                  WHAT'S COMING TO YOUR STACK.
                </h3>
                <p style={{fontSize:14,color:'var(--ink-soft)',margin:'0 0 18px',lineHeight:1.55,maxWidth:540}}>
                  We ship integrations in waitlist order. <strong>Pipedrive</strong> and <strong>Slack</strong> are the next two on deck.
                </p>

                <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit, minmax(200px, 1fr))',gap:10}}>
                  {roadmap.map((r,i)=>{
                    const open    = r.s==='open';
                    const nextUp  = r.s==='next up';
                    const bg = open ? 'var(--lime)' : nextUp ? 'var(--ink)' : 'var(--bone)';
                    const fg = open ? 'var(--ink)' : nextUp ? 'var(--bone)' : 'var(--ink)';
                    const dot = nextUp ? 'var(--lime)' : open ? 'var(--ink)' : 'var(--violet)';
                    return (
                      <div key={i} style={{
                        display:'grid',gridTemplateColumns:'1fr auto',gap:10,alignItems:'center',
                        padding:'12px 14px',background:bg,color:fg,
                        border:'1.5px solid var(--ink)',borderRadius:10,
                        boxShadow: open ? '4px 4px 0 var(--ink)' : nextUp ? '4px 4px 0 var(--lime)' : 'none',
                        animation:`fadeUpI .4s ${i*45+120}ms backwards`,
                      }}>
                        <div style={{display:'flex',alignItems:'center',gap:10,minWidth:0}}>
                          <span style={{width:6,height:6,borderRadius:999,background:dot,flexShrink:0}}/>
                          <span style={{fontSize:14,letterSpacing:'-.005em'}}>{r.n}</span>
                        </div>
                        <span className="mono" style={{fontSize:9,letterSpacing:'.14em',opacity:.8,whiteSpace:'nowrap'}}>{r.s.toUpperCase()}</span>
                      </div>
                    );
                  })}
                </div>

                <p style={{fontSize:13,color:'var(--ink-soft)',marginTop:16,lineHeight:1.5}}>
                  If your stack isn't on the list, tell us. Design partners who arrive early get integration priority.
                </p>
              </div>
            )}

            {/* PAGE 2 — What's Next */}
            {page===2 && (
              <div>
                <h3 className="display" style={{margin:'0 0 8px',fontSize:'clamp(28px, 3.6vw, 44px)',lineHeight:1.0}}>
                  MORE TO COME.{' '}
                  <span className="serif-grad" style={{fontSize:'1.05em'}}>the loop, expanded.</span>
                </h3>
                <p style={{fontSize:14,color:'var(--ink-soft)',margin:'0 0 18px',lineHeight:1.55,maxWidth:560}}>
                  Today Nauti listens, briefs, and remembers. Soon it picks up the phone — drafts the email, joins the call, ships the follow-through.
                </p>

                <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit, minmax(240px, 1fr))',gap:12}}>
                  {future.map((it,i)=>{
                    const isInk    = it.fill==='ink';
                    const isLime   = it.fill==='lime';
                    const isViolet = it.fill==='violet';
                    const bg = isInk?'var(--ink)':isLime?'var(--lime)':isViolet?'var(--violet)':'var(--bone)';
                    const fg = isInk||isViolet ? 'var(--bone)' : 'var(--ink)';
                    const isLight = isLime;
                    return (
                      <div key={it.n} style={{
                        padding:'18px 18px 16px',
                        background:bg,color:fg,
                        border:'1.5px solid var(--ink)',borderRadius:12,
                        boxShadow: isLime ? '4px 4px 0 var(--ink)' : isViolet ? '4px 4px 0 var(--lime)' : '4px 4px 0 var(--lime)',
                        display:'flex',flexDirection:'column',minHeight:200,
                        animation:`fadeUpI .4s ${i*60+150}ms backwards`,
                      }}>
                        <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:14,gap:8}}>
                          <span className="mono" style={{fontSize:10,letterSpacing:'.16em',opacity:.75}}>// {it.n}</span>
                          <span className="mono" style={{
                            fontSize:9,letterSpacing:'.14em',padding:'3px 8px',borderRadius:999,whiteSpace:'nowrap',
                            border:'1px solid '+(isLight?'var(--ink)':'rgba(250,248,241,.45)'),
                            background:isLight ? 'rgba(14,13,20,.08)' : 'rgba(250,248,241,.10)',
                          }}>{it.status.toUpperCase()}</span>
                        </div>
                        <span className="display" style={{fontSize:18,lineHeight:1.05,letterSpacing:'-.005em',marginBottom:10}}>{it.label}</span>
                        <span style={{fontSize:13,lineHeight:1.5,opacity:.88}}>{it.body}</span>
                      </div>
                    );
                  })}
                </div>

                <p className="mono" style={{fontSize:11,letterSpacing:'.14em',color:'var(--ink-quiet)',marginTop:18,textAlign:'center'}}>
                  ↳ NONE OF THESE ARE LIVE TODAY. WE SHIP AS WE'RE SURE.
                </p>
              </div>
            )}
          </div>
        </div>
        <style>{`@keyframes fadeUpI{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:none}}`}</style>
      </div>
    </section>
  );
}

Object.assign(window, {Integrations});
