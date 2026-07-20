import Announce from "@/components/Announce";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { getGuidesByCluster } from "@/lib/guides";

export const metadata = {
  title: "Guides & Journal | PandaBare",
  description: "Practical guides on bamboo socks, feet, sleep, travel and thoughtful gifting from PandaBare. Honest, useful and Australian.",
};

export default function GuidesIndex() {
  const groups = getGuidesByCluster();
  const total = groups.reduce((n, g) => n + g.items.length, 0);

  return (
    <>
      <Announce />
      <Header />
      <main>
        {/* header band */}
        <section style={{ background: "var(--forest)", color: "var(--cream)", padding: "84px 0 72px" }}>
          <div className="wrap">
            <span className="eyebrow" style={{ color: "var(--beige)" }}>The PandaBare journal</span>
            <h1 style={{ fontFamily: "var(--font-serif), serif", fontWeight: 700, fontSize: "clamp(34px,4.4vw,56px)", textTransform: "uppercase", letterSpacing: "-0.01em", lineHeight: 1.05, margin: "14px 0 16px" }}>
              Guides worth reading.
            </h1>
            <p style={{ color: "rgba(246,243,238,.78)", fontWeight: 300, maxWidth: "56ch", fontSize: 16.5 }}>
              Straight-talking guides on bamboo, socks, feet, sleep, travel and gifting. No fluff, just what actually helps.
            </p>
          </div>
        </section>

        {total === 0 ? (
          <section style={{ padding: "80px 0", background: "var(--cream)" }}>
            <div className="wrap"><p style={{ color: "var(--ink-soft)" }}>New guides are on the way.</p></div>
          </section>
        ) : (
          groups.map((group) => (
            <section key={group.key} style={{ padding: "64px 0", background: "var(--cream)", borderTop: "1px solid rgba(26,26,26,.06)" }}>
              <div className="wrap">
                <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 28 }}>
                  <h2 style={{ fontFamily: "var(--font-serif), serif", fontWeight: 600, fontSize: "clamp(22px,2.6vw,30px)", textTransform: "uppercase", letterSpacing: "-0.01em" }}>{group.label}</h2>
                  <span style={{ fontSize: 12, letterSpacing: ".18em", textTransform: "uppercase", color: "var(--sage)" }}>{group.items.length} guides</span>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 22 }} data-shop-grid>
                  {group.items.map((g) => (
                    <a key={g.slug} href={`/guides/${g.slug}/`} style={{ display: "flex", flexDirection: "column", background: "#fff", borderRadius: 6, overflow: "hidden", border: "1px solid rgba(26,26,26,.08)" }} className="guide-card">
                      <div style={{ position: "relative", aspectRatio: "16/10", background: "var(--sand)" }}>
                        {g.hero ? (
                          <Image src={g.hero.src} alt={g.hero.alt} fill sizes="(max-width:1000px) 100vw, 33vw" style={{ objectFit: "cover" }} />
                        ) : (
                          <div style={{ position: "absolute", inset: 0, display: "grid", placeItems: "center", background: "var(--forest)" }}>
                            <svg viewBox="0 0 24 24" width="34" height="34" fill="none" stroke="var(--beige)" strokeWidth="1.3"><path d="M5 21c0-9 5-15 15-16 0 10-5 16-15 16z M8 18c3-5 6-8 10-9" /></svg>
                          </div>
                        )}
                      </div>
                      <div style={{ padding: "18px 20px 22px", display: "flex", flexDirection: "column", flex: 1 }}>
                        <span style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: ".2em", textTransform: "uppercase", color: "var(--sage)", marginBottom: 8 }}>{g.clusterLabel}</span>
                        <h3 style={{ fontFamily: "var(--font-serif), serif", fontWeight: 600, fontSize: 18, lineHeight: 1.25, marginBottom: 8 }}>{g.title}</h3>
                        <p style={{ fontSize: 13, color: "var(--ink-soft)", lineHeight: 1.5, marginBottom: 14, flex: 1 }}>{g.description}</p>
                        <span className="textlink" style={{ alignSelf: "flex-start" }}>Read guide →</span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </section>
          ))
        )}
      </main>
      <Footer />
    </>
  );
}
