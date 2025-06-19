import BreadCumb from '@/app/Components/Common/BreadCumb';
import ServiceDetail from '@/app/Components/ServiceDetail/ServiceDetail';
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