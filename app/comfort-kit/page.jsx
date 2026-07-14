import Announce from "@/components/Announce";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import KitBreakdown from "@/components/KitBreakdown";

export const metadata = { title: "The Comfort Kit | PandaBare" };

export default function ComfortKitPage() {
  return (
    <>
      <Announce />
      <Header />
      <main>
        <PageHero eyebrow="Coming soon" title="The PandaBare Comfort Kit" copy="Bamboo socks, a soft sleep mask and a travel pouch, curated into one gift-ready set for sleep, travel and slower living." img="/images/hero-couple.jpg" alt="Couple relaxing in PandaBare bamboo socks" />
        <KitBreakdown />
        <section style={{ padding: "96px 0", background: "var(--cream)", textAlign: "center" }}>
          <div className="wrap" style={{ maxWidth: 640 }}>
            <h2 style={{ fontFamily: "var(--font-serif), serif", fontWeight: 500, fontSize: "clamp(26px,3vw,36px)", marginBottom: 14 }}>Be first to know</h2>
            <p style={{ color: "var(--ink-soft)", marginBottom: 28 }}>The Comfort Kit launches soon at $59.95. Leave your email and get first access plus 10% off your first order.</p>
            <form style={{ display: "flex", gap: 0, maxWidth: 420, margin: "0 auto" }}>
              <input type="email" placeholder="Enter your email" style={{ flex: 1, padding: "15px 18px", border: "1px solid rgba(26,26,26,.25)", borderRight: "none", borderRadius: "4px 0 0 4px", background: "var(--cream)", fontFamily: "inherit", fontSize: 14, outline: "none" }} />
              <button type="button" className="btn btn-forest" style={{ borderRadius: "0 4px 4px 0" }}>Notify me</button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
