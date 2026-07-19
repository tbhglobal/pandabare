"use client";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useCart, FREE_SHIPPING_THRESHOLD, SHIPPING_FEE } from "@/lib/cart";

export default function CartDrawer() {
  const cart = useCart();
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  if (!cart) return null;
  const { items, open, setOpen, setQty, remove, subtotal } = cart;
  const free = subtotal >= FREE_SHIPPING_THRESHOLD;
  const shipping = items.length === 0 ? 0 : free ? 0 : SHIPPING_FEE;
  const toGo = (FREE_SHIPPING_THRESHOLD - subtotal).toFixed(2);

  const checkout = async () => {
    setBusy(true); setError("");
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items: items.map((i) => ({ id: i.id, qty: i.qty })) }),
      });
      const data = await res.json();
      if (data.url) { window.location.href = data.url; return; }
      setError(data.error || "Something went wrong. Try again.");
    } catch {
      setError("Something went wrong. Try again.");
    }
    setBusy(false);
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div key="ov" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            style={{ position: "fixed", inset: 0, background: "rgba(16,19,16,.5)", zIndex: 90 }} />
          <motion.aside key="dr" initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            style={{ position: "fixed", top: 0, right: 0, bottom: 0, width: "min(420px, 92vw)", background: "var(--cream)", zIndex: 91, display: "flex", flexDirection: "column", boxShadow: "-18px 0 50px rgba(0,0,0,.25)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 24px", borderBottom: "1px solid rgba(26,26,26,.1)" }}>
              <b style={{ fontSize: 13, letterSpacing: ".22em", textTransform: "uppercase" }}>Your cart</b>
              <button onClick={() => setOpen(false)} aria-label="Close cart" style={{ background: "none", border: "none", fontSize: 22, cursor: "pointer", lineHeight: 1 }}>×</button>
            </div>

            <div style={{ flex: 1, overflowY: "auto", padding: "8px 24px" }}>
              {items.length === 0 && <p style={{ color: "var(--ink-soft)", padding: "32px 0", textAlign: "center" }}>Your cart is empty.</p>}
              {items.map((i) => (
                <div key={i.id} style={{ display: "flex", gap: 14, padding: "16px 0", borderBottom: "1px solid rgba(26,26,26,.08)" }}>
                  {i.img && (
                    <div style={{ position: "relative", width: 64, height: 64, borderRadius: 4, overflow: "hidden", flex: "none", background: "var(--sand)" }}>
                      <Image src={i.img} alt={i.name} fill sizes="64px" style={{ objectFit: "cover" }} />
                    </div>
                  )}
                  <div style={{ flex: 1 }}>
                    <b style={{ display: "block", fontSize: 13.5, fontWeight: 600 }}>{i.name}</b>
                    <span style={{ fontSize: 12, color: "var(--ink-soft)" }}>{[i.colour, i.size].filter(Boolean).join(" · ")}</span>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 8 }}>
                      <div style={{ display: "flex", alignItems: "center", border: "1px solid rgba(26,26,26,.2)", borderRadius: 4 }}>
                        <button onClick={() => setQty(i.id, i.qty - 1)} style={{ width: 26, height: 26, border: "none", background: "none", cursor: "pointer" }}>−</button>
                        <span style={{ width: 22, textAlign: "center", fontSize: 13 }}>{i.qty}</span>
                        <button onClick={() => setQty(i.id, i.qty + 1)} style={{ width: 26, height: 26, border: "none", background: "none", cursor: "pointer" }}>+</button>
                      </div>
                      <button onClick={() => remove(i.id)} style={{ background: "none", border: "none", fontSize: 12, color: "var(--ink-soft)", cursor: "pointer", textDecoration: "underline" }}>Remove</button>
                    </div>
                  </div>
                  <span style={{ fontSize: 13.5, fontWeight: 600 }}>${(i.price * i.qty).toFixed(2)}</span>
                </div>
              ))}
            </div>

            {items.length > 0 && (
              <div style={{ padding: "18px 24px 24px", borderTop: "1px solid rgba(26,26,26,.12)", background: "var(--sand)" }}>
                {!free && (
                  <div style={{ fontSize: 12.5, color: "var(--forest)", marginBottom: 10 }}>
                    Spend ${toGo} more for free shipping
                  </div>
                )}
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13.5, marginBottom: 4 }}>
                  <span>Subtotal</span><span>${subtotal.toFixed(2)}</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13.5, marginBottom: 10 }}>
                  <span>Shipping</span><span>{free ? "FREE" : `$${SHIPPING_FEE.toFixed(2)}`}</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", fontWeight: 700, fontSize: 15, marginBottom: 14 }}>
                  <span>Total</span><span>${(subtotal + shipping).toFixed(2)} AUD</span>
                </div>
                {error && <div style={{ fontSize: 12.5, color: "#A63A2B", marginBottom: 10 }}>{error}</div>}
                <button className="btn btn-forest" style={{ width: "100%" }} onClick={checkout} disabled={busy}>
                  {busy ? "Heading to checkout…" : "Checkout"}
                </button>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
