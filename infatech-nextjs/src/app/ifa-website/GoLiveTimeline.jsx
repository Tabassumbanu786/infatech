'use client';
import React from 'react';

const GoLiveTimeline = () => {
  const steps = [
    {
      number: 1,
      title: 'Submit Content',
      description:
        'Fill out our simple onboarding form with your business details, photos, and content preferences.',
      bg: 'bg-danger',
    },
    {
      number: 2,
      title: 'We Build',
      description:
        'Our team creates your professional website with your branding, content, and chosen template.',
      bg: 'bg-info',
    },
    {
      number: 3,
      title: 'Go Live',
      description:
        'Your website goes live within 7 days. Start attracting clients and growing your business online.',
      bg: 'bg-success',
    },
  ];

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold display-6 text-dark mb-3">Get Started in 3 Simple Steps</h2>
          <p className="lead text-muted mx-auto" style={{ maxWidth: '600px' }}>
            Simple process, professional results. We handle everything while you focus on your business.
          </p>
        </div>

        <div className="row text-center">
          {steps.map((step, i) => (
            <div className="col-md-4 mb-4" key={i}>
              <div
                className={`rounded-circle text-white d-flex align-items-center justify-content-center mx-auto mb-3 shadow ${step.bg}`}
                style={{ width: '60px', height: '60px', fontWeight: '600', fontSize: '1.25rem' }}
              >
                {step.number}
              </div>
              <h5 className="fw-semibold text-dark mb-2">{step.title}</h5>
              <p className="text-muted">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GoLiveTimeline;
