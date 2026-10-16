// Visuals — chapter graphics that earn the literacy feel.
// Each component is self-contained, brand-consistent, and mobile-aware.
const { useState: useStateVis } = React;

// ---------- Chapter 02 — Visibility vs Coordination split ----------
function VisibilityVsCoordination(){
  return (
    <div className="row-2" style={{
      display:'grid',gridTemplateColumns:'1fr 1fr',gap:14,
      margin:'28px 0 36px',
    }}>
      <div style={{
        padding:'22px 24px 22px',borderRadius:14,
        border:'1.5px solid var(--ink)',background:'var(--bone-3)',
        boxShadow:'5px 5px 0 var(--ink)',
      }}>
        <span className="mono" style={{fontSize:10,letterSpacing:'.16em',color:'var(--ink-quiet)'}}>VISIBILITY · 2014–2024</span>
        <h4 className="display" style={{margin:'8px 0 12px',fontSize:'clamp(20px, 2.2vw, 26px)',letterSpacing:'-.005em',lineHeight:1.1}}>
          What just <em>happened?</em>
        </h4>
        <ul style={{margin:'0 0 14px',paddingLeft:18,fontSize:13.5,lineHeight:1.6,color:'var(--ink-soft)'}}>
          <li>Pipeline by stage</li>
          <li>Activity by rep</li>
          <li>Account health scores</li>
          <li>Conversion by source</li>
        </ul>
        <div className="mono" style={{paddingTop:10,borderTop:'1px solid var(--ink-line)',fontSize:10,letterSpacing:'.14em',color:'var(--ink-quiet)'}}>
          OUTPUT · CHARTS · ALERTS · TABLES
        </div>
      </div>
      <div style={{
        padding:'22px 24px 22px',borderRadius:14,
        border:'1.5px solid var(--ink)',background:'var(--ink)',color:'var(--bone)',
        boxShadow:'5px 5px 0 var(--lime)',
      }}>
        <span className="mono" style={{fontSize:10,letterSpacing:'.16em',color:'var(--lime)'}}>COORDINATION · 2025+</span>
        <h4 className="display" style={{margin:'8px 0 12px',fontSize:'clamp(20px, 2.2vw, 26px)',letterSpacing:'-.005em',lineHeight:1.1}}>
          What do we <em>do about it?</em>
        </h4>
        <ul style={{margin:'0 0 14px',paddingLeft:18,fontSize:13.5,lineHeight:1.6,color:'rgba(250,248,241,.85)'}}>
          <li>Monday brief — ranked priorities</li>
          <li>Mid-week routes per owner</li>
          <li>Friday recap — narrative</li>
          <li>Memory between weeks</li>
        </ul>
        <div className="mono" style={{paddingTop:10,borderTop:'1px solid rgba(250,248,241,.18)',fontSize:10,letterSpacing:'.14em',color:'rgba(250,248,241,.5)'}}>
          OUTPUT · DIRECTION · CADENCE · MEMORY
        </div>
      </div>
    </div>
  );
}

// ---------- Chapter 03 — Weekly loop diagram ----------
function LoopCell({tone, children}){
  const map = {
    'violet':    {bg:'var(--violet)',     fg:'var(--bone)',                    border:'1.5px solid var(--ink)'},
    'lime':      {bg:'var(--lime)',       fg:'var(--ink)',                     border:'1.5px solid var(--ink)'},
    'lime-soft': {bg:'var(--lime-soft)',  fg:'var(--ink)',                     border:'1.5px solid var(--ink-line)'},
    'silent':    {bg:'rgba(14,13,20,.04)',fg:'var(--ink-quiet)',               border:'1px dashed var(--ink-line-2)'},
    'empty':     {bg:'transparent',       fg:'transparent',                    border:'1px dashed transparent'},
  };
  const s = map[tone] || map.empty;
  return (
    <div style={{
      padding:'10px 6px',borderRadius:8,
      background:s.bg, color:s.fg, border:s.border,
      fontSize:11,fontWeight:600,letterSpacing:'-.005em',
      textAlign:'center',
      display:'flex',alignItems:'center',justifyContent:'center',
      minHeight:42,lineHeight:1.2,
    }}>{children || ''}</div>
  );
}

