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
    onClick={() => setSelectedTemplate(null)}
    style={{
      position: 'fixed',
      inset: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      zIndex: 1050,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1rem',
      overflowY: 'auto'
    }}
  >
    <div
      onClick={(e) => e.stopPropagation()}
      className="d-flex flex-column flex-lg-row bg-white rounded-4 w-100 overflow-hidden position-relative"
      style={{
        maxWidth: '1200px',
        maxHeight: '90vh',
        height: 'auto'
      }}
    >
      {/* Close Button */}
      <div className="position-absolute top-0 end-0 m-3 z-3">
        <button
          onClick={() => setSelectedTemplate(null)}
          className="btn-close"
        />
      </div>
{/* Left Preview */}
<div
  className="flex-grow-1 overflow-auto border-end"
  style={{
    backgroundColor: '#f3f4f6',
    height: window.innerWidth < 768 ? '50vh' : '100%',
    maxHeight: '90vh',
    borderRight: window.innerWidth >= 768 ? '1px solid #e5e7eb' : 'none',
  }}
>
  <TemplatePreview
    templateId={selectedTemplate.id}
    templateName={selectedTemplate.name}
  />
</div>

      {/* Right Details */}
      <div
  className="overflow-auto"
  style={{
    width: '100%',
    // maxWidth: '320px',       
    maxWidth: window.innerWidth >= 768 ? '320px' : '100%',
    padding: window.innerWidth < 768 ? '1rem' : '1.5rem',  // p-4/md:p-6
    height: window.innerWidth < 768 ? '50vh' : '100%',     // h-1/2/md:h-full
    maxHeight: '90vh'
  }}
