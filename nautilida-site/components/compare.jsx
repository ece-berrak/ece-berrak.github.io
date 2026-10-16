// Compare — head-to-head pages for "Nautilida vs <Competitor>".
// Routes: #/compare/gong, #/compare/clari, #/compare/gainsight
// Each comparison takes a stance (PDF says Perplexity/ChatGPT prefer cited
// sources that take a position). Article + FAQPage JSON-LD lives in app.jsx
// and reads from window.COMPARISONS.
const { useState: useStateCmp } = React;

const COMPARISONS = {
  gong: {
    slug: 'gong',
    name: 'Gong',
    category: 'revenue intelligence · conversation analytics',
    heroDek: "Gong is a revenue intelligence platform built around conversation analytics. Nautilida is an AI team lead — a coordination and synthesis layer that sits above the silos. Different layers of the stack, complementary in most teams.",
    verdict: "Gong tells you what was said inside the call. Nautilida reads it across the week — alongside CRM, email, and chat — and tells the team what to do about it.",
    verdictSub: "Visibility vs synthesis. Gong is a signal source; Nautilida is the signal interpreter.",
    fitTogether: "In most stacks, Gong feeds Nautilida. Call summaries and deal-quality scores from Gong become signals in Nautilida's cross-stack memory — read together with CRM, email, and chat to produce the Monday brief, owner priorities, and Friday recap. The shift is additive: keep the visibility layer, add the coordination layer above it.",
    table: [
      ['What it is',           'Conversation intelligence',                       'AI team lead — coordination & synthesis layer'],
      ['Layer of the stack',   'Single silo: voice / call data',                  'Above the silos — reads CRM + chat + email + (optionally) Gong'],
      ['What it produces',     'Visibility into individual conversations',        'Synthesis: which accounts, which patterns, which next moves matter this week'],
      ['Time horizon',         'Per-call, per-deal',                              'Per-week across the whole book, compounding over months'],
      ['Memory shape',         'Per-call recordings, transcripts, deal scoring',  'Cross-stack account memory that carries through handovers and weeks'],
      ['Relationship',         'Signal source',                                   'Signal interpreter — pulls Gong in, reads it in context'],
    ],
    capabilities: [
      {name:'Proactive delivery', desc:'Briefs and recaps arrive on a fixed rhythm, without being asked.',
       cMark:'partial', cText:'Email digests of call activity and deal-level alerts. Not a leadership brief or team-wide weekly recap.',
       nText:'Monday leadership brief, mid-week owner priorities, Friday team-wide recap. Weekly, always on.'},
      {name:'Chat on demand', desc:'Ask anything ad-hoc, get answers grounded in months of book history.',
       cMark:'partial', cText:'Gong Assistant answers questions about specific calls and deals. Bounded to conversation data.',
       nText:'Ask Nauti anything — single account, patterns across the book, six-month trends. Cross-stack-grounded.'},
      {name:'Delivered where you work', desc:'Briefs and answers land where the team already lives, not a separate app.',
       cMark:'partial', cText:'Slack and Teams alerts for call activity. Most reading happens inside the Gong app.',
       nText:'Slack, Teams, email. No new dashboard to learn or log into.'},
      {name:'Cross-stack memory', desc:'A single memory across CRM, chat, email, and call data.',
       cMark:'partial', cText:'Voice + CRM signals on the deal side. Email and chat are not natively in memory.',
       nText:'Single account memory across CRM + chat + email (+ Gong, where present). One source of context.'},
      {name:'Compounding memory', desc:'Memory sharpens week over week as patterns accumulate.',
       cMark:'partial', cText:'Per-deal and per-rep patterns improve with more calls. Bounded to conversation data.',
       nText:'Account memory compounds across the whole book over months. March patterns sharpen April briefs.'},
      {name:'Cross-silo synthesis', desc:'Derives meaning across silos, not just visibility into each.',
       cMark:'partial', cText:'Smart Trackers and Deal Intelligence within call/deal data. Synthesis is voice-bounded.',
       nText:'Reads CRM + chat + email + call data together; outputs what to do this week, with the why attached.'},
    ],
    nautiWins: [
      "Visibility is no longer the bottleneck — your team has data, but nobody is coordinating around it.",
      "You need a Monday brief that names the three accounts most worth attention this week, with the why attached — not eight hours of recordings to scrub.",
      "Revenue runs across calls, email, chat, and CRM, and the meaning lives in the combination — not inside any one silo.",
      "You want pattern recognition that compounds week over week — accounts read in March understood differently in April.",
      "The team has scaled past the point where leadership can hold the full book in their head.",
    ],
    competitorWins: [
      "Outbound or sales-development teams where the call is the primary instrument.",
      "You need call coaching, talk-time analytics, and deal-quality scoring derived directly from voice.",
      "Most of your buyers convert through scheduled discovery calls, not email or recurring orders.",
      "A dedicated enablement function is investing in conversation-quality improvement.",
    ],
    faqs: [
      {q:"Is Nautilida a replacement for Gong?",
       a:"No. They sit at different layers and are usually complementary. Gong handles call-level visibility — recordings, transcripts, talk-time, deal-quality scoring. Nautilida is a coordination and synthesis layer above the silos: it reads from CRM, email, chat — and from Gong, where present — and outputs what the team should do this week. Most revenue teams that have Gong will keep it and add Nautilida above it."},
      {q:"We already have Gong. What does Nautilida add?",
       a:"Gong shows you what was said in the call. Nautilida tells you what it means in context with everything else: the email a champion sent on Tuesday, the reorder pattern that shifted, the CRM stage that quietly slipped. It also produces written briefs and recaps every week — coordination artifacts Gong was never designed to write."},
      {q:"Can Nautilida read Gong call data?",
       a:"Yes. Gong is a signal source like any other. Call summaries and deal scoring merge into the cross-stack account memory, so a Tuesday call surfaces in Friday's recap and informs Monday's brief alongside the rest of the week."},
      {q:"We're a large enterprise revenue team — does Nautilida fit?",
       a:"Yes — large teams benefit most. The whole problem Nautilida solves is that no human can hold the full book in head any more. Small teams use it because the leader holds everything; large teams use it because nobody can. The size of the team is not the constraint — the size of the book is."},
      {q:"Don't Gong's Engage or Forecast modules already do coordination?",
       a:"They extend Gong's call-centric model into adjacent surfaces, but they remain rooted in conversation data. Nautilida starts from the account-week as the unit of synthesis — not from any individual call. Different mental model, different output."},
    ],
  },

  clari: {
    slug: 'clari',
    name: 'Clari',
    category: 'revenue forecasting · pipeline analytics',
    heroDek: "Clari is a revenue forecasting platform built around pipeline accuracy and ARR signal. Nautilida is an AI team lead — a coordination and synthesis layer that sits above the silos. Different jobs at different layers; teams that have one usually benefit from the other.",
    verdict: "Clari forecasts the number. Nautilida synthesizes what is happening across the team and tells you what to do about it this week.",
    verdictSub: "Forecast layer vs coordination layer. Clari is a signal source for pipeline; Nautilida is the signal interpreter across the whole stack.",
    fitTogether: "In an enterprise revenue stack, Clari and Nautilida co-exist cleanly. Clari rolls pipeline up to a defensible commit; Nautilida reads pipeline state alongside email, chat, and CRM motion to produce the weekly briefs, owner priorities, and Friday recap. Forecast hygiene stays in Clari. The team's rhythm and the meaning across silos lives in Nautilida.",
    table: [
      ['What it is',           'Revenue forecasting & pipeline analytics',        'AI team lead — coordination & synthesis layer'],
      ['Layer of the stack',   'Pipeline + ARR roll-up',                          'Above the silos — reads CRM + chat + email + (optionally) Clari'],
      ['What it produces',     'A defensible commit number',                      'Synthesis: which accounts, which patterns, which next moves matter this week'],
      ['Time horizon',         'Quarter / annual forecast horizon',               'Per-week, compounding over months'],
      ['Revenue model fit',    'ARR / subscription primitives',                   'Any shape — subscription, reorder, B2B distribution, hybrid'],
      ['Relationship',         'Signal source for pipeline',                      'Signal interpreter across all silos'],
    ],
    capabilities: [
      {name:'Proactive delivery', desc:'Briefs and recaps arrive on a fixed rhythm, without being asked.',
       cMark:'partial', cText:'Automated forecast roll-ups, deal alerts, and Clari Capture daily updates. Pipeline-bounded, not a leadership brief.',
       nText:'Monday leadership brief, mid-week owner priorities, Friday team-wide recap. Weekly, always on.'},
      {name:'Chat on demand', desc:'Ask anything ad-hoc, get answers grounded in months of book history.',
       cMark:'partial', cText:'Clari Copilot answers questions inside calls. The forecasting product itself has limited ad-hoc Q&A across the book.',
       nText:'Ask Nauti anything — single account, patterns across the book, six-month trends. Cross-stack-grounded.'},
      {name:'Delivered where you work', desc:'Briefs and answers land where the team already lives, not a separate app.',
       cMark:'partial', cText:'Slack and Teams forecast notifications. Most workflow happens inside the Clari app.',
       nText:'Slack, Teams, email. No new dashboard to learn or log into.'},
      {name:'Cross-stack memory', desc:'A single memory across CRM, chat, email, and call data.',
       cMark:'partial', cText:'CRM and pipeline state, with light email metadata via Clari Capture. Chat is not native.',
       nText:'Single account memory across CRM + chat + email (+ Clari, where present). One source of context.'},
      {name:'Compounding memory', desc:'Memory sharpens week over week as patterns accumulate.',
       cMark:'partial', cText:'Forecast-accuracy patterns improve over quarters. Bounded to pipeline data.',
       nText:'Account memory compounds across the whole book over months. March patterns sharpen April briefs.'},
      {name:'Cross-silo synthesis', desc:'Derives meaning across silos, not just visibility into each.',
       cMark:'partial', cText:'RevAI / forecast intelligence within pipeline data. Synthesis is forecast-bounded.',
       nText:'Reads CRM + chat + email + pipeline together; outputs what to do this week, with the why attached.'},
    ],
    nautiWins: [
      "Forecast accuracy is solved (or is not the priority) — what's missing is direction inside the week.",
      "Revenue is non-subscription or hybrid (reorder-based, distribution, mixed) where ARR primitives don't apply cleanly.",
      "You need a Monday brief and a Friday recap — coordination artifacts, not a forecast roll-up.",
      "Patterns matter across CRM, email, and chat — not just inside the pipeline.",
      "The team needs synthesis across silos, not another silo-specific dashboard.",
    ],
    competitorWins: [
      "ARR-shaped revenue with clean subscription primitives — ACV, MRR, multi-stage pipeline.",
      "Forecast hygiene is its own discipline with dedicated owners.",
      "The CFO needs a defensible commit number every Monday morning.",
      "Sales leadership runs a formal pipeline-review cadence with stage-based pass/fail criteria.",
    ],
    faqs: [
      {q:"Is Nautilida a replacement for Clari?",
       a:"No. They sit at different layers and are complementary. Clari handles forecasting — rolling pipeline up to a defensible commit. Nautilida is coordination and synthesis above the silos. A team can use both without overlap: Clari for the forecast layer, Nautilida for the weekly rhythm and account-level direction."},
      {q:"We already have Clari. What does Nautilida add?",
       a:"Clari sees the pipeline. Nautilida sees the team. It reads CRM and pipeline state alongside email and chat, derives meaning from the combination, and produces the leadership brief, owner priorities, and Friday recap — coordination artifacts that pipeline analytics was never designed to write."},
      {q:"Our revenue is reorder-based. Should we use Clari?",
       a:"Probably not as the primary forecasting tool — Clari's value compresses on non-subscription revenue because the primitives don't apply cleanly. Nautilida is built around the signals reorder businesses actually have: order frequency, basket changes, response decay, sentiment shift. For ARR-mixed teams, both can co-exist."},
      {q:"Can Nautilida read Clari data?",
       a:"Yes — pipeline state from Clari is just another signal in the cross-stack memory. Pipeline movements show up in Friday recaps and Monday briefs alongside email exchanges and chat patterns."},
      {q:"We're a large enterprise team. Is Nautilida the right shape for us?",
       a:"Yes — particularly large teams. No single human can hold the entire book any more. Nautilida holds it: every account, every conversation, every pattern, in a single memory. Leadership gets a portfolio view; AMs get account-level direction. The bigger the team, the more obvious the value."},
    ],
  },

  gainsight: {
    slug: 'gainsight',
    name: 'Gainsight',
    category: 'customer success · health scores & playbooks',
    heroDek: "Gainsight is a customer success platform built around health scores and playbook automation for dedicated CSM organizations. Nautilida is an AI team lead — a coordination and synthesis layer that sits above all silos and across all owners. Different shapes for different jobs.",
    verdict: "Gainsight runs CS playbooks at scale. Nautilida synthesizes what is happening across the entire revenue team — sales, CS, and leadership — and runs the weekly rhythm.",
    verdictSub: "CS workflow layer vs cross-functional coordination layer. Gainsight is a signal source for CS health; Nautilida is the signal interpreter across the whole revenue function.",
    fitTogether: "In an enterprise SaaS stack with a dedicated CSM org, Gainsight and Nautilida live at different layers. Gainsight runs playbooks inside CS — health scores, success plans, journey templates. Nautilida reads CS-side data alongside CRM, email, and chat, derives meaning across the whole revenue team, and produces the weekly briefs, owner priorities, and Friday recap that span sales, CS, and leadership in one rhythm.",
    table: [
      ['What it is',           'Customer success platform — playbooks & scores',         'AI team lead — coordination & synthesis layer'],
      ['Layer of the stack',   'CSM workflow within a dedicated CS function',            'Above the silos — coordinates sales + CS + leadership'],
      ['What it produces',     'Playbook execution and CS-side health visibility',       'Synthesis across the whole revenue team — what matters this week, who acts'],
      ['Memory shape',         'CS-side signals (NPS, telemetry, tickets)',              'Cross-stack: CRM + chat + email + (optionally) CS tooling'],
      ['Revenue model fit',    'SaaS subscription with product telemetry',               'Any shape — subscription, reorder, B2B distribution, hybrid'],
      ['Relationship',         'Signal source for CS-side health',                       'Signal interpreter across the whole revenue function'],
    ],
    capabilities: [
      {name:'Proactive delivery', desc:'Briefs and recaps arrive on a fixed rhythm, without being asked.',
       cMark:'partial', cText:'Calls to Action and playbook nudges trigger automatically — strong inside CS, but bounded to the CS function.',
       nText:'Monday leadership brief, mid-week owner priorities, Friday team-wide recap across sales + CS + leadership.'},
      {name:'Chat on demand', desc:'Ask anything ad-hoc, get answers grounded in months of book history.',
       cMark:'partial', cText:'Horizon AI answers CS questions and surfaces health insights. Bounded to CS-side data.',
       nText:'Ask Nauti anything — single account, patterns across the book, six-month trends. Cross-stack-grounded.'},
      {name:'Delivered where you work', desc:'Briefs and answers land where the team already lives, not a separate app.',
       cMark:'partial', cText:'Slack and Teams notifications for CS plays. Most workflow happens inside the Gainsight app.',
       nText:'Slack, Teams, email. No new dashboard to learn or log into.'},
      {name:'Cross-stack memory', desc:'A single memory across CRM, chat, email, and call data.',
       cMark:'partial', cText:'Product telemetry, NPS, support tickets — cross-source on the CS side. Sales-side signals not native.',
       nText:'Single account memory across CRM + chat + email (+ CS tooling, where present). One source of context.'},
      {name:'Compounding memory', desc:'Memory sharpens week over week as patterns accumulate.',
       cMark:'partial', cText:'Health-score patterns improve over quarters. Bounded to CS-side telemetry.',
       nText:'Account memory compounds across the whole book over months. March patterns sharpen April briefs.'},
      {name:'Cross-silo synthesis', desc:'Derives meaning across silos, not just visibility into each.',
       cMark:'partial', cText:'Horizon AI predicts churn and health within CS playbook data. Synthesis is CS-bounded.',
       nText:'Reads CRM + chat + email + CS telemetry together; outputs what to do across the whole revenue team.'},
    ],
    nautiWins: [
      "Your revenue team operates as a single unit — sales and CS overlap, or the same people own both.",
      "You sell to B2B distributors or reorder accounts where Gainsight's subscription playbooks don't map.",
      "The signals that matter are cross-stack — order frequency, response decay, sentiment shift across email and chat — not health-score primitives.",
      "You want a single memory and a single brief across the whole revenue function, not separate CS and sales workflows.",
      "You're building toward what the team-lead role looks like when synthesis is continuous: an AI team lead.",
    ],
    competitorWins: [
      "Dedicated CSM organization (often 10+ CSMs) running scaled playbooks across hundreds of accounts.",
      "Subscription SaaS with strong product telemetry — feature adoption, license utilization, NPS.",
      "Formal QBR/EBR templates, success plans, customer journey maps are required deliverables.",
      "CS Ops is its own function with budget for implementation and ongoing administration.",
    ],
    faqs: [
      {q:"Is Nautilida a replacement for Gainsight?",
       a:"For B2B distributors and revenue teams without a dedicated CSM org, often yes — the use case Gainsight is being asked to cover doesn't always fit Gainsight's subscription-SaaS shape. For enterprise SaaS with a 10-person CSM organization running formal playbooks, Gainsight stays in place — Nautilida sits above it as the cross-functional coordination layer."},
      {q:"We're a B2B distributor. Why is Gainsight often a poor fit?",
       a:"Gainsight's primitives — NPS, feature usage, license seats, product adoption — assume a SaaS product. Distributors don't have those signals. They have order frequency, basket changes, response-time decay, reorder patterns. Nautilida is built around exactly those signals."},
      {q:"We have Gainsight. What does Nautilida add?",
       a:"Gainsight runs CS playbooks inside the CS function. Nautilida coordinates the entire revenue team — sales, CS, leadership — across all silos. It reads CS-side data alongside CRM, email, and chat, derives meaning from the combination, and produces the weekly rhythm artifacts (briefs, recaps) that span the whole team."},
      {q:"We're a large enterprise. Does Nautilida fit?",
       a:"Yes — particularly large teams, where the book of accounts is too big for any human to hold in head. Nautilida holds the whole book in memory and produces leadership-level synthesis across the portfolio plus account-level direction for every owner. Size of the team is not the constraint."},
      {q:"Is this the future replacement for the team-lead role?",
       a:"Not a replacement — an evolution of it. Continuous synthesis across all silos, weekly rhythm without manual reconstruction, account memory that compounds over months. The AI team lead is what the team-lead role becomes when AI handles the synthesis underneath. The human leader still owns judgment, strategy, and people — but walks into every decision already prepared."},
    ],
  },
};