function WeeklyLoopDiagram(){
  const days = ['MON','TUE','WED','THU','FRI','SAT','SUN'];
  const labelStyle = {padding:'10px 8px',fontSize:10,letterSpacing:'.14em',color:'var(--ink-quiet)',display:'flex',alignItems:'center',height:'100%'};
  return (
    <div style={{
      margin:'28px 0 36px',padding:'22px 18px 18px',
      background:'var(--bone-3)',border:'1.5px solid var(--ink)',borderRadius:14,
      boxShadow:'8px 8px 0 var(--violet)',
    }}>
      <div className="mono" style={{fontSize:10,letterSpacing:'.16em',color:'var(--violet)',marginBottom:14}}>
        ◉ THE WEEK · ONE DIAGRAM
      </div>

      {/* Days header */}
      <div style={{display:'grid',gridTemplateColumns:'88px repeat(7, 1fr)',gap:4,marginBottom:6}}>
        <div></div>
        {days.map(d => (
          <div key={d} className="mono" style={{
            padding:'8px 4px',fontSize:10,letterSpacing:'.14em',textAlign:'center',
            color:'var(--ink-quiet)',
          }}>{d}</div>
        ))}
      </div>

      {/* LEADER row */}
      <div style={{display:'grid',gridTemplateColumns:'88px repeat(7, 1fr)',gap:4,marginBottom:4}}>
        <div className="mono" style={labelStyle}>LEADER</div>
        <LoopCell tone="violet">Brief</LoopCell>
        <LoopCell tone="silent">silent</LoopCell>
        <LoopCell tone="silent">silent</LoopCell>
        <LoopCell tone="silent">silent</LoopCell>
        <LoopCell tone="violet">Recap</LoopCell>
        <LoopCell tone="empty"/>
        <LoopCell tone="empty"/>
      </div>

      {/* AM row */}
      <div style={{display:'grid',gridTemplateColumns:'88px repeat(7, 1fr)',gap:4,marginBottom:8}}>
        <div className="mono" style={labelStyle}>AM</div>
        <LoopCell tone="lime">Brief</LoopCell>
        <LoopCell tone="lime-soft">Prio + prep</LoopCell>
        <LoopCell tone="lime-soft">Prio + prep</LoopCell>
        <LoopCell tone="lime-soft">Prio + prep</LoopCell>
        <LoopCell tone="lime">Wrap</LoopCell>
        <LoopCell tone="empty"/>
        <LoopCell tone="empty"/>
      </div>

      {/* MEMORY row */}
      <div style={{display:'grid',gridTemplateColumns:'88px repeat(7, 1fr)',gap:4}}>
        <div className="mono" style={labelStyle}>MEMORY</div>
        <div style={{
          gridColumn:'2 / -1',
          background:'var(--ink)',color:'var(--bone)',
          padding:'12px 14px',borderRadius:8,
          fontSize:12,lineHeight:1.4,
          display:'flex',alignItems:'center',justifyContent:'space-between',gap:10,flexWrap:'wrap',
        }}>
          <span className="mono" style={{fontSize:10,letterSpacing:'.14em',color:'var(--lime)'}}>COMPOUNDS ALL WEEK</span>
          <span style={{color:'rgba(250,248,241,.85)',fontSize:11.5}}>Sat–Sun · assembles next Monday  ↻</span>
        </div>
      </div>

      {/* Legend */}
      <div className="mono" style={{
        marginTop:16,paddingTop:14,borderTop:'1px solid var(--ink-line)',
        fontSize:10,letterSpacing:'.14em',color:'var(--ink-quiet)',
        display:'flex',gap:14,flexWrap:'wrap',
      }}>
        <span><span style={{display:'inline-block',width:10,height:10,background:'var(--violet)',borderRadius:3,verticalAlign:'middle',marginRight:6}}/>LEADER TOUCHPOINT</span>
        <span><span style={{display:'inline-block',width:10,height:10,background:'var(--lime)',borderRadius:3,verticalAlign:'middle',marginRight:6}}/>AM TOUCHPOINT</span>
        <span><span style={{display:'inline-block',width:10,height:10,background:'var(--lime-soft)',borderRadius:3,verticalAlign:'middle',marginRight:6}}/>AM DAILY</span>
        <span><span style={{display:'inline-block',width:10,height:10,background:'var(--ink)',borderRadius:3,verticalAlign:'middle',marginRight:6}}/>MEMORY</span>
      </div>
    </div>
  );
}

// ---------- Chapter 04 — Annotated Monday brief ----------
function BriefRow({label, tone, children, last}){
  const colorMap = {
    'rose':   {bg:'#FF5F77', fg:'var(--ink)'},
    'lime':   {bg:'var(--lime)',   fg:'var(--ink)'},
    'violet': {bg:'var(--violet)', fg:'var(--bone)'},
    'ink':    {bg:'var(--ink)',    fg:'var(--bone)'},
  };
  const c = colorMap[tone] || colorMap.lime;
  return (
    <div style={{
      display:'grid',gridTemplateColumns:'104px 1fr',gap:14,
      padding:'12px 0',
      borderBottom: last ? 'none' : '1px dashed var(--ink-line-2)',
    }}>
      <span className="mono" style={{
        fontSize:10,letterSpacing:'.16em',
        background:c.bg, color:c.fg,
        padding:'5px 8px',borderRadius:6,height:'fit-content',
        textAlign:'center',
        border:'1px solid var(--ink)',
      }}>{label}</span>
      <span style={{lineHeight:1.55,fontSize:14.5,color:'var(--ink)'}}>{children}</span>
    </div>
  );
}

