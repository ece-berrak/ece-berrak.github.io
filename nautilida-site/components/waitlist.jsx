// Waitlist page — split layout mirroring the sign-in.
//   Left  : deep violet panel with aveato design-partner credit & pull-quote
//   Right : lilac → lime gradient form. Submission shows a success state (no real backend).
const { useState: useStateW } = React;

// Apps Script lead automation endpoint (Sheets + HubSpot + Google Chat).
// Fire-and-forget: failures here must NOT block the email submission.
const LEAD_WEBHOOK_W = 'https://script.google.com/macros/s/AKfycbziqYBA7x9tGSwjRtkc8Qfd8zFtud-N35XLeNdsijDxUNM41HeSLeoEVCO7RoNrsbJE9w/exec';

function Waitlist(){
  const [name,    setName]    = useStateW('');
  const [email,   setEmail]   = useStateW('');
  const [company, setCompany] = useStateW('');
  const [size,    setSize]    = useStateW('');
  const [stack,   setStack]   = useStateW('');
  const [pain,    setPain]    = useStateW('');
  const [sent,    setSent]    = useStateW(false);
  const [sending, setSending] = useStateW(false);
  const [errMsg,  setErrMsg]  = useStateW('');

  // FormSubmit.co (static-friendly, no backend). Goes to ece, CCs onur.
  // First submission after deploy triggers activation email — confirm once.
  const D = '@nautilida.ai';
  const TO = 'ece' + D;
  const CC = 'onur' + D;

  const handleSubmit = async (e)=>{
    e.preventDefault();
    if (sending) return;

    const lastSubmit = localStorage.getItem('waitlist_last_submit');
    const now = Date.now();
    if (lastSubmit && (now - parseInt(lastSubmit)) < 5000){
      setErrMsg('Please wait a few seconds before submitting again.');
      return;
    }

    setSending(true); setErrMsg('');

    // Fire-and-forget to Apps Script lead automation. text/plain avoids the
    // CORS preflight that Apps Script web apps don't handle well.
    fetch(LEAD_WEBHOOK_W, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify({
        name,
        email,
        company,
        phone: '',
        message: `[Source: Waitlist] Team size: ${size || '—'} | Stack: ${stack || '—'}\n\nPain: ${pain || '—'}`,
      }),
    }).catch(err => console.warn('Lead webhook failed:', err));

    try {
      const res = await fetch('https://formsubmit.co/ajax/' + TO, {
        method:'POST',
        headers:{ 'Content-Type':'application/json', 'Accept':'application/json' },
        body: JSON.stringify({
          name, email, company, size, stack, pain,
          _cc: CC,
          _subject: `[nautilida.ai] Waitlist — ${company || name || 'application'}`,
          _replyto: email,
          _template: 'table',
          _captcha: 'true',
        }),
      });
      const data = await res.json().catch(()=>({}));
      if (!res.ok || (data.success !== 'true' && data.success !== true)){
        throw new Error(data.message || 'Could not send. Please try again.');
      }
      localStorage.setItem('waitlist_last_submit', now.toString());
      setSent(true);
    } catch (err){
      setErrMsg(err.message || 'Could not send. Please try again.');
    } finally {
      setSending(false);
    }
  };
  const goHome = (e)=>{ e.preventDefault(); window.location.hash = ''; };
  const goSignin = (e)=>{ e.preventDefault(); window.location.hash = '#/signin'; };

  const inputStyle = {
    padding:'14px 16px',fontSize:15,border:'1.5px solid var(--ink)',borderRadius:10,
    background:'rgba(255,255,255,.7)',color:'var(--ink)',
    fontFamily:'"Geist", sans-serif',outline:'none',
    boxShadow:'3px 3px 0 var(--violet)',
  };

  return (
    <main style={{
      minHeight:'100vh',display:'grid',
      gridTemplateColumns:'repeat(auto-fit, minmax(380px, 1fr))',
      background:'var(--bone)',
    }}>
      {/* LEFT — deep violet panel with aveato credit */}
      <section style={{
        position:'relative',padding:'48px',display:'flex',flexDirection:'column',
        background:`
          radial-gradient(900px 700px at 80% 20%, rgba(212,255,61,.18), transparent 55%),
          radial-gradient(800px 600px at 20% 80%, rgba(180,150,255,.35), transparent 60%),
          linear-gradient(150deg, #4F32D8 0%, #5B3FE6 35%, #4127B0 70%, #2D1F70 100%)`,
        color:'var(--shell)',overflow:'hidden',minHeight:520,
      }}>
        <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
          <a href="#" onClick={goHome}>
            <Wordmark size={24} tone="light"/>
          </a>
          <span className="mono" style={{fontSize:10,letterSpacing:'.16em',color:'rgba(250,248,241,.65)',
            padding:'5px 10px',border:'1px solid rgba(250,248,241,.25)',borderRadius:999}}>
            // WAITLIST
          </span>
        </div>

        <div style={{flex:1,display:'flex',alignItems:'center',marginTop:48,marginBottom:48}}>
          <div>
            <div style={{display:'inline-block',marginBottom:24}}>
              <span className="stick" style={{
                display:'inline-block',padding:'10px 18px',
                fontFamily:'"Geist", sans-serif',fontWeight:800,fontSize:'clamp(22px, 2.8vw, 32px)',
                letterSpacing:'-.04em',lineHeight:1,
                boxShadow:'4px 4px 0 var(--violet-deep)',transform:'rotate(-1.2deg)',
                border:'1.5px solid var(--violet-deep)',
              }}>onboarding the first cohort.</span>
            </div>
            <h1 className="display" style={{
              margin:'0 0 24px',fontSize:'clamp(36px, 5vw, 68px)',
              lineHeight:1.0,letterSpacing:'-.025em',color:'var(--shell)',
            }}>
              JOIN THE LOOP{' '}
              <span style={{display:'inline-block',marginTop:'.06em'}}>
                <span style={{
                  fontFamily:'"Instrument Serif", serif',fontStyle:'italic',
                  fontWeight:400,letterSpacing:'-.01em',textTransform:'none',
                  color:'var(--lilac)',fontSize:'1.05em',
                }}>before everyone else.</span>
              </span>
            </h1>
            <p style={{fontSize:16,color:'rgba(250,248,241,.78)',lineHeight:1.55,maxWidth:440,margin:'0 0 32px'}}>
              We're working with a small group of design partners to shape the product. Tell us about your team and your stack — we'll come back with timing for your slot.
            </p>

            {/* aveato design partner credit card */}
            <div style={{
              padding:'18px 20px',borderRadius:14,
              border:'1px solid rgba(250,248,241,.18)',
              background:'rgba(14,13,20,.45)',
              backdropFilter:'blur(10px)',WebkitBackdropFilter:'blur(10px)',
              maxWidth:440,display:'flex',alignItems:'center',gap:16,
            }}>
              <img src="uploads/aveato-logo.jpg" alt="aveato" style={{
                width:56,height:56,borderRadius:10,objectFit:'cover',
                border:'1.5px solid rgba(250,248,241,.2)',flexShrink:0,
              }}/>
              <div style={{lineHeight:1.4,minWidth:0}}>
                <div className="mono" style={{fontSize:9,letterSpacing:'.16em',color:'var(--lime)'}}>FIRST DESIGN PARTNER</div>
                <div style={{fontSize:18,color:'var(--shell)',marginTop:4,letterSpacing:'-.01em'}}>aveato</div>
                <div className="mono" style={{fontSize:10,color:'rgba(250,248,241,.55)',letterSpacing:'.1em',marginTop:6}}>
                  B2B CATERING · BERLIN
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mono" style={{fontSize:10,color:'rgba(250,248,241,.55)',letterSpacing:'.14em',
          display:'flex',alignItems:'center',gap:10,flexWrap:'wrap'}}>
          <span style={{width:6,height:6,borderRadius:999,background:'var(--lime)',boxShadow:'0 0 10px var(--lime)'}}/>
          BETA · ROLLING ADMISSIONS
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
        <div style={{display:'flex',justifyContent:'space-between',gap:8,flexWrap:'wrap'}}>
          <a href="#" onClick={goSignin} className="mono"
            style={{fontSize:11,letterSpacing:'.14em',color:'var(--ink-soft)',
              padding:'8px 14px',border:'1px solid var(--ink-line-2)',borderRadius:999,
              background:'rgba(255,255,255,.4)'}}>
            SIGN IN →
          </a>
          <a href="#" onClick={goHome} className="mono"
            style={{fontSize:11,letterSpacing:'.14em',color:'var(--ink-soft)',
              padding:'8px 14px',border:'1px solid var(--ink-line-2)',borderRadius:999,
              background:'rgba(255,255,255,.4)'}}>
            ← BACK TO SITE
          </a>
        </div>

        <div style={{flex:1,display:'flex',alignItems:'center',justifyContent:'center',padding:'48px 0'}}>
          {sent ? (
            <div style={{
              maxWidth:440,width:'100%',
              padding:'32px 32px',borderRadius:14,
              border:'1.5px solid var(--ink)',background:'var(--lime)',
              boxShadow:'8px 8px 0 var(--ink)',
            }}>
              <span className="mono" style={{fontSize:10,letterSpacing:'.16em',color:'var(--ink)'}}>// CONFIRMED</span>
              <h2 className="display" style={{margin:'14px 0 16px',fontSize:'clamp(28px, 3.4vw, 44px)',lineHeight:1.0}}>
                YOU'RE ON THE LIST.
              </h2>
              <p style={{fontSize:14,color:'var(--ink)',lineHeight:1.55,margin:'0 0 18px',opacity:.85}}>
                Thanks {name || 'there'}. We'll come back with timing for {company ? <strong>{company}</strong> : 'your team'} — usually within a week.
              </p>
              <a href="#" onClick={goHome} className="btn btn-primary" style={{padding:'12px 18px',fontSize:13}}>
                Back to site <span className="arrow">→</span>
              </a>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{width:'100%',maxWidth:480,display:'flex',flexDirection:'column',gap:18}}>
              <h2 className="display" style={{margin:'0 0 4px',fontSize:'clamp(36px, 4.8vw, 60px)',lineHeight:1.0,letterSpacing:'-.025em'}}>
                JOIN THE WAITLIST.
              </h2>
              <p style={{fontSize:14,color:'var(--ink-soft)',margin:'0 0 14px',lineHeight:1.55}}>
                Tell us a bit about your team. We'll come back with timing.
              </p>

              <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:14}}>
                <label style={{display:'flex',flexDirection:'column',gap:8}}>
                  <span className="mono" style={{fontSize:10,letterSpacing:'.16em',color:'var(--ink-quiet)'}}>NAME</span>
                  <input required value={name} onChange={(e)=>setName(e.target.value)} placeholder="Your name" style={inputStyle}/>
                </label>
                <label style={{display:'flex',flexDirection:'column',gap:8}}>
                  <span className="mono" style={{fontSize:10,letterSpacing:'.16em',color:'var(--ink-quiet)'}}>WORK EMAIL</span>
                  <input type="email" required value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="you@company.com" style={inputStyle}/>
                </label>
              </div>

              <div style={{display:'grid',gridTemplateColumns:'1.4fr 1fr',gap:14}}>
                <label style={{display:'flex',flexDirection:'column',gap:8}}>
                  <span className="mono" style={{fontSize:10,letterSpacing:'.16em',color:'var(--ink-quiet)'}}>COMPANY</span>
                  <input required value={company} onChange={(e)=>setCompany(e.target.value)} placeholder="aveato, etc." style={inputStyle}/>
                </label>
                <label style={{display:'flex',flexDirection:'column',gap:8}}>
                  <span className="mono" style={{fontSize:10,letterSpacing:'.16em',color:'var(--ink-quiet)'}}>TEAM SIZE</span>
                  <select required value={size} onChange={(e)=>setSize(e.target.value)} style={{...inputStyle,appearance:'auto'}}>
                    <option value="">Select…</option>
                    <option>1–5 reps</option>
                    <option>6–15 reps</option>
                    <option>16–40 reps</option>
                    <option>41–100 reps</option>
                    <option>100+ reps</option>
                  </select>
                </label>
              </div>

              <label style={{display:'flex',flexDirection:'column',gap:8}}>
                <span className="mono" style={{fontSize:10,letterSpacing:'.16em',color:'var(--ink-quiet)'}}>YOUR STACK</span>
                <input value={stack} onChange={(e)=>setStack(e.target.value)} placeholder="HubSpot, Teams, Slack…" style={inputStyle}/>
              </label>

              <label style={{display:'flex',flexDirection:'column',gap:8}}>
                <span className="mono" style={{fontSize:10,letterSpacing:'.16em',color:'var(--ink-quiet)'}}>WHAT'S PAINFUL THIS WEEK?</span>
                <textarea value={pain} onChange={(e)=>setPain(e.target.value)} rows={3}
                  placeholder="One sentence about the moment you'd hand to Nauti."
                  style={{...inputStyle,resize:'vertical',fontFamily:'"Geist", sans-serif',lineHeight:1.5}}/>
              </label>

              <button type="submit" disabled={sending}
                className="btn btn-primary" style={{
                  padding:'16px 22px',fontSize:15,marginTop:6,justifyContent:'center',
                  opacity: sending ? .7 : 1, cursor: sending ? 'wait' : 'pointer',
                }}>
                {sending ? 'Sending…' : <>Send my application <span className="arrow">→</span></>}
              </button>

              {errMsg && (
                <div style={{
                  fontSize:13,color:'var(--rose)',background:'rgba(255,95,119,.08)',
                  border:'1px solid rgba(255,95,119,.4)',borderRadius:10,padding:'10px 14px',
                  marginTop:-6,
                }}>{errMsg}</div>
              )}

              <div className="mono" style={{fontSize:10,color:'var(--ink-quiet)',letterSpacing:'.14em',textAlign:'center',marginTop:6}}>
                NO SPAM · WE REPLY TO EVERY APPLICATION · USUALLY WITHIN A WEEK
              </div>
            </form>
          )}
        </div>

        <div className="mono" style={{fontSize:10,color:'var(--ink-quiet)',letterSpacing:'.14em',display:'flex',justifyContent:'space-between',flexWrap:'wrap',gap:10}}>
          <span>© 2026 nautilida</span>
          <span>SOC2 · AES-256 · EU/US</span>
        </div>

        <style>{`input::placeholder, textarea::placeholder{color:rgba(14,13,20,.35)}`}</style>
      </section>
    </main>
  );
}

Object.assign(window, {Waitlist});
