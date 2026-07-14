"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

const moments = [
  { small: "At home", big: "Unwind and recharge after a long day.", img: "/images/banner-couch.jpg", icon: "M4 11l8-7 8 7M6 10v10h12V10" },
  { small: "In bed", big: "Better sleep starts with better comfort.", panel: true, icon: "M3 12h18M5 12V8a2 2 0 012-2h10a2 2 0 012 2v4M4 12v6M20 12v6" },
  { small: "On the go", big: "Travel lighter with essentials that help.", img: "/images/onthego.jpg", icon: "M10 21l2-6 7-7a2.1 2.1 0 00-3-3l-7 7-6 2 2 2 5-1.5L8.5 16z" },
  { small: "As a gift", big: "Thoughtful, practical and always appreciated.", img: "/images/gift-trio.jpg", icon: "M4 9h16v11H4zM4 9h16M12 9v11" },
];

export default function Moments() {
  return (
    <section id="moments" style={{ padding: "100px 0", background: "var(--cream)" }}>
      <div className="wrap">
        <Reveal>
          <h2 style={{ fontFamily: "var(--font-serif), serif", fontWeight: 500, fontSize: "clamp(28px,3.2vw,40px)", textAlign: "center", marginBottom: 56 }}>
            Made for the moments you actually <em style={{ fontStyle: "italic", color: "var(--sage)" }}>feel.</em>
          </h2>
        </Reveal>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }} data-mom-grid>
          {moments.map((m, i) => (
            <Reveal key={m.small} delay={0.08 * i}>
              <motion.div whileHover={{ y: -8 }} transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}>
                <div style={{ position: "relative", aspectRatio: "4/3.4", borderRadius: 4, overflow: "hidden", background: "var(--sand)", marginBottom: 18 }}>
                  <div style={{ position: "absolute", top: 14, left: 14, width: 44, height: 44, borderRadius: "50%", background: "rgba(246,243,238,.92)", display: "grid", placeItems: "center", zIndex: 2 }}>
                    <svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="var(--forest)" strokeWidth="1.5"><path d={m.icon} /></svg>
                  </div>
                  {m.img ? (
                    <Image src={m.img} alt={m.big} fill sizes="(max-width:1000px) 50vw, 25vw" style={{ objectFit: "cover" }} />
                  ) : (
                    <div style={{ width: "100%", height: "100%", background: "var(--charcoal)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <svg viewBox="0 0 200 130" width="52%"><ellipse cx="100" cy="62" rx="78" ry="43" fill="#F6F3EE" opacity=".12"/><ellipse cx="100" cy="62" rx="78" ry="43" fill="none" stroke="#CFC5AD" strokeWidth="2"/><path d="M100 52c2.5 3.5 6 4 6 4s-1.2 5-6 6.2c-4.8-1.2-6-6.2-6-6.2s3.5-.5 6-4z" fill="#59835E"/></svg>
                    </div>
                  )}
                </div>
                <h3 style={{ fontFamily: "var(--font-serif), serif", fontWeight: 500, fontSize: 19, marginBottom: 5 }}>{m.small}</h3>
                <p style={{ fontSize: 13.5, color: "var(--ink-soft)" }}>{m.big}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
