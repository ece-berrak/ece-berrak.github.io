// "The Week" — single canonical Mon→Fri rhythm section.
// Owns both the data (deck cards) AND the qualitative story (per-day body).
// In leader view, also embeds a Portfolio rollup (the "leadership extra").
const { useEffect: useEffectB, useState: useStateB, useRef: useRefB } = React;

// Leadership-only rollup — shows every AM with their key portfolio stats.
// Renders inline at the bottom of MondayBrief when audience === 'leader'.
function PortfolioView(){
  const ams = [
    { id:'MC', name:'M. Chen',   accounts: 8, open:'$1.2M', won:'+$340k', health:78 },
    { id:'JP', name:'J. Patel',  accounts: 6, open:'$890k', won:'+$182k', health:84 },
    { id:'RO', name:'R. Okafor', accounts: 5, open:'$620k', won:'+$98k',  health:62 },
    { id:'AP', name:'A. Park',   accounts: 7, open:'$1.0M', won:'+$210k', health:91 },
  ];
  const tone = (h)=> h>80 ? 'var(--lime)' : h>65 ? 'var(--amber)' : 'var(--rose)';

  return (
    <div style={{
      marginTop:36,
      border:'1.5px solid var(--ink)',borderRadius:18,
      background:'var(--bone-3)',padding:'26px 28px',
      boxShadow:'8px 8px 0 var(--violet)',
    }}>
      <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:18,flexWrap:'wrap',gap:10}}>
        <span className="mono" style={{fontSize:10,letterSpacing:'.16em',color:'var(--violet)',display:'inline-flex',alignItems:'center',gap:8}}>
          <span style={{width:6,height:6,borderRadius:999,background:'var(--violet)'}}/>
          INSIDE THE LEADER BRIEF · ONE BLOCK
        </span>
        <a className="mono" href="#" style={{fontSize:10,letterSpacing:'.14em',color:'var(--ink-quiet)'}}>OPEN FULL BRIEF →</a>
      </div>

      <h3 className="display" style={{margin:'0 0 8px',fontSize:'clamp(28px, 3.4vw, 44px)',lineHeight:1.0}}>
        ALL YOUR AMs.{' '}
        <span className="serif-grad" style={{fontSize:'1.05em'}}>one view.</span>
      </h3>
      <p style={{margin:'0 0 22px',fontSize:13,color:'var(--ink-soft)',lineHeight:1.5,maxWidth:560}}>
        One of the sections inside every Monday and Friday brief sent to leadership — alongside the week's ranked priorities.
      </p>

      {/* Header row */}
      <div className="mono" style={{
        display:'grid',gridTemplateColumns:'40px 1fr 90px 100px 100px 130px',
        gap:14,padding:'8px 14px',fontSize:10,color:'var(--ink-quiet)',letterSpacing:'.14em',
      }}>
        <span></span>
        <span>AM</span>
        <span style={{textAlign:'right'}}>ACCOUNTS</span>
        <span style={{textAlign:'right'}}>OPEN</span>
        <span style={{textAlign:'right'}}>THIS WK</span>
        <span style={{textAlign:'right'}}>HEALTH</span>
      </div>

      <div style={{display:'flex',flexDirection:'column',gap:8}}>
        {ams.map((a,i)=>(
          <div key={a.id} style={{
            display:'grid',gridTemplateColumns:'40px 1fr 90px 100px 100px 130px',
            gap:14,alignItems:'center',padding:'12px 14px',
            background:'var(--bone)',border:'1px solid var(--ink-line)',borderRadius:10,
            animation:`fadeUp .4s ${i*80+150}ms backwards`,
          }}>
            <span style={{
              width:32,height:32,borderRadius:999,
              background:'var(--ink)',color:'var(--lime)',
              display:'flex',alignItems:'center',justifyContent:'center',
              fontSize:11,fontWeight:600,letterSpacing:'.04em',
            }}>{a.id}</span>
            <span style={{fontSize:14,letterSpacing:'-.005em'}}>{a.name}</span>
            <span className="mono" style={{fontSize:13,textAlign:'right',fontVariantNumeric:'tabular-nums'}}>{a.accounts}</span>
            <span className="mono" style={{fontSize:13,textAlign:'right',fontVariantNumeric:'tabular-nums'}}>{a.open}</span>
            <span className="mono" style={{fontSize:13,textAlign:'right',color:'var(--ink)',fontVariantNumeric:'tabular-nums'}}>{a.won}</span>
            <span style={{display:'flex',alignItems:'center',gap:8,justifyContent:'flex-end'}}>
              <span style={{position:'relative',width:64,height:6,background:'var(--ink-line)',borderRadius:999}}>
                <span style={{position:'absolute',inset:0,width:`${a.health}%`,background:tone(a.health),borderRadius:999}}/>
              </span>
              <span className="mono" style={{fontSize:11,color:'var(--ink-quiet)',width:22,textAlign:'right',fontVariantNumeric:'tabular-nums'}}>{a.health}</span>
            </span>
          </div>
        ))}
      </div>

      <div style={{
        marginTop:14,padding:'12px 16px',fontSize:13,color:'var(--ink-soft)',
        background:'var(--bone-2)',border:'1px dashed var(--ink-line-2)',borderRadius:10,lineHeight:1.5,
      }}>
        <span className="mono" style={{fontSize:10,letterSpacing:'.14em',color:'var(--ink-quiet)',marginRight:8}}>NET</span>
        Portfolio health 79. R. Okafor's queue is the only one trending down — pair-handoff support recommended this week.
      </div>
    </div>
  );
}

