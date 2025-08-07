// src/app/industries/bakers/page.js

import BakersPageContent from "../../components/industries/bakers/BakersPage";
import Head from 'next/head';


export const metadata = {
  title: 'Bakery Website Design',
  description: 'Professional websites for bakeries delivered in 10 days.',
}


export default function BakersPage() {
 
  return (
    <>
    <Head>
    <title>Bakery Website Design | Infatech Innovations</title>
    <meta name="description" content="Professional websites for bakeries delivered in 10 days." />
    
    {/* OG Tags */}
    <meta property="og:title" content="Bakery Website Design | Infatech Innovations" />
    <meta property="og:description" content="Get a beautiful, mobile-friendly bakery website in just 10 days. Starting at ₹10,000." />
    <meta property="og:url" content="https://www.infatech.in/industries/bakers" />
    <meta property="og:image" content="https://www.infatech.in/assets/images/og-image.jpg" />
    <meta property="og:type" content="website" />

    {/* Twitter Tags */}
    <meta name="twitter:title" content="Bakery Website Design | Infatech Innovations" />
    <meta name="twitter:description" content="Get a beautiful, mobile-friendly bakery website in just 10 days. Starting at ₹10,000." />
    <meta name="twitter:image" content="https://www.infatech.in/assets/images/og-image.jpg" />
    <meta name="twitter:card" content="summary_large_image" />
  </Head>

      <BakersPageContent/> 
      </>
  );
}
