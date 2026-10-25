import Image from 'next/image';
import { storefrontProducts, aud } from '@/lib/storefront';
export function ShopCollection({ heading=true }) {
  return <section className="pb-section pb-collection" id="collection" aria-labelledby="collection-heading">
    <div className="wrap">
      {heading && <div className="pb-section-head"><div><span className="pb-kicker">The everyday collection</span><h2 id="collection-heading">Find your kind of comfort.</h2></div><p>Three essentials. Colours worth keeping.<br />Choose what works for your everyday.</p></div>}
      <div className="pb-category-grid">{Object.entries(storefrontProducts).map(([key,p])=><a className="pb-category-card" href={p.path} key={key}>
        <div className="pb-category-image"><Image src={p.card} alt={p.name} fill sizes="(max-width: 650px) 100vw, 33vw" style={{objectFit:'cover'}}/><span className="pb-category-arrow" aria-hidden="true">↗</span></div>
        <div className="pb-category-caption"><div><span className="pb-kicker">{p.eyebrow}</span><h3>{p.name}</h3><p>{p.sizes ? 'Small & Large · 4 colours' : `One size · ${p.colours.length} colours`}</p></div><b>{aud(p.priceCents)}</b></div>
      </a>)}</div>
    </div>
  </section>;
}
export function DeliveryNote() {
  return <section className="pb-delivery" aria-label="Shopping information"><div className="wrap pb-delivery-grid">
    <div><span className="pb-small-number">01</span><h3>Australia-wide delivery</h3><p>A$10 delivery. Free on orders of A$50 or more.</p></div>
    <div><span className="pb-small-number">02</span><h3>Choose with confidence</h3><p>Check our <a href="/help/#returns">30-day comfort guarantee</a> and returns information.</p></div>
    <div><span className="pb-small-number">03</span><h3>A hand when you need it</h3><p>Questions about fit or an order? <a href="mailto:orders@pandabare.me">Get in touch.</a></p></div>
  </div></section>;
}
export default function StorefrontHome() {
  return <>
    <section className="pb-home-hero">
      <div className="pb-hero-copy"><span className="pb-kicker">PandaBare · everyday essentials</span><h1>Bamboo socks.<br /><em>Everyday comfort.</em></h1><p>Bamboo socks and wristbands for the moments that make up your day. Find your favourite pair and get comfortable.</p><div className="pb-hero-actions"><a className="btn btn-forest" href="#collection">Find your pair <span aria-hidden="true">↗</span></a><a className="pb-inline-link" href="/products/ankle-hugger/">Meet the Ankle Hugger</a></div><span className="pb-hero-footnote">Ankle socks from A$15.95 · delivery from A$10</span></div>
      <div className="pb-hero-photo"><Image src="/images/hero-couple-bed.jpg" alt="PandaBare socks on a relaxed day at home" fill priority sizes="(max-width: 800px) 100vw, 55vw" style={{objectFit:'cover',objectPosition:'63% center'}}/><span className="pb-photo-caption">For the everyday, and the feet-up days.</span></div>
    </section>
    <ShopCollection/>
    <section className="pb-story wrap"><div className="pb-story-photo"><Image src="/images/ankle/lounge.jpg" alt="PandaBare ankle socks worn at home" fill sizes="(max-width: 800px) 100vw, 45vw" style={{objectFit:'cover'}}/></div><div className="pb-story-copy"><span className="pb-kicker">Keep it comfortable</span><h2>Less fuss.<br />More favourite pairs.</h2><p>Low-cut ankle socks, classic crews and a wristband for your kit. Start with the fit you want, choose a colour, and leave the complicated part out.</p><a className="pb-inline-link" href="/socks/">Explore the collection <span aria-hidden="true">↗</span></a></div></section>
    <DeliveryNote/>
  </>;
}