// Hub at /#/compare — directory of all head-to-head comparison pages.
// AEO/GEO-friendly: gives crawlers a single index page tying the three vs-pages together.
function CompareHub(){
  const goHome     = (e)=>{ e.preventDefault(); window.location.hash = ''; };
  const goWaitlist = (e)=>{ e.preventDefault(); window.location.hash = '#/waitlist'; };
  const goContact  = (e)=>{ e.preventDefault(); window.location.hash = '#/contact'; };

  const order = ['gong', 'clari', 'gainsight'];
  const cards = order.map(slug => COMPARISONS[slug]).filter(Boolean);

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
          <div className="eyebrow" style={{marginBottom:18}}>[ honest comparisons ]</div>
          <h1 className="display" style={{margin:'0 0 22px',fontSize:'clamp(56px, 8vw, 116px)',lineHeight:.95,letterSpacing:'-.03em'}}>
            COMPARE. <span className="serif-grad" style={{fontSize:'1.02em'}}>different layers.</span>
          </h1>
          <p style={{fontSize:18,color:'var(--ink-soft)',maxWidth:680,lineHeight:1.55,margin:0}}>
            Nautilida is a coordination and synthesis layer above the silos — not an alternative to any single tool. These pages take a clear stance on when each tool is the right fit, and how they fit together in a real revenue stack.
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
              HEAD-TO-HEAD <span style={{color:'var(--ink-quiet)',marginLeft:14}}>// {String(cards.length).padStart(2,'0')} COMPARISONS</span>
            </span>
            <span className="mono" style={{fontSize:11,color:'var(--ink-quiet)',letterSpacing:'.12em'}}>
              STANCE · NOT NEUTRAL
            </span>
          </div>

          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit, minmax(320px, 1fr))',gap:18}}>
            {cards.map((c)=>(
              <CompareHubCard key={c.slug} cmp={c}/>
            ))}
          </div>
        </div>
      </section>

      {/* Outro CTA */}
      <section style={{padding:'80px 0',background:'var(--bone-2)',borderTop:'1px solid var(--ink-line)'}}>
        <div className="container" style={{textAlign:'center',maxWidth:680}}>
          <h2 className="display" style={{margin:'0 0 18px',fontSize:'clamp(36px, 5vw, 64px)',lineHeight:1.0}}>
            SEE IT ON YOUR{' '}
            <span className="serif-grad" style={{fontSize:'1.05em'}}>own accounts.</span>
          </h2>
          <p style={{fontSize:16,color:'var(--ink-soft)',margin:'0 auto 28px',maxWidth:520,lineHeight:1.55}}>
            The fastest way to know which fits is to see it on your own data. Connect HubSpot and Teams — the first Monday brief lands at 7:00 AM.
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

