import BreadCumb from '../../components/Common/BreadCumbimport Faq from '@/app/components/Faq/Faq';
import React from 'react';

const page = () => {
    return (
        <div className='faq-page'>
            <BreadCumb Title="Faq"></BreadCumb>
            <Faq></Faq>
        </div>
    );
};

export default page;