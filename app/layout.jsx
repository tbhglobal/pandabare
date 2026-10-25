import "./globals.css";
import { pageMetadata, SITE, jsonLd } from "@/lib/seo.mjs";
import { CartProvider } from "@/lib/cart";
import CartDrawer from "@/components/CartDrawer";
import GoogleAnalytics from "@/components/GoogleAnalytics";

// GA4 Measurement ID (Admin -> Data streams -> Web). Property ID 371491852 is NOT this.
const GA_MEASUREMENT_ID = "G-D7DQQG3TQL";

export const metadata = {
  ...pageMetadata({title:"Bamboo Socks & Wristbands Australia | PandaBare",description:"Shop PandaBare ankle socks, crew socks and Wristy wristbands. Choose your colour and fit. A$10 Australian delivery, free on orders of A$50 or more."}),
  alternates: undefined,
  metadataBase: new URL(SITE),
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
      <body><script type="application/ld+json" dangerouslySetInnerHTML={{__html:jsonLd({'@context':'https://schema.org','@graph':[{'@type':'Organization','@id':SITE+'/#organization',name:'PandaBare',url:SITE+'/',logo:SITE+'/images/logo-horizontal.png'},{'@type':'WebSite','@id':SITE+'/#website',name:'PandaBare',url:SITE+'/',publisher:{'@id':SITE+'/#organization'}}]})}}/><CartProvider>{children}<CartDrawer /></CartProvider><GoogleAnalytics gaId={GA_MEASUREMENT_ID} /></body>
    </html>
  );
}
