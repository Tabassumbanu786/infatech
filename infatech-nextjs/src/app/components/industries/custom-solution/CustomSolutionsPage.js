'use client';

import React, { useEffect, useRef, useState } from 'react';

import { CheckCircle, Zap, Users, Settings, ArrowRight, Calendar } from 'lucide-react';

import CTASection from '../../Gallery/CTASection';

import FAQSection from '../../Gallery/FAQSection';
import CtaSection from '../../../ifa-website/CtaSection'
import TemplatePreview from '../../Gallery/TemplatePreview';

const CustomSolutionsPage = () => {
  const industry = 'custom';
  const ctaRef = useRef(null);
  const [selectedTemplate, setSelectedTemplate] = useState(null);
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
  const faqs = [
    {
      question: "How long does a custom solution take to develop?",
      answer: "Timeline varies based on complexity, but typically ranges from 4-12 weeks. We provide detailed project timelines during the consultation phase."
    },
    {
      question: "Do you work with industries not listed on your site?",
      answer: "Absolutely! We have experience across many industries and can adapt our solutions to meet any business need."
    },
    {
      question: "What's included in the consultation?",
      answer: "A comprehensive business analysis, technology assessment, custom solution proposal, and detailed project timeline - all completely free."
    },
    {
      question: "Can you integrate with our existing systems?",
      answer: "Yes, we specialize in creating solutions that work seamlessly with your existing tools and workflows."
    },
    {
      question: "Do you provide ongoing support after launch?",
      answer: "Yes, we offer various support packages including maintenance, updates, training, and technical assistance."
    }
  ];

  return (
    <div className="min-vh-100">
      {/* Hero Section */}
      <section className="py-5 bg-light text-center">
        <div className="container">
          <h1 className="display-4 fw-bold text-dark mb-3">
            Custom Solutions
            <span className="d-block" style={{ color: '#ff3b00' }}>Tailored to Your Business</span>
          </h1>
          <p className="lead text-secondary mx-auto mb-4" style={{ maxWidth: '700px' }}>
            Don&apos;t see your industry listed? No problem. We create bespoke websites and technology 
            solutions that perfectly match your unique business requirements.
          </p>
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
            {/* <button className="btn btn-outline-primary btn-lg d-inline-flex align-items-center">
              View Portfolio
              <ArrowRight className="ms-2" size={18} />
            </button> */}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-5 bg-white">
        <div className="container">
          <h2 className="h2 fw-bold text-center text-black mb-5">Our Custom Development Process</h2>
          <div className="row row-cols-1 row-cols-md-4 g-4 text-center">
            {["Discovery", "Strategy", "Development", "Launch"].map((step, index) => (
              <div className="col" key={step}>
                <div className="mb-3">
                  <div className="bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center mx-auto" style={{ backgroundColor:'#ff3b00',width: '64px', height: '64px' }}>
                    <span className="fw-bold fs-4"  style={{ color: 'white'}} >{index + 1}</span>
                  </div>
                </div>
                <h5 className="fw-semibold text-dark mb-2">{step}</h5>
                <p className="text-secondary">
                  {step === "Discovery" && "We deep-dive into your business needs, goals, and challenges to understand exactly what you need."}
                  {step === "Strategy" && "We create a comprehensive strategy and technical specification tailored to your requirements."}
                  {step === "Development" && "Our expert team builds your solution with regular updates and feedback loops throughout."}
                  {step === "Launch" && "We handle the complete launch process and provide ongoing support to ensure success."}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="h2 fw-bold text-center text-black mb-5">What We Can Build for You</h2>
          <div className="row g-4">
            {[
              { icon: <Zap  style={{ color: 'white' }} />, title: "Custom Websites", desc: "Bespoke website design and development tailored to your brand and business objectives." },
              { icon: <Users style={{ color: 'white' }}/>, title: "Web Applications", desc: "Complex web applications with custom functionality, user management, and integrations." },
              { icon: <Settings style={{ color: 'white' }} />, title: "System Integration", desc: "Connect your existing tools and systems for seamless workflow automation." },
              { icon: <CheckCircle style={{ color: 'white' }} />, title: "E-commerce Solutions", desc: "Complete online stores with payment processing, inventory management, and analytics." },
              { icon: <Calendar style={{ color: 'white' }} />, title: "Booking Systems", desc: "Advanced scheduling and booking systems with automated notifications and payments." },
              { icon: <ArrowRight style={{ color: 'white' }}/>, title: "And Much More", desc: "Whatever your business needs, we have the expertise to create the perfect solution." }
            ].map((service, i) => (
              <div className="col-md-4" key={i}>
                <div className="bg-white rounded shadow-sm p-4 h-100">
                  <div className="bg-opacity-10 rounded d-flex align-items-center justify-content-center mb-3" style={{  backgroundColor: '#ff3b00' ,width: '48px', height: '48px' }}>
                    {service.icon}
                  </div>
                  <h5 className="fw-semibold text-dark mb-2">{service.title}</h5>
                  <p className="text-secondary">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-5 bg-white">
        <div className="container">
          <h2 className="h2 fw-bold text-center text-black mb-5">Why Choose Our Custom Solutions?</h2>
          <div className="row g-4">
            {[ 
              ["Industry Expertise", "Years of experience across multiple industries and business models."],
              ["Scalable Solutions", "Built to grow with your business and adapt to changing needs."],
              ["Ongoing Support", "Comprehensive support and maintenance packages available."],
              ["Modern Technology", "Latest technologies and best practices for optimal performance."],
              ["Transparent Pricing", "Clear, upfront pricing with no hidden costs or surprises."],
              ["Fast Delivery", "Efficient development process with regular milestone deliveries."]
            ].map(([title, desc], i) => (
              <div className="col-md-6" key={i}>
                <div className="d-flex">
                  <CheckCircle className="text-success me-3 mt-1" />
                  <div>
                    <h6 className="fw-semibold text-dark mb-1">{title}</h6>
                    <p className="text-secondary mb-0">{desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <FAQSection faqs={faqs} /> */}
      <CtaSection ref={ctaRef} />
      {/* <CTASection 
        title="Ready to Discuss Your Custom Solution?"
        subtitle="Let's explore how we can create the perfect technology solution for your unique business needs."
        buttonText="Schedule Your Free Custom Consultation"
      /> */}
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
    </div>
  );
};

export default CustomSolutionsPage;
