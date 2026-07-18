"use client";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import Reveal from "./Reveal";

const CREAM = "#F6F3EE";
const DARK = "#101310";
const SAGE = "#59835E";

function Eyebrow({ children, light }) {
  return <span style={{ display: "block", fontSize: 12, fontWeight: 700, letterSpacing: ".3em", textTransform: "uppercase", color: light ? "#9FC4A4" : SAGE, marginBottom: 16 }}>{children}</span>;
}
function BigTitle({ children, light, size = "clamp(36px,4.4vw,60px)" }) {
  return <h2 style={{ fontWeight: 800, fontSize: size, lineHeight: 1.04, letterSpacing: "-0.01em", textTransform: "uppercase", color: light ? "#fff" : "var(--charcoal)", margin: 0 }}>{children}</h2>;
}

const strip = [
  ["M12 21c-5-4-8-7.5-8-11a8 8 0 0116 0c0 3.5-3 7-8 11z", "Ultra soft", "Silky feel against your skin."],
  ["M3 8c3-2 6-2 9 0s6 2 9 0M3 13c3-2 6-2 9 0s6 2 9 0M3 18c3-2 6-2 9 0s6 2 9 0", "Breathable", "Keeps your feet fresh all day."],
  ["M12 3c3 4 6 7.2 6 10.2A6 6 0 016 13.2C6 10.2 9 7 12 3z", "Moisture wicking", "Pulls sweat away, stays dry."],
  ["M12 3l7 3v5c0 5-3 8-7 10-4-2-7-5-7-10V6l7-3z", "Odour resistant", "Fights odour-causing bacteria."],
  ["M5 13l4 4L19 7", "Everyday comfort", "The perfect fit for every step."],
];

const whyBamboo = [
  ["Naturally soft", "Incredibly soft fibres for a smooth, gentle feel."],
  ["Breathable", "Enhanced airflow keeps feet cool and comfortable."],
  ["Moisture wicking", "Rapidly absorbs and wicks away sweat."],
  ["Thermo-regulating", "Cooler in summer, warmer in winter."],
  ["Gentle on skin", "A soft choice for sensitive skin."],
  ["More sustainable", "Bamboo grows fast with less water and no pesticides."],
];

const moments = [
  { img: "/images/ankle/stairs.jpg", pos: "50% 80%", t: "Everyday wear", b: "Your go-to for work, errands and everything in between." },
  { img: "/images/ankle/lounge.jpg", pos: "center", t: "Lounge & relax", b: "Unwind in breathable comfort that feels like a second skin." },
  { img: "/images/wristy/hero.jpg", pos: "72% 30%", t: "Light activities", b: "Ideal for training, walking and staying active." },
];

const colours = [
  { name: "Red Panda", short: "Red", img: "/images/ankle/red.jpg", hex: "#A63A2B" },
  { name: "Snow White", short: "White", img: "/images/ankle/white.jpg", hex: "#F4F1EA" },
  { name: "Royal Blue", short: "Blue", img: "/images/ankle/blue.jpg", hex: "#2B4C8C" },
  { name: "Midnight Black", short: "Black", img: "/images/ankle/black.jpg", hex: "#1A1A1A" },
];

