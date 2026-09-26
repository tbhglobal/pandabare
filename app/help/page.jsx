import Announce from "@/components/Announce";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Shipping, Returns & Help | PandaBare",
  description: "Shipping, returns, sock care and common questions about PandaBare bamboo socks and wristbands.",
};

const serif = { fontFamily: "var(--font-serif), serif", fontWeight: 600 };
const h2 = { ...serif, fontSize: 28, lineHeight: 1.2, marginBottom: 14 };
const p = { fontSize: 16.5, lineHeight: 1.75, color: "#2a2a28", marginBottom: 14 };
const block = { padding: "44px 0", borderTop: "1px solid rgba(26,26,26,.1)", scrollMarginTop: 90 };

const faqs = [
  ["What are PandaBare socks made from?", "Soft, breathable bamboo fibre. Check each product page for the full fabric details."],
  ["What size are the crew socks?", "One size fits most: roughly AU men's 6 to 12 and women's 7 to 13."],
  ["Do the Wristies fit everyone?", "They're one size with plenty of stretch, so they suit most wrists."],
  ["Where do you ship?", "Australia wide."],
  ["How do I track my order?", "You'll get an order confirmation by email. If you need an update, email orders@pandabare.me with your order number."],
  ["Can I change or cancel my order?", "Email orders@pandabare.me as soon as possible and we'll do our best before it ships."],
];

export default function HelpPage() {
  return (
    <>
      <Announce />
      <Header />
      <main style={{ background: "var(--cream)" }}>
        <section style={{ padding: "72px 0 24px" }}>
          <div className="wrap" style={{ maxWidth: 760 }}>
            <span className="eyebrow">Help</span>
            <h1 style={{ ...serif, fontWeight: 700, fontSize: "clamp(32px,4vw,48px)", lineHeight: 1.1, margin: "12px 0 14px" }}>Shipping, returns &amp; care</h1>
            <p style={{ fontSize: 18, color: "var(--ink-soft)", fontWeight: 300 }}>
              Everything you need to know. Can&apos;t find it? Email <a href="mailto:orders@pandabare.me" style={{ color: "var(--forest)", textDecoration: "underline" }}>orders@pandabare.me</a>.
            </p>
            <nav style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 26 }}>
              {[["Shipping", "shipping"], ["Returns", "returns"], ["Care", "care"], ["FAQs", "faq"]].map(([l, id]) => (
                <a key={id} href={`#${id}`} style={{ fontSize: 13, fontWeight: 500, padding: "8px 16px", border: "1px solid rgba(26,26,26,.2)", borderRadius: 40 }}>{l}</a>
              ))}
            </nav>
          </div>
        </section>

        <div className="wrap" style={{ maxWidth: 760, paddingBottom: 96 }}>
          <section id="shipping" style={block}>
            <h2 style={h2}>Shipping</h2>
            <p style={p}>We ship Australia wide.</p>
            <ul style={{ ...p, paddingLeft: 22 }}>
              <li><b>$10 flat rate</b> on orders under $50</li>
              <li><b>Free shipping</b> on orders of $50 or more</li>
            </ul>
            <p style={p}>You&apos;ll get a confirmation email once your order is placed.</p>
          </section>

          <section id="returns" style={block}>
            <h2 style={h2}>Returns: 30-day comfort guarantee</h2>
            <p style={p}>If your PandaBare socks or Wristies aren&apos;t the most comfortable things you own, let us know within 30 days of delivery and we&apos;ll sort it out.</p>
            <p style={p}>Email <a href="mailto:orders@pandabare.me" style={{ color: "var(--forest)", textDecoration: "underline" }}>orders@pandabare.me</a> with your order number and we&apos;ll take it from there.</p>
          </section>

          <section id="care" style={block}>
            <h2 style={h2}>Care guide</h2>
            <p style={p}>Bamboo stays softest when you treat it gently.</p>
            <ul style={{ ...p, paddingLeft: 22 }}>
              <li>Cold wash, 30°C or below</li>
              <li>No fabric softener or bleach</li>
              <li>Line dry in the shade</li>
              <li>Skip the dryer if you can, it keeps the fibres softer for longer</li>
            </ul>
          </section>

          <section id="faq" style={block}>
            <h2 style={h2}>FAQs</h2>
            {faqs.map(([q, a]) => (
              <details key={q} style={{ borderBottom: "1px solid rgba(26,26,26,.1)", padding: "16px 0" }}>
                <summary style={{ cursor: "pointer", fontWeight: 700, fontSize: 16 }}>{q}</summary>
                <p style={{ ...p, margin: "10px 0 0", color: "var(--ink-soft)" }}>{a}</p>
              </details>
            ))}
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
