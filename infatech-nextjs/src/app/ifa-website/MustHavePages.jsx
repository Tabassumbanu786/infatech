'use client';
import React from 'react';

const MustHavePages = () => {
  return (
    <section className="py-5 bg-white">
      <div className="container">
        <h2 className="text-center mb-5 fw-bold">5 Must-Have Pages for Success</h2>

        {/* Page 1: Home */}
        <div className="row mb-5 rounded shadow overflow-hidden">
          <div className="col-md-6 p-4 bg-white">
            <div className="d-flex align-items-center mb-3">
              <div className="bg-warning text-white rounded p-2 me-3">
                <i className="bi bi-globe"></i>
              </div>
              <h4 className="fw-bold mb-0">Home Page</h4>
            </div>
            <p className="text-secondary">Highlights your intro, credentials, services, and trust signals. The first impression that converts visitors into prospects.</p>
            <ul className="list-unstyled">
              <li><i className="bi bi-check-circle-fill text-success me-2"></i>Professional introduction</li>
              <li><i className="bi bi-check-circle-fill text-success me-2"></i>Credentials showcase</li>
              <li><i className="bi bi-check-circle-fill text-success me-2"></i>Services overview</li>
              <li><i className="bi bi-check-circle-fill text-success me-2"></i>Trust signals</li>
            </ul>
          </div>
          <div className="col-md-6 d-flex align-items-center justify-content-center" style={{ background: 'linear-gradient(to right, #fde8cc, #fad4d4)' }}>
            <div className="p-4 bg-white text-center rounded shadow-sm">
              <i className="bi bi-globe fs-1 text-warning mb-2"></i>
              <h6 className="fw-bold text-dark">Welcome Page</h6>
              <p className="text-muted small">Professional first impression</p>
            </div>
          </div>
        </div>

        {/* Page 2: About */}
        <div className="row mb-5 rounded shadow overflow-hidden flex-md-row-reverse">
          <div className="col-md-6 p-4 bg-white">
            <div className="d-flex align-items-center mb-3">
              <div className="bg-danger text-white rounded p-2 me-3">
                <i className="bi bi-award"></i>
              </div>
              <h4 className="fw-bold mb-0">About Page</h4>
            </div>
            <p className="text-secondary">Your personal story, experience, and certifications. This page builds trust and shows why clients should choose you.</p>
            <ul className="list-unstyled">
              <li><i className="bi bi-check-circle-fill text-success me-2"></i>Personal story</li>
              <li><i className="bi bi-check-circle-fill text-success me-2"></i>Professional experience</li>
              <li><i className="bi bi-check-circle-fill text-success me-2"></i>Certifications</li>
              <li><i className="bi bi-check-circle-fill text-success me-2"></i>Trust building elements</li>
            </ul>
          </div>
          <div className="col-md-6 d-flex align-items-center justify-content-center" style={{ background: 'linear-gradient(to right, #ffe3e3, #fddcdc)' }}>
            <div className="p-4 bg-white text-center rounded shadow-sm">
              <i className="bi bi-award fs-1 text-danger mb-2"></i>
              <h6 className="fw-bold text-dark">About You</h6>
              <p className="text-muted small">Build trust with your story</p>
            </div>
          </div>
        </div>

        {/* Page 3: Services */}
        <div className="row mb-5 rounded shadow overflow-hidden">
          <div className="col-md-6 p-4 bg-white">
            <div className="d-flex align-items-center mb-3">
              <div className="bg-success text-white rounded p-2 me-3">
                <i className="bi bi-bullseye"></i>
              </div>
              <h4 className="fw-bold mb-0">Services Page</h4>
            </div>
            <p className="text-secondary">Clear list of your offerings — investment planning, tax saving, portfolio reviews, and more.</p>
            <ul className="list-unstyled">
              <li><i className="bi bi-check-circle-fill text-success me-2"></i>Investment planning</li>
              <li><i className="bi bi-check-circle-fill text-success me-2"></i>Tax saving solutions</li>
              <li><i className="bi bi-check-circle-fill text-success me-2"></i>Portfolio reviews</li>
              <li><i className="bi bi-check-circle-fill text-success me-2"></i>Financial planning</li>
            </ul>
          </div>
          <div className="col-md-6 d-flex align-items-center justify-content-center" style={{ background: 'linear-gradient(to right, #e6f4ea, #d2f7dd)' }}>
            <div className="p-4 bg-white text-center rounded shadow-sm">
              <i className="bi bi-bullseye fs-1 text-success mb-2"></i>
              <h6 className="fw-bold text-dark">Services</h6>
              <p className="text-muted small">Clear service offerings</p>
            </div>
          </div>
        </div>

        {/* Page 4: Resources */}
        <div className="row mb-5 rounded shadow overflow-hidden flex-md-row-reverse">
          <div className="col-md-6 p-4 bg-white">
            <div className="d-flex align-items-center mb-3">
              <div className="bg-warning text-white rounded p-2 me-3">
                <i className="bi bi-folder2-open"></i>
              </div>
              <h4 className="fw-bold mb-0">Resources Page</h4>
            </div>
            <p className="text-secondary">Extra value for clients with tools and resources they can use.</p>
            <ul className="list-unstyled">
              <li><i className="bi bi-check-circle-fill text-success me-2"></i>Live NSE/BSE stock ticker</li>
              <li><i className="bi bi-check-circle-fill text-success me-2"></i>Latest finance news feed</li>
              <li><i className="bi bi-check-circle-fill text-success me-2"></i>SIP and EMI calculators</li>
              <li><i className="bi bi-check-circle-fill text-success me-2"></i>Downloadable templates</li>
              <li><i className="bi bi-check-circle-fill text-success me-2"></i>Email signup for tips</li>
            </ul>
          </div>
          <div className="col-md-6 d-flex align-items-center justify-content-center" style={{ background: 'linear-gradient(to right, #fff8dc, #ffe9b2)' }}>
            <div className="p-4 bg-white text-center rounded shadow-sm">
              <i className="bi bi-calculator fs-1 text-warning mb-2"></i>
              <h6 className="fw-bold text-dark">Tools & Downloads</h6>
              <p className="text-muted small">Finance tools for clients</p>
            </div>
          </div>
        </div>

        {/* Page 5: Contact */}
        <div className="row mb-3 rounded shadow overflow-hidden">
          <div className="col-md-6 p-4 bg-white">
            <div className="d-flex align-items-center mb-3">
              <div className="bg-info text-white rounded p-2 me-3">
                <i className="bi bi-chat-dots"></i>
              </div>
              <h4 className="fw-bold mb-0">Contact Page</h4>
            </div>
            <p className="text-secondary">Make it easy for potential clients to reach you with multiple contact options.</p>
            <ul className="list-unstyled">
              <li><i className="bi bi-check-circle-fill text-success me-2"></i>Clean contact form</li>
              <li><i className="bi bi-check-circle-fill text-success me-2"></i>Google Map embed</li>
              <li><i className="bi bi-check-circle-fill text-success me-2"></i>Direct WhatsApp button</li>
              <li><i className="bi bi-check-circle-fill text-success me-2"></i>Contact details</li>
            </ul>
          </div>
          <div className="col-md-6 d-flex align-items-center justify-content-center" style={{ background: 'linear-gradient(to right, #d2f4f8, #b2ebf2)' }}>
            <div className="p-4 bg-white text-center rounded shadow-sm">
              <i className="bi bi-geo-alt fs-1 text-info mb-2"></i>
              <h6 className="fw-bold text-dark">Contact</h6>
              <p className="text-muted small">Easy to reach you</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MustHavePages;