export default function AnklePage() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "16%"]);
  const [added, setAdded] = useState(-1);

  return (
    <div style={{ background: CREAM }}>
      {/* HERO */}
      <section ref={heroRef} style={{ position: "relative", background: DARK, color: "#fff", overflow: "hidden" }}>
        <motion.div style={{ position: "absolute", inset: "-9% 0", y: bgY }}>
          <Image src="/images/ankle/hero-stairs.jpg" alt="Woman heading down the stairs in black PandaBare ankle socks, boots in hand" fill priority sizes="100vw"
            style={{ objectFit: "cover", objectPosition: "center 58%" }} />
          {/* text-side gradient */}
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, rgba(5,7,5,.93) 0%, rgba(5,7,5,.72) 30%, rgba(5,7,5,.28) 52%, rgba(5,7,5,.02) 68%, rgba(5,7,5,.18) 100%)" }} />
          {/* black vignette, all edges */}
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 115% 95% at 64% 60%, transparent 50%, rgba(0,0,0,.65) 100%)" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(0,0,0,.42) 0%, transparent 16%, transparent 80%, rgba(0,0,0,.55) 100%)" }} />
        </motion.div>

        <div className="wrap" style={{ position: "relative", zIndex: 2, minHeight: 620, display: "grid", gridTemplateColumns: "1fr", alignItems: "center" }} data-hero-grid>
          <div style={{ padding: "96px 0" }}>
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, ease: [0.22, 1, 0.36, 1] }}>
              <Eyebrow light>PandaBare Ankle Hugger bamboo socks</Eyebrow>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 34 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, delay: .12, ease: [0.22, 1, 0.36, 1] }}
              style={{ fontWeight: 800, fontSize: "clamp(42px,5.2vw,72px)", lineHeight: 1.0, letterSpacing: "-0.01em", textTransform: "uppercase", margin: "0 0 22px" }}>
              Ankle Hugger.<br /><span style={{ color: "#9FC4A4" }}>Everyday</span> performance.
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .28 }}
              style={{ fontWeight: 300, maxWidth: "40ch", color: "rgba(246,243,238,.82)", marginBottom: 28 }}>
              Low cut. High comfort. Our bamboo ankle socks hug your feet with breathable softness and all-day performance.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .38 }}
              style={{ display: "flex", gap: 28, marginBottom: 34, fontSize: 12, letterSpacing: ".12em", textTransform: "uppercase", color: "rgba(246,243,238,.85)" }}>
              <span>Bamboo · naturally better</span>
              <span>4 colours · red, white, blue, black</span>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .48 }}
              style={{ display: "flex", alignItems: "center", gap: 20 }}>
              <a href="#colours" className="btn" style={{ background: SAGE, color: "#fff" }}>Shop Ankle Hugger socks</a>
              <span style={{ fontSize: 21, fontWeight: 700 }}>$15.95 <small style={{ fontSize: 11, fontWeight: 400, letterSpacing: ".12em" }}>AUD</small></span>
            </motion.div>
          </div>
          
        </div>
      </section>

      {/* BENEFIT STRIP */}
      <section style={{ background: "#0B0E0B", color: "#fff", borderTop: "1px solid rgba(246,243,238,.08)", padding: "34px 0" }}>
        <div className="wrap" style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 0 }} data-proofs>
          {strip.map(([d, t, b], i) => (
            <Reveal key={t} delay={0.06 * i}>
              <div style={{ padding: "8px 18px", borderLeft: i ? "1px solid rgba(246,243,238,.12)" : "none", textAlign: "center" }}>
                <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#9FC4A4" strokeWidth="1.5" style={{ margin: "0 auto 10px" }}><path d={d} /></svg>
                <b style={{ display: "block", fontSize: 12, letterSpacing: ".18em", textTransform: "uppercase", marginBottom: 4 }}>{t}</b>
                <span style={{ fontSize: 12, color: "rgba(246,243,238,.65)" }}>{b}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* WHY BAMBOO */}
      <section style={{ padding: "100px 0", background: CREAM }}>
        <div className="wrap" style={{ display: "grid", gridTemplateColumns: ".8fr 1.2fr", gap: 64, alignItems: "center" }} data-hero-grid>
          <Reveal>
            <BigTitle>Why<br />bamboo?</BigTitle>
            <div style={{ width: 64, height: 3, background: SAGE, margin: "18px 0" }} />
            <p style={{ color: "var(--ink-soft)", maxWidth: "30ch" }}>Bamboo is not just better for the planet, it is better for your feet.</p>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "34px 28px" }} data-mom-grid>
            {whyBamboo.map(([t, b], i) => (
              <Reveal key={t} delay={0.06 * i}>
                <div>
                  <div style={{ width: 42, height: 42, borderRadius: "50%", background: "#E7DFD1", display: "grid", placeItems: "center", marginBottom: 12 }}>
                    <svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke={SAGE} strokeWidth="1.6"><path d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <b style={{ display: "block", fontSize: 12.5, letterSpacing: ".14em", textTransform: "uppercase", marginBottom: 5 }}>{t}</b>
                  <span style={{ fontSize: 13, color: "var(--ink-soft)" }}>{b}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* MOMENTS */}
      <section style={{ background: DARK, color: "#fff", padding: "88px 0" }}>
        <div className="wrap">
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <Eyebrow light>Made for how you move</Eyebrow>
              <BigTitle light size="clamp(28px,3.4vw,44px)">Perfect for every moment</BigTitle>
            </div>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }} data-mom-grid>
            {moments.map((m, i) => (
              <Reveal key={m.t} delay={0.08 * i}>
                <motion.div whileHover={{ y: -6 }} transition={{ duration: .3 }}>
                  <div style={{ position: "relative", aspectRatio: "4/3.2", borderRadius: 4, overflow: "hidden", marginBottom: 16 }}>
                    <Image src={m.img} alt={m.t} fill sizes="(max-width:1000px) 100vw, 33vw" style={{ objectFit: "cover", objectPosition: m.pos }} />
                  </div>
                  <b style={{ display: "block", textAlign: "center", fontSize: 13, letterSpacing: ".2em", textTransform: "uppercase", marginBottom: 6 }}>{m.t}</b>
                  <p style={{ textAlign: "center", fontSize: 13, color: "rgba(246,243,238,.7)", maxWidth: "30ch", margin: "0 auto" }}>{m.b}</p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* COLOURS */}
      <section id="colours" style={{ padding: "100px 0", background: CREAM }}>
        <div className="wrap">
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 46 }}>
              <Eyebrow>Pick your favourite</Eyebrow>
              <BigTitle size="clamp(28px,3.4vw,44px)">Choose your colour</BigTitle>
            </div>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 20 }} data-shop-grid>
            {colours.map((c, i) => (
              <Reveal key={c.short} delay={0.07 * i}>
                <motion.div whileHover={{ y: -6 }} transition={{ duration: .3 }} style={{ background: "#fff", borderRadius: 4, overflow: "hidden", border: "1px solid rgba(26,26,26,.08)" }}>
                  <div style={{ position: "relative", aspectRatio: "1" }}>
                    <Image src={c.img} alt={`Ankle Hugger in ${c.name}`} fill sizes="(max-width:1000px) 50vw, 25vw" style={{ objectFit: "cover" }} />
                  </div>
                  <div style={{ padding: "16px 18px 20px", textAlign: "center" }}>
                    <b style={{ display: "block", fontSize: 13, letterSpacing: ".2em", textTransform: "uppercase" }}>{c.short}</b>
                    <div style={{ fontSize: 14, fontWeight: 700, margin: "10px 0 12px" }}>$15.95 <small style={{ fontWeight: 400, fontSize: 10 }}>AUD</small></div>
                    <button className="btn" onClick={() => { setAdded(i); setTimeout(() => setAdded(-1), 2000); }}
                      style={{ width: "100%", padding: "12px 0", fontSize: 12, background: added === i ? "var(--charcoal)" : SAGE, color: "#fff" }}>
                      {added === i ? "Added ✓" : "Add to cart"}
                    </button>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section style={{ background: DARK, color: "#fff" }}>
        <div className="wrap" style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: 0, alignItems: "stretch", padding: 0 }} data-hero-grid>
          <div style={{ position: "relative", minHeight: 420 }}>
            <Image src="/images/ankle/lounge.jpg" alt="Relaxing at home in PandaBare ankle socks" fill sizes="50vw" style={{ objectFit: "cover" }} />
          </div>
          <div style={{ padding: "84px 36px 84px 64px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <Reveal>
              <BigTitle light size="clamp(28px,3.2vw,42px)">Soft on your feet.<br /><span style={{ color: "#9FC4A4" }}>Strong in every step.</span></BigTitle>
              <p style={{ fontWeight: 300, color: "rgba(246,243,238,.75)", maxWidth: "42ch", margin: "18px 0 30px" }}>
                Experience the natural difference of bamboo. Ankle Hugger socks that move with you, wherever the day takes you.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 34 }}>
                {[["Free shipping", "On orders over $80 Australia-wide"], ["30-day comfort guarantee", "Love them or send them back"], ["Plastic-free packaging", "Gift-ready kraft, no landfill fillers"]].map(([t, b]) => (
                  <div key={t} style={{ display: "flex", gap: 14, alignItems: "center" }}>
                    <div style={{ width: 36, height: 36, borderRadius: "50%", border: "1px solid rgba(159,196,164,.5)", display: "grid", placeItems: "center", flex: "none" }}>
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#9FC4A4" strokeWidth="1.7"><path d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <div>
                      <b style={{ display: "block", fontSize: 12.5, letterSpacing: ".14em", textTransform: "uppercase" }}>{t}</b>
                      <span style={{ fontSize: 12.5, color: "rgba(246,243,238,.65)" }}>{b}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div><a href="#colours" className="btn" style={{ background: SAGE, color: "#fff" }}>Shop Ankle Hugger socks</a></div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
