"use client";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const line1 = ["Naturally", "better."];
const line2 = ["Performance", "that", "lasts."];

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);

  const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } } };
  const word = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } } };

  return (
    <section ref={ref} style={{ position: "relative", overflow: "hidden", background: "var(--charcoal)" }}>
      <div style={{ position: "relative", minHeight: "min(86vh, 780px)" }}>
        <motion.div style={{ y: imgY, position: "absolute", inset: "-6% 0" }}>
          <Image src="/images/hero-couple-bed.jpg" alt="Couple relaxing in bed wearing PandaBare bamboo socks" fill priority sizes="100vw"
            style={{ objectFit: "cover", objectPosition: "center 42%" }} />
        </motion.div>
        {/* left scrim so the headline punches */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, rgba(15,20,16,.86) 0%, rgba(15,20,16,.62) 34%, rgba(15,20,16,.18) 58%, rgba(15,20,16,0) 78%)" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(15,20,16,.28) 0%, transparent 22%, transparent 72%, rgba(15,20,16,.42) 100%)" }} />

        <div className="wrap" style={{ position: "relative", minHeight: "min(86vh, 780px)", display: "flex", alignItems: "center" }}>
          <div style={{ maxWidth: 560, color: "var(--cream)", padding: "40px 0" }}>
            <motion.h1 variants={stagger} initial="hidden" animate="show"
              style={{ fontFamily: "var(--font-serif), serif", fontWeight: 600, fontSize: "clamp(44px,6vw,74px)", lineHeight: 1.02, letterSpacing: "-0.01em", marginBottom: 24, textTransform: "uppercase" }}>
              <span style={{ display: "block" }}>
                {line1.map((w) => <motion.span key={w} variants={word} style={{ display: "inline-block", marginRight: "0.24em" }}>{w}</motion.span>)}
              </span>
              <span style={{ display: "block", color: "var(--sage)" }}>
                {line2.map((w) => <motion.span key={w} variants={word} style={{ display: "inline-block", marginRight: "0.24em" }}>{w}</motion.span>)}
              </span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55, duration: 0.7 }}
              style={{ color: "rgba(246,243,238,.86)", fontWeight: 300, maxWidth: "40ch", fontSize: 16.5, marginBottom: 32 }}>
              PandaBare is bamboo comfortwear made for unbeatable softness, all-day wear and a lighter footprint on the planet.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.68, duration: 0.7 }}
              style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <a className="btn btn-forest" href="/socks/">Shop all</a>
              <a className="btn" href="#why" style={{ background: "transparent", color: "var(--cream)", border: "1px solid rgba(246,243,238,.55)" }}>Learn more</a>
            </motion.div>
          </div>
        </div>

        {/* nature's performance fabric badge */}
        <motion.div initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.9, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="hero-badge"
          style={{ position: "absolute", right: 48, bottom: 48, width: 128, height: 128, zIndex: 3 }}>
          <svg viewBox="0 0 128 128" width="128" height="128">
            <defs>
              <path id="badgeArcTop" d="M 20 64 A 44 44 0 0 1 108 64" fill="none" />
              <path id="badgeArcBot" d="M 108 64 A 44 44 0 0 1 20 64" fill="none" />
            </defs>
            <circle cx="64" cy="64" r="60" fill="none" stroke="rgba(246,243,238,.85)" strokeWidth="1" />
            <circle cx="64" cy="64" r="52" fill="none" stroke="rgba(246,243,238,.5)" strokeWidth="1" />
            <text fill="rgba(246,243,238,.92)" fontSize="9.2" fontWeight="700" letterSpacing="2.4" fontFamily="'DM Sans',sans-serif">
              <textPath href="#badgeArcTop" startOffset="50%" textAnchor="middle">NATURE'S PERFORMANCE</textPath>
            </text>
            <text fill="rgba(246,243,238,.92)" fontSize="9.2" fontWeight="700" letterSpacing="3" fontFamily="'DM Sans',sans-serif">
              <textPath href="#badgeArcBot" startOffset="50%" textAnchor="middle">FABRIC</textPath>
            </text>
            <g transform="translate(64,60)" stroke="rgba(246,243,238,.92)" strokeWidth="2.2" fill="none" strokeLinecap="round">
              <path d="M-8 12 C -8 -2, -3 -8, 0 -14" />
              <path d="M8 12 C 8 -2, 3 -8, 0 -14" />
              <path d="M0 12 L 0 -12" />
              <path d="M-6 2 L -3 4 M6 2 L 3 4 M-5 -4 L -2 -2 M5 -4 L 2 -2" />
            </g>
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
