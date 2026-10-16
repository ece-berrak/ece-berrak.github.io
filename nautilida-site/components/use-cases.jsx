// Use Cases — sector-specific landing pages targeted at Head of Sales, AMs,
// CROs, and CEOs in each industry. AEO/GEO-friendly: each sector gets its own
// persona/pain/signals/weekly-loop framing so AI engines surface them for
// sector-specific buyer queries ("AI for manufacturing sales", "B2B catering
// account management", etc.).
//
// Routes:
//   #/use-cases                       → UseCasesHub (directory + "more coming" tile)
//   #/use-cases/manufacturing         → UseCase slug='manufacturing'
//   #/use-cases/catering              → UseCase slug='catering'
const { useState: useStateUC } = React;

const USE_CASES = {
  manufacturing: {
    slug: 'manufacturing',
    name: 'Manufacturing',
    short: 'Manufacturing & industrial distribution',
    tagline: 'For industrial distributors, parts suppliers, and equipment manufacturers',
    cardSummary: 'Long sales cycles, channel-partner complexity, RFQs scattered across email and CRM, and reorder rhythms that vary by account.',
    heroDek: "Long sales cycles, complex spec discussions, channel partners drifting in and out of activity, and a book of recurring accounts where the meaning lives in the details. Nautilida runs the weekly rhythm so the team — leadership, AMs, channel managers — walks into Monday already knowing where to act.",
    audience: [
      {role:'Head of Sales',  context:'Industrial distributors managing 100–1,000 active reorder accounts.'},
      {role:'Account Managers',context:'Covering 20–80 accounts each, balancing recurring orders with one-off RFQs.'},
      {role:'CROs',           context:'B2B parts, equipment, and raw-material suppliers running multi-channel revenue.'},
      {role:'CEOs',           context:'Small and mid-market manufacturers selling through reps and channel partners.'},
    ],
    pain: [
      "Long sales cycles with multiple buyer-side stakeholders — engineering, procurement, plant ops — and no system that holds the full thread.",
      "Reorder rhythms vary by account: some monthly, some quarterly, some only when stock runs low. No easy way to see which ones are slipping until a quarter is already missed.",
      "RFQs and quote revisions scattered across email, CRM, and spec sheets, with no memory tying them to historical decisions on the same account.",
      "Channel partners and distributors that go quiet for weeks and nobody notices until pipeline is gone.",
      "AM rotations wipe months of compounded context — what the buyer cared about, the price commitments, the spec everyone agreed on.",
    ],
    signals: [
      'Reorder frequency and basket-change patterns at the account level',
      'Quote-to-order conversion windows and revision counts',
      'Spec discussion drift — when a spec keeps changing, that is the signal',
      'Channel partner activation cadence',
      'Engagement decay on key buyer contacts (procurement, engineering, plant managers)',
      'New buyer surfaces — procurement contacts changing means the relationship is in transition',
      'Service contract renewal windows',
      'Industry-specific seasonal patterns (capex cycles, fiscal-year budget windows)',
    ],
    loop: {
      mon: "Top reorder accounts at slip risk. Top RFQs likely to close. The one channel-partner pattern that changed since Friday. The AM team gets their priorities by 9am.",
      mid: "Every AM walks into account calls with the last three touches, open RFQ threads, the spec still being debated, and the buyer-side question left unanswered.",
      fri: "What moved across the book this week. Which RFQs progressed. Which channel partners came back. The plan for next Monday is already drafted.",
    },
    faqs: [
      {q:"Our reorder cycles vary wildly by account. Can Nauti handle that?",
       a:"Yes — Nauti reads each account's individual reorder pattern over months, not a one-size-fits-all rule. Monthly, quarterly, or stock-driven, the pattern is what matters and the pattern is what compounds in memory."},
      {q:"We sell through distributors and direct at the same time. Does that confuse it?",
       a:"No. Nauti's account memory holds both shapes side by side — a direct account and a channel-partnered account look different in the data, and the brief reflects that. Each AM and channel manager gets a view scoped to their book."},
      {q:"Our deals involve engineering and procurement. Does Nauti understand spec discussions?",
       a:"It reads them like any other buyer signal. A spec that keeps changing is a signal. A spec that gets locked is a signal. Engineering going quiet is a signal. The brief surfaces which ones matter this week and why."},
      {q:"Our CRM hygiene isn't great. Will Nauti still work?",
       a:"Yes — Nauti reads email and chat alongside CRM and fills gaps. If the CRM is sparse but the inbox is rich, the inbox carries the memory. Improving CRM hygiene over time is a side-effect, not a precondition."},
      {q:"Who on our team uses it day-to-day?",
       a:"Head of Sales gets the Monday brief and Friday recap. Each AM gets their own priority list and pre-call prep. The CRO gets the portfolio-level recap. Channel managers get partner-specific patterns. Same loop, different lens."},
    ],
  },

  catering: {
    slug: 'catering',
    name: 'B2B Catering',
    short: 'B2B catering & corporate hospitality',
    tagline: 'For B2B catering firms, corporate event companies, and hospitality providers',
    cardSummary: 'Office reorders, one-off events, and hybrid bookings in the same memory. Skip signals, day-of-week shifts, and destination classification when tags are missing.',
    heroDek: "Office catering, corporate events, hospitality contracts — different shapes, same memory. Nautilida runs the weekly rhythm so the team walks into Monday already knowing which accounts are slipping, which events should have rebooked but haven't, and which patterns just changed.",
    audience: [
      {role:'Head of Sales',  context:'B2B catering firms managing 50–500 active accounts across offices and events.'},
      {role:'Account Managers',context:'Balancing recurring office catering with one-off corporate events and hybrid bookings.'},
      {role:'CROs',           context:'Corporate hospitality and food-service companies running multi-shape revenue.'},
      {role:'CEOs',           context:'Catering firms operating across offices, events, and seasonal contracts.'},
    ],
    pain: [
      "Office accounts, one-off events, and hybrid bookings — three different signal shapes, often inside the same CRM with the same fields.",
      "Reorder windows for office catering that drift quietly — a weekly office that goes silent for two weeks isn't always flagged in time.",
      "Event re-booking patterns lost across reps — last year's repeating event might not get rebooked this year if nobody is tracking it.",
      "Destination classification (office / event / other) often unknown without HubSpot tags, and tags get missed in the rush.",
      "Seasonal spikes (holiday, summer, fiscal year-end) overlap with steady reorder accounts and confuse the leadership view.",
      "AM rotations lose months of buyer-relationship context that lived in one person's head.",
    ],
    signals: [
      "Skip signals — accounts that ordered on a rhythm and missed the last window",
      "Changed order sizes (head-count shifts as offices reopen, contract, or expand)",
      "Day-of-week shifts — a Tuesday office that drifts to Wednesday means something",
      "Destination classification (office / event / other) — HubSpot tag first, order content fallback",
      "Event re-booking patterns — last year's repeating events that haven't rebooked this year",
      "Seasonal pattern overlay — separates seasonal spikes from real account shifts",
      "New buyer surfaces — when the admin contact inside an office account changes, the relationship has moved",
    ],
    loop: {
      mon: "Three office accounts skipped their reorder window. Two events from last year haven't rebooked. The Wednesday-office pattern shifted. The AM team gets their priorities.",
      mid: "Every AM walks into account conversations with last orders, the rebooking due-window, the head-count trend, and the destination history.",
      fri: "What moved across the book. Which offices came back. Which events booked. What patterns broke. Monday's plan is already written.",
    },
    faqs: [
      {q:"We have a mix of recurring office accounts and one-off events. Can Nauti handle both?",
       a:"Yes — that mix is the use case. Nauti separates the two signal shapes (recurring rhythm vs event re-booking) inside the same account memory, so the office side and the event side stay legible without forcing them into the same template."},
      {q:"Our HubSpot tags for office vs event are inconsistent. Will Nauti work?",
       a:"Yes. Nauti reads the order content as a fallback — head count, time of day, recurring vs one-off shape — and infers the destination type when tags are missing. Tag hygiene improves over time but is not a precondition."},
      {q:"Our season is wildly cyclical (holiday spike, summer slump). Does Nauti get confused?",
       a:"No. Pattern recognition runs on the account level over months, so seasonal effects are separated from account-specific shifts. The Monday brief tells you which accounts are slipping in absolute terms, not against a flat baseline."},
      {q:"Who on the team gets value from it?",
       a:"Head of Sales gets the Monday brief and Friday recap. AMs get account-level priorities and pre-call prep. The CRO can ask Nauti portfolio-level questions any time — top accounts, events that didn't rebook, growth shifts. The CEO can ask \"which accounts grew this quarter\" without anyone assembling a spreadsheet."},
      {q:"We've got AMs who rotate accounts. Does that break the memory?",
       a:"No — that is the whole point. Account memory travels with the account, not the rep. The new AM walks into the relationship with months of context already there: last orders, rebooking due-windows, the contact who actually decides, the patterns that matter."},
    ],
  },
};

