/* global React, BRAND, StratumMark, StratumWordmark, MonoLabel, Chip, Hair, Avatar, MiniUI */

// Email shell — mail client mock
function MailShell({ from, fromAddr, subject, preview, date, children }) {
  return (
    <div style={{
      width: "100%", height: "100%",
      background: "#CDCDC4",
      display: "flex", flexDirection: "column",
      fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif",
      color: "var(--ink)",
      overflow: "hidden",
    }}>
      {/* chrome */}
      <div style={{
        padding: "9px 16px",
        background: "#F6F6F0",
        borderBottom: "1px solid var(--ink-10)",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        flexShrink: 0,
      }}>
        <div style={{ display: "flex", gap: 5 }}>
          <span style={{ width: 9, height: 9, borderRadius: "50%", background: "#E2725A" }} />
          <span style={{ width: 9, height: 9, borderRadius: "50%", background: "#E0A24A" }} />
          <span style={{ width: 9, height: 9, borderRadius: "50%", background: "#7AAA5E" }} />
        </div>
        <span className="font-mono" style={{ fontSize: 10, letterSpacing: "0.14em", color: "var(--muted)", textTransform: "uppercase" }}>
          Mail · Inbox
        </span>
        <span style={{ width: 36 }} />
      </div>
      {/* meta */}
      <div style={{
        padding: "14px 22px 12px",
        background: "#F6F6F0",
        borderBottom: "1px solid var(--ink-10)",
        flexShrink: 0,
      }}>
        <div className="font-display" style={{
          fontSize: 16, fontWeight: 600, letterSpacing: "-0.02em",
          marginBottom: 6,
        }}>{subject}</div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, minWidth: 0 }}>
            <div style={{
              width: 26, height: 26,
              background: "var(--ink)", color: "var(--paper)",
              display: "flex", alignItems: "center", justifyContent: "center",
              flexShrink: 0,
            }}>
              <StratumMark size={14} color="var(--paper)" accent="var(--acid)" />
            </div>
            <div style={{ fontSize: 12, lineHeight: 1.3, minWidth: 0 }}>
              <span style={{ fontWeight: 500 }}>{from}</span>
              <span style={{ color: "var(--muted)" }}> · {fromAddr}</span>
            </div>
          </div>
          <span style={{ fontSize: 11, color: "var(--muted)", flexShrink: 0 }}>{date}</span>
        </div>
        {preview && (
          <div style={{ fontSize: 11.5, color: "var(--muted)", marginTop: 6 }}>
            {preview}
          </div>
        )}
      </div>
      {/* body */}
      <div style={{
        flex: 1,
        overflow: "hidden",
        background: "#CDCDC4",
        padding: "16px 12px 16px",
      }}>
        <div style={{
          maxWidth: 560, margin: "0 auto",
          background: "var(--paper)",
          border: "1px solid var(--ink-10)",
          overflow: "hidden",
          boxShadow: "0 12px 28px -16px rgba(15,16,20,0.20)",
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
// EMAIL 1 — Product launch (v2.4)
// ─────────────────────────────────────────────────────────────
function EmailLaunch() {
  return (
    <MailShell
      from="Stratum"
      fromAddr="news@stratum.so"
      subject="Meet Stacked Views — Stratum v2.4 is here"
      preview="Three perspectives on the same plan, at once."
      date="May 19, 2026"
    >
      <div style={{ padding: "26px 28px 22px", borderBottom: "1px solid var(--ink-10)" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
          <StratumWordmark size={14} />
          <MonoLabel color="var(--muted)">v2.4 · release</MonoLabel>
        </div>
        <div className="font-display" style={{
          fontSize: 30, lineHeight: 1.04, letterSpacing: "-0.03em",
          margin: 0, fontWeight: 600,
          textWrap: "balance",
        }}>
          Meet <span style={{ color: "var(--cobalt)" }}>Stacked Views</span> — three perspectives on the same plan, at once.
        </div>
      </div>

      <div style={{ padding: "16px 28px 4px" }}>
        <MiniUI accent="var(--cobalt)" />
      </div>

      <div style={{ padding: "12px 28px 4px", fontSize: 13.5, lineHeight: 1.55, color: "var(--ink-soft)" }}>
        <p style={{ margin: 0 }}>
          You asked for it: pin your timeline, board, and table side by side. Drag a card in one — it updates in the others. Live for all plans today.
        </p>
      </div>

      <div style={{ padding: "10px 28px 6px" }}>
        {[
          ["Stacked views", "Pin up to three perspectives on one plan."],
          ["Smart filters", "Save filter combos as named lenses."],
          ["80 ms paint", "Lists feel instant — even at five thousand rows."],
        ].map(([h, b], i, arr) => (
          <div key={h} style={{
            display: "grid", gridTemplateColumns: "22px 1fr", gap: 10,
            padding: "10px 0",
            borderTop: "1px solid var(--ink-10)",
            borderBottom: i === arr.length - 1 ? "1px solid var(--ink-10)" : "none",
            alignItems: "baseline",
            minWidth: 0,
          }}>
            <span className="font-mono" style={{ fontSize: 11, color: "var(--cobalt)", letterSpacing: "0.08em" }}>0{i+1}</span>
            <div style={{ minWidth: 0 }}>
              <div style={{ fontSize: 13.5, fontWeight: 500 }}>{h}</div>
              <div style={{ fontSize: 12, color: "var(--muted)" }}>{b}</div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ padding: "16px 28px 18px", display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap" }}>
        <a style={{
          background: "var(--ink)", color: "var(--paper)",
          padding: "9px 14px", fontSize: 12.5, fontWeight: 500,
          letterSpacing: "-0.005em", textDecoration: "none",
        }}>Open the changelog →</a>
        <a style={{
          color: "var(--ink)", fontSize: 12.5,
          textDecoration: "none", borderBottom: "1px solid var(--ink-22)",
          paddingBottom: 1,
        }}>Read what changed</a>
      </div>

      <div style={{
        marginTop: "auto",
        padding: "12px 28px 16px",
        background: "var(--paper-3)",
        borderTop: "1px solid var(--ink-10)",
        display: "flex", justifyContent: "space-between", alignItems: "center",
      }}>
        <StratumWordmark size={12} />
        <span style={{ fontSize: 10.5, color: "var(--muted)" }}>Unsubscribe · Preferences</span>
      </div>
    </MailShell>
  );
}

// ─────────────────────────────────────────────────────────────
// EMAIL 2 — Weekly digest
// ─────────────────────────────────────────────────────────────
function EmailDigest() {
  return (
    <MailShell
      from="Stratum Field Notes"
      fromAddr="notes@stratum.so"
      subject="Field Notes · Week 20 — Four reads from the team"
      preview="Versioning, planning rituals, and Mercer's playbook."
      date="May 18, 2026"
    >
      <div style={{ padding: "24px 28px 14px", borderBottom: "1px solid var(--ink-10)" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
          <MonoLabel color="var(--cobalt)">Field notes · wk 20</MonoLabel>
          <StratumWordmark size={13} />
        </div>
        <div className="font-display" style={{
          fontSize: 24, lineHeight: 1.06, letterSpacing: "-0.03em", margin: 0,
          fontWeight: 600, textWrap: "balance",
        }}>
          Four reads on planning, shipping, and the quiet art of not meeting.
        </div>
      </div>

      <div style={{ padding: "0 28px" }}>
        {[
          { tag: "Essay", title: "The case for versioned documents in a shared workspace.", meta: "5 min · Lena Park" },
          { tag: "Use case", title: "How Mercer & Co ships features 2× faster with Stratum.", meta: "4 min · Customer" },
          { tag: "Field note", title: "Why your roadmap keeps drifting — and the five questions that pull it back.", meta: "7 min · Mateo Alves" },
          { tag: "Tactic", title: "Rebuilding our planning ritual around one page.", meta: "6 min · Engineering" },
        ].map((it, i, arr) => (
          <div key={i} style={{
            padding: "14px 0",
            borderBottom: i < arr.length - 1 ? "1px solid var(--ink-10)" : "none",
            minWidth: 0,
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 5, gap: 10 }}>
              <MonoLabel color="var(--cobalt)">{it.tag}</MonoLabel>
              <span style={{ fontSize: 10.5, color: "var(--muted)", flexShrink: 0 }}>{it.meta}</span>
            </div>
            <div className="font-display" style={{
              fontSize: 16, lineHeight: 1.2, letterSpacing: "-0.018em", fontWeight: 500,
              textWrap: "balance",
            }}>{it.title}</div>
          </div>
        ))}
      </div>

      <div style={{
        marginTop: "auto",
        padding: "12px 28px 14px",
        background: "var(--paper-3)",
        borderTop: "1px solid var(--ink-10)",
        display: "flex", justifyContent: "space-between", alignItems: "center",
        gap: 8,
      }}>
        <span style={{ fontSize: 10.5, color: "var(--muted)" }}>From the Stratum team — weekly.</span>
        <span style={{ fontSize: 10.5, color: "var(--muted)" }}>Unsubscribe</span>
      </div>
    </MailShell>
  );
}

// ─────────────────────────────────────────────────────────────
// EMAIL 3 — Welcome / onboarding
// ─────────────────────────────────────────────────────────────
function EmailWelcome() {
  return (
    <MailShell
      from="Mateo at Stratum"
      fromAddr="mateo@stratum.so"
      subject="Welcome to Stratum — let's set up your first workspace"
      preview="Three small steps and you're shipping."
      date="May 19, 2026"
    >
      <div style={{
        padding: "28px 28px 24px",
        background: "var(--cobalt)",
        color: "var(--paper)",
      }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
          <StratumWordmark size={13} color="var(--paper)" accent="var(--acid)" />
          <MonoLabel color="var(--paper-60)">welcome · 01</MonoLabel>
        </div>
        <div className="font-display" style={{
          fontSize: 30, lineHeight: 1.02, letterSpacing: "-0.035em", margin: 0,
          fontWeight: 600, textWrap: "balance",
        }}>
          You're in. Let's set up the <span style={{ color: "var(--acid)" }}>first layer</span>.
        </div>
      </div>

      <div style={{ padding: "16px 28px 4px", fontSize: 13.5, lineHeight: 1.55, color: "var(--ink-soft)" }}>
        <p style={{ margin: 0 }}>
          Hi — I'm Mateo, one of the founders. Most teams get the most out of Stratum in their first week. Three small steps make the difference.
        </p>
      </div>

      <div style={{ padding: "8px 28px 4px" }}>
        {[
          ["Invite your team", "Stratum gets sharper with more people on the canvas. Start with 2–3."],
          ["Bring one project in", "Move one active project from your old tool. Pick the loudest one."],
          ["Pin your stack", "Set the three views you'll live in. Default: Timeline + List + Decisions."],
        ].map(([h, b], i) => (
          <div key={h} style={{
            display: "grid", gridTemplateColumns: "30px 1fr",
            gap: 12, padding: "12px 0",
            borderTop: "1px solid var(--ink-10)",
            alignItems: "baseline",
            minWidth: 0,
          }}>
            <div className="font-mono" style={{
              fontSize: 12, color: "var(--cobalt)", letterSpacing: "0.08em",
            }}>0{i+1}</div>
            <div style={{ minWidth: 0 }}>
              <div style={{ fontSize: 14, fontWeight: 500, letterSpacing: "-0.008em" }}>{h}</div>
              <div style={{ fontSize: 12, color: "var(--muted)", marginTop: 1 }}>{b}</div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ padding: "14px 28px 16px", display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap" }}>
        <a style={{
          background: "var(--ink)", color: "var(--paper)",
          padding: "9px 14px", fontSize: 12.5, fontWeight: 500,
          textDecoration: "none",
        }}>Open my workspace →</a>
        <a style={{
          color: "var(--ink)", fontSize: 12.5,
          textDecoration: "none", borderBottom: "1px solid var(--ink-22)",
        }}>Book a 15-min walkthrough</a>
      </div>

      <div style={{
        marginTop: "auto",
        padding: "12px 28px 14px",
        background: "var(--paper-3)",
        borderTop: "1px solid var(--ink-10)",
        display: "flex", alignItems: "center", gap: 10,
      }}>
        <Avatar size={26} seed={2} />
        <div style={{ fontSize: 11.5, lineHeight: 1.35, minWidth: 0 }}>
          <div style={{ fontWeight: 500 }}>Mateo Alves</div>
          <div style={{ color: "var(--muted)" }}>CEO · Stratum · stratum.so</div>
        </div>
      </div>
    </MailShell>
  );
}

Object.assign(window, { EmailLaunch, EmailDigest, EmailWelcome });
