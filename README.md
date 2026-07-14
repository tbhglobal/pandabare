# PandaBare — Next.js site

Homepage relaunch build. Next.js App Router + Framer Motion, palette and type from the v2.0 brand style guide.

## Run locally
1. npm install
2. npm run dev
3. Open http://localhost:3000

## Deploy
Push this folder to a GitHub repo and import it in Vercel (same pipeline as the CarTell sites). No env vars needed.

## Structure
- app/page.jsx — homepage assembling all sections
- components/ — one file per section (Hero, KitBreakdown, Moments, Material, Shop, Gifting, Reviews, Footer)
- public/images/ — earthy-graded brand photos and logos

## Notes
- Sleep mask and travel pouch use placeholder illustrations until product photos are shot. Swap in KitBreakdown.jsx, Moments.jsx and Shop.jsx.
- Prices are placeholders, edit in components/Shop.jsx.
- Reviews rotate automatically, edit quotes in components/Reviews.jsx.
