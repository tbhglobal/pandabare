import Image from "next/image";

const cols = [
  { h: "Shop", links: [["Comfort Kit","/comfort-kit/"],["Socks","/socks/"],["Sleep & Travel","/sleep-travel/"],["Gift Packs","/gift-packs/"],["Corporate","/corporate/"]] },
  { h: "Help", links: [["Shipping","/about/"],["Returns","/about/"],["FAQs","/about/"],["Care Guide","/about/"],["Contact Us","mailto:hello@pandabare.me"]] },
  { h: "About", links: [["Our Story","/about/"],["Why Bamboo","/about/"],["Sustainability","/about/"],["Corporate","/corporate/"]] },
];

export default function Footer() {
  return (
    <footer style={{ background: "var(--sand)", borderTop: "1px solid rgba(26,26,26,.08)", padding: "72px 0 34px" }}>
      <div className="wrap">
        <div style={{ display: "grid", gridTemplateColumns: "1.4fr .8fr .8fr .8fr 1.4fr", gap: 44, marginBottom: 60 }} data-foot-grid>
          <div>
            <Image src="/images/logo-horizontal.png" alt="PandaBare" width={145} height={40} style={{ height: 34, width: "auto", marginBottom: 16 }} />
            <p style={{ fontSize: 13.5, color: "var(--ink-soft)", maxWidth: "26ch" }}>
              Bamboo comfort essentials for slower living, better sleep, travel and gifting.
            </p>
          </div>
          {cols.map((c) => (
            <div key={c.h}>
              <h4 style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".24em", textTransform: "uppercase", color: "var(--ink-soft)", marginBottom: 16 }}>{c.h}</h4>
              {c.links.map(([l, h]) => <a key={l} href={h} style={{ display: "block", fontSize: 13.5, padding: "4px 0", opacity: 0.8 }}>{l}</a>)}
            </div>
          ))}
          <div>
            <h4 style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".24em", textTransform: "uppercase", color: "var(--ink-soft)", marginBottom: 16 }}>Stay in the loop</h4>
            <p style={{ fontSize: 13.5, color: "var(--ink-soft)", marginBottom: 16, maxWidth: "30ch" }}>Get comfort notes, product drops and 10% off your first order.</p>
            <form style={{ display: "flex" }}>
              <input type="email" placeholder="Enter your email" style={{ flex: 1, padding: "13px 16px", border: "1px solid rgba(26,26,26,.25)", borderRight: "none", borderRadius: "4px 0 0 4px", background: "var(--cream)", fontFamily: "inherit", fontSize: 13.5, outline: "none" }} />
              <button type="button" aria-label="Sign up" style={{ width: 48, border: "none", borderRadius: "0 4px 4px 0", background: "var(--forest)", color: "var(--cream)", fontSize: 17, cursor: "pointer" }}>→</button>
            </form>
          </div>
        </div>
        <div style={{ borderTop: "1px solid rgba(26,26,26,.1)", paddingTop: 26, display: "flex", justifyContent: "space-between", fontSize: 12, color: "var(--ink-soft)" }}>
          <span>© 2026 PandaBare. All rights reserved.</span>
          <span>Privacy Policy · Terms of Service</span>
        </div>
      </div>
    </footer>
  );
}
