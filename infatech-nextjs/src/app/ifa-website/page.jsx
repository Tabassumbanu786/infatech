import React from 'react';
import Link from 'next/link';

const LandingPage = () => {
  return (
    <main className="ifa-landing-page">
      {/* Offer Section */}
      <section className="py-5 bg-light text-center">
        <div className="container">
          <h1 className="display-5 fw-bold mb-4">Your Own Professional Advisor Website — Live in Just 7 Days</h1>
          <p className="lead">We handle everything for Indian IFAs: domain, hosting, design, stock ticker, calculators, WhatsApp chat, and more — all done for you at a transparent price.</p>
        </div>
      </section>

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
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="mb-4">Frequently Asked Questions</h2>
          <div className="mb-3">
            <strong>Is the domain cost included?</strong>
            <p>Yes. We purchase and manage your domain for you — it&apos;s included in your annual fee.</p>
          </div>
          <div className="mb-3">
            <strong>Do I have to do anything technical?</strong>
            <p>No. Just choose a design, send your info, and we handle the rest.</p>
          </div>
          <div className="mb-3">
            <strong>How long will it take?</strong>
            <p>Your site will go live in 7 days from receiving your details.</p>
          </div>
          <div className="mb-3">
            <strong>Will my site show up on Google?</strong>
            <p>Yes — we set up basic SEO so your site is searchable.</p>
          </div>
          <div className="mb-3">
            <strong>What does the annual renewal cover?</strong>
            <p>Domain, hosting, SSL certificate, security checks and up to two minor content edits per year.</p>
          </div>
        </div>
      </section>

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
