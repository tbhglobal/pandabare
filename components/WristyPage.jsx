"use client";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { useCart } from "@/lib/cart";
import Reveal from "./Reveal";

const CREAM = "#F6F3EE";
const DARK = "#101310";
const SAGE = "#59835E";

function Eyebrow({ children, light }) {
  return <span style={{ display: "block", fontSize: 12, fontWeight: 700, letterSpacing: ".3em", textTransform: "uppercase", color: light ? "#9FC4A4" : SAGE, marginBottom: 16 }}>{children}</span>;
}

function BigTitle({ children, light, size = "clamp(38px,4.6vw,64px)" }) {
  return <h2 style={{ fontWeight: 800, fontSize: size, lineHeight: 1.02, letterSpacing: "-0.01em", textTransform: "uppercase", color: light ? "#fff" : "var(--charcoal)", margin: 0 }}>{children}</h2>;
}

const heroIcons = [
  ["M12 21c-5-4-8-7.5-8-11a8 8 0 0116 0c0 3.5-3 7-8 11z", "Organic bamboo"],
  ["M3 8c3-2 6-2 9 0s6 2 9 0M3 13c3-2 6-2 9 0s6 2 9 0M3 18c3-2 6-2 9 0s6 2 9 0", "Ultra soft & breathable"],
  ["M12 3c3 4 6 7.2 6 10.2A6 6 0 016 13.2C6 10.2 9 7 12 3z", "Moisture wicking"],
  ["M12 3l7 3v5c0 5-3 8-7 10-4-2-7-5-7-10V6l7-3z", "Odour resistant"],
];

const fabricPoints = [
  ["Ultra soft", "Silky smooth feel that is gentle on your skin."],
  ["Moisture wicking", "Pulls sweat away from your skin so you stay dry and focused."],
  ["Fights odour", "Naturally resists odour-causing bacteria for long-lasting freshness."],
  ["Breathable & lightweight", "Promotes airflow and keeps you cool under pressure."],
  ["Eco friendly", "Lower impact from soil to skin."],
];

const colours = [
  { name: "Red", slug: "red", img: "/images/products/wristy-red.jpg" },
  { name: "White", slug: "white", img: "/images/products/wristy-white.jpg" },
  { name: "Black", slug: "black", img: "/images/products/wristy-black.jpg" },
];

