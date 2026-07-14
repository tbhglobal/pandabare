"use client";
import { motion } from "framer-motion";

export default function Marquee() {
  const items = ["Ultra soft bamboo", "Breathable & moisture-wicking", "Naturally gentle on skin", "Lower impact by design", "Made for slower living"];
  const row = items.map((t, i) => (
    <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: 40, marginRight: 40, fontSize: 12, letterSpacing: ".26em", textTransform: "uppercase", color: "var(--ink-soft)", whiteSpace: "nowrap" }}>
      {t} <span style={{ color: "var(--sage)" }}>●</span>
    </span>
  ));
  return (
    <div style={{ overflow: "hidden", borderTop: "1px solid rgba(26,26,26,.08)", borderBottom: "1px solid rgba(26,26,26,.08)", padding: "16px 0", background: "var(--cream)" }}>
      <motion.div style={{ display: "flex", width: "max-content" }} animate={{ x: ["0%", "-50%"] }} transition={{ duration: 32, ease: "linear", repeat: Infinity }}>
        <div>{row}</div><div>{row}</div>
      </motion.div>
    </div>
  );
}
