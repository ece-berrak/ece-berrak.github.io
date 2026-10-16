// Typography + structural primitives reused across chapters.
// Keep these tight and consistent — they ARE the playbook's voice.

function H2({children, style={}}){
  return (
    <h2 className="display" style={{
      margin:'48px 0 18px',
      fontSize:'clamp(28px, 3.4vw, 40px)',
      letterSpacing:'-.01em',lineHeight:1.05,
      ...style,
    }}>{children}</h2>
  );
}

function H3({children, style={}}){
  return (
    <h3 className="display" style={{
      margin:'28px 0 12px',
      fontSize:'clamp(20px, 2.4vw, 26px)',
      letterSpacing:'-.005em',lineHeight:1.1,
      ...style,
    }}>{children}</h3>
  );
}

function P({children}){
  return <p style={{margin:'0 0 16px',fontSize:16.5,lineHeight:1.7,color:'var(--ink)'}}>{children}</p>;
}

function Lead({children}){
  return <p style={{margin:'0 0 22px',fontSize:19,lineHeight:1.55,color:'var(--ink-soft)',maxWidth:720}}>{children}</p>;
}

function UL({items}){
  return (
    <ul style={{margin:'0 0 16px',paddingLeft:22}}>
      {items.map((it,i)=>(
        <li key={i} style={{fontSize:16,lineHeight:1.65,marginBottom:8,color:'var(--ink)'}}>{it}</li>
      ))}
    </ul>
  );
}

// Cream callout with violet offset shadow — for "short answer" or definition blocks.
function ShortAnswer({eyebrow='◉ THE SHORT ANSWER', children}){
  return (
    <div style={{
      margin:'12px 0 36px',padding:'24px 26px',
      background:'var(--bone-3)',border:'1.5px solid var(--ink)',borderRadius:14,
      boxShadow:'8px 8px 0 var(--violet)',
    }}>
      <span className="mono" style={{fontSize:10,letterSpacing:'.16em',color:'var(--violet)'}}>{eyebrow}</span>
      <p style={{margin:'10px 0 0',fontSize:16,lineHeight:1.65,color:'var(--ink)'}}>{children}</p>
    </div>
  );
}

// Dark contrast callout used for "Key takeaway" lists at the end of a chapter.
function KeyTakeaway({items, eyebrow='◉ KEY TAKEAWAYS'}){
  return (
    <div style={{
      marginTop:48,padding:'26px 28px',
      background:'var(--ink)',color:'var(--bone)',borderRadius:14,
      border:'1.5px solid var(--ink)',
    }}>
      <span className="mono" style={{fontSize:10,letterSpacing:'.16em',color:'var(--lime)'}}>{eyebrow}</span>
      <ul style={{margin:'14px 0 0',paddingLeft:20}}>
        {items.map((b,i)=>(
          <li key={i} style={{fontSize:14.5,lineHeight:1.6,marginBottom:8,color:'rgba(250,248,241,.92)'}}>{b}</li>
        ))}
      </ul>
    </div>
  );
}

// Three-column comparison cards — used in chapter 1 (assistant/chatbot/team-lead) and elsewhere.
function CompareCards({cards}){
  return (
    <div className="compare-3" style={{
      display:'grid',gridTemplateColumns:'repeat(3, 1fr)',gap:14,
      margin:'28px 0 36px',
    }}>
      {cards.map((c, i)=>{
        const isHero = c.tone === 'hero';
        return (
          <div key={i} style={{
            padding:'22px 22px 24px',borderRadius:14,
            background: isHero ? 'var(--ink)' : 'var(--bone-3)',
            color:    isHero ? 'var(--bone)' : 'var(--ink)',
            border:'1.5px solid var(--ink)',
            boxShadow: isHero ? '6px 6px 0 var(--lime)' : '6px 6px 0 var(--ink)',
            display:'flex',flexDirection:'column',gap:10,
          }}>
            <span className="mono" style={{fontSize:10,letterSpacing:'.16em',color: isHero ? 'var(--lime)' : 'var(--violet)'}}>
              {c.eyebrow}
            </span>
            <h4 className="display" style={{margin:'4px 0 4px',fontSize:'clamp(20px, 2.2vw, 26px)',letterSpacing:'-.005em',lineHeight:1.1}}>{c.title}</h4>
            <p style={{margin:0,fontSize:14,lineHeight:1.55,color: isHero ? 'rgba(250,248,241,.78)' : 'var(--ink-soft)'}}>{c.lead}</p>
            <hr className="hairline" style={{borderColor: isHero ? 'rgba(250,248,241,.18)' : 'var(--ink-line)',margin:'4px 0'}}/>
            <div className="mono" style={{fontSize:10,letterSpacing:'.14em',color: isHero ? 'rgba(250,248,241,.55)' : 'var(--ink-quiet)'}}>EXAMPLES</div>
            <div style={{fontSize:13,lineHeight:1.55,color: isHero ? 'rgba(250,248,241,.92)' : 'var(--ink)'}}>{c.examples}</div>
          </div>
        );
      })}
    </div>
  );
}

// Comparison matrix — rows are dimensions, columns are categories. Used as chapter-end summary.
function CompareTable({columns, rows}){
  return (
    <div style={{
      margin:'28px 0 36px',
      border:'1.5px solid var(--ink)',borderRadius:14,
      overflow:'hidden',
    }}>
      <div className="compare-3" style={{
        display:'grid',
        gridTemplateColumns: `170px repeat(${columns.length}, 1fr)`,
        background:'var(--ink)',color:'var(--lime)',
      }}>
        <div className="mono" style={{padding:'14px 16px',fontSize:10,letterSpacing:'.16em'}}></div>
        {columns.map((c,i)=>(
          <div key={i} className="mono" style={{padding:'14px 16px',fontSize:10,letterSpacing:'.16em'}}>{c}</div>
        ))}
      </div>
      {rows.map((r,i)=>(
        <div key={i} style={{
          display:'grid',
          gridTemplateColumns: `170px repeat(${columns.length}, 1fr)`,
          background: i%2===0 ? 'var(--bone-3)' : 'var(--bone)',
          borderTop:'1px solid var(--ink-line)',
        }}>
          <div className="mono" style={{padding:'14px 16px',fontSize:10,letterSpacing:'.14em',color:'var(--ink-quiet)'}}>{r.label}</div>
          {r.values.map((v,j)=>(
            <div key={j} style={{padding:'14px 16px',fontSize:13.5,lineHeight:1.5,color:'var(--ink)'}}>{v}</div>
          ))}
        </div>
      ))}
    </div>
  );
}

// "Why it matters" subtle panel — softer than KeyTakeaway, used mid-chapter.
function PullQuote({children, attribution}){
  return (
    <blockquote style={{
      margin:'32px 0',padding:'22px 26px',
      borderLeft:'3px solid var(--violet)',
      background:'rgba(91,63,230,.04)',
      borderRadius:'0 12px 12px 0',
    }}>
      <p style={{
        margin:0,fontSize:18,lineHeight:1.55,color:'var(--ink)',
        fontFamily:'"Instrument Serif", ui-serif, Georgia, serif',fontStyle:'italic',
      }}>{children}</p>
      {attribution && (
        <span className="mono" style={{
          display:'inline-block',marginTop:10,fontSize:10,letterSpacing:'.14em',color:'var(--ink-quiet)',
        }}>— {attribution}</span>
      )}
    </blockquote>
  );
}

Object.assign(window, {H2, H3, P, Lead, UL, ShortAnswer, KeyTakeaway, CompareCards, CompareTable, PullQuote});
