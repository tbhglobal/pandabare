import Announce from "@/components/Announce";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Material from "@/components/Material";

export const metadata = { title: "About | PandaBare" };

export default function AboutPage() {
  return (
    <>
      <Announce />
      <Header />
      <main>
        <PageHero eyebrow="Our story" title="Soft on you. Better for the planet." copy="PandaBare started in Adelaide with a simple idea: the most comfortable things you own should also be the most responsible. Bamboo made that possible." img="/images/hero-couple.jpg" alt="Couple relaxing in PandaBare bamboo socks" />
        <section style={{ padding: "88px 0", background: "var(--cream)" }}>
          <div className="wrap" style={{ maxWidth: 720 }}>
            <p style={{ fontSize: 17, lineHeight: 1.75, marginBottom: 20 }}>We are not trying to fill your wardrobe. We make a small number of essentials, socks first, sleep and travel next, and make them properly: softer than cotton, breathable all year, grown without irrigation or pesticides.</p>
            <p style={{ fontSize: 17, lineHeight: 1.75, color: "var(--ink-soft)" }}>Every order ships in plastic-free packaging with a 30-day comfort guarantee. If they are not the most comfortable things you own, send them back.</p>
          </div>
        </section>
        <Material />
        <div style={{ height: 96, background: "var(--cream)" }} />
      </main>
      <Footer />
    </>
  );
}
