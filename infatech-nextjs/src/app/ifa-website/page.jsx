'use client'
import React from 'react';
import IFAfaq from '../Components/Faq/IFAfaq';
import Slider from "react-slick";
import parse from 'html-react-parser';
import Link from "next/link";
import Image from "next/image";
import data from '@/app/Data/hero.json';

// Optional: if not globally imported, import these styles here
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const LandingPage = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };

  return (
    <main className="ifa-landing-page">
      {/* Offer Section */}
      <section className="py-5 bg-light text-center">
        <div className="container">
          <h1 className="display-5 fw-bold mb-4">Your Own Professional Advisor Website — Live in Just 7 Days</h1>
          <p className="lead">We handle everything for Indian IFAs: domain, hosting, design, stock ticker, calculators, WhatsApp chat, and more — all done for you at a transparent price.</p>
        </div>
      </section>

      {/* Hero Slider Section */}
      <div className="hero-active owl-carousel">
        <Slider {...settings}>
          {data.map((item, i) => (
            <div key={i} className="hero-area style-three d-flex align-items-center">
              <div className="container">
                <div className="row hero align-items-center">
                  <div className="col-lg-5 col-md-7">
                    <div className="hero-contant">
                      <h6>{item.subTitle}</h6>
                      <h1>Your Own Professional Advisor Website — Live in Just 7 Days</h1>
                      <p>We handle everything for Indian IFAs: domain, hosting, design, stock ticker, calculators, WhatsApp chat, and more — all done for you at a transparent price.</p>
                      <div className="solutek-btn">
                        <Link href="/about" className="btn-2">Start Building with Infatech</Link>
                      </div>
                      <div className="hero-left-shape">
                        <Image src="/assets/images/home-3/hero-geo.png" alt="img" width={680} height={680} />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-7 col-md-5">
                    <div className="hero-thumb-3">
                      <div className="hero-img hero_image_3">
                        <Image src={item.image} alt="img" width={1065} height={800}
                          style={{
                            width: '100%',
                            height: 'auto',
                            objectFit: 'contain'
                          }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* What's Included */}
      <section className="py-5">
        <div className="container">
          <h2 className="mb-4">What&apos;s Included</h2>
          <ul className="list-unstyled">
            <li className="mb-2">✔️ Custom Domain &amp; Hosting — no extra billing.</li>
            <li className="mb-2">✔️ 5 Professional Designs to choose from.</li>
            <li className="mb-2">✔️ 5 Must-Have Pages: Home, About, Services, Resources, Contact.</li>
            <li className="mb-2">✔️ Resources page with live stock ticker, finance news, SIP/EMI calculators and downloads.</li>
            <li className="mb-2">✔️ WhatsApp &amp; Email Integration.</li>
            <li className="mb-2">✔️ Free SSL Security Certificate.</li>
            <li className="mb-2">✔️ Basic SEO Setup.</li>
            <li className="mb-2">✔️ Fully Managed Setup &amp; Maintenance.</li>
          </ul>
        </div>
      </section>

      {/* FAQ Section */}
      <IFAfaq />

      {/* Pricing & CTA */}
      <section className="py-5 text-center">
        <div className="container">
          <h2 className="mb-3">One Simple Price, No Surprises</h2>
          <p className="fs-4 mb-2">One-Time Setup Fee: ₹7,000</p>
          <p className="fs-5 mb-4">Annual Renewal: ₹1,500/year</p>
          <Link href="https://wa.me/" className="btn btn-primary btn-lg">Chat with Us on WhatsApp</Link>
        </div>
      </section>
    </main>
  );
};

export default LandingPage;
