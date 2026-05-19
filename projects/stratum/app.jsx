/* global React, ReactDOM,
   CoverBoard,
   BlogIG_Editorial, BlogLI_TwoCol, BlogIG_Dark,
   UseIG_Stat, UseLI_Side, UseIG_Steps,
   TestIG_Pullquote, TestLI_Side, TestIG_Stack,
   UpdateIG_UI, UpdateLI_Changelog, UpdateIG_Big,
   EmailLaunch, EmailDigest, EmailWelcome */

// ─────────────────────────────────────────────────────────────
// Stratum case-study page — narrative chapters with the actual
// artboard components rendered inline as framed, scaled cards.
// ─────────────────────────────────────────────────────────────

// Per-format design dimensions
const DESIGN = {
  cover: { w: 760, h: 560 },
  ig:    { w: 600, h: 600 },
  li:    { w: 760, h: 398 },
  email: { w: 580, h: 760 },
};

function Chapter({ num, title, story, vibe, children }) {
  return (
    <section className="chapter">
      <div className="wrap">
        <div className="chapter-head">
          <div>
            <div className="chapter-num">{num}</div>
            <h2 className="chapter-title" dangerouslySetInnerHTML={{ __html: title }} />
          </div>
          <p className="chapter-story" dangerouslySetInnerHTML={{ __html: story }} />
        </div>

        <div className="ab-grid">{children}</div>

        {vibe && <p className="vibe" dangerouslySetInnerHTML={{ __html: vibe }} />}
      </div>
    </section>
  );
}

// Artboard — measures its frame width and scales the design-sized inner
// post via transform so the natural fonts/paddings don't overflow.
function Artboard({ format = "ig", mark, caption, children }) {
  const frameRef = React.useRef(null);
  const [scale, setScale] = React.useState(1);
  const design = DESIGN[format] || DESIGN.ig;

  React.useEffect(() => {
    const el = frameRef.current;
    if (!el) return;
    function update() {
      const w = el.clientWidth || 0;
      const s = w / design.w;
      setScale(s);
    }
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, [design.w]);

  return (
    <div className={"ab " + format}>
      <div className="ab-frame" ref={frameRef}>
        <div
          className="ab-inner"
          style={{
            width: design.w + "px",
            height: design.h + "px",
            transform: "scale(" + scale + ")",
            transformOrigin: "top left",
            position: "absolute",
            top: 0,
            left: 0,
          }}
        >
          {children}
        </div>
      </div>
      <div className="ab-cap">
        <span className="ab-cap-mark">{mark}</span>
        <span className="ab-cap-text" dangerouslySetInnerHTML={{ __html: caption }} />
      </div>
    </div>
  );
}

function App() {
  // Ensure body doesn't have the grain class (let the .post.grain children
  // control their own texture)
  React.useEffect(() => {
    document.body.classList.remove("no-grain");
  }, []);

  return (
    <React.Fragment>

      <Chapter
        num="00 · the system"
        title="The bones first. <em>Brand at a glance.</em>"
        story="Before any social post, the system had to exist. <b>Wordmark, palette, type, voice.</b> Cool oat paper, jet ink, cobalt as the only loud signal — and a structural visual language: registration corners, hairlines, monospaced labels. The version of Stratum a designer hands the marketing team on day one."
      >
        <Artboard format="cover" mark="cover · 760 × 560" caption="<em>The system at a glance</em> — wordmark, palette, type, scale.">
          <CoverBoard />
        </Artboard>
      </Chapter>

      <Chapter
        num="01 · the launch post"
        title="Three voices, <em>one essay.</em>"
        story="Same blog drop, three rooms. <b>Paper-grade</b> for the editorial reader who scrolls slowly. <b>Byline-led</b> for the LinkedIn skimmer who needs a face. <b>Dark numbered</b> for the cut you need to land — the one that has to stop the scroll cold."
      >
        <Artboard format="ig" mark="IG · 1:1 · paper-grade" caption="Editorial paper for the slow reader.">
          <BlogIG_Editorial />
        </Artboard>
        <Artboard format="li" mark="LinkedIn · 1.91:1 · byline" caption="Author-led for the skimmer.">
          <BlogLI_TwoCol />
        </Artboard>
        <Artboard format="ig" mark="IG · 1:1 · dark cut" caption="<em>The version that stops the scroll.</em>">
          <BlogIG_Dark />
        </Artboard>
      </Chapter>

      <Chapter
        num="02 · the proof"
        title="Same story, <em>three rooms.</em>"
        story="One customer, one outcome — dressed for the scroll. The <b>stat hero</b> for the impact-first scan, the <b>profile + quote</b> for the trust read, the <b>how-they-ship</b> sequence for the curious. Same proof. Three different exits."
      >
        <Artboard format="ig" mark="IG · stat hero" caption="The number that earned the post.">
          <UseIG_Stat />
        </Artboard>
        <Artboard format="li" mark="LinkedIn · profile + quote" caption="The customer says it best.">
          <UseLI_Side />
        </Artboard>
        <Artboard format="ig" mark="IG · how they ship" caption="<em>How they actually use it.</em>">
          <UseIG_Steps />
        </Artboard>
      </Chapter>

      <Chapter
        num="03 · the voices"
        title="Three shapes of <em>trust.</em>"
        story="Quotes from teams using Stratum. Same words, different scroll behavior. <b>Pull-quote</b> for the slow-down. <b>Side card</b> for the LinkedIn lurker who's scanning for names. <b>Stacked</b> for the proof wall — when three lines beat one paragraph."
      >
        <Artboard format="ig" mark="IG · pull-quote" caption="The one you save.">
          <TestIG_Pullquote />
        </Artboard>
        <Artboard format="li" mark="LinkedIn · side card" caption="The side endorsement.">
          <TestLI_Side />
        </Artboard>
        <Artboard format="ig" mark="IG · stacked" caption="<em>The trust stack.</em>">
          <TestIG_Stack />
        </Artboard>
      </Chapter>

      <Chapter
        num="04 · the changelog"
        title="Tiny ships, <em>big ships.</em>"
        story="Release moments are a brand surface too. <b>UI mock</b> for the proof-it-works moment. <b>LinkedIn changelog</b> for bullet-readers. <b>Big version</b> for the milestone you want people to actually remember."
      >
        <Artboard format="ig" mark="IG · UI mock" caption="Proof, in the product.">
          <UpdateIG_UI />
        </Artboard>
        <Artboard format="li" mark="LinkedIn · changelog" caption="What shipped this week.">
          <UpdateLI_Changelog />
        </Artboard>
        <Artboard format="ig" mark="IG · version bump" caption="<em>The version-bump moment.</em>">
          <UpdateIG_Big />
        </Artboard>
      </Chapter>

      <Chapter
        num="05 · the follow-up"
        title="Three emails that <em>close the loop.</em>"
        story="What lands in the inbox after the timeline scroll. A <b>launch</b> you can't miss. A <b>weekly digest</b> that earns the open. A <b>welcome</b> that doesn't feel automated. The brand's quietest surface — and the one people actually read."
        vibe="The system isn't 14 boards. It's <b>14 moments a new brand has to show up in</b> — and a voice that holds across all of them."
      >
        <Artboard format="email" mark="Email · product launch" caption="The one you actually open.">
          <EmailLaunch />
        </Artboard>
        <Artboard format="email" mark="Email · weekly digest" caption="The Friday catch-up.">
          <EmailDigest />
        </Artboard>
        <Artboard format="email" mark="Email · welcome" caption="<em>The one that doesn't feel automated.</em>">
          <EmailWelcome />
        </Artboard>
      </Chapter>

    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
