"use client";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const words = ["Soft", "essentials"];
const words2 = ["for", "slower", "living."];

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);
  const copyY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } } };
  const word = { hidden: { opacity: 0, y: 34 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } } };

  return (
    <section ref={ref} style={{ background: "var(--cream)", overflow: "hidden" }}>
      <div className="wrap" style={{ display: "grid", gridTemplateColumns: "44% 56%", alignItems: "stretch" }} data-hero-grid>
        <motion.div style={{ y: copyY, padding: "88px 56px 72px 0", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <motion.h1 variants={stagger} initial="hidden" animate="show"
            style={{ fontFamily: "var(--font-serif), serif", fontWeight: 500, fontSize: "clamp(40px,4.6vw,60px)", lineHeight: 1.12, letterSpacing: "-0.01em", marginBottom: 22 }}>
            {words.map((w) => <motion.span key={w} variants={word} style={{ display: "inline-block", marginRight: "0.28em" }}>{w}</motion.span>)}
            <br />
            {words2.map((w) => <motion.span key={w} variants={word} style={{ display: "inline-block", marginRight: "0.28em", color: "var(--sage)" }}>{w}</motion.span>)}
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.7 }}
            style={{ color: "var(--ink-soft)", maxWidth: "42ch", marginBottom: 32 }}>
            The PandaBare Comfort Kit brings together bamboo socks, a soft sleep mask and travel-ready essentials for everyday comfort, rest and gifting.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.65, duration: 0.7 }}
            style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <a className="btn btn-forest" href="/comfort-kit/">Shop the Comfort Kit</a>
            <a className="btn btn-line" href="/gift-packs/">Explore Gift Packs</a>
          </motion.div>
        </motion.div>
        <div style={{ position: "relative", minHeight: 560, overflow: "hidden" }}>
          <motion.div style={{ y: imgY, position: "absolute", inset: "-8% 0" }}>
            <Image src="/images/hero-couple.jpg" alt="Couple relaxing on the couch in PandaBare bamboo socks" fill sizes="56vw" style={{ objectFit: "cover" }} priority />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
