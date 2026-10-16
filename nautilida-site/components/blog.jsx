// Blog — editorial index page. Pre-launch state: placeholder posts marked DRAFT,
// real content lands when ready. Mirrors About's top-strip + hero treatment.
const { useState: useStateBlog } = React;

// Glossary — definitions for the AI team lead category. Mirrored verbatim into the
// DefinedTermSet JSON-LD on the #/blog route so AEO/GEO crawlers can cite them.
const GLOSSARY = [
  ['ai-team-lead', 'AI team lead',
   "A coordination layer that runs the weekly revenue rhythm — Monday brief, mid-week priorities, Friday recap — and carries cross-stack memory across CRM, email, and chat. Distinct from AI assistants, which respond to prompts, and from revenue intelligence tools, which show what happened. Built for revenue teams on recurring accounts."],
  ['weekly-revenue-loop', 'Weekly revenue loop',
   "A four-part operating rhythm: Monday brief → mid-week owner-level priorities → Friday recap → memory that compounds into next Monday's plan. Replaces dashboard anxiety with direction."],
  ['cross-stack-memory', 'Cross-stack memory',
   "A single account memory that spans CRM, chat, and email, so the team picks up exactly where Friday left off, every week. The opposite of point-tool history, which only knows what happened inside its own silo."],
  ['monday-brief', 'Monday brief',
   "A leadership artifact delivered every Monday morning. Names the three accounts most likely to slip, the two opportunities most likely to move, the one pattern that changed since Friday, and any handovers needing context."],
  ['friday-recap', 'Friday recap',
   "A weekly written close. Tells you what moved and why, what was decided, what carries forward, and what the plan is for next Monday — narrative, not a table of numbers."],
  ['account-handover', 'Account handover',
   "When an account moves between reps, the full context — past conversations, decisions, signals, open loops — travels with the account, not the rep. Eliminates the months of compounded knowledge a rotation usually destroys."],
  ['reorder-pattern', 'Reorder pattern',
   "The shape of a B2B account's recurring purchases over time: frequency, basket changes, seasonality, drift. A primary signal for predicting account health on non-subscription revenue, where ARR and MRR don't apply."],
  ['at-risk-signal', 'At-risk signal',
   "A specific behavioral or transactional indicator that a recurring account may lapse: order frequency drop, response-time decay, sentiment shift, scope reduction. Composite signals matter more than any single one."],
  ['compounding-memory', 'Compounding memory',
   "Memory that gets sharper week over week. Every signal, decision, and exchange feeds back in, so months of history are present in every brief, recap, and answer the team gets."],
  ['coordination-layer', 'Coordination layer',
   "The system that decides who does what, with what context, this week. Separate from systems that show data (dashboards) or capture conversations (revenue intelligence). The AI team lead is a coordination layer."],
];

