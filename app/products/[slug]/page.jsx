import Announce from "@/components/Announce";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import ProductDetail from "@/components/ProductDetail";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";

export function generateStaticParams() {
  return Object.keys(products).filter((s) => s !== "wristy" && s !== "ankle-hugger").map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
  const p = products[params.slug];
  return { title: `${p.name} | PandaBare` };
}

export default function ProductPage({ params }) {
  const p = products[params.slug];
  const others = Object.entries(products).filter(([s]) => s !== params.slug).slice(0, 3);
  return (
    <>
      <Announce />
      <Header />
      <main>
        <PageHero eyebrow="Bamboo comfort essentials" title={p.name} copy={p.blurb} img="/images/hero.jpg" alt="PandaBare bamboo socks and wristband in bamboo leaves" />
        <ProductDetail product={p} />
        <section style={{ padding: "0 0 96px", background: "var(--cream)" }}>
          <div className="wrap">
            <h2 style={{ fontFamily: "var(--font-serif), serif", fontWeight: 500, fontSize: 28, marginBottom: 28 }}>You might also like</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }} data-mom-grid>
              {others.map(([slug, o]) => (
                <ProductCard key={slug} href={`/products/${slug}/`} img={o.img} name={o.name} price={o.price} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
