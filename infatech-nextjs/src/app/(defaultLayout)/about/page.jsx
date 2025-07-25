import About4 from '../../components/About/About4';
// import About4 from '../../components/About/About4';
import AboutUs from '../../components/About/AboutUs';
import Blog2 from '../../components/Blog/Blog2';
import Team2 from '../../components/Team/Team2';


import React from 'react';

const page = () => {
    return (
        <div className='about-page'>
            {/* <BreadCumb Title="About Us"></BreadCumb> */}
            <About4
                bgImg="/assets/images/home-3/about3-bg.png"
                MainImg="/assets/images/home-3/about-thu3.png"
                SubTitle="ABOUT INFATECH"
                Title="Tech Solutions Tailored to Your Business <span>Goals</span>"          
                Content="Infatech Software Technologies was founded with a simple mission: to help businesses build reliable, scalable, and user-friendly software that actually moves them forward. In an industry crowded with flashy promises and cookie-cutter solutions, we stand out for one reason — we build what works for you."
                BoxTitle1="Cloud-Ready,Scalable Architecture"
                BoxTitle2="Long-Term Tech Support & Upgrades"  
                listTitle1="Clear Process — From discovery to launch, we break down complexity and keep you in the loop."
                listTitle2="Business Aligned, Tech Strong — We speak business and write robust code that stands the test of time."    
                listTitle3="Cloud-Native & Scalable — We build on trusted stacks: React, Node.js, Python, Django, AWS, Azure — ensuring security and growth readiness."
                listTitle4="Long-Term Partnership — We don’t disappear after delivery; we support, upgrade, and scale with you."
                               
           ></About4>
            {/* <Team2></Team2> */}
            <AboutUs/>
            {/* <Project1 
                bgImage="/assets/images/inner/project-bg-3.png"
                ClassAdd="project-area style-two"
            ></Project1> */}
            {/* <Brand></Brand> */}
            <Blog2/>
        </div>
    );
};

export default page;