'use client';
import React from 'react';

const EverythingYouNeed = () => {
  const features = [
    {
      title: 'Domain & Hosting',
      description: 'We purchase and manage your domain name and provide secure hosting — all included, no separate bill.',
      icon: 'bi bi-globe',
      iconBg: 'bg-info',
      gradient: 'linear-gradient(to bottom right, #e0f2f1, #ccfbf1)',
      border: 'border border-info-subtle',
      tag: 'Fully Managed',
      tagColor: 'text-info',
    },
    {
      title: '5 Modern Templates',
      description: 'Handpicked, mobile-friendly layouts designed specifically for IFAs. Clean, simple, and professional.',
      icon: 'bi bi-phone',
      iconBg: 'bg-danger',
      gradient: 'linear-gradient(to bottom right, #ffe4e6, #fce7f3)',
      border: 'border border-red-100',
      tag: 'Mobile Optimized',
      tagColor: 'text-danger',
    },
    {
      title: 'Custom Branding',
      description: 'Your logo, colors, and photo integrated for a personalised look that builds trust with clients.',
      icon: 'bi bi-bullseye',
      iconBg: 'bg-success',
      gradient: 'linear-gradient(to bottom right, #ecfdf5, #d1fae5)',
      border: 'border border-success-subtle',
      tag: 'Fully Personalized',
      tagColor: 'text-success',
    },
    {
      title: 'Basic SEO',
      description: 'We set up proper page titles & descriptions to help Google index your site and attract clients.',
      icon: 'bi bi-graph-up-arrow',
      iconBg: 'bg-warning',
      gradient: 'linear-gradient(to bottom right, #fff7ed, #ffedd5)',
      border: 'border border-yellow-100',
      tag: 'Google Ready',
      tagColor: 'text-warning',
    },
    {
      title: 'Security',
      description: 'Free SSL certificate for safe browsing and regular security updates to protect your site.',
      icon: 'bi bi-shield-lock-fill',
      iconBg: 'bg-info',
      gradient: 'linear-gradient(to bottom right, #e0f2f1, #ccfbf1)',
      border: 'border border-info-subtle',
      tag: 'SSL Secured',
      tagColor: 'text-info',
    },
    {
      title: 'Zero Hassle',
      description: 'No technical work needed from your side — just provide your content, and we handle the rest.',
      icon: 'bi bi-lightning',
      iconBg: 'bg-danger',
      gradient: 'linear-gradient(to bottom right, #fce7f3, #ffe4e6)',
      border: 'border border-pink-100',
      tag: 'Fully Managed',
      tagColor: 'text-danger',
    },
  ];

  return (
    <section className="py-5 bg-white">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold display-6 text-dark mb-3">Everything You Need to Get Online</h2>
          <p className="lead text-muted mx-auto" style={{ maxWidth: '600px' }}>
            A complete solution that handles all the technical details so you can focus on your clients
          </p>
        </div>

        <div className="row g-4">
          {features.map((card, i) => (
            <div className="col-md-6 col-lg-4" key={i}>
              <div
                className={`p-4 rounded-4 shadow-sm h-100 ${card.border}`}
                style={{ background: card.gradient }}
              >
                <div className={`rounded-3 p-3 mb-3 d-inline-flex align-items-center justify-content-center ${card.iconBg}`}>
                  <i className={`${card.icon} text-white fs-5`}></i>
                </div>
                <h4 className="fw-semibold text-dark mb-2">{card.title}</h4>
                <p className="text-muted mb-3">{card.description}</p>
                <div className={`d-flex align-items-center small fw-medium ${card.tagColor}`}>
                  <i className="bi bi-check-circle-fill me-2"></i>
                  {card.tag}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EverythingYouNeed;
