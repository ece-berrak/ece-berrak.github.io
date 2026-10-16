// Hash router for the playbook + meta updates + GA page_view + scroll progress.
const { useEffect: useEffectA, useState: useStateApp } = React;

function useHashRoute(){
  const [hash, setHash] = useStateApp(()=> window.location.hash || '');
  useEffectA(()=>{
    const onHash = ()=> setHash(window.location.hash || '');
    window.addEventListener('hashchange', onHash);
    return ()=> window.removeEventListener('hashchange', onHash);
  },[]);
  return hash;
}

// Placeholder for chapters that aren't written yet — uses ChapterShell so prev/next still works.
function ChapterDraft({num}){
  const ch = chapterByNum(num);
  return (
    <ChapterShell num={num} eyebrow="Coming soon">
      <ShortAnswer eyebrow="◉ DRAFT">
        This chapter is being written. Want it in your inbox the day it ships? Join the waitlist on nautilida.ai — playbook updates go out to design partners first.
      </ShortAnswer>
      <H2>What's in it</H2>
      <P>{ch.dek}</P>
      <H2>Why the wait</H2>
      <P>
        Each chapter goes through a draft → review → trim → ship cycle with the team. We'd rather hold a chapter for a week than ship it half-baked. Chapter 01 ships first because it sets up everything else.
      </P>
      <div style={{marginTop:32,display:'flex',gap:10,flexWrap:'wrap'}}>
        <a href="https://nautilida.ai/#/waitlist" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Join the waitlist <span className="arrow">→</span></a>
        <a href="#" onClick={(e)=>{e.preventDefault();window.location.hash='';}} className="btn">Back to playbook home</a>
      </div>
    </ChapterShell>
  );
}

