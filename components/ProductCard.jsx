import Image from "next/image";

export default function ProductCard({ href, img, name, price, sub }) {
  return (
    <a href={href} style={{ display: "block", borderRadius: 4, overflow: "hidden", background: "var(--sand)" }}>
      <div style={{ position: "relative", aspectRatio: "1/1.05", overflow: "hidden" }}>
        <Image src={img} alt={name} fill sizes="(max-width:1000px) 50vw, 25vw" style={{ objectFit: "cover" }} />
      </div>
      <div style={{ padding: "18px 20px 22px", background: "var(--cream)" }}>
        <b style={{ display: "block", fontWeight: 500, fontSize: 14.5, marginBottom: 3 }}>{name}</b>
        <span style={{ fontSize: 13, color: "var(--ink-soft)" }}>{price}</span>
        {sub && <span style={{ display: "block", fontSize: 12, color: "var(--ink-soft)", marginTop: 2 }}>{sub}</span>}
      </div>
    </a>
  );
}
