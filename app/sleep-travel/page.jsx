import Announce from "@/components/Announce";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Moments from "@/components/Moments";

export const metadata = { title: "Sleep & Travel | PandaBare" };

export default function SleepTravelPage() {
  return (
    <>
      <Announce />
      <Header />
      <main>
        <PageHero eyebrow="Sleep & travel" title="Comfort that travels with you." copy="From bed socks to long-haul flights, PandaBare essentials are built for rest wherever you find it. The sleep mask and travel pouch arrive with the Comfort Kit." img="/images/hero-couple.jpg" alt="Couple relaxing in PandaBare bamboo socks" />
        <Moments />
        <section style={{ padding: "0 0 96px", background: "var(--cream)", textAlign: "center" }}>
          <div className="wrap">
            <a href="/comfort-kit/" className="btn btn-forest">Explore the Comfort Kit</a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
