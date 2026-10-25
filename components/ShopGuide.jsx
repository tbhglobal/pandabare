import Breadcrumbs from './Breadcrumbs';
import { storefrontProducts, aud } from '@/lib/storefront';
import { canonical, jsonLd } from '@/lib/seo.mjs';
export default function ShopGuide(){
 const list={'@context':'https://schema.org','@type':'ItemList',name:'PandaBare socks and wristbands',itemListElement:Object.values(storefrontProducts).map((p,i)=>({'@type':'ListItem',position:i+1,name:p.name,url:canonical(p.path)}))};
 return <section className="wrap pb-section" aria-labelledby="shop-guide-heading"><Breadcrumbs items={[["Home","/"],["Shop socks & wristbands","/socks/"]]}/><h2 id="shop-guide-heading">Choose ankle socks, crew socks or a Wristy</h2><p>Start with the cut you want, then choose your colour and quantity. Prices below are in Australian dollars, per item.</p><div className="pb-delivery-grid" style={{marginTop:28}}>
 <div><h3><a href="/products/ankle-hugger/">Bamboo ankle socks</a></h3><p>Low-cut Ankle Huggers come in Small and Large, with red, white, blue and black options. {aud(storefrontProducts.ankle.priceCents)} each. Select your size before adding to the cart.</p></div>
 <div><h3><a href="/products/crew-sock/">Bamboo crew socks</a></h3><p>Choose a classic crew cut in black, red or blue. {aud(storefrontProducts.crew.priceCents)} per pair, in the existing one-size fit. Read the product fit notes if you are unsure.</p></div>
 <div><h3><a href="/products/wristy/">Wristy bamboo wristbands</a></h3><p>Wristies are {aud(storefrontProducts.wristy.priceCents)} each, with a stretch fit and red, white or black options. They are wristbands, rather than socks.</p></div></div>
 <p style={{marginTop:24}}>Delivery within Australia is A$10, or free when the order subtotal reaches A$50. Review colour, size and quantity in your cart. Read our <a className="pb-inline-link" href="/help/#shipping">shipping information</a> or <a className="pb-inline-link" href="/guides/crew-vs-ankle-socks/">compare crew and ankle socks</a>.</p><script type="application/ld+json" dangerouslySetInnerHTML={{__html:jsonLd(list)}}/></section>;
}
