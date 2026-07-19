"use client";
import Image from "next/image";
import { useState } from "react";
import { useCart } from "@/lib/cart";

export default function ProductDetail({ product }) {
  const [colour, setColour] = useState(product.colours[0]?.name);
  const current = product.colours.find((c) => c.name === colour);
  const mainImg = (current && current.img) || product.img;
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const [open, setOpen] = useState(0);

  const cart = useCart();
  const add = () => {
    if (product.cartId === null) { window.location.href = "/socks/"; return; }
    if (cart) {
      const colourSlugMap = { "Midnight Black": "black", "Red Panda": "red", "Royal Blue": "blue", "Snow White": "white", Black: "black", White: "white", Red: "red" };
      const slug = colourSlugMap[colour] || "";
      cart.add({ id: `${product.cartPrefix}-${slug}`, name: product.name, colour, qty, price: parseFloat(String(product.price).replace(/[^0-9.]/g, "")), img: mainImg });
    }
    setAdded(true); setTimeout(() => setAdded(false), 2200);
  };

  return (
    <section style={{ padding: "72px 0", background: "var(--cream)" }}>
      <div className="wrap" style={{ display: "grid", gridTemplateColumns: "1.1fr .9fr", gap: 64 }} data-hero-grid>
        <div style={{ position: "relative", aspectRatio: "1/0.95", borderRadius: 4, overflow: "hidden", background: "var(--sand)" }}>
          <Image key={mainImg} src={mainImg} alt={`${product.name} in ${colour || ""}`} fill sizes="55vw" style={{ objectFit: "cover" }} priority />
        </div>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <h2 style={{ fontFamily: "var(--font-serif), serif", fontWeight: 500, fontSize: "clamp(26px,2.6vw,36px)", marginBottom: 8 }}>{product.name}</h2>
          <div style={{ fontSize: 20, fontWeight: 500, marginBottom: 18 }}>{product.price}</div>
          <p style={{ color: "var(--ink-soft)", marginBottom: 26 }}>{product.blurb}</p>

          {product.colours.length > 0 && (
            <div style={{ marginBottom: 26 }}>
              <div style={{ fontSize: 12, letterSpacing: ".18em", textTransform: "uppercase", fontWeight: 700, color: "var(--ink-soft)", marginBottom: 10 }}>
                Colour: <span style={{ color: "var(--charcoal)" }}>{colour}</span>
              </div>
              <div style={{ display: "flex", gap: 10 }}>
                {product.colours.map((c) => (
                  <button key={c.name} onClick={() => setColour(c.name)} aria-label={c.name}
                    style={{ width: 32, height: 32, borderRadius: "50%", background: c.hex, cursor: "pointer",
                      border: colour === c.name ? "2px solid var(--forest)" : "2px solid rgba(26,26,26,.15)",
                      outline: colour === c.name ? "2px solid var(--cream)" : "none", outlineOffset: -4 }} />
                ))}
              </div>
            </div>
          )}

          <div style={{ display: "flex", gap: 14, alignItems: "stretch", marginBottom: 30 }}>
            <div style={{ display: "flex", alignItems: "center", border: "1px solid rgba(26,26,26,.25)", borderRadius: 4 }}>
              <button onClick={() => setQty(Math.max(1, qty - 1))} style={{ width: 40, height: "100%", border: "none", background: "none", fontSize: 17, cursor: "pointer" }}>−</button>
              <span style={{ width: 28, textAlign: "center", fontWeight: 500 }}>{qty}</span>
              <button onClick={() => setQty(qty + 1)} style={{ width: 40, height: "100%", border: "none", background: "none", fontSize: 17, cursor: "pointer" }}>+</button>
            </div>
            <button className="btn btn-forest" style={{ flex: 1 }} onClick={add}>{added ? "Added to bag ✓" : (product.cartId === null ? "Pick your three pairs" : "Add to bag")}</button>
          </div>

          <div style={{ borderTop: "1px solid rgba(26,26,26,.12)" }}>
            {product.details.map(([t, body], i) => (
              <div key={t} style={{ borderBottom: "1px solid rgba(26,26,26,.12)" }}>
                <button onClick={() => setOpen(open === i ? -1 : i)}
                  style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 0", background: "none", border: "none", cursor: "pointer", fontSize: 14, fontWeight: 500 }}>
                  {t}<span style={{ color: "var(--sage)", fontSize: 18 }}>{open === i ? "−" : "+"}</span>
                </button>
                {open === i && <p style={{ fontSize: 13.5, color: "var(--ink-soft)", paddingBottom: 18, maxWidth: "56ch" }}>{body}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
