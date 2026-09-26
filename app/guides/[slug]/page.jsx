import Announce from "@/components/Announce";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getSlugs, getGuide, getAllGuides } from "@/lib/guides";

export function generateStaticParams() {
  return getSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
  const g = getGuide(params.slug);
  if (!g) return { title: "Guide | PandaBare" };
  const image = g.hero ? g.hero.src : "/images/hero-couple-bed.jpg";
  return {
    title: `${g.metaTitle} | PandaBare`,
    description: g.description,
    openGraph: { title: g.metaTitle, description: g.description, images: [image], type: "article" },
    twitter: { card: "summary_large_image", title: g.metaTitle, description: g.description, images: [image] },
  };
}

const SHOP_HEADING = {
  A: "Feel the difference for yourself",
  B: "The socks this guide is talking about",
  C: "Soft bamboo for better nights",
  D: "Pack a pair for the trip",
  E: "Gifts that actually get worn",
  F: "Try PandaBare",
};

const PRODUCTS = [
  { href: "/products/ankle-hugger/", name: "Ankle Hugger", price: "$15.95", img: "/images/products/card-ankle.jpg", note: "Low cut, four colours" },
  { href: "/products/crew-sock/", name: "Bamboo Crew Sock", price: "$17.95", img: "/images/products/card-crew.jpg", note: "Full length, three colours" },
  { href: "/products/wristy/", name: "Wristy Wristband", price: "$12.95", img: "/images/products/card-wristy.jpg", note: "One size, three colours" },
];

export default function GuidePage({ params }) {
  const g = getGuide(params.slug);
  if (!g) return notFound();
  const related = getAllGuides().filter((x) => x.cluster === g.cluster && x.slug !== g.slug).slice(0, 3);
  const products = g.cluster === "C" || g.cluster === "D" ? [PRODUCTS[1], PRODUCTS[0], PRODUCTS[2]] : PRODUCTS;

  return (
    <>
      <Announce />
      <Header />
      <main>
        <article>
          <header style={{ background: "var(--cream)", padding: "64px 0 8px" }}>
            <div className="wrap" style={{ maxWidth: 820 }}>
              <a href="/guides/" className="eyebrow" style={{ display: "inline-block", marginBottom: 18 }}>← {g.clusterLabel}</a>
              <h1 style={{ fontFamily: "var(--font-serif), serif", fontWeight: 700, fontSize: "clamp(30px,4vw,50px)", lineHeight: 1.1, letterSpacing: "-0.01em", marginBottom: 16 }}>{g.title}</h1>
              {g.description && <p style={{ fontSize: 18, color: "var(--ink-soft)", fontWeight: 300, lineHeight: 1.5 }}>{g.description}</p>}
            </div>
          </header>

          {g.hero && (
            <div className="wrap" style={{ maxWidth: 960, marginTop: 32 }}>
              <div style={{ position: "relative", aspectRatio: "16/9", borderRadius: 8, overflow: "hidden", background: "var(--sand)" }}>
                <Image src={g.hero.src} alt={g.hero.alt} fill sizes="(max-width:1000px) 100vw, 960px" style={{ objectFit: "cover" }} priority />
              </div>
            </div>
          )}

          <div className="wrap guide-body" style={{ maxWidth: 720, padding: "48px 36px 72px" }} dangerouslySetInnerHTML={{ __html: g.html }} />
        </article>

        {/* shop the range */}
        <section style={{ background: "var(--forest)", color: "var(--cream)", padding: "64px 0" }}>
          <div className="wrap">
            <span className="eyebrow" style={{ color: "var(--beige)" }}>Shop PandaBare</span>
            <h2 style={{ fontFamily: "var(--font-serif), serif", fontWeight: 600, fontSize: "clamp(24px,3vw,34px)", margin: "10px 0 8px" }}>{SHOP_HEADING[g.cluster] || "Try PandaBare"}</h2>
            <p style={{ color: "rgba(246,243,238,.75)", fontWeight: 300, marginBottom: 30 }}>$10 flat shipping, free on orders over $50. 30-day comfort guarantee.</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }} data-shop-grid>
              {products.map((p) => (
                <a key={p.href} href={p.href} className="guide-card" style={{ display: "block", background: "var(--cream)", color: "var(--charcoal)", borderRadius: 6, overflow: "hidden" }}>
                  <div style={{ position: "relative", aspectRatio: "4/3", background: "var(--sand)" }}>
                    <Image src={p.img} alt={p.name} fill sizes="(max-width:1000px) 100vw, 33vw" style={{ objectFit: "cover" }} />
                  </div>
                  <div style={{ padding: "16px 18px 20px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 10 }}>
                      <b style={{ fontFamily: "var(--font-serif), serif", fontWeight: 600, fontSize: 17 }}>{p.name}</b>
                      <span style={{ fontWeight: 700, fontSize: 14.5 }}>{p.price}</span>
                    </div>
                    <p style={{ fontSize: 13, color: "var(--ink-soft)", margin: "4px 0 12px" }}>{p.note}</p>
                    <span className="textlink">Shop now →</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {related.length > 0 && (
          <section style={{ background: "var(--cream)", borderTop: "1px solid rgba(26,26,26,.08)", padding: "64px 0" }}>
            <div className="wrap">
              <h2 style={{ fontFamily: "var(--font-serif), serif", fontWeight: 600, fontSize: 24, marginBottom: 24 }}>More from {g.clusterLabel}</h2>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }} data-shop-grid>
                {related.map((r) => (
                  <a key={r.slug} href={`/guides/${r.slug}/`} style={{ display: "block", background: "#fff", borderRadius: 6, padding: "20px 22px", border: "1px solid rgba(26,26,26,.08)" }}>
                    <h3 style={{ fontFamily: "var(--font-serif), serif", fontWeight: 600, fontSize: 16.5, lineHeight: 1.3, marginBottom: 8 }}>{r.title}</h3>
                    <span className="textlink">Read guide →</span>
                  </a>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      {g.schema && <div dangerouslySetInnerHTML={{ __html: g.schema }} />}
      <Footer />
    </>
  );
}