function Blog(){
  const goHome     = (e)=>{ e.preventDefault(); window.location.hash = ''; };
  const goWaitlist = (e)=>{ e.preventDefault(); window.location.hash = '#/waitlist'; };
  const goContact  = (e)=>{ e.preventDefault(); window.location.hash = '#/contact'; };

  // Pre-launch: placeholder posts in nautilida's voice. Replace with real entries when ready.
  const posts = [
    {
      tag:'MANIFESTO',
      date:'APRIL 2026',
      title:'The weekly revenue coordination loop, explained.',
      dek:'Monday brief, mid-week execution, Friday recap, compounding memory. The operating rhythm that replaces dashboard anxiety with direction.',
      mins:'9 min',
      status:'live',
      accent:'lime',
      href:'#/blog/weekly-loop',
    },
    {
      tag:'DEFINITION',
      date:'APRIL 2026',
      title:'What is an AI team lead for sales?',
      dek:'A short definition, how it differs from assistants and dashboards, and what it actually does for revenue teams that live on recurring accounts.',
      mins:'7 min',
      status:'live',
      accent:'violet',
      href:'#/blog/ai-team-lead',
    },
    {
      tag:'COMPARISON',
      date:'MAY 2026',
      title:'Revenue intelligence vs Nautilida.',
      dek:'Revenue intelligence tools tell you what happened on calls. Nautilida tells you what to do next about the deal. Here’s the real difference — and why the two solve different halves of the same problem.',
      mins:'6 min',
      status:'live',
      accent:'lime',
      href:'#/blog/revenue-intelligence-vs-nautilida',
    },
  ];

  return (
    <main style={{minHeight:'100vh',background:'var(--bone)',color:'var(--ink)'}}>
      {/* Top strip */}
      <div style={{padding:'24px 28px',display:'flex',alignItems:'center',justifyContent:'space-between',
        borderBottom:'1px solid var(--ink-line)'}}>
        <a href="#" onClick={goHome}>
          <Wordmark size={24} tone="ink"/>
        </a>
        <div style={{display:'flex',gap:8,flexWrap:'wrap'}}>
          <a href="#/contact" onClick={goContact} className="mono"
            style={{fontSize:11,letterSpacing:'.14em',color:'var(--ink-soft)',
              padding:'7px 12px',border:'1px solid var(--ink-line-2)',borderRadius:999}}>
            CONTACT →
          </a>
          <a href="#" onClick={goHome} className="mono"
            style={{fontSize:11,letterSpacing:'.14em',color:'var(--ink-soft)',
              padding:'7px 12px',border:'1px solid var(--ink-line-2)',borderRadius:999}}>
            ← BACK TO SITE
          </a>
        </div>
      </div>

      {/* Hero block */}
      <section style={{padding:'80px 0 48px'}}>
        <div className="container">
          <div className="eyebrow" style={{marginBottom:18}}>[ Notes from the lab ]</div>
          <h1 className="display" style={{margin:'0 0 22px',fontSize:'clamp(56px, 8vw, 116px)',lineHeight:.95,letterSpacing:'-.03em'}}>
            BLOG. <span className="serif-grad" style={{fontSize:'1.02em'}}>the journal.</span>
          </h1>
          <p style={{fontSize:18,color:'var(--ink-soft)',maxWidth:620,lineHeight:1.55,margin:0}}>
            Field notes from building Nauti. Manifestos, memory, and the boring engineering behind a quiet Monday brief. Light cadence, no newsletter spam.
          </p>
        </div>
      </section>

      {/* Featured: Nautilida Literacy — full course, dark+lime treatment to stand above blog cards */}
      <section style={{padding:'8px 0 24px'}}>
        <div className="container">
          <a href="/literacy/" style={{
            display:'block',padding:'28px 32px',
            background:'var(--ink)',color:'var(--bone)',
            border:'1.5px solid var(--ink)',borderRadius:14,
            boxShadow:'8px 8px 0 var(--lime)',
            transition:'transform .25s cubic-bezier(.2,.7,.2,1), box-shadow .25s ease',
          }}
          onMouseEnter={(e)=>{e.currentTarget.style.transform='translate(-2px,-2px)';e.currentTarget.style.boxShadow='10px 10px 0 var(--lime)';}}
          onMouseLeave={(e)=>{e.currentTarget.style.transform='none';e.currentTarget.style.boxShadow='8px 8px 0 var(--lime)';}}
          >
            <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',gap:24,flexWrap:'wrap'}}>
              <div style={{flex:'1 1 360px',minWidth:280}}>
                <span className="mono" style={{fontSize:10,letterSpacing:'.16em',color:'var(--lime)'}}>◉ FIRST EDITION · 7 CHAPTERS · ~40 MIN</span>
                <h3 className="display" style={{margin:'10px 0 12px',fontSize:'clamp(28px, 3.6vw, 44px)',letterSpacing:'-.01em',lineHeight:1.05,color:'var(--bone)'}}>
                  Nautilida Literacy.{' '}
                  <span className="serif-grad" style={{fontSize:'1.04em'}}>start here.</span>
                </h3>
                <p style={{margin:0,fontSize:14.5,color:'rgba(250,248,241,.78)',lineHeight:1.6,maxWidth:560}}>
                  A short course on the AI team lead category — what it is, what it isn't, and where it's going. Written for the people thinking about building, buying, or backing one.
                </p>
              </div>
              <span style={{
                display:'inline-flex',alignItems:'center',gap:6,
                padding:'10px 16px',background:'var(--lime)',color:'var(--ink)',
                border:'1.5px solid var(--bone)',borderRadius:999,
                fontSize:13,fontWeight:500,letterSpacing:'.01em',
                flexShrink:0,
              }}>
                Open the literacy <span style={{fontSize:11}}>↗</span>
              </span>
            </div>
          </a>
        </div>
      </section>

      {/* Pre-launch banner */}
      <section style={{padding:'0 0 32px'}}>
        <div className="container">
          <div style={{
            display:'flex',alignItems:'center',gap:14,flexWrap:'wrap',
            padding:'14px 18px',
            background:'var(--bone-3)',border:'1px dashed var(--ink-line-2)',borderRadius:12,
          }}>
            <span className="mono" style={{
              fontSize:10,letterSpacing:'.16em',color:'var(--violet)',
              background:'var(--violet-soft)',padding:'5px 9px',borderRadius:999,
            }}>// PRE-LAUNCH</span>
            <span style={{fontSize:14,color:'var(--ink-soft)',lineHeight:1.5}}>
              First posts land with our design partners. Want them in your inbox?
            </span>
            <a href="#/waitlist" onClick={goWaitlist} className="btn btn-primary" style={{padding:'8px 14px',fontSize:13,marginLeft:'auto'}}>
              Join the waitlist <span className="arrow">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Posts grid */}
      <section style={{padding:'24px 0 96px'}}>
        <div className="container">
          <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',
            borderTop:'1px solid var(--ink)',borderBottom:'1px solid var(--ink-line)',
            padding:'10px 0',marginBottom:24}}>
            <span className="mono" style={{fontSize:11,letterSpacing:'.16em',display:'inline-flex',alignItems:'center',gap:8}}>
              <span style={{width:6,height:6,borderRadius:999,background:'var(--violet)'}}/>
              JOURNAL <span style={{color:'var(--ink-quiet)',marginLeft:14}}>// 02 ENTRIES</span>
            </span>
            <span className="mono" style={{fontSize:11,color:'var(--ink-quiet)',letterSpacing:'.12em'}}>
              CADENCE · MONTHLY-ISH
            </span>
          </div>

          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit, minmax(320px, 1fr))',gap:18}}>
            {posts.map((p,i)=>(
              <PostCard key={i} {...p} i={i}/>
            ))}
          </div>
        </div>
      </section>

      {/* Glossary — definitional reference, indexed via DefinedTermSet JSON-LD for AEO/GEO */}
      <section id="glossary" style={{padding:'8px 0 96px'}}>
        <div className="container">
          <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',
            borderTop:'1px solid var(--ink)',borderBottom:'1px solid var(--ink-line)',
            padding:'10px 0',marginBottom:36}}>
            <span className="mono" style={{fontSize:11,letterSpacing:'.16em',display:'inline-flex',alignItems:'center',gap:8}}>
              <span style={{width:6,height:6,borderRadius:999,background:'var(--lime)'}}/>
              GLOSSARY <span style={{color:'var(--ink-quiet)',marginLeft:14}}>// {String(GLOSSARY.length).padStart(2,'0')} TERMS</span>
            </span>
            <span className="mono" style={{fontSize:11,color:'var(--ink-quiet)',letterSpacing:'.12em'}}>
              DEFINED · IN PLAIN ENGLISH
            </span>
          </div>

          <div className="eyebrow" style={{marginBottom:14}}>[ vocabulary ]</div>
          <h2 className="display" style={{margin:'0 0 22px',fontSize:'clamp(40px, 6vw, 72px)',lineHeight:.98,letterSpacing:'-.02em'}}>
            GLOSSARY. <span className="serif-grad" style={{fontSize:'1.04em'}}>terms, defined.</span>
          </h2>
          <p style={{fontSize:16,color:'var(--ink-soft)',maxWidth:640,lineHeight:1.55,margin:'0 0 40px'}}>
            The vocabulary we use across the site, briefs, and recaps — in one place. Useful if you're new to the category, or if you want a quick reference.
          </p>

          <dl style={{margin:0,display:'flex',flexDirection:'column'}}>
            {GLOSSARY.map(([slug, term, def], i)=>(
              <div key={slug} id={'glossary-'+slug} className="row-2"
                style={{
                  display:'grid',
                  gridTemplateColumns:'minmax(180px, 240px) 1fr',
                  gap:'24px 36px',
                  padding:'24px 0',
                  borderTop: i===0 ? '1px solid var(--ink)' : '1px solid var(--ink-line)',
                  ...(i===GLOSSARY.length-1 ? {borderBottom:'1px solid var(--ink)'} : {}),
                }}>
                <dt className="display" style={{fontSize:'clamp(16px, 1.6vw, 20px)',letterSpacing:'-.005em',lineHeight:1.15,margin:0}}>{term}</dt>
                <dd style={{margin:0,fontSize:15,color:'var(--ink-soft)',lineHeight:1.65}}>{def}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Outro CTA */}
      <section style={{padding:'80px 0',background:'var(--bone-2)',borderTop:'1px solid var(--ink-line)'}}>
        <div className="container" style={{textAlign:'center'}}>
          <h2 className="display" style={{margin:'0 0 18px',fontSize:'clamp(36px, 5vw, 64px)',lineHeight:1.0}}>
            DON'T MISS{' '}
            <span className="serif-grad" style={{fontSize:'1.05em'}}>the first one.</span>
          </h2>
          <p style={{fontSize:16,color:'var(--ink-soft)',margin:'0 auto 28px',maxWidth:520,lineHeight:1.55}}>
            Posts go to the waitlist first. We send when we have something to say — never before.
          </p>
          <div style={{display:'flex',gap:10,alignItems:'center',justifyContent:'center',flexWrap:'wrap'}}>
            <a href="#/waitlist" onClick={goWaitlist} className="btn btn-primary">Join the waitlist <span className="arrow">→</span></a>
            <a href="#/contact"  onClick={goContact} className="btn">Pitch a topic</a>
          </div>
        </div>
      </section>

      <Footer/>
    </main>
  );
}

