/* global React, ReactDOM,
   VCoverBoard,
   VBlogIG_Editorial, VBlogLI_TwoCol, VBlogIG_Dark,
   VUseIG_Stat, VUseLI_Side, VUseIG_Steps,
   VTestIG_Pullquote, VTestLI_Side, VTestIG_Stack,
   VUpdateIG_UI, VUpdateLI_Changelog, VUpdateIG_Big,
   VEmailLaunch, VEmailDigest, VEmailWelcome */

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

function Artboard({ format = "ig", mark, caption, children }) {
  const frameRef = React.useRef(null);
  const [scale, setScale] = React.useState(1);
  const design = DESIGN[format] || DESIGN.ig;

  React.useEffect(() => {
    const el = frameRef.current;
    if (!el) return;
    function update() {
      const w = el.clientWidth || 0;
      setScale(w / design.w);
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
  return (
    <React.Fragment>

      <Chapter
        num="00 · the system"
        title="A loud, live brand for <em>quiet decisions.</em>"
        story="Revenue numbers don't get a second of attention. So Volt's brand earns the second it needs. <b>Electric lime, slate ink, pure-white surface</b> — a wordmark with a sparkline glyph, a tabular voice, and zero grain. Where Stratum whispers, Volt punches."
      >
        <Artboard format="cover" mark="cover · 760 × 560" caption="<em>The system at a glance</em> — wordmark, palette, type, voice.">
          <VCoverBoard />
        </Artboard>
      </Chapter>

      <Chapter
        num="01 · the launch post"
        title="Three openers for <em>the same essay.</em>"
        story="Volt's announcement post drops three ways. <b>Editorial</b> for the long-read crowd. <b>LinkedIn chart split</b> for the operator who's scanning for numbers. <b>Dark numbered</b> for the slide you want screenshotted into Slack at 11pm."
      >
        <Artboard format="ig" mark="IG · 1:1 · editorial" caption="The long-read opener.">
          <VBlogIG_Editorial />
        </Artboard>
        <Artboard format="li" mark="LinkedIn · 1.91:1 · chart split" caption="Chart-first for the operator.">
          <VBlogLI_TwoCol />
        </Artboard>
        <Artboard format="ig" mark="IG · 1:1 · dark numbered" caption="<em>The slack-at-11pm screenshot.</em>">
          <VBlogIG_Dark />
        </Artboard>
      </Chapter>

      <Chapter
        num="02 · the proof"
        title="The dollar that <em>moved.</em>"
        story="Volt's use cases lead with money. <b>$ stat hero</b> for the impact-first scan. <b>Stat grid + quote</b> for the deck-ready version. <b>How they ship</b> for the curious operator who actually wants to know the playbook."
      >
        <Artboard format="ig" mark="IG · $ stat hero" caption="The number that closed the meeting.">
          <VUseIG_Stat />
        </Artboard>
        <Artboard format="li" mark="LinkedIn · stat grid + quote" caption="Deck-ready in one card.">
          <VUseLI_Side />
        </Artboard>
        <Artboard format="ig" mark="IG · how they ship" caption="<em>The playbook, in steps.</em>">
          <VUseIG_Steps />
        </Artboard>
      </Chapter>

      <Chapter
        num="03 · the voices"
        title="Three shapes <em>of receipts.</em>"
        story="Customer words, in three different voices. <b>Pull-quote</b> for the one you save. <b>Side card</b> for the LinkedIn lurker scanning for names. <b>Stacked quotes</b> for the trust wall — three lines, three teams, one signal."
      >
        <Artboard format="ig" mark="IG · pull-quote" caption="The one you save.">
          <VTestIG_Pullquote />
        </Artboard>
        <Artboard format="li" mark="LinkedIn · side card" caption="The named-name endorsement.">
          <VTestLI_Side />
        </Artboard>
        <Artboard format="ig" mark="IG · stacked" caption="<em>The trust wall.</em>">
          <VTestIG_Stack />
        </Artboard>
      </Chapter>

      <Chapter
        num="04 · the changelog"
        title="Shipped, <em>loudly.</em>"
        story="Volt ships fast. The brand had to match. <b>UI mock</b> proves it in the product. <b>LinkedIn changelog</b> for the operator who reads bullets. <b>Big version</b> for the milestone you want people to actually screenshot."
      >
        <Artboard format="ig" mark="IG · UI mock" caption="Proof, in the product.">
          <VUpdateIG_UI />
        </Artboard>
        <Artboard format="li" mark="LinkedIn · changelog" caption="What shipped this week.">
          <VUpdateLI_Changelog />
        </Artboard>
        <Artboard format="ig" mark="IG · version bump" caption="<em>The screenshot-worthy moment.</em>">
          <VUpdateIG_Big />
        </Artboard>
      </Chapter>

      <Chapter
        num="05 · the follow-up"
        title="Inbox, but <em>at full voltage.</em>"
        story="Volt's emails are the brand's last mile. A <b>launch</b> you can't miss. A <b>weekly digest</b> that earns the open. A <b>welcome</b> that doesn't feel automated — even though every line is."
        vibe="Two brands. One voice across all of it. <b>Stratum whispers, Volt punches</b> — but both ship as full systems on day one."
      >
        <Artboard format="email" mark="Email · launch" caption="The one you actually open.">
          <VEmailLaunch />
        </Artboard>
        <Artboard format="email" mark="Email · weekly digest" caption="The Monday-morning number.">
          <VEmailDigest />
        </Artboard>
        <Artboard format="email" mark="Email · welcome" caption="<em>The one that doesn't feel automated.</em>">
          <VEmailWelcome />
        </Artboard>
      </Chapter>

    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
