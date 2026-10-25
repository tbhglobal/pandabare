'use client';
import Image from 'next/image';
import { useState } from 'react';
import { useCart } from '@/lib/cart';
import { storefrontProducts, cartId, aud } from '@/lib/storefront';
import ProductSchema from './ProductSchema';
import Breadcrumbs from './Breadcrumbs';
export default function ProductPurchase({category='ankle'}) {
  const product=storefrontProducts[category];
  const [colourIndex,setColourIndex]=useState(0);
  const [size,setSize]=useState('');
  const [qty,setQty]=useState(1);
  const [added,setAdded]=useState(false);
  const cart=useCart();
  const colour=product.colours[colourIndex];
  const id=cartId(category,colour.slug,size);
  const quantityValid=Number.isInteger(qty)&&qty>=1&&qty<=50;
  const add=()=>{
    if (!id || !quantityValid || !cart) return;
    cart.add({id,qty,name:product.name,colour:colour.name,size:product.sizes?size:undefined,price:product.priceCents/100,img:colour.image});
    setAdded(true);
  };
  return <>
    <ProductSchema name={`PandaBare ${product.name}`} description={product.description} price={(product.priceCents/100).toFixed(2)} image={colour.image} path={product.path}/>
    <section className="pb-product wrap">
      <Breadcrumbs items={[["Home","/"],["Shop socks & wristbands","/socks/"],[product.name,product.path]]}/>
      <div className="pb-product-layout">
        <div className="pb-product-image"><Image src={colour.image} alt={`PandaBare ${product.name} in ${colour.name}`} fill priority sizes="(max-width: 800px) 100vw, 55vw" style={{objectFit:'cover'}}/><span className="pb-image-label">{colour.name}</span></div>
        <div className="pb-product-info"><span className="pb-kicker">{product.eyebrow}</span><h1>{product.seoHeading}</h1><p className="pb-product-price">{aud(product.priceCents)} <span>AUD · each</span></p><p className="pb-product-description">{product.description}</p>
          <fieldset className="pb-options"><legend>Colour <span>{colour.name}</span></legend><div className="pb-swatches">{product.colours.map((c,i)=><button type="button" key={c.slug} aria-label={c.name} aria-pressed={i===colourIndex} onClick={()=>{setColourIndex(i);setAdded(false);}} style={{'--swatch':c.hex}} className="pb-swatch"><span aria-hidden="true"/></button>)}</div></fieldset>
          {product.sizes ? <fieldset className="pb-options"><legend>Size <span>{size||'Please choose'}</span></legend><div className="pb-size-buttons">{product.sizes.map(s=><button type="button" key={s} aria-label={`${colour.name}: ${s}`} aria-pressed={size===s} onClick={()=>{setSize(s);setAdded(false);}}>{s}</button>)}</div><p className="pb-fit-note">Choose a size before adding. Not sure about fit? <a href="mailto:orders@pandabare.me">Ask us for help.</a></p></fieldset> : <div className="pb-fit-note pb-one-size"><b>One size</b><p>{product.sizing}</p></div>}
          <div className="pb-buy-row"><div className="pb-quantity"><button type="button" aria-label="Decrease quantity" disabled={!quantityValid||qty<=1} onClick={()=>setQty(qty-1)}>−</button><label className="pb-sr-only" htmlFor="product-quantity">Quantity</label><input id="product-quantity" aria-describedby="quantity-help" aria-invalid={!quantityValid} inputMode="numeric" type="number" min="1" max="50" value={qty} onChange={e=>{setQty(e.target.value===''?'':Number(e.target.value));setAdded(false);}}/><button type="button" aria-label="Increase quantity" disabled={!quantityValid||qty>=50} onClick={()=>setQty(qty+1)}>+</button></div><button type="button" className="btn btn-forest" onClick={add} disabled={!id||!quantityValid}>{!id?'Choose a size':'Add to cart'} <span aria-hidden="true">↗</span></button></div>
          <p id="quantity-help" className="pb-fit-note">{quantityValid?`Item total: ${aud(product.priceCents*qty)}. Shipping is calculated in your cart.`:'Enter a whole quantity from 1 to 50.'}</p><p className="pb-added" role="status" aria-live="polite">{added?`${qty} × ${product.name}${size?' · '+size:''} added to your cart.`:' '}</p>
          <div className="pb-product-help"><details><summary>Delivery & returns</summary><p>Delivery within Australia is A$10, or free on orders of A$50 or more. See our <a href="/help/#shipping">shipping information</a> and <a href="/help/#returns">30-day comfort guarantee</a>. For an order update, email orders@pandabare.me.</p></details><details><summary>Choosing your fit</summary><p>{product.sizes ? "Ankle Huggers have Small and Large options. Choose the size you need before adding to your cart; contact us if you need sizing help." : product.sizing} Read our <a href="/guides/crew-vs-ankle-socks/">crew and ankle sock comparison</a> or browse the <a href="/socks/">full collection</a>.</p></details><details><summary>Care guide</summary><p>Cold machine wash and line dry in the shade. See the <a href="/help/#care">care guide</a> for more details.</p></details><p className="pb-checkout-note">Checkout is handled securely by Stripe. Review your colour, size and quantity in the cart before paying.</p></div>
        </div>
      </div>
    </section>
  </>;
}
