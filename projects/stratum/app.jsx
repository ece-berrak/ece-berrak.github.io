/* global React, ReactDOM, DesignCanvas, DCSection, DCArtboard,
   TweaksPanel, useTweaks, TweakSection, TweakColor, TweakText, TweakToggle, TweakRadio,
   CoverBoard,
   BlogIG_Editorial, BlogLI_TwoCol, BlogIG_Dark,
   UseIG_Stat, UseLI_Side, UseIG_Steps,
   TestIG_Pullquote, TestLI_Side, TestIG_Stack,
   UpdateIG_UI, UpdateLI_Changelog, UpdateIG_Big,
   EmailLaunch, EmailDigest, EmailWelcome */

// Artboard sizes
const IG = { w: 600, h: 600 };   // 1:1
const LI = { w: 760, h: 398 };   // 1.91:1
const EM = { w: 580, h: 760 };   // Email mock

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#1F3FCA",
  "brandName": "Stratum",
  "grain": true,
  "deep": "#0F1014",
  "highlight": "#D9E84A"
}/*EDITMODE-END*/;

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  // Live CSS-var override based on tweaks
  React.useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--cobalt", t.accent);
    root.style.setProperty("--ink", t.deep);
    root.style.setProperty("--acid", t.highlight);
    document.body.classList.toggle("no-grain", !t.grain);
  }, [t.accent, t.deep, t.highlight, t.grain]);

  // Swap brand name on the fly by exposing a global
  React.useEffect(() => {
    if (window.BRAND) window.BRAND.name = t.brandName;
  }, [t.brandName]);

  return (
    <React.Fragment>
      <DesignCanvas title="Stratum · Social system" subtitle="Blog, use cases, testimonials, product updates, email — 14 boards">
        <DCSection id="cover" title="00 · The system" subtitle="Brand at a glance">
          <DCArtboard id="cover" label="Cover" width={760} height={560}>
            <CoverBoard />
          </DCArtboard>
        </DCSection>

        <DCSection id="blog" title="01 · Blog announcements" subtitle="New essays and field notes">
          <DCArtboard id="blog-ig-editorial" label="IG · Editorial" width={IG.w} height={IG.h}>
            <BlogIG_Editorial />
          </DCArtboard>
          <DCArtboard id="blog-li-twocol" label="LinkedIn · Author byline" width={LI.w} height={LI.h}>
            <BlogLI_TwoCol />
          </DCArtboard>
          <DCArtboard id="blog-ig-dark" label="IG · Dark numbered" width={IG.w} height={IG.h}>
            <BlogIG_Dark />
          </DCArtboard>
        </DCSection>

        <DCSection id="use" title="02 · Use cases" subtitle="Customer stories and proof">
          <DCArtboard id="use-ig-stat" label="IG · Stat hero" width={IG.w} height={IG.h}>
            <UseIG_Stat />
          </DCArtboard>
          <DCArtboard id="use-li-side" label="LinkedIn · Profile + quote" width={LI.w} height={LI.h}>
            <UseLI_Side />
          </DCArtboard>
          <DCArtboard id="use-ig-steps" label="IG · How they ship" width={IG.w} height={IG.h}>
            <UseIG_Steps />
          </DCArtboard>
        </DCSection>

        <DCSection id="test" title="03 · Testimonials" subtitle="Words from teams using Stratum">
          <DCArtboard id="test-ig-pullquote" label="IG · Pull-quote" width={IG.w} height={IG.h}>
            <TestIG_Pullquote />
          </DCArtboard>
          <DCArtboard id="test-li-side" label="LinkedIn · Side card" width={LI.w} height={LI.h}>
            <TestLI_Side />
          </DCArtboard>
          <DCArtboard id="test-ig-stack" label="IG · Stacked quotes" width={IG.w} height={IG.h}>
            <TestIG_Stack />
          </DCArtboard>
        </DCSection>

        <DCSection id="update" title="04 · Product updates" subtitle="Changelogs and release moments">
          <DCArtboard id="update-ig-ui" label="IG · UI mock" width={IG.w} height={IG.h}>
            <UpdateIG_UI />
          </DCArtboard>
          <DCArtboard id="update-li-changelog" label="LinkedIn · Changelog" width={LI.w} height={LI.h}>
            <UpdateLI_Changelog />
          </DCArtboard>
          <DCArtboard id="update-ig-big" label="IG · Big version" width={IG.w} height={IG.h}>
            <UpdateIG_Big />
          </DCArtboard>
        </DCSection>

        <DCSection id="email" title="05 · Email templates" subtitle="Rendered in a mail-client mock">
          <DCArtboard id="email-launch"  label="Product launch"  width={EM.w} height={EM.h}>
            <EmailLaunch />
          </DCArtboard>
          <DCArtboard id="email-digest"  label="Weekly digest"   width={EM.w} height={EM.h}>
            <EmailDigest />
          </DCArtboard>
          <DCArtboard id="email-welcome" label="Welcome / onboarding" width={EM.w} height={EM.h}>
            <EmailWelcome />
          </DCArtboard>
        </DCSection>
      </DesignCanvas>

      <TweaksPanel title="Tweaks">
        <TweakSection title="Brand">
          <TweakText label="Brand name" value={t.brandName} onChange={v => setTweak("brandName", v)} />
        </TweakSection>
        <TweakSection title="Palette">
          <TweakColor
            label="Accent"
            value={t.accent}
            options={["#1F3FCA", "#0F1014", "#C24528", "#1F8A5B", "#7B4FE0"]}
            onChange={v => setTweak("accent", v)}
          />
          <TweakColor
            label="Highlight"
            value={t.highlight}
            options={["#D9E84A", "#F2C840", "#FF6B3D", "#A7E8C1", "#ECECE5"]}
            onChange={v => setTweak("highlight", v)}
          />
          <TweakColor
            label="Deep"
            value={t.deep}
            options={["#0F1014", "#16213A", "#2B1F1A", "#1F2620", "#2A1B36"]}
            onChange={v => setTweak("deep", v)}
          />
        </TweakSection>
        <TweakSection title="Finish">
          <TweakToggle label="Paper grain" value={t.grain} onChange={v => setTweak("grain", v)} />
        </TweakSection>
      </TweaksPanel>
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
