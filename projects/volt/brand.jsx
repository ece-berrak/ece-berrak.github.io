/* global React */
// VOLT brand primitives — revenue intelligence visual system

const VBRAND = {
  name: "Volt",
  tagline: "Pulse on every dollar.",
  domain: "volt.so",
};

// Logomark — solid lime tile with a sparkline glyph
function VoltMark({ size = 28, tone = "lime" }) {
  const palettes = {
    lime:  { bg: "var(--v-lime)", fg: "var(--v-ink)" },
    ink:   { bg: "var(--v-ink)",  fg: "var(--v-lime)" },
    paper: { bg: "var(--v-paper)",fg: "var(--v-ink)" },
  };
  const { bg, fg } = palettes[tone] || palettes.lime;
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden="true">
      <rect width="32" height="32" rx="6" fill={bg} />
      <path d="M5 21 L11 21 L15 11 L19 19 L23 13 L27 17" stroke={fg} strokeWidth="2.6" fill="none" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}

function VoltWordmark({ size = 18, color = "currentColor", tone = "lime" }) {
  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: size * 0.5, color }}>
      <VoltMark size={size * 1.35} tone={tone} />
      <span className="v-display" style={{
        fontWeight: 700,
        fontSize: size,
        letterSpacing: "-0.04em",
        lineHeight: 1.1,
      }}>{(typeof window !== "undefined" && window.VBRAND?.name) || "Volt"}</span>
    </div>
  );
}

// Mono label (tabular nums, no caps if mixed; supports tabular look)
function VMono({ children, color = "currentColor", size = 11, style }) {
  return (
    <span className="v-mono" style={{
      fontSize: size,
      letterSpacing: "0.04em",
      color,
      lineHeight: 1.2,
      ...style,
    }}>{children}</span>
  );
}

// Block chip — sharp corners, optional dot
function VChip({ children, tone = "ink", dot = false, style }) {
  const map = {
    ink:    { bg: "var(--v-ink)",   fg: "var(--v-paper)",  bd: "var(--v-ink)" },
    paper:  { bg: "var(--v-paper)", fg: "var(--v-ink)",    bd: "var(--v-ink-22)" },
    lime:   { bg: "var(--v-lime)",  fg: "var(--v-ink)",    bd: "var(--v-lime)" },
    coral:  { bg: "var(--v-coral)", fg: "var(--v-paper)",  bd: "var(--v-coral)" },
    outline:{ bg: "transparent",    fg: "var(--v-ink)",    bd: "var(--v-ink)" },
    outpaper:{bg: "transparent",    fg: "var(--v-paper)",  bd: "var(--v-paper)" },
  };
  const c = map[tone] || map.ink;
  return (
    <span className="v-mono" style={{
      display: "inline-flex", alignItems: "center", gap: 6,
      padding: "4px 8px",
      border: `1px solid ${c.bd}`,
      background: c.bg,
      color: c.fg,
      fontSize: 10,
      letterSpacing: "0.06em",
      lineHeight: 1.2,
      ...style,
    }}>
      {dot && <span style={{ width: 5, height: 5, background: "currentColor", borderRadius: "50%" }} />}
      {children}
    </span>
  );
}

// Hairline rule
function VHair({ color = "var(--v-ink)", opacity = 0.12, style }) {
  return (
    <div style={{ background: color, opacity, height: 1, width: "100%", ...style }} />
  );
}

// Avatar — circle with simple silhouette
function VAvatar({ size = 40, seed = 0 }) {
  const palettes = [
    ["var(--v-ink)",   "var(--v-lime)"],
    ["var(--v-lime)",  "var(--v-ink)"],
    ["var(--v-coral)", "var(--v-paper)"],
    ["var(--v-sky)",   "var(--v-paper)"],
  ];
  const [bg, fg] = palettes[seed % palettes.length];
  return (
    <div style={{
      width: size, height: size, borderRadius: "50%",
      background: bg, color: fg,
      display: "flex", alignItems: "center", justifyContent: "center",
      boxShadow: "0 0 0 1px var(--v-ink-12)",
      flexShrink: 0,
    }}>
      <svg viewBox="0 0 44 44" width={size * 0.82} height={size * 0.82} aria-hidden="true">
        <circle cx="22" cy="17.5" r="7" fill={fg} />
        <path d="M6 40c2-8 8-12 16-12s14 4 16 12" fill={fg} />
      </svg>
    </div>
  );
}

