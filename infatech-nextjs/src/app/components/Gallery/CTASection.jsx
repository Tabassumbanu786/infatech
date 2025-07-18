import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';

const CTASection = ({
  title = "Ready to Transform Your Business?",
  subtitle = "Book a free consultation to discuss your specific needs and get a customized solution.",
  buttonText = "Schedule Your Free Consultation",
  calendlyUrl = "https://calendly.com/your-calendar"
}) => {
  const handleCalendlyClick = () => {
    window.open(calendlyUrl, '_blank');
  };

  return (
    <section className="py-5 bg-primary text-white text-center">
      <div className="container">
        <h2 className="display-5 fw-bold mb-3">
          {title}
        </h2>
        <p className="lead mb-4">
          {subtitle}
        </p>
        <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">
          <button
            onClick={handleCalendlyClick}
            className="btn btn-light d-inline-flex align-items-center px-4 py-2 fw-semibold shadow"
          >
            <Calendar className="me-2" size={18} />
            {buttonText}
          </button>
          <button className="btn btn-outline-light d-inline-flex align-items-center px-4 py-2">
            Learn More
            <ArrowRight className="ms-2" size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