export default function WristyPage() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const bandY = useTransform(scrollYProgress, [0, 1], ["0%", "-14%"]);
  const [added, setAdded] = useState(-1);
  const cart = useCart();
  const addToCart = (c, i) => {
    if (cart) cart.add({ id: `wristy-${c.slug}`, name: "Wristy Wristband", colour: c.name, price: 12.95, img: c.img });
    setAdded(i); setTimeout(() => setAdded(-1), 1600);
  };

  return (
    <div style={{ background: CREAM }}>
      {/* HERO */}
      <section ref={heroRef} style={{ position: "relative", background: DARK, color: "#fff", overflow: "hidden" }}>
        <motion.div style={{ position: "absolute", inset: "-10% 0", y: bgY }}>
          <Image src="/images/wristy/hero.jpg" alt="Athlete wearing the red PandaBare Wristy" fill priority sizes="100vw"
            style={{ objectFit: "cover", objectPosition: "72% 30%" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, rgba(10,12,10,.94) 0%, rgba(10,12,10,.72) 38%, rgba(10,12,10,.15) 70%, rgba(10,12,10,.35) 100%)" }} />
        </motion.div>

        <div className="wrap" style={{ position: "relative", zIndex: 2, minHeight: 640, display: "grid", gridTemplateColumns: "1.1fr .9fr", alignItems: "center" }} data-hero-grid>
          <div style={{ padding: "96px 0" }}>
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, ease: [0.22, 1, 0.36, 1] }}>
              <Eyebrow light>The ultimate sports wristband</Eyebrow>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 34 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, delay: .12, ease: [0.22, 1, 0.36, 1] }}
              style={{ fontWeight: 800, fontSize: "clamp(44px,5.6vw,78px)", lineHeight: 1.0, letterSpacing: "-0.01em", textTransform: "uppercase", margin: "0 0 22px" }}>
              Basic band.<br />Epic performance.
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .28 }}
              style={{ fontWeight: 300, maxWidth: "40ch", color: "rgba(246,243,238,.82)", marginBottom: 30 }}>
              The Wristy. Made from bamboo for unbeatable comfort, moisture control and all-day performance. Designed for athletes. Built for everyone.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .4 }}
              style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 52 }}>
              <a href="#colours" className="btn" style={{ background: SAGE, color: "#fff" }}>Shop now</a>
              <span style={{ fontSize: 22, fontWeight: 700 }}>$12.95 <small style={{ fontSize: 12, fontWeight: 400, letterSpacing: ".12em" }}>AUD</small></span>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .55, duration: .8 }}
              style={{ display: "flex", gap: 0, borderTop: "1px solid rgba(246,243,238,.2)", paddingTop: 24, maxWidth: 560 }}>
              {heroIcons.map(([d, label], i) => (
                <div key={label} style={{ flex: 1, padding: "0 14px", borderLeft: i ? "1px solid rgba(246,243,238,.2)" : "none", display: "flex", flexDirection: "column", gap: 8 }}>
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#9FC4A4" strokeWidth="1.5"><path d={d} /></svg>
                  <span style={{ fontSize: 11.5, lineHeight: 1.4, color: "rgba(246,243,238,.85)" }}>{label}</span>
                </div>
              ))}
            </motion.div>
          </div>
          <motion.div style={{ y: bandY, justifySelf: "end", alignSelf: "end", marginBottom: -10, position: "relative", width: "min(340px,80%)" }}
            initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .9, delay: .5, ease: [0.22, 1, 0.36, 1] }}>
            <Image src="/images/wristy/band-red.webp" alt="PandaBare Wristy in red" width={680} height={680}
              style={{ width: "100%", height: "auto", filter: "drop-shadow(0 30px 40px rgba(0,0,0,.5))" }} />
          </motion.div>
        </div>
      </section>

      {/* WHY BAMBOO */}
      <section style={{ padding: "104px 0", background: CREAM }}>
        <div className="wrap" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72 }} data-hero-grid>
          <div>
            <Reveal>
              <Eyebrow>Why bamboo?</Eyebrow>
              <BigTitle>Nature&apos;s performance fabric.</BigTitle>
              <p style={{ color: "var(--ink-soft)", maxWidth: "44ch", margin: "22px 0 40px" }}>
                Bamboo grows fast, uses far less water than cotton and needs no pesticides. The result? A high-performance fibre that is better for you and better for the planet.
              </p>
              <div style={{ display: "flex", gap: 44 }}>
                {[["Softer", "than cotton on skin"], ["-62%", "water vs. cotton"], ["100%", "biodegradable fibre"]].map(([b, s]) => (
                  <div key={b}>
                    <div style={{ fontWeight: 800, fontSize: 30, letterSpacing: "-0.01em" }}>{b}</div>
                    <div style={{ fontSize: 12.5, color: "var(--ink-soft)", maxWidth: "12ch" }}>{s}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
          <div>
            {fabricPoints.map(([t, b], i) => (
              <Reveal key={t} delay={0.07 * i}>
                <div style={{ display: "flex", gap: 18, padding: "18px 0", borderBottom: "1px solid rgba(26,26,26,.1)" }}>
                  <div style={{ width: 40, height: 40, borderRadius: "50%", background: "#E7DFD1", display: "grid", placeItems: "center", flex: "none" }}>
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke={SAGE} strokeWidth="1.6"><path d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <div>
                    <b style={{ display: "block", fontSize: 13.5, letterSpacing: ".14em", textTransform: "uppercase", marginBottom: 3 }}>{t}</b>
                    <span style={{ fontSize: 13.5, color: "var(--ink-soft)" }}>{b}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* MADE FOR MOVEMENT */}
      <section style={{ background: DARK, color: "#fff", padding: "96px 0 0" }}>
        <div className="wrap" style={{ display: "grid", gridTemplateColumns: ".8fr 1.2fr", gap: 56, alignItems: "center", paddingBottom: 72 }} data-hero-grid>
          <Reveal>
            <BigTitle light>Made for movement.</BigTitle>
            <p style={{ fontWeight: 300, color: "rgba(246,243,238,.75)", maxWidth: "36ch", marginTop: 20 }}>
              From the gym to the court, yoga to your daily grind. The Wristy keeps you comfortable, dry and in control.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div style={{ position: "relative", borderRadius: 4, overflow: "hidden" }}>
              <Image src="/images/wristy/movement.jpg" alt="Athletes wearing PandaBare wristbands at the gym, training, yoga and cycling" width={1900} height={633} style={{ width: "100%", height: "auto" }} />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", marginTop: 14 }}>
              {["Gym", "Training", "Yoga", "Anywhere"].map((t) => (
                <span key={t} style={{ textAlign: "center", fontSize: 12.5, fontWeight: 700, letterSpacing: ".24em", textTransform: "uppercase", color: "rgba(246,243,238,.85)" }}>{t}</span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* COLOURS */}
      <section id="colours" style={{ padding: "104px 0", background: CREAM }}>
        <div className="wrap">
          <Reveal>
            <Eyebrow>Choose your colour</Eyebrow>
            <BigTitle>Keep it simple.</BigTitle>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr .9fr", gap: 22, marginTop: 44 }} data-shop-grid>
            {colours.map((c, i) => (
              <Reveal key={c.name} delay={0.08 * i}>
                <motion.div whileHover={{ y: -6 }} transition={{ duration: .3 }} style={{ background: "#fff", borderRadius: 4, overflow: "hidden", border: "1px solid rgba(26,26,26,.08)" }}>
                  <div style={{ position: "relative", aspectRatio: "1/1" }}>
                    <Image src={c.img} alt={`PandaBare Wristy in ${c.name}`} fill sizes="(max-width:1000px) 50vw, 25vw" style={{ objectFit: "cover" }} />
                  </div>
                  <div style={{ padding: "16px 18px 20px", textAlign: "center" }}>
                    <b style={{ display: "block", fontSize: 13, letterSpacing: ".22em", textTransform: "uppercase", marginBottom: 12 }}>{c.name}</b>
                    <button className="btn" onClick={() => addToCart(c, i)}
                      style={{ width: "100%", padding: "12px 0", fontSize: 12, background: added === i ? SAGE : "var(--charcoal)", color: "#fff" }}>
                      {added === i ? "Added ✓" : "Add to cart"}
                    </button>
                  </div>
                </motion.div>
              </Reveal>
            ))}
            <Reveal delay={0.3}>
              <div style={{ display: "flex", flexDirection: "column", gap: 22, paddingLeft: 10 }}>
                {[["One size fits all", "Comfortable stretch for all-day wear."], ["Durable & long lasting", "Designed to handle your hardest sessions."], ["Machine washable", "Easy care, built for real life."]].map(([t, b]) => (
                  <div key={t}>
                    <b style={{ display: "block", fontSize: 12.5, letterSpacing: ".16em", textTransform: "uppercase", color: "var(--forest)", marginBottom: 4 }}>{t}</b>
                    <span style={{ fontSize: 13.5, color: "var(--ink-soft)" }}>{b}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section style={{ background: DARK, color: "#fff", padding: "88px 0" }}>
        <div className="wrap" style={{ textAlign: "center", maxWidth: 760 }}>
          <Reveal>
            <BigTitle light size="clamp(30px,3.6vw,48px)">Sweat. Perform. Repeat.</BigTitle>
            <p style={{ fontWeight: 300, color: "rgba(246,243,238,.75)", margin: "18px 0 30px" }}>
              The Wristy bamboo wristband. Simple, sustainable, and seriously effective.
            </p>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 22, flexWrap: "wrap", marginBottom: 34 }}>
              <a href="#colours" className="btn" style={{ background: SAGE, color: "#fff" }}>Get yours now</a>
              <span style={{ fontSize: 20, fontWeight: 700 }}>$12.95 <small style={{ fontSize: 11, fontWeight: 400 }}>AUD</small></span>
            </div>
            <div style={{ display: "flex", justifyContent: "center", gap: 36, flexWrap: "wrap", fontSize: 12, letterSpacing: ".14em", textTransform: "uppercase", color: "rgba(246,243,238,.6)" }}>
              <span>$10 flat shipping · free over $50</span>
              <span>30-day comfort guarantee</span>
              <span>Plastic-free packaging</span>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
