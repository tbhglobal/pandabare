"use client";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { useCart } from "@/lib/cart";
import Reveal from "./Reveal";

const CREAM = "#F6F3EE";
const DARK = "#101310";
const SAGE = "#59835E";

const strip = [
  ["M12 3c4 5 6 8 6 11a6 6 0 01-12 0c0-3 2-6 6-11z", "Moisture wicking", "Pulls sweat away to keep you dry."],
  ["M3 8h10a3 3 0 100-6 M3 13h14a3 3 0 110 6 M3 18h8", "Breathable construction", "Enhanced airflow keeps you cool."],
  ["M12 3l7 3v5c0 5-3 8-7 10-4-2-7-5-7-10V6z M9 12l2 2 4-4", "Odour resistant", "Naturally helps you stay fresh for longer."],
  ["M10 14l4-4 M8.5 15.5a3 3 0 01-4-4l2-2a3 3 0 014 0 M15.5 8.5a3 3 0 014 4l-2 2a3 3 0 01-4 0", "Durable & strong", "Built to handle long days and tough sessions."],
  ["M12 3a9 9 0 100 18 9 9 0 000-18z M3 12h18 M12 3c3 3 3 15 0 18 M12 3c-3 3-3 15 0 18", "Eco friendly", "Sustainable from soil to skin."],
];

const colours = [
  { name: "Black", full: "Midnight Black", slug: "black", img: "/images/products/crew-black.jpg", hex: "#1A1A1A" },
  { name: "Red", full: "Red Panda", slug: "red", img: "/images/products/crew-red.jpg", hex: "#A63A2B" },
  { name: "Blue", full: "Royal Blue", slug: "blue", img: "/images/products/crew-blue.jpg", hex: "#2B4C8C" },
];

const planet = [
  ["M12 3c4 4 6 7 6 11a6 6 0 01-12 0c0-4 2-7 6-11z M12 21V9", "Naturally renewable", "One of the fastest growing plants on earth, far quicker than cotton."],
  ["M12 4a8 8 0 108 8 M12 4v8l6 3", "Biodegradable", "Breaks down naturally at the end of its life."],
  ["M12 3c4 5 6 8 6 11a6 6 0 01-12 0c0-3 2-6 6-11z", "Lower impact", "Requires less water and no pesticides to grow."],
];

