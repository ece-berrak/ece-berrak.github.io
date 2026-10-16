// MEMORY — three-layer accordion. Tap a card to expand, only one open at a time.
// Sits after Handover; positions the substrate that makes the rest of the page work.
const { useState: useStateMem } = React;

function Memory(){
  const [open, setOpen] = useStateMem(0);   // first card open by default

  const layers = [
    {
      n:'01',
      label:'Conversation',
      tagline:'Nobody re-asks, nobody re-explains.',
      eyebrow:'◉ CONVERSATION MEMORY',
      headline:'Nobody re-asks. Nobody re-explains.',
      body:"Every ask and every answer — Slack, Teams, email — stays with the team. Come back next week and Nauti knows what was asked, what changed, where it left off.",
    },
    {
      n:'02',
      label:'Pattern',
      tagline:'Drift — before it shows up in the number.',
      eyebrow:'◉ PATTERN MEMORY',
      headline:'Drift, before it shows up in the number.',
      body:'Each account has a shape: cadence, contacts, tone, reorder rhythm. Nauti tracks how that shape drifts week over week, so every owner and leader sees the same shift long before the revenue gap lands on a dashboard.',
    },
    {
      n:'03',
      label:'Loop-fed',
      tagline:'Every Mon → Fri cycle makes it sharper.',
      eyebrow:'◉ BUILT BY THE LOOP',
      headline:'Every cycle, memory gets sharper.',
      body:"The weekly loop isn't just output — it's input too. Each Mon → Fri cycle (the plan, the live routing, the Friday recap) feeds memory back in. Week by week patterns get sharper, coordination tighter, the book better known.",
    },
  ];

  return (
    <section id="memory" style={{padding:'130px 0',background:'var(--bone-2)'}}>
      <div className="container">
        {/* Frame */}
        <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',
          borderTop:'1px solid var(--ink)',borderBottom:'1px solid var(--ink-line)',
          padding:'10px 0',marginBottom:36}}>
          <span className="mono" style={{fontSize:11,letterSpacing:'.16em',display:'inline-flex',alignItems:'center',gap:8}}>
            <span style={{width:6,height:6,borderRadius:999,background:'var(--violet)'}}/>
            NAUTI <span style={{color:'var(--ink-quiet)',marginLeft:14}}>// MEMORY</span>
          </span>
          <span className="mono" style={{fontSize:11,color:'var(--ink-quiet)',letterSpacing:'.12em'}}>
            BACKBONE OF COORDINATION
          </span>
        </div>

        {/* Title block */}
        <div className="row-2" style={{display:'grid',gridTemplateColumns:'minmax(0, 1.05fr) minmax(0, 1fr)',gap:48,alignItems:'end',marginBottom:48}}>
          <h2 className="display" style={{margin:0,fontSize:'clamp(44px, 6.4vw, 84px)',lineHeight:1.0}}>
            YOUR MEMORY.<br/>
            <span style={{display:'inline-block',marginTop:'.18em'}}>
              <span className="serif-grad" style={{fontSize:'1.05em'}}>your patterns.</span>
            </span>
          </h2>
          <div>
            <p style={{margin:'0 0 10px',fontSize:18,lineHeight:1.55,color:'var(--ink)'}}>
              Your stack remembers — so the team stays coordinated.
            </p>
            <p style={{margin:0,fontSize:15,lineHeight:1.6,color:'var(--ink-soft)',maxWidth:520}}>
              Shared memory is what keeps owners, leaders and ops in the same rhythm. Three layers, always on — tap one to dive.
            </p>
          </div>
        </div>

        {/* Accordion */}
        <div style={{display:'flex',flexDirection:'column',gap:14}}>
          {layers.map((L,i)=>{
            const isOpen = open === i;
            return (
              <button
                key={L.n}
                onClick={()=>setOpen(isOpen ? -1 : i)}
                style={{
                  textAlign:'left',cursor:'pointer',
                  background: isOpen ? 'var(--bone-3)' : 'var(--bone)',
                  border:'1.5px solid var(--ink)',
                  borderRadius:14,
                  padding: isOpen ? '26px 28px 30px' : '22px 26px',
                  boxShadow: isOpen ? '8px 8px 0 var(--violet)' : '6px 6px 0 var(--ink)',
                  transition:'background .25s ease, box-shadow .3s ease, padding .3s ease',
                  font:'inherit',color:'inherit',
                  display:'block',width:'100%',
                }}>
                {/* Header row — number, label, tagline, expand indicator */}
                <div className="acc-head" style={{display:'grid',gridTemplateColumns:'56px 130px 1fr 28px',gap:18,alignItems:'baseline'}}>
                  <span className="display acc-num" style={{
                    fontSize:32,letterSpacing:'-.01em',lineHeight:1,
                    color: isOpen ? 'var(--violet)' : 'var(--ink)',
                    transition:'color .25s ease',
                  }}>{L.n}</span>
                  <span className="display acc-label" style={{fontSize:22,letterSpacing:'-.01em',lineHeight:1.1}}>{L.label}</span>
                  <span className="acc-tag" style={{
                    fontSize:14,color:'var(--ink-soft)',lineHeight:1.5,
                    opacity: isOpen ? 0 : 1,
                    maxHeight: isOpen ? 0 : 40,
                    overflow:'hidden',
                    transition:'opacity .2s ease, max-height .3s ease',
                  }}>{L.tagline}</span>
                  <span className="acc-arrow" style={{
                    textAlign:'right',fontSize:18,
                    transform: isOpen ? 'rotate(135deg)' : 'rotate(0deg)',
                    transition:'transform .3s cubic-bezier(.2,.7,.2,1)',
                    color: isOpen ? 'var(--violet)' : 'var(--ink-soft)',
                  }}>→</span>
                </div>

                {/* Expanded body */}
                <div style={{
                  overflow:'hidden',
                  maxHeight: isOpen ? 400 : 0,
                  opacity: isOpen ? 1 : 0,
                  transform: isOpen ? 'translateY(0)' : 'translateY(-6px)',
                  transition:'max-height .45s cubic-bezier(.2,.7,.2,1), opacity .3s ease, transform .35s ease',
                }}>
                  <div style={{marginTop:22,paddingTop:22,borderTop:'1px solid var(--ink-line)'}}>
                    <span className="mono" style={{fontSize:10,letterSpacing:'.16em',color:'var(--violet)'}}>{L.eyebrow}</span>
                    <h3 className="display" style={{margin:'10px 0 14px',fontSize:'clamp(22px, 2.8vw, 32px)',letterSpacing:'-.01em',lineHeight:1.1}}>
                      {L.headline}
                    </h3>
                    <p style={{margin:0,fontSize:15.5,lineHeight:1.6,color:'var(--ink)',maxWidth:720}}>
                      {L.body}
                    </p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Footer note */}
        <div style={{
          marginTop:36,padding:'18px 22px',
          background:'var(--bone-3)',border:'1px dashed var(--ink-line-2)',borderRadius:12,
          display:'flex',alignItems:'center',gap:12,flexWrap:'wrap',
        }}>
          <span className="mono" style={{fontSize:10,letterSpacing:'.14em',color:'var(--violet)'}}>// ISOLATED</span>
          <span style={{fontSize:14,color:'var(--ink-soft)',lineHeight:1.5}}>
            Your memory, your patterns. Trained on your team's data only, isolated from every other customer.
          </span>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, {Memory});
