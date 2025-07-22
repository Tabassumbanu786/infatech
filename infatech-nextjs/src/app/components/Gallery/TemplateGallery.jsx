// TemplateGallery.tsx
'use client'
import React, { useState, useRef, useEffect } from 'react';
import { Eye, ArrowLeft, ArrowRight } from 'lucide-react';
import TemplatePreview from './TemplatePreview';

// interface Template {
//   id: number;
//   name: string;
//   description: string;
//   image: string;
//   features: string[];
//   style: string;
//   path?: string;
// }

// interface TemplateGalleryProps {
//   industry: string;
//   templates: Template[];
//   selectedTemplate?: Template | null;
//   setSelectedTemplate?: (template: Template | null) => void;
//   disablePreviewModal?: boolean;
// }

const TemplateGallery = ({ 
  industry, 
  templates, 
  selectedTemplate: externalSelectedTemplate, 
  setSelectedTemplate: externalSetSelectedTemplate,
  disablePreviewModal = false
}) => {
  const [internalSelectedTemplate, setInternalSelectedTemplate] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const selectedTemplate = externalSelectedTemplate !== undefined ? externalSelectedTemplate : internalSelectedTemplate;
  const setSelectedTemplate = externalSetSelectedTemplate || setInternalSelectedTemplate;

  const displayTemplates = templates;

  const nextTemplate = () => {
    setCurrentIndex((prev) => (prev + 1) % displayTemplates.length);
  };

  const prevTemplate = () => {
    setCurrentIndex((prev) => (prev - 1 + displayTemplates.length) % displayTemplates.length);
  };

  const handleTemplateClick = (template) => {
    // if (!disablePreviewModal) {
      setSelectedTemplate(template);
    // }
  };

  return (
    <section className="py-5 bg-white position-relative">
      <div className="container">
        <h2 className="display-5 fw-bold text-center text-dark mb-3">
          {industry === "All Industries" 
            ? "Ready-Made Business Platforms for Every Industry"
            : `Website Template Options for ${industry}`
          }
        </h2>
        <p className="fs-5 text-muted text-center mb-5 mx-auto" style={{maxWidth: '768px'}}>
          {industry === "All Industries" 
            ? <span className="fw-semibold">Customizable. Launch-ready. Delivered in just 7 days.</span>
            : `Choose from our professionally designed templates, each crafted specifically for ${industry.toLowerCase()}. All templates are fully customizable to match your brand and business needs.`
          }
        </p>

        {/* Template Grid */}

        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mb-5">
        {/* <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mb-5 position-relative" style={{ overflow: 'visible' }}> */}

          {displayTemplates.map((template, index) => (
            <TemplateCard 
              key={template.id} 
              template={template} 
              disablePreviewModal={disablePreviewModal}
              onTemplateClick={handleTemplateClick}
            />
          ))}
        </div>

        {/* Carousel Navigation */}
        {/* <div className="d-flex justify-content-center align-items-center mb-5">
          <button
            onClick={prevTemplate}
            className="btn btn-outline-secondary rounded-circle me-3"
          >
            <ArrowLeft size={20} />
          </button>
          <div className="d-flex gap-2">
            {displayTemplates.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`rounded-circle border-0 p-0`}
                style={{
                  width: '12px',
                  height: '12px',
                  backgroundColor: index === currentIndex ? '#0052FF' : '#d1d1d1'
                }}
              />
            ))}
          </div>
          <button
            onClick={nextTemplate}
            className="btn btn-outline-secondary rounded-circle ms-3"
          >
            <ArrowRight size={20} />
          </button>
        </div> */}

        {/* Featured Template Highlight */}
        {/* <div className="bg-light rounded-4 p-5 text-center">
          <h3 className="h2 fw-bold text-dark mb-3">
            {displayTemplates[currentIndex].name}
          </h3>
          {displayTemplates[currentIndex]?.subtitle && (
            <p className="text-primary fw-semibold fs-5 mb-3">
              {displayTemplates[currentIndex]?.subtitle}
            </p>
          )}
          <p className="fs-5 text-muted mb-4 mx-auto" style={{maxWidth: '600px'}}>
            {displayTemplates[currentIndex].description}
          </p>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 mb-4">
            {displayTemplates[currentIndex].features.map((feature, idx) => (
              <div key={idx} className="bg-white rounded p-3 shadow-sm">
                <span className="fw-semibold text-dark">{feature}</span>
              </div>
            ))}
          </div>
          {disablePreviewModal ? (
            <button
              onClick={() => window.location.href = '/financial-advisors'}
              className="btn btn-primary btn-lg"
            >
              <ArrowRight className="me-2" size={20} />
              Explore All Templates
            </button>
          ) : (
            <button
              onClick={() => setSelectedTemplate(displayTemplates[currentIndex])}
              className="btn btn-primary btn-lg"
            >
              <Eye className="me-2" size={20} />
              Preview This Template
            </button>
          )}
        </div> */}

        {/* Modal */}
        {selectedTemplate && !disablePreviewModal && (
          <div 
            className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 d-flex align-items-center justify-content-center p-3 z-index-1050"
            onClick={() => setSelectedTemplate(null)}
          >
            <div 
              className="bg-white rounded-lg w-100 h-100 overflow-hidden d-flex flex-column flex-lg-row max-w-100"
              onClick={(e) => e.stopPropagation()}
              style={{ maxHeight: '90vh', maxWidth: '1280px' }}
            >
              <div className="flex-grow-1 border-end">
                <TemplatePreview 
                  templateId={selectedTemplate.id} 
                  templateName={selectedTemplate.name}
                />
              </div>
              <div className="p-4 overflow-auto" style={{ width: '320px' }}>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h4 className="h5 fw-bold text-dark">{selectedTemplate.name}</h4>
                  <button
                    onClick={() => setSelectedTemplate(null)}
                    className="btn-close"
                  />
                </div>
                {selectedTemplate?.subtitle && (
                  <p className="text-primary fw-semibold mb-3">{selectedTemplate?.subtitle}</p>
                )}
                <p className="text-muted mb-4">{selectedTemplate.description}</p>
                <div className="mb-4">
                  <h6 className="fw-bold text-dark mb-2">Features Included:</h6>
                  <ul className="list-unstyled">
                    {selectedTemplate.features.map((feature, idx) => (
                      <li key={idx} className="d-flex align-items-center mb-2">
                        <div className="bg-success rounded-circle me-2" style={{width: '8px', height: '8px'}}></div>
                        <span className="text-muted">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mb-4">
                  <h6 className="fw-bold text-dark mb-2">Style:</h6>
                  <span className="inline-block bg-bolt-primary/10 text-bolt-primary px-3 py-1 rounded-full text-sm font-medium">
                      {selectedTemplate.style}
                    </span>


                </div>
                <div className="d-grid gap-2 mt-4">
                  <button
                    onClick={() => window.open('https://calendly.com/your-calendar', '_blank')}
                    className="btn btn-primary fw-semibold"
                  >
                    Choose This Template
                  </button>
                  <button
                    onClick={() => setSelectedTemplate(null)}
                    className="btn btn-light fw-semibold"
                  >
                    Continue Browsing
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

const TemplateCard = ({ template, disablePreviewModal, onTemplateClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [modalPosition, setModalPosition] = useState('right');
  const cardRef = useRef(null);

 
  useEffect(() => {
    if (isHovered && cardRef.current) {
      const cardRect = cardRef.current.getBoundingClientRect();
      const modalWidth = 320;
      const screenWidth = window.innerWidth;

      if (cardRect.right + modalWidth > screenWidth) {
        setModalPosition('left');
      } else {
        setModalPosition('right');
      }
    }
  }, [isHovered]);

  return (
    <div
      ref={cardRef}
      className="position-relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`card shadow-sm border overflow-hidden transition-template-card ${!disablePreviewModal ? 'cursor-pointer' : 'cursor-default'}`}
        onClick={() => onTemplateClick(template)}
      >
        <div className="position-relative">
          <img
            src={template.image}
            alt={template.name}
            className="card-img-top object-fit-cover"
            style={{ height: '224px' }}
          />
          {!disablePreviewModal && (
            <div className="position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center template-hover-overlay">
              <div className="text-white text-center opacity-0 template-hover-content">
                <Eye className="mb-2" size={32} />
                <span className="fw-semibold">Preview</span>
              </div>
            </div>
          )}
          <div className="position-absolute top-0 end-0 m-2">
            {/* Style Badge */}
          <span className="badge position-absolute top-0 end-0 m-2" style={{ backgroundColor: '#ff3b00' }}>
            {template.style}
          </span>
          </div>
        </div>
        <div className="card-body">
          <h5 className="fw-bold text-dark">{template.name}</h5>
          {template?.subtitle && (
            <p className="text-bolt-primary fw-semibold small mb-2">
              {template?.subtitle}
            </p>
          )}
          {disablePreviewModal ? (
            <div className="text-center py-3">
              <div className="bg-bolt-primary bg-opacity-10 rounded-circle mx-auto d-flex justify-content-center align-items-center mb-2" style={{ width: '48px', height: '48px' }}>
                <Eye className="text-bolt-primary" size={24} />
              </div>
              <p className="text-muted small">Hover to preview features</p>
            </div>
          ) : (
            <>
              <p className="text-muted small mb-3">{template.description}</p>
              <ul className="list-unstyled mb-0">
                {template.features.slice(0, 3).map((feature, idx) => (
                  <li key={idx} className="d-flex align-items-center mb-1">
                    <div className="bg-success rounded-circle me-2" style={{ width: '8px', height: '8px' }}></div>
                    <span className="text-muted small">{feature}</span>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>

      {isHovered && disablePreviewModal && (
        <div
          className={`position-absolute top-0 bg-white bg-gradient rounded-4 border shadow-lg p-4 zindex-tooltip template-hover-preview transition-template-card ${
            modalPosition === 'right' ? 'start-100 ms-3' : 'end-100 me-3'
          }`}
          style={{ width: '320px' , zIndex: 9999}}
        >
          <div class="position-absolute top-6 end-0 translate-middle badge text-white fw-bold rounded-pill px-3 py-1 shadow" style={{ backgroundColor: '#ff3b00' }}>
  PREVIEW
</div>


          <div className="mb-3">
            <img
              src={template.innerimage}
              alt={template.name}
              className="w-100 rounded border border-bolt-primary"
              style={{ height: '128px', objectFit: 'cover',objectPosition: 'top' }}
            />
          </div>

          <h5 className="fw-bold text-dark">{template.name}</h5>
          {template?.subtitle && (
            <p className="text-bolt-primary fw-bold small mb-2 text-center bg-bolt-primary bg-opacity-10 rounded-pill px-3 py-1">
              {template?.subtitle}
            </p>
          )}

          <p className="text-muted small mb-3">{template.description}</p>

          <div className="mb-3">
            <h6 className="fw-bold small d-flex align-items-center text-dark">
              <div className="bg-bolt-primary rounded-circle me-2" style={{ width: '8px', height: '8px' }}></div>
              Premium Features:
            </h6>
            {template.features.slice(0, 4).map((feature, idx) => (
              <div key={idx} className="d-flex align-items-center mb-1">
                <div className="rounded-circle me-2" style={{ width: '10px', height: '10px', background: 'linear-gradient(to right, #34D399, #10B981)' }}></div>
                <span className="text-muted small">{feature}</span>
              </div>
            ))}
            {template.features.length > 4 && (
              <div className="d-flex align-items-center">
                <div className="rounded-circle me-2" style={{ width: '10px', height: '10px', background: 'linear-gradient(to right, #0052FF, #003FCC)' }}></div>
                <span className="text-bolt-primary fw-bold small">+{template.features.length - 4} more features</span>
              </div>
            )}
          </div>

          <div className="text-center">
            <div className="bg-bolt-primary bg-opacity-10 rounded p-2 mb-2">
              <p className="text-bolt-primary small fw-bold mb-0">🚀 Ready in 7 days</p>
              <p className="text-muted small mb-0">Fully customizable</p>
            </div>
            <button
  className="btn w-100 fw-bold shadow-sm text-white"
  style={{
    backgroundColor: '#ff3b00',
    transition: 'all 0.3s ease'
  }}
  onMouseOver={(e) => {
    e.currentTarget.style.transform = 'translateY(-2px)';
    e.currentTarget.style.boxShadow = '0 0.5rem 1rem rgba(0, 0, 0, 0.15)';
  }}
  onMouseOut={(e) => {
    e.currentTarget.style.transform = '';
    e.currentTarget.style.boxShadow = '';
  }}
  onClick={(e) => {
    e.stopPropagation();
    // onTemplateClick(template);
    window.location.href = template.path || '/custom-solutions';
  }}
>
  View Full Demo
</button>


          </div>
        </div>
      )}
    </div>
  );
};

export default TemplateGallery;
