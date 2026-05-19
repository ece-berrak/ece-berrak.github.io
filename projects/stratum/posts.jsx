/* global React, BRAND, StratumMark, StratumWordmark, MonoLabel, Chip, Hair, Avatar, RegCorners, MiniUI */

// ─────────────────────────────────────────────────────────────
// Cover — brand identity board
// ─────────────────────────────────────────────────────────────
function CoverBoard() {
  return (
    <div className="post grain" style={{ padding: 44, position: "relative" }}>
      <RegCorners color="var(--ink)" />
      {/* Background grid */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: "linear-gradient(var(--ink-06) 1px, transparent 1px), linear-gradient(90deg, var(--ink-06) 1px, transparent 1px)",
        backgroundSize: "40px 40px",
        opacity: 0.7,
      }} />
      <div style={{ position: "relative", display: "flex", flexDirection: "column", height: "100%" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <StratumWordmark size={22} />
          <MonoLabel color="var(--muted)">stratum / social system · 2026</MonoLabel>
        </div>

        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", marginTop: 12 }}>
          <MonoLabel color="var(--cobalt)" style={{ marginBottom: 16 }}>v.01 · 14 boards</MonoLabel>
          <h1 className="font-display" style={{
            fontSize: 96, lineHeight: 0.88, margin: 0,
            letterSpacing: "-0.045em",
            fontWeight: 600,
            color: "var(--ink)",
            textTransform: "lowercase",
          }}>
            work,<br/>in layers.
          </h1>
          <p style={{
            marginTop: 22, maxWidth: 440,
            fontSize: 15.5, lineHeight: 1.5, color: "var(--ink-soft)",
          }}>
            Stratum is a productivity OS for product teams.
            Tasks, decisions, and docs stack on the same canvas —
            so the context is never far from the work.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 28, alignItems: "end" }}>
          <div>
            <MonoLabel color="var(--muted)" style={{ display: "block", marginBottom: 8 }}>Palette · 05</MonoLabel>
            <div style={{ display: "flex", gap: 0, border: "1px solid var(--ink-14)" }}>
              {[
                ["01", "Paper", "var(--paper)"],
                ["02", "Ink", "var(--ink)"],
                ["03", "Cobalt", "var(--cobalt)"],
                ["04", "Acid", "var(--acid)"],
                ["05", "Rust", "var(--rust)"],
              ].map(([n, name, c], i) => (
                <div key={n} style={{
                  flex: 1, height: 70, background: c,
                  borderLeft: i ? "1px solid var(--ink-14)" : "none",
                  position: "relative",
                  color: (c === "var(--paper)" || c === "var(--acid)") ? "var(--ink)" : "var(--paper)",
                  padding: 6,
                  display: "flex", flexDirection: "column", justifyContent: "space-between",
                }}>
                  <span className="font-mono" style={{ fontSize: 9, letterSpacing: "0.1em", opacity: 0.7 }}>{n}</span>
                  <span className="font-mono" style={{ fontSize: 9, letterSpacing: "0.1em", textTransform: "uppercase" }}>{name}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <MonoLabel color="var(--muted)" style={{ display: "block", marginBottom: 8 }}>Type · 03</MonoLabel>
            <div className="font-display" style={{ fontSize: 30, lineHeight: 1, letterSpacing: "-0.03em" }}>Space Grotesk</div>
            <div className="font-sans" style={{ fontSize: 14, marginTop: 4 }}>Geist · 400 / 500</div>
            <div className="font-mono" style={{ fontSize: 11, marginTop: 4, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--muted)" }}>IBM Plex Mono · labels</div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// BLOG ANNOUNCEMENTS
// ─────────────────────────────────────────────────────────────

// 1 — IG 1:1, technical paper
function BlogIG_Editorial() {
  return (
    <div className="post grain" style={{ padding: 44, position: "relative" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div className="font-mono" style={{ fontSize: 11, letterSpacing: "0.14em", color: "var(--ink)" }}>
          № 04 · 2026 <span style={{ color: "var(--muted)" }}>/ on the blog</span>
        </div>
        <MonoLabel color="var(--muted)">5 min</MonoLabel>
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <Hair color="var(--ink)" opacity={0.18} style={{ marginBottom: 18 }} />
        <h1 className="font-display" style={{
          fontSize: 52, lineHeight: 0.98, margin: 0,
          letterSpacing: "-0.035em",
          textWrap: "balance",
        }}>
          The case for versioned documents in a shared workspace.
        </h1>
        <Hair color="var(--ink)" opacity={0.18} style={{ marginTop: 22 }} />
      </div>

      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, minWidth: 0 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, minWidth: 0 }}>
          <Avatar size={32} seed={1} />
          <div style={{ minWidth: 0 }}>
            <div style={{ fontSize: 13, fontWeight: 500 }}>Lena Park</div>
            <div style={{ fontSize: 11, color: "var(--muted)" }}>Head of Product · May 19</div>
          </div>
        </div>
        <StratumWordmark size={13} />
      </div>
    </div>
  );
}

// 2 — LinkedIn 1.91:1, split cobalt + paper
function BlogLI_TwoCol() {
  return (
    <div className="post" style={{ display: "grid", gridTemplateColumns: "1.55fr 1fr" }}>
      <div className="grain" style={{
        background: "var(--cobalt)", color: "var(--paper)",
        padding: 32,
        display: "flex", flexDirection: "column", justifyContent: "space-between",
        position: "relative", overflow: "hidden",
      }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <StratumWordmark size={14} color="var(--paper)" accent="var(--acid)" />
          <MonoLabel color="var(--paper-60)">Field notes · 014</MonoLabel>
        </div>
        <h2 className="font-display" style={{
          fontSize: 40, lineHeight: 1, margin: 0,
          letterSpacing: "-0.035em",
          textWrap: "balance",
        }}>
          Why your roadmap keeps drifting — and five questions that pull it back.
        </h2>
      </div>
      <div className="grain" style={{
        background: "var(--paper)",
        padding: 28,
        display: "flex", flexDirection: "column", justifyContent: "space-between",
        gap: 16,
        position: "relative",
      }}>
        <MonoLabel color="var(--cobalt)">New essay</MonoLabel>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <Hair />
          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <Avatar size={36} seed={2} />
            <div style={{ minWidth: 0 }}>
              <div style={{ fontSize: 13, fontWeight: 500 }}>Mateo Alves</div>
              <div style={{ fontSize: 11, color: "var(--muted)" }}>CEO · Stratum</div>
            </div>
          </div>
          <Hair />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <MonoLabel color="var(--muted)">7 min</MonoLabel>
            <MonoLabel color="var(--muted)">19 / 05 / 26</MonoLabel>
          </div>
        </div>
      </div>
    </div>
  );
}

// 3 — IG 1:1, dark numbered
function BlogIG_Dark() {
  return (
    <div className="post dark grain" style={{ padding: 44, position: "relative" }}>
      <RegCorners color="var(--paper-60)" />
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <StratumWordmark size={14} color="var(--paper)" accent="var(--acid)" />
        <MonoLabel color="var(--paper-60)">issue 08 / 24</MonoLabel>
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
        <div className="font-display" style={{
          fontSize: 200, lineHeight: 0.8, margin: 0,
          letterSpacing: "-0.06em",
          color: "var(--acid)",
        }}>
          0.4
        </div>
        <div style={{ marginTop: 8, color: "var(--paper-60)" }}>
          <MonoLabel color="var(--paper-60)">on the blog —</MonoLabel>
        </div>
        <h1 className="font-display" style={{
          fontSize: 38, lineHeight: 1.02, margin: "8px 0 0",
          letterSpacing: "-0.03em",
          textWrap: "balance",
          maxWidth: 460,
        }}>
          We rebuilt our planning ritual around a single page.
        </h1>
        <p style={{
          marginTop: 14, maxWidth: 420,
          fontSize: 13.5, lineHeight: 1.55, color: "var(--paper-60)",
        }}>
          How twelve product teams traded scattered docs for one weekly canvas.
        </p>
        <div style={{ marginTop: 22, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Chip tone="paper">Read the post →</Chip>
          <MonoLabel color="var(--paper-60)">stratum.so/blog</MonoLabel>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// USE CASES
// ─────────────────────────────────────────────────────────────

// 1 — IG 1:1, big stat in cobalt
function UseIG_Stat() {
  return (
    <div className="post grain" style={{ padding: 44, position: "relative" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{
            width: 32, height: 32, background: "var(--ink)",
            color: "var(--paper)", display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <span className="font-display" style={{ fontSize: 16, letterSpacing: "-0.04em" }}>S</span>
          </div>
          <div className="font-mono" style={{ fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase" }}>
            Sequence Labs
          </div>
        </div>
        <Chip>Use case · 02</Chip>
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <MonoLabel color="var(--cobalt)">Sprint planning</MonoLabel>
        <div className="font-display" style={{
          fontSize: 220, lineHeight: 0.82, margin: "6px 0 0",
          letterSpacing: "-0.06em",
          color: "var(--cobalt)",
        }}>
          2.4<span style={{ color: "var(--ink)", fontSize: 90, verticalAlign: "top", marginLeft: 4 }}>×</span>
        </div>
        <p style={{
          marginTop: 14, maxWidth: 420,
          fontSize: 17, lineHeight: 1.35,
          letterSpacing: "-0.005em",
        }}>
          faster sprint planning after Sequence moved three tools into one Stratum canvas.
        </p>
      </div>

      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", minWidth: 0, gap: 12 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, minWidth: 0 }}>
          <Avatar size={32} seed={0} />
          <div style={{ fontSize: 12, minWidth: 0 }}>
            <div style={{ fontWeight: 500 }}>Priya Raman</div>
            <div style={{ color: "var(--muted)" }}>Head of Engineering · Sequence</div>
          </div>
        </div>
        <StratumMark size={20} />
      </div>
    </div>
  );
}

// 2 — LinkedIn — full cobalt, stat grid + quote
function UseLI_Side() {
  return (
    <div className="post cobalt grain" style={{ padding: 32, position: "relative" }}>
      <RegCorners color="var(--paper-60)" />
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <MonoLabel color="var(--paper-60)">Customer · Northwind</MonoLabel>
        <StratumWordmark size={13} color="var(--paper)" accent="var(--acid)" />
      </div>
      <div style={{
        flex: 1, display: "grid", gridTemplateColumns: "1.2fr 1fr",
        gap: 28, alignItems: "center", paddingTop: 14, minWidth: 0,
      }}>
        <div style={{ minWidth: 0 }}>
          <h2 className="font-display" style={{
            fontSize: 30, lineHeight: 1.05, margin: 0,
            letterSpacing: "-0.03em",
            textWrap: "balance",
          }}>
            “Every PRD, every decision, every standup — one keyboard shortcut away.”
          </h2>
          <div style={{ marginTop: 14, display: "flex", alignItems: "center", gap: 10 }}>
            <Avatar size={32} seed={3} />
            <div style={{ fontSize: 12 }}>
              <div style={{ fontWeight: 500 }}>Sasha Demir</div>
              <div style={{ opacity: 0.7 }}>VP Product · Northwind</div>
            </div>
          </div>
        </div>
        <div style={{
          display: "grid", gridTemplateColumns: "1fr 1fr",
          border: "1px solid var(--paper-32)",
        }}>
          {[
            ["220", "features shipped"],
            ["2.4×", "faster cycle"],
            ["−63%", "tools in stack"],
            ["100%", "PMs on-board"],
          ].map(([n, l], i) => (
            <div key={i} style={{
              padding: "14px 12px",
              borderRight: i % 2 === 0 ? "1px solid var(--paper-32)" : "none",
              borderTop: i >= 2 ? "1px solid var(--paper-32)" : "none",
            }}>
              <div className="font-display" style={{ fontSize: 26, letterSpacing: "-0.03em", lineHeight: 1 }}>{n}</div>
              <div className="font-mono" style={{ fontSize: 9, letterSpacing: "0.12em", textTransform: "uppercase", opacity: 0.75, marginTop: 6 }}>{l}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// 3 — IG — paper, three numbered steps
function UseIG_Steps() {
  return (
    <div className="post grain" style={{ padding: 40, position: "relative" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Chip>Playbook · 05</Chip>
        <MonoLabel color="var(--muted)">Mercer & Co</MonoLabel>
      </div>
      <h2 className="font-display" style={{
        fontSize: 32, lineHeight: 1.04, margin: "20px 0 0",
        letterSpacing: "-0.03em",
        textWrap: "balance",
      }}>
        How Mercer ships features <span style={{ color: "var(--cobalt)" }}>2× faster</span> on Stratum.
      </h2>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "flex-end", gap: 8, marginTop: 22 }}>
        {[
          ["01", "Brief", "Product writes the one-pager directly inside the task."],
          ["02", "Build", "Engineering threads decisions onto the same page — no Slack archeology."],
          ["03", "Ship", "Release notes auto-stack from the page's resolved blocks."],
        ].map(([n, h, body]) => (
          <div key={n} style={{
            display: "grid", gridTemplateColumns: "44px 1fr 16px",
            gap: 14, alignItems: "baseline",
            paddingTop: 12, paddingBottom: 12,
            borderTop: "1px solid var(--ink-14)",
          }}>
            <div className="font-mono" style={{ fontSize: 13, color: "var(--cobalt)", letterSpacing: "0.08em" }}>{n}</div>
            <div style={{ minWidth: 0 }}>
              <div style={{ fontSize: 16, fontWeight: 500, letterSpacing: "-0.01em" }}>{h}</div>
              <div style={{ fontSize: 12.5, color: "var(--muted)", marginTop: 2, lineHeight: 1.4 }}>{body}</div>
            </div>
            <span className="font-mono" style={{ fontSize: 13, color: "var(--ink-22)" }}>↗</span>
          </div>
        ))}
      </div>
      <div className="brand-row" style={{ marginTop: 14, paddingTop: 12, borderTop: "1px solid var(--ink-14)" }}>
        <StratumWordmark size={13} />
        <MonoLabel color="var(--muted)">stratum.so/cases</MonoLabel>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// TESTIMONIALS
// ─────────────────────────────────────────────────────────────

// 1 — IG, big quote (grotesk, not serif)
function TestIG_Pullquote() {
  return (
    <div className="post grain" style={{ padding: 44, position: "relative" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ display: "flex", gap: 4 }}>
          {[0,1,2,3,4].map(i => (
            <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill="var(--cobalt)" aria-hidden="true">
              <path d="M12 2l2.9 6.9 7.1.6-5.4 4.7 1.7 7-6.3-3.9-6.3 3.9 1.7-7L2 9.5l7.1-.6z"/>
            </svg>
          ))}
        </div>
        <MonoLabel color="var(--muted)">G2 · Verified</MonoLabel>
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <div className="font-display" style={{
          fontSize: 110, lineHeight: 0.7, color: "var(--cobalt)",
          letterSpacing: "-0.06em", margin: 0,
        }}>“</div>
        <p className="font-display" style={{
          fontSize: 36, lineHeight: 1.08, margin: "-4px 0 0",
          letterSpacing: "-0.03em",
          fontWeight: 500,
          textWrap: "balance",
        }}>
          Stratum is the first tool my whole team — design, eng, PM — actually opens on a Monday.
        </p>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 12, minWidth: 0 }}>
        <Avatar size={40} seed={1} />
        <div style={{ minWidth: 0, flex: 1 }}>
          <div style={{ fontSize: 13, fontWeight: 500 }}>Jordan Whitlock</div>
          <div style={{ fontSize: 11.5, color: "var(--muted)" }}>Founder · Halftone</div>
        </div>
        <StratumMark size={20} />
      </div>
    </div>
  );
}

// 2 — LinkedIn — cobalt left tile + quote right
function TestLI_Side() {
  return (
    <div className="post" style={{ display: "grid", gridTemplateColumns: "220px 1fr" }}>
      <div className="grain" style={{
        background: "var(--cobalt)",
        color: "var(--paper)",
        padding: 22,
        display: "flex", flexDirection: "column", justifyContent: "space-between",
        position: "relative", overflow: "hidden",
      }}>
        <MonoLabel color="var(--paper)">Customer story</MonoLabel>
        <div>
          <Avatar size={56} seed={3} />
          <div style={{ marginTop: 12, fontSize: 15, fontWeight: 500 }}>Yuki Tanaka</div>
          <div style={{ fontSize: 11.5, opacity: 0.78 }}>Design Lead · Compose</div>
        </div>
      </div>
      <div className="grain" style={{ padding: 32, display: "flex", flexDirection: "column", justifyContent: "center", background: "var(--paper)" }}>
        <div className="font-display" style={{ fontSize: 48, lineHeight: 0.7, color: "var(--cobalt)", letterSpacing: "-0.05em" }}>“</div>
        <p className="font-display" style={{
          fontSize: 24, lineHeight: 1.18, margin: "-2px 0 0",
          letterSpacing: "-0.025em",
          fontWeight: 500,
          textWrap: "balance",
        }}>
          We replaced four tools with Stratum and got back roughly a day a week. The shocking part is how quickly the team adopted it.
        </p>
        <div className="brand-row" style={{ marginTop: 18, paddingTop: 12, borderTop: "1px solid var(--ink-14)" }}>
          <StratumWordmark size={13} />
          <MonoLabel color="var(--muted)">stratum.so/customers</MonoLabel>
        </div>
      </div>
    </div>
  );
}

// 3 — IG — three stacked quote rows
function TestIG_Stack() {
  const items = [
    { q: "It feels like the tool finally caught up with how we actually work.", n: "Asha Vellani", r: "PM · Tidewater" },
    { q: "I closed Notion, Linear, and Loom in the same week. No regrets.", n: "Theo Berg", r: "Engineering · Sift" },
    { q: "Our standup is now a five-minute scroll of the same page.", n: "Imran Qadir", r: "Founder · Northstack" },
  ];
  return (
    <div className="post grain" style={{ padding: 36, position: "relative" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
        <div className="font-display" style={{ fontSize: 24, letterSpacing: "-0.03em" }}>Why teams switch.</div>
        <MonoLabel color="var(--muted)">3 of 1,400+</MonoLabel>
      </div>
      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", gap: 12 }}>
        {items.map((t, i) => (
          <div key={i} style={{
            background: i === 1 ? "var(--cobalt)" : "var(--paper-2)",
            color: i === 1 ? "var(--paper)" : "var(--ink)",
            border: "1px solid",
            borderColor: i === 1 ? "var(--cobalt)" : "var(--ink-14)",
            padding: "16px 18px",
            display: "grid",
            gridTemplateColumns: "auto 1fr",
            gap: 14,
            alignItems: "center",
            minWidth: 0,
          }}>
            <Avatar size={40} seed={i} />
            <div style={{ minWidth: 0 }}>
              <div className="font-display" style={{
                fontSize: 17, lineHeight: 1.22, letterSpacing: "-0.015em", fontWeight: 500,
              }}>“{t.q}”</div>
              <div style={{ fontSize: 11.5, opacity: i === 1 ? 0.78 : 1, color: i === 1 ? "inherit" : "var(--muted)", marginTop: 4 }}>
                <span style={{ fontWeight: 500, color: i === 1 ? "inherit" : "var(--ink)" }}>{t.n}</span> · {t.r}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="brand-row" style={{ marginTop: 14 }}>
        <StratumWordmark size={13} />
        <MonoLabel color="var(--muted)">stratum.so</MonoLabel>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// PRODUCT UPDATES
// ─────────────────────────────────────────────────────────────

// 1 — IG, UI mock + bullets
function UpdateIG_UI() {
  return (
    <div className="post grain" style={{ padding: 36, position: "relative" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Chip tone="cobalt">What's new</Chip>
        <MonoLabel color="var(--muted)">v2.4 · 19 / 05 / 26</MonoLabel>
      </div>
      <h2 className="font-display" style={{
        fontSize: 30, lineHeight: 1.02, margin: "16px 0 4px",
        letterSpacing: "-0.03em",
      }}>
        Stacked views, faster everything.
      </h2>
      <p style={{ fontSize: 13, color: "var(--ink-soft)", maxWidth: 400, margin: "2px 0 0" }}>
        Long-requested upgrades to how you arrange and filter work in Stratum.
      </p>

      <div style={{ marginTop: 14 }}>
        <MiniUI accent="var(--cobalt)" />
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "flex-end", marginTop: 14 }}>
        {[
          ["Stacked views", "Pin up to three views side by side."],
          ["Smart filters", "Save filter combos as named lenses."],
          ["80 ms paint", "Lists feel instant — even at 5k rows."],
        ].map(([h, b], i, arr) => (
          <div key={h} style={{
            display: "grid", gridTemplateColumns: "16px 1fr",
            gap: 12, padding: "8px 0",
            borderTop: "1px solid var(--ink-10)",
            borderBottom: i === arr.length - 1 ? "1px solid var(--ink-10)" : "none",
            alignItems: "baseline",
          }}>
            <span style={{ display: "inline-block", width: 7, height: 7, background: "var(--cobalt)", marginTop: 6 }} />
            <div style={{ minWidth: 0 }}>
              <div style={{ fontSize: 13.5, fontWeight: 500 }}>{h}</div>
              <div style={{ fontSize: 12, color: "var(--muted)", marginTop: 1 }}>{b}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="brand-row" style={{ marginTop: 12 }}>
        <StratumWordmark size={13} />
        <MonoLabel color="var(--muted)">stratum.so/changelog</MonoLabel>
      </div>
    </div>
  );
}

// 2 — LinkedIn — changelog
function UpdateLI_Changelog() {
  return (
    <div className="post grain" style={{ padding: "28px 36px", position: "relative" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <StratumMark size={22} />
          <MonoLabel color="var(--muted)">changelog</MonoLabel>
          <Chip tone="cobalt">v2.4</Chip>
        </div>
        <MonoLabel color="var(--muted)">19 / 05 / 2026</MonoLabel>
      </div>
      <div style={{ flex: 1, display: "grid", gridTemplateColumns: "1fr 1.05fr", gap: 28, alignItems: "center", paddingTop: 14, minWidth: 0 }}>
        <div style={{ minWidth: 0 }}>
          <h2 className="font-display" style={{ fontSize: 36, lineHeight: 1.02, margin: 0, letterSpacing: "-0.035em", textWrap: "balance" }}>
            Stacked views, smart filters, and a faster list.
          </h2>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 7, minWidth: 0 }}>
          {[
            ["+", "Side-by-side stacked views", "var(--cobalt)"],
            ["+", "Saved filter lenses with shortcuts", "var(--cobalt)"],
            ["+", "Bulk reorder via keyboard", "var(--cobalt)"],
            ["Δ", "List paint: 240 ms → 80 ms", "var(--ink)"],
            ["−", "Removed legacy Kanban sidebar", "var(--rust)"],
          ].map(([sym, t, c], i) => (
            <div key={i} style={{ display: "grid", gridTemplateColumns: "22px 1fr", gap: 10, alignItems: "center", minWidth: 0 }}>
              <span className="font-mono" style={{ fontSize: 12, color: c, fontWeight: 500 }}>{sym}</span>
              <span style={{ fontSize: 13, lineHeight: 1.3 }}>{t}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// 3 — IG, huge version on acid bg
function UpdateIG_Big() {
  return (
    <div className="post dark grain" style={{ padding: 44, position: "relative" }}>
      <RegCorners color="var(--paper-60)" />
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <StratumWordmark size={14} color="var(--paper)" accent="var(--acid)" />
        <Chip tone="acid">Now rolling out</Chip>
      </div>
      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start" }}>
        <MonoLabel color="var(--acid)">Stratum release</MonoLabel>
        <div className="font-display" style={{
          fontSize: 230, lineHeight: 0.78, margin: "4px 0 0",
          letterSpacing: "-0.07em",
          color: "var(--paper)",
        }}>
          v2<span style={{ color: "var(--acid)" }}>.4</span>
        </div>
        <div className="font-display" style={{
          fontSize: 26, lineHeight: 1.1, margin: "16px 0 0",
          letterSpacing: "-0.025em",
          maxWidth: 460,
          fontWeight: 500,
        }}>
          Meet <span style={{ color: "var(--acid)" }}>Stacked Views</span> — three perspectives on the same plan, at once.
        </div>
      </div>
      <div className="brand-row">
        <MonoLabel color="var(--paper-60)">19 / 05 / 2026</MonoLabel>
        <MonoLabel color="var(--paper-60)">stratum.so/changelog</MonoLabel>
      </div>
    </div>
  );
}

Object.assign(window, {
  CoverBoard,
  BlogIG_Editorial, BlogLI_TwoCol, BlogIG_Dark,
  UseIG_Stat, UseLI_Side, UseIG_Steps,
  TestIG_Pullquote, TestLI_Side, TestIG_Stack,
  UpdateIG_UI, UpdateLI_Changelog, UpdateIG_Big,
});