function AnnotatedBrief(){
  return (
    <div style={{
      margin:'28px 0 36px',padding:'24px 26px',
      background:'var(--bone-3)',border:'1.5px solid var(--ink)',borderRadius:14,
      boxShadow:'8px 8px 0 var(--violet)',
    }}>
      <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:18,flexWrap:'wrap',gap:8}}>
        <span className="mono" style={{fontSize:10,letterSpacing:'.16em',color:'var(--violet)'}}>◉ MONDAY BRIEF · LEADER · MAR 17</span>
        <span className="mono" style={{fontSize:10,letterSpacing:'.14em',color:'var(--ink-quiet)'}}>READ TIME · 0:90</span>
      </div>

      <div>
        <BriefRow label="3 RISKS" tone="rose">
          <strong>Acme</strong> (champion silent 9 days, AOV down 18% wk/wk), <strong>Globex</strong> (procurement thread reopened — buyer-side change), <strong>Initech</strong> (4th week without reorder vs usual 2-week cadence).
        </BriefRow>
        <BriefRow label="2 OPPS" tone="lime">
          <strong>Soylent</strong> showing 3 repeat orders this quarter (uptick), <strong>Hooli cluster</strong> moving on a delayed cycle that closes Thursday.
        </BriefRow>
        <BriefRow label="1 PATTERN" tone="violet">
          Lapsed-account reactivation rate up 14% on accounts where AMs ran the new follow-up sequence — early signal worth holding.
        </BriefRow>
        <BriefRow label="HANDOVER" tone="ink" last>
          M. Chen out Tue–Thu, J. Patel covers her three top accounts.
        </BriefRow>
      </div>
    </div>
  );
}

