"use client";
import Script from "next/script";

// Pass the GA4 Measurement ID (looks like G-XXXXXXXXXX), NOT the numeric Property ID.
export default function GoogleAnalytics({ gaId }) {
  if (!gaId || !/^G-[A-Z0-9]+$/.test(gaId)) return null;
  return (
    <>
      <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} />
      <Script id="ga4-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${gaId}');`}
      </Script>
    </>
  );
}