// Sparkline — accepts data array (0-100); fits container width
function VSparkline({ data = [12, 18, 14, 22, 28, 26, 38, 44, 40, 52, 60, 72], width = 140, height = 40, color = "var(--v-ink)", fill, area = false }) {
  const max = Math.max(...data, 1);
  const min = Math.min(...data, 0);
  const span = max - min || 1;
  const step = width / (data.length - 1);
  const pts = data.map((v, i) => [i * step, height - ((v - min) / span) * (height - 4) - 2]);
  const d = pts.map((p, i) => (i === 0 ? "M" : "L") + p[0].toFixed(1) + "," + p[1].toFixed(1)).join(" ");
  const lastX = pts[pts.length - 1][0];
  const lastY = pts[pts.length - 1][1];
  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} aria-hidden="true">
      {area && (
        <path d={d + ` L ${width},${height} L 0,${height} Z`} fill={fill || color} opacity="0.18" />
      )}
      <path d={d} stroke={color} strokeWidth="1.8" fill="none" strokeLinejoin="round" strokeLinecap="round" />
      <circle cx={lastX} cy={lastY} r="3" fill={color} />
    </svg>
  );
}

// Bar chart — array of heights
function VBars({ data = [30, 42, 38, 55, 48, 70, 62, 80, 75, 90], width = 200, height = 60, color = "var(--v-ink)", highlight = "var(--v-lime)", highlightIndex }) {
  const max = Math.max(...data, 1);
  const gap = 3;
  const bw = (width - gap * (data.length - 1)) / data.length;
  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} aria-hidden="true">
      {data.map((v, i) => {
        const h = (v / max) * (height - 2);
        const x = i * (bw + gap);
        const y = height - h;
        const fill = i === (highlightIndex ?? data.length - 1) ? highlight : color;
        return <rect key={i} x={x} y={y} width={bw} height={h} fill={fill} />;
      })}
    </svg>
  );
}

// Delta indicator: ▲ +18%  or  ▼ −3%
function VDelta({ value, positive = true, size = 13, style }) {
  return (
    <span className="v-mono" style={{
      display: "inline-flex", alignItems: "center", gap: 4,
      fontSize: size,
      color: positive ? "var(--v-ink)" : "var(--v-coral)",
      background: positive ? "var(--v-lime)" : "transparent",
      border: positive ? "none" : "1px solid var(--v-coral)",
      padding: "2px 6px",
      lineHeight: 1.2,
      ...style,
    }}>
      <span style={{ fontSize: size * 0.9 }}>{positive ? "▲" : "▼"}</span>
      {value}
    </span>
  );
}

// Mini product UI mock — sidebar + table with sparkline header
function VMiniUI({ accent = "var(--v-lime)", style }) {
  return (
    <div style={{
      background: "var(--v-paper)",
      border: "1px solid var(--v-ink-12)",
      overflow: "hidden",
      ...style,
    }}>
      <div style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "7px 10px",
        borderBottom: "1px solid var(--v-ink-08)",
        background: "var(--v-paper-2)",
      }}>
        <div style={{ display: "flex", gap: 4 }}>
          {[0,1,2].map(i => <span key={i} style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--v-ink-22)" }} />)}
        </div>
        <span className="v-mono" style={{ fontSize: 9, color: "var(--v-steel)" }}>volt · pipeline · Q2</span>
        <span style={{ width: 18 }} />
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "62px 1fr", height: 132 }}>
        <div style={{
          background: "var(--v-paper-2)",
          borderRight: "1px solid var(--v-ink-06)",
          padding: 8,
          display: "flex", flexDirection: "column", gap: 5,
        }}>
          {[0,1,2,3].map(i => (
            <div key={i} style={{
              height: 5,
              width: i === 1 ? "85%" : "60%",
              background: i === 1 ? accent : "var(--v-ink-22)",
            }} />
          ))}
        </div>
        <div style={{ padding: "8px 10px", display: "flex", flexDirection: "column", gap: 5 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 2 }}>
            <span style={{ height: 6, width: "30%", background: "var(--v-ink)", display: "inline-block" }} />
            <VSparkline width={70} height={16} color="var(--v-ink)" />
          </div>
          {[0,1,2,3,4].map(i => (
            <div key={i} style={{
              display: "flex", alignItems: "center", gap: 7,
              paddingBottom: 4,
              borderBottom: i < 4 ? "1px solid var(--v-ink-06)" : "none",
            }}>
              <span style={{ width: 5, height: 5, background: i === 0 ? accent : "var(--v-ink-22)" }} />
              <span style={{ flex: 1, height: 4, background: "var(--v-ink-22)", width: `${55 + (i*9)%30}%` }} />
              <span className="v-mono" style={{ fontSize: 8, color: "var(--v-steel)" }}>${(120 + i * 37) % 200}k</span>
              <span style={{ width: 4, height: 4, background: i % 2 ? accent : "var(--v-ink-22)" }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { VBRAND, VoltMark, VoltWordmark, VMono, VChip, VHair, VAvatar, VSparkline, VBars, VDelta, VMiniUI });
