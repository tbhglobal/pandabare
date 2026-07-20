import Reveal from "./Reveal";

const items = [
  { h: "Fast shipping", p: "Australia wide", d: "M3 7h11v8H3z M14 10h4l3 3v2h-7z M7 17a2 2 0 104 0 M17 17a2 2 0 104 0" },
  { h: "30 day returns", p: "No stress", d: "M4 12a8 8 0 108-8 M4 12H1 M4 12l3-3 M4 12l3 3" },
  { h: "Secure payments", p: "100% safe checkout", d: "M6 11V8a6 6 0 0112 0v3 M5 11h14v9H5z M12 15v2" },
  { h: "1% for the planet", p: "We give back", d: "M12 21s-7-4.5-7-10a4 4 0 017-2.6A4 4 0 0119 11c0 5.5-7 10-7 10z" },
];

export default function TrustRow({ showHeading = true }) {
  return (
    <section style={{ padding: "64px 0", background: "var(--cream)", borderTop: "1px solid rgba(26,26,26,.07)" }}>
      <div className="wrap">
        {showHeading && (
        <h2 style={{ fontFamily: "var(--font-serif), serif", fontWeight: 600, fontSize: "clamp(20px,2.4vw,28px)", textTransform: "uppercase", textAlign: "center", letterSpacing: "-0.01em", marginBottom: 44 }}>
          Good for you. Good for the planet.
        </h2>)}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 24 }} data-trust-grid>
          {items.map((it) => (
            <div key={it.h} style={{ display: "flex", alignItems: "center", gap: 16, justifyContent: "center" }}>
              <svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="var(--forest)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                <path d={it.d} />
              </svg>
              <div>
                <b style={{ display: "block", fontSize: 13, fontWeight: 700, letterSpacing: ".04em", textTransform: "uppercase" }}>{it.h}</b>
                <span style={{ fontSize: 12.5, color: "var(--ink-soft)" }}>{it.p}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
