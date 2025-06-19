import About4 from '@/app/Components/About/About4';
import Blog2 from '@/app/Components/Blog/Blog2';
import Brand from '@/app/Components/Brand/Brand';
import BreadCumb from '@/app/Components/Common/BreadCumb';
import Team2 from '@/app/Components/Team/Team2';


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
                Content="We help businesses go digital the smart way—by building systems aligned with your goals, budget, and future growth. No fluff. Just practical, reliable tech that gets the job done."
                BoxTitle1="Cloud-Ready,Scalable Architecture"
                BoxTitle2="Long-Term Tech Support & Upgrades"  
                listTitle1="Clear Process — From discovery to launch, we break down complexity and keep you in the loop."
                listTitle2="Business Aligned, Tech Strong — We speak business and write robust code that stands the test of time."    
                listTitle3="Cloud-Native & Scalable — We build on trusted stacks: React, Node.js, Python, Django, AWS, Azure — ensuring security and growth readiness."
                listTitle4="Long-Term Partnership — We don’t disappear after delivery; we support, upgrade, and scale with you."
                               
           ></About4>
            <Team2></Team2>
            {/* <Project1 
                bgImage="/assets/images/inner/project-bg-3.png"
                ClassAdd="project-area style-two"
            ></Project1> */}
            {/* <Brand></Brand> */}
            <Blog2></Blog2>
        </div>
    );
};

export default page;