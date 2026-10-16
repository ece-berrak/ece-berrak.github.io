// Legal — single page hosting Privacy + Terms behind a tab toggle.
// Routes: #/privacy and #/terms both render this page; tab is initialised from route.
const { useState: useStateLegal, useEffect: useEffectLegal } = React;

function Legal({ initialTab = 'privacy' }){
  const [tab, setTab] = useStateLegal(initialTab);
  const goHome     = (e)=>{ e.preventDefault(); window.location.hash = ''; };
  const goContact  = (e)=>{ e.preventDefault(); window.location.hash = '#/contact'; };

  // Keep the URL in sync when the user clicks a tab — so deep-linking still works.
  useEffectLegal(()=>{
    const target = tab === 'terms' ? '#/terms' : '#/privacy';
    if (window.location.hash !== target){
      history.replaceState(null, '', target);
    }
  }, [tab]);

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
      <section style={{padding:'80px 0 40px'}}>
        <div className="container">
          <div className="eyebrow" style={{marginBottom:18}}>[ Trust &amp; transparency ]</div>
          <h1 className="display" style={{margin:'0 0 22px',fontSize:'clamp(48px, 7vw, 96px)',lineHeight:.98,letterSpacing:'-.03em'}}>
            {tab === 'privacy' ? (
              <>PRIVACY <span className="serif-grad" style={{fontSize:'1.02em'}}>policy.</span></>
            ) : (
              <>TERMS <span className="serif-grad" style={{fontSize:'1.02em'}}>of service.</span></>
            )}
          </h1>
          <p style={{fontSize:18,color:'var(--ink-soft)',maxWidth:620,lineHeight:1.55,margin:0}}>
            {tab === 'privacy'
              ? 'How we collect, use, and protect your information.'
              : 'The rules and regulations for using Nautilida.'}
          </p>
        </div>
      </section>

      {/* Tab switcher */}
      <section style={{padding:'0 0 24px'}}>
        <div className="container">
          <div style={{
            display:'inline-flex',gap:6,padding:6,
            background:'var(--bone-3)',border:'1px solid var(--ink-line-2)',borderRadius:999,
          }}>
            {[
              {k:'privacy', label:'Privacy'},
              {k:'terms',   label:'Terms'},
            ].map(t=>(
              <button key={t.k} onClick={()=>setTab(t.k)} className="mono"
                style={{
                  padding:'10px 18px',borderRadius:999,border:'none',cursor:'pointer',
                  fontSize:11,letterSpacing:'.14em',
                  background: tab===t.k ? 'var(--ink)' : 'transparent',
                  color:      tab===t.k ? 'var(--lime)' : 'var(--ink-soft)',
                  transition:'background .2s ease, color .2s ease',
                }}>
                {t.label.toUpperCase()}
              </button>
            ))}
          </div>
          <span className="mono" style={{
            display:'inline-block',marginLeft:14,fontSize:11,letterSpacing:'.12em',color:'var(--ink-quiet)',
          }}>
            LAST UPDATED · JANUARY 9, 2026
          </span>
        </div>
      </section>

      {/* Body */}
      <section style={{padding:'24px 0 96px'}}>
        <div className="container" style={{maxWidth:760}}>
          {tab === 'privacy' ? <PrivacyBody/> : <TermsBody/>}

          <div style={{
            marginTop:48,padding:'18px 22px',
            background:'var(--bone-3)',border:'1px solid var(--ink-line)',borderRadius:14,
            display:'flex',alignItems:'center',justifyContent:'space-between',gap:16,flexWrap:'wrap',
          }}>
            <span style={{fontSize:14,color:'var(--ink-soft)'}}>
              Questions about {tab === 'privacy' ? 'this Privacy Policy' : 'these Terms'}?
            </span>
            <a href="#/contact" onClick={goContact} className="btn btn-primary" style={{padding:'10px 16px',fontSize:13}}>
              Contact us <span className="arrow">→</span>
            </a>
          </div>
        </div>
      </section>

      <Footer/>
    </main>
  );
}

// Shared helpers for legal copy
function LegalH2({children}){
  return (
    <h2 className="display" style={{
      margin:'48px 0 14px',fontSize:'clamp(22px, 2.6vw, 30px)',lineHeight:1.1,letterSpacing:'-.01em',
    }}>{children}</h2>
  );
}
function LegalP({children}){
  return <p style={{margin:'0 0 14px',fontSize:16,lineHeight:1.65,color:'var(--ink)'}}>{children}</p>;
}
function LegalUL({items}){
  return (
    <ul style={{margin:'0 0 14px',paddingLeft:22,color:'var(--ink)'}}>
      {items.map((it,i)=>(
        <li key={i} style={{fontSize:16,lineHeight:1.65,marginBottom:6}}>{it}</li>
      ))}
    </ul>
  );
}

