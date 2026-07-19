import Announce from "@/components/Announce";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = { title: "Order confirmed | PandaBare" };

export default function Success() {
  return (
    <>
      <Announce />
      <Header />
      <main style={{ background: "var(--cream)", minHeight: "55vh", display: "grid", placeItems: "center", padding: "96px 24px" }}>
        <div style={{ textAlign: "center", maxWidth: 560 }}>
          <div style={{ width: 64, height: 64, borderRadius: "50%", background: "var(--forest)", display: "grid", placeItems: "center", margin: "0 auto 24px" }}>
            <svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="#fff" strokeWidth="2"><path d="M5 13l4 4L19 7" /></svg>
          </div>
          <h1 style={{ fontFamily: "var(--font-serif), serif", fontWeight: 500, fontSize: "clamp(28px,4vw,40px)", marginBottom: 12 }}>Order confirmed</h1>
          <p style={{ color: "var(--ink-soft)", marginBottom: 28 }}>Thanks for choosing bamboo. Your receipt is on its way to your inbox, and your socks are on their way to the post.</p>
          <a href="/" className="btn btn-forest">Back to the shop</a>
        </div>
      </main>
      <Footer />
    </>
  );
}
