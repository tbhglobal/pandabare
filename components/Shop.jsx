"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

const products = [
  { href: "/products/crew-sock/", name: "Bamboo Crew Sock", price: "$17.95", sub: "Midnight Black · Red Panda · Royal Blue", img: "/images/products/crew-black.jpg" },
  { href: "/products/ankle-hugger/", name: "Ankle Hugger", price: "$15.95", sub: "Midnight Black · Red Panda · Royal Blue · Snow White", img: "/images/products/ankle-black.jpg" },
  { href: "/products/wristy/", name: "Wristy | Bamboo Wristband", price: "$12.95", sub: "Black · White · Red", img: "/images/products/wristy-black.jpg" },
  { href: "/products/sock-bundle/", name: "Sock Bundle | 3-Pack", price: "$45.00", sub: "Mix any three pairs, save $8.85", img: "/images/products/bundle.jpg" },
];

export default function Shop() {
  return (
    <section id="shop" style={{ padding: "96px 0", background: "var(--cream)" }}>
      <div className="wrap">
        <Reveal style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 44 }}>
          <h2 style={{ fontFamily: "var(--font-serif), serif", fontWeight: 500, fontSize: "clamp(28px,3.2vw,40px)" }}>Shop comfort essentials</h2>
          <a className="textlink" href="#">View all products →</a>
        </Reveal>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 20 }} data-shop-grid>
          {products.map((p, i) => (
            <Reveal key={p.name} delay={0.08 * i}>
              <motion.div onClick={() => window.location.href = p.href} role="link" tabIndex={0} whileHover={{ y: -6, boxShadow: "0 16px 38px rgba(26,26,26,.10)" }} transition={{ duration: 0.3 }}
                style={{ borderRadius: 4, overflow: "hidden", background: "var(--sand)", cursor: "pointer" }}>
                <div style={{ position: "relative", aspectRatio: "1/1.05", overflow: "hidden" }}>
                  {p.img ? (
                    <Image src={p.img} alt={p.name} fill sizes="(max-width:1000px) 50vw, 25vw" style={{ objectFit: "cover" }} />
                  ) : (
                    <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <svg viewBox="0 0 200 130" width="65%"><ellipse cx="100" cy="62" rx="82" ry="46" fill="#1A1A1A"/><path d="M18 62 Q10 50 16 42 M182 62 Q190 50 184 42" stroke="#1A1A1A" strokeWidth="5" fill="none" strokeLinecap="round"/><path d="M100 52c2.5 3.5 6 4 6 4s-1.2 5-6 6.2c-4.8-1.2-6-6.2-6-6.2s3.5-.5 6-4z" fill="#59835E"/></svg>
                    </div>
                  )}
                </div>
                <div style={{ padding: "18px 20px 22px", background: "var(--cream)" }}>
                  <b style={{ display: "block", fontWeight: 500, fontSize: 14.5, marginBottom: 3 }}>{p.name}</b>
                  <span style={{ fontSize: 13, color: "var(--ink-soft)" }}>{p.price}</span>
                  <span style={{ display: "block", fontSize: 12, color: "var(--ink-soft)", marginTop: 2 }}>{p.sub}</span>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