export default function CrewPage() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "16%"]);
  const [added, setAdded] = useState(-1);
  const cart = useCart();
  const addToCart = (c, i) => {
    if (cart) cart.add({ id: `crew-${c.slug}`, name: "Bamboo Crew Sock", colour: c.full, size: "One size", price: 17.95, img: c.img });
    setAdded(i); setTimeout(() => setAdded(-1), 1600);
  };

  return (
    <div style={{ background: CREAM }}>
      {/* HERO */}
      <section ref={heroRef} style={{ position: "relative", background: DARK, color: "#fff", overflow: "hidden" }}>
        <motion.div style={{ position: "absolute", inset: "-9% 0", y: bgY }}>
          <Image src="/images/hero-crew.jpg" alt="Relaxing in PandaBare bamboo crew socks" fill priority sizes="100vw" style={{ objectFit: "cover", objectPosition: "center 42%" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, rgba(5,7,5,.92) 0%, rgba(5,7,5,.72) 30%, rgba(5,7,5,.30) 52%, rgba(5,7,5,.04) 70%, rgba(5,7,5,.20) 100%)" }} />
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 120% 100% at 66% 55%, transparent 48%, rgba(0,0,0,.6) 100%)" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(0,0,0,.4) 0%, transparent 18%, transparent 80%, rgba(0,0,0,.5) 100%)" }} />
        </motion.div>

        <div className="wrap" style={{ position: "relative", zIndex: 2, minHeight: 600, display: "flex", alignItems: "center" }}>
          <div style={{ padding: "96px 0", maxWidth: 560 }}>
            <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }}
              style={{ display: "block", fontSize: 12, fontWeight: 700, letterSpacing: ".3em", textTransform: "uppercase", color: "#9FC4A4", marginBottom: 18 }}>Crew socks</motion.span>
            <motion.h1 initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, delay: .1, ease: [0.22, 1, 0.36, 1] }}
              style={{ fontWeight: 800, fontSize: "clamp(42px,5.4vw,72px)", lineHeight: 1.0, letterSpacing: "-0.01em", textTransform: "uppercase", margin: "0 0 22px" }}>
              All-day comfort.<br /><span style={{ color: "#9FC4A4" }}>Naturally better.</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .26 }}
              style={{ fontWeight: 300, maxWidth: "38ch", color: "rgba(246,243,238,.84)", marginBottom: 32 }}>
              Designed for work, training and everything in between. Soft on your skin. Tough where it counts.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .4 }}
              style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <a href="#colours" className="btn" style={{ background: SAGE, color: "#fff" }}>Buy crew socks</a>
              <a href="#why" className="btn" style={{ background: "transparent", color: "#fff", border: "1px solid rgba(246,243,238,.55)" }}>Why bamboo?</a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* BENEFIT STRIP */}
      <section style={{ background: CREAM, padding: "48px 0" }}>
        <div className="wrap" style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 0 }} data-proofs>
          {strip.map(([d, t, b], i) => (
            <Reveal key={t} delay={0.06 * i}>
              <div style={{ padding: "6px 24px", borderLeft: i ? "1px solid rgba(26,26,26,.12)" : "none", textAlign: "center" }}>
                <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke={SAGE} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" style={{ margin: "0 auto 12px" }}><path d={d} /></svg>
                <b style={{ display: "block", fontSize: 12, letterSpacing: ".14em", textTransform: "uppercase", marginBottom: 5 }}>{t}</b>
                <span style={{ fontSize: 12.5, color: "var(--ink-soft)" }}>{b}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CHOOSE YOUR COLOUR */}
      <section id="colours" style={{ padding: "40px 0 100px", background: CREAM }}>
        <div className="wrap">
          <Reveal>
            <h2 style={{ fontFamily: "var(--font-serif), serif", fontWeight: 700, fontSize: "clamp(28px,3.4vw,42px)", textTransform: "uppercase", textAlign: "center", letterSpacing: "-0.01em", marginBottom: 44 }}>Choose your colour</h2>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 28 }} data-shop-grid>
            {colours.map((c, i) => (
              <Reveal key={c.slug} delay={0.08 * i}>
                <motion.div whileHover={{ y: -6 }} transition={{ duration: .3 }}>
                  <div style={{ position: "relative", aspectRatio: "1", borderRadius: 4, overflow: "hidden", background: "#EEEAE2" }}>
                    <Image src={c.img} alt={`Bamboo Crew Sock in ${c.full}`} fill sizes="(max-width:1000px) 100vw, 33vw" style={{ objectFit: "cover" }} />
                  </div>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, margin: "18px 0 14px" }}>
                    <span style={{ width: 13, height: 13, borderRadius: "50%", background: c.hex, border: c.slug === "black" ? "none" : "none", boxShadow: "0 0 0 1px rgba(0,0,0,.15)" }} />
                    <b style={{ fontSize: 13, letterSpacing: ".2em", textTransform: "uppercase" }}>{c.name}</b>
                  </div>
                  <div style={{ textAlign: "center", fontSize: 14, fontWeight: 700, marginBottom: 12 }}>$17.95 <small style={{ fontWeight: 400, fontSize: 10 }}>AUD</small></div>
                  <button className="btn" onClick={() => addToCart(c, i)} style={{ width: "100%", padding: "13px 0", fontSize: 12, background: added === i ? "var(--charcoal)" : SAGE, color: "#fff" }}>
                    {added === i ? "Added ✓" : "Add to cart"}
                  </button>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY BAMBOO (green, 3 col) */}
      <section id="why" style={{ background: "var(--forest)", color: "#fff", overflow: "hidden" }}>
        <div style={{ display: "grid", gridTemplateColumns: "clamp(170px,20vw,300px) minmax(260px,.95fr) minmax(360px,1.35fr)", alignItems: "stretch" }} data-mat-grid>
          <div style={{ position: "relative", minHeight: 440, overflow: "hidden" }} data-fabric-img>
            <Image src="/images/bamboo-texture.jpg" alt="Bamboo stems in warm light" fill sizes="24vw" style={{ objectFit: "cover" }} />
          </div>
          <div style={{ padding: "84px 44px 84px 56px", display: "flex", flexDirection: "column", justifyContent: "center" }} data-fabric-copy>
            <Reveal>
              <span style={{ display: "block", fontSize: 12, fontWeight: 700, letterSpacing: ".3em", textTransform: "uppercase", color: "var(--beige)", marginBottom: 14 }}>Why bamboo?</span>
              <h2 style={{ fontFamily: "var(--font-serif), serif", fontWeight: 700, fontSize: "clamp(28px,3.2vw,40px)", textTransform: "uppercase", lineHeight: 1.06, letterSpacing: "-0.01em", marginBottom: 20 }}>Better for you.<br />Better for the planet.</h2>
              <p style={{ color: "rgba(246,243,238,.75)", fontWeight: 300, maxWidth: "34ch", fontSize: 14.5 }}>
                Bamboo grows faster, uses less water and requires no pesticides. A high-performance fibre that is better for you and better for the planet.
              </p>
            </Reveal>
          </div>
          <div style={{ padding: "84px max(36px,5vw) 84px 8px", display: "flex", alignItems: "center" }} data-fabric-benes>
            <Reveal style={{ width: "100%" }}>
              <div style={{ display: "grid", gap: 30 }}>
                {planet.map(([d, t, b]) => (
                  <div key={t} style={{ display: "flex", gap: 18, alignItems: "flex-start" }}>
                    <div style={{ width: 46, height: 46, borderRadius: "50%", border: "1px solid rgba(207,197,173,.5)", display: "grid", placeItems: "center", flex: "none" }}>
                      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="var(--beige)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d={d} /></svg>
                    </div>
                    <div>
                      <h4 style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--beige)", marginBottom: 5 }}>{t}</h4>
                      <p style={{ fontSize: 13.5, color: "rgba(246,243,238,.78)", fontWeight: 300, lineHeight: 1.5, maxWidth: "34ch" }}>{b}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
