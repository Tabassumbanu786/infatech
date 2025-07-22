// Bootstrap version of BakersPage (converted from Tailwind)

import Head from 'next/head';
import React, { useState } from 'react';
import { Clock, EggFill } from 'react-bootstrap-icons';
import TemplateGallery from '../../Gallery/TemplateGallery';


const BakersPage = () => {
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
    <div className="container-fluid px-0">
      <Head>
        <title>Digital Solutions for Bakers</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"
          rel="stylesheet"
        />
      </Head>

      {/* Hero Section */}
      <section className="py-5 text-center bg-light bg-gradient" style={{ background: 'linear-gradient(to bottom right, #fff7ed, #fee2e2)' }}>
        <div className="container">
          <div className="mb-4">
            <div className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3" style={{ backgroundColor: '#ff3b00', width: '64px', height: '64px' }}>
              <i className="bi bi-egg-fill fs-4 text-white"></i>
            </div>
            <h1 className="display-4 fw-bold text-dark">Digital Solutions <span style={{ color: '#ff3b00' }}>for Bakers</span></h1>
            <p className="lead text-muted">Specialized website and technology solutions designed specifically for bakeries, patisseries, and confectionery businesses.</p>
            <div className="rounded p-3 d-inline-flex align-items-center gap-2" style={{ backgroundColor: 'rgba(255, 59, 0, 0.25)' }}>
              <i className="bi bi-clock-history" style={{ color: '#ff3b00' }}></i>
              <span className="fw-semibold" style={{ color: '#ff3b00' }}>Coming Soon - We&apos;re Baking Something Special!</span>
            </div>
          </div>
        </div>
      </section>

      {/* What We're Preparing */}
      <section className="py-5 bg-white">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">What We&apos;re Preparing for Bakers</h2>
          <div className="row g-4">
            {["Online Ordering System", "Inventory Management", "Social Media Integration", "Customer Loyalty Program"].map((title, idx) => (
              <div className="col-md-6" key={idx}>
                <div className="p-4 rounded" style={{ backgroundColor: 'rgba(255, 59, 0, 0.1)' }}>
                  <h5 style={{ color: '#ff3b00' }}>{title}</h5>
                  <p className="text-muted">
                    {title === 'Online Ordering System' && 'Complete e-commerce solution for custom cake orders, daily specials, and advance bookings with integrated payment processing.'}
                    {title === 'Inventory Management' && 'Smart inventory tracking for ingredients, automated reorder points, and integration with supplier systems.'}
                    {title === 'Social Media Integration' && 'Automatic posting of daily specials, behind-the-scenes content, and customer testimonials across all platforms.'}
                    {title === 'Customer Loyalty Program' && 'Digital punch cards, birthday specials, and reward systems to keep customers coming back for more.'}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <TemplateGallery 
          industry="Fresh Market Pro" 
          templates={templates} 
          selectedTemplate={selectedTemplate}
          setSelectedTemplate={setSelectedTemplate}
        />
      {/* Interest Form */}
      {/* <section className="py-5 bg-light">
        <div className="container text-center">
          <h2 className="fw-bold mb-3">Be the First to Know</h2>
          <p className="text-muted mb-4">Join our waitlist to get early access to our baker-specific solutions and receive exclusive pre-launch pricing.</p>
          <div className="bg-white p-4 rounded shadow mx-auto" style={{ maxWidth: '500px' }}>
            <form className="text-start">
              <div className="mb-3">
                <input type="text" placeholder="Your Bakery Name" className="form-control" />
              </div>
              <div className="mb-3">
                <input type="email" placeholder="Your Email Address" className="form-control" />
              </div>
              <button type="submit" className="btn w-100 text-white fw-semibold" style={{ backgroundColor: '#ff3b00' }}>Join the Waitlist</button>
            </form>
          </div>
        </div>
      </section> */}

      {/* <CTASection 
        title="Need a Custom Solution Now?"
        subtitle="Can't wait for our baker-specific package? We can create a custom solution tailored to your bakery's needs."
        buttonText="Schedule Custom Consultation"
      /> */}
    </div>
  );
};

export default BakersPage;
