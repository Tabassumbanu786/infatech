import React from 'react';
import { Clock, Shield, Star } from 'lucide-react';
// import { CalendlyPopupButton } from 'react-calendly'; // must be correctly imported

import CalendlyPopupButton from '../components/Calendly/CalendlyPopupButton';


const CtaSection = ({ ctaRef }) => {
  return (
    <section ref={ctaRef} className="py-5 text-center text-black">
      <div className="container">
        <div className="mb-4">
          <h2 className="fw-bold display-6 mb-3 text-black">
            Ready to Build Your Professional Online Presence?
          </h2>
          <p className="lead text-black mb-4">
            Let your website do the work while you focus on advising clients.
          </p>
        </div>

        <div className="d-flex flex-column flex-sm-row text-black justify-content-center gap-3 mb-4">
          <CalendlyPopupButton
            url="https://calendly.com/tabassumbanumusa/website-strategy-call"
            buttonText="Click here to get started"
            style={{
              backgroundColor: '#059669',
              color: '#ffffff',
              fontWeight: 600,
              padding: '0.75rem 1.5rem',
              borderRadius: '0.5rem',
              fontSize: '1rem',
              border: 'none'
            }}
          />
        </div>

        <div className="d-flex justify-content-center gap-4 text-black small mt-4 flex-wrap">
          <div className="d-flex align-items-center">
            <Clock size={16} className="me-2" />
            <span>7-Day Delivery</span>
          </div>
          <div className="d-flex align-items-center">
            <Shield size={16} className="me-2" />
            <span>Secure & Professional</span>
          </div>
          <div className="d-flex align-items-center">
            <Star size={16} className="me-2" />
            <span>Expert Support</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
