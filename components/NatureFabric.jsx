"use client";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Reveal from "./Reveal";

const benefits = [
  { h: "Ultra soft", p: "Silky smooth feel that is gentle on your skin.", d: "M5 21c0-9 5-15 15-16 0 10-5 16-15 16z M8 18c3-5 6-8 10-9" },
  { h: "Breathable", p: "Promotes airflow and keeps you cool under pressure.", d: "M3 8h10a3 3 0 100-6 M3 13h14a3 3 0 110 6 M3 18h8" },
  { h: "Moisture wicking", p: "Pulls sweat away from your skin so you stay dry and focused.", d: "M12 3c4 5 6 8 6 11a6 6 0 01-12 0c0-3 2-6 6-11z" },
  { h: "Durable & strong", p: "Built to handle tough sessions and daily wear.", d: "M10 14l4-4 M8.5 15.5a3 3 0 01-4-4l2-2a3 3 0 014 0 M15.5 8.5a3 3 0 014 4l-2 2a3 3 0 01-4 0" },
  { h: "Odour resistant", p: "Naturally helps you stay fresh through longer days.", d: "M12 3l7 3v5c0 5-3 8-7 10-4-2-7-5-7-10V6z M9 12l2 2 4-4" },
  { h: "Eco friendly", p: "Sustainable from soil to skin.", d: "M12 3a9 9 0 100 18 9 9 0 000-18z M3 12h18 M12 3c3 3 3 15 0 18 M12 3c-3 3-3 15 0 18" },
];

export default function NatureFabric() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-9%", "9%"]);
  return (
    <section id="why" ref={ref} style={{ background: "var(--forest)", color: "var(--cream)", overflow: "hidden" }}>
      <div style={{ display: "grid", gridTemplateColumns: "clamp(170px,20vw,300px) minmax(260px,0.95fr) minmax(360px,1.35fr)", alignItems: "stretch" }} data-mat-grid>
        {/* full-bleed bamboo image on the left edge */}
        <div style={{ position: "relative", minHeight: 460, overflow: "hidden" }} data-fabric-img>
          <motion.div style={{ y, position: "absolute", inset: "-11% 0" }}>
            <Image src="/images/bamboo-texture.jpg" alt="Bamboo stems in warm light" fill sizes="24vw" style={{ objectFit: "cover" }} />
          </motion.div>
        </div>

        {/* heading + intro */}
        <div style={{ padding: "84px 44px 84px 56px", display: "flex", flexDirection: "column", justifyContent: "center" }} data-fabric-copy>
          <Reveal>
            <span className="eyebrow" style={{ color: "var(--beige)" }}>Why bamboo?</span>
            <h2 style={{ fontFamily: "var(--font-serif), serif", fontWeight: 600, fontSize: "clamp(28px,3.2vw,42px)", textTransform: "uppercase", lineHeight: 1.04, letterSpacing: "-0.01em", margin: "12px 0 20px" }}>
              Nature's<br />performance<br />fabric.
            </h2>
            <p style={{ color: "rgba(246,243,238,.75)", fontWeight: 300, maxWidth: "34ch", fontSize: 14.5 }}>
              Bamboo grows faster, uses less water and needs no pesticides. The result is a high-performance fibre that is better for you and better for the planet.
            </p>
          </Reveal>
        </div>

        {/* six benefits, 2 columns */}
        <div style={{ padding: "84px max(36px,5vw) 84px 8px", display: "flex", alignItems: "center" }} data-fabric-benes>
          <Reveal style={{ width: "100%" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "36px 40px" }} data-proofs>
              {benefits.map((b) => (
                <div key={b.h} style={{ display: "flex", gap: 15 }}>
                  <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="var(--beige)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 1 }}>
                    <path d={b.d} />
                  </svg>
                  <div>
                    <h4 style={{ fontSize: 12, fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--beige)", marginBottom: 6 }}>{b.h}</h4>
                    <p style={{ fontSize: 13, color: "rgba(246,243,238,.78)", fontWeight: 300, lineHeight: 1.5 }}>{b.p}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
