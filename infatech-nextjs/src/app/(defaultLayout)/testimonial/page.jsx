import Blog1 from '../../components/Blog/Blog1';
import Testimonial4 from '../../components/Testimonial/Testimonial4';
import React from 'react';

// 👇 Yeh metadata Next.js App Router ke liye hai
export const metadata = {
  title: "Testimonial Page",
  robots: {
    index: false,   // noindex
    follow: false,  // nofollow
  },
};

const Page = () => {
  return (
    <div className='testimonial-page'>
      {/* <BreadCumb Title="Testimonial"></BreadCumb> */}
      <Testimonial4 />
      <Blog1 />
    </div>
  );
};

export default Page;
