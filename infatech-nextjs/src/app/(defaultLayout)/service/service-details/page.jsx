import BreadCumb from '@/app/components/Common/BreadCumb';
import ServiceDetail from '@/app/components/ServiceDetail/ServiceDetail';
import React from 'react';

const page = () => {
    return (
        <div className='service-details'>
            {/* <BreadCumb Title="Turn Your Idea Into a Digital Product"></BreadCumb> */}
            <ServiceDetail></ServiceDetail>
        </div>
    );
};

export default page;