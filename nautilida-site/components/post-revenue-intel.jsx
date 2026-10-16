// Blog post — "Revenue intelligence vs Nautilida"
// Route: #/blog/revenue-intelligence-vs-nautilida
const { useState: useStatePostC } = React;

function PostRevenueIntel(){
  const goHome     = (e)=>{ e.preventDefault(); window.location.hash = ''; };
  const goBlog     = (e)=>{ e.preventDefault(); window.location.hash = '#/blog'; };
  const goWaitlist = (e)=>{ e.preventDefault(); window.location.hash = '#/waitlist'; };
  const goContact  = (e)=>{ e.preventDefault(); window.location.hash = '#/contact'; };

  return (
    <main style={{minHeight:'100vh',background:'var(--bone)',color:'var(--ink)'}}>
      {/* Top strip */}
      <div style={{padding:'24px 28px',display:'flex',alignItems:'center',justifyContent:'space-between',
        borderBottom:'1px solid var(--ink-line)'}}>
        <a href="#" onClick={goHome}>
          <Wordmark size={24} tone="ink"/>
        </a>
        <div style={{display:'flex',gap:8,flexWrap:'wrap'}}>
          <a href="#/blog" onClick={goBlog} className="mono"
            style={{fontSize:11,letterSpacing:'.14em',color:'var(--ink-soft)',
              padding:'7px 12px',border:'1px solid var(--ink-line-2)',borderRadius:999}}>
            ← ALL POSTS
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
        <div className="container" style={{maxWidth:820}}>
          <div className="eyebrow" style={{marginBottom:18}}>[ Comparison · Category note ]</div>
          <h1 className="display" style={{margin:'0 0 22px',fontSize:'clamp(40px, 5.6vw, 80px)',lineHeight:1.0,letterSpacing:'-.02em'}}>
            Revenue intelligence <span className="serif-grad" style={{fontSize:'1.02em'}}>vs Nautilida.</span>
          </h1>
          <p style={{fontSize:19,color:'var(--ink-soft)',lineHeight:1.55,margin:'0 0 28px',maxWidth:720}}>
            Revenue intelligence tools tell you what happened on calls. Nautilida tells you what to do next about the deal. Here's the real difference — and why the two solve different halves of the same problem.
          </p>
          <div className="mono" style={{display:'flex',alignItems:'center',gap:14,fontSize:11,letterSpacing:'.14em',color:'var(--ink-quiet)'}}>
            <span>Nautilida</span>
            <span>◉</span>
            <span>May 2026</span>
            <span>◉</span>
            <span>6 min read</span>
          </div>
        </div>
      </section>

      {/* Body */}
      <article style={{padding:'24px 0 80px'}}>
        <div className="container" style={{maxWidth:760}}>

          {/* The short answer callout */}
          <div style={{
            margin:'12px 0 40px',padding:'24px 26px',
            background:'var(--bone-3)',border:'1.5px solid var(--ink)',borderRadius:14,
            boxShadow:'8px 8px 0 var(--violet)',
          }}>
            <span className="mono" style={{fontSize:10,letterSpacing:'.16em',color:'var(--violet)'}}>◉ THE SHORT ANSWER</span>
            <p style={{margin:'10px 0 0',fontSize:16,lineHeight:1.65,color:'var(--ink)'}}>
              Revenue intelligence platforms are <strong>listeners</strong> — they record, transcribe, and surface what was said. Nautilida is a <strong>coordination layer</strong> that watches the full pipeline and pushes the next move to the right person at the right moment. Different layers, complementary in most stacks.
            </p>
          </div>

          <PostCP>Revenue intelligence platforms are built around one core idea: listen to every customer interaction, then surface patterns from what was said. That's useful. It's also only half the job.</PostCP>

          <PostCH2>What revenue intelligence actually does</PostCH2>
          <PostCP>Tools like Gong record calls, transcribe them, score them, and flag risk signals buried in the conversation. The value is real — a rep who stops saying "hopefully" on calls closes more deals. A manager who sees three stalled opportunities all missing economic buyers can coach faster.</PostCP>
          <PostCP>But the model is fundamentally retrospective. The platform watches what happened, packages it into a report, and delivers it to whoever has time to read a report. Acting on it is still a human problem — usually a RevOps person stitching together signals from three different tools at 9 PM on a Sunday.</PostCP>

          <PostCH2>Where that model breaks down</PostCH2>
          <PostCP>Revenue intelligence assumes someone is always watching the dashboard. In a 50–200-person B2B SaaS company, that person often doesn't exist — or exists as a 0.5 FTE RevOps hire who also manages the CRM, the forecasting call, and every one-off CEO request.</PostCP>
          <PostCP>The result: the signal is there, but nobody acts on it in time. A deal slips because the follow-up from two weeks ago was never sent. An account goes cold because the AM's weekly review got pushed. The call transcript sits in Gong, accurately flagged, completely ignored.</PostCP>
          <PostCP>Roughly 30% of a RevOps lead's week goes to manual report stitching — pulling signals from revenue intelligence tools, CRM data, and email threads into something a leader can act on. That's a tax on the team, not a capability.</PostCP>

          <PostCH2>What Nautilida does instead</PostCH2>
          <PostCP>Nautilida isn't a smarter listener. It's a system that runs the coordination layer above the tools — watching the full pipeline (calls, emails, CRM state, deal stage, last touch, forecast delta) and pushing the right action to the right person at the right moment.</PostCP>
          <PostCP>A CRO gets a Monday morning view of everything that needs attention this week — not a 40-row spreadsheet, but a prioritized read on which deals are at risk and why. An AM gets a Friday note on their own book: what moved, what stalled, what needs a follow-up by Tuesday. Neither of them has to ask for it, search for it, or stitch it together.</PostCP>
          <PostCP>When a deal looks like the three you lost in Q2, Nautilida says so — in plain English, in the moment the pattern is relevant, not buried in a quarterly business review deck.</PostCP>

          <PostCH2>The takeaway</PostCH2>
          <PostCP>Revenue intelligence tells you what happened. Nautilida tells you what to do next — and makes sure the right person hears it before it's too late to act.</PostCP>
          <PostCP>If your team is using a revenue intelligence tool and still losing deals to slow follow-through, that's the gap. The recordings are fine. The coordination layer is broken.</PostCP>

          {/* Key takeaways */}
          <div style={{
            marginTop:48,padding:'26px 28px',
            background:'var(--ink)',color:'var(--bone)',borderRadius:14,
            border:'1.5px solid var(--ink)',
          }}>
            <span className="mono" style={{fontSize:10,letterSpacing:'.16em',color:'var(--lime)'}}>◉ KEY TAKEAWAYS</span>
            <ul style={{margin:'14px 0 0',paddingLeft:20}}>
              {[
                'Revenue intelligence is retrospective — it tells you what happened on the call.',
                'Nautilida is prospective — it tells you what to do next about the deal.',
                'Most mid-market teams have the signal already; what they lack is coordinated action on it.',
                "Roughly 30% of a RevOps lead's week is spent stitching signals into something leaders can act on. That's a tax, not a capability.",
                'The two layers are complementary in most stacks — keep your revenue intelligence tool, add the coordination layer on top.',
              ].map((b,i)=>(
                <li key={i} style={{fontSize:14.5,lineHeight:1.6,marginBottom:8,color:'rgba(250,248,241,.92)'}}>{b}</li>
              ))}
            </ul>
          </div>

          {/* FAQ */}
          <PostCH2 style={{marginTop:64}}>Frequently asked</PostCH2>
          <FAQC items={[
            {q:'Is Nautilida a revenue intelligence tool?',
             a:'No. Revenue intelligence tools (Gong, Chorus, Avoma) record and analyze customer conversations. Nautilida is a coordination layer that runs above the entire pipeline — calls, email, CRM, forecast — and pushes the next move to the right person. Different layer, different job.'},
            {q:'Should we use Gong and Nautilida together?',
             a:'For most teams, yes. Gong covers the conversation layer with depth. Nautilida covers the coordination layer across all signals, including Gong\'s. The two are complementary — keep what you have on conversations, add coordination on top.'},
            {q:'What does "coordination layer" actually mean?',
             a:'A coordination layer decides who acts next, with what context, on what timeline. It reads from every silo (CRM, calls, email, chat), holds memory across weeks, and routes priorities to specific owners. Dashboards show; a coordination layer directs.'},
            {q:'Do I still need a RevOps person if I use Nautilida?',
             a:'Yes — but freed from manual report stitching. Nautilida runs the weekly rhythm (Monday brief, mid-week priorities, Friday recap) automatically. RevOps moves from data plumbing to strategic work: territory design, comp planning, deal desk, sales process.'},
            {q:'How fast does a team see value?',
             a:'The first Monday brief lands within the first week of connecting HubSpot/Salesforce and chat. Pattern recognition compounds over weeks as more signal flows in. By month three, the system has enough memory to surface non-obvious account risk before it shows up in the CRM.'},
          ]}/>
        </div>
      </article>

      {/* Outro CTA */}
      <section style={{padding:'80px 0',background:'var(--bone-2)',borderTop:'1px solid var(--ink-line)'}}>
        <div className="container" style={{textAlign:'center',maxWidth:680}}>
          <h2 className="display" style={{margin:'0 0 18px',fontSize:'clamp(36px, 5vw, 64px)',lineHeight:1.0}}>
            ADD THE COORDINATION{' '}
            <span className="serif-grad" style={{fontSize:'1.05em'}}>layer.</span>
          </h2>
          <p style={{fontSize:16,color:'var(--ink-soft)',margin:'0 auto 28px',maxWidth:520,lineHeight:1.55}}>
            Keep your revenue intelligence tool. Add Nautilida on top — the first Monday brief lands within a week of connecting your stack.
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

// Typography helpers (suffix C to avoid clashing with sibling post components)
function PostCH2({children, style={}}){
  return (
    <h2 className="display" style={{
      margin:'40px 0 16px',
      fontSize:'clamp(26px, 3vw, 36px)',
      letterSpacing:'-.01em',lineHeight:1.1,
      ...style,
    }}>{children}</h2>
  );
}
function PostCP({children}){
  return <p style={{margin:'0 0 16px',fontSize:16.5,lineHeight:1.7,color:'var(--ink)'}}>{children}</p>;
}
function FAQC({items}){
  const [open, setOpen] = useStatePostC(-1);
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
              maxHeight: isOpen ? 360 : 0,
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

Object.assign(window, {PostRevenueIntel});
