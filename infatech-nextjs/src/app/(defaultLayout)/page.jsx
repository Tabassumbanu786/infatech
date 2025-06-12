import React from 'react';
import Hero3 from '../Components/Banner/Hero3';
import Services3 from '../Components/Services/Services3';
import About3 from '../Components/About/About3';
import Counter from '../Components/Counter/Counter';
import CaseStudy from '../Components/CaseStudy/CaseStudy';
import Testimonial3 from '../Components/Testimonial/Testimonial3';
import Process2 from '../Components/Process/Process2';
import Faq2 from '../Components/Faq/Faq2';
import Blog2 from '../Components/Blog/Blog2';

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