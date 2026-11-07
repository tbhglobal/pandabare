import { storefrontProducts, aud } from '@/lib/storefront';
import { FREE_THRESHOLD_CENTS, SHIPPING_CENTS } from '@/lib/checkout-model.mjs';

export const basketIdeas = [
  {title:'The crew rotation',items:[['crew',3]]},
  {title:'Ankle socks for the week',items:[['ankle',4]]},
  {title:'A little of both',items:[['crew',2],['ankle',1]]},
];
export default function BasketIdeas(){
 return <section className="wrap pb-section pb-basket-ideas" id="basket-ideas" aria-labelledby="basket-ideas-heading">
  <div className="pb-section-head"><div><span className="pb-kicker">Plan your basket</span><h2 id="basket-ideas-heading">See the total before you choose.</h2></div><p>Each product is priced individually. These are shopping ideas, with no bundle discount or special packaging included.</p></div>
  <div className="pb-basket-grid">{basketIdeas.map(idea=>{
   const subtotal=idea.items.reduce((sum,[key,qty])=>sum+storefrontProducts[key].priceCents*qty,0);
   const delivery=subtotal>=FREE_THRESHOLD_CENTS?0:SHIPPING_CENTS;
   return <article className="pb-basket-card" key={idea.title}><h3>{idea.title}</h3><ul>{idea.items.map(([key,qty])=><li key={key}>{qty} × {storefrontProducts[key].name}</li>)}</ul>
    <dl><div><dt>Products</dt><dd>{aud(subtotal)}</dd></div><div><dt>Australian delivery</dt><dd>{delivery?aud(delivery):'Free'}</dd></div><div className="pb-basket-total"><dt>Total</dt><dd>{aud(subtotal+delivery)}</dd></div></dl>
    <div className="pb-basket-actions">{idea.items.map(([key,qty])=><a className="pb-inline-link" key={key} href={`${storefrontProducts[key].path}?quantity=${qty}`}>Choose {key==='ankle'?'ankle socks':'crew socks'} <span aria-hidden="true">↗</span></a>)}</div>
   </article>;
  })}</div><p className="pb-basket-note">Choose colour and any available size on the product page, then add to your cart. Quantities can be changed there. Availability is shown in the product selector; review the final total in your cart.</p>
 </section>;
}
