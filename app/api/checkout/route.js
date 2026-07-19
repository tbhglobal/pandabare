import Stripe from "stripe";
import { NextResponse } from "next/server";

const FREE_THRESHOLD_CENTS = 5000;
const SHIPPING_CENTS = 1000;

// Cart item ids the client may send, mapped to Stripe catalogue names + price nicknames
const CATALOG = {
  "ankle-red-small":   { name: "PandaBare Ankle Hugger | Red Panda", nickname: "Small" },
  "ankle-red-large":   { name: "PandaBare Ankle Hugger | Red Panda", nickname: "Large" },
  "ankle-white-small": { name: "PandaBare Ankle Hugger | Snow White", nickname: "Small" },
  "ankle-white-large": { name: "PandaBare Ankle Hugger | Snow White", nickname: "Large" },
  "ankle-blue-small":  { name: "PandaBare Ankle Hugger | Royal Blue", nickname: "Small" },
  "ankle-blue-large":  { name: "PandaBare Ankle Hugger | Royal Blue", nickname: "Large" },
  "ankle-black-small": { name: "PandaBare Ankle Hugger | Midnight Black", nickname: "Small" },
  "ankle-black-large": { name: "PandaBare Ankle Hugger | Midnight Black", nickname: "Large" },
  "wristy-black": { name: "PandaBare Wristy | Black" },
  "wristy-white": { name: "PandaBare Wristy | White" },
  "wristy-red":   { name: "PandaBare Wristy | Red" },
  "crew-red":   { name: "PandaBare Bamboo Crew Sock | Red Panda" },
  "crew-black": { name: "PandaBare Bamboo Crew Sock | Midnight Black" },
  "crew-blue":  { name: "PandaBare Bamboo Crew Sock | Royal Blue" },
};

let priceCache = null;
let cacheAt = 0;

async function loadPrices(stripe) {
  if (priceCache && Date.now() - cacheAt < 10 * 60 * 1000) return priceCache;
  const map = {};
  const products = await stripe.products.search({
    query: "metadata['site']:'pandabare' AND active:'true'",
    limit: 100,
  });
  for (const p of products.data) {
    const prices = await stripe.prices.list({ product: p.id, active: true, limit: 10 });
    map[p.name] = {};
    for (const pr of prices.data) {
      map[p.name][pr.nickname || "default"] = pr.id;
      if (!map[p.name].default) map[p.name].default = pr.id;
    }
  }
  priceCache = map;
  cacheAt = Date.now();
  return map;
}

export async function POST(req) {
  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
    const { items } = await req.json();
    if (!Array.isArray(items) || items.length === 0 || items.length > 50) {
      return NextResponse.json({ error: "Cart is empty" }, { status: 400 });
    }
    const prices = await loadPrices(stripe);
    const line_items = [];
    for (const it of items) {
      const entry = CATALOG[it.id];
      const qty = Math.max(1, Math.min(50, parseInt(it.qty, 10) || 1));
      if (!entry) return NextResponse.json({ error: `Unknown item ${it.id}` }, { status: 400 });
      const productPrices = prices[entry.name];
      const priceId = productPrices && (entry.nickname ? productPrices[entry.nickname] : productPrices.default);
      if (!priceId) return NextResponse.json({ error: `Price not found for ${entry.name}` }, { status: 500 });
      line_items.push({ price: priceId, quantity: qty });
    }

    // subtotal from Stripe prices to decide shipping honestly
    let subtotalCents = 0;
    for (const li of line_items) {
      const pr = await stripe.prices.retrieve(li.price);
      subtotalCents += pr.unit_amount * li.quantity;
    }
    const free = subtotalCents >= FREE_THRESHOLD_CENTS;

    const origin = req.headers.get("origin") || "https://pandabare-cartelltv.vercel.app";
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items,
      shipping_address_collection: { allowed_countries: ["AU"] },
      shipping_options: [
        free
          ? { shipping_rate_data: { display_name: "Free Shipping", type: "fixed_amount", fixed_amount: { amount: 0, currency: "aud" } } }
          : { shipping_rate_data: { display_name: "Standard Shipping", type: "fixed_amount", fixed_amount: { amount: SHIPPING_CENTS, currency: "aud" } } },
      ],
      success_url: `${origin}/checkout/success/`,
      cancel_url: `${origin}/socks/`,
      metadata: { site: "pandabare" },
    });
    return NextResponse.json({ url: session.url });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Checkout failed" }, { status: 500 });
  }
}