function PostCard({tag, date, title, dek, mins, status, accent, href, i}){
  const [hover, setHover] = useStateBlog(false);
  const isDraft = status === 'draft';
  const accentColor = accent === 'violet' ? 'var(--violet)' : 'var(--lime)';
  const onClick = ()=>{ if (!isDraft && href) window.location.hash = href; };
  return (
    <article
      onClick={onClick}
      onMouseEnter={()=>setHover(true)}
      onMouseLeave={()=>setHover(false)}
      style={{
        background: hover && !isDraft ? 'var(--bone-3)' : 'var(--bone)',
        border:'1.5px solid var(--ink)',borderRadius:14,
        padding:'24px 24px 22px',
        boxShadow: hover && !isDraft ? '8px 8px 0 var(--violet)' : '6px 6px 0 var(--ink)',
        transform: hover && !isDraft ? 'translate(-2px,-2px)' : 'none',
        transition:'transform .25s cubic-bezier(.2,.7,.2,1), box-shadow .25s ease, background .2s ease',
        display:'flex',flexDirection:'column',gap:14,
        cursor: isDraft ? 'not-allowed' : 'pointer',
        position:'relative',
      }}>
      {/* Top row — tag + date */}
      <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',gap:10,flexWrap:'wrap'}}>
        <span className="mono" style={{
          fontSize:10,letterSpacing:'.14em',color:'var(--ink)',
          padding:'4px 9px',background:accentColor,borderRadius:999,
          border:'1px solid var(--ink)',
        }}>{tag}</span>
        <span className="mono" style={{fontSize:10,letterSpacing:'.14em',color:'var(--ink-quiet)'}}>{date}</span>
      </div>

      {/* Title + dek */}
      <h3 className="display" style={{
        margin:'4px 0 0',fontSize:'clamp(22px, 2.5vw, 28px)',
        lineHeight:1.1,letterSpacing:'-.01em',
      }}>{title}</h3>
      <p style={{margin:0,fontSize:14,color:'var(--ink-soft)',lineHeight:1.55}}>{dek}</p>

      {/* Footer row — mins + read indicator */}
      <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',gap:10,marginTop:'auto',paddingTop:14,borderTop:'1px solid var(--ink-line)'}}>
        <span className="mono" style={{fontSize:10,letterSpacing:'.12em',color:'var(--ink-quiet)'}}>· {mins} read</span>
        {isDraft ? (
          <span className="mono" style={{
            fontSize:10,letterSpacing:'.14em',color:'var(--ink-quiet)',
            border:'1px dashed var(--ink-line-2)',padding:'4px 9px',borderRadius:999,
          }}>DRAFT</span>
        ) : (
          <span className="mono" style={{
            fontSize:11,letterSpacing:'.1em',color:'var(--violet)',
            display:'inline-flex',alignItems:'center',gap:6,
          }}>READ <span style={{transform:hover?'translateX(3px)':'none',transition:'transform .25s ease'}}>→</span></span>
        )}
      </div>
    </article>
  );
}

Object.assign(window, {Blog, GLOSSARY});
