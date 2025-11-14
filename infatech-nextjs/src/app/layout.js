// src/app/layout.js  (server component — NO 'use client' at top)
import { Fira_Sans, Poppins } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "slick-carousel/slick/slick.css";
import "./assets/main.css";
import "./assets/responsive.css";
import Script from "next/script";

import Analytics from "./components/Analytics"; // client component

// Google Fonts
const fira_sans = Fira_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--body-color-font',
});
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--heading-font',
});

// ✅ Metadata API (keep your existing metadata)
export const metadata = {
  title: {
    default: 'Infatech Innovations | Innovating the Future, Intelligently',
    template: '%s | Infatech Innovations',
  },
  description:
    'We help startups and businesses turn ideas into scalable digital products—custom websites, apps, platforms, and more.',
  openGraph: {
    title: 'Infatech Innovations',
    description:
      'Turn your idea into a digital product with Infatech. We build apps, portals, and platforms that scale.',
    url: 'https://www.infatech.in',
    siteName: 'Infatech Innovations',
    images: [
      {
        url: 'https://www.infatech.in/assets/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Infatech - Digital Product Development',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Infatech Innovations',
    description: 'Turn your idea into a digital product with Infatech.',
    images: ['https://www.infatech.in/assets/images/og-image.jpg'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon' },
      { url: '/favicon-light.ico', media: '(prefers-color-scheme: light)' },
      { url: '/favicon-dark.ico', media: '(prefers-color-scheme: dark)' },
    ],
    apple: '/favicon.ico',
    shortcut: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  return (
    <html lang="en">
      <head>
        {/* Load gtag only if measurement id is present */}
        {GA_MEASUREMENT_ID && (
          <>
            {/* gtag library */}
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />

            {/* gtag init */}
            <Script id="gtag-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_MEASUREMENT_ID}', { page_path: window.location.pathname });
              `}
            </Script>
          </>
        )}
      </head>

      <body className={`${fira_sans.variable} ${poppins.variable}`}>
        {children}

        {/* Client-only component for route tracking */}
        <Analytics />

        {/* JSON-LD Structured Data */}
        <Script
          id="structured-data"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Infatech Innovations",
              url: "https://www.infatech.in",
              logo: "https://www.infatech.in/assets/images/logo.png",
              sameAs: [
                "https://www.linkedin.com/company/infatechinnovations",
              ],
              description:
                "Infatech Innovations offers AI-driven automation, web development, and digital solutions for growing businesses.",
            }),
          }}
        />

        {/* Calendly Widget Script */}
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
