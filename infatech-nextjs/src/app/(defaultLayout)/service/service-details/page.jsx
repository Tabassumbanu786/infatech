import ServiceDetail from '../../../components/ServiceDetail/ServiceDetail';
import BreadCumb from '../../../components/Common/BreadCumb';
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