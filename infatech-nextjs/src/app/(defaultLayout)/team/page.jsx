import Blog1 from '../../components/Blog/Blog1';

import Team2 from '../../components/Team/Team2';
import Testimonial2 from '../../components/Testimonial/Testimonial2';
import React from 'react';

const page = () => {
    return (
        <div className='team-page'>
            {/* <BreadCumb Title="Team"></BreadCumb> */}
            <Team2></Team2>
            <Testimonial2></Testimonial2>
            <Blog1></Blog1>
        </div>
    );
};

export default page;