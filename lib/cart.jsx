"use client";
import { createContext, useContext, useEffect, useState } from "react";

const CartCtx = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [open, setOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem("pb-cart");
      if (raw) setItems(JSON.parse(raw));
    } catch {}
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (loaded) {
      try { window.localStorage.setItem("pb-cart", JSON.stringify(items)); } catch {}
    }
  }, [items, loaded]);

  const add = (item) => {
    setItems((prev) => {
      const key = item.id;
      const found = prev.find((i) => i.id === key);
      if (found) return prev.map((i) => (i.id === key ? { ...i, qty: i.qty + (item.qty || 1) } : i));
      return [...prev, { ...item, qty: item.qty || 1 }];
    });
    setOpen(true);
  };
  const setQty = (id, qty) => setItems((prev) => (qty <= 0 ? prev.filter((i) => i.id !== id) : prev.map((i) => (i.id === id ? { ...i, qty } : i))));
  const remove = (id) => setItems((prev) => prev.filter((i) => i.id !== id));
  const clear = () => setItems([]);
  const subtotal = items.reduce((s, i) => s + i.price * i.qty, 0);
  const count = items.reduce((s, i) => s + i.qty, 0);

  return (
    <CartCtx.Provider value={{ items, add, setQty, remove, clear, subtotal, count, open, setOpen }}>
      {children}
    </CartCtx.Provider>
  );
}

export const useCart = () => useContext(CartCtx);
export const FREE_SHIPPING_THRESHOLD = 50;
export const SHIPPING_FEE = 10;
