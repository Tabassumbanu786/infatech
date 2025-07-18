import React from 'react';
import { Clock, ShoppingCart, Store, Eye } from 'lucide-react';
import { useState } from 'react';
import CTASection from '../../Gallery/CTASection';
import TemplateGallery from '../../Gallery/TemplateGallery';

// interface Template {
//   id: number;
//   name: string;
//   description: string;
//   image: string;
//   features: string[];
//   style: string;
// }

const KiranaPage = () => {
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
        <div className="min-vh-100">
            {/* Hero Section */}
            <section className="py-4 bg-light">
                <div className="container text-center">
                    <div className="mb-4">
                        <div className="rounded-circle bg-success-subtle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '64px', height: '64px' }}>
                            <Store size={32} className="text-success" />
                        </div>
                        <h1 className="display-4 fw-bold">Digital Solutions <span className="text-success d-block">for Kirana Stores</span></h1>
                        <p className="lead text-muted mb-4">
                            Specialized website and technology solutions designed specifically for local grocery stores,
                            convenience stores, and neighborhood markets.
                        </p>
                        <button

                            className="btn btn-success btn-lg"

                            onClick={() => setSelectedTemplate(templates[1])}

                        >

                            <Eye className="me-2" size={18} />

                            View Kirana Website Demo

                        </button>

                    </div>
                </div>
            </section>

            {/* What's Coming */}
            <section className="py-5 bg-white">
                <div className="container">
                    <h2 className="text-center fw-bold mb-5 display-6">What We're Preparing for Kirana Stores</h2>
                    <div className="row g-4">
                        {[
                            {
                                title: 'Online Ordering System',
                                desc: 'Complete e-commerce solution for grocery orders, daily essentials, and home delivery with integrated payment processing and inventory tracking.'
                            },
                            {
                                title: 'Inventory Management',
                                desc: 'Smart inventory tracking for all products, automated reorder alerts, and real-time stock updates for customers.'
                            },
                            {
                                title: 'Local Delivery Network',
                                desc: 'Integrated delivery management system with route optimization, delivery tracking, and customer notifications.'
                            },
                            {
                                title: 'Customer Loyalty Program',
                                desc: 'Digital loyalty cards, reward points system, and personalized offers to keep customers coming back to your store.'
                            }
                        ].map((item, index) => (
                            <div className="col-md-6" key={index}>
                                <div className="bg-success-subtle p-4 rounded shadow-sm">
                                    <h5 className="fw-semibold text-success mb-3">{item.title}</h5>
                                    <p className="text-muted">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            <TemplateGallery 
        industry="HarvestCart" 
        templates={templates} 
        selectedTemplate={selectedTemplate}
        setSelectedTemplate={setSelectedTemplate}
      />

            {/* Interest Form */}
            {/* <section className="py-5 bg-light">
        <div className="container text-center">
          <h2 className="fw-bold mb-3">Be the First to Know</h2>
          <p className="text-muted mb-4">
            Join our waitlist to get early access to our kirana store solutions and 
            receive exclusive pre-launch pricing.
          </p>
          <div className="card shadow-sm p-4 mx-auto" style={{ maxWidth: '600px' }}>
            <form className="row g-3">
              <div className="col-12">
                <input type="text" placeholder="Your Store Name" className="form-control" />
              </div>
              <div className="col-12">
                <input type="email" placeholder="Your Email Address" className="form-control" />
              </div>
              <div className="col-12">
                <input type="text" placeholder="Your Location/Area" className="form-control" />
              </div>
              <div className="col-12">
                <button type="submit" className="btn btn-success w-100">Join the Waitlist</button>
              </div>
            </form>
          </div>
        </div>
      </section> */}

            <CTASection
                title="Need a Custom Solution Now?"
                subtitle="Can't wait for our kirana store package? We can create a custom solution tailored to your grocery business needs."
                buttonText="Schedule Custom Consultation"
            />
        </div>
    );
};

export default KiranaPage;