>
        <h4 className="h5 fw-bold text-dark mb-4">{selectedTemplate.name}</h4>
        {selectedTemplate?.subtitle && (
          <p className="fw-semibold text-black mb-2">{selectedTemplate.subtitle}</p>
        )}
        <p className="text-muted mb-0" >{selectedTemplate.description}</p>
        <div className="mb-4">
          <h6 className="fw-bold text-dark mb-0">Features Included:</h6>
          {/* <div className="fw-bold text-dark mb-2">Features Included:</div> */}
          <ul className="list-unstyled mb-0">
            {selectedTemplate.features.map((feature, idx) => (
              <li key={idx} className="d-flex align-items-center mb-1">
                <div
                  className="bg-success rounded-circle me-2"
                  style={{ width: '8px', height: '8px' }}
                ></div>
                <span className="text-muted">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* <div className="mb-2"> */}
        {/* <div className="fw-bold text-dark mb-2">Style:</div> */}
        {/* <h6 className="fw-bold text-dark mb-0">Style:</h6>
          <span className="badge bg-light text-primary">
            {selectedTemplate.style}
          </span>
        </div> */}

        <div className="text-center">
          <a
            href={`https://wa.me/7021710954?text=${encodeURIComponent(
              "Hi, I’m interested in getting a quote for a website/app development project. Please guide me through the next steps."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn text-white fw-semibold w-100"
            style={{ backgroundColor: '#ff3b00'}}
          >
            GET A QUOTE NOW
          </a>
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
  const [isSideModalOpen, setIsSideModalOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [modalPosition, setModalPosition] = useState('right');
  const [isMobile, setIsMobile] = useState(false);
  const cardRef = useRef(null);


  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isSideModalOpen && cardRef.current) {
      const cardRect = cardRef.current.getBoundingClientRect();
      const modalWidth = 320;
      if (cardRect.right + modalWidth > window.innerWidth) {
        setModalPosition('left');
      } else {
        setModalPosition('right');
      }
    }
  }, [isSideModalOpen]);

  useEffect(() => {
    if (isSideModalOpen) {
      const handleClickOutside = (event) => {
        if (cardRef.current && !cardRef.current.contains(event.target)) {
          setIsSideModalOpen(false);
        }
      };
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isSideModalOpen]);
  const handleCardClick = () => {
    if (disablePreviewModal) {
      setIsSideModalOpen((prev) => !prev);
    } else {
      onTemplateClick(template);
    }
  };
  const handleMouseEnter = () => {
    if (disablePreviewModal && !isMobile) setIsSideModalOpen(true);
  };

  const handleMouseLeave = () => {
    if (disablePreviewModal && !isMobile) setIsSideModalOpen(false);
  };
  return (
      <div
        ref={cardRef}
        className="position-relative"
        onMouseEnter={!isMobile ? handleMouseEnter : undefined}
        onMouseLeave={!isMobile ? handleMouseLeave : undefined}
      >
      <div
        className={`card shadow-sm border overflow-hidden transition-template-card ${!disablePreviewModal ? 'cursor-pointer' : 'cursor-default'}`}
        onClick={handleCardClick}
      >
        <div className="position-relative">
          <img
            src={template.image}
            alt={template.name}
            className="card-img-top object-fit-cover"
            style={{ height: '224px' }}
          />
          {!disablePreviewModal && (
            // <div className="position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center template-hover-overlay">
               <div
              className={`position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center transition overlay-preview ${
                !isMobile ? 'hover-overlay' : ''
              }`}
            >
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
            <p className="text-bolt-primary small mb-2">
              {template?.subtitle}
            </p>
          )}
          {disablePreviewModal ? (
            <div className="text-center py-3">
              <div className="bg-bolt-primary bg-opacity-10 rounded-circle mx-auto d-flex justify-content-center align-items-center mb-2" style={{ width: '48px', height: '48px' }}>
                <Eye className="text-bolt-primary" size={24} />
              </div>
              {/* <p className="text-muted small">Hover to preview features</p> */}
              <p className="text-muted small fw-medium">
                  {isMobile ? 'Tap to preview' : 'Click to preview full website'}
                </p>
                {isSideModalOpen && (
                  <div className="mt-2">
                    <span className="badge text-white fw-bold animate__pulse" style={{ backgroundColor: '#ff3b00' }}>
                      Preview Open ↗
                    </span>
                  </div>
                )}
            </div>
          ) : (
            <>
              {/* <p className="text-muted small mb-3">{template.description}</p> */}
              {/* <ul className="list-unstyled mb-0">
                {template.features.slice(0, 3).map((feature, idx) => (
                  <li key={idx} className="d-flex align-items-center mb-1">
                    <div className="bg-success rounded-circle me-2" style={{ width: '8px', height: '8px' }}></div>
                    <span className="text-muted small">{feature}</span>
                  </li>
                ))}
              </ul> */}
              <div className="text-center py-3">
              <div className="mt-2">
                    <span className="badge text-white fw-bold animate__pulse" style={{ backgroundColor: '#050a1e' }}>
                      LIVE DEMO WEBSITE
                    </span>
                  </div>
                  </div>
            </>
          )}
        </div>
      </div>

      {isSideModalOpen && disablePreviewModal && (
        <>
        {isMobile && (
          <div
            className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 z-1040"
            onClick={() => setIsSideModalOpen(false)}
          />
        )}
        <div
          className={`position-absolute top-0 bg-white bg-gradient rounded-4 border 
            shadow-lg p-4 zindex-tooltip template-hover-preview transition-template-card 
            ${isMobile
              ? 'position-fixed top-50 start-50 translate-middle z-1050 w-100'
              : `top-0 z-1050
             ${modalPosition === 'right' ? 'start-100 ms-3' : 'end-100 me-3'}`
          }`}
          style={{ width: '320px' }}
        >
          {isMobile && (
                <button
                  className="btn-close position-absolute top-0 end-0 m-2"
                  onClick={() => setIsSideModalOpen(false)}
                ></button>
              )}
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
        </>
      )}
    </div>
  );
};

export default TemplateGallery;
