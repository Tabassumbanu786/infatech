import { Fira_Sans, Poppins } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "slick-carousel/slick/slick.css";
import "./assets/main.css";
import './assets/responsive.css';

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

export const metadata = {
  title: {
    absolute: '',
    default: 'Infatech Innovations | Innovating the Future, Intelligently',
    template: '%s | Infatech Innovations',
  },
  description: 'We help startups and businesses turn ideas into scalable digital products—custom websites, apps, platforms, and more.',
  openGraph: {
    title: 'Infatech Innovations',
    description: 'Turn your idea into a digital product with Infatech. We build apps, portals, and platforms that scale.',
    url: 'https://www.infatech.in',
    siteName: 'Infatech Innovations',
    images: [
      {
        url: 'https://www.infatech.in/assets/images/og-image.jpg', // ✅ Replace with real OG image path
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
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
     <head>
  <meta name="author" content="Themeservices" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta charSet="UTF-8" />

  {/* Favicon */}
  
  <link rel="icon" href="/assets/images/favicon.ico" sizes="any" />
  <link rel="apple-touch-icon" href="/assets/images/favicon.ico" />
  <link rel="shortcut icon" href="/assets/images/favicon.ico" />
  {/* Schema.org JSON-LD */}
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Infatech Innovations",
        "url": "https://www.infatech.in",
        "logo": "https://www.infatech.in/assets/images/logo.png",
        "sameAs": [
          "https://www.linkedin.com/company/infatechinnovations"
        ],
        "description":
          "Infatech Innovations offers AI-driven automation, web development, and digital solutions for growing businesses.",
      }),
    }}
  />
</head>


      <body className={`${fira_sans.variable} ${poppins.variable}`}>
        {children}
      </body>
    </html>
  );
}
