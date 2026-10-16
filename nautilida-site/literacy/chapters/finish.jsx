// Finish page — celebration hero, 7-chapter recap, reader survey (Q&A → ece@nautilida.ai),
// post-submit thank-you state, waitlist + share CTAs.

const { useState: useStateFin, useEffect: useEffectFin } = React;

function PlaybookFinish(){
  // Mark finished as soon as user lands here.
  useEffectFin(()=>{ markFinished(); }, []);

  return (
    <main style={{minHeight:'100vh',background:'var(--bone)',color:'var(--ink)'}}>
      <TopBar/>

      {/* Hero */}
      <section style={{
        padding:'80px 0 48px',
        background:
          'linear-gradient(to bottom, rgba(236,230,216,0) 0%, rgba(236,230,216,0) 55%, var(--bone) 100%),'+
          'radial-gradient(ellipse 70% 95% at 95% 28%, rgba(212,255,61,.55) 0%, rgba(212,255,61,0) 58%),'+
          'linear-gradient(135deg, #E8E0FA 0%, #DDD2F6 55%, #E2DAFB 100%)',
      }}>
        <div className="container" style={{maxWidth:880}}>
          <div style={{display:'inline-block',marginBottom:24}}>
            <span className="stick stick-ink" style={{
              display:'inline-block',padding:'10px 18px',
              fontFamily:'"Geist", sans-serif',fontWeight:800,fontSize:'clamp(20px, 2.4vw, 28px)',
              letterSpacing:'-.04em',lineHeight:1,
              boxShadow:'4px 4px 0 var(--violet)',transform:'rotate(-1.4deg)',
              border:'1.5px solid var(--ink)',
            }}>loop complete.</span>
          </div>
          <h1 className="display" style={{
            margin:'0 0 22px',fontSize:'clamp(48px, 7vw, 100px)',
            lineHeight:.96,letterSpacing:'-.03em',
          }}>
            YOU FINISHED THE<br/>
            <span style={{display:'inline-block',marginTop:'.06em'}}>
              <span className="serif-grad" style={{fontSize:'1.04em'}}>literacy.</span>
            </span>
          </h1>
          <p style={{fontSize:18,color:'var(--ink-soft)',lineHeight:1.55,maxWidth:680,margin:'0 0 8px'}}>
            Seven chapters. About 45 minutes of reading. Now the part where we ask one favour back: tell us what you'd actually want an AI team lead to do for your team. We read every reply.
          </p>
        </div>
      </section>

      {/* Chapter recap */}
      <section style={{padding:'56px 0 24px'}}>
        <div className="container" style={{maxWidth:1000}}>
          <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',
            borderTop:'1px solid var(--ink)',borderBottom:'1px solid var(--ink-line)',
            padding:'10px 0',marginBottom:28}}>
            <span className="mono" style={{fontSize:11,letterSpacing:'.16em',display:'inline-flex',alignItems:'center',gap:8}}>
              <span style={{width:6,height:6,borderRadius:999,background:'var(--lime)'}}/>
              RECAP <span style={{color:'var(--ink-quiet)',marginLeft:14}}>// SEVEN ONE-LINERS</span>
            </span>
            <span className="mono" style={{fontSize:11,color:'var(--ink-quiet)',letterSpacing:'.12em'}}>
              IF SOMETHING CARRIES — IT'S THESE
            </span>
          </div>

          <div className="toc-grid" style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:14}}>
            {RECAP_LINES.map(([num, title, line], i)=>(
              <div key={num} style={{
                padding:'18px 22px',
                border:'1px solid var(--ink-line)',borderRadius:12,
                background:'var(--bone-3)',
              }}>
                <div style={{display:'flex',alignItems:'baseline',gap:12,marginBottom:6}}>
                  <span className="display" style={{fontSize:18,color:'var(--violet)',letterSpacing:'-.005em'}}>{num}</span>
                  <span className="mono" style={{fontSize:10,letterSpacing:'.14em',color:'var(--ink-quiet)'}}>{title}</span>
                </div>
                <div style={{fontSize:14.5,lineHeight:1.55,color:'var(--ink)'}}>{line}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Survey */}
      <section style={{padding:'56px 0 80px'}}>
        <div className="container" style={{maxWidth:760}}>
          <Survey/>
        </div>
      </section>

      {/* Closing CTA strip */}
      <section style={{padding:'80px 0',background:'var(--bone-2)',borderTop:'1px solid var(--ink-line)'}}>
        <div className="container" style={{textAlign:'center',maxWidth:680}}>
          <h2 className="display" style={{margin:'0 0 18px',fontSize:'clamp(32px, 4.4vw, 56px)',lineHeight:1.0}}>
            START A LOOP{' '}
            <span className="serif-grad" style={{fontSize:'1.05em'}}>this Monday.</span>
          </h2>
          <p style={{fontSize:16,color:'var(--ink-soft)',margin:'0 auto 28px',maxWidth:520,lineHeight:1.55}}>
            With or without Nauti. The first cohort is small. Tell us about your team and we'll come back with timing.
          </p>
          <div style={{display:'flex',gap:10,alignItems:'center',justifyContent:'center',flexWrap:'wrap'}}>
            <a href="https://nautilida.ai/#/waitlist" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Join the waitlist <span className="arrow">→</span></a>
            <a href="https://nautilida.ai/" target="_blank" rel="noopener noreferrer" className="btn">Visit nautilida.ai</a>
          </div>
        </div>
      </section>

      <PlaybookFooter/>
    </main>
  );
}

