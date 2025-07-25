"use client"
// import React from 'react';
import Hero3 from '../components/Banner/Hero3';
import Services3 from '../components/Services/Services3';
import About3 from '../components/About/About3';
import AboutUs from '../components/About/AboutUs';
import Counter from '../components/Counter/Counter';
import CaseStudy from '../components/CaseStudy/CaseStudy';
import Testimonial3 from '../components/Testimonial/Testimonial3';
import Process2 from '../components/Process/Process2';
import Faq2 from '../components/Faq/Faq2';
import Blog2 from '../components/Blog/Blog2';
import TemplateGallery from '../components/Gallery/TemplateGallery';
import React, { useState } from 'react';



// const homepageTemplates = [
//   {
//     id: 1,
//     name: "Sugar & Script",
//     subtitle: "Bakehouse Elegance",
//     description: "Warm, elegant design for bakeries that want to look as good as they taste.",
//     image: "https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=800",
//     features: ["Custom Cake Forms", "Seasonal Specials", "Recipe Journal"],
//     style: "Elegant",
//     path: "/bakers"
//   },
//   {
//     id: 2,
//     name: "HarvestCart",
//     subtitle: "Grocery Go Digital",
//     description: "Clean, local, and built for modern kirana stores and grocery businesses.",
//     image: "https://images.pexels.com/photos/264537/pexels-photo-264537.jpeg?auto=compress&cs=tinysrgb&w=800",
//     features: ["Inventory Dashboard", "Daily Stock Updates", "Local Delivery Tracker"],
//     style: "Modern",
//     path: "/kirana-stores"
//   },
//   {
//     id: 3,
//     name: "Canvas Grid",
//     subtitle: "Creative Portfolio",
//     description: "Bold visuals. Smart structure. Perfect for designers, photographers & creators.",
//     image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800",
//     features: ["Interactive Galleries", "Video Reels", "Project Case Studies"],
//     style: "Creative",
//     path: "/custom-solutions"
//   },
//   {
//     id: 4,
//     name: "ShopStack",
//     subtitle: "Ecom Ready",
//     description: "A powerful, minimal e-commerce template that sells your products — fast.",
//     image: "https://images.pexels.com/photos/3769747/pexels-photo-3769747.jpeg?auto=compress&cs=tinysrgb&w=800",
//     features: ["Product Display + Cart", "Secure Payments", "Mobile Optimized"],
//     style: "E-commerce",
//     path: "/custom-solutions"
//   },
//   {
//     id: 5,
//     name: "ZenSpace",
//     subtitle: "Wellness & More",
//     description: "Peaceful, polished design for coaches, clinics, and fitness professionals.",
//     image: "https://images.pexels.com/photos/3822621/pexels-photo-3822621.jpeg?auto=compress&cs=tinysrgb&w=800",
//     features: ["Service Blocks", "Calendar Integration", "Team Profiles"],
//     style: "Wellness",
//     path: "/coaches"
//   }
// ];


