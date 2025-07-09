import BreadCumb from '@/app/components/Common/BreadCumb';
import Projecr3 from '@/app/components/Project/Projecr3';
import React from 'react';

const page = () => {
    return (
        <div className='project-page'>
            <BreadCumb Title="Project"></BreadCumb>
            <Projecr3></Projecr3>
        </div>
    );
};

export default page;