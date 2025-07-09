import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer/Footer';

const layout = ({ children }) => {
    return (
        <div className='main-page-area2'>
            <Header></Header>
            {children}
            <Footer></Footer>
        </div>
    );
};

export default layout;