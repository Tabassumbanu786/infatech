import Blog4 from '@/app/components/Blog/Blog4';
import BreadCumb from '@/app/components/Common/BreadCumb';
import React from 'react';

const page = () => {
    return (
        <div className='blog-sidebar'>
            <BreadCumb Title="Blog Sidebar"></BreadCumb>
            <Blog4></Blog4>
        </div>
    );
};

export default page;