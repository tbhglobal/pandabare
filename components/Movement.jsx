"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

const uses = [
  { h: "Training", d: "M6 12h12 M4 9v6 M20 9v6 M2 11v2 M22 11v2" },
  { h: "Running", d: "M13 4a1.6 1.6 0 100 .01 M9 20l2-5 3-2 1 4 3 2 M7 12l3-3 3 1 2 3" },
  { h: "Sport", d: "M12 3a9 9 0 100 18 9 9 0 000-18z M3.5 9h17 M3.5 15h17 M12 3c3 3 3 15 0 18 M12 3c-3 3-3 15 0 18" },
  { h: "Everyday", d: "M12 3c3 4 5 6 5 10a5 5 0 01-10 0c0-4 2-6 5-10z" },
];

export default function Movement() {
  return (
    <section style={{ padding: "88px 0", background: "var(--sand)" }}>
      <div className="wrap" style={{ display: "grid", gridTemplateColumns: "1fr 1.15fr", gap: 56, alignItems: "center" }} data-move-grid>
        <Reveal>
          <span className="eyebrow">Made for movement</span>
          <h2 style={{ fontFamily: "var(--font-serif), serif", fontWeight: 600, fontSize: "clamp(28px,3.4vw,44px)", textTransform: "uppercase", lineHeight: 1.05, letterSpacing: "-0.01em", margin: "12px 0 18px" }}>
            From the gym<br />to everyday.
          </h2>
          <p style={{ color: "var(--ink-soft)", maxWidth: "40ch", marginBottom: 40 }}>
            Our essentials are designed to support you in every rep, run and recovery.
          </p>
          <div style={{ display: "flex", gap: 44, flexWrap: "wrap" }}>
            {uses.map((u) => (
              <div key={u.h} style={{ textAlign: "center" }}>
                <svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="var(--forest)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" style={{ margin: "0 auto 10px" }}>
                  <path d={u.d} />
                </svg>
                <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase", color: "var(--charcoal)" }}>{u.h}</span>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <motion.div whileHover={{ scale: 1.01 }} transition={{ duration: 0.5 }}
            style={{ position: "relative", aspectRatio: "16/10", borderRadius: 4, overflow: "hidden", background: "var(--beige)" }}>
            <Image src="/images/banner-ankle-red.jpg" alt="PandaBare bamboo ankle socks worn at home" fill sizes="(max-width:1000px) 100vw, 55vw" style={{ objectFit: "cover", objectPosition: "center 40%" }} />
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
