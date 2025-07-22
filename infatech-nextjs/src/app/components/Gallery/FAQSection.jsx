import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQSection = ({ faqs }) => {
  const [openFAQ, setOpenFAQ] = useState(null);

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h2 className="h2 fw-bold text-center mb-5">
          Frequently Asked Questions
        </h2>
        <div className="accordion" id="faqAccordion">
          {faqs.map((faq, index) => (
            <div className="accordion-item border rounded mb-3" key={index}>
              <h2 className="accordion-header">
                <button
                  className={`accordion-button ${openFAQ === index ? '' : 'collapsed'}`}
                  type="button"
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                >
                  {faq.question}
                  <span className="ms-auto">
                    {openFAQ === index ? (
                      <ChevronUp className="text-muted" size={18} />
                    ) : (
                      <ChevronDown className="text-muted" size={18} />
                    )}
                  </span>
                </button>
              </h2>
              <div className={`accordion-collapse collapse ${openFAQ === index ? 'show' : ''}`}>
                <div className="accordion-body text-secondary">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
