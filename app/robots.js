const BASE = "https://pandabare.me";

export default function robots() {
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/checkout/", "/api/"] },
    sitemap: `${BASE}/sitemap.xml`,
  };
}
