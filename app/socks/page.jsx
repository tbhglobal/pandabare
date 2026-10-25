import { pageMetadata } from "@/lib/seo.mjs";
import ShopGuide from "@/components/ShopGuide";
import Announce from '@/components/Announce';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {ShopCollection,DeliveryNote} from '@/components/StorefrontHome';
export const metadata=pageMetadata({title:'Shop Bamboo Socks & Wristbands | PandaBare',description:'Compare Ankle Hugger socks in Small or Large, one-size crew socks and Wristy wristbands. Prices from A$12.95. Australian delivery A$10, free at A$50.',path:'/socks/'});
export default function Shop(){return <><a className="pb-skip-link" href="#main-content">Skip to content</a><Announce/><Header/><main id="main-content"><div className="wrap pb-shop-intro"><span className="pb-kicker">The PandaBare collection</span><h1>Shop bamboo socks & wristbands</h1><p>Find your fit. Choose your colour. Make them your own.</p></div><ShopCollection/><ShopGuide/><DeliveryNote/></main><Footer/></>;}