function CompareHubCard({cmp}){
  const [hover, setHover] = useStateCmp(false);
  const onClick = ()=>{ window.location.hash = '#/compare/' + cmp.slug; };
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
        }}>VS {cmp.name.toUpperCase()}</span>
        <span className="mono" style={{fontSize:10,letterSpacing:'.12em',color:'var(--ink-quiet)'}}>
          {cmp.category.split(' · ')[0].toUpperCase()}
        </span>
      </div>
      <h3 className="display" style={{
        margin:'4px 0 0',fontSize:'clamp(22px, 2.5vw, 28px)',
        lineHeight:1.1,letterSpacing:'-.01em',
      }}>Nautilida vs {cmp.name}.</h3>
      <p style={{margin:0,fontSize:14,color:'var(--ink-soft)',lineHeight:1.55}}>{cmp.verdict}</p>
      <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',gap:10,marginTop:'auto',paddingTop:14,borderTop:'1px solid var(--ink-line)'}}>
        <span className="mono" style={{fontSize:10,letterSpacing:'.12em',color:'var(--ink-quiet)'}}>· {cmp.faqs.length} faqs · {cmp.capabilities ? cmp.capabilities.length : 0} capabilities</span>
        <span className="mono" style={{
          fontSize:11,letterSpacing:'.1em',color:'var(--violet)',
          display:'inline-flex',alignItems:'center',gap:6,
        }}>READ <span style={{transform:hover?'translateX(3px)':'none',transition:'transform .25s ease'}}>→</span></span>
      </div>
    </article>
  );
}

