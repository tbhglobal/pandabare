"use client";
import Image from "next/image";
import Reveal from "./Reveal";

const items = [
  { title: "Bamboo Bed Socks", copy: "Soft, breathable and designed for all-day comfort.", img: "/images/socks-cutout.png", contain: true },
  { title: "Sleep Mask", copy: "Block light, drift deeper and wake refreshed.", panel: "mask" },
  { title: "Travel Pouch", copy: "Keep your essentials organised on the go.", panel: "pouch" },
  { title: "Gift-Ready Packaging", copy: "Sustainably packaged and ready to impress.", img: "/images/bamboo-pack.jpg" },
];

function MaskIllus() {
  return (
    <svg viewBox="0 0 200 130" width="80%"><ellipse cx="100" cy="62" rx="82" ry="46" fill="#1A1A1A"/><path d="M18 62 Q10 50 16 42 M182 62 Q190 50 184 42" stroke="#1A1A1A" strokeWidth="5" fill="none" strokeLinecap="round"/><path d="M100 52c2.5 3.5 6 4 6 4s-1.2 5-6 6.2c-4.8-1.2-6-6.2-6-6.2s3.5-.5 6-4z" fill="#59835E"/></svg>
  );
}
function PouchIllus() {
  return (
    <svg viewBox="0 0 200 150" width="72%"><rect x="45" y="55" width="110" height="75" rx="4" fill="#1A1A1A"/><rect x="38" y="42" width="124" height="20" rx="3" fill="#2E2E2E"/><path d="M100 42v88" stroke="#59835E" strokeWidth="7"/><path d="M100 42c-14 0-24-8-24-16a10 10 0 0124-4 10 10 0 0124 4c0 8-10 16-24 16z" fill="none" stroke="#59835E" strokeWidth="4"/></svg>
  );
}

export default function KitBreakdown() {
  return (
    <section id="kit" style={{ background: "var(--sand)", padding: "96px 0" }}>
      <div className="wrap">
        <div style={{ display: "grid", gridTemplateColumns: "1.1fr repeat(4, 1fr)", gap: 0 }} data-kit-grid>
          <Reveal style={{ paddingRight: 48 }}>
            <h2 style={{ fontFamily: "var(--font-serif), serif", fontWeight: 500, fontSize: "clamp(28px,3.2vw,40px)", lineHeight: 1.18, marginBottom: 16 }}>
              What&apos;s inside the Comfort Kit
            </h2>
            <p style={{ color: "var(--ink-soft)", fontSize: 14.5, marginBottom: 26, maxWidth: "26ch" }}>
              Thoughtfully curated pieces made from premium bamboo for comfort that feels good, wherever you are.
            </p>
            <a className="textlink" href="#">View full kit details →</a>
          </Reveal>
          {items.map((it, i) => (
            <Reveal key={it.title} delay={0.1 * (i + 1)} style={{ padding: "0 26px", borderLeft: "1px solid rgba(26,26,26,.12)" }}>
              <div style={{ height: 170, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 22, borderRadius: 4, overflow: "hidden", position: "relative" }}>
                {it.img && it.contain && <Image src={it.img} alt={it.title} width={300} height={300} style={{ maxHeight: "100%", width: "auto", objectFit: "contain" }} />}
                {it.img && !it.contain && <Image src={it.img} alt={it.title} fill sizes="240px" style={{ objectFit: "cover" }} />}
                {it.panel === "mask" && <MaskIllus />}
                {it.panel === "pouch" && <PouchIllus />}
              </div>
              <h3 style={{ fontFamily: "var(--font-serif), serif", fontWeight: 500, fontSize: 18, marginBottom: 8 }}>{it.title}</h3>
              <p style={{ fontSize: 13, color: "var(--ink-soft)", lineHeight: 1.55 }}>{it.copy}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
