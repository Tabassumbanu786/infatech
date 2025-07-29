

import React, { useState } from 'react';
import { Clock, ShoppingCart, Store, Eye, Calendar } from 'lucide-react';
// import Header from '../components/Header';
import CTASection from '../../Gallery/CTASection';
import TemplateGallery from '../../Gallery/TemplateGallery';

const EcommercePage = () => {
  const [selectedTemplate, setSelectedTemplate] = useState(null);

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
    }
];
return (
    <div style={{ minHeight: '100vh' }}>
      {/* <Header /> */}

      {/* Hero Section */}
      <section
        style={{
          background: 'linear-gradient(to bottom right, #ecfdf5, #d1fae5)',
          padding: '5rem 0'
        }}
      >
        <div className="container text-center">
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: '9999px',
              backgroundColor: '#d1fae5',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.5rem'
            }}
          >
            <Store size={32} style={{ color: '#059669' }} />
          </div>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#111827', marginBottom: '1.5rem' }}>
            Digital Solutions
            <div style={{ color: '#059669' }}>for Kirana Stores</div>
          </h1>
          <p
            style={{
              fontSize: '1.25rem',
              color: '#4b5563',
              marginBottom: '2rem',
              maxWidth: '48rem',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}
          >
            Specialized website and technology solutions designed specifically for local grocery stores, 
            convenience stores, and neighborhood markets.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
            <button
              onClick={() => window.open('https://calendly.com/your-calendar', '_blank')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '1rem 2rem',
                backgroundColor: '#059669',
                color: '#ffffff',
                fontWeight: 600,
                borderRadius: '0.5rem',
                border: 'none',
                transition: 'background-color 0.2s'
              }}
            >
              <Calendar style={{ marginRight: '0.5rem' }} size={20} />
              Book Free Consultation
            </button>
            <button
              onClick={() => setSelectedTemplate(templates[0])}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '1rem 2rem',
                backgroundColor: '#ffffff',
                color: '#059669',
                fontWeight: 600,
                borderRadius: '0.5rem',
                border: '2px solid #059669'
              }}
            >
              <Eye style={{ marginRight: '0.5rem' }} size={20} />
              View Kirana Website Demo
            </button>
          </div>
        </div>
      </section>
      {/* Modal for Template Preview */}
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
            padding: '1rem'
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '0.75rem',
              display: 'flex',
              width: '100%',
              height: '100%',
              maxWidth: '80rem',
              maxHeight: '90vh',
              overflow: 'hidden'
            }}
          >
            {/* Left Side - Template Preview */}
            <div
              style={{
                flex: 1,
                borderRight: '1px solid #e5e7eb',
                overflowY: 'auto',
                backgroundColor: '#f3f4f6'
              }}
            >
              <div style={{ minHeight: '100%', backgroundColor: '#ffffff' }}>
                {/* Header */}
                <header style={{ backgroundColor: '#059669', color: '#ffffff' }}>
                  <div
                    style={{
                      maxWidth: '72rem',
                      margin: '0 auto',
                      padding: '1rem',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <Store size={32} style={{ marginRight: '0.5rem' }} />
                      <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>HarvestCart</span>
                    </div>
                    <nav style={{ display: 'none', gap: '1.5rem' }} className="d-md-flex">
                      {['Home', 'Products', 'Delivery', 'About', 'Contact'].map((link, idx) => (
                        <a key={idx} href="#" style={{ color: '#d1fae5', textDecoration: 'none' }}>
                          {link}
                        </a>
                      ))}
                    </nav>
                    <button
                      style={{
                        backgroundColor: '#ffffff',
                        color: '#059669',
                        padding: '0.5rem 1rem',
                        borderRadius: '0.5rem',
                        fontWeight: '600',
                        border: 'none'
                      }}
                    >
                      Shop Now
                    </button>
                  </div>
                </header>

                {/* Hero */}
                <section
                  style={{
                    background: 'linear-gradient(to right, #ecfdf5, #d1fae5)',
                    padding: '5rem 1rem',
                    textAlign: 'center'
                  }}
                >
                  <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
                    <h1 style={{ fontSize: '2.75rem', fontWeight: 'bold', color: '#111827', marginBottom: '1.5rem' }}>
                      Fresh Groceries
                      <div style={{ color: '#059669' }}>Delivered Daily</div>
                    </h1>
                    <p
                      style={{
                        fontSize: '1.25rem',
                        color: '#4b5563',
                        marginBottom: '2rem',
                        maxWidth: '40rem',
                        marginLeft: 'auto',
                        marginRight: 'auto'
                      }}
                    >
                      Your neighborhood grocery store, now online. Fresh produce, pantry essentials, and local favorites delivered to your doorstep.
                    </p>
                    <button
                      style={{
                        backgroundColor: '#059669',
                        color: '#ffffff',
                        padding: '1rem 2rem',
                        fontSize: '1.125rem',
                        fontWeight: '600',
                        borderRadius: '0.5rem',
                        border: 'none'
                      }}
                    >
                      Start Shopping
                    </button>
                  </div>
                </section>

                {/* Categories */}
                <section style={{ padding: '4rem 1rem', backgroundColor: '#ffffff' }}>
                  <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
                    <h2
                      style={{
                        fontSize: '2rem',
                        fontWeight: 'bold',
                        textAlign: 'center',
                        color: '#111827',
                        marginBottom: '3rem'
                      }}
                    >
                      Shop by Category
                    </h2>
                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                        gap: '1.5rem'
                      }}
                    >
                      {['Fresh Produce', 'Dairy & Eggs', 'Meat & Seafood', 'Pantry Essentials'].map((category, idx) => (
                        <div
                          key={idx}
                          style={{
                            backgroundColor: '#ecfdf5',
                            borderRadius: '0.75rem',
                            padding: '1.5rem',
                            textAlign: 'center',
                            transition: 'box-shadow 0.2s'
                          }}
                        >
                          <div
                            style={{
                              width: 64,
                              height: 64,
                              backgroundColor: '#bbf7d0',
                              borderRadius: '9999px',
                              margin: '0 auto 1rem'
                            }}
                          />
                          <h6 style={{ fontWeight: 600, color: '#111827' }}>{category}</h6>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* Features */}
                <section style={{ padding: '4rem 1rem', backgroundColor: '#f9fafb' }}>
                  <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
                        gap: '2rem',
                        textAlign: 'center'
                      }}
                    >
                      {[
                        {
                          icon: <Clock size={32} style={{ color: '#059669' }} />,
                          title: 'Same Day Delivery',
                          desc: 'Order before 2 PM for same-day delivery'
                        },
                        {
                          icon: <ShoppingCart size={32} style={{ color: '#059669' }} />,
                          title: 'Quality Guarantee',
                          desc: 'Fresh products or your money back'
                        },
                        {
                          icon: <Store size={32} style={{ color: '#059669' }} />,
                          title: 'Local Community',
                          desc: 'Supporting local farmers and producers'
                        }
                      ].map((item, idx) => (
                        <div key={idx}>
                          <div
                            style={{
                              width: 64,
                              height: 64,
                              backgroundColor: '#d1fae5',
                              borderRadius: '9999px',
                              margin: '0 auto 1rem',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center'
                            }}
                          >
                            {item.icon}
                          </div>
                          <h5 style={{ fontWeight: 600, marginBottom: '0.5rem' }}>{item.title}</h5>
                          <p style={{ color: '#6b7280' }}>{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
              </div>
            </div>

            {/* Sidebar */}
            <div
              style={{
                width: '320px',
                padding: '1.5rem',
                overflowY: 'auto',
                backgroundColor: '#ffffff'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                <h4 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#111827' }}>
                  {selectedTemplate.name}
                </h4>
                <button
                  onClick={() => setSelectedTemplate(null)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#9ca3af',
                    fontSize: '1.5rem',
                    lineHeight: '1',
                    cursor: 'pointer'
                  }}
                >
                  ×
                </button>
              </div>

              <p style={{ color: '#6b7280', marginBottom: '1.5rem' }}>
                {selectedTemplate.description}
              </p>

              <div style={{ marginBottom: '2rem' }}>
                <h6 style={{ fontWeight: 600, color: '#111827', marginBottom: '1rem' }}>Features Included:</h6>
                <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
                  {selectedTemplate.features.map((feature, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
                      <span
                        style={{
                          width: 8,
                          height: 8,
                          backgroundColor: '#10b981',
                          borderRadius: '9999px',
                          marginRight: '0.75rem'
                        }}
                      ></span>
                      <span style={{ color: '#4b5563' }}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <h6 style={{ fontWeight: 600, color: '#111827', marginBottom: '0.5rem' }}>Style:</h6>
                <span
                  style={{
                    backgroundColor: '#d1fae5',
                    color: '#059669',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '9999px',
                    fontSize: '0.875rem',
                    fontWeight: 500
                  }}
                >
                  {selectedTemplate.style}
                </span>
              </div>

              <div style={{ display: 'grid', gap: '0.75rem' }}>
                <button
                  onClick={() => window.open('https://calendly.com/your-calendar', '_blank')}
                  style={{
                    width: '100%',
                    backgroundColor: '#059669',
                    color: '#ffffff',
                    fontWeight: 600,
                    padding: '0.75rem 1rem',
                    borderRadius: '0.5rem',
                    border: 'none'
                  }}
                >
                  Choose This Template
                </button>
                <button
                  onClick={() => setSelectedTemplate(null)}
                  style={{
                    width: '100%',
                    backgroundColor: '#f3f4f6',
                    color: '#374151',
                    fontWeight: 600,
                    padding: '0.75rem 1rem',
                    borderRadius: '0.5rem',
                    border: 'none'
                  }}
                >
                  Continue Browsing
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* CTA Section */}
      <section
        style={{
          padding: '4rem 1rem',
          backgroundColor: '#ffffff',
          textAlign: 'center'
        }}
      >
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2
            style={{
              fontSize: '2rem',
              fontWeight: 'bold',
              color: '#111827',
              marginBottom: '1rem'
            }}
          >
            Need a Custom Solution Now?
          </h2>
          <p
            style={{
              color: '#4b5563',
              fontSize: '1.125rem',
              marginBottom: '2rem'
            }}
          >
            Can&apos;t wait for our kirana store package? We can create a custom solution tailored to your grocery business needs.
          </p>
          <button
            onClick={() => window.open('https://calendly.com/your-calendar', '_blank')}
            style={{
              backgroundColor: '#059669',
              color: '#ffffff',
              fontWeight: 600,
              padding: '0.75rem 1.5rem',
              borderRadius: '0.5rem',
              fontSize: '1rem',
              border: 'none'
            }}
          >
            Schedule Custom Consultation
          </button>
        </div>
      </section>
    </div>
  );
};

export default EcommercePage;

