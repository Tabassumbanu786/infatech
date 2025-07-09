import Blog1 from '../../components/Blog/Blog1';
import BreadCumb from '../../components/Common/BreadCumb';
import Pricing from '../../components/Pricing/Pricing';

import React from 'react';

const page = () => {
    return (
        <div className='pricing-page'>
            <BreadCumb Title="Pricing"></BreadCumb>
            <Pricing></Pricing>
            <Blog1></Blog1>
        </div>
    );
};

export default page;