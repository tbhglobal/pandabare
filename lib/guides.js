import fs from "fs";
import path from "path";
import { marked } from "marked";

const DIR = path.join(process.cwd(), "content/guides");
const IMG_DIR = path.join(process.cwd(), "public/images/guides");
const PUBLIC = path.join(process.cwd(), "public");

marked.setOptions({ gfm: true, breaks: false });

// One hand-picked image per guide, so cards don't repeat and stay on-topic.
const SLUG_IMAGE = {
  "are-bamboo-socks-better-than-cotton": "/images/guides/bamboo-fence.jpg",
  "how-bamboo-fabric-is-made": "/images/guides/bamboo-green.jpg",
  "bamboo-vs-merino-wool-socks": "/images/bamboo-texture.jpg",
  "is-bamboo-fabric-sustainable": "/images/guides/panda-eating.jpg",
  "why-bamboo-feels-cooler-warmer": "/images/hero-bamboo.jpg",
  "how-to-wash-bamboo-socks": "/images/guides/socks-in-bamboo.jpg",
  "best-socks-for-sweaty-feet": "/images/hero-crew.jpg",
  "bamboo-socks-sensitive-skin-eczema": "/images/guides/ankle-white.jpg",
  "crew-vs-ankle-socks": "/images/products/card-crew.jpg",
  "why-your-feet-smell": "/images/banner-ankle-red.jpg",
  "best-bed-socks-for-cold-feet": "/images/hero-couple-bed.jpg",
  "bamboo-socks-for-diabetics": "/images/products/card-ankle.jpg",
  "how-many-pairs-of-socks-do-you-need": "/images/products/bundle.jpg",
  "work-socks-for-all-day-comfort": "/images/guides/djs-9270.jpg",
  "how-to-sleep-better-in-australian-summer": "/images/banner-couch.jpg",
  "do-sleep-masks-actually-improve-sleep": "/images/kit-flatlay.jpg",
  "15-minute-wind-down-routine": "/images/hero-couple.jpg",
  "why-your-feet-are-cold-in-bed": "/images/guides/crew-black.jpg",
  "what-to-look-for-in-a-sleep-mask": "/images/flatlay-2.jpg",
  "long-haul-flight-comfort-kit": "/images/onthego.jpg",
  "how-to-sleep-on-a-plane-economy": "/images/products/ankle-black.jpg",
  "best-socks-for-flying": "/images/products/ankle-red.jpg",
  "carry-on-essentials-australian-travellers-2026": "/images/guides/hero-socks-wristband.jpg",
  "gifts-for-people-who-have-everything": "/images/gift-trio.jpg",
  "thoughtful-gifts-under-50": "/images/products/wristy-red.jpg",
  "new-parent-gifts-theyll-actually-use": "/images/guides/couple-socks.jpg",
  "corporate-gifts-clients-keep": "/images/products/card-wristy.jpg",
  "christmas-stocking-fillers-not-landfill": "/images/products/crew-red.jpg",
  "bamboo-socks-australia-buyers-guide": "/images/guides/socks-and-wristbands.jpg",
  "pandabare-vs-the-big-brands": "/images/guides/variety-wristy.jpg",
};

