import { pageMetadata } from "@/lib/seo.mjs";
import Announce from "@/components/Announce";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CrewPage from "@/components/CrewPage";

export const metadata = pageMetadata({title:'Bamboo Crew Socks Australia | PandaBare',description:'Shop PandaBare bamboo crew socks in black, red or blue, A$17.95 per pair. Check the one-size fit guide. A$10 shipping, free at A$50.',path:"/products/crew-sock/",image:"/images/products/card-crew.jpg"});

export default function CrewSock() {
  return (
    <>
      <a className="pb-skip-link" href="#main-content">Skip to content</a>
      <Announce />
      <Header />
      <main id="main-content">
        <CrewPage />
      </main>
      <Footer />
    </>
  );
}