const RECAP_LINES = [
  ['01', 'WHAT IT IS',          'A coordination layer, not an assistant. Runs a rhythm, carries memory, hands the next move to the right owner.'],
  ['02', 'THE SHIFT',           'Visibility was the last decade. Coordination is this one. Dashboards show; team leads decide.'],
  ['03', 'THE LOOP',            'Mon brief → mid-week priorities → Fri recap → memory between weeks. Four parts, one rhythm.'],
  ['04', 'MEMORY',              'Three layers — conversation, pattern, loop-fed. Each one is what rules-based stacks couldn\'t deliver.'],
  ['05', 'WHERE IT FITS',       'Different category from ChatGPT/Claude (assistants) and Gong/Clari (visibility). Coordination over both.'],
  ['06', 'HARD QUESTIONS',      'GDPR, hallucinations, "can\'t Claude do this", confidential data — answered without dodging.'],
  ['07', "WHERE WE'RE GOING",   'Today the brain. Tomorrow the senses. Brain-first because senses without a substrate are theatre.'],
];

// ---------- Survey form ----------
function Survey(){
  const [picks,   setPicks]   = useStateFin([]);
  const [otherText, setOtherText] = useStateFin('');
  const [email,   setEmail]   = useStateFin('');
  const [role,    setRole]    = useStateFin('');
  const [company, setCompany] = useStateFin('');
  const [note,    setNote]    = useStateFin('');
  const [sending, setSending] = useStateFin(false);
  const [sent,    setSent]    = useStateFin(false);
  const [errMsg,  setErrMsg]  = useStateFin('');

  const togglePick = (opt)=>{
    setPicks(prev => prev.includes(opt) ? prev.filter(x => x !== opt) : [...prev, opt]);
  };

  const handleSubmit = async (e)=>{
    e.preventDefault();
    if (sending) return;
    if (!email){ setErrMsg('Email is required so we can come back to you.'); return; }
    setSending(true); setErrMsg('');

    const D  = '@' + 'nautilida.ai';
    const TO = 'ece'  + D;
    const CC = 'onur' + D;
    try {
      const res = await fetch('https://formsubmit.co/ajax/' + TO, {
        method:'POST',
        headers:{ 'Content-Type':'application/json', 'Accept':'application/json' },
        body: JSON.stringify({
          email, role, company,
          'wants Nauti to': picks.join(', '),
          'other capability': otherText,
          'anything else': note,
          _cc: CC,
          _subject: '[Literacy] Reader survey — ' + email,
          _replyto: email,
          _template: 'table',
          _captcha: 'false',
        }),
      });
      const data = await res.json().catch(()=>({}));
      if (!res.ok || (data.success !== 'true' && data.success !== true)){
        throw new Error(data.message || 'Could not send. Please try again.');
      }
      setSent(true);
    } catch (err){
      setErrMsg(err.message || 'Could not send. Please try again.');
    } finally {
      setSending(false);
    }
  };

  if (sent) return (
    <div style={{
      padding:'32px 32px',borderRadius:14,
      border:'1.5px solid var(--ink)',background:'var(--lime)',
      boxShadow:'8px 8px 0 var(--ink)',
    }}>
      <span className="mono" style={{fontSize:10,letterSpacing:'.16em',color:'var(--ink)'}}>// REPLY RECEIVED</span>
      <h3 className="display" style={{margin:'14px 0 12px',fontSize:'clamp(28px, 3.4vw, 40px)',lineHeight:1.0}}>
        THANKS — we read every one.
      </h3>
      <p style={{margin:'0 0 18px',fontSize:14.5,color:'var(--ink)',lineHeight:1.6,opacity:.85}}>
        Your answer landed in the team's inbox. If a piece of what you described is on our shortlist for the next sprint, we'll come back to <strong>{email}</strong> with what we're shipping and when.
      </p>
      <a href="https://nautilida.ai/#/waitlist" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{padding:'12px 18px',fontSize:13}}>
        Also join the waitlist <span className="arrow">→</span>
      </a>
    </div>
  );

  const inputStyle = {
    padding:'14px 16px',fontSize:15,border:'1.5px solid var(--ink)',borderRadius:10,
    background:'rgba(255,255,255,.7)',color:'var(--ink)',
    fontFamily:'"Geist", sans-serif',outline:'none',
    boxShadow:'3px 3px 0 var(--violet)',
    width:'100%',
  };

  return (
    <form onSubmit={handleSubmit} style={{display:'flex',flexDirection:'column',gap:18}}>
      <div style={{display:'flex',alignItems:'center',gap:8,marginBottom:0}}>
        <span style={{width:6,height:6,borderRadius:999,background:'var(--violet)'}}/>
        <span className="mono" style={{fontSize:10,letterSpacing:'.16em',color:'var(--violet)'}}>READER · YOUR TURN</span>
      </div>
      <h2 className="display" style={{margin:'0 0 4px',fontSize:'clamp(28px, 3.4vw, 44px)',lineHeight:1.05,letterSpacing:'-.01em'}}>
        What would you want{' '}
        <span className="serif-grad" style={{fontSize:'1.04em'}}>your team lead to do?</span>
      </h2>
      <p style={{margin:'0 0 4px',fontSize:15,color:'var(--ink-soft)',lineHeight:1.55}}>
        Pick as many as you'd want. We use these to decide what ships next. Anything goes — including a "none of these, but…" in the box at the bottom.
      </p>

      {/* TODAY group */}
      <div style={{marginTop:14}}>
        <div className="mono" style={{fontSize:10,letterSpacing:'.16em',color:'var(--violet)',marginBottom:10,display:'inline-flex',alignItems:'center',gap:8}}>
          <span style={{width:6,height:6,borderRadius:999,background:'var(--violet)'}}/>
          TODAY · WHERE NAUTI HELPS YOUR TEAM NOW
        </div>
        <div style={{display:'flex',flexDirection:'column',gap:8}}>
          {SURVEY_TODAY.map(opt => <SurveyCheck key={opt} opt={opt} active={picks.includes(opt)} onToggle={togglePick}/>)}
        </div>
      </div>

      {/* FUTURE group */}
      <div style={{marginTop:8}}>
        <div className="mono" style={{fontSize:10,letterSpacing:'.16em',color:'var(--violet)',marginBottom:10,display:'inline-flex',alignItems:'center',gap:8}}>
          <span style={{width:6,height:6,borderRadius:999,background:'var(--lime)',border:'1px solid var(--ink)'}}/>
          FUTURE · WHERE YOU'D WANT IT TO GO NEXT
        </div>
        <div style={{display:'flex',flexDirection:'column',gap:8}}>
          {SURVEY_FUTURE.map(opt => <SurveyCheck key={opt} opt={opt} active={picks.includes(opt)} onToggle={togglePick} accent="lime"/>)}
        </div>
      </div>

      {/* Other text input */}
      <label style={{display:'flex',flexDirection:'column',gap:8}}>
        <span className="mono" style={{fontSize:10,letterSpacing:'.16em',color:'var(--ink-quiet)'}}>OTHER · OPTIONAL</span>
        <input value={otherText} onChange={(e)=>setOtherText(e.target.value)}
          placeholder="A capability not in the list — describe it in a sentence."
          style={inputStyle}/>
      </label>

      {/* Identity */}
      <div className="row-2" style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:14}}>
        <label style={{display:'flex',flexDirection:'column',gap:8}}>
          <span className="mono" style={{fontSize:10,letterSpacing:'.16em',color:'var(--ink-quiet)'}}>EMAIL *</span>
          <input type="email" required value={email} onChange={(e)=>setEmail(e.target.value)}
            placeholder="you@company.com" style={inputStyle}/>
        </label>
        <label style={{display:'flex',flexDirection:'column',gap:8}}>
          <span className="mono" style={{fontSize:10,letterSpacing:'.16em',color:'var(--ink-quiet)'}}>COMPANY · OPTIONAL</span>
          <input value={company} onChange={(e)=>setCompany(e.target.value)}
            placeholder="aveato, etc." style={inputStyle}/>
        </label>
      </div>

      <label style={{display:'flex',flexDirection:'column',gap:8}}>
        <span className="mono" style={{fontSize:10,letterSpacing:'.16em',color:'var(--ink-quiet)'}}>YOUR ROLE · OPTIONAL</span>
        <select value={role} onChange={(e)=>setRole(e.target.value)} style={{...inputStyle,appearance:'auto'}}>
          <option value="">Select…</option>
          <option>Founder / CEO</option>
          <option>Revenue leader (CRO / VP Sales)</option>
          <option>Sales manager / Team lead</option>
          <option>Account manager / AE</option>
          <option>RevOps</option>
          <option>Customer success</option>
          <option>Investor / advisor</option>
          <option>Other</option>
        </select>
      </label>

      <label style={{display:'flex',flexDirection:'column',gap:8}}>
        <span className="mono" style={{fontSize:10,letterSpacing:'.16em',color:'var(--ink-quiet)'}}>ANYTHING ELSE? · OPTIONAL</span>
        <textarea value={note} onChange={(e)=>setNote(e.target.value)} rows={3}
          placeholder="The painful moment you'd hand to a team lead. Or a question for us."
          style={{...inputStyle,resize:'vertical',fontFamily:'"Geist", sans-serif',lineHeight:1.5}}/>
      </label>

      <button type="submit" disabled={sending} className="btn btn-primary" style={{
        padding:'16px 22px',fontSize:15,marginTop:6,justifyContent:'center',
        opacity: sending ? .7 : 1, cursor: sending ? 'wait' : 'pointer',
      }}>
        {sending ? 'Sending…' : <>Send my answer <span className="arrow">→</span></>}
      </button>

      {errMsg && (
        <div style={{
          fontSize:13,color:'var(--rose)',background:'rgba(255,95,119,.08)',
          border:'1px solid rgba(255,95,119,.4)',borderRadius:10,padding:'10px 14px',
        }}>{errMsg}</div>
      )}

      <div className="mono" style={{fontSize:10,color:'var(--ink-quiet)',letterSpacing:'.14em',textAlign:'center'}}>
        REPLIES GO STRAIGHT TO THE TEAM · NO LIST · NO FUNNEL
      </div>

      <style>{`input::placeholder, textarea::placeholder{color:rgba(14,13,20,.35)}`}</style>
    </form>
  );
}

