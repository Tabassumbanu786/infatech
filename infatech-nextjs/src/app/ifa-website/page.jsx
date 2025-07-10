'use client'
import React from 'react';
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
import GoLiveTimeline from './GoLiveTimeline';
import FAQSection from './faq';

import { ArrowRight, Clock, Shield, Star, Globe } from 'lucide-react';





const LandingPage = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };

  return (
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
          <div className="p-4 rounded-4 shadow-lg" style={{
            background: 'linear-gradient(to right, #ea580c, #dc2626)'
          }}>
            <i className="bi bi-globe fs-2 text-white"></i>
          </div>
        </div>

        <h1 className="display-4 fw-bold text-dark mb-4 lh-tight">
          INFATECH IFA<br />
          <span style={{
            background: 'linear-gradient(to right, #ea580c, #dc2626)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Website Starter Pack
          </span>
        </h1>

        <p className="lead text-secondary mb-5 mx-auto" style={{ maxWidth: '720px' }}>
          Complete, branded, trust-building website for Independent Financial Advisors.
          Look professional, attract clients, and showcase your expertise online.
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
          <button className="btn btn-lg px-4 py-3 text-white fw-semibold shadow-lg"
            style={{
              background: 'linear-gradient(to right, #ea580c, #dc2626)',
              transition: 'all 0.2s ease-in-out'
            }}>
            Get Started Now
            <i className="bi bi-arrow-right ms-2"></i>
          </button>
          <button className="btn btn-lg px-4 py-3 fw-semibold text-dark bg-white border shadow-sm">
            View Examples
          </button>
        </div>
      </div>
    </section>
    <EverythingYouNeed />
    <MustHavePages/>
    <PricingTimeline />
    <GoLiveTimeline />
    <FAQSection/>

    {/* CTA Section */}
<section className="py-5 text-center text-white" style={{ background: 'linear-gradient(to bottom right, #ea580c, #dc2626)' }}>
  <div className="container">
    <div className="mb-4">
      <h2 className="fw-bold display-6 mb-3 text-white">Ready to Build Your Professional Online Presence?</h2>
      <p className="lead text-white mb-4">
        Join hundreds of IFAs who have transformed their business with a professional website. <br />
        Get started today and be online in just 7 days.
      </p>
    </div>

    <div className="d-flex flex-column flex-sm-row justify-content-center gap-3 mb-4">
    <button
  className="btn fw-semibold px-4 py-2 shadow rounded-pill"
  style={{
    backgroundColor: '#fff',
    color: '#ea580c',
    border: '2px solid #fff',
  }}
>
  Start Your Website Now <ArrowRight size={18} className="ms-2" />
</button>


<button
  className="btn fw-semibold px-4 py-2 rounded-pill"
  style={{
    backgroundColor: 'transparent',
    color: '#fff',
    border: '2px solid #fff',
  }}
  onMouseOver={(e) => {
    e.currentTarget.style.backgroundColor = '#fff';
    e.currentTarget.style.color = '#ea580c';
  }}
  onMouseOut={(e) => {
    e.currentTarget.style.backgroundColor = 'transparent';
    e.currentTarget.style.color = '#fff';
  }}
>
  Schedule a Call
</button>

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

    </main>
  );
};

export default LandingPage;
