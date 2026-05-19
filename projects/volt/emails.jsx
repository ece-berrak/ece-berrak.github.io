/* global React, VBRAND, VoltMark, VoltWordmark, VMono, VChip, VHair, VAvatar, VSparkline, VBars, VDelta, VMiniUI */

function VMailShell({ from, fromAddr, subject, preview, date, children }) {
  return (
    <div style={{
      width: "100%", height: "100%",
      background: "#D0CFC7",
      display: "flex", flexDirection: "column",
      fontFamily: '"DM Sans", ui-sans-serif, system-ui, sans-serif',
      color: "var(--v-ink)",
      overflow: "hidden",
    }}>
      {/* chrome */}
      <div style={{
        padding: "9px 16px",
        background: "var(--v-paper-2)",
        borderBottom: "1px solid var(--v-ink-08)",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        flexShrink: 0,
      }}>
        <div style={{ display: "flex", gap: 5 }}>
          <span style={{ width: 9, height: 9, borderRadius: "50%", background: "#E2725A" }} />
          <span style={{ width: 9, height: 9, borderRadius: "50%", background: "#E0A24A" }} />
          <span style={{ width: 9, height: 9, borderRadius: "50%", background: "#7AAA5E" }} />
        </div>
        <VMono color="var(--v-steel)" style={{ letterSpacing: "0.1em", textTransform: "uppercase", fontSize: 10 }}>
          Mail · Inbox
        </VMono>
        <span style={{ width: 36 }} />
      </div>
      {/* meta */}
      <div style={{
        padding: "14px 22px 12px",
        background: "var(--v-paper-2)",
        borderBottom: "1px solid var(--v-ink-08)",
        flexShrink: 0,
      }}>
        <div className="v-display" style={{
          fontSize: 16, fontWeight: 600, letterSpacing: "-0.025em",
          marginBottom: 6,
        }}>{subject}</div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, minWidth: 0 }}>
            <VoltMark size={24} tone="lime" />
            <div style={{ fontSize: 12, lineHeight: 1.3, minWidth: 0 }}>
              <span style={{ fontWeight: 500 }}>{from}</span>
              <span style={{ color: "var(--v-steel)" }}> · {fromAddr}</span>
            </div>
          </div>
          <span style={{ fontSize: 11, color: "var(--v-steel)", flexShrink: 0 }}>{date}</span>
        </div>
        {preview && (
          <div style={{ fontSize: 11.5, color: "var(--v-steel)", marginTop: 6 }}>
            {preview}
          </div>
        )}
      </div>
      {/* body */}
      <div style={{
        flex: 1,
        overflow: "hidden",
        background: "#D0CFC7",
        padding: "16px 12px 16px",
      }}>
        <div style={{
          maxWidth: 560, margin: "0 auto",
          background: "var(--v-paper)",
          border: "1px solid var(--v-ink-08)",
          overflow: "hidden",
          boxShadow: "0 12px 28px -16px rgba(17,19,26,0.18)",
          height: "100%",
          display: "flex", flexDirection: "column",
        }}>
          {children}
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// EMAIL 1 — Product launch
// ─────────────────────────────────────────────────────────────
function VEmailLaunch() {
  return (
    <VMailShell
      from="Volt"
      fromAddr="news@volt.so"
      subject="Live Forecasts — Volt v4.2 is here"
      preview="Your number, recalculated on every signal."
      date="May 19, 2026"
    >
      <div style={{ padding: "26px 28px 22px", borderBottom: "1px solid var(--v-ink-08)" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
          <VoltWordmark size={14} />
          <VMono color="var(--v-steel)">v4.2 · RELEASE</VMono>
        </div>
        <div className="v-display" style={{
          fontSize: 28, lineHeight: 1.08, letterSpacing: "-0.03em",
          margin: 0, fontWeight: 600,
          textWrap: "balance",
        }}>
          Meet <span style={{ background: "var(--v-lime)", padding: "0 6px" }}>Live Forecasts</span> — your number, recalculated on every signal.
        </div>
      </div>

      <div style={{ padding: "16px 28px 4px" }}>
        <VMiniUI accent="var(--v-lime)" />
      </div>

      <div style={{ padding: "12px 28px 4px", fontSize: 13.5, lineHeight: 1.55, color: "var(--v-ink-soft)" }}>
        <p style={{ margin: 0 }}>
          You asked for it: forecasts that re-render on every deal change. No more Friday spreadsheet rituals. Live for all plans today.
        </p>
      </div>

      <div style={{ padding: "10px 28px 6px" }}>
        {[
          ["Live forecasts", "Recalculates on every CRM change."],
          ["Stall radar", "Surface deals slipping by week."],
          ["80 ms paint", "Pipelines feel instant — even at 10k rows."],
        ].map(([h, b], i, arr) => (
          <div key={h} style={{
            display: "grid", gridTemplateColumns: "26px 1fr", gap: 10,
            padding: "10px 0",
            borderTop: "1px solid var(--v-ink-08)",
            borderBottom: i === arr.length - 1 ? "1px solid var(--v-ink-08)" : "none",
            alignItems: "baseline",
          }}>
            <span className="v-mono" style={{ fontSize: 11, color: "var(--v-coral)", letterSpacing: "0.06em" }}>0{i+1}</span>
            <div style={{ minWidth: 0 }}>
              <div style={{ fontSize: 13.5, fontWeight: 500 }}>{h}</div>
              <div style={{ fontSize: 12, color: "var(--v-steel)" }}>{b}</div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ padding: "16px 28px 18px", display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap" }}>
        <a style={{
          background: "var(--v-ink)", color: "var(--v-lime)",
          padding: "9px 14px", fontSize: 12.5, fontWeight: 600,
          textDecoration: "none",
        }}>Open the changelog →</a>
        <a style={{
          color: "var(--v-ink)", fontSize: 12.5,
          textDecoration: "none", borderBottom: "1px solid var(--v-ink-22)",
          paddingBottom: 1,
        }}>Read what changed</a>
      </div>

      <div style={{
        marginTop: "auto",
        padding: "12px 28px 16px",
        background: "var(--v-paper-2)",
        borderTop: "1px solid var(--v-ink-08)",
        display: "flex", justifyContent: "space-between", alignItems: "center",
      }}>
        <VoltWordmark size={12} />
        <span style={{ fontSize: 10.5, color: "var(--v-steel)" }}>Unsubscribe · Preferences</span>
      </div>
    </VMailShell>
  );
}

// ─────────────────────────────────────────────────────────────
// EMAIL 2 — Weekly digest (revenue brief)
// ─────────────────────────────────────────────────────────────
function VEmailDigest() {
  return (
    <VMailShell
      from="Volt Revenue Brief"
      fromAddr="brief@volt.so"
      subject="Revenue Brief · Wk 20 — Four reads for RevOps"
      preview="Forecasting, stall signals, and Mercer's playbook."
      date="May 18, 2026"
    >
      <div style={{ padding: "22px 28px 14px", borderBottom: "1px solid var(--v-ink-08)" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
          <VMono color="var(--v-coral)" style={{ letterSpacing: "0.1em", textTransform: "uppercase" }}>Revenue brief · wk 20</VMono>
          <VoltWordmark size={13} />
        </div>
        <div className="v-display" style={{
          fontSize: 22, lineHeight: 1.12, letterSpacing: "-0.03em", margin: 0,
          fontWeight: 600, textWrap: "balance",
        }}>
          Four reads on forecasting, signal, and the new Friday meeting.
        </div>
        <div style={{ marginTop: 14, padding: 10, background: "var(--v-paper-2)", border: "1px solid var(--v-ink-08)", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
          <div>
            <VMono color="var(--v-steel)" style={{ letterSpacing: "0.06em" }}>BENCHMARK · WK 20</VMono>
            <div className="v-display" style={{ fontSize: 18, letterSpacing: "-0.025em", marginTop: 2, fontWeight: 700 }}>+18% MoM</div>
          </div>
          <VSparkline data={[24, 22, 28, 26, 32, 38, 36, 44, 48, 54, 60, 72]} width={140} height={28} color="var(--v-ink)" />
        </div>
      </div>

      <div style={{ padding: "0 28px" }}>
        {[
          { tag: "Essay", title: "Stop forecasting in spreadsheets. Start forecasting on signal.", meta: "5 min · Lena Park" },
          { tag: "Customer", title: "How Mercer Bio recovered $2.4M in stalled pipeline.", meta: "4 min · Mercer Bio" },
          { tag: "Field note", title: "What twelve RevOps leaders changed about forecasting in 2026.", meta: "7 min · Mateo Alves" },
          { tag: "Tactic", title: "Rebuilding the Friday pipeline meeting around live data.", meta: "6 min · RevOps team" },
        ].map((it, i, arr) => (
          <div key={i} style={{
            padding: "13px 0",
            borderBottom: i < arr.length - 1 ? "1px solid var(--v-ink-08)" : "none",
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 4, gap: 10 }}>
              <VMono color="var(--v-coral)" style={{ letterSpacing: "0.08em", textTransform: "uppercase" }}>{it.tag}</VMono>
              <span style={{ fontSize: 10.5, color: "var(--v-steel)", flexShrink: 0 }}>{it.meta}</span>
            </div>
            <div className="v-display" style={{
              fontSize: 15.5, lineHeight: 1.24, letterSpacing: "-0.02em", fontWeight: 600,
              textWrap: "balance",
            }}>{it.title}</div>
          </div>
        ))}
      </div>

      <div style={{
        marginTop: "auto",
        padding: "12px 28px 14px",
        background: "var(--v-paper-2)",
        borderTop: "1px solid var(--v-ink-08)",
        display: "flex", justifyContent: "space-between", alignItems: "center",
        gap: 8,
      }}>
        <span style={{ fontSize: 10.5, color: "var(--v-steel)" }}>The Volt revenue brief — weekly.</span>
        <span style={{ fontSize: 10.5, color: "var(--v-steel)" }}>Unsubscribe</span>
      </div>
    </VMailShell>
  );
}

// ─────────────────────────────────────────────────────────────
// EMAIL 3 — Welcome / onboarding
// ─────────────────────────────────────────────────────────────
function VEmailWelcome() {
  return (
    <VMailShell
      from="Mateo at Volt"
      fromAddr="mateo@volt.so"
      subject="Welcome to Volt — let's connect your first signal"
      preview="Three small steps and you're forecasting live."
      date="May 19, 2026"
    >
      <div style={{
        padding: "26px 28px 22px",
        background: "var(--v-ink)",
        color: "var(--v-paper)",
      }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
          <VoltWordmark size={13} tone="lime" color="var(--v-paper)" />
          <VMono color="var(--v-paper-60)" style={{ letterSpacing: "0.1em", textTransform: "uppercase" }}>welcome · 01</VMono>
        </div>
        <div className="v-display" style={{
          fontSize: 28, lineHeight: 1.1, letterSpacing: "-0.035em", margin: 0,
          fontWeight: 600, textWrap: "balance",
        }}>
          You're in. Let's connect your <span style={{ color: "var(--v-lime)" }}>first signal</span>.
        </div>
      </div>

      <div style={{ padding: "16px 28px 4px", fontSize: 13.5, lineHeight: 1.55, color: "var(--v-ink-soft)" }}>
        <p style={{ margin: 0 }}>
          Hi — I'm Mateo, one of the founders. Most RevOps teams get to a live forecast in their first week. Three small steps make the difference.
        </p>
      </div>

      <div style={{ padding: "6px 28px 4px" }}>
        {[
          ["Connect your CRM", "Salesforce, HubSpot, Attio — Volt stitches every deal into one ledger."],
          ["Invite a deal owner", "Volt sharpens with each rep on it. Start with one team."],
          ["Pin your forecast", "Set the three views you'll live in: Pipeline + Stalls + Forecast."],
        ].map(([h, b], i) => (
          <div key={h} style={{
            display: "grid", gridTemplateColumns: "30px 1fr",
            gap: 12, padding: "11px 0",
            borderTop: "1px solid var(--v-ink-08)",
            alignItems: "baseline",
            minWidth: 0,
          }}>
            <div className="v-mono" style={{
              fontSize: 12, color: "var(--v-coral)", letterSpacing: "0.06em",
            }}>0{i+1}</div>
            <div style={{ minWidth: 0 }}>
              <div style={{ fontSize: 14, fontWeight: 500, letterSpacing: "-0.008em" }}>{h}</div>
              <div style={{ fontSize: 12, color: "var(--v-steel)", marginTop: 1 }}>{b}</div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ padding: "14px 28px 16px", display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap" }}>
        <a style={{
          background: "var(--v-ink)", color: "var(--v-lime)",
          padding: "9px 14px", fontSize: 12.5, fontWeight: 600,
          textDecoration: "none",
        }}>Open my workspace →</a>
        <a style={{
          color: "var(--v-ink)", fontSize: 12.5,
          textDecoration: "none", borderBottom: "1px solid var(--v-ink-22)",
        }}>Book a 15-min walkthrough</a>
      </div>

      <div style={{
        marginTop: "auto",
        padding: "12px 28px 14px",
        background: "var(--v-paper-2)",
        borderTop: "1px solid var(--v-ink-08)",
        display: "flex", alignItems: "center", gap: 10,
      }}>
        <VAvatar size={26} seed={2} />
        <div style={{ fontSize: 11.5, lineHeight: 1.35, minWidth: 0 }}>
          <div style={{ fontWeight: 500 }}>Mateo Alves</div>
          <div style={{ color: "var(--v-steel)" }}>CEO · Volt · volt.so</div>
        </div>
      </div>
    </VMailShell>
  );
}

Object.assign(window, { VEmailLaunch, VEmailDigest, VEmailWelcome });
