// src/app/industries/financial-advisors/page.js

'use client';

import React, { useEffect, useRef, useState } from 'react';
import TemplatePreview from '../../components/Gallery/TemplatePreview';

import Layout from "../kirana/layout";
import WhyItMatters from '../../ifa-website/WhyItMatters';
import FeatureGrid from '../../ifa-website/FeatureGrid';
import whyItMattersConfig from '../../Data/industries/whyItMattersConfig'
import EverythingYouNeed from '../../ifa-website/EverythingYouNeed';
import everythingYouNeedConfig from '../../Data/industries/everythingYouNeedConfig'
import packageFeaturesConfig from '../../Data/industries/packageFeaturesConfig'
import PricingTimeline from '../../ifa-website/PricingTimeline';
import GoLiveTimeline from '../../ifa-website/GoLiveTimeline';
import CtaSection from '../../ifa-website/CtaSection';

export default function KiranaPage() {
  const industry = 'kirana';
  const ctaRef = useRef(null);
  const templates = [
    {
      id: 1,
      name: "Financial Advisors – AdvisorConnect",
      subtitle: "Showcase your credentials, share market insights, and offer tools like SIP calculators to engage clients.",
      description: "Tailored online presence for modern-day financial advisors and wealth planners.",
      image: "https://images.pexels.com/photos/4386375/pexels-photo-4386375.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: ["Client Dashboard", "Service Pages", "Regulatory Disclaimers"],
      style: "Professional",
      path: "/ifa-website",
      innerimage: "ifa.png"
    },
    {
      id: 2,
      name: "Bakers – BakeSmart",
      subtitle: "Display your menu, take custom cake orders, and share daily specials with an easy-to-manage platform.",
      description: "Warm, elegant designs for bakeries that want to look as good as they taste.",
      image: "https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: ["Custom Cake Forms", "Seasonal Specials", "Recipe Journal"],
      style: "Elegant",
      path: "/industries/bakers",
      innerimage: "bakers1.png"
    },
    {
      id: 6,
      name: "E-commerce – ShopLaunch",
      subtitle: "Set up your online store, manage inventory, and accept payments with a ready-to-scale eCommerce platform.",
      description: "A powerful, minimal e-commerce template that sells your products — fast.",
      image: "https://images.pexels.com/photos/7667442/pexels-photo-7667442.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: ["Product Display + Cart", "Secure Payments", "Mobile Optimized"],
      style: "E-commerce",
      path: "/custom-solutions",
      innerimage: "bakers1.png"
    },
    {
      id: 3,
      name: "Grocery Stores – GroceryHub",
      subtitle: "Enable local customers to browse stock, place online orders, and track deliveries effortlessly.",
      description: "Clean, local, and built for modern kirana stores and grocery businesses.",
      image: "https://images.pexels.com/photos/264537/pexels-photo-264537.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: ["Inventory Dashboard", "Daily Stock Updates", "Local Delivery Tracker"],
      style: "Modern",
      path: "/industries/kirana",
      innerimage: "kiranashop.png"
    },

    {
      id: 4,
      name: "Coaches – CoachPro",
      subtitle: "Highlight your programs, manage bookings, and build authority with testimonials and resources.",
      description: "Peaceful, polished design for coaches, clinics, and fitness professionals.",
      image: "https://images.pexels.com/photos/3822621/pexels-photo-3822621.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: ["Service Blocks", "Calendar Integration", "Team Profiles"],
      style: "Wellness",
      path: "/industries/coaches",
      innerimage: "coaches.png"

    },

    {
      id: 5,
      name: "Custom Solutions – CustomEdge",
      subtitle: "From booking systems to niche marketplaces, we build platforms tailored to unique business models.",
      description: "Bold, modern layouts for unique businesses and special requirements.",
      image: "https://images.pexels.com/photos/16129724/pexels-photo-16129724.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: ["Custom Layouts", "E-commerce Support", "Flexible Blocks"],
      style: "Creative",
      path: "/industries/custom-solution",
      innerimage: "canvas.png"
    }
  ];
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  
  return (
    
    <Layout>
       {/* <KiranaPage/>      */}
       <section className="position-relative overflow-hidden text-center pt-3 pb-5 mt-0" style={{ background: 'linear-gradient(to bottom right, #fff7ed, #fee2e2)' }}>

<div className="container">
  <div className="mb-4">
    <div className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3" style={{ backgroundColor: '#ff3b00', width: '64px', height: '64px' }}>
      <i className="bi bi-egg-fill fs-4 text-white"></i>
    </div>
    <h1 className="display-4 fw-bold text-dark">Digital Solutions <span style={{ color: '#ff3b00' }}>for Grocery</span></h1>
    <p className="lead text-muted">Bring your kirana or organic grocery store online — so your customers can order fresh produce anytime, from anywhere.</p>
    <div className="rounded p-3 d-inline-flex align-items-center gap-2" >
      <button
        className="btn btn-lg px-4 py-3 text-white fw-semibold shadow-lg"
        style={{
          background: 'linear-gradient(to right, #ea580c, #dc2626)',
          transition: 'all 0.2s ease-in-out'
        }}
        onClick={() => setSelectedTemplate(templates[3])}
      >
        GET A FIRST HAND FEEL
      </button>
    </div>
  </div>
</div>
</section>

       <WhyItMatters data={whyItMattersConfig[industry]} />
      <EverythingYouNeed features={everythingYouNeedConfig[industry]} />
      <FeatureGrid features={packageFeaturesConfig[industry]} />
      <PricingTimeline />
      <GoLiveTimeline />
      <CtaSection ref={ctaRef} />
      <div >
        {/* Modal Preview when selectedTemplate is set */}
        {selectedTemplate && (
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

                <div className="text-center">
                  <a
                    href={`https://wa.me/7021710954?text=${encodeURIComponent(
                      "Hi, I’m interested in getting a quote for a website/app development project. Please guide me through the next steps."
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn text-white fw-semibold w-100"
                    style={{ backgroundColor: '#ff3b00' }}
                  >
                    GET A QUOTE NOW
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>

     </Layout>
      
      
      
  );
}
