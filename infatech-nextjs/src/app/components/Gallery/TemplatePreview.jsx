'use client';
import React from 'react';
import { Star, Phone, Mail, MapPin } from 'lucide-react';

const TemplatePreview = ({ templateId, templateName }) => {
  const renderPreview = () => {
    switch (templateId) {
      case 1:
        return (
          <div className="bg-white">
            <header className="bg-warning-subtle border-bottom border-warning">
              <div className="container py-3">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center">
                    <div className="bg-warning text-white rounded-circle d-flex justify-content-center align-items-center me-3" style={{ width: '40px', height: '40px' }}>
                      <span className="fw-bold">AB</span>
                    </div>
                    <h5 className="text-warning m-0">Artisan Bakehouse</h5>
                  </div>
                  <nav className="d-none d-md-flex gap-3">
                    <a href="#" className="text-warning text-decoration-none">Home</a>
                    <a href="#" className="text-warning text-decoration-none">Menu</a>
                    <a href="#" className="text-warning text-decoration-none">Custom Cakes</a>
                    <a href="#" className="text-warning text-decoration-none">About</a>
                    <a href="#" className="text-warning text-decoration-none">Contact</a>
                  </nav>
                </div>
              </div>
            </header>

            <section className="position-relative text-center bg-warning-subtle py-5">
              <h1 className="display-4 text-warning fw-bold">Handcrafted with Love</h1>
              <p className="lead text-warning">Fresh baked goods made daily with the finest ingredients</p>
              <div className="d-flex justify-content-center gap-3 mt-4">
                <button className="btn btn-warning text-white">Order Online</button>
                <button className="btn btn-outline-warning">Custom Cakes</button>
              </div>
            </section>

            <section className="py-5">
              <div className="container text-center">
                <h2 className="fw-bold mb-4">Today&apos;s Fresh Selections</h2>
                <div className="row g-4">
                  <div className="col-md-4">
                    <div className="bg-warning-subtle rounded p-4">
                      <div className="rounded-circle bg-warning mx-auto mb-3" style={{ width: '80px', height: '80px' }}></div>
                      <h5 className="text-warning">Artisan Breads</h5>
                      <p className="text-warning">Sourdough, whole grain, and specialty breads baked fresh daily</p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="bg-warning-subtle rounded p-4">
                      <div className="rounded-circle bg-warning mx-auto mb-3" style={{ width: '80px', height: '80px' }}></div>
                      <h5 className="text-warning">Custom Cakes</h5>
                      <p className="text-warning">Beautiful custom cakes for weddings, birthdays, and special events</p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="bg-warning-subtle rounded p-4">
                      <div className="rounded-circle bg-warning mx-auto mb-3" style={{ width: '80px', height: '80px' }}></div>
                      <h5 className="text-warning">Pastries &amp; More</h5>
                      <p className="text-warning">Croissants, muffins, cookies, and seasonal specialties</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="py-5 bg-warning-subtle">
              <div className="container text-center">
                <h2 className="fw-bold mb-4">What Our Customers Say</h2>
                <div className="bg-white p-4 rounded shadow">
                  <div className="d-flex justify-content-center mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={20} className="text-warning" fill="currentColor" />
                    ))}
                  </div>
                  <p className="mb-2">
                    &quot;The best bakery in town! Their sourdough is incredible and the custom cake for my daughter&apos;s birthday was absolutely perfect.&quot;
                  </p>
                  <p className="fw-bold text-warning">- Sarah Johnson</p>
                </div>
              </div>
            </section>

            <footer className="bg-warning text-white py-5">
              <div className="container">
                <div className="row">
                  <div className="col-md-4">
                    <h5 className="fw-bold">Artisan Bakehouse</h5>
                    <p>Serving fresh, handcrafted baked goods since 1995</p>
                  </div>
                  <div className="col-md-4">
                    <h5 className="fw-bold">Contact Info</h5>
                    <ul className="list-unstyled">
                      <li className="d-flex align-items-center"><Phone size={16} className="me-2" /> (555) 123-4567</li>
                      <li className="d-flex align-items-center"><Mail size={16} className="me-2" /> hello@artisanbakehouse.com</li>
                      <li className="d-flex align-items-center"><MapPin size={16} className="me-2" /> 123 Baker Street, City</li>
                    </ul>
                  </div>
                  <div className="col-md-4">
                    <h5 className="fw-bold">Hours</h5>
                    <ul className="list-unstyled">
                      <li>Mon-Fri: 6:00 AM - 7:00 PM</li>
                      <li>Saturday: 7:00 AM - 6:00 PM</li>
                      <li>Sunday: 8:00 AM - 4:00 PM</li>
                    </ul>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        );
      case 2: // Fresh Market Pro
      return (
        <div className="bg-white">
          {/* Header */}
          <header className="bg-light border-bottom border-success">
            <div className="container py-3">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <div className="rounded-circle bg-success d-flex justify-content-center align-items-center text-white me-3" style={{ width: '40px', height: '40px' }}>
                    FM
                  </div>
                  <span className="h5 fw-bold text-success">Fresh Market Pro</span>
                </div>
                <nav className="d-none d-md-flex gap-3">
                  <a href="#" className="text-success text-decoration-none">Home</a>
                  <a href="#" className="text-success text-decoration-none">Products</a>
                  <a href="#" className="text-success text-decoration-none">Delivery</a>
                  <a href="#" className="text-success text-decoration-none">About</a>
                  <a href="#" className="text-success text-decoration-none">Contact</a>
                </nav>
                <button className="btn btn-success">Order Online</button>
              </div>
            </div>
          </header>
      
          {/* Hero */}
          <section className="position-relative bg-success bg-opacity-10 py-5">
            <div className="container text-center">
              <h1 className="display-5 fw-bold text-success mb-3">Your Neighborhood Fresh Market</h1>
              <p className="lead text-success mb-4">Fresh groceries, local produce, and daily essentials delivered to your door</p>
              <div className="d-flex justify-content-center gap-3">
                <button className="btn btn-success px-4">Shop Now</button>
                <button className="btn btn-outline-success px-4">Schedule Delivery</button>
              </div>
            </div>
          </section>
      
          {/* Product Categories */}
          <section className="py-5">
            <div className="container">
              <h2 className="text-center fw-bold mb-5">Shop by Category</h2>
              <div className="row g-4">
                {['Fresh Produce', 'Dairy & Eggs', 'Pantry Staples', 'Household'].map((item, idx) => (
                  <div key={idx} className="col-md-3">
                    <div className="text-center p-4 bg-light rounded shadow-sm h-100">
                      <div className="rounded-circle bg-success bg-opacity-25 mx-auto mb-3" style={{ width: '64px', height: '64px' }}></div>
                      <h5 className="fw-semibold text-success">{item}</h5>
                      <p className="text-muted small">
                        {item === 'Fresh Produce' ? 'Fruits &amp; Vegetables' :
                         item === 'Dairy & Eggs' ? 'Fresh Daily' :
                         item === 'Pantry Staples' ? 'Rice, Flour, Spices' :
                         'Cleaning &amp; Personal Care'}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
      
          {/* Footer */}
          <footer className="bg-success text-white py-5">
            <div className="container">
              <div className="row g-4">
                <div className="col-md-4">
                  <h5 className="fw-bold">Fresh Market Pro</h5>
                  <p className="small">Your trusted neighborhood grocery store since 2010</p>
                </div>
                <div className="col-md-4">
                  <h6 className="fw-bold">Contact</h6>
                  <ul className="list-unstyled small">
                    <li>📞 (555) 987-6543</li>
                    <li>✉️ info@freshmarketpro.com</li>
                    <li>📍 456 Market Street</li>
                  </ul>
                </div>
                <div className="col-md-4">
                  <h6 className="fw-bold">Follow Us</h6>
                  <div className="d-flex gap-3">
                    <i className="bi bi-facebook fs-5"></i>
                    <i className="bi bi-instagram fs-5"></i>
                    <i className="bi bi-twitter fs-5"></i>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      );      
      default:
        return (
          <div className="bg-light d-flex align-items-center justify-content-center" style={{ height: '400px' }}>
            <p className="text-muted">Template preview not available</p>
          </div>
        );
    }
  };

  return (
    <div className="h-100 overflow-auto bg-light">
      <div className="sticky-top bg-white border-bottom px-3 py-2 z-3">
        <h6 className="fw-bold m-0">{templateName} - Interactive Preview</h6>
        <p className="text-muted small mb-0">Scroll to explore the full website design</p>
      </div>
      <div className="scale-90" style={{ transformOrigin: 'top center' }}>
        {renderPreview()}
      </div>
    </div>
  );
};

export default TemplatePreview;
