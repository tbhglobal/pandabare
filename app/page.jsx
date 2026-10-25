import { pageMetadata } from '@/lib/seo.mjs';
import Announce from '@/components/Announce';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StorefrontHome from '@/components/StorefrontHome';
export const metadata=pageMetadata({title:'Bamboo Socks & Wristbands Australia | PandaBare',description:'Shop Ankle Hugger bamboo ankle socks, crew socks and Wristy wristbands. Choose your colour and fit. A$10 delivery, free at A$50.',path:'/'});
export default function Home(){return <><a className="pb-skip-link" href="#main-content">Skip to content</a><Announce/><Header/><main id="main-content"><StorefrontHome/></main><Footer/></>;}
