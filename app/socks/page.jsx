import Announce from "@/components/Announce";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";

export const metadata = { title: "Bamboo Socks | PandaBare" };

export default function SocksPage() {
  const list = ["crew-sock", "ankle-hugger", "wristy", "sock-bundle"];
  const subs = { "crew-sock": "Midnight Black · Red Panda · Royal Blue", "ankle-hugger": "4 colours incl. Snow White", "wristy": "Black · White · Red", "sock-bundle": "Mix any three pairs, save $8.85" };
  return (
    <>
      <Announce />
      <Header />
      <main>
        <PageHero eyebrow="Shop" title="Bamboo socks, done properly." copy="Softer than cotton, breathable all year and honest about it. Every pair carries the 30-day comfort guarantee." img="/images/hero.jpg" alt="PandaBare bamboo socks and wristband in bamboo leaves" />
        <section style={{ padding: "72px 0 96px", background: "var(--cream)" }}>
          <div className="wrap">
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 20 }} data-shop-grid>
              {list.map((slug) => (
                <ProductCard key={slug} href={`/products/${slug}/`} img={products[slug].img} name={products[slug].name} price={products[slug].price} sub={subs[slug]} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
