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
      image: "https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg?auto=compress&cs=tinysrgb&w=800",
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
      image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpg?auto=compress&cs=tinysrgb&w=800",
      features: ["Interactive Galleries", "Video Reels", "Project Case Studies"],
      style: "Creative"
    },
    {
      id: 4,
      name: "ShopStack",
      subtitle: "Ecom Ready",
      description: "A powerful, minimal e-commerce template that sells your products — fast.",
      image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpg?auto=compress&cs=tinysrgb&w=800",
      features: ["Product Display + Cart", "Secure Payments", "Mobile Optimized"],
      style: "E-commerce"
    },
    {
      id: 5,
      name: "ZenSpace",
      subtitle: "Wellness & More",
      description: "Peaceful, polished design for coaches, clinics, and fitness professionals.",
      image: "https://images.pexels.com/photos/270632/pexels-photo-270632.jpg?auto=compress&cs=tinysrgb&w=800",
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