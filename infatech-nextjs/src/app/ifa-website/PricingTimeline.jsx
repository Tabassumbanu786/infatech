'use client';
import React from 'react';

const PricingTimeline = () => {
  return (
    <>
      {/* Pricing Section */} 
      <section className="py-5 bg-white">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold display-6 text-dark mb-3">Simple, Transparent Pricing</h2>
            <p className="lead text-muted mx-auto" style={{ maxWidth: '600px' }}>
              Everything included, no hidden fees. Get your professional website in just 10 days.
            </p>
          </div>

          <div className="row g-4 justify-content-center">
            {/* Setup Cost */}
            <div className="col-lg-4 col-md-6">
            <div className="p-4 rounded-4 bg-light shadow-sm h-100" style={{ border: '1px solid #f97316' }}>
                <div className="text-center mb-4">
                  <div className="rounded-circle d-inline-flex align-items-center justify-content-center p-3 mb-3 shadow-sm"
                    style={{ backgroundColor: '#f97316' }}>
                    <i className="bi bi-lightning-fill text-white fs-4"></i>
                  </div>
                  <h3 className="fw-bold mb-2">One-Time Setup</h3>
                  {/* <div className="fs-2 fw-bold text-warning mb-2">₹7,000</div> */}
                  <div className="h2 fw-bold mb-1" style={{ color: '#f97316' }}>₹10,000</div>

                  <p className="text-muted">Complete website setup</p>
                </div>
                <ul className="list-unstyled mb-4">
                  <li className="d-flex align-items-center mb-2">
                    <i className="bi bi-check-circle-fill text-success me-2"></i> Domain registration
                  </li>
                  <li className="d-flex align-items-center mb-2">
                    <i className="bi bi-check-circle-fill text-success me-2"></i> Hosting setup
                  </li>
                  <li className="d-flex align-items-center mb-2">
                    <i className="bi bi-check-circle-fill text-success me-2"></i> Complete website build
                  </li>
                  <li className="d-flex align-items-center mb-2">
                    <i className="bi bi-check-circle-fill text-success me-2"></i> SSL certificate
                  </li>
                  <li className="d-flex align-items-center">
                    <i className="bi bi-check-circle-fill text-success me-2"></i> Basic SEO setup
                  </li>
                </ul>
                <div className="text-center">
                  <span className="badge text-white px-3 py-2 rounded-pill fw-semibold shadow-sm"
                    style={{ backgroundColor: '#f97316' }}>
                    7-Day Delivery
                  </span>
                </div>
              </div>
            </div>

            {/* Annual Renewal */}
            <div className="col-lg-4 col-md-6">
            <div
  className="p-4 rounded-4 bg-light shadow-sm h-100"
  style={{ border: '1px solid #050a1e' }}
>
                <div className="text-center mb-4">
                <div
  className="text-white rounded-4 p-3 mx-auto mb-3 d-inline-block"
  style={{ backgroundColor: '#050a1e' }}
>
  <i className="bi bi-shield-lock-fill fs-3"></i>
</div>

                  <h3 className="fw-bold mb-2">Annual Renewal</h3>
                  <div className="fs-2 fw-bold mb-2" style={{ color: '#050a1e' }}>₹2,500</div>
                  <p className="text-muted">Per year</p>
                </div>
                <ul className="list-unstyled mb-4">
                  <li className="d-flex align-items-center mb-2">
                    <i className="bi bi-check-circle-fill text-success me-2"></i> Domain renewal
                  </li>
                  <li className="d-flex align-items-center mb-2">
                    <i className="bi bi-check-circle-fill text-success me-2"></i> Hosting maintenance
                  </li>
                  <li className="d-flex align-items-center mb-2">
                    <i className="bi bi-check-circle-fill text-success me-2"></i> Chatbot Support
                  </li>
                  <li className="d-flex align-items-center mb-2">
                    <i className="bi bi-check-circle-fill text-success me-2"></i> Up to 2 content updates
                  </li>
                  {/* <li className="d-flex align-items-center">
                    <i className="bi bi-check-circle-fill text-success me-2"></i> 2 minor text edits
                  </li> */}
                </ul>
                <div className="text-center">
  <span
    className="badge text-white fw-semibold px-3 py-2 rounded-pill"
    style={{ backgroundColor: '#050a1e' }}
  >
    Ongoing Support
  </span>
</div>

              </div>
            </div>
          </div>
        </div>
      </section>


    </>
  );
};

export default PricingTimeline;
