// "use client";

// // Bootstrap version of Artisan Bakehouse layout
// import React from 'react';
// import { Phone, Mail, MapPin, Star } from 'lucide-react';

// const TemplatePreview = ({ templateId, templateName }) => {
//   return (
//     <div className="bg-white">
//       {/* Header */}
//       <header className="bg-warning bg-opacity-10 border-bottom border-warning">
//         <div className="container py-3">
//           <div className="d-flex justify-content-between align-items-center">
//             <div className="d-flex align-items-center">
//               <div className="bg-warning text-white rounded-circle d-flex justify-content-center align-items-center me-3" style={{ width: 40, height: 40 }}>
//                 <strong>AB</strong>
//               </div>
//               <span className="h5 fw-bold text-warning">{templateName || 'Artisan Bakehouse'}</span>
//             </div>
//             <nav className="d-none d-md-flex gap-3">
//               <a href="#" className="text-warning text-decoration-none">Home</a>
//               <a href="#" className="text-warning text-decoration-none">Menu</a>
//               <a href="#" className="text-warning text-decoration-none">Custom Cakes</a>
//               <a href="#" className="text-warning text-decoration-none">About</a>
//               <a href="#" className="text-warning text-decoration-none">Contact</a>
//             </nav>
//           </div>
//         </div>
//       </header>

//       {/* Hero Section */}
//       <section className="position-relative" style={{ height: '400px', backgroundImage: 'url(https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=1200)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
//         <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-50"></div>
//         <div className="container h-100 d-flex align-items-center justify-content-center position-relative text-center text-white">
//           <div>
//             <h1 className="display-4 fw-bold">Handcrafted with Love</h1>
//             <p className="lead text-light">Fresh baked goods made daily with the finest ingredients</p>
//             <div className="d-flex justify-content-center gap-3 mt-4">
//               <button className="btn btn-warning px-4">Order Online</button>
//               <button className="btn btn-outline-warning px-4 text-white border-white">Custom Cakes</button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Featured Products */}
//       <section className="py-5 bg-white">
//         <div className="container">
//           <h2 className="text-center fw-bold mb-5">Today&apos;s Fresh Selections</h2>
//           <div className="row g-4">
//             {[{
//               title: 'Artisan Breads',
//               desc: 'Sourdough, whole grain, and specialty breads baked fresh daily',
//               img: 'https://images.pexels.com/photos/209206/pexels-photo-209206.jpeg?auto=compress&cs=tinysrgb&w=400'
//             }, {
//               title: 'Custom Cakes',
//               desc: 'Beautiful custom cakes for weddings, birthdays, and special events',
//               img: 'https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=400'
//             }, {
//               title: 'Pastries & More',
//               desc: 'Croissants, muffins, cookies, and seasonal specialties',
//               img: 'https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg?auto=compress&cs=tinysrgb&w=400'
//             }].map((item, i) => (
//               <div key={i} className="col-md-4">
//                 <div className="bg-warning bg-opacity-10 rounded p-4 text-center h-100">
//                   <img src={item.img} alt={item.title} className="img-fluid rounded shadow mb-3" style={{ height: 200, objectFit: 'cover' }} />
//                   <h5 className="fw-bold text-warning mb-2">{item.title}</h5>
//                   <p className="text-muted small mb-0">{item.desc}</p>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="mt-5">
//             <h3 className="fw-bold text-center mb-4">Signature Desserts</h3>
//             <div className="row g-4">
//               {[{
//                 title: 'Chocolate Cupcakes',
//                 desc: 'Rich chocolate with cream frosting',
//                 price: '$3.50 each',
//                 img: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=400'
//               }, {
//                 title: 'Butter Croissants',
//                 desc: 'Flaky, buttery French pastries',
//                 price: '$2.75 each',
//                 img: 'https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=400'
//               }, {
//                 title: 'Glazed Donuts',
//                 desc: 'Hand-glazed with premium ingredients',
//                 price: '$2.25 each',
//                 img: 'https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=400'
//               }, {
//                 title: 'Custom Cakes',
//                 desc: 'Made to order for special occasions',
//                 price: 'From $45',
//                 img: 'https://images.pexels.com/photos/1028714/pexels-photo-1028714.jpeg?auto=compress&cs=tinysrgb&w=400'
//               }].map((item, i) => (
//                 <div key={i} className="col-md-3">
//                   <div className="card h-100 border-0 shadow-sm">
//                     <img src={item.img} className="card-img-top" alt={item.title} style={{ height: 160, objectFit: 'cover' }} />
//                     <div className="card-body">
//                       <h6 className="fw-bold text-warning">{item.title}</h6>
//                       <p className="text-muted small mb-1">{item.desc}</p>
//                       <p className="fw-semibold text-dark mb-0">{item.price}</p>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Testimonials */}
//       <section className="bg-warning bg-opacity-10 py-5">
//         <div className="container text-center">
//           <h2 className="fw-bold mb-4">What Our Customers Say</h2>
//           <div className="bg-white p-5 rounded shadow mx-auto" style={{ maxWidth: 700 }}>
//             <div className="d-flex justify-content-center mb-3">
//               {[...Array(5)].map((_, i) => <Star key={i} className="text-warning" size={20} />)}
//             </div>
//             <p className="text-muted mb-3">&quot;The best bakery in town! Their sourdough is incredible and the custom cake for my daughter&apos;s birthday was absolutely perfect.&quot;</p>
//             <p className="fw-semibold text-warning mb-0">- Sarah Johnson</p>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-warning text-white py-5">
//         <div className="container">
//           <div className="row g-4">
//             <div className="col-md-4">
//               <h5 className="fw-bold">Artisan Bakehouse</h5>
//               <p className="small">Serving fresh, handcrafted baked goods since 1995</p>
//             </div>
//             <div className="col-md-4">
//               <h6 className="fw-semibold">Contact Info</h6>
//               <ul className="list-unstyled small">
//                 <li className="d-flex align-items-center"><Phone className="me-2" size={16} /> (555) 123-4567</li>
//                 <li className="d-flex align-items-center"><Mail className="me-2" size={16} /> hello@artisanbakehouse.com</li>
//                 <li className="d-flex align-items-center"><MapPin className="me-2" size={16} /> 123 Baker Street, City</li>
//               </ul>
//             </div>
//             <div className="col-md-4">
//               <h6 className="fw-semibold">Hours</h6>
//               <p className="small mb-1">Mon-Fri: 6:00 AM - 7:00 PM</p>
//               <p className="small mb-1">Saturday: 7:00 AM - 6:00 PM</p>
//               <p className="small">Sunday: 8:00 AM - 4:00 PM</p>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default TemplatePreview;