const homepageTemplates = [
  {
    id: 1,
    name: "Financial Advisors – AdvisorConnect",
    subtitle: "Showcase your credentials, share market insights, and offer tools like SIP calculators to engage clients.",
    description: "Tailored online presence for modern-day financial advisors and wealth planners.",
    image: "https://images.pexels.com/photos/4386375/pexels-photo-4386375.jpeg?auto=compress&cs=tinysrgb&w=800",
    features: ["Client Dashboard", "Service Pages", "Regulatory Disclaimers"],
    style: "Professional",
    path: "/ifa-website",
    innerimage:"ifa.png"
  },
  {
    id: 2,
    name: "Bakers – BakeSmart",
    subtitle: "Display your menu, take custom cake orders, and share daily specials with an easy-to-manage platform.",
    description: "Warm, elegant designs for bakeries that want to look as good as they taste.",
    image: "https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=800",
    features: ["Custom Cake Forms", "Seasonal Specials", "Recipe Journal"],
    style: "Elegant",
    path: "/industries/bakers",
    innerimage:"bakers1.png"
  },
  {
    id: 6,
    name: "E-commerce – ShopLaunch",
    subtitle: "Set up your online store, manage inventory, and accept secure payments with a ready-to-scale eCommerce platform.",
    description: "A powerful, minimal e-commerce template that sells your products — fast.",
    image: "https://images.pexels.com/photos/7667442/pexels-photo-7667442.jpeg?auto=compress&cs=tinysrgb&w=800",
    features: ["Product Display + Cart", "Secure Payments", "Mobile Optimized"],
    style: "E-commerce",
    path: "/custom-solutions",
    innerimage:"bakers1.png"
},
  {
    id: 3,
    name: "Grocery Stores – GroceryHub",
    subtitle: "Enable local customers to browse stock, place online orders, and track deliveries effortlessly.",
    description: "Clean, local, and built for modern kirana stores and grocery businesses.",
    image: "https://images.pexels.com/photos/264537/pexels-photo-264537.jpeg?auto=compress&cs=tinysrgb&w=800",
    features: ["Inventory Dashboard", "Daily Stock Updates", "Local Delivery Tracker"],
    style: "Modern",
    path: "/industries/kirana",
    innerimage:"kiranashop.png"
  },

  {
    id: 4,
    name: "Coaches – CoachPro",
    subtitle: "Highlight your programs, manage bookings, and build authority with testimonials and resources.",
    description: "Peaceful, polished design for coaches, clinics, and fitness professionals.",
    image: "https://images.pexels.com/photos/3822621/pexels-photo-3822621.jpeg?auto=compress&cs=tinysrgb&w=800",
    features: ["Service Blocks", "Calendar Integration", "Team Profiles"],
    style: "Wellness",
    path: "/industries/coaches",
    innerimage:"coaches.png"

  },
  
  {
    id: 5,
    name: "Custom Solutions – CustomEdge",
    subtitle: "From booking systems to niche marketplaces, we build platforms tailored to unique business models.",
    description: "Bold, modern layouts for unique businesses and special requirements.",
    image: "https://images.pexels.com/photos/16129724/pexels-photo-16129724.jpeg?auto=compress&cs=tinysrgb&w=800",
    features: ["Custom Layouts", "E-commerce Support", "Flexible Blocks"],
    style: "Creative",
    path: "/industries/custom-solution",
    innerimage:"canvas.png"
  }
//   ,
//   {
//     id: 6,
//     name: "IFA Website",
//     subtitle: "Showcase your credentials, share market insights, and offer tools like SIP calculators to engage clients.",
//     description: "Modern design for local Kirana stores with online ordering, digital payments, and delivery tracking.",
//     image: "https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg",
//     features: [
//         "Personalized planning for every life stage",
//         "Goal-based investment strategies",
//         "Regular portfolio reviews",
//         "Transparent, jargon-free advice",
//         "Hassle-free online service & updates"
//     ],
//     style: "Modern",
//     path: "/industries/custom-solution",
//     innerimage:"canvas.png"
// }
];


const Page = () => {
  const [selectedTemplate, setSelectedTemplate] = useState(false);
  return (
      <div className='home-page3'>
          <Hero3 />
          <Services3 />
          <About3
              bgImg="/assets/images/home-3/about3-bg.png"
              MainImg="/assets/images/home-3/about-thu3.png"
              SubTitle="ABOUT INFATECH"
              Title="Tech Solutions Tailored to Your Business <span>Goals</span>"          
              Content="Infatech Software Technologies was founded with a simple mission: to help businesses build reliable, scalable, and user-friendly software that actually moves them forward. In an industry crowded with flashy promises and cookie-cutter solutions, we stand out for one reason — we build what works for you."
              BoxTitle1="Cloud-Ready,Scalable Architecture"
              BoxTitle2="Long-Term Tech Support & Upgrades"  
              listTitle1="From internal operations to customer-facing platforms, we create tech that fits your business—not the other way around."
              listTitle2="Whether you're starting fresh or modernizing legacy systems, we make it seamless."                         
          />
          <AboutUs />
          <TemplateGallery 
            industry="All Industries"
            templates={homepageTemplates} 
            selectedTemplate={selectedTemplate}
            setSelectedTemplate={setSelectedTemplate}
          />
          <Counter />
          <Testimonial3 />
          <Process2 />
          <Faq2 />
          <Blog2 />
      </div>
  );
};

export default Page;


// export default page;