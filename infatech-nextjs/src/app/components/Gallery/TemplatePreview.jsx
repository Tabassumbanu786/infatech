import React from 'react';
import { Star, Phone, Mail, MapPin } from 'lucide-react';

const TemplatePreview = ({ templateId, templateName }) => {
  const renderPreview = () => {
    switch (templateId) {
      case 1: // Artisan Bakehouse
        return (
          <div className="bg-white">
            {/* Header */}
            <header className="bg-warning bg-opacity-25 border-bottom border-warning">
              <div className="container py-3">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center">
                    <div className="rounded-circle bg-warning text-white d-flex justify-content-center align-items-center me-3" style={{ width: '40px', height: '40px' }}>
                      <strong>AB</strong>
                    </div>
                    <h5 className="mb-0 text-warning">Artisan Bakehouse</h5>
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

            {/* Hero */}
            <section className="position-relative bg-gradient py-5" style={{ background: 'linear-gradient(to right, #fff8e1, #ffecb3)' }}>
              <div className="container position-relative z-2 text-center">
                <h1 className="display-5 fw-bold text-warning">Handcrafted with Love</h1>
                <p className="lead text-warning">Fresh baked goods made daily with the finest ingredients</p>
                <div className="d-flex justify-content-center gap-3 mt-4">
                  <button className="btn btn-warning text-white">Order Online</button>
                  <button className="btn btn-outline-warning">Custom Cakes</button>
                </div>
              </div>
              <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-10" />
            </section>

            {/* Featured Products */}
            <section className="py-5 bg-white">
              <div className="container text-center">
                <h2 className="mb-5 fw-bold">Today's Fresh Selections</h2>
                <div className="row g-4">
                  {[
                    { title: 'Artisan Breads', desc: 'Sourdough, whole grain, and specialty breads baked fresh daily' },
                    { title: 'Custom Cakes', desc: 'Beautiful custom cakes for weddings, birthdays, and special events' },
                    { title: 'Pastries & More', desc: 'Croissants, muffins, cookies, and seasonal specialties' },
                  ].map((item, i) => (
                    <div className="col-md-4" key={i}>
                      <div className="bg-light p-4 rounded text-center h-100">
                        <div className="rounded-circle bg-warning bg-opacity-50 mx-auto mb-3" style={{ width: '80px', height: '80px' }} />
                        <h5 className="text-warning">{item.title}</h5>
                        <p className="text-muted">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Testimonials */}
            <section className="py-5 bg-warning bg-opacity-25">
              <div className="container text-center">
                <h2 className="mb-5 fw-bold">What Our Customers Say</h2>
                <div className="bg-white shadow-sm rounded p-4 mx-auto" style={{ maxWidth: 600 }}>
                  <div className="mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={20} className="text-warning me-1" fill="currentColor" />
                    ))}
                  </div>
                  <p className="fst-italic text-muted">
                    "The best bakery in town! Their sourdough is incredible and the custom cake for my daughter's birthday was absolutely perfect."
                  </p>
                  <p className="fw-semibold text-warning mb-0">- Sarah Johnson</p>
                </div>
              </div>
            </section>

            {/* Footer */}
            <footer className="bg-warning text-white py-5">
              <div className="container">
                <div className="row">
                  <div className="col-md-4">
                    <h5>Artisan Bakehouse</h5>
                    <p>Serving fresh, handcrafted baked goods since 1995</p>
                  </div>
                  <div className="col-md-4">
                    <h5>Contact Info</h5>
                    <ul className="list-unstyled">
                      <li><Phone size={16} className="me-2" /> (555) 123-4567</li>
                      <li><Mail size={16} className="me-2" /> hello@artisanbakehouse.com</li>
                      <li><MapPin size={16} className="me-2" /> 123 Baker Street, City</li>
                    </ul>
                  </div>
                  <div className="col-md-4">
                    <h5>Hours</h5>
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
                          {item === 'Fresh Produce' ? 'Fruits & Vegetables' :
                           item === 'Dairy & Eggs' ? 'Fresh Daily' :
                           item === 'Pantry Staples' ? 'Rice, Flour, Spices' :
                           'Cleaning & Personal Care'}
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
        case 3: // Creative Portfolio
        return (
          <div className="bg-white">
            {/* Header */}
            <header className="bg-primary-subtle border-bottom border-primary">
              <div className="container py-3">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center">
                    <div className="rounded-circle bg-primary text-white d-flex justify-content-center align-items-center me-3" style={{ width: '40px', height: '40px' }}>
                      <span className="fw-bold">CP</span>
                    </div>
                    <h5 className="text-primary m-0">Creative Portfolio</h5>
                  </div>
                  <nav className="d-none d-md-flex gap-3">
                    <a href="#" className="text-primary text-decoration-none">Home</a>
                    <a href="#" className="text-primary text-decoration-none">Projects</a>
                    <a href="#" className="text-primary text-decoration-none">Skills</a>
                    <a href="#" className="text-primary text-decoration-none">Contact</a>
                  </nav>
                </div>
              </div>
            </header>
      
            {/* Hero */}
            <section className="position-relative text-center bg-primary-subtle py-5">
              <h1 className="display-4 text-primary fw-bold">Bringing Ideas to Life</h1>
              <p className="lead text-primary">Showcasing creative work that blends design and technology</p>
              <div className="d-flex justify-content-center gap-3 mt-4">
                <button className="btn btn-primary text-white">View Projects</button>
                <button className="btn btn-outline-primary">Contact Me</button>
              </div>
            </section>
      
            {/* Project Highlights */}
            <section className="py-5">
              <div className="container text-center">
                <h2 className="fw-bold mb-4">Featured Projects</h2>
                <div className="row g-4">
                  {['Website Design', 'App UI/UX', 'Brand Identity'].map((title, idx) => (
                    <div key={idx} className="col-md-4">
                      <div className="bg-primary-subtle rounded p-4 h-100">
                        <div className="rounded-circle bg-primary mx-auto mb-3" style={{ width: '80px', height: '80px' }}></div>
                        <h5 className="text-primary">{title}</h5>
                        <p className="text-primary">Innovative design work focused on clean layouts and user experience</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
      
            {/* Footer */}
            <footer className="bg-primary text-white py-5">
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <h5 className="fw-bold">Creative Portfolio</h5>
                    <p>Crafting beautiful and functional digital experiences.</p>
                  </div>
                  <div className="col-md-6 text-md-end">
                    <p>📧 hello@creativeportfolio.com</p>
                    <p>📍 Based in Mumbai, India</p>
                    <div className="d-flex justify-content-md-end gap-3">
                      <i className="bi bi-linkedin fs-5"></i>
                      <i className="bi bi-behance fs-5"></i>
                      <i className="bi bi-dribbble fs-5"></i>
                    </div>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        );
        case 4: // E-commerce Hub
        return (
          <div className="bg-white">
            {/* Header */}
            <header className="bg-danger-subtle border-bottom border-danger">
              <div className="container py-3">
                <div className="d-flex justify-content-between align-items-center">
                  <h5 className="text-danger fw-bold">E-Shop Central</h5>
                  <nav className="d-none d-md-flex gap-3">
                    <a href="#" className="text-danger text-decoration-none">Home</a>
                    <a href="#" className="text-danger text-decoration-none">Shop</a>
                    <a href="#" className="text-danger text-decoration-none">Deals</a>
                    <a href="#" className="text-danger text-decoration-none">Cart</a>
                    <a href="#" className="text-danger text-decoration-none">Contact</a>
                  </nav>
                </div>
              </div>
            </header>
      
            {/* Hero */}
            <section className="position-relative text-center bg-danger-subtle py-5">
              <h1 className="display-4 text-danger fw-bold">Shop the Latest Trends</h1>
              <p className="lead text-danger">Affordable fashion, gadgets, and more—all in one place</p>
              <div className="d-flex justify-content-center gap-3 mt-4">
                <button className="btn btn-danger text-white">Start Shopping</button>
                <button className="btn btn-outline-danger">View Deals</button>
              </div>
            </section>
      
            {/* Product Highlights */}
            <section className="py-5">
              <div className="container text-center">
                <h2 className="fw-bold mb-4">Best Sellers</h2>
                <div className="row g-4">
                  {['Smart Watch', 'Wireless Earbuds', 'Casual Sneakers'].map((product, idx) => (
                    <div key={idx} className="col-md-4">
                      <div className="bg-danger-subtle rounded p-4 h-100">
                        <div className="rounded-circle bg-danger mx-auto mb-3" style={{ width: '80px', height: '80px' }}></div>
                        <h5 className="text-danger">{product}</h5>
                        <p className="text-danger">Top-rated and trending among customers</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
      
            {/* Footer */}
            <footer className="bg-danger text-white py-5">
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <h5 className="fw-bold">E-Shop Central</h5>
                    <p>Delivering happiness to your doorstep since 2020</p>
                  </div>
                  <div className="col-md-6 text-md-end">
                    <p>📞 1800-ESHOP</p>
                    <p>📧 support@eshopcentral.com</p>
                    <p>📍 500 Market Street, Bangalore</p>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        );
        case 5: // Health & Wellness
        return (
          <div className="bg-white">
            {/* Header */}
            <header className="bg-info-subtle border-bottom border-info">
              <div className="container py-3">
                <div className="d-flex justify-content-between align-items-center">
                  <h5 className="text-info fw-bold">WellLife Studio</h5>
                  <nav className="d-none d-md-flex gap-3">
                    <a href="#" className="text-info text-decoration-none">Home</a>
                    <a href="#" className="text-info text-decoration-none">Programs</a>
                    <a href="#" className="text-info text-decoration-none">Nutrition</a>
                    <a href="#" className="text-info text-decoration-none">Coaches</a>
                    <a href="#" className="text-info text-decoration-none">Contact</a>
                  </nav>
                </div>
              </div>
            </header>
      
            {/* Hero Section */}
            <section className="text-center bg-info-subtle py-5">
              <h1 className="display-4 text-info fw-bold">Achieve Mind-Body Balance</h1>
              <p className="lead text-info">Holistic wellness plans crafted by certified experts</p>
              <div className="d-flex justify-content-center gap-3 mt-4">
                <button className="btn btn-info text-white">Join a Program</button>
                <button className="btn btn-outline-info">Meet Our Coaches</button>
              </div>
            </section>
      
            {/* Services */}
            <section className="py-5">
              <div className="container text-center">
                <h2 className="fw-bold mb-4">Our Services</h2>
                <div className="row g-4">
                  {['Yoga & Meditation', 'Personal Training', 'Nutrition Plans'].map((service, idx) => (
                    <div key={idx} className="col-md-4">
                      <div className="bg-info-subtle rounded p-4 h-100">
                        <div className="rounded-circle bg-info mx-auto mb-3" style={{ width: '80px', height: '80px' }}></div>
                        <h5 className="text-info">{service}</h5>
                        <p className="text-info">Tailored for all levels to improve physical and mental health</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
      
            {/* Footer */}
            <footer className="bg-info text-white py-5">
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <h5 className="fw-bold">WellLife Studio</h5>
                    <p>Your companion in sustainable health and vitality</p>
                  </div>
                  <div className="col-md-6 text-md-end">
                    <p>📞 1800-WELLNESS</p>
                    <p>📧 hello@welllife.com</p>
                    <p>📍 101 Zen Lane, Pune</p>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        );
      
      default:
        return (
          <div className="bg-light d-flex justify-content-center align-items-center" style={{ height: '300px' }}>
            <p className="text-muted">Template preview not available</p>
          </div>
        );
    }
  };

  return (
    <div className="bg-light overflow-auto" style={{ maxHeight: '80vh' }}>
      <div className="sticky-top bg-white border-bottom px-3 py-2">
        <h5 className="mb-1">{templateName} - Interactive Preview</h5>
        <p className="text-muted mb-0 small">Scroll to explore the full website design</p>
      </div>
      <div className="p-2">
        {renderPreview()}
      </div>
    </div>
  );
};

export default TemplatePreview;