import React from 'react';
// import Calculators from "../industries/financial-advisors/Calculators";
import HeroSection from "../industries/financial-advisors/HeroSection";
import ServicesSection from "../industries/financial-advisors/ServicesList";
import AboutSection from "../industries/financial-advisors/AboutSection";
import ContactSection from "../industries/financial-advisors/ContactSection";
import Resources from "../industries/financial-advisors/Resources";
import Calculators from "../industries/financial-advisors/Calculators";
import Layout from "../industries/financial-advisors/Layout";
import Chatbot from "../industries/financial-advisors/Chatbot";


// interface TemplatePreviewProps {
//   templateId: number;
//   templateName: string;
// }

const TemplatePreview = ({ templateId, templateName }) => {  const renderTemplate = () => {
    switch (templateId) {
      case 2: // Sugar & Script
        return (
          <div style={{ 
            fontFamily: 'Georgia, serif', 
            backgroundColor: '#fef7ed', 
            minHeight: '100vh',
            width: '100%',
            margin: 0,
            padding: 0
          }}>
            {/* Header */}
            <header style={{ 
              backgroundColor: '#f97316', 
              color: 'white', 
              padding: '1rem 2rem',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
              boxSizing: 'border-box'
            }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ 
                  width: '40px', 
                  height: '40px', 
                  backgroundColor: '#ea580c', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  marginRight: '12px',
                  fontWeight: 'bold'
                }}>AB</div>
                <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Artisan Bakehouse</span>
              </div>
              <nav style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Home</a>
                <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Menu</a>
                <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Custom Cakes</a>
                <a href="#" style={{ color: 'white', textDecoration: 'none' }}>About</a>
                <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Contact</a>
                <div style={{ 
                  backgroundColor: '#ea580c', 
                  padding: '0.5rem 1rem', 
                  borderRadius: '20px',
                  fontSize: '0.9rem'
                }}>Cart (3)</div>
              </nav>
            </header>

            {/* Hero Section */}
            <section style={{ 
              backgroundImage: 'url(https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=1200)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '500px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              textAlign: 'center',
              position: 'relative',
              width: '100%'
            }}>
              <div style={{ 
                backgroundColor: 'rgba(0,0,0,0.5)', 
                padding: '3rem', 
                borderRadius: '10px',
                maxWidth: '600px'
              }}>
                <h1 style={{ fontSize: '3rem', marginBottom: '1rem', fontWeight: 'bold' }}>Handcrafted with Love</h1>
                <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>Fresh baked goods made daily with the finest ingredients</p>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                  <button style={{ 
                    backgroundColor: '#f97316', 
                    color: 'white', 
                    padding: '1rem 2rem', 
                    border: 'none', 
                    borderRadius: '5px',
                    fontSize: '1rem',
                    cursor: 'pointer'
                  }}>Order Online</button>
                  <button style={{ 
                    backgroundColor: 'transparent', 
                    color: 'white', 
                    padding: '1rem 2rem', 
                    border: '2px solid white', 
                    borderRadius: '5px',
                    fontSize: '1rem',
                    cursor: 'pointer'
                  }}>Custom Cakes</button>
                </div>
              </div>
            </section>
            

            {/* Featured Products */}
            <section style={{ padding: '4rem 2rem', width: '100%', boxSizing: 'border-box' }}>
              <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '3rem', color: '#7c2d12' }}>Today&apos;s Fresh Selections</h2>
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
                gap: '2rem',
                maxWidth: '1200px',
                margin: '0 auto'
              }}>
                {[
                  { name: 'Artisan Sourdough', price: '$8.99', image: 'https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=400' },
                  { name: 'Chocolate Croissants', price: '$3.50', image: 'https://images.pexels.com/photos/1028714/pexels-photo-1028714.jpeg?auto=compress&cs=tinysrgb&w=400' },
                  { name: 'Berry Tart', price: '$12.99', image: 'https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg?auto=compress&cs=tinysrgb&w=400' }
                ].map((product, index) => (
                  <div key={index} style={{ 
                    backgroundColor: 'white', 
                    borderRadius: '10px', 
                    overflow: 'hidden',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                  }}>
                    <img src={product.image} alt={product.name} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                    <div style={{ padding: '1.5rem' }}>
                      <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', color: '#7c2d12' }}>{product.name}</h3>
                      <p style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#f97316', marginBottom: '1rem' }}>{product.price}</p>
                      <button style={{ 
                        backgroundColor: '#f97316', 
                        color: 'white', 
                        padding: '0.75rem 1.5rem', 
                        border: 'none', 
                        borderRadius: '5px',
                        width: '100%',
                        cursor: 'pointer'
                      }}>Add to Cart</button>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* About Section */}
            <section style={{ backgroundColor: '#fed7aa', padding: '4rem 2rem', width: '100%', boxSizing: 'border-box' }}>
              <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', color: '#7c2d12' }}>Our Story</h2>
                <p style={{ fontSize: '1.2rem', lineHeight: '1.8', marginBottom: '2rem', color: '#7c2d12' }}>
                  For over 30 years, Artisan Bakehouse has been crafting exceptional baked goods using traditional methods and the finest ingredients.
                </p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', marginTop: '2rem' }}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#f97316' }}>30+</div>
                    <div style={{ color: '#7c2d12' }}>Years Experience</div>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#f97316' }}>500+</div>
                    <div style={{ color: '#7c2d12' }}>Daily Customers</div>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#f97316' }}>50+</div>
                    <div style={{ color: '#7c2d12' }}>Fresh Items Daily</div>
                  </div>
                </div>
              </div>
            </section>

            {/* Testimonials */}
            <section style={{ padding: '4rem 2rem', width: '100%', boxSizing: 'border-box' }}>
              <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '3rem', color: '#7c2d12' }}>What Our Customers Say</h2>
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
                gap: '2rem',
                maxWidth: '1000px',
                margin: '0 auto'
              }}>
                {[
                  { name: 'Sarah Johnson', text: 'Best croissants in the city! Fresh and buttery every time.', rating: 5 },
                  { name: 'Mike Chen', text: 'Their custom wedding cake was absolutely perfect. Highly recommend!', rating: 5 },
                  { name: 'Emma Davis', text: 'Love the sourdough bread. Been coming here for years!', rating: 5 }
                ].map((testimonial, index) => (
                  <div key={index} style={{ 
                    backgroundColor: 'white', 
                    padding: '2rem', 
                    borderRadius: '10px',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                    textAlign: 'center'
                  }}>
                    <div style={{ color: '#f97316', marginBottom: '1rem' }}>
                      {'★'.repeat(testimonial.rating)}
                    </div>
                    <p style={{ fontStyle: 'italic', marginBottom: '1rem', color: '#7c2d12' }}>&quot;{testimonial.text}&quot;</p>
                    <div style={{ fontWeight: 'bold', color: '#7c2d12' }}>- {testimonial.name}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* Footer */}
            <footer style={{ backgroundColor: '#7c2d12', color: 'white', padding: '3rem 2rem', width: '100%', boxSizing: 'border-box' }}>
              <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                <div>
                  <h3 style={{ marginBottom: '1rem' }}>Contact Us</h3>
                  <p>123 Baker Street</p>
                  <p>Sweet City, SC 12345</p>
                  <p>Phone: (555) 123-BAKE</p>
                  <p>Email: hello@artisanbakehouse.com</p>
                </div>
                <div>
                  <h3 style={{ marginBottom: '1rem' }}>Store Hours</h3>
                  <p>Monday - Friday: 6:00 AM - 8:00 PM</p>
                  <p>Saturday: 7:00 AM - 9:00 PM</p>
                  <p>Sunday: 8:00 AM - 6:00 PM</p>
                </div>
                <div>
                  <h3 style={{ marginBottom: '1rem' }}>Follow Us</h3>
                  <div style={{ display: 'flex', gap: '1rem' }}>
                    <a href="#" style={{ color: 'white' }}>Facebook</a>
                    <a href="#" style={{ color: 'white' }}>Instagram</a>
                    <a href="#" style={{ color: 'white' }}>Twitter</a>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        );

      case 3: // HarvestCart
        return (
          <div style={{ 
            fontFamily: 'Arial, sans-serif', 
            backgroundColor: '#f0fdf4', 
            minHeight: '100vh',
            width: '100%',
            margin: 0,
            padding: 0
          }}>
            {/* Header */}
            <header style={{ 
              backgroundColor: '#16a34a', 
              color: 'white', 
              padding: '1rem 2rem',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
              boxSizing: 'border-box'
            }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ 
                  width: '40px', 
                  height: '40px', 
                  backgroundColor: '#15803d', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  marginRight: '12px',
                  fontWeight: 'bold'
                }}>HC</div>
                <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>HarvestCart</span>
              </div>
              <nav style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Fresh Produce</a>
                <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Dairy</a>
                <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Pantry</a>
                <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Deals</a>
                <div style={{ 
                  backgroundColor: '#15803d', 
                  padding: '0.5rem 1rem', 
                  borderRadius: '20px',
                  fontSize: '0.9rem'
                }}>Cart (7)</div>
                <button style={{ 
                  backgroundColor: '#22c55e', 
                  color: 'white', 
                  padding: '0.5rem 1rem', 
                  border: 'none', 
                  borderRadius: '5px',
                  cursor: 'pointer'
                }}>Order Now</button>
              </nav>
            </header>

            {/* Hero Section */}
            <section style={{ 
              backgroundImage: 'url(https://images.pexels.com/photos/264537/pexels-photo-264537.jpeg?auto=compress&cs=tinysrgb&w=1200)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '400px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              textAlign: 'center',
              position: 'relative',
              width: '100%'
            }}>
              <div style={{ 
                backgroundColor: 'rgba(0,0,0,0.6)', 
                padding: '3rem', 
                borderRadius: '10px',
                maxWidth: '600px'
              }}>
                <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', fontWeight: 'bold' }}>Fresh. Local. Delivered.</h1>
                <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>Get farm-fresh groceries delivered to your door in under 2 hours</p>
                <button style={{ 
                  backgroundColor: '#16a34a', 
                  color: 'white', 
                  padding: '1rem 2rem', 
                  border: 'none', 
                  borderRadius: '5px',
                  fontSize: '1.1rem',
                  cursor: 'pointer'
                }}>Start Shopping</button>
              </div>
            </section>

            {/* Product Categories */}
            <section style={{ padding: '4rem 2rem', width: '100%', boxSizing: 'border-box' }}>
              <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '3rem', color: '#15803d' }}>Shop by Category</h2>
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
                gap: '2rem',
                maxWidth: '1000px',
                margin: '0 auto'
              }}>
                {[
                  { name: 'Fresh Produce', count: '150+ items', color: '#22c55e' },
                  { name: 'Dairy & Eggs', count: '80+ items', color: '#3b82f6' },
                  { name: 'Meat & Seafood', count: '60+ items', color: '#ef4444' },
                  { name: 'Pantry Staples', count: '200+ items', color: '#f59e0b' }
                ].map((category, index) => (
                  <div key={index} style={{ 
                    backgroundColor: 'white', 
                    padding: '2rem', 
                    borderRadius: '10px',
                    textAlign: 'center',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                    border: `3px solid ${category.color}`
                  }}>
                    <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', color: '#15803d' }}>{category.name}</h3>
                    <p style={{ color: '#6b7280', marginBottom: '1rem' }}>{category.count}</p>
                    <button style={{ 
                      backgroundColor: category.color, 
                      color: 'white', 
                      padding: '0.5rem 1rem', 
                      border: 'none', 
                      borderRadius: '5px',
                      cursor: 'pointer'
                    }}>Shop Now</button>
                  </div>
                ))}
              </div>
            </section>

            {/* Fresh Deals */}
            <section style={{ backgroundColor: '#dcfce7', padding: '4rem 2rem', width: '100%', boxSizing: 'border-box' }}>
              <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '3rem', color: '#15803d' }}>Today&apos;s Fresh Deals</h2>
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
                gap: '2rem',
                maxWidth: '1200px',
                margin: '0 auto'
              }}>
                {[
                  { name: 'Organic Bananas', price: '$2.99', oldPrice: '$3.99', image: 'https://images.pexels.com/photos/2872755/pexels-photo-2872755.jpeg?auto=compress&cs=tinysrgb&w=400', sale: '25% OFF' },
                  { name: 'Fresh Strawberries', price: '$4.99', oldPrice: '$6.99', image: 'https://images.pexels.com/photos/89778/strawberries-frisch-ripe-sweet-89778.jpeg?auto=compress&cs=tinysrgb&w=400', sale: '30% OFF' },
                  { name: 'Avocados (Pack of 4)', price: '$5.99', oldPrice: '$7.99', image: 'https://images.pexels.com/photos/557659/pexels-photo-557659.jpeg?auto=compress&cs=tinysrgb&w=400', sale: '25% OFF' }
                ].map((product, index) => (
                  <div key={index} style={{ 
                    backgroundColor: 'white', 
                    borderRadius: '10px', 
                    overflow: 'hidden',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                    position: 'relative'
                  }}>
                    <div style={{ 
                      position: 'absolute', 
                      top: '10px', 
                      right: '10px', 
                      backgroundColor: '#ef4444', 
                      color: 'white', 
                      padding: '0.25rem 0.5rem', 
                      borderRadius: '5px',
                      fontSize: '0.8rem',
                      fontWeight: 'bold'
                    }}>{product.sale}</div>
                    <img src={product.image} alt={product.name} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                    <div style={{ padding: '1.5rem' }}>
                      <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#15803d' }}>{product.name}</h3>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                        <span style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#16a34a' }}>{product.price}</span>
                        <span style={{ fontSize: '1rem', color: '#6b7280', textDecoration: 'line-through' }}>{product.oldPrice}</span>
                      </div>
                      <button style={{ 
                        backgroundColor: '#16a34a', 
                        color: 'white', 
                        padding: '0.75rem 1.5rem', 
                        border: 'none', 
                        borderRadius: '5px',
                        width: '100%',
                        cursor: 'pointer'
                      }}>Add to Cart</button>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Services */}
            <section style={{ padding: '4rem 2rem', width: '100%', boxSizing: 'border-box' }}>
              <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
                {[
                  { title: 'Fast Delivery', desc: 'Get your groceries delivered in under 2 hours', icon: '🚚' },
                  { title: 'Quality Guarantee', desc: 'Fresh products or your money back', icon: '✅' },
                  { title: 'Community First', desc: 'Supporting local farmers and producers', icon: '🌱' }
                ].map((service, index) => (
                  <div key={index} style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{service.icon}</div>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#15803d' }}>{service.title}</h3>
                    <p style={{ color: '#6b7280', lineHeight: '1.6' }}>{service.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Footer */}
            <footer style={{ backgroundColor: '#15803d', color: 'white', padding: '3rem 2rem', width: '100%', boxSizing: 'border-box' }}>
              <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                <div>
                  <h3 style={{ marginBottom: '1rem' }}>Contact Us</h3>
                  <p>456 Market Street</p>
                  <p>Fresh Valley, FV 67890</p>
                  <p>Phone: (555) 123-FRESH</p>
                  <p>Email: hello@harvestcart.com</p>
                </div>
                <div>
                  <h3 style={{ marginBottom: '1rem' }}>Delivery Hours</h3>
                  <p>Monday - Sunday: 7:00 AM - 10:00 PM</p>
                  <p>Same-day delivery available</p>
                  <p>Free delivery on orders over $50</p>
                </div>
                <div>
                  <h3 style={{ marginBottom: '1rem' }}>Follow Us</h3>
                  <div style={{ display: 'flex', gap: '1rem' }}>
                    <a href="#" style={{ color: 'white' }}>Facebook</a>
                    <a href="#" style={{ color: 'white' }}>Instagram</a>
                    <a href="#" style={{ color: 'white' }}>Twitter</a>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        );

      case 5: // Canvas Grid
        return (
          <div style={{ 
            fontFamily: 'Helvetica, Arial, sans-serif', 
            backgroundColor: '#f8fafc', 
            minHeight: '100vh',
            width: '100%',
            margin: 0,
            padding: 0
          }}>
            {/* Header */}
            <header style={{ 
              backgroundColor: '#1e40af', 
              color: 'white', 
              padding: '1rem 2rem',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
              boxSizing: 'border-box'
            }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ 
                  width: '40px', 
                  height: '40px', 
                  backgroundColor: '#1d4ed8', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  marginRight: '12px',
                  fontWeight: 'bold'
                }}>CG</div>
                <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Canvas Grid</span>
              </div>
              <nav style={{ display: 'flex', gap: '2rem' }}>
                <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Portfolio</a>
                <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Services</a>
                <a href="#" style={{ color: 'white', textDecoration: 'none' }}>About</a>
                <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Contact</a>
              </nav>
            </header>

            {/* Hero Section */}
            <section style={{ 
              backgroundImage: 'url(https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '500px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              textAlign: 'center',
              position: 'relative',
              width: '100%'
            }}>
              <div style={{ 
                backgroundColor: 'rgba(0,0,0,0.7)', 
                padding: '3rem', 
                borderRadius: '10px',
                maxWidth: '600px'
              }}>
                <h1 style={{ fontSize: '3rem', marginBottom: '1rem', fontWeight: 'bold',color: 'white' }}>Creative Excellence</h1>
                <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>Bringing your vision to life through innovative design</p>
                <button style={{ 
                  backgroundColor: '#1e40af', 
                  color: 'white', 
                  padding: '1rem 2rem', 
                  border: 'none', 
                  borderRadius: '5px',
                  fontSize: '1rem',
                  cursor: 'pointer'
                }}>View Portfolio</button>
              </div>
            </section>

            {/* Portfolio Grid */}
            <section style={{ padding: '4rem 2rem', width: '100%', boxSizing: 'border-box' }}>
              <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '3rem', color: '#1e40af' }}>Featured Work</h2>
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
                gap: '2rem',
                maxWidth: '1200px',
                margin: '0 auto'
              }}>
                {[
                  { title: 'Brand Identity Design', category: 'Branding', image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=400' },
                  { title: 'Website Redesign', category: 'Web Design', image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400' },
                  { title: 'Mobile App UI', category: 'UI/UX', image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400' },
                  { title: 'Print Campaign', category: 'Print Design', image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400' },
                  { title: 'Logo Design', category: 'Branding', image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400' },
                  { title: 'E-commerce Platform', category: 'Web Design', image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400' }
                ].map((project, index) => (
                  <div key={index} style={{ 
                    backgroundColor: 'white', 
                    borderRadius: '10px', 
                    overflow: 'hidden',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                    transition: 'transform 0.3s ease',
                    cursor: 'pointer'
                  }}>
                    <img src={project.image} alt={project.title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                    <div style={{ padding: '1.5rem' }}>
                      <div style={{ 
                        backgroundColor: '#dbeafe', 
                        color: '#1e40af', 
                        padding: '0.25rem 0.75rem', 
                        borderRadius: '15px',
                        fontSize: '0.8rem',
                        display: 'inline-block',
                        marginBottom: '1rem'
                      }}>{project.category}</div>
                      <h3 style={{ fontSize: '1.3rem', color: '#1e40af' }}>{project.title}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Services */}
            <section style={{ backgroundColor: '#f1f5f9', padding: '4rem 2rem', width: '100%', boxSizing: 'border-box' }}>
              <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '3rem', color: '#1e40af' }}>Our Services</h2>
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
                gap: '2rem',
                maxWidth: '1000px',
                margin: '0 auto'
              }}>
                {[
                  { title: 'Web Design', desc: 'Custom websites that convert visitors into customers', icon: '🌐' },
                  { title: 'Brand Identity', desc: 'Complete branding solutions from logo to guidelines', icon: '🎨' },
                  { title: 'UI/UX Design', desc: 'User-centered design for web and mobile applications', icon: '📱' }
                ].map((service, index) => (
                  <div key={index} style={{ 
                    backgroundColor: 'white', 
                    padding: '2rem', 
                    borderRadius: '10px',
                    textAlign: 'center',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                  }}>
                    <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{service.icon}</div>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#1e40af' }}>{service.title}</h3>
                    <p style={{ color: '#6b7280', lineHeight: '1.6' }}>{service.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Contact */}
            <section style={{ padding: '4rem 2rem', textAlign: 'center', width: '100%', boxSizing: 'border-box' }}>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', color: '#1e40af' }}>Ready to Start Your Project?</h2>
              <p style={{ fontSize: '1.2rem', marginBottom: '2rem', color: '#6b7280' }}>Let&apos;s create something amazing together</p>
              <button style={{ 
                backgroundColor: '#1e40af', 
                color: 'white', 
                padding: '1rem 2rem', 
                border: 'none', 
                borderRadius: '5px',
                fontSize: '1.1rem',
                cursor: 'pointer'
              }}>Get In Touch</button>
            </section>

            {/* Footer */}
            <footer style={{ backgroundColor: '#1e40af', color: 'white', padding: '2rem', textAlign: 'center', width: '100%', boxSizing: 'border-box' }}>
              <p>&copy; 2024 Canvas Grid. All rights reserved.</p>
            </footer>
          </div>
        );

      case 6: // ShopStack
        return (
          <div style={{ 
            fontFamily: 'Arial, sans-serif', 
            backgroundColor: '#f0f9ff', 
            minHeight: '100vh',
            width: '100%',
            margin: 0,
            padding: 0
          }}>
            {/* Header */}
            <header style={{ 
              backgroundColor: '#0891b2', 
              color: 'white', 
              padding: '1rem 2rem',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
              boxSizing: 'border-box'
            }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ 
                  width: '40px', 
                  height: '40px', 
                  backgroundColor: '#0e7490', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  marginRight: '12px',
                  fontWeight: 'bold'
                }}>SS</div>
                <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>ShopStack</span>
              </div>
              <nav style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Electronics</a>
                <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Fashion</a>
                <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Home</a>
                <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Sports</a>
                <div style={{ 
                  backgroundColor: '#0e7490', 
                  padding: '0.5rem 1rem', 
                  borderRadius: '20px',
                  fontSize: '0.9rem'
                }}>Cart (2)</div>
              </nav>
            </header>

            {/* Hero Section */}
            <section style={{ 
              backgroundImage: 'url(https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1200)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '400px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              textAlign: 'center',
              position: 'relative',
              width: '100%'
            }}>
              <div style={{ 
                backgroundColor: 'rgba(0,0,0,0.6)', 
                padding: '3rem', 
                borderRadius: '10px',
                maxWidth: '600px'
              }}>
                <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', fontWeight: 'bold' }}>Everything You Need</h1>
                <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>Shop millions of products with fast, free shipping</p>
                <button style={{ 
                  backgroundColor: '#0891b2', 
                  color: 'white', 
                  padding: '1rem 2rem', 
                  border: 'none', 
                  borderRadius: '5px',
                  fontSize: '1.1rem',
                  cursor: 'pointer'
                }}>Shop Now</button>
              </div>
            </section>

            {/* Featured Products */}
            <section style={{ padding: '4rem 2rem', width: '100%', boxSizing: 'border-box' }}>
              <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '3rem', color: '#0e7490' }}>Featured Products</h2>
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
                gap: '2rem',
                maxWidth: '1200px',
                margin: '0 auto'
              }}>
                {[
                  { name: 'Wireless Headphones', price: '$99.99', rating: 4.5, image: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=400' },
                  { name: 'Smart Watch', price: '$199.99', rating: 4.8, image: 'https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=400' },
                  { name: 'Laptop Stand', price: '$49.99', rating: 4.3, image: 'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=400' },
                  { name: 'Coffee Maker', price: '$79.99', rating: 4.6, image: 'https://images.pexels.com/photos/324028/pexels-photo-324028.jpeg?auto=compress&cs=tinysrgb&w=400' }
                ].map((product, index) => (
                  <div key={index} style={{ 
                    backgroundColor: 'white', 
                    borderRadius: '10px', 
                    overflow: 'hidden',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                  }}>
                    <img src={product.image} alt={product.name} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                    <div style={{ padding: '1.5rem' }}>
                      <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#0e7490' }}>{product.name}</h3>
                      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
                        <span style={{ color: '#fbbf24' }}>{'★'.repeat(Math.floor(product.rating))}</span>
                        <span style={{ marginLeft: '0.5rem', color: '#6b7280', fontSize: '0.9rem' }}>({product.rating})</span>
                      </div>
                      <p style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#0891b2', marginBottom: '1rem' }}>{product.price}</p>
                      <button style={{ 
                        backgroundColor: '#0891b2', 
                        color: 'white', 
                        padding: '0.75rem 1.5rem', 
                        border: 'none', 
                        borderRadius: '5px',
                        width: '100%',
                        cursor: 'pointer'
                      }}>Add to Cart</button>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Categories */}
            <section style={{ backgroundColor: '#e0f2fe', padding: '4rem 2rem', width: '100%', boxSizing: 'border-box' }}>
              <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '3rem', color: '#0e7490' }}>Shop by Category</h2>
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
                gap: '2rem',
                maxWidth: '1000px',
                margin: '0 auto'
              }}>
                {[
                  { name: 'Electronics', icon: '📱' },
                  { name: 'Fashion', icon: '👕' },
                  { name: 'Home & Garden', icon: '🏠' },
                  { name: 'Sports', icon: '⚽' },
                  { name: 'Books', icon: '📚' },
                  { name: 'Beauty', icon: '💄' }
                ].map((category, index) => (
                  <div key={index} style={{ 
                    backgroundColor: 'white', 
                    padding: '2rem', 
                    borderRadius: '10px',
                    textAlign: 'center',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                    cursor: 'pointer'
                  }}>
                    <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{category.icon}</div>
                    <h3 style={{ fontSize: '1.2rem', color: '#0e7490' }}>{category.name}</h3>
                  </div>
                ))}
              </div>
            </section>

            {/* Newsletter */}
            <section style={{ padding: '4rem 2rem', textAlign: 'center', width: '100%', boxSizing: 'border-box' }}>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#0e7490' }}>Stay Updated</h2>
              <p style={{ fontSize: '1.2rem', marginBottom: '2rem', color: '#6b7280' }}>Get the latest deals and new arrivals</p>
              <div style={{ maxWidth: '400px', margin: '0 auto', display: 'flex', gap: '1rem' }}>
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  style={{ 
                    flex: 1, 
                    padding: '1rem', 
                    border: '1px solid #d1d5db', 
                    borderRadius: '5px',
                    fontSize: '1rem'
                  }} 
                />
                <button style={{ 
                  backgroundColor: '#0891b2', 
                  color: 'white', 
                  padding: '1rem 2rem', 
                  border: 'none', 
                  borderRadius: '5px',
                  cursor: 'pointer'
                }}>Subscribe</button>
              </div>
            </section>

            {/* Footer */}
            <footer style={{ backgroundColor: '#0e7490', color: 'white', padding: '3rem 2rem', width: '100%', boxSizing: 'border-box' }}>
              <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                <div>
                  <h3 style={{ marginBottom: '1rem' }}>Customer Service</h3>
                  <p>Contact Us</p>
                  <p>Shipping Info</p>
                  <p>Returns</p>
                  <p>FAQ</p>
                </div>
                <div>
                  <h3 style={{ marginBottom: '1rem' }}>Company</h3>
                  <p>About Us</p>
                  <p>Careers</p>
                  <p>Press</p>
                  <p>Investors</p>
                </div>
                <div>
                  <h3 style={{ marginBottom: '1rem' }}>Connect</h3>
                  <div style={{ display: 'flex', gap: '1rem' }}>
                    <a href="#" style={{ color: 'white' }}>Facebook</a>
                    <a href="#" style={{ color: 'white' }}>Twitter</a>
                    <a href="#" style={{ color: 'white' }}>Instagram</a>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        );

      case 4: // ZenSpace
        return (
          <div style={{ 
            fontFamily: 'Arial, sans-serif', 
            backgroundColor: '#f0fdf4', 
            minHeight: '100vh',
            width: '100%',
            margin: 0,
            padding: 0
          }}>
            {/* Header */}
            <header style={{ 
              backgroundColor: '#059669', 
              color: 'white', 
              padding: '1rem 2rem',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
              boxSizing: 'border-box'
            }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ 
                  width: '40px', 
                  height: '40px', 
                  backgroundColor: '#047857', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  marginRight: '12px',
                  fontWeight: 'bold'
                }}>ZS</div>
                <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>ZenSpace</span>
              </div>
              <nav style={{ display: 'flex', gap: '2rem' }}>
                <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Services</a>
                <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Classes</a>
                <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Team</a>
                <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Contact</a>
              </nav>
            </header>

            {/* Hero Section */}
            <section style={{ 
              backgroundImage: 'url(https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=1200)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '500px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              textAlign: 'center',
              position: 'relative',
              width: '100%'
            }}>
              <div style={{ 
                backgroundColor: 'rgba(0,0,0,0.5)', 
                padding: '3rem', 
                borderRadius: '10px',
                maxWidth: '600px'
              }}>
                <h1 style={{ fontSize: '3rem', marginBottom: '1rem', fontWeight: 'bold' }}>Find Your Balance</h1>
                <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>Wellness services for mind, body, and spirit</p>
                <button style={{ 
                  backgroundColor: '#059669', 
                  color: 'white', 
                  padding: '1rem 2rem', 
                  border: 'none', 
                  borderRadius: '5px',
                  fontSize: '1rem',
                  cursor: 'pointer'
                }}>Book Session</button>
              </div>
            </section>

            {/* Services */}
            <section style={{ padding: '4rem 2rem', width: '100%', boxSizing: 'border-box' }}>
              <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '3rem', color: '#047857' }}>Our Services</h2>
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
                gap: '2rem',
                maxWidth: '1200px',
                margin: '0 auto'
              }}>
                {[
                  { name: 'Yoga Classes', price: '$25/session', desc: 'Hatha, Vinyasa, and Restorative yoga', image: 'https://images.pexels.com/photos/3822621/pexels-photo-3822621.jpeg?auto=compress&cs=tinysrgb&w=400' },
                  { name: 'Meditation', price: '$20/session', desc: 'Guided meditation and mindfulness training', image: 'https://images.pexels.com/photos/3822616/pexels-photo-3822616.jpeg?auto=compress&cs=tinysrgb&w=400' },
                  { name: 'Wellness Coaching', price: '$75/hour', desc: 'Personal wellness and lifestyle coaching', image: 'https://images.pexels.com/photos/3822647/pexels-photo-3822647.jpeg?auto=compress&cs=tinysrgb&w=400' }
                ].map((service, index) => (
                  <div key={index} style={{ 
                    backgroundColor: 'white', 
                    borderRadius: '10px', 
                    overflow: 'hidden',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                  }}>
                    <img src={service.image} alt={service.name} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                    <div style={{ padding: '1.5rem' }}>
                      <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', color: '#047857' }}>{service.name}</h3>
                      <p style={{ color: '#6b7280', marginBottom: '1rem' }}>{service.desc}</p>
                      <p style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#059669', marginBottom: '1rem' }}>{service.price}</p>
                      <button style={{ 
                        backgroundColor: '#059669', 
                        color: 'white', 
                        padding: '0.75rem 1.5rem', 
                        border: 'none', 
                        borderRadius: '5px',
                        width: '100%',
                        cursor: 'pointer'
                      }}>Book Now</button>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Team */}
            <section style={{ backgroundColor: '#dcfce7', padding: '4rem 2rem', width: '100%', boxSizing: 'border-box' }}>
              <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '3rem', color: '#047857' }}>Meet Our Team</h2>
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
                gap: '2rem',
                maxWidth: '1000px',
                margin: '0 auto'
              }}>
                {[
                  { name: 'Sarah Johnson', role: 'Yoga Instructor', experience: '8 years experience', image: 'https://images.pexels.com/photos/3822616/pexels-photo-3822616.jpeg?auto=compress&cs=tinysrgb&w=400' },
                  { name: 'Michael Chen', role: 'Meditation Guide', experience: '12 years experience', image: 'https://images.pexels.com/photos/3822647/pexels-photo-3822647.jpeg?auto=compress&cs=tinysrgb&w=400' },
                  { name: 'Emma Davis', role: 'Wellness Coach', experience: '6 years experience', image: 'https://images.pexels.com/photos/3822621/pexels-photo-3822621.jpeg?auto=compress&cs=tinysrgb&w=400' }
                ].map((member, index) => (
                  <div key={index} style={{ 
                    backgroundColor: 'white', 
                    borderRadius: '10px', 
                    overflow: 'hidden',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                    textAlign: 'center'
                  }}>
                    <img src={member.image} alt={member.name} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                    <div style={{ padding: '1.5rem' }}>
                      <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', color: '#047857' }}>{member.name}</h3>
                      <p style={{ color: '#059669', marginBottom: '0.5rem', fontWeight: 'bold' }}>{member.role}</p>
                      <p style={{ color: '#6b7280', fontSize: '0.9rem' }}>{member.experience}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Why Choose Us */}
            <section style={{ padding: '4rem 2rem', width: '100%', boxSizing: 'border-box' }}>
              <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '3rem', color: '#047857' }}>Why Choose ZenSpace?</h2>
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
                gap: '2rem',
                maxWidth: '1000px',
                margin: '0 auto'
              }}>
                {[
                  { title: 'Expert Instructors', desc: 'Certified professionals with years of experience', icon: '🧘‍♀️' },
                  { title: 'Peaceful Environment', desc: 'Serene space designed for relaxation and healing', icon: '🌿' },
                  { title: 'Personalized Approach', desc: 'Tailored sessions to meet your individual needs', icon: '💚' }
                ].map((feature, index) => (
                  <div key={index} style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{feature.icon}</div>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#047857' }}>{feature.title}</h3>
                    <p style={{ color: '#6b7280', lineHeight: '1.6' }}>{feature.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Contact & Hours */}
            <section style={{ backgroundColor: '#dcfce7', padding: '4rem 2rem', width: '100%', boxSizing: 'border-box' }}>
              <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
                <div style={{ textAlign: 'center' }}>
                  <h3 style={{ fontSize: '2rem', marginBottom: '2rem', color: '#047857' }}>Visit Our Studio</h3>
                  <p style={{ marginBottom: '1rem', color: '#6b7280' }}>123 Wellness Way</p>
                  <p style={{ marginBottom: '1rem', color: '#6b7280' }}>Peaceful Valley, PV 12345</p>
                  <p style={{ marginBottom: '1rem', color: '#6b7280' }}>Phone: (555) 123-ZEN1</p>
                  <p style={{ color: '#6b7280' }}>Email: hello@zenspace.com</p>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <h3 style={{ fontSize: '2rem', marginBottom: '2rem', color: '#047857' }}>Studio Hours</h3>
                  <p style={{ marginBottom: '0.5rem', color: '#6b7280' }}>Monday - Friday: 6:00 AM - 9:00 PM</p>
                  <p style={{ marginBottom: '0.5rem', color: '#6b7280' }}>Saturday: 7:00 AM - 8:00 PM</p>
                  <p style={{ marginBottom: '2rem', color: '#6b7280' }}>Sunday: 8:00 AM - 6:00 PM</p>
                  <button style={{ 
                    backgroundColor: '#059669', 
                    color: 'white', 
                    padding: '1rem 2rem', 
                    border: 'none', 
                    borderRadius: '5px',
                    fontSize: '1rem',
                    cursor: 'pointer'
                  }}>Schedule Visit</button>
                </div>
              </div>
            </section>

            {/* Footer */}
            <footer style={{ backgroundColor: '#047857', color: 'white', padding: '2rem', textAlign: 'center', width: '100%', boxSizing: 'border-box' }}>
              <p>&copy; 2024 ZenSpace Wellness Studio. All rights reserved.</p>
            </footer>
          </div>
        );
      case 1: // ifa website
        return (
        <div style={{ 
          fontFamily: 'Georgia, serif', 
          backgroundColor: '#fef7ed', 
          minHeight: '100vh',
          width: '100%',
          margin: 0,
          padding: 0
        }}>
          {/* Header */}
          {/* <header style={{ 
            backgroundColor: '#f97316', 
            color: 'white', 
            padding: '1rem 2rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            boxSizing: 'border-box'
          }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{ 
                width: '40px', 
                height: '40px', 
                backgroundColor: '#ea580c', 
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                marginRight: '12px',
                fontWeight: 'bold'
              }}>AB</div>
              <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Artisan Bakehouse</span>
            </div>
            <nav style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
              <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Home</a>
              <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Menu</a>
              <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Custom Cakes</a>
              <a href="#" style={{ color: 'white', textDecoration: 'none' }}>About</a>
              <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Contact</a>
              <div style={{ 
                backgroundColor: '#ea580c', 
                padding: '0.5rem 1rem', 
                borderRadius: '20px',
                fontSize: '0.9rem'
              }}>Cart (3)</div>
            </nav>
          </header> */}

         
          <Layout>
          <HeroSection />
      <ServicesSection />
      <Calculators/>
      <Resources/>
      <AboutSection />
      <ContactSection
        ifaData={{
          phone: "9876543210",
          email: "abc@example.com",
          location: "Mumbai",
        }}
      />
        <Chatbot /> 
      </Layout>
      
        

          {/* Footer */}
          <footer style={{ backgroundColor: '#ffc107', color: 'black', padding: '3rem 2rem', width: '100%', boxSizing: 'border-box' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
              <div>
                <h3 style={{ marginBottom: '1rem' }}>Contact Us</h3>
                <p>123 Baker Street</p>
                <p>Sweet City, SC 12345</p>
                <p>Phone: (555) 123-BAKE</p>
                <p>Email: hello@artisanbakehouse.com</p>
              </div>
              <div>
                <h3 style={{ marginBottom: '1rem' }}>Store Hours</h3>
                <p>Monday - Friday: 6:00 AM - 8:00 PM</p>
                <p>Saturday: 7:00 AM - 9:00 PM</p>
                <p>Sunday: 8:00 AM - 6:00 PM</p>
              </div>
              <div>
                <h3 style={{ marginBottom: '1rem' }}>Follow Us</h3>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <a href="#" style={{ color: 'black' }}>Facebook</a>
                  <a href="#" style={{ color: 'black' }}>Instagram</a>
                  <a href="#" style={{ color: 'black' }}>Twitter</a>
                </div>
              </div>
            </div>
          </footer>
        </div>
       );
      default:
        return <div>Template not found</div>;
    }
  };

  return (
    <div style={{ 
      width: '100%', 
      height: '100%', 
      overflow: 'auto',
      backgroundColor: '#f8f9fa'
    }}>
      {/* Header */}
      <div style={{ 
        position: 'sticky', 
        top: 0, 
        backgroundColor: 'white', 
        borderBottom: '1px solid #e5e7eb', 
        padding: '1rem 2rem',
        zIndex: 10,
        width: '100%',
        boxSizing: 'border-box'
      }}>
        <h4 style={{ margin: 0, color: '#374151', fontSize: '1.1rem', fontWeight: '600' }}>
          {templateName} - Interactive Preview
        </h4>
        <p style={{ margin: '0.25rem 0 0 0', color: '#6b7280', fontSize: '0.9rem' }}>
          Scroll to explore the full website design
        </p>
      </div>
      
      {/* Template Content */}
      <div style={{ 
        transform: 'scale(0.75)', 
        transformOrigin: 'top left',
        width: '133.33%',
        minHeight: 'calc(100vh - 80px)'
      }}>
        {renderTemplate()}
      </div>
    </div>
  );
};

export default TemplatePreview;