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
  return { title: `${g.metaTitle} | PandaBare`, description: g.description };
}

export default function GuidePage({ params }) {
  const g = getGuide(params.slug);
  if (!g) return notFound();
  const related = getAllGuides().filter((x) => x.cluster === g.cluster && x.slug !== g.slug).slice(0, 3);

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
