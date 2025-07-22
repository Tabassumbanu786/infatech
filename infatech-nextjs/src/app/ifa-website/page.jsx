'use client'
import React, { useEffect, useRef, useState } from 'react';
import PricingTimeline from './PricingTimeline';
import EverythingYouNeed from './EverythingYouNeed';
import WhyItMatters from './WhyItMatters';
import FeatureGrid from './FeatureGrid'
import TemplateGallery from '../components/Gallery/TemplateGallery';


import GoLiveTimeline from './GoLiveTimeline';
import FAQSection from './faq';
import Head from 'next/head';
import { ArrowRight, Clock, Shield, Star, Globe } from 'lucide-react';
import CalendlyPopupButton from '../components/Calendly/CalendlyPopupButton';
import FloatingCalendlyButton from '../components/FloatingCalendlyButton/FloatingCalendlyButton';
const LandingPage = () => {
  const [showCalendly, setShowCalendly] = useState(false);

  const [ctaVisible, setCtaVisible] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const ctaRef = useRef(null);
  const templates = [
    {
        id: 1,
        name: "Kirana SmartKart",
        description: "Modern design for local Kirana stores with online ordering, digital payments, and delivery tracking.",
        image: "https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg",
        features: [
            "Online Ordering",
            "UPI/Wallet Payments",
            "Live Delivery Tracking",
            "Daily Essentials Listing",
            "Mobile-Optimized Layout",
            "Multi-language Support"
        ],
        style: "Modern"
    },
    {
        id: 2,
        name: "Ghar Ki Dukaan",
        description: "Friendly, local-first design that builds trust and emphasizes personal customer service.",
        image: "https://images.pexels.com/photos/7363163/pexels-photo-7363163.jpeg",
        features: [
            "Neighborhood Delivery Info",
            "Personal Message from Store Owner",
            "Cash on Delivery Option",
            "Popular Products Section",
            "Festive Offers Banner",
            "WhatsApp Ordering"
        ],
        style: "Community"
    },
    {
        id: 3,
        name: "QuickPick Kirana",
        description: "Fast and lightweight template ideal for stores with high daily turnover and express checkout needs.",
        image: "https://images.pexels.com/photos/9218663/pexels-photo-9218663.jpeg",
        features: [
            "Fast Checkout",
            "Low Data Usage",
            "Pincode-based Availability",
            "Favorites & Reorder Option",
            "Clean UI for Essentials",
            "Cart Reminder"
        ],
        style: "Minimal"
    },
    {
        id: 4,
        name: "Bazaar Classic",
        description: "Colorful, culturally-rooted design that blends traditional shopping vibes with digital convenience.",
        image: "https://images.pexels.com/photos/6397651/pexels-photo-6397651.jpeg",
        features: [
            "Regional Language Toggle",
            "Traditional Patterns & Fonts",
            "Support for Phone Orders",
            "Category-wise Listing",
            "Seasonal Discounts Section",
            "Family-run Story Page"
        ],
        style: "Traditional"
    },
    {
        id: 5,
        name: "NextGen Kirana",
        description: "Advanced, tech-enabled store layout for modern Kirana stores that want full automation.",
        image: "https://images.pexels.com/photos/12935094/pexels-photo-12935094.jpeg",
        features: [
            "AI Product Suggestions",
            "Inventory Auto-Sync",
            "Customer Dashboard",
            "Subscription for Milk/Groceries",
            "Sales Analytics",
            "POS Integration"
        ],
        style: "Tech-Forward"
    },
    {
      id: 6,
      name: "IFA Website",
      description: "Modern design for local Kirana stores with online ordering, digital payments, and delivery tracking.",
      image: "https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg",
      features: [
          "Personalized planning for every life stage",
          "Goal-based investment strategies",
          "Regular portfolio reviews",
          "Transparent, jargon-free advice",
          "Hassle-free online service & updates"
      ],
      style: "Modern"
  }
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


  const settings = {
    dots: false,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };

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
  onClick={() => setSelectedTemplate(templates[5])}
>
  GET A FIRST HAND FEEL
</button>
            </div>
          </div>
        </section>
        <WhyItMatters/>
        <EverythingYouNeed />
        {/* <MustHavePages /> */}
        <FeatureGrid/>
        <PricingTimeline />
        <GoLiveTimeline />
        <div >
        <TemplateGallery  
          industry="Kirana Stores" 
          templates={templates} 
          selectedTemplate={selectedTemplate}
          setSelectedTemplate={setSelectedTemplate}
        />
      </div>
        {/* <FAQSection /> */}

        {/* CTA Section */}
        <section  ref={ctaRef} className="py-5 text-center text-black" >
          <div className="container">
            <div className="mb-4">
              <h2 className="fw-bold display-6 mb-3 text-black">Ready to Build Your Professional Online Presence?</h2>
              <p className="lead text-black mb-4">
              Let your website do the work while you focus on advising clients.
              </p>
            </div>

            <div className="d-flex flex-column flex-sm-row text-black justify-content-center gap-3 mb-4">
              {/* <button
                className="btn fw-semibold px-4 py-2 shadow rounded-pill"
                style={{
                  backgroundColor: '#fff',
                  color: '#ea580c',
                  border: '2px solid #fff',
                }}
              >
                Start Your Website Now <ArrowRight size={18} className="ms-2" />
              </button> */}

              <CalendlyPopupButton
                url="https://calendly.com/tabassumbanumusa/website-strategy-call"
                buttonText="Click here to get started"
                style={{
                  backgroundColor: '#059669',
                  color: '#ffffff',
                  fontWeight: 600,
                  padding: '0.75rem 1.5rem',
                  borderRadius: '0.5rem',
                  fontSize: '1rem',
                  border: 'none'
                }}
              />
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
        <FloatingCalendlyButton hide={ctaVisible} />
      </main>
    </>
  );
};

export default LandingPage;
