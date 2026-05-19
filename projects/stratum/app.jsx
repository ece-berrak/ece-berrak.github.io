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
      <DesignCanvas
        title="Stratum · the launch field guide"
        subtitle="Notes from the maker — 14 surfaces a new brand has to live in, each made for a specific room it'll be scrolled in. Open any artboard to see what it does, and why it's the shape it is."
      >
        <DCSection
          id="cover"
          title="00 · the moment I started shaping it"
          subtitle="Stratum's a productivity OS I'm building for product teams. Before any social post, the system: wordmark, palette, type, voice. The bones."
        >
          <DCArtboard id="cover" label="cover · what stratum actually is" width={760} height={560}>
            <CoverBoard />
          </DCArtboard>
        </DCSection>

        <DCSection
          id="blog"
          title="01 · the launch post (three voices, one essay)"
          subtitle="Same blog drop, three rooms — paper-grade for the editorial readers, byline-led for LinkedIn skimmers, dark numbered for the cut you need to land."
        >
          <DCArtboard id="blog-ig-editorial" label="IG · paper-grade announcement" width={IG.w} height={IG.h}>
            <BlogIG_Editorial />
          </DCArtboard>
          <DCArtboard id="blog-li-twocol" label="LinkedIn · author-led byline" width={LI.w} height={LI.h}>
            <BlogLI_TwoCol />
          </DCArtboard>
          <DCArtboard id="blog-ig-dark" label="IG · the dark cut" width={IG.w} height={IG.h}>
            <BlogIG_Dark />
          </DCArtboard>
        </DCSection>

        <DCSection
          id="use"
          title="02 · the proof (same story, three rooms)"
          subtitle="One customer, one outcome — dressed for the scroll. Stat hero for the impact-first scan, profile + quote for the trust read, step-by-step for the curious."
        >
          <DCArtboard id="use-ig-stat" label="IG · the number that earned the post" width={IG.w} height={IG.h}>
            <UseIG_Stat />
          </DCArtboard>
          <DCArtboard id="use-li-side" label="LinkedIn · the customer says it best" width={LI.w} height={LI.h}>
            <UseLI_Side />
          </DCArtboard>
          <DCArtboard id="use-ig-steps" label="IG · how they actually ship it" width={IG.w} height={IG.h}>
            <UseIG_Steps />
          </DCArtboard>
        </DCSection>

        <DCSection
          id="test"
          title="03 · the voices (three shapes of trust)"
          subtitle="Quotes from teams using Stratum. Same words, different scroll behavior — pull-quote for the slow-down, side card for the LinkedIn lurker, stacked for the social-proof wall."
        >
          <DCArtboard id="test-ig-pullquote" label="IG · the one you save" width={IG.w} height={IG.h}>
            <TestIG_Pullquote />
          </DCArtboard>
          <DCArtboard id="test-li-side" label="LinkedIn · the side endorsement" width={LI.w} height={LI.h}>
            <TestLI_Side />
          </DCArtboard>
          <DCArtboard id="test-ig-stack" label="IG · the trust stack" width={IG.w} height={IG.h}>
            <TestIG_Stack />
          </DCArtboard>
        </DCSection>

        <DCSection
          id="update"
          title="04 · the changelog (tiny ships, big ships)"
          subtitle="Release moments. UI mock for the proof-it-works, LinkedIn changelog for the bullet-readers, big version for the milestone you want people to remember."
        >
          <DCArtboard id="update-ig-ui" label="IG · proof in the product" width={IG.w} height={IG.h}>
            <UpdateIG_UI />
          </DCArtboard>
          <DCArtboard id="update-li-changelog" label="LinkedIn · what shipped this week" width={LI.w} height={LI.h}>
            <UpdateLI_Changelog />
          </DCArtboard>
          <DCArtboard id="update-ig-big" label="IG · the version-bump moment" width={IG.w} height={IG.h}>
            <UpdateIG_Big />
          </DCArtboard>
        </DCSection>

        <DCSection
          id="email"
          title="05 · the follow-up (three emails that close the loop)"
          subtitle="What lands in the inbox after the timeline scroll. A launch you can't miss, a digest that earns the open, a welcome that doesn't feel automated."
        >
          <DCArtboard id="email-launch"  label="launch · the one you actually open"  width={EM.w} height={EM.h}>
            <EmailLaunch />
          </DCArtboard>
          <DCArtboard id="email-digest"  label="digest · the friday catch-up"   width={EM.w} height={EM.h}>
            <EmailDigest />
          </DCArtboard>
          <DCArtboard id="email-welcome" label="welcome · the one that doesn't feel automated" width={EM.w} height={EM.h}>
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
