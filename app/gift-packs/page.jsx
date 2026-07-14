import Announce from "@/components/Announce";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import ProductCard from "@/components/ProductCard";
import Gifting from "@/components/Gifting";
import { products } from "@/lib/products";

export const metadata = { title: "Gift Packs | PandaBare" };

export default function GiftPacksPage() {
  return (
    <>
      <Announce />
      <Header />
      <main>
        <PageHero eyebrow="Gifting" title="Thoughtful gifts. Made better." copy="Soft bamboo essentials, packed beautifully for birthdays, thank-yous, travel lovers, new parents and clients." img="/images/hero.jpg" alt="PandaBare bamboo socks and wristband in bamboo leaves" />
        <section style={{ padding: "72px 0", background: "var(--cream)" }}>
          <div className="wrap">
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }} data-mom-grid>
              <ProductCard href="/products/sock-bundle/" img={products["sock-bundle"].img} name="Sock Bundle | 3-Pack" price="$45.00" sub="Mix any three pairs, save $8.85" />
              <ProductCard href="/comfort-kit/" img="/images/gift-trio.jpg" name="The Comfort Kit" price="$59.95" sub="Coming soon, register interest" />
              <ProductCard href="/corporate/" img="/images/bamboo-pack.jpg" name="Corporate Gifting" price="From $25/head" sub="Client and team gifts that get used" />
            </div>
          </div>
        </section>
        <Gifting />
      </main>
      <Footer />
    </>
  );
}
