/* global React, VBRAND, VoltMark, VoltWordmark, VMono, VChip, VHair, VAvatar, VSparkline, VBars, VDelta, VMiniUI */

// ─────────────────────────────────────────────────────────────
// Cover — brand identity board
// ─────────────────────────────────────────────────────────────
function VCoverBoard() {
  return (
    <div className="v-post v-grid" style={{ padding: 44, position: "relative" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", position: "relative" }}>
        <VoltWordmark size={22} />
        <VMono color="var(--v-steel)">volt / social system · 2026</VMono>
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", marginTop: 12, position: "relative" }}>
        <VMono color="var(--v-coral)" style={{ marginBottom: 14, letterSpacing: "0.1em", textTransform: "uppercase" }}>v.01 · 14 boards</VMono>
        <h1 className="v-display" style={{
          fontSize: 68, lineHeight: 1, margin: 0,
          letterSpacing: "-0.04em",
          fontWeight: 700,
          color: "var(--v-ink)",
        }}>
          Pulse on<br/>every dollar.
        </h1>
        <p style={{
          marginTop: 16, maxWidth: 430,
          fontSize: 14.5, lineHeight: 1.5, color: "var(--v-ink-soft)",
        }}>
          Volt is the revenue intelligence platform for B2B teams.
          Pipelines, forecasts, and signals — auto-stitched from your
          stack, surfaced as one live picture.
        </p>
        <div style={{ marginTop: 18, padding: 12, background: "var(--v-paper-2)", border: "1px solid var(--v-ink-08)", display: "flex", alignItems: "center", gap: 14 }}>
          <VSparkline data={[18, 22, 19, 28, 26, 34, 40, 38, 52, 60, 58, 74]} width={180} height={32} color="var(--v-ink)" />
          <div>
            <div className="v-display" style={{ fontSize: 22, lineHeight: 1, letterSpacing: "-0.03em" }}>$3.2M ARR</div>
            <VDelta value="+38% QoQ" positive style={{ marginTop: 4 }} />
          </div>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 24, alignItems: "end", position: "relative" }}>
        <div>
          <VMono color="var(--v-steel)" style={{ display: "block", marginBottom: 8, letterSpacing: "0.1em", textTransform: "uppercase" }}>Palette · 05</VMono>
          <div style={{ display: "flex", gap: 0, border: "1px solid var(--v-ink-12)" }}>
            {[
              ["01", "Paper", "var(--v-paper)"],
              ["02", "Ink", "var(--v-ink)"],
              ["03", "Lime", "var(--v-lime)"],
              ["04", "Coral", "var(--v-coral)"],
              ["05", "Sky", "var(--v-sky)"],
            ].map(([n, name, c], i) => (
              <div key={n} style={{
                flex: 1, height: 64, background: c,
                borderLeft: i ? "1px solid var(--v-ink-12)" : "none",
                color: (c === "var(--v-paper)" || c === "var(--v-lime)") ? "var(--v-ink)" : "var(--v-paper)",
                padding: 6,
                display: "flex", flexDirection: "column", justifyContent: "space-between",
              }}>
                <span className="v-mono" style={{ fontSize: 9, opacity: 0.7 }}>{n}</span>
                <span className="v-mono" style={{ fontSize: 9, textTransform: "uppercase", letterSpacing: "0.06em" }}>{name}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <VMono color="var(--v-steel)" style={{ display: "block", marginBottom: 8, letterSpacing: "0.1em", textTransform: "uppercase" }}>Type · 03</VMono>
          <div className="v-display" style={{ fontSize: 28, lineHeight: 1.05, letterSpacing: "-0.03em" }}>Bricolage Grotesque</div>
          <div className="v-sans" style={{ fontSize: 13, marginTop: 2 }}>DM Sans · 400 / 500</div>
          <div className="v-mono" style={{ fontSize: 11, marginTop: 2, color: "var(--v-steel)" }}>JetBrains Mono · numerics</div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// BLOG ANNOUNCEMENTS
// ─────────────────────────────────────────────────────────────

// 1 — IG, white editorial
function VBlogIG_Editorial() {
  return (
    <div className="v-post" style={{ padding: 44, position: "relative" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <VChip dot tone="ink">On the blog · 04</VChip>
        <VMono color="var(--v-steel)">5 MIN · MAY 19</VMono>
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <VHair style={{ marginBottom: 18 }} />
        <h1 className="v-display" style={{
          fontSize: 46, lineHeight: 1.04, margin: 0,
          letterSpacing: "-0.035em",
          textWrap: "balance",
          fontWeight: 600,
        }}>
          The forecast you trust is the one you can <span style={{ color: "var(--v-coral)" }}>recalculate</span> live.
        </h1>
        <VHair style={{ marginTop: 22 }} />
      </div>

      <div className="v-row">
        <div style={{ display: "flex", alignItems: "center", gap: 10, minWidth: 0 }}>
          <VAvatar size={32} seed={2} />
          <div style={{ minWidth: 0 }}>
            <div style={{ fontSize: 13, fontWeight: 500 }}>Lena Park</div>
            <div style={{ fontSize: 11, color: "var(--v-steel)" }}>Head of RevOps</div>
          </div>
        </div>
        <VoltWordmark size={13} />
      </div>
    </div>
  );
}

// 2 — LinkedIn 1.91:1, chart left + headline right
function VBlogLI_TwoCol() {
  return (
    <div className="v-post" style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr" }}>
      <div style={{
        background: "var(--v-ink)", color: "var(--v-paper)",
        padding: 28,
        display: "flex", flexDirection: "column", justifyContent: "space-between",
        position: "relative", overflow: "hidden",
      }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <VoltWordmark size={13} tone="lime" color="var(--v-paper)" />
          <VMono color="var(--v-paper-60)">Q2 PIPELINE</VMono>
        </div>
        <div>
          <VMono color="var(--v-paper-60)" style={{ marginBottom: 6, letterSpacing: "0.1em" }}>FORECAST · 90D</VMono>
          <div className="v-display" style={{ fontSize: 34, letterSpacing: "-0.035em", lineHeight: 1 }}>
            $4.8M
          </div>
          <VSparkline data={[40, 38, 44, 50, 48, 56, 62, 70, 68, 80, 92, 100]} width={260} height={48} color="var(--v-lime)" />
          <VDelta value="+38% vs plan" positive style={{ marginTop: 8 }} />
        </div>
      </div>
      <div style={{
        background: "var(--v-paper)",
        padding: 30,
        display: "flex", flexDirection: "column", justifyContent: "center",
        gap: 14,
      }}>
        <VChip tone="outline">New essay</VChip>
        <h2 className="v-display" style={{
          fontSize: 30, lineHeight: 1.08, margin: 0,
          letterSpacing: "-0.035em",
          textWrap: "balance",
          fontWeight: 600,
        }}>
          Stop forecasting in spreadsheets. Start forecasting on signal.
        </h2>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 4 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <VAvatar size={28} seed={1} />
            <div style={{ fontSize: 11.5 }}>
              <span style={{ fontWeight: 500 }}>Mateo Alves</span>
              <span style={{ color: "var(--v-steel)" }}> · CEO</span>
            </div>
          </div>
          <VMono color="var(--v-steel)">7 MIN</VMono>
        </div>
      </div>
    </div>
  );
}

// 3 — IG dark, big issue + lime accent
function VBlogIG_Dark() {
  return (
    <div className="v-post dark v-grid" style={{ padding: 44, position: "relative" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", position: "relative" }}>
        <VoltWordmark size={13} tone="lime" color="var(--v-paper)" />
        <VMono color="var(--v-paper-60)">ISSUE 08 · 24</VMono>
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "flex-end", position: "relative" }}>
        <div className="v-display" style={{
          fontSize: 130, lineHeight: 1.06, margin: 0,
          letterSpacing: "-0.06em",
          color: "var(--v-lime)",
          fontWeight: 700,
        }}>
          0.4
        </div>
        <VMono color="var(--v-paper-60)" style={{ marginTop: 4, letterSpacing: "0.1em", textTransform: "uppercase" }}>on the blog —</VMono>
        <h1 className="v-display" style={{
          fontSize: 32, lineHeight: 1.1, margin: "8px 0 0",
          letterSpacing: "-0.03em",
          textWrap: "balance",
          maxWidth: 460,
          fontWeight: 600,
        }}>
          What twelve RevOps leaders changed about <span style={{ color: "var(--v-lime)" }}>forecasting</span> in 2026.
        </h1>
        <p style={{
          marginTop: 14, maxWidth: 420,
          fontSize: 13.5, lineHeight: 1.55, color: "var(--v-paper-60)",
        }}>
          Field notes from a quiet shift in how revenue teams plan.
        </p>
        <div style={{ marginTop: 20, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <VChip tone="lime">Read the post →</VChip>
          <VMono color="var(--v-paper-60)">volt.so/blog</VMono>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// USE CASES
// ─────────────────────────────────────────────────────────────

// 1 — IG, big $ recovered
function VUseIG_Stat() {
  return (
    <div className="v-post" style={{ padding: 44, position: "relative" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{
            width: 30, height: 30, background: "var(--v-ink)",
            color: "var(--v-paper)", display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <span className="v-display" style={{ fontSize: 14, letterSpacing: "-0.04em" }}>N</span>
          </div>
          <VMono style={{ letterSpacing: "0.1em", textTransform: "uppercase" }}>Northwind</VMono>
        </div>
        <VChip dot tone="ink">Use case · 02</VChip>
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <VMono color="var(--v-coral)" style={{ letterSpacing: "0.1em", textTransform: "uppercase" }}>Pipeline recovered</VMono>
        <div className="v-display" style={{
          fontSize: 130, lineHeight: 1.08, margin: "6px 0 0",
          letterSpacing: "-0.055em",
          color: "var(--v-ink)",
          fontWeight: 700,
        }}>
          $3.2<span style={{ color: "var(--v-coral)" }}>M</span>
        </div>
        <div style={{ marginTop: 14, display: "flex", alignItems: "center", gap: 14 }}>
          <VBars data={[30, 42, 38, 55, 48, 38, 62, 72, 80, 90]} width={140} height={40} color="var(--v-ink-22)" highlight="var(--v-lime)" />
          <VDelta value="+38% QoQ" positive />
        </div>
        <p style={{
          marginTop: 14, maxWidth: 420,
          fontSize: 15, lineHeight: 1.4,
        }}>
          Volt surfaced 47 stalled deals before quarter-close. Northwind closed them.
        </p>
      </div>

      <div className="v-row">
        <div style={{ display: "flex", alignItems: "center", gap: 10, minWidth: 0 }}>
          <VAvatar size={30} seed={3} />
          <div style={{ fontSize: 12, minWidth: 0 }}>
            <div style={{ fontWeight: 500 }}>Sasha Demir</div>
            <div style={{ color: "var(--v-steel)" }}>VP Sales · Northwind</div>
          </div>
        </div>
        <VoltMark size={20} />
      </div>
    </div>
  );
}

// 2 — LinkedIn — lime split with stats + quote
function VUseLI_Side() {
  return (
    <div className="v-post" style={{ padding: 30, position: "relative" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <VMono color="var(--v-coral)" style={{ letterSpacing: "0.1em", textTransform: "uppercase" }}>Customer · Mercer Bio</VMono>
        <VoltWordmark size={13} />
      </div>
      <div style={{
        flex: 1, display: "grid", gridTemplateColumns: "1.05fr 1fr",
        gap: 26, alignItems: "center", paddingTop: 12, minWidth: 0,
      }}>
        <div style={{ minWidth: 0 }}>
          <h2 className="v-display" style={{
            fontSize: 24, lineHeight: 1.14, margin: 0,
            letterSpacing: "-0.03em",
            textWrap: "balance",
            fontWeight: 600,
          }}>
            “Our forecast went from a Friday spreadsheet to a live read of every deal in flight.”
          </h2>
          <div style={{ marginTop: 14, display: "flex", alignItems: "center", gap: 10 }}>
            <VAvatar size={30} seed={1} />
            <div style={{ fontSize: 12 }}>
              <div style={{ fontWeight: 500 }}>Priya Raman</div>
              <div style={{ color: "var(--v-steel)" }}>CRO · Mercer Bio</div>
            </div>
          </div>
        </div>
        <div style={{
          display: "grid", gridTemplateColumns: "1fr 1fr",
          border: "1px solid var(--v-ink-22)",
        }}>
          {[
            ["+$2.4M", "pipeline recovered"],
            ["−54%", "stalled deals"],
            ["3.2×", "forecast accuracy"],
            ["100%", "reps on platform"],
          ].map(([n, l], i) => (
            <div key={i} style={{
              padding: "12px 12px",
              borderRight: i % 2 === 0 ? "1px solid var(--v-ink-22)" : "none",
              borderTop: i >= 2 ? "1px solid var(--v-ink-22)" : "none",
              background: i === 0 ? "var(--v-lime)" : "transparent",
            }}>
              <div className="v-display" style={{ fontSize: 22, letterSpacing: "-0.035em", lineHeight: 1.1, fontWeight: 700 }}>{n}</div>
              <div className="v-mono" style={{ fontSize: 9, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--v-steel)", marginTop: 6 }}>{l}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// 3 — IG, three-step playbook
function VUseIG_Steps() {
  return (
    <div className="v-post" style={{ padding: 40, position: "relative" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <VChip dot tone="ink">Playbook · 05</VChip>
        <VMono color="var(--v-steel)">SEQUENCE LABS</VMono>
      </div>
      <h2 className="v-display" style={{
        fontSize: 30, lineHeight: 1.08, margin: "18px 0 0",
        letterSpacing: "-0.03em",
        textWrap: "balance",
        fontWeight: 600,
      }}>
        How Sequence rebuilt forecasting in <span style={{ background: "var(--v-lime)", padding: "0 6px" }}>90 days</span>.
      </h2>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "flex-end", gap: 8, marginTop: 20 }}>
        {[
          ["01", "Stitch the stack", "Connect CRM, billing, and CS into one live ledger.", "+$1.2M"],
          ["02", "Score every deal", "Volt's signal model flags stalls 21 days early.", "−54%"],
          ["03", "Recalculate live", "Forecast re-renders on every change. No more Fridays.", "3.2×"],
        ].map(([n, h, body, metric]) => (
          <div key={n} style={{
            display: "grid", gridTemplateColumns: "40px 1fr auto",
            gap: 14, alignItems: "baseline",
            paddingTop: 12, paddingBottom: 12,
            borderTop: "1px solid var(--v-ink-12)",
          }}>
            <div className="v-mono" style={{ fontSize: 12, color: "var(--v-coral)", letterSpacing: "0.06em" }}>{n}</div>
            <div style={{ minWidth: 0 }}>
              <div style={{ fontSize: 15, fontWeight: 500, letterSpacing: "-0.01em" }}>{h}</div>
              <div style={{ fontSize: 12.5, color: "var(--v-steel)", marginTop: 2, lineHeight: 1.4 }}>{body}</div>
            </div>
            <div className="v-display" style={{ fontSize: 18, letterSpacing: "-0.025em", fontWeight: 700, color: "var(--v-ink)" }}>{metric}</div>
          </div>
        ))}
      </div>
      <div className="v-row" style={{ marginTop: 12, paddingTop: 12, borderTop: "1px solid var(--v-ink-12)" }}>
        <VoltWordmark size={13} />
        <VMono color="var(--v-steel)">volt.so/cases</VMono>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// TESTIMONIALS
// ─────────────────────────────────────────────────────────────

// 1 — IG pull-quote
function VTestIG_Pullquote() {
  return (
    <div className="v-post" style={{ padding: 44, position: "relative" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ display: "flex", gap: 4 }}>
          {[0,1,2,3,4].map(i => (
            <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="var(--v-ink)" aria-hidden="true">
              <path d="M12 2l2.9 6.9 7.1.6-5.4 4.7 1.7 7-6.3-3.9-6.3 3.9 1.7-7L2 9.5l7.1-.6z"/>
            </svg>
          ))}
        </div>
        <VMono color="var(--v-steel)">G2 · Top 50 in Sales</VMono>
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: 14 }}>
          <div className="v-display" style={{
            fontSize: 80, lineHeight: 0.95, color: "var(--v-lime)",
            letterSpacing: "-0.04em", margin: 0, fontWeight: 700,
            background: "var(--v-ink)",
            padding: "0 12px 6px",
          }}>
            “
          </div>
        </div>
        <p className="v-display" style={{
          fontSize: 32, lineHeight: 1.18, margin: "12px 0 0",
          letterSpacing: "-0.03em",
          fontWeight: 600,
          textWrap: "balance",
        }}>
          Volt is the only tool my CRO opens before her first coffee.
        </p>
      </div>

      <div className="v-row">
        <div style={{ display: "flex", alignItems: "center", gap: 12, minWidth: 0 }}>
          <VAvatar size={40} seed={2} />
          <div style={{ minWidth: 0 }}>
            <div style={{ fontSize: 13, fontWeight: 500 }}>Jordan Whitlock</div>
            <div style={{ fontSize: 11.5, color: "var(--v-steel)" }}>VP RevOps · Halftone</div>
          </div>
        </div>
        <VoltMark size={22} />
      </div>
    </div>
  );
}

// 2 — LinkedIn split testimonial
function VTestLI_Side() {
  return (
    <div className="v-post" style={{ display: "grid", gridTemplateColumns: "230px 1fr" }}>
      <div style={{
        background: "var(--v-lime)",
        color: "var(--v-ink)",
        padding: 22,
        display: "flex", flexDirection: "column", justifyContent: "space-between",
      }}>
        <VMono>CUSTOMER STORY</VMono>
        <div>
          <VAvatar size={54} seed={3} />
          <div style={{ marginTop: 10, fontSize: 14, fontWeight: 600 }}>Yuki Tanaka</div>
          <div style={{ fontSize: 11.5 }}>CRO · Compose</div>
          <VDelta value="+220% pipeline" positive style={{ marginTop: 10, background: "var(--v-ink)", color: "var(--v-lime)" }} />
        </div>
      </div>
      <div style={{ padding: 30, display: "flex", flexDirection: "column", justifyContent: "center", background: "var(--v-paper)" }}>
        <div className="v-display" style={{ fontSize: 60, lineHeight: 0.95, color: "var(--v-lime)", letterSpacing: "-0.05em", height: 36, overflow: "visible", fontWeight: 700 }}>“</div>
        <p className="v-display" style={{
          fontSize: 22, lineHeight: 1.24, margin: "10px 0 0",
          letterSpacing: "-0.025em",
          fontWeight: 600,
          textWrap: "balance",
        }}>
          We pulled four dashboards out of the stack and replaced them with Volt. Now the whole team reads the same number.
        </p>
        <div className="v-row" style={{ marginTop: 16, paddingTop: 12, borderTop: "1px solid var(--v-ink-12)" }}>
          <VoltWordmark size={12} />
          <VMono color="var(--v-steel)">volt.so/customers</VMono>
        </div>
      </div>
    </div>
  );
}

// 3 — IG three stacked
function VTestIG_Stack() {
  const items = [
    { q: "It feels like the dashboard finally caught up with the deal.", n: "Asha Vellani", r: "RevOps · Tidewater", d: "+44%" },
    { q: "Our pipeline meeting went from 45 minutes to ten.", n: "Theo Berg", r: "VP Sales · Sift", d: "−72%" },
    { q: "I trust the forecast for the first time in my career.", n: "Imran Qadir", r: "CRO · Northstack", d: "3.1×" },
  ];
  return (
    <div className="v-post" style={{ padding: 32, position: "relative" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
        <div className="v-display" style={{ fontSize: 22, letterSpacing: "-0.03em", fontWeight: 600 }}>Why CROs switch to Volt.</div>
        <VMono color="var(--v-steel)">3 OF 1,400+</VMono>
      </div>
      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", gap: 11 }}>
        {items.map((t, i) => (
          <div key={i} style={{
            background: i === 1 ? "var(--v-ink)" : "var(--v-paper-2)",
            color: i === 1 ? "var(--v-paper)" : "var(--v-ink)",
            border: "1px solid",
            borderColor: i === 1 ? "var(--v-ink)" : "var(--v-ink-12)",
            padding: "14px 16px",
            display: "grid",
            gridTemplateColumns: "auto 1fr auto",
            gap: 12,
            alignItems: "center",
            minWidth: 0,
          }}>
            <VAvatar size={38} seed={i + 1} />
            <div style={{ minWidth: 0 }}>
              <div className="v-display" style={{
                fontSize: 16, lineHeight: 1.22, letterSpacing: "-0.02em", fontWeight: 600,
              }}>“{t.q}”</div>
              <div className="v-mono" style={{ fontSize: 10, opacity: i === 1 ? 0.78 : 1, color: i === 1 ? "inherit" : "var(--v-steel)", marginTop: 4, letterSpacing: "0.04em" }}>
                {t.n} · {t.r}
              </div>
            </div>
            <div className="v-display" style={{ fontSize: 18, letterSpacing: "-0.03em", fontWeight: 700, color: i === 1 ? "var(--v-lime)" : "var(--v-ink)" }}>{t.d}</div>
          </div>
        ))}
      </div>
      <div className="v-row" style={{ marginTop: 12 }}>
        <VoltWordmark size={13} />
        <VMono color="var(--v-steel)">volt.so</VMono>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// PRODUCT UPDATES
// ─────────────────────────────────────────────────────────────

// 1 — IG, UI mock
function VUpdateIG_UI() {
  return (
    <div className="v-post" style={{ padding: 36, position: "relative" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <VChip tone="lime" dot>WHAT'S NEW</VChip>
        <VMono color="var(--v-steel)">v4.2 · 19 / 05 / 26</VMono>
      </div>
      <h2 className="v-display" style={{
        fontSize: 28, lineHeight: 1.06, margin: "16px 0 4px",
        letterSpacing: "-0.035em",
        fontWeight: 600,
      }}>
        Live forecasts and a faster pipeline view.
      </h2>
      <p style={{ fontSize: 13, color: "var(--v-ink-soft)", maxWidth: 420, margin: "2px 0 0" }}>
        Long-requested upgrades to how you forecast and triage deals in Volt.
      </p>

      <div style={{ marginTop: 14 }}>
        <VMiniUI accent="var(--v-lime)" />
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "flex-end", marginTop: 14 }}>
        {[
          ["Live forecasts", "Re-renders on every CRM change."],
          ["Stall radar", "Surface deals slipping by week."],
          ["80 ms paint", "Pipelines feel instant — even at 10k rows."],
        ].map(([h, b], i, arr) => (
          <div key={h} style={{
            display: "grid", gridTemplateColumns: "16px 1fr",
            gap: 12, padding: "9px 0",
            borderTop: "1px solid var(--v-ink-10, rgba(17,19,26,0.10))",
            borderBottom: i === arr.length - 1 ? "1px solid var(--v-ink-10, rgba(17,19,26,0.10))" : "none",
            alignItems: "baseline",
          }}>
            <span style={{ display: "inline-block", width: 7, height: 7, background: "var(--v-lime)", marginTop: 6 }} />
            <div style={{ minWidth: 0 }}>
              <div style={{ fontSize: 13.5, fontWeight: 500 }}>{h}</div>
              <div style={{ fontSize: 12, color: "var(--v-steel)", marginTop: 1 }}>{b}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="v-row" style={{ marginTop: 12 }}>
        <VoltWordmark size={13} />
        <VMono color="var(--v-steel)">volt.so/changelog</VMono>
      </div>
    </div>
  );
}

// 2 — LinkedIn changelog with bar chart
function VUpdateLI_Changelog() {
  return (
    <div className="v-post" style={{ padding: "28px 36px", position: "relative" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <VoltMark size={22} />
          <VMono color="var(--v-steel)" style={{ letterSpacing: "0.1em", textTransform: "uppercase" }}>changelog</VMono>
          <VChip tone="lime">v4.2</VChip>
        </div>
        <VMono color="var(--v-steel)">19 / 05 / 2026</VMono>
      </div>
      <div style={{ flex: 1, display: "grid", gridTemplateColumns: "1fr 1.05fr", gap: 28, alignItems: "center", paddingTop: 14, minWidth: 0 }}>
        <div style={{ minWidth: 0 }}>
          <h2 className="v-display" style={{ fontSize: 30, lineHeight: 1.08, margin: 0, letterSpacing: "-0.035em", textWrap: "balance", fontWeight: 600 }}>
            Live forecasts, stall radar, and a faster list.
          </h2>
          <div style={{ marginTop: 18, display: "flex", alignItems: "end", gap: 12 }}>
            <VBars data={[30, 42, 38, 55, 48, 70, 62, 80, 75, 90]} width={180} height={48} color="var(--v-ink-22)" highlight="var(--v-lime)" />
            <div>
              <VMono color="var(--v-steel)" style={{ letterSpacing: "0.06em" }}>paint time</VMono>
              <div className="v-display" style={{ fontSize: 22, lineHeight: 1, letterSpacing: "-0.03em", marginTop: 4, fontWeight: 700 }}>240→80 ms</div>
            </div>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 7, minWidth: 0 }}>
          {[
            ["+", "Live forecast engine", "var(--v-ink)"],
            ["+", "Stall radar (auto-surface slipping deals)", "var(--v-ink)"],
            ["+", "Bulk reorder via keyboard", "var(--v-ink)"],
            ["Δ", "Pipeline paint: 240 ms → 80 ms", "var(--v-sky)"],
            ["−", "Removed legacy CSV exporter", "var(--v-coral)"],
          ].map(([sym, t, c], i) => (
            <div key={i} style={{ display: "grid", gridTemplateColumns: "18px 1fr", gap: 10, alignItems: "center" }}>
              <span className="v-mono" style={{ fontSize: 13, color: c, fontWeight: 500 }}>{sym}</span>
              <span style={{ fontSize: 13, lineHeight: 1.3 }}>{t}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// 3 — IG big v4.2
function VUpdateIG_Big() {
  return (
    <div className="v-post dark v-grid" style={{ padding: 44, position: "relative" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", position: "relative" }}>
        <VoltWordmark size={13} tone="lime" color="var(--v-paper)" />
        <VChip tone="lime">NOW SHIPPING</VChip>
      </div>
      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start", position: "relative" }}>
        <VMono color="var(--v-lime)" style={{ letterSpacing: "0.12em", textTransform: "uppercase" }}>Volt release</VMono>
        <div className="v-display" style={{
          fontSize: 160, lineHeight: 1.06, margin: "4px 0 0",
          letterSpacing: "-0.06em",
          color: "var(--v-paper)",
          fontWeight: 700,
        }}>
          v4<span style={{ color: "var(--v-lime)" }}>.2</span>
        </div>
        <div className="v-display" style={{
          fontSize: 24, lineHeight: 1.16, margin: "14px 0 0",
          letterSpacing: "-0.025em",
          maxWidth: 460,
          fontWeight: 600,
        }}>
          Meet <span style={{ color: "var(--v-lime)" }}>Live Forecasts</span> — your number, recalculated on every signal.
        </div>
        <div style={{ marginTop: 18 }}>
          <VSparkline data={[18, 22, 19, 28, 26, 34, 40, 38, 52, 60, 58, 74, 88]} width={280} height={36} color="var(--v-lime)" area />
        </div>
      </div>
      <div className="v-row" style={{ position: "relative" }}>
        <VMono color="var(--v-paper-60)">19 / 05 / 2026</VMono>
        <VMono color="var(--v-paper-60)">volt.so/changelog</VMono>
      </div>
    </div>
  );
}

Object.assign(window, {
  VCoverBoard,
  VBlogIG_Editorial, VBlogLI_TwoCol, VBlogIG_Dark,
  VUseIG_Stat, VUseLI_Side, VUseIG_Steps,
  VTestIG_Pullquote, VTestLI_Side, VTestIG_Stack,
  VUpdateIG_UI, VUpdateLI_Changelog, VUpdateIG_Big,
});
