import Announce from "@/components/Announce";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CrewPage from "@/components/CrewPage";
import TrustRow from "@/components/TrustRow";

export const metadata = {
  title: "Bamboo Crew Sock | PandaBare",
  description: "All-day comfort bamboo crew socks. Soft, breathable and durable for work, training and everything in between. $17.95 AUD in black, red and blue.",
};

export default function CrewSock() {
  return (
    <>
      <Announce />
      <Header />
      <main>
        <CrewPage />
        <TrustRow showHeading={false} />
      </main>
      <Footer />
    </>
  );
}
