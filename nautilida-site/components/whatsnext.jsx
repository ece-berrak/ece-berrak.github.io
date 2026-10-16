// "// WHAT'S NEXT" — virtual AI team lead roadmap.  None of these are live today.
// Sits between Handover and Evidence in the home flow.
function WhatsNext(){
  const items = [
    {
      n:'01', label:'PROACTIVE PING',
      body:'Nauti nudges the right AM in Slack or Teams the moment a play opens — evidence attached, not noise.',
      status:'shipping soon', fill:'lime',
    },
    {
      n:'02', label:'MEETING NOTES',
      body:'Joins your customer calls, captures decisions and signals, files them as account memory.',
      status:'in build', fill:'ink',
    },
    {
      n:'03', label:'TEAM CHAT PRESENCE',
      body:'Answers portfolio and account questions inside your team channel — same brain, different surface.',
      status:'in build', fill:'violet',
    },
    {
      n:'04', label:'AUTO FOLLOW-THROUGH',
      body:'Drafts the email, books the exec follow-up, ships the loop without you switching tabs.',
      status:'next', fill:'lime',
    },
  ];

  return (
    <section style={{padding:'130px 0',background:'var(--bone)'}}>
      <div className="container">
        {/* Frame */}
        <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',
          borderTop:'1px solid var(--ink)',borderBottom:'1px solid var(--ink-line)',
          padding:'10px 0',marginBottom:36}}>
          <span className="mono" style={{fontSize:11,letterSpacing:'.16em',display:'inline-flex',alignItems:'center',gap:8}}>
            <span style={{width:6,height:6,borderRadius:999,background:'var(--lime)'}}/>
            NAUTI <span style={{color:'var(--ink-quiet)',marginLeft:14}}>// WHAT'S NEXT</span>
          </span>
          <span className="mono" style={{fontSize:11,color:'var(--ink-quiet)',letterSpacing:'.12em'}}>
          </span>
        </div>

        <div style={{display:'grid',gridTemplateColumns:'minmax(280px, .95fr) minmax(280px, 1.1fr)',gap:64,alignItems:'end',marginBottom:48}}>
          <h2 className="display" style={{margin:0,fontSize:'clamp(40px, 5.4vw, 72px)',lineHeight:1.0}}>
            MORE TO COME.<br/>
            <span style={{display:'inline-block',marginTop:'.14em'}}>
              <span className="serif-grad" style={{fontSize:'1.05em'}}>the loop, expanded.</span>
            </span>
          </h2>
          <p style={{fontSize:17,color:'var(--ink-soft)',lineHeight:1.55,maxWidth:480,margin:0}}>
            Today Nauti listens, briefs, and remembers. Soon it picks up the phone — drafts the email, joins the call, ships the follow-through. Cross-team coordination, automated.
          </p>
        </div>

        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit, minmax(260px, 1fr))',gap:14}}>
          {items.map((it,i)=>{
            const isInk    = it.fill==='ink';
            const isLime   = it.fill==='lime';
            const isViolet = it.fill==='violet';
            const bg = isInk?'var(--ink)':isLime?'var(--lime)':isViolet?'var(--violet)':'var(--bone-3)';
            const fg = isInk||isViolet ? 'var(--bone)' : 'var(--ink)';
            const isLight = isLime;
            return (
              <div key={it.n} className={'tile-hover'+(i%2?' right':'')} style={{
                padding:'22px 22px 20px',
                background:bg,color:fg,
                border:'1.5px solid var(--ink)',borderRadius:14,
                boxShadow: isLime ? '5px 5px 0 var(--ink)' : isViolet ? '5px 5px 0 var(--lime)' : '5px 5px 0 var(--lime)',
                display:'flex',flexDirection:'column',minHeight:230,
                cursor:'pointer',
              }}>
                <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:18,gap:8}}>
                  <span className="mono" style={{fontSize:10,letterSpacing:'.16em',opacity:.75}}>// {it.n}</span>
                  <span className="mono" style={{
                    fontSize:9,letterSpacing:'.14em',padding:'4px 8px',borderRadius:999,whiteSpace:'nowrap',
                    border:'1px solid '+(isLight?'var(--ink)':'rgba(250,248,241,.45)'),
                    background:isLight ? 'rgba(14,13,20,.08)' : 'rgba(250,248,241,.10)',
                  }}>
                    {it.status.toUpperCase()}
                  </span>
                </div>
                <span className="display" style={{fontSize:20,lineHeight:1.05,letterSpacing:'-.005em',marginBottom:12}}>{it.label}</span>
                <span style={{fontSize:13.5,lineHeight:1.5,opacity:.88}}>{it.body}</span>
              </div>
            );
          })}
        </div>

        <p className="mono" style={{fontSize:11,letterSpacing:'.14em',color:'var(--ink-quiet)',marginTop:28,textAlign:'center'}}>
          ↳ NONE OF THESE ARE LIVE TODAY. WE SHIP AS WE'RE SURE.
        </p>
      </div>
    </section>
  );
}

Object.assign(window, {WhatsNext});
