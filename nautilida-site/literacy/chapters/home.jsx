// Playbook home — hero + table of contents.
function PlaybookHome(){
  return (
    <main style={{minHeight:'100vh',background:'var(--bone)',color:'var(--ink)'}}>
      <TopBar/>

      {/* Hero */}
      <section style={{padding:'80px 0 40px'}}>
        <div className="container" style={{maxWidth:980}}>
          <div style={{display:'inline-block',marginBottom:24}}>
            <span className="stick" style={{
              display:'inline-block',padding:'10px 18px',
              fontFamily:'"Geist", sans-serif',fontWeight:800,fontSize:'clamp(20px, 2.4vw, 28px)',
              letterSpacing:'-.04em',lineHeight:1,
              boxShadow:'4px 4px 0 var(--ink)',transform:'rotate(-1.4deg)',
              border:'1.5px solid var(--ink)',
            }}>first edition.</span>
          </div>
          <h1 className="display" style={{
            margin:'0 0 26px',fontSize:'clamp(48px, 7vw, 108px)',
            lineHeight:.96,letterSpacing:'-.03em',
          }}>
            AI TEAM LEAD<br/>
            <span style={{display:'inline-block',marginTop:'.06em'}}>
              <span className="serif-grad" style={{fontSize:'1.04em'}}>literacy.</span>
            </span>
          </h1>
          <p style={{fontSize:19,color:'var(--ink-soft)',lineHeight:1.55,maxWidth:680,margin:'0 0 30px'}}>
            A short course on the AI team lead category — what it is, what it isn't, and where it's going. Written for the people thinking about building, buying, or backing one. Seven chapters, about forty minutes.
          </p>
          <div className="mono" style={{display:'flex',alignItems:'center',gap:14,fontSize:11,letterSpacing:'.14em',color:'var(--ink-quiet)'}}>
            <span>Nautilida</span>
            <span>◉</span>
            <span>May 2026</span>
            <span>◉</span>
            <span>FIRST EDITION</span>
          </div>
        </div>
      </section>

      {/* AI Productivity context section — sets the stakes before the chapters */}
      <section style={{padding:'40px 0 56px',background:'var(--bone-2)',borderTop:'1px solid var(--ink-line)',borderBottom:'1px solid var(--ink-line)'}}>
        <div className="container" style={{maxWidth:1000}}>
          <div className="mono" style={{fontSize:10,letterSpacing:'.16em',color:'var(--violet)',marginBottom:14,display:'inline-flex',alignItems:'center',gap:8}}>
            <span style={{width:6,height:6,borderRadius:999,background:'var(--violet)'}}/>
            WHY THIS PLAYBOOK · NOW
          </div>
          <h2 className="display" style={{margin:'0 0 22px',fontSize:'clamp(34px, 5vw, 60px)',lineHeight:1.0,letterSpacing:'-.02em'}}>
            AI productivity is real.{' '}
            <span className="serif-grad" style={{fontSize:'1.04em'}}>The orchestration is missing.</span>
          </h2>
          <p style={{fontSize:18,color:'var(--ink-soft)',lineHeight:1.55,maxWidth:760,margin:'0 0 28px'}}>
            Your team probably already uses ChatGPT for drafts, Claude for analysis, Copilot for code, Notion AI for notes. <strong>Productivity per task is up</strong>. But the work <em>between</em> tasks — coordinating across people, accounts, and weeks — is still fragmented. Three tensions show up in every team we talk to:
          </p>

          <div className="row-2" style={{display:'grid',gridTemplateColumns:'repeat(3, 1fr)',gap:14}}>
            <ProductivityTension
              label="01"
              title="Fragmented admin work."
              body="Eight tools, eight inboxes, eight notification streams. Each AI gain is isolated. Nobody is orchestrating across them — somebody is still copy-pasting between four tabs every Monday."
            />
            <ProductivityTension
              label="02"
              title="DIY orchestration breaks down."
              body="Build the system yourself — Zaps, internal scripts, dashboards — and you end up maintaining the orchestration instead of doing the work it was supposed to enable."
            />
            <ProductivityTension
              label="03"
              title="Motivation drops."
              body="The team's strongest work is relationships, deals, judgement. Fragmentation pulls them back into admin — exactly the work AI was meant to remove. The lift fades."
            />
          </div>

          <div style={{
            margin:'28px 0 0',padding:'20px 24px',
            background:'var(--ink)',color:'var(--bone)',borderRadius:14,
            border:'1.5px solid var(--ink)',
            boxShadow:'6px 6px 0 var(--lime)',
          }}>
            <span className="mono" style={{fontSize:10,letterSpacing:'.16em',color:'var(--lime)'}}>◉ THE MISSING LAYER</span>
            <p style={{margin:'10px 0 0',fontSize:15.5,lineHeight:1.65,color:'rgba(250,248,241,.92)'}}>
              An <strong>AI team lead</strong> is the orchestrator. It does the fragmented admin so the team focuses on stronger work. <strong>Onboarding cost drops</strong> because new hires inherit organisational memory on day one. <strong>Patterns surface across weeks</strong> instead of living in three people's heads. <strong>Motivation comes back</strong> because the team is doing the work that mattered when they joined. The rest of this literacy walks through that shift, in seven chapters.
            </p>
          </div>
        </div>
      </section>

      {/* TOC */}
      <section style={{padding:'40px 0 80px'}}>
        <div className="container" style={{maxWidth:1000}}>
          <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',
            borderTop:'1px solid var(--ink)',borderBottom:'1px solid var(--ink-line)',
            padding:'10px 0',marginBottom:28}}>
            <span className="mono" style={{fontSize:11,letterSpacing:'.16em',display:'inline-flex',alignItems:'center',gap:8}}>
              <span style={{width:6,height:6,borderRadius:999,background:'var(--violet)'}}/>
              CONTENTS <span style={{color:'var(--ink-quiet)',marginLeft:14}}>// 07 CHAPTERS</span>
            </span>
            <span className="mono" style={{fontSize:11,color:'var(--ink-quiet)',letterSpacing:'.12em'}}>
              READ IN ORDER · OR SKIP AROUND
            </span>
          </div>

          <div className="toc-grid" style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:14}}>
            {CHAPTERS.map((c)=> <TocCard key={c.num} chapter={c}/> )}
          </div>
        </div>
      </section>

      <PlaybookFooter/>
    </main>
  );
}

