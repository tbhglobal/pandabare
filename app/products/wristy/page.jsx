import Announce from "@/components/Announce";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WristyPage from "@/components/WristyPage";

export const metadata = {
  title: "Wristy | Bamboo Sports Wristband | PandaBare",
  description: "The Wristy bamboo sports wristband. Ultra soft, moisture wicking and odour resistant. $12.95 AUD in red, white and black.",
};

export default function Wristy() {
  return (
    <>
      <Announce />
      <Header />
      <main><WristyPage /></main>
      <Footer />
    </>
  );
}
