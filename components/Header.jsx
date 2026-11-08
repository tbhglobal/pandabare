"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useCart } from "@/lib/cart";

const links = ["Shop all", "Ankle Socks", "Crew Socks", "Wristies", "Gift ideas", "Guides"];
const hrefs = ["/socks/", "/products/ankle-hugger/", "/products/crew-sock/", "/products/wristy/", "/gift-packs/", "/guides/"];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuTop, setMenuTop] = useState(70);
  const headerRef = useRef(null);
  const menuButton = useRef(null);
  const menuNav = useRef(null);
  const cart = useCart();
  const pathname = usePathname();
  const current = href => pathname?.replace(/\/$/,'') === href.replace(/\/$/,'') ? 'page' : undefined;
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  useEffect(() => {
    if (!menuOpen) return;
    const overflow = document.body.style.overflow;
    const background = [...document.querySelectorAll('body > main, body > footer, body > .pb-announcement, body > .pb-skip-link')];
    const previousInert = background.map(node => node.inert);
    background.forEach(node => { node.inert = true; });
    document.body.style.overflow = "hidden";
    const position = () => {
      if (window.innerWidth > 1000) { setMenuOpen(false); return; }
      setMenuTop(Math.max(0, headerRef.current?.getBoundingClientRect().bottom || 0));
    };
    position();
    menuNav.current?.querySelector('a')?.focus();
    const keydown = event => {
      if (event.key === 'Escape') { event.preventDefault(); setMenuOpen(false); return; }
      if (event.key !== 'Tab') return;
      const controls = [...(headerRef.current?.querySelectorAll('a[href],button:not(:disabled)') || [])].filter(node => node.getClientRects().length);
      const first = controls[0], last = controls.at(-1);
      if (!headerRef.current?.contains(document.activeElement)) { event.preventDefault(); (event.shiftKey ? last : first)?.focus(); }
      else if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
    };
    document.addEventListener('keydown', keydown);
    window.addEventListener('resize', position);
    return () => {
      background.forEach((node,i) => { node.inert = previousInert[i]; });
      document.body.style.overflow = overflow;
      document.removeEventListener('keydown', keydown);
      window.removeEventListener('resize', position);
      if (menuButton.current?.getClientRects().length) menuButton.current.focus();
    };
  }, [menuOpen]);

  return (
    <header ref={headerRef} style={{
      position: "sticky", top: 0, zIndex: 70,
      background: "rgba(246,243,238,.94)", backdropFilter: menuOpen ? "none" : "blur(12px)",
      borderBottom: "1px solid rgba(26,26,26,.07)",
      boxShadow: scrolled ? "0 6px 24px rgba(26,26,26,.06)" : "none",
      transition: "box-shadow .3s var(--ease)"
    }}>
      <div className="wrap" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: scrolled ? 60 : 70, transition: "height .3s var(--ease)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <button ref={menuButton} className="mobile-menu-btn" aria-controls="primary-mobile-navigation" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen}
            onClick={() => { setMenuTop(Math.max(0, headerRef.current?.getBoundingClientRect().bottom || 0)); setMenuOpen((o) => !o); }}
            style={{ display: "none", background: "none", border: "none", cursor: "pointer", padding: 6, marginLeft: -6, color: "var(--charcoal)" }}>
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              {menuOpen ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
          <a href="/"><Image src="/images/logo-horizontal.png" alt="PandaBare" width={145} height={40} style={{ height: 34, width: "auto" }} priority /></a>
        </div>
        <nav style={{ display: "flex", gap: 30, fontSize: 13.5, fontWeight: 500 }} className="desktop-nav">
          {links.map((l, i) => <a key={l} href={hrefs[i]} aria-current={current(hrefs[i])} style={{ padding: "4px 0" }}>{l}</a>)}
        </nav>
        <button aria-haspopup="dialog" aria-controls="cart-dialog" aria-label={`Open cart, ${cart ? cart.count : 0} items`} onClick={() => { setMenuOpen(false); cart && cart.setOpen(true); }} style={{ fontSize: 13.5, fontWeight: 500, background: "none", border: "none", cursor: "pointer", fontFamily: "inherit", color: "inherit" }}>Cart ({cart ? cart.count : 0})</button>
      </div>

      {menuOpen && (
        <nav ref={menuNav} id="primary-mobile-navigation" aria-label="Primary mobile navigation" className="mobile-menu" style={{ position: "fixed", left: 0, right: 0, top: menuTop, bottom: 0, background: "var(--cream)", padding: "12px 24px 40px", overflowY: "auto", borderTop: "1px solid rgba(26,26,26,.07)" }}>
          {links.map((l, i) => (
            <a key={l} href={hrefs[i]} aria-current={current(hrefs[i])} onClick={() => setMenuOpen(false)}
              style={{ display: "block", padding: "18px 0", fontFamily: "var(--font-serif), serif", fontSize: 24, fontWeight: 600, borderBottom: "1px solid rgba(26,26,26,.08)" }}>
              {l}
            </a>
          ))}
          <a href="/help/" onClick={() => setMenuOpen(false)} style={{ display: "block", padding: "18px 0", fontSize: 15, color: "var(--ink-soft)" }}>Shipping, returns & help</a>
          <p style={{ marginTop: 12, fontSize: 13, color: "var(--ink-soft)" }}>$10 flat shipping, free on orders over $50.</p>
        </nav>
      )}
    </header>
  );
}