function UseCasesHub(){
  const goHome     = (e)=>{ e.preventDefault(); window.location.hash = ''; };
  const goWaitlist = (e)=>{ e.preventDefault(); window.location.hash = '#/waitlist'; };
  const goContact  = (e)=>{ e.preventDefault(); window.location.hash = '#/contact'; };

  const order = ['manufacturing', 'catering'];
  const cards = order.map(slug => USE_CASES[slug]).filter(Boolean);

  return (
    <main style={{minHeight:'100vh',background:'var(--bone)',color:'var(--ink)'}}>
      {/* Top strip */}
      <div style={{padding:'24px 28px',display:'flex',alignItems:'center',justifyContent:'space-between',
        borderBottom:'1px solid var(--ink-line)'}}>
        <a href="#" onClick={goHome}>
          <Wordmark size={24} tone="ink"/>
        </a>
        <div style={{display:'flex',gap:8,flexWrap:'wrap'}}>
          <a href="#" onClick={goHome} className="mono"
            style={{fontSize:11,letterSpacing:'.14em',color:'var(--ink-soft)',
              padding:'7px 12px',border:'1px solid var(--ink-line-2)',borderRadius:999}}>
            ← BACK TO SITE
          </a>
        </div>
      </div>

      {/* Hero */}
      <section style={{padding:'80px 0 48px'}}>
        <div className="container">
          <div className="eyebrow" style={{marginBottom:18}}>[ use cases · sector deep-dives ]</div>
          <h1 className="display" style={{margin:'0 0 22px',fontSize:'clamp(56px, 8vw, 116px)',lineHeight:.95,letterSpacing:'-.03em'}}>
            USE CASES. <span className="serif-grad" style={{fontSize:'1.02em'}}>by sector.</span>
          </h1>
          <p style={{fontSize:18,color:'var(--ink-soft)',maxWidth:680,lineHeight:1.55,margin:0}}>
            How an AI team lead shows up in real revenue books. Each page is written for the people running the team — Head of Sales, AMs, CROs, CEOs — in that specific sector. Pain, signals, the weekly loop in their terms.
          </p>
        </div>
      </section>

      {/* Cards grid */}
      <section style={{padding:'24px 0 96px'}}>
        <div className="container">
          <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',
            borderTop:'1px solid var(--ink)',borderBottom:'1px solid var(--ink-line)',
            padding:'10px 0',marginBottom:24}}>
            <span className="mono" style={{fontSize:11,letterSpacing:'.16em',display:'inline-flex',alignItems:'center',gap:8}}>
              <span style={{width:6,height:6,borderRadius:999,background:'var(--lime)'}}/>
              SECTORS <span style={{color:'var(--ink-quiet)',marginLeft:14}}>// {String(cards.length).padStart(2,'0')} LIVE · MORE COMING</span>
            </span>
            <span className="mono" style={{fontSize:11,color:'var(--ink-quiet)',letterSpacing:'.12em'}}>
              FOR HOS · AM · CRO · CEO
            </span>
          </div>

          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit, minmax(320px, 1fr))',gap:18}}>
            {cards.map((c)=>(
              <UseCaseHubCard key={c.slug} uc={c}/>
            ))}
            <UseCaseComingCard/>
          </div>
        </div>
      </section>

      {/* Outro CTA */}
      <section style={{padding:'80px 0',background:'var(--bone-2)',borderTop:'1px solid var(--ink-line)'}}>
        <div className="container" style={{textAlign:'center',maxWidth:680}}>
          <h2 className="display" style={{margin:'0 0 18px',fontSize:'clamp(36px, 5vw, 64px)',lineHeight:1.0}}>
            DON'T SEE YOUR{' '}
            <span className="serif-grad" style={{fontSize:'1.05em'}}>sector?</span>
          </h2>
          <p style={{fontSize:16,color:'var(--ink-soft)',margin:'0 auto 28px',maxWidth:520,lineHeight:1.55}}>
            Tell us what your book of accounts looks like. If the shape is recurring revenue or repeated relationships, the loop probably fits — and we'll write the page next.
          </p>
          <div style={{display:'flex',gap:10,alignItems:'center',justifyContent:'center',flexWrap:'wrap'}}>
            <a href="#/contact" onClick={goContact} className="btn btn-primary">Tell us about your sector <span className="arrow">→</span></a>
            <a href="#/waitlist" onClick={goWaitlist} className="btn">Join the waitlist</a>
          </div>
        </div>
      </section>

      <Footer/>
    </main>
  );
}

