// Bootstrap version of BakersPage (converted from Tailwind)

import Head from 'next/head';
// import CTASection from '../components/CTASection';
// import TemplateGallery from '../components/TemplateGallery';
import { Clock, EggFill } from 'react-bootstrap-icons';

const BakersPage = () => {
  const templates = [
    {
      id: 1,
      name: "Fresh Market Pro",
      description: "Clean, modern design perfect for neighborhood grocery stores with online ordering capabilities.",
      image: "https://images.pexels.com/photos/264537/pexels-photo-264537.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: ["Online Ordering System", "Inventory Management", "Local Delivery Tracking", "Customer Loyalty Program", "Mobile-First Design", "Payment Integration"],
      style: "Modern"
    },
    {
      id: 2,
      name: "Community Corner",
      description: "Warm, community-focused design that emphasizes local connections and neighborhood service.",
      image: "https://images.pexels.com/photos/1005638/pexels-photo-1005638.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: ["Community Board", "Local Events Calendar", "Neighborhood News", "Family-Friendly Layout", "Easy Navigation", "Social Media Integration"],
      style: "Community"
    },
    {
      id: 3,
      name: "Express Convenience",
      description: "Fast-loading, efficient design optimized for quick shopping and express checkout.",
      image: "https://images.pexels.com/photos/2292837/pexels-photo-2292837.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: ["Quick Order System", "Express Checkout", "Real-time Stock Updates", "Speed-Optimized", "Minimal Design", "One-Click Reorder"],
      style: "Minimal"
    },
    {
      id: 4,
      name: "Traditional Bazaar",
      description: "Rich, colorful design that celebrates traditional shopping culture with modern functionality.",
      image: "https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: ["Cultural Design Elements", "Multi-language Support", "Traditional Payment Methods", "Family Business Story", "Product Categories", "Seasonal Promotions"],
      style: "Traditional"
    },
    {
      id: 5,
      name: "Smart Store Hub",
      description: "Tech-forward design with advanced features for the modern convenience store experience.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: ["AI-Powered Recommendations", "Smart Inventory Alerts", "Advanced Analytics", "Customer Insights", "Automated Marketing", "Integration Hub"],
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

      {/* <TemplateGallery industry="Bakers" templates={templates} /> */}

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
