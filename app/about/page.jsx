import { pageMetadata } from "@/lib/seo.mjs";
import Announce from "@/components/Announce";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Material from "@/components/Material";
import { ShopCollection } from "@/components/StorefrontHome";

export const metadata=pageMetadata({title:'About PandaBare | Bamboo Socks & Wristbands',description:'Learn about PandaBare and explore our current range of ankle socks, crew socks and Wristy wristbands.',path:"/about/"});

export default function AboutPage() {
  return (
    <>
      <a className="pb-skip-link" href="#main-content">Skip to content</a>
      <Announce />
      <Header />
      <main id="main-content">
        <PageHero eyebrow="About PandaBare" title="Find your everyday favourites." copy="Explore PandaBare ankle socks, crew socks and Wristy wristbands. Start with the product you want, then choose your colour and check the fit details before ordering." img="/images/hero-couple.jpg" alt="Couple relaxing in PandaBare bamboo socks" />
        <section style={{ padding: "88px 0", background: "var(--cream)" }}>
          <div className="wrap" style={{ maxWidth: 720 }}>
            <p style={{ fontSize: 17, lineHeight: 1.75, marginBottom: 20 }}>Our current collection has three product lines: low-cut Ankle Huggers, Bamboo Crew Socks and Wristy wristbands. You can choose each product individually and review the quantities and total in your cart.</p>
            <p style={{ fontSize: 17, lineHeight: 1.75, color: "var(--ink-soft)" }}>Need help choosing? <a className="pb-inline-link" href="/guides/crew-vs-ankle-socks/">Compare crew and ankle cuts</a>, or <a className="pb-inline-link" href="/help/#faq">read our buying FAQs</a>. For full fibre percentages, dimensions or fit details that are not listed, <a className="pb-inline-link" href="mailto:orders@pandabare.me">ask us before ordering</a>.</p>
          </div>
        </section>
        <ShopCollection />
        <Material />
        <div style={{ height: 96, background: "var(--cream)" }} />
      </main>
      <Footer />
    </>
  );
}
