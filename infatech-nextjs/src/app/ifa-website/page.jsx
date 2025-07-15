'use client'
import React, { useEffect, useRef, useState } from 'react';
import data from '../Data/hero.json';
import IFAfaq from '../components/Faq/IFAfaq';
import Slider from "react-slick";
import parse from 'html-react-parser';
import Link from "next/link";
import Image from "next/image";

import Services2 from '../components/Services/Services2';
import IfaServices from './ifaServices';
import MustHavePages from './MustHavePages';
import PricingTimeline from './PricingTimeline';
import EverythingYouNeed from './EverythingYouNeed';
import WhyItMatters from './WhyItMatters';
import FeatureGrid from './FeatureGrid'

import GoLiveTimeline from './GoLiveTimeline';
import FAQSection from './faq';
import Head from 'next/head';
import { ArrowRight, Clock, Shield, Star, Globe } from 'lucide-react';
import CalendlyPopupButton from '../components/Calendly/CalendlyPopupButton';
import FloatingCalendlyButton from '../components/FloatingCalendlyButton/FloatingCalendlyButton';
const LandingPage = () => {
  const [showCalendly, setShowCalendly] = useState(false);

  const [ctaVisible, setCtaVisible] = useState(false);
  const ctaRef = useRef(null);

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

          <div className="container position-relative" style={{ zIndex: 1 }}>
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
                Your Own IFA Website
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
  onClick={() => window.open('https://ifa.infatech.in/', '_blank')}
>
  GET A FIRST HAND FEEL
</button>

              {/* <button className="btn btn-lg px-4 py-3 fw-semibold text-dark bg-white border shadow-sm">
              <a
                href="https://ifa.infatech.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-lg px-4 py-3 fw-semibold text-dark bg-white border shadow-sm"
              >
                View Examples
              </a>

              </button> */}
            </div>
          </div>
        </section>
        <WhyItMatters/>
        <EverythingYouNeed />
        {/* <MustHavePages /> */}
        <FeatureGrid/>
        <PricingTimeline />
        <GoLiveTimeline />
        {/* <FAQSection /> */}

        {/* CTA Section */}
        <section  ref={ctaRef} className="py-5 text-center text-white" style={{ background: 'linear-gradient(to bottom right, #ea580c, #dc2626)' }}>
          <div className="container">
            <div className="mb-4">
              <h2 className="fw-bold display-6 mb-3 text-white">Ready to Build Your Professional Online Presence?</h2>
              <p className="lead text-white mb-4">
              Let your website do the work while you focus on advising clients.
              </p>
            </div>

            <div className="d-flex flex-column flex-sm-row justify-content-center gap-3 mb-4">
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
                
              />
            </div>

            <div className="d-flex justify-content-center gap-4 text-white small mt-4 flex-wrap">
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
