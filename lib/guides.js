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
  "do-sweatbands-actually-work": "/images/wristy/trio.jpg",
  "wristbands-for-padel-and-tennis": "/images/wristy/movement.jpg",
  "how-to-stop-socks-giving-you-blisters": "/images/lifestyle-stairs.jpg",
  "why-do-ankle-socks-slip-off": "/images/ankle/hero-stairs.jpg",
  "what-socks-to-wear-to-the-gym": "/images/lifestyle-gym.jpg",
};

// Search Console tuning (Oct 2026): sharper titles and descriptions for guides that
// get impressions but few clicks. Keep titles under ~50 chars (" | PandaBare" is added).
const META_OVERRIDES = {
  "how-many-pairs-of-socks-do-you-need": {
    metaTitle: "How Many Pairs of Socks Do You Need? (Real Answer)",
    description: "Most adults need 7 to 10 everyday pairs, plus 2 or 3 for sport. A quick table by lifestyle, how long socks last and when to replace them.",
  },
  "bamboo-socks-australia-buyers-guide": {
    metaTitle: "Best Bamboo Socks Australia: 2026 Buyer's Guide",
    description: "Buying bamboo socks in Australia? What they're made of, fair prices per pair, fit, care and how the main brands compare. Read this before you buy.",
  },
  "bamboo-socks-sensitive-skin-eczema": {
    metaTitle: "Bamboo Socks for Eczema & Sensitive Skin (AU)",
    description: "Itchy, sensitive or eczema-prone feet? What to look for in a sock: smooth seams, soft fibre and simple blends, plus bamboo vs cotton vs wool.",
  },
  "pandabare-vs-the-big-brands": {
    metaTitle: "PandaBare vs Boody and the Big Bamboo Brands",
    description: "PandaBare vs Boody, Bamboozld and the big bamboo sock brands in Australia: range, price per pair, fit and who each one actually suits.",
  },
  "best-socks-for-flying": {
    metaTitle: "Compression Socks for Flying: Do You Need Them?",
    description: "Are compression or bamboo socks better for flying? What the DVT research says, who actually needs medical-grade compression, and what most travellers should wear.",
  },
  "best-socks-for-sweaty-feet": {
    metaTitle: "Best Socks for Sweaty Feet in Australia (2026)",
    description: "Sweaty feet? Fibre matters more than thickness. Bamboo vs cotton vs merino vs synthetic socks compared, plus the shoe and care habits that actually help.",
  },
  "are-bamboo-socks-better-than-cotton": {
    metaTitle: "Bamboo vs Cotton Socks: Which Is Better?",
    description: "Bamboo vs cotton socks compared side by side: softness, sweat, breathability, durability, price and care, with an honest verdict on which to buy.",
  },
  "bamboo-vs-merino-wool-socks": {
    metaTitle: "Bamboo vs Merino Wool Socks: Honest Comparison",
    description: "Bamboo vs merino wool socks for Australian conditions: warmth, sweat, itch, durability and price in one table, and who should pick which.",
  },
  "best-bed-socks-for-cold-feet": {
    metaTitle: "Best Bed Socks for Cold Feet (What Actually Works)",
    description: "Cold feet in bed? What makes a good bed sock (soft, breathable, a cuff that doesn't squeeze), bamboo vs wool vs fleece, and habits for warmer feet at night.",
  },
};

// "Quick answer" boxes shown at the top of high-demand guides. They answer the
// search question straight away and link into related guides and products.
const box = (inner) =>
  `<div class="quick-answer" style="background:#fff;border:1px solid rgba(26,26,26,.1);border-left:4px solid var(--sage);border-radius:6px;padding:22px 24px;margin:0 0 36px">` +
  `<p style="font-size:11.5px;font-weight:700;letter-spacing:.24em;text-transform:uppercase;color:var(--sage);margin:0 0 10px">Quick answer</p>${inner}</div>`;

