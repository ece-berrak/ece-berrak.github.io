/* global React */
// Stratum brand primitives — technical / structural variant

const BRAND = {
  name: "Stratum",
  tagline: "Work, in layers.",
  domain: "stratum.so",
};

// New logomark — a "cross-axis" square: jet outline + cobalt cross
function StratumMark({ size = 24, color = "currentColor", accent = "var(--cobalt)" }) {
  const s = size;
  return (
    <svg width={s} height={s} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect x="3" y="3" width="26" height="26" rx="2" stroke={color} strokeWidth="2.4" />
      <line x1="3" y1="16" x2="29" y2="16" stroke={color} strokeWidth="2.4" />
      <line x1="16" y1="3" x2="16" y2="29" stroke={accent} strokeWidth="2.4" />
    </svg>
  );
}

function StratumWordmark({ size = 18, color = "currentColor", accent }) {
  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: size * 0.5, color }}>
      <StratumMark size={size * 1.15} color={color} accent={accent} />
      <span className="font-display" style={{
        fontWeight: 600,
        fontSize: size,
        letterSpacing: "-0.03em",
        lineHeight: 1,
      }}>Stratum</span>
    </div>
  );
}

// Monospaced label (small all-caps)
function MonoLabel({ children, color = "currentColor", size = 11, style }) {
  return (
    <span className="font-mono" style={{
      fontSize: size,
      letterSpacing: "0.12em",
      textTransform: "uppercase",
      color,
      lineHeight: 1,
      ...style,
    }}>{children}</span>
  );
}

// Square chip (no rounded pill — sharp corners)
function Chip({ children, tone = "ink", style }) {
  const map = {
    ink:    { bg: "transparent",   fg: "var(--ink)",    bd: "var(--ink)" },
    paper:  { bg: "transparent",   fg: "var(--paper)",  bd: "var(--paper)" },
    cobalt: { bg: "var(--cobalt)", fg: "var(--paper)",  bd: "var(--cobalt)" },
    acid:   { bg: "var(--acid)",   fg: "var(--ink)",    bd: "var(--acid)" },
    rust:   { bg: "var(--rust)",   fg: "var(--paper)",  bd: "var(--rust)" },
  };
  const c = map[tone] || map.ink;
  return (
    <span className="font-mono" style={{
      display: "inline-flex", alignItems: "center", gap: 6,
      padding: "4px 8px 3px",
      border: `1px solid ${c.bd}`,
      background: c.bg,
      color: c.fg,
      fontSize: 10,
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      lineHeight: 1,
      ...style,
    }}>{children}</span>
  );
}

// Hairline rule
function Hair({ vertical = false, color = "var(--ink)", opacity = 0.14, style }) {
  return (
    <div style={{
      background: color,
      opacity,
      ...(vertical
        ? { width: 1, alignSelf: "stretch" }
        : { height: 1, width: "100%" }),
      ...style,
    }} />
  );
}

// Avatar — same idea, slightly more geometric
function Avatar({ size = 44, seed = 1 }) {
  const palettes = [
    ["var(--cobalt)", "var(--paper)"],
    ["var(--ink)",    "var(--paper)"],
    ["var(--rust)",   "var(--paper)"],
    ["var(--muted)",  "var(--paper)"],
  ];
  const [bg, fg] = palettes[seed % palettes.length];
  return (
    <div style={{
      width: size, height: size, borderRadius: "50%",
      background: bg, color: fg,
      display: "flex", alignItems: "center", justifyContent: "center",
      boxShadow: "0 0 0 1px var(--ink-14)",
      flexShrink: 0,
    }}>
      <svg viewBox="0 0 44 44" width={size * 0.85} height={size * 0.85} aria-hidden="true">
        <circle cx="22" cy="17.5" r="7" fill={fg} />
        <path d="M6 40c2-8 8-12 16-12s14 4 16 12" fill={fg} />
      </svg>
    </div>
  );
}

// Registration corners — drop into any post
function RegCorners({ color = "currentColor" }) {
  return (
    <React.Fragment>
      <div className="regmark tl" style={{ color }} />
      <div className="regmark tr" style={{ color }} />
      <div className="regmark bl" style={{ color }} />
      <div className="regmark br" style={{ color }} />
    </React.Fragment>
  );
}

// Window chrome — tiny dots
function WindowDots() {
  return (
    <div style={{ display: "flex", gap: 4 }}>
      {[0,1,2].map(i => (
        <span key={i} style={{
          width: 7, height: 7, borderRadius: "50%",
          background: "var(--ink)", opacity: 0.22,
        }} />
      ))}
    </div>
  );
}

// Tiny inline product UI mock — list of work rows
function MiniUI({ accent = "var(--cobalt)", style }) {
  return (
    <div style={{
      background: "var(--paper-2)",
      border: "1px solid var(--ink-10)",
      overflow: "hidden",
      ...style,
    }}>
      <div style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "7px 10px",
        borderBottom: "1px solid var(--ink-06)",
        background: "var(--paper-3)",
      }}>
        <WindowDots />
        <span className="font-mono" style={{
          fontSize: 9, letterSpacing: "0.1em", color: "var(--muted)",
          textTransform: "uppercase",
        }}>workspace · sprint 24</span>
        <span style={{ width: 18 }} />
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "60px 1fr", height: 132 }}>
        <div style={{
          background: "var(--paper-3)",
          borderRight: "1px solid var(--ink-06)",
          padding: 8,
          display: "flex", flexDirection: "column", gap: 5,
        }}>
          {[0,1,2,3].map(i => (
            <div key={i} style={{
              height: 5,
              width: i === 1 ? "85%" : "60%",
              background: i === 1 ? accent : "var(--ink-22)",
            }} />
          ))}
        </div>
        <div style={{ padding: "10px 12px", display: "flex", flexDirection: "column", gap: 7 }}>
          <div style={{ display: "flex", gap: 6, alignItems: "center", marginBottom: 2 }}>
            <div style={{ height: 7, width: "30%", background: "var(--ink)" }} />
            <div style={{ height: 5, width: "12%", background: accent }} />
          </div>
          {[0,1,2,3,4].map(i => (
            <div key={i} style={{
              display: "flex", alignItems: "center", gap: 7,
              paddingBottom: 5,
              borderBottom: i < 4 ? "1px solid var(--ink-06)" : "none",
            }}>
              <span style={{
                width: 7, height: 7,
                background: i === 0 ? accent : "var(--ink-22)",
              }} />
              <span style={{ flex: 1, height: 4, background: "var(--ink-22)", width: `${55 + (i*7)%35}%` }} />
              <span style={{ width: 18, height: 4, background: "var(--ink-14)" }} />
              <span style={{ width: 10, height: 10, borderRadius: "50%", background: "var(--ink-10)" }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { BRAND, StratumMark, StratumWordmark, MonoLabel, Chip, Hair, Avatar, RegCorners, WindowDots, MiniUI });
