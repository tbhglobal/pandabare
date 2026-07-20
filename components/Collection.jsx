"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

const items = [
  { href: "/products/ankle-hugger/", name: "Ankle Socks", desc: "Low cut. High performance. Designed to move with you.", cta: "Shop ankle socks", img: "/images/products/card-ankle.jpg" },
  { href: "/products/crew-sock/", name: "Crew Socks", desc: "Classic fit. All-day comfort. Made for training and everything in between.", cta: "Shop crew socks", img: "/images/products/card-crew.jpg" },
  { href: "/products/wristy/", name: "Wristies", desc: "Absorb sweat. Stay focused. Performance you can feel.", cta: "Shop wristies", img: "/images/products/card-wristy.jpg" },
];

export default function Collection() {
  return (
    <section id="shop" style={{ padding: "96px 0", background: "var(--cream)" }}>
      <div className="wrap">
        <Reveal style={{ marginBottom: 48 }}>
          <span className="eyebrow">Our collection</span>
          <h2 style={{ fontFamily: "var(--font-serif), serif", fontWeight: 600, fontSize: "clamp(28px,3.4vw,42px)", textTransform: "uppercase", letterSpacing: "-0.01em", marginTop: 10 }}>
            Simple. Functional. Essential.
          </h2>
          <div style={{ width: 54, height: 3, background: "var(--sage)", marginTop: 16 }} />
        </Reveal>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 28 }} data-shop-grid>
          {items.map((p, i) => (
            <Reveal key={p.name} delay={0.08 * i}>
              <motion.a href={p.href} whileHover="h" initial="r" animate="r"
                style={{ display: "block" }}>
                <motion.div variants={{ r: {}, h: {} }} style={{ position: "relative", aspectRatio: "1/1", borderRadius: 4, overflow: "hidden", background: "var(--sand)", marginBottom: 22 }}>
                  <motion.div variants={{ r: { scale: 1 }, h: { scale: 1.05 } }} transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }} style={{ position: "absolute", inset: 0 }}>
                    <Image src={p.img} alt={p.name} fill sizes="(max-width:1000px) 100vw, 33vw" style={{ objectFit: "cover" }} />
                  </motion.div>
                </motion.div>
                <h3 style={{ fontFamily: "var(--font-serif), serif", fontWeight: 600, fontSize: 21, textTransform: "uppercase", letterSpacing: ".02em", textAlign: "center", marginBottom: 10 }}>{p.name}</h3>
                <p style={{ fontSize: 14, color: "var(--ink-soft)", textAlign: "center", maxWidth: "30ch", margin: "0 auto 20px" }}>{p.desc}</p>
                <span className="btn btn-line" style={{ display: "flex", width: "100%" }}>{p.cta}</span>
              </motion.a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
