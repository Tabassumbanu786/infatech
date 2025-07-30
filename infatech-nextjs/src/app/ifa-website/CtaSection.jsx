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

           <a
            href={`https://wa.me/7021710954?text=${encodeURIComponent(
              "Hi, I’m interested in getting a quote for a website/app development project. Please guide me through the next steps."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn text-white fw-semibold"
            style={{ backgroundColor: '#ff3b00'}}
          >
            GET A QUOTE NOW
          </a>
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
