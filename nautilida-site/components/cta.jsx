function CTA(){
  return (
    <section id="pricing" style={{
      padding:'140px 0 120px',
      background:
        // Top fade-in from bone — soft transition from the Security band above
        'linear-gradient(to top, rgba(236,230,216,0) 0%, rgba(236,230,216,0) 50%, var(--bone-2) 100%),'+
        // Lime radial glow on the UPPER-LEFT — mirrored from hero (which is upper-right) for balance
        'radial-gradient(ellipse 75% 95% at 6% 24%, rgba(212,255,61,.55) 0%, rgba(212,255,61,0) 58%),'+
        // Lilac base
        'linear-gradient(135deg, #E8E0FA 0%, #DDD2F6 55%, #E2DAFB 100%)',
    }}>
      <div className="container">
        <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',
          borderTop:'1px solid var(--ink)',borderBottom:'1px solid var(--ink-line)',
          padding:'10px 0',marginBottom:48}}>
          <span className="mono" style={{fontSize:11,letterSpacing:'.16em',display:'inline-flex',alignItems:'center',gap:8}}>
            <span style={{width:6,height:6,borderRadius:999,background:'var(--lime)'}}/>
            NAUTI <span style={{color:'var(--ink-quiet)',marginLeft:14}}>// LOOP</span>
          </span>
          <span className="mono" style={{fontSize:11,color:'var(--ink-quiet)',letterSpacing:'.12em'}}>
          </span>
        </div>

        <h2 className="display" style={{margin:'24px 0 32px',fontSize:'clamp(44px, 6.8vw, 96px)',lineHeight:1.0}}>
          YOUR REVENUE MEMORY,<br/>
          <span style={{display:'inline-block',marginTop:'.14em'}}>
            <span className="serif-grad" style={{fontSize:'1.05em'}}>begins this Monday.</span>
          </span>
        </h2>
        <p style={{fontSize:18,color:'var(--ink-soft)',maxWidth:560,lineHeight:1.55,margin:'0 0 32px'}}>
          Connect HubSpot and Teams in 12 minutes. First brief lands the next Monday at 7:00 AM. Cancel anytime; export everything.
        </p>
        <div style={{display:'flex',gap:10,alignItems:'center',flexWrap:'wrap'}}>
          <a href="#/waitlist" className="btn btn-primary" style={{padding:'16px 28px',fontSize:15}}>
            Join the waitlist <span className="arrow">→</span>
          </a>
          <a href="#/contact" className="btn" style={{padding:'16px 24px',fontSize:15}}>Talk to a human</a>
          <span style={{fontSize:11,color:'var(--ink-quiet)',marginLeft:8}} className="mono">DESIGN PARTNER PROGRAM · NO CREDIT CARD · YOUR DATA, YOUR REGION</span>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, {CTA});
