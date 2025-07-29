'use client'
import React, { useEffect, useRef, useState } from 'react';
import PricingTimeline from './PricingTimeline';
import EverythingYouNeed from './EverythingYouNeed';
import WhyItMatters from './WhyItMatters';
import FeatureGrid from './FeatureGrid'
import CtaSection from './CtaSection';
import TemplateGallery from '../components/Gallery/TemplateGallery';
import TemplatePreview from '../components/Gallery/TemplatePreview';


import GoLiveTimeline from './GoLiveTimeline';
import FloatingCalendlyButton from '../components/FloatingCalendlyButton/FloatingCalendlyButton';
import whyItMattersConfig from '../Data/industries/whyItMattersConfig'
import everythingYouNeedConfig from '../Data/industries/everythingYouNeedConfig'
import packageFeaturesConfig from '../Data/industries/packageFeaturesConfig'
import heroSectionConfig from '../Data/industries/heroSectionConfig'



const LandingPage = () => {
  const [showCalendly, setShowCalendly] = useState(false);
  const industry = 'ifa'; // This can come from URL param, CMS, or user choice


  const [ctaVisible, setCtaVisible] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState(null);
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
    //   ,
    //   {
    //     id: 6,
    //     name: "IFA Website",
    //     subtitle: "Showcase your credentials, share market insights, and offer tools like SIP calculators to engage clients.",
    //     description: "Modern design for local Kirana stores with online ordering, digital payments, and delivery tracking.",
    //     image: "https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg",
    //     features: [
    //         "Personalized planning for every life stage",
    //         "Goal-based investment strategies",
    //         "Regular portfolio reviews",
    //         "Transparent, jargon-free advice",
    //         "Hassle-free online service & updates"
    //     ],
    //     style: "Modern",
    //     path: "/industries/custom-solution",
    //     innerimage:"canvas.png"
    // }
  ];
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setCtaVisible(entry.isIntersecting);
      },
      {

        root: null,
        threshold: 0.2,
      }
    );

    if (ctaRef.current) {
      observer.observe(ctaRef.current);
    }

    return () => {
      if (ctaRef.current) {
        observer.unobserve(ctaRef.current);
      }
    };
  }, []);

  const config = heroSectionConfig[industry];

  const settings = {
    dots: false,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };
  // console.log('Features:', everythingYouNeedConfig[industry]);
  return (

    <>
      <main className="ifa-landing-page">

        {/* Hero Slider Section */}
        <section className="position-relative overflow-hidden py-5 text-center" style={{
          background: 'linear-gradient(to bottom right, #fff7ed, #ffeef0, #ffe9f3)',
        }}>
          <div className="position-absolute top-0 start-0 w-100 h-100" style={{
            backgroundImage: 'repeating-linear-gradient(45deg, rgba(0,0,0,0.05) 0, rgba(0,0,0,0.05) 1px, transparent 1px, transparent 16px)',
            zIndex: 0,
            opacity: 0.05
          }}></div>

          <div className="container position-relative">
            <div className="d-flex justify-content-center mb-4">
              <img src="/assets/images/logo_small_r.png" alt="Infatech Logo" style={{ height: '100px', objectFit: 'contain' }} />
            </div>



            <h1 className="display-4 fw-bold text-dark mb-4 lh-tight">
              {/* INFATECH IFA<br />
              <span style={{
                background: 'linear-gradient(to right, #ea580c, #dc2626)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}> */}
              Your Own Independent Financial Advisor Website
              {/* </span> */}
            </h1>

            <p className="lead text-secondary mb-5 mx-auto" style={{ maxWidth: '720px' }}>
              Your clients are online — your practice should be too.
            </p>

            <div className="d-flex flex-column flex-sm-row justify-content-center align-items-center gap-3 mb-4">
              <div className="px-4 py-2 rounded-pill border border-success bg-white shadow-sm d-flex align-items-center text-success">
                <i className="bi bi-check-circle-fill me-2"></i>
                <span className="fw-semibold">7-Day Delivery</span>
              </div>
              <div className="px-4 py-2 rounded-pill border border-warning bg-white shadow-sm d-flex align-items-center text-warning">
                <i className="bi bi-shield-fill-check me-2"></i>
                <span className="fw-semibold">Zero Hassle Setup</span>
              </div>
              <div className="px-4 py-2 rounded-pill border border-danger bg-white shadow-sm d-flex align-items-center text-danger">
                <i className="bi bi-award-fill me-2"></i>
                <span className="fw-semibold">Professional Design</span>
              </div>
            </div>

            <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">
              <button
                className="btn btn-lg px-4 py-3 text-white fw-semibold shadow-lg"
                style={{
                  background: 'linear-gradient(to right, #ea580c, #dc2626)',
                  transition: 'all 0.2s ease-in-out'
                }}
                onClick={() => setSelectedTemplate(templates[0])}
              >
                GET A FIRST HAND FEEL
              </button>
            </div>
          </div>
        </section>


        <WhyItMatters data={whyItMattersConfig[industry]} />
        <EverythingYouNeed features={everythingYouNeedConfig[industry]} />
        <FeatureGrid features={packageFeaturesConfig[industry]} />

        <PricingTimeline />
        <GoLiveTimeline />
        <div >
          {/* <TemplateGallery
            industry="Kirana Stores"
            templates={templates}
            selectedTemplate={selectedTemplate}
            setSelectedTemplate={setSelectedTemplate}
          /> */}

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
        <CtaSection ref={ctaRef} />
        <FloatingCalendlyButton hide={ctaVisible} />
      </main>
    </>
  );
};

export default LandingPage;
