
import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/shared/Footer';
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