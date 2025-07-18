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
    name: "Sugar & Script",
    subtitle: "Bakehouse Elegance",
    description: "Warm, elegant design for bakeries that want to look as good as they taste.",
    image: "https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=800",
    features: ["Custom Cake Forms", "Seasonal Specials", "Recipe Journal"],
    style: "Elegant"
  },
  {
    id: 2,
    name: "HarvestCart",
    subtitle: "Grocery Go Digital",
    description: "Clean, local, and built for modern kirana stores and grocery businesses.",
    image: "https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=800",
    features: ["Inventory Dashboard", "Daily Stock Updates", "Local Delivery Tracker"],
    style: "Modern"
  },
  {
    id: 3,
    name: "Canvas Grid",
    subtitle: "Creative Portfolio",
    description: "Bold visuals. Smart structure. Perfect for designers, photographers & creators.",
    image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800",
    features: ["Interactive Galleries", "Video Reels", "Project Case Studies"],
    style: "Creative"
  },
  {
    id: 4,
    name: "ShopStack",
    subtitle: "Ecom Ready",
    description: "A powerful, minimal e-commerce template that sells your products — fast.",
    image: "https://images.pexels.com/photos/3769747/pexels-photo-3769747.jpeg?auto=compress&cs=tinysrgb&w=800",
    features: ["Product Display + Cart", "Secure Payments", "Mobile Optimized"],
    style: "E-commerce"
  },
  {
    id: 5,
    name: "ZenSpace",
    subtitle: "Wellness & More",
    description: "Peaceful, polished design for coaches, clinics, and fitness professionals.",
    image: "https://images.pexels.com/photos/3822621/pexels-photo-3822621.jpeg?auto=compress&cs=tinysrgb&w=800",
    features: ["Service Blocks", "Calendar Integration", "Team Profiles"],
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
                listTitle1="From internal operations to customer-facing platforms, we create tech that fits your business—not the other way around."
                listTitle2="Whether you're starting fresh or modernizing legacy systems, we make it seamless."                         
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