const QUICK_ANSWERS = {
  "best-socks-for-flying": box(
    `<p><strong>Are bamboo compression socks good for flying?</strong> For most healthy people on a typical flight, you don't need compression at all. A soft, breathable sock that doesn't dig in at the cuff, plus getting up to walk, flexing your calves and drinking water, covers the basics.</p>` +
    `<p><strong>Who should wear compression?</strong> People with a higher risk of blood clots, for example a previous DVT, recent surgery, pregnancy or certain medical conditions, especially on flights of four hours or more. Properly fitted, graduated compression stockings are the tool there. Ask your GP or pharmacist which grade suits you.</p>` +
    `<p style="margin:0">PandaBare socks are comfort socks, not compression socks. For the full long-haul routine, see our <a href="/guides/long-haul-flight-comfort-kit/">long-haul flight comfort kit</a> and <a href="/guides/how-to-sleep-on-a-plane-economy/">how to sleep on a plane</a>.</p>`
  ),
  "best-socks-for-sweaty-feet": box(
    `<p>For sweaty feet, pick a <strong>breathable, moisture-wicking fibre</strong> in a snug fit, not a thicker sock. Change socks once during long or hot days, and rotate your shoes so they dry out.</p>` +
    `<table><thead><tr><th>Fibre</th><th>Sweat</th><th>Best for</th></tr></thead><tbody>` +
    `<tr><td>Bamboo</td><td>Absorbs and wicks, soft and breathable</td><td>Everyday wear, warm weather, sensitive skin</td></tr>` +
    `<tr><td>Merino</td><td>Handles moisture well, warmer</td><td>Cold weather, hiking</td></tr>` +
    `<tr><td>Synthetic blends</td><td>Wicks and dries fast</td><td>Running and hard training</td></tr>` +
    `<tr><td>Plain cotton</td><td>Absorbs but stays damp</td><td>Short, low-sweat days</td></tr>` +
    `</tbody></table>` +
    `<p style="margin:0">Related: <a href="/guides/why-your-feet-smell/">why your feet smell</a>, <a href="/guides/how-to-stop-socks-giving-you-blisters/">stopping blisters</a> and <a href="/guides/what-socks-to-wear-to-the-gym/">gym socks</a>.</p>`
  ),
  "are-bamboo-socks-better-than-cotton": box(
    `<p>For most everyday wear, <strong>bamboo socks feel softer and handle sweat better than plain cotton</strong>. Cotton is cheaper and tough, but it holds moisture and stays damp. Bamboo needs gentler washing to last.</p>` +
    `<table><thead><tr><th></th><th>Bamboo</th><th>Cotton</th></tr></thead><tbody>` +
    `<tr><td>Feel</td><td>Smooth, silky</td><td>Soft, can feel rougher over time</td></tr>` +
    `<tr><td>Sweat</td><td>Absorbs and wicks</td><td>Absorbs, slow to dry</td></tr>` +
    `<tr><td>Breathability</td><td>Feels cool and airy</td><td>Good</td></tr>` +
    `<tr><td>Durability</td><td>Good with gentle care</td><td>Very tough</td></tr>` +
    `<tr><td>Price</td><td>Usually a bit more</td><td>Usually cheaper</td></tr>` +
    `<tr><td>Care</td><td>Cold wash, line dry</td><td>Easy, any wash</td></tr>` +
    `</tbody></table>` +
    `<p style="margin:0">Weighing up wool too? Read <a href="/guides/bamboo-vs-merino-wool-socks/">bamboo vs merino</a>. Care tips: <a href="/guides/how-to-wash-bamboo-socks/">how to wash bamboo socks</a>.</p>`
  ),
  "bamboo-vs-merino-wool-socks": box(
    `<p><strong>Merino</strong> is the pick for real cold, hiking and long days in boots. <strong>Bamboo</strong> suits everyday wear, warmer Australian weather and anyone who finds wool itchy. Plenty of people own both.</p>` +
    `<table><thead><tr><th></th><th>Bamboo</th><th>Merino</th></tr></thead><tbody>` +
    `<tr><td>Warmth</td><td>Light, comfortable most of the year</td><td>Warmer, best in cold</td></tr>` +
    `<tr><td>Feel</td><td>Very smooth, no itch</td><td>Soft, some people still find it itchy</td></tr>` +
    `<tr><td>Sweat</td><td>Absorbs and wicks</td><td>Handles moisture well</td></tr>` +
    `<tr><td>Price</td><td>Usually less per pair</td><td>Usually more per pair</td></tr>` +
    `<tr><td>Care</td><td>Cold wash, line dry</td><td>Cool wash, no heat</td></tr>` +
    `</tbody></table>` +
    `<p style="margin:0">See also <a href="/guides/are-bamboo-socks-better-than-cotton/">bamboo vs cotton</a> and <a href="/guides/work-socks-for-all-day-comfort/">work socks for all-day comfort</a>.</p>`
  ),
  "best-bed-socks-for-cold-feet": box(
    `<p>The best bed socks are <strong>soft, breathable and loose at the cuff</strong>, so they warm your feet without squeezing your ankles or making you sweat. A crew length covers more skin; a breathable fibre like bamboo stops feet getting clammy halfway through the night. Skip tight compression socks in bed unless a doctor has told you to wear them.</p>` +
    `<p style="margin:0">Why feet get cold in the first place: <a href="/guides/why-your-feet-are-cold-in-bed/">why your feet are cold in bed</a>. For better sleep overall: <a href="/guides/15-minute-wind-down-routine/">a 15-minute wind-down routine</a>.</p>`
  ),
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
  G: "Sport & training",
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
        if (s) sub[s[1]] = unquote(s[2]);
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
      // block key we don't need (e.g. body_images), skip its indented children
      let j = i + 1;
      for (; j < lines.length; j++) {
        if (lines[j].trim() === "" || /^\s/.test(lines[j])) continue;
        else break;
      }
      i = j - 1;
      continue;
    }

    data[key] = unquote(inline);
  }
  // the page template renders the title, so drop a leading H1 from the body
  return { data, content: content.replace(/^\s*#\s[^\n]*\n/, "") };
}

function unquote(v) {
  const t = String(v).trim();
  const m = t.match(/^(["'])([\s\S]*)\1$/);
  return m ? m[2].replace(/\\"/g, '"').trim() : t;
}

// The page template appends " | PandaBare", so strip it if an article already has it.
function cleanMetaTitle(t) {
  return String(t || "").replace(/\s*[|\-]\s*PandaBare\s*$/i, "").trim();
}

// Article links were written against an older site map. Point them at the real
// pages, drop links to products we don't sell, and drop links to rival retailers.
const LINK_MAP = {
  "/products/bamboo-crew-socks": "/products/crew-sock/",
  "/products/bamboo-ankle-socks": "/products/ankle-hugger/",
  "/products/sport-wristbands": "/products/wristy/",
  "/corporate-gifting": "/corporate/",
};
const UNWRAP_PATHS = ["/products/sleep-mask", "/products/travel-pouch", "/comfort-kit"];
const UNWRAP_DOMAINS = [
  "boody.com.au", "bambubatu.com", "themossriver.com", "amazon.com.au", "amazon.com",
  "undershirts.co.uk", "yardblox.com", "waggaworkwear.com.au", "soxsols.com",
];

function fixLinks(html) {
  return html.replace(/<a href="([^"]*)"([^>]*)>([\s\S]*?)<\/a>/g, (whole, href, rest, text) => {
    const clean = href.split("#")[0].split("?")[0].replace(/\/$/, "");
    if (LINK_MAP[clean]) return `<a href="${LINK_MAP[clean]}"${rest}>${text}</a>`;
    if (UNWRAP_PATHS.some((p) => clean === p || clean.startsWith(p + "/"))) return text;
    if (/^https?:\/\//i.test(href)) {
      let host = "";
      try { host = new URL(href).hostname.replace(/^www\./, ""); } catch (e) {}
      if (host.includes("pandabare")) return whole;
      if (UNWRAP_DOMAINS.some((d) => host === d || host.endsWith("." + d))) return text;
      return `<a href="${href}"${rest} target="_blank" rel="noopener noreferrer">${text}</a>`;
    }
    // internal guide links: always use the trailing-slash canonical form
    if (/^\/guides\/[a-z0-9-]+$/.test(clean)) return `<a href="${clean}/"${rest}>${text}</a>`;
    return whole;
  });
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

export function cleanGuideBody(content) {
  return content.replace(/\[GENERATION PROMPT[^\]]*\]/gi, "")
    .replace(/^[ \t]*\*{0,2}GENERATION PROMPT[^\n]*(?:\r?\n|$)/gim, "");
}

export function getGuide(slug) {
  let raw;
  try { raw = fs.readFileSync(path.join(DIR, `${slug}.md`), "utf8"); } catch (e) { return null; }
  if (!raw || !raw.trim()) return null;
  const { data, content } = parseFrontmatter(raw);
  if (!data || !data.title) return null;
  const o = META_OVERRIDES[slug] || {};
  return {
    slug,
    title: data.title,
    metaTitle: cleanMetaTitle(o.metaTitle || data.meta_title || data.title),
    description: o.description || data.meta_description || "",
    cluster: clusterKey(data.cluster),
    clusterLabel: CLUSTER_LABELS[clusterKey(data.cluster)] || "Guides",
    hero: heroForSlug(slug, data),
    schema: data.schema || "",
    html: (QUICK_ANSWERS[slug] || "") + fixLinks(marked.parse(cleanGuideBody(content || ""))),
  };
}

export function getAllGuides() {
  return getSlugs().map(getGuide).filter(Boolean).sort((a, b) => a.title.localeCompare(b.title));
}

export function getGuidesByCluster() {
  const order = ["A", "B", "G", "C", "D", "E", "F", "Z"];
  const all = getAllGuides();
  const groups = {};
  for (const g of all) (groups[g.cluster] = groups[g.cluster] || []).push(g);
  return order.filter((k) => groups[k]).map((k) => ({ key: k, label: CLUSTER_LABELS[k] || "More guides", items: groups[k] }));
}
