import { Footer } from 'flowbite-react';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../pages/shared/Header';

const Main = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;