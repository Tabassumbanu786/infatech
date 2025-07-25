"use client"
import React, { useState } from 'react';
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



// const homepageTemplates = [
//   {
//     id: 1,
//     name: "For Financial Advisors",
//     subtitle: "Showcase your credentials, share market insights, and offer tools like SIP calculators to engage clients.",
//     description: "Tailored online presence for modern-day financial advisors and wealth planners.",
//     image: "https://images.pexels.com/photos/4386375/pexels-photo-4386375.jpeg?auto=compress&cs=tinysrgb&w=800",
//     features: ["Client Dashboard", "Service Pages", "Regulatory Disclaimers"],
//     style: "Professional",
//     path: "/ifa-website",
//     innerimage:"ifa.png"
//   },
//   {
//     id: 2,
//     name: "For Bakers",
//     subtitle: "Display your menu, take custom cake orders, and share daily specials with an easy-to-manage platform.",
//     description: "Warm, elegant designs for bakeries that want to look as good as they taste.",
//     image: "https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=800",
//     features: ["Custom Cake Forms", "Seasonal Specials", "Recipe Journal"],
//     style: "Elegant",
//     path: "/industries/bakers",
//     innerimage:"bakers1.png"
//   },
//   {
//     id: 3,
//     name: "For Grocery Stores",
//     subtitle: "Enable local customers to browse stock, place online orders, and track deliveries effortlessly.",
//     description: "Clean, local, and built for modern kirana stores and grocery businesses.",
//     image: "https://images.pexels.com/photos/264537/pexels-photo-264537.jpeg?auto=compress&cs=tinysrgb&w=800",
//     features: ["Inventory Dashboard", "Daily Stock Updates", "Local Delivery Tracker"],
//     style: "Modern",
//     path: "/industries/kirana",
//     innerimage:"kiranashop.png"
//   },
//   {
//     id: 4,
//     name: "For Coaches",
//     subtitle: "Highlight your programs, manage bookings, and build authority with testimonials and resources.",
//     description: "Peaceful, polished design for coaches, clinics, and fitness professionals.",
//     image: "https://images.pexels.com/photos/3822621/pexels-photo-3822621.jpeg?auto=compress&cs=tinysrgb&w=800",
//     features: ["Service Blocks", "Calendar Integration", "Team Profiles"],
//     style: "Wellness",
//     path: "/industries/coaches",
//     innerimage:"coaches.png"

//   },
//   {
//     id: 5,
//     name: "Custom Solutions",
//     subtitle: "From booking systems to niche marketplaces, we build platforms tailored to unique business models.",
//     description: "Bold, modern layouts for unique businesses and special requirements.",
//     image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800",
//     features: ["Custom Layouts", "E-commerce Support", "Flexible Blocks"],
//     style: "Creative",
//     path: "/industries/custom-solution",
//     innerimage:"canvas.png"
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
];


const Page = () => {
  const [selectedTemplate, setSelectedTemplate] = useState(false);
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
           {/* <TemplateGallery industry="All Industries" templates={homepageTemplates} /> */}
           {/* <TemplateGallery industry="All Industries" templates={homepageTemplates} disablePreviewModal={true} /> */}
           <TemplateGallery 
            industry="All Industries"
            templates={homepageTemplates} 
            selectedTemplate={selectedTemplate}
            setSelectedTemplate={setSelectedTemplate}
          />
           <Counter></Counter>
           {/* <CaseStudy></CaseStudy> */}
           <Testimonial3></Testimonial3>
           <Process2></Process2>
           <Faq2></Faq2>
           <Blog2></Blog2>
        </div>
    );
};

export default Page;