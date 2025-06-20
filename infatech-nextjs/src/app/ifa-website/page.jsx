import React from 'react';
import Link from 'next/link';
import Hero2 from '../Components/Banner/Hero2';
import PricingCard from '../Components/Pricing/PricingCard';
import Contact1 from '../Components/Contact/Contact1';
import IfaFeatures from '../Components/Ifa/IfaFeatures';
import FaqIfa from '../Components/Ifa/FaqIfa';

const features = [
  { icon: '/assets/images/service1.png', title: 'Domain & Hosting', desc: 'We register your domain and handle secure hosting.' },
  { icon: '/assets/images/service2.png', title: 'Modern Templates', desc: 'Choose from 5 clean, mobile-friendly designs.' },
  { icon: '/assets/images/service3.png', title: 'Resources Tools', desc: 'Live stock ticker, news feed and handy calculators.' },
  { icon: '/assets/images/service4.png', title: 'Easy Contact', desc: 'WhatsApp chat and simple enquiry form built-in.' },
];

const faqs = [
  { q: 'Is the domain cost included?', a: 'Yes. We purchase and manage your domain for you.' },
  { q: 'Do I need technical skills?', a: 'No. Our team sets everything up for you.' },
  { q: 'How long does it take?', a: 'Your site will be live within 7 days of receiving your info.' },
  { q: 'What does renewal cover?', a: 'Domain, hosting, SSL, security checks and minor text edits.' },
];

const Page = () => {
  return (
    <div className='ifa-landing-page'>
      <Hero2
        bgImg='/assets/images/hero-bg.png'
        SubTitle='IFA WEBSITE STARTER PACK'
        Title='Launch Your Advisor Website in <br> 7 Days'
        Content='Domain, hosting, design and live market tools – all managed for you.'
        BtnText='Chat on WhatsApp'
        BtnLink='https://wa.me/'
        mainImage='/assets/images/hero-thumb.png'
      />

      <IfaFeatures features={features} />

      <section className='pricing-area'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-md-6 col-lg-4'>
              <PricingCard
                Price='₹7,000'
                PricePlan='One-Time Setup'
                BtnUrl='https://wa.me/'
                BtnText='Get Started'
                FeatureList={[
                  'Custom Domain & Hosting',
                  '5 Page Website',
                  'Live Stock Tools',
                  'WhatsApp Integration',
                  'Go Live in 7 Days',
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      <FaqIfa faqs={faqs} />

      <section className='text-center py-5'>
        <Link href='https://wa.me/' className='btn btn-primary btn-lg'>Chat with Us on WhatsApp</Link>
      </section>

      <Contact1 />
    </div>
  );
};

export default Page;
