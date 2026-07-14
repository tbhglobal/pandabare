import Announce from "@/components/Announce";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import KitBreakdown from "@/components/KitBreakdown";
import Moments from "@/components/Moments";
import Material from "@/components/Material";
import Shop from "@/components/Shop";
import Gifting from "@/components/Gifting";
import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Announce />
      <Header />
      <main>
        <Hero />
        <Marquee />
        <KitBreakdown />
        <Moments />
        <Material />
        <Shop />
        <Gifting />
        <Reviews />
      </main>
      <Footer />
    </>
  );
}
