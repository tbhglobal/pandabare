import Image from "next/image";

const cols = [
  { h: "Shop", links: [["Ankle Socks","/products/ankle-hugger/"],["Crew Socks","/products/crew-sock/"],["Wristies","/products/wristy/"],["All Socks","/socks/"]] },
  { h: "Help", links: [["Shipping","/help/#shipping"],["Returns","/help/#returns"],["FAQs","/help/#faq"],["Care Guide","/help/#care"],["Contact Us","mailto:orders@pandabare.me"]] },
  { h: "About", links: [["Our Story","/about/"],["Why Bamboo","/about/"],["Guides & Journal","/guides/"],["Sustainability","/about/"],["Corporate","/corporate/"]] },
];

export default function Footer() {
  return (
    <footer style={{ background: "var(--sand)", borderTop: "1px solid rgba(26,26,26,.08)", padding: "72px 0 34px" }}>
      <div className="wrap">
        <div style={{ display: "grid", gridTemplateColumns: "1.4fr .8fr .8fr .8fr 1.4fr", gap: 44, marginBottom: 60 }} data-foot-grid>
          <div>
            <Image src="/images/logo-horizontal.png" alt="PandaBare" width={145} height={40} style={{ height: 34, width: "auto", marginBottom: 16 }} />
            <p style={{ fontSize: 13.5, color: "var(--ink-soft)", maxWidth: "26ch" }}>
              Soft bamboo socks and wristbands, made for everyday comfort.
            </p>
          </div>
          {cols.map((c) => (
            <div key={c.h}>
              <h4 style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".24em", textTransform: "uppercase", color: "var(--ink-soft)", marginBottom: 16 }}>{c.h}</h4>
              {c.links.map(([l, h]) => <a key={l} href={h} style={{ display: "block", fontSize: 13.5, padding: "4px 0", opacity: 0.8 }}>{l}</a>)}
            </div>
          ))}
          <div>
            <h4 style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".24em", textTransform: "uppercase", marginBottom: 16 }}>Need a hand?</h4>
            <p style={{ fontSize: 13.5 }}>For product and order enquiries, <a href="mailto:orders@pandabare.me" style={{ textDecoration: "underline" }}>email orders@pandabare.me</a>.</p>
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