function UseCaseHubCard({uc}){
  const [hover, setHover] = useStateUC(false);
  const onClick = ()=>{ window.location.hash = '#/use-cases/' + uc.slug; };
  return (
    <article
      onClick={onClick}
      onMouseEnter={()=>setHover(true)}
      onMouseLeave={()=>setHover(false)}
      style={{
        background: hover ? 'var(--bone-3)' : 'var(--bone)',
        border:'1.5px solid var(--ink)',borderRadius:14,
        padding:'24px 24px 22px',
        boxShadow: hover ? '8px 8px 0 var(--violet)' : '6px 6px 0 var(--ink)',
        transform: hover ? 'translate(-2px,-2px)' : 'none',
        transition:'transform .25s cubic-bezier(.2,.7,.2,1), box-shadow .25s ease, background .2s ease',
        display:'flex',flexDirection:'column',gap:14,
        cursor:'pointer',
      }}>
      <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',gap:10,flexWrap:'wrap'}}>
        <span className="mono" style={{
          fontSize:10,letterSpacing:'.14em',color:'var(--ink)',
          padding:'4px 9px',background:'var(--lime)',borderRadius:999,
          border:'1px solid var(--ink)',
        }}>{uc.name.toUpperCase()}</span>
        <span className="mono" style={{fontSize:10,letterSpacing:'.12em',color:'var(--ink-quiet)'}}>
          USE CASE · LIVE
        </span>
      </div>
      <h3 className="display" style={{
        margin:'4px 0 0',fontSize:'clamp(22px, 2.5vw, 28px)',
        lineHeight:1.1,letterSpacing:'-.01em',
      }}>{uc.short}.</h3>
      <p style={{margin:0,fontSize:14,color:'var(--ink-soft)',lineHeight:1.55}}>{uc.cardSummary}</p>
      <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',gap:10,marginTop:'auto',paddingTop:14,borderTop:'1px solid var(--ink-line)'}}>
        <span className="mono" style={{fontSize:10,letterSpacing:'.12em',color:'var(--ink-quiet)'}}>· for HoS · AM · CRO · CEO</span>
        <span className="mono" style={{
          fontSize:11,letterSpacing:'.1em',color:'var(--violet)',
          display:'inline-flex',alignItems:'center',gap:6,
        }}>READ <span style={{transform:hover?'translateX(3px)':'none',transition:'transform .25s ease'}}>→</span></span>
      </div>
    </article>
  );
}

