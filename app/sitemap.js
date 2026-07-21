import { getSlugs } from "@/lib/guides";

// Canonical site URL. Change to https://pandabare.vercel.app if submitting before the domain is pointed.
const BASE = "https://pandabare.me";

const staticRoutes = [
  "",
  "socks",
  "products/ankle-hugger",
  "products/crew-sock",
  "products/wristy",
  "products/sock-bundle",
  "about",
  "guides",
];

export default function sitemap() {
  const now = new Date();
  const routes = staticRoutes.map((p) => ({
    url: `${BASE}/${p ? p + "/" : ""}`,
    lastModified: now,
    changeFrequency: p === "" ? "weekly" : "monthly",
    priority: p === "" ? 1 : 0.8,
  }));
  const guides = getSlugs().map((slug) => ({
    url: `${BASE}/guides/${slug}/`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));
  return [...routes, ...guides];
}
