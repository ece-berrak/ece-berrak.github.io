// Contact page — split layout matching sign-in / waitlist.
//   Left  : deep violet panel with brand line + direct contact channels
//   Right : lilac / lime gradient form (reason dropdown + message)
const { useState: useStateC } = React;

// Apps Script lead automation endpoint (Sheets + HubSpot + Google Chat).
// Fire-and-forget: failures here must NOT block the email submission.
const LEAD_WEBHOOK_C = 'https://script.google.com/macros/s/AKfycbziqYBA7x9tGSwjRtkc8Qfd8zFtud-N35XLeNdsijDxUNM41HeSLeoEVCO7RoNrsbJE9w/exec';

function Contact(){
  const [name,    setName]    = useStateC('');
  const [email,   setEmail]   = useStateC('');
  const [reason,  setReason]  = useStateC('');
  const [message, setMessage] = useStateC('');
  const [sent,    setSent]    = useStateC(false);
  const [sending, setSending] = useStateC(false);
  const [errMsg,  setErrMsg]  = useStateC('');

  // FormSubmit.co (static-friendly, no backend). First submission after deploy
  // triggers an activation email to the TO address — confirm once, runs forever.
  // Lightly obfuscated to slow trivial email scraping.
  const D = '@nautilida.ai';
  const TO = 'hello' + D;
  const CC = ['ece' + D, 'onur' + D].join(',');

  const handleSubmit = async (e)=>{
    e.preventDefault();
    if (sending) return;

    const lastSubmit = localStorage.getItem('contact_last_submit');
    const now = Date.now();
    if (lastSubmit && (now - parseInt(lastSubmit)) < 5000){
      setErrMsg('Please wait a few seconds before submitting again.');
      return;
    }

    setSending(true); setErrMsg('');

    // Fire-and-forget to Apps Script lead automation. We use text/plain to
    // avoid the CORS preflight that Apps Script web apps don't handle well.
    fetch(LEAD_WEBHOOK_C, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify({
        name,
        email,
        company: '',
        phone: '',
        message: `[Source: Contact] [Reason: ${reason || '—'}]\n\n${message}`,
      }),
    }).catch(err => console.warn('Lead webhook failed:', err));

    try {
      const res = await fetch('https://formsubmit.co/ajax/' + TO, {
        method:'POST',
        headers:{ 'Content-Type':'application/json', 'Accept':'application/json' },
        body: JSON.stringify({
          name, email, reason, message,
          _cc: CC,
          _subject: `[nautilida.ai] Contact — ${reason || 'general'}`,
          _replyto: email,
          _template: 'table',
          _captcha: 'true',
        }),
      });
      const data = await res.json().catch(()=>({}));
      if (!res.ok || (data.success !== 'true' && data.success !== true)){
        throw new Error(data.message || 'Could not send. Please try again.');
      }
      localStorage.setItem('contact_last_submit', now.toString());
      setSent(true);
    } catch (err){
      setErrMsg(err.message || 'Could not send. Please try again.');
    } finally {
      setSending(false);
    }
  };
  const goHome     = (e)=>{ e.preventDefault(); window.location.hash = ''; };
  const goWaitlist = (e)=>{ e.preventDefault(); window.location.hash = '#/waitlist'; };

  const inputStyle = {
    padding:'14px 16px',fontSize:15,border:'1.5px solid var(--ink)',borderRadius:10,
    background:'rgba(255,255,255,.7)',color:'var(--ink)',
    fontFamily:'"Geist", sans-serif',outline:'none',
    boxShadow:'3px 3px 0 var(--violet)',
  };

  const channels = [
    {label:'Email', addr:'hello'+'@'+'nautilida.ai', hint:'Anything on your mind — sales, press, partnerships, or just hi.'},
  ];

  return (
    <main style={{
      minHeight:'100vh',display:'grid',
      gridTemplateColumns:'repeat(auto-fit, minmax(380px, 1fr))',
      background:'var(--bone)',
    }}>
      {/* LEFT — deep violet panel */}
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
            // CONTACT
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
              }}>say hello.</span>
            </div>
            <h1 className="display" style={{
              margin:'0 0 24px',fontSize:'clamp(36px, 5vw, 68px)',
              lineHeight:1.0,letterSpacing:'-.025em',color:'var(--shell)',
            }}>
              TALK TO A HUMAN.{' '}
              <span style={{display:'inline-block',marginTop:'.06em'}}>
                <span style={{
                  fontFamily:'"Instrument Serif", serif',fontStyle:'italic',
                  fontWeight:400,letterSpacing:'-.01em',textTransform:'none',
                  color:'var(--lilac)',fontSize:'1.05em',
                }}>we reply fast.</span>
              </span>
            </h1>
            <p style={{fontSize:16,color:'rgba(250,248,241,.78)',lineHeight:1.55,maxWidth:440,margin:'0 0 28px'}}>
              Anything on your mind — fill out the form on the right, or drop us a line directly. Either way reaches a real person in Berlin.
            </p>

            {/* Direct contact channels */}
            <div style={{display:'flex',flexDirection:'column',gap:10,maxWidth:440}}>
              {channels.map((c,i)=>(
                <div key={i} style={{
                  padding:'12px 14px',borderRadius:10,
                  border:'1px solid rgba(250,248,241,.18)',
                  background:'rgba(14,13,20,.45)',
                  backdropFilter:'blur(10px)',WebkitBackdropFilter:'blur(10px)',
                  display:'grid',gridTemplateColumns:'90px 1fr',gap:12,alignItems:'center',
                }}>
                  <span className="mono" style={{fontSize:10,letterSpacing:'.16em',color:'var(--lime)'}}>{c.label.toUpperCase()}</span>
                  <div style={{lineHeight:1.4,minWidth:0}}>
                    <a href={`mailto:${c.addr}`} style={{fontSize:14,color:'var(--shell)'}}>{c.addr}</a>
                    <div className="mono" style={{fontSize:10,color:'rgba(250,248,241,.55)',letterSpacing:'.08em',marginTop:3}}>{c.hint}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mono" style={{fontSize:10,color:'rgba(250,248,241,.55)',letterSpacing:'.14em',
          display:'flex',alignItems:'center',gap:10,flexWrap:'wrap'}}>
          <span style={{width:6,height:6,borderRadius:999,background:'var(--lime)',boxShadow:'0 0 10px var(--lime)'}}/>
          MADE WITH PATIENCE · BERLIN · CET (UTC+1)
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
          <a href="#" onClick={goWaitlist} className="mono"
            style={{fontSize:11,letterSpacing:'.14em',color:'var(--ink-soft)',
              padding:'8px 14px',border:'1px solid var(--ink-line-2)',borderRadius:999,
              background:'rgba(255,255,255,.4)'}}>
            JOIN WAITLIST →
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
              <span className="mono" style={{fontSize:10,letterSpacing:'.16em',color:'var(--ink)'}}>// MESSAGE SENT</span>
              <h2 className="display" style={{margin:'14px 0 16px',fontSize:'clamp(28px, 3.4vw, 44px)',lineHeight:1.0}}>
                THANKS, {(name||'friend').toUpperCase()}.
              </h2>
              <p style={{fontSize:14,color:'var(--ink)',lineHeight:1.55,margin:'0 0 18px',opacity:.85}}>
                We'll come back to <strong>{email || 'you'}</strong> within a day or two — usually a lot sooner.
              </p>
              <a href="#" onClick={goHome} className="btn btn-primary" style={{padding:'12px 18px',fontSize:13}}>
                Back to site <span className="arrow">→</span>
              </a>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{width:'100%',maxWidth:480,display:'flex',flexDirection:'column',gap:18}}>
              <h2 className="display" style={{margin:'0 0 4px',fontSize:'clamp(36px, 4.8vw, 60px)',lineHeight:1.0,letterSpacing:'-.025em'}}>
                DROP US A LINE.
              </h2>
              <p style={{fontSize:14,color:'var(--ink-soft)',margin:'0 0 14px',lineHeight:1.55}}>
                Whatever it is — we'll get back to you fast.
              </p>

              <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:14}}>
                <label style={{display:'flex',flexDirection:'column',gap:8}}>
                  <span className="mono" style={{fontSize:10,letterSpacing:'.16em',color:'var(--ink-quiet)'}}>NAME</span>
                  <input required value={name} onChange={(e)=>setName(e.target.value)} placeholder="Your name" style={inputStyle}/>
                </label>
                <label style={{display:'flex',flexDirection:'column',gap:8}}>
                  <span className="mono" style={{fontSize:10,letterSpacing:'.16em',color:'var(--ink-quiet)'}}>EMAIL</span>
                  <input type="email" required value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="you@company.com" style={inputStyle}/>
                </label>
              </div>

              <label style={{display:'flex',flexDirection:'column',gap:8}}>
                <span className="mono" style={{fontSize:10,letterSpacing:'.16em',color:'var(--ink-quiet)'}}>REASON</span>
                <select required value={reason} onChange={(e)=>setReason(e.target.value)} style={{...inputStyle,appearance:'auto'}}>
                  <option value="">Pick one…</option>
                  <option>Demo / Sales</option>
                  <option>Design partner program</option>
                  <option>Press &amp; media</option>
                  <option>Partnership / integration</option>
                  <option>Support — existing customer</option>
                  <option>Something else</option>
                </select>
              </label>

              <label style={{display:'flex',flexDirection:'column',gap:8}}>
                <span className="mono" style={{fontSize:10,letterSpacing:'.16em',color:'var(--ink-quiet)'}}>MESSAGE</span>
                <textarea required value={message} onChange={(e)=>setMessage(e.target.value)} rows={5}
                  placeholder="A few sentences. We don't need a brief — we need a clue."
                  style={{...inputStyle,resize:'vertical',fontFamily:'"Geist", sans-serif',lineHeight:1.5}}/>
              </label>

              <button type="submit" disabled={sending}
                className="btn btn-primary" style={{
                  padding:'16px 22px',fontSize:15,marginTop:6,justifyContent:'center',
                  opacity: sending ? .7 : 1, cursor: sending ? 'wait' : 'pointer',
                }}>
                {sending ? 'Sending…' : <>Send message <span className="arrow">→</span></>}
              </button>

              {errMsg && (
                <div style={{
                  fontSize:13,color:'var(--rose)',background:'rgba(255,95,119,.08)',
                  border:'1px solid rgba(255,95,119,.4)',borderRadius:10,padding:'10px 14px',
                  marginTop:-6,
                }}>{errMsg}</div>
              )}

              <div className="mono" style={{fontSize:10,color:'var(--ink-quiet)',letterSpacing:'.14em',textAlign:'center',marginTop:6}}>
                NO BOT · NO TICKET · A REAL PERSON IN BERLIN
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

Object.assign(window, {Contact});
