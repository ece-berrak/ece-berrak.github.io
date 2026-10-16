// Sign-in page — non-functional during beta. Two-panel split:
//   Left  : deep violet gradient with brand statement (mirrors the home hero voice)
//   Right : lilac → lime gradient with the styled form + waitlist gating message
const { useState: useStateS } = React;

function SignIn(){
  const [email, setEmail] = useStateS('');
  const [pw, setPw]       = useStateS('');
  const [shake, setShake] = useStateS(false);

  const handleSubmit = (e)=>{
    e.preventDefault();
    // Beta gate — no real auth wired up. Shake the form and show the message.
    setShake(true);
    setTimeout(()=>setShake(false), 600);
  };

  const goHome = (e)=>{ e.preventDefault(); window.location.hash = ''; };

  return (
    <main style={{
      minHeight:'100vh',display:'grid',
      gridTemplateColumns:'repeat(auto-fit, minmax(380px, 1fr))',
      background:'var(--bone)',
    }}>
      {/* LEFT — deep violet brand panel */}
      <section style={{
        position:'relative',padding:'48px',display:'flex',flexDirection:'column',
        background:`
          radial-gradient(900px 700px at 80% 20%, rgba(212,255,61,.18), transparent 55%),
          radial-gradient(800px 600px at 20% 80%, rgba(180,150,255,.35), transparent 60%),
          linear-gradient(150deg, #4F32D8 0%, #5B3FE6 35%, #4127B0 70%, #2D1F70 100%)`,
        color:'var(--shell)',overflow:'hidden',minHeight:520,
      }}>
        {/* Top: wordmark home link */}
        <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
          <a href="#" onClick={goHome} style={{display:'inline-flex'}}>
            <Wordmark size={24} tone="light"/>
          </a>
          <span className="mono" style={{fontSize:10,letterSpacing:'.16em',color:'rgba(250,248,241,.65)',
            padding:'5px 10px',border:'1px solid rgba(250,248,241,.25)',borderRadius:999}}>
            // SIGN IN
          </span>
        </div>

        {/* Middle: brand statement */}
        <div style={{flex:1,display:'flex',alignItems:'center',marginTop:48,marginBottom:48}}>
          <div>
            <div style={{display:'inline-block',marginBottom:24}}>
              <span className="stick" style={{
                display:'inline-block',padding:'10px 18px',
                fontFamily:'"Geist", sans-serif',fontWeight:800,fontSize:'clamp(24px, 3vw, 36px)',
                letterSpacing:'-.04em',lineHeight:1,
                boxShadow:'4px 4px 0 var(--violet-deep)',transform:'rotate(-1.2deg)',
                border:'1.5px solid var(--violet-deep)',
              }}>welcome back.</span>
            </div>
            <h1 className="display" style={{
              margin:'0 0 24px',fontSize:'clamp(40px, 5.4vw, 76px)',
              lineHeight:1.0,letterSpacing:'-.025em',color:'var(--shell)',
            }}>
              YOUR LOOP{' '}
              <span style={{display:'inline-block',marginTop:'.06em'}}>
                <span style={{
                  fontFamily:'"Instrument Serif", serif',fontStyle:'italic',
                  fontWeight:400,letterSpacing:'-.01em',textTransform:'none',
                  color:'var(--lilac)',fontSize:'1.05em',
                }}>is waiting.</span>
              </span>
            </h1>
            <p style={{fontSize:16,color:'rgba(250,248,241,.78)',lineHeight:1.55,maxWidth:420,margin:0}}>
              Mondays at 7. Fridays at 5. The same revenue memory you left on Friday — already triaged when you sit down.
            </p>
          </div>
        </div>

        {/* Bottom: design partners credit */}
        <div className="mono" style={{fontSize:10,color:'rgba(250,248,241,.55)',letterSpacing:'.14em',
          display:'flex',alignItems:'center',gap:10,flexWrap:'wrap'}}>
          <span style={{width:6,height:6,borderRadius:999,background:'var(--lime)',boxShadow:'0 0 10px var(--lime)'}}/>
          DESIGN PARTNER PROGRAM · BETA · BERLIN
        </div>
      </section>

      {/* RIGHT — lilac/lime form panel */}
      <section style={{
        position:'relative',padding:'48px',display:'flex',flexDirection:'column',
        background:`
          radial-gradient(900px 700px at 90% 0%, rgba(212,255,61,.45), transparent 55%),
          linear-gradient(160deg, #EFE7FF 0%, #E2DAFB 50%, #DCD2F8 100%)`,
        color:'var(--ink)',minHeight:520,
      }}>
        <div style={{display:'flex',justifyContent:'flex-end'}}>
          <a href="#" onClick={goHome} className="mono"
            style={{fontSize:11,letterSpacing:'.14em',color:'var(--ink-soft)',
              padding:'8px 14px',border:'1px solid var(--ink-line-2)',borderRadius:999,
              background:'rgba(255,255,255,.4)'}}>
            ← BACK TO SITE
          </a>
        </div>

        <div style={{flex:1,display:'flex',alignItems:'center',justifyContent:'center',padding:'48px 0'}}>
          <form onSubmit={handleSubmit}
            style={{
              width:'100%',maxWidth:440,
              display:'flex',flexDirection:'column',gap:18,
              animation: shake ? 'shake .5s' : 'none',
            }}>
            <h2 className="display" style={{margin:'0 0 8px',fontSize:'clamp(40px, 5.4vw, 64px)',lineHeight:1.0,letterSpacing:'-.025em'}}>
              SIGN IN.
            </h2>
            <p style={{fontSize:14,color:'var(--ink-soft)',margin:'0 0 18px',lineHeight:1.55}}>
              Use the email tied to your design-partner account.
            </p>

            <label style={{display:'flex',flexDirection:'column',gap:8}}>
              <span className="mono" style={{fontSize:10,letterSpacing:'.16em',color:'var(--ink-quiet)'}}>EMAIL</span>
              <input type="email" required value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="you@company.com"
                style={{
                  padding:'14px 16px',fontSize:15,border:'1.5px solid var(--ink)',borderRadius:10,
                  background:'rgba(255,255,255,.7)',color:'var(--ink)',
                  fontFamily:'"Geist", sans-serif',outline:'none',
                  boxShadow:'3px 3px 0 var(--violet)',
                }}/>
            </label>

            <label style={{display:'flex',flexDirection:'column',gap:8}}>
              <span className="mono" style={{fontSize:10,letterSpacing:'.16em',color:'var(--ink-quiet)'}}>PASSWORD</span>
              <input type="password" required value={pw} onChange={(e)=>setPw(e.target.value)} placeholder="••••••••"
                style={{
                  padding:'14px 16px',fontSize:15,border:'1.5px solid var(--ink)',borderRadius:10,
                  background:'rgba(255,255,255,.7)',color:'var(--ink)',
                  fontFamily:'"Geist", sans-serif',outline:'none',
                  boxShadow:'3px 3px 0 var(--violet)',
                }}/>
            </label>

            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',fontSize:12,color:'var(--ink-soft)'}}>
              <label style={{display:'inline-flex',alignItems:'center',gap:8,cursor:'pointer'}}>
                <input type="checkbox" style={{accentColor:'var(--violet)'}}/>
                <span>Remember me</span>
              </label>
              <a href="#" style={{color:'var(--violet)',textDecoration:'underline',textUnderlineOffset:3}}>Forgot password?</a>
            </div>

            <button type="submit" className="btn btn-primary" style={{padding:'16px 22px',fontSize:15,marginTop:6,justifyContent:'center'}}>
              Sign in <span className="arrow">→</span>
            </button>

            {shake && (
              <div style={{
                marginTop:6,padding:'14px 16px',borderRadius:10,
                border:'1.5px solid var(--ink)',background:'var(--lime)',
                fontSize:13,color:'var(--ink)',lineHeight:1.5,
                boxShadow:'4px 4px 0 var(--ink)',
              }}>
                <span className="mono" style={{fontSize:10,letterSpacing:'.14em',marginRight:8}}>BETA</span>
                Sign-in is paused while we onboard the first cohort. Your slot opens with the next batch — join the waitlist below.
              </div>
            )}

            {/* Divider */}
            <div style={{display:'flex',alignItems:'center',gap:14,margin:'14px 0 6px'}}>
              <span style={{flex:1,height:1,background:'var(--ink-line-2)'}}/>
              <span className="mono" style={{fontSize:10,letterSpacing:'.16em',color:'var(--ink-quiet)'}}>OR</span>
              <span style={{flex:1,height:1,background:'var(--ink-line-2)'}}/>
            </div>

            <div style={{display:'flex',flexDirection:'column',gap:10}}>
              <button type="button" className="btn" style={{padding:'14px 18px',fontSize:14,justifyContent:'center',background:'rgba(255,255,255,.5)'}}>
                Continue with Google
              </button>
              <button type="button" className="btn" style={{padding:'14px 18px',fontSize:14,justifyContent:'center',background:'rgba(255,255,255,.5)'}}>
                Continue with SSO
              </button>
            </div>

            <div style={{
              marginTop:18,padding:'16px 18px',borderRadius:12,
              background:'rgba(255,255,255,.55)',border:'1.5px dashed var(--ink-line-2)',
              fontSize:13,color:'var(--ink-soft)',lineHeight:1.5,
            }}>
              <span className="mono" style={{fontSize:10,letterSpacing:'.14em',color:'var(--violet)',marginRight:8}}>BETA ACCESS</span>
              Not on the design partner program yet?{' '}
              <a href="#/waitlist" style={{color:'var(--ink)',textDecoration:'underline',textUnderlineOffset:3,fontWeight:500}}>
                Join the waitlist →
              </a>
            </div>
          </form>
        </div>

        <div className="mono" style={{fontSize:10,color:'var(--ink-quiet)',letterSpacing:'.14em',display:'flex',justifyContent:'space-between',flexWrap:'wrap',gap:10}}>
          <span>© 2026 nautilida</span>
          <span>SOC2 · AES-256 · EU/US</span>
        </div>

        <style>{`
          @keyframes shake{
            10%,90%{transform:translateX(-2px)}
            20%,80%{transform:translateX(3px)}
            30%,50%,70%{transform:translateX(-5px)}
            40%,60%{transform:translateX(5px)}
          }
          input::placeholder{color:rgba(14,13,20,.35)}
        `}</style>
      </section>
    </main>
  );
}

Object.assign(window, {SignIn});
