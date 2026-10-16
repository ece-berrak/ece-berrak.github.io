// Security band — black card on cream, lime accent
function Security(){
  const facts = [
    {k:'AES-256',     v:'Encryption at rest & in transit'},
    {k:'SOC 2 II',    v:'Annually audited'},
    {k:'EU · US',     v:'Pick your data residency'},
    {k:'ZERO-TRAIN',  v:'Your data never trains a global model'},
    {k:'READ-ONLY',   v:'No writes back to source systems by default'},
    {k:'SSO · SCIM',  v:'Okta, Azure AD, Google Workspace'},
  ];
  return (
    <section id="security" style={{padding:'130px 0',background:'var(--bone-2)'}}>
      <div className="container">
        <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',
          borderTop:'1px solid var(--ink)',borderBottom:'1px solid var(--ink-line)',
          padding:'10px 0',marginBottom:36}}>
          <span className="mono" style={{fontSize:11,letterSpacing:'.16em',display:'inline-flex',alignItems:'center',gap:8}}>
            <span style={{width:6,height:6,borderRadius:999,background:'var(--lime)'}}/>
            NAUTI <span style={{color:'var(--ink-quiet)',marginLeft:14}}>// SECURITY</span>
          </span>
          <span className="mono" style={{fontSize:11,color:'var(--ink-quiet)',letterSpacing:'.12em'}}>
          </span>
        </div>

        <div className="security-card" style={{
          background:
            // Lime radial glow on the upper-right — same dialect as hero/CTA but on a dark base
            'radial-gradient(ellipse 70% 90% at 90% 22%, rgba(212,255,61,.42), rgba(212,255,61,0) 55%),'+
            // Soft violet glow lower-left for depth
            'radial-gradient(ellipse 70% 80% at 12% 88%, rgba(140,108,255,.35), rgba(140,108,255,0) 60%),'+
            // Deep violet base — matches the reference outcome card
            '#3D2BB8',
          color:'var(--bone)',borderRadius:18,padding:'72px 56px',
          border:'1.5px solid var(--ink)',boxShadow:'10px 10px 0 var(--lime)',
          position:'relative',overflow:'hidden',
        }}>
          <div className="row-2" style={{display:'grid',gridTemplateColumns:'1.1fr 1fr',gap:56,alignItems:'end',marginBottom:48}}>
            <h2 className="display" style={{margin:0,fontSize:'clamp(44px, 6vw, 84px)',color:'var(--bone)',lineHeight:1.0}}>
              WE DON'T GUESS.<br/>
              <span style={{display:'inline-block',marginTop:'.14em'}}>
                <span style={{
                fontFamily:'"Instrument Serif", ui-serif, Georgia, serif',
                fontStyle:'italic',fontWeight:400,letterSpacing:'-.01em',fontSize:'1.05em',
                backgroundImage:'linear-gradient(135deg, #D4FF3D 0%, #E4FF7A 30%, #B8A5FF 65%, #5B3FE6 100%)',
                WebkitBackgroundClip:'text',backgroundClip:'text',
                WebkitTextFillColor:'transparent',color:'transparent',
              }}>we prove.</span>
              </span>
            </h2>
            <p style={{fontSize:17,color:'rgba(250,248,241,.78)',lineHeight:1.55,margin:0}}>
              Nautilida is deterministic. If there isn't raw evidence for a claim, the claim isn't made — and your security team can audit the path from any number on screen back to the source row that produced it.
            </p>
          </div>
          <div className="facts-3" style={{display:'grid',gridTemplateColumns:'repeat(3, 1fr)',gap:1,background:'rgba(250,248,241,.18)',borderRadius:12,overflow:'hidden'}}>
            {facts.map((f,i)=>(
              <div key={i} style={{background:'rgba(14,13,20,.42)',padding:'28px 26px',display:'flex',flexDirection:'column',gap:10,backdropFilter:'blur(2px)'}}>
                <span className="display" style={{fontSize:24,color:'var(--lime)',lineHeight:1}}>{f.k}</span>
                <span style={{fontSize:14,color:'rgba(250,248,241,.78)'}}>{f.v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, {Security});
