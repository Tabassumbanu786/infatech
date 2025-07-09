import Blog3 from '@/app/components/Blog/Blog3';
import BreadCumb from '@/app/components/Common/BreadCumb';
import React from 'react';

const page = () => {
    return (
        <div className='blog-page'>
            {/* <BreadCumb Title="Blog"></BreadCumb> */}
            <Blog3></Blog3>
        </div>
    );
};

export default page;