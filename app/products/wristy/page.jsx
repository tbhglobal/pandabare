import { pageMetadata } from "@/lib/seo.mjs";
import Announce from "@/components/Announce";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WristyPage from "@/components/WristyPage";

export const metadata = pageMetadata({title:'Bamboo Wristbands – Wristy | PandaBare',description:'Choose Wristy bamboo wristbands in red, white or black. A$12.95 each, one-size stretch fit. A$10 Australian shipping, free at A$50.',path:"/products/wristy/",image:"/images/products/card-wristy.jpg"});

export default function Wristy() {
  return (
    <>
      <a className="pb-skip-link" href="#main-content">Skip to content</a>
      <Announce />
      <Header />
      <main id="main-content"><WristyPage /></main>
      <Footer />
    </>
  );
}
