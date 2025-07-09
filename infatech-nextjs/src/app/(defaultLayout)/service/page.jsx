
import Blog1 from '../../components/Blog/Blog1';
import BreadCumb from '../../components/Common/BreadCumb';
import Services4 from '../../components/Services/Services4';
import Team1 from '../../components/Team/Team1';
import React from 'react';

const page = () => {
    return (
        <div className='service-page'>
            {/* <BreadCumb Title="Services"></BreadCumb> */}
            <Services4></Services4>
            <Team1></Team1>
            <Blog1></Blog1>
        </div>
    );
};

export default page;