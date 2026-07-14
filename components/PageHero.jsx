import Image from "next/image";

export default function PageHero({ eyebrow, title, copy, img, alt }) {
  return (
    <section style={{ background: "var(--sand)" }}>
      <div className="wrap" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", alignItems: "stretch", padding: 0 }} data-hero-grid>
        <div style={{ padding: "72px 48px 72px 36px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          {eyebrow && <span className="eyebrow" style={{ display: "block", marginBottom: 14 }}>{eyebrow}</span>}
          <h1 style={{ fontFamily: "var(--font-serif), serif", fontWeight: 500, fontSize: "clamp(34px,4vw,52px)", lineHeight: 1.12, letterSpacing: "-0.01em", marginBottom: 16 }}>{title}</h1>
          {copy && <p style={{ color: "var(--ink-soft)", maxWidth: "46ch" }}>{copy}</p>}
        </div>
        <div style={{ position: "relative", minHeight: 340 }}>
          <Image src={img} alt={alt || title} fill sizes="50vw" style={{ objectFit: "cover" }} priority />
        </div>
      </div>
    </section>
  );
}
