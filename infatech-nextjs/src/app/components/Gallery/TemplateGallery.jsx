// Bootstrap version of TemplateGallery (JSX only)
'use client'
import React, { useState } from 'react';
import { Eye, ArrowLeft, ArrowRight } from 'lucide-react';
import TemplatePreview from './TemplatePreview';

const TemplateGallery = ({ industry, templates }) => {
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const updatedTemplates = [
    {
      id: 1,
      name: "Sugar & Script",
      subtitle: "Bakehouse Elegance",
      description: "Warm, elegant design for bakeries that want to look as good as they taste.",
      image: "https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: ["Custom Cake Forms", "Seasonal Specials", "Recipe Journal"],
      style: "Elegant"
    },
    {
      id: 2,
      name: "HarvestCart",
      subtitle: "Grocery Go Digital",
      description: "Clean, local, and built for modern kirana stores and grocery businesses.",
      image: "https://images.pexels.com/photos/264537/pexels-photo-264537.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: ["Inventory Dashboard", "Daily Stock Updates", "Local Delivery Tracker"],
      style: "Modern"
    },
    {
      id: 3,
      name: "Canvas Grid",
      subtitle: "Creative Portfolio",
      description: "Bold visuals. Smart structure. Perfect for designers, photographers & creators.",
      image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: ["Interactive Galleries", "Video Reels", "Project Case Studies"],
      style: "Creative"
    },
    {
      id: 4,
      name: "ShopStack",
      subtitle: "Ecom Ready",
      description: "A powerful, minimal e-commerce template that sells your products — fast.",
      image: "https://images.pexels.com/photos/3769747/pexels-photo-3769747.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: ["Product Display + Cart", "Secure Payments", "Mobile Optimized"],
      style: "E-commerce"
    },
    {
      id: 5,
      name: "ZenSpace",
      subtitle: "Wellness & More",
      description: "Peaceful, polished design for coaches, clinics, and fitness professionals.",
      image: "https://images.pexels.com/photos/3822621/pexels-photo-3822621.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: ["Service Blocks", "Calendar Integration", "Team Profiles"],
      style: "Wellness"
    }
  ];

  const displayTemplates = industry === "All Industries" ? updatedTemplates : templates;

  const nextTemplate = () => {
    setCurrentIndex((prev) => (prev + 1) % displayTemplates.length);
  };

  const prevTemplate = () => {
    setCurrentIndex((prev) => (prev - 1 + displayTemplates.length) % displayTemplates.length);
  };

  return (
    <section className="py-5 bg-white">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">
            {industry === "All Industries"
              ? 'Ready-Made Business Platforms for Every Industry'
              : `Website Template Options for ${industry}`}
          </h2>
          <p className="text-muted">
            {industry === "All Industries"
              ? 'Customizable. Launch-ready. Delivered in just 7 days.'
              : `Choose from our professionally designed templates, each crafted specifically for ${industry.toLowerCase()}. All templates are fully customizable to match your brand and business needs.`}
          </p>
        </div>

        <div className="row g-4 mb-4">
          {displayTemplates.map((template) => (
            <div className="col-md-4" key={template.id}>
              <div className="card h-100 shadow-sm" onClick={() => setSelectedTemplate(template)}>
                <div className="position-relative">
                  <img src={template.image} className="card-img-top" alt={template.name} style={{ height: '220px', objectFit: 'cover' }} />
                  <span className="position-absolute top-0 end-0 bg-primary text-white px-2 py-1 rounded-start small">
                    {template.style}
                  </span>
                </div>
                <div className="card-body">
                  <h5 className="card-title fw-bold text-dark">{template.name}</h5>
                  {industry === "All Industries" && template.subtitle && (
                    <p className="text-primary small fw-semibold mb-1">{template.subtitle}</p>
                  )}
                  <p className="text-muted small">{template.description}</p>
                  <ul className="list-unstyled small">
                    {template.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="d-flex align-items-center mb-1">
                        <span className="bg-success rounded-circle me-2" style={{ width: 8, height: 8, display: 'inline-block' }}></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="d-flex justify-content-center align-items-center gap-3 mb-5">
          <button className="btn btn-outline-secondary rounded-circle p-2" onClick={prevTemplate}><ArrowLeft size={16} /></button>
          <div className="d-flex gap-2">
            {displayTemplates.map((_, i) => (
              <span key={i} className={`rounded-circle d-inline-block`} style={{ width: 10, height: 10, backgroundColor: i === currentIndex ? '#0d6efd' : '#ccc' }}></span>
            ))}
          </div>
          <button className="btn btn-outline-secondary rounded-circle p-2" onClick={nextTemplate}><ArrowRight size={16} /></button>
        </div>

        <div className="text-center bg-light p-5 rounded">
          <h3 className="fw-bold mb-2">{displayTemplates[currentIndex].name}</h3>
          {industry === "All Industries" && displayTemplates[currentIndex].subtitle && (
            <p className="text-primary fw-semibold">{displayTemplates[currentIndex].subtitle}</p>
          )}
          <p className="text-muted mb-4">{displayTemplates[currentIndex].description}</p>
          <div className="row g-3 justify-content-center mb-4">
            {displayTemplates[currentIndex].features.map((feature, i) => (
              <div key={i} className="col-6 col-md-4">
                <div className="bg-white p-3 border rounded h-100 small fw-semibold">
                  {feature}
                </div>
              </div>
            ))}
          </div>
          <button className="btn btn-primary d-inline-flex align-items-center gap-2" onClick={() => setSelectedTemplate(displayTemplates[currentIndex])}>
            <Eye size={16} /> Preview This Template
          </button>
        </div>

        {selectedTemplate && (
          <div className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 d-flex align-items-center justify-content-center p-4 z-3" onClick={() => setSelectedTemplate(null)}>
            <div className="bg-white rounded shadow-lg w-100" style={{ maxWidth: '1200px', maxHeight: '90vh', overflow: 'auto' }} onClick={(e) => e.stopPropagation()}>
              <div className="d-flex border-bottom p-3 justify-content-between align-items-center">
                <h5 className="mb-0 fw-bold">{selectedTemplate.name}</h5>
                <button className="btn-close" onClick={() => setSelectedTemplate(null)}></button>
              </div>
              <div className="d-flex">
                <div className="flex-grow-1 border-end">
                  <TemplatePreview templateId={selectedTemplate.id} templateName={selectedTemplate.name} />
                </div>
                <div className="p-4" style={{ width: '300px' }}>
                  {industry === "All Industries" && selectedTemplate.subtitle && (
                    <p className="fw-semibold text-primary">{selectedTemplate.subtitle}</p>
                  )}
                  <p className="text-muted small">{selectedTemplate.description}</p>
                  <h6 className="fw-bold mt-4 mb-2">Features</h6>
                  <ul className="list-unstyled small">
                    {selectedTemplate.features.map((feature, i) => (
                      <li key={i} className="d-flex align-items-center mb-2">
                        <span className="bg-success rounded-circle me-2" style={{ width: 8, height: 8, display: 'inline-block' }}></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4">
                    <button className="btn btn-primary w-100 mb-2" onClick={() => window.open('https://calendly.com/your-calendar', '_blank')}>Choose This Template</button>
                    <button className="btn btn-outline-secondary w-100" onClick={() => setSelectedTemplate(null)}>Continue Browsing</button>
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
