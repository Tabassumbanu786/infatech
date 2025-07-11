"use client";
import React, { useState } from 'react';
import { Eye, ArrowLeft, ArrowRight } from 'lucide-react';
import TemplatePreview from './TemplatePreview';

const TemplateGallery = ({ industry, templates }) => {
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTemplate = () => {
    setCurrentIndex((prev) => (prev + 1) % templates.length);
  };

  const prevTemplate = () => {
    setCurrentIndex((prev) => (prev - 1 + templates.length) % templates.length);
  };

  return (
    <section className="py-5 bg-white">
      <div className="container">
        <h2 className="text-center mb-3 display-5 fw-bold">
          Website Template Options for {industry}
        </h2>
        <p className="text-center mb-5 lead text-muted">
          Choose from our professionally designed templates for {industry.toLowerCase()}. All templates are customizable.
        </p>

        {/* Template Grid */}
        <div className="row g-4 mb-5">
          {templates.map((template) => (
            <div className="col-md-6 col-lg-4" key={template.id}>
              <div className="card h-100 shadow-sm border-0" onClick={() => setSelectedTemplate(template)} style={{ cursor: 'pointer' }}>
                <div className="position-relative">
                  <img src={template.image} alt={template.name} className="card-img-top" style={{ height: '200px', objectFit: 'cover' }} />
                  <div className="position-absolute top-0 end-0 m-2 bg-light px-2 py-1 rounded text-muted small">
                    {template.style}
                  </div>
                  <div className="position-absolute top-50 start-50 translate-middle bg-dark bg-opacity-50 rounded-circle p-2">
                    <Eye className="text-white" />
                  </div>
                </div>
                <div className="card-body">
                  <h5 className="card-title">{template.name}</h5>
                  <p className="card-text text-muted small">{template.description}</p>
                  <ul className="list-unstyled small text-muted">
                    {template.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="d-flex align-items-center">
                        <span className="badge bg-primary rounded-circle me-2" style={{ width: '6px', height: '6px' }}></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Navigation */}
        <div className="d-flex justify-content-center align-items-center mb-4">
          <button className="btn btn-outline-secondary me-2" onClick={prevTemplate}>
            <ArrowLeft size={18} />
          </button>
          <div className="d-flex gap-2">
            {templates.map((_, index) => (
              <div
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`rounded-circle ${index === currentIndex ? 'bg-primary' : 'bg-secondary'} `}
                style={{
                    width: '12px',
                    height: '12px',
                    backgroundColor: index === currentIndex ? '#ff3b00' : '#ddd',
                    transition: 'background-color 0.3s',
                    margin: '0 4px',
                  }}
              />
            ))}
          </div>
          <button className="btn btn-outline-secondary ms-2" onClick={nextTemplate}>
            <ArrowRight size={18} />
          </button>
        </div>

        {/* Featured Template Block */}
        <div className="p-4 rounded bg-light text-center">
          <h3 className="fw-bold mb-3">{templates[currentIndex].name}</h3>
          <p className="text-muted">{templates[currentIndex].description}</p>
          <div className="row g-3 my-4">
            {templates[currentIndex].features.map((feature, idx) => (
              <div key={idx} className="col-sm-6 col-md-3">
                <div className="bg-white rounded shadow-sm p-2 small fw-medium">{feature}</div>
              </div>
            ))}
          </div>
          <button className="btn btn-primary" onClick={() => setSelectedTemplate(templates[currentIndex])}>
            <Eye size={16} className="me-2" />
            Preview This Template
          </button>
        </div>

        {/* Modal for Preview */}
        {selectedTemplate && (
          <div className="modal fade show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.6)' }}>
            <div className="modal-dialog modal-xl modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-body d-flex p-0" style={{ height: '90vh' }}>
                  {/* Left: Preview */}
                  <div className="flex-grow-1 border-end overflow-auto">
                    <TemplatePreview
                      templateId={selectedTemplate.id}
                      templateName={selectedTemplate.name}
                    />
                  </div>
                  {/* Right: Info */}
                  <div className="w-25 p-4 overflow-auto">
                    <div className="d-flex justify-content-between align-items-start mb-3">
                      <h5 className="fw-bold">{selectedTemplate.name}</h5>
                      <button
                        className="btn-close"
                        onClick={() => setSelectedTemplate(null)}
                      ></button>
                    </div>
                    <p className="text-muted small">{selectedTemplate.description}</p>
                    <h6 className="fw-semibold">Features</h6>
                    <ul className="small text-muted">
                      {selectedTemplate.features.map((f, idx) => (
                        <li key={idx}>{f}</li>
                      ))}
                    </ul>
                    <div className="mt-4">
                      <button
                        className="btn btn-success w-100 mb-2"
                        onClick={() => window.open('https://calendly.com/your-calendar', '_blank')}
                      >
                        Choose This Template
                      </button>
                      <button
                        className="btn btn-outline-secondary w-100"
                        onClick={() => setSelectedTemplate(null)}
                      >
                        Continue Browsing
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default TemplateGallery;
