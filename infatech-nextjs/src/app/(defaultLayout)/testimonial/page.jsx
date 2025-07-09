import Blog1 from '@/app/components/Blog/Blog1';
import BreadCumb from '@/app/components/Common/BreadCumb';
import Testimonial4 from '@/app/components/Testimonial/Testimonial4';
import React from 'react';

const page = () => {
    return (
        <div className='testimonial-page'>
            <BreadCumb Title="Testimonial"></BreadCumb>
            <Testimonial4></Testimonial4>
            <Blog1></Blog1>
        </div>
    );
};

export default page;