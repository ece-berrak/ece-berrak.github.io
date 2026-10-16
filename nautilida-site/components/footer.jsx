const { useState: useStateFooter } = React;

function FooterLink({href, children, external=false}){
  const [h, setH] = useStateFooter(false);
  const extProps = external ? {target:'_blank', rel:'noopener noreferrer'} : {};
  return (
    <a href={href} {...extProps}
      onMouseEnter={()=>setH(true)}
      onMouseLeave={()=>setH(false)}
      style={{
        color: h ? 'var(--lime)' : 'rgba(250,248,241,.85)',
        display:'inline-flex',alignItems:'center',gap:8,
        transition:'color .2s ease',
      }}>
      <span style={{
        display:'inline-block',
        transform: h ? 'translateX(4px)' : 'translateX(0)',
        transition:'transform .25s cubic-bezier(.2,.7,.2,1)',
      }}>{children}</span>
      <span style={{
        fontSize:11,
        opacity: h ? 1 : 0,
        transform: h ? 'translateX(0)' : 'translateX(-4px)',
        transition:'opacity .25s ease, transform .25s cubic-bezier(.2,.7,.2,1)',
      }}>{external ? '↗' : '→'}</span>
    </a>
  );
}

function Footer(){
  const [hover, setHover] = useStateFooter(false);

  // Deep violet base with a lime radial glow on the upper-right — matches the
  // "outcome card" look from the reference image. Default stays solid ink.
  const hoverBg =
    'radial-gradient(ellipse 75% 90% at 88% 22%, rgba(212,255,61,.55), rgba(212,255,61,0) 55%),'+
    'radial-gradient(ellipse 90% 100% at 50% 100%, rgba(45,31,112,.85), rgba(45,31,112,0) 70%),'+
    '#3D2BB8';

  return (
    <footer
      onMouseEnter={()=>setHover(true)}
      onMouseLeave={()=>setHover(false)}
      style={{
        background: hover ? hoverBg : 'var(--ink)',
        color:'var(--bone)',padding:'72px 0 44px',
        transition:'background .55s ease',
      }}>
      <div className="container">
        <div style={{display:'flex',justifyContent:'space-between',flexWrap:'wrap',gap:48,alignItems:'flex-start',marginBottom:48}}>
          <div style={{maxWidth:380}}>
            <Wordmark size={34} tone="light"/>
            <div style={{fontSize:14,color:'rgba(250,248,241,.6)',lineHeight:1.6,marginTop:18}}>
              AI Team Lead for Sales. Cross-team coordination. Rhythm over real-time anxiety.
            </div>
          </div>
          <div style={{display:'flex',gap:48,flexWrap:'wrap'}}>
            <div>
              <div className="mono" style={{fontSize:10,letterSpacing:'.16em',color:'rgba(250,248,241,.4)',marginBottom:14}}>COMPANY</div>
              <div style={{display:'flex',flexDirection:'column',gap:8,fontSize:13}}>
                <FooterLink href="#/about">About</FooterLink>
                <FooterLink href="#/contact">Contact</FooterLink>
                <FooterLink href="#/waitlist">Waitlist</FooterLink>
                <FooterLink href="#/signin">Sign in</FooterLink>
                <FooterLink href="#/privacy">Privacy</FooterLink>
                <FooterLink href="#/terms">Terms</FooterLink>
              </div>
            </div>
            <div>
              <div className="mono" style={{fontSize:10,letterSpacing:'.16em',color:'rgba(250,248,241,.4)',marginBottom:14}}>READING</div>
              <div style={{display:'flex',flexDirection:'column',gap:8,fontSize:13}}>
                <FooterLink href="#/blog">Blog</FooterLink>
                <FooterLink href="/literacy/">Literacy</FooterLink>
                <FooterLink href="#/compare">Compare</FooterLink>
                <FooterLink href="#/use-cases">Use cases</FooterLink>
              </div>
            </div>
          </div>
        </div>
        <div className="mono" style={{
          display:'flex',justifyContent:'space-between',flexWrap:'wrap',gap:12,alignItems:'center',
          fontSize:11,color:'rgba(250,248,241,.4)',letterSpacing:'.08em',
        }}>
          <span style={{display:'inline-flex',alignItems:'center',gap:18,flexWrap:'wrap'}}>
            <span>© 2026 nautilida</span>
            <a href="https://de.linkedin.com/company/nautilida" target="_blank" rel="noopener noreferrer"
              style={{
                color:'rgba(250,248,241,.55)',
                display:'inline-flex',alignItems:'center',gap:5,
                transition:'color .2s ease',
              }}
              onMouseEnter={(e)=>e.currentTarget.style.color='var(--lime)'}
              onMouseLeave={(e)=>e.currentTarget.style.color='rgba(250,248,241,.55)'}
            >
              LinkedIn <span style={{fontSize:10}}>↗</span>
            </a>
            <button
              onClick={()=>window.dispatchEvent(new CustomEvent('open-cookie-settings'))}
              style={{
                background:'transparent',border:'none',padding:0,cursor:'pointer',
                font:'inherit',color:'rgba(250,248,241,.55)',
                letterSpacing:'.08em',
                transition:'color .2s ease',
              }}
              onMouseEnter={(e)=>e.currentTarget.style.color='var(--lime)'}
              onMouseLeave={(e)=>e.currentTarget.style.color='rgba(250,248,241,.55)'}
            >
              Cookie settings
            </button>
          </span>
          <span>Made with patience · Berlin</span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, {Footer});
