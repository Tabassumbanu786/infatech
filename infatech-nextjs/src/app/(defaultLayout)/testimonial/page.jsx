import Blog1 from '../../components/Blog/Blog1';

import Testimonial4 from '../../components/Testimonial/Testimonial4';

import React from 'react';

const page = () => {
    return (
        <div className='testimonial-page'>
            {/* <BreadCumb Title="Testimonial"></BreadCumb> */}
            <Testimonial4></Testimonial4>
            <Blog1></Blog1>
        </div>
    );
};

export default page;