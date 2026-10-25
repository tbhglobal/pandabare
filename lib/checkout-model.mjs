// Shared display and checkout contract. Stripe remains the authority for payment.
export const MAX_QUANTITY = 50;
export const FREE_THRESHOLD_CENTS = 5000;
export const SHIPPING_CENTS = 1000;
export const CATALOG = Object.create(null);
for (const [slug, colour] of Object.entries({red:'Red Panda',white:'Snow White',blue:'Royal Blue',black:'Midnight Black'})) {
  for (const size of ['Small','Large']) CATALOG[`ankle-${slug}-${size.toLowerCase()}`] = {
    name: `PandaBare Ankle Hugger | ${colour}`, nickname:size, size,
    displayName:'Ankle Hugger', colour, cents:1595, img:`/images/ankle/${slug}.jpg`,
  };
}
for (const [slug,colour] of Object.entries({red:'Red Panda',black:'Midnight Black',blue:'Royal Blue'})) {
  CATALOG[`crew-${slug}`] = {name:`PandaBare Bamboo Crew Sock | ${colour}`,displayName:'Bamboo Crew Sock',colour,cents:1795,img:`/images/products/crew-${slug}.jpg`};
}
for (const colour of ['Black','White','Red']) CATALOG[`wristy-${colour.toLowerCase()}`] = {
  name:`PandaBare Wristy | ${colour}`,displayName:'Wristy',colour,cents:1295,img:`/images/products/wristy-${colour.toLowerCase()}.jpg`,
};
export function validateItems(items) {
  if (!Array.isArray(items) || !items.length || items.length > 50) throw new Error('Please check your cart and try again.');
  const merged = new Map();
  for (const item of items) {
    if (!item || typeof item.id !== 'string' || !Object.hasOwn(CATALOG,item.id) || !Number.isInteger(item.qty) || item.qty < 1 || item.qty > MAX_QUANTITY) throw new Error('Please check the items and quantities in your cart.');
    const qty = (merged.get(item.id) || 0) + item.qty;
    if (qty > MAX_QUANTITY) throw new Error('Maximum quantity is 50 per variant.');
    merged.set(item.id,qty);
  }
  return [...merged].map(([id,qty])=>({id,qty}));
}
export function restoreCart(raw) {
  if (!Array.isArray(raw)) return [];
  const valid = raw.filter(i=>i && typeof i.id === 'string' && Object.hasOwn(CATALOG,i.id) && Number.isInteger(i.qty) && i.qty > 0 && i.qty <= MAX_QUANTITY).slice(0,50);
  const result = new Map();
  for (const {id,qty} of valid) {
    const entry = CATALOG[id];
    result.set(id,{id,qty:Math.min(MAX_QUANTITY,(result.get(id)?.qty || 0)+qty),name:entry.displayName,colour:entry.colour,size:entry.size,price:entry.cents/100,img:entry.img});
  }
  return [...result.values()];
}
export function selectPrice(entry, prices) {
  const matches = prices.filter(p=>p.active === true && p.currency === 'aud' && p.type === 'one_time' && p.billing_scheme === 'per_unit' && !p.transform_quantity && !p.custom_unit_amount && p.unit_amount === entry.cents && (entry.nickname ? p.nickname === entry.nickname : !p.nickname || p.nickname === 'default' || p.nickname === 'One Size'));
  if (matches.length !== 1) throw new Error('Product pricing is unavailable. Please contact orders@pandabare.me.');
  return matches[0];
}
export function cartTotals(items) {
  const subtotalCents=items.reduce((sum,i)=>sum+CATALOG[i.id].cents*i.qty,0);
  const shippingCents=items.length && subtotalCents < FREE_THRESHOLD_CENTS ? SHIPPING_CENTS : 0;
  return {subtotalCents,shippingCents,totalCents:subtotalCents+shippingCents};
}
