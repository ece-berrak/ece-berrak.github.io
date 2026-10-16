// Evidence Bridge — cream layout, black claim cards, lime accent on active
const { useState: useStateE } = React;

function EvidenceBridge(){
  const claims = [
    {
      id:'c1',
      claim:'Acme order is at risk of slipping past expected close.',
      verdict:'risk',
      signals:[
        {src:'HubSpot',ts:'Apr 30 · 14:02', text:'Order health 82 → 54 (last 14 days)'},
        {src:'HubSpot',ts:'Apr 30 · 09:11', text:'AOV trend −18% wk/wk on the recurring order line'},
        {src:'HubSpot',ts:'Apr 28 · 09:11', text:'Champion (Ops Lead) auto-reply: out-of-office through May 6'},
        {src:'Teams',  ts:'Apr 27 · 16:48', text:'#nauti-acme: "they re-opened the procurement checklist"'},
      ],
      pattern:'3 of last 4 orders showing this combo (champion silent + AOV drop + procurement reopen) slipped past expected revenue date.'
    },
    {
      id:'c2',
      claim:'Globex is trending to expand on its repeat order.',
      verdict:'good',
      signals:[
        {src:'HubSpot',ts:'May 02 · 10:14', text:'Procurement contact added to order record'},
        {src:'HubSpot',ts:'May 01 · 15:30', text:'Order frequency held: weekly cadence intact for 6 weeks'},
        {src:'Teams',  ts:'Apr 30 · 17:55', text:'Exec sponsor replied 4× on the commercial thread'},
        {src:'HubSpot',ts:'Apr 29 · all-day',text:'Order tag confirmed: office (3 sites added)'},
      ],
      pattern:'When exec sponsor replies in the repeat window AND new sites are added, expansion closes 84% of the time.'
    },
    {
      id:'c3',
      claim:'Initech demo→order gap is the bottleneck.',
      verdict:'watch',
      signals:[
        {src:'HubSpot',ts:'Apr 12',         text:'Demo logged · pricing still not sent (T+22d)'},
        {src:'Teams',  ts:'Apr 18 · 12:03', text:'AM asked Ops: "can we get pricing for Initech?" (no reply)'},
        {src:'HubSpot',ts:'Apr 22 · 08:30', text:'Buyer note on order: "any update on the numbers?"'},
      ],
      pattern:'Median order-cycle penalty for >14d demo→pricing gap: +31 days, −18% close rate.'
    },
  ];
  const [active, setActive] = useStateE('c1');
  const cur = claims.find(c=>c.id===active);
  const verdictDot = {risk:'var(--rose)',good:'var(--lime)',watch:'var(--amber)'}[cur.verdict];

  return (
    <section id="evidence" style={{padding:'130px 0',background:'var(--bone-2)'}}>
      <div className="container">
        <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',
          borderTop:'1px solid var(--ink)',borderBottom:'1px solid var(--ink-line)',
          padding:'10px 0',marginBottom:36}}>
          <span className="mono" style={{fontSize:11,letterSpacing:'.16em',display:'inline-flex',alignItems:'center',gap:8}}>
            <span style={{width:6,height:6,borderRadius:999,background:'var(--lime)'}}/>
            NAUTI <span style={{color:'var(--ink-quiet)',marginLeft:14}}>// EVIDENCE</span>
          </span>
          <span className="mono" style={{fontSize:11,color:'var(--ink-quiet)',letterSpacing:'.12em'}}>
          </span>
        </div>

        <h2 className="display" style={{margin:'0 0 48px',fontSize:'clamp(44px, 6.4vw, 84px)',lineHeight:1.0}}>
          EVERY CLAIM,<br/>
          <span style={{display:'inline-block',marginTop:'.18em'}}><span className="stick">HAS A BRIDGE.</span></span>
        </h2>

        <div className="row-2" style={{display:'grid',gridTemplateColumns:'1fr 1.2fr',gap:64,alignItems:'start'}}>
          <div>
            <p style={{fontSize:17,color:'var(--ink-soft)',marginTop:0,lineHeight:1.55,maxWidth:460}}>
              Nauti is deterministic. If there isn't raw evidence for a claim, the claim isn't made. Tap a verdict — see the exact signals that built it.
            </p>

            <div style={{marginTop:32,display:'flex',flexDirection:'column',gap:10}}>
              {claims.map(c=>{
                const isActive = active===c.id;
                const dot = {risk:'var(--rose)',good:'var(--lime)',watch:'var(--amber)'}[c.verdict];
                return (
                  <button key={c.id} onClick={()=>setActive(c.id)} style={{
                    textAlign:'left',padding:'16px 18px',borderRadius:12,cursor:'pointer',
                    border:'1.5px solid var(--ink)',
                    background: isActive ? 'var(--ink)' : 'var(--bone-3)',
                    color: isActive ? 'var(--bone)' : 'var(--ink)',
                    display:'flex',alignItems:'center',gap:14,
                    boxShadow: isActive ? '4px 4px 0 var(--lime)' : 'none',
                    transition:'transform .15s ease',
                  }}>
                    <span style={{width:9,height:9,borderRadius:999,background:dot,boxShadow:isActive?`0 0 8px ${dot}`:'none'}}/>
                    <span style={{fontSize:15,flex:1}}>{c.claim}</span>
                    <span className="mono" style={{fontSize:10,letterSpacing:'.1em',opacity:.7}}>{c.signals.length} SIGNALS</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div>
            <div style={{
              padding:'16px 18px',borderRadius:12,
              border:'1.5px solid var(--ink)',
              background: 'var(--lime)',color:'var(--ink)',
              fontSize:15,marginBottom:14,
              boxShadow:'4px 4px 0 var(--ink)',
            }}>
              <span className="mono" style={{fontSize:10,letterSpacing:'.12em',marginRight:10}}>VERDICT</span>{cur.claim}
            </div>

            <div className="mono" style={{fontSize:10,color:'var(--ink-quiet)',letterSpacing:'.12em',margin:'14px 0 10px'}}>
              EVIDENCE BRIDGE · {cur.signals.length} RAW SIGNALS
            </div>

            <div style={{display:'flex',flexDirection:'column',gap:8}}>
              {cur.signals.map((s,i)=>(
                <div key={cur.id+'-'+i} style={{
                  display:'grid',gridTemplateColumns:'90px 110px 1fr',gap:12,alignItems:'center',
                  padding:'12px 14px',borderRadius:10,
                  background:'var(--ink)',color:'var(--bone)',
                  border:'1px solid var(--ink)',
                  animation:`fadeUp .4s ${i*70}ms backwards`,
                }}>
                  <span className="mono" style={{fontSize:10,color:'var(--lime)',letterSpacing:'.1em'}}>{s.src.toUpperCase()}</span>
                  <span className="mono" style={{fontSize:10,color:'rgba(250,248,241,.55)'}}>{s.ts}</span>
                  <span style={{fontSize:13,color:'rgba(250,248,241,.85)'}}>{s.text}</span>
                </div>
              ))}
            </div>

            <div style={{marginTop:18,padding:'14px 16px',borderRadius:12,
              border:'1.5px dashed var(--ink-line-2)',background:'var(--bone-3)',
              fontSize:13,color:'var(--ink)',lineHeight:1.5}}>
              <span className="mono" style={{fontSize:10,letterSpacing:'.12em',marginRight:8,color:'var(--ink-quiet)'}}>PATTERN</span>
              {cur.pattern}
            </div>

            <style>{`@keyframes fadeUp{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:none}}`}</style>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, {EvidenceBridge});
