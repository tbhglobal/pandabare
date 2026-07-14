"use client";
import Image from "next/image";
import Reveal from "./Reveal";

export default function Gifting() {
  return (
    <section id="gift" style={{ background: "var(--sand)" }}>
      <div className="wrap" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", padding: 0 }} data-gift-grid>
        <div style={{ position: "relative", minHeight: 520 }}>
          <Image src="/images/hero.jpg" alt="PandaBare bamboo socks and wristband in bamboo leaves" fill sizes="50vw" style={{ objectFit: "cover" }} />
        </div>
        <div style={{ padding: "96px 36px 96px 72px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <Reveal>
            <span className="eyebrow" style={{ display: "block", marginBottom: 14 }}>Give better</span>
            <h2 style={{ fontFamily: "var(--font-serif), serif", fontWeight: 500, fontSize: "clamp(28px,3.2vw,40px)", marginBottom: 18 }}>
              Thoughtful gifts.<br />Made better.
            </h2>
            <p style={{ color: "var(--ink-soft)", maxWidth: "44ch", marginBottom: 34 }}>
              Beautifully packaged bamboo essentials for birthdays, thank-yous, new parents, travel lovers and clients.
            </p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <a className="btn btn-forest" href="/gift-packs/">Shop Gift Packs</a>
              <a className="btn btn-line" href="/corporate/">Corporate Gifting</a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
