// HANDOVER — when an AM leaves, the account memory transfers to the new AM directly.
// No re-discovery, no hidden context in inboxes. Always-visible 2-col layout, no CTA.
function Handover(){
  const accounts = [
    { id:'001', name:'Acme',     interactions:47, patterns:6, risks:2 },
    { id:'002', name:'Globex',   interactions:31, patterns:4, risks:0 },
    { id:'003', name:'Initech',  interactions:18, patterns:2, risks:1 },
    { id:'004', name:'Soylent',  interactions:24, patterns:3, risks:0 },
  ];

  return (
    <section style={{padding:'130px 0 130px',background:'var(--bone)'}}>
      <div className="container">
        {/* Frame */}
        <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',
          borderTop:'1px solid var(--ink)',borderBottom:'1px solid var(--ink-line)',
          padding:'10px 0',marginBottom:48}}>
          <span className="mono" style={{fontSize:11,letterSpacing:'.16em',display:'inline-flex',alignItems:'center',gap:8}}>
            <span style={{width:6,height:6,borderRadius:999,background:'var(--lime)'}}/>
            NAUTI <span style={{color:'var(--ink-quiet)',marginLeft:14}}>// HANDOVER</span>
          </span>
          <span className="mono" style={{fontSize:11,color:'var(--ink-quiet)',letterSpacing:'.12em'}}>
          </span>
        </div>

        <div className="row-2" style={{display:'grid',gridTemplateColumns:'minmax(280px, 1fr) minmax(360px, 1.3fr)',gap:56,alignItems:'start'}}>
          <div>
            <h2 className="display" style={{margin:0,lineHeight:1.0,fontSize:'clamp(38px, 5vw, 68px)'}}>
              SOMEONE LEFT?<br/>
              <span style={{display:'inline-block',marginTop:'.14em'}}>
                <span className="serif-grad" style={{fontSize:'1.05em'}}>memory stayed.</span>
              </span>
            </h2>
            <p style={{marginTop:24,fontSize:16,lineHeight:1.55,color:'var(--ink-soft)',maxWidth:440}}>
              Account context, every conversation, every pattern Nauti spotted — handed to the new AM on day one. No re-discovery. No hidden knowledge in inboxes.
            </p>
            <div style={{marginTop:36,display:'flex',gap:36,alignItems:'flex-start',flexWrap:'wrap'}}>
              <div style={{display:'flex',flexDirection:'column'}}>
                <span className="display" style={{fontSize:48,lineHeight:1,letterSpacing:'-.02em'}}>3 days</span>
                <span className="mono" style={{fontSize:10,color:'var(--ink-quiet)',letterSpacing:'.14em',marginTop:8}}>NEW AM RAMP-UP</span>
              </div>
              <div style={{display:'flex',flexDirection:'column'}}>
                <span className="display" style={{fontSize:48,lineHeight:1,letterSpacing:'-.02em'}}>0%</span>
                <span className="mono" style={{fontSize:10,color:'var(--ink-quiet)',letterSpacing:'.14em',marginTop:8}}>CONTEXT LOST</span>
              </div>
            </div>
          </div>

          {/* Memory transfer visual */}
          <div>
            {/* Outgoing → incoming AM strip */}
            <div style={{display:'grid',gridTemplateColumns:'1fr auto 1fr',gap:14,alignItems:'center',marginBottom:18}}>
              <div style={{padding:'12px 14px',display:'flex',alignItems:'center',gap:10,
                border:'1.5px solid var(--ink)',background:'var(--bone-3)',borderRadius:12}}>
                <div style={{width:34,height:34,borderRadius:999,background:'var(--ink-line-2)',
                  display:'flex',alignItems:'center',justifyContent:'center',fontSize:13,fontWeight:600,color:'var(--ink)'}}>MC</div>
                <div style={{lineHeight:1.2}}>
                  <div className="mono" style={{fontSize:9,letterSpacing:'.14em',color:'var(--ink-quiet)'}}>OUTGOING</div>
                  <div style={{fontSize:13}}>M. Chen</div>
                </div>
              </div>
              <span style={{fontSize:22,color:'var(--ink-quiet)'}}>→</span>
              <div style={{padding:'12px 14px',display:'flex',alignItems:'center',gap:10,
                border:'1.5px solid var(--ink)',background:'var(--lime)',borderRadius:12,boxShadow:'4px 4px 0 var(--ink)'}}>
                <div style={{width:34,height:34,borderRadius:999,background:'var(--ink)',color:'var(--lime)',
                  display:'flex',alignItems:'center',justifyContent:'center',fontSize:13,fontWeight:600}}>JK</div>
                <div style={{lineHeight:1.2}}>
                  <div className="mono" style={{fontSize:9,letterSpacing:'.14em',color:'var(--ink)'}}>INCOMING</div>
                  <div style={{fontSize:13,color:'var(--ink)'}}>J. Kaya</div>
                </div>
              </div>
            </div>

            <div className="mono" style={{fontSize:10,color:'var(--ink-quiet)',letterSpacing:'.14em',
              textAlign:'center',padding:'6px 0',marginBottom:14}}>
              ↓ MEMORY HANDED OVER ON DAY ONE ↓
            </div>

            <div style={{display:'flex',flexDirection:'column',gap:10}}>
              {accounts.map((a,i)=>(
                <div key={a.id} style={{
                  display:'grid',gridTemplateColumns:'80px 1fr auto',gap:14,alignItems:'center',
                  padding:'14px 16px',background:'var(--ink)',color:'var(--bone)',
                  border:'1.5px solid var(--ink)',borderRadius:12,
                  animation:`fadeUp .5s ${i*80+200}ms backwards`,
                }}>
                  <span className="mono" style={{fontSize:10,letterSpacing:'.12em',color:'var(--lime)'}}>// {a.id}</span>
                  <div style={{display:'flex',flexDirection:'column',gap:3,minWidth:0}}>
                    <span className="display" style={{fontSize:15,letterSpacing:'-.005em'}}>{a.name}</span>
                    <span style={{fontSize:11,color:'rgba(250,248,241,.6)'}}>
                      {a.interactions} interactions · {a.patterns} patterns flagged · {a.risks} risk{a.risks===1?'':'s'} open
                    </span>
                  </div>
                  <span className="mono" style={{fontSize:10,color:'var(--lime)',letterSpacing:'.14em',whiteSpace:'nowrap'}}>FULL CONTEXT</span>
                </div>
              ))}
            </div>
            <style>{`@keyframes fadeUp{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}`}</style>
          </div>
        </div>
      </div>
    </section>
  );
}

const DashboardsAreOver = Handover;
Object.assign(window, {Handover, DashboardsAreOver});
