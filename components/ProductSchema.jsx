export default function ProductSchema({ name, description, price, image, path }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    image: `https://pandabare.me${image}`,
    brand: { "@type": "Brand", name: "PandaBare" },
    offers: {
      "@type": "Offer",
      price,
      priceCurrency: "AUD",
      url: `https://pandabare.me${path}`,
    },
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