function UseCaseComingCard(){
  const goContact = (e)=>{ e.preventDefault(); window.location.hash = '#/contact'; };
  return (
    <article style={{
      background:'var(--bone-3)',
      border:'1.5px dashed var(--ink-line-2)',borderRadius:14,
      padding:'24px 24px 22px',
      display:'flex',flexDirection:'column',gap:14,
    }}>
      <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',gap:10,flexWrap:'wrap'}}>
        <span className="mono" style={{
          fontSize:10,letterSpacing:'.16em',color:'var(--violet)',
          padding:'4px 9px',background:'var(--violet-soft)',borderRadius:999,
        }}>// MORE TO COME</span>
        <span className="mono" style={{fontSize:10,letterSpacing:'.12em',color:'var(--ink-quiet)'}}>
          USE CASE · DRAFTING
        </span>
      </div>
      <h3 className="display" style={{
        margin:'4px 0 0',fontSize:'clamp(22px, 2.5vw, 28px)',
        lineHeight:1.1,letterSpacing:'-.01em',color:'var(--ink-soft)',
      }}>More sectors, soon.</h3>
      <p style={{margin:0,fontSize:14,color:'var(--ink-soft)',lineHeight:1.55}}>
        Logistics. Pharma distribution. Industrial services. SaaS post-sale. The shape repeats — recurring relationships, cross-stack memory, weekly rhythm. New use cases land here as we write them.
      </p>
      <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',gap:10,marginTop:'auto',paddingTop:14,borderTop:'1px dashed var(--ink-line-2)'}}>
        <span className="mono" style={{fontSize:10,letterSpacing:'.12em',color:'var(--ink-quiet)'}}>· tell us what fits next</span>
        <a href="#/contact" onClick={goContact} className="mono" style={{
          fontSize:11,letterSpacing:'.1em',color:'var(--violet)',
          display:'inline-flex',alignItems:'center',gap:6,
        }}>WRITE IN <span>→</span></a>
      </div>
    </article>
  );
}