// ---------- Chapter 05 — Three memory layers stacked ----------
function MemoryLayers(){
  const layers = [
    { num:'01', name:'CONVERSATION', sub:'Nobody re-asks. Nobody re-explains.',
      body:'Every ask, every answer — Slack, Teams, email, CRM — stays with the team.',
      bg:'var(--bone-3)', fg:'var(--ink)', accent:'var(--violet)' },
    { num:'02', name:'PATTERN', sub:'Drift, before it shows in the number.',
      body:'Each account has a shape. Memory tracks how that shape moves week over week.',
      bg:'var(--lilac)', fg:'var(--ink)', accent:'var(--violet-deep)' },
    { num:'03', name:'LOOP-FED', sub:'Every cycle, sharper.',
      body:'Mon→Fri feeds back into next Monday. Week 24 is sharper than week 1.',
      bg:'var(--ink)', fg:'var(--bone)', accent:'var(--lime)' },
  ];
  return (
    <div style={{margin:'28px 0 36px',display:'flex',flexDirection:'column',gap:6}}>
      {layers.map(L => (
        <div key={L.num} style={{
          padding:'20px 24px',borderRadius:12,
          background:L.bg, color:L.fg,
          border:'1.5px solid var(--ink)',
          display:'grid',gridTemplateColumns:'70px 1fr',gap:18,alignItems:'center',
        }}>
          <span className="display" style={{fontSize:'clamp(28px, 3.4vw, 40px)',letterSpacing:'-.01em',lineHeight:1,color:L.accent}}>{L.num}</span>
          <div>
            <div className="mono" style={{fontSize:10,letterSpacing:'.16em',color:L.accent,marginBottom:6}}>LAYER · {L.name}</div>
            <div className="display" style={{fontSize:'clamp(18px, 2.2vw, 22px)',letterSpacing:'-.005em',lineHeight:1.15,marginBottom:6}}>{L.sub}</div>
            <div style={{fontSize:13.5,lineHeight:1.55,opacity:.78}}>{L.body}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

// ---------- Home — three "tension" cards used in the AI Productivity section ----------
function ProductivityTension({label, title, body, accent='violet'}){
  return (
    <div style={{
      padding:'22px 22px 22px',borderRadius:14,
      border:'1.5px solid var(--ink)',background:'var(--bone-3)',
      boxShadow:'5px 5px 0 var(--ink)',
      display:'flex',flexDirection:'column',gap:10,
    }}>
      <span className="display" style={{
        fontSize:32,letterSpacing:'-.01em',lineHeight:1,
        color: accent === 'lime' ? 'var(--ink)' : 'var(--violet)',
      }}>{label}</span>
      <h4 className="display" style={{margin:'4px 0 0',fontSize:'clamp(18px, 2vw, 22px)',letterSpacing:'-.005em',lineHeight:1.15}}>{title}</h4>
      <p style={{margin:0,fontSize:14,lineHeight:1.55,color:'var(--ink-soft)'}}>{body}</p>
    </div>
  );
}

// ---------- Chapter 06 — Hard Q&A accordion ----------
function HardQA({items}){
  const [open, setOpen] = useStateVis(0);
  return (
    <div style={{margin:'24px 0 36px',display:'flex',flexDirection:'column',gap:10}}>
      {items.map((it, i)=>{
        const isOpen = open === i;
        return (
          <div key={i} style={{
            border:'1.5px solid var(--ink)',borderRadius:12,
            background: isOpen ? 'var(--bone-3)' : 'var(--bone)',
            boxShadow: isOpen ? '6px 6px 0 var(--violet)' : '4px 4px 0 var(--ink)',
            transition:'all .25s ease',
          }}>
            <button onClick={()=> setOpen(isOpen ? -1 : i)} style={{
              width:'100%',textAlign:'left',cursor:'pointer',
              padding:'18px 22px',background:'transparent',border:'none',
              display:'flex',alignItems:'center',justifyContent:'space-between',gap:14,
              font:'inherit',color:'inherit',
            }}>
              <span style={{fontSize:15.5,fontWeight:600,letterSpacing:'-.005em',color:'var(--ink)',lineHeight:1.4}}>"{it.q}"</span>
              <span style={{
                fontSize:18,color: isOpen ? 'var(--violet)' : 'var(--ink-soft)',
                transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                transition:'transform .25s ease',flexShrink:0,
              }}>+</span>
            </button>
            <div style={{
              overflow:'hidden',
              maxHeight: isOpen ? 800 : 0,
              opacity: isOpen ? 1 : 0,
              transition:'max-height .35s cubic-bezier(.2,.7,.2,1), opacity .25s ease',
            }}>
              <p style={{margin:'0 0 18px',padding:'0 22px',fontSize:14.5,lineHeight:1.7,color:'var(--ink)'}}>{it.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ---------- Chapter 07 — Now / Next / Later horizons ----------
function RoadmapHorizons(){
  const horizons = [
    { tag:'NOW · LIVE', title:'The brain.', items:[
      'Monday brief',
      'Mid-week priorities',
      'Friday recap',
      'Cross-stack memory',
      'HubSpot + Teams live',
    ], tone:'now' },
    { tag:'NEXT · IN BUILD', title:'Senses extending out.', items:[
      'Proactive Ping (shipping soon)',
      'Meeting Notes (in build)',
      'Team Chat Presence (in build)',
      'Auto Follow-through (next)',
      'Pipedrive + Slack',
    ], tone:'next' },
    { tag:'LATER · ROADMAP', title:'The full coordinator.', items:[
      'Voice presence in calls',
      'Org-wide memory',
      'Salesforce, Gmail, Outlook',
    ], tone:'later' },
  ];
  return (
    <div className="compare-3" style={{
      display:'grid',gridTemplateColumns:'repeat(3, 1fr)',gap:14,
      margin:'28px 0 36px',
    }}>
      {horizons.map((h, i) => {
        const isNow = h.tone === 'now';
        const isNext = h.tone === 'next';
        return (
          <div key={i} style={{
            padding:'22px 22px 22px',borderRadius:14,
            background: isNow ? 'var(--ink)' : isNext ? 'var(--bone-3)' : 'rgba(236,230,216,.6)',
            color: isNow ? 'var(--bone)' : 'var(--ink)',
            border:'1.5px solid var(--ink)',
            boxShadow: isNow ? '6px 6px 0 var(--lime)' : isNext ? '6px 6px 0 var(--violet)' : '4px 4px 0 var(--ink-line-2)',
            display:'flex',flexDirection:'column',gap:10,
          }}>
            <span className="mono" style={{fontSize:10,letterSpacing:'.16em',color: isNow ? 'var(--lime)' : 'var(--violet)'}}>{h.tag}</span>
            <h4 className="display" style={{margin:'4px 0 8px',fontSize:'clamp(20px, 2.2vw, 26px)',letterSpacing:'-.005em',lineHeight:1.1}}>{h.title}</h4>
            <ul style={{margin:0,paddingLeft:18,fontSize:13.5,lineHeight:1.6,color: isNow ? 'rgba(250,248,241,.85)' : 'var(--ink-soft)'}}>
              {h.items.map((it, j)=> <li key={j} style={{marginBottom:4}}>{it}</li>)}
            </ul>
          </div>
        );
      })}
    </div>
  );
}

Object.assign(window, {
  VisibilityVsCoordination, WeeklyLoopDiagram, LoopCell,
  AnnotatedBrief, BriefRow, MemoryLayers, ProductivityTension,
  HardQA, RoadmapHorizons,
});
