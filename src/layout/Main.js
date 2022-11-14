
import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/shared/Footer';
import Header from '../pages/shared/Header';

const Main = () => {
    return (
        <div className='bg-[#F4F4F3]'>
            <div className="w-[90%] md:w-[80%] lg:w-[85%] mx-auto">
                <Header />
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Main;