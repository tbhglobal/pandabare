import "./globals.css";
import { CartProvider } from "@/lib/cart";
import CartDrawer from "@/components/CartDrawer";
import GoogleAnalytics from "@/components/GoogleAnalytics";

// GA4 Measurement ID (Admin -> Data streams -> Web). Property ID 371491852 is NOT this.
const GA_MEASUREMENT_ID = "G-D7DQQG3TQL";

export const metadata = {
  metadataBase: new URL("https://pandabare.me"),
  title: "PandaBare | Bamboo Socks & Wristbands, Made for Comfort",
  description: "Soft, breathable bamboo ankle socks, crew socks and wristbands. Free shipping on Australian orders over $50 and a 30-day comfort guarantee.",
  icons: { icon: "/images/logo-icon.png" },
  openGraph: {
    title: "PandaBare | Bamboo Socks & Wristbands",
    description: "Soft, breathable bamboo socks and wristbands. Free shipping over $50.",
    url: "https://pandabare.me",
    siteName: "PandaBare",
    locale: "en_AU",
    type: "website",
    images: ["/images/hero-couple-bed.jpg"],
  },
  twitter: { card: "summary_large_image", images: ["/images/hero-couple-bed.jpg"] },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,700;1,9..40,400&family=Lora:ital,wght@0,400;0,500;0,600;1,400;1,500&display=swap" rel="stylesheet" />
      </head>
      <body><CartProvider>{children}<CartDrawer /></CartProvider><GoogleAnalytics gaId={GA_MEASUREMENT_ID} /></body>
    </html>
  );
}
