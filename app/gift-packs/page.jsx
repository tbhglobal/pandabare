import Announce from '@/components/Announce';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import { pageMetadata } from '@/lib/seo.mjs';
import { ShopCollection, DeliveryNote } from '@/components/StorefrontHome';
import BasketIdeas from '@/components/BasketIdeas';
export const metadata=pageMetadata({title:'Gift Ideas: Socks & Wristbands | PandaBare',description:'Choose PandaBare socks and Wristy wristbands individually. Compare basket ideas, product prices and Australian delivery totals before selecting colour and fit.',path:'/gift-packs/'});
export default function GiftIdeas(){return <><a className="pb-skip-link" href="#main-content">Skip to content</a><Announce/><Header/><main id="main-content"><PageHero eyebrow="Gift ideas" title="Make it personal. Choose their favourites." copy="Choose ankle socks, crew socks or a Wristy wristband from the current collection. Products are sold individually; choose colour and fit before adding to your cart." img="/images/products/bundle.jpg" alt="PandaBare socks"/><BasketIdeas/><ShopCollection/><section className="wrap pb-section"><h2>Choosing for someone else?</h2><p>Check their preferred cut, shoe size or wrist measurement before you choose. If a fit detail is missing, <a className="pb-inline-link" href="mailto:orders@pandabare.me">ask us before ordering</a>. For a larger team or client order, <a className="pb-inline-link" href="/corporate/">enquire about quantities and options</a>.</p></section><DeliveryNote/></main><Footer/></>;}