const SURVEY_TODAY = [
  'Draft my Monday brief — top risks, top opportunities, what changed.',
  'Route mid-week priorities to my AMs with the why attached.',
  'Write the Friday recap — what moved, what carries, what to do next week.',
  'Answer ad-hoc questions about any account, any time (Ask anytime).',
  'Carry handover memory when an AM leaves — no context loss.',
  'Detect drift in account behaviour before it shows in the numbers.',
  'Pre-meeting prep before every call (last touches, open promises, pattern).',
  'Track open promises across email, chat, and CRM — flag the late ones.',
  'Compose follow-up drafts based on the actual conversation history.',
  'Coordinate handovers between AM and CS / RevOps with shared context.',
];

const SURVEY_FUTURE = [
  'Sit in meetings — listen, take notes, update memory in real time.',
  'Speak up during calls — proactively suggest the next move while the conversation is happening.',
  'Surface team-wide patterns to influence product strategy and roadmap.',
  'Cut new-hire ramp time — onboard a new AM onto the loop\'s memory on day one.',
  'Build organisational memory across teams — sales, CS, RevOps share one source.',
  'Watch team motivation and surface burn-out patterns before they bite.',
];

// Reusable checkbox row for the survey form — accent: 'violet' (default) or 'lime'.
function SurveyCheck({opt, active, onToggle, accent='violet'}){
  const activeBg     = accent === 'lime' ? 'var(--lime-soft)'        : 'var(--violet-soft)';
  const activeShadow = accent === 'lime' ? '3px 3px 0 var(--ink)'    : '3px 3px 0 var(--ink)';
  return (
    <label style={{
      display:'flex',alignItems:'flex-start',gap:12,
      padding:'12px 14px',borderRadius:10,
      border: active ? '1.5px solid var(--ink)' : '1px solid var(--ink-line-2)',
      background: active ? activeBg : 'rgba(255,255,255,.5)',
      boxShadow: active ? activeShadow : 'none',
      cursor:'pointer',
      transition:'all .15s ease',
    }}>
      <input
        type="checkbox"
        checked={active}
        onChange={()=>onToggle(opt)}
        style={{
          width:18,height:18,marginTop:2,
          accentColor: accent === 'lime' ? 'var(--ink)' : 'var(--violet)',
          cursor:'pointer',
        }}
      />
      <span style={{fontSize:15,color:'var(--ink)',lineHeight:1.5}}>{opt}</span>
    </label>
  );
}

Object.assign(window, {PlaybookFinish});
