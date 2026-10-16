// Blog post — "What is an AI team lead for sales?"
// Route: #/blog/ai-team-lead
const { useState: useStatePostB } = React;

function PostAITeamLead(){
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
          <div className="eyebrow" style={{marginBottom:18}}>[ Definition · Category note ]</div>
          <h1 className="display" style={{margin:'0 0 22px',fontSize:'clamp(40px, 5.6vw, 80px)',lineHeight:1.0,letterSpacing:'-.02em'}}>
            What is an AI team lead <span className="serif-grad" style={{fontSize:'1.02em'}}>for sales?</span>
          </h1>
          <p style={{fontSize:19,color:'var(--ink-soft)',lineHeight:1.55,margin:'0 0 28px',maxWidth:720}}>
            A short definition, how it differs from assistants and dashboards, and what it actually does for revenue teams that live on recurring accounts.
          </p>
          <div className="mono" style={{display:'flex',alignItems:'center',gap:14,fontSize:11,letterSpacing:'.14em',color:'var(--ink-quiet)'}}>
            <span>Nautilida</span>
            <span>◉</span>
            <span>April 2026</span>
            <span>◉</span>
            <span>7 min read</span>
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
              An AI team lead for sales is a <strong>coordination layer</strong>, not an assistant. It carries memory across your stack, hands the right priorities to the right owners at the right time, and closes the loop every week. Senior level judgment that shows up in the tools your team already uses.
            </p>
          </div>

          <PostBH2>The short answer</PostBH2>
          <PostBP>An AI team lead is the layer that runs your revenue rhythm. It reads signals from CRM, email and chat, remembers every exchange, routes the week's priorities to specific owners, and narrates the outcome back to leadership. It behaves like a senior partner who happens to have perfect recall and never sleeps.</PostBP>

          <PostBH2>What it is not</PostBH2>
          <PostBP>An AI team lead is <strong>not a chatbot.</strong> It is not a dashboard. It is not a faster search bar over your CRM. Those tools show you information or answer a single question. They do not coordinate. They do not decide who acts next, when, or with what context.</PostBP>
          <PostBP>An AI assistant waits for you to prompt it. A team lead runs the week whether you prompt it or not. That is the difference that matters.</PostBP>

          <PostBH2>What it actually does</PostBH2>
          <PostBP>A working AI team lead for sales does three things every week:</PostBP>
          <PostBUL items={[
            <><strong>Carries memory.</strong> Every ask, every reply, every pattern stays with the team. No one re-asks, no one re-explains.</>,
            <><strong>Coordinates execution.</strong> Monday brings a leadership brief. Through the week, owners get priorities with the why attached. Friday closes with an outcome narrative.</>,
            <><strong>Compounds.</strong> Every cycle sharpens the patterns. Every handover travels with the account. The longer it runs, the sharper the team gets.</>,
          ]}/>

          <PostBH2>The weekly loop</PostBH2>
          <PostBP>The team lead runs a weekly rhythm. Monday opens with a leadership brief. Through the week, every AE gets their own priority list and pre-meeting prep. Friday closes with a summary of what moved and what carries forward. The plan for next Monday is already written.</PostBP>

          <PostBH2>Why coordination beats visibility</PostBH2>
          <PostBP>For the last decade, revenue tools have been about visibility. More dashboards, more signals, more charts. The problem is not visibility. The problem is that nobody is coordinated around the visibility. The AI team lead closes that gap.</PostBP>
          <PostBP>Instead of asking <em>what is happening</em>, the team starts asking <em>what are we doing about it</em>. The second question is the one that moves revenue.</PostBP>

          <PostBH2>Signs your team needs one</PostBH2>
          <PostBUL items={[
            'Monday mornings are spent reconstructing "which accounts slipped?"',
            'Every rep rotation feels like losing a quarter of context.',
            'You own a CRM, you own dashboards, and you still cannot tell which accounts need attention this week.',
            "Your best patterns live in two or three peoples' heads, not in a system.",
          ]}/>

          <PostBH2>How Nautilida does it</PostBH2>
          <PostBP>Nautilida is the AI team lead for sales, built for revenue teams that live on recurring accounts and cross-stack context. It connects to your CRM, email, and chat, builds a single memory, and runs the weekly loop end to end. No dashboards to interpret, no manual reconstruction, just direction that arrives where your team already works.</PostBP>

          {/* Key takeaways */}
          <div style={{
            marginTop:48,padding:'26px 28px',
            background:'var(--ink)',color:'var(--bone)',borderRadius:14,
            border:'1.5px solid var(--ink)',
          }}>
            <span className="mono" style={{fontSize:10,letterSpacing:'.16em',color:'var(--lime)'}}>◉ KEY TAKEAWAYS</span>
            <ul style={{margin:'14px 0 0',paddingLeft:20}}>
              {[
                'A team lead carries memory across your stack. An assistant only answers questions.',
                'Coordination beats visibility. The next move is more valuable than the next chart.',
                'The weekly loop beats real-time anxiety. Monday plans, Friday recaps, everything in between.',
                'Every owner gets the right priority, on time, with the why attached.',
                "Handovers travel with the account, not in someone's head.",
              ].map((b,i)=>(
                <li key={i} style={{fontSize:14.5,lineHeight:1.6,marginBottom:8,color:'rgba(250,248,241,.92)'}}>{b}</li>
              ))}
            </ul>
          </div>

          {/* FAQ */}
          <PostBH2 style={{marginTop:64}}>Frequently asked</PostBH2>
          <FAQB items={[
            {q:'Is an AI team lead the same as an AI assistant?',
             a:'No. An AI assistant responds to prompts. An AI team lead carries memory across your stack, routes priorities to specific owners, closes the loop on what happened, and coordinates the team week over week. Assistants answer. A team lead runs the rhythm.'},
            {q:'Does it replace the revenue leader?',
             a:'No. It frees the revenue leader from reconstruction work so they can lead. Monday briefs and Friday recaps arrive already written. Leaders still make judgment calls, set strategy, and own outcomes.'},
            {q:'What tools does it connect to?',
             a:'CRM (HubSpot, Pipedrive, Attio — Salesforce on the roadmap), chat (Slack, Teams), and email (Gmail, Outlook). It reads signals from all of them and delivers briefs back into the tool your team already lives in.'},
            {q:'How is it different from revenue intelligence tools?',
             a:'Revenue intelligence tools show you what happened inside one silo. An AI team lead builds a single memory across all silos, delivers the why and the next move, and coordinates execution across owners. Coordination over visibility.'},
            {q:'Who uses it on the team?',
             a:'Everyone. Leaders get Monday plans and Friday recaps. Account owners get priority lists and pre-meeting prep. RevOps and customer success ask it anything, any time, and get months of history in one answer.'},
          ]}/>
        </div>
      </article>

      {/* Outro CTA */}
      <section style={{padding:'80px 0',background:'var(--bone-2)',borderTop:'1px solid var(--ink-line)'}}>
        <div className="container" style={{textAlign:'center',maxWidth:680}}>
          <h2 className="display" style={{margin:'0 0 18px',fontSize:'clamp(36px, 5vw, 64px)',lineHeight:1.0}}>
            BRING IN YOUR{' '}
            <span className="serif-grad" style={{fontSize:'1.05em'}}>team lead.</span>
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

// Typography helpers (suffix B to avoid clash with PostWeeklyLoop's helpers)
function PostBH2({children, style={}}){
  return (
    <h2 className="display" style={{
      margin:'40px 0 16px',
      fontSize:'clamp(26px, 3vw, 36px)',
      letterSpacing:'-.01em',lineHeight:1.1,
      ...style,
    }}>{children}</h2>
  );
}
function PostBP({children}){
  return <p style={{margin:'0 0 16px',fontSize:16.5,lineHeight:1.7,color:'var(--ink)'}}>{children}</p>;
}
function PostBUL({items}){
  return (
    <ul style={{margin:'0 0 16px',paddingLeft:22}}>
      {items.map((it,i)=>(
        <li key={i} style={{fontSize:16,lineHeight:1.65,marginBottom:8,color:'var(--ink)'}}>{it}</li>
      ))}
    </ul>
  );
}
function FAQB({items}){
  const [open, setOpen] = useStatePostB(-1);
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

Object.assign(window, {PostAITeamLead});
