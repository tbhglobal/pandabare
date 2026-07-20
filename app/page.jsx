import Announce from "@/components/Announce";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Collection from "@/components/Collection";
import NatureFabric from "@/components/NatureFabric";
import Movement from "@/components/Movement";
import TrustRow from "@/components/TrustRow";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Announce />
      <Header />
      <main>
        <Hero />
        <Collection />
        <NatureFabric />
        <Movement />
        <TrustRow />
      </main>
      <Footer />
    </>
  );
}
