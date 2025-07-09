import BreadCumb from '@/app/components/Common/BreadCumb';
import Contact1 from '@/app/components/Contact/Contact1';
import MapForm from '@/app/components/Map/Mapform';
import React from 'react';

const page = () => {
    return (
        <div className='contact-page'>
            <BreadCumb Title="Contact"></BreadCumb>
            <Contact1></Contact1>
            {/* <MapForm></MapForm> */}
        </div>
    );
};

export default page;