"use client";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import Reveal from "./Reveal";

const quotes = [
  { text: "The socks are unbelievably soft, the sleep mask is amazing and the whole kit is perfect for travel.", by: "Jessica M." },
  { text: "Bought a pair, went back for ten more as gifts. Everyone asked where they were from.", by: "Sarah M." },
  { text: "Sensitive skin, and most socks leave me itchy by lunch. A month in these and I have forgotten what that felt like.", by: "James K." },
];

export default function Reviews() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % quotes.length), 5200);
    return () => clearInterval(t);
  }, []);
  return (
    <section style={{ padding: "96px 0", background: "var(--cream)" }}>
      <div className="wrap" style={{ display: "grid", gridTemplateColumns: ".9fr 1.4fr .9fr", gap: 44, alignItems: "center" }} data-rev-grid>
        <Reveal>
          <h2 style={{ fontFamily: "var(--font-serif), serif", fontWeight: 500, fontSize: "clamp(28px,3.2vw,40px)", marginBottom: 20 }}>Comfort they can feel.</h2>
          <a className="textlink" href="#">Read more reviews →</a>
        </Reveal>
        <div style={{ textAlign: "center", padding: "0 20px", minHeight: 170 }}>
          <div style={{ color: "var(--sage)", letterSpacing: 4, fontSize: 14, marginBottom: 18 }}>★★★★★</div>
          <AnimatePresence mode="wait">
            <motion.blockquote key={i}
              initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}>
              <p style={{ fontFamily: "var(--font-serif), serif", fontSize: 19, lineHeight: 1.55, marginBottom: 16 }}>&ldquo;{quotes[i].text}&rdquo;</p>
              <small style={{ fontSize: 12, letterSpacing: ".16em", textTransform: "uppercase", color: "var(--ink-soft)" }}>— {quotes[i].by}</small>
            </motion.blockquote>
          </AnimatePresence>
          <div style={{ display: "flex", gap: 8, justifyContent: "center", marginTop: 22 }}>
            {quotes.map((_, d) => (
              <button key={d} onClick={() => setI(d)} aria-label={`Review ${d + 1}`}
                style={{ width: 8, height: 8, borderRadius: "50%", border: "none", cursor: "pointer", background: d === i ? "var(--forest)" : "var(--beige)", transition: "background .3s" }} />
            ))}
          </div>
        </div>
        <Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
            <div style={{ position: "relative", aspectRatio: "1", borderRadius: 4, overflow: "hidden" }}>
              <Image src="/images/home.jpg" alt="Cosy evening coffee at home" fill sizes="180px" style={{ objectFit: "cover" }} />
            </div>
            <div style={{ position: "relative", aspectRatio: "1", borderRadius: 4, overflow: "hidden" }}>
              <Image src="/images/flatlay-2.jpg" alt="PandaBare socks and wristbands laid out" fill sizes="180px" style={{ objectFit: "cover" }} />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
