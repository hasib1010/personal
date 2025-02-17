
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Navbar';
import Footer from './Footer';

const Main = () => {
    const theme = localStorage.getItem("theme");

    return (
        <>
            <div className='relative'>


                <Header />
                <div className='min-h-[700px]'>
                    <Outlet />
                </div>
                <Footer />
            </div>
        </>
    );
};

export default Main;
