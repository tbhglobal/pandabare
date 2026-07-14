import Announce from "@/components/Announce";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

export const metadata = { title: "Corporate Gifting | PandaBare" };

const points = [
  ["Gifts that get used", "Socks and comfort essentials beat branded pens. Your logo goes on the packaging, not the product, so people actually wear them."],
  ["Plastic-free and on-brand", "Kraft packaging, a story about lower-impact bamboo, and a gift that says your business thinks about the details."],
  ["Simple to order", "Tell us headcount and budget. We handle packing, notes and delivery, to one office or a hundred desks."],
];

export default function CorporatePage() {
  return (
    <>
      <Announce />
      <Header />
      <main>
        <PageHero eyebrow="Corporate" title="Client gifts they keep." copy="Bamboo comfort essentials, packed beautifully for teams, clients and events. From $25 a head." img="/images/hero-couple.jpg" alt="Couple relaxing in PandaBare bamboo socks" />
        <section style={{ padding: "88px 0", background: "var(--cream)" }}>
          <div className="wrap" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 44 }} data-mom-grid>
            {points.map(([t, b]) => (
              <div key={t} style={{ borderTop: "2px solid var(--forest)", paddingTop: 22 }}>
                <h3 style={{ fontFamily: "var(--font-serif), serif", fontWeight: 500, fontSize: 20, marginBottom: 10 }}>{t}</h3>
                <p style={{ fontSize: 14.5, color: "var(--ink-soft)" }}>{b}</p>
              </div>
            ))}
          </div>
        </section>
        <section style={{ padding: "0 0 96px", background: "var(--cream)", textAlign: "center" }}>
          <div className="wrap">
            <a href="mailto:hello@pandabare.me?subject=Corporate%20gifting%20enquiry" className="btn btn-forest">Enquire about corporate gifting</a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