function App(){
  const route = useHashRoute();

  // Splash dismiss
  useEffectA(()=>{
    const sp = document.getElementById('splash');
    if (sp){
      requestAnimationFrame(()=>{
        requestAnimationFrame(()=>{
          sp.classList.add('hide');
          setTimeout(()=>sp.classList.add('gone'), 700);
        });
      });
    }
  },[]);

  // Per-route meta + GA page_view + scroll-to-top
  useEffectA(()=>{
    let title = 'Nautilida Literacy · First Edition';
    let desc  = 'A short course on the AI team lead category. What it is, what it isn\'t, and where it\'s going. Written for people building, buying, or backing one.';

    if (route === '#/finish'){
      title = 'You finished · Nautilida Literacy';
      desc  = 'You finished the first edition. Tell us what you would want an AI team lead to do — answers go straight to the team.';
    } else {
      // Match against chapter routes (#/01-..., #/02-..., etc.)
      const m = route.match(/^#\/(\d{2})-/);
      if (m){
        const ch = chapterByNum(m[1]);
        if (ch){
          title = `Chapter ${ch.num} · ${ch.title} — Nautilida Literacy`;
          desc  = ch.dek;
        }
      }
    }

    document.title = title;
    const set = (sel, val)=>{
      const el = document.querySelector(sel);
      if (el) el.setAttribute('content', val);
    };
    set('meta[name="description"]',         desc);
    set('meta[property="og:title"]',        title);
    set('meta[property="og:description"]',  desc);
    set('meta[name="twitter:title"]',       title);
    set('meta[name="twitter:description"]', desc);

    // Schema.org per-chapter JSON-LD — Article (or LearningResource) pointing at the parent Course.
    // For Chapter 06 (the hard questions) we also emit FAQPage so the Q&As surface in AI answers.
    const SITE = 'https://ece-berrak.github.io/nautilida-site/literacy';
    const ORG  = {"@type":"Organization","name":"Nautilida","sameAs":"https://nautilida.ai"};
    const COURSE = {"@type":"Course","name":"Nautilida Literacy · First Edition","url":"https://ece-berrak.github.io/nautilida-site/literacy/"};
    let jsonld;
    const chMatch = route.match(/^#\/(\d{2})-/);
    if (chMatch){
      const ch = chapterByNum(chMatch[1]);
      if (ch){
        const url = SITE + '/' + route.slice(2);
        const part = {
          "@context":"https://schema.org","@type":"LearningResource",
          "name": `Chapter ${ch.num} · ${ch.title}`,
          "description": ch.dek,
          "url": url,
          "isPartOf": COURSE,
          "provider": ORG,
          "timeRequired": "PT" + (parseInt(ch.mins,10) || 6) + "M",
          "learningResourceType": "Article",
          "inLanguage":"en",
        };
        if (ch.num === '06'){
          jsonld = [part, {
            "@context":"https://schema.org","@type":"FAQPage",
            "mainEntity": [
              ['Can\'t ChatGPT or Claude already do this?', 'For one-shot tasks — drafting an email, summarising a thread, explaining a doc — yes, and well. For coordination across people, accounts, and weeks — no. ChatGPT and Claude don\'t carry persistent memory of your book. They don\'t run a Monday rhythm. They activate when prompted and go silent when not. The team lead is a different shape: continuously running, persistently remembering, proactively routing.'],
              ['We\'re already buried in manual admin work and workflow tools. Why add another?', 'The team lead doesn\'t add another tool — it removes the orchestration layer that was being done by hand. Today, that orchestration is a manager every Sunday evening, or a stack of Zaps and scripts someone has to maintain. The brief, the priorities, the recap, the memory between weeks — those are the work.'],
              ['Why won\'t OpenAI, Anthropic, or Google just build this themselves?', 'Because the moat isn\'t the model — it\'s cross-stack memory and an operational rhythm fitted to a specific team. Foundation labs build horizontal capabilities. They don\'t build the integration plumbing into your CRM, the schema for your accounts, or the rhythm that matches your team\'s week. That\'s category-specific work.'],
              ['What stops 50 startups from copying you once one team proves the loop works?', 'The substrate. Switching costs come from the memory you\'ve built, not the brand on top. The first six months of using a team lead are when patterns get learned, drift baselines get set, your book gets known. A copy-cat starts with empty memory; the incumbent has six months of compounding context.'],
              ['Won\'t HubSpot, Salesforce, or another CRM just bolt this on?', 'Some of it, yes — and some of that will be useful for in-CRM tasks. But coordination requires cross-stack memory, and CRMs are by definition stack-bound. They optimise for what\'s inside the CRM. The team lead optimises for what\'s between systems.'],
              ['What if a single super-agent eventually does everything — and the coordination layer disappears?', 'Even a perfectly capable model needs three things to coordinate a team: persistent memory of the book, knowledge of the rhythm the team runs on, and integration into the tools they live in. The "agent" framing misses that this isn\'t an intelligence problem — it\'s an integration and memory problem.'],
              ['What about GDPR and data residency?', 'Tenant-isolated by default — your team\'s memory never crosses to another customer\'s tenant. EU and US residency are pickable; you choose where data lives. The system is read-only by default — it reads from CRM, email, and chat but doesn\'t write back unless you turn that on, deliberately, with audit.'],
              ['What about hallucinations? AI saying things that aren\'t true?', 'We don\'t guess. Every claim in a brief — every number, every named account, every flagged signal — points back to the raw source: the email, the order record, the call note. If the source isn\'t there, the claim isn\'t made. The brief is deterministic by design.'],
              ['Will this atrophy the manager? They stop reading their own data?', 'The opposite. The brief surfaces patterns managers used to miss because they didn\'t have time to look. Having coordination handled gives managers more time on judgement — not less. The skill that atrophies is reconstruction work, and that\'s the skill that should atrophy.'],
              ['What if you go down? What if you go away?', 'Read-only architecture means we don\'t break your CRM if we go down — your stack keeps working. Data export is one click; you take everything with you, including the memory. The architecture also assumes any single tool can fail without taking the team down with it.'],
            ].map(([q,a])=>({"@type":"Question","name":q,"acceptedAnswer":{"@type":"Answer","text":a}}))
          }];
        } else {
          jsonld = part;
        }
      }
    } else if (route === '#/finish'){
      jsonld = {"@context":"https://schema.org","@type":"WebPage","name":title,"description":desc,"url":SITE+'/#/finish',"isPartOf":COURSE,"publisher":ORG};
    } else {
      jsonld = COURSE;
    }
    const tag = document.getElementById('page-jsonld');
    if (tag) tag.textContent = JSON.stringify(jsonld);

    if (typeof window.gtag === 'function'){
      window.gtag('event', 'page_view', {
        page_title: title,
        page_location: window.location.href,
        page_path: route || '/',
      });
    }

    window.scrollTo(0, 0);
  }, [route]);

  // Scroll progress bar
  useEffectA(()=>{
    const bar = document.querySelector('#progress > div');
    if (!bar) return;
    const onScroll = ()=>{
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max>0 ? window.scrollY / max : 0;
      bar.style.transform = `scaleX(${p})`;
    };
    onScroll();
    window.addEventListener('scroll', onScroll, {passive:true});
    return ()=> window.removeEventListener('scroll', onScroll);
  }, []);

  // Route → page
  let page;
  if (route === '#/finish') page = <PlaybookFinish/>;
  else {
    const m = route.match(/^#\/(\d{2})-/);
    if (m){
      const num = m[1];
      const map = {
        '01': Chapter01, '02': Chapter02, '03': Chapter03, '04': Chapter04,
        '05': Chapter05, '06': Chapter06, '07': Chapter07,
      };
      const C = map[num];
      if (C) page = <C/>;
      else if (chapterByNum(num)) page = <ChapterDraft num={num}/>;
      else page = <PlaybookHome/>;
    } else {
      page = <PlaybookHome/>;
    }
  }
  return (
    <>
      {page}
      <CookieConsent/>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
