'use client';

import React from 'react';
import { CheckCircle, Zap, Users, Settings, ArrowRight, Calendar } from 'lucide-react';

import CTASection from '../../Gallery/CTASection';

import FAQSection from '../../Gallery/FAQSection';

const CustomSolutionsPage = () => {
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
            <span className="d-block text-primary">Tailored to Your Business</span>
          </h1>
          <p className="lead text-secondary mx-auto mb-4" style={{ maxWidth: '700px' }}>
            Don&apos;t see your industry listed? No problem. We create bespoke websites and technology 
            solutions that perfectly match your unique business requirements.
          </p>
          <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">
            <a
              href="https://calendly.com/your-calendar"
              target="_blank"
              className="btn btn-primary btn-lg d-inline-flex align-items-center"
              rel="noopener noreferrer"
            >
              <Calendar className="me-2" size={18} />
              Book Free Consultation
            </a>
            <button className="btn btn-outline-primary btn-lg d-inline-flex align-items-center">
              View Portfolio
              <ArrowRight className="ms-2" size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-5 bg-white">
        <div className="container">
          <h2 className="h2 fw-bold text-center mb-5">Our Custom Development Process</h2>
          <div className="row row-cols-1 row-cols-md-4 g-4 text-center">
            {["Discovery", "Strategy", "Development", "Launch"].map((step, index) => (
              <div className="col" key={step}>
                <div className="mb-3">
                  <div className="bg-primary bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center mx-auto" style={{ width: '64px', height: '64px' }}>
                    <span className="fw-bold text-primary fs-4">{index + 1}</span>
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
          <h2 className="h2 fw-bold text-center mb-5">What We Can Build for You</h2>
          <div className="row g-4">
            {[
              { icon: <Zap className="text-primary" />, title: "Custom Websites", desc: "Bespoke website design and development tailored to your brand and business objectives." },
              { icon: <Users className="text-primary" />, title: "Web Applications", desc: "Complex web applications with custom functionality, user management, and integrations." },
              { icon: <Settings className="text-primary" />, title: "System Integration", desc: "Connect your existing tools and systems for seamless workflow automation." },
              { icon: <CheckCircle className="text-primary" />, title: "E-commerce Solutions", desc: "Complete online stores with payment processing, inventory management, and analytics." },
              { icon: <Calendar className="text-primary" />, title: "Booking Systems", desc: "Advanced scheduling and booking systems with automated notifications and payments." },
              { icon: <ArrowRight className="text-primary" />, title: "And Much More", desc: "Whatever your business needs, we have the expertise to create the perfect solution." }
            ].map((service, i) => (
              <div className="col-md-4" key={i}>
                <div className="bg-white rounded shadow-sm p-4 h-100">
                  <div className="bg-primary bg-opacity-10 rounded d-flex align-items-center justify-content-center mb-3" style={{ width: '48px', height: '48px' }}>
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
          <h2 className="h2 fw-bold text-center mb-5">Why Choose Our Custom Solutions?</h2>
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

      <FAQSection faqs={faqs} />

      <CTASection 
        title="Ready to Discuss Your Custom Solution?"
        subtitle="Let's explore how we can create the perfect technology solution for your unique business needs."
        buttonText="Schedule Your Free Custom Consultation"
      />
    </div>
  );
};

export default CustomSolutionsPage;
