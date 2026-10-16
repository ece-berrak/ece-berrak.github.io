// Blog post — "The weekly revenue coordination loop, explained."
// Route: #/blog/weekly-loop
const { useState: useStatePost } = React;

function PostWeeklyLoop(){
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
          <div className="eyebrow" style={{marginBottom:18}}>[ Manifesto · Operating rhythm ]</div>
          <h1 className="display" style={{margin:'0 0 22px',fontSize:'clamp(40px, 5.6vw, 80px)',lineHeight:1.0,letterSpacing:'-.02em'}}>
            The weekly revenue coordination loop, <span className="serif-grad" style={{fontSize:'1.02em'}}>explained.</span>
          </h1>
          <p style={{fontSize:19,color:'var(--ink-soft)',lineHeight:1.55,margin:'0 0 28px',maxWidth:720}}>
            Monday brief, mid-week execution, Friday recap, compounding memory. The operating rhythm that replaces dashboard anxiety with direction.
          </p>
          <div className="mono" style={{display:'flex',alignItems:'center',gap:14,fontSize:11,letterSpacing:'.14em',color:'var(--ink-quiet)'}}>
            <span>Nautilida</span>
            <span>◉</span>
            <span>April 2026</span>
            <span>◉</span>
            <span>9 min read</span>
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
              The weekly revenue coordination loop is a four-part operating rhythm: a Monday brief that names the priorities, mid-week owner lists that route those priorities to the right people, a Friday recap that closes the loop on what moved, and a compounding memory that carries into next Monday. <strong>Cadence over alerts. Direction over dashboards.</strong>
            </p>
          </div>

          <PostH2>Why a loop, not a dashboard</PostH2>
          <PostP>The last decade of revenue tooling built more dashboards. The next one has to build more rhythm. Visibility without cadence is noise. A dashboard that shows you the same chart on Monday and on Friday is not a system — it is a mirror. The weekly loop is a system. It starts somewhere, ends somewhere, and hands you a decision you did not have to manufacture.</PostP>
          <PostP>A good loop is short enough that patterns show up, long enough that action is possible, and strict enough that the team can rely on it. A week is almost exactly the right length.</PostP>

          <PostH2>Monday · The leadership brief</PostH2>
          <PostP>Monday opens with a single document, delivered before 9am in the tool the team already lives in. It is not a dashboard. It is a written brief that reads like something a senior partner would hand you over coffee.</PostP>
          <PostP>A working Monday brief contains four elements:</PostP>
          <PostUL items={[
            'The top three accounts at risk this week, with the specific reason each one is flagged.',
            'The two opportunities with the most expected movement, and what is expected to happen.',
            'The one pattern that changed since Friday — a reorder window that shifted, a champion who went quiet, a new buyer who surfaced.',
            'Handovers or rotations that carry forward context from last week.',
          ]}/>
          <PostP>Short. Specific. Actionable. Leadership walks into Monday already knowing where the week is going. There is no reconstruction meeting. There is no "who is covering which accounts" triage. The plan is already written.</PostP>

          <PostH2>Mid-week · Owner-level priorities</PostH2>
          <PostP>Between Monday and Thursday, the loop routes priorities to specific owners. Every account manager starts their day with a short list: the three conversations that matter most today, with the why attached.</PostP>
          <PostP>Pre-meeting prep arrives before every call — the last three touches with this account, the promises made, the questions left open, the pattern this account is showing this month. No account manager has to reconstruct context. The context travels with the meeting.</PostP>
          <PostP>The mid-week phase is not a sprint. It is a quiet hand-delivery of direction. When it works, the team never feels overwhelmed by signals. They feel calm, pointed, and prepared.</PostP>

          <PostH2>Friday · The narrative recap</PostH2>
          <PostP>Friday closes the loop. Not with a table of numbers, but with narrative. What moved, what decided, what carries forward, what the plan is for Monday.</PostP>
          <PostP>A good Friday recap answers the four questions a revenue leader actually has:</PostP>
          <PostUL items={[
            <><strong>What changed in the book this week?</strong> Not "here is the pipeline chart" — what actually shifted and why.</>,
            <><strong>Which risks resolved and which new ones appeared?</strong> Named accounts, named reasons.</>,
            <><strong>What decisions did the team make?</strong> The calls that matter, documented once, never re-litigated.</>,
            <><strong>What is the plan for next Monday?</strong> Already drafted, ready for the next brief.</>,
          ]}/>
          <PostP>CRM reports tell you what happened. The Friday recap tells you what it means. That is the job of a team lead, and that is why the loop ends with narrative, not with numbers.</PostP>

          {/* NEW SECTION — AM perspective on Mon/Fri */}
          <PostH2>Monday and Friday from the rep seat</PostH2>
          <PostP>The leader's brief is the macro view. Each account manager opens the same loop from a different angle.</PostP>
          <PostP><strong>Monday for an AM</strong> is not a list of dashboards to check. It is a short, owned plan: this week's priorities, already triaged when the laptop opens. Three or four accounts that need movement, with the why attached for each one. Pre-meeting prep — last touches, open promises, questions still unanswered — travels with every call on the calendar. Nothing to reconstruct, nothing to dig for.</PostP>
          <PostP><strong>Friday for an AM</strong> is the wrap. What closed, what rolled, what carries. Three Monday-ready next moves are drafted before the AM logs off. There is no separate update to send to leadership, no recap to write — the loop already wrote it. Monday begins with the work already lined up.</PostP>
          <PostP>Same loop, different lens. Leaders get direction across the portfolio; AMs get direction inside their book. Nobody is left guessing what to do, and nobody has to assemble the answer themselves on Monday morning.</PostP>

          <PostH2>The compound · Memory between weeks</PostH2>
          <PostP>The part that changes everything is what happens between Friday and Monday. Every signal, every decision, every pattern is remembered. The book sharpens week over week. Accounts that showed a specific reorder rhythm in March are understood by the loop in April. The team does not start from zero on Monday — it picks up exactly where Friday left off, every week, for as long as the loop runs.</PostP>
          <PostP>This is why <strong>coordination is the moat, not intelligence.</strong> Intelligence gives you a sharp snapshot. The loop gives you a sharp team that gets sharper every week.</PostP>

          <PostH2>What the loop replaces</PostH2>
          <PostP>The weekly loop replaces a specific set of painful rituals. You know which ones:</PostP>
          <PostUL items={[
            'The Monday standup that mostly reconstructs what happened last week.',
            'The forecast call that argues about which deals are real.',
            'The Slack thread where someone asks "who is covering X account?" and three people answer differently.',
            'The Friday "any updates?" that nobody replies to until the following Tuesday.',
            'The quarterly QBR that tries to reconstruct nine months of context in forty-five minutes.',
          ]}/>
          <PostP>None of those rituals are the loop. The loop is what lets the team stop doing them.</PostP>

          <PostH2>How Nautilida runs the loop</PostH2>
          <PostP>Nautilida is the AI team lead that runs this loop end to end. It connects to your CRM, email, and chat, builds a single cross-stack memory, drafts the Monday brief, delivers owner priorities through the week, writes the Friday recap, and compounds everything it learns into next week's plan. No dashboards to interpret. Direction where your team already works.</PostP>

          {/* Key takeaways */}
          <div style={{
            marginTop:48,padding:'26px 28px',
            background:'var(--ink)',color:'var(--bone)',borderRadius:14,
            border:'1.5px solid var(--ink)',
          }}>
            <span className="mono" style={{fontSize:10,letterSpacing:'.16em',color:'var(--lime)'}}>◉ KEY TAKEAWAYS</span>
            <ul style={{margin:'14px 0 0',paddingLeft:20}}>
              {[
                'The loop has four parts: Monday brief, mid-week priorities, Friday recap, compounding memory.',
                'A week is the right unit: long enough for patterns, short enough for action.',
                'Monday brief is written narrative, not a dashboard. Three risks, two opportunities, one changed pattern.',
                'Mid-week routes the why to the right owner. Pre-meeting prep travels with every call.',
                'Friday closes with a narrative recap — what moved, what decided, what carries forward.',
                'Memory compounds between weeks. The team picks up where Friday left off, every Monday.',
              ].map((b,i)=>(
                <li key={i} style={{fontSize:14.5,lineHeight:1.6,marginBottom:8,color:'rgba(250,248,241,.92)'}}>{b}</li>
              ))}
            </ul>
          </div>

          {/* FAQ */}
          <PostH2 style={{marginTop:64}}>Frequently asked</PostH2>
          <FAQ items={[
            {q:'What is the weekly revenue coordination loop?',
             a:"It is a repeating weekly rhythm with four parts: a Monday leadership brief that names the week's priorities, mid-week owner-level priorities delivered to each account manager, a Friday recap that closes the loop on what moved, and a compounding memory that carries forward into next Monday's plan. No dashboards to interpret, no meetings to reconstruct."},
            {q:'Why weekly and not daily or real-time?',
             a:'Revenue teams need cadence, not constant alerts. A week is long enough for real signals to emerge and short enough to act before the window closes. Real-time dashboards create anxiety. The weekly loop creates rhythm.'},
            {q:'What goes into a Monday brief?',
             a:'The three accounts most likely to slip this week, the two opportunities with the highest expected movement, the one pattern that changed since Friday, and any handovers or rotations that need context. Short, specific, actionable.'},
            {q:'How is the Friday recap different from a CRM report?',
             a:'A CRM report tells you what happened. A Friday recap tells you what moved and why, what was decided, what carries forward, and what the plan is for next Monday. It is written narrative that reads like a team lead summary, not a table of numbers.'},
            {q:'What does compounding memory mean in practice?',
             a:'Every signal, every decision, every exchange is remembered across weeks. Patterns sharpen over months. Handovers travel with the account. The team does not start from zero on Monday — it picks up exactly where Friday left off, every week.'},
          ]}/>
        </div>
      </article>

      {/* Outro CTA */}
      <section style={{padding:'80px 0',background:'var(--bone-2)',borderTop:'1px solid var(--ink-line)'}}>
        <div className="container" style={{textAlign:'center',maxWidth:680}}>
          <h2 className="display" style={{margin:'0 0 18px',fontSize:'clamp(36px, 5vw, 64px)',lineHeight:1.0}}>
            START YOUR{' '}
            <span className="serif-grad" style={{fontSize:'1.05em'}}>weekly loop.</span>
          </h2>
          <p style={{fontSize:16,color:'var(--ink-soft)',margin:'0 auto 28px',maxWidth:520,lineHeight:1.55}}>
            Nautilida runs the loop end to end. Connect HubSpot and Teams, the first Monday brief lands on Monday at 7:00 AM.
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

// Typography helpers — keep article body consistent.
function PostH2({children, style={}}){
  return (
    <h2 className="display" style={{
      margin:'40px 0 16px',
      fontSize:'clamp(26px, 3vw, 36px)',
      letterSpacing:'-.01em',lineHeight:1.1,
      ...style,
    }}>{children}</h2>
  );
}
function PostP({children}){
  return <p style={{margin:'0 0 16px',fontSize:16.5,lineHeight:1.7,color:'var(--ink)'}}>{children}</p>;
}
function PostUL({items}){
  return (
    <ul style={{margin:'0 0 16px',paddingLeft:22}}>
      {items.map((it,i)=>(
        <li key={i} style={{fontSize:16,lineHeight:1.65,marginBottom:8,color:'var(--ink)'}}>{it}</li>
      ))}
    </ul>
  );
}

function FAQ({items}){
  const [open, setOpen] = useStatePost(-1);
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

Object.assign(window, {PostWeeklyLoop});
