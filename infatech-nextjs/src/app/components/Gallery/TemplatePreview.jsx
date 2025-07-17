"use client";

// Bootstrap version of Artisan Bakehouse layout
import React from 'react';
import { Phone, Mail, MapPin, Star } from 'lucide-react';

const TemplatePreview = ({ templateId, templateName }) => {
  return (
    <div className="bg-white">
      {/* Header */}
      <header className="bg-warning bg-opacity-10 border-bottom border-warning">
        <div className="container py-3">
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <div className="bg-warning text-white rounded-circle d-flex justify-content-center align-items-center me-3" style={{ width: 40, height: 40 }}>
                <strong>AB</strong>
              </div>
              <span className="h5 fw-bold text-warning">{templateName || 'Artisan Bakehouse'}</span>
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

      {/* Hero Section */}
      <section className="position-relative" style={{ height: '400px', backgroundImage: 'url(https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=1200)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-50"></div>
        <div className="container h-100 d-flex align-items-center justify-content-center position-relative text-center text-white">
          <div>
            <h1 className="display-4 fw-bold">Handcrafted with Love</h1>
            <p className="lead text-light">Fresh baked goods made daily with the finest ingredients</p>
            <div className="d-flex justify-content-center gap-3 mt-4">
              <button className="btn btn-warning px-4">Order Online</button>
              <button className="btn btn-outline-warning px-4 text-white border-white">Custom Cakes</button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-5 bg-white">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">Today&apos;s Fresh Selections</h2>
          <div className="row g-4">
            {[{
              title: 'Artisan Breads',
              desc: 'Sourdough, whole grain, and specialty breads baked fresh daily',
              img: 'https://images.pexels.com/photos/209206/pexels-photo-209206.jpeg?auto=compress&cs=tinysrgb&w=400'
            }, {
              title: 'Custom Cakes',
              desc: 'Beautiful custom cakes for weddings, birthdays, and special events',
              img: 'https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=400'
            }, {
              title: 'Pastries & More',
              desc: 'Croissants, muffins, cookies, and seasonal specialties',
              img: 'https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg?auto=compress&cs=tinysrgb&w=400'
            }].map((item, i) => (
              <div key={i} className="col-md-4">
                <div className="bg-warning bg-opacity-10 rounded p-4 text-center h-100">
                  <img src={item.img} alt={item.title} className="img-fluid rounded shadow mb-3" style={{ height: 200, objectFit: 'cover' }} />
                  <h5 className="fw-bold text-warning mb-2">{item.title}</h5>
                  <p className="text-muted small mb-0">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-5">
            <h3 className="fw-bold text-center mb-4">Signature Desserts</h3>
            <div className="row g-4">
              {[{
                title: 'Chocolate Cupcakes',
                desc: 'Rich chocolate with cream frosting',
                price: '$3.50 each',
                img: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=400'
              }, {
                title: 'Butter Croissants',
                desc: 'Flaky, buttery French pastries',
                price: '$2.75 each',
                img: 'https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=400'
              }, {
                title: 'Glazed Donuts',
                desc: 'Hand-glazed with premium ingredients',
                price: '$2.25 each',
                img: 'https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=400'
              }, {
                title: 'Custom Cakes',
                desc: 'Made to order for special occasions',
                price: 'From $45',
                img: 'https://images.pexels.com/photos/1028714/pexels-photo-1028714.jpeg?auto=compress&cs=tinysrgb&w=400'
              }].map((item, i) => (
                <div key={i} className="col-md-3">
                  <div className="card h-100 border-0 shadow-sm">
                    <img src={item.img} className="card-img-top" alt={item.title} style={{ height: 160, objectFit: 'cover' }} />
                    <div className="card-body">
                      <h6 className="fw-bold text-warning">{item.title}</h6>
                      <p className="text-muted small mb-1">{item.desc}</p>
                      <p className="fw-semibold text-dark mb-0">{item.price}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-warning bg-opacity-10 py-5">
        <div className="container text-center">
          <h2 className="fw-bold mb-4">What Our Customers Say</h2>
          <div className="bg-white p-5 rounded shadow mx-auto" style={{ maxWidth: 700 }}>
            <div className="d-flex justify-content-center mb-3">
              {[...Array(5)].map((_, i) => <Star key={i} className="text-warning" size={20} />)}
            </div>
            <p className="text-muted mb-3">"The best bakery in town! Their sourdough is incredible and the custom cake for my daughter&apos;s birthday was absolutely perfect."</p>
            <p className="fw-semibold text-warning mb-0">- Sarah Johnson</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-warning text-white py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-4">
              <h5 className="fw-bold">Artisan Bakehouse</h5>
              <p className="small">Serving fresh, handcrafted baked goods since 1995</p>
            </div>
            <div className="col-md-4">
              <h6 className="fw-semibold">Contact Info</h6>
              <ul className="list-unstyled small">
                <li className="d-flex align-items-center"><Phone className="me-2" size={16} /> (555) 123-4567</li>
                <li className="d-flex align-items-center"><Mail className="me-2" size={16} /> hello@artisanbakehouse.com</li>
                <li className="d-flex align-items-center"><MapPin className="me-2" size={16} /> 123 Baker Street, City</li>
              </ul>
            </div>
            <div className="col-md-4">
              <h6 className="fw-semibold">Hours</h6>
              <p className="small mb-1">Mon-Fri: 6:00 AM - 7:00 PM</p>
              <p className="small mb-1">Saturday: 7:00 AM - 6:00 PM</p>
              <p className="small">Sunday: 8:00 AM - 4:00 PM</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TemplatePreview;