function useInView(threshold=0.25){
  const ref = useRefB(null);
  const [seen, setSeen] = useStateB(false);
  useEffectB(()=>{
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver(([e])=>{ if (e.isIntersecting) setSeen(true); }, {threshold});
    io.observe(el);
    return ()=>io.disconnect();
  },[threshold]);
  return [ref, seen];
}

// One row in the week deck. Day · Label (with body underneath) · Stat · Sub.
// Subtle alternating tilt + horizontal stagger; clean vertical separation, no overlap.
function DeckCard({ day, label, body, stat, statLabel, fill, i, total, seen, tip }){
  const [tipOpen, setTipOpen] = useStateB(false);
  const cardRef = useRefB(null);
  const handleTipOpen = (open) => {
    setTipOpen(open);
    if (open && cardRef.current) {
      setTimeout(()=>{
        const rect = cardRef.current.getBoundingClientRect();
        const top = rect.top + window.scrollY - 120;
        window.scrollTo({top, behavior:'smooth'});
      }, 50);
    }
  };
  const isInk    = fill==='ink';
  const isLime   = fill==='lime';
  const isViolet = fill==='violet';
  const bg = isInk ? 'var(--ink)' : isLime ? 'var(--lime)' : isViolet ? 'var(--violet)' : 'var(--bone-3)';
  const fg = isInk ? 'var(--bone)' : isViolet ? 'var(--bone)' : 'var(--ink)';
  const sub = isInk ? 'rgba(250,248,241,.78)' : isViolet ? 'rgba(250,248,241,.82)' : 'var(--ink-soft)';
  const rot = (i%2===0 ? -.6 : .6);
  const ml  = (i%2===0 ? 0  : 28);
  const mr  = (i%2===0 ? 28 : 0);
  return (
    <div ref={cardRef} className="deck-card" style={{
      marginTop: i===0 ? 0 : 14,
      marginLeft: ml,
      marginRight: mr,
      transform: seen ? `rotate(${rot}deg)` : 'translateY(24px) rotate(0)',
      opacity: seen ? 1 : 0,
      transition:`transform .55s cubic-bezier(.2,.7,.2,1) ${i*90}ms, opacity .4s ease ${i*90}ms`,
      transformOrigin: i%2===0 ? '20% 50%' : '80% 50%',
      cursor:'pointer',
      position:'relative',
    }}>
      <div style={{
        display:'grid',gridTemplateColumns:'110px 1fr auto auto 28px',gap:22,alignItems:'center',
        padding:'22px 26px',background:bg,color:fg,
        border:'1.5px solid var(--ink)',borderRadius:14,
        boxShadow: isInk ? '8px 8px 0 var(--lime)' : isLime ? '8px 8px 0 var(--ink)' : isViolet ? '8px 8px 0 var(--lime)' : '6px 6px 0 var(--ink)',
      }}>
        <span className="mono" style={{fontSize:12,letterSpacing:'.16em',whiteSpace:'nowrap'}}>{day}</span>
        <span style={{display:'flex',flexDirection:'column',gap:6,minWidth:0}}>
          <span className="display" style={{fontSize:28,letterSpacing:'-.01em',lineHeight:.95}}>{label}</span>
          <span style={{fontSize:13,lineHeight:1.45,color:sub}}>{body}</span>
        </span>
        <span className="display deck-stat" style={{fontSize:32,lineHeight:1,fontVariantNumeric:'tabular-nums',textAlign:'right',whiteSpace:'nowrap'}}>{stat}</span>
        <span className="mono" style={{fontSize:10,color:sub,letterSpacing:'.1em',maxWidth:140,lineHeight:1.35,textTransform:'uppercase'}}>{statLabel}</span>
        <span
          onMouseEnter={tip ? ()=>handleTipOpen(true)  : undefined}
          onMouseLeave={tip ? ()=>handleTipOpen(false) : undefined}
          style={{
            textAlign:'right',fontSize:18,
            opacity: tipOpen ? 1 : .7,
            cursor: tip ? 'help' : 'default',
            transition:'opacity .2s ease, transform .2s ease',
            transform: tipOpen ? 'translate(2px,-2px)' : 'none',
          }}>↗</span>
      </div>

      {tip && (
        <div
          onMouseEnter={()=>handleTipOpen(true)}
          onMouseLeave={()=>handleTipOpen(false)}
          style={{
            position:'absolute',
            top:'calc(100% + 14px)',
            right: i%2===0 ? 'auto' : 0,
            left:  i%2===0 ? 0 : 'auto',
            width:'min(420px, calc(100% - 12px))',
            zIndex: tipOpen ? 30 : 5,
            opacity: tipOpen ? 1 : 0,
            pointerEvents: tipOpen ? 'auto' : 'none',
            transform: tipOpen ? 'translateY(0)' : 'translateY(-8px)',
            transition:'opacity .2s ease, transform .25s cubic-bezier(.2,.7,.2,1)',
          }}>
          <div style={{
            background:'var(--bone-3)',color:'var(--ink)',
            border:'1.5px solid var(--ink)',borderRadius:14,
            padding:'22px 24px',
            boxShadow:'8px 8px 0 var(--violet)',
          }}>
            <span className="mono" style={{fontSize:10,letterSpacing:'.16em',color:'var(--violet)',display:'inline-flex',alignItems:'center',gap:8}}>
              <span style={{width:6,height:6,borderRadius:999,background:'var(--violet)'}}/>
              {tip.eyebrow}
            </span>
            <h4 className="display" style={{margin:'10px 0 14px',fontSize:24,letterSpacing:'-.01em',lineHeight:1.1}}>{tip.headline}</h4>
            {tip.paragraphs.map((p,j)=>(
              <p key={j} style={{margin:'0 0 10px',fontSize:13.5,lineHeight:1.55,color:'var(--ink-soft)'}}>{p}</p>
            ))}
            <ul style={{margin:'12px 0 0',paddingLeft:18}}>
              {tip.bullets.map((b,j)=>(
                <li key={j} style={{fontSize:13,lineHeight:1.55,marginBottom:4,color:'var(--ink)'}}>{b}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

function MondayBrief(){
  const [ref, seen] = useInView(0.2);
  const [audience, setAudience] = useStateB('leader');

  // Hover preview state — leader view: hovering the sample-brief button reveals
  // the Portfolio rollup below.  Small leave-delay so cursor can travel into it.
  const [hovered, setHovered] = useStateB(false);
  const hideTimer = useRefB(null);
  const onPreviewEnter = ()=>{
    if (hideTimer.current){ clearTimeout(hideTimer.current); hideTimer.current=null; }
    setHovered(true);
  };
  const onPreviewLeave = ()=>{
    if (hideTimer.current) clearTimeout(hideTimer.current);
    hideTimer.current = setTimeout(()=>setHovered(false), 220);
  };

  // Two very different shapes by audience:
  //   Leaders (CEOs / VPs): TWO touchpoints — Mon brief + Fri recap. Mid-week is silent
  //     for them by design. A single "muted" card sits in between to make that promise visible.
  //   AMs: full Mon→Fri — Mon brief + Tue/Wed/Thu quiet daily prioritization + Fri recap,
  //     all on their own accounts.
  const decks = {
    leader: [
      { day:'MON 7:00',  fill:'lime',
        label:'Monday Brief',
        body:'The week ranked by impact across your whole portfolio — accounts, AMs, motions.',
        stat:'47',  statLabel:'accounts triaged',
        tip:{
          eyebrow:'MONDAY · LEADERSHIP BRIEF',
          headline:'Start Monday aligned.',
          paragraphs:[
            'Nauti delivers a leadership brief before your first meeting. Portfolio health, risk signals, and where the team should focus this week. Built from everything Nauti remembers across your stack.',
            'No dashboards to interpret. No manual reconstruction. Just direction.',
          ],
          bullets:[
            'Overall portfolio health',
            'Accounts losing momentum',
            'Risk signals to watch',
            "This week's focus areas",
            'Clear reasoning behind priorities',
          ],
        } },
      { day:'TUE → THU', fill:'cream',
        label:'Quiet for you',
        body:'AMs are getting their daily risk-ranked plays in the background. We don\'t bother leadership unless something changes the picture.',
        stat:'00',  statLabel:'pings to your inbox' },
      { day:'FRI 17:00', fill:'lime',
        label:'Friday Recap',
        body:'What stabilized, what slipped, who is moving what — and Monday is already half-drafted.',
        stat:'+9',  statLabel:'net stabilized',
        tip:{
          eyebrow:'FRIDAY · LEADERSHIP RECAP',
          headline:'Close the week with evidence.',
          paragraphs:[
            "Leadership closes the week with an outcome summary. What closed, what recovered, what carries forward. Monday already knows about next week's priorities, the loop continues automatically.",
            'No dashboards to check. No alignment meetings. The story of the week, written for you.',
          ],
          bullets:[
            'Weekly execution summary',
            'What closed, what recovered',
            'Accounts carrying forward',
            "Next Monday's brief, pre-loaded",
            'What the week taught Nauti',
          ],
        } },
    ],
    am: [
      { day:'MON 7:00',  fill:'lime',
        label:'This week\'s priorities',
        body:'Your week, your accounts — already triaged when you open the laptop.',
        stat:'04',  statLabel:'priorities for you' },
      { day:'TUE → THU', fill:'cream',
        label:'Quiet prioritize',
        body:'Risk-ranked plays for your accounts land each morning. Evidence attached. No alerts, no dashboard ritual.',
        stat:'09',  statLabel:'plays this week',
        tip:{
          eyebrow:'TUE → THU · QUIET PRIORITIZE',
          headline:'Every day, the right priorities.',
          paragraphs:[
            'Every AE gets their own priority list and the prep before every call. When signals shift during the week, priorities are re-routed live. Personalized, with context attached.',
            'No manual triage. Just the next move, with the why.',
          ],
          bullets:[
            'Personalized priorities per owner',
            'Pre-meeting prep with full context',
            'Momentum tracking across every deal',
            'Live re-routing when signals change',
            'Draft openings and next moves',
          ],
        } },
      { day:'FRI 17:00', fill:'lime',
        label:'Wrapped',
        body:'What you closed, what rolled, and three Mon-ready next steps drafted for you.',
        stat:'+$182k', statLabel:'closed this week' },
    ],
  };
  const cards = decks[audience];

  // Manifesto strip — three columns that summarize the rhythm for the active audience.
  const manifesto = audience === 'leader'
    ? [
        ['MON 7:00','Monday Brief',  'Week ranked by impact, across the portfolio you own.'],
        ['TUE → THU','Quiet by design','You stay focused on leadership work. AMs are prioritizing in the background — no inbox noise.'],
        ['FRI 17:00','Friday Recap',  'What stabilized, what slipped, who\'s moving what.'],
      ]
    : [
        ['MON 7:00','This week\'s priorities','Your week, your accounts — already triaged.'],
        ['TUE → THU','Quiet daily plays',     'Risk-ranked plays land each morning. No alerts, no dashboard ritual.'],
        ['FRI 17:00','Wrapped',               'What you closed, what rolled, Mon-ready next steps drafted for you.'],
      ];

  return (
    <section id="product" ref={ref} style={{padding:'140px 0 130px',background:'var(--bone)'}}>
      <div className="container">
        {/* Frame */}
        <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',
          borderTop:'1px solid var(--ink)',borderBottom:'1px solid var(--ink-line)',
          padding:'10px 0',marginBottom:36}}>
          <span className="mono" style={{fontSize:11,letterSpacing:'.16em',display:'inline-flex',alignItems:'center',gap:8}}>
            <span style={{width:6,height:6,borderRadius:999,background:'var(--lime)'}}/>
            NAUTI <span style={{color:'var(--ink-quiet)',marginLeft:14}}>// THE WEEK</span>
          </span>
          <span className="mono" style={{fontSize:11,color:'var(--ink-quiet)',letterSpacing:'.12em'}}>
          </span>
        </div>

        {/* Title block + audience toggle */}
        <div style={{display:'flex',alignItems:'flex-end',justifyContent:'space-between',gap:32,flexWrap:'wrap',marginBottom:24}}>
          <h2 className="display" style={{margin:0,fontSize:'clamp(44px, 6.4vw, 84px)',lineHeight:1.0}}>
            ONE WEEK.<br/>
            <span style={{display:'inline-block',marginTop:'.18em'}}>
              <span className="serif-grad" style={{fontSize:'1.05em'}}>every account.</span>
            </span>
          </h2>
          <div style={{
            display:'inline-flex',gap:6,padding:6,
            background:'var(--bone-3)',border:'1px solid var(--ink)',borderRadius:999,
          }}>
            {[['leader','Leadership'],['am','AM view']].map(([k,l])=>(
              <button key={k} onClick={()=>setAudience(k)} className="mono" style={{
                padding:'10px 18px',fontSize:11,border:0,cursor:'pointer',letterSpacing:'.1em',borderRadius:999,
                background: audience===k ? 'var(--ink)' : 'transparent',
                color: audience===k ? 'var(--lime)' : 'var(--ink-soft)',
                transition:'background .2s ease, color .2s ease',
              }}>{l.toUpperCase()}</button>
            ))}
          </div>
        </div>

        {/* Manifesto strip — 3 columns, content adapts to audience */}
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit, minmax(220px, 1fr))',gap:14,marginBottom:48,
          borderTop:'1px solid var(--ink-line)',borderBottom:'1px solid var(--ink-line)',padding:'18px 0'}}>
          {manifesto.map(([k,t,b],i)=>(
            <div key={audience+i} style={{display:'flex',flexDirection:'column',gap:8,paddingRight:18}}>
              <span className="mono" style={{fontSize:10,letterSpacing:'.14em',color:'var(--ink-quiet)'}}>{k}</span>
              <span className="display" style={{fontSize:18,letterSpacing:'-.01em',lineHeight:1.05}}>{t}</span>
              <span style={{fontSize:13,color:'var(--ink-soft)',lineHeight:1.5}}>{b}</span>
            </div>
          ))}
        </div>

        {/* Deck — five days, peek-staggered, alternating tilt */}
        <div style={{position:'relative',paddingBottom:40,paddingTop:18,paddingLeft:6,paddingRight:6}}>
          {cards.map((c,i)=>(
            <DeckCard key={audience+i} {...c} i={i} total={cards.length} seen={seen}/>
          ))}
        </div>

        {/* Footer line + sample brief CTA.  In leader view, hovering the button
            (without clicking) reveals the Portfolio rollup below. */}
        <div style={{marginTop:48,display:'flex',justifyContent:'space-between',alignItems:'baseline',flexWrap:'wrap',gap:24}}>
          <p style={{fontSize:16,maxWidth:580,margin:0,color:'var(--ink-soft)',lineHeight:1.55}}>
            {audience==='leader'
              ? <>Leaders see <strong>two touchpoints</strong> — Monday and Friday. We don't ping you mid-week. AMs are working their queue quietly in the background.</>
              : <>AMs get the <strong>same Monday and Friday beats</strong>, plus quiet daily prioritization Tue→Thu — risk-ranked plays on your accounts, evidence attached.</>
            }
          </p>
          <div className="brief-cta-col" style={{display:'flex',flexDirection:'column',alignItems:'flex-end',gap:6}}>
            <button className="btn"
              onMouseEnter={audience==='leader' ? onPreviewEnter : undefined}
              onMouseLeave={audience==='leader' ? onPreviewLeave : undefined}>
              Open a sample brief →
            </button>
            {audience==='leader' && (
              <span className="mono" style={{fontSize:10,letterSpacing:'.14em',color:'var(--ink-quiet)'}}>
                ↳ HOVER FOR ONE BLOCK INSIDE THE LEADER BRIEF
              </span>
            )}
          </div>
        </div>

        {/* Leader-only: portfolio rollup, revealed on button-hover */}
        {audience==='leader' && (
          <div className="leader-preview" onMouseEnter={onPreviewEnter} onMouseLeave={onPreviewLeave}
            style={{
              overflow:'hidden',
              maxHeight: hovered ? 1400 : 0,
              opacity:   hovered ? 1 : 0,
              transform: `translateY(${hovered ? 0 : -8}px)`,
              transition:'max-height .55s cubic-bezier(.2,.7,.2,1), opacity .35s ease, transform .35s ease',
              willChange:'max-height, opacity, transform',
            }}>
            <PortfolioView/>
          </div>
        )}
      </div>
    </section>
  );
}

// ALWAYS-ON / Ask Nauti — chat is the extra gear, used by everyone.
// Surfaces pattern recognition; opens the door to "sales memory" later in the page.
function AlwaysOn(){
  const [askTipOpen, setAskTipOpen] = useStateB(false);
  return (
    <section id="rhythm" style={{padding:'130px 0',background:'var(--bone-2)'}}>
      <div className="container">
        {/* Frame */}
        <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',
          borderTop:'1px solid var(--ink)',borderBottom:'1px solid var(--ink-line)',
          padding:'10px 0',marginBottom:36}}>
          <span className="mono" style={{fontSize:11,letterSpacing:'.16em',display:'inline-flex',alignItems:'center',gap:8}}>
            <span style={{width:6,height:6,borderRadius:999,background:'var(--violet)'}}/>
            NAUTI <span style={{color:'var(--ink-quiet)',marginLeft:14}}>// ALWAYS-ON</span>
          </span>
          <span className="mono" style={{fontSize:11,color:'var(--ink-quiet)',letterSpacing:'.12em'}}>
          </span>
        </div>

        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit, minmax(340px, 1fr))',gap:48,alignItems:'start'}}>
          {/* Left: copy + benefit list */}
          <div>
            <div style={{position:'relative',display:'inline-block',marginBottom:24}}
              onMouseEnter={()=>setAskTipOpen(true)}
              onMouseLeave={()=>setAskTipOpen(false)}>
              <div style={{display:'inline-flex',alignItems:'center',gap:8,padding:'6px 12px',
                border:'1.5px solid var(--ink)',borderRadius:999,background:'var(--violet)',color:'var(--bone)',
                boxShadow:'3px 3px 0 var(--ink)',cursor:'help',
                transform: askTipOpen ? 'translate(-1px,-1px)' : 'none',
                transition:'transform .2s ease',
              }}>
                <span style={{width:6,height:6,borderRadius:999,background:'var(--lime)'}}/>
                <span className="mono" style={{fontSize:10,letterSpacing:'.14em'}}>USED BY EVERYONE · ⌘K</span>
                <span style={{
                  fontSize:12,marginLeft:2,
                  opacity: askTipOpen ? 1 : .8,
                  transform: askTipOpen ? 'translate(2px,-2px)' : 'none',
                  transition:'opacity .2s ease, transform .2s ease',
                }}>↗</span>
              </div>

              <div style={{
                position:'absolute',
                top:'calc(100% + 12px)',left:0,
                width:'min(420px, 92vw)',
                zIndex: askTipOpen ? 30 : 5,
                opacity: askTipOpen ? 1 : 0,
                pointerEvents: askTipOpen ? 'auto' : 'none',
                transform: askTipOpen ? 'translateY(0)' : 'translateY(-8px)',
                transition:'opacity .2s ease, transform .25s cubic-bezier(.2,.7,.2,1)',
              }}>
                <div style={{
                  background:'var(--bone-3)',color:'var(--ink)',
                  border:'1.5px solid var(--ink)',borderRadius:14,
                  padding:'22px 24px',
                  boxShadow:'8px 8px 0 var(--violet)',
                }}>
                  <span className="mono" style={{fontSize:10,letterSpacing:'.16em',color:'var(--violet)',display:'inline-flex',alignItems:'center',gap:8}}>
                    <span style={{width:6,height:6,borderRadius:999,background:'var(--violet)'}}/>
                    ANYTIME · ASK NAUTI
                  </span>
                  <h4 className="display" style={{margin:'10px 0 14px',fontSize:24,letterSpacing:'-.01em',lineHeight:1.1}}>Ask Nauti anything.</h4>
                  <p style={{margin:'0 0 10px',fontSize:13.5,lineHeight:1.55,color:'var(--ink-soft)'}}>
                    Months of history, every objection, every open promise. In one message. Ask about any account and get the pattern, the momentum, the last exchanges, and the next move. Leaders, AEs, CS, RevOps. Same memory, same context, any time.
                  </p>
                  <p style={{margin:'0 0 10px',fontSize:13.5,lineHeight:1.55,color:'var(--ink-soft)'}}>
                    Try a prompt on the right. It is a live demo running on example data.
                  </p>
                  <ul style={{margin:'12px 0 0',paddingLeft:18}}>
                    {[
                      'Months of history in one answer',
                      'Account shape and behaviour',
                      'Open promises and last exchanges',
                      'What to do next, with reasoning',
                      'Shared across every role',
                    ].map((b,j)=>(
                      <li key={j} style={{fontSize:13,lineHeight:1.55,marginBottom:4,color:'var(--ink)'}}>{b}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="display" style={{margin:0,fontSize:'clamp(44px, 6vw, 80px)',lineHeight:.98}}>
              ASK NAUTI.<br/>
              <span style={{display:'inline-block',marginTop:'.14em'}}>
                <span className="serif-grad" style={{fontSize:'.92em'}}>any time.</span>
              </span>
            </h2>

            <p style={{fontSize:17,color:'var(--ink-soft)',marginTop:24,maxWidth:440,lineHeight:1.55}}>
              The weekly rhythm runs on its own. When you need to dive deeper, chat is right where you already work — leaders ask portfolio questions, AMs ask account questions.
            </p>

            <div style={{marginTop:32,display:'flex',flexDirection:'column',gap:12}}>
              {[
                ['EVERYONE',     'Leadership and every AM — same brain, different lens.'],
                ['PATTERN-AWARE','Sees what repeats across accounts before any one AM would.'],
                ['CONTEXTUAL',   'Lives in HubSpot &amp; Teams — no new tab to open.'],
              ].map(([k,v],i)=>(
                <div key={i} style={{display:'grid',gridTemplateColumns:'130px 1fr',gap:18,alignItems:'baseline',
                  paddingTop:14,borderTop:'1px solid var(--ink-line)'}}>
                  <span className="mono" style={{fontSize:10,letterSpacing:'.14em',color:'var(--ink-quiet)'}}>// {k}</span>
                  <span style={{fontSize:14,color:'var(--ink)',lineHeight:1.5}} dangerouslySetInnerHTML={{__html:v}}/>
                </div>
              ))}
            </div>
          </div>

          {/* Right: live Ask Nauti demo card */}
          <div>
            <AskNautiDemo/>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, {MondayBrief, AlwaysOn, useInView});