const { useState: useStateToc } = React;

function TocCard({chapter}){
  const [hover, setHover] = useStateToc(false);
  const isLive = chapter.status === 'live';
  const onClick = (e)=>{
    if (!isLive){ e.preventDefault(); return; }
    window.location.hash = chapterRoute(chapter);
  };
  return (
    <a
      href={isLive ? chapterRoute(chapter) : '#'}
      onClick={isLive ? undefined : (e)=>e.preventDefault()}
      onMouseEnter={()=>setHover(true)}
      onMouseLeave={()=>setHover(false)}
      style={{
        display:'block',
        padding:'24px 26px',
        border:'1.5px solid var(--ink)',borderRadius:14,
        background: isLive ? (hover ? 'var(--bone-3)' : 'var(--bone)') : 'rgba(236,230,216,.5)',
        boxShadow: isLive
          ? (hover ? '8px 8px 0 var(--violet)' : '6px 6px 0 var(--ink)')
          : '4px 4px 0 var(--ink-line-2)',
        transform: isLive && hover ? 'translate(-2px,-2px)' : 'none',
        transition:'transform .25s cubic-bezier(.2,.7,.2,1), box-shadow .25s ease, background .2s ease',
        cursor: isLive ? 'pointer' : 'not-allowed',
        opacity: isLive ? 1 : .72,
      }}>
      <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',gap:12,marginBottom:14}}>
        <span className="mono" style={{fontSize:10,letterSpacing:'.16em',color:isLive?'var(--violet)':'var(--ink-quiet)'}}>
          CHAPTER {chapter.num}
        </span>
        <span className="mono" style={{
          fontSize:10,letterSpacing:'.14em',
          padding:'4px 9px',borderRadius:999,
          ...(isLive ? {
            background:'var(--lime)',color:'var(--ink)',border:'1px solid var(--ink)',
          } : {
            color:'var(--ink-quiet)',border:'1px dashed var(--ink-line-2)',
          })
        }}>{isLive ? 'LIVE' : 'DRAFT'}</span>
      </div>

      <h3 className="display" style={{
        margin:'0 0 10px',fontSize:'clamp(20px, 2.2vw, 26px)',
        letterSpacing:'-.005em',lineHeight:1.15,
      }}>{chapter.title}</h3>

      <p style={{margin:'0 0 14px',fontSize:14,color:'var(--ink-soft)',lineHeight:1.55}}>
        {chapter.dek}
      </p>

      <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',paddingTop:14,borderTop:'1px solid var(--ink-line)'}}>
        <span className="mono" style={{fontSize:10,letterSpacing:'.12em',color:'var(--ink-quiet)'}}>· {chapter.mins} read</span>
        {isLive ? (
          <span className="mono" style={{fontSize:11,letterSpacing:'.1em',color:'var(--violet)',display:'inline-flex',alignItems:'center',gap:6}}>
            READ <span style={{transform:hover?'translateX(3px)':'none',transition:'transform .25s ease'}}>→</span>
          </span>
        ) : (
          <span className="mono" style={{fontSize:10,letterSpacing:'.12em',color:'var(--ink-quiet)'}}>
            COMING SOON
          </span>
        )}
      </div>
    </a>
  );
}

Object.assign(window, {PlaybookHome});
