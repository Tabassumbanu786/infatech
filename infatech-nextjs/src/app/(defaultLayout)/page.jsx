import React from 'react';
import Hero3 from '../components/Banner/Hero3';
import Services3 from '../components/Services/Services3';
import About3 from '../components/About/About3';
import Counter from '../components/Counter/Counter';
import CaseStudy from '../components/CaseStudy/CaseStudy';
import Testimonial3 from '../components/Testimonial/Testimonial3';
import Process2 from '../components/Process/Process2';
import Faq2 from '../components/Faq/Faq2';
import Blog2 from '../components/Blog/Blog2';
import TemplateGallery from '../components/Gallery/TemplateGallery';
const homepageTemplates = [
    {
      id: 1,
      name: "Artisan Bakehouse",
      description: "Elegant, warm design showcasing handcrafted baked goods with online ordering and custom cake requests.",
      image: "https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: ["Custom Cake Orders", "Daily Specials Display", "Recipe Blog", "Photo Gallery", "Online Ordering", "Event Catering"],
      style: "Artisan"
    },
    {
      id: 2,
      name: "Fresh Market Pro",
      description: "Clean, modern design perfect for neighborhood grocery stores with online ordering capabilities.",
      image: "https://images.pexels.com/photos/264537/pexels-photo-264537.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: ["Online Ordering System", "Inventory Management", "Local Delivery Tracking", "Customer Loyalty Program", "Mobile-First Design", "Payment Integration"],
      style: "Modern"
    },
    {
      id: 3,
      name: "Creative Portfolio",
      description: "An artistic and dynamic layout ideal for designers, photographers, artists, or creative agencies.",
      image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: ["Image Galleries", "Video Integration", "Project Showcase", "Client Testimonials", "Social Media Links", "Custom Fonts"],
      style: "Creative"
    },
    {
      id: 4,
      name: "E-commerce Hub",
      description: "A robust and user-friendly design for online stores, featuring product listings and secure checkout.",
      image: "https://images.pexels.com/photos/3769747/pexels-photo-3769747.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: ["Product Catalog", "Shopping Cart", "Payment Gateway", "User Accounts", "Order Tracking", "Promotional Banners"],
      style: "E-commerce"
    },
    {
      id: 5,
      name: "Health & Wellness",
      description: "A clean and calming design suitable for health clinics, fitness studios, or wellness coaches.",
      image: "https://images.pexels.com/photos/3822621/pexels-photo-3822621.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: ["Service Descriptions", "Appointment Booking", "Team Bios", "FAQ Section", "Blog for Tips", "Testimonials"],
      style: "Wellness"
    }
  ];
  

const page = () => {
    return (
        <div className='home-page3'>
            <Hero3></Hero3>
            <Services3></Services3>
            <About3
                bgImg="/assets/images/home-3/about3-bg.png"
                MainImg="/assets/images/home-3/about-thu3.png"
                SubTitle="ABOUT INFATECH"
                Title="Tech Solutions Tailored to Your Business <span>Goals</span>"          
                Content="We help businesses go digital the smart way—by building systems aligned with your goals, budget, and future growth. No fluff. Just practical, reliable tech that gets the job done."
                BoxTitle1="Cloud-Ready,Scalable Architecture"
                BoxTitle2="Long-Term Tech Support & Upgrades"  
                listTitle1="✅ Clear Process — From discovery to launch, we break down complexity and keep you in the loop."
                listTitle2="✅ Business Aligned, Tech Strong — We speak business and write robust code that stands the test of time."    
                listTitle3="✅ Cloud-Native & Scalable — We build on trusted stacks: React, Node.js, Python, Django, AWS, Azure — ensuring security and growth readiness."
                listTitle4="✅ Long-Term Partnership — We don’t disappear after delivery; we support, upgrade, and scale with you."                          
           ></About3>
           <TemplateGallery industry="All Industries" templates={homepageTemplates} />
           <Counter></Counter>
           {/* <CaseStudy></CaseStudy> */}
           <Testimonial3></Testimonial3>
           <Process2></Process2>
           <Faq2></Faq2>
           <Blog2></Blog2>
        </div>
    );
};

export default page;