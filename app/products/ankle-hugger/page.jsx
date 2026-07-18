import Announce from "@/components/Announce";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnklePage from "@/components/AnklePage";

export const metadata = {
  title: "Ankle Hugger | Bamboo Ankle Socks | PandaBare",
  description: "Low cut, high comfort bamboo ankle socks. Breathable, moisture wicking and gentle on skin. $15.95 AUD in red, white, blue and black.",
};

export default function AnkleHugger() {
  return (
    <>
      <Announce />
      <Header />
      <main><AnklePage /></main>
      <Footer />
    </>
  );
}
