"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const links = ["Comfort Kit", "Socks", "Sleep & Travel", "Gift Packs", "Corporate", "About"];
const hrefs = ["/comfort-kit/", "/socks/", "/sleep-travel/", "/gift-packs/", "/corporate/", "/about/"];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 70,
      background: "rgba(246,243,238,.94)", backdropFilter: "blur(12px)",
      borderBottom: "1px solid rgba(26,26,26,.07)",
      boxShadow: scrolled ? "0 6px 24px rgba(26,26,26,.06)" : "none",
      transition: "box-shadow .3s var(--ease)"
    }}>
      <div className="wrap" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: scrolled ? 60 : 70, transition: "height .3s var(--ease)" }}>
        <a href="/"><Image src="/images/logo-horizontal.png" alt="PandaBare" width={145} height={40} style={{ height: 34, width: "auto" }} priority /></a>
        <nav style={{ display: "flex", gap: 30, fontSize: 13.5, fontWeight: 500 }} className="desktop-nav">
          {links.map((l, i) => <a key={l} href={hrefs[i]} style={{ padding: "4px 0" }}>{l}</a>)}
        </nav>
        <a href="#" style={{ fontSize: 13.5, fontWeight: 500 }}>Cart (0)</a>
      </div>
    </header>
  );
}