function fileExists(webPath) {
  try {
    const p = path.join(PUBLIC, webPath.replace(/^\//, ""));
    return fs.existsSync(p) && fs.statSync(p).size > 0;
  } catch (e) { return false; }
}

function heroForSlug(slug, data) {
  const m = SLUG_IMAGE[slug];
  if (m && fileExists(m)) return { src: m, alt: data.title || "" };
  return heroFor(data);
}

const CLUSTER_LABELS = {
  A: "Bamboo & material",
  B: "Socks & feet",
  C: "Sleep",
  D: "Travel",
  E: "Gifting",
  F: "Brand & comparison",
};

// Tolerant front-matter parser. The article files use loose YAML (unquoted
// colons, apostrophes) that strict YAML parsers reject, so we extract only the
// fields we need with line logic and treat everything after the closing --- as body.
function parseFrontmatter(raw) {
  const m = raw.match(/^﻿?---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!m) return { data: {}, content: raw };
  const lines = m[1].split(/\r?\n/);
  const content = m[2];
  const data = {};
  const val = (line) => line.slice(line.indexOf(":") + 1).trim();

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const top = line.match(/^([A-Za-z_][A-Za-z0-9_]*):(.*)$/);
    if (!top) continue;
    const key = top[1];
    const inline = top[2].trim();

    if (key === "hero_image" && inline === "") {
      const sub = {};
      let j = i + 1;
      for (; j < lines.length; j++) {
        const s = lines[j].match(/^\s+([A-Za-z_]+):(.*)$/);
        if (s) sub[s[1]] = s[2].trim();
        else if (lines[j].trim() === "") continue;
        else break;
      }
      data.hero_image = sub;
      i = j - 1;
      continue;
    }

    if (key === "schema" && (inline === "|" || inline === "|-" || inline === ">")) {
      const block = [];
      let j = i + 1;
      for (; j < lines.length; j++) {
        if (lines[j].trim() === "" || /^\s/.test(lines[j])) block.push(lines[j].replace(/^ {2}/, ""));
        else break;
      }
      data.schema = block.join("\n").trim();
      i = j - 1;
      continue;
    }

    if (inline === "") {
      // block key we don't need (e.g. body_images) — skip its indented children
      let j = i + 1;
      for (; j < lines.length; j++) {
        if (lines[j].trim() === "" || /^\s/.test(lines[j])) continue;
        else break;
      }
      i = j - 1;
      continue;
    }

    data[key] = inline;
  }
  return { data, content };
}

function clusterKey(raw) {
  if (!raw) return "Z";
  const m = String(raw).trim().match(/^([A-Z])/);
  return m ? m[1] : "Z";
}

function heroFor(data) {
  const f = data?.hero_image?.filename;
  if (!f) return null;
  const base = path.basename(f);
  try {
    const p = path.join(IMG_DIR, base);
    if (fs.existsSync(p) && fs.statSync(p).size > 0) {
      return { src: `/images/guides/${base}`, alt: data.hero_image.alt || data.title || "" };
    }
  } catch (e) {}
  return null;
}

export function getSlugs() {
  let files = [];
  try { files = fs.readdirSync(DIR); } catch (e) { return []; }
  return files.filter((f) => f.endsWith(".md") && f !== "00-INDEX.md").map((f) => f.replace(/\.md$/, ""));
}

export function getGuide(slug) {
  let raw;
  try { raw = fs.readFileSync(path.join(DIR, `${slug}.md`), "utf8"); } catch (e) { return null; }
  if (!raw || !raw.trim()) return null;
  const { data, content } = parseFrontmatter(raw);
  if (!data || !data.title) return null;
  return {
    slug,
    title: data.title,
    metaTitle: data.meta_title || data.title,
    description: data.meta_description || "",
    cluster: clusterKey(data.cluster),
    clusterLabel: CLUSTER_LABELS[clusterKey(data.cluster)] || "Guides",
    hero: heroForSlug(slug, data),
    schema: data.schema || "",
    html: marked.parse(content || ""),
  };
}

export function getAllGuides() {
  return getSlugs().map(getGuide).filter(Boolean).sort((a, b) => a.title.localeCompare(b.title));
}

export function getGuidesByCluster() {
  const order = ["A", "B", "C", "D", "E", "F", "Z"];
  const all = getAllGuides();
  const groups = {};
  for (const g of all) (groups[g.cluster] = groups[g.cluster] || []).push(g);
  return order.filter((k) => groups[k]).map((k) => ({ key: k, label: CLUSTER_LABELS[k] || "More guides", items: groups[k] }));
}
