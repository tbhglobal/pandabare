import "./globals.css";
import { CartProvider } from "@/lib/cart";
import CartDrawer from "@/components/CartDrawer";
import GoogleAnalytics from "@/components/GoogleAnalytics";

// GA4 Measurement ID (Admin -> Data streams -> Web). Property ID 371491852 is NOT this.
const GA_MEASUREMENT_ID = "G-D7DQQG3TQL";

export const metadata = {
  title: "PandaBare — Soft essentials for slower living",
  description: "The PandaBare Comfort Kit brings together bamboo socks, a soft sleep mask and travel-ready essentials for everyday comfort, rest and gifting.",
  icons: { icon: "/images/logo-icon.png" },
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
