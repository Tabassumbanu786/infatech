import BreadCumb from '../../components/Common/BreadCumbimport ProjectDetail from '@/app/components/ProjectDetail/ProjectDetail';
import React from 'react';

const page = () => {
    return (
        <div className='project-detail'>
            <BreadCumb Title="Project Details"></BreadCumb>
            <ProjectDetail></ProjectDetail>
        </div>
    );
};

export default page;