function UseCase({slug}){
  const data = USE_CASES[slug];
  const goHome     = (e)=>{ e.preventDefault(); window.location.hash = ''; };
  const goHub      = (e)=>{ e.preventDefault(); window.location.hash = '#/use-cases'; };
  const goWaitlist = (e)=>{ e.preventDefault(); window.location.hash = '#/waitlist'; };
  const goContact  = (e)=>{ e.preventDefault(); window.location.hash = '#/contact'; };

  if (!data) return null;

  return (
    <main style={{minHeight:'100vh',background:'var(--bone)',color:'var(--ink)'}}>
      {/* Top strip */}
      <div style={{padding:'24px 28px',display:'flex',alignItems:'center',justifyContent:'space-between',
        borderBottom:'1px solid var(--ink-line)'}}>
        <a href="#" onClick={goHome}>
          <Wordmark size={24} tone="ink"/>
        </a>
        <div style={{display:'flex',gap:8,flexWrap:'wrap'}}>
          <a href="#/use-cases" onClick={goHub} className="mono"
            style={{fontSize:11,letterSpacing:'.14em',color:'var(--ink-soft)',
              padding:'7px 12px',border:'1px solid var(--ink-line-2)',borderRadius:999}}>
            ← USE CASES
          </a>
          <a href="#" onClick={goHome} className="mono"
            style={{fontSize:11,letterSpacing:'.14em',color:'var(--ink-soft)',
              padding:'7px 12px',border:'1px solid var(--ink-line-2)',borderRadius:999}}>
            ← BACK TO SITE
          </a>
        </div>
      </div>

      {/* Hero */}
      <section style={{padding:'80px 0 32px'}}>
        <div className="container" style={{maxWidth:880}}>
          <div className="eyebrow" style={{marginBottom:18}}>[ use case · {data.short.toLowerCase()} ]</div>
          <h1 className="display" style={{margin:'0 0 22px',fontSize:'clamp(44px, 6.4vw, 92px)',lineHeight:.98,letterSpacing:'-.025em'}}>
            Nautilida for <span className="serif-grad" style={{fontSize:'1.04em'}}>{data.name.toLowerCase()}.</span>
          </h1>
          <p style={{fontSize:18,color:'var(--ink-soft)',lineHeight:1.55,margin:'0 0 22px',maxWidth:760}}>
            <strong style={{color:'var(--ink)'}}>{data.tagline}.</strong> {data.heroDek}
          </p>
          <div className="mono" style={{display:'flex',alignItems:'center',gap:14,fontSize:11,letterSpacing:'.14em',color:'var(--ink-quiet)',flexWrap:'wrap'}}>
            <span>WRITTEN FOR</span>
            <span>◉</span>
            <span>HEAD OF SALES</span>
            <span>·</span>
            <span>AM</span>
            <span>·</span>
            <span>CRO</span>
            <span>·</span>
            <span>CEO</span>
          </div>
        </div>
      </section>

      {/* Who this is for */}
      <section style={{padding:'48px 0 24px'}}>
        <div className="container" style={{maxWidth:1040}}>
          <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',
            borderTop:'1px solid var(--ink)',borderBottom:'1px solid var(--ink-line)',
            padding:'10px 0',marginBottom:28}}>
            <span className="mono" style={{fontSize:11,letterSpacing:'.16em',display:'inline-flex',alignItems:'center',gap:8}}>
              <span style={{width:6,height:6,borderRadius:999,background:'var(--violet)'}}/>
              WHO THIS IS FOR
            </span>
            <span className="mono" style={{fontSize:11,color:'var(--ink-quiet)',letterSpacing:'.12em'}}>
              {data.audience.length} ROLES
            </span>
          </div>
          <div className="row-2" style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:14}}>
            {data.audience.map((a, i)=>(
              <div key={i} style={{
                padding:'20px 22px',background:'var(--bone-3)',
                border:'1.5px solid var(--ink)',borderRadius:12,
                display:'flex',flexDirection:'column',gap:8,
              }}>
                <span className="display" style={{fontSize:'clamp(16px, 1.8vw, 20px)',letterSpacing:'-.005em',lineHeight:1.15}}>{a.role}</span>
                <span style={{fontSize:14,color:'var(--ink-soft)',lineHeight:1.55}}>{a.context}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The problem */}
      <section style={{padding:'48px 0 24px'}}>
        <div className="container" style={{maxWidth:880}}>
          <h2 className="display" style={{margin:'0 0 14px',fontSize:'clamp(28px, 3.6vw, 44px)',lineHeight:1.0,letterSpacing:'-.015em'}}>
            The problem in <span className="serif-grad" style={{fontSize:'1.04em'}}>{data.name.toLowerCase()}.</span>
          </h2>
          <p style={{fontSize:15.5,color:'var(--ink-soft)',maxWidth:680,lineHeight:1.55,margin:'0 0 22px'}}>
            What the team is actually fighting in this sector — the things that don't show up in a pipeline chart.
          </p>
          <ul style={{margin:0,padding:0,listStyle:'none',display:'flex',flexDirection:'column',gap:14}}>
            {data.pain.map((p, i)=>(
              <li key={i} style={{
                position:'relative',paddingLeft:30,
                fontSize:16,lineHeight:1.65,color:'var(--ink)',
              }}>
                <span style={{
                  position:'absolute',left:0,top:8,
                  width:14,height:14,borderRadius:3,
                  background:'var(--rose)',border:'1.5px solid var(--ink)',
                }}/>
                {p}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Signals Nauti reads */}
      <section style={{padding:'48px 0 24px'}}>
        <div className="container" style={{maxWidth:880}}>
          <h2 className="display" style={{margin:'0 0 14px',fontSize:'clamp(28px, 3.6vw, 44px)',lineHeight:1.0,letterSpacing:'-.015em'}}>
            The signals Nauti reads <span className="serif-grad" style={{fontSize:'1.04em'}}>here.</span>
          </h2>
          <p style={{fontSize:15.5,color:'var(--ink-soft)',maxWidth:680,lineHeight:1.55,margin:'0 0 22px'}}>
            Sector-specific signals, read across CRM, email, and chat — and synthesized into the weekly brief. The signals are what compound week over week.
          </p>
          <div style={{
            border:'1.5px solid var(--ink)',borderRadius:14,overflow:'hidden',
            background:'var(--bone-3)',
          }}>
            {data.signals.map((s, i)=>(
              <div key={i} style={{
                display:'flex',alignItems:'flex-start',gap:14,
                padding:'16px 22px',
                borderTop: i===0 ? 'none' : '1px solid var(--ink-line)',
                background: i % 2 === 0 ? 'var(--bone-3)' : 'var(--bone)',
              }}>
                <span style={{
                  flexShrink:0,marginTop:4,
                  width:10,height:10,borderRadius:2,
                  background:'var(--lime)',border:'1px solid var(--ink)',
                }}/>
                <span style={{fontSize:15,lineHeight:1.6,color:'var(--ink)'}}>{s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The weekly loop in [sector] terms */}
      <section style={{padding:'48px 0 24px'}}>
        <div className="container" style={{maxWidth:1040}}>
          <h2 className="display" style={{margin:'0 0 14px',fontSize:'clamp(28px, 3.6vw, 44px)',lineHeight:1.0,letterSpacing:'-.015em'}}>
            The weekly loop in <span className="serif-grad" style={{fontSize:'1.04em'}}>{data.name.toLowerCase()} terms.</span>
          </h2>
          <p style={{fontSize:15.5,color:'var(--ink-soft)',maxWidth:680,lineHeight:1.55,margin:'0 0 28px'}}>
            What Monday, mid-week, and Friday actually look like in this sector. Same loop, written in your language.
          </p>
          <div className="row-3-collapse" style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:14}}>
            <LoopCard label="MONDAY" tone="lime" body={data.loop.mon}/>
            <LoopCard label="MID-WEEK" tone="bone" body={data.loop.mid}/>
            <LoopCard label="FRIDAY" tone="violet" body={data.loop.fri}/>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{padding:'48px 0 80px'}}>
        <div className="container" style={{maxWidth:760}}>
          <h2 className="display" style={{margin:'0 0 22px',fontSize:'clamp(26px, 3vw, 36px)',letterSpacing:'-.01em',lineHeight:1.1}}>
            Frequently asked.
          </h2>
          <FAQUC items={data.faqs}/>
        </div>
      </section>

      {/* Outro CTA */}
      <section style={{padding:'80px 0',background:'var(--bone-2)',borderTop:'1px solid var(--ink-line)'}}>
        <div className="container" style={{textAlign:'center',maxWidth:680}}>
          <h2 className="display" style={{margin:'0 0 18px',fontSize:'clamp(36px, 5vw, 64px)',lineHeight:1.0}}>
            SEE IT ON YOUR{' '}
            <span className="serif-grad" style={{fontSize:'1.05em'}}>own book.</span>
          </h2>
          <p style={{fontSize:16,color:'var(--ink-soft)',margin:'0 auto 28px',maxWidth:520,lineHeight:1.55}}>
            Connect HubSpot and Teams. The first Monday brief, written for {data.name.toLowerCase()}, lands at 7:00 AM.
          </p>
          <div style={{display:'flex',gap:10,alignItems:'center',justifyContent:'center',flexWrap:'wrap'}}>
            <a href="#/waitlist" onClick={goWaitlist} className="btn btn-primary">Join the waitlist <span className="arrow">→</span></a>
            <a href="#/contact"  onClick={goContact} className="btn">Talk to a human</a>
          </div>
        </div>
      </section>

      <Footer/>
    </main>
  );
}

function LoopCard({label, tone, body}){
  const accent = tone === 'lime' ? 'var(--lime)' : tone === 'violet' ? 'var(--violet)' : 'var(--ink)';
  const bg     = tone === 'violet' ? 'var(--ink)' : 'var(--bone-3)';
  const fg     = tone === 'violet' ? 'var(--bone)' : 'var(--ink)';
  const fgSoft = tone === 'violet' ? 'rgba(250,248,241,.85)' : 'var(--ink-soft)';
  return (
    <div style={{
      padding:'24px 24px',
      background:bg,color:fg,
      border:'1.5px solid var(--ink)',borderRadius:14,
      boxShadow: `8px 8px 0 ${accent}`,
      display:'flex',flexDirection:'column',gap:12,
    }}>
      <span className="mono" style={{fontSize:10,letterSpacing:'.18em',
        color: tone === 'violet' ? 'var(--lime)' : tone === 'lime' ? 'var(--ink)' : 'var(--violet)'}}>
        ◉ {label}
      </span>
      <p style={{margin:0,fontSize:14.5,lineHeight:1.65,color:fgSoft}}>{body}</p>
    </div>
  );
}

function FAQUC({items}){
  const [open, setOpen] = useStateUC(-1);
  return (
    <div style={{display:'flex',flexDirection:'column',gap:10}}>
      {items.map((it,i)=>{
        const isOpen = open === i;
        return (
          <button key={i} onClick={()=>setOpen(isOpen ? -1 : i)} style={{
            textAlign:'left',cursor:'pointer',
            background: isOpen ? 'var(--bone-3)' : 'var(--bone)',
            border:'1.5px solid var(--ink)',borderRadius:12,
            padding:'18px 22px',
            font:'inherit',color:'inherit',
            display:'block',width:'100%',
            transition:'background .2s ease',
          }}>
            <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',gap:14}}>
              <span style={{fontSize:15.5,fontWeight:600,letterSpacing:'-.005em',color:'var(--ink)'}}>{it.q}</span>
              <span style={{
                fontSize:16,color: isOpen ? 'var(--violet)' : 'var(--ink-soft)',
                transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                transition:'transform .25s ease',
              }}>+</span>
            </div>
            <div style={{
              overflow:'hidden',
              maxHeight: isOpen ? 480 : 0,
              opacity: isOpen ? 1 : 0,
              transition:'max-height .35s cubic-bezier(.2,.7,.2,1), opacity .25s ease',
            }}>
              <p style={{margin:'12px 0 0',fontSize:14.5,lineHeight:1.65,color:'var(--ink-soft)'}}>{it.a}</p>
            </div>
          </button>
        );
      })}
    </div>
  );
}

Object.assign(window, {UseCase, UseCasesHub, USE_CASES});
