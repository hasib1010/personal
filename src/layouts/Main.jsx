
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Navbar';
import Footer from './Footer';

const Main = () => {
    const theme = localStorage.getItem("theme");

    return (
        <>
            <div className='container mx-auto'>

                <Header />
                <Outlet />
                <Footer />
            </div>

        </>
    );
};

export default Main;
