"use client";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Reveal from "./Reveal";

const proofs = ["Ultra soft feel", "Breathable fibre", "Moisture wicking", "Lower impact materials"];

export default function Material() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  return (
    <section id="why" ref={ref} style={{ background: "var(--forest)", color: "var(--cream)", overflow: "hidden" }}>
      <div className="wrap" style={{ display: "grid", gridTemplateColumns: "1.05fr .95fr", padding: 0 }} data-mat-grid>
        <div style={{ padding: "88px 64px 88px 36px" }}>
          <Reveal>
            <h2 style={{ fontFamily: "var(--font-serif), serif", fontWeight: 500, fontSize: "clamp(28px,3.2vw,40px)", marginBottom: 18 }}>
              Maximum comfort.<br />Minimum impact.
            </h2>
            <p style={{ color: "rgba(246,243,238,.75)", fontWeight: 300, maxWidth: "44ch", marginBottom: 44 }}>
              We choose bamboo for its incredible softness and natural performance, and for the planet.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 20 }} data-proofs>
              {proofs.map((p) => (
                <div key={p} style={{ fontSize: 12, lineHeight: 1.45, color: "rgba(246,243,238,.85)", borderTop: "1px solid rgba(246,243,238,.25)", paddingTop: 14 }}>{p}</div>
              ))}
            </div>
          </Reveal>
        </div>
        <div style={{ position: "relative", minHeight: 440, overflow: "hidden" }}>
          <motion.div style={{ y, position: "absolute", inset: "-12% 0" }}>
            <Image src="/images/bamboo-texture.jpg" alt="Bamboo leaves in warm light" fill sizes="48vw" style={{ objectFit: "cover" }} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
