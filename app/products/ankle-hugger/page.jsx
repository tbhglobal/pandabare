import { pageMetadata } from "@/lib/seo.mjs";
import Announce from "@/components/Announce";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnklePage from "@/components/AnklePage";

export const metadata = pageMetadata({title:'Bamboo Ankle Socks – Ankle Hugger | PandaBare',description:'Choose Ankle Hugger bamboo ankle socks in Small or Large and four colours. A$15.95 per pair. A$10 Australian shipping, free at A$50.',path:"/products/ankle-hugger/",image:"/images/products/card-ankle.jpg"});

export default function AnkleHugger() {
  return (
    <>
      <a className="pb-skip-link" href="#main-content">Skip to content</a>
      <Announce />
      <Header />
      <main id="main-content"><AnklePage /></main>
      <Footer />
    </>
  );
}
