// Bootstrap version of CoachesPage (converted from Tailwind)

import Head from 'next/head';
import { Clock, PeopleFill, Bullseye } from 'react-bootstrap-icons';
// import CTASection from '../components/CTASection';
// import TemplateGallery from '../components/TemplateGallery';

const CoachesPage = () => {
  const templates = [
    {
      id: 1,
      name: "Executive Excellence",
      description: "Professional, corporate-focused design for executive and business coaches with client portal integration.",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: ["Client Portal", "Progress Tracking", "Assessment Tools", "Resource Library", "Scheduling System", "Performance Analytics"],
      style: "Professional"
    },
    {
      id: 2,
      name: "Life Transformation",
      description: "Inspiring, motivational design for life coaches focusing on personal growth and transformation.",
      image: "https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: ["Success Stories", "Goal Setting Tools", "Meditation Resources", "Community Forum", "Progress Journal", "Motivational Content"],
      style: "Inspirational"
    },
    {
      id: 3,
      name: "Wellness Journey",
      description: "Calming, health-focused design for wellness and health coaches with holistic approach.",
      image: "https://images.pexels.com/photos/3822621/pexels-photo-3822621.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: ["Wellness Plans", "Nutrition Tracking", "Mindfulness Resources", "Habit Tracker", "Health Assessments", "Recipe Database"],
      style: "Wellness"
    },
    {
      id: 4,
      name: "Career Catalyst",
      description: "Dynamic, growth-oriented design for career coaches helping professionals advance their careers.",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: ["Resume Builder", "Interview Prep", "Skill Assessments", "Industry Insights", "Networking Tools", "Job Market Analysis"],
      style: "Dynamic"
    },
    {
      id: 5,
      name: "Mindful Mentor",
      description: "Zen-inspired, minimalist design for mindfulness and spiritual coaches emphasizing inner peace.",
      image: "https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: ["Meditation Library", "Mindfulness Exercises", "Spiritual Resources", "Reflection Tools", "Community Support", "Daily Practices"],
      style: "Minimalist"
    }
  ];

  return (
    <div className="container-fluid px-0">
      <Head>
        <title>Digital Solutions for Coaches</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css" rel="stylesheet" />
      </Head>

      {/* Hero Section */}
      <section className="py-5 text-center bg-light bg-gradient" style={{ background: 'linear-gradient(to bottom right, #f3e8ff, #e0e7ff)' }}>
        <div className="container">
          <div className="mb-4">
            <div className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3" style={{ backgroundColor: '#ff3b00', width: '64px', height: '64px' }}>
              <i className="bi bi-bullseye fs-4 text-white"></i>
            </div>
            <h1 className="display-4 fw-bold text-dark">Digital Solutions <span style={{ color: '#ff3b00' }}>for Coaches</span></h1>
            <p className="lead text-muted">Comprehensive technology solutions designed specifically for life coaches, business coaches, and professional mentors.</p>
            <div className="rounded p-3 d-inline-flex align-items-center gap-2" style={{ backgroundColor: 'rgba(255, 59, 0, 0.25)' }}>
              <i className="bi bi-clock-history" style={{ color: '#ff3b00' }}></i>
              <span className="fw-semibold" style={{ color: '#ff3b00' }}>Future-Ready Placeholder - Excellence in Development!</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-5 bg-white">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">What We&apos;re Planning for Coaches</h2>
          <div className="row g-4">
            {[
              'Client Management Portal',
              'Online Booking System',
              'Course & Resource Library',
              'Performance Analytics'
            ].map((title, idx) => (
              <div className="col-md-6" key={idx}>
                <div className="p-4 rounded" style={{ backgroundColor: 'rgba(255, 59, 0, 0.1)' }}>
                  <h5 style={{ color: '#ff3b00' }}>{title}</h5>
                  <p className="text-muted">
                    {title === 'Client Management Portal' && 'Comprehensive client tracking system with progress monitoring, session notes, and goal-setting capabilities.'}
                    {title === 'Online Booking System' && 'Advanced scheduling system with automated reminders, payment processing, and calendar integration.'}
                    {title === 'Course & Resource Library' && 'Digital library for sharing resources, worksheets, and creating structured coaching programs.'}
                    {title === 'Performance Analytics' && 'Detailed analytics on client progress, session effectiveness, and business growth metrics.'}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <TemplateGallery industry="Coaches" templates={templates} /> */}

      {/* Coaching Focus Form */}
      {/* <section className="py-5 bg-light">
        <div className="container text-center">
          <div className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3" style={{ backgroundColor: '#ff3b00', width: '64px', height: '64px' }}>
            <i className="bi bi-people-fill fs-4 text-white"></i>
          </div>
          <h2 className="fw-bold mb-3">Empowering Coaches to Empower Others</h2>
          <p className="text-muted mb-4">We're developing a comprehensive platform that understands the unique needs of coaches and helps you scale your practice while maintaining the personal connection that makes you effective.</p>
          <div className="bg-white p-4 rounded shadow mx-auto" style={{ maxWidth: '500px' }}>
            <form className="text-start">
              <div className="mb-3">
                <input type="text" placeholder="Your Coaching Business Name" className="form-control" />
              </div>
              <div className="mb-3">
                <input type="email" placeholder="Your Email Address" className="form-control" />
              </div>
              <div className="mb-3">
                <select className="form-select">
                  <option>Select Your Coaching Type</option>
                  <option>Life Coach</option>
                  <option>Business Coach</option>
                  <option>Career Coach</option>
                  <option>Health & Wellness Coach</option>
                  <option>Executive Coach</option>
                  <option>Other</option>
                </select>
              </div>
              <button type="submit" className="btn w-100 text-white fw-semibold" style={{ backgroundColor: '#ff3b00' }}>Join the Waitlist</button>
            </form>
          </div>
        </div>
      </section> */}

      {/* <CTASection 
        title="Need a Custom Solution Now?"
        subtitle="Can't wait for our coach-specific package? We can create a custom solution tailored to your coaching practice."
        buttonText="Schedule Custom Consultation"
      /> */}
    </div>
  );
};

export default CoachesPage;
