
"use client";
import React, { useState } from 'react';
import { Eye, ArrowLeft, ArrowRight } from 'lucide-react';
import TemplatePreview from './TemplatePreview';

const TemplateGallery = ({
  industry,
  templates,
  selectedTemplate: externalSelectedTemplate,
  setSelectedTemplate: externalSetSelectedTemplate
}) => {
  const [internalSelectedTemplate, setInternalSelectedTemplate] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const selectedTemplate = externalSelectedTemplate !== undefined ? externalSelectedTemplate : internalSelectedTemplate;
  const setSelectedTemplate = externalSetSelectedTemplate || setInternalSelectedTemplate;

  // Updated template data with new naming and descriptions
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
    <div className="container py-5">
      <div className="text-center mb-5">
        <h2 className="fw-bold">
          {industry === "All Industries" ?
            "Ready-Made Business Platforms for Every Industry" :
            `Website Template Options for ${industry}`}
        </h2>
        <p className="text-muted">
          {industry === "All Industries" ?
            "Customizable. Launch-ready. Delivered in just 7 days." :
            `Choose from professionally designed templates for ${industry.toLowerCase()}.`}
        </p>
      </div>

      <div className="row g-4">
        {displayTemplates.map((template) => (
          <div className="col-md-4" key={template.id}>
            <div className="card h-100 shadow-sm border-0" onClick={() => setSelectedTemplate(template)}>
              <div className="position-relative">
                <img
                  src={template.image}
                  alt={template.name}
                  className="card-img-top"
                  style={{ height: '225px', objectFit: 'cover' }}
                />
                <div className="position-absolute top-0 end-0 m-2">
                  <span className="badge bg-primary">{template.style}</span>
                </div>
              </div>
              <div className="card-body">
                <h5 className="card-title fw-bold">{template.name}</h5>
                {template.subtitle && <p className="text-primary small mb-2">{template.subtitle}</p>}
                <p className="card-text text-muted small">{template.description}</p>
                <ul className="list-unstyled mt-3">
                  {template.features.slice(0, 3).map((feature, i) => (
                    <li key={i} className="d-flex align-items-center mb-1">
                      <span className="me-2 bg-success rounded-circle" style={{ width: '8px', height: '8px' }}></span>
                      <small className="text-muted">{feature}</small>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Preview */}
      {selectedTemplate && (
        <div
          className="modal fade show d-block"
          tabIndex="-1"
          role="dialog"
          style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
          onClick={() => setSelectedTemplate(null)}
        >
          <div
  className="modal-dialog modal-dialog-centered"
  role="document"
  style={{ maxWidth: '90%', width: '100%' }}
  onClick={(e) => e.stopPropagation()}
>

            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{selectedTemplate.name}</h5>
                <button type="button" className="btn-close" onClick={() => setSelectedTemplate(null)}></button>
              </div>
              <div className="modal-body d-flex">
                <div className="flex-fill border-end" style={{ height: '80vh', overflowY: 'auto' }}>
                  <TemplatePreview templateId={selectedTemplate.id} templateName={selectedTemplate.name} />
                </div>
                {/* Right side - Template Details */}
                <div className="col-md-4 p-4 overflow-auto" style={{ maxWidth: "20rem" }}>
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <h4 className="fw-bold text-dark mb-0">{selectedTemplate.name}</h4>
                    <button
                      onClick={() => setSelectedTemplate(null)}
                      className="btn btn-link text-muted p-0"
                    >

                    </button>
                  </div>

                  {industry === "All Industries" && (selectedTemplate).subtitle && (
                    <p className="text-primary fw-semibold mb-3">
                      {selectedTemplate.subtitle}
                    </p>
                  )}

                  <p className="text-muted mb-4">{selectedTemplate.description}</p>

                  <div className="mb-5">
                    <h6 className="fw-semibold text-dark mb-2">Features Included:</h6>
                    <ul className="list-unstyled">
                      {selectedTemplate.features.map((feature, idx) => (
                        <li key={idx} className="d-flex align-items-center mb-2">
                          <div
                            className="bg-success rounded-circle me-2"
                            style={{ width: "8px", height: "8px" }}
                          ></div>
                          <span className="text-muted">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-5">
                    <h6 className="fw-semibold text-dark mb-2">Style:</h6>
                    <span className="badge bg-primary bg-opacity-10 text-primary fw-medium">
                      {selectedTemplate.style}
                    </span>
                  </div>

                  <div className="d-grid gap-2">
                    <button
                      onClick={() => window.open('https://calendly.com/your-calendar', '_blank')}
                      className="btn btn-primary fw-semibold"
                    >
                      Choose This Template
                    </button>
                    <button
                      onClick={() => setSelectedTemplate(null)}
                      className="btn btn-light fw-semibold text-dark"
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
  );
};

export default TemplateGallery;



// Bootstrap version of TemplateGallery (JSX only)  working code for templates
// 'use client'
// import React, { useState } from 'react';
// import { Eye, ArrowLeft, ArrowRight } from 'lucide-react';
// import TemplatePreview from './TemplatePreview';

// const TemplateGallery = ({ industry, templates }) => {
//   const [selectedTemplate, setSelectedTemplate] = useState(null);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const updatedTemplates = [
//     {
//       id: 1,
//       name: "Sugar & Script",
//       subtitle: "Bakehouse Elegance",
//       description: "Warm, elegant design for bakeries that want to look as good as they taste.",
//       image: "https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=800",
//       features: ["Custom Cake Forms", "Seasonal Specials", "Recipe Journal"],
//       style: "Elegant"
//     },
//     {
//       id: 2,
//       name: "HarvestCart",
//       subtitle: "Grocery Go Digital",
//       description: "Clean, local, and built for modern kirana stores and grocery businesses.",
//       image: "https://images.pexels.com/photos/264537/pexels-photo-264537.jpeg?auto=compress&cs=tinysrgb&w=800",
//       features: ["Inventory Dashboard", "Daily Stock Updates", "Local Delivery Tracker"],
//       style: "Modern"
//     },
//     {
//       id: 3,
//       name: "Canvas Grid",
//       subtitle: "Creative Portfolio",
//       description: "Bold visuals. Smart structure. Perfect for designers, photographers & creators.",
//       image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800",
//       features: ["Interactive Galleries", "Video Reels", "Project Case Studies"],
//       style: "Creative"
//     },
//     {
//       id: 4,
//       name: "ShopStack",
//       subtitle: "Ecom Ready",
//       description: "A powerful, minimal e-commerce template that sells your products — fast.",
//       image: "https://images.pexels.com/photos/3769747/pexels-photo-3769747.jpeg?auto=compress&cs=tinysrgb&w=800",
//       features: ["Product Display + Cart", "Secure Payments", "Mobile Optimized"],
//       style: "E-commerce"
//     },
//     {
//       id: 5,
//       name: "ZenSpace",
//       subtitle: "Wellness & More",
//       description: "Peaceful, polished design for coaches, clinics, and fitness professionals.",
//       image: "https://images.pexels.com/photos/3822621/pexels-photo-3822621.jpeg?auto=compress&cs=tinysrgb&w=800",
//       features: ["Service Blocks", "Calendar Integration", "Team Profiles"],
//       style: "Wellness"
//     }
//   ];

//   const displayTemplates = industry === "All Industries" ? updatedTemplates : templates;

//   const nextTemplate = () => {
//     setCurrentIndex((prev) => (prev + 1) % displayTemplates.length);
//   };

//   const prevTemplate = () => {
//     setCurrentIndex((prev) => (prev - 1 + displayTemplates.length) % displayTemplates.length);
//   };

//   return (
//     <section className="py-5 bg-white">
//       <div className="container">
//         <div className="text-center mb-4">
//           <h2 className="h3 fw-bold">
//             {industry === "All Industries"
//               ? 'Ready-Made Business Platforms for Every Industry'
//               : `Website Template Options for ${industry}`}
//           </h2>
//           <p className="lead text-muted">
//             {industry === "All Industries"
//               ? 'Customizable. Launch-ready. Delivered in just 7 days.'
//               : `Choose from our professionally designed templates, each crafted specifically for ${industry.toLowerCase()}. All templates are fully customizable to match your brand and business needs.`}
//           </p>
//         </div>

//         <div className="row g-4 mb-5">
//           {displayTemplates.map((template) => (
//             <div className="col-md-4" key={template.id}>
//               <div className="card h-100 shadow-sm" onClick={() => setSelectedTemplate(template)}>
//                 <div className="position-relative">
//                   <img src={template.image} className="card-img-top" alt={template.name} style={{ height: '220px', objectFit: 'cover' }} />
//                   <span className="position-absolute top-0 end-0 bg-primary text-white px-2 py-1 rounded-start small">
//                     {template.style}
//                   </span>
//                 </div>
//                 <div className="card-body">
//                   <h5 className="card-title fw-bold text-dark">{template.name}</h5>
//                   {industry === "All Industries" && template.subtitle && (
//                     <p className="text-primary small fw-semibold mb-1">{template.subtitle}</p>
//                   )}
//                   <p className="text-muted small">{template.description}</p>
//                   <ul className="list-unstyled small">
//                     {template.features.slice(0, 3).map((feature, idx) => (
//                       <li key={idx} className="d-flex align-items-center mb-1">
//                         <span className="bg-success rounded-circle me-2" style={{ width: 8, height: 8, display: 'inline-block' }}></span>
//                         {feature}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="d-flex justify-content-center align-items-center gap-3 mb-5">
//           <button className="btn btn-outline-secondary rounded-circle p-2" onClick={prevTemplate}><ArrowLeft size={16} /></button>
//           <div className="d-flex gap-2">
//             {displayTemplates.map((_, i) => (
//               <span key={i} className={`rounded-circle d-inline-block`} style={{ width: 10, height: 10, backgroundColor: i === currentIndex ? '#0d6efd' : '#ccc' }}></span>
//             ))}
//           </div>
//           <button className="btn btn-outline-secondary rounded-circle p-2" onClick={nextTemplate}><ArrowRight size={16} /></button>
//         </div>

//         {/* Carousel navigation */}

//         <div className="d-flex justify-content-center align-items-center mb-5">

//           <button className="btn btn-outline-secondary me-3" onClick={prevTemplate}><ArrowLeft size={20} /></button>

//           {displayTemplates.map((_, index) => (

//             <button

//               key={index}

//               onClick={() => setCurrentIndex(index)}

//               className={`btn btn-sm rounded-circle mx-1 ${index === currentIndex ? 'btn-primary' : 'btn-secondary'}`}

//               style={{ width: '10px', height: '10px', padding: 0 }}

//             />

//           ))}

//           <button className="btn btn-outline-secondary ms-3" onClick={nextTemplate}><ArrowRight size={20} /></button>
//         </div>

//        {/* Modal */}
//        {selectedTemplate && (
//           <div className="modal fade show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }} onClick={() => setSelectedTemplate(null)}>
//             <div
//               className="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable"
//               style={{ width: '95vw', height: '95vh', maxWidth: '95vw' }}
//             >
//               <div className="modal-content">
//                 <div className="modal-body d-flex p-0">
//                   <div className="flex-grow-1 border-end">
//                     <TemplatePreview templateId={selectedTemplate.id} templateName={selectedTemplate.name} />
//                   </div>
//                   <div className="p-4" style={{ width: '30%', minWidth: '300px' }}>
//                     <div className="d-flex justify-content-between align-items-center mb-4">
//                       <h5 className="fw-bold mb-0">{selectedTemplate.name}</h5>
//                       <button className="btn-close" onClick={() => setSelectedTemplate(null)}></button>
//                     </div>
//                     {industry === "All Industries" && selectedTemplate.subtitle && (
//                       <p className="text-primary fw-semibold mb-3">{selectedTemplate.subtitle}</p>
//                     )}
//                     <p className="text-muted mb-4">{selectedTemplate.description}</p>
//                     <div className="mb-4">
//                       <h6 className="fw-bold mb-2">Features Included:</h6>
//                       <ul className="list-unstyled">
//                         {selectedTemplate.features.map((feature, idx) => (
//                           <li key={idx} className="mb-2 d-flex align-items-center">
//                             <span className="badge bg-success rounded-pill me-2" style={{ width: '6px', height: '6px' }}></span>
//                             {feature}
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                     <div className="mb-4">
//                       <h6 className="fw-bold mb-2">Style:</h6>
//                       <span className="badge bg-primary bg-opacity-10 text-primary px-2 py-1">{selectedTemplate.style}</span>
//                     </div>
//                     <div className="d-grid gap-2">
//                       <button className="btn btn-primary" onClick={() => window.open('https://calendly.com/your-calendar', '_blank')}>
//                         Choose This Template
//                       </button>
//                       <button className="btn btn-outline-secondary" onClick={() => setSelectedTemplate(null)}>
//                         Continue Browsing
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default TemplateGallery;