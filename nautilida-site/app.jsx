// App composition + hash-based routing (#/signin → SignIn page; otherwise the home page)
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

function HomePage(){
  // Auto-reveal: every <section> heading + .eyebrow inside main fades up on enter.
  useEffectA(()=>{
    const targets = document.querySelectorAll('main section h2, main section .eyebrow, main section > .container > p');
    targets.forEach(el => el.classList.add('reveal'));
    const io = new IntersectionObserver((entries)=>{
      entries.forEach(e => {
        if (e.isIntersecting){
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, {threshold:0.15, rootMargin:'0px 0px -40px 0px'});
    targets.forEach(el => io.observe(el));
    return ()=>io.disconnect();
  },[]);

  return (
    <>
      <ScrollProgress/>
      <Nav/>
      <CursorCompanion/>
      <main style={{position:'relative',zIndex:1}}>
        <Hero/>
        <SignalTicker/>
        <MondayBrief/>
        <AlwaysOn/>
        <Handover/>
        <Memory/>
        <EvidenceBridge/>
        <Integrations/>
        <Security/>
        <CTA/>
        <Footer/>
      </main>
    </>
  );
}

function App(){
  const route = useHashRoute();

  useEffectA(()=>{
    const sp = document.getElementById('splash');
    if (sp){
      requestAnimationFrame(()=>{
        requestAnimationFrame(()=>{
          sp.classList.add('hide');
          setTimeout(()=>sp.classList.add('gone'), 800);
        });
      });
    }
  },[]);

  // Per-route title + meta description — updates browser tab + social previews on hash change.
  useEffectA(()=>{
    const META = {
      home:                 { title:'Nautilida — AI Team Lead for Sales',
                              desc:'Revenue memory. The AI team lead for sales — coordinates the team across your stack, tracks every signal, automates follow-through.' },
      '#/about':            { title:'About · Nautilida',
                              desc:'A small team in Berlin building Nauti — the AI team lead for sales. Anonymous on purpose, until we ship.' },
      '#/blog':             { title:'Blog · Notes from the lab — Nautilida',
                              desc:'Field notes from building Nauti. Manifestos, memory, and the engineering behind a quiet Monday brief.' },
      '#/blog/weekly-loop': { title:'The weekly revenue coordination loop, explained · Nautilida',
                              desc:'How an AI team lead coordinates your week — Monday brief, mid-week priorities, Friday recap, compounding memory.' },
      '#/blog/ai-team-lead':{ title:'What is an AI team lead for sales? · Nautilida',
                              desc:'Your next hire could be Nauti — AI team lead for sales. No coffee. No sleep. Perfect recall.' },
      '#/blog/revenue-intelligence-vs-nautilida':{ title:'Revenue intelligence vs Nautilida — different layers, complementary in most stacks · Nautilida',
                              desc:'Revenue intelligence tools tell you what happened on calls. Nautilida tells you what to do next about the deal. Here\'s the real difference.' },
      '#/compare':          { title:'Compare · Nautilida vs Gong, Clari, Gainsight — different layers · Nautilida',
                              desc:'Honest comparisons. Nautilida is a coordination and synthesis layer above the silos — not an alternative to any single tool. Three head-to-head stances on when each tool is the right fit.' },
      '#/compare/gong':     { title:'Nautilida vs Gong — different layers, complementary in most stacks · Nautilida',
                              desc:'Honest comparison. Gong is conversation visibility; Nautilida is cross-stack synthesis above the silos. Different layers, complementary in most revenue stacks.' },
      '#/compare/clari':    { title:'Nautilida vs Clari — different layers, complementary in most stacks · Nautilida',
                              desc:'Honest comparison. Clari is the forecast layer; Nautilida is the coordination and synthesis layer above all silos. Different jobs at different layers.' },
      '#/compare/gainsight':{ title:'Nautilida vs Gainsight — different layers, complementary in most stacks · Nautilida',
                              desc:'Honest comparison. Gainsight runs CS playbooks at scale; Nautilida coordinates the entire revenue team and synthesizes across silos. Different shapes for different jobs.' },
      '#/use-cases':                  { title:'Use cases · Nautilida by sector — manufacturing, B2B catering, more soon · Nautilida',
                                        desc:'How an AI team lead shows up in real revenue books. Sector-specific pain, signals, and the weekly loop — written for Heads of Sales, AMs, CROs, and CEOs. Manufacturing and B2B catering live; more coming.' },
      '#/use-cases/manufacturing':    { title:'Nautilida for manufacturing — AI team lead for industrial distributors & parts suppliers · Nautilida',
                                        desc:'Long sales cycles, channel partners, RFQs scattered across email and CRM, reorder rhythms that vary by account. The weekly rhythm Nautilida runs for manufacturing revenue teams — written for Heads of Sales, AMs, CROs, CEOs.' },
      '#/use-cases/catering':         { title:'Nautilida for B2B catering — AI team lead for offices, events, and reorder rhythms · Nautilida',
                                        desc:'Office reorders, one-off events, and hybrid bookings in the same memory. Skip signals, day-of-week shifts, destination classification when tags are missing. The weekly rhythm Nautilida runs for catering revenue teams.' },
      '#/waitlist':         { title:'Join the waitlist · Nautilida',
                              desc:'Get early access to Nauti. Connect HubSpot and Teams in 12 minutes. First Monday brief lands at 7:00 AM.' },
      '#/contact':          { title:'Contact · Nautilida',
                              desc:'Talk to a human. Schedule a demo, pitch a topic, or just say hi. We reply fast.' },
      '#/signin':           { title:'Sign in · Nautilida',
                              desc:'Sign in to your Nautilida workspace.' },
      '#/privacy':          { title:'Privacy Policy · Nautilida',
                              desc:'How we collect, use, and protect your information. Privacy is a feature, not an afterthought.' },
      '#/terms':            { title:'Terms of Service · Nautilida',
                              desc:'The rules and regulations for using Nautilida.' },
    };
    const m = META[route] || META.home;
    document.title = m.title;
    const set = (sel, val)=>{
      const el = document.querySelector(sel);
      if (el) el.setAttribute('content', val);
    };
    set('meta[name="description"]',         m.desc);
    set('meta[property="og:title"]',        m.title);
    set('meta[property="og:description"]',  m.desc);
    set('meta[name="twitter:title"]',       m.title);
    set('meta[name="twitter:description"]', m.desc);

    // Schema.org page-level JSON-LD — refreshed per route for AEO/GEO.
    // AI engines parse these directly to surface in answers and "people also ask".
    const SITE = 'https://ece-berrak.github.io/nautilida-site';
    const ORG  = {"@type":"Organization","name":"Nautilida","logo":{"@type":"ImageObject","url":SITE+"/uploads/nautilus-icon.png"}};
    const fullUrl = SITE + (route || '/');
    const article = (headline, dek, slug, faqs)=>{
      const out = [{
        "@context":"https://schema.org","@type":"Article",
        "headline": headline,
        "description": dek,
        "url": SITE + '/#/blog/' + slug,
        "mainEntityOfPage": {"@type":"WebPage","@id": SITE + '/#/blog/' + slug},
        "author": ORG, "publisher": ORG,
        "image": SITE + "/uploads/nautilus-icon.png",
        "inLanguage":"en",
      }];
      if (faqs && faqs.length){
        out.push({
          "@context":"https://schema.org","@type":"FAQPage",
          "mainEntity": faqs.map(([q,a])=>({"@type":"Question","name":q,"acceptedAnswer":{"@type":"Answer","text":a}})),
        });
      }
      return out;
    };
    let jsonld;
    if (route === '#/blog'){
      const setId = SITE + '/#/blog#glossary';
      const terms = (window.GLOSSARY || []).map(([slug, term, def])=>({
        "@type":"DefinedTerm",
        "@id": SITE + '/#/blog#glossary-' + slug,
        "name": term,
        "description": def,
        "inDefinedTermSet": setId,
      }));
      jsonld = [
        {"@context":"https://schema.org","@type":"CollectionPage","name":m.title,"description":m.desc,"url":fullUrl,"publisher":ORG},
        {"@context":"https://schema.org","@type":"DefinedTermSet","@id":setId,
         "name":"Nautilida glossary",
         "description":"Definitions of terms used at Nautilida — the AI team lead category, the weekly revenue coordination loop, and related vocabulary.",
         "url": SITE + '/#/blog',
         "publisher": ORG,
         "hasDefinedTerm": terms},
      ];
    } else if (route === '#/blog/weekly-loop'){
      jsonld = article(
        'The weekly revenue coordination loop, explained',
        'Monday brief, mid-week execution, Friday recap, compounding memory. The operating rhythm that replaces dashboard anxiety with direction.',
        'weekly-loop',
        [
          ['What is the weekly revenue coordination loop?', 'A repeating weekly rhythm with four parts: a Monday leadership brief that names the week\'s priorities, mid-week owner-level priorities delivered to each account manager, a Friday recap that closes the loop on what moved, and a compounding memory that carries forward into next Monday\'s plan.'],
          ['Why weekly and not daily or real-time?', 'Revenue teams need cadence, not constant alerts. A week is long enough for real signals to emerge and short enough to act before the window closes. Real-time dashboards create anxiety; the weekly loop creates rhythm.'],
          ['What goes into a Monday brief?', 'Three accounts most likely to slip this week, two opportunities with the highest expected movement, the one pattern that changed since Friday, and any handovers or rotations that need context. Short, specific, actionable.'],
          ['How is the Friday recap different from a CRM report?', 'A CRM report tells you what happened. A Friday recap tells you what moved and why, what was decided, what carries forward, and what the plan is for next Monday. It is written narrative that reads like a team lead summary, not a table of numbers.'],
          ['What does compounding memory mean in practice?', 'Every signal, every decision, every exchange is remembered across weeks. Patterns sharpen over months. Handovers travel with the account. The team picks up exactly where Friday left off, every week.'],
        ]
      );
    } else if (route === '#/blog/revenue-intelligence-vs-nautilida'){
      jsonld = article(
        'Revenue intelligence vs Nautilida',
        'Revenue intelligence tools tell you what happened on calls. Nautilida tells you what to do next about the deal. Here\'s the real difference.',
        'revenue-intelligence-vs-nautilida',
        [
          ['Is Nautilida a revenue intelligence tool?', 'No. Revenue intelligence tools (Gong, Chorus, Avoma) record and analyze customer conversations. Nautilida is a coordination layer that runs above the entire pipeline — calls, email, CRM, forecast — and pushes the next move to the right person. Different layer, different job.'],
          ['Should we use Gong and Nautilida together?', 'For most teams, yes. Gong covers the conversation layer with depth. Nautilida covers the coordination layer across all signals, including Gong\'s. The two are complementary — keep what you have on conversations, add coordination on top.'],
          ['What does "coordination layer" actually mean?', 'A coordination layer decides who acts next, with what context, on what timeline. It reads from every silo (CRM, calls, email, chat), holds memory across weeks, and routes priorities to specific owners. Dashboards show; a coordination layer directs.'],
          ['Do I still need a RevOps person if I use Nautilida?', 'Yes — but freed from manual report stitching. Nautilida runs the weekly rhythm (Monday brief, mid-week priorities, Friday recap) automatically. RevOps moves from data plumbing to strategic work: territory design, comp planning, deal desk, sales process.'],
          ['How fast does a team see value?', 'The first Monday brief lands within the first week of connecting HubSpot/Salesforce and chat. Pattern recognition compounds over weeks as more signal flows in. By month three, the system has enough memory to surface non-obvious account risk before it shows up in the CRM.'],
        ]
      );
    } else if (route === '#/blog/ai-team-lead'){
      jsonld = article(
        'What is an AI team lead for sales?',
        'A short definition. How it differs from assistants and dashboards. What it does for revenue teams on recurring accounts.',
        'ai-team-lead',
        [
          ['Is an AI team lead the same as an AI assistant?', 'No. An AI assistant responds to prompts. An AI team lead carries memory across your stack, routes priorities to specific owners, closes the loop on what happened, and coordinates the team week over week. Assistants answer; a team lead runs the rhythm.'],
          ['Does it replace the revenue leader?', 'No. It frees the revenue leader from reconstruction work so they can lead. Monday briefs and Friday recaps arrive already written. Leaders still make judgement calls, set strategy, and own outcomes.'],
          ['What tools does it connect to?', 'CRM (HubSpot, Pipedrive, Attio — Salesforce on the roadmap), chat (Slack, Teams), and email (Gmail, Outlook). It reads signals from all of them and delivers briefs back into the tool your team already lives in.'],
          ['How is it different from revenue intelligence tools?', 'Revenue intelligence tools show you what happened inside one silo. An AI team lead builds a single memory across all silos, delivers the why and the next move, and coordinates execution across owners. Coordination over visibility.'],
          ['Who uses it on the team?', 'Everyone. Leaders get Monday plans and Friday recaps. Account owners get priority lists and pre-meeting prep. RevOps and customer success ask it anything, any time, and get months of history in one answer.'],
        ]
      );
    } else if (route === '#/compare'){
      const items = Object.keys(window.COMPARISONS || {}).map((slug, i)=>{
        const c = window.COMPARISONS[slug];
        return {"@type":"ListItem","position": i+1,
          "url": SITE + '/#/compare/' + slug,
          "name": 'Nautilida vs ' + c.name};
      });
      jsonld = [
        {"@context":"https://schema.org","@type":"CollectionPage","name":m.title,"description":m.desc,"url":fullUrl,"publisher":ORG},
        {"@context":"https://schema.org","@type":"ItemList","name":"Nautilida comparisons","numberOfItems": items.length,"itemListElement": items},
      ];
    } else if (route.indexOf('#/compare/') === 0){
      const cmpSlug = route.replace('#/compare/','');
      const cmp = (window.COMPARISONS || {})[cmpSlug];
      if (cmp){
        jsonld = [
          {"@context":"https://schema.org","@type":"Article",
           "headline": 'Nautilida vs ' + cmp.name + ' — when each is the right fit',
           "description": cmp.heroDek,
           "url": fullUrl,
           "mainEntityOfPage": {"@type":"WebPage","@id": fullUrl},
           "author": ORG, "publisher": ORG,
           "image": SITE + "/uploads/nautilus-icon.png",
           "inLanguage":"en",
           "about":[
             {"@type":"SoftwareApplication","name":"Nautilida","url":SITE,"applicationCategory":"BusinessApplication"},
             {"@type":"SoftwareApplication","name":cmp.name,"applicationCategory":"BusinessApplication"},
           ]},
          {"@context":"https://schema.org","@type":"FAQPage",
           "mainEntity": cmp.faqs.map(f=>({"@type":"Question","name":f.q,"acceptedAnswer":{"@type":"Answer","text":f.a}}))},
        ];
      } else {
        jsonld = {"@context":"https://schema.org","@type":"WebPage","name":m.title,"description":m.desc,"url":fullUrl,"publisher":ORG};
      }
    } else if (route === '#/use-cases'){
      const ucItems = Object.keys(window.USE_CASES || {}).map((slug, i)=>{
        const u = window.USE_CASES[slug];
        return {"@type":"ListItem","position": i+1,
          "url": SITE + '/#/use-cases/' + slug,
          "name": 'Nautilida for ' + u.name};
      });
      jsonld = [
        {"@context":"https://schema.org","@type":"CollectionPage","name":m.title,"description":m.desc,"url":fullUrl,"publisher":ORG},
        {"@context":"https://schema.org","@type":"ItemList","name":"Nautilida use cases","numberOfItems": ucItems.length,"itemListElement": ucItems},
      ];
    } else if (route.indexOf('#/use-cases/') === 0){
      const ucSlug = route.replace('#/use-cases/','');
      const uc = (window.USE_CASES || {})[ucSlug];
      if (uc){
        jsonld = [
          {"@context":"https://schema.org","@type":"Article",
           "headline": 'Nautilida for ' + uc.name,
           "description": uc.heroDek,
           "url": fullUrl,
           "mainEntityOfPage": {"@type":"WebPage","@id": fullUrl},
           "author": ORG, "publisher": ORG,
           "image": SITE + "/uploads/nautilus-icon.png",
           "inLanguage":"en",
           "audience": uc.audience.map(a=>({"@type":"Audience","audienceType": a.role,"description": a.context})),
           "about": {"@type":"Thing","name": uc.short}},
          {"@context":"https://schema.org","@type":"FAQPage",
           "mainEntity": uc.faqs.map(f=>({"@type":"Question","name":f.q,"acceptedAnswer":{"@type":"Answer","text":f.a}}))},
        ];
      } else {
        jsonld = {"@context":"https://schema.org","@type":"WebPage","name":m.title,"description":m.desc,"url":fullUrl,"publisher":ORG};
      }
    } else if (route === '#/about'){
      jsonld = {"@context":"https://schema.org","@type":"AboutPage","name":m.title,"description":m.desc,"url":fullUrl,"publisher":ORG};
    } else if (route === '#/contact'){
      jsonld = {"@context":"https://schema.org","@type":"ContactPage","name":m.title,"description":m.desc,"url":fullUrl,"publisher":ORG};
    } else {
      jsonld = {"@context":"https://schema.org","@type":"WebPage","name":m.title,"description":m.desc,"url":fullUrl,"publisher":ORG};
    }
    const tag = document.getElementById('page-jsonld');
    if (tag) tag.textContent = JSON.stringify(jsonld);

    // Google Analytics page_view — SPA hash routing doesn't trigger gtag automatically.
    if (typeof window.gtag === 'function'){
      window.gtag('event', 'page_view', {
        page_title: m.title,
        page_location: window.location.href,
        page_path: route || '/',
      });
    }
  }, [route]);

  // Reset scroll when route changes — but for section anchors (#product, #rhythm…)
  // smooth-scroll to the section instead of jumping to top. Offset for the fixed nav.
  useEffectA(()=>{
    const sectionAnchors = ['#product','#rhythm','#evidence','#integrations','#security','#pricing'];
    if (sectionAnchors.includes(route)){
      // Wait a tick so the home page is rendered if we just came from a sub-route.
      setTimeout(()=>{
        const el = document.querySelector(route);
        if (!el) {
          return;
        }
        const rect = el.getBoundingClientRect();
        const top = window.scrollY + rect.top - 130;
        window.scrollTo({top, behavior:'smooth'});
      }, 100);
      return;
    }
    window.scrollTo(0,0);
  }, [route]);

  const isSignIn   = route === '#/signin'   || route === '#signin';
  const isWaitlist = route === '#/waitlist' || route === '#waitlist';
  const isContact  = route === '#/contact'  || route === '#contact';
  const isAbout    = route === '#/about'    || route === '#about';
  const isPrivacy  = route === '#/privacy'  || route === '#privacy';
  const isTerms    = route === '#/terms'    || route === '#terms';
  const isBlog            = route === '#/blog'              || route === '#blog';
  const isPostWeeklyLoop      = route === '#/blog/weekly-loop';
  const isPostAITeamLead      = route === '#/blog/ai-team-lead';
  const isPostRevenueIntel    = route === '#/blog/revenue-intelligence-vs-nautilida';
  const compareSlug       = route.indexOf('#/compare/') === 0 ? route.replace('#/compare/','') : null;
  const isCompare         = compareSlug && (window.COMPARISONS || {})[compareSlug];
  const isCompareHub      = route === '#/compare' || route === '#compare';
  const useCaseSlug       = route.indexOf('#/use-cases/') === 0 ? route.replace('#/use-cases/','') : null;
  const isUseCase         = useCaseSlug && (window.USE_CASES || {})[useCaseSlug];
  const isUseCaseHub      = route === '#/use-cases' || route === '#use-cases';

  let page;
  if (isSignIn)               page = <SignIn/>;
  else if (isWaitlist)        page = <Waitlist/>;
  else if (isContact)         page = <Contact/>;
  else if (isAbout)           page = <About/>;
  else if (isPrivacy)         page = <Legal initialTab="privacy"/>;
  else if (isTerms)           page = <Legal initialTab="terms"/>;
  else if (isPostWeeklyLoop)    page = <PostWeeklyLoop/>;
  else if (isPostAITeamLead)    page = <PostAITeamLead/>;
  else if (isPostRevenueIntel)  page = <PostRevenueIntel/>;
  else if (isCompare)         page = <Compare slug={compareSlug}/>;
  else if (isCompareHub)      page = <CompareHub/>;
  else if (isUseCase)         page = <UseCase slug={useCaseSlug}/>;
  else if (isUseCaseHub)      page = <UseCasesHub/>;
  else if (isBlog)            page = <Blog/>;
  else                        page = <HomePage/>;

  return (
    <>
      {page}
      <CookieConsent/>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