function Compare({slug}){
  const data = COMPARISONS[slug];
  const goHome     = (e)=>{ e.preventDefault(); window.location.hash = ''; };
  const goBlog     = (e)=>{ e.preventDefault(); window.location.hash = '#/blog'; };
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
          <a href="#/blog" onClick={goBlog} className="mono"
            style={{fontSize:11,letterSpacing:'.14em',color:'var(--ink-soft)',
              padding:'7px 12px',border:'1px solid var(--ink-line-2)',borderRadius:999}}>
            ← BLOG
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
          <div className="eyebrow" style={{marginBottom:18}}>[ comparison · {data.category} ]</div>
          <h1 className="display" style={{margin:'0 0 22px',fontSize:'clamp(44px, 6.4vw, 92px)',lineHeight:.98,letterSpacing:'-.025em'}}>
            Nautilida <span className="serif-grad" style={{fontSize:'1.04em'}}>vs</span> {data.name}.
          </h1>
          <p style={{fontSize:19,color:'var(--ink-soft)',lineHeight:1.55,margin:'0 0 28px',maxWidth:760}}>
            {data.heroDek}
          </p>
          <div className="mono" style={{display:'flex',alignItems:'center',gap:14,fontSize:11,letterSpacing:'.14em',color:'var(--ink-quiet)'}}>
            <span>Nautilida</span>
            <span>◉</span>
            <span>Honest comparison · written for buyers, not for SEO</span>
          </div>
        </div>
      </section>

      {/* Verdict callout — the stance, plus a sub-line on the layer relationship */}
      <section style={{padding:'12px 0 24px'}}>
        <div className="container" style={{maxWidth:880}}>
          <div style={{
            padding:'26px 30px',
            background:'var(--bone-3)',border:'1.5px solid var(--ink)',borderRadius:14,
            boxShadow:'8px 8px 0 var(--violet)',
          }}>
            <span className="mono" style={{fontSize:10,letterSpacing:'.16em',color:'var(--violet)'}}>◉ THE VERDICT</span>
            <p style={{margin:'10px 0 0',fontSize:18.5,lineHeight:1.5,color:'var(--ink)',fontWeight:500,letterSpacing:'-.005em'}}>
              {data.verdict}
            </p>
            {data.verdictSub && (
              <p style={{margin:'12px 0 0',fontSize:14.5,lineHeight:1.55,color:'var(--ink-soft)',fontStyle:'italic'}}>
                {data.verdictSub}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* At-a-glance table */}
      <section style={{padding:'48px 0 24px'}}>
        <div className="container" style={{maxWidth:1040}}>
          <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',
            borderTop:'1px solid var(--ink)',borderBottom:'1px solid var(--ink-line)',
            padding:'10px 0',marginBottom:28}}>
            <span className="mono" style={{fontSize:11,letterSpacing:'.16em',display:'inline-flex',alignItems:'center',gap:8}}>
              <span style={{width:6,height:6,borderRadius:999,background:'var(--violet)'}}/>
              AT A GLANCE
            </span>
            <span className="mono" style={{fontSize:11,color:'var(--ink-quiet)',letterSpacing:'.12em'}}>
              {data.table.length} DIMENSIONS
            </span>
          </div>

          <CmpTable rows={data.table} competitorName={data.name}/>
        </div>
      </section>

      {/* Core capabilities of an AI team lead — concrete capability matrix */}
      {data.capabilities && (
        <section style={{padding:'12px 0 24px'}}>
          <div className="container" style={{maxWidth:1040}}>
            <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',gap:14,flexWrap:'wrap',
              borderTop:'1px solid var(--ink)',borderBottom:'1px solid var(--ink-line)',
              padding:'10px 0',marginBottom:18}}>
              <span className="mono" style={{fontSize:11,letterSpacing:'.16em',display:'inline-flex',alignItems:'center',gap:8}}>
                <span style={{width:6,height:6,borderRadius:999,background:'var(--lime)'}}/>
                CORE CAPABILITIES OF AN AI TEAM LEAD
              </span>
              <span className="mono" style={{fontSize:10.5,color:'var(--ink-quiet)',letterSpacing:'.12em'}}>
                ✓ FULL · ~ PARTIAL · — NONE
              </span>
            </div>
            <p style={{fontSize:14.5,color:'var(--ink-soft)',maxWidth:680,lineHeight:1.55,margin:'0 0 22px'}}>
              These six capabilities define what an AI team lead does. Each tool below has shadow versions of most of them — bounded to its own silo. Nautilida operates them across the whole revenue stack.
            </p>
            <CmpCaps caps={data.capabilities} competitorName={data.name}/>
          </div>
        </section>
      )}

      {/* Two cards: when each is the right fit */}
      <section style={{padding:'48px 0 48px'}}>
        <div className="container" style={{maxWidth:1040}}>
          <h2 className="display" style={{margin:'0 0 14px',fontSize:'clamp(28px, 3.6vw, 44px)',lineHeight:1.0,letterSpacing:'-.015em'}}>
            Different jobs, <span className="serif-grad" style={{fontSize:'1.04em'}}>different layers.</span>
          </h2>
          <p style={{fontSize:15.5,color:'var(--ink-soft)',maxWidth:680,lineHeight:1.55,margin:'0 0 28px'}}>
            Most teams that look at this comparison end up keeping both. Here's when each tool is the right fit.
          </p>
          <div className="row-2" style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:18}}>
            <WhenWinsCard
              tone="lime"
              who="Nautilida"
              points={data.nautiWins}
            />
            <WhenWinsCard
              tone="violet"
              who={data.name}
              points={data.competitorWins}
            />
          </div>
        </div>
      </section>

      {/* How they fit together — reinforces complementary, layer-based positioning */}
      {data.fitTogether && (
        <section style={{padding:'12px 0 48px'}}>
          <div className="container" style={{maxWidth:880}}>
            <div style={{
              padding:'26px 30px',
              background:'var(--ink)',color:'var(--bone)',
              border:'1.5px solid var(--ink)',borderRadius:14,
              boxShadow:'8px 8px 0 var(--lime)',
            }}>
              <span className="mono" style={{fontSize:10,letterSpacing:'.16em',color:'var(--lime)'}}>◉ HOW THEY FIT TOGETHER</span>
              <p style={{margin:'12px 0 0',fontSize:15.5,lineHeight:1.7,color:'rgba(250,248,241,.92)'}}>
                {data.fitTogether}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section style={{padding:'24px 0 80px'}}>
        <div className="container" style={{maxWidth:760}}>
          <h2 className="display" style={{margin:'0 0 22px',fontSize:'clamp(26px, 3vw, 36px)',letterSpacing:'-.01em',lineHeight:1.1}}>
            Frequently asked.
          </h2>
          <FAQC items={data.faqs}/>
        </div>
      </section>

      {/* Outro CTA */}
      <section style={{padding:'80px 0',background:'var(--bone-2)',borderTop:'1px solid var(--ink-line)'}}>
        <div className="container" style={{textAlign:'center',maxWidth:680}}>
          <h2 className="display" style={{margin:'0 0 18px',fontSize:'clamp(36px, 5vw, 64px)',lineHeight:1.0}}>
            SEE IT ON YOUR{' '}
            <span className="serif-grad" style={{fontSize:'1.05em'}}>own accounts.</span>
          </h2>
          <p style={{fontSize:16,color:'var(--ink-soft)',margin:'0 auto 28px',maxWidth:520,lineHeight:1.55}}>
            The fastest way to know if Nautilida is the right fit is to see it on your own data. Connect HubSpot and Teams — the first Monday brief lands at 7:00 AM.
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

function CmpTable({rows, competitorName}){
  return (
    <div style={{
      border:'1.5px solid var(--ink)',borderRadius:14,overflow:'hidden',
      background:'var(--bone-3)',
    }}>
      {/* Header row */}
      <div className="row-3-collapse" style={{
        display:'grid',gridTemplateColumns:'minmax(180px, 1fr) 1fr 1fr',
        background:'var(--ink)',color:'var(--bone)',
      }}>
        <div className="mono" style={{padding:'14px 18px',fontSize:11,letterSpacing:'.16em'}}>DIMENSION</div>
        <div className="mono" style={{padding:'14px 18px',fontSize:11,letterSpacing:'.16em',borderLeft:'1px solid rgba(250,248,241,.12)'}}>{competitorName.toUpperCase()}</div>
        <div className="mono" style={{padding:'14px 18px',fontSize:11,letterSpacing:'.16em',color:'var(--lime)',borderLeft:'1px solid rgba(250,248,241,.12)'}}>NAUTILIDA</div>
      </div>
      {rows.map((r, i)=>(
        <div key={i} className="row-3-collapse"
          style={{
            display:'grid',gridTemplateColumns:'minmax(180px, 1fr) 1fr 1fr',
            borderTop: i===0 ? 'none' : '1px solid var(--ink-line)',
            background: i % 2 === 0 ? 'var(--bone-3)' : 'var(--bone)',
          }}>
          <div className="mono" style={{padding:'18px 18px',fontSize:12,letterSpacing:'.08em',color:'var(--ink-soft)',display:'flex',alignItems:'center'}}>
            {r[0].toUpperCase()}
          </div>
          <div style={{padding:'18px 18px',fontSize:14.5,lineHeight:1.55,color:'var(--ink)',borderLeft:'1px solid var(--ink-line)'}}>
            {r[1]}
          </div>
          <div style={{padding:'18px 18px',fontSize:14.5,lineHeight:1.55,color:'var(--ink)',borderLeft:'1px solid var(--ink-line)',background:'rgba(212,255,61,.10)'}}>
            {r[2]}
          </div>
        </div>
      ))}
    </div>
  );
}

function CmpCaps({caps, competitorName}){
  return (
    <div style={{
      border:'1.5px solid var(--ink)',borderRadius:14,overflow:'hidden',
      background:'var(--bone-3)',
    }}>
      {/* Header row */}
      <div className="row-3-collapse" style={{
        display:'grid',gridTemplateColumns:'minmax(240px, 1.2fr) 1fr 1fr',
        background:'var(--ink)',color:'var(--bone)',
      }}>
        <div className="mono" style={{padding:'14px 18px',fontSize:11,letterSpacing:'.16em'}}>CAPABILITY</div>
        <div className="mono" style={{padding:'14px 18px',fontSize:11,letterSpacing:'.16em',borderLeft:'1px solid rgba(250,248,241,.12)'}}>{competitorName.toUpperCase()}</div>
        <div className="mono" style={{padding:'14px 18px',fontSize:11,letterSpacing:'.16em',color:'var(--lime)',borderLeft:'1px solid rgba(250,248,241,.12)'}}>NAUTILIDA</div>
      </div>
      {caps.map((c, i)=>(
        <div key={i} className="row-3-collapse"
          style={{
            display:'grid',gridTemplateColumns:'minmax(240px, 1.2fr) 1fr 1fr',
            borderTop: i===0 ? 'none' : '1px solid var(--ink-line)',
            background: i % 2 === 0 ? 'var(--bone-3)' : 'var(--bone)',
          }}>
          <div style={{padding:'18px 18px',display:'flex',flexDirection:'column',gap:6}}>
            <span className="display" style={{fontSize:14,letterSpacing:'-.005em',lineHeight:1.2,textTransform:'none'}}>{c.name}</span>
            <span style={{fontSize:13,color:'var(--ink-soft)',lineHeight:1.5}}>{c.desc}</span>
          </div>
          <div style={{padding:'18px 18px',fontSize:13.5,lineHeight:1.55,color:'var(--ink)',borderLeft:'1px solid var(--ink-line)'}}>
            <CapMark mark={c.cMark}/> {c.cText}
          </div>
          <div style={{padding:'18px 18px',fontSize:13.5,lineHeight:1.55,color:'var(--ink)',borderLeft:'1px solid var(--ink-line)',background:'rgba(212,255,61,.10)'}}>
            <CapMark mark="full"/> {c.nText}
          </div>
        </div>
      ))}
    </div>
  );
}

function CapMark({mark}){
  if (mark === 'full') return (
    <span style={{display:'inline-block',padding:'1px 7px 2px',borderRadius:4,
      background:'var(--lime)',color:'var(--ink)',fontSize:11,fontWeight:700,
      marginRight:8,verticalAlign:'1px',border:'1px solid var(--ink)'}}>✓</span>
  );
  if (mark === 'partial') return (
    <span style={{display:'inline-block',padding:'1px 7px 2px',borderRadius:4,
      background:'var(--bone-2)',color:'var(--ink-soft)',fontSize:11,fontWeight:700,
      marginRight:8,verticalAlign:'1px',border:'1px solid var(--ink-line-2)'}}>~</span>
  );
  return (
    <span style={{display:'inline-block',padding:'1px 7px 2px',borderRadius:4,
      background:'transparent',color:'var(--ink-quiet)',fontSize:11,fontWeight:700,
      marginRight:8,verticalAlign:'1px',border:'1px solid var(--ink-line-2)'}}>—</span>
  );
}

function WhenWinsCard({tone, who, points}){
  const isLime = tone === 'lime';
  const accent = isLime ? 'var(--lime)' : 'var(--violet)';
  const bg     = isLime ? 'var(--bone-3)' : 'var(--bone-3)';
  return (
    <div style={{
      padding:'26px 28px',
      background:bg,
      border:'1.5px solid var(--ink)',borderRadius:14,
      boxShadow: `8px 8px 0 ${accent}`,
      display:'flex',flexDirection:'column',gap:14,
    }}>
      <span className="mono" style={{fontSize:10,letterSpacing:'.16em',color: isLime ? 'var(--ink)' : 'var(--violet)'}}>
        ◉ WHEN <strong style={{letterSpacing:'.16em'}}>{who.toUpperCase()}</strong> IS THE RIGHT FIT
      </span>
      <h3 className="display" style={{margin:0,fontSize:'clamp(22px, 2.4vw, 28px)',lineHeight:1.1,letterSpacing:'-.01em'}}>
        Pick {who} <span className="serif-grad" style={{fontSize:'1.04em'}}>if…</span>
      </h3>
      <ul style={{margin:'4px 0 0',paddingLeft:0,listStyle:'none',display:'flex',flexDirection:'column',gap:12}}>
        {points.map((p,i)=>(
          <li key={i} style={{
            position:'relative',paddingLeft:24,
            fontSize:14.5,lineHeight:1.6,color:'var(--ink)',
          }}>
            <span style={{
              position:'absolute',left:0,top:9,
              width:10,height:10,borderRadius:2,
              background:accent,border:'1px solid var(--ink)',
            }}/>
            {p}
          </li>
        ))}
      </ul>
    </div>
  );
}

function FAQC({items}){
  const [open, setOpen] = useStateCmp(-1);
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

Object.assign(window, {Compare, CompareHub, COMPARISONS});