function PrivacyBody(){
  return (
    <>
      <LegalP>
        At Nautilida, accessible from <a href="https://nautilida.ai" style={{color:'var(--violet)',textDecoration:'underline'}}>https://nautilida.ai</a>, one of our main priorities is the privacy of our visitors. This Privacy Policy explains the types of information we collect and how we use it.
      </LegalP>

      <LegalH2>Information we collect</LegalH2>
      <LegalP>
        The personal information you are asked to provide, and the reasons why you are asked to provide it, will be made clear at the point we ask you to provide that information.
      </LegalP>
      <LegalP>
        If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and any attachments you may send us, and any other information you choose to provide.
      </LegalP>

      <LegalH2>How we use your information</LegalH2>
      <LegalP>We use the information we collect in various ways, including to:</LegalP>
      <LegalUL items={[
        'Provide, operate, and maintain our website and product',
        'Improve, personalize, and expand our product experience',
        'Understand and analyze how you use our website',
        'Communicate with you for customer service, product updates, and marketing where you have opted in',
        'Find and prevent fraud',
      ]}/>

      <LegalH2>Log files</LegalH2>
      <LegalP>
        Nautilida follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this as part of hosting services' analytics. The information collected by log files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamps, referring and exit pages, and possibly the number of clicks.
      </LegalP>

      <LegalH2>Your data, isolated</LegalH2>
      <LegalP>
        Nautilida is built on isolation as a default. Every customer's memory, patterns, and conversations are stored in a dedicated tenant. Your data is never used to train shared models or improve another customer's product experience. Privacy is a feature, not an afterthought.
      </LegalP>

      <LegalH2>Third-party services</LegalH2>
      <LegalP>
        We only integrate with third parties that meet our data handling standards. A full list of processors is available on request. You can request deletion of your data at any time via our contact form.
      </LegalP>

      <LegalH2>Cookies and tracking</LegalH2>
      <LegalP>
        We use a small number of cookies, grouped into three categories. Non-essential cookies are loaded only after you give consent through the cookie banner. We use Google Consent Mode v2, which means tracking scripts respect your choice from the first page load. You can change or withdraw your consent at any time via the <strong>Cookie settings</strong> link at the bottom of every page.
      </LegalP>
      <LegalUL items={[
        <><strong>Necessary</strong> — required for the site to function (page routing, form submission integrity). Always on. No personal data is processed for marketing or analytics in this category.</>,
        <><strong>Analytics</strong> — Google Analytics 4 (measurement ID G-50KRVTC4H7). Aggregated page views and interaction events. IP addresses are anonymized. Loaded only with your consent. Data is not sold and not used for advertising.</>,
        <><strong>Marketing</strong> — Leadsy visitor analytics for the waitlist funnel. Loaded only with your consent. If you reject this category, the script is never loaded on your device.</>,
      ]}/>
      <LegalP>
        Default state on first visit is <strong>denied for all non-essential categories</strong>. Reject is as easy as accept. Your choice is stored in your browser's local storage under the key <code>nauti_cookie_consent</code>; clearing browser data will reset it and the banner will appear again. Withdrawing the marketing consent takes effect immediately for new page loads — already-loaded scripts in the current session may continue running until the next reload.
      </LegalP>

      <LegalH2>Contact us</LegalH2>
      <LegalP>
        If you have any questions about this Privacy Policy, please contact us via our contact form.
      </LegalP>
    </>
  );
}

function TermsBody(){
  return (
    <>
      <LegalP>
        These terms and conditions outline the rules and regulations for the use of Nautilida's website, located at <a href="https://nautilida.ai" style={{color:'var(--violet)',textDecoration:'underline'}}>https://nautilida.ai</a>, and the Nautilida product.
      </LegalP>

      <LegalH2>1. Acceptance of terms</LegalH2>
      <LegalP>
        By accessing this website and product, you accept these terms and conditions. Do not continue to use Nautilida if you do not agree to all of the terms and conditions stated on this page.
      </LegalP>

      <LegalH2>2. Cookies</LegalH2>
      <LegalP>
        We employ the use of cookies. By accessing Nautilida, you agreed to use cookies in agreement with our Privacy Policy.
      </LegalP>

      <LegalH2>3. License</LegalH2>
      <LegalP>
        Unless otherwise stated, Nautilida and its licensors own the intellectual property rights for all material on Nautilida. All intellectual property rights are reserved. You may access this content for your own personal use subject to the restrictions set in these terms and conditions.
      </LegalP>

      <LegalH2>4. Acceptable use</LegalH2>
      <LegalUL items={[
        'No reverse engineering, scraping, or automated access outside of documented APIs.',
        "No attempts to extract or deanonymize another tenant's data.",
        'No use of Nautilida to violate any applicable law or third-party right.',
      ]}/>

      <LegalH2>5. Data ownership</LegalH2>
      <LegalP>
        You retain ownership of all data you connect to or upload into Nautilida. We act as a processor for that data, handling it only as needed to provide and improve your experience of the product.
      </LegalP>

      <LegalH2>6. Disclaimers</LegalH2>
      <LegalP>
        The materials on Nautilida's website are provided on an "as is" basis. Nautilida makes no warranties, expressed or implied, and disclaims all other warranties including, without limitation, implied warranties of merchantability, fitness for a particular purpose, or non-infringement of intellectual property.
      </LegalP>

      <LegalH2>7. Termination</LegalH2>
      <LegalP>
        You may terminate your account at any time. On termination, we will delete or return your data in line with the Privacy Policy and applicable regulations.
      </LegalP>

      <LegalH2>Contact us</LegalH2>
      <LegalP>
        If you have any questions about these Terms, please contact us via our contact form.
      </LegalP>
    </>
  );
}

Object.assign(window, {Legal